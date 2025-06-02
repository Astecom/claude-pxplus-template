# System Functions

**ASC( )** |  **_Get Internal Character Value_**  
---|---  
  
##  Format

**ASC(**_char$_[,**ERR** =_stmtref_]**)**

**_Where:_**

_char$_ |  Single**-** character whose ASCII value is to be returned. String expression.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Integer, ASCII character set number, range 0 to 255.

##  Description

The **ASC( )** function returns the internal numeric value of a given character _char$_ based on its position in the ASCII character set/table. The value returned is an integer, range 0 to 255 (ASCII character set number). Only the first character in the string is converted to its internal value.

##  Example

?ASC("A") ! yields 65  
  
string$="a";?ASC(string$) ! yields 97  
  
?ASC("abc") ! also yields 97 (the ASCII value for "a")
