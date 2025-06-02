# Menu Bar   
  
**Menu Bar Definition** |  **__**  
---|---  
  
The **Menu Bar Definition** dialogue is used to define the attributes for a menu bar that will be added along the top of a panel. It is invoked from the **[Panel Designer](../../Panel%20Designer/Introduction.md)** by selecting _Panel_ > _Menus_ on the menu bar.

A sample menu bar definition is displayed below:

> This dialogue consists of the following:

**Groups** |  Lists the currently defined groups or menu levels. This shows existing <Top Level> menu definitions, if any. If subordinates are added to a menu item, a menu expansion symbol (**+**) appears next to the menu item. **_Example:_** A "&Sales" menu item with the subordinate "&Commissions" would display in the **Groups** list box as "+ &Sales".  
---|---  
_Contents Of_ |  Lists the sub-menus that belong to a menu's group. This allows you to add subordinates to menu groups (up to eight levels). Double click on an existing item or group to edit its properties.  
  
The **_toolbar_** consists of the following:

_Save_ |  Saves the current Menu Bar definition. If the _Menu Bar_ attribute has not been set in the **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.htm#attributes)** definition, a message will prompt you to set this attribute.  
---|---  
_Delete Menu_ |  Deletes the entire Menu Bar definition currently selected.  
_New Item_ |  Invokes **[Menu Item/Group Definition](Creating%20a%20Menu%20Item%20and%20Group.md)** for defining a new item.  
_New Group_ |  Invokes **[Menu Item/Group Definition](Creating%20a%20Menu%20Item%20and%20Group.md)** for defining a new group.  
_Menu Link_ |  Invokes **[Menu Link Definition](Menu%20Link.md)** for defining a menu link.  
_Delete Item_ |  Deletes a selected menu item or group (same as pressing the Delete key). If selecting a group, its subordinate groups and items are also deleted.  
_Cut_ |  Cuts the selected menu item or group (all subordinates included).  
_Copy_ |  Copies the selected menu item or group (all subordinates included).  
_Paste_ |  Pastes a copied/cut item or group to the highlighted position. Items or groups can be pasted to another level in the same Menu Bar or to a Menu Bar on a different panel. If pasting a copied/cut item or group with an Alt key that is currently assigned to an existing item or group, a **Duplicate Alt Key** dialogue will display to allow a different Alt key to be selected. _(The Duplicate Alt Key dialogue was added in PxPlus 2019.)_  
_Move Up/Down_ |  Changes the order of the selected item or group within the _Item_ list box.  
_Suppress Help_ |  Check box to remove the _Help_ menu from the Menu Bar. If not set, NOMADS will use the _Help_ file defined in the **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.md)**.  
_Menu Colors_ |  **_(NOMADS Only)_** Click this button to invoke the **Define Menu Colors** dialogue to define menu colors specific to this menu. _(The Menu Colors button was added in PxPlus 2024.)_ See **[Menu Colors](Menu%20Colors.md)** to determine how to define colors and how the various colors are applied at run time. This dialogue consists of the following: |  **Menu Colors** |  |  _Text_ |  Applies a text color to the menu items. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
---|---  
_Background_ |  Applies a background color to the menu. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
_Edge_ |  Applies a background color to the left edge portion of the menu. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
_Apply Menu Colors to Top Menu_ |  Option that is used to apply the _Text_ and _Background_ menu colors to the top level of the menu bar. Available selections are _Default_ , _Yes_ , _No_ : |  _Default_ |  Use the system default setting.  
---|---  
_Yes_ |  Apply the colors to the top menu levels.  
_No_ |  Do not apply the colors to the top menu levels.  
  
_(The renaming of the options "Item Color" to "Background" and "Edge Color" to "Edge" was added in PxPlus 2024.)  
(The "Text" and "Apply Menu Colors to Top Menu" options were added in PxPlus 2024.)_  
  
**Visual Class** |  Assign a visual class to the menu. Click the Visual Class Maintenance button to launch the **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** utility for creating or editing visual classes. To assign visual classes to controls at the **_library_** level, see **[Visual Class Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**.

#### **Note:**  
Visual class names that begin with an "***** " _(asterisk)_ are predefined visual classes used by PVX Plus and may be subject to change without notice.  
  
After saving a new Menu Bar definition, select the _Menu Bar_ check box on the **[Attributes](../../Panel%20Designer/Panel%20Header/Overview.htm#attributes)** tab in the **Panel Header** definition (if not already selected) to display the menu on the panel.
