# Directives 

**EXTRACT RECORD** |  **_Read-Lock Data Record_**  
---|---  
  
##  Format

**EXTRACT RECORD** (_filespec_[,_fileopt_])_var_ _$_

**_Where:_**

_filespec_ |  Can be a numeric expression indicating the open channel number to use or a string expression containing the pathname or table name (if string is prefixed by the keyword **TABLE**) of the file to use.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **BSY=**_stmtref_ __ |  Traps Error #0: Record/file busy  
---|---  
**DOM=**_stmtref_ __ |  Missing record transfer  
**END=**_stmtref_ __ |  End-of-File transfer  
**ERR=**_stmtref_ __ |  Error transfer  
**IND=**_num_ __ |  Record index  
**KEY=**_string$/num_ |  Record key  
**KNO=**_num_ | _name$_ |  File access key number (_num_) or name (_name$_)  
**REC=**_name$_ |  Record prefix (**REC=VIS(**_string$_**)** can also be used)  
**RNO=**_num_ __ |  Record number  
**RTY=**_num_ __ |  Number of retries (one-second intervals). This overrides the value defined by the **['WT'](../parameters/wt.md)** system parameter.  
**SIZ=**_num_ __ |  Number characters to read  
**TBL=**_stmtref_ |  Data translation table  
**TIM=**_num_ __ |  Maximum time-out value in integer seconds  
_stmtref_ |  Program line number or statement label to which to transfer control  
_var_ _$_ |  String variable. Receives the contents of the record being read.  
  
_(TABLE support was added in PxPlus 2018.)_

##  Description

Use the **EXTRACT RECORD** directive to read a record from the file you specify (channel). PxPlus will return the record's complete data portion in the string variable you specify.

Apply the **EXTRACT RECORD** statement when dealing with native-mode operating system files, when exchanging data with non-PxPlus applications, or when you want to read a complete record (including data field separators).

The **EXTRACT RECORD** directive advances the file position to the next record (or the record specified in a **KEY=** or **IND=** option). Use the **KNO=** option to change the current file access key.

#### **Note:**  
This directive _locks_ the record being read to prevent other users from using a **FIND** , **FIND RECORD** , **READ** , **READ RECORD** , **EXTRACT RECORD** or another **EXTRACT RECORD** to access it. This lock remains active until the next I/O request for the same file or until the file is closed.  
  
Using a **KEY=** option or **READ** , **FIND** or **EXTRACT** statement to retrieve the next record while a record is locked will result in the locked record being returned instead.  
  
You can enable read access for records that have been extracted by setting the **['XI'](../parameters/xi.md)** system parameter.

##  See Also

[**FIND Locate and Read Data**](find.md)  
[**READ Read Data from File**](read.md)  
[**KEY( ) Return Key of Next Record**](../functions/key.md)

##  Example

0010 open (1) "OLDFIL"  
0020 open (2) "NEWFIL"  
0030 lock (2)  
0040 extract record (1,end=1000) R$  
0050 write record (2) R$  
0060 goto 0040  
1000 close  
1010 end
