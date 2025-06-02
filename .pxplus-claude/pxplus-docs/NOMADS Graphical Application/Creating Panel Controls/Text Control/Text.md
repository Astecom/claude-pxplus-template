# Creating Panel Controls  
  
**Fonted/Fixed Text Control** |  **__**  
---|---  
  
You may need to add labels or titles to describe how controls are to be used in your panel. This object type is for display purposes only and does not respond to events.

Two text creation tools are available in NOMADS:

**_Fonted Text_** |  Provides several style options for displaying panel labels in a graphical user interface application, including bold, italics, the "&" accelerator, and color settings.  
---|---  
**_Fixed Text_** |  **_(Not Recommended for Graphical User Interface Development)_** Limited to the default system font only. For information on text creation in a graphical application, see **'[TEXT](../../../mnemonics/text.md)'** mnemonic.  
  
##  Adding Text

To enter/edit Fonted Text on a panel, select the Fonted Text control tool from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**, then hold down the left mouse button and drag the mouse to create a rectangle to the desired size. Release the mouse button to create a new text box.

For other adjustments, see **[Modifying Objects](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.md)**.

To define text attributes, see **[Text Properties](Text.htm#textproperties)**.

To show and hide a Fonted Text control, first assign the control to a group by using the **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md)** utility. Then, show and hide the group either by using the **[Dependency Definition](../../Panel%20Designer/Options%20and%20Utilities/Dependency%20Definitions.md)** utility or by using the following CALL syntax:

> call "*wingrp;SHOW",_GroupName_._grp_ _$_  
>  call "*wingrp;HIDE",_GroupName.grp_ _$_

For more information on ***wingrp** , see **[Manipulating and Controlling Groups](../../Program%20Interaction/Event-Handler%20Routines/Manipulating%20and%20Controlling%20Groups.md)**.

##  Text Properties

When creating or editing a _Fonted Text_ control, the **Fonted Text Properties** dialogue (pictured below using the **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** version of the NOMADS Panel Designer) is displayed.

> This dialogue is divided into the following tabbed panels for viewing and/or changing text properties: **[Display](Text.htm#display)** and **[Font/Color](Text.htm#font)**. Different property descriptions for _Fonted_ and _Fixed_ text are specified where applicable.

_Name_ |  Unique name of the text object (NOMADS provides a default). Naming conventions for variables apply. Click the Browse Library button to copy parameters from an existing object (via the **[Library Browse](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Library%20Browse.md)** dialogue).

#### **Note:**  
When a new control name is entered, it will be checked against the **[Reserved Words](../../../Reserved%20Words.md)** list to determine if it is restricted for use as a NOMADS control name. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_  
  
---|---  
**Preview** |  Displays how the visible properties of the control will appear at run time.  
**Display**  
**Text** |  Set the text. Click the drop-down arrow for a list of selections: _Fixed, Expression_ , _Message Library Reference._  
**Position** |  |  _Column_ |  Starting column for top left corner of the control - numeric expression. Format mask is #0.00. Valid entries are 0 to 620.  
---|---  
_Line_ |  Starting line for top left corner of the control - numeric expression. Format mask is #0.00. Valid entries are 0 to 255.  
  
_(Support for increased Column and Line maximums was added in PxPlus 2021.)_  
  
**Size** |  |  _Width_ |  Width of the control in number of columns - numeric expression. Format mask is #0.00. Valid entries are 0 to 620.  
---|---  
_Height_ |  Height of the control in number of lines - numeric expression. Format mask is #0.00. Valid entries are 0 to 255.  
  
_(Support for increased Width and Height maximums was added in PxPlus 2021.)_  
  
**General Attributes** |  |  _Initially Hidden_ |  **_(Fonted Text Only)_** Control is not displayed but is accessible programmatically.  
---|---  
**Font/Color**  
**Font Specification** |  |  _Font  
Size_ |  **_(Fonted Text Only)_** Click the drop-down arrow for a list of selections.  
---|---  
**Alignment** |  |  _Align_ |  **_(Fonted Text Only)_** Click the drop-down arrow for a list of selections: _Left Justify, Center, Right Justify, Left Top, Left Middle, Left Bottom, Center Top, Center Middle, Center Bottom, Right Top, Right Middle, Right Bottom_.  
---|---  
_Word Wrap_ |  **_(Fonted Text Only)_** Wraps the text.  
  
_(Align selections for Left Top, Left Middle, Left Bottom, Center Top, Center Middle, Center Bottom, Right Top, Right Middle and Right Bottom were added in PxPlus 2017.)_  
  
**Color** |  |  _Foreground  
Background_ |  Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
---|---  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
  
**Mnemonics** |  **_(Fixed Text Only)_** Character-based attributes.  
**Attributes** |  **_(Fonted Text Only)_** Optional attributes.  
**Visual Class** |  **_(Fonted Text Only)_** Assign a visual class to the control. Click the Visual Class Maintenance button to launch the **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#vcutility)** utility for creating or editing visual classes. To assign visual classes to controls at the **_library_** level, see **[Visual Class Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**.

#### **Note:**  
Visual class names that begin with an "*" _(asterisk)_ are pre-defined visual classes used by PVX Plus and may be subject to change without notice.

_(The Visual Class Maintenance button was added in PxPlus 2019.)_  
**iNomads Class** |  **_(Fonted and Fixed Text)_** Assign an iNomads class to the control. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**. _(The iNomads Class property was added to Fixed Text in PxPlus 2019.)_  
_Security_ |  Security restrictions. See **[Restricting Access](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.md)** for information on **Object Security Definition**.  
_Groups_ |  **_(Fonted Text Only)_** Assign the control to a group. See **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md)**.  
_Notes_ |  Add notes/comments for the control. Maximum 1024 characters. _(The Notes button was added in PxPlus 2023.)_
