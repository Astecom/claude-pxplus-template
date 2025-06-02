# Directives

**H_SCROLLBAR** |  **_Create/Control Horizontal Scrollbar_**  
---|---  
  
##  Formats

1. |  _Define/Create:_ |  **H_SCROLLBAR** _ctl_id_ ,**@(**_col,ln,wth,ht_**)**[,_ctrlopt_]  
---|---|---  
2. |  _Define at Edge of Window:_ |  **H_SCROLLBAR** _ctl_id_ __**WINDOW**[,_ctrlopt_]  
3. |  _Delete:_ |  **H_SCROLLBAR REMOVE** _ctl_id_[,**ERR** =_stmtref_]  
4. |  _Disable/Enable:_ |  **H_SCROLLBAR** {**DISABLE** | **ENABLE**} _ctl_id_ [,**ERR** =_stmtref_]  
5. |  _Set Focus:_ |  **H_SCROLLBAR GOTO** _ctl_id_[,**ERR** =_stmtref_]  
6. |  _[Read Setting](h_scrollbar.htm#Mark16):_ |  **H_SCROLLBAR READ** _ctl_id_ ,_setting_ ,_max_ ,[_rgn_chg_][,_arrow_chg_][,**ERR** =_stmtref_]  
7. |  _Update:_ |  **H_SCROLLBAR WRITE** _ctl_id_ ,_marker_ ,_max_[,**ERR** =_stmtref_]  
8. |  _Hide/Show:_ |  **H_SCROLLBAR** {**HIDE** | **SHOW**} _ctl_id_[,**ERR** =_stmtref_]  
  
**_Where:_**

**@(**_col,ln,wth,ht_**)** |  Position and size of the horizontal scrollbar region. Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines.  
---|---  
_arrow_chg_ |  Amount to increase/decrease the **H_SCROLLBAR** setting when the user selects the **_arrow_** at the left/right edge of the horizontal scrollbar. Numeric expression. (**_Default_** : 1)  
_ctl_id_ |  Unique logical identifier for a horizontal scrollbar (any integer **-** 32000 to +32000). Avoid integers that conflict with keyboard definitions (e.g. 4 cancels CTL=4 for the **F4** key) or **[Negative CTL Definitions](../appendix/negative_ctl_definitions.md)**. Use this value with the **[Apostrophe Operator](../appendix/apostrophe_operator.md)** to access various **[H_SCROLLBAR Properties](../control_object_properties/hscrollbar_properties.md)**.  
_ctrlopt_ |  Control options. Supported options for **H_SCROLLBAR** include: |  **ERR=**_stmtref_ |  Error transfer.  
---|---  
**OPT=**_char$_ |  Single character parameters: |  "D" |  _Disabled_. User cannot access the scrollbar.  
---|---  
"d" |  Scrollbar is permanently disabled (cannot be enabled).  
"H" |  _Hide_. Do not display the scrollbar.  
"A" |  _Auto_. Generate CTL signal for each movement.  
"s" |  _Scroll_. Allow scroll within resizable/scrollable dialogue box.  
_marker_ |  **H_SCROLLBAR** _setting_. Numeric expression between 1 and the maximum, _max._  
_max_ |  Logical maximum value of the **H_SCROLLBAR**. Numeric expression.  
_rgn_chg_ |  Amount to increase/decrease the **H_SCROLLBAR** setting when the user selects the _region_ left/right of the _marker_. Numeric expression. (**_Default_** : maximum width)  
_setting_ |  Numeric variable to receive the current scrollbar setting.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **H_SCROLLBAR** directive to create a horizontal scrollbar control object on the screen. Your program logic can read and adjust a value by increments to control logical column position within a record every time the user moves the horizontal scrollbar control object.

**_Horizontal Scrollbar Properties_**** __**

The **[Apostrophe Operator](../appendix/apostrophe_operator.md)** can be used with the unique logical identifier (_ctl_id_) to dynamically read and alter a wide variety of control attributes (properties) directly from the programming language.

See **[H_SCROLLBAR Properties](../control_object_properties/hscrollbar_properties.md)** for the list of properties available for manipulating a horizontal scrollbar.

##  Format 1

**_Define/Create_**  
  
**H_SCROLLBAR** _ctl_id_ ,**@(**_col,ln,wth,ht_**)**[,_ctrlopt_]  
  
When you create the **H_SCROLLBAR** , the value in _ctl_id_ is the unique identifier for it. This value is used to generate a CTL value whenever a user selects and moves the horizontal scrollbar.

**_Example:_**

This example defines a scrollbar 70 columns wide and 1 line high, starting at column 5 on line 20. Whenever the horizontal scrollbar is selected, a CTL value 10000 will be generated:

> h_scrollbar 10000,@(5,20,70,1)

#### **Note:**  
Once a new position is selected, you must read it before your application can use the value to update the actual horizontal scrollbar position.

##  Format 2

**_Define at Edge of Window_**** _  
_**  
**H_SCROLLBAR** _ctl_id_ __**WINDOW**[,_ctrlopt_]  
  
Scrollbars can appear either within the current window or at the edge of the window. Use the **WINDOW** keyword to have your horizontal scrollbar appear at the edge of the window.

##  Format 3

**_Delete_**** _  
_**  
**H_SCROLLBAR REMOVE** _ctl_id_[,**ERR** =_stmtref_]  
  
Use the **H_SCROLLBAR REMOVE** format to delete the horizontal scrollbar.

##  Format 4

**_Disable/Enable_**** _  
_**  
**H_SCROLLBAR** {**DISABLE** | **ENABLE**} _ctl_id_ [,**ERR** =_stmtref_]  
  
Use the **H_SCROLLBAR DISABLE** format to gray out a horizontal scrollbar so that it will be visible but _inaccessible_ to users. To reactivate it, use **H_SCROLLBAR ENABLE**.

##  Format 5

**_Set Focus_**** _  
_**  
**H_SCROLLBAR GOTO** _ctl_id_[,**ERR** =_stmtref_]  
  
Use the **H_SCROLLBAR GOTO** format to set the focus on your horizontal scrollbar, ready for the user's next action.

##  Format 6

**_Read Setting_**  
  
**H_SCROLLBAR READ** _ctl_id_ ,_setting_ ,_max_ ,[_rgn_chg_][,_arrow_chg_][,**ERR** =_stmtref_]  
  
Use the **H_SCROLLBAR READ** format to read the **H_SCROLLBAR** settings.

**_Example:_**

To read the horizontal scrollbar position relative to 1000:

> h_scrollbar read 100,X,1000

##  Format 7

**_Update_**** _  
_**  
**H_SCROLLBAR WRITE** _ctl_id_ ,_marker_ ,_max_[,**ERR** =_stmtref_]  
  
Use the **H_SCROLLBAR WRITE** format to update or write the **H_SCROLLBAR** settings.

##  Format 8

**_Hide/Show_**** _  
_**  
**H_SCROLLBAR** {**HIDE** | **SHOW**} _ctl_id_[,**ERR** =_stmtref_]  
  
With the**H_SCROLLBAR HIDE** format, the scrollbar remains active but is not displayed. It is still accessible programmatically. Use the **SHOW** format to restore the display and user access.

##  See Also

**[H_SCROLLBAR Properties](../control_object_properties/hscrollbar_properties.md)  
[V_SCROLLBAR Create/Control Vertical Scrollbar](v_scrollbar.md)**  
**[V_SCROLLBAR Properties](../control_object_properties/vscrollbar_properties.md)**

##  Example

0100 ! 100 - Horizontal Scrollbar Example  
0110 let VAL=1,MX=400,BJMP=25,SJMP=1  
0120 h_scrollbar 101,@(5,16,18,1)  
0130 h_scrollbar 102,@(5,18,45,2)  
0140 h_scrollbar 103,@(5,21,60,3)  
0150 h_scrollbar 104 window  
0160 input (0,hlp="H_SCROLLBAR")@(60,18),"Select...: ",'CL',X$  
0170 if ctl<101 or ctl>104 then goto 0210  
0180 h_scrollbar read ctl,VAL,MX,BJMP,SJMP  
0190 h_scrollbar write ctl,VAL,MX  
0200 print @(60,19),"Selection:",ctl,":",str(VAL),'CL',; goto 0160  
0210 if ctl=0 or ctl>=3 then stop else goto 0160
