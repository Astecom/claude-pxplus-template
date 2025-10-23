# Popup Menu 

**Applying a Popup Menu** |  **__**  
---|---  
  
Popups can be associated with a specific control via the **[Panel Designer](../../Panel%20Designer/Introduction.md)**. You can also apply a popup menu to the **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.md)** so that right clicking on any blank area on the panel will launch a popup.

To enable a popup menu for a panel control, select the object for editing. If the control supports popups, a _Popup Menu_ design property will be displayed. For example, when creating or editing a Multi-Line control, a _Popup Menu_ button displays at the bottom of the **[Multi-Line Properties](../Multi-Line%20Control/Multi-Line%20Properties.md)** dialogue.

##  Assign Popup Menu

Select the _Popup Menu_ button to access the **Assign Popup Menu** dialogue.

> This dialogue consists of the following options:

**Prior Popup** |  Logic to process before the popup appears. Click the drop-down arrow for a list of selections: |  _Ignore_ |  No logic to be performed. **_(Default)_**  
---|---  
_Perform_ |  Perform a program.  
_Call_ |  Call a program.  
_Execute_ |  Execute a series of statements separated by **;**  _(semi-colons)_.  
  
Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_.

_(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_

#### **Note:**  
If a popup menu has been assigned, it can be suppressed under certain conditions by setting the NOMADS **[IGNORE_POPUP](../../Appendix/NOMADS%20Variables/Overview.htm#ignore_popup)** reserved variable to a non-zero value. This can be done in the **Prior Popup** logic.  
  
**_Example:_**  
  
To suppress the popup menu in a grid when the bottom row is clicked, set the **Prior Popup** logic to _Execute_ and enter the following:  
  
IF id'currentRow=id'rowshigh THEN IGNORE_POPUP=1  
  
 _(The NOMADS reserved variable IGNORE_POPUP was added in PxPlus 2020.)_  
  
_Panel**or** Program_ |  Select _Panel_ to assign an existing popup menu object; otherwise, select _Program_ and enter the absolute or relative path location of a user-supplied program _("program;label")_. Either one may be defined as a _Fixed_ value or _Expression_.  
_Library_ |  If the _Panel_ button is selected, this field shows the current library. To change the library, click the Browse button to look through the directory structure to find the library.

#### **Note:**  
The Library name may be a specific or generic reference. See [**Cascading Language Suffixes**](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md).  
  
_Panel_ |  If the _Panel_ button is selected, this field shows the name of the currently selected popup menu. Click the drop-down arrow to select a popup menu from the list. Click the popup button to launch the **[Menu Bar Definition](../Menu%20Bar/Menu%20Bar%20Definition.md)** dialogue to edit attributes of the currently selected popup. This makes changes to the original popup menu library object. If the popup menu name that is entered does not already exist, a new library object (with **P** designation) will then be saved in the current library.

#### **Note:**  
When entering a new popup menu object name, valid characters are: letters (A-Z, a-z); numbers (0-9); **~**  _(tilde)_ ; **@**  _(at symbol)_ ; **.**  _(period)_ ; **$**  _(dollar sign)_ ; **_**  _(underscore)_ ; **-**  _(dash)_ ; **+**  _(plus sign)_. If an invalid character is used, a message will display.  
  
_System Popup_ |  **_(Available Only for Grids and List Boxes Except for Tree View)_** Used to assign a system popup menu. Available selections are _Default, On, Off._ See **[List Box and Grid System Popup Menu](List%20Box%20and%20Grid%20System%20Popup%20Menu.md)**.
