# Directives

**INDEXED** |  **_Create Indexed File_**  
---|---  
  
##  Format

**INDEXED** _filename$_ ,[_max_recs_],_rec_size_[,**SEP=**_char$_][,**ERR=**_stmtref_]  
  
**_Where:_**

_char$_ |  Separator character. Hex or ASCII string value.  
---|---  
_filename$_ |  Name of the indexed file to create. String expression.  
_max_recs_ |  Maximum number of records in the file. Optional numeric expression. Default is no initial allocation of file space with no limit as to final size. A zero indicates that the number is dynamic. A positive value indicates that the file is pre-sized to the specified number of records. An Error #2: END-OF-FILE on read or File full on write will be generated if an attempt is made to add more than this specified number of records or access an **IND=** value above this limit.  
_rec_size_ |  Maximum size of the data portion of each record.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **INDEXED** directive to create a file that can be accessed either sequentially or by record number (index). Make the record size long enough to contain the maximum record length (i.e. the combined length of the data fields plus field separators). If you use a filename that already exists, PxPlus returns an Error #12: File does not exist (or already exists).

Use the **SEP=** option to set the default separator for a given file. Use any character from $00$ to $FF$, or use SEP=*. When the ***** (_asterisk_) is set as the value, fields will not be delimited. PxPlus writes records to the file with field type and length headers. This feature may provide better results in overall file performance.

#### **Note:  
** WindX in PxPlus supports the use of this directive via the [WDX] or [LCL] tags; e.g. INDEXED "[WDX]somefile.ext". Non-PxPlus versions require you to encapsulate the command in an EXECUTE directive with a [WDX] tag (i.e. EXECUTE "[WDX]..."). See [**[WDX] Direct Action to Client Machine**](../command_tags/wdx.htm) or **[[LCL] Access to Users Local Machine](../command_tags/lcl.htm)**.

##  Example

0110 indexed A$+"-"+B$,100,50,err=1090  
0200 indexed "CSTFLE",,140

Line 0200 creates a file with the following structure:

Indexed file: C:\OTHER\MANUALS\PVX\CST\CSTFLE  
---  
|  Maximum Record Size: |  140  
|  Maximum # Records: |  (No limit)  
|  Current # Records: |  0
