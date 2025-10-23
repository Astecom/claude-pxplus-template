# Directives 

**BUTTON** |  **_Create/Control Button_**  
---|---  
  
##  Formats

1\. _Define/Create_ _:_ |  **BUTTON** [*****] _ctl_id_ ,**@(**_col,ln,wth,ht_**)** =_contents$_[,_ctrlopt_]  
---|---  
2\. _Delete_ _:_ |  **BUTTON REMOVE** [*****] _ctl_id_[,**ERR=**_stmtref_]   
3\. _Disable/Enable_ _:_ |  **BUTTON** {**DISABLE** | **ENABLE**}[*] _ctl_id_[,**ERR=**_stmtref_]  
4\. _Set Focus To_ _:_ |  **BUTTON GOTO** [*] _ctl_id_[,**ERR=**_stmtref_]   
5\. _Logical Push_ _,_  _Release_ _:_ |  **BUTTON** {**ON** | **OFF**} [*****] _ctl_id_[,**ERR=**_stmtref_]   
6\. _READ Activation Mode_: |  **BUTTON READ** [*****] _ctl_id,mode_ _$_[,**ERR=**_stmtref_]   
7\. _Hide/Show_ _:_ |  **BUTTON** {**HIDE** | **SHOW**} [*****] _ctl_id_[,**ERR=**_stmtref_]  
  
**_Where_**** _:_**

***** |  Optional. Use a leading _asterisk_ to denote a _global_ button.  
---|---  
**@(**_col,ln,wth,ht_**)** |  Position and size of the button region. Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines. Use line value -1 to display the button on the tool bar.  
_contents$_ |  Text/images to appear on the button. See  **BUTTON Contents$**.  
_ctl_id_ |  Unique logical identifier for the button (any integer **-** 32000 to +32000). Avoid integers that conflict with keyboard definitions (e.g. 4 cancels CTL=4 for the **F4** key) or [**Negative CTL Definitions**](../appendix/negative_ctl_definitions.md). Use this value with the apostrophe operator to access various [**BUTTON Properties**](../control_object_properties/button_properties.md).  
_ctrlopt_ |  Control options. Supported options for **BUTTON** include: |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**FNT=**_"font,size_ [_,attr_]_"_ |  Font name, size, optional properties (See [**'FONT'**](../mnemonics/font.md) mnemonic)  
**MSG=**_text$_ |  Message line. In addition, **[Balloon Text](../PxPlus%20User%20Guide/Graphical%20User%20Interfaces/Taskbar%20Notification%20Icon/Overview.htm#balloontext)** can be assigned to an icon placed in the system tray.  
**MNU=**_ctl_ |  CTL value associated with right-click menu event  
**OPT=**_char$_ |  Single character parameter/option (See **BUTTON OPT= Settings**)  
**TIP=**_text$_ |  Mouse pointer message. To change the color, see [**'TC'=**](../parameters/tc.md) system parameter. If desired, a bold title can also be added to the tip: **_Example:_** BUTTON 4000,@(2,14,12,2)="{!Stop}Exit",tip="*Bold*"+$0A$+"Not bold"  
_mode$_ |  String variable. PxPlus returns a single-character Hex value in this variable to report the last method/keystroke the user chose to activate the button ($01$ for **MOUSE-CLICK** or $0D$ for **Enter**).  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **BUTTON** directive to create/control buttons on the screen. The _ctl_id_ is used to generate a CTL whenever the button is pressed. If _ctl_id_ is prefixed by an _asterisk_ (*****), the button is considered global and not tied to a specific window. By default, non-global buttons are deleted when a window is removed/dropped or when the application issues a **BEGIN**. Global buttons can be removed manually or cleared by a **START**.

**_Button Properties_**

The **[Apostrophe Operator](../appendix/apostrophe_operator.md)** can be used with the unique logical identifier (_ctl_id_) to dynamically read and alter a wide variety of control attributes (properties) directly from the programming language.

See **[BUTTON Properties](../control_object_properties/button_properties.md)** for the list of properties available for manipulating a button object.

**BUTTON OPT=_Settings_**

The single character parameters for **OPT=**_char$_ are listed below:

**Opt.** |  **Description**  
---|---  
**" <"** |  _Bitmap Left._ Places bitmap left of text.  
**" >"** |  _Bitmap Right._ Places bitmap right of text.  
**"_"** |  _Bitmap Below._ Places bitmap below text.  
**"~"** |  _Bitmap Above._ Places bitmap above text.  
**"^"** |  _Dropdown._ Creates a drop-down style button. When the drop-down portion of the button is clicked, the system will generate the CTL value associated with the **MNU=**_ctl_ __ option. Generally, the program (or NOMADS) will then display a POPUP_MENU associated with the button.  
**"="** |  _Sizer._ Creates a special sizer style button. This button is capable of being dragged across or up/down the screen to enable resizing of window's regions. See **Sizer Buttons**. _(Sizer buttons were added in PxPlus v7.10, build 9170.)_  
**"#"** |  _Drawing tool._ Creates a special drawing tool style button. This button is capable of being moved and/or resized on the screen to enable placement of controls. See **Drawing Tool Buttons**. _(Sizer buttons were added in PxPlus v11.00)._  
**"*"** |  _Default._ Defines button as default.  
**"A"** |  _Default Font Settings._ The default font settings of the control will be used. Since the default font setting of a button control is left justified, the "A" setting will result in left justification in most cases. To force a right, left or center justification, use the **[FNT=](button.htm#Mark23)** setting and make sure that you have a **['4D'](../mnemonics/4d.md)** mnemonic enabled. Right justification of buttons with a graphic are possible only with the **['4D'](../mnemonics/4d.md)** mnemonic turned On. See **['2D'](../mnemonics/2d.md)** and **['3D'](../mnemonics/3d.md)** mnemonics. **_Example:_** print '2D';  
button 10,@(60,5,20,1.5)="{!Stop}Test",opt="A",fnt="Arial,,R"  
print '3D';  
button 11,@(60,7,20,1.5)="{!Stop}Test",opt="A",fnt="Arial,,R"  
print '4D';  
button 12,@(60,9,20,1.5)="{!Stop}Test",opt="A",fnt="Arial,,R"  
escape Right justification works in '2D' or '3D' mode if the graphic is removed from the button. **_Example:_** print '2D';  
button 10,@(60,5,20,1.5)="Test",opt="A",fnt="Arial,,R"  
print '3D';  
button 11,@(60,7,20,1.5)="Test",opt="A",fnt="Arial,,R"  
escape  
**"B"** |  _Bitmap Button._ Has a bitmap whose width is divided into four images. Use this attribute to custom design buttons of any color, style or shape by controlling the bitmap image that appears. Each of the four divisions represents what a button will look like in a particular state: |  _1st quarter_ |  Bitmap image when button is disabled.  
---|---  
_2nd quarter_ |  Bitmap image when button is in normal (released) state.  
_3rd quarter_ |  Bitmap image when the mouse is over the button.  
_4th quarter_ |  Bitmap image when the button is pressed.  
  
#### **Note:  
** Quarters are _horizontal_ quarters, meaning that if a bitmap is 100 pixels wide, the first quarter of the image is the first 25 pixels wide full height, as in [1][2][3][4], rather than as top left/right and bottom left/right, as in .  
  
**"C"** |  _Bitmap Centered._ Places the bitmap centered and scaled to fill the button. Button text, if present, will be centered and overlay the image. _(The "C" option was added in PxPlus 2018 Update 1.)_  
**"D"** |  _Disabled._ Button is grayed out and is not accessible to the user.  
**"d"** |  Button is permanently disabled (cannot be enabled).  
**"F"** |  _Flat._ Button shows no raised outline unless the mouse is over the button or the button is pushed.  
**"f"** |  _Flat - No Border._ Same as "F" but has no border.  
**"H"** |  _Hide._ Button is not displayed but is accessible programmatically.  
**** |  _Spinner._ Indicates that the button will work as a spinner button with up and down chevrons displayed on the button for incrementing or decrementing an associated value. Clicking the up or down chevron will not only result in the button firing but will also set the EOM to either "U" or "D", depending on the chevron that was clicked. The color of the up and down chevrons can be controlled by using the **[TextColor$](../properties/textcolor_.md)** and **[HoverTextColor$](../properties/hovertextcolor_.md)** button properties. _(The "__I_ _" option was added in PxPlus 2024.)_  
**"M"** |  _Moveable._ Indicates that the button can be moved by the user. To move a button, the user clicks and holds the mouse button down, drags the control to its new position, and then releases the button. When the button is released, it will generate a standard BUTTON press event; however, the EOM will be "M" to indicate that the button was moved as opposed to simply being pressed. This movement will **_not_** be saved. See **[Moveable](../properties/moveable.md)** property. _(The "M" option was added in PxPlus 2018 Update 1.)_  
**"O"** |  _Steal Focus._ Button will steal focus from other controls when the mouse moves over the button.  
**"S"** |  _Signal Only._ The system generates a CTL value and does not shift focus to the button automatically (the default), but only when focus is explicitly passed to it. Use this to have a button act like a function key.  
**"s"** |  _Scroll._ Button can scroll within a resizable/scrollable dialogue box.  
**"T"** |  _Transparent._ Button is "see-through" to window contents below button area.  
**"U"** |  _Hyperlink - Underscore._ Text is underscored, displayed in hyperlink color, and highlighted on mouse-over.  
**"u"** |  _Hyperlink - No Underscore._ Same as "U" but without the underscore.  
**"V"** |  _Hovertext_ _._ Indicates that text will change color when mouse is over the button.  
**"W"** |  _Web link_ _._ This style of button emulates standard Web page text hyperlinks. The button consists of underscored text aligned to the top left corner that highlights when the mouse is positioned over the button. The button font may contain "C" or "R" to center/right justify the text. _(Web style buttons were added in PxPlus v7.00_.)  
**"Y"** |  _System Tray._ Indicates that the button will actually appear in the System Tray.

#### **Note:**   
PxPlus provides the capability to add balloon text to an icon placed in the System Tray. See [**Balloon Text**](../PxPlus%20User%20Guide/Graphical%20User%20Interfaces/Taskbar%20Notification%20Icon/Overview.htm#balloontext).

_(System tray buttons were added in PxPlus v7.10.)_  
**"+"** |  _Plus_  _Rocker._ Indicates that the button will work as a rocker button with Up, Down, Left and Right chevrons displayed on the axes of any bitmap contained in the button. Clicking on a chevron will not only result in the button firing but will also set the EOM to "U", "D", "L" or "R", depending on the chevron that was clicked. _(Plus Rocker buttons were added in PxPlus v11.00.)_  
  
Options can be combined to create several different button types. The "f", "T", "U", "u" and "O" options provide the ability to turn buttons into **_hotspots_**. This allows for clickable areas on bitmaps or items such as HTTP URL links on dialogues.

**_Example:_**

> "VTf" |  Creates a general hotspot.  
> ---|---  
> "VUTf" |  Creates an HTML-like hotspot.  
> "F^" |  Creates a word-style toolbar with drop list.  
  
**BUTTON _Contents$_**

The _contents$_ string expression defines the text or picture to appear on the button. In the text, you can use an **&** (_ampersand_) preceding a character to identify it as a hot key that the user can press in conjunction with the **Alt** key to activate the button from the keyboard.

**_Bitmaps and Icons_**

When adding an image to a button, enclose the image name in curly braces. Use a leading **!** (_exclamation_ _point_) to identify the image as internal, or specify the relative path and filename to access an image file that is external. A number of bitmaps are included in the executable. In addition, the system supports retrieving icons from either resource libraries or other system DLLs/executables.

For more information on the options available for displaying internal/external images and the recognized image file types, see [**Displaying Bitmaps/Icons**](../appendix/displaying_bitmaps~icons.md).

#### **Note:**  
PxPlus supports alpha channel transparency processing of bitmap images for buttons (for **_console output only_** , not printer and PDF).  
  
_(Alpha channel support was added in PxPlus 2017.)_

When you use text as well as images, the relative positions of the image and the text set their relative placement. The following are example _contents$_ expressions:

**_Example:_**

> "{!Add}Add" ! Displays the {!Add} bitmap in front of the text "Add"  
>  "Delete{!Del}" ! Displays the {!Del} bitmap after the text "Delete"

If the string expression includes two images separated by a vertical bar inside a single set of curly braces, the first is displayed when the button is released (normal state), the second when the button is pressed:

> "{!Stop |C:\MYBMP\Go}

You can also use the **OPT="B"** clause for a _Bitmap Button_ to display different images for different states. See **BUTTON OPT= Settings**.

##  Format 1

**_Define/Create_**

**BUTTON**[*****] _ctl_id_ ,**@(**_col,ln,wth,ht_**)** =_contents_ $[, _ctrlopt_]

Use this format to create a button control object, and give it a unique identifier in _ctl_id_. The _ctl_id_ is used to generate a CTL value whenever the user presses the button:

> rem Create button: CTL=4000 when pressed, 'Stop Sign' picture, "Exit" text  
>  button 4000,@(2,14,12,2)="{!Stop}Exit"

If the _ctl_id_ has a leading asterisk, the button is considered global (not tied to a specific window):

> rem To add a global button to the Toolbar with the text "Help":  
>  button *1000,@(0,-1,10,1)="Help"

##  Format 2

**_Delete_**

**BUTTON REMOVE** [*****] _ctl_id_[,**ERR=**_stmtref_]

Use **BUTTON REMOVE** to delete a button; e.g. to remove the button created previously:

> button remove 4000

By default, non-global buttons are deleted when a window is removed/dropped or when the application issues a **BEGIN**. Global buttons can be removed using **BUTTON REMOVE** syntax or cleared using the **[START](start.md)** directive.

##  Format 3

**_Disable/Enable_**

**BUTTON** {**DISABLE** | **ENABLE**}[*****] _ctl_id_[,**ERR=**_stmtref_]

Use the **BUTTON DISABLE** format to gray out a button so that it will be visible but inaccessible to users. To reactivate it, use **BUTTON ENABLE** :

> button disable 4000  
>  ...  
>  button enable 4000

##  Format 4

**_Set Focus To_**

**BUTTON GOTO** [*****] _ctl_id_[,**ERR=**_stmtref_]

Use **BUTTON GOTO** to set the focus on a button:

> button goto 4000

##  Format 5

**_Logical Push, Release_**

**BUTTON**{**ON** | **OFF**}[*****] _ctl_id_[,**ERR=**_stmtref_]

Use **BUTTON ON/OFF** to make it look like the button was pressed/released though no signal is generated:

> button on 4000

##  Format 6

**_READ Activation Mode_**

**BUTTON READ** [*****] _ctl_id,mode_ _$_[,**ERR=**_stmtref_]

Use **BUTTON READ** to receive the user's method of selecting the button. The system returns a Hex value in the _mode$_ variable to tell you what keystroke last activated the button. Once read, this field is reset to $00$. Possible values are:

> $01$ for **MOUSE-CLICK**  
>  $02$ for **DOUBLE MOUSE-CLICK**  
>  $0D$ for **Enter**  
>  $20$ for **SPACEBAR**(and keyboard hot key, as in the BUTTON Example below)  
>  $09$ for **Tab** to go to the button  
>  $00$ when the user exits the button control  
>  Other specific characters include: $81$ for **F1** $82$ for **F2** ...

You must read the user's selection(s) to make them available to your applications. In the example below, the STROKE$ variable returns the user's method of selection (by mouse, carriage return or space bar).

The value returned for keyboard strokes (the hot key **Alt-B** and the **SPACEBAR**) for the following example is $20$:

> 0010 ! BUTTON Example  
>  0020 print 'CS'  
>  0030 list  
>  0040 button 2000,@(24,17,7,3)="{!BUG|!STOP}it the &Bug"  
>  0050 let BTN=2000  
>  0060 setctl BTN:READ_BOX  
>  0070 button goto BTN  
>  0080 print @(24,24),"HotKey=<Alt-B>. Try mouse and keyboard too. END=<F4>"  
>  0090 obtain (0,siz=1,err=0090)@(0,0),'cursor'("off"),'ME',IN_VAR$,'MN'  
>  0100 if ctl=4 then goto END  
>  0110 READ_BOX:  
>  0120 button read BTN,STROKE$  
>  0130 print @(24,20),"Your HTA(selection)=",hta(STROKE$),",CTL=",ctl:"#####"  
>  0150 goto 0090  
>  0160 END:  
>  0170 button remove BTN; print 'CS'

##  Format 7

**_Hide/Show_**

**BUTTON** {**HIDE** | **SHOW**}[*****] _ctl_id_[,**ERR=**_stmtref_]

Use the **BUTTON HIDE** format to hide the display of an active button. The user cannot see or use the button when it is hidden.

Use the **BUTTON SHOW** format to restore the button's display and access. 

##  Sizer Buttons

A Sizer button is a control that can be dragged either vertically or horizontally, usually used to resize or affect the layout of a screen. Sizers are defined as a style of BUTTON using the equal sign in the OPT= string.

When a Sizer button is used, the system will generate the button CTL signal only at the end of the drag operation. At that point, the application can read the controls line or column to determine where the drag terminated. The determination of whether a sizer can be dragged vertically or horizontally is based on the size of the Button. If the button is wider than it is high, the control can be dragged vertically (up/down). If the button is higher than it is wide, the control can be dragged horizontally (left/right).

By default, a Sizer control can be dragged the full width or height of the window. The range can be narrowed by using the [**'MaxValue**](../properties/maxvalue.md) and [**'MinValue**](../properties/minvalue.md) properties.

Another use of a Sizer style button is as a control bar in a slider control that could be used to adjust a value such as a volume control.

_(Sizer buttons were added in PxPlus v7.10, build 9170.)_

##  Drawing Tool

A Drawing Tool button is a control that can be moved and/or resized, generally used in design utilities. Drawing Tool buttons are defined as a style of BUTTON using the hash tag (#) in the OPT= string.

When a Drawing Tool button is used, the system will generate the button CTL signal after any resize or movement operation is made to the button. The button itself will have resize points in the four corners and in the middle of the four external edges. The button itself can also be dragged (moved) to another spot on the screen. Once a resize or move operation is complete and the mouse is released, the buttons will generate an OnPress event at which point the application can read the revised button size/location.

_(Drawing Tool buttons were added in PxPlus v11.00.)_

##  See Also

**[BUTTON Properties](../control_object_properties/button_properties.md)**  
[**RADIO_BUTTON Create/Control Radio Button**](radio_button.md)  
[**CHECK_BOX Create/Control Check Box**](check_box.md)  
[**TRISTATE_BOX Create/Control Tristate Box**](tristate_box.md)
