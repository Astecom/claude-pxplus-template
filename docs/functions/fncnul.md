# System Functions

**NUL( )** |  **_Test String for Empty/Null_**  
---|---  
  
##  Format

**NUL(**_string_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_string_ |  String data to be tested if null.  
---|---  
_stmtref_ |  Program line number or label to which to transfer control.  
  
## Description

The **NUL** function will return a non-zero (TRUE) value if the string passed has a length of zero or consists solely of space characters. It will return a zero (FALSE) value if the string contains anything other than spaces.
