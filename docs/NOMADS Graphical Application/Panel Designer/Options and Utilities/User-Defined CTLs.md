# Options and Utilities 

**User-Defined CTLS** |  **__**  
---|---  
  
User-defined CTLS are used to associate a program or an event with a specific function key value or negative CTL definition. When the user presses the corresponding key, NOMADS executes the logic or program you associated with the event.

User CTLS can be local to a panel or global across all libraries. See **[Assigning Global CTLS](User-Defined%20CTLs.htm#Mark1)**. To define user CTL values that are local to the current panel, the **User Defined CTL Values** utility is used.

Invoke the **User Defined CTL Values** utility from the **[NOMADS Panel Designer](../Introduction.md)** by selecting _Utilities_ > _User CTLS_ from the menu bar or the _Ctls_ option on the tool bar.

The following window is displayed:

> _(The use of a grid for entering CTL values was added in PxPlus 2021.)_

This window consists of the following:

_CTL Value_ |  Numeric CTL value to be assigned. Click the drop-down arrow for a list of commonly used CTL values (10=F10, -1010=Home, etc.) and any other values defined for the current panel. A new value not on the list can also be entered.  
---|---  
_Description_ |  Displays the CTL value description, if available.  
_Process_ |  Click the drop-down arrow for a list of available processes: |  _Link_ |  Invoke another panel passing optional arguments.  
---|---  
_Perform_ |  Perform a program.  
_Call_ |  Call a program.  
_Execute_ |  Execute a series of statements separated by semi-colons.  
_End_ |  Terminate panel.  
_Logic_ |  Logic to be executed.  
_(Delete)_ |  Button used to delete one or more selected CTL values from the grid. To select multiple CTL values, use Shift-Click (consecutive selections) or Ctrl-Click (random selections). Prior to deleting, a message will display. _(The Delete button was added in PxPlus 2021.)_  
_OK_ |  Saves any changes and closes the **User Defined CTL Values** utility.  
_Cancel_ |  Closes the **User Defined CTL Values** utility without saving any changes.  
  
##  Assigning Global CTLS

To define global CTLS (applicable to all libraries), load the reserved variable **%NOMADS_FKEY_HANDLER$** with a user-defined program name. Your program will be processed by ***winproc** at run time.

**_Example:_**

> 0010 !Program: FKEYS  
>  0020 IF CTL=3 MSGBOX "The F3 key was pressed"  
>  0030 EXIT

#### **Note:**  
Local CTLS are executed before global ones.

## Negative CTLS

PxPlus normally handles all negative CTL values internally:

|  Values -1 to -999 |  Used by the input handler to save current instructions, internally call *control  
---|---|---  
|  Values -1000 to -1999 |  Used for input editing control keys and mouse interaction  
|  Values -2000 to -2255 |  Used for composite character generation  
|  Value -2255 and values below that |  Reserved for future expansion  
  
See **[Negative CTL Definitions](../../../appendix/negative_ctl_definitions.md)** for a list of negative control values.

**_Example 1:_**

|  **CTL Value:** |  -1014=Page Down  
---|---|---  
|  **Process:** |  Execute MSGBOX "Test","F.Y.I"  
|  **Result:** |  When the user presses the Page Down key, the message box is triggered.  
  
**_Example 2:_**

|  **CTL Value:** |  6=F6  
---|---|---  
|  **Process:** |  Perform "cstmtc;init_stuff"  
|  **Result:** |  When the user presses the F6 key, NOMADS performs the _cstmtc_ program logic, starting at the _init_stuff_ entry label.
