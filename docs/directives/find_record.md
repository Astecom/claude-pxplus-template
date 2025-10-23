# Directives 

**FIND RECORD** |  **_Locate and Read Data Record_**  
---|---  
  
##  Format

**FIND RECORD**(_filespec_[,_fileopt_])_var_ _$_

**_Where:_**

_filespec_ |  Can be a numeric expression indicating the open channel number to use or a string expression containing the pathname or table name (if string is prefixed by the keyword **TABLE**) of the file to use.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **BSY=**_stmtref_ |  Traps Error #0: Record/file busy  
---|---  
**DIR=**_num_ |  Direction indicator (Not supported with **[WDX]** tag)  
**DOM=**_stmtref_ |  Missing record transfer  
**END=**_stmtref_ |  End-of-File transfer  
**ERR=**_stmtref_ |  Error transfer  
**IND=**_num_ |  Record index  
**KEY=**_string$/num_ |  Record key  
**KNO=**_num_ | _name$_ |  File access key number (_num_) or name (_name$_)  
**REC=**_name$_ |  Record prefix (**REC=VIS(**_string$_**)** can also be used)  
**RNO=**_num_ |  Record number  
**RTY=**_num_ |  Number of retries (one-second intervals). This overrides the value defined by the **['WT'](../parameters/wt.md)** system parameter.  
**SIZ=**_num_ |  Number characters to read  
**TBL=**_stmtref_ |  Data translation table  
**TIM=**_num_ |  Maximum time-out value in integer seconds  
_stmtref_ |  Program line number or statement label to which to transfer control  
_var_ _$_ |  String variable. Receives the contents of the record being read.  
  
_(TABLE support was added in PxPlus 2018.)_

##  Description

Use the **FIND RECORD** directive to read a record from the file (channel) you specify. The record's complete data portion will be returned in the string variable you name. Apply the **FIND RECORD** statement when dealing with native-mode operating system files, when exchanging data with applications other than PxPlus, or when you want to read a complete record including data-field separators.

When executing a **FIND RECORD** directive, PxPlus advances the file position to the next record (or the record you specify in a **KEY=** or **IND=** option). Use the **KNO=** option to change the current file access key.

#### **Note:**  
If the record is not found when reading using a **KEY=** or **IND=** option, the current file position is** _not changed_** (unlike **READ**).

##  See Also

[**EXTRACT Read and Lock Data**](extract.md)  
[**READ Read Data from File**](read.md)

##  Example

0020 open lock (2)"NEWFIL"  
0030 find record (1,end=1000)R$  
0040 write record (2)R$  
0050 goto 0030  
1000 close (1),(2)  
1010 end
