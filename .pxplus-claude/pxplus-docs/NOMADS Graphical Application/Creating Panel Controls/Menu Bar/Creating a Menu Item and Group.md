# Menu Bar 

**Creating a Menu Item and Group** |  **__**  
---|---  
  
The **Menu Item/Group Definition** dialogue is used to define the properties of a new item or group. It is invoked from the **[Menu Bar Definition](Menu%20Bar%20Definition.md)** dialogue by clicking the _New Item_ or _New Group_ toolbar buttons or by right clicking inside the _Item_ list box and selecting _New Item_ or _New Group_.

> This dialogue is divided into the following tabbed panels: **[Details](Creating%20a%20Menu%20Item%20and%20Group.htm#Mark2)** and **[Attributes](Creating%20a%20Menu%20Item%20and%20Group.htm#Mark1)**.

**Details**  
---  
**Item/Group** |  |  _Item_ |  Item name. A selection character prefixed by an **&**  _(ampersand)_ is **_mandatory_** in each item or group. When the menu is displayed, the selection character will be underlined, which identifies it as a hot key that, when pressed in conjunction with the Alt key, activates the selection. If the **&**  _(ampersand)_ is not already present, NOMADS inserts it before the first character. Alt keys cannot be duplicated. If saving an item or group with an Alt key that is currently assigned to an existing item or group, a message will display, and a different Alt key must be selected. As items are added, they are displayed in the _Item_ list box in the **[Menu Bar Definition](Menu%20Bar%20Definition.md)** dialogue.  
---|---  
_Function_ |  Logic to be executed when the item is selected. Click the drop-down arrow for a list of selections: |  _Ignore_ |  No logic to be performed. **_(Default)_**  
---|---  
_Call_ |  Call a program.  
_Link_ |  Invoke another panel passing optional arguments.  
_Jumpto_ |  Process a new panel, passing all variables.  
_Perform_ |  Perform a program.  
_Execute_ |  Execute a series of statements separated by semi-colons.  
_Merge-Jumpto_ |  Process a new panel as a concurrent panel.  
_Help_ |  Launch Help reference.  
_End_ |  Terminate panel.  
Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
_Item State_ |  Initial state of the menu item at run time. Click the drop-down arrow for a list of selections: |  _Show Item_ |  Displays the item name as listed.  
---|---  
_Suppress Item_ |  Removes the item from the menu bar.  
_Disable Item_ |  Displays the item, but functionality is disabled.  
For a **Popup Menu** attached to an input control, you can suppress or disable a menu item when that control has no value entered.  
_Include Line Separator_ |  Check box to apply a separator line below menu item text.  
  
_(The Merge-Jumpto function was added in PxPlus 2019.)_  
  
**Menu Override Options** |  |  _Function_ |  Override logic to be executed on menu build. Click the drop-down arrow for a list of selections: |  _Ignore_ |  No logic to be performed. **_(Default)_**  
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
If specifying an external image, set the background color of the image to use the Light Gray color **RGB:192,192,192** with the **G** transparency option; otherwise, the background color will be visible.

_(The ability to enter an expression for a bitmap was added in PxPlus 2019.)_  
  
**Item Colors** |  **_(NOMADS Only)_** |  _Background / Text_ |  Assign a background and/or text color for an individual menu item. See **[Menu Colors](Menu%20Colors.md)**. Click the drop-down arrow for a list of selections: |  _Menu Default_ |  Use the color settings for the entire menu set in Menu Colors. See **[Menu Bar Definition](Menu%20Bar%20Definition.md)**.  
---|---  
_System Default_ |  Default colors for the session. Dependent on %NOMADS properties, Library Default settings, Themes and Visual Classes.  
_Specify Color_ |  Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Setting a specific color on an individual menu item will override all other menu background and text color settings.  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_
