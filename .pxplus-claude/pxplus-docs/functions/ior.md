# System Functions

**IOR( )** |  **_Logical OR_**  
---|---  
  
##  Format

**IOR(**_value1_[$],_value2_[$][,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_stmtref_ |  Program line number or statement label to which to transfer control.  
---|---  
_value1_**[$]**  
_value2_**[$]** |  Compared values. String or numeric expressions/variables. If strings, _value1_ $ must be the same length as _value2$._  
  
##  Returns

Result of logical 'OR' comparison of two expressions/variables.

##  Description

The **IOR( )** function performs a bit**-** wise logical 'OR' comparison of two string or numeric expressions/variables and generates a value as a result. The length of the two string expressions must be equal or PxPlus returns an Error #46: Length of string invalid.

**Binary** |  **Result**  
---|---  
0**IOR** 0 |  =0  
0**IOR** 1 |  =1  
1**IOR** 0 |  =1  
1**IOR** 1 |  =1  
  
_Therefore:_

ior($41$,$42$) |  Yields Hex 43 01000011  
---|---  
ior($41$,$25$) |  Yields Hex 65 01100101  
ior($5A$,$DD$) |  Yields Hex DF 11011111  
  
##  See Also

[**XOR( ) Exclusive OR Comparison**](xor.md)  
[**AND( ) Logical AND**](and.md)

##  Example

0040 read (1,end=1000)F$  
0050 R$=ior(F$(1,2),$8080$) ! Turn on high bit  
0060 ...
