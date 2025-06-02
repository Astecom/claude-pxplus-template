# Data Classes

**Radio Buttons Data Class** |  **__**  
---|---  
  
When creating or editing a data class for a _Radio Buttons_ control type, **Data Class Definitions** maintenance displays the following:

> The following tabbed panels are available: **[Display](Radiobuttons.htm#display)**, **[Attributes](Radiobuttons.htm#attributes)** and **[User Aids](Radiobuttons.htm#useraids)**.

_Class Name_ |  Key to the data classes file  _(providex.dcl)_. When entering a new data class name, spaces are **_not_** allowed. Maximum length is 30 characters. Click the Query button _(binoculars)_ for a list of defined data classes (if any). Click the Browse buttons to browse to existing data classes. Click the Copy Class button to copy an existing data class to a new data class. If unsaved changes are detected when selecting these buttons, a message will display to save the changes. _(First/Last Class browse buttons were added in PxPlus 2019.)_  
---|---  
_(Add/Edit Notes)_ |  **_(Available when a new or existing data Class Name is entered or selected)_** Button used to add (or edit) notes for a new or existing data class. Maximum 1024 characters. The button's appearance and tooltip change to indicate that a note was added for the data class. _(The Add/Edit Notes button was added in PxPlus 2022.)_  
_(Copy Class)_ |  **_(Available when an existing data Class Name is selected)_** Button used to create a new data class by copying the settings from an existing data class. Once it is created, **_the new data class must be saved_** , as the Copy process does not do this. _(The Copy Class button was added in PxPlus 2019.)_  
_Last Class Change_ |  This information is updated automatically whenever a change is made to the data class definition. _(Last Class Change was added in PxPlus 2023.)_  
_Control Type_ |  Default control type used to represent the data that belongs to your defined data class. Click the drop-down arrow for a list of selections: _Multi Line, Drop Box, List Box, Radio Buttons, Check Box_. (Default is _Multi Line_.) The control type lets the NOMADS **[Panel Designer](../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** and **[File Maintenance Generator](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** know which type of control to use for representing the data element.  
_Description_ |  Generic description of the data class (_Fixed_ value, _Expression_ or _Message Library Reference_). This will be copied to the data dictionary when the data class is applied to an element. See **[Element Description](../Data%20Dictionary%20Maintenance/Element%20Description.md)**.  
_*Dynamic_ |  **_(Not Applicable for Radio Buttons)_**  
_Internal Data Type_ |  Internal format of the data when manipulated by a program, either _String_ or _Numeric_. (Default is _String_.)  
_Internal Size_ |  Maximum size of the stored data element. When the _Control Type_ is _Radio Buttons_ , the _Internal Size_ is 1.  
**Display**  
**Properties** |  |  _Control Width_ |  Width of the control in number of columns - numeric _Expression_. Format mask is ##0.00 and valid entries are 0 to 255.  
---|---  
_Control Height_ |  Height of the control in number of lines - numeric _Expression_. Format mask is ##0.00 and valid entries are 0 to 240. _(added in PxPlus 2018)_  
_Button on Right_ |  Radio button appears after the text. This attribute is only applicable if the control does not contain a bitmap.  
_Button Text_ |  Sets the button text.  
_Translate Value_ |  Single character translation value representing the selection.  
_Update_ |  Applies the change(s) to the selected button.  
_Insert_ |  Adds the new button to the list.  
_Remove_ |  Deletes the selected button from the list.  
_Set Default_ |  Sets a selected button as the default.  
_Up  
Down_ |  Moves a selected button to a different position within the list.  
**Attributes**  
**Attributes** |  |  _Auto Tab Skip_ |  Control is skipped when tabbing forward but is still accessible via**Shift - Tab** or the mouse.  
---|---  
_Initially Disabled_ |  Control region is grayed out and is not accessible to the user for input. The control is accessible programmatically.  
_Initially Hidden_ |  Control is not displayed but is accessible programmatically.  
_Enable Scrolling_ |  Allows the control to scroll in a resizable/scrollable dialogue box. See **[Panel Resizing](../../NOMADS%20Graphical%20Application/Panel%20Designer/Resizing%20and%20Persistence/Panel%20Resizing.md)**.  
**User Tag Field** |  For controls, data/tag field which can be used to pass information on such things as formatting, error messages or validation rules. Field contents are placed in a variable using the control name with a .TAG$ extension.  
**User Aids**  
**Help Reference** |  |  _Type_ |  Click the drop-down arrow to select either _Internal_ or _External_ help reference: |  _Internal_ |  Application supplied message text (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
---|---  
_External_ |  Standard Windows help system consisting of a help file name and an optional keyword or reference number (_Fixed_ or _Expression_).  
**Floating Tip** |  Mouse pointer message for the control (_Fixed_ value, string _Expression_ or _Message Library Reference_). You can customize the floating tip by adding a tip title, descriptive tip text and a hyperlink. These features enhance the visual display and functionality of the tip by providing users with much needed information at their fingertips. You can define either a _Standard_ tip or an _HTML_ tip that provides a simplified HTML Editor for customizing the tip text. To do this, click the button to the right of the **Floating Tip** multi-line input to invoke the **Define Info Tip** dialogue. See **[Defining an Info Tip](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Defining%20an%20Info%20Tip.md)**.

#### **Note:**  
The **Floating Tip** drop box and multi-ine input cannot be changed once an [**HTML**](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Defining%20an%20Info%20Tip.htm#tiptype) tip has been defined.  
  
**Message Bar** |  Text to be displayed in the panel's status bar when focus is on the control (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
|   
_Popup Menu_ |  Button that is used to assign a popup menu to a data class (_Fixed_ value or _Expression_ , to be evaluated at run time when the popup signal occurs). A check mark displayed on the button indicates that a popup menu is currently assigned to the data class. This button invokes the **[Assign Popup Menu](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Popup%20Menu/Applying%20a%20Popup%20Menu.md)** window for assigning _Prior Popup_ logic, a pre-defined popup object or user-defined program. If selected, _Prior Popup_ logic will be executed before the popup menu is displayed. If _On Select_ logic exists for the control with the popup menu, this will be triggered before the popup event.  
  
Select the _Panel_ option in the **Assign Popup Menu** window to display a pre-set list of popup objects available for the highlighted library. The _Program_ option is used to add a user-defined program. This can be either a _Fixed_ value or _Expression_ to be evaluated at run time when the popup signal occurs.  
_Write_ |  Adds a new data class definition or updates an existing definition.  
_Delete_ |  **_(Available when an existing data class is selected)_** Removes the selected data class definition. Before proceeding, a message asks to confirm the deletion, as deleting a data class in use may cause issues.  
_Clear_ |  Clears the current data class definition to allow you to define a new data class or select an existing definition.  
_Exit_ |  Closes **Data Class Definitions** maintenance without saving any changes.  
  
_(The User Aids tab was added in PxPlus 2018.)_
