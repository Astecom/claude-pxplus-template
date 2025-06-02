# Creating Panel Controls

**Popup Menu** |  **__**  
---|---  
  
Popup menus are designed to "pop up" over the current window when you right-click on selected panel controls (buttons, multi-lines, list boxes, etc.). They are much like the drop-down menus appearing on a menu bar, except that they can be placed anywhere on the panel and are only visible when invoked.

The definition of a popup menu is similar to other menus in that you can provide a list of items where each one triggers a different event. While a **[Menu Bar](../Menu%20Bar/Overview.md)** contains multiple menus and has a fixed location along the top of a panel, popups remain invisible until the user right-clicks on a popup-enabled control.

A system popup menu consisting of extraction, search and print options can also be added to any grid or list box (except Tree Views). See **[List Box and Grid System Popup Menu](List%20Box%20and%20Grid%20System%20Popup%20Menu.md)**.

##  Popup Menu Definition

Unlike standard menus, popup menus do not belong to a specific panel and are considered separate _library objects_ (listed in **[Library Object Selection](../../NOMADS%20Development/Library%20Object%20Selection/Overview.md)** with a _Type_**P** designation).

The **Menu Bar Definition** dialogue is used to create and edit popup menu objects. It is invoked from Library Object Selection in a few ways: by clicking the _Menu_ button (if using **[Toolbar View](../../NOMADS%20Development/Library%20Object%20Selection/Menu%20Options.htm#views)**), by selecting _Objects_ > _Popup Menu Object_ on the menu bar, or by double clicking on a listed popup menu object.

You can also select the **[Menu Bar Definition](../../NOMADS%20Development/Menu%20Bar%20Def_ide.md)** task on the IDE Main Launcher.

_(The Menu Bar Definition task on the IDE was added in PxPlus 2023 Update 1.)_

#### **Note:**  
When entering a new name for a popup menu object, valid characters are: letters (A-Z, a-z); numbers (0-9); **~**  _(tilde)_ ; **@**  _(at symbol)_ ; **.**  _(period)_ ; **$**  _(dollar sign)_ ; **_**  _(underscore)_ ; **-**  _(dash)_ ; **+**  _(plus sign)_. If an invalid character is used, a message will display.

A sample popup menu definition is displayed below:

> This dialogue consists of the following:

**Groups** |  Lists the currently defined groups or menu levels. This shows existing <Top Level> menu definitions, if any. If subordinates are added to a menu item, a menu expansion symbol (**+**) appears next to the menu item. **_Example:_** A "&Sales" menu item with the subordinate "&Commissions" would display in the **Groups** list box as "+ &Sales".  
---|---  
_Contents Of_ |  Lists the sub-menus that belong to a menu's group. This allows you to add subordinates to menu groups (up to eight levels). Double-click on an existing item or group to edit its properties.  
  
The **_toolbar_** consists of the following:

_Save_ |  Saves the current menu definition.  
---|---  
_Delete Menu_ |  Deletes the entire menu definition currently selected.  
_New Item_ |  Invokes **[Menu Item/Group Definition](../Menu%20Bar/Creating%20a%20Menu%20Item%20and%20Group.md)** for defining a new item.  
_New Group_ |  Invokes **[Menu Item/Group Definition](../Menu%20Bar/Creating%20a%20Menu%20Item%20and%20Group.md)** for defining a new group.  
_Menu Link_ |  Invokes **[Menu Link Definition](../Menu%20Bar/Menu%20Link.md)** for defining a menu link.  
_Delete Item_ |  Deletes a selected menu item or group (same as pressing the Delete key). If selecting a group, its subordinate groups and items are also deleted.  
_Cut_ |  Cuts the selected menu item or group (all subordinates included).  
_Copy_ |  Copies the selected menu item or group (all subordinates included).  
_Paste_ |  Pastes a copied/cut item or group to the highlighted position. Items or groups can be pasted to another level in the same menu bar or to a menu bar on a different panel. If pasting a copied/cut item or group with an Alt key that is currently assigned to an existing item or group, a **Duplicate Alt Key** dialogue will display to allow a different Alt key to be selected. _(The Duplicate Alt Key dialogue was added in PxPlus 2019.)_  
_Move Up/Down_ |  Changes the order of the selected item or group within the _Item_ list box.  
_Suppress System Edit Options_ |  **_(Multi-Lines Only)_** Check box to suppress system edit options (i.e. Cut, Copy, Paste, etc.) from the right-click popup menu.  
_Menu Colors_ |  **_(NOMADS Only)_** Click this button to invoke the **Define Menu Colors** dialogue to define menu colors specific to this menu. _(The Menu Colors button was added in PxPlus 2024.)_ See **[Menu Colors](../Menu%20Bar/Menu%20Colors.md)** to determine how to define colors and how the various colors are applied at run time. This dialogue consists of the following: |  **Menu Colors** |  |  _Text_ |  Applies a text color to the menu items. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
---|---  
_Background_ |  Applies a background color to the menu. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
_Edge_ |  Applies a background color to the left edge portion of the menu. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
  
_(The renaming of the options "Item Color" to "Background" and "Edge Color" to "Edge" was added in PxPlus 2024.)  
(The "Text" option was added in PxPlus 2024.)_  
  
**Visual Class** |  Assign a visual class to the menu. Click the Visual Class Maintenance button to launch the **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** utility for creating or editing visual classes. To assign visual classes to controls at the **_library_** level, see **[Visual Class Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**.

#### **Note:**  
Visual class names that begin with an "***** " _(asterisk)_ are predefined visual classes used by PVX Plus and may be subject to change without notice.  
  
Many of these same options and properties are used to create standard menus. To define the menu bar attributes for a panel, see **[Menu Bar Definition](../Menu%20Bar/Menu%20Bar%20Definition.md)**.

You can also create and edit a popup menu via the Panel Designer. See **[Applying a Popup Menu](Applying%20a%20Popup%20Menu.md)**.

**_Adding a Popup Menu to a Project_**

You can also select to add the popup menu to a new or existing project by selecting _Projects_ from the menu bar. The following options are available:

_Create New Project_ |  Launches the **[Create Project](../../../PxPlus%20IDE/IDE%20Main%20Launcher.htm#createproject)** dialogue for entering a new project for the current working directory. Click the Query button to select a different working directory.  
---|---  
_Add to Project_ |  Launches the **Add to Project** dialogue for adding the current task to an existing project that is selected from the _Project_ drop box. To manage all the tasks within a project, see **[Project Maintenance](../../../Project%20Maintenance.md)**. For information on adding tasks to a project from other locations, see **[Adding Tasks to Projects from Other Locations](../../../PxPlus%20IDE/Adding%20Tasks%20to%20Projects%20from%20Other%20Locations.md)**.  
  
## See Also

**[List Box and Grid System Popup Menu](List%20Box%20and%20Grid%20System%20Popup%20Menu.md)**
