# System Parameters

**'!E'** |  **_Generate Internal MSGBOX_**  
---|---  
  
**_(Windows Only)_**

##  Description

The **'!E'** parameter will cause the **ESCAPE** directive to generate an internal MSGBOX showing the current program, line number, ERR, RET, FFO, and LFA before dropping to console mode. This message box will be created as a TopMost window to help assure it will be seen by the end user.

Setting this parameter helps assure the user knows when an **ESCAPE** is hit for processes running in hidden/minimized windows.

_(The '!E' system parameter was added in PxPlus 2021.)_

##  Default

Default setting is **_Off_** ; however, it is enabled by default when running Webster+.

## See Also

**[ESCAPE Interrupt Program Execution](../directives/escape.md)  
[Webster+ HTML Page Generation](../Webster/Webster.md)**
