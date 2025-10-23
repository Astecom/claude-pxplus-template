# System Functions

**BIN( )** |  **_Binary String from Numeric Value_**  
---|---  
  
##  Format

**BIN(**_num_ ,_len_[,**ERR=**_stmtref_]**)**  
  
** _Where_** _:_

_len_ |  Length of the string to be returned. Use a numeric expression. Integer value.  
---|---  
_num_ |  Numeric value to convert to a string. Use a numeric expression. Integer value.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Binary value of ASCII string corresponding to the numeric expression.

##  Description

The **BIN( )** function converts the numeric expression _num_ to an ASCII string (as its binary value). The string returned will be the length specified, _len_. The value is right justified in the resultant string.

The value is converted to two's complement format before the string is generated. If the number was negative, the leading bits will all be set to **ON** (binary 1).

2 |  is binary 00000010  
---|---  
1 |  is binary 00000001  
0 |  is binary 00000000  
**-** 1 |  is binary 11111111  
**-** 2 |  is binary 11111110  
  
##  Example

B$=bin(40,1);  
print hta(B$) ! yields $28$ 00101000  
B$=bin(40,2);  
print hta(B$) ! yields $0028$ 00000000 00101000  
B$=bin(2048,2);  
print hta(B$) ! yields $0800$ 00001000 00000000  
B$=bin(-64,2);  
print hta(B$) ! yields $FFC0$ 11111111 11100000
