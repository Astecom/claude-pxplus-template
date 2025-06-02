# Directives 

**LOCK** |  **_Reserve File for Exclusive Use_**  
---|---  
  
##  Format

**LOCK** (_chan_[,**ERR** =_stmtref_])

**_Where:_**

_chan_ |  Channel or logical file number of the file to be locked.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **LOCK** directive to reserve a given file for exclusive processing by the user/program. Once a file is locked, no other user or program can gain access to it. However, if another user already has the given file open, the **OPEN** and **LOCK** directives fail and PxPlus returns Error #0: Record/file busy.

##  See Also

[**UNLOCK Remove Exclusive Use from File**](unlock.md)

##  Example

0010 open (30,err=0100)"GLFILE"  
0020 lock (30,err=0120)  
...  
0100 print "Cannot open GLFILE"  
0110 stop  
0120 print "GL still in usetry later"  
0130 stop
