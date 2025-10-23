# Multi-Line Control 

**Multi-Line Properties** |  **__**  
---|---  
  
When creating or editing a _Multi-Line_ control, the **Multi Line Properties** dialogue (pictured below using the **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** version of the NOMADS designer) is displayed:

> **_Dynamic Control Properties_**

PxPlus 2018 introduces the capability to create **_dynamic control properties_** for Multi-Line controls when combined with **[Data Classes](../../../Data%20Dictionary/Data%20Classes/Overview.md)**. Dynamic data classes are created by selecting the _Dynamic_ check box in **[Data Class Definitions](../../../Data%20Dictionary/Data%20Classes/Multiline.md)** maintenance. At run time, dynamic control properties are evaluated and **_automatically_** populated with values based on what is defined in the data class.

When a data class is entered for the Multi-Line control, information from the data class is loaded into the Multi-Line properties. If the data class is **_dynamic_** , the dynamic control properties are **_automatically_** set to _Dynamic_ initially and assigned a **%NOMADS'class'** variable that corresponds to a data class field (i.e. **%NOMADS'class'length**).

Multi-Line control properties designated as **_dynamic_** can be _manually_ switched to dynamic or non-dynamic. A Multi-Line control can have a combination of dynamic **_and_** non-dynamic control properties **_only_** when a data class is entered.

See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)** for information and examples.

#### **Note:**  
Dynamic control properties are supported in NOMADS **_and_** iNomads environments.

**_Multi-Line Properties_**

This dialogue is divided into the following tabbed panels for viewing and/or changing Multi-Line properties: **[Display](Multi-Line%20Properties.htm#display)**, **[Font/Color](Multi-Line%20Properties.htm#font)**, **[Attributes](Multi-Line%20Properties.htm#attributes)**, **[Logic](Multi-Line%20Properties.htm#logic)**, **[User Aids](Multi-Line%20Properties.htm#useraid)**, **[Validation](Multi-Line%20Properties.htm#validation)** and **[Query](Multi-Line%20Properties.htm#query)**.

_Name_ |  Unique name of the Multi-Line control (NOMADS provides a default). Naming conventions for variables apply. Click the Browse Library button to copy parameters from an existing object (via the **[Library Browse](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Library%20Browse.md)** dialogue).

#### **Note:**  
When a new control name is entered, it will be checked against the **[Reserved Words](../../../Reserved%20Words.md)** list to determine if it is restricted for use as a NOMADS control name. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_

If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Control Name_ button to launch the **Multi-Line Browse Options** dialogue. With the _Library Browse_ option already selected, click _OK_. _(The Multi-Line Browse Options dialogue was added to Property Sheets in PxPlus 2019.)_ **_Extended Class Validation_** If creating a _display-only_ Multi-Line control for an **[Extended Class Validation](../../../Data%20Dictionary/Data%20Classes/Extended%20Validation.md)** data element, the Multi-Line _Name**must**_ have the following format: **SHOW**._name.element_ **_Where:_** |  |  **SHOW** |  Syntax used with Extended Class Validation when naming Multi-Line controls created from data elements during panel design  
---|---|---  
__ |  _name_ |  Name of the Multi-Line control defined with an Extended Validation data class (on the current panel)  
__ |  _element_ |  Name of the data element in the table (applies only if the Extended Validation _Populate All Fields_ check box is **_On_**)  
  
**_Example:_**

**SHOW.SALES.DEPARTMENT** (_where_ **DEPARTMENT** is the name of the element in the data dictionary)

#### **Note:**  
When Multi-Line controls for Extended Class Validation are created, the following attributes (on [**Attributes**](Multi-Line%20Properties.htm#attributes) tab) are set to **_On_** : _Locked_ , _Borderless_ and _Transparent_. The _Tab Stop_ attribute is set to **_Off_**. The _Numeric_ attribute is set according to the data dictionary, and if _Numeric_ is **_On_** , the _Input Format_ (on [**Display**](Multi-Line%20Properties.htm#display) tab) is set according to the data dictionary.

_(Extended Validation was added in PxPlus 2019.)_  
  
_(Browse Extended Class Variables)_ |  **_(Available when Data Class is blank)_** Click this button to launch **[Extended Class Browse](Extended%20Class%20Browse.md)** if creating a _display-only_ Multi-Line control for an **[Extended Class Validation](../../../Data%20Dictionary/Data%20Classes/Extended%20Validation.md)** data element. If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Control Name_ button to launch the **Multi-Line Browse Options** dialogue and select the _Browse Extended Class Validation Variables_ option. If a Data Class is entered, this button is **_not_** available. _(The Multi-Line Browse Options dialogue was added to Property Sheets in PxPlus 2019.)_

#### **Note:**  
To use Extended Class Browse, a Multi-Line control with an [**Extended Validation**](../../../Data%20Dictionary/Data%20Classes/Multiline.htm#extvalidation) data class **_must_** exist on the **_current_** panel; otherwise, a message will display and **Extended Class Browse** will not be available.  
  
At any time, a panel can have multiple Multi-Line controls with an **Extended Validation** data class entered.

_(The Browse Extended Class Variables button was added in PxPlus 2019.)_  
_Class_ | 

#### **Note:**  
The _Class_ field is disabled when the Multi-Line [**Name**](Multi-Line%20Properties.htm#properties) starts with **SHOW.**_xxxxxx_ (which indicates a display-only control for [**Extended Class Validation**](../../../Data%20Dictionary/Data%20Classes/Extended%20Validation.md)).  
  
_(Disabling the Class field for SHOW.xxxxxx Multi-Lines was added in PxPlus 2020.)_

Enter a **[Data Class](../../../Data%20Dictionary/Data%20Classes/Overview.md)** to load the information from the data class definition into the control's properties. If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Data Class_ button and enter a data class in the **Data Class Options** dialogue. _(The Data Class Options dialogue was added in PxPlus 2018.)_ To enter a data class, use any of the following methods:

  * Click the Query button (binoculars) to select from a list of predefined data classes (if any) for the current control type.
  * Type the name of an existing data class. Only data classes for the current control type are allowed.
  * Create a data class on the fly. Enter a new _Class_ name and respond _Yes_ to the displayed message, which launches **[Data Class Definitions](../../../Data%20Dictionary/Data%20Classes/Multiline.md)**.

If the data class is changed, a message will display prior to overwriting any information. This works similar to using the **[Reapply Data Class](Multi-Line%20Properties.htm#reapply)** button. If the data class assigned to the control has been deleted in **Data Class Definitions** , the text **** Class not on File **** will display (will be a message box if using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**). _(Dynamic data classes and properties were added in PxPlus 2018.)_  
_(Data Class Maintenance)_ |  Click this button to launch **[Data Class Definitions](../../../Data%20Dictionary/Data%20Classes/Multiline.md)** for creating or editing a data class. If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Data Class_ button, then click the _Data Class Maintenance_ button in the **Data Class Options** dialogue. _(The Data Class Options dialogue was added in PxPlus 2018.)_ _(The Data Class Maintenance button was added in PxPlus 2018.)_  
_(Reapply Data Class)_ |  **_(Available when a data Class is entered)_** Click this button to update control properties with current information from the selected data class. A message displays before any control properties are overwritten. If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Data Class_ button and select the _Reapply Class_ check box in the **Data Class Options** dialogue. _(The Data Class Options dialogue was added in PxPlus 2018.)_

#### **Important Note:**  
Care should be taken when using the _Reapply Data Class_ button or changing the data _Class_ entered for the control, as this will overwrite any existing values.  
  
If the _Dynamic (from Data Class)_ check box was manually changed on the **[User Aids](Multi-Line%20Properties.htm#useraid)**, **[Validation](Multi-Line%20Properties.htm#validation)** and/or **[Query](Multi-Line%20Properties.htm#query)** tabs, clicking the _Reapply Data Class_ button will reselect this check box if the data class entered for the control is dynamic or deselect it if not dynamic.

_(The Reapply Data Class button was added in PxPlus 2018.)_  
_Dynamic Class_ |  **_(Display Only)_** Indicates whether the selected data _Class_ is Dynamic. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, click the _Data Class_ button to display the _Dynamic Class_ check box in the **Data Class Options** dialogue. _(The Data Class Options dialogue was added in PxPlus 2018.)  
(The Dynamic Class check box was added in PxPlus 2018.)_  
**Preview** |  Displays how the visible properties of the control will appear at run time.  
**Display****_( * indicates_ a _Dynamic property)_**  
***Initial Value** |  Value to be loaded when the Multi-Line is drawn. Can be a _Fixed_ value, string _Expression_ , _Message Library Reference_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
***Input Length** |  Maximum input characters. Can be a _Fixed_ value, numeric _Expression_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
_*Empty Value_ |  Text to display if null input (_Fixed_ , _Expression_ or _Dynamic_). (_Dynamic_ is available **_only_** when a data _Class_ is entered.) If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. _(Dynamic data classes and properties were added in PxPlus 2018.)  
(Support for Empty Value to be an expression was added in PxPlus 2018.)_  
_Implied Decimal Point_ |  Determines implied decimal support for numeric Multi-Lines. Click the drop-down arrow for a list of selections: |  _Default_ |  NOMADS will use the PxPlus setting of the **['+I'](../../../mnemonics/+i.md)** or **['-I'](../../../mnemonics/+i.md)** mnemonic.  
---|---  
_Never_ |  Disable implied decimals.  
_Always_ |  Enable implied decimals.  
***Input Format** |  Format mask for Multi-Line. Can be _Fixed_ , string _Expression_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. |  _Separator_ |  Delimiter character. (_Default_ is _< Std>_.)  
---|---  
  
#### **Note:**  
When defining a Multi-Line **_with a Height greater than 1_** , it is strongly advised to use a different Separator character, rather than the <Std> default, as the <Std> default can also be translated as a field separator when the user presses Enter to add another line during data entry.

_(Dynamic data classes and properties were added in PxPlus 2018.)_  
  
**Position** |  |  _Column_ |  Starting column for the top left corner of the control - numeric expression. Format mask is ##0.00. Valid entries are 0 to 620.  
---|---  
_Line_ |  Starting line for the top left corner of the control - numeric expression. Format mask is ##0.00. Valid entries are 0 to 255.  
  
_(Support for increased Column and Line maximums was added in PxPlus 2021.)_  
  
**Size** |  |  _Width_ |  Width of the control in number of columns - numeric expression. Format mask is ##0.00. Valid entries are 0 to 620.  
---|---  
_Height_ |  Height of the control in number of lines - numeric expression. Format mask is ##0.00. Valid entries are 0 to 255. If a query is associated with the Multi-Line (on **[Query](Multi-Line%20Properties.htm#query)** tab), the Multi-Line _Height_ must be set to 1 so that the query button will be drawn. If the _Height_ is **_greater_** than 1, NOMADS will not draw the query button and will display a message when you save the Multi-Line. (If using **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**, this message will only display in the **Assign Query** window (_Query_ property) when a query is assigned and the _OK_ button is selected.)  
  
If responding _Yes_ , NOMADS will first change the Multi-Line _Height_ to 1 and then save the Multi-Line. If responding _No_ , NOMADS will **_not_** change the Multi-Line _Height_ prior to saving the Multi-Line. _(The message for the Multi-Line height was added in PxPlus 2020.)_  
  
For Multi-Line sizing, see the [**'MF'**](../../../parameters/mf.md) parameter and the [**MULTI_LINE**](../../../directives/multi_line.md) directive.

#### **Note:**  
If a data class is entered and the _Multi-Line Width/Height_ values in the data class are subsequently changed, the size of the Multi-Line will **_not_** change when the _Reapply Data Class_ button is selected.  
  
_(This functionality was added in PxPlus 2021.)_

_(Support for increased Width and Height maximums was added in PxPlus 2021.)_  
  
**Attributes** |  Optional attributes for _Tab Stop, Numeric, Initially Disabled_ and _Initially Hidden_. See **[Attributes](Multi-Line%20Properties.htm#attributes)**.  
**Font/Color****_( * indicates_ a _Dynamic property)_**  
**Font Specification** |  |  _Font  
Size_ |  Click the drop-down arrow for a list of selections.  
---|---  
**Color** |  |  _Foreground  
Background_ |  Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
---|---  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
  
**Attributes** |  Optional attributes. See **[Attributes](Multi-Line%20Properties.htm#attributes)**.  
***Visual Class** |  Assign a visual class to the control. Can be _Fixed_ , _Expression_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) Click the Visual Class Maintenance button to launch the **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#vcutility)** utility for creating or editing visual classes. To assign visual classes to controls at the **_library_** level, see **[Visual Class Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**. If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**.

#### **Note** :  
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
_Initially Disabled_ |  Control region is grayed out and is not accessible to the user for input. The control is accessible programmatically.  
_Initially Hidden_ |  Control is not displayed but is accessible programmatically.  
_Locked_ |  User can set focus but cannot change the Multi-Line input region. Associated query button is disabled.  
_PermaLock_ _/Query Input_ |  Multi-Line is permanently locked. Associated query button is enabled. Forces input through the query only. Can be used in conjunction with a **[Drop Query](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.htm#dropquery)** to emulate an enhanced drop box. If the Multi-Line has an assigned hot key, the hot key will trigger the query button provided that the query button has an image assigned to it and has no hot key of its own.  
_Signal On Exit_ |  A signal is generated when focus leaves the control whether the selection or value has changed or not. NOMADS will execute the On Change logic.  
_Signal All Chg (Auto)_ |  A signal is returned on any changes in the control.  
_Signal When Full_ |  Generates a signal upon maximum input length. NOMADS will execute the On Change logic for the control.  
_Signal To/From Null_ |  Generates a signal when the Multi-Line value changes from null to non-null or vice versa. Triggers On Change logic without focus leaving the control.  
_Center Text_ |  Centers the input.  
_Right Justify Text_ |  Text is right aligned in the Multi-Line input field.  
_Numeric_ |  Value for the control is returned in a numeric variable.  
_Password_ |  Password entry displays a **$**  _(dollar sign)_ as substitute for each character entered.  
_Strip Trailing Spaces_ |  Strips trailing spaces when reading/writing data for the control.  
_Uppercase_ |  Converts text from lowercase to uppercase automatically.  
_Borderless_ |  The control is drawn with no border or frame.  
_Tab Support_ |  Supports the use of the **Tab** key in the Multi-Line input region.  
_Append Text_ |  **_Edit Mode._**__ Append to end of existing text. (Default is _Insert_).  
_Ignore Change Flag_ |  Select this check box when you do **_not_** want the NOMADS **[CHANGE_FLG](../../Appendix/NOMADS%20Variables/Overview.htm#reserved)** variable to be updated when the control value is changed.  
_Enable Scrolling_ |  Allows the control to scroll in a resizable/scrollable dialogue box. See **[Panel Resizing](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Resizing.md)**.  
_Reverse Input_ |  Support for Arabic characters (right to left entry).  
_Auto Fill_ |  Select this check box to set up the _Auto Fill_ feature, which completes the entry of a Multi-Line control based on the matches available from a pre-defined query. Additional options are: |  _Must Match_ |  **_(Available when Auto Fill check box is selected)_** When selected, forces the entry to match an entry from the pre-defined query.  
---|---  
_Not Empty_ |  **_(Available when Must Match check box is selected)_** When selected, the _Auto Fill_ input cannot be left empty. A value **_must_** be specified.  
  
To set up Auto Fill, first select the _Auto Fill_ check box. (The _Must Match_ and _Not Empty_ check boxes are optional.) Then, select the **Query** tab to enter the _Library_ and _Panel_ to use as the predefined query for the Auto Fill. The first column of data from the query will be the column against which the matches will be made. Select the _Suppress Query Button_ check box in the **Query Button Options** section.  
  
_Rich Text Input_ |  Use Rich text control to enable RTF data and user formatting.

#### **Note:**  
Rich Text Multi-Line controls are **_not_** supported in iNomads.  
  
_Transparent_ |  Multi-Line background and border are transparent; i.e. the window contents behind the Multi-Line show through. Transparency requires that the _Locked_ and _Borderless_ attributes also be set.

#### **Note:**  
Setting a background color is not compatible with transparency. If a background color is specified, it will be ignored.  
  
_Spell Check_ |  Select this check box to enable spell checker for the Multi-Line. If not set, the system-wide **[AutoSpellCheck](../../../mnemonics/option.htm#spellcheck)** setting will be in effect. The spell checker uses a wavy red underline to flag words that appear misspelled or duplicated. Words that are **_all_** uppercase are **_not_** spell checked. This option is ignored for Multi-Lines that are defined as _Uppercase_ or are used for Arabic (right to left) input when the _Reverse Input_ check box is selected.  
_Scrollbars (if req'd)_ |  Scrollbar(s) to display when the **_height_** of the Multi-Line is **_greater than one line_**. Selection options are _Vertical (default), No scrollbar, Horizontal, Both scrollbars_.  
  
_(The PermaLock/Query Input property was added in PxPlus 2014 - Feature Pack 1. The hot key trigger of the query button was added in PxPlus 2019.)  
(The Ignore Change Flag property was added in PxPlus 2017.)  
(The Spell Check property was added in PxPlus 2019.)_  
  
**Load Options** |  |  _EZ Load_ |  Select this button to set up an EZ Load Multi-Line that will self-load when an associated trigger control is populated. See **[EZ Load Multi-Line](Ez%20Load%20Multiline.md)**.  
---|---  
_Smart Load  
(formerly Auto Load)_ |  Select this button to set up a Smart control that will self-load based on a query definition. See **[Smart Controls](../../Smart%20Controls/Overview.md)**.  
  
#### **Note:**  
The _EZ Load_ and _Smart Load_ options are **_not_** compatible with one another.

_(Support for EZ Load and enhanced Smart Load capability was added in PxPlus 2018.)_  
  
**Other** |  |  _Object Persistence_ |  Sets **[Object Persistence](../../Panel%20Designer/Resizing%20and%20Persistence/Object%20Persistence.md)**. Click the drop-down arrow for a list of selections: |  _Default_ |  Set via global variable  
---|---  
_Always_ |  **_On_** , overriding global activation  
_Never_ |  **_Off_** , overriding global activation  
_*User-Defined Tag Field_ |  For controls, data/tag field that can be used to pass information on such things as formatting, error messages or validation rules. Can be _Fixed_ , _Expression_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) Field contents are placed in a variable using the control name with a .TAG$ extension. If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
_Alt-Key_ |  Hot key for the control. Click the drop-down arrow for a list of selections.  
**Logic**  
_Default Program_ |  Displays the name of the **[Default Program](../../Panel%20Designer/Panel%20Header/Overview.htm#display)** used in the Panel Header definition. _(The Default Program was added for display in PxPlus 2019.)_  
**Post Create** |  Logic to be processed after the control is drawn. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**When Receiving Focus** |  Logic to execute when the control receives focus. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**On Change** |  Logic to be executed when focus leaves the control or the state of the control has changed. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**User Aids****_( * indicates_ a _Dynamic property)_**  
_Dynamic (from Data Class)_ |  **_(Available when a data Class is entered)_** If selected, identifies which **Help Reference** properties are dynamic. If a dynamic data class is entered, this check box is automatically selected. If the data class is **_not_** dynamic, this check box can be manually selected.

#### **Note:**  
If the _Dynamic (from Data Class)_ check box was manually changed on the **User Aids** , [**Validation**](Multi-Line%20Properties.htm#validation) and/or [**Query**](Multi-Line%20Properties.htm#query) tabs, clicking the _Reapply Data Class_ button will reselect this check box if the data class entered for the control is dynamic or deselect it if not dynamic.

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

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. You can customize the floating tip by adding a tip title, descriptive tip text and a hyperlink. These features enhance the visual display and functionality of the tip by providing users with much needed information at their fingertips. You can define either a _Standard_ tip or an _HTML_ tip that provides a simplified HTML Editor for customizing the tip text. To do this, click the button to the right of the **Floating Tip** Multi-Line input to invoke the **Define Info Tip** dialogue. See **[Defining an Info Tip](../Defining%20an%20Info%20Tip.md)**.

#### **Note:**  
The Floating Tip drop box and Multi-Line input _cannot_ be changed once an [**HTML**](../Defining%20an%20Info%20Tip.htm#tiptype) tip has been defined.

**_NOMADS Wiki Help_** The floating tip text can be used when displaying the **[Wiki Help](../../System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**. Info tips, however, are not supported and will be ignored. _(Support for customizing Floating Tips was added in PxPlus 2016.)  
(Dynamic data classes and properties were added in PxPlus 2018.)  
(Support for the use of Floating Tip text in the Wiki Help was added in PxPlus 2023.)_  
***Message Bar** |  Text to be displayed in the panel's status bar when focus is on the control. Can be a _Fixed_ value, string _Expression_ , _Message Library Reference_ or _Dynamic_). (_Dynamic_ is available **_only_** when a data _Class_ is entered.) If a dynamic data class is entered, this property will be automatically set to _Dynamic_ and assigned a **%NOMADS'class'** variable, which is locked.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

If the data class is **_not_** dynamic, this property can be manually set to _Dynamic_. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
**Validation****_( * indicates_ a _Dynamic property)_**  
_Dynamic (from Data Class)_ |  **_(Available when a data Class is entered)_** If selected, identifies which **Data Validation/Display Logic** properties are dynamic. If a dynamic data class is entered, this check box is automatically selected. If the data class is **_not_** dynamic, this check box can be manually selected.

#### **Note:**  
If the _Dynamic (from Data Class)_ check box was manually changed on the [ **User Aids**](Multi-Line%20Properties.htm#useraid), **Validation** and/or [**Query**](Multi-Line%20Properties.htm#query) tabs, clicking the _Reapply Data Class_ button will reselect this check box if the data class entered for the control is dynamic or deselect it if not dynamic.

_(Dynamic data classes and properties were added in PxPlus 2018.)_  
***Data Validation/Display Logic** |  If the _Dynamic (from Data Class)_ check box is selected, the _Validator_ , _Formatter_ and _Rules_ properties will **_all_** be set to _Dynamic_ and assigned **%NOMADS'class'** variables, which are locked. (**_All three_** properties must be either dynamic or non-dynamic.) See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**.

#### **Note:**  
Expressions that come from a data class **_must_** be global variables.

|  _Key Field  
(skips file validation)_ |  **_(Available when a dynamic data Class with Extended Validation is entered)_** Select this check box to skip the file validation for the Multi-Line (i.e. Key field). For example, if the Multi-Line (e.g. Salesperson Code) is being created on a panel that will be used to enter new Salesperson records, selecting this check box will prevent validation from checking the data file to determine if the entry already exists.  
---|---  
_Validator_ |  Name of validation program with an optional entry point label. See **[Format and Validation Logic](Format%20and%20Validation%20Logic.md)**.  
_Formatter_ |  Name of formatter program with an optional entry point label. See **[Format and Validation Logic](Format%20and%20Validation%20Logic.md)**.  
_Rules_ |  Input validation range and/or values (comma-separated); e.g. A, C, R-T. Can be a _Fixed_ value, string _Expression_ or _Dynamic_. (_Dynamic_ is available **_only_** when a data _Class_ is entered.) If using Property Sheets and setting _Rules_ to _Dynamic_ , the _Validator_ and _Formatter_ properties will automatically be set to _Dynamic_.  
  
_(Dynamic data classes and properties were added in PxPlus 2018.)  
(The Key Field check box was added in PxPlus 2019.)_  
  
**Size Override on Focus** |  |  _Columns_ |  Multi-Line width will resize to specified value when focus is set to the control.  
---|---  
_Lines_ |  Multi-Line height will resize to specified value when focus is set to the control.  
**Query** ** _( * indicates_ a _Dynamic property)_**  
_Dynamic (from Data Class)_ |  **_(Available when a data Class is entered)_** If selected, identifies which **Query Type** and its associated properties are dynamic. If a dynamic data class is entered, this check box is automatically selected. If the data class is **_not_** dynamic, this check box can be manually selected.

#### **Note:**  
If the _Dynamic (from Data Class)_ check box was manually changed on the [ **User Aids**](Multi-Line%20Properties.htm#useraid), [**Validation**](Multi-Line%20Properties.htm#validation) and/or **Query** tabs, clicking the _Reapply Data Class_ button will reselect this check box if the data class entered for the control is dynamic or deselect it if not dynamic.

_(Dynamic data classes and properties were added in PxPlus 2018.)_  
***Query Type** |  Type of query to associate to the control: _Panel, Query Program, Non-Query Logic, Spinner Controls, Calendar_. Valid formats include a NOMADS query object or query list, a custom query panel, or user-supplied query program. Depending on the _Query Type_ selected, different information is entered. See **[Query Type](../../Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#querytype)**. For information on assigning a query to a control, see **[Assigning a Query](../../Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#assigningquery)**. For information on using the query to launch a service program, see **[Service Queries for Web, Email, Map and Open File](../../Dictionary-Based%20Development/Query%20Subsystem/Service%20Queries%20for%20Web,%20Email%20and%20Map.md)**. To view a video presentation on how to add a Google map query, go to **[How to Add a Google Map](https://www.youtube.com/watch?v=a4aYytpMwWM&feature=youtu.be)**. To view a video presentation on how to use the embedded query feature, which includes the **[%NOMAD_Qry_Attr$](../../Appendix/NOMADS%20Variables/Overview.htm#qry_attr)** property, go to **[How to Use Embedded Query](https://www.youtube.com/watch?v=K01hzcnYNlk&feature=youtu.be)**. If setting up the Multi-Line as a **_Smart_** control (see **[Smart Load](Multi-Line%20Properties.htm#attributes)** attribute above), you can define a query for the Smart control. See **[Defining Smart Controls](../../Smart%20Controls/Defining%20Smart%20Controls.md)**. If the _Dynamic (from Data Class)_ check box is selected, the _Query Type_ and its associated properties will be dynamic and locked. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**.

#### **Important Note** :  
Query buttons are only drawn if the associated Multi-Line is **_one line high_**.

_(Dynamic data classes and properties were added in PxPlus 2018.)_  
_Auto Complete_ |  **_(Available if Query Type is Panel, Query Program or Non-Query Logic)_** Assign a specific auto complete definition to the Multi-Line. Click the drop-down arrow for a list of existing entries (if defined using **[Auto Complete Definition](../../System%20Maintenance%20Tools/System%20Options/Auto%20Complete.htm#autocomplete_def)**).  
**Query Button Options** |  **_(Available if Query Type is Panel, Query Program or Non-Query Logic)_** Options for setting the appearance of the query button for the Multi-Line. See **[Query Button Options](../../Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#options)**. If the _Dynamic (from Data Class)_ check box is selected, the query button properties will be dynamic and locked. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**. _(Dynamic data classes and properties were added in PxPlus 2018.)_  
_Security_ |  Security restrictions. See **[Restricting Access](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.md)** for information on **Object Security Definition**.  
_Groups_ |  Assign the control to a group. See **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md)**.  
_Popup Menu_ |  Associate a popup menu that will appear when you right-click the mouse over the selected control. See **[Popup Menu](../Popup%20Menu/Overview.md)**.  
_Notes_ |  Add notes/comments for the control. Maximum 1024 characters. These notes also display in the Wiki Help documentation for the panel. See **[NOMADS Wiki Help](../../System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**. _(The Notes button was added in PxPlus 2023.)_  
  
## See Also

**[MULTI_LINE Properties](../../../control_object_properties/multiline_properties.md)**  
**[MULTI_LINE Directive](../../../directives/multi_line.htm#Mark3)**
