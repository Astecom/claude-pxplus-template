# System Functions

**HTA( )** |  **_Get Hex Value of String_**  
---|---  
  
##  Format

**HTA(**_string$_[,**ERR** =_stmtref_]**)**  
  
**_Where:_**

_string$_ |  String expression to convert to Hexadecimal format.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Hex value of your string.

##  Description

The **HTA( )** function returns the hexadecimal value of a given character string. The string returned by the **HTA( )** function is always twice the length of the original string and consists solely of the (Hex) characters 0 - 9 and A - F.

##  Example

A$=hta("CAT") ! yields 434154  
A$=hta("01") ! yields 3031  
A$=hta(bin(10,2)) ! yields 000A
