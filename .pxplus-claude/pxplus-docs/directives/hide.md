# Directives 

**HIDE** |  **_Hide Control_**  
---|---  
  
##  Formats

1. |  _Hide Control:_ |  **HIDE [ CONTROL ]**_ctl_id_ __**[**_:idx_**]**_,_**[** ,**ERR** =_stmtref_**]**  
---|---|---  
2. |  _Hide Controls:_ |  **HIDE** **[ CONTROL ]**_string$_ **[** ,**ERR** =_stmtref_**]**  
  
**_Where:_**

_ctl_id_ |  Unique numeric CTL identifier for the object (button, list box, etc.) to be hidden. Numeric expression, integer.  
---|---  
_idx_ |  **_(For Radio Buttons Only)_** Indicates the specific instance of the radio button group.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_string$_ |  A string or string expression consisting of a series of 3-byte values where byte 1 - 2 of each value is the binary CTL number and byte 3 is the index when addressing a radio button (else ignored).  
**CONTROL** |  An optional keyword **CONTROL** may be specified immediately following the **HIDE** directive.  
  
**_Example:_**

> hide control Buttn_1

In addition, the **HIDE** directive can accept multiple CTL IDs (up to 500) in a comma-separated list, which may be a mix of standard controls and/or radio buttons with _idx_ specifications.

> hide Button_1,Button_2,LB_Clients,RB_Credit:1,RB_Credit:3

##  Description

Use the **HIDE** directive to hide the specified control from display. The control must be either on the current window or on a global control (e.g. ***** 100). It will still be active for purposes of reading/writing; however, the user cannot see, nor can the program set focus to, the control.

To redisplay a control object, use the **[SHOW](show.md)** directive.

#### **Note:**  
The **HIDE** directive does not work for a Fonted/Fixed Text control unless the control is first assigned to a group. For more information, see **[Fonted/Fixed Text Control](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Text%20Control/Text.htm#addingtext)**.

##  See Also

[**SHOW Show Control**](show.md)

##  Example

0010 button BTN_VISA,@(10,10,10,2)="&Visa Info"  
0020   
0100 read (1,key=CST_ID$)iol=0110  
0110 iolist CST_TERM$,*,*,INV_DT$  
0120 gosub 1000  
  
1000 if CST_TERM$="VISA" then show BTN_VISA else hide BTN_VISA  
1010 return
