# Creating Panel Controls

**Button Control** |  **__**  
---|---  
  
When a user clicks a Button in a graphical application, it is usually defined to send a signal to the application to perform a specific action. NOMADS allows you to customize the Button's appearance and various other characteristics; i.e. use _graphics_ that correspond to object states, create a _tool bar-style appearance_ that looks 3-D on a mouse-over, or add _hover text_ similar to links on a Web page.

## Creating a Button

To draw a new Button control on a panel, select the Button control tool from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**. Hold down the left mouse button and drag the mouse to create a rectangle to the desired size. Release the mouse button to create the new object.

For making other adjustments, see **[Modifying Objects](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.md)**.

To define the specific attributes for the new control, see **[Button Properties](Overview.htm#properties)**.

##  Button Properties

When creating or editing a _Button_ control, the **Button Properties** dialogue (pictured below using the **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** version of the NOMADS Panel Designer) is displayed.

> This dialogue is divided into the following tabbed panels for viewing and/or changing Button properties: **[Display](Overview.htm#display)**, **[Font/Color](Overview.htm#font)**, **[Attributes](Overview.htm#attributes)**, **[Logic](Overview.htm#logic)** and **[User Aid](Overview.htm#useraid)**.

_Name_ |  Unique name of the Button control (NOMADS provides a default). Naming conventions for variables apply. Click the Browse Library button to copy parameters from an existing object (via the **[Library Browse](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Library%20Browse.md)** dialogue).

#### **Note:**  
When a new control name is entered, it will be checked against the **[Reserved Words](../../../Reserved%20Words.md)** list to determine if it is restricted for use as a NOMADS control name. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_  
  
---|---  
_Class_ |  Associate a data class for preloading information (e.g. size, description, input methodology, default values, etc.). Click the Query button (binoculars) to select a predefined class.  
**Preview** |  Displays how the visible properties of the control will appear at run time.  
**Display**  
**Text** |  Sets the Button text. Click the drop-down arrow for a list of selections: _Fixed, Expression, Message Library Reference_.  
**Bitmaps** |  Sets the Button bitmap. Click the Bitmap Library button to select a bitmap from the Bitmaps dialogue. |  _Normal_ |  Bitmap shown when the Button is released.  
---|---  
_Pushed_ |  Bitmap shown when the Button is pressed.  
_Alignment_ |  Sets the bitmap alignment. Click the drop-down arrow for a list of selections: _Left, Right, Top, Bottom, Center/Scale_. Selecting _Center/Scale_ alignment also forces the selection of the _Scale bitmap_ option.  
_Scale bitmap_ |  Scales the bitmap to fit the Button size. Any Button text is forced to be aligned _Center/Scale_.

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
  
**General Attributes** |  Optional attributes for _Tab Stop, Initially Disabled_ and _Initially Hidden_. (See **[Attributes](Overview.htm#attributes)**.)  
**Font/Color**  
**Font Specification** |  |  _Font  
Size_ |  Click the drop-down arrow for a list of selections.  
---|---  
**Color** |  |  _Foreground  
Background_ |  Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
---|---  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_

#### **Note:**  
If a background color has been assigned to a transparent Button, the background color will be ignored.  
  
_(Transparency precedence for Buttons with background colors was added in PxPlus 2019 Update 1.)_  
  
**Attributes** |  Optional attributes.  
**Alignment** |  Sets the text alignment on the Button. Defaults to _Center_ when defining a Button control with text only or with both text and bitmap(s), but this can be changed.  
**Visual Class** |  Assign a visual class to the control. Click the Visual Class Maintenance button to launch the **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#vcutility)** utility for creating or editing visual classes. To assign visual classes to controls at the **_library_** level, see **[Visual Class Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**.

#### **Note** :  
Visual class names that begin with an "*" _(asterisk)_ are pre-defined visual classes used by PVX Plus and may be subject to change without notice.

_(The Visual Class Maintenance button was added in PxPlus 2019.)_  
**iNomads Class** |  Assign an iNomads class to the control. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**.  
**Attributes**  
**Attributes** |  |  _Tab Stop_ |  Adds the control to the tab order list. Allows use of the Tab key for moving to the control.  
---|---  
_Auto Tab Skip_ |  Control is skipped when tabbing forward but is still accessible via **Shift - Tab** or the mouse.  
_Initially Disabled_ |  Control region is grayed out and is not accessible to the user for input. The control is accessible programmatically.  
_Initially Hidden_ |  Control is not displayed but is accessible programmatically.  
_Adjacent_ |  When the Button is drawn, it is lined up to the control at its immediate left.  
_Enable Scrolling_ |  Allows control to scroll in a resizable/scrollable dialogue box. See **[Panel Resizing](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Resizing.md)**.  
_Default Push Button_ |  Defines Button as default. Pressing the **Enter** key will execute the On Change logic for this Button. _There can only be one default push button per panel._  
_Signal Only (No Focus)_ |  PxPlus generates a CTL value but does not shift focus to the Button automatically _(default)_ unless focus is explicitly passed.  
_Moveable_ |  Button can be moved by dragging it with the mouse. This movement will **_not_** be saved. _(The Moveable property was added in PxPlus 2019.)_  
_Hover Cursor_ |  Controls the type of cursor to display whenever the mouse moves over the control. Options are: _Default, Arrow, Wait, Insert, Movement arrow, Sizing arrow, Hand, Crossed hand, Rabbit in hat, Happy face, Sad face, Up/down arrow, Left/right arrow and Not allowed_.  
_Hyperlink (Web Page Style Link)_ |  Generates a Web-link style Button (no frame, underscored, and hover). Enables the ability to control text placement.  
_Flat Button_ |  Button shows no raised outline unless the mouse is over the Button or the Button is pressed. This option is hidden if the _Hyperlink (Web Page Style Link)_ check box is selected.  
_Flat No Border_ |  Button has no border and shows no raised outline unless the Button is pushed. This option is hidden if the _Hyperlink (Web Page Style Link)_ check box is selected.  
_Transparent_ |  Button is transparent; i.e. the window contents behind the Button show through. This style can be used to place Buttons onto bitmaps. This option is hidden if the _Hyperlink (Web Page Style Link)_ check box is selected.

#### **Note:**  
Setting a background color is not compatible with transparency. If a background color is specified, it will be ignored.  
  
_Underscore Text_ |  Text on the Button is underscored. This option is hidden if the _Hyperlink (Web Page Style Link)_ check box is selected.  
_Dynamic Text_ |  When set, the system will define a string variable based on the name of the control that, when changed and the screen is refreshed, will control the text shown on the button. Typical use might be a button that works as a hyperlink to a Web site where the text in the related string variable changes between records currently being displayed. This option is hidden if the _Hyperlink (Web Page Style Link)_ check box is selected. _(The Dynamic Text property was added in PxPlus 2024.)_  
_Hover Color_ |  Text on the Button is highlighted whenever the mouse is over the Button area. The default color is controlled by the **['CH'](../../../parameters/ch.md)** system parameter that defaults to 'Light Blue'. This option is hidden if the _Hyperlink (Web Page Style Link)_ check box is selected.  
_Drop-List Button_ |  Extra button with an arrow bitmap is attached to the right of the main Button. When the arrow bitmap Button is clicked, the associated popup menu is displayed. This option is hidden if the _Hyperlink (Web Page Style Link)_ check box is selected.  
_Special Button Style_ |  Click the drop-down arrow for a list of Button styles. Defaults to _None_ for a new button or for a button that did not have any of these attributes previously set. This option is hidden if the _Hyperlink (Web Page Style Link)_ check box is selected. Available selections are: |  _None_ |  No special button style.  
---|---  
_Bitmap Button_ |  Button has a bitmap whose width is divided into four images. Use this to custom design Buttons with any color, style or shape by controlling the image that appears.  
_Plus Rocker Button_ |  Button is a rocker style that provides Left, Right, Up and Down arrows in a plus sign layout over whatever image exists in the Button.  
_Sizer Button_ |  Creates narrow horizontal or vertical Button (depending on its dimensions) that can slide vertically or horizontally. Can be used between other controls to control for sizing purposes.  
_Spinner Button_ |  Button will work as a spinner button with Up and Down arrows displayed on the Button. Clicking on an arrow will not only result in the button firing but will also set the EOM to U or D, depending on the arrow clicked. _(The Spinner Button option was added in PxPlus 2024.)_  
_System Tray_ |  Assigns control to be a Windows system tray icon and places a Button in the system tray. The Button should contain icons only.  
  
_(The Special Button Style drop box was added in PxPlus 2024.)_  
  
**User-Defined Tag Field** |  For controls, data/tag field which can be used to pass information on such things as formatting, error messages or validation rules. Field contents are placed in a variable using the control name with a .TAG$ extension.  
**Logic**  
_Default Program_ |  Displays the name of the **[Default Program](../../Panel%20Designer/Panel%20Header/Overview.htm#display)** used in the Panel Header definition. _(The Default Program was added for display in PxPlus 2019.)_  
**Prior Button Display** |  Logic to be processed prior to creation of the Button. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**When Receiving Focus** |  Logic to execute when the control receives focus. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**When Button Pressed** |  Logic to be executed when focus leaves the control or the state of the control has changed. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
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

**[BUTTON Properties](../../../control_object_properties/button_properties.md)**  
**[BUTTON Directive](../../../directives/button.htm#Mark3)**
