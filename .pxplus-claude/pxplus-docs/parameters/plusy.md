# System Parameters

**'+Y'** |  **_Set Century for Year Value_**  
---|---  
  
##  Description

The value of the **'+Y'** parameter is used to determine the base century when a two-digit year is given to the **JUL** function.

If this parameter is **_not_** set (zero), all two-digit years use the current century.

If this parameter is set, its value is assumed to define the century to use (e.g. 19 means 1900->1999, 20 means 2000->2099).

_(The '+Y' system parameter was added in PxPlus v7.00.)_

##  Default

The default leaves this parameter **_zero_** (use current century).

## See Also

**[JUL Return Julian Date](../functions/jul.md)**
