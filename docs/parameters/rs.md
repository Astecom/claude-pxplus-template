# System Parameters

**'RS'** |  **_Round STR( ), Formatting and Functions_**  
---|---  
  
##  Description

The **'RS'** parameter controls whether numeric data will be rounding on any of the following:

  * Value passed to the **STR( )** function****
  * Parameter passed to a **FN _xxxx_** function
  * Data on **PRINT** directive that has a format specification



If the parameter is set **_On_** , then the numeric value will first be rounded to the current precision in effect.

#### **Note:**  
This parameter will be enabled/disabled when enabling/disabling the **['BX'](bx.md)** system parameter.

##  Default

**_Off_**

## See Also

**[STR( ) Convert Numeric to String](../functions/str.md)  
[PRINT Display Information](../directives/print.md)**
