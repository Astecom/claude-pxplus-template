# Creating Panel Controls

**Check Box and Tri-State Control** |  **__**  
---|---  
  
The Check Box control is a button type that allows users to toggle between states: **_On_** to select it, **_Off_** to deselect it, and an optional _third_ state (_Tri-State control_). Unlike radio buttons, which are mutually exclusive, multiple Check Boxes can be selected at the same time.

Check Boxes include a text label that can be positioned to the right or left. They can also have graphics applied to them. If the visual mode for the Check Box is set to 2D, the default 'X' will apply.

A _third_ control state can be added by enabling the **[Tri-State](Overview.htm#tristate)** and **[Value in '3rd' State](Overview.htm#thirdstate)** properties.

**_Example:_**

A _filled_ indicator may be applied as the third state for a _Tri-State control_ :

> Unchecked |   
> ---|---  
> Checked |   
> Filled |   
  
A predefined **[Data Class](../../../Data%20Dictionary/Data%20Classes/Overview.md)** can also be applied to a _Check Box_ control.

## Creating a Check Box

To draw a new Check Box control on your panel, select the Check Box control tool from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**. Hold down the left-mouse button and drag the mouse to create a rectangle to the desired size. Release the mouse button to create the new object.

A Check Box control can also be created from a **_data class_** or a data dictionary **_element_**. See **[Data Class Controls](../Introduction.htm#Mark4)** and **[Data Element Controls](../Introduction.htm#Mark5)**.

For making other adjustments, see **[Modifying Objects](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.md)**.

To define the specific attributes for the new control, see **[Check Box/Tri-State Properties](Overview.htm#chbxproperties)**.

For information and examples on the use of **_dynamic data classes_** and **_dynamic control properties_** , see **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**.

##  Check Box/Tri-State Properties

When creating or editing a _Check Box_ control, the **Check Box Properties** dialogue (pictured below using the **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** version of the NOMADS designer) is displayed:

> **_Dynamic Control Properties_**

PxPlus 2018 introduces the capability to create **_dynamic control properties_** for Check Box controls when combined with **[Data Classes](../../../Data%20Dictionary/Data%20Classes/Overview.md)**. Dynamic data classes are created by selecting the _Dynamic_ check box in **[Data Class Definitions](../../../Data%20Dictionary/Data%20Classes/Checkbox.md)** maintenance. At run time, dynamic control properties are evaluated and **_automatically_** populated with values based on what is defined in the data class.

When a data class is entered for the Check Box control, information from the data class is loaded into the Check Box properties. If the data class is **_dynamic_** , the dynamic control properties are **_automatically_** set to _Dynamic_ initially and assigned a **%NOMADS'class'** variable that corresponds to a data class field (i.e. **%NOMADS'class'length**).

Check Box control properties designated as **_dynamic_** can be _manually_ switched to dynamic or non-dynamic. A Check Box control can have a combination of dynamic **_and_** non-dynamic control properties **_only_** when a data class is entered.

See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)** for information and examples.

#### **Note:**  
Dynamic control properties are supported in NOMADS **_and_** iNomads environments.

**_Check Box Properties_**

This dialogue is divided into the following tabbed panels for viewing and/or changing Check Box properties: **[Display](Overview.htm#display)**, **[Font/Color](Overview.htm#font)**, **[Attributes](Overview.htm#attributes)**, **[Values](Overview.htm#values)**, **[Logic](Overview.htm#logic)** and **[User Aid](Overview.htm#useraid)**.

_Name_ |  Unique name of the Check Box control (NOMADS provides a default). Naming conventions for variables apply. Click the Browse Library button to copy parameters from an existing object (via the **[Library Browse](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Library%20Browse.md)** dialogue).

#### **Note:**  
When a new control name is entered, it will be checked against the [**Reserved Words**](../../../Reserved%20Words.md) list to determine if it is restricted for use as a NOMADS control name. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_  
  
---|---  
_Class_ |  Enter a **[Data Class](../../../Data%20Dictionary/Data%20Classes/Overview.md)** to load the information from the data class definition into the control's properties. If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Data Class_ button and enter a data class in the **Data Class Options** dialogue. _(The Data Class Options dialogue was added in PxPlus 2018.)_ To enter a data class, use any of the following methods:

  * Click the Query button (binoculars) to select from a list of predefined data classes (if any) for the current control type.
  * Type the name of an existing data class. Only data classes for the current control type are allowed.
  * Create a data class on the fly. Enter a new _Class_ name and respond _Yes_ to the displayed message, which launches **[Data Class Definitions](../../../Data%20Dictionary/Data%20Classes/Checkbox.md)**.

If the data class is changed, a message will display prior to overwriting any information. This works similar to using the **[Reapply Data Class](Overview.htm#reapply)** button. If the data class assigned to the control is deleted in **Data Class Definitions** , the text **** Class not on File **** will display (will be a message box if using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**). _(Dynamic data classes and properties were added in PxPlus 2018.)_  
_(Data Class Maintenance)_ |  Click this button to launch **[Data Class Definitions](../../../Data%20Dictionary/Data%20Classes/Checkbox.md)** for creating or editing a data class. If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Data Class_ button, then click the _Data Class Maintenance_ button in the **Data Class Options** dialogue. _(The Data Class Options dialogue was added in PxPlus 2018.)  
(The Data Class Maintenance button was added in PxPlus 2018.)_  
_(Reapply Data Class)_ |  **_(Available when a data Class is entered)_** Click this button to update control properties with current information from the selected data class. A message displays before any control properties are overwritten. If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Data Class_ button and select the _Reapply Class_ check box in the **Data Class Options** dialogue. _(The Data Class Options dialogue was added in PxPlus 2018.)_

#### **Important Note:**  
Care should be taken when using the _Reapply Data Class_ button or changing the data _Class_ entered for the control, as this will overwrite any existing values.  
  
If the _Dynamic (from Data Class)_ check box was manually changed on the **[Values](Overview.htm#values)** and/or **[User Aid](Overview.htm#useraid)** tabs, clicking the _Reapply Data Class_ button will reselect this check box if the data class entered for the control is dynamic or deselect it if not dynamic.

_(The Reapply Data Class button was added in PxPlus 2018.)_  
_Dynamic Class_ |  **_(Display Only)_** Indicates whether the selected data _Class_ is Dynamic. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Data Class_ button to display the _Dynamic Class_ check box in the **Data Class Options** dialogue. _(The Data Class Options dialogue was added in PxPlus 2018.)  
(The Dynamic Class check box was added in PxPlus 2018.)_  
**Preview** |  Displays how the visible properties of the control will appear at run time.  
**Display****_( * indicates_ a _Dynamic property)_**  
***Text** |  Sets the button text. Click the drop-down arrow for a list of selections: _Fixed_ , _Expression_ , _Message Library Reference_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
**Bitmaps** |  Sets the button bitmap. Click the Bitmap Library button to select a bitmap from the Bitmaps dialogue for the state, if applicable. |  _*Off State_ |  Bitmap shown when button is in the "Off" (normal) state.  
---|---  
_*On State_ |  Bitmap shown when button is in the "On" state.  
_*3rd State_ |  **_(Available when Tri-State Check Box attribute is selected)_** Bitmap shown when button is in an optional third state. See **[Tri-State Check Box](Overview.htm#tristate)**.  
_Alignment_ |  Sets the bitmap alignment. Click the drop-down arrow for a list of selections: _Left, Right, Top, Bottom, Center/Scale_. Selecting _Center/Scale_ alignment also forces the selection of the _Scale bitmap_ option.  
_Scale bitmap_ |  Scales the bitmap to fit the button size. Any button text is forced to be aligned _Center/Scale_.

#### **Note:**  
_Top, Bottom_ and _Center/Scale_ alignments and the _Scale bitmap_ option only work in 4D mode.  
  
If a dynamic data class is entered, these properties will be set as dynamic and locked. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**.

_(Dynamic data classes and properties were added in PxPlus 2018.)  
(The Center/Scale alignment and Scale bitmap options were added in PxPlus 2019 __Update 1_ _.)_  
  
***Image Options** |  **_(Available when Bitmaps for Off/On/3rd States are selected)_** Sets advanced image options for the bitmap. Click the Additional Image Options button to the right of the **Image Options** multi-line to invoke the **Image Options** dialogue. This dialogue consists of the following: |  **Options** |  |  _Image Transparency_ |  Bitmap transparency option. Click the drop-down arrow for a list of selections: _None, Pixel sets transparency_ or _'Light Gray' is transparent_.  
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
  
#### **Note:**  
If a data class is entered and the _Check Box Width_ value in the data class is subsequently changed, the size of the Check Box will **_not_** change when the _Reapply Data Class_ button is selected.  
  
_(This functionality was added in PxPlus 2018.)_

_(Support for increased Width and Height maximums was added in PxPlus 2021.)_  
  
**Common Attributes** |  Optional attributes for _Tab Stop, Disabled, Button on Right, Tri-State_ and _Hidden_. See **[Attributes](Overview.htm#attributes)**.  
**Font/Color**** _( * indicates_ a _Dynamic property)_**  
**Font Specification** |  |  _Font  
Size_ |  Click the drop-down arrow for a list of selections.  
---|---  
**Color** |  |  _Foreground  
Background_ |  Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
---|---  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_

#### **Note:**  
If a background color has been assigned to a transparent button, the background color will be ignored.  
  
_(Transparency precedence for buttons with background colors was added in PxPlus 2019 Update 1.)_  
  
**Attributes** |  Optional attributes for Bold, Italics, etc. See **[Attributes](Overview.htm#attributes)**.  
**Alignment** |  Sets the text alignment on the button. Selections of _Left Justify, Center and Right Justify_ are available when defining a Check Box with both text and bitmap(s). See **[Display](Overview.htm#display)**. When defining a Check Box with text only, this defaults to _Center_ , and the other two selections are not available.  
***Visual Class** |  Assign a visual class to the control. Can be _Fixed_ , _Expression_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) Click the Visual Class Maintenance button to launch the **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#vcutility)** utility for creating or editing visual classes. To assign visual classes to controls at the **_library_** level, see **[Visual Class Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**. If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**.

#### **Note:**  
Visual class names that begin with an "*" _(asterisk)_ are pre-defined visual classes used by PVX Plus and may be subject to change without notice.

_(The Dynamic drop box option was added in PxPlus 2018.)  
(The Visual Class Maintenance button was added in PxPlus 2019.)_  
***iNomads Class** |  Assign an iNomads class to the control. Can be _Fixed_ , _Expression_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined iNomads classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**. _(The Dynamic drop box option was added in PxPlus 2018.)_  
**Attributes****_( * indicates_ a _Dynamic property)_**  
**Attributes** |  |  _Tab Stop_ |  Adds the control to the tab order list. Allows use of the **Tab** key for moving to the control.  
---|---  
_Auto Tab Skip_ |  Control is skipped when tabbing forward but is still accessible via**Shift - Tab** or the mouse.  
_Initially Disabled_ |  Control region is grayed out and is not accessible to the user for input. The control is accessible programmatically.  
_Initially Hidden_ |  Control is not displayed but is accessible programmatically.  
_Button to the Right of Text_ |  Bitmap will display after the text. This is only applicable if the Check Box does not contain a bitmap. If _Text_ (on **[Display](Overview.htm#display)** tab) is set to _Dynamic_ , this attribute will be locked.  
_Numeric_ |  Returns a value for the control in a numeric variable. See _Numeric_ (on **[Values](Overview.htm#values)** tab).  
_Signal Only (No Focus)_ |  PxPlus generates a CTL value but does not shift focus to the button automatically _(Default)_ unless focus is explicitly passed.  
_Hover Cursor_ |  Controls the type of cursor to display whenever the mouse moves over the control. Options are: _Default, Arrow, Wait, Insert, Movement arrows, Sizing arrow, Hand, Crossed hand, Rabbit in hat, Happy face, Sad face, Up/Down arrow, Left/Right arrow and Not allowed_.  
_Tri-State Check Box_ |  Creates a Check Box that includes a third state. User will be able to toggle between three states: **_On_** , **_Off_** and an optional **_Third State_**. See _Value in '3rd' State_ (on **[Values](Overview.htm#values)** tab).  
_Enable Scrolling_ |  Allows the control to scroll in a resizable/scrollable dialogue box. See **[Panel Resizing](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Resizing.md)**.  
_Flat Button_ |  Button shows no raised outline unless the mouse is over the button or the button is pressed.  
_Bitmap Button_ |  Button has a bitmap whose width is divided into four images. Use this to custom design buttons with any color, style or shape by controlling the image that appears.  
_Sticky Button_ |  'Sticky' functionality, which means that the button remains in the "pressed" position until the next selection.  
_Hover Color_ |  Text on the button is highlighted whenever the mouse is over the button area. The default color is controlled by the **'[HC](../../../parameters/hc.md)'** system parameter that defaults to 'Light Blue'.  
_Flat - No Border_ |  Button has no border and shows no raised outline unless the button is pressed.  
_Transparent_ |  Button is transparent; i.e. the window contents behind the button show through. This style can be used to place buttons onto bitmaps.

#### **Note:**  
Setting a background color is not compatible with transparency. If a background color is specified, it will be ignored.  
  
_Drop-List Button_ |  Extra button with an arrow bitmap is attached to the right of the main button. When the arrow bitmap button is clicked, the associated popup menu is displayed.  
_Ignore Change Flag_ |  Select this check box when you do **_not_** want the NOMADS **[CHANGE_FLG](../../Appendix/NOMADS%20Variables/Overview.htm#reserved)** variable to be updated when the control value is changed.  
  
_(The Ignore Change Flag property was added in PxPlus 2017.)_  
  
***User-Defined Tag Field** |  For controls, data/tag field that can be used to pass information on such things as formatting, error messages or validation rules. Can be _Fixed_ , _Expression_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) Field contents are placed in a variable using the control name with a .TAG$ extension. If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. _(The Dynamic drop box option was added in PxPlus 2018.)_  
**Values****_( * indicates_ a _Dynamic property)_**  
_Dynamic (from Data Class)_ |  **_(Available when a data Class is entered)_** If selected, identifies the **Default Setting** and **Values** properties as dynamic. If a dynamic data class is entered, this check box is automatically selected. If the data class is **_not_** dynamic, this check box can be manually selected.

#### **Note:**  
If the _Dynamic (from Data Class)_ check box was manually changed on the **Values** and/or **[User Aid](Overview.htm#useraid)** tabs, clicking the _Reapply Data Class_ button will reselect this check box if the data class entered for the control is dynamic or deselect it if not dynamic.

_(Dynamic data classes and properties were added in PxPlus 2018.)_  
_Numeric_ |  Returns a value for the control in a numeric variable. If the _Dynamic (from Data Class)_ check box is selected, the _Numeric_ property will be locked.  
  
_(Dynamic data classes and properties were added in PxPlus 2018.)_  
***Default Setting** |  Initial value to be applied when the Check Box is drawn. If the _Dynamic (from Data Class)_ check box is selected, the **Default Setting** and **Values** properties will all be set as dynamic and locked (cannot be set individually). See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
***Values** |  |  _Value in 'Off' State_ |  Value to return when the Check Box is turned **_Off_**.Can be a numeric value or a single character translation value.  
---|---  
_Value in 'On' State_ |  Value to return when the Check Box is turned **_On_**. Value can be a numeric value or a single character translation value.  
_Tri-State Check Box_ |  Creates a Check Box that includes a third state. User will be able to toggle between three states: **_On_** , **_Off_** and an optional **_Third State_**. See _Value in '3rd' State_ below. If the _Dynamic (from Data Class)_ check box is selected, the _Tri-State Check Box_ property will be locked.  
_Value in '3rd' State_ |  **_(Available when Tri-State Check Box is selected)_** Value to return for the **_Third State_**. Can be a numeric or a single character translation value.  
  
If the _Dynamic (from Data Class)_ check box is selected, the **Default Setting** and **Values** properties will all be set as dynamic and locked (cannot be set individually). See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**.

_(Dynamic data classes and properties were added in PxPlus 2018.)_  
  
**Logic**  
_Default Program_ |  Displays the name of the **[Default Program](../../Panel%20Designer/Panel%20Header/Overview.htm#display)** used in the Panel Header definition. _(The Default Program was added for display in PxPlus 2019.)_  
**Post Create** |  Logic to be processed after the control is drawn. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**When Receiving Focus** |  Logic to execute when the control receives focus. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**When Button Pressed** |  Logic to be executed when focus leaves the control or the state of the control has changed. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**User Aid**** _( * indicates_ a _Dynamic property)_**  
_Dynamic (from Data Class)_ |  **_(Available when a data Class is entered)_** If selected, identifies which **Help Reference** properties are dynamic. If a dynamic data class is entered, this check box is automatically selected. If the data class is **_not_** dynamic, this check box can be manually selected.

#### **Note:**  
If the _Dynamic (from Data Class)_ check box was manually changed on the **[Values](Overview.htm#values)** and/or **User Aid** tabs, clicking the _Reapply Data Class_ button will reselect this check box if the data class entered for the control is dynamic or deselect it if not dynamic.

_(Dynamic data classes and properties were added in PxPlus 2018.)_  
***Help Reference** |  Help text to be invoked at run time by pressing Shift - F1 while focus is on a control. |  _Type_ |  Select from _External_ or _Internal_ help types: |  _External_ |  **_(Default)_** Standard Windows help system consisting of a help _File Name_ (._html_ , ._hlp_ , ._doc_ , etc.) and an optional _Keyword_ or _Reference_ number (_Fixed_ value or string _Expression_).  
---|---  
_Internal_ |  Application supplied message text (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
_File Name_ |  Name of the help file.  
_Keyword_ |  Indicates that the text in the adjacent field is the index entry for the topic in the indicated help file.  
_Reference_ |  Indicates that the adjacent field contains the reference number for a specific topic in the context sensitive help.  
_Popup_ |  Select this check box to display the help topic as a popup rather than as an independent window.  
_Test_ |  Tests the current help settings.  
  
If the _Dynamic (from Data Class)_ check box is selected, the **Help Reference** properties will be dynamic and locked. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**.

_(Dynamic data classes and properties were added in PxPlus 2018.)_  
  
***Floating Tip** |  Mouse pointer message for the control. Can be a _Fixed_ value, string _Expression_ , _Message Library Reference_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. You can customize the floating tip by adding a tip title, descriptive tip text and a hyperlink. These features enhance the visual display and functionality of the tip by providing users with much needed information at their fingertips. You can define either a _Standard_ tip or an _HTML_ tip that provides a simplified HTML Editor for customizing the tip text. To do this, click the button to the right of the **Floating Tip** multi-line input to invoke the **Define Info Tip** dialogue. See **[Defining an Info Tip](../Defining%20an%20Info%20Tip.md)**.

#### **Note:**  
The Floating Tip drop box and multi-line input _cannot_ be changed once an [**HTML**](../Defining%20an%20Info%20Tip.htm#tiptype) tip has been defined.

**_NOMADS Wiki Help_** The floating tip text can be used when displaying the **[Wiki Help](../../System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**. Info tips, however, are not supported and will be ignored. _(Support for customizing Floating Tips was added in PxPlus 2016.)  
(Dynamic data classes and properties were added in PxPlus 2018.)  
(Support for the use of Floating Tip text in the Wiki Help was added in PxPlus 2023.)_  
***Message Bar** |  Text to be displayed in the panel's status bar when focus is on the control. Can be a _Fixed_ value, string _Expression_ , _Message Library Reference_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
_Security_ |  Security restrictions. See **[Restricting Access](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.md)** for information on **Object Security Definition**.  
_Groups_ |  Assign the control to a group. See **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md)**.  
_Popup Menu_ |  Associate a popup menu that will appear when you right-click the mouse over the selected control. See **[Popup Menu](../Popup%20Menu/Overview.md)**.  
_Notes_ |  Add notes/comments for the control. Maximum 1024 characters. These notes also display in the Wiki Help documentation for the panel. See **[NOMADS Wiki Help](../../System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**. _(The Notes button was added in PxPlus 2023.)_  
  
## See Also

**[CHECK_BOX Properties](../../../control_object_properties/checkbox_properties.md)**  
**[CHECK_BOX Directive](../../../directives/check_box.htm#Mark3)**  
**[TRISTATE_BOX Directive](../../../directives/tristate_box.htm#Mark3)**
