# Directives 

**EXTRACT** |  **_Read and Lock Data_**  
---|---  
  
##  Format

**EXTRACT[ RELEASE ]**(_filespec_[_,fileopt_])_varlist_

**_Where:_**

_filespec_ |  Can be a numeric expression indicating the open channel number to use or a string expression containing the pathname or table name (if string is prefixed by the keyword **TABLE**) of the file to use.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **BSY=**_stmtref_ __ |  Traps Error #0: Record/file busy  
---|---  
**DOM=**_stmtref_ __ |  Missing record transfer  
**END=**_stmtref_ __ |  End-of-File transfer  
**ERR=**_stmtref_ __ |  Error transfer  
**IND=**_num_ __ |  Record index  
**KEY=**_string$_ |  Record key  
**KNO=**_num_ | _name$_ |  File access key number (_num_) or name (_name$_)  
**REC=**_name$_ |  Record prefix (**REC=VIS(**_string$_**)** can also be used)  
**RNO=**_num_ __ |  Record number  
**RTY=**_num_ __ |  Number of retries (one-second intervals). This overrides the value defined by the **['WT'](../parameters/wt.md)** system parameter.  
**SIZ=**_num_ __ |  Number characters to read  
**TBL=**_stmtref_ |  Data translation table  
**TIM=**_num_ __ |  Maximum time-out value in integer seconds  
_varlist_ |  Comma**-** separated list of variables, literals or **IOL=** options.  
**RELEASE** |  Indicates that any pending record lock for the specified file (_filespec_) can be released. When this option is specified, no _varlist_ can be supplied and the only valid _fileopt_ is **ERR=**_stmtref_ _._  
  
_(The EXTRACT RELEASE directive was added in PxPlus v11.00.)  
(TABLE support was added in PxPlus 2018.)_

##  Description

Use **EXTRACT** to read data from the file you specify as the channel. When PxPlus reads the data, it is split into one or more fields (either separated by the current delimiter or in an embedded IOList format) with the contents of the first field placed into variable 1, the second field into variable 2, and so on.

PxPlus automatically converts numeric data when moving it into numeric variables while processing the **EXTRACT** directive. Numeric data converted during an **EXTRACT** directive does **_not_** use the **'DP'** (Decimal Point Symbol) or **'TH'** (Thousands Separator) system parameters for European decimal settings.

If you want a field to be skipped, use an *****  _(asterisk)_ as a placeholder for a variable name. If you specify more variables than there are fields in the record, PxPlus will initialize the additional variables to either 0 (if a numeric variable) or a null string (if a string variable). The **EXTRACT** directive advances the file position to the next record (or a record you can specify using the **KEY=** or **IND=** option). Use the **KNO=** option to change the current file access key.

#### **Note:**  
**EXTRACT** locks the record being read to prevent other users from using a **FIND** , **FIND RECORD** , **READ** , **READ RECORD** , **EXTRACT RECORD** or another **EXTRACT** to access it. This lock stays active until the next I/O request for the same file or until the file is closed.  
  
Using a **KEY=** option or **READ** , **FIND** or **EXTRACT** statement to retrieve the next record while a record is locked will result in the locked record being returned instead.  
  
You can enable read access for records that have been extracted by setting the **['XI'](../parameters/xi.md)** system parameter.

##  See Also

[**FIND Locate and Read Data**](find.md)  
[**READ Read Data from File**](read.md)  
[**EXTRACT Read and Lock Data**](extract.md)  
[**READ RECORD Read Record from File**](read_record.md)  
[**KEY( ) Return Key of Next Record**](../functions/key.md)
