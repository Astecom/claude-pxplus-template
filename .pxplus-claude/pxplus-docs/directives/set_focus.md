# Directives

**SET_FOCUS** |  **_Set Input Focus_**  
---|---  
  
##  Formats

1. |  _Set Focus On_: |  **SET_FOCUS** _ctl_id_  
---|---|---  
2. |  _Retry:_ |  **SET_FOCUS RETRY** _ctl_id_  
3. |  _Read CTL Value:_ |  **SET_FOCUS READ** _ctl_id_  
  
**_Where:_**

_ctl_id_ |  Unique control ID of the custom control (button, list_box, drop_box, etc.) to which to direct subsequent input. Numeric expression.  
---|---  
  
##  Description

Use the **SET_FOCUS** directive to set the focus on the custom control you want to receive the next user input. PxPlus returns an Error #65: Window element does not exist or already exists if you use **SET_FOCUS** for a non-existent or disabled control item.

##  Format 1

**_Set Focus_**** _On_**  
  
**SET_FOCUS** _ctl_id_ _  
_  
Setting the focus to a control directs subsequent terminal input to it unless the user overrides it with the mouse. If the value of the _ctl_id_ is 0, input is directed to the screen **[INPUT](input.md)** directive.

**_Example:_**

> button 100,@(10,10,10,2)="Write"  
>  button 101,@(15,10,10,2)="Delete"  
> set_focus 100

The next keyboard input will be directed to the _Write_ button.

##  Format 2

**_Retry_**  
  
**SET_FOCUS RETRY** _ctl_id_ _  
_  
Use the **SET_FOCUS RETRY** format to set an internal "modified" flag on the control.

If the user attempts to Tab away from the control, it will retry its associated CTL event. You can use this in input validation (i.e. when an application detects invalid input). You can issue a **SET_FOCUS RETRY** directive to have PxPlus reprocess the input field whether the user changes something or attempts to Tab away from it.

##  Format 3

**_Read CTL Value_**  
  
**SET_FOCUS READ** _ctl_id_ _  
_  
Use **SET_FOCUS READ** to obtain the CTL value of the control which currently has focus. The CTL value is 0 if no control has focus.
