# System Functions

**PRC( )** |  **_Round Number to Precision_**  
---|---  
  
##  Format

**PRC(**_num_[,_precision_][,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_num_ |  Value to be rounded. Numeric expression.  
---|---  
_precision_ |  Precision to which to round. Optional. Numeric expression. Integer from 0 to 18. If omitted, rounding is done to the current precision in effect.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Numeric value, rounded to a set precision.

##  Description

The **PRC( )** function returns a given numeric value (_num_) rounded to the set precision.

If a _precision_ parameter is supplied, the **PRC( )** function rounds the value based on the new precision. If _precision_ is not supplied, then the value is rounded to the current **PRECISION** in effect.

#### **Note:**  
One exception to the above: A **[ROUND ON](../directives/round.md)** directive will truncate longer values to the current **[PRECISION](../directives/precision.md)** in effect.

If you use an invalid value (e.g. >18), PxPlus returns Error #41: Invalid integer encountered (range error or non-integer).

##  See Also

[**PRECISION Change Current Precision**](../directives/precision.md)  
[**ROUND Control Rounding**](../directives/round.md)  
[**FLOATINGPOINT Switch to Scientific Notation**](../directives/floatingpoint.md)

##  Example

A=prc(1.3456);  
print A,  
A=prc(1.3456,0);  
print @(15),A,  
A=prc(1.3456,3);  
print @(25),A,  
A=prc(1.3456,2);  
print @(40),A,  
  
->run

The results will vary, depending on current precision and rounding:

**PRECISION 2, ROUND OFF** |  **PRECISION 2, ROUND ON** |  **PRECISION -1**  
---|---|---  
1.35 |  1.35 |  .13456E+0  
1 |  1 |  1 .1E+01  
1.346 |  1.35 |  .1346E+01  
1.35- |  1.35- |  .135E+01-
