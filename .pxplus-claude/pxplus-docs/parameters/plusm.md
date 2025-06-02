# System Parameters

**'+M'** |  **_UNIX/Linux Millisecond Timer_**  
---|---  
  
##  Description

**_(UNIX/Linux Parameter Only - has no effect on Windows)_**

The **'+M'** parameter controls whether PxPlus will use a high-resolution (millisecond) timer to process **WAIT** directives on UNIX/Linux systems. By default and for consistency with older UNIX/Linux versions, this parameter is set to **_Off_** , resulting in a **WAIT** directive rounding the time up to an integral number of seconds.

If the operating supports it, setting this parameter allows **WAIT** statements to wait fractions of a second.

_(The '+M' system parameter was added in PxPlus v8.11, build 9182.)_

##  Default

**_Off_**

## See Also

**[WAIT Temporarily Halt Execution](../directives/wait.md)**
