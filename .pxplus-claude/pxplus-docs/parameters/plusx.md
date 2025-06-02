# System Parameters

**'+X'** |  **_Extended String Formatting_**  
---|---  
  
##  Description

The **'+X'** parameter controls the logic behind the **STR** function processing of formats for string values.

When the **'+X'** parameter is **_not_** set _(default)_ , string values passed to the **STR** function for formatting will generate an error if not long enough. This is not compatible with other implementations of the **STR** function in other Business Basics.

Setting the **'+X'** parameter causes the system to effectively pad the input string with spaces as required and makes the function compatible with other implementations.

_(The '+X' system parameter was added in PxPlus v7.00.)_

##  Default

**_Off_**

## See Also

**[STR Convert Numeric to String](../functions/str.md)**
