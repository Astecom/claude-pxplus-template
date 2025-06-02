# System Functions

**EXP( )** |  **_Raise to Base Ten_**  
---|---  
  
##  Format

**EXP(**_num_[,**ERR=**_stmtref_]**)**

**_Where:_** |   
---|---  
_num_ |  Power of 10 to be returned. Numeric expression.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Value of 10 raised to the power of the numeric value.

##  Description

The **EXP( )** function returns the value of 10 raised to the power of a given numeric value (i.e. 10^_num_). Fractions are allowed. The numeric value returned is rounded to the current **PRECISION** in effect. This is the inverse of the **[LOG( )](log.md)** function.

##  Example

print exp(log(90)/3), ! Print cube root of 90  
print exp(3),exp(2.1)  
  
->run  
4.47 1000 125.89
