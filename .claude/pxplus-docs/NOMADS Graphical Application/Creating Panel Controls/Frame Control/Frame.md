# Creating Panel Controls  
  
**Box/Frame Control** |  **__**  
---|---  
  
This tool is used to visually group sections of a panel using a Box or Frame object. For example, you can draw a Frame around all the controls used for shipping data, and another Frame around all the controls used for invoicing.

#### **Note:**  
Frames objects are used for visual cues only. No functionality is associated with them.

For information on defining Frame objects, see **'[FRAME](../../../mnemonics/frame.md)'** mnemonic.

## Drawing a Frame

To draw a Frame around objects on your panel, select the Frame control tool from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**. Hold down the left mouse button and drag the mouse to create a rectangle to the desired size. Release the mouse button to create the new object.

For making other adjustments, see **[Modifying Objects](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.md)**.

To define the specific attributes for the new control, see **[Frame Properties](Frame.htm#frameproperties)**.

##  Frame Properties

When creating or editing a _Frame_ control, the **Box and Frame Properties** dialogue (pictured below using the **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** version of the NOMADS Panel Designer) is displayed:

> This dialogue is divided into the following tabbed panels for viewing and/or changing Box and Frame properties: **[Display](Frame.htm#display)** and **[Font/Color](Frame.htm#font)**.

_Name_ |  Unique name of the Frame object (NOMADS provides a default). Naming conventions for variables apply. Click the Browse Library button to copy parameters from an existing object (via the **[Library Browse](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Library%20Browse.md)** dialogue).

#### **Note:**  
When a new control name is entered, it will be checked against the [**Reserved Words**](../../../Reserved%20Words.md) list to determine if it is restricted for use as a NOMADS control name. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_  
  
---|---  
**Preview** |  Displays how the visible properties of the control will appear at run time.  
**Display**  
**Text** |  Set a title/heading for a Frame. Click the drop-down arrow for a list of selections: _Fixed_ , _Expression_ , _Message Library Reference_.

#### **Note:**  
If you are running **_PxPlus version 11 or higher_** and are using 4D mode to draw controls, the 'FRAME' text color can be changed by setting the **FrameTextClr** option using either the **['OPTION'](../../../mnemonics/option.md)** mnemonic or the **[SETDEV](../../../directives/setdev_set.md)** directive, as in SETDEV (0) SET "FrameTextClr" TO "_xxx_ " (**_where_**  _xxx_ is the new value).  
  
**Style** |  Determines beveling style (_Fixed_ value, string _Expression_). Click the drop-down arrow for a list of selections: _3D Frame, Recessed Frame, Raised Frame, Text Mode_.  
**Position** |  |  _Column_ |  Starting column for top left corner of the control - numeric expression. Format mask is #0.00. Valid entries are 0 to 620.  
---|---  
_Line_ |  Starting line for top left corner of the control - numeric expression. Format mask is #0.00. Valid entries are 0 to 255.  
  
_(Support for increased Column and Line maximums was added in PxPlus 2021.)_  
  
**Size** |  |  _Width_ |  Width of control in number of columns - numeric expression. Format mask is #0.00. Valid entries are 0 to 620.  
---|---  
_Height_ |  Height of control in number of lines - numeric expression. Format mask is #0.00. Valid entries are 0 to 255.  
  
_(Support for increased Width and Height maximums was added in PxPlus 2021.)_  
  
**General Attributes** |  |  _Initially Hidden_ |  Control is not displayed but is accessible programmatically.  
---|---  
**Font/Color**  
**Font Specification** |  |  _Font  
Size_ |  Click the drop-down arrow for a list of selections.  
---|---  
**Color** |  |  _Foreground  
Background_ |  Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
---|---  
  
If no text color is set for the frame text color, the default color in '4D' display mode will be Blue, or any other color using **SETDEV/'OPTION'** and setting **["FrameTextClr"](../../../mnemonics/option.htm#FrameTextClr)**.

_(The Color Selections Query button and dialog were added in PxPlus 2020.)  
(Support for '4D' frame text color was added in PxPlus 2021.)_  
  
**Attributes** |  Optional attributes.  
**Visual Class** |  Assign a visual class to the control. Click the Visual Class Maintenance button to launch the **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#vcutility)** utility for creating or editing visual classes. To assign visual classes to controls at the **_library_** level, see **[Visual Class Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**.

#### **Note:**  
Visual class names that begin with an "*" _(asterisk)_ are pre-defined visual classes used by PVX Plus and may be subject to change without notice.

_(The Visual Class Maintenance button was added in PxPlus 2019.)_  
**iNomads Class** |  Assign an iNomads class to the control. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**.  
_Security_ |  Security restrictions. See **[Restricting Access](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.md)** for information on **Object Security Definition**.  
_Groups_ |  Assign the control to a group. See **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md).**  
_Notes_ |  Add notes/comments for the control. Maximum 1024 characters. _(The Notes button was added in PxPlus 2023.)_
