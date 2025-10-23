# Processing Data Files

**File Processing Directives** |  **__**  
---|---  
  
The following PxPlus directives are used for handing file input and output:

**[INPUT](../../../directives/input.md)** |  Issues prompts to the screen and processes responses. The channel referenced is normally an I/O device, but an indexed file may be used.  
---|---  
**[PRINT](../../../directives/print.md)** |  Formats and outputs printable data to a file, printer, or display device. This instruction also processes mnemonics and positioning information.  
**[READ](../../../directives/read.md)** |  Loads data from a file. The parameter list must contain only variables that are loaded from the record read. These receive the contents of each of the record fields in the order in which they are specified in the parameter list. See **[Processing Records](Processing%20Records.md)**. As an alternative to the**READ** directive, use**FIND** to read the file without moving the pointer if the record is not found. The**EXTRACT** directive reads the file and automatically locks the record until the next I/O operation on the channel.  
**[FIND](../../../directives/find.md)** |  Reads data from a file where data is split into fields (separated by current delimiter or defined by embedded format, headers, etc.), with the contents of the first field placed in variable 1, the second into variable 2, and so on. See **[Processing Records](Processing%20Records.md)**.  
**[EXTRACT](../../../directives/extract.md)** |  Reads data from file where data is split into fields (separated by current delimiter or defined by current delimiter or in an embedded IOList format), with the contents of the first field placed in variable 1, the second into variable 2, and so on. This locks the record until the next I/O operation on the channel. See **[Processing Records](Processing%20Records.md)**.  
**[WRITE](../../../directives/write.md)** |  Writes a record to a file. In the case of indexed or keyed files, this may rewrite existing records. The values specified in the parameter list are written into consecutive fields, each separated by a field separator (Hex $8A$) or formatted as per format specifications in the list. See **[Processing Records](Processing%20Records.md)**.  
**[REMOVE](../../../directives/remove.md)** |  Deletes a record from a keyed file. No parameter list required.  
  
These directives use similar syntax and options, which are described below. You can also query and read records from a specified data file using the directive **[SELECT..FROM..NEXT RECORD](../../../directives/select.md)**.

See **[Directives](../../../directives.md)** for an alphabetically arranged list of all PxPlus directives.

## Format

All**INPUT** ,**PRINT** ,**READ** ,**FIND** ,**EXTRACT** ,**REMOVE** and**WRITE** statements have a common format for processing data files:

> _directive_ ( _chan_ [, _fileopt_ ])[ _varlist_ ]

**_Where:_**

_directive_ |  **[INPUT](../../../directives/input.md)**, **[PRINT](../../../directives/print.md)**, **[READ](../../../directives/read.md)**, **[FIND](../../../directives/find.md)**, **[EXTRACT](../../../directives/extract.md)**, **[WRITE](../../../directives/write.md)** or **[REMOVE](../../../directives/remove.md)** directive  
---|---  
_chan_ |  Channel/logical file number of target file. See **[Processing Data Files](Overview.md)**.  
_fileopt_ |  Supported file options. See **[Options](File%20Processing%20Directives.htm#options)** below.  
_varlist_ |  Comma-separated list of variables, literals, expressions, or mnemonics to be processed. See **[Input and Output Parameters](Input%20and%20Output%20Parameters.md)**.  
  
See **[Data Files](../Data%20Files/Overview.md)** for details on how these file processing directives are used for handling the different types of files and record formats.

##  Options

The following file options are used with various I/O directives to fine-tune the operation and redirect processing:

**BSY=**_stmtref_ |  Statement number to transfer to if the record is currently locked by another process.  
---|---  
**DOM=**_stmtref_ |  Indicates the statement number (_stmtref_) to transfer to if the record referenced by the directive is either missing (in the case of**READ**) or already exists (on**WRITE**).  
**END=**_stmtref_ |  Traps the end of the file on a **[READ](../../../directives/read.md)** (Error #2: END-OF-FILE on read or File full on write). On a **[WRITE](../../../directives/write.md)** directive, causes a transfer if the output file has reached its maximum size or no more file space is available.  
**ERR=**_stmtref_ |  Indicates the statement (_stmtref_) to transfer to if an error occurs during processing of the directive.  
**IND=**_num_ |  Specifies record index value used to uniquely identify a record in indexed and keyed files.  
  
For fixed length keyed files,_num_ represents an offset into the data file (first record has an index of 0, second is 1, and so on).  
  
For variable length keyed files,_num_ represents a logical page address and record index within that page. Used with the**INPUT** directive,**IND=**_num_ sets the starting position (column number) of the cursor in the input field. When processing a file in Binary mode via the**ISZ=** option,**IND=**_num_ identifies the record address to access when the file is opened.  
**KEY=**_string$_ |  Specifies the record key value used to uniquely identify a record.  
**LEN=**_num_ |  Limits the length of the input data. If this option is specified in an**INPUT** statement, only the number of characters specified by _num_ will be read.  
**KNO=**_num_ | _name$_ |  Access key number (_num_) or name (_name$_), where _num_ is 0 based (0 - 15 for VLR/FLR files; 0 - 255 for EFF files).  
**RNO=**_num_ |  Specifies the record number within the file based on actual key sequence position; first record in the file is RNO#1.  
  
PxPlus checks that any options selected match the directive. The order of the options is irrelevant; inconsistent options (such as having both**IND=** and**KEY=**) are rejected. In the case of multiple error transfers (**DOM=** ,**END=,** and**ERR=**),**DOM=** and**END=** take precedence.

See **[File Options](../../../appendix/input~output_and_control_options.htm#Mark1)** for a list of common input/output file options.

## SELECT..FROM..NEXT RECORD

Use the **[SELECT](../../../directives/select.md)** directive to open, read and query records from the specified data file or just to read data from a specified file number. As each record is read, PxPlus processes any logic included between the**SELECT** and**NEXT RECORD** keywords in the statement. When PxPlus encounters**NEXT RECORD** with no records found for a nested **SELECT,** it will locate the corresponding**SELECT** statement.

If a**WHERE** clause is included, PxPlus will process only those records _where_ the condition is **_true_**.**BEGIN** and**END** are only supported for**KEYED** and***MEMORY*** files and for use with **[External Databases](../../Data%20Integration/External%20Databases/Overview.md)**.

> 0010 SELECT IOL=0100 FROM "CUST_FILE",KNO=1 BEGIN "ABC CO" END "NEW CO" WHERE CITY$="CLARENDON"  
>  0020 PRINT REC(IOL=0100)   
>  0030 NEXT RECORD   
>  0100 IOLIST CUST$, NAME$, ADDR1$, ADDR2$, CITY$, PROV$, POSTAL$, INV_DT$, AMT, TERMS, DUE_DT$   
>  0110 PRINT "DONE"; END

If PxPlus is instructed to exit the**SELECT** loop early (with an **[EXITTO](../../../directives/exitto.md)** directive), the file will be closed. **SELECT** can also be used to read data from tables in a SQL database.

See **[SELECT..FROM..NEXT RECORD](../../../directives/select.md)**.
