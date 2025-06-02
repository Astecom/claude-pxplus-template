# Directives 

**V_SCROLLBAR** |  **_Create/Control Vertical Scrollbar_**  
---|---  
  
##  Formats

1\. _Define/Create_ _:_ |  **V_SCROLLBAR** _ctl_id_ , **@(**_col,ln,wth,ht_**)** **[** ,_ctrlopt_**]**  
---|---  
2\. _Define at Edge of Window_ _:_ |  **V_SCROLLBAR** _ctl_id_ **WINDOW [**_,ctrlopt_**]**  
3\. _Delete_ _:_ |  **V_SCROLLBAR REMOVE** _ctl_id_ **[** ,**ERR=**_stmtref_**]**  
4\. _Disable/Enable_ _:_ |  **V_SCROLLBAR {** **ENABLE** |**DISABLE }**  _ctl_id_ __**[** ,**ERR=**_stmtref_**]**  
5\. _Set Focus_ _:_ |  **V_SCROLLBAR GOTO** _ctl_id_ **[** ,**ERR=**_stmtref_**]**  
6\. _Read Setting_ _:_ |  **V_SCROLLBAR READ** _ctl_id_ _, setting, max_ **[**_,rgn_chg_**] [**_,arrow_chg_**] [** ,**ERR=**_stmtref_**]**  
7\. _Update_ _:_ |  **V_SCROLLBAR WRITE** _ctl_id_ _, marker, max_**[** ,**ERR=**_stmtref_**]**  
8\. _Hide/Show_ _:_ |  **V_SCROLLBAR { HIDE | SHOW }**_ctl_id_ __**[** ,**ERR=**_stmtref_**]**  
  
**_Where_**

**@(**_col,ln,wth,ht_**)** |  Position and size of the vertical scrollbar region. Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines.  
---|---  
_arrow_chg_ |  Amount to increase/decrease the **V_SCROLLBAR** setting when the user selects the arrow at the top/bottom edge of the vertical scrollbar. Numeric expression. (**_Default_** : 1)  
_ctl_id_ |  Unique logical identifier for a vertical scrollbar (any integer **-** 32000 to +32000). Avoid integers that conflict with keyboard definitions (e.g. 4 cancels CTL=4 for the **F4** key) or [**Negative CTL Definitions**](../appendix/negative_ctl_definitions.md).  
_ctrlopt_ |  Control options. The only supported option for **V_SCROLLBAR** is: |  **OPT=**_char$_ |  Single character parameter/option: |  "D" |  _Disabled_. User cannot access the scrollbar.  
---|---  
"d" |  Scrollbar is permanently disabled (cannot be enabled).  
"H" |  _Hide_. Do not display the scrollbar.  
"A" |  _Auto_. Generate CTL signal for each movement.  
"s" |  _Scroll_. Allow scroll within resizable/scrollable dialogue box.  
_marker_ |  Relative position to set as the **V_SCROLLBAR** _marker_. Numeric expression between 1 and the maximum.  
_max_ |  Logical maximum value of the **V_SCROLLBAR**. Numeric expression.  
_rgn_chg_ |  Amount to increase/decrease the **V_SCROLLBAR** setting when the user selects the region left/right of the marker. Numeric expression. (**_Default_** : max/width)  
_setting_ |  Numeric variable to receive the current scrollbar setting.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **V_SCROLLBAR** directive to create a vertical scrollbar control object on the screen. Your program logic can read and adjust a value by increments to control logical record position within a file every time the user moves the vertical scrollbar.

Use either **V_SCROLLBAR** Format 1 or Format 2 to define or create a vertical scrollbar. The value in _ctl_id_ gives the vertical scrollbar a unique identifier. This is generated as a CTL value whenever the vertical scrollbar is selected and changed. 

**_Vertical Scrollbar Properties_**

The [**Apostrophe Operator**](../appendix/apostrophe_operator.md) can be used with the unique logical identifier (_ctl_id_) to dynamically read and alter a wide variety of control attributes (properties) directly from the programming language.

See **[V_SCROLLBAR Properties](../control_object_properties/vscrollbar_properties.md)** for the list of properties available for manipulating a vertical scrollbar.

##  Format 1

**_Create_**

**V_SCROLLBAR** _ctl_id_ ,**@(**_col,ln,wth,ht_**)**[,_ctrlopt_]

Use this format to create a vertical scrollbar inside the current window.

**_Example:_**

> v_scrollbar 100,@(70,2,2,20)

This example defines a vertical scrollbar that is 2 columns wide, 20 lines high, starting at column 70 on line 2. Whenever the scrollbar is selected, a CTL=100 is generated.

##  Format 2

**_Define at Edge of Window_**

**V_SCROLLBAR** _ctl_id_ __**WINDOW**[,_ctrlopt_]

Use the **V_SCROLLBAR** format with **WINDOW** to create a vertical scrollbar at the edge of the window.

##  Format 3

**_Delete_**

**V_SCROLLBAR REMOVE** _ctl_id_[,**ERR** =_stmtref_]

Use the **V_SCROLLBAR REMOVE** format to delete the vertical scrollbar.

##  Format 4

**_Disable/Enable_**

**V_SCROLLBAR** {**DISABLE** | **ENABLE**} _ctl_id_ [,**ERR** =_stmtref_]

Use the **V_SCROLLBAR DISABLE** format to gray out a vertical scrollbar so that it will be visible but inaccessible to users. To reactivate it, use **V_SCROLLBAR ENABLE**.

##  Format 5

**_Set Focus_**

**V_SCROLLBAR GOTO** _ctl_id_[,**ERR** =_stmtref_]

Use the **V_SCROLLBAR GOTO** format to set the focus on the vertical scrollbar, ready for the user's next action.

##  Format 6

**_Read Setting_**

**V_SCROLLBAR READ** _ctl_id_ , _setting_ , _max_ ,[_rgn_chg_][,_arrow_chg_][,**ERR** =_stmtref_]

Use this format to read the current setting of the vertical scrollbar. Once a new position is selected, you must read it before your application can use the value to update the actual **V_SCROLLBAR** position.

**_Example:_**

> 0120 v_scrollbar read 100,X,1000  
>  0130 v_scrollbar write 100,X,1000

Line 0120 reads the scrollbar position relative to 1000 and line 0130 updates the settings.

##  Format 7

**_Update_**

**V_SCROLLBAR WRITE** _ctl_id_ ,_marker_ ,_max_[,**ERR** =_stmtref_]

Use the **V_SCROLLBAR WRITE** format to update or write the **V_SCROLLBAR** settings.

##  Format 8

**_Hide/Show_**

**V_SCROLLBAR** {**HIDE** | **SHOW**} _ctl_id_[,**ERR** =_stmtref_]

With the **V_SCROLLBAR HIDE** format, the scrollbar remains active but is not displayed. It is still accessible programmatically. Use the **SHOW** format to restore the display and user access.

##  See Also

**[V_SCROLLBAR Properties](../control_object_properties/vscrollbar_properties.md)**  
[**H_SCROLLBAR Create/Control Horizontal Scroll Bar**](h_scrollbar.md)  
[**H_SCROLLBAR Properties**](../control_object_properties/hscrollbar_properties.md)

##  Example

0100 ! 100 - Vertical Scrollbar Example  
0110 let VAL=1,MX=400,BJMP=25,SJMP=1  
0120 v_scrollbar 101,@(6,14,1,10)  
0130 v_scrollbar 102,@(15,14,2,10)  
0140 v_scrollbar 103,@(25,14,3,10)  
0150 v_scrollbar 104 window  
0160 input (0,hlp="V_SCROLLBAR")@(40,18),"Select...: ",'CL',X$  
0170 if ctl<101 or ctl>104 then goto 0210  
0180 v_scrollbar read ctl,VAL,MX,BJMP,SJMP  
0190 v_scrollbar write ctl,VAL,MX  
0200 print @(40,19),"Selection:",ctl,":",str(VAL),'CL',; goto 0160  
0210 if ctl=0 or ctl>=3 then stop else goto 0160
