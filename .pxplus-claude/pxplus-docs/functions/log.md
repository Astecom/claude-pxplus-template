# System Functions

**LOG( )** |  **_Return Base 10 Logarithm_**  
---|---  
  
##  Format

**LOG(**_num_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_num_ |  Numeric expression whose Base 10 logarithm is to be returned.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Numeric, Base 10 logarithm.

##  Description

The **LOG( )** function returns the numeric Base 10 logarithm of a given number, rounded to the current **PRECISION** setting. This is the inverse of the **[EXP( )](exp.md)** function.

PxPlus returns Error #40: Divide check or numeric overflow if the numeric value is negative.

##  Example

print exp(log(90)/3) ! Print cube root of 90
