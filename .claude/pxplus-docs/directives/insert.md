# Directives 

**INSERT** |  **_Insert New Record in File_**  
---|---  
  
##  Format

**INSERT**(_chan_[,_fileopt_])_varlist_

**_Where:_**

_chan_ |  Channel or logical file number of the file to which to write.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **BSY=**_stmtref_ __ |  Traps Error #0: Record/file busy  
---|---  
**DOM=**_stmtref_ __ |  Missing record transfer  
**END=**_stmtref_ __ |  End-of-File transfer (File full)  
**ERR=**_stmtref_ __ |  Error transfer  
**IND=**_num_ __ |  Record index  
**KEY=**_string$/num_ |  Record key  
**REC=**_name$_ |  Record prefix where the **_name_** of the variable (rather than its contents) defines the prefix. (**REC=VIS(**_name$_**)** can also be used where the **_contents_** of the _name$_ variable defines the prefix.) For more information on using the **REC=** option, see **[Prefixing Variables in an IOList via REC=](../PxPlus%20User%20Guide/File%20Handling/Processing%20Data%20Files/Input%20and%20Output%20Parameters.htm#Mark1)**.  
**RTY=**_num_ __ |  Number of retries (one-second intervals). This overrides the value defined by the **['WT'](../parameters/wt.md)** system parameter.  
**SIZ=**_num_ __ |  Number characters to read  
**TBL=**_stmtref_ |  Data translation table  
**TIM=**_num_ __ |  Maximum time-out value in integer seconds  
_stmtref_ |  Program line number or statement label to which to transfer control  
_varlist_ |  Comma**-** separated list of variables, literals, or **IOL=** options.  
  
##  Description

The **INSERT** directive is used to write a new record to a file (channel/logical file number). The syntax for this directive is identical to the [**WRITE**](write.md) directive; however, **INSERT** only writes a record if it **_does not exist_** and will return an error if the record already exists.

**INSERT** may be used against keyed, memory, ODBC and OCI files. When **IND=** is used with ***MEMORY*** , this directive inserts a new index.

##  See Also

[**WRITE RECORD Write Record**](write_record.md)  
[**WRITE Add/Update Data in File**](write.md)  
[**UPDATE Update Existing Record in File**](update.md)
