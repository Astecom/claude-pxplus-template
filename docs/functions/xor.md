# System Functions

**XOR( )** |  **_Logical Exclusive OR_**  
---|---  
  
##  Format

**XOR(**_value1_[$],_value2_[$][,**ERR=**_stmtref_]**)**

**_Where:_**

_stmtref_ |  Program line number or statement label to which to transfer control.  
---|---  
_value1_**[$]  
**_value2_**[$]** |  Compared values. String or numeric expressions/variables. If strings, _value1_ _$_ must be the same length as _value2$._  
  
##  Returns

Result of logical exclusive 'OR' comparison of two expressions/variables.

##  Description

The **XOR( )** function performs a bit-wise exclusive 'OR' comparison of two string or numeric expressions/variables and generates a value as a result. The length of the two string expressions must be equal or PxPlus returns an Error #46: Length of string invalid.

**Binary** |  **Result**  
---|---  
0**XOR** 0 |  =0  
0**XOR** 1 |  =1  
1**XOR** 0 |  =1  
1**XOR** 1 |  =0  
  
**_Sample Comparison Results:_**

|  XOR($41$,$42$) |  yields Hex 03, 00000011  
---|---|---  
|  XOR($41$,$25$) |  yields Hex 64, 01100100  
|  XOR($5A$,$DD$) |  yields Hex 87, 10000111  
  
##  See Also

**[IOR( ) Logical OR](ior.md)**  
[**AND( ) Logical AND**](and.md)

##  Example

0040 read (1,end=1000)F$  
0050 R$=xor(F$(1,2),$2020$) ! Convert to lowercase  
0060 ...  
  
if pos($00$=xor(ucs(X$),lcs(X$)))=0 then print X$," is all alpha!"
