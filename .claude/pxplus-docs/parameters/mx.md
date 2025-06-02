# System Parameters

**'MX'** |  **_User-Defined Message Box_**  
---|---  
  
##  Description

Allows use of a customizable message box (msgbox.gui) instead of the standard message box Windows API.

#### **Note:**  
When **'MX'** is set, **MSGBOX** commands entered in console mode or executed within an **EXECUTE** command **_cannot_** be followed by any other command (as **MSGBOX** will be executing a **CALL** without a return address).

##  Default

**_On_**(if *ext/msgbox.gui exists)  
**_Off_** (if *ext/msgbox.gui does not exist)

## See Also

**[MSGBOX Display Popup Message Box](../directives/msgbox.md)**
