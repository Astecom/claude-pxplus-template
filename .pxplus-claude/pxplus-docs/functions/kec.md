# System Functions

**KEC( )** |  **_Return Key of Current Record_**  
---|---  
  
##  Format

**KEC(**_chan_[,_fileopt_]**)**  
  
**_Where:_**

_chan_ |  Channel or logical file number of your given file.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**KNO=**_num_ | _string$_ |  File access key number (_num_) or name (_string$_)  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Current key or current logical position in file.

##  Description

The **KEC( )** function returns the current record's key. The result is based on the:

  * Current file access key **_or_**
  * Access key specified using the **KNO=** option



Typically, the **KEC( )** function is used after you read a record to determine the key of the record you just read (i.e. the key of the current record or current position in the file).

## See Also

**[File Handling](../PxPlus%20User%20Guide/File%20Handling/Introduction.md)**

##  Example

0010 open (13) "CUSTNO"  
0020 read (13,kno=0)R$  
0030 let K$=kec(13),K1$=kec(13,kno=1)  
0040 print "Key: ",K$," Alt: ",K1$," Data: ",R$  
0050 goto 0020  
1000 print "End-of-file"  
1010 end
