# System Functions

**RAD( )** |  **_Convert Degrees to Radians_**  
---|---  
  
##  Format

**RAD(**_degrees_[,**ERR=**_stmtref_]**)**

**_Where:_**

_degrees_ |  Angle in degrees to be converted to radians.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Angle in radians.

##  Description

Converts angle in degrees to radians.

_(The RAD( ) function was added in PxPlus 2020.)_

##  Example

aDeg=1  
halfCircle=180  
radDeg=rad(aDeg)  
PI=rad(halfCircle)  
print radDeg  
  
0.02  
  
print PI  
  
3.14
