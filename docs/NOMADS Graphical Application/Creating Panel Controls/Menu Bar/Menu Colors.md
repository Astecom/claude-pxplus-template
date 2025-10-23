# Menu Bar 

**Menu Colors** |  **__**  
---|---  
  
**_(NOMADS Only)_**

In NOMADS, color can be applied to three areas of a menu: the text color, the background color and the left edge portion of the menu. Colors for the menu can be set by a number of different ways: **[%NOMADS Properties](../../Appendix/NOMADS%20Variables/Overview.htm#properties)**, **[Library Default](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.md)** settings, **[Menu Bar Definition](Menu%20Bar%20Definition.md)** settings, **[Themes](../../System%20Maintenance%20Tools/System%20Options/Themes.md)** Maintenance, and **[Visual Classes](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** Maintenance.

For information on how these various settings work in conjunction with each other, see **[Menu Color Hierarchy](Menu%20Colors.htm#hierarchy)**.

_(The Menu Color hierarchy was added in PxPlus 2024.)_

#### **Note:**  
Menu settings are not applicable to iNomads.

The text and background of an individual menu entry (item, group and link) can also be defined. Colors for a specific item in the menu can be set in the Menu Bar definition.

Settings for color can comprise System Default, dependent on %NOMADS properties, Library Default settings, Themes and Visual Classes and determined by the Menu Color hierarchy, or specific colors, as described in the following table. See **[Color Selections](../../Appendix/Color%20Selections.md)**.

The color format may be one of the following:

**Color Format** |  **Description**  
---|---  
**_Predefined System Color_** |  Dark Gray, Black, Dark Red, Light Red, Dark Green, Light Green, Dark Yellow, Light Yellow, Dark Blue, Light Blue, Dark Magenta, Light Magenta, Dark Cyan, Light Cyan, Light Gray, White  
**_Custom RGB Setting_** |  In the format **RGB:**_nnn_ **_Where:_** _n_ can be 0 to 255. Click on the Color lookup button to select colors from the system color palette or define custom colors.  
**_HTML Hex Color Codes_** |  HTML color codes (search Internet) **_Example:_** #FF0080  
**_User-Defined Color_** |  In the format "**Color** _n_ " **_Where:_** _n_ can be 16 to 255. See **[User Defined Colors](../../System%20Maintenance%20Tools/System%20Options/User%20Defined%20Colours.md)**.  
**_Expression_** |  String expression that evaluates to a color setting, such as a predefined system color, RGB setting, HTML Hex color code, or user defined color.  
**_One of the Special Color Options_** |  _System Default_ is the Windows system color. _Menu Default_ indicates use of the default color settings for the entire menu.  
  
If no left edge color is defined, the system will apply the background color (right/text side) to the left edge of the menu. Only the left edge color applies to the entire menu. The text background color can be set on individual menu entries for an item, group or link.

The option to apply the text and background to the top level of a menu bar is also provided.

##  Menu Color Hierarchy

**_(NOMADS Only)_**

This table explains the different methods that can be used to set menu colors and their order of precedence:

**Method to Set Menu Colors** |  **Description**  
---|---  
**_%NOMADS Properties_** |  These four %NOMADS properties can be used to set the system-wide defaults for the menu: **[%NOMADS'Menu_Text_Clr$](../../Appendix/NOMADS%20Variables/Overview.htm#menutextclr)** **[%NOMADS'Menu_TextBackground_Clr$](../../Appendix/NOMADS%20Variables/Overview.htm#menutextbkgd)** **[%NOMADS'Menu_LeftEdge_Clr$](../../Appendix/NOMADS%20Variables/Overview.htm#menuleftedge)** **[%NOMADS'Menu_Top_Option$](../../Appendix/NOMADS%20Variables/Overview.htm#menutopopt)** If not set, the defaults are Black text on a White background.  
**_Library Defaults_** |  Menu colors can be set at the Library level in **Library Defaults** on the **[Font/Color](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.htm#menuclr)** tab. The Library Default setting will override the system-wide settings.  
**_Menu Bar Definition_** _(entire menu)_ |  Menu colors for the entire menu can be set in the **Define Menu Colors** dialogue, which is invoked from the **[Menu Bar](Menu%20Bar%20Definition.htm#menuclrs)** definition. If set, these colors will override both the Library and the system-wide settings.  
**_Menu Bar Definition_** _(individual item)_ |  _Background_ and _Text_ colors can be set for individual menu items, groups or links on the **Attributes** tab in the **[Item](Creating%20a%20Menu%20Item%20and%20Group.htm#Mark1)**, **[Group](Creating%20a%20Menu%20Item%20and%20Group.htm#Mark1)** or **[Link](Menu%20Link.htm#attributes)** definition. If set, these colors will override all other _Background_ and _Text_ color settings, regardless of where they are set.  
**_Theme_** |  If a Theme is set, the Theme settings will override Library Defaults and the settings in the Menu_Bar definition, **_except_** for settings for individual menu items. They will also override the %NOMADS Properties settings unless any Theme settings are set to _Default_. Themes can have **[Menu_Bar](../../System%20Maintenance%20Tools/System%20Options/Themes_vc%20Menu.md)** and **[Popup_Menu](../../System%20Maintenance%20Tools/System%20Options/Themes_vc%20Popup.md)** definitions to determine _Menu Background Color_ , _Menu Left Edge Color_ , _Menu Text Color_ , _Hover Background Color_ and _Hover Text Color_. Menu_Bar definitions can also specify a _Use Color on Top Level_ option. If a Theme is set that has no Menu_Bar or Popup_Menu definition, then the background and text color from the Theme's Default definition is used.  
**_Visual Class_** |  A Visual Class can be assigned in the **Define Menu Colors** dialogue, which is invoked from the **[Menu_Bar](Menu%20Bar%20Definition.htm#menuclrs)** definition and the **[Popup_Menu](../Popup%20Menu/Overview.htm#menuclrs)** definition. If a Visual Class is set, the Visual Class settings will override Theme settings, Library Defaults and settings in the Menu_Bar definition, **_except_** for settings for individual items. They will also override the %NOMADS Properties settings unless any Visual Class settings are set to _Default_. Visual Class definitions can have Menu_Bar and Popup_Menu definitions to determine _Menu Background Color_ , _Menu Left Edge Color_ , _Menu Text Color_ , _Hover Background Color_ and _Hover Text Color_. Menu_Bar definitions can also specify a _Use Color on Top Level_ option. If a Visual Class is set that has no Menu_Bar or Popup_Menu definition, then the background and text color from the Visual Class's Default definition is used.
