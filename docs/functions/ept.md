# System Functions

**EPT( )** |  **_Return Exponent Value_**  
---|---  
  
##  Format

**EPT(**_num_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_num_ |  Numeric expression whose exponent is to be returned.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Numeric exponent (power of 10).

##  Description

The **EPT( )** function returns the power of 10 for the numeric expression provided.

##  Example

ept(10) ! Same as ept(0.1*10^2) - yields 2  
ept(5) ! Same as ept(0.5*10^1) - yields 1  
ept(.02) ! Same as ept(0.2*10^-1) - yields -1

B=27*9  
print ept(B),ept(9*2)  
  
->run  
3 2
