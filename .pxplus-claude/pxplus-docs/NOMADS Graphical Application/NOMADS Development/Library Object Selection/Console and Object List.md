# Library Object Selection   
  
**Console and Object List** |  **__**  
---|---  
  
After creating and/or opening a library, NOMADS displays the **Library Object Selection** window with the current library name displayed in the title bar. For an existing library, this window displays any object names contained within the library; otherwise, the list will be empty.

This is the control area in NOMADS for designing and creating the components you will need to build your graphical user interface application.

> As each new _Object Name_ is created and added to the library, it is added to the **[Object List](Console%20and%20Object%20List.htm#objectlist)**. For a description of the types of objects that can be created, see **[Creating Library Objects](Creating%20Library%20Objects.md)**.

Each object in the Object list displays specific details such as the object name, object type, title, revised date and the last person to save changes to it.

You can use the _Views_ menu to select the display style you prefer (_Button View, Toolbar View_ or _Menubar_ _View_) for accessing common functions in the **Library Object Selection** window. For example, _Toolbar View_ (pictured above) presents a series of toolbar options at the top of the window. _Button View_ presents a series of buttons at the bottom, and _Menubar_ _View_ presents a menu bar.

For an explanation of the menu bar and button options, see **[Menu Options](Menu%20Options.md)** and **[Button Options](Button%20Options.md)**.

#### **Note:**  
_Toolbar View_ is assumed for most examples and descriptions throughout the _NOMADS Graphical Application_ Help documentation unless stated otherwise.

##  Object List

Each object in the **Library Object Selection** window lists the following information:

_Object Name_ |  Name of the panel, dialogue or window, preceded by a task type icon. This name was entered in the _Name_ field when the object was first created. For object names, valid characters are: letters (A-Z, a-z); numbers (0-9); **~**  _(tilde)_ ; **@**  _(at symbol)_ ; **.**  _(period)_ ; **$**  _(dollar sign)_ ; **_**  _(underscore)_ ; **-**  _(dash)_ ; **+**  _(plus sign)_. If an invalid character is used, a message will display.

#### **Note:**  
The letter case of the original name entered for a new object will be used in the Object list.  
  
To change the case of existing object names, use the **[Copy Screen Objects](../Maintaining%20Library%20Objects/Copying%20Library%20Objects.md)** utility.

_(Letter case support for object names in the Object list was added in PxPlus 2023.)_  
---|---  
_Type_ |  Letter code used to identify the object type (when the object was defined). Each object type is also represented by a different icon that precedes each object name in the list. The letter codes are defined as follows: |  **(D)** |  **_Dialogue_** |  Panel object created as a freestanding dialogue box and not constrained by the main PxPlus window. The _Dialogue_ attribute in the **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.md)** must be selected.  
---|---|---  
**(Dh)** |  **_Dialogue (HTML)_** |  Panel object created by using the **[File Maintenance Generator](../../Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** where an HTML page was also generated. Applicable for main panels only, not folder/tab panels.  
**(P)** |  **_Popup_** |  A type of menu object that is invisible until the user right-clicks on a popup-enabled object. Unlike standard menus, a popup is stored in the NOMADS library as an independent object. See **[Popup Menu](../../Creating%20Panel%20Controls/Popup%20Menu/Overview.md)**.  
**(Q)** |  **_Query_** |  A type of panel generated using built-in attributes intended for the display and lookup of records from a data file or database. See **[Query Subsystem](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.md)**.  
**(q)** |  **_Query List_** |  Query-like definition used by **[Smart Controls](../../Smart%20Controls/Overview.md)** to auto-load a list of records from a data file or a database table.  
**(W)** |  **_Window_** |  Panel object created as a window. Default type when a new panel object is created. (The _Dialogue_ attribute is **_not_** selected in the **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.md)**.)  
  
_(The "Dh" object type was added in PxPlus 2021.)_  
  
_Title_ |  Displays contents of the _Title_ attribute in the **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.md)**. Defaults to the text entered in the _Name_ field when the object was first created.  
_Revised Date_ |  Date and time stamp identifying the most recent modification.  
_By_ |  User ID of the person responsible for the most recent modification. If the panel is a generated **[File Maintenance](../../Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** panel, the words _(File Maint.)_ will display next to the User ID.  
  
When the **Library Object Selection** window is first accessed, the Object list is initially sorted in ascending order by _Object Name_. To change the sort order, click on a column heading. An up or down arrow displays above the selected column heading to indicate the sort order. The current sort sequence is retained after accessing an individual object from the list and returning to the **Library Object Selection** window, as well as after copying or deleting objects from the list. This feature is available when using the _Button View_ , _Toolbar View_ or _Menubar_ _View_ (_Views_ menu).
