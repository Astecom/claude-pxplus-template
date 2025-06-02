# Step 6: File Maintenance Field Layout

**Adding a Folder**|   
---|---  
  
A Folder control can be added to any row on the Main panel, **_except_** on a row containing a Key field. If no _Folder Location_ is specified, the Folder control will be added to the bottom of the Main panel.

**_To add a Folder control:_**

1. |  Select the **[Folder](Folder.htm#folderchbx)** check box.  
---|---  
2. |  Click the **[Folder Options](Folder.htm#folderoptions)** button (beside the _Folder_ check box) to specify the Folder properties (folder height, tab placement, tab width/height, etc.).  
3. |  Click the **[Maintain Folder Tabs](Folder.htm#foldertabs)** button to add the Folder tabs.  
4. |  To specify the Folder location on the Main panel, right click on a row and select the **[Folder Location](Field%20Layout.htm#folderloc)** option from the popup menu. The row displays the text _* Folder Location *_ , and the row size changes to a _Full_ section if it was not a _Full_ section before (i.e. _Half_ , _Third_ , _Quarter_ or _Flex_). If the row contains data dictionary fields, the field(s) will be returned to the _Fields_ list box. If the row contains object controls, a message will display prior to removing the object(s).  
  
_(Support to automatically format the row as a Full section when specifying the Folder location was added in PxPlus 2025.)_  
  
**_With Folder Location specified_** |    
**_Preview of NOMADS panel_**  
---|---  
  
If no _Folder Location_ is specified, the Folder control will be added to the bottom of the Main panel:

  
**_Without Folder Location specified_** |    
**_Preview of NOMADS panel_**  
---|---  
  
This table describes the options that are used to add a Folder control:

_Folder_ |  Select this check box to set up Folder sub-panels. For information about folders in NOMADS panels, see **[NOMADS Folder Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Overview.md)**. For information about folders in Webster+ HTML pages, see **[Webster+ Folders/Tabs](../../../Webster/Webster%20Folders%20Tabs.md)**.  
---|---  
_(Folder Options)_ |  **_(Available when Folder check box is selected)_** Button (beside the _Folder_ check box) that launches the **Folder Options** window for specifying Folder properties. When only _HTML Page_ is selected as the **[Form Type](Object%20Definition.htm#formtype)** in **Step 1: Definition** , the options that are not applicable are not displayed, as shown in the second screen shot: |  |    
**_When only "HTML Page" is selected_**  
---|---  
  
This window consists of the following:

**Folder Options** |  |  _Tab Position_ |  Tabs placement. Click the drop-down arrow for a list of selections to indicate where the folder tabs will be drawn on the folder region: _Top**(Default)** , Bottom, Left Sidebar, Right Sidebar_ and _Web (Top)_. The _Bottom_ and _Right Sidebar_ options do not apply to HTML pages. _(The Web (Top) tab position was added in PxPlus 2021.)_  
---|---  
_Tab Width_ |  **_(Applicable for NOMADS Panels Only)_** Uniform width to be used for all tabs. **_Default_** is 10.  
_Auto Advance_ |  **_(Applicable for NOMADS Panels Only)_** Determines if focus will automatically advance to the next folder when tabbing forward from the last control on a folder. Click the drop-down arrow for a list of selections: |  _Default_ |  Based on the **[%NOMADS'FolderAdvance](../../Appendix/NOMADS%20Variables/Overview.htm#folderadvance)** setting.  
---|---  
_Off (Advance to main panel)_ |  Tabbing from the last control on a folder will proceed to the next control after the folder on the Main panel. The current folder will not change.  
_Advance to next folder tab_ |  Tabbing from the last control on a folder will advance to the next folder and place focus on the folder tab. If it is the last folder, then focus will advance to the next control after the folder on the Main panel.  
_Advance to first control on next folder_ |  Tabbing from the last control on a folder will advance to the next folder and place focus on the first control. If it is the last folder, then focus will advance to the next control after the folder on the Main panel.  
_Advance to next folder tab loop_ |  Tabbing from the last control on a folder will advance to the next folder and place focus on the folder tab. If it is the last folder, then focus will return to the first folder and place focus on the folder tab, resulting in a tab loop. _(The Advance to next folder tab loop option was added in PxPlus 2021 Update 1.)_  
_Folder Height_ |  **_(Applicable for HTML Pages Only)_** Enter the height of the Folder control on the HTML page. Leave as _Auto**(Default)**_ to have the height calculated automatically based on the controls within the Folder. _(The Folder Height option was added in PxPlus 2021.)_  
_Offset_ |  **_(Applicable for NOMADS Panels Only - Available when Tab Position is Left Sidebar or Right Sidebar)_** Determines the distance by which the starting line of the folder tabs will be offset from the starting line of the Folder control.  
_Tab Height_ |  **_(Applicable for NOMADS Panels Only - Available when Tab Position is Left Sidebar or Right Sidebar)_** Height of the sidebar folder tabs. If not specified, the value of **[%NOMADS'SidebarFolderTabHeight](../../Appendix/NOMADS%20Variables/Overview.htm#sidebartabheight)** will be used. If neither is set, the default height is 2.5 lines.

#### **Note:**  
The height of the tabs will automatically be adjusted smaller if the tabs will not fit in the allotted vertical space next to the folder.  
  
_Frame Style_ |  **_(Applicable for NOMADS Panels Only - Available when Tab Position is Left Sidebar or Right Sidebar)_** Determines the style level and bevel sizes in creating the frame. This is used if (at run time) only one sub-panel exists. Click the drop-down arrow for a list of selections: _None, 3D Frame, Recessed Frame, Raised Frame, Top/Bottom line_.  
**Visual Class** |  **_(Applicable for NOMADS Panels Only)_** Assign a **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** to the Folder control for setting up default settings such as font, color and various attributes.  
_OK_ |  Saves any changes and closes the **Folder Options** window.  
_Exit_ |  Closes the **Folder Options** window saving any changes.  
_Panel (or Current Tab_ _)_ |  Indicates the current panel being defined (i.e. Main panel or a Folder tab). When the _Folder_ check box is selected, the fonted text changes from _Panel_ to _Current Tab_ , and the _Maintain Folder Tabs_ button next to the drop box is enabled. New tabs can be added either by typing the new tab name in the drop box and then pressing Enter or by clicking the _Maintain Folder Tabs_ button. Use the _Current Tab_ drop box to view a list of the tabs created (if applicable) and to select the tab or Main panel for which the field layout will be defined.  
_(Maintain Folder Tabs)_ |  **_(Available when Folder check box is selected)_** Button (next to the _Current Tab_ drop box) that launches the **File Maintenance Panel Tabs** window. This window is used to add, delete or rename folder tabs on the file maintenance panel.

#### **Note:**  
A maximum of **_nine_** folder tabs can be created; otherwise, a message will display. If more tabs are required, use the NOMADS Panel Designer to edit the Folder control once the file maintenance panel is generated. To edit a Folder control, see **[Folder Properties](../../Creating%20Panel%20Controls/Folder%20Controls/Folder%20Properties.md)**.

This window consists of the following: |  _New Tab_ |  Enter the name for the new tab. The new tab is added to the list of tabs.  
---|---  
_(List Box)_ |  Lists the tabs in the order of appearance on the file maintenance panel.  
_Up/Down_ |  Changes the order of the tabs on the file maintenance panel.  
_Rename_ |  Launches a separate window for changing the name of a selected tab.  
_Delete_ |  Removes the selected tab and all of its contents. Prior to deleting the tab, a message will display.  
  
_(The Rename button was added in PxPlus 2021.)_
