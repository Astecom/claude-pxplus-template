# BUTTON Create/Control Button

**BUTTON Properties**|   
---|---  
  
The Button control is usually designed to send a signal to the application to perform a specific action when a user clicks the button. The signal typically indicates that the user wants to end a function or initiate a new function.

This control can be created either by using the **[BUTTON](../directives/button.md)** directive or by using the **[NOMADS Panel Designer](../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** to draw a **[Button Control](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Button%20Control/Overview.md)** and apply the desired attributes.

Below is a list of properties used to define and manipulate Button controls. Use the links in the **Property** column to access the PxPlus Help page for a selected property. The Help page may provide additional details, particularly if the property can be used to define other controls.

For a complete list of all the properties available, see **[Properties List](properties_list.md)**.

**Property** |  **Description**  
---|---  
**[ActiveBackColor$  
ActiveBackColour$](../properties/activebackcolor.md)** |  Background color when button is pressed. Two colors can be specified for buttons by using the **/**  _(slash)_ as a separator (i.e. RGB:100 100 100/Light Blue). For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**.  
**[ActiveBorderColor$  
ActiveBorderColour$](../properties/activebordercolor.md)** |  Color(s) of button border when button is pressed. Two colors can be specified for buttons by using the **/**  _(slash)_ as a separator (i.e. RGB:100 100 100/Light Blue). For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. Border colors are applied only if a **[Border$](../properties/border_.md)** property is specified for the button.  
**[ActiveTextColor$  
ActiveTextColour$](../properties/activetextcolor.md)** |  Foreground text color when button is pressed. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**.  
**[BackColor$  
BackColour$](../properties/backcolor_.md)** |  Background color. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT")  
**[BitmapPosition](../properties/bitmapposition.md)** |  Defines where in a button the bitmap will be positioned relative the text on a button. It is only applicable if there is **_both_** a bitmap **_and_** text on the button. Possible values are: |  1 |  To the left of the button text. **_(Default)_**  
---|---  
2 |  To the right of the button text.  
3 |  Above the button text.  
4 |  Below the button text.  
5 |  Bitmap is centered and scaled to fill the button. Button text, if present, will be centered and overlay the image.  
  
_(The Bitmap Centered option was added in PxPlus 2018 Update 1.)_  
  
[ **Border$**](../properties/border_.md) |  Controls the type of border that will be used when drawing a button. Possible values and formats are _Solid_ , _None_ , _Double_ , _Groove_ , _Ridge_ , _Inset_ and _Outset_. If not set, it will have the value of "Default" (or ""), which indicates that the system should use the system default button styling.  
**[BorderColor$  
BorderColour$](../properties/bordercolor.md)** |  Controls the color(s) of the border for any button whose border style (see **[Border$](../properties/border_.md)** property) is other than the system default. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. This property can include either one or two colors separated by a / (_slash_). If only a single color is provided, then this color is used for all four borders. If two colors are supplied, the first color is used to define the Top/Left borders, while the second color is used to define the Bottom/Right borders. The value can be set to either a numeric or a string value. If setting a numeric value, the value set is the internal color number for the desired color. If setting a string value, any form of color specification may be used (color name, RGB, HSL, or HTML color code).  
**[BorderWidth](../properties/borderwidth.md)** |  Controls the width of the border (in pixels) for any button whose border style (see **[Border$](../properties/border_.md)** property) is other than the system default. This property can only contain a numeric integer.  
**[BringToTop](../properties/bringtotop.md)** |  This property, when set to **_any_** value, will cause the control to be moved to the top of the display order. Once at the top of the display order, the control will appear visually on top of any other control on the window. (**_Default:_**__ Not Applicable - Always returns 0)  
**[Col](../properties/col.md)** |  Screen position (column) of control.  
**[Cols](../properties/cols.md)** |  Width of control in column units.  
**[CtlName$](../properties/ctlname_.md)** |  Control type ("BUTTON"). See **[BUTTON](../directives/button.md)** directive.  
**[Cursor](../properties/cursor.md)** |  Controls the type of cursor to display whenever the mouse moves over the specified control. Possible values are: |  |  0 = Arrow |  7 = Rabbit in Hat  
---|---|---  
|  1 = Wait (Hourglass) |  8 = Happy Face  
|  2 = I-Beam |  9 = Sad Face  
|  3 = Movement Arrows |  10 = Resize Vertical Up/Down Arrow  
|  4 = Sizing Arrow |  11 = Resize Horizontal Left/Right Arrow  
|  5 = Hand |  12 = Not Allowed (Diagonal line across circle)  
|  6 = Hand in Crossed Circle ("No" hand) |  -1 = Default Cursor **_(Default)_**  
**[DisableBackColor$  
DisableBackColour$](../properties/disablebackcolor.md)** |  Background color when button is disabled. Two colors can be specified for buttons by using the **/**  _(slash)_ as a separator (i.e. RGB:100 100 100/Light Blue). For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**.  
**[DisableBorderColor$  
DisableBorderColour$](../properties/disablebordercolor.md)** |  Button border color when button is disabled. Two colors can be specified for buttons by using the **/**  _(slash)_ as a separator (i.e. RGB:100 100 100/Light Blue). For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. Border colors are applied only if a **[Border$](../properties/border_.md)** property is specified for the button.  
**[DisableTextColor$  
DisableTextColour$](../properties/disabletextcolor.md)** |  Foreground text color when button is disabled. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**.  
**[Enabled](../properties/enabled.md)** |  Enabled indicator: 1 = True; 0 = False (**_Default:_** 1)  
**[Eom$](../properties/eom_.md)** |  Last change terminator.  
**[Focus](../properties/focus.md)** |  Focus indicator: 1 = Control has focus (**_Default:_** 0)  
**[FocusBackColor$  
FocusBackColour$](../properties/focusbackcolor_.md)** |  Background color when the control has focus. Two colors can be specified for buttons by using the / (_slash_) as a separator (i.e. RGB:100 100 100/Light Blue). For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**.  
**[FocusBorderColor$  
FocusBorderColour$](../properties/focusbordercolor_.md)** |  Color(s) of button border when button has focus. Two colors can be specified for buttons by using the **/**  _(slash)_ as a separator (i.e. RGB:100 100 100/Light Blue). For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. Border colors are applied only if a **[Border$](../properties/border_.md)** property is specified for the button.  
**[FocusTextColor$  
FocusTextColour$](../properties/focustextcolor_.md)** |  Foreground text color when the control has focus. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**.  
**[Font$](../properties/font_.md)** |  This property is used to reference the font for a control. It will contain (or can be set to) a string containing three comma-separated fields of the font name, size and attributes. See **['FONT'](../mnemonics/font.md)** mnemonic. **_Example:_** To set the font to Arial, 1.5 times normal size, and Bold, the format would be xxx'Font$="Arial,1.5,B".  
**[GrayDisabledBmp](../properties/graydisabledbmp.md)** |  Controls how the image on the button will display when the button is disabled. Applicable only when there is a bitmap on the button. Possible values are: |  0 |  Images on the disabled buttons will display only as shadows. This means that only the shadow left by the outline of the image will be seen.  
---|---  
1 |  Images on the disabled buttons will be converted to gray scale.  
-1 |  Default gray disabled BMP setting. **_(Default)_**  
  
_(The GrayDisabledBmp property was added in PxPlus 2024.)_  
  
**[Height](../properties/height.md)** |  Height of control in pixels.  
**[HoverBackColor$  
HoverBackColour$](../properties/hoverbackcolor_.md)** |  Background color when mouse is over a button. Two colors can be specified for buttons by using the **/**  _(slash)_ as a separator (i.e. RGB:100 100 100/Light Blue). For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**.  
**[HoverBorderColor$  
HoverBorderColour$](../properties/hoverbordercolor_.md)** |  Color(s) of button border when mouse is over a button. Two colors can be specified for buttons by using the **/**  _(slash)_ as a separator (i.e. RGB:100 100 100/Light Blue). For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. Border colors are applied only if a **[Border$](../properties/border_.md)** property is specified for the button.  
**[HoverColor$  
HoverColour$](../properties/hovercolor_.md)** |  Hover color. The button is highlighted when the mouse moves over its location. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT")  
**[HoverTextColor$  
HoverTextColour$](../properties/hovertextcolor_.md)** |  Foreground text color when mouse is over a button. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**.  
**[hWnd](../properties/hwnd.md)** |  Windows handle for control.  
**[ImageCount](../properties/imagecount.md)** |  Number of images contained in a bitmap button: 1 to 4. (**_Default:_** 0)  
**[Key$](../properties/key_.md)** |  Hot key to jump to control.  
**[Left](../properties/left.md)** |  Left margin for control in pixels.  
**[Line](../properties/line.md)** |  Screen position of control.  
**[Lines](../properties/lines.md)** |  Height of control in number of lines.  
**[LookAndFeel](../properties/lookandfeel.md)** |  Defines how a control will look. Possible values are: |  2 |  Old Windows 3.1 2D look.  
---|---  
3 |  Windows 95/98 3D look.  
4 |  Windows XP/Vista/Windows 7 look.  
**[MaxValue](../properties/maxvalue.md)** |  Maximum value that the control will return. For a button (_sizer_) control, this property can be set to the highest location (line or column) that the control will allow itself to be dragged.  
**[MenuCtl](../properties/menuctl.md)** |  This property reports/sets the CTL value to generate when an object is selected on a right-click of the mouse.  
**[MinValue](../properties/minvalue.md)** |  Minimum value that the control will return. For a button (_sizer_) control, this property can be set to the lowest location (line or column) that the control will allow itself to be dragged.  
**[Moveable](../properties/moveable.md)** |  Controls whether a button can be dragged/moved to a new position. (**_Default:_** 0) If set to 1, the button can be dragged/moved. This movement will **_not_** be saved. If set to 0 **_(Default)_** , the button location is fixed. Its initial value is determined by the presence of the "M" option. See **[BUTTON OPT= Settings](../directives/button.htm#Mark4)** in the **BUTTON Create** directive. _(The Moveable property was added in PxPlus 2018 Update 1.)_  
**[Msg$](../properties/msg_.md)** |  Message line text for the control.  
**[ObjectID](../properties/objectid.md)** |  User object method. (**_Default:_** 0 - No object specified) The 'ObjectID property allows applications to intercept property values and add methods to controls. When set to a valid Object ID by the application, you can add methods and add/override property logic for any control in the system. When set in the system, it allows the application to logically request methods against the control that, in turn, will be performed by the related Object ID. It will also first check the object for any property requests and, if the property is defined in the object, set or get that property instead of the controls. To allow the specified object to get true access to the control, while executing within the object identified by the 'ObjectID property, the system will direct any property requests directly to the control.

#### **Note:**  
When a control is deleted from the system, any object identified by an 'ObjectID property will be automatically dropped.  
  
**[OnFocusCtl](../properties/onfocusctl.md)** |  On Focus CTL event. 0 is returned if no On Focus CTL value is set up for the control.  
**[OnTipCtl](../properties/ontipctl.md)** |  This property controls the CTL event that will be fired prior to the system displaying the Tip for any control. If the value of this property is non-zero, the system will use its value of a CTL event to fire and will defer the display of the tip until the application changes the value in 'Tip$. If the value in 'Tip$ is not changed, no tip will be displayed. Setting this to zero **_(Default)_** disables the event from being sent and the current 'Tip$ will be displayed.  
**[Parent](../properties/parent.md)** |  Parent window handle.  
**[SignalOnly](../properties/signalonly.md)** |  Signal only - do not get focus: 0 = Off; 1 = On. (**_Default:_** 0) This property can also be read, returning 1 or 0 to indicate if the control is to signal only and not get focus.  
**[Text$](../properties/text_.md)** |  Text of item or label.  
**[TextColor$  
TextColour$](../properties/textcolor_.md)** |  Foreground text color. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT")  
**[Tip$](../properties/tip_.md)** |  Tip message for control.  
**[Top](../properties/top.md)** |  Top of control in pixels.  
**[Underline](../properties/underline.md)** |  Underline button text.  
**[Value$](../properties/value_.md)** |  Current item value.  
**[Visible](../properties/visible.md)** |  Control visible flag: 1 = Yes; 0 = No (**_Default:_** 1)  
**[Width](../properties/width.md)** |  Width of control in pixels.  
**[_PropList$](../properties/_proplist_.md)** |  Controls the list of properties to be returned in '_PropValues$. Each value is separated by the value in '_PropSep$. This property can be used to speed up the processing of multiple property accesses but reducing the number of interactions with the control. See **[Multi-Property Access](multi_prop.md)**.  
**[_PropSep$](../properties/_propsep_.md)** |  Controls the separator used between each of the values of the properties returned in '_PropValues$ as defined by '_PropList$. This property can be used to speed up the processing of multiple property accesses but reducing the number of interactions with the control. See **[Multi-Property Access](multi_prop.md)**.  
**[_PropValues$](../properties/_propvalue_.md)** |  Accesses the values of the properties defined in '_PropList$. Each value is separated by the value in '_PropSep$. This property can be used to speed up the processing of multiple property accesses but reducing the number of interactions with the control. See **[Multi-Property Access](multi_prop.md)**.  
  
## See Also

**[Color Properties](colour_properties.md)**  
**['COLOUR' & '_COLOUR' Mnemonic](../mnemonics/colour.md)**  
**[Using Property Names](../control_object_properties.htm#Mark1)**  
**[Compound Properties](compound_properties.md)**
