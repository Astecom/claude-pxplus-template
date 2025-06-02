# Directives 

**UNLOCK** |  **_Remove Exclusive Use from File_**  
---|---  
  
##  Format

**UNLOCK (**_chan_[,**ERR=**_stmtref_]**)**

**_Where:_**

_chan_ |  Channel or logical file number of the file to be unlocked.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **UNLOCK** directive to release a previously locked file. If the given file is not already locked, PxPlus returns an Error #14: Invalid I/O request for file state.

##  See Also

[**LOCK Reserve File for Exclusive Use**](lock.md)

##  Example

0010 open (30,err=0100)"GLFILE"  
0020 lock (30,err=0120)  
0030 read (30,key="HEPxPlusR")A  
0040 if A>0 then goto 0100  
0050 unlock (30)  
0060 print "Nothing on file to process."  
0070 stop  
0100 rem 100 Error handling
