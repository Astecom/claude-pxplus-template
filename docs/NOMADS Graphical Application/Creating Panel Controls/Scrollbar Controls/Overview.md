# Creating Panel Controls

**Scrollbar Controls** |  **__**  
---|---  
  
Scrollbars are slider controls that can be used to create a spinner control, progress bar or volume slide for a panel object.

## Creating a Scrollbar

To draw a new horizontal or vertical scrollbar on your panel, select the Vertical Scrollbar or Horizontal Scrollbar control tool from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**. Hold down the left mouse button and drag the mouse to create a rectangle to the desired size. Release the mouse button to create the new object.

For making other adjustments, see **[Modifying Objects](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.md)**.

To define the specific attributes for the new control, see **[Scrollbar Properties](Overview.htm#scrollbar_properties)**.

##  Scrollbar Properties

When creating or editing a _Vertical_ or _Horizontal_  _Scrollbar_ control, the **Vertical** (or **Horizontal**) **Scrollbar Properties** dialogue (pictured below using the **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** version of the NOMADS designer) is displayed:

|  |   
---|---|---  
  
This dialogue is divided into the following tabbed panels for viewing and/or changing scrollbar properties: **[Display](Overview.htm#display)**, **[Logic](Overview.htm#logic)** and **[User Aid](Overview.htm#useraid)**.

_Name_ |  Unique name of the scrollbar control (NOMADS provides a default). Naming conventions for variables apply. Click the Browse Library button to copy parameters from an existing object (via the **[Library Browse](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Library%20Browse.md)** dialogue).

#### **Note:**  
When a new control name is entered, it will be checked against the **[Reserved Words](../../../Reserved%20Words.md)** list to determine if it is restricted for use as a NOMADS control name. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_  
  
---|---  
**Preview** |  Displays how the visible properties of the control will appear at run time.  
**Display**  
**Position** |  |  _Column_ |  Starting column for the top left corner of the control - numeric expression. Format mask is ##0.00. Valid entries are 0 to 620.  
---|---  
_Line_ |  Starting line for the top left corner of the control - numeric expression. Format mask is ##0.00. Valid entries are 0 to 255.  
  
_(Support for increased Column and Line maximums was added in PxPlus 2021.)_  
  
**Size** |  |  _Width_ |  Width of the control in number of columns - numeric expression. Format mask is ##0.00. Valid entries are 0 to 620.  
---|---  
_Height_ |  Height of the control in number of lines - numeric expression. Format mask is ##0.00. Valid entries are 0 to 255.  
  
_(Support for increased Width and Height maximums was added in PxPlus 2021.)_  
  
**General Attributes** |  |  _Tab Stop_ |  Adds the control to the tab order list. Allows use of the **Tab** key for moving to the control.  
---|---  
_Initially Disabled_ |  Control region is grayed out and is not accessible to the user for input. The control is accessible programmatically.  
_Initially Hidden_ |  Control is not displayed but is accessible programmatically.  
_Enable Scrolling_ |  Allows the control to scroll in a resizable/scrollable dialogue box. See **[Panel Resizing](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Resizing.md)**.  
**User-Defined Tag Field** |  For controls, data/tag field that can be used to pass information on such things as formatting, error messages or validation rules. Field contents are placed in a variable using the control name with a .TAG$ extension.  
**iNomads Class** |  Assign an iNomads class to the control. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined iNomads classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**. _(The iNomads Class property was added to Scrollbars in PxPlus 2019.)_  
**Logic**  
_Default Program_ |  Displays the name of the **[Default Program](../../Panel%20Designer/Panel%20Header/Overview.htm#display)** used in the Panel Header definition. _(The Default Program was added for display in PxPlus 2019.)_  
**Post Create** |  Logic to be processed after the control is drawn. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**When Receiving Focus** |  Logic to execute when the control receives focus. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**When Scrollbar Repositioned** |  Logic to be executed when focus leaves the control or the state of the control has changed. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**User Aid**  
**Help Reference** |  Help text to be invoked at run time by pressing Shift - F1 while focus is on a control. |  _Type_ |  Select from _External_ or _Internal_ help types: |  _External_ |  **_(Default)_** Standard Windows help system consisting of a help _File Name_ (._html_ , ._hlp_ , ._doc_ , etc.) and an optional _Keyword_ or _Reference_ number (_Fixed_ value or string _Expression_).  
---|---  
_Internal_ |  Application supplied message text (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
_File Name_ |  Name of the help file.  
_Keyword_ |  Indicates that the text in the adjacent field is the index entry for the topic in the indicated help file.  
_Reference_ |  Indicates that the adjacent field contains the reference number for a specific topic in the context sensitive help.  
_Popup_ |  Select this check box to display the help topic as a popup rather than as an independent window.  
_Test_ |  Tests the current help settings.  
**Floating Tip** |  Mouse pointer message for the control (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
**Message Bar** |  Text to be displayed in the panel's status bar when focus is on the control (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
_Security_ |  Security restrictions. See **[Restricting Access](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.md)** for information on **Object Security Definition**.  
_Groups_ |  Assign the control to a group. See **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md)**.  
_Notes_ |  Add notes/comments for the control. Maximum 1024 characters. _(The Notes button was added in PxPlus 2023.)_  
  
## See Also

**[H_SCROLLBAR Properties](../../../control_object_properties/hscrollbar_properties.md)  
[H_SCROLLBAR Directive](../../../directives/h_scrollbar.htm#Mark3)**  
**[V_SCROLLBAR Properties](../../../control_object_properties/vscrollbar_properties.md)**  
**[V_SCROLLBAR Directive](../../../directives/v_scrollbar.htm#Mark3)**
