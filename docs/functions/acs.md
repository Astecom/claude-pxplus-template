# System Functions

**ACS( )** |  **_Return Arc-Cosine_**  
---|---  
  
##  Format

**ACS(**_num_[,**ERR=**_stmtref_]**)**  
  
** _Where_** _:_

_num_ |  Numeric expression (range **-** 1 to +1) whose Arc**-** Cosine is to be returned.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
#### **Note:**  
The value to be supplied must be in **_Radians_** , not Degrees. To convert Degrees to Radians:  
  
Radians = Degrees * pi / 180  
Degrees = Radians * 180 / pi  
  
##  Returns

Numeric value between 0 (zero) and ****(pi=3.14159...).

##  Description

The **ACS( )** function returns the Arc**-** Cosine of the numeric expression _num_. It returns a value between 0 (zero) and ****(pi) rounded to the current **[PRECISION](../directives/precision.md)** in effect. This is the inverse of the **[COS( )](cos.md)** function.

The value of your numeric must be in the range of **-** 1 to +1 inclusive; otherwise, PxPlus returns an Error #40: Divide check or numeric overflow.

##  Example

for I=-1 to 1 step .1  
print acs(I),  
next  
print "DONE"  
end  
  
->run  
3.14 2.69 2.5 2.35 2.21 2.09 1.98 1.88 1.77 1.67 1.57 1.47 1.37 1.27 1.16 1.05 0.93 0.8 0.64 0.45 0 DONE
