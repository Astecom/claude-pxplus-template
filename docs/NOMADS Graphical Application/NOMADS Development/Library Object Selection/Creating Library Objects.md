# Library Object Selection 

**Creating Library Objects** |  **__**  
---|---  
  
The **Library Object Selection** window provides the tools for creating and editing the different panel, dialogue, and window object definitions that make up a graphical user interface. See **[Maintaining Library Objects](../Maintaining%20Library%20Objects/Overview.md)** for information on the various tools available for maintaining object definitions at the library level.

#### **Note:**  
When entering a new name for panel, query, file maintenance and popup menu objects, valid characters are: letters (A-Z, a-z); numbers (0-9); **~**  _(tilde)_ ; **@**  _(at symbol)_ ; **.**  _(period)_ ; **$**  _(dollar sign)_ ; **_**  _(underscore)_ ; **-**  _(dash)_ ; **+**  _(plus sign)_. If an invalid character is used, a message will display.

## Panel Object

A panel provides the graphical user interface layout for the control objects required to interact with your application.

From the **Library Object Selection** window, a panel object can be created or edited using the **[Panel Designer](../../Panel%20Designer/Introduction.md)** by clicking the _Panel_ button on the toolbar _(if using Toolbar View)_ , by selecting _Objects > Panel Object_ from the menu bar, or by double-clicking on a listed panel object.

You can also select the **[Panel Definition](../Panel%20Def_ide.md)** task on the IDE Main Launcher.

The Panel Designer allows you to place controls on your panel from the Controls toolbar, associate code with events for the panel and the controls on it, and test your panel at any time.

See **File Maintenance** below.

##  Query Object

A query object consists of a panel that displays records from a data file and returns a value associated with a record selected by the user (default is the value in the first column). A query object may be defined based on an existing data dictionary definition, an ODBC data source, or a manually defined file with no embedded dictionary.

From the **Library Object Selection** window, a query object can be created or edited by clicking the _Query_ button on the toolbar _(if using Toolbar View)_ , by selecting _Objects > Query Object_ from the menu bar, or by double-clicking on a listed query object.

You can also select the **[Query Definition](../Query%20Def_ide.md)** task on the IDE Main Launcher.

See **[Query Subsystem](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.md)** for information on defining and using query objects.

##  File Maintenance

File maintenance panel objects can be created automatically for any data files defined via the NOMADS **[Data Dictionary Maintenance](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** window. The file maintenance program is invoked by the object to write, update, and delete records, as well as browse the file.

A file maintenance object may be generated as a single panel or a folder with sub-panels. Placement of the edit and browse buttons, the acknowledgement and confirmation messages to be displayed, and the update logic to be used are all customizable.

From the **Library Object Selection** window, a file maintenance (or inquiry-only) panel object can be created using the **[File Maintenance Generator](../../Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** by clicking the _File Maint_ button on the toolbar _(if using Toolbar View)_ or by selecting _Objects > File Maint_ from the menu bar.

You can also select the **[File Maintenance Generator](../File%20Maint_ide.md)** task on the IDE Main Launcher.

The File Maintenance Generator provides a simple seven-step process that, when completed, generates new NOMADS panels and/or Webster+ HTML pages as file maintenance or inquiry-only panels.

_(The File Maintenance Generator was added in PxPlus 2019.)_

## Popup Menu

Popup menus are menu objects that appear when the user right-clicks the mouse while the pointer is over a selected control or panel area. They appear much like the drop-down menus on a menu bar except that they can be placed anywhere on the panel and are invisible until they are invoked.

From the **Library Object Selection** window, a **[Popup Menu](../../Creating%20Panel%20Controls/Popup%20Menu/Overview.md)** object can be created or edited by clicking the _Menu_ button _(if using Toolbar View)_ , by selecting _Objects > Popup Menu Object_ from the menu bar, or by double-clicking on a listed popup menu object.

You can also select the **[Menu Bar Definition](../Menu%20Bar%20Def_ide.md)** task on the IDE Main Launcher.

Popups can also be associated with a specific panel control via the **[Panel Designer](../../Panel%20Designer/Introduction.md)**. A popup menu can also be applied to the **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.md)** so that right clicking the mouse on any blank area on the panel will launch a popup.
