# Grid Control 

**Grid Properties** |  **__**  
---|---  
  
When creating or editing a _Grid_ control, the **Grid Properties** dialogue (pictured below using the **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** version of the NOMADS designer) is displayed:

> This dialogue is divided into the following tabbed panels for viewing and/or changing Grid properties: **[Display](Grid%20Properties.htm#display)**, **[Font/Color](Grid%20Properties.htm#font)**, **[Attributes](Grid%20Properties.htm#attributes)**, **[Logic](Grid%20Properties.htm#logic)**, **[User Aids](Grid%20Properties.htm#useraids)**, **[Presets](Grid%20Properties.htm#presets)**, **[Cell Logic](Grid%20Properties.htm#celllogic)** and **[Query](Grid%20Properties.htm#query)**.

_Name_ |  Unique name of the Grid control (NOMADS provides a default). Naming conventions for variables apply. Click the Browse Library button to copy parameters from an existing object (via the **[Library Browse](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Library%20Browse.md)** dialogue).

#### **Note:**  
When a new control name is entered, it will be checked against the **[Reserved Words](../../../Reserved%20Words.md)** list to determine if it is restricted for use as a NOMADS control name. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_  
  
---|---  
_Class_ |  Used with NOMADS **[Object-Oriented Programming](../../Program%20Interaction/Object-Oriented%20Programming/Overview.md)**. Click the Query button (binoculars) to select a predefined class.  
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
  
**Attributes** |  Optional attributes for _Tab Stop, Initially Hidden_ and _Initially Disabled_. See **[Attributes](Grid%20Properties.htm#attributes)**.  
**Font/Color**  
**Font Specification** |  |  _Font  
Size_ |  Click the drop-down arrow for a list of selections.  
---|---  
**Color** |  |  _Foreground  
Background_ |  Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
---|---  
_Fill Color_ |  Defines the color to be used to fill in the empty regions of a Grid (blank space to the right and below the Grid). Click the Query button to access color selections.  
_Line Color_ |  Color of the lines drawn between rows and columns of a Grid. Click the Query button to access color selections.  
  
_(The Line Color property, the Color Selections Query button and Color Selections dialog were added in PxPlus 2020.)_  
  
**Attributes** |  Optional attributes.  
**Visual Class** |  Assign a visual class to the control. Click the Visual Class Maintenance button to launch the **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#vcutility)** utility for creating or editing visual classes. To assign visual classes to controls at the **_library_** level, see **[Visual Class Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**.

#### **Note:**  
Visual class names that begin with an "*" _(asterisk)_ are pre-defined visual classes used by PVX Plus and may be subject to change without notice.

_(The Visual Class Maintenance button was added in PxPlus 2019.)_  
**iNomads Class** |  Assign an iNomads class to the control. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**.  
**Attributes**  
**Attributes** |  |  _Tab Stop_ |  Adds the control to the tab order list. Allows use of the **Tab** key for moving to the control.  
---|---  
_Auto Tab Skip_ |  Control is skipped when tabbing forward but is still accessible via **Shift - Tab** or the mouse.  
_Initially Disabled_ |  Control region is grayed out and is not accessible to the user for input. The control is accessible programmatically.  
_Initially Hidden_ |  Control is not displayed but is accessible programmatically.  
_Borderless_ |  The control is drawn with no border or frame.  
_Strip Trailing Spaces_ |  Strip trailing spaces when reading/writing data.  
_Signal On Exit_ |  A signal is generated when focus leaves the control whether the selection or value has changed or not. NOMADS will execute the On Change logic.  
_Enable Scrolling_ |  Allows control to scroll in a resizable/scrollable dialogue box. See **[Panel Resizing](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Resizing.md)**.  
_Grid Lines_ |  Excel type grid: **_Off_** = No grid lines, **_On_** = Lines.  
_Resizable_ |  The user is able to resize grid columns or rows.  
_Automatic (Signal All Changes)_ |  A signal is returned on any changes in the control.  
_Row Refresh_ |  NOMADS will read and update the contents of a row using column names (via **['RowData$](../../../properties/rowdata_.md)** and **['LoadIOList$](../../../properties/loadiolist_.md)** properties).

#### **Note:  
** Turning on this property will disable the _No Cell Refresh_ property.  
  
_No Cell Refresh_ |  NOMADS will not update a cell using the value in the control name; i.e. it will not issue a **GRID WRITE**.  
_Ignore Change Flag_ |  Select this check box when you do **_not_** want the NOMADS **[CHANGE_FLG](../../Appendix/NOMADS%20Variables/Overview.htm#reserved)** variable to be updated when the control value is changed.  
_Format_ |  Button that launches the **Grid Format Definition** dialogue for defining Grid columns, including title, width, alignment, cell type, column name and column separator. See **[Formatting a Grid](Formatting%20a%20Grid.md)**.  
  
_(The Ignore Change Flag property was added in PxPlus 2017.)_  
  
**Load Options** |  |  _Smart Load  
(formerly Auto Load)_ |  Select this button to set up a Smart control that will self-load based on a query definition. See **[Smart Controls](../../Smart%20Controls/Overview.md)**.  
---|---  
_Background Loading_ |  Load logic to execute while there is no user input. Select _Background Loading_ and then click the _Logic_ button to add/edit logic. See **[Background Loading](../../Program%20Interaction/Event-Handler%20Routines/Background%20Loading.md)**.  
  
#### **Note:**  
Smart controls are **_not_** compatible with _Background Loading_ logic.

_(Support for enhanced Smart Load capability was added in PxPlus 2018.)_  
  
**Other** |  |  _Alt-Key_ |  Hot key for the control. Click the drop-down arrow for a list of selections.  
---|---  
_User-Defined Tag Field_ |  For controls, data/tag field which can be used to pass information on such things as formatting, error messages or validation rules. Field contents are placed in a variable using the control name with a .TAG$ extension.  
_Object Persistence_ |  Sets **[Object Persistence](../../Panel%20Designer/Resizing%20and%20Persistence/Object%20Persistence.md)**. Object size, location and format information (if applicable) is saved on termination of a panel and restored the next time the control is drawn. Click the drop-down arrow for a list of selections: |  _Default_ |  Set via global variable  
---|---  
_Always_ |  **_On_** , overriding global activation  
_Never_ |  **_Off_** , overriding global activation  
**Logic**  
_Default Program_ |  Displays the name of the **[Default Program](../../Panel%20Designer/Panel%20Header/Overview.htm#display)** used in the Panel Header definition. _(The Default Program was added for display in PxPlus 2019.)_  
**Post Create** |  Logic to be processed after the control is drawn. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**When Receiving Focus** |  Logic to execute when the control receives focus. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**On Change** |  Logic to be executed when focus leaves the control or the state of the control has changed. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**User Aids**  
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
**Presets**  
|  Set up attributes that will be assigned to columns, rows or individual cells. See **[Presets Definition](Presets%20Definition.md)**. For a list of available properties that can be applied to the entire grid, a cell, column or row, see **[Grid Properties](../../../control_object_properties/grid_properties.md)**. _(New Grid preset functionality and usability enhancements were added in PxPlus 2019.)_  
**Cell Logic**  
|  Assign logic that is specific to a particular cell, column, or row. Logic events - On Focus, On Change, Formatting and Validation. See **[Independent Cell or Row Logic](Independent%20Cell%20or%20Row%20Logic.md)**.  
**Query**  
**Query Type** |  Type of query to associate to the control: _Panel, Query Program, Non-Query Logic_. Valid formats include a NOMADS query object or query list, a custom query panel, or user-supplied query program. Depending on the _Query Type_ selected, different information is entered. For an explanation of each type and the information to enter, see **[Query Type](../../Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#querytype)** If setting up the Grid as a **_Smart_** control (see **[Smart Load](Grid%20Properties.htm#attributes)** attribute above), you can define a query for the Smart control. See **[Defining Smart Controls](../../Smart%20Controls/Defining%20Smart%20Controls.md)**.  
_Security_ |  Assign security classifications and access levels. See **[Restricting Access](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.md)** for information on **Object Security Definition**.  
_Groups_ |  Assign the control to a group. See **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md)**.  
_Popup Menu_ |  Associate a popup menu that will appear when you right-click the mouse over the selected control. To define a popup menu, see **[Popup Menu](../Popup%20Menu/Overview.md)**. To add a system popup menu to any Grid, see **[List Box and Grid System Popup Menu](../Popup%20Menu/List%20Box%20and%20Grid%20System%20Popup%20Menu.md)**.  
_Notes_ |  Add notes/comments for the control. Maximum 1024 characters. These notes also display in the Wiki Help documentation for the panel. See **[NOMADS Wiki Help](../../System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**. _(The Notes button was added in PxPlus 2023.)_  
  
## See Also

**[GRID Properties](../../../control_object_properties/grid_properties.md)**  
**[GRID Directive](../../../directives/grid.htm#Mark3)**
