# System Maintenance Tools

**Themes** |  **__**  
---|---  
  
Themes and Visual Classes provide the easiest way in **[NOMADS](../../Introduction.md)** and **[iNomads](../../../iNOMADS/iNOMADS%20Introduction.md)** to define and maintain a unified look and feel to panel controls within your application. With the **[Theme Maintenance](Themes.htm#themesutil)** and **[Visual Classes Maintenance](Visual%20Classes.htm#vcutility)** utilities, you can define default settings for various display properties based on a selected control type and then save each definition with a unique name so that they can be applied or modified when needed.

**_Themes_** are used to define a set of display properties for **_all controls_** based on the control type (i.e. all "Button" types), which can then be applied at different hierarchical levels that cascade to lower levels. They can be applied system wide, to specific libraries, to specific panels and to iNomads templates. For example, you can define a Theme for all "Button" controls to set the _Background_ property to "Light Red". As a result, all Button controls within your application will have a "Light Red" background.

**[Visual Classes](Visual%20Classes.md)** are used to define a set of display properties for applying to **_specific controls_** on selected panels (i.e. all buttons with text only), thereby **_overriding_** Theme settings. Visual Classes are particularly useful in cases where unique settings are required (i.e. that do not conform to the applied Theme).

#### **Note:**  
To take full advantage of NOMADS and the new visual enhancements, **4D** mode is required.

Themes can be defined for the following _Control Types_ :

|  **[Default](Themes_vc%20Dflt.md)** |  **[Drop_Box](Themes_vc%20Dropbx.md)** |  **[Grid](Themes_vc%20Grid.md)** |  **[Popup_Menu](Themes_vc%20Popup.md)** |  **[Shape-Rectangle](Themes_vc%20Rectgle.md)**  
---|---|---|---|---|---  
|  **[Button](Themes_vc%20Btn.md)** |  **[Folder](Themes_vc%20Fldr.md)** |  **[List_Box](Themes_vc%20Listbx.md)** |  **[Radio_Button](Themes_vc%20Radio.md)** |  **[Tristate_Box](Themes_vc%20Tristate.md)**  
|  **[Chart](Themes_vc%20Chart.md)** |  **[Fonted_Text](Themes_vc%20Text.md)** |  **[Menu_Bar](Themes_vc%20Menu.md)** |  **[Shape-Circle](Themes_vc%20Circle.md)** |  **[VarDrop_Box](Themes_vc%20Vardrop.md)**  
|  **[Check_Box](Themes_vc%20Checkbx.md)** |  **[Frame](Themes_vc%20Frame.md)** |  **[Multi_Line](Themes_vc%20Multiln.md)** |  **[Shape-Line](Themes_vc%20Line.md)** |  **[VarList_Box](Themes_vc%20Varlist.md)**  
  
_(The ability to define Themes and Visual Classes for Shapes (Circles, Lines, Rectangles) and Menus was added in PxPlus 2024.)_

To apply a Theme, see **[Applying a Theme to Your Application](Themes.htm#applyingtheme)**.

In addition, the **[Copy Theme](Copy%20Theme.md)** utility provides the ability to copy Themes and related Visual Classes from one directory to another. This utility can also be used to create new Themes and Visual Classes.

#### **Note:**  
See [**Query Button Options**](../../Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#options) for special considerations when displaying query buttons.

##  Themes Maintenance Utility

The **Themes Maintenance Utility** is used to define the display properties for creating a Theme. Themes created with this utility are stored in the _providex.dfs_ file.

To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Graphical Application Builder (NOMADS)_ category. Then expand the _Setup_ category and select _Themes_.  
From **[Library Object Selection](../../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** |  Select _Themes Maintenance_ from the **[Utilities](../../NOMADS%20Development/Library%20Object%20Selection/Menu%20Options.htm#utilities)** menu. _(Themes Maintenance was added to the Library Object Selection Utilities menu in PxPlus 2019.)_  
From the **[NOMADS Session Manager](../../NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  From the _Options_ menu, select _Themes_.  
  
The **Themes Maintenance Utility** is displayed below with a sample entry:

> This window consists of the following:

_Theme_ |  Name of the Theme. Maximum 30 characters. Create a new name to be associated with current property values. To select an existing Theme to modify, click the Query button _(binoculars)_ or use the Browse buttons. If any unsaved changes are detected, you will be prompted to save the changes. Theme names are not case sensitive. This allows a different case to be used when typing the same Theme name to refer to the **_same_** record (providing that the _Control Type_ also matches). When an existing Theme is recalled, the name will be in the case that was entered when the Theme was first created. **_Example:_** Suppose that a Theme named "ButtonRed" exists for Button controls. Other case variations of this name can be entered to refer to the same Theme; e.g. "BUTTONRED", "buttonred" or "BUTTONred". _(Support for case insensitive Theme name was added in PxPlus 2020.)_  
---|---  
_Copy Theme Record_ |  **_(Available when an existing Theme is selected)_** Button used to copy settings from an existing Theme/Control Type to a new Theme. Once it is created, **_the new Theme must be saved_** , as the Copy process does not do this. _(The Copy Theme button was added in PxPlus 2020.)_  
_Control Type_ |  Control type to be associated with the name of the Theme. Click the drop-down arrow for a list of available control types: _Default, Button, Chart, Check_Box, Drop_Box, Folder, Fonted_Text, Frame, Grid, List_Box, Menu_Bar, Multi_Line, Popup_Menu, Radio_Button, Shape-Circle, Shape-Line, Shape-Rectangle, Tristate_Box, VarDrop_Box and VarList_Box_. The control type _Default_ is used to set basic overall properties (_Background_ and _Foreground_ colors, _Font_) for any control types that do not have these properties defined under their own control record in the current Theme. _(The ability to define Themes for Circle, Line and Rectangle shapes was added in PxPlus 2024.)_  
_Property  
Value_ |  A two-column table that lists a sub-set of the properties normally displayed in the design window for a control type, as well as selected properties that are not available in the design window. The list of properties varies depending on the _Control Type_ selected. The properties are grouped into categories (i.e. _Attributes, Colors, Font_ , etc.) and sorted alphabetically within each group by default. These categories can be expanded/collapsed by clicking the **+**_(plus)_ or **-**  _(minus)_ button adjacent to the category name. Only the categories that apply to the selected _Control Type_ are displayed. The method for entering or displaying property values is dependent on the property type. Some fields are intended for entering free-form values; e.g. for height and width. Drop box style cells are identified by a down arrow button, which indicates that pre-set selections are available. Query style cells are identified by a three-dotted button. These cells are often associated with more than one field, and clicking the button invokes a separate dialog for entering/changing field values. The dialog that is invoked varies depending on the property. Double clicking inside the cell either invokes the same dialog as the dotted button or allows values to be entered directly into the cell. _(The ability to double click inside a Query style cell was added in PxPlus 2023.)_  
_Write_ |  Adds/updates the current record.  
_Delete_ |  Removes the current record.  
_Clear_ |  Clears the current record.  
_Exit_ |  Closes the **Themes** window. If any unsaved changes are detected, you will be prompted to save the changes. (Same applies when using the **X** (Close) button.)  
  
##  Applying a Theme to Your Application

Once Themes have been defined, they can be applied at several hierarchical levels within an application. This allows different aspects of your application to be customized with their own unique look and feel.

Applying a Theme does not impact the **[Toolkit Theme](System%20Defaults.htm#Mark4)**, which is the Theme used by the development system, but it does impact the following user facing applications: **[Report Writer](../../../Report%20Writer/Introduction.md)**, **[Views](../../../Views%20System/Introduction.md)**, **[Query](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.md)** and **[Customizer](../../Customizer/Overview.md)**.

This table describes the different hierarchical levels:

**Level** |  **Description**  
---|---  
_General_ |  Assign a Theme to the **[%NOMADS'Theme$](../../Appendix/NOMADS%20Variables/Overview.htm#theme)** property at run time to apply a Theme **_system wide_**. This can be done in your START_UP program or the **[Maintain NOMADS Environment](../../Maintain%20Nomads%20Environment.md)** utility, and is applicable for **_NOMADS and iNomads environments_**.

#### **Note:**  
A Theme assigned to the [**%NOMADS'ThemeOverride$**](../../Appendix/NOMADS%20Variables/Overview.htm#themeoverride) property **_overrides_** all other Theme settings.  
  
See **[Session Override](Themes.htm#sessionoverride)**.  
  
_Library_ |  Assign a Theme in the **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.md)** window (**Font/Color** tab) to apply a Theme to **_all panels in a selected library_**. The **[Library Bulk Edit and Search Utility](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)** can also be used to apply a Theme simultaneously to multiple panels either in a single library or in multiple libraries within a specified directory.

#### **Note:**  
_Library_ Themes **_override_** the _General_ Theme. A Theme assigned to the [**%NOMADS'ThemeOverride$**](../../Appendix/NOMADS%20Variables/Overview.htm#themeoverride) property **_overrides_** all other Theme settings.  
  
See **[Session Override](Themes.htm#sessionoverride)**.

_(Assigning a Theme to a**library** was added in PxPlus 2017.)_  
_Panel_ |  Assign a Theme in the **[NOMADS Panel Header](../../Panel%20Designer/Panel%20Header/Overview.md)** window (**Font/Color** tab) when creating/editing a panel to apply a Theme to the **_controls on a selected panel_**. The **[Library Bulk Edit and Search Utility](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)** can also be used to apply a Theme simultaneously to multiple panels either in a single library or in multiple libraries within a specified directory.

#### **Note:**  
A _Panel_ Theme **_overrides_**  _General_ and _Library_ Themes. A Theme assigned to the [**%NOMADS'ThemeOverride$**](../../Appendix/NOMADS%20Variables/Overview.htm#themeoverride) property **_overrides_** all other Theme settings.  
  
See **[Session Override](Themes.htm#sessionoverride)**.

_(Assigning a Theme to a**panel** was added in PxPlus 2017.)_  
_iNomads Template_ |  In the iNomads environment, assign a _Template_ Theme from the **[iNomads Setup](../../../iNOMADS/iNomads%20Setup.md)** window, which allows access to System Administration Functions such as _Template Settings_. In this window, select the _Options_ button to invoke **[Template Configuration Maintenance](../../../iNOMADS/Template%20Configuration.md)**. In the **Overrides** tab, enter a Theme in the _Assign a Theme_ field.

#### **Note:**  
A Theme assigned to a _Template_ ** _overrides_** the _General_ Theme, as well as any _Library_ and _Panel_ Themes.  
  
A Theme assigned to the [**%NOMADS'ThemeOverride$**](../../Appendix/NOMADS%20Variables/Overview.htm#themeoverride) property **_overrides_** all other Theme settings.  
  
See **[Session Override](Themes.htm#sessionoverride)**.  
  
_Session Override_ |  Assign a Theme to the **[%NOMADS'ThemeOverride$](../../Appendix/NOMADS%20Variables/Overview.htm#themeoverride)** property at run time to apply a Theme **_system wide_**. This can be done in your START_UP program or the **[Maintain NOMADS Environment](../../Maintain%20Nomads%20Environment.md)** utility, and is applicable for **_NOMADS and iNomads environments_**.

#### **Note:**  
The **%NOMADS'ThemeOverride$** property **_overrides_** all other Theme settings **_except_** the **[Toolkit Theme](System%20Defaults.htm#Mark4)**.  
  
When testing your application within the NOMADS development system, your Theme settings will be used when displaying your application panels.

**_Select Application Theme_**

When working within the **[NOMADS Session Manager](../../NOMADS%20Development/Getting%20Started.htm#sessionmgr)** to develop your application, you can apply an existing Theme at the **[General](Themes.htm#general)** level by using the **Select Application Theme** window.

This window is invoked from the **NOMADS Session Manager** , which is launched from the PxPlus Command line by entering **nom**. Then, on the _Options_ menu, choose _Select Application Theme_.

> This window consists of the following:

_Theme_ |  Click the drop-down arrow to select an existing Theme.  
---|---  
_Clear Current Theme_ |  Select this check box to clear a Theme that is currently in use. This option only clears the Theme but does not delete it.  
  
## See Also

**[Visual Classes](Visual%20Classes.md)**  
**[Copy Theme](Copy%20Theme.md)**
