# Directives 

**REMOVE CONTROL** |  **_Delete Control from Window_**  
---|---  
  
## Format

**REMOVE CONTROL**  _ctl_id_ __**{** , _ctl_id_ , ...**}[** , **ERR=**_stmtref_**]**  
  
** _Where:_**

_ctl_id_ |  Unique numeric CTL identifier for the object (button, list box, etc.) to be hidden. Numeric expression, integer. Multiple controls may be specified, each separated by a comma.  
---|---  
  
## Description

Use the **REMOVE CONTROL** directive to delete a control (or controls) from the current window. This directive allows the application to remove a control without having to know what type of control is being referenced.
