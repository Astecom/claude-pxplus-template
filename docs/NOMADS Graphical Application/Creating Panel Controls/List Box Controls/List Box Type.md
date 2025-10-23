# List Box Controls   
  
**List Box Type** |  **__**  
---|---  
  
The style of the List Box is determined by selecting a **_List Box Type_** :

|  **[Standard](List%20Box%20Type.htm#standard)** |  Used to review and access a single column of data.  
---|---|---  
|  **[Formatted](List%20Box%20Type.htm#formatted)** |  Used to define multiple columns, line breaks and other formatting.  
|  **[List View](List%20Box%20Type.htm#listview)** |  Produces vertically wrapping columns (with optional bitmaps) where only the first element of each record is displayed.  
|  **[Report View](List%20Box%20Type.htm#reportview)** |  Displays multiple data elements in a tabular list with the use of headings and other attributes.  
|  **[Tree View](List%20Box%20Type.htm#treeview)** |  Provides a tree-like structure view with optional bitmaps.  
  
Depending on the type selected, the contents of the **List Box Properties** dialogue changes to represent the options available for that particular style of List Box.

A system popup menu consisting of extraction, search and print options can also be added to any Grid or List Box (except Tree Views). See **[List Box and Grid System Popup Menu](../Popup%20Menu/List%20Box%20and%20Grid%20System%20Popup%20Menu.md)**.

##  Standard

For the **List Box Type** , select _Standard_. The _Standard_ List Box allows users to review and access a single column of data.

**_Example:_**

> When creating or editing a _Standard_ List Box control, the **List Box Properties** dialogue (pictured below using the **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** version of the NOMADS designer) is displayed:

> **_Dynamic Control Properties_**

PxPlus 2018 introduces the capability to create **_dynamic control properties_** for List Box controls when combined with **[Data Classes](../../../Data%20Dictionary/Data%20Classes/Overview.md)**. Dynamic data classes are created by selecting the _Dynamic_ check box in **[Data Class Definitions](../../../Data%20Dictionary/Data%20Classes/Listbox.md)** maintenance. At run time, dynamic control properties are evaluated and **_automatically_** populated with values based on what is defined in the data class.

When a data class is entered for the List Box control, information from the data class is loaded into the List Box properties. If the data class is **_dynamic_** , the dynamic control properties are **_automatically_** set to _Dynamic_ initially and assigned a **%NOMADS'class'** variable that corresponds to a data class field (i.e. **%NOMADS'class'length**).

List Box control properties designated as **_dynamic_** can be _manually_ switched to dynamic or non-dynamic. A List Box control can have a combination of dynamic **_and_** non-dynamic control properties **_only_** when a data class is entered.

See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)** for information and examples.

#### **Note:**  
Dynamic control properties are supported in NOMADS **_and_** iNomads environments.

**_List Box Properties_**

This dialogue is divided into the following tabbed panels for viewing and/or changing List Box properties: **[Display](List%20Box%20Type.htm#display)**, **[Font/Color](List%20Box%20Type.htm#font)**, **[Attributes](List%20Box%20Type.htm#attributes)**, **[Values](List%20Box%20Type.htm#values)**, **[Logic](List%20Box%20Type.htm#logic)**, **[User Aid](List%20Box%20Type.htm#useraid)** and **[Query](List%20Box%20Type.htm#query)**.

_Name_ |  Unique name of the List Box control (NOMADS provides a default). Naming conventions for variables apply. Click the Browse Library button to copy parameters from an existing object (via the **[Library Browse](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Library%20Browse.md)** dialogue).

#### **Note:**  
When a new control name is entered, it will be checked against the **[Reserved Words](../../../Reserved%20Words.md)** list to determine if it is restricted for use as a NOMADS control name. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_  
  
---|---  
_Class_ |  Enter a **[Data Class](../../../Data%20Dictionary/Data%20Classes/Overview.md)** to load the information from the data class definition into the control's properties. If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Data Class_ button and enter a data class in the **Data Class Options** dialogue. _(The Data Class Options dialogue was added in PxPlus 2018.)_ To enter a data class, use any of the following methods:

  * Click the Query button (binoculars) to select from a list of predefined data classes (if any) for the current control type.
  * Type the name of an existing data class. Only data classes for the current control type are allowed.
  * Create a data class on the fly. Enter a new _Class_ name and respond _Yes_ to the displayed message, which launches **[Data Class Definitions](../../../Data%20Dictionary/Data%20Classes/Listbox.md)**.

If the data class is changed, a message will display prior to overwriting any information. This works similar to using the **[Reapply Data Class](List%20Box%20Type.htm#reapply)** button. If the data class assigned to the control is deleted in **Data Class Definitions** , the text **** Class not on File **** will display (will be a message box if using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**). _(Dynamic data classes and properties were added in PxPlus 2018.)_  
_(Data Class Maintenance)_ |  Click this button to launch **[Data Class Definitions](../../../Data%20Dictionary/Data%20Classes/Listbox.md)** for creating or editing a data class. If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Data Class_ button, then click the _Data Class Maintenance_ button in the **Data Class Options** dialogue. _(The Data Class Options dialogue was added in PxPlus 2018.)  
(The Data Class Maintenance button was added in PxPlus 2018.)_  
_(Reapply Data Class)_ |  **_(Available when a data Class is entered)_** Click this button to update control properties with current information from the selected data class. A message displays before any control properties are overwritten. If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Data Class_ button and select the _Reapply Class_ check box in the **Data Class Options** dialogue. _(The Data Class Options dialogue was added in PxPlus 2018.)_

#### **Important Note:**  
Care should be taken when using the _Reapply Data Class_ button or changing the data _Class_ entered for the control, as this will overwrite any existing values.  
  
If the _Dynamic (from Data Class)_ check box was manually changed on the **[User Aid](List%20Box%20Type.htm#useraid)** and/or **[Query](List%20Box%20Type.htm#query)** tabs, clicking the _Reapply Data Class_ button will reselect this check box if the data class entered for the control is dynamic or deselect it if not dynamic.

_(The Reapply Data Class button was added in PxPlus 2018.)_  
_Dynamic Class_ |  **_(Display Only)_** Indicates whether the selected data _Class_ is Dynamic. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Data Class_ button to display the _Dynamic Class_ check box in the **Data Class Options** dialogue. _(The Data Class Options dialogue was added in PxPlus 2018.)  
(The Dynamic Class check box was added in PxPlus 2018.)_  
**Preview** |  Displays how the visible properties of the control will appear at run time.  
**Display****_( * indicates_ a _Dynamic property)_**  
**List Box Type** |  Select the style of List Box: |  **[Standard](List%20Box%20Type.htm#standard)** |  **_(Default)_** Used to review and access a single column of data.  
---|---  
**[Formatted](List%20Box%20Type.htm#formatted)** |  Used to define multiple columns, line breaks and other formatting.  
**[List View](List%20Box%20Type.htm#listview)** |  Produces vertically wrapping columns (with optional bitmaps) where only the first element of each record is displayed.  
**[Report View](List%20Box%20Type.htm#reportview)** |  Displays multiple data elements in a tabular list with the use of headings and other attributes.  
**[Tree View](List%20Box%20Type.htm#treeview)** |  Provides a tree-like structure view with optional bitmaps.  
  
If the **List Values** drop box (on **[Display](List%20Box%20Type.htm#display)** tab) is set to _Dynamic_ , _List Box Type_ will be locked.

_(Dynamic data classes and properties were added in PxPlus 2018.)_  
  
***List Values** |  List of values that NOMADS uses to preload the List Box. Can be _Fixed_ value, string _Expression_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. If the **List Values** drop box is set to _Dynamic_ , the following properties will be locked: _List Box Type, Format, Default Setting_ and _Translation_. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
**Position** |  |  _Column_ |  Starting column for the top left corner of the control - numeric expression. Format mask is ##0.00. Valid entries are 0 to 620.  
---|---  
_Line_ |  Starting line for the top left corner of the control - numeric expression. Format mask is ##0.00. Valid entries are 0 to 255.  
  
_(Support for increased Column and Line maximums was added in PxPlus 2021.)_  
  
**Size** |  |  _Width_ |  Width of the control in number of columns - numeric expression. Format mask is ##0.00. Valid entries are 0 to 620.  
---|---  
_Height_ |  Height of the control in number of lines - numeric expression. Format mask is ##0.00. Valid entries are 0 to 255.  
  
#### **Note:**  
If a data class is entered and the _List Box Width/Height_ values in the data class are subsequently changed, the size of the List Box will **_not_** change when the _Reapply Data Class_ button is selected.  
  
_(This functionality was added in PxPlus 2018.)_

_(Support for increased Width and Height maximums was added in PxPlus 2021.)_  
  
**Attributes** |  Optional attributes for _Tab Stop, Variable Input, Initially Disabled_ and _Initially Hidden_. See **[Attributes](List%20Box%20Type.htm#attributes)**.  
***Input Length** |  **_(Applicable when List Box Type is Standard and Variable Input check box is selected)_** Maximum input characters. Can be _Fixed_ , numeric _Expression_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
**Font/Color****_( * indicates_ a _Dynamic property)_**  
**Font Specification** |  |  _Font  
Size_ |  Click the drop-down arrow for a list of selections.  
---|---  
**Color** |  For each of the following **Color** options, click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions. The "Demo" list box to the right provides a preview of your color selections. |  _Foreground  
Background_ |  Click the Query button for color selections.  
---|---  
_Highlight 1_ |  **_(Not Applicable for List View and Tree View)_** Background color - alternating lines. Click the Query button for color selections.  
_Highlight 2_ |  **_(Not Applicable for List View and Tree View)_** Background color - alternating _three_ lines. Click the Query button for color selections.  
_Line Color_ |  **_(Report View and Tree View Only)_** Color of the lines drawn between rows and columns on a report view List Box or between entries on a tree view List Box. Click the Query button for color selections.  
  
_(The Line Color property, the Color Selections Query button and Color Selections dialog were added in PxPlus 2020.)_  
  
**Attributes** |  Optional attributes. See **[Attributes](List%20Box%20Type.htm#attributes)** below.  
***Visual Class** |  Assign a visual class to the control. Can be _Fixed_ , _Expression_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) Click the Visual Class Maintenance button to launch the **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#vcutility)** utility for creating or editing visual classes. To assign visual classes to controls at the **_library_** level, see **[Visual Class Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**. If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**.

#### **Note** :  
Visual class names that begin with an "*" _(asterisk)_ are pre-defined visual classes used by PVX Plus and may be subject to change without notice.

_(Dynamic data classes and properties were added in PxPlus 2018.)  
(The Visual Class Maintenance button was added in PxPlus 2019.)_  
***iNomads Class** |  Assign an iNomads class to the control. Can be _Fixed_ , _Expression_ or _Dynamic_. (_Dynamic_ is available **_only_** when a **[Class](List%20Box%20Type.htm#properties)** is entered.) If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined iNomads classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
**Attributes****_( * indicates_ a _Dynamic property)_**  
**Attributes** |  |  _Tab Stop_ |  Adds the control to the tab order list. Allows use of the **Tab** key for moving to the control.  
---|---  
_Auto Tab Skip_ |  Control is skipped when tabbing forward but is still accessible via**Shift - Tab** or the mouse.  
_Borderless_ |  The control is drawn with no border or frame.  
_Disable On Empty_ |  The system automatically disables the List Box when it contains no entries. When populated, the List Box is re-enabled. Overridden when the **['Enabled](../../../properties/enabled.md)** property is turned off. (Default is **_Off_**.)  
_Initially Disabled_ |  Control region is grayed out and is not accessible to the user for input. The control is accessible programmatically.  
_Initially Hidden_ |  Control is not displayed but is accessible programmatically.  
_Enable Scrolling_ |  Allows the control to scroll in a resizable/scrollable dialogue box. See **[Panel Resizing](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Resizing.md)**.  
_Signal On Exit_ |  A signal is generated when focus leaves the control whether the selection or value has changed or not. NOMADS will execute the On Change logic.  
_Automatic (Signal All Changes)_ |  A signal is returned on any changes in the control.  
_Strip Trailing Spaces_ |  Strips trailing spaces when reading/writing data for control.  
_Ignore Change Flag_ |  Select this check box when you do **_not_** want the NOMADS **[CHANGE_FLG](../../Appendix/NOMADS%20Variables/Overview.htm#reserved)** variable to be updated when the control value is changed.  
  
_(The Ignore Change Flag property was added in PxPlus 2017.)_  
  
**Standard Listbox Attributes** |  |  _Allow Variable Input_ |  Enables the user to select any element from the list or enter any other value. See **[Variable List Box](Variable%20List%20Box.md)**.  
---|---  
_Multiple Selections_ |  Users can select more than one entry from the List Box.  
_No Height Adjustment_ |  The List Box will _not_ be forced to show only complete lines. The last line will be truncated horizontally (i.e. displaying a partial line to ensure that the height of the List Box matches the size defined). See **[Resizing Input Controls](../../Panel%20Designer/Resizing%20and%20Persistence/Resizing%20Input%20Controls.md)**.  
**Load Options** |  |  _Smart Load  
(formerly Auto Load)_ |  Select this button to set up a Smart control that will self-load based on a query definition. See **[Smart Controls](../../Smart%20Controls/Overview.md)**.  
---|---  
_Background Loading_ |  Load logic to execute while there is no user input. Select _Background Loading_ and then click the _Logic_ button to add/edit logic. See **[Background Loading](../../Program%20Interaction/Event-Handler%20Routines/Background%20Loading.md)**.  
_Load on Demand_ |  Logic to execute when a load on demand signal occurs. The signal will occur when the user scrolls the List Box items into view. Select _Load on Demand_ and then click the _Logic_ button to add/edit logic. See **[Load on Demand](../../Program%20Interaction/Event-Handler%20Routines/Load%20On%20Demand.md)**.  
  
#### **Note:**  
Smart controls are **_not_** compatible with _Load on Demand_ or _Background Loading_ logic.

_(Support for enhanced Smart Load capability was added in PxPlus 2018.)_  
  
**Other** |  |  _Alt-Key_ |  Hot key for the control. Click the drop-down arrow for a list of selections.  
---|---  
_*User Tag Field_ |  For controls, data/tag field that can be used to pass information on such things as formatting, error messages or validation rules. Can be _Fixed_ , _Expression_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) Field contents are placed in a variable using the control name with a .TAG$ extension. If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**.  
_Object Persistence_ |  Sets **[Object Persistence](../../Panel%20Designer/Resizing%20and%20Persistence/Object%20Persistence.md)**. Click the drop-down arrow for a list of selections: |  _Default_ |  Set via global variable  
---|---  
_Always_ |  **_On_** , overriding global activation  
_Never_ |  **_Off_** , overriding global activation  
  
_(Dynamic data classes and properties were added in PxPlus 2018.)_  
  
**Values****_( * indicates_ a _Dynamic property)_**  
***Default Setting** |  Initial value to be highlighted when the List Box is drawn (_Fixed_ value or string _Expression_). If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. If the **List Values** drop box (on **[Display](List%20Box%20Type.htm#display)** tab) is set to _Dynamic_ , the **Default Setting** property will be set to _Dynamic_ and locked. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
***Translation** |  Click the _Translate_ check box to set up a table of values representing List Box selections. Definition consists of a _Table Value Length_ (length of each of the items in the table) and the _Translation_ value (_Fixed_ or string _Expression_). If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. If the dynamic data class was defined with **[Load From File](../../../Data%20Dictionary/Data%20Classes/Listbox.htm#display)** functionality, the _Table Value Length_ will be set to 0 and locked. If the **List Values** drop box (on **[Display](List%20Box%20Type.htm#display)** tab) is set to _Dynamic_ , the **Translation** properties and values will be locked. _(Dynamic data classes and properties were added in PxPlus 2018.)  
__(The setting of Table Value Length to 0 when entering a dynamic data class with Load From File functionality was added in PxPlus 2021.)_  
**Logic**  
_Default Program_ |  Displays the name of the **[Default Program](../../Panel%20Designer/Panel%20Header/Overview.htm#display)** used in the Panel Header definition. _(The Default Program was added for display in PxPlus 2019.)_  
**Post Create** |  Logic to be processed after the control is drawn. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**When Receiving Focus** |  Logic to execute when the control receives focus. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**When Entry is Selected from List Box** |  Logic to be executed when focus leaves the control or the state of the control has changed. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**User Aid****_( * indicates_ a _Dynamic property)_**  
_Dynamic (from Data Class)_ |  **_(Available when a data Class is entered)_** If selected, identifies which **Help Reference** properties are dynamic. If a dynamic data class is entered, this check box is automatically selected. If the data class is **_not_** dynamic, this check box can be manually selected.

#### **Note:**  
If the _Dynamic (from Data Class)_ check box was manually changed on the **User Aid** and/or **[Query](List%20Box%20Type.htm#query)** tabs, clicking the _Reapply Data Class_ button will reselect this check box if the data class entered for the control is dynamic or deselect it if not dynamic.

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
***Message Bar** |  Text to be displayed in the panel's status bar when focus is on the control. Can be a _Fixed_ value, string _Expression_ , _Message Library Reference_ or _Dynamic_). (_Dynamic_ is available **_only_** when a data _Class_ is entered.) If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
**Query****_( * indicates_ a _Dynamic property)_**  
_Dynamic (from Data Class)_ |  **_(Available when a data Class is entered)_** If selected, identifies which **Query Type** and its associated properties are dynamic. If a dynamic data class is entered, this check box is automatically selected. If the data class is **_not_** dynamic, this check box can be manually selected.

#### **Note:**  
If the _Dynamic (from Data Class)_ check box was manually changed on the **[User Aid](List%20Box%20Type.htm#useraid)** and/or **Query** tabs, clicking the _Reapply Data Class_ button will reselect this check box if the data class entered for the control is dynamic or deselect it if not dynamic.

_(Dynamic data classes and properties were added in PxPlus 2018.)_  
***Query Type** |  Type of query to associate to the control: _Panel, Query Program, Non-Query Logic_. Valid formats include a NOMADS query object or query list, a custom query panel, or user-supplied query program. Depending on the _Query Type_ selected, different information is entered. For an explanation of each type and the information to enter, see **[Query Type](../../Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#querytype)**. For information on assigning a query to a control, see **[Assigning a Query](../../Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#assigningquery)**. If setting up the List Box as a **_Smart_** control (see **[Smart Load](List%20Box%20Type.htm#attributes)** attribute), you can define a query for the Smart control. See **[Defining Smart Controls](../../Smart%20Controls/Defining%20Smart%20Controls.md)**. If the _Dynamic (from Data Class)_ check box is selected, the _Query Type_ and its associated properties will be dynamic and locked. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
_Security_ |  Security restrictions. See **[Restricting Access](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.md)** for information on **Object Security Definition**.  
_Groups_ |  Assign the control to a group. See **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md)**.  
_Popup Menu_ |  Associate a popup menu that will appear when you right-click the mouse over the selected control. To define a popup menu, see **[Popup Menu](../Popup%20Menu/Overview.md)**. To add a system popup menu to any List Box (**_except_** tree view), see **[List Box and Grid System Popup Menu](../Popup%20Menu/List%20Box%20and%20Grid%20System%20Popup%20Menu.md)**.  
_Notes_ |  Add notes/comments for the control. Maximum 1024 characters. These notes also display in the Wiki Help documentation for the panel. See **[NOMADS Wiki Help](../../System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**. _(The Notes button was added in PxPlus 2023.)_  
  
##  Formatted

For the **List Box Type** , select _Formatted_. The _Formatted_ List Box includes the ability to define multiple columns, line breaks and other formatting.

**_Example:_**

> Colors can also be displayed if color mnemonics are embedded in the List Box data. Most of the properties for a _Formatted_ List Box are identical to those required for defining a _Standard_ List Box, except for the _Allow Variable Input_ attribute.

On the **Attributes** panel, a _Format_ button is also available:

**Attributes _( * indicates_ a _Dynamic property)_**  
---  
**Formatted Listbox Attributes** |  |  _*Format_ |  Button that launches the **Formatted List Box Definition** dialogue to define List Box columns, including options for _Width, Alignment, Special Options_ and _Column Separator_.  
---|---  
  
If the **List Values** drop box (on [**Display**](List%20Box%20Type.htm#display) tab) is set to _Dynamic_ , the _Format_ button will be locked.

_(Dynamic data classes and properties were added in PxPlus 2018.)_  
  
##  Formatted List Box Definition

The **Formatted List Box Definition** dialogue displays the following options and buttons:

_Width_ |  Width of the column, either a _Fixed_ value or an _Expression_. To modify the _Width_ value, click the dotted button to invoke a separate dialogue.  
---|---  
_Alignment_ |  Select one of the text alignment options from the drop-down list: _Left, Right, Center, Numeric, Blanks_ (justify using blanks).  
_Special Options_ |  Click the drop-down arrow for a list of selections: |  _None_ |  No special options  
---|---  
_New Line_ |  Starts a new line in that field  
_Skip Field_ |  Hides the column  
_Column Separator_ |  Click the drop-down arrow to select a Hex or ASCII string value as the default column separator character.  
_Insert Above  
Insert Below_ |  Adds a blank row above or below the currently selected row for creating a new column.  
_Delete Row_ |  Removes the currently selected row (i.e. removes the column from the List Box).  
_Move Up  
Move Down_ |  Changes the order of the existing columns in the List Box.  
  
##  List View

For the **List Box Type** , select _List View_. The _List View_ List Box produces vertically wrapping columns (with optional bitmaps) where only the first element of each record is displayed.

**_Example:_**

> Most of the properties for a _List View_ List Box are identical to those required for defining a _Standard_ List Box, except for the _Allow Variable Input_ and _No Height Adjustment_ attributes.

On the **Attributes** panel, _Partial Match_ and _Full Line Highlight_ attributes, as well as a _Format_ button, are available, as described below:

**Attributes _( * indicates_ a _Dynamic property)_**  
---  
**ListView** **Attributes** |  |  _Partial Match_ |  Partial matches in the List Box data are highlighted. If selected, the text string used in a **[LIST_BOX WRITE](../../../directives/list_box.md)** will be considered a partial match for highlighting List Box data; e.g. if you write "ABC", then the first item that starts with "ABC" is highlighted. (If the _Multiple Selections_ attribute is also set, _all_ items starting with "ABC" would be selected.)  
---|---  
_Multiple Selections_ |  Users can select more than one entry from the List Box.  
_*Format_ |  Button that launches the **[List View Format Definition](List%20Box%20Type.htm#listviewdef)** dialogue used to define various format options (i.e. title, width, alignment, sorting, etc.) for the columns in a _List View_ List Box. If the **List Values** drop box (on **[Display](List%20Box%20Type.htm#display)** tab) is set to _Dynamic_ , the _Format_ button will be locked. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
**Other** |  |  _Full Line Highlight_ |  Full line highlight style allows the user to click any column to highlight the row; otherwise, the user can only click in the first column to highlight the row. Select from the drop-down list to set: _Default, On, Off_. _Default_ indicates use of the PxPlus setting of the **['+V' or '-V'](../../../mnemonics/+v.md)** mnemonic.  
---|---  
  
##  Report View

For the **List Box Type** , select _Report View_. The _Report View_ List Box displays multiple data elements in a tabular list (as with a _Formatted_ List Box) but with the use of headings and other attributes.

**_Example:_**

> #### **Note:**  
To create a more elaborate version of this control (spreadsheet-style input format, etc.), see **[Grid Control](../Grid%20Control/Overview.md)**.

When defining a _Report View_ List Box, the following attributes are available:

**Attributes****_( * indicates_ a _Dynamic property)_**  
---  
**ReportView Attributes** |  |  _Partial Match_ |  Partial matches in the List Box data are highlighted. If selected, the text string used in a **LIST_BOX WRITE** will be considered a partial match for highlighting List Box data; e.g. if you write "ABC", then the first item that starts with "ABC" is highlighted. (If the _Multiple Selections_ attribute is also set, _all_ items starting with "ABC" would be selected.)  
---|---  
_Multiple Selections_ |  Users can select more than one entry from the List Box.  
_Disable Sorting_ |  Clicking on the column heading does not cause List Box elements to be sorted. The column headings will not have the 3D button look but will appear flat. Column resizing is still allowed.  
_Suppress Buttons_ |  If this attribute is selected, the heading line is suppressed. The area that is occupied normally by the header is used for list output.  
_Column Size Lock_ |  When selected, the _Report View_ column headers cannot be resized by dragging. Default is **_Off_**.  
_Auto Column Size_ |  When selected, columns will automatically be proportionally resized when the List Box is resized. Default is **_Off_**.  
_Header Lock_ |  Locks the column headers so that the user is unable to click on them or drag them. Default is **_Off_**.  
_Lines Per Row_ |  Number of lines high per row. Valid values are >= 1. Allows for word wrap. Default is **_1.0_**.  
_Center Text Vertically_ |  Select this check box to center text vertically in the List Box row only when **_Lines Per Row_ is > 1**. Text that exceeds the column width is truncated and an _ellipsis_ () is displayed. When not selected _(Default)_ , text is aligned to the top of the List Box row, and text that exceeds the column width is word wrapped. **_Example:_**  
_Lock Top Rows_ |  Number of rows at the top of the List Box to exclude from sorting. Enter a value or use the spinner controls to increase/decrease the value.  
_Lock Bottom Rows_ |  Number of rows at the bottom of the List Box to exclude from sorting. Enter a value or use the spinner controls to increase/decrease the value.  
_Header Height_ |  Controls the height of the header in **_report view_** lists in pixels. Setting this property to -1 restores the height to its default size. Setting this property to 0 results in no header. Default is **_-1_**.  
_Grid Lines_ |  Controls the display of grid lines between the rows and columns. Options are _None**(Default)** , Full grid, Vertical, Horizontal_.  
_Sort Options_ |  Controls how column data is sorted. Click the drop-down arrow for a list of selections: |  _Default_ |  _Null values at end_  
---|---  
_None (Raw binary sort)_ |  _Ignore case/Nulls last_  
_Ignore case_ |  _Ignore accents/Nulls last_  
_Ignore accents_ |  _Ignore case & accents/Nulls last_  
_Ignore case and accents_ |   
  
The _Default_ setting will use the system _StdSortOrder_ setting. See the **['OPTION'](../../../mnemonics/option.md)** mnemonic and the ['**SortOrder$**](../../../properties/sortorder.md) property.  
  
_*Format_ |  Button that launches the **[Report View Format Definition](List%20Box%20Type.htm#listviewdef)** dialogue used to define various format options (i.e. title, width, alignment, sorting, etc.) for the columns in a _Report View_ List Box. If the **List Values** drop box (on **[Display](List%20Box%20Type.htm#display)** tab) is set to _Dynamic_ , the _Format_ button will be locked.  
  
_(Dynamic data classes and properties were added in PxPlus 2018.)  
(The Center Text Vertically and Lock Top Rows options were added in PxPlus 2019.)  
(The Header Height option was added in PxPlus 2020.)_  
  
**Other** |  |  _Full Line Highlight_ |  Full line highlight style allows the user to click any column to highlight the row; otherwise, the user can only click in the first column to highlight the row. Select from the drop-down list to set: _Default, On, Off_. _Default_ indicates use of the PxPlus setting of the **['+V' or '-V'](../../../mnemonics/+v.md)** mnemonic.  
---|---  
  
##  List/Report View Format Definition

The **List/Report View Format Definition** dialogue is launched by selecting the _Format_ button on the **Attributes** panel when defining _List View_ and _Report View_ List Box types. This dialogue consists of the following:

_Title_ |  Title appearing above each column. Click the dotted button to invoke a separate dialogue with the following drop-down selections: |  _Fixed_ |  For inputting a _fixed_ value  
---|---  
_Expression_ |  For inputting an _expression_  
_Message Lib Ref_ |  For referencing a _user-defined message_  
_Width_ |  Width of the column, either a _Fixed_ value or an _Expression_. To modify the _Width_ value, click the dotted button to invoke a separate dialogue.  
_Alignment_ |  Select a text alignment option from the drop-down list: _Left, Right, Center_. No numeric alignment is available, since this is a standard Windows control.  
_Bitmap_ |  Indicates that a bitmap is to be displayed to the left of the data.  
_Hotlink_ |  Displays the column as a hotlink. Columns with a hotlink are displayed in the color defined by the **'OPTION'("StdLvueHotlinkClr",color$)** setting and are underlined while hovering over the column. See the **['OPTION'](../../../mnemonics/option.htm#hotlinkclr)** mnemonic and the **[HotLinkColor$](../../../properties/hotlinkcolor_.md)** property. _(The Hotlink property was added in PxPlus 2018.)_  
_UpperCase Sort_ |  Sorts the column based on the PxPlus lower/uppercase character translation tables. _(The UpperCase Sort property was added in PxPlus 2018.)_  
_Column Sort_ |  Click the drop-down arrow for a list of selections for numeric sorting: _None, Date, Format numerics, Unformat numerics_. If _Column Sort_ is set to Date, click the _Date Formats_ drop box to select the date format **_where_** D = day, M = month, Y = year; e.g. MD, DMY, MDY.  
_Date Format_ |  Click the drop-down list to select a date format, where D = day, M = month, Y = year.  
_Column Separator_ |  Click the drop-down list to select a Hex or ASCII string value as the default column separator character.  
_Insert Above  
Insert Below_ |  Adds a blank row above or below the currently selected row for creating a new column.  
_Delete_ |  Removes the currently selected row (i.e. removes the column from the List Box).  
_Up  
Down_ |  Changes the order of the existing columns in the List Box.  
  
##  Tree View

For the **List Box Type** , select _Tree View_. The _Tree View_ provides a tree-like structure view with optional bitmaps. See **State Indicators**. This format is the same as used by Windows Explorer.

**_Example:_**

> Each entry in a _Tree View_ consists of a series of strings or values separated by a delimiter, similar to a directory structure. Duplicates at each level are grouped together:

**_Given_** |  **_Yields_**  
---|---  
Accounting/Maintenance/Customers  
Accounting/Maintenance/Salesman  
Accounting/Orders/Entry  
Accounting/Orders/Printing  
Production/Maintenance/Schedule  
Production/Maintenance/Equipment |   
  
When defining a _Tree View_ List Box type, the following attributes are available:

**Attributes****_( * indicates_ a _Dynamic property)_**  
---  
**TreeView Attributes** |  |  _Data Has Bitmaps_ |  As each entry in the tree view is added/written, then the beginning of the data is tested for the existence of a bitmap pathname enclosed within curly brackets. If a bitmap is present, then it overrides the standard bitmaps.  
---|---  
_Direct Edit_ |  Enables automatic editing so that the user can double click on an item to change its value. See **Direct Editing**.  
_Disable Sorting_ |  The contents of the tree view will not be sorted automatically.  
_Suppress Buttons_ |  By default, a tree view shows small buttons to the left of the entries with subordinate levels: either a **'+'** to indicate the existence of subordinates that have not been shown, or a **'-'** to indicate that the subordinates are being shown. Clicking the button toggles the display. If this attribute is selected, these buttons are suppressed.  
_Show Lines_ |  Sets the tree view to draw connecting lines between the various entries.  
_*Format_ |  Button that launches the **Tree View Format Definition** dialogue, which is used to set the _Column Separator_ (delimiter character) and define default images to be displayed in the tree. You can define up to six default bitmaps or icons in tree views. If the **List Values** drop box (on **[Display](List%20Box%20Type.htm#display)** tab) is set to _Dynamic_ , the _Format_ button will be locked.  
_*States_ |  Button that launches the **State Indicators** dialogue, which is used to set up images that will appear in front of a List Box entry that can be used to indicate whether the item has been selected or not. See **[Defining State Indicators](List%20Box%20Type.htm#definingstateind)**. If the **List Values** drop box (on **[Display](List%20Box%20Type.htm#display)** tab) is set to _Dynamic_ , the _States_ button will be locked.  
  
_(Dynamic data classes and properties were added in PxPlus 2018.)  
(Tree View States were added to Dynamic Data Classes in PxPlus 2019.)_  
  
##  Tree View Format Definition

The **Tree View Format Definition** dialogue is used to describe the default bitmaps and the column separator. PxPlus automatically selects the bitmap based on the existence of subordinates and current focus. You can click the bitmap query button to the right of each field to launch the **Bitmaps** dialogue and browse for existing internal and external bitmaps.

##  State Indicators

State indicators are basically images that will appear in front of a _Tree View_ entry that can be used to indicate whether the item has been selected or not. These images are set up in NOMADS via the **State Indicators** dialogue. See **Defining State Indicators**.

A maximum of 15 images can be assigned to the List Box; NOMADS stores these images in the PxPlus control object property **['StateBitmaps$](../../../properties/statebitmaps_.md)**. All images must be of the same size/format and may specify transparency options. The image can be external or internal. Internal bitmaps contain an **!**  _(exclamation point)_ preceding the bitmap name.

## Toggling Between States

To toggle between different images or states, the **['ItemState](../../../properties/itemstate.md)** property needs to be set in your application. The numeric value in **'ItemState** determines what image will appear next to the row text. This property is 1-based, a value of 0 indicates no state indicator.

**_Example:_**

If a _Tree View_ control is defined with three images, the first image will appear if the item state is one, the second image will appear if the item state is two and the third image will appear if the item state is three.

## Auto Toggling of States

**['AutoState](../../../properties/autostate.md)** is a numeric property used to control auto toggling of states. This can be set up in NOMADS via the **State Indicators** dialogue. See **Defining State Indicators**. If this is set to a non-zero value, state indicators will automatically be toggled without generating a CTL event with EOM = "S". This code is returned in the NOMADS variable _EOM$ in the On Change logic.

The number of states that the system will toggle through will be determined by the value set in this property, or if the property is set to 1, the number of bitmaps assigned to the _Tree View_. In addition, when the user toggles a state indicator while holding the Shift key down, all entries between the current entry and the last entry will be toggled to the new state of the current entry -- in effect allowing for group select/deselect.

## Cascading States

**['CascadeState](../../../properties/cascadestate.md)** is a numeric property used to control cascading of states. This property allows states to be cascaded from parent to children and vice-versa. This can be set up in NOMADS via the **State Indicators** dialogue. See **Defining State Indicators**.

If **'CascadeState** is set to non-zero, the system will automatically cascade parent states to their children and correspondingly make parent states representative of all of their children. Setting a parent's state, either under program control or using the **'AutoState** property in the _Tree View_ definition, will result in all subordinate children to be set to the same state. When a child's state is set, its parent state will be set according to the state of all of the child's siblings - that is, if all children are in a consistent state, the parent will be set to the same state. If a parent has children of various states (some _on_ , some _off_), the parent's state will be set to the value set in the **'CascadeState** property.

**_Example:_**

You could have three state indicators - **_Off_** (state 1), **_On_** (state 2) and **_Partial_** (state 3). **'AutoState** needs to be set to 2 and **'CascadeState** to 3 to have children that automatically toggle off/on and parents that will be **_On_** (if all children are on), **_Off_** (if all children are off), and **_Partial_** (state 3 - children that are not in a consistent state).

When cascading, only items with states will be affected. In addition, items without states will not affect their parent's states nor will changing the parent of an item without a state affect the children of that item.

##  Defining State Indicators

The following **_steps_** outline how to set up state indicators for a **[Tree View](List%20Box%20Type.htm#treeview)** control:

**Step** |  **Description**  
---|---  
**Step 1: Open State Indicators Dialogue** |  With a _Tree View_ control selected in your panel, access the **List Box Properties** dialogue. Select the **Attributes** tab and then click the _States_ button to launch the **State Indicators** dialogue.  
**Step 2: Assign State Images** |  In the **State Indicators** dialogue, enter the name of a bitmap in the _State Images_ box. You can also click the bitmap library button to display the **Bitmaps** dialogue and browse for existing internal and external bitmaps. For internal bitmaps, an !  _(exclamation point)_ ** _must_** prefix the bitmap name (**!** Stop). A maximum of 15 images can be assigned in the _State Images_ box. **_To change the order of the images_** , drag and drop a numbered cell in the leftmost column to its new destination.  
**Step 3: Set 'AutoState and 'CascadeState** |  Set the values for the **['AutoState](../../../properties/autostate.md)** and **['CascadeState](../../../properties/cascadestate.md)** properties by selecting a value from the drop-down list.

#### **Note:**  
These values cannot be greater than the assigned images. For example, if three images are assigned, then the **'AutoState** values can be 0, 1, 2 or 3.  
  
## Tree View Expand Signals

The **['NotifyExpand](../../../properties/notifyexpand.md)** property can be used (set by your application) to detect _Tree View_ expand/collapse requests.

If this property is set to non-zero, a standard CTL event with an EOM code of **'+'**  _(expand)_ or **'-'**  _(collapse)_ will be generated whenever a tree view node is expanded or collapsed. This code is returned in the NOMADS variable **[_EOM$](../../Appendix/NOMADS%20Variables/Overview.htm#reserved)** in the On Change logic. The application can also read the **['Expanded](../../../properties/expanded.md)** property to determine the new state of the node. If this property is set to the default 0  _(zero)_ , no notification of the tree view expanding or collapsing is sent to the application.

**'Expanded** values include:

**1** |  |  Expand level  
---|---|---  
**0** |  |  Collapse level  
**+** |  |  Expand level and all subordinates  
**-2** |  |  Collapse level and all subordinates  
  
Notifications are only sent when the expand/collapse is done by the user, not by the application accessing the **'Expanded** property.

##  Direct Editing

**['Edit](../../../properties/edit.md)** is a numeric property to allow automatic editing of _Tree View_ items. This property can contain three possible values:

**0** |  |  Item cannot be edited **_(Default)_**  
---|---|---  
**1** |  |  Item can be edited  
**-1** |  |  Force item into edit mode (Must be set directly in application)  
  
For the _Tree View_ control, select the _Direct Edit_ check box on the **Attributes** panel to turn direct editing **_On_** or **_Off_** (0/1).

If the _Direct Edit_ check box is selected, then a double click on an item will put the item into edit mode. When the value changes, a CTL event will be generated with an EOM code of "C", indicating that the item has changed. (No event occurs should the user cancel out of the edit mode.) This code is returned in the NOMADS variable _EOM$ in the On Change logic.

## See Also

**[LIST_BOX Properties](../../../control_object_properties/listbox_properties.md)**  
**[LIST_BOX Directive](../../../directives/list_box.htm#Mark3)**
