# Directives 

**RADIO_BUTTON** |  **_Create/Control Radio Button_**  
---|---  
  
##  Formats

1. |  _Define/Create_ _:_ |  **RADIO_BUTTON** [*****]_ctl_id:sub_id_ ,**@(**_col,ln,wth,ht_**)** =_contents$_[,_ctrlopt_]  
---|---|---  
2. |  _Delete_ _:_ |  **RADIO_BUTTON REMOVE** [*****]_ctl_id:sub_id_[,**ERR=**_stmtref_]  
3. |  _Disable_ _:_ |  **RADIO_BUTTON** {**DISABLE**} [*****]_ctl_id:sub_id_[,**ERR=**_stmtref_]  
4. |  _Enable_ _:_ |  **RADIO_BUTTON** {**ENABLE**} [*****]_ctl_id:sub_id_[,**ERR=**_stmtref_]  
5. |  _Set Focus_ _:_ |  **RADIO_BUTTON GOTO** [*****]_ctl_id:sub_id_[,**ERR=**_stmtref_]  
6. |  _[Logical Push/Release](radio_button.htm#Mark19):_ |  **RADIO_BUTTON** {**ON** | **OFF**} [*****]_ctl_id:sub_id_[,**ERR=**_stmtref_]  
7. |  _Read Activation Mode_ _:_ |  **RADIO_BUTTON READ** [*****]_ctl_id,var,mode_ _$_[,**ERR=**_stmtref_]  
8. |  _Hide/Show_ _:_ |  **RADIO_BUTTON** {**HIDE** | **SHOW**} [*****]_ctl_id:sub_id_[,**ERR=**_stmtref_]  
  
**_Where_**:

***** |  Optional. Use a leading _asterisk_ to denote a _global_ radio button.  
---|---  
**@(**_col,ln,wth,ht_**)** |  Position and size of individual radio button. Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines are for total area (box plus text/description). Use line value -1 to display radio button on the tool bar.  
_contents$_ |  Text/pictures to appear on the radio button. PxPlus supports both {bitmap} and {icon} images _(as of PxPlus v4.20)_. String expression. See **[RADIO BUTTON Contents$](radio_button.htm#Mark5)**.  
_ctl_id_ |  Unique logical identifier for the radio button (any integer **-** 32000 to +32000). Avoid integers that conflict with keyboard definitions (e.g. 4 cancels CTL=4 for the **F4** key) or **[Negative CTL Definitions](../appendix/negative_ctl_definitions.md)**. Use this value with the **[Apostrophe Operator](../appendix/apostrophe_operator.md)** to access various **[RADIO_BUTTON Properties](../control_object_properties/radiobutton_properties.md)**.  
_ctrlopt_ |  Control options. Supported options for **RADIO_BUTTON** include: |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**FNT=** "_font,size_[_,attr_]" |  Font name, size, optional properties (See **['FONT'](../mnemonics/font.md)** mnemonic)  
**MSG=**_text$_ |  Message line  
**MNU=**_ctl_ |  CTL value associated with right-click menu event  
**OPT=**_char$_ |  Single character parameter/option (See **[RADIO_BUTTON OPT= Settings](radio_button.htm#Mark4)**)  
**TIP=**_text$_ |  Mouse pointer message (To change the colour, see **['TC'=](../parameters/tc.md)** system parameter)  
_mode$_ |  String variable. PxPlus returns a single-character Hex value in this variable to report the last method/keystroke the user chose to activate the button ($01$ for **MOUSE-CLICK** or $0D$ for **Enter**).  
_sub_id_ |  Unique individual index. Integer, range from 1 to 127. Used in applications to identify which radio button the user selects.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_var_ |  Numeric variable. Receives  _sub_id_ __ of currently activated radio button.  
  
##  Description

Use the **RADIO_BUTTON** directive to create and control a group of radio button control objects on the screen. A radio button group is a series of related circular/radio-knob buttons (akin to check boxes) of which only one button can be active at a time. When a user selects one of the radio buttons, that selection is activated (On) and all other related radio buttons are automatically reset to Off.

**_Radio Button Properties_**

The **[Apostrophe Operator](../appendix/apostrophe_operator.md)** can be used with the unique logical identifier (_ctl_id_) to dynamically read and alter a wide variety of control attributes (properties) directly from the programming language.

See **[RADIO_BUTTON Properties](../control_object_properties/radiobutton_properties.md)** for the list of properties available for manipulating a radio button control object.

**RADIO_BUTTON OPT=_Settings_**

The single character parameters for **OPT=**_char$_ are:

**Opt.** |  **Description**  
---|---  
**"^"** |  _Dropdown_. Creates a drop-down style button.  
**"*"** |  _Default_. Defines button as default.  
**"A"** |  _Default Font Settings_. The default font settings of the control will be used. Since the default font setting of a button control is left justified, the "A" setting will result in left justification in most cases. To force a right, left or center justification, use the **[FNT=](radio_button.htm#Mark25)** setting and make sure that you have a **['4D'](../mnemonics/4d.md)** mnemonic enabled. Right justification of buttons with a graphic are possible only with the **['4D'](../mnemonics/4d.md)** mnemonic turned On. See **['2D'](../mnemonics/2d.md)** and **['3D'](../mnemonics/3d.md)** mnemonics. **_Example:_** print '2D';  
radio_button 100:1,@(60,5,20,1.5)="{!Stop}Test",opt="A",fnt="Arial,,R"  
print '3D';  
radio_button 100:2,@(60,7,20,1.5)="{!Stop}Test",opt="A",fnt="Arial,,R"  
print '4D';  
radio_button 100:3,@(60,9,20,1.5)="{!Stop}Test",opt="A",fnt="Arial,,R"  
escape Right justification works in '2D' or '3D' mode if the graphic is removed from the button. **_Example:_** print '2D';  
radio_button 100:1,@(60,5,20,1.5)="Test",opt="A",fnt="Arial,,R"  
print '3D';  
radio_button 100:2,@(60,7,20,1.5)="Test",opt="A",fnt="Arial,,R"  
escape  
**"B"** |  _Bitmap Button_. Has a bitmap whose width is divided into four images. Use this attribute to custom design buttons of any color, style or shape by controlling the bitmap image that appears. Each of the four divisions represents what a button will look like in a particular state: |  _1st quarter_ |  Bitmap image when button is disabled.  
---|---  
_2nd quarter_ |  Bitmap image when button is in normal (released) state.  
_3rd quarter_ |  Bitmap image when the mouse is over the button.  
_4th quarter_ |  Bitmap image when the button is pressed.  
  
#### **Note:  
** Quarters are _horizontal_ quarters, meaning that if a bitmap is 100 pixels wide, the first quarter of the image is the first 25 pixels wide full height, as in [1][2][3][4], rather than as top left/right and bottom left/right, as in .  
  
**"C"** |  _Bitmap Centered_. Places the bitmap centered and scaled to fill the button. Button text, if present, will be centered and overlay the image. _(The "C" option was added in PxPlus 2018 Update 1.)_  
**"D"** |  _Disabled_. Button is grayed out and is not accessible to the user.  
**"d"** |  Button is permanently disabled (cannot be enabled).  
**"F"** |  _Flat_. Button shows no raised outline unless the mouse is over the button or the button is pushed.  
**"f"** |  _Flat - No Shift_. Same as "F" but will not shift when pressed.  
**"H"** |  _Hide_. Button is not displayed but is accessible programmatically.  
**"K"** |  _Keyboard_. Pass back keyboard input.  
**"o"** |  _Mouse Over_. Button steals focus on mouse over. Focus returns to normal location when mouse moves off region.  
**"S"** |  _Signal Only_. PxPlus generates a CTL value but does not shift focus to the button automatically (the default), but only when focus is explicitly passed to it. Use this to have a button act like a function key.  
**"s"** |  _Scroll_. Button can scroll within a resizable/scrollable dialogue box.  
**"T"** |  _Transparent_. Button is "see-through" to window data below button area.  
**"U"** |  _Hyperlink - Underscore_. Text is underscored, displayed in hyperlink colour, and highlighted on mouse-over.  
**"u"** |  _Hyperlink - No Underscore_. Same as "U" but without the underscore.  
**"V"** |  _Hovertext_. Indicates that text will change color when mouse is over the button.  
  
Options can be combined to create several different button types. The "f", "T", "U", "u", and "o" options provide the ability to turn buttons into **_hotspots_**. This allows for clickable areas on bitmaps, or items such as HTTP URL links on dialogues.

**_Example:_**

|  "VTf" |  Creates a general hotspot.  
---|---|---  
|  "VUTf" |  Creates an HTML-like hotspot.  
|  "F^" |  Creates a word-style toolbar with drop list.  
  
**RADIO BUTTON _Contents$_**

The _contents$_ string expression defines the text/picture (bitmap or icon) to appear on the radio button. In the text, you can use an "**&** " (_ampersand_) preceding a character to identify it as a hot key that the user can press in conjunction with the **Alt** key to activate the radio button from the keyboard. Add a **:** (_colon_) to the end of the text field to force the text to display to the left side.

**_Example:_**

> radio_button 100:1,@(2,14,12,2)="&Daily"  
> radio_button 100:2,@(2,16,12,2)="&Weekly"  
> radio_button 100:3,@(2,18,12,2)="&Monthly"

This would create a group of three radio buttons that will each generate a CTL=100 when pressed. Their individual _sub_id_ s are 1, 2 and 3. Their respective hot keys are Alt-D, Alt-W and Alt-M.

**_Bitmaps and Icons_**

When adding an image to a radio button, enclose the image name in curly braces. Use a leading exclamation point (!) to identify the image as internal, or specify the relative path and filename to access an image file that is external. There are no icons in the PxPlus executable but it does support retrieving icons from either resource libraries or other system DLLs /executables.

For more information on internal/external images and recognized image file types, see **[Displaying Bitmaps/Icons](../appendix/displaying_bitmaps~icons.md)**.

#### **Note:**  
PxPlus supports alpha channel transparency processing of bitmap images for radio buttons (for **_console output only_** , not printer and PDF).  
  
_(Alpha channel support was added in PxPlus 2017.)_

When you use text as well as images, the relative positions of the image and the text set their relative placement. The following are example _contents$_ expressions:

> "{!Add}Add" ! Displays the {!Add} bitmap in front of the text "Add"_  
> _ "Delete{!Del}" ! Displays the {!Del} bitmap after the text "Delete"

If a string expression includes two images separated by a vertical bar inside a single set of curly brackets, the first will be displayed when the radio button is Off (normal state), the second while the radio button is On.

**_Example:_**

> "{!Stop|C:\MYBMP\Go}

##  Format 1

**_Define/Create_**

**RADIO_BUTTON**[*]_ctl_id:sub_id_ ,**@(**_col,ln,wth,ht_**)** =_contents$_[,_fileopt_]

Use this format to create a radio button. Unlike most other controls, related radio buttons share the same _ctl_id_ ; that is, to group common radio buttons together, you define each member of the group using the same _ctl_id_ and a different _sub_id_ (index). When the user makes a selection, other radio button _sub_id_ s in the same  _ctl_id_ group are turned Off or lose focus.

The group _ctl_id_ value generates a CTL value whenever any radio button in the group is pressed and must be unique. Use an _asterisk_ [*] as a prefix for _ctl_id_ to identify the group of radio buttons as _global_ (not tied to a specific window).

##  Format 2

**_Delete_**

**RADIO_BUTTON**[*]_ctl_id:sub_id_[,**ERR=**_stmtref_]

Use the **RADIO_BUTTON REMOVE** format to delete a radio button. By default, all local radio buttons are deleted when a window is removed/dropped or the application issues a **BEGIN**.

_Global_ radio buttons can be removed manually or cleared with a **[START](start.md)** directive.

##  Format 3

**_Disable_**

**RADIO_BUTTON**{**DISABLE**}[*]_ctl_id:sub_id_[,**ERR=**_stmtref_]

Use the **RADIO_BUTTON DISABLE** format to gray out a radio button and make it inaccessible to the user.

##  Format 4

**_Enable_**

**RADIO_BUTTON**{**ENABLE**}[*]_ctl_id:sub_id_[,**ERR=**_stmtref_]

Use the **RADIO_BUTTON ENABLE** format to restore a disabled radio button.

##  Format 5

**_Set Focus To_**

**RADIO_BUTTON GOTO**[*]_ctl_id:sub_id_[,**ERR=**_stmtref_]

Use the **RADIO_BUTTON GOTO** format to set the focus on the radio button, ready for the user's next action.

##  Format 6

**_Logical Push, Release_**

**RADIO_BUTTON**{**ON** |**OFF**}[*]_ctl_id:sub_id_[,**ERR=**_stmtref_]

Use the **RADIO_BUTTON ON** format as a logical push to make it appear that the radio button has been pressed.

Use **RADIO_BUTTON OFF** to make it appear that the radio button has been released.

##  Format 7

**_Read Activation Mode_**

**RADIO_BUTTON READ**[*]_ctl_id,var,mode_ _$_[,**ERR=**_stmtref_]

The **RADIO_BUTTON READ** format returns the _sub_id_ for the currently active radio button in your numeric variable. (The value is 0 if none are active.) PxPlus returns a single-character Hex value for the mode/keystroke the user chose to activate the last radio button.

Possible values returned in _mode$_ can include:

> $01$ for **MOUSE-CLICK**  
>  $0D$ for **Enter**  
>  $20$ for **SPACEBAR**(and keyboard hot key)  
>  $00$ when the user exits the button control

To determine which **RADIO_BUTTON** _sub_id_ has been pressed and the mode used:

> radio_button read 1000,which,how$

##  Format 8

**_Hide/Show_**

**RADIO_BUTTON**{**HIDE** |**SHOW**}[*]_ctl_id:sub_id_[,**ERR=**_stmtref_]

With the**RADIO_BUTTON HIDE** format, the radio button remains active but is not displayed. It is still accessible programmatically.

Use the **SHOW** format to restore the display and user access.

##  See Also

**[RADIO_BUTTON Properties](../control_object_properties/radiobutton_properties.md)**  
**[BUTTON Create/Control Button](button.md) _  
_ [CHECK_BOX Create/Control Check Box](check_box.md)** _  
_**[TRISTATE_BOX Create/Control Tristate Box](tristate_box.md)**
