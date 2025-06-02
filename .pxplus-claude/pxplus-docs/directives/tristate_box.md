# Directives 

**TRISTATE_BOX** |  **_Create/Control Tristate Box_**  
---|---  
  
##  Formats

1. |  _Define/Create_ _:_**__**|  **TRISTATE_BOX** [*****]_ctl_id_ ,**@(**_col,ln,wth,ht_**)** =_contents$_[,_option_]  
---|---|---  
2. |  _Delete_ _:_ |  **TRISTATE_BOX REMOVE** [*****]_ctl_id_[,**ERR=**_stmtref_]  
3. |  _Disable/Enable_ _:_ |  **TRISTATE_BOX** {**ENABLE** | **DISABLE**} [*****]_ctl_id_[,**ERR=**_stmtref_]  
4. |  _Set Focus_ _:_ |  **TRISTATE_BOX GOTO** [*****]_ctl_id_[,**ERR=**_stmtref_]  
5. |  _Logical Push/Release_ _:_ |  **TRISTATE_BOX** {**ON** | **OFF**} [*****]_ctl_id_[,**ERR=**_stmtref_]  
6. |  _Read Activation State_: |  **TRISTATE_BOX READ** [*****]_ctl_id,state_ _$_[,**ERR=**_stmtref_]  
7. |  _Update_ _:_ |  **TRISTATE_BOX WRITE** [*****]_ctl_id,state_ _$_[,**ERR=**_stmtref_]  
  
**_Where_**

***** |  Optional. Use a leading _asterisk_ to denote a **_global_** tristate box.  
---|---  
**@(**_col,ln,wth,ht_**)** |  Position and size of the tristate box region. Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines. Note that width and height are for the _total_ area (box plus text/description). Use line value -1 to display the check box on the tool bar.  
_contents$_ |  Text/pictures to appear on the tristate box. Both {bitmap} and {icon} images are supported. String expression. See **TRISTATE_BOX Contents$**.  
_ctl_id_ |  Unique logical identifier for a tristate box control (any integer **-** 32000 to +32000). Avoid integers that conflict with keyboard definitions (e.g. 4 cancels CTL=4 for the **F4** key) or [**Negative CTL Definitions**](../appendix/negative_ctl_definitions.md). Use this value with the **[Apostrophe Operator](../appendix/apostrophe_operator.md)** to access various [**TRISTATE_BOX Properties**](../control_object_properties/tristate_box_properties.md).  
_ctrlopt_ |  Control options. Supported options for **TRISTATE_BOX** include: |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**FNT=**_"font,size_[_,attr_]_"_ |  Font name, size, optional properties (See [**'FONT'**](../mnemonics/font.md) mnemonic)  
**MNU=**_ctl_ |  CTL value associated with right-click menu event  
**MSG=**_text$_ |  Message line  
**OPT=**_char$_ |  Single character parameter/option (See **TRISTATE_BOX OPT= Settings**)  
**TBL=**_char$_ |  Single character translation  
**TIP=**_text$_ |  Mouse pointer message (To change the colour, see [**'TC'=**](../parameters/tc.md) system parameter)  
_ctl_val_ |  CTL value to generate when focus goes to the input field.  
_mode$_ |  String variable. PxPlus returns a single-character Hex value in this variable to report the last method/keystroke the user chose to toggle the check box ($01$ for **MOUSE-CLICK** or $0D$ for **Enter**).  
_state_ |  Current state of the check box (0=OFF, 1=ON).  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **TRISTATE_BOX** directive to create and control a tristate box control object. A tristate box is a check box in which the user can toggle between three states: **ON** to select an option, **OFF** to disable it, or your choice of a **_third_** state. See **Format 1: Create** for an example.

**_Tristate Box Properties_**

The [**Apostrophe Operator**](../appendix/apostrophe_operator.md) can be used with the unique logical identifier _ctl_id_ to dynamically read and alter a wide variety of control attributes (properties) directly from the programming language.

See **[TRISTATE_BOX Properties](../control_object_properties/tristate_box_properties.md)** for the list of properties available for manipulating a tristate box control object.

**TRISTATE_BOX OPT=_Settings_**

The single character parameters for **OPT=**_char$_ are listed below:

> **Opt.** |  **Description**  
> ---|---  
> **" <"** |  _Bitmap Left._ Places bitmap left of text.  
> **" >"** |  _Bitmap Right._ Places bitmap right of text.  
> **"_"** |  _Bitmap Below._ Places bitmap below text.  
> **"~"** |  _Bitmap Above._ Places bitmap above text.  
> **"^"** |  _Dropdown.___ Creates a drop-down style check box. When the drop-down portion of the button is clicked the system will generate the CTL value associated with the **MNU=**_ctl_ __ option. Generally, the program (or NOMADS) will then display a POPUP_MENU associated with the button.  
> **"*"** |  _Default.___ Defines check box as default push button.  
> **"B"** |  _Bitmap Button._ Has a bitmap whose width is divided into four images. Use this attribute to custom design buttons of any color, style or shape by controlling the bitmap image that appears. Each of the four divisions represents what a button will look like in a particular state: |  _1st quarter_ |  Bitmap image when button is disabled.  
> ---|---  
> _2nd quarter_ |  Bitmap image when button is in normal (released) state.  
> _3rd quarter_ |  Bitmap image when the mouse is over the button.  
> _4th quarter_ |  Bitmap image when the button is pressed.  
>   
> #### **Note:  
> ** Quarters are _horizontal_ quarters, meaning that if a bitmap is 100 pixels wide, the first quarter of the image is the first 25 pixels wide full height, as in [1][2][3][4], rather than as top left/right and bottom left/right, as in .  
>   
> **"D"** |  _Disabled.___ Check box is grayed out and is not accessible to the user.  
> **"F"** |  _Flat._ Check box shows no raised outline unless the mouse is over the button or the button is pushed.  
> **"f"** |  _Flat - No Border._ Same as "F" but has no border.  
> **"H"** |  _Hide._ Check box is not displayed but is accessible programmatically.  
> **"O"** |  _Steal Focus._ Check box will steal focus from other controls when the mouse moves over the button.  
> **"P"** |  _Sticky - Pressed._ Check box remains in the "pressed" position until next selection.  
> **"S"** |  _Signal Only._ PxPlus generates a CTL value but does not shift focus to the check box automatically (the default), but only when focus is explicitly passed to it. Use this to have a button act like a function key.  
> **"s"** |  _Scroll._ Button can scroll within a resizable/scrollable dialogue box.  
> **"T"** |  _Transparent.___ Button is "see-through" to window contents below button area.  
> **"U"** |  _Hyperlink - Underscore._ Text is underscored, displayed in hyperlink colour, and highlighted on mouse-over.  
> **"u"** |  _Hyperlink - No Underscore._ Same as "U" but without the underscore.  
> **"V"** |  _Hover text._ Indicates that text will change color when mouse is over the button.  
  
Options can be combined to create several different tristate box types. The "f", "T", "U", "u" and "o" options provide the ability to turn tristate boxes into **_hotspots_**. This allows for clickable areas on bitmaps or items such as HTTP URL links on dialogues.

**_Example:_**

> "VTf" |  Creates a general hotspot.  
> ---|---  
> "VUTf" |  Creates an HTML-like hotspot.  
> "F^" |  Creates a word-style toolbar with drop list.  
  
**TRISTATE_BOX _Contents$_**

The _contents$_ string expression defines the text or picture to appear on the tristate box. In the text, you can use an **&** (_ampersand_) preceding a character to identify it as a hot key the user can press in conjunction with the **Alt** key to activate the tristate box from the keyboard.

**_Bitmaps and Icons_**

When adding an image to a tristate box, enclose the image name in curly braces. Use a leading **!** (_exclamation_ _point_) to identify the image as internal, or specify the relative path and filename to access an image file that is external. There are no icons in the PxPlus executable, and PxPlus does not support retrieving icons from either resource libraries or other system DLLs/executables.

For more information on internal/external images and recognized image file types, see [**Displaying Bitmaps/Icons**](../appendix/displaying_bitmaps~icons.md).

When you use text as well as images, the relative positions of the image and the text set their relative placement. The following are example _contents$_ expressions:

> "{!Add}Add" ! Displays the {!Add} bitmap in front of the text "Add"  
>  "Delete{!Del} ! Displays the {!Del} bitmap after the text "Delete"

If your string expression includes three bitmaps separated by a vertical bar inside a single set of curly braces, the first will be displayed when the tristate box is in its normal state **OFF** , the second while the tristate box is **ON** , and the third when the tristate box is in a third **_other_** state.

You can also use the **OPT="B"** clause for a _Bitmap Button_ to display different images for different states.

##  Format 1

**_Create_**

**TRISTATE_BOX** [*****]_ctl_ __id_ ,**@(**_col,ln,wth,ht_**)** =_contents$_[,_ctrlopt_]

Use the value in _ctl_id_ __ to give your tristate box a unique identifier. This value generates a CTL value whenever the tristate box is toggled. If _ctl_id_ __ has a leading ***** (_asterisk_), the tristate box is considered global (not tied to a specific window).

**_Example:_**

> 0120 tristate_box 102,@(2,19,12,3)="{!File_Save}&Save"  
>  0130 tristate_box 103,@(22,15,12,2)="&Destroy{!Trash|!Trash_open|!Bomb_blast}"  
>  0140 tristate_box 104,@(22,19,12,3)="{!Lite_Green|!Lite_Yellow|!Lite_Red}"  
>  0150 input (0,hlp="Tristate_Box")@(40,18),"Select...: ",'CL',X$  
>  0160 if ctl>100 and ctl<105 then tristate_box read ctl,B$;print @(40,19),"Selection:",ctl,":",B$,'CL',; goto 0150  
>  0170 if ctl=0 or ctl>=3 then stop else goto 0150

##  Format 2

**_Delete_**

**TRISTATE_BOX REMOVE** [*****]_ctl_ __id_ ,**@(**_col,ln,wth,ht_**)** =_contents$_[,_ctrlopt_]

Use the **TRISTATE_BOX REMOVE** format to delete a tristate box. By default, if tristate boxes are not global, they are deleted when a window is removed/dropped or the application issues a **BEGIN**. Global tristate boxes can be removed manually or cleared by a **START**.

##  Format 3

**_Disable/Enable_**

**TRISTATE_BOX** {**ENABLE** | **DISABLE**} [*****]_ctl_ __id_[,**ERR=**_stmtref_]

Use the **TRISTATE_BOX DISABLE** format to gray out a tristate box so that it will be visible but inaccessible to users. To reactivate it, use **TRISTATE_BOX ENABLE**.

##  Format 4

**_Set Focus_**

**TRISTATE_BOX GOTO** [*****]_ctl_ __id_[,**ERR=**_stmtref_]

Use the **TRISTATE_BOX GOTO** format to set the focus on the tristate box so that it is ready to receive the next user input.

##  Format 5

**_Logical Push/Release_**

**TRISTATE_BOX**{**ON** | **OFF**} [*****]_ctl_ __id_[,**ERR=**_stmtref_]

Use the **TRISTATE_BOX ON** format to make it appear that a tristate box selection has been made. Use the **OFF** format to make it appear that it has been released.

##  Format 6

**_Read Activation State_**

**TRISTATE_BOX READ** [*****]_ctl_ __id,state_ _$_[,**ERR=**_stmtref_]

The **TRISTATE_BOX READ** format returns the current state of the tristate box. If no translation table is defined, the default values are "0" for **OFF** , "1" for **ON** , or "2" for **Other**.

##  Format 7

**_Update_**

**TRISTATE_BOX WRITE** [*****]_ctl_ __id,state_ _$_[,**ERR=**_stmtref_]

The **TRISTATE_BOX WRITE** format is used to write/update new values for the tristate box. How the value written to the tristate box will be interpreted is as follows:

  * If the value is one of the translation table values, its position in the table defines the state (First=OFF, Second=ON, Third=Other).
  * If the value is "0", "N" or NULL (""), set OFF.
  * If the value is "1", set ON.
  * If the value is "2", set to the Third/Other state.
  * Any other value sets the check box ON ("1" state).



##  See Also

[**TRISTATE_BOX Properties**](../control_object_properties/tristate_box_properties.md)  
[**CHECK_BOX Create/Control Check Box**](check_box.md)  
**[CHECK_BOX Properties](../control_object_properties/checkbox_properties.md)**  
[**RADIO_BUTTON Create/Control Radio Button**](radio_button.md)  
[**BUTTON Create/Control Button**](button.md)
