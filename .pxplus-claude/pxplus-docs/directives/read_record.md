# Directives 

**READ RECORD** |  **_Read Record from File_**  
---|---  
  
##  Format

**READ RECORD**(_filespec_[,_fileopt_])_var_ $

**_Where:_**

_filespec_ |  Can be a numeric expression indicating the open channel number to use or a string expression containing the pathname or table name (if string is prefixed by the keyword **TABLE**) of the file to use.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **BSY=**_stmtref_ __ |  Traps Error #0: Record/file busy  
---|---  
**DIR=**_num_ |  Direction indicator (Not supported with **[WDX]** tag)  
**DOM=**_stmtref_ __ |  Missing record transfer  
**END=**_stmtref_ __ |  End-of-File transfer  
**ERR=**_stmtref_ __ |  Error transfer  
**IND=**_num_ __ |  Record index  
**KEY=**_string$/num_ |  Record key  
**KNO=**_num_ | _name$_ |  File access key number (_num_) or name (_name$_)  
**REC=**_name$_ |  Record prefix (**REC=VIS(**_string$_**)** can also be used)  
**RNO=**_num_ __ |  Record number  
**RTY=**_num_ __ |  Number of retries (one-second intervals) (This overrides the value defined by the **['WT'](../parameters/wt.md)** system parameter)  
**SIZ=**_num_ __ |  Number characters to read  
**TBL=**_stmtref_ |  Data translation table  
**TIM=**_num_ __ |  Maximum time-out value in integer seconds  
|  _stmtref_ |  Program line number or statement label to which to transfer control  
| |   
_var_ _$_ |  String variable. Receives the contents of the record being read.  
  
_(TABLE support was added in PxPlus 2018.)_

##  Description

**READ RECORD** reads a record from a file (_chan_) and returns the complete record's data portion to the string variable (_var_). A **READ RECORD** statement can be used when dealing with native-mode operating system files, when exchanging data between PxPlus and other applications, or to read a complete record, including data field separators.

The **READ RECORD** directive advances the file position to the next record (or the record you identify if you use the **KEY=** or **IND=** options), and if you use the **KNO=** option, the current key access number will be changed accordingly.

PxPlus supports use of the **READ RECORD** directive with ***MEMORY*** (a memory-resident file or queue of records) and ZIP files.

##  Automatic Padding with KEY= Option

When you use **KEY=**_string$_**:**_string_ _$_**[:**_string$_**][...]** , PxPlus will automatically pad key segments. This is valid only if you have Keyed files with segmented key definitions. Then, PxPlus right pads the key segment using $00$ (nulls) to the segment's full length but does not pad the last segment:

> keyed "TEST",[1:1:5]+[2:1:6]+[3:1:8]  
>  read (1,key=A$:B$:C$)

> is the same as:

> read (1,key=pad(A$,5,$00$)+pad(B$,6,$00$)+C$)

#### **Note** :  
The last segment in a compound key will not be padded.

##  See Also

[**RCD( ) Return Next Record**](../functions/rcd.md)  
[***MEMORY* Create and Use Memory File**](../file_handling/~memory~.md)  
**[Accessing ZIP Files](../PxPlus%20User%20Guide/File%20Handling/Processing%20Data%20Files/Accessing%20ZIP%20Files.md)**

##  Example

0010 open (1)"OLDFIL"  
0020 open (2)"NEWFIL"  
0030 lock (2)  
0040 read record (1,end=1000)R$  
0050 write record (2)R$  
0060 goto 0040  
1000 close (1); close (2)  
1010 end
