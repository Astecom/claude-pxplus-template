# Menu Bar   
  
**Menu Link** |  **__**  
---|---  
  
The **Menu Link** feature is used to incorporate an existing menu as part of another menu bar or popup menu, which provides several advantages:

  * A set of standard menus could be stored (and maintained) together in a library of their own for reusability - deploy these on your menu via Menu Link.
  * If you implement **[NOMADS Security](../../System%20Maintenance%20Tools/Security%20Manager/Overview.md)**, you can simply omit the menu from the library where a user should be restricted from viewing it - a link to a menu that does not exist on the system does not error.
  * You may want to reuse menus that appear in another library.



The link can be to a **[Popup Menu](../Popup%20Menu/Overview.md)** or to a panel containing a **[Menu Bar](Overview.md)** definition.

## Menu Link Definition

In the **[Menu Bar Definition](Menu%20Bar%20Definition.md)** dialogue, click the _Menu Link_ button to invoke **Menu Link Definition**.

> This dialogue is divided into two tabbed panels for defining the properties of a menu link: **[Details](Menu%20Link.htm#details)** and **[Attributes](Menu%20Link.htm#attributes)**.

**Details**  
---  
**Menu Link** |  |  _Item_ |  Item name. A prefixed ampersand is mandatory.  
---|---  
_Item State_ |  Initial state of the menu item at run time. Click the drop-down arrow for a list of selections: |  _Show Item_ |  Displays the item text as listed.  
---|---  
_Suppress Item_ |  Removes the item from the menu bar.  
_Disable Item_ |  Displays the item but functionality is disabled.  
_Fixed**or** Expression_ |  |  _Fixed_ |  Apply Library, Panel values listed in fields _below._  
---|---  
_Expression_ |  Apply string variable or expression.  
_Library_ |  If _Fixed_ is selected, this field shows the current library. Click the Browse button to change libraries.

#### **Note** :  
The Library name may be a specific or generic reference. See [**Cascading Language Suffixes**](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md).  
  
_Panel_ |  Click the drop-down arrow to select a popup menu or panel object from the list.  
**Override Menu Options** |  |  _Function_ |  Override logic to be executed on menu build. Click the drop-down arrow for a list of selections: |  _Ignore_ |  No logic to be performed. **_(Default)_**  
---|---  
_Perform_ |  Perform a program.  
_Execute_ |  Execute a series of statements separated by semi-colons.  
See **[Menu Override Variables](Menu%20Override%20Variables.md)**.  
  
Click the Program Logic button beside the _Perform_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_.

_(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
  
**Attributes**  
**Bitmaps** |  |  _Normal_ |  Assign a bitmap that will appear to the left of the text when the menu is drawn. Can be a _Fixed_ value or string _Expression_. Click the Bitmap Library button to select a bitmap. If specifying an external image, see **Note** below.  
---|---  
_Checked_ |  Assign a bitmap that will appear to the left of the text when the menu is drawn. Can be a _Fixed_ value or string _Expression_. Click the Bitmap Library button to select a bitmap. If specifying an external image, see **Note** below.  
  
Bitmap/Image transparency options can also be applied to internal and external images:

|  **T** |  Use upper leftmost pixel color.  
---|---|---  
|  **G** |  Use Light Gray color RGB: 192,192,192.  
|  **N** |  No transparency. (Allows override for "!" bitmaps, which always imply Light Gray transparency.)  
  
#### **Note:**  
If specifying an external image, set the background color of the image to use the Light Gray color **RGB 192,192,192** with the **G** transparency option; otherwise, the background color will be visible.

_(The ability to enter an expression for a bitmap was added in PxPlus 2019.)_  
  
**Text Background Color** |  Assign a text background color. Click the drop-down arrow for a list of selections: |  _Menu Default_ |  Indicates use of the default color settings for the entire menu.  
---|---  
_System Default_ |  Windows system color.  
_Specify Color_ |  Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**.  
  
See **[Menu Colors](Menu%20Colors.md)**.

_(The Color Selections Query button and dialog were added in PxPlus 2020.)_
