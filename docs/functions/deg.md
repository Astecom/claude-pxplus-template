# System Functions

**DEG( )** |  **_Convert Radians to Degrees_**  
---|---  
  
##  Format

**DEG(**_radians_[,**ERR=**_stmtref_]**)**

**_Where:_**

_radians_ |  Angle in radians to be converted to degrees.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Angle in degrees.

##  Description

Converts angle in radians to degrees.

_(The DEG( ) function was added in PxPlus 2020.)_

##  Example

aRad=1  
PI=3.141592654  
degRad=deg(aRad)  
degPI=deg(PI)  
print degRad  
  
57.3  
  
print degPI  
  
180
