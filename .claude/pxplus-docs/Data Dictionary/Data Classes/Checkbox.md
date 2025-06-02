# Data Classes

**Check Box Data Class** |  **__**  
---|---  
  
When creating or editing a data class for a _Check Box_ control type, **Data Class Definitions** maintenance displays the following:

> #### **Note:**  
Properties marked with an *****  _(asterisk)_ can be **_dynamic_**. Expressions that come from a data class **_must_** be global variables. See **[Dynamic Control Properties](Dynamic.md)**.

The following tabbed panels are available: **[Display](Checkbox.htm#display)**, **[Attributes](Checkbox.htm#attributes)**, **[User Aids](Checkbox.htm#useraids)** and **[Validation](Checkbox.htm#validation)**.

_Class Name_ |  Key to the data classes file  _(providex.dcl)_. When entering a new data class name, spaces are **_not_** allowed. Maximum length is 30 characters. Click the Query button _(binoculars)_ for a list of defined data classes (if any). Click the Browse buttons to browse to existing data classes. Click the Copy Class button to copy an existing data class to a new data class. If unsaved changes are detected when selecting these buttons, a message will display to save the changes. _(First/Last Class browse buttons were added in PxPlus 2019.)_  
---|---  
_(Add/Edit Notes)_ |  **_(Available when a new or existing data Class Name is entered or selected)_** Button used to add (or edit) notes for a new or existing data class. Maximum 1024 characters. The button's appearance and tooltip change to indicate that a note was added for the data class. _(The Add/Edit Notes button was added in PxPlus 2022.)_  
_(Copy Class)_ |  **_(Available when an existing data Class Name is selected)_** Button used to create a new data class by copying the settings from an existing data class. Once it is created, **_the new data class must be saved_** , as the Copy process does not do this. _(The Copy Class button was added in PxPlus 2019.)_  
_Last Class Change_ |  This information is updated automatically whenever a change is made to the data class definition. _(Last Class Change was added in PxPlus 2023.)_  
_Control Type_ |  Default control type used to represent the data that belongs to your defined data class. Click the drop-down arrow for a list of selections: _Multi Line, Drop Box, List Box, Radio Buttons, Check Box_. (Default is _Multi Line_.) The control type lets the NOMADS **[Panel Designer](../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** and **[File Maintenance Generator](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** know which type of control to use for representing the data element.  
_Description_ |  Generic description of the data class (_Fixed_ value, _Expression_ or _Message Library Reference_). This will be copied to the data dictionary when the data class is applied to an element. See **[Element Description](../Data%20Dictionary%20Maintenance/Element%20Description.md)**.  
_*Dynamic_ |  For new data classes created **_in PxPlus 2018_** , this check box is selected by default. For data classes created **_prior to PxPlus 2018_** , this check box is **_not_** selected by default. Select this check box to set dynamic control properties to _Dynamic_ automatically when the data class is entered for a control in the Panel Designer. If _Dynamic_ is **_not_** selected, dynamic control properties must be set to _Dynamic_ manually after entering the data class for a control. See **[Dynamic Control Properties](Dynamic.md)**. _(The Dynamic check box was added in PxPlus 2018.)_  
_Internal Data Type_ |  Internal format of the data when manipulated by a program, either _String_ or _Numeric_. (Default is _String_.)  
_Internal Size_ |  Maximum size of the stored data element. When the _Control Type_ is _Check Box_ , the _Internal Size_ is 1.  
**Display****_( * indicates_ a _Dynamic property)_**  
**Properties** |  |  _Check Box Width_ |  Width of the control in number of columns - numeric expression. Format mask is ##0.00 and valid entries are 0 to 255.  
---|---  
_Check Box Height_ |  Height of the control in number of lines - numeric expression. Format mask is ##0.00 and valid entries are 0 to 240.  
**Bitmaps** |  Sets the button bitmap. Click the Bitmap Library button to select a bitmap from the Bitmaps dialogue for the state, if applicable. |  _*Off State_ |  Bitmap shown when button is in the "Off" (normal) state.  
---|---  
_*On State_ |  Bitmap shown when button is in the "On" state.  
_*3rd State_ |  **_(Applicable when Tri-State Check Box (Attributes tab) is selected)_** Bitmap shown when button is in an optional third state. See **[Tri-state Check Box](Checkbox.htm#tristate)** below.  
_Alignment_ |  Sets the bitmap alignment. Click the drop-down arrow for a list of selections: _Left, Right, Top, Bottom, Center/Scale_. Selecting _Center/Scale_ alignment also forces the selection of the _Scale bitmap_ option.  
_Scale bitmap_ |  Scales the bitmap to fit the button size. Any button text is forced to be aligned _Center/Scale_.

#### **Note:**  
_Top, Bottom_ and _Center/Scale_ alignments and the _Scale bitmap_ option only work in 4D mode.  
  
_(Bitmaps definitions for up to three states was added in PxPlus 2018.)  
(The Center/Scale alignment and Scale bitmap options were added in PxPlus 2019 __Update 1_ _.)_  
  
***Image Options** |  **_(Available when Bitmaps for Off/On/3 rd States are selected)_** Sets advanced image options for the bitmap. Click the Additional Image Options button to the right of the **Image Options** multi-line to invoke the **Image Options** dialogue. This dialogue consists of the following: |  **Options** |  |  _Image Transparency_ |  Bitmap transparency option. Click the drop-down arrow for a list of selections: _None, Pixel sets transparency_ or _'Light Gray' is transparent_.  
---|---  
_Flip Image_ |  Flips the image. Click the drop-down arrow for a list of selections: _None, Flip horizontally (left/right), Flip vertically (up/down)_ or _Flip horizontally and vertically_.  
_Rotation Angle_ |  Counter clockwise rotation angle at which to display the image. Valid entries are 0 to 359.  
_Invert Image_ |  Displays the image with inverted colors.  
_Gray Scale Image_ |  Converts the image to gray scale.  
**Cropping (Pixels from  
Top/Left of Image (0,0))** |  Define the cropped image in terms of _Left, Right, Top_ and _Bottom_ where these values are the number of pixels from the top left corner (0,0) of the image.  
  
#### **Note:**  
_Image Transparency_ and _Cropping_ are **_not_** supported in **[iNomads](../../iNOMADS/iNOMADS%20Introduction.md)**.

_(The Image Options dialogue was added in PxPlus 2019.)_  
  
***Visual Class** |  Assign visual class to the control. See **[Visual Class Assignment](../../NOMADS%20Graphical%20Application/NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**.

#### **Note:**  
Visual class names that begin with an "*" _(asterisk)_ are pre-defined visual classes used by PVX Plus and may be subject to change without notice.  
  
***iNomads Class** |  The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined iNomads classes, see **[iNomads Classes](../../iNOMADS/iNomads%20Classes.md)**.  
**Attributes****_( * indicates_ a _Dynamic property)_**  
**Attributes** |  |  _Auto Tab Skip_ |  Control is skipped when tabbing forward but is still accessible via**Shift - Tab** or the mouse.  
---|---  
_Initially Disabled_ |  Control region is grayed out and is not accessible to the user for input. The control is accessible programmatically.  
_Initially Hidden_ |  Control is not displayed but is accessible programmatically.  
_Button to the Right of Text_ |  Bitmap will display after the text. This is only applicable if the Check Box does not contain a bitmap. _(added in PxPlus 2018)_  
_Numeric_ |  Returns a value for the control in a numeric variable.  
_Signal Only (No Focus)_ |  PxPlus generates a CTL value but does not shift focus to the button automatically _(default)_ unless focus is explicitly passed. _(added in PxPlus 2018)_  
_Hover Cursor_ |  Controls the type of cursor to display whenever the mouse moves over the control. Options are: _Default, Arrow, Wait, Insert, Movement arrows, Sizing arrow, Hand, Crossed hand, Rabbit in hat, Happy face, Sad face, Up/Down arrow, Left/Right arrow and Not allowed_. _(added in PxPlus 2018)_  
_Tri-State Check Box_ |  Creates a Check Box that includes a third state. User will be able to toggle between three states: **_On_** , **_Off_** and an optional **_Third State_**.  
_Enable Scrolling_ |  Allows the control to scroll in a resizable/scrollable dialogue box. See **[Panel Resizing](../../NOMADS%20Graphical%20Application/Panel%20Designer/Resizing%20and%20Persistence/Panel%20Resizing.md)**.  
_Flat Button_ |  Button shows no raised outline unless the mouse is over the button or the button is pressed. _(added in PxPlus 2018)_  
_Bitmap Button_ |  Button has a bitmap whose width is divided into four images. Use this to custom design buttons with any color, style or shape by controlling the image that appears. _(added in PxPlus 2018)_  
_Sticky Button_ |  'Sticky' functionality, which means that the button remains in the "pressed" position until the next selection._(added in PxPlus 2018)_  
_Hover Color_ |  Text on the button is highlighted whenever the mouse is over the button area. The default color is controlled by the **'[HC](../../parameters/hc.md)'** system parameter that defaults to 'Light Blue'. _(added in PxPlus 2018)_  
_Flat - No Border_ |  Button has no border and shows no raised outline unless the button is pressed. _(added in PxPlus 2018)_  
_Transparent_ |  Button is transparent; i.e. the window contents behind the button show through. This style can be used to place buttons onto bitmaps. _(added in PxPlus 2018)_  
_Drop-List Button_ |  Extra button with an arrow bitmap is attached to the right of the main button. When the arrow bitmap button is clicked, the associated popup menu is displayed. _(added in PxPlus 2018)_  
_Ignore Change Flag_ |  Select this check box when you do **_not_** want the NOMADS **[CHANGE_FLG](../../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#reserved)** variable to be updated when the control value is changed. _(added in PxPlus 2017)_  
***User Tag Field** |  For controls, data/tag field which can be used to pass information on such things as formatting, error messages or validation rules. Field contents are placed in a variable using the control name with a .TAG$ extension.  
**User Aids****_( * indicates_ a _Dynamic property)_**  
***Help Reference** |  |  _Type_ |  Click the drop-down arrow to select either _Internal_ or _External_ help reference: |  _Internal_ |  Application supplied message text (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
---|---  
_External_ |  Standard Windows help system consisting of a help file name and an optional keyword or reference number (_Fixed_ or _Expression_).  
***Floating Tip** |  Mouse pointer message for the control (_Fixed_ value, string _Expression_ or _Message Library Reference_). You can customize the floating tip by adding a tip title, descriptive tip text and a hyperlink. These features enhance the visual display and functionality of the tip by providing users with much needed information at their fingertips. You can define either a _Standard_ tip or an _HTML_ tip that provides a simplified HTML Editor for customizing the tip text. To do this, click the button to the right of the **Floating Tip** multi-Line input to invoke the **Define Info Tip** dialogue. See **[Defining an Info Tip](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Defining%20an%20Info%20Tip.md)**.

#### **Note:**  
The **Floating Tip** drop box and multi-line input cannot be changed once an [**HTML**](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Defining%20an%20Info%20Tip.htm#tiptype) tip has been defined.  
  
***Message Bar** |  Text to be displayed in the panel's status bar when focus is on the control (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
**Validation****_( * indicates_ a _Dynamic property)_**  
***Default Setting** |  Initial value to be applied when the Check Box is drawn.  
***Values** |  |  _Value in 'Off' State_ |  Value to return when the Check Box is turned **_Off_**. Can be a numeric value or a single character translation value.  
---|---  
_Value in 'On' State_ |  Value to return when the Check Box is turned **_On_**. Value can be a numeric value or a single character translation value.  
_Tri-State Check Box_ |  Creates a Check Box that includes a third state. User will be able to toggle between three states: **_On_** , **_Off_** and an optional **_Third State_**. See _Value in '3rd' State_ below.  
_Value in '3rd' State_ |  Value to return for the **_3rd State_**. Can be a numeric or a single character translation value. Requires _Tri-state_ _Check Box_ to be selected. See **[Attributes](Checkbox.htm#attributes)** above.  
|  __  
_Popup Menu_ |  Button that is used to assign a popup menu to a data class (_Fixed_ value or _Expression_ , to be evaluated at run time when the popup signal occurs). A check mark displayed on the button indicates that a popup menu is currently assigned to the data class. This button invokes the **[Assign Popup Menu](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Popup%20Menu/Applying%20a%20Popup%20Menu.md)** window for assigning _Prior Popup_ logic, a pre-defined popup object or user-defined program. If selected, _Prior Popup_ logic will be executed before the popup menu is displayed. If _On Select_ logic exists for the control with the popup menu, this will be triggered before the popup event.  
  
Select the _Panel_ option in the **Assign Popup Menu** window to display a pre-set list of popup objects available for the highlighted library. The _Program_ option is used to add a user-defined program. This can be either a _Fixed_ value or _Expression_ to be evaluated at run time when the popup signal occurs.  
_Write_ |  Adds a new data class definition or updates an existing definition.  
_Delete_ |  **_(Available when an existing data class is selected)_** Removes the selected data class definition. Before proceeding, a message asks to confirm the deletion, as deleting a data class in use may cause issues.  
_Clear_ |  Clears the current data class definition to allow you to define a new data class or select an existing definition.  
_Exit_ |  Closes **Data Class Definitions** maintenance without saving any changes.  
  
_(The Display and User Aids tabs were added in PxPlus 2018.)_
