# System Functions

**INT( )** |  **_Return Integer Portion_**  
---|---  
  
##  Format

**INT(**_num_[,**ERR** =_stmtref_]**)**  
  
**_Where:_**

_num_ |  Numeric expression whose integer portion is to be returned.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Integer portion of numeric value.

##  Description

The **INT( )** function returns the integer portion of the value specified. No rounding is performed on the value. The fractional part of the value is truncated.

##  Example

A=int(3.23) ! yields A=3  
A=int(-5.6) ! yields A=-5  
A=int(.9999) ! yields A=0
