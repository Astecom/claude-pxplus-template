# Folder Controls 

**Folder Properties** |  **__**  
---|---  
  
When creating or editing a _Folder_ control, the **Tabs/Folder Properties** dialogue (pictured below using the **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** version of the NOMADS designer) is displayed:

> This dialogue is divided into the following tabbed panels for viewing and/or changing tabs and Folder properties: **[Tabs](Folder%20Properties.htm#tabs)**, **[Font/Color](Folder%20Properties.htm#font)** and **[Display](Folder%20Properties.htm#display)**.

_Name_ |  Unique name of the Folder control (NOMADS provides a default). Naming conventions for variables apply. Click the Browse Library button to copy parameters from an existing object (via the **[Library Browse](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Library%20Browse.md)** dialogue).

#### **Note:**  
When a new control name is entered, it will be checked against the [**Reserved Words**](../../../Reserved%20Words.md) list to determine if it is restricted for use as a NOMADS control name. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_  
  
---|---  
**Preview** |  Displays how the visible properties of the control will appear at run time.  
**Tabs**  
**Tabs Definition** |  Define the sub-panels/tabs for the selected Folder. See **[Adding and Modifying Sub-Panels](Adding%20and%20Modifying%20Sub-Panels.md)**. |  _Tabless_ _Folder_ |  A tabless Folder does not have visible tabs, but only a frame surrounding the region (wizard style). See **[Tabless Folders](Tabless%20Folders.md)**.  
---|---  
_Preserve Controls_ |  Select this check box if the sub-panels will be using controls containing large amounts of data and there will be movement between the different Folder tabs. See **[Preserve Controls](Preserve%20Controls.md)**.  
_Auto Advance_ |  Determines if focus will automatically advance to the next Folder when tabbing forward from the last control on a Folder. Click the drop-down arrow for a list of selections: |  _Default_ |  Based on the **[%NOMADS'FolderAdvance](../../Appendix/NOMADS%20Variables/Overview.htm#folderadvance)** setting.  
---|---  
_Off (Advance to main panel)_ |  Tabbing from the last control on a Folder will proceed to the next control after the Folder on the main panel. The current Folder will not change.  
_Advance to next folder tab_ |  Tabbing from the last control on a Folder will advance to the next Folder and place focus on the Folder tab. If it is the last Folder, then focus will advance to the next control after the Folder on the main panel.  
_Advance to first control on next folder_ |  Tabbing from the last control on a Folder will advance to the next Folder and place focus on the first control. If it is the last Folder, then focus will advance to the next control after the Folder on the main panel.  
_Advance to next folder tab loop_ |  Tabbing from the last control on a Folder will advance to the next Folder and place focus on the Folder tab. If it is the last Folder, then focus will return to the first Folder and place focus on the Folder tab, resulting in a tab loop. _(The Advance to next folder tab loop option was added in PxPlus 2021 Update 1.)_  
_Advance to first control on next folder loop_ |  Tabbing from the last control on a Folder will advance to the next Folder and place focus on the first control. If it is the last Folder, then focus will return to the first Folder and place focus on the first control, resulting in a tab loop.

#### **Important Note:**  
At least one enabled control **_must_** be on one of the folders.

_(The Advance to first control on next folder loop option was added in PxPlus 2021 Update 1.)_  
  
#### **Note:**  
If the Folder is defined as a **[Tabless Folder](Tabless%20Folders.md)**, then the _Advance to next folder tab_ option will be overridden with the _Advance to first control on next folder_ option, as there are no Folder tabs on which to place focus.  
  
_(The Auto Advance option was added in PxPlus 2018.)_  
  
**Font/Color**  
**Font Specification** |  |  _Font  
Size_ |  Click the drop-down arrow for a list of selections.  
---|---  
**Color** |  |  _Foreground  
Background_ |  Set the foreground and background colors for the folder tabs. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
---|---  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
  
**Attributes** |  |  Optional attributes for _Bold, Italics,_ etc.  
---  
_Tab Stop_ |  Adds the control to the tab order list. Allows use of the Tab key for moving to the control.  
_Alignment_ |  Sets the text alignment on the tabs. Click the drop-down arrow for a list of selections: _Left Justify_ , _Center_ and _Right Justify_.  
**Visual Class** |  Assign a visual class to the control. Click the Visual Class Maintenance button to launch the **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#vcutility)** utility for creating or editing visual classes. To assign visual classes to controls at the **_library_** level, see **[Visual Class Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**.

#### **Note:**  
Visual class names that begin with an "*" _(asterisk)_ are pre-defined visual classes used by PVX Plus and may be subject to change without notice.

_(The Visual Class Maintenance button was added in PxPlus 2019.)_  
**iNomads Class** |  Assign an iNomads class to the control. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**.  
**Display**  
**Tabs** |  |  _Tabless_ _Folder_ |  See **[Tabs Definition](Folder%20Properties.htm#tabsdef)**.  
---|---  
_Position_ |  **_(Not Applicable to Tabless Folders)_** See **[Tabless Folders](Tabless%20Folders.md)**. Tabs placement. Click the drop-down arrow for a list of selections to indicate where the Folder tabs will be drawn on the Folder region: _Top, Bottom, Left Sidebar, Left (Rotated), Right Sidebar, Right (Rotated)_. To move between tabs at run time, first make sure that focus is on a tab and then use the left/right or up/down arrow keys.

#### **Note:**  
_Left (Rotated)_ and _Right (Rotated)_ tab positions do **_not_** support bitmaps and images.  
  
_Width_ |  **_(Not Applicable to Tabless Folders)_** See **[Tabless Folders](Tabless%20Folders.md)**. Uniform width to be used for all tabs. When the selected _Position_ is _Top, Bottom, Left (Rotated)_ or _Right (Rotated)_ , you can either enter a tab width or leave it blank. Leaving it blank will trigger NOMADS to automatically calculate the tab width by using the Folder width and the number of tabs. When the selected _Position_ is _Left Sidebar_ or _Right Sidebar_ , a tab width must be entered, as NOMADS will not automatically calculate it if left blank. Format mask: _###_.  
_Do Not Extend Tab Width When Active_ |  **_(Sidebar Folders Only)_** By default, active tabs extend beyond inactive tabs. When this option is selected, the active tab width stays the same width as inactive tabs.  
_Height_ |  **_(Sidebar Folders Only)_** Height of the sidebar Folder tabs. If not specified, the value of **[%NOMADS'SidebarFolderTabHeight](../../Appendix/NOMADS%20Variables/Overview.htm#sidebartabheight)** will be used. If neither is set, the default height is 2.5 lines.

#### **Note:**  
The height of the tabs will automatically be adjusted smaller if the tabs will not fit in the allotted vertical space next to the Folder.  
  
_Offset_ |  **_(Not Applicable to Tabless Folders)_** See **[Tabless Folders](Tabless%20Folders.md)**. This option is used only when the selected _Position_ is _Left Sidebar_ or _Right_  _Sidebar_. It determines the distance by which the starting line of the Folder tabs will be offset from the starting line of the Folder control.  
  
_(The Height option was added in PxPlus 2017.)  
(Support for up/down arrow key tab navigation was added in PxPlus 2019.)  
(The Do Not Extend Tab Width When Active option was added in PxPlus 2024.)_  
  
**Frame Style** |  Determines the style level and bevel sizes in creating the frame (_Fixed_ value or numeric _Expression_). This is used if (at run time) only one sub-panel exists. Click the drop-down arrow for a list of _Fixed_ selections: _None, 3D Frame, Recessed Frame, Raised Frame_ and _Top/Bottom line_.

#### **Note:**  
**Frame Style** is applicable only to **[Tabless Folders](Tabless%20Folders.md)** and to Folders with **[Tabs Position](Folder%20Properties.htm#position)** set to _Left Sidebar_ or _Right Sidebar_.  
  
**Properties** |  |  _Include Scroll Buttons_ |  **_(Not Applicable to Tabless Folders)_** See **[Tabless Folders](Tabless%20Folders.md)**. If this option is enabled ** _and_** the number of sub-panels assigned to the Folder exceeds the actual Folder region, then NOMADS will determine how many tabs can be displayed and draw two scroll buttons along the Folder region. Use these buttons to display the next/prior tab.  
---|---  
_Preserve Controls_ |  See **[Tabs Definition](Folder%20Properties.htm#tabsdef)**.  
_Auto Advance_ |  See **[Tabs Definition](Folder%20Properties.htm#tabsdef)**.  
  
_(The Auto Advance option was added in PxPlus 2018.)_  
  
**Position** |  |  _Column_ |  Starting column for the top left corner of the Folder - numeric expression. Format mask is ##0.00. Valid entries are 0 to 620.  
---|---  
_Line_ |  Starting line for the top left corner of the Folder - numeric expression. Format mask is ##0.00. Valid entries are 0 to 255.  
  
_(Support for increased Column and Line maximums was added in PxPlus 2021.)_  
  
**Size** |  |  _Width_ |  Width of the Folder in number of columns - numeric expression. Format mask is ##0.00. Valid entries are 0 to 620.  
---|---  
_Height_ |  Height of the Folder in number of lines - numeric expression. Format mask is ##0.00. Valid entries are 0 to 255.  
  
_(Support for increased Width and Height maximums was added in PxPlus 2021.)_  
  
_Security_ |  Security restrictions. See **[Restricting Access](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.md)** for information on **Object Security Definition**.  
_Notes_ |  Add notes/comments for the control. Maximum 1024 characters. These notes also display in the Wiki Help documentation for the panel. See **[NOMADS Wiki Help](../../System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**. _(The Notes button was added in PxPlus 2023.)_
