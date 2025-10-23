# System Functions

**TAN( )** |  **_Return Tangent_**  
---|---  
  
##  Format

**TAN(**_num_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_num_ |  Numeric expression whose Tangent will be returned.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
#### **Note:**  
The value to be supplied must be in **_Radians_** , not Degrees. To convert Degrees to Radians:  
  
Radians = Degrees * pi / 180  
Degrees = Radians * 180 / pi  
  
##  Returns

Numeric, rounded, Tangent of given number.

##  Description

The **TAN( )** function returns the Tangent of a given numeric expression. The numeric value returned will be rounded to the current **[PRECISION](../directives/precision.md)** in effect. The inverse function is **[ATN( ) Return Arc-Tangent](atn.md)**.

##  Example

floating point  
print tan(1)  
.15574077246549E+01  
print tan(-3.14159/2)  
-.75369599539306E+06
