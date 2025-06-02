# System Functions

**COS( )** |  **_Return Cosine_**  
---|---  
  
##  Format

**COS(**_num_[,**ERR=**_stmtref_]**)**

**_Where:_**

_num_ |  Numeric expression whose Cosine is to be returned.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
#### **Note:**  
The value to be supplied must be in **_Radians_** , not Degrees. To convert Degrees to Radians:  
  
Radians = Degrees * pi / 180  
Degrees = Radians * 180 / pi  
  
##  Returns

Value between -1 and +1.

##  Description

The **COS( )** function returns the Cosine of the numeric expression. It returns a value between **-** 1 and +1, rounded to the current **PRECISION** in effect. **[ACS( )](acs.md)** is its inverse function.

##  Example

print 'CS'  
X=0,Y=80  
LASTX=0,LASTY=80  
for I=-20 to 1 step .5  
X=X+25  
Y=50*cos(I)+80  
print 'line'(LASTX,LASTY,X,Y)  
LASTX=X  
LASTY=Y  
next
