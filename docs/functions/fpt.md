# System Functions

**FPT( )** |  **_Return Fractional Part_**  
---|---  
  
##  Format

**FPT(**_num_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_num_ |  Numeric expression whose fractional portion will be returned.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Fractional portion of numeric.

##  Description

The **FPT( )** function returns the fractional portion of the given numeric value. The value returned is _always_ rounded to the **[PRECISION](../directives/precision.md)** currently in effect.

##  Example

precision 3 |  Set precision  
---|---  
...|   
A=fpt(1.345) |  Yields A = .345  
B=fpt(A/10) |  Yields B = .035  
  
  
begin |  Set precision to 2  
A=fpt(5/3) |  Yields A = .67
