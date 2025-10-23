# System Functions

**SQR( )** |  **_Return Square Root_**  
---|---  
  
##  Format

**SQR(**_num_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_num_ |  Value whose square root is to be returned. It must be a positive number. Numeric expression.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Numeric, square root of given value.

##  Description

The **SQR( )** function returns the square root of the number provided, rounded to current **[PRECISION](../directives/precision.md)**. If you use an invalid value (e.g. a negative value such as SQR(-2.345)), PxPlus returns an Error #40: Divide check or numeric overflow.

##  Example

0010 input "Length of one side: ",A  
0020 if A<=0 then goto 0010  
0030 input "Length of other : ",B  
0040 if B<=0 then goto 0030  
0050 print "Hypotenuse is : ",sqr(A*A+B*B,err=*next)  
0060 print "DONE"; stop  
  
->run  
Length of one side: 2.3  
Length of other: 1.65  
Hypotenuse is: 2.83
