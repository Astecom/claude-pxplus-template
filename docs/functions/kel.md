# System Functions

**KEL( )** |  **_Return Last Key of File_**  
---|---  
  
##  Format

**KEL(**_chan_[,_fileopt_]**)**  
  
**_Where:_**

_chan_ |  Channel or logical file number of the file to reference.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **END=**_stmtref_ |  End-of-File transfer  
---|---  
**ERR=**_stmtref_ |  Error transfer  
**KNO=**_num_ | _string$_ |  File access key number (_num_) or name (_string$_)  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Key of last record in file.

##  Description

The **KEL( )** function returns the key of the last record in the file specified. The result is based on the:

  * Current file access key **_or_**
  * Access key specified using the **KNO=** option



PxPlus supports the **KEL( )** function for ODBC files.

## See Also

**[File Handling](../PxPlus%20User%20Guide/File%20Handling/Introduction.md)**

##  Example

open (1) "CUSTNO"  
......  
F$=kef(1),L$=kel(1)  
print "Customers range from ",F$,"->",L$  
......  
end
