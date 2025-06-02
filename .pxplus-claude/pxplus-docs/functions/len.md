# System Functions

**LEN( )** |  **_Return String Length_**  
---|---  
  
##  Format

**LEN(**_string$_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_string$_ |  String expression whose length is to be returned.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Integer, length of given string, 0 (zero) if null string.

##  Description

The **LEN( )** function returns an integer reporting the length of the given string. If the given string is a null string (""), then the function returns a length of 0 (zero).

##  Example

A=len("HELLO") ! yields 5  
A=len("") ! yields 0  
A=len("A"+"BC") ! yields 3  
A=len(day) ! yields 8 (DAY variable is in format MM/DD/YY)
