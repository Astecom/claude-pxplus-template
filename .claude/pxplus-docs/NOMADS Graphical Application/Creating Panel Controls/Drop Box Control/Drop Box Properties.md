# Drop Box Control 

**Drop Box Properties** |  **__**  
---|---  
  
When creating or editing a _Drop Box_ control, the **Drop Box Properties** dialogue (pictured below using the **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** version of the NOMADS designer) is displayed.

> **_Dynamic Control Properties_**

PxPlus 2018 introduces the capability to create **_dynamic control properties_** for Drop Box controls when combined with **[Data Classes](../../../Data%20Dictionary/Data%20Classes/Overview.md)**. Dynamic data classes are created by selecting the _Dynamic_ check box in **[Data Class Definitions](../../../Data%20Dictionary/Data%20Classes/Dropbox.md)** maintenance. At run time, dynamic control properties are evaluated and **_automatically_** populated with values based on what is defined in the data class.

When a data class is entered for the Drop Box control, information from the data class is loaded into the Drop Box properties. If the data class is **_dynamic_** , the dynamic control properties are **_automatically_** set to _Dynamic_ initially and assigned a **%NOMADS'class'** variable that corresponds to a data class field (i.e. **%NOMADS'class'length**).

Drop Box control properties designated as **_dynamic_** can be _manually_ switched to dynamic or non-dynamic. A Drop Box control can have a combination of dynamic **_and_** non-dynamic control properties **_only_** when a data class is entered.

See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)** for information and examples.

#### **Note:**  
Dynamic control properties are supported in NOMADS **_and_** iNomads environments.

**_Multiple Character Search_**

Drop Boxes provide a multiple character search capability that makes it easier to search for an exact match in a Drop Box list. To use this capability effectively, the characters **_must_** be entered within a second of one another and **_must_** exactly match the start of an item in the Drop Box.

**_Example:_**

Suppose that a Drop Box contains the following items:

> C10000  
>  C30000  
>  C50000

Typing the character "c" followed within second by the number "3" would select the "C30000" item.

#### **Note:**  
In Drop Boxes, searching always starts from the current selection and wraps.

_(Multiple character search in Drop Boxes was added in PxPlus 2019.)_

**_Drop Box Properties_**

This dialogue is divided into the following tabbed panels for viewing and/or changing Drop Box properties: **[Display](Drop%20Box%20Properties.htm#display)**, **[Font/Color](Drop%20Box%20Properties.htm#font)**, **[Attributes](Drop%20Box%20Properties.htm#attributes)**, **[Values](Drop%20Box%20Properties.htm#values)**, **[Logic](Drop%20Box%20Properties.htm#logic)**, **[User Aid](Drop%20Box%20Properties.htm#useraid)** and **[Query](Drop%20Box%20Properties.htm#query)**.

_Name_ |  Unique name of the Drop Box control (NOMADS provides a default). Naming conventions for variables apply. Click the Browse Library button to copy parameters from an existing object (via the **[Library Browse](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Library%20Browse.md)** dialogue).

#### **Note:**  
When a new control name is entered, it will be checked against the [**Reserved Words**](../../../Reserved%20Words.md) list to determine if it is restricted for use as a NOMADS control name. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_  
  
---|---  
_Class_ |  Enter a **[Data Class](../../../Data%20Dictionary/Data%20Classes/Overview.md)** to load the information from the data class definition into the control's properties. If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Data Class_ button and enter a data class in the **Data Class Options** dialogue. _(The Data Class Options dialogue was added in PxPlus 2018.)_ To enter a data class, use any of the following methods:

  * Click the Query button (binoculars) to select from a list of predefined data classes (if any) for the current control type.
  * Type the name of an existing data class. Only data classes for the current control type are allowed.
  * Create a data class on the fly. Enter a new _Class_ name and respond _Yes_ to the displayed message, which launches **[Data Class Definitions](../../../Data%20Dictionary/Data%20Classes/Dropbox.md)**.

If the data class is changed, a message will display prior to overwriting any information. This works similar to using the **[Reapply Data Class](Drop%20Box%20Properties.htm#reapply)** button. If the data class assigned to the control is deleted in **Data Class Definitions** , the text **** Class not on File **** will display (will be a message box if using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**). _(Dynamic data classes and properties were added in PxPlus 2018.)_  
_(Data Class Maintenance)_ |  Click this button to launch **[Data Class Definitions](../../../Data%20Dictionary/Data%20Classes/Dropbox.md)** for creating or editing a data class. If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Data Class_ button, then click the _Data Class Maintenance_ button in the **Data Class Options** dialogue. _(The Data Class Options dialogue was added in PxPlus 2018.)  
(The Data Class Maintenance button was added in PxPlus 2018.)_  
_(Reapply Data Class)_ |  **_(Available when a data Class is entered)_** Click this button to update control properties with current information from the selected data class. A message displays before any control properties are overwritten. If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Data Class_ button and select the _Reapply Class_ check box in the **Data Class Options** dialogue. _(The Data Class Options dialogue was added in PxPlus 2018.)_

#### **Important Note:**  
Care should be taken when using the _Reapply Data Class_ button or changing the data _Class_ entered for the control, as this will overwrite any existing values.  
  
If the _Dynamic (from Data Class)_ check box was manually changed on the **[User Aid](Drop%20Box%20Properties.htm#useraid)** and/or **[Query](Drop%20Box%20Properties.htm#query)** tabs, clicking the _Reapply Data Class_ button will reselect this check box if the data class entered for the control is dynamic or deselect it if not dynamic.

_(The Reapply Data Class button was added in PxPlus 2018.)_  
_Dynamic Class_ |  **_(Display Only)_** Indicates whether the selected data _Class_ is Dynamic. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Data Class_ button to display the _Dynamic Class_ check box in the **Data Class Options** dialogue. _(The Data Class Options dialogue was added in PxPlus 2018.)  
(The Dynamic Class check box was added in PxPlus 2018.)_  
**Preview** |  Displays how the visible properties of the control will appear at run time.  
**Display****_( * indicates_ a _Dynamic property)_**  
***List Values** |  List of values that NOMADS uses to preload the Drop Box. Can be a _Fixed_ value, string _Expression_ or _Dynamic_). (_Dynamic_ is available **_only_** when a data _Class_ is entered.) If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
**Position** |  |  _Column_ |  Starting column for the top left corner of the control - numeric expression. Format mask is ##0.00. Valid entries are 0 to 620.  
---|---  
_Line_ |  Starting line for the top left corner of the control - numeric expression. Format mask is ##0.00. Valid entries are 0 to 255.  
  
_(Support for increased Column and Line maximums was added in PxPlus 2021.)_  
  
**Size** |  |  _Width_ |  Width of the control in number of columns - numeric expression. Format mask is ##0.00. Valid entries are 0 to 620.  
---|---  
_Height_ |  Height of the control in number of lines - numeric expression. Format mask is ##0.00. Valid entries are 0 to 255.  
  
#### **Note:**  
If a data class is entered and the _Drop Box Width/Height_ values in the data class are subsequently changed, the size of the Drop Box will **_not_** change when the _Reapply Data Class_ button is selected.  
  
_(This functionality was added in PxPlus 2018.)_

_(Support for increased Width and Height maximums was added in PxPlus 2021.)_  
  
**Attributes** |  Optional attributes for _Tab Stop, Variable Input, Initially Disabled_ and _Initially Hidden_. See **[Attributes](Drop%20Box%20Properties.htm#attributes)**.  
***Input Length** |  **_(Applicable when Allow Variable Input check box is selected)_** Maximum input characters. Can be a _Fixed_ value, numeric _Expression_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
**Font/Color****_( * indicates_ a _Dynamic property)_**  
**Font Specification** |  |  _Font  
Size_ |  Click the drop-down arrow for a list of selections.  
---|---  
**Color** |  |  _Foreground  
Background_ |  Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
---|---  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
  
**Attributes** |  Optional attributes. See **[Attributes](Drop%20Box%20Properties.htm#attributes)**.  
***Visual Class** |  Assign a visual class to the control. Can be _Fixed_ , _Expression_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) Click the Visual Class Maintenance button to launch the **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#vcutility)** utility for creating or editing visual classes. To assign visual classes to controls at the **_library_** level, see **[Visual Class Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**. If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**.

#### **Note:**  
Visual class names that begin with an "*" _(asterisk)_ are pre-defined visual classes used by PVX Plus and may be subject to change without notice.

_(Dynamic data classes and properties were added in PxPlus 2018.)  
(The Visual Class Maintenance button was added in PxPlus 2019.)_  
***iNomads Class** |  Assign an iNomads class to the control. Can be _Fixed_ , _Expression_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined iNomads classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
**Attributes****_( * indicates_ a _Dynamic property)_**  
**Attributes** |  |  _Tab Stop_ |  Adds the control to the tab order list. Allows use of the **Tab** key for moving to the control.  
---|---  
_Auto Tab Skip_ |  Control is skipped when tabbing forward but is still accessible via**Shift - Tab** or the mouse.  
_Borderless_ |  The control is drawn with no border or frame.  
_Disable On Empty_ |  The system automatically disables the Drop Box when it contains no entries. When populated, the Drop Box is re-enabled. Overridden when the **['Enabled](../../../properties/enabled.md)** property is turned **_Off_**. Default is **_Off_**.  
_Initially Disabled_ |  Control region is grayed out and is not accessible to the user for input. The control is accessible programmatically.  
_Initially Hidden_ |  Control is not displayed but is accessible programmatically.  
_Enable Scrolling_ |  Allows the control to scroll in a resizable/scrollable dialogue box. See **[Panel Resizing](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Resizing.md)**.  
_Signal On Exit_ |  A signal is generated when focus leaves the control whether the selection or value has changed or not. NOMADS will execute the On Change logic.  
_Automatic (Signal All Changes)_ |  A signal is returned on any changes in the control.  
_Strip Trailing Spaces_ |  Strips trailing spaces when reading/writing data for control.  
_Ignore Change Flag_ |  Select this check box when you do **_not_** want the NOMADS **[CHANGE_FLG](../../Appendix/NOMADS%20Variables/Overview.htm#reserved)** variable to be updated when the control value is changed.  
  
_(The Ignore Change Flag property was added in PxPlus 2017.)_  
  
**DropBox Attributes** |  |  _Allow Variable Input_ |  Enables the user to select any element from the list or enter any other value. See **[Variable Drop Box](Variable%20Drop%20Box.md)**.  
---|---  
**Load Options** |  |  _Smart Load  
(formerly Auto Load)_ |  Select this button to set up a Smart control that will self-load based on a query definition. See **[Smart Controls](../../Smart%20Controls/Overview.md)**.  
---|---  
_Background Loading_ |  Load logic to execute while there is no user input. Select _Background Loading_ and then click the _Logic_ button to add/edit logic. See **[Background Loading](../../Program%20Interaction/Event-Handler%20Routines/Background%20Loading.md)**.  
  
#### **Note:**  
Smart controls are **_not_** compatible with _Background Loading_ logic.

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
***Default Setting** |  Initial value to be highlighted when the Drop Box is drawn. Can be a _Fixed_ value or string _Expression_. If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. If the **List Values** drop box (on **[Display](Drop%20Box%20Properties.htm#display)** tab) is set to _Dynamic_ , the **Default Setting** property will be set to _Dynamic_ and locked. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
***Translation** |  Click the _Translate_ check box to set up a table of values representing Drop Box selections. Definition consists of a _Table Value Length_ (length of each of the items in the table) and the _Translation_ value (_Fixed_ or string _Expression_). If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. If the dynamic data class was defined with **[Load From File](../../../Data%20Dictionary/Data%20Classes/Dropbox.htm#display)** functionality, the _Table Value Length_ will be set to 0 and locked. If the **List Values** drop box (on **[Display](Drop%20Box%20Properties.htm#display)** tab) is set to _Dynamic_ , the **Translation** properties and values will be locked. _(Dynamic data classes and properties were added in PxPlus 2018.)  
__(The setting of Table Value Length to 0 when entering a dynamic data class with Load From File functionality was added in PxPlus 2021.)_  
**Logic**  
_Default Program_ |  Displays the name of the **[Default Program](../../Panel%20Designer/Panel%20Header/Overview.htm#display)** used in the Panel Header definition. _(The Default Program was added for display in PxPlus 2019.)_  
**Post Create** |  Logic to be processed after the control is drawn. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**When Receiving Focus** |  Logic to execute when the control receives focus. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**When Entry is Selected  
from List Box** |  Logic to be executed when focus leaves the control or the state of the control has changed. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**User Aid****_( * indicates_ a _Dynamic property)_**  
_Dynamic (from Data Class)_ |  **_(Available when a data Class is entered)_** If selected, identifies which **Help Reference** properties are dynamic. If a dynamic data class is entered, this check box is automatically selected. If the data class is **_not_** dynamic, this check box can be manually selected.

#### **Note:**  
If the _Dynamic (from Data Class)_ check box was manually changed on the **User Aid** and/or **[Query](Drop%20Box%20Properties.htm#query)** tabs, clicking the _Reapply Data Class_ button will reselect this check box if the data class entered for the control is dynamic or deselect it if not dynamic.

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
**Query** ** _( * indicates_ a _Dynamic property)_**  
_Dynamic (from Data Class)_ |  **_(Available when a data Class is entered)_** If selected, identifies which **Query Type** and its associated properties are dynamic. If a dynamic data class is entered, this check box is automatically selected. If the data class is **_not_** dynamic, this check box can be manually selected.

#### **Note:**  
If the _Dynamic (from Data Class)_ check box was manually changed on the **[User Aid](Drop%20Box%20Properties.htm#useraid)** and/or **Query** tabs, clicking the _Reapply Data Class_ button will reselect this check box if the data class entered for the control is dynamic or deselect it if not dynamic.

_(Dynamic data classes and properties were added in PxPlus 2018.)_  
***Query Type** |  Type of query to associate to the control: _Panel, Query Program, Non-Query Logic_. Valid formats include a NOMADS query object or query list, a custom query panel, or user-supplied query program. Depending on the _Query Type_ selected, different information is entered. For an explanation of each type and the information to enter, see **[Query Type](../../Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#querytype)**. For information on assigning a query to a control, see **[Assigning a Query](../../Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#assigningquery)**. If setting up the Drop Box as a **_Smart_** control (see **[Smart Load](Drop%20Box%20Properties.htm#attributes)** attribute), you can define a query for the Smart control. See **[Defining Smart Controls](../../Smart%20Controls/Defining%20Smart%20Controls.md)**. If the _Dynamic (from Data Class)_ check box is selected, the _Query Type_ and its associated properties will be dynamic and locked. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
_Security_ |  Security restrictions. See **[Restricting Access](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.md)** for information on **Object Security Definition**.  
_Groups_ |  Assign the control to a group. See **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md)**.  
_Popup Menu_ |  Associate a popup menu that will appear when you right-click the mouse over the selected control. See **[Popup Menu](../Popup%20Menu/Overview.md)**.  
_Notes_ |  Add notes/comments for the control. Maximum 1024 characters. These notes also display in the Wiki Help documentation for the panel. See **[NOMADS Wiki Help](../../System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**. _(The Notes button was added in PxPlus 2023.)_  
  
## See Also

**[DROP_BOX Properties](../../../control_object_properties/dropbox_properties.md)**  
**[DROP_BOX Directive](../../../directives/drop_box.htm#Mark3)**
