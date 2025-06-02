# Directives

**SHOW** |  **_Show Control_**  
---|---  
  
##  Formats

1. |  _Show Control:_ |  **SHOW** **[ CONTROL ]**_ctl_id_ __**[**_:idx_**]**_,_**[** ,**ERR** =_stmtref_**]**  
---|---|---  
2. |  _Show Controls:_ |  **SHOW** **[ CONTROL ]**_string$_ **[** ,**ERR** =_stmtref_**]**  
  
**_Where:_**

_ctl_id_ |  Unique numeric CTL identifier for the object (button, list box, etc.) to be shown. Numeric expression, integer.  
---|---  
_idx_ |  **_(For Radio Buttons Only)_** Indicates the specific instance of the radio button group.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_string$_ |  A string or string expression consisting of a series of 3-byte values where byte 1 - 2 of each value is the binary CTL number and byte 3 is the index when addressing a radio button (else ignored).  
**CONTROL** |  An optional keyword **CONTROL** may be specified immediately following the **SHOW** directive.  
  
**_Example:_**

> show control Buttn_1

In addition, the **SHOW** directive can accept multiple CTL IDs (up to 500) in a comma-separated list, which may be a mix of standard controls and/or radio buttons with _idx_ specifications.

**_Example:_**

> show Button_1,Button_2,LB_Clients,RB_Credit:1,RB_Credit:3

##  Description

Use the **SHOW** directive to redisplay a given hidden control object so that the user can see it and the program can set the focus on it.

The **HIDE** directive hides a control from display. While the control is hidden, it is still active for the purposes of reading/writing; however, the user cannot see it nor can the program set focus on it.

#### **Note:**  
The **SHOW** directive does not work for a Fonted/Fixed Text control unless the control is first assigned to a group. For more information, see **[Fonted/Fixed Text Control](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Text%20Control/Text.htm#addingtext)**.

##  See Also

**[HIDE Hide Control](hide.md)**

##  Example

0010 button BTN.VISA,@(10,10,10,2)="&Visa Info"  
0100 read (1,key=CUST_ID$)iol=1000  
0110 if CST.TERM$="CHQ" then hide BTN.VISA else show BTN.VISA
