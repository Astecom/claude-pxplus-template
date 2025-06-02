# Folder Controls   
  
**Adding and Modifying Sub-Panels** |  **__**  
---|---  
  
## Tabs Definition

Once the _Folder_ control is created, you can change property settings to assign new sub-panels or to change various aspects of the control.

The **[Tabs Definition](Folder%20Properties.htm#tabsdef)** grid on the **Tabs/Folder Properties** dialogue is used to add, remove or modify the sub-panels in your folder control.

> The seven basic steps required for defining tab information for each sub-panel are:

**Step** |  **Description**  
---|---  
**Step 1: Name** |  In the **Tabs Definition** grid, type a panel _Name_ or click the drop-down arrow to retrieve a list of available panels for the current library.

#### **Note:**  
When defining **[Tabless Folders](Tabless%20Folders.md)**, it is only necessary to assign values to the Name column.  
  
**Step 2: Title Format** |  Select a _Title Format_ from the drop-down list of selections: _Fixed, Expr, Msg_. Default is _Fixed_.  
**Step 3: Title** |  Enter the text for the _Title_ that will appear in the tab. If the _Title Format_ selected is _Expr_ (Expression), the value entered must be a string variable or text surrounded by quotes. If the _Title Format_ selected is _Msg_ (Message Library Reference), you need to assign the message key, along with optional message arguments. Click the _magnifying glass_ button to invoke the **[Message Library Reference](../../Message%20Library%20Maintenance/Message%20Library%20Reference.md)** dialogue and select an entry from an existing message file.  
**Step 4:_Suppress if not found_ Option** |  To suppress the drawing of a folder, select the _Suppress if not found_ check box. See **[Auto Detection of Folder Tabs](Auto%20Detection%20of%20Folder%20Tabs.md)**.  
**Step 5: Bitmap** |  To add a bitmap or an image to a tab, click the _magnifying glass_ button to invoke the **Bitmaps** dialogue for specifying the bitmap or image to use.

#### **Note:**  
_Left (Rotated)_ and _Right (Rotated)_ **[Tab Positions](Folder%20Properties.htm#position)** do **_not_** support bitmaps and images.  
  
**Step 6: Fill Pattern** |  Select a _Fill Pattern_ to be used. This is the direction in which the fill colors will be applied to the tab. Click the drop-down arrow for a list of selections. |  _Full_ |  Tab is filled with one fill color.  
---|---  
_T/B_ |  Top to bottom.  
_L/R_ |  Left to right.  
_Lines_ |  Use straight lines to fill the region. The first fill color is the background. The second fill color is applied to the lines.  
_TL/BR_ |  Top-left to bottom-right.  
_BL/TR_ |  Bottom-left to top-right.  
_Diag_ |  Use diagonal lines to fill the region. The first fill color is the background. The second fill color is applied to the lines.  
**Step 7: Fill Color** |  Select the _Fill Color_ for the tab. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions. Two colors are required for gradient filling. The first color is the starting color, and the second color is the ending color. Only one color is necessary if the _Fill Pattern_ selected is _Full_. Color settings for individual tabs will override normal tab colors set in **[%NOMADS Properties](../../Appendix/NOMADS%20Variables/Overview.htm#properties_list)** (i.e. %NOMADS'Tab_Folder_Colors$), as well as **[Themes](../../System%20Maintenance%20Tools/System%20Options/Themes.md)** and **[Visual Classes](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** (i.e. Background Color or Tab Color and Tab Color 2). _(The Color Selections dialog was added in PxPlus 2020.)_  
|   
_Insert_ |  Inserts a blank row in the **Tabs Definition** grid for adding a new tab. Defaults are set for the _Title Format, Fill Pattern_ and _Fill Color_. Also available from the popup menu when right clicking on the _Name_ column in the **Tabs Definition** grid.  
_Delete_ |  Removes the selected tab definition. Multiple tab definitions can be removed by highlighting the tabs in the grid and clicking the _Delete_ button. Also available from the popup menu when right clicking on the _Name_ column in the **Tabs Definition** grid.  
_Up  
Down_ |  Changes the order of the tabs on the panel.  
_Panel_ |  Launches the panel that corresponds to the folder tab currently selected in the **Tabs Definition** grid. The panel is launched in a separate NOMADS Panel Designer session to allow any changes to be made if needed. Also available from the popup menu when right clicking on the _Name_ column in the **Tabs Definition** grid. _(The Panel button was added in PxPlus 2020.)_  
  
## See Also

For information on the _Execute Pre-Disp One Time_ and _Execute Post-Disp One Time_ options, see **[Preserve Controls](Preserve%20Controls.md)**.

For information on the Security settings for tabs/folders, see **[Tabs/Folders - Viewing Security Settings](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.htm#tabsfolders)**.

For other attributes that can be defined for a folder control, see **[Auto Detection of Folder Tabs](Auto%20Detection%20of%20Folder%20Tabs.md)** and **[Tabless Folders](Tabless%20Folders.md)**.

#### **Note:**  
NOMADS may produce an error message when attempting to create a folder control that is not large enough to fit an associated sub-panel. See **[Folder Size Errors](Folder%20Size%20Errors.md)**.
