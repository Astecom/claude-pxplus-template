# Themes and Visual Classes

**Folder Properties**|   
---|---  
  
This table lists all the **_Folder_** properties:

**Property** |  **Description**  
---|---  
**Display**  
_Do Not Extend Active Tab Width_ |  Active tab will remain the same width as inactive tabs when using sidebar folders. _(Do Not Extend Active Tab Width property was added in PxPlus 2024.)_  
_Frame Style_ |  Determines the style level and bevel sizes in creating the frame (Fixed value or numeric Expression). This is only used if (at run time) only one sub-panel exists. Click the drop-down arrow for a list of selections: _As is, None, 3D Frame, Recessed Frame, Raised Frame, Top/Bottom line_.

#### **Note:**  
_Frame Style_ is applicable only to **[Tabless Folders](../../Creating%20Panel%20Controls/Folder%20Controls/Tabless%20Folders.md)** and to folders with _Tab Position_ set to _Left Sidebar_ or _Right Sidebar_.  
  
_Sidebar Tab Height_ |  **_(Applicable to Sidebar Folders Only)_** Height of the sidebar folder tabs. If not specified, the value of **[%NOMADS'SidebarFolderTabHeight](../../Appendix/NOMADS%20Variables/Overview.htm#sidebartabheight)** will be used. If neither are set, the default height is 2.5 lines. _(Sidebar Tab Height property was added in PxPlus 2018.)_  
_Tab Offset_ |  **_(Not Applicable to Tabless Folders)_** This option is used only when the _Tab Position_ selected is _Left_ (or _Right_) _Sidebar_. It determines the distance by which the starting line of the folder tabs will be offset from the starting line of the folder control.  
_Tab Position_ |  **_(Not Applicable to Tabless Folders)_** Tabs placement. Click the drop-down arrow for a list of selections to indicate where the folder tabs will be drawn on the folder region: _As is, Top, Bottom, Left Sidebar, Left (Rotated), Right Sidebar, Right (Rotated)_.

#### **Note:**  
_Left (Rotated)_ and _Right (Rotated)_ tab positions do **_not_** support bitmaps and images.  
  
_Tab Width_ |  **_(Not Applicable to Tabless Folders)_** Uniform width to be used for all tabs. When the _Tab Position_ selected is _Top, Bottom, Left (Rotated)_ or _Right (Rotated)_ , you can either enter a tab width or leave it blank. Leaving it blank will trigger NOMADS to automatically calculate the tab width by using the folder width and the number of tabs. When the _Tab Position_ selected is _Left Sidebar_ or _Right Sidebar_ , a tab width must be entered, as NOMADS will not automatically calculate it if left blank. Format mask: ###.  
**Colors**  
_Click the dotted_ _Query button or double click inside the cell to access_ **[Color Selections](../../Appendix/Color%20Selections.md)** _. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions._ _After a color property is set, a tick in the selected color displays in the top left corner. A floating tip with a sample of the selected color displays when hovering the mouse over the color setting._ _(The color tick and color tip were added in PxPlus 2018.)  
__(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
_Background_ |  Background color of the folder panel and a folder tab in its default state. To just set the folder tab color, set the _Background_ property to _Default_ and then set the **[Tab Color](Themes_vc%20Fldr.htm#tab_color)** property under **Colors (States)** below. To set a gradient color for the folder tabs, set the _Tab Color_ and **[Tab Color 2](Themes_vc%20Fldr.htm#tab_color2)** properties under **Colors (States)** below. These will override the tab color set in the _Background_ property.  
_Foreground_ |  Foreground text color on a tab in its default state.  
**Colors (States)**  
_Click the dotted_ _Query button or double click inside the cell to access_ **[Color Selections](../../Appendix/Color%20Selections.md)** _. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions._ _After a color property is set, a tick in the selected color displays in the top left corner. A floating tip with a sample of the selected color displays when hovering the mouse over the color setting._ _(The Color (States) category for Folder controls was added in PxPlus 2022.)_  
_Active Tab Border Color_ |  **_(NOMADS Only)_** Color of the active folder tab border on sidebar tabs. _(Active Tab Border Color property was added in PxPlus 2024.)_  
_Active Tab Color_ |  **_(NOMADS Only)_** Background color of the folder tab when the folder is active. See _Active Tab Color 2_ below. _(Active Tab Color property was added in PxPlus 2022.)_  
_Active Tab Color 2_ |  **_(NOMADS Only)_** Used in conjunction with _Active Tab Color_ to generate a two-color gradient fill on the folder tab when the folder is active. The gradient fill starts with the _Active Tab Color_ at the top and flows to the _Active Tab Color 2_ at the bottom. _Active Tab Color**must**_ be specified; otherwise, _Active Tab Color 2_ will be ignored. _(Active Tab Color 2 property was added in PxPlus 2022.)_  
_Active Text Color_ |  **_(NOMADS Only)_** Foreground text color of the folder tab when the folder is active. _(Active Text Color property was added in PxPlus 2022.)_  
_Disable Tab Border Color_ |  **_(NOMADS Only)_** Color of the disabled folder tab border on sidebar tabs. _(Disable Tab Border Color property was added in PxPlus 2024.)_  
_Disable Tab Color_ |  **_(NOMADS Only)_** Background color of the folder tab when the folder is disabled. See _Disable Tab Color 2_ below. _(Disable Tab Color property was added in PxPlus 2022.)_  
_Disable Tab Color 2_ |  **_(NOMADS Only)_** Used in conjunction with _Disable Tab Color_ to generate a two-color gradient fill on the folder tab when the folder is disabled. The gradient fill starts with the _Disable Tab Color_ at the top and flows to the _Disable Tab Color 2_ at the bottom. _Disable Tab Color**must**_ be specified; otherwise, _Disable Tab Color 2_ will be ignored. _(Disable Tab Color 2 property was added in PxPlus 2022.)_  
_Disable Text Color_ |  **_(NOMADS Only)_** Foreground text color of the folder tab when the folder is disabled. _(Disable Text Color property was added in PxPlus 2022.)_  
_Hover Tab Border Color_ |  **_(NOMADS Only)_** Color of the folder tab border on sidebar tabs while hovering. _(Hover Tab Border Color property was added in PxPlus 2024.)_  
_Hover Tab Color_ |  **_(NOMADS Only)_** Background color of the folder tab when the mouse is over the tab. See _Hover Tab Color 2_ below. _(Hover Tab Color property was added in PxPlus 2022.)_  
_Hover Tab Color 2_ |  **_(NOMADS Only)_** Used in conjunction with _Hover Tab Color_ to generate a two-color gradient fill on the folder tab when the mouse is over the tab. The gradient fill starts with the _Hover Tab Color_ at the top and flows to the _Hover Tab Color 2_ at the bottom. _Hover Tab Color**must**_ be specified; otherwise, _Hover Tab Color 2_ will be ignored. _(Hover Tab Color 2 property was added in PxPlus 2022.)_  
_Hover Text Color_ |  **_(NOMADS Only)_** Foreground text color of the folder tab when the folder is disabled. _(Hover Text Color property was added in PxPlus 2022.)_  
_Tab Border Color_ |  **_(NOMADS Only)_** Color of the folder tab border on sidebar folders. _(Tab Border Color property was added in PxPlus 2024.)_  
_Tab Color_ |  **_(NOMADS Only)_** Background color of the folder tab when in its normal state. See _Tab Color 2_ below. When set, this will override the tab color set in the **[Background](Themes_vc%20Fldr.htm#background)** property above. _(Tab Color property was added in PxPlus 2022.)_  
_Tab Color 2_ |  **_(NOMADS Only)_** Used in conjunction with _Tab Color_ to generate a two-color gradient fill on the folder tab when in its normal state. The gradient fill starts with the _Tab Color_ at the top and flows to the _Tab Color 2_ at the bottom. _Tab Color**must**_ be specified; otherwise, _Hover Tab Color 2_ will be ignored. _(Tab Color 2 property was added in PxPlus 2022.)_  
**Font**  
_Font_ |  Click the dotted Query button or double click inside the cell to specify font properties and attributes such as _Bold_ , _Italics_ , _Alignment_ (default: _Left Justify_), _Word Wrap_ , etc. See **[Font Properties](Font%20Properties.md)**. _(The Use 'Font Name' only check box option was added in PxPlus 2025.)_  
**Other**  
_iNomads Class_ |  Assign an iNomads class to the control. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined classes, see [**iNomads Classes**](../../../iNOMADS/iNomads%20Classes.md). _(iNomads Class property was added in PxPlus 2020.)_  
  
## See Also

**[Themes](Themes.md)**  
**[Visual Classes](Visual%20Classes.md)**
