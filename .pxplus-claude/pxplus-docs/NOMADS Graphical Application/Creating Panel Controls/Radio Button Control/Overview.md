# Creating Panel Controls

**Radio Button Control** |  **__**  
---|---  
  
Radio Buttons are laid out in a group of one or more related button controls, each representing one possible value for the variable the group represents. Only one button can be active at a time; i.e. when one Radio Button is selected, no other buttons in the group are selected.

For more information on this control type, see **[RADIO_BUTTON](../../../directives/radio_button.md)** directive.

## Creating a Radio Button

To draw a new Radio Button on your panel, select the Radio Button control tool from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**. Hold down the left-mouse button and drag the mouse to create a rectangle to the desired size. Release the mouse button to create the new object. You can also include text and/or pictures on Radio Buttons.

You can copy the first Radio Button to create identical Radio Buttons for the group (see **[Duplicating Components](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.htm#Duplicating_Components)**). Unlike other controls, a group of Radio Buttons **_must_** share the same name. When defining Radio Buttons, use the same control name but apply a **_different_ [Index Value](Overview.htm#value)** for each of the Radio Buttons in the group. In addition, only one button in a group can have the **[Tab Stop Attribute](Overview.htm#attributes)** set.

**_Example:_**

> You could define a group of three Radio Buttons called INSURANCE with each index (1, 2, 3) associated with a different option (Daily, Monthly, Yearly). At run time, if a user clicks the Radio Button labeled Monthly, an index value of 2 would be identified (e.g. to execute logic for a monthly breakdown). The other Radio Buttons in the group (in this case, Daily and Yearly) are turned off and lose focus.

A Radio Button control can also be created from a **_data class_** or a data dictionary **_element_**. See **[Data Class Controls](../Introduction.htm#Mark4)** and **[Data Element Controls](../Introduction.htm#Mark5)**.

To define the specific attributes for the new control, see **[Radio Button Properties](Overview.htm#properties)**.

##  Radio Button Properties

When creating or editing a _Radio Button_ control, the **Radio Button Properties** dialogue (pictured below using the **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** version of the NOMADS designer) is displayed:

> This dialogue is divided into the following tabbed panels for viewing and/or changing Radio Button properties: **[Display](Overview.htm#display)**, **[Font/Color](Overview.htm#font)**, **[Attributes](Overview.htm#attributes)**, **[Value](Overview.htm#value)**, **[Logic](Overview.htm#logic)** and **[User Aid](Overview.htm#useraid)**.

_Name_ |  Radio Button name (NOMADS provides a default). Naming conventions for variables apply. Click the Browse Library button to copy parameters from an existing object (via the **[Library Browse](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Library%20Browse.md)** dialogue). The same name is used for each Radio Button in the group; however, each requires a different **[Index Value](Overview.htm#value)**.

#### **Note:**  
When a new control name is entered, it will be checked against the **[Reserved Words](../../../Reserved%20Words.md)** list to determine if it is restricted for use as a NOMADS control name. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_  
  
---|---  
**Preview** |  Displays how the visible properties of the control will appear at run time.  
**Display**  
**Text** |  Sets the button text. Click the drop-down arrow for a list of selections: _Fixed, Expression, Message Library Reference_.  
**Bitmaps** |  Sets the button bitmap. Click the Bitmap Library button to select a bitmap from the Bitmaps dialogue. |  _Normal_ |  Bitmap shown when the button is released.  
---|---  
_Pushed_ |  Bitmap shown when the button is pressed.  
_Alignment_ |  Sets the bitmap alignment. Click the drop-down arrow for a list of selections: _Left, Right, Top, Bottom, Center/Scale_. Selecting _Center/Scale_ alignment also forces the selection of the _Scale bitmap_ option.  
_Scale bitmap_ |  Scales the bitmap to fit the button size. Any button text is forced to be aligned _Center/Scale_.

#### **Note:**  
_Top, Bottom_ and _Center/Scale_ alignments and the _Scale bitmap_ option only work in 4D mode.  
  
_(The Center/Scale alignment and Scale bitmap options were added in PxPlus 2019_ _Update 1_ _.)_  
  
**Image Options** |  **_(Available when Bitmaps for Normal/Pushed are selected)_** Sets advanced image options for the bitmap. Click the Additional Image Options button to the right of the **Image Options** multi-line to invoke the **Image Options** dialogue. This dialogue consists of the following: |  **Options** |  |  _Image Transparency_ |  Bitmap transparency option. Click the drop-down arrow for a list of selections: _None, Pixel sets transparency_ or _'Light Gray' is transparent_.  
---|---  
_Flip Image_ |  Flips the image. Click the drop-down arrow for a list of selections: _None, Flip horizontally (left/right), Flip vertically (up/down)_ or _Flip horizontally and vertically_.  
_Rotation Angle_ |  Counter clockwise rotation angle at which to display the image. Valid entries are 0 to 359.  
_Invert Image_ |  Displays the image with inverted colors.  
_Gray Scale Image_ |  Converts the image to gray scale.  
**Cropping (Pixels from  
Top/Left of Image (0,0))** |  Define the cropped image in terms of _Left, Right, Top_ and _Bottom_ where these values are the number of pixels from the top left corner (0,0) of the image.  
  
#### **Note:**  
_Image Transparency_ and _Cropping_ are **_not_** supported in **[iNomads](../../../iNOMADS/iNOMADS%20Introduction.md)**.

_(The Image Options dialogue was added in PxPlus 2019.)_  
  
**Position** |  |  _Column_ |  Starting column for the top left corner of the control - numeric expression. Format mask is ##0.00. Valid entries are 0 to 620.  
---|---  
_Line_ |  Starting line for the top left corner of the control - numeric expression. Format mask is ##0.00. Valid entries are 0 to 255.  
  
_(Support for increased Column and Line maximums was added in PxPlus 2021.)_  
  
**Size** |  |  _Width_ |  Width of the control in number of columns - numeric expression. Format mask is ##0.00. Valid entries are 0 to 620.  
---|---  
_Height_ |  Height of the control in number of lines - numeric expression. Format mask is ##0.00. Valid entries are 0 to 255.  
  
_(Support for increased Width and Height maximums was added in PxPlus 2021.)_  
  
**Attributes** |  Optional attributes for _Tab Stop, Button on Right, Initially Disabled_ and _Initially Hidden_. See **[Attributes](Overview.htm#attributes)**. |  _Button on Right_ |  **_(Applicable only if the control does not contain a bitmap)_** Radio Button appears after the text.  
---|---  
**Font/Color**  
**Font Specification** |  |  _Font  
Size_ |  Click the drop-down arrow for a list of selections.  
---|---  
**Color** |  |  _Foreground  
Background_ |  Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
---|---  
**Color** |  |  _Foreground  
Background_ |  Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
---|---  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_

#### **Note:**  
If a background color has been assigned to a transparent button, the background color will be ignored.  
  
_(Transparency precedence for buttons with background colors was added in PxPlus 2019 Update 1.)_  
  
**Attributes** |  Optional attributes for _Bold, Italics_ , etc. See **[Attributes](Overview.htm#attributes)**.  
**Alignment** |  Sets the text alignment on the button. Selections of _Left Justify_ , _Center_ and _Right Justify_ are available when defining a Radio Button with **_both_** text and bitmap(s). See **[Display](Overview.htm#display)**. When defining a Radio Button with **_text only_** , this defaults to _Center_ , and the other two selections are not available.  
**Visual Class** |  Assign a visual class to the control. Click the Visual Class Maintenance button to launch the **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#vcutility)** utility for creating or editing visual classes. To assign Visual Classes to controls at the **_library_** level, see **[Visual Class Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**.

#### **Note:**  
Visual class names that begin with an "*" _(asterisk)_ are pre-defined visual classes used by PVX Plus and may be subject to change without notice.

_(The Visual Class Maintenance button was added in PxPlus 2019.)_  
**iNomads Class** |  Assign an iNomads class to the control. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**.  
**Attributes**  
**Attributes** |  |  _Tab Stop_ |  Adds the control to the tab order list. Allows use of the **Tab** key for moving to the control. Applies only to one Index Value.  
---|---  
_Auto Tab Skip_ |  Control is skipped when tabbing forward but is still accessible via**Shift - Tab** or the mouse.  
_Initially Disabled_ |  Control region is grayed out and is not accessible to the user for input. The control is accessible programmatically.  
_Initially Hidden_ |  Control is not displayed but is accessible programmatically.  
_Enable Scrolling_ |  Allows the control to scroll in a resizable/scrollable dialogue box. See **[Panel Resizing](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Resizing.md)**.  
_Flat Button_ |  Button shows no raised outline unless the mouse is over the button or the button is pressed.  
_Bitmap Button_ |  Button has a bitmap whose width is divided into four images. Use this to custom design buttons with any color, style or shape by controlling the image that appears.  
_Hover Color_ |  Text on the button is highlighted whenever the mouse is over the button area. The default color is controlled by the **['HC'](../../../parameters/hc.md)** system parameter that defaults to 'Light Blue'.  
_Underscore_ |  Text on the button is underscored.  
_Flat - No Border_ |  Button has no border and shows no raised outline unless the button is pressed.  
_Transparent_ |  Button is transparent; i.e. the window contents behind the button show through. This style can be used to place buttons onto bitmaps.

#### **Note:**  
Setting a background color is not compatible with transparency. If a background color is specified, it will be ignored.  
  
_Drop-List Button_ |  Extra button with an arrow bitmap is attached to the right of the main button. When the arrow bitmap button is clicked, the associated popup menu is displayed.  
_Ignore Change Flag_ |  Select this check box when you do **_not_** want the NOMADS **[CHANGE_FLG](../../Appendix/NOMADS%20Variables/Overview.htm#reserved)** variable to be updated when the control value is changed.  
_Signal Only (No Focus)_ |  PxPlus generates a CTL value but does not shift focus to the button automatically **_(Default)_** unless focus is explicitly passed.  
  
_(The Ignore Change Flag property was added in PxPlus 2017.)_  
  
**User-Defined Tag Field** |  **_(Accessible via Index Value 1 Only)_** For controls, data/tag field which can be used to pass information on such things as formatting, error messages or validation rules. Field contents are placed in a variable using the control name with a .TAG$ extension.  
**Value**  
**Values** |  |  _Index Value_ |  Unique individual index. Integer, range from 1 to 127. Used in applications to identify which Radio Button the user selects.  
---|---  
_Initially On_ |  Sets Radio Button selection to the _On_ state - a black dot appears in the circle.  
_Translate Value_ |  Single character translation value representing the selection.  
**Logic**  
_Default Program_ |  Displays the name of the **[Default Program](../../Panel%20Designer/Panel%20Header/Overview.htm#display)** used in the Panel Header definition. _(The Default Program was added for display in PxPlus 2019.)_  
**Post Create** |  **_(Accessible via Index Value 1 Only)_** Logic to be processed after the control is drawn. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)** _._ Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**When Receiving Focus** |  **_(Accessible via Index Value 1 Only)_** Logic to execute when the control receives focus. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**When Radio Button Pressed** |  **_(Accessible via Index Value 1 Only)_** Logic to be executed when focus leaves the control or the state of the control has changed. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**User Aid**  
**Help Reference** |  Help text to be invoked at run time by pressing Shift - F1 while focus is on a control. |  _Type_ |  Select from _External_ or _Internal_ help types: |  _External_ |  **_(Default)_** Standard Windows help system consisting of a help _File Name_ (._html_ , ._hlp_ , ._doc_ , etc.) and an optional _Keyword_ or _Reference_ number (_Fixed_ value or string _Expression_).  
---|---  
_Internal_ |  Application supplied message text (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
_File Name_ |  Name of the help file.  
_Keyword_ |  Indicates that the text in the adjacent field is the index entry for the topic in the indicated help file.  
_Reference_ |  Indicates that the adjacent field contains the reference number for a specific topic in the context sensitive help.  
_Popup_ |  Select this check box to display the help topic as a popup rather than as an independent window.  
_Test_ |  Tests the current help settings.  
**Floating Tip** |  Mouse pointer message for the control (_Fixed_ value, string _Expression_ or _Message Library Reference_). You can customize the floating tip by adding a tip title, descriptive tip text and a hyperlink. These features enhance the visual display and functionality of the tip by providing users with much needed information at their fingertips. You can define either a _Standard_ tip or an _HTML_ tip that provides a simplified HTML Editor for customizing the tip text. To do this, click the button to the right of the **Floating Tip** multi-line input to invoke the **Define Info Tip** dialogue. See **[Defining an Info Tip](../Defining%20an%20Info%20Tip.md)**.

#### **Note:**  
The **Floating Tip** drop box and multi-line input cannot be changed once an **[HTML](../Defining%20an%20Info%20Tip.htm#tiptype)** tip has been defined.

**_NOMADS Wiki Help_** The floating tip text can be used when displaying the **[Wiki Help](../../System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**. Info tips, however, are not supported and will be ignored. _(Support for customizing Floating Tips was added in PxPlus 2016.)  
(Support for the use of Floating Tip text in the Wiki Help was added in PxPlus 2023.)_  
**Message Bar** |  Text to be displayed in the panel's status bar when focus is on the control (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
_Security_ |  Security restrictions. See **[Restricting Access](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.md)** for information on **Object Security Definition**.  
_Groups_ |  Assign the control to a group. See **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md)**.  
_Popup Menu_ |  Associate a popup menu that will appear when you right-click the mouse over the selected control. See **[Popup Menu](../Popup%20Menu/Overview.md)**.  
_Notes_ |  Add notes/comments for the control. Maximum 1024 characters. These notes also display in the Wiki Help documentation for the panel. See **[NOMADS Wiki Help](../../System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**. _(The Notes button was added in PxPlus 2023.)_  
  
## See Also

**[RADIO_BUTTON Properties](../../../control_object_properties/radiobutton_properties.md)**  
**[RADIO_BUTTON Directive](../../../directives/radio_button.htm#Mark3)**
