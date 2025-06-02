# System Variables

**PRC** |  **_Precision Currently in Effect_**  
---|---  
  
**_Numeric System Variable_**

##  Contents

Integer, current **PRECISION**

##  Description

The **PRC** variable contains a numeric value (integer) that indicates the current **PRECISION** in effect (except in scientific notation). This value will be in the range -1 to 18. The default is 2 (two digits to the right of the decimal point).

If the mode is **FLOATINGPOINT** , then the value returned is in scientific notation. Either a **PRECISION** -1 statement or a **FLOATINGPOINT** directive will activate scientific notation. The **PRECISION** directive cancels it.

##  See Also

**['PD'= Default Precision for Current Session](../parameters/pd.md)**  
**[PRECISION Change Current Precision](../directives/precision.md)**  
**[FLOATINGPOINT Switch to Scientific Notation](../directives/floatingpoint.md)**  
**[PRC( ) Round Number to Precision](../functions/prc.md)**

##  Example

precision 14;  
floating point ;  
A=7.1234  
print prc,@(10),A  
begin ! Resets A=0, precision=2 (cancels scientific notation)  
print prc,@(10),A  
A=6.1234  
print prc,@(10),A  
  
->run  
.14E+02 .71234E+01  
2 0  
2 6.12
