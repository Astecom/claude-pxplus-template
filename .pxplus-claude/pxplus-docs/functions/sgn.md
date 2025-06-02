# System Functions

**SGN( )** |  **_Return Sign of Value_**  
---|---  
  
##  Format

**SGN(**_num_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_num_ |  Value whose sign is to be returned. Numeric expression.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Status code, 0 (zero), 1 or -1.

##  Description

The **SGN( )** function returns a numeric status code for the sign of a value:

1 |  If _num_ is **_greater_** than zero  
---|---  
0 |  If _num_ ** _equals_** zero  
-1 |  If _num_ is **_less_** than zero  
  
##  Example

?sgn(23.492) ! yields 1  
?sgn(4-4) ! yields 0  
?sgn(4-7.34) ! yields -1
