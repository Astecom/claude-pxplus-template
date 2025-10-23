# System Functions

**ATN( )** |  **_Return Arc-Tangent_**  
---|---  
  
##  Format

**ATN(**_num_[,**ERR=**_stmtref_]**)**  
  
** _Where_** _:_

_num_ |  Numeric expression whose Arc**-** Tangent is to be returned.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
#### **Note:**  
The value to be supplied must be in **_Radians_** , not Degrees. To convert Degrees to Radians:  
  
Radians = Degrees * pi / 180  
Degrees = Radians * 180 / pi  
  
##  Returns

Numeric value, range **-** /2 to +****/2.

##  Description

The **ATN( )** function returns the Arc**-** Tangent of the numeric expression _num_. It will return a value between **-**(negative pi) divided by 2 and **** divided by 2, rounded to the current **PRECISION** in effect. This is the inverse of the **[TAN( )](tan.md)** function.

##  Example

for I=-10 to 10 step 1  
print atn(I),  
next  
print " DONE"  
end  
  
->run  
-1.47-1.46-1.45-1.43-1.41-1.37-1.33-1.25-1.11-0.79 0 0.79 1.11 1.25 1.33 1.37 1.41 1.43 1.45 1.46 1.47 DONE
