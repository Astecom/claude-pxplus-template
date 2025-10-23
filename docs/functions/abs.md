# System Functions

**ABS( )** |  **_Absolute Value_**  
---|---  
  
##  Format

**ABS(**_num_[,**ERR=**_stmtref_]**)**  
  
** _Where_** _:_

_num_ |  Numeric expression whose absolute value is to be returned.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Numeric, absolute value of expression. Always positive or zero.

##  Description

The **ABS( )** function returns the absolute value of the numeric expression _num_. The value returned is a positive numeric value or zero.

For example, the absolute value of the numeric expression (_X_) is returned as follows:

> **ABS (**_X_**)** ... If **X** >0 ... Returns **X**  
>    
> **ABS (**_X_**)** ... If **X** <0 ... Returns **X * -** 1 (positive result)  
>    
> **ABS (**_X_**)** ... If **X** =0 ... Returns **X**(zero)

##  Example

input "Give me your first number ",X  
input "Give me another one ",Y  
print "The difference is ",abs(X-Y)  
  
->run  
Give me your first number 12.345  
Give me another one 23.456  
The difference is 11.111
