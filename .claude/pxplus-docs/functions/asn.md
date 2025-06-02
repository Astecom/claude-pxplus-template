# System Functions

**ASN( )** |  **_Return Arc-Sine_**  
---|---  
  
##  Format

**ASN(**_num_[,**ERR=**_stmtref_]**)**  
  
** _Where_** _:_

_num_ |  Numeric expression (range **-** 1 to +1) whose Arc-Sine is to be returned.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
#### **Note:**  
The value to be supplied must be in **_Radians_** , not Degrees. To convert Degrees to Radians:  
  
Radians = Degrees * pi / 180  
Degrees = Radians * 180 / pi  
  
##  Returns

Numeric value, range **-** /2 to +****/2.

##  Description

The **ASN( )** function returns the Arc**-** Sine of the given numeric expression _num_. The function returns a value between **-** (negative pi) divided by 2 and +****(+pi) divided by 2, rounded to the current**[PRECISION](../directives/precision.md)** in effect. This is the inverse of the **[SIN( )](sin.md)** function.

If _num_ is not in the range **-** 1 to +1 inclusive, the result will be Error #40: Divide check or numeric overflow.

##  Example

for I=-1 to 1 step .1  
print asn(I),  
next  
print "DONE"  
end  
  
->run  
-1.57-1.12-0.93-0.78-0.64-0.52-0.41-0.3-0.2-0.1 0 0.1 0.2 0.3 0.41 0.52 0.64 0.7 8 0.93 1.12 1.57 DONE
