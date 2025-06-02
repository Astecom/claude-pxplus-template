# System Functions

**KEP( )** |  **_Return Prior Record's Key_**  
---|---  
  
##  Format

**KEP(**_chan_[,_fileopt_]**)**

**_Where:_**

_chan_ |  Channel or logical file number of your given file.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **END=**_stmtref_ |  End-of-File transfer  
---|---  
**ERR=**_stmtref_ |  Error transfer  
**KEY=**_string$_ |  Record key  
**KNO=**_num_ | _string$_ |  File access key number (_num_) or name (_string$_)  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Key of the prior record in file.

##  Description

The **KEP( )** function returns the key of the record prior to the record in the file specified. The result is based on the:

  * Current file access key **_or_**
  * Access key specified using the **KNO=** option



If the current record is at the start of the file, there is no prior record. PxPlus reports Error #2: END-OF-FILE on read or File full on write unless you include an **ERR=** or **END=** option.

The system also supports the **KEP( )** function for ODBC and many other database file types.

If the **['+K'](../parameters/plusk.md)** system parameter is not enabled, the 'Record Key' specified must exist on the file.

## See Also

**[File Handling](../PxPlus%20User%20Guide/File%20Handling/Introduction.md)**

##  Example

0010 open (13)"CUSTNO"  
0020 read (13,key="zzz",dom=0030) ! Go to end of file  
0030 let K$=kep(13,end=1000)  
0040 read (13,key=K$)R$  
0050 print "Key: ",K$," Data: ",R$  
0060 goto 0030  
1000 print "Back to the start"  
1010 end
