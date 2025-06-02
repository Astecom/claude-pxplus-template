# System Maintenance Tools  
  
**Visual Classes** |  **__**  
---|---  
  
Themes and Visual Classes provide the easiest way in **[NOMADS](../../Introduction.md)** and **[iNomads](../../../iNOMADS/iNOMADS%20Introduction.md)** to define and maintain a unified look and feel to panel controls within your application. With the **[Theme Maintenance](Themes.htm#themesutil)** and **[Visual Classes Maintenance](Visual%20Classes.htm#vcutility)** utilities, you can define default settings for various display properties based on a selected control type and then save each definition with a unique name so that they can be applied or modified when needed.

**_Visual Classes_** are used to define a set of display properties for applying to **_specific controls_** on selected panels (i.e. all buttons with text only).

**[Themes](Themes.md)** are used to define a set of display properties **_for all controls_** based on the control type (i.e. all "Button" types), which can then be applied at different hierarchical levels that cascade to lower levels.

Since Visual Classes apply to specific controls, they **_override_** Theme settings. Visual Classes are particularly useful in cases where unique settings are required (i.e. that do not conform to the applied Theme). For example, you can define a Visual Class to set the _Hover Background Color_ property to "Light Yellow" and apply it only to buttons with text on Panel_A. As a result, hovering over any button with text on Panel_A displays a "Light Yellow" background, while hovering over a bitmap button on the same panel does not.

#### **Note:**  
To take full advantage of NOMADS and the new visual enhancements, **4D** mode is required.

Visual Classes can be defined for the following _Control Types_ :

|  **[Default](Themes_vc%20Dflt.md)** |  **[Drop_Box](Themes_vc%20Dropbx.md)** |  **[Grid](Themes_vc%20Grid.md)** |  **[Popup_Menu](Themes_vc%20Popup.md)** |  **[Shape-Rectangle](Themes_vc%20Rectgle.md)**  
---|---|---|---|---|---  
|  **[Button](Themes_vc%20Btn.md)** |  **[Folder](Themes_vc%20Fldr.md)** |  **[List_Box](Themes_vc%20Listbx.md)** |  **[Radio_Button](Themes_vc%20Radio.md)** |  **[Tristate_Box](Themes_vc%20Tristate.md)**  
|  **[Chart](Themes_vc%20Chart.md)** |  **[Fonted_Text](Themes_vc%20Text.md)** |  **[Menu_Bar](Themes_vc%20Menu.md)** |  **[Shape-Circle](Themes_vc%20Circle.md)** |  **[VarDrop_Box](Themes_vc%20Vardrop.md)**  
|  **[Check_Box](Themes_vc%20Checkbx.md)** |  **[Frame](Themes_vc%20Frame.md)** |  **[Multi_Line](Themes_vc%20Multiln.md)** |  **[Shape-Line](Themes_vc%20Line.md)** |  **[VarList_Box](Themes_vc%20Varlist.md)**  
  
_(The ability to define Themes and Visual Classes for Shapes (Circles, Lines, Rectangles) and Menus was added in PxPlus 2024.)_

To apply a Visual Class, see **[Applying a Visual Class to Your Application](Visual%20Classes.htm#applyingclass)**.

In addition, the **[Copy Theme](Copy%20Theme.md)** utility provides the ability to copy Themes and related Visual Classes from one directory to another. This utility can also be used to create new Themes and Visual Classes.

#### **Note:**  
See [**Query Button Options**](../../Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#options) for special considerations when displaying query buttons.

##  Visual Classes Maintenance Utility

The **Visual Classes Maintenance Utility** is used to define the display properties for creating a Visual Class. Visual Classes created with this utility are stored in the _providex.ccl_ file.

To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Graphical Application Builder (NOMADS)_ category. Then expand the _Setup_ category and select _Visual Classes_.  
From **[Library Object Selection](../../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** |  Select _Visual Class Maintenance_ from the **[Utilities](../../NOMADS%20Development/Library%20Object%20Selection/Menu%20Options.htm#utilities)** menu. _(Visual Class Maintenance was added to the Library Object Selection Utilities menu in PxPlus 2019.)_  
From the **[NOMADS Session Manager](../../NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  From the _Options_ menu, select _Visual Classes_.  
  
The **Visual Classes Maintenance Utility** is displayed below with a sample entry:

> This window consists of the following:

_Class Name_ |  Name of the Visual Class. Maximum 30 characters. Create a new _Class Name_ to be associated with current values. To select an existing Visual Class to modify, click the Query button _(binoculars)_ or use the Browse buttons. If any unsaved changes are detected, you will be prompted to save the changes. Class names are not case sensitive. This allows a different case to be used when typing the same Class name to refer to the **_same_** record (providing that the _Control Type_ also matches). When an existing Visual Class is recalled, the name will be in the case that was entered when the Visual Class was first created. **_Example:_** Suppose that a Visual Class named "ButtonRed" exists for Button controls. Other case variations of this name can be entered to refer to the same Visual Class; e.g. "BUTTONRED", "buttonred" or "BUTTONred". _(Support for case insensitive Class Name was added in PxPlus 2020.)_  
---|---  
_Copy Visual Class Record_ |  **_(Available when an existing Visual Class is selected)_** Button used to copy settings from an existing Visual Class/Control Type to a new Visual Class. Once it is created, **_the new Visual Class must be saved_** , as the Copy process does not do this. _(The Copy Visual Class button was added in PxPlus 2020.)_  
_Class Theme_ |  Optional Theme with which this class definition is associated. By specifying a Theme, you can have a different definition for a particular Visual Class for each Theme. See **[Themes](Themes.md)**. _(Themes support was added in PxPlus 2016.)_  
_Control Type_ |  Control type to be associated with the name of the Visual Class. Click the drop-down arrow for a list of available control types: _Default, Button, Chart, Check_Box, Drop_Box, Folder, Fonted_Text, Frame, Grid, List_Box, Menu_Bar, Multi_Line, Popup_Menu, Radio_Button, Shape-Circle, Shape-Line, Shape-Rectangle, Tristate_Box, VarDrop_Box and VarList_Box_. The control type _Default_ is used to set basic overall properties (_Background_ and _Foreground_ colors, _Font_) for any control types that do not have these properties defined under their own control record in the current Visual Class. _(The ability to define Visual Classes for Circle, Line and Rectangle shapes was added in PxPlus 2024.)_  
_Description_ |  Description of the Visual Class.  
_Property  
Value_ |  A two-column table that lists a sub-set of the properties normally displayed in the design window for a control type, as well as selected properties that are not available in the design window. The list of properties varies depending on the _Control Type_ selected. The properties are grouped into categories (i.e. _Attributes, Colors, Font_ , etc.) and sorted alphabetically within each group by default. These categories can be expanded/collapsed by clicking the **+**_(plus)_ or **-**  _(minus)_ button adjacent to the category name. Only the categories that apply to the selected _Control Type_ are displayed. The method for entering or displaying property values is dependent on the property type. Some fields are intended for entering free-form values; e.g. for height and width. Drop box style cells are identified by a down arrow button, which indicates that pre-set selections are available. Query style cells are identified by a three-dotted button. These cells are often associated with more than one field, and clicking the button invokes a separate dialog for entering/changing field values. The dialog that is invoked varies depending on the property. Double clicking inside the cell either invokes the same dialog as the dotted button or allows values to be entered directly into the cell. _(The ability to double click inside a Query style cell was added in PxPlus 2023.)_  
_Write_ |  Adds/updates the current record.  
_Delete_ |  Removes the current record.  
_Clear_ |  Clears the current record.  
_Exit_ |  Closes the **Visual Classes** window. If any unsaved changes are detected, you will be prompted to save the changes. (Same applies when using the **X** (Close) button.)  
  
##  Applying a Visual Class to Your Application

Once Visual Classes have been defined, they can be applied to specific panel controls by using any of the methods in the table below.

Applying a Theme does not impact the **[Toolkit Theme](System%20Defaults.htm#Mark4)**, which is the Theme used by the development system, but it does impact the following user facing applications: **[Report Writer](../../../Report%20Writer/Introduction.md)**, **[Views](../../../Views%20System/Introduction.md)**, **[Query](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.md)** and **[Customizer](../../Customizer/Overview.md)**.

**Location** |  **Method**  
---|---  
From **[Library Object Selection](../../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** |  Assign a Visual Class from the **_library_** level by selecting _Visual Class Assignment_ from the **Utilities** menu. See **[Visual Class Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**.  
From the **[NOMADS Panel Designer](../../Panel%20Designer/Introduction.md)** |  Assign a Visual Class from the **_panel_** level by selecting _Visual Class Assignment_ from the **Utilities** menu. See **[Visual Class Assignment (Panel Level)](../../Panel%20Designer/Options%20and%20Utilities/Visual%20Class%20Assignment%20\(Panel%20Level\).htm)**.  
From the **[NOMADS Panel Designer](../../Panel%20Designer/Introduction.md)** |  Assign a Visual Class to a **_specific_** control by accessing that control's properties window and selecting the **Font/Color** tab.  
**[Library Bulk Edit and Search Utility](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)** |  This utility can be used to apply a Visual Class simultaneously to controls in multiple panels either in a single library or in multiple libraries within a specified directory.  
**[Panel Bulk Edit Utility](../../Panel%20Designer/Options%20and%20Utilities/Bulk%20Edit%20Utility.md)** |  This utility can be used to apply a Visual Class simultaneously to more than one control in the current panel.  
  
## See Also

**[Themes](Themes.md)**
