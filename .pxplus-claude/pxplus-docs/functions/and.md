# System Functions

**AND( )** |  **_Logical AND_**  
---|---  
  
##  Format

**AND(**_value1_[$],_value2_[$][,**ERR=**_stmtref_]**)**  
  
** _Where_** _:_

_stmtref_ |  Program line number or statement label to which to transfer control.  
---|---  
_value1_**[$]**  
_value2_**[$]** |  Compared values. String or numeric expressions/variables. If strings, _value1_ $ must be the same length as _value2$._  
  
##  Returns

Result of bit-wise logical 'AND' comparison of two expressions/variables.

##  Description

The **AND( )** function performs a bit**-** wise 'AND' comparison of two string or numeric expressions/variables and generates a value as a result. The length of the two string expressions must be equal or PxPlus returns an Error #46: Length of string invalid.

**Binary** |  **Result**  
---|---  
0**AND** 0 |  =0  
0**AND** 1 |  =0  
1**AND** 0 |  =0  
1**AND** 1 |  =1  
  
##  See Also

[**IOR( ) OR Comparison**](ior.md)  
[**XOR( ) Exclusive OR Comparison**](xor.md)

##  Example

0040 read (1,end=1000) F$  
0050 R$=and(F$(1,2),$7F7F$) ! Turn off high bit  
0060 ....  
  
BITS$=$03$  
if and(BITS$,$02$)=$02$ \  
then print "bit 2 is on"
