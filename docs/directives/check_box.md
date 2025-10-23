# Directives 

**CHECK_BOX** |  **_Create/Control Check Box_**  
---|---  
  
##  Formats

1. |  _Define/Create_ _:_ |  **CHECK_BOX** [*****]_ctl_id_ ,**@(**_col,ln,wth,ht_**)** =_contents$_[,_ctrlopt_]  
---|---|---  
2. |  _Delete_ _:_ |  **CHECK_BOX REMOVE** [*****]_ctl_id_[,**ERR=**_stmtref_]  
3. |  _Disable/Enable_ _:_ |  **CHECK_BOX** {**DISABLE** | **ENABLE**}[*****]_ctl_id_[,**ERR=**_stmtref_]  
4. |  _Set Focus To_ _:_ |  **CHECK_BOX GOTO** [*****]_ctl_id_[,**ERR=**_stmtref_]  
5. |  _Logical On/Off_ _:_ |  **CHECK_BOX** {**ON** | **OFF**}[*****]_ctl_id_[,**ERR=**_stmtref_]  
6. |  _Read Activation Status_ _:_ |  **CHECK_BOX READ** [*****]_ctl_id,state_ _$_[_,mode$_][,**ERR=**_stmtref_]  
7. |  _Update_ _:_ |  **CHECK_BOX WRITE** [*****]_ctl_id_ ,_state_ _$_[,**ERR=**_stmtref_]  
8. |  _Notify re: Focus_ _:_ |  **CHECK_BOX SET_FOCUS** _ctl_id_**,**_ctl_val_[,**ERR=**_stmtref_]  
9. |  _Hide/Show_ _:_ |  **CHECK_BOX** {**HIDE** | **SHOW**}[*****]_ctl_id_[,**ERR=**_stmtref_]  
  
**_Where_**** _:_**

***** |  Optional. Use a leading _asterisk_ to denote a **_global_** check box.  
---|---  
**@(**_col,ln,wth,ht_**)** |  Position and size of the check box region. Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines. Note that width and height are for the total area (box plus text/description). Use line value -1 to display the check box on the tool bar.  
_contents$_ |  Text/pictures to appear on the check box. PxPlus supports both {bitmap} and {icon} images _(as of PxPlus v4.20)_. String expression. See **CHECK_BOX Contents$**.  
_ctl_id_ |  Unique logical identifier for the check box (any integer **-** 32000 to +32000). Avoid integers that conflict with keyboard definitions (e.g. 4 cancels CTL=4 for the **F4** key) or [**Negative CTL Definitions**](../appendix/negative_ctl_definitions.md). Use this value with the apostrophe operator to access various [**CHECK_BOX Properties**](../control_object_properties/checkbox_properties.md).  
_ctrlopt_ |  Control options. Supported options for **CHECK_BOX** include: |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**FNT=**_"font,size_[_,attr_]_"_ |  Font name, size, optional properties (See [**'FONT'**](../mnemonics/font.md) mnemonic)  
**MNU=**_ctl_ |  CTL value associated with right-click menu event  
**MSG=**_text$_ |  Message line  
**OPT=**_char$_ |  Single character parameter/option (See **CHECK_BOX OPT= Settings**)  
**TBL=**_char$_ |  Single character translation  
**TIP=**_text$_ |  Mouse pointer message (To change the colour, see [**'TC'=**](../parameters/tc.md) system parameter)  
_ctl_val_ |  CTL value to generate when focus goes to the input field.  
_mode$_ |  String variable. PxPlus returns a single-character Hex value in this variable to report the last method/keystroke the user chose to toggle the check box ($01$ for **MOUSE-CLICK** or $0D$ for **Enter**).  
_state_ |  Current state of the check box (0=OFF, 1=ON).  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **CHECK_BOX** directive to create check box control objects on the screen. The user can toggle check boxes between two states: **ON** to _check_ the option or **OFF** to _uncheck_ it. If you need a **_third_** state for a check box, see [**TRISTATE_BOX**](tristate_box.md) directive.

**_Check Box Properties_**

The **[Apostrophe Operator](../appendix/apostrophe_operator.md)** can be used with the unique logical identifier (_ctl_id_) to dynamically read and alter a wide variety of control attributes (properties) directly from the programming language.

See **[CHECK_BOX Properties](../control_object_properties/checkbox_properties.md)** for the list of properties available for manipulating a check box object.

**CHECK_BOX OPT=_Settings_**

The single character parameters for **OPT=**_char$_ are listed below:

> **Opt.** |  **Description**  
> ---|---  
> **" <"** |  _Bitmap Left._ Places bitmap left of text.  
> **" >"** |  _Bitmap Right._ Places bitmap right of text.  
> **"_"** |  _Bitmap Below._ Places bitmap below text.  
> **"~"** |  _Bitmap Above._ Places bitmap above text.  
> **"^"** |  _Dropdown.___ Creates a drop-down style check box. When the drop-down portion of the button is clicked, the system will generate the CTL value associated with the **MNU=**_ctl_ __ option. Generally, the program (or NOMADS) will then display a POPUP_MENU associated with the button.  
> **"*"** |  _Default.___ Defines check box as default push button.  
> **"A"** |  _Default Font Settings._ The default font settings of the control will be used. Since the default font setting of a check box control is left justified, the "A" setting will result in left justification in most cases. To force a right, left or center justification, use the **[FNT=](radio_button.htm#Mark25)** setting and make sure that you have a **['4D'](../mnemonics/4d.md)** mnemonic enabled. Right justification of check boxes with a graphic are possible only with the **['4D'](../mnemonics/4d.md)** mnemonic turned On. See also **['2D'](../mnemonics/2d.md)** and **['3D'](../mnemonics/3d.md)** mnemonics. **_Example:_** print '2D';  
>  check_box 10,@(60,5,20,1.5)="{!Stop}Test",opt="A",fnt="Arial,,R"  
>  print '3D';  
>  check_box 11,@(60,7,20,1.5)="{!Stop}Test",opt="A",fnt="Arial,,R"  
>  print '4D';  
>  check_box 12,@(60,9,20,1.5)="{!Stop}Test",opt="A",fnt="Arial,,R"  
>  escape Right justification works in '2D' or '3D' mode if the graphic is removed from the check box. print '2D';  
>  check_box 10,@(60,5,20,1.5)="Test",opt="A",fnt="Arial,,R"  
>  print '3D';  
>  check_box 11,@(60,7,20,1.5)="Test",opt="A",fnt="Arial,,R"  
>  escape  
> **"B"** |  _Bitmap Button._ Has a bitmap whose width is divided into four images. Use this attribute to custom design buttons of any color, style or shape by controlling the bitmap image that appears. Each of the four divisions represents what a button will look like in a particular state: |  _1st quarter_ |  Bitmap image when button is disabled.  
> ---|---  
> _2nd quarter_ |  Bitmap image when button is in normal (released) state.  
> _3rd quarter_ |  Bitmap image when the mouse is over the button.  
> _4th quarter_ |  Bitmap image when the button is pressed.  
>   
> #### **Note:  
> ** Quarters are _horizontal_ quarters, meaning that if a bitmap is 100 pixels wide, the first quarter of the image is the first 25 pixels wide full height, as in [1][2][3][4], rather than as top left/right and bottom left/right, as in .  
>   
> **"C"** |  _Bitmap Centered._ Places the bitmap centered and scaled to fill the button. Button text, if present, will be centered and overlay the image. _(The "C" option was added in PxPlus 2018 Update 1.)_  
> **"D"** |  _Disabled.___ Check box is grayed out and is not accessible to the user.  
> **"d"** |  Check box is permanently disabled (cannot be enabled).  
> **"F"** |  _Flat_. Check box shows no raised outline unless the mouse is over the button or the button is pushed.  
> **"f"** |  _Flat - No Border._ Same as "F" but has no border.  
> **"H"** |  _Hide._ Check box is not displayed but is accessible programmatically.  
> **"O"** |  _Steal Focus._ Check box will steal focus from other controls when the mouse moves over the button.  
> **"P"** |  _Sticky - Pressed._ Check box remains in the "pressed" position until next selection.  
> **"S"** |  _Signal Only._ PxPlus generates a CTL value but does not shift focus to the check box automatically (the default), but only when focus is explicitly passed to it. Use this to have a button act like a function key.  
> **"s"** |  _Scroll._ Button can scroll within a resizable/scrollable dialogue box.  
> **"T"** |  _Transparent.___ Button is "see-through" to window contents below button area.  
> **"U"** |  _Hyperlink - Underscore._ Text is underscored, displayed in hyperlink colour, and highlighted on mouse-over.  
> **"u"** |  _Hyperlink - No Underscore._ Same as "U" but without the underscore.  
> **"V"** |  _Hovertext_ _.___ Indicates that text will change color when mouse is over the button.  
  
Options can be combined to create several different button types. The "f", "T", "U", "u" and "O" options provide the ability to turn buttons into **_hotspots_**. This allows for clickable areas on bitmaps or items such as HTTP URL links on dialogues.

**_Example:_**

> "VTf" |  Creates a general hotspot.  
> ---|---  
> "VUTf" |  Creates an HTML-like hotspot.  
> "F^" |  Creates a word-style toolbar with drop list.  
  
**CHECK_BOX _Contents$_**

The _contents$_ string expression defines the text or picture to appear on the check box. In the text, you can use an **&** (_ampersand_) preceding a character to identify it as a hot key the user can press in conjunction with the **Alt** key to activate the check box from the keyboard. By default, the text is displayed to the right of a check box. Add a **:** (_colon_) to the end of the text field to force the text to display to the left side.

**_Bitmaps and Icons_**

When adding an image to a check box, enclose the image name in curly braces. Use a leading **!** (_exclamation_ _point_) to identify the image as internal, or specify the relative path and filename to access an image file that is external. There are no icons in the PxPlus executable, and PxPlus does not support retrieving icons from either resource libraries or other system DLLs/executables. For more information on internal/external images and recognized image file types, see [**Displaying Bitmaps/Icons**](../appendix/displaying_bitmaps~icons.md).

#### **Note:**  
PxPlus supports alpha channel transparency processing of bitmap images for check boxes (for **_console output only_** , not printer and PDF).  
  
_(Alpha channel support was added in PxPlus 2017.)_

When you use text as well as images, the relative positions of the image and the text set their relative placement. The following are examples of _contents$_ expressions:

> "{!Add}Add" ! Displays the {!Add} bitmap in front of the text "Add"  
>  "Delete{!Del}" ! Displays the {!Del} bitmap after the text "Delete"

If you enclose two images separated by a **|** (_pipe_ or vertical bar) in a single set of curly braces, the first will be displayed when the **CHECK_BOX** state is 0 (zero for OFF/normal state), the second when the **CHECK_BOX** state is 1 (ON):

> "{!Stop|C:\MYBMP\Go}"

You can also use the **OPT="B"** clause for a _Bitmap Button_ to display different images for different states.

##  Format 1

**_Define/Create_**

**CHECK_BOX** [*****]_ctl_ __id_ ,**@(**_col,ln,wth,ht_**)** =_contents$_[,_ctrlopt_]

Use this format to create a check box. The _ctl_id_ is a unique value that is used to generate a CTL value whenever the user toggles the box:

> rem Create check box, CTL=100, Text="Post Month End", ALT-P to select box  
>  check_box 100,@(60,20,20,2)="&Post Month End"

If the _ctl_id_ __ has a leading ***** (_asterisk_), the check box is considered global (not tied to a specific window).

##  Format 2

**_Delete_**

**CHECK_BOX REMOVE** [*****]_ctl_ __id_[,**ERR=**_stmtref_]

Use the **CHECK_BOX REMOVE** format to delete a check box. Note that, by default, all check boxes that are not global are deleted when a window is removed or dropped, and on a **BEGIN** :

> 0030 check_box remove *17000 ! Removes global check box 17000

Global check boxes can be removed using the above syntax or cleared using the **START** directive.

##  Format 3

**_Disable/Enable_**

**CHECK_BOX** {**DISABLE** | **ENABLE**}[*****]_ctl_id_[,**ERR=**_stmtref_]

Use the **CHECK_BOX DISABLE** format to gray out a check box so that it will be visible but inaccessible to users. To reactivate it, use **CHECK_BOX ENABLE** :

> 0030 check_box enable 100

##  Format 4

**_Set Focus To_**

**CHECK_BOX GOTO** [*****]_ctl_ __id_[,**ERR=**_stmtref_]

Use the **CHECK_BOX GOTO** format to set the focus on a check box, ready for the user's next input:

> 0030 check_box goto 110

##  Format 5

**_Logical On/Off_**

**CHECK_BOX** {**ON** | **OFF**}[*****]_ctl_id_[,**ERR=**_stmtref_]

Use the **CHECK_BOX**{**ON** | **OFF**} format to make it appear that a check box is depressed or released:

> 0030 check_box off 110,err=0040

#### **Note:**  
This does not alter its state; i.e. "checked" or "unchecked". Use **[CHECK_BOX WRITE](check_box.htm#Mark20)** for that function.

##  Format 6

**_Read Activation Status_**

**CHECK_BOX READ** [*****]_ctl_ __id,state_ _$_[_,mode$_][,**ERR=**_stmtref_]

Use the **CHECK_BOX READ** format to receive the current _state_ of the check box ("0"= OFF and "1"= ON). Use the second (optional) string variable to have PxPlus return the user's method of toggling the check box. Once read, this field is reset to $00$. Possible values are:

> $01$ for **MOUSE-CLICK**  
>  $02$ for **DOUBLE MOUSE-CLICK**  
>  $0D$ for **Enter**  
>  $20$ for **SPACEBAR**(and keyboard Hot Key, as in the CHECK_BOX Example below)  
>  $00$ when the user exits the check box

Read the user's selection(s) to make them available to your applications. In the example below, the ON_OFF$ variable receives the current ON/OFF state, and for STROKE$, PxPlus returns $20$ when the user makes the selection using either **SPACEBAR** or the &T hot key **Alt -T**.

**_Example:_**

> ! CHECK_BOX Example  
>  print 'CS';  
>  list  
>  check_box 90,@(40,17,25,3)="&Toggle for Status"  
>  C_BX=90;  
>  C_BX'BACKCOLOUR$="LIGHT CYAN"  
>  setctl C_BX:READ_BOX  
>  check_box goto C_BX  
>  print @(40,24),"HotKey=<Alt-T>. Try Mouse and keyboard too. END=<F4>"  
>  GETINPUT:  
>  obtain (0,siz=1,err=GETINPUT)@(0,0),'cursor'("off"),'ME',IN_VAR$,'MN';  
>  CT=ctl  
>  if CT=4 \  
>  then goto END  
>  READ_BOX:  
>  check_box read C_BX,ON_OFF$,STROKE$  
>  ! WRITE_BOX  
>  check_box write C_BX,ON_OFF$  
>  print @(40,20),"Current Status: ",ON_OFF$  
>  print @(40,21),"Key Stroke : ",hta(STROKE$)

##  Format 7

**_Update_**

**CHECK_BOX WRITE** [*****]_ctl_ __id,state_ _$_[,**ERR=**_stmtref_]

Use the **CHECK_BOX WRITE** format to update the check box's state:

> ! WRITE C_BX  
>  ON_OFF$="0"  
>  check_box write C_BX,ON_OFF$

How the value written to the check box will be interpreted is as follows:

  * If the value is one of the translation table values, its position in the table defines the state (First=OFF, Second=ON).
  * If the value is "1", set ON.
  * If the value is "0", "N" or NULL (""), set OFF.
  * Any other value sets the check box ON.



##  Format 8

**_Notify re: Focus_**

**CHECK_BOX SET_FOCUS** _ctl_id_**,**_ctl_ __val_[,**ERR=**_stmtref_]

This format generates a CTL value whenever focus shifts to the input region.

##  Format 9

**_Hide/Show_**

**CHECK_BOX** {**HIDE** | **SHOW**}[*****]_ctl_id_[,**ERR=**_stmtref_]

Use the **CHECK_BOX HIDE** format to keep a check box from being displayed. Use the **CHECK_BOX SHOW** format to restore the display of a hidden check box.

##  See Also

**[CHECK_BOX Properties](../control_object_properties/checkbox_properties.md)  
** [**TRISTATE_BOX Create/Control Tristate Box**](tristate_box.md)  
[**BUTTON Create/Control Button**](button.md)  
[**RADIO_BUTTON Create/Control Radio Button**](radio_button.md)
