# System Functions

**SIN( )** |  **_Return Sine_**  
---|---  
  
##  Format

**SIN(**_num_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_num_ |  Value whose sine is to be returned. Numeric expression.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
#### **Note:**  
The value to be supplied must be in **_Radians_** , not Degrees. To convert Degrees to Radians:  
  
Radians = Degrees * pi / 180  
Degrees = Radians * 180 / pi  
  
##  Returns

Numeric, range -1 to 1.

##  Description

The **SIN( )** function returns the sine of the numeric expression specified. It will return a numeric value between -1 and 1, rounded to the current **[PRECISION](../directives/precision.md)** in effect. Its inverse function is **[ASN( ) Return Arc-Sine](asn.md)**.

##  Example

print 'CS'  
X=0,Y=80  
LASTX=0,LASTY=80  
for I=-15 to 1 step .5  
X=X+25  
Y=50*sin(I)+80  
print 'line'(LASTX,LASTY,X,Y)  
LASTX=X  
LASTY=Y  
next
