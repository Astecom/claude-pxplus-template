# System Parameters

**'RN'=** |  **_Rounding Control_**  
---|---  
  
##  Description

Controls when and how rounding will occur. The valid values for **'RN'** below are additive:

1 |  On any assignment  
---|---  
2 |  On any Add, Subtract  
4 |  On any Multiply, Divide, Power, or Modulus  
8 |  On any math function (i.e. **[SIN( )](../functions/sin.md)**, **[COS( )](../functions/cos.md)**, **[LOG( )](../functions/log.md)**, etc.)  
64 |  On all intermediate values in an expression  
128 |  Before any numeric data is written to file  
256 |  At the end of any expression  
512 |  Before all numeric compares  
  
##  Default

**'RN'=1** (on any assignment)

##  See Also

**['RS' Round STR( ), Formatting and Functions](rs.md)**

##  Example

The statement SET_PARAM 'RN'=644 sets the parameter to round on any multiply or divide + with a **[WRITE](../directives/write.md)** directive + on all compares. (The sum of 4+128+512 is 644.)
