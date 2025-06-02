# System Functions

**RNO( )** |  **_Return Next Record Number_**  
---|---  
  
##  Format

**RNO(**_chan_[,_fileopt_]**)**

**_Where:_**

_chan_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **END=**_stmtref_ |  End-of-File transfer  
---|---  
**ERR=**_stmtref_ |  Error transfer  
**IND=**_num_ |  Record index  
**KEY=**_string$_ |  Record key  
**KNO=**_num_ **|**  _string$_ |  File access key number (_num_) or name (_string$_)  
  
##  Returns

Integer, position of next/given record.

##  Description

The **RNO( )** function reports the position in the file specified of either the next record or the record identified in the **KEY=** or **IND=** options. The **RNO( )** value is the absolute ordinal position of the record in the file. The first record in a file returns a value of 1, the second **RNO( )** value is 2, and so on. In a Keyed file, the record number depends on the key chosen and its value relative to all other records in the same file.

#### **Note:**  
PxPlus supports the **RNO( )** function for ODBC files. See [**File Handling**](../PxPlus%20User%20Guide/File%20Handling/Introduction.md).

##  Example

0010 open (13)"PVX_KEYD"  
0020 input "Which record? ",@(15),K$,  
0030 if K$="" then close (13); print "DONE"; stop  
0040 read (13,key=K$,err=0100)  
0050 print " Key ",K$," is Rec# ",rno(13,end=0130)  
0060 goto 0020  
0100 rem 100  
0110 print " is invalid",@(40),"...Please try again"  
0120 goto 0020  
0130 print @(22),"...Sorry...END-OF-FILE"  
0140 end  
  
->end  
->run  
Which record? ABCDEF is invalid ...Please try again  
Which record? 123456 Key 123456 is Rec# 2  
Which record? 123460 Key 123460 is Rec# 6  
Which record? 123458 Key 123458 is Rec# 4  
Which record? DONE ! User hit <Enter>  
  
->run  
Which record? 123461 ...Sorry...END-OF-FILE
