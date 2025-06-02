# Maintaining Library Objects

**Library Bulk Edit and Search Utility**|   
---|---  
  
The **Library Bulk Edit and Search** utility provides a quick and convenient way to apply property changes simultaneously to controls in multiple panels either in a single library or in multiple libraries within a specified directory.

After defining the criteria for filtering your selections (i.e. the pathname of the library or directory, control type and filter options), clicking the **[Find Controls](Library%20Bulk%20Edit.htm#findctrls)** button launches the search. Controls that match the criteria are displayed in the **[Selected Controls](Library%20Bulk%20Edit.htm#controls)** list box. You can specify the **[Properties to Edit](Library%20Bulk%20Edit.htm#properties)** for selected panel headers or panel controls that are in multiple panels in the same library or in different libraries within the same directory.

Using this utility, you can easily standardize the appearance of panel headers and panel controls over an entire library.

The **[Search Library](Library%20Bulk%20Edit.htm#searchlib)** button invokes a concurrent **Search** window for defining filter criteria to search the records in a selected library file. The **[Customize](Library%20Bulk%20Edit.htm#customize)** button in the **Search** window launches a window for selecting which columns to display in the Search list box.

_(The Library Bulk Edit utility was added in PxPlus 2017 and renamed to Library Bulk Edit and Search in PxPlus 2023 Update 1.)  
(The Search Library button was added in PxPlus 2023 Update 1.)  
(The Customize button was added in PxPlus 2024.)_

#### **Important Note!**  
Prior to running this utility, it is strongly recommended to **_first make a backup of your original library file(s)_** because any panel and control changes applied using this utility cannot be reversed.

To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Graphical Application Builder (NOMADS)_ category. Then expand the _Utilities_ category and select _Library Bulk Edit_.  
From **[NOMADS Library Object Selection](../Library%20Object%20Selection/Overview.md)** |  Select _Utilities > Library Bulk Edit_ from the menu bar.  
From the **[NOMADS Session Manager](../Getting%20Started.htm#sessionmgr)** |  Select _Utilities > Library Bulk Edit_ from the menu bar.  
  
The **Library Bulk Edit and Search** utility is displayed. Below is a sample entry showing search results and the properties to be edited.

> This window consists of the following:

_Type_ |  Select _Library_ to specify the pathname of a particular library file. _(**Default:** Library)_ Select _Directory_ to specify the pathname of a particular directory in which the library files are located. If accessing this utility from the **[PxPlus IDE Main Launcher](../../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** or **[NOMADS Session Manager](../Getting%20Started.htm#sessionmgr)**: Enter the pathname of the library file or directory in the adjacent input control or click the Query button. If accessing this utility from **[NOMADS Library Object Selection](../Library%20Object%20Selection/Overview.md)**: The _Type_ drop box defaults to _Library_ , and the pathname of the current library file is displayed in the adjacent input control. (Both are set to _view only_.)  
---|---  
_Search Library_ |  Button that invokes a **Search** window for defining filter criteria to search the records in the selected library file. This window consists of the following: |  **File** |  **_(Display Only)_** Full pathname of the selected file.  
---|---  
**Filter** |  **_(Optional)_** Filter options used to define the search criteria. |  _Expression_ |  Select this check box to enter an expression as the filter value in the multi-line input. If the expression evaluates to 1 (true), the records are loaded into the list box. **_Examples:_** _Example 1_ \- Find all Multi-Line controls with the Locked attribute set: _OBJ_TYPE$="M" and POS("L"=_OBJ_STS$) _Example 2_ \- Find all Fonted Text controls that do not have the "TEST" Visual Class: _OBJ_TYPE$="F" and NOT(UCS(_OBJ_VISUAL_CLASS$)="TEST") _Example 3_ \- Find all dialog or window panels with a height greater than or equal to 35: POS(_OBJ_TYPE$="DW") and _OBJ_H>=35

#### **Note:**  
When the _Expression_ check box is selected, the _Regular Expression_ , _Case-Sensitive_ and _Is Not_ check boxes are disabled.  
  
---|---  
_Regular Expression_ |  Select this check box to enter a regular expression as the filter value in the multi-line input. This value will be used as the _mask$_ parameter in the **[MSK( )](../../../functions/msk.md)** function (along with the entire record string as the _string$_ parameter). If the **MSK( )** function evaluates to 1 (true), the records are loaded into the list box. **_Examples:_** _Example 1_ \- Find any records containing BUTTON_ or BT_ (this may find all button controls if naming convention starts control names with BUTTON_ or BT_): BUTTON_**|** BT_ _Example 2_ \- Find any records containing Hex code 01 ($01$): \x01

#### **Note:**  
When the _Regular Expression_ check box is selected, the _Expression_ , _Case-Sensitive_ and _Is Not_ check boxes are disabled.  
  
_Case-Sensitive_ |  **_(Available when Expression check box is not selected)_** Select this check box if the filter value entered in the multi-line input is case-sensitive. (By default, this check box is not selected.)  
_Is Not_ |  **_(Available when Expression check box is not selected)_** Select this check box if you want the search to exclude records in which the filter value was found. (By default, this check box is not selected.)  
_(Multi-line input)_ |  Used for entering a free-form filter value. If either the _Expression_ or _Regular Expression_ check box is selected, enter an expression. If the filter value is case-sensitive, select the _Case-Sensitive_ check box.  
_Search_ |  Launches the search process for the specified criteria. If matches are found, the list box will be populated with records matching the search criteria. If no matches are found, the list box will be blank and a message will display.  
_Customize_ |  Launches the **Customize Search** window for selecting (or deselecting) the columns to display in the Search list box based on any variables in the library file IOList. The _Key_ value is always displayed in the first column. By default, the __obj_nme$_ , __obj_type$_ and __init_val$_ variables display in the subsequent columns. _(The Customize button was added in PxPlus 2024.)_ This window consists of the following: |  _Select/Deselect All_ |  Check box that is used to either select or deselect all the check boxes (in the _Select_ column) beside the listed variables.  
---|---  
_(Variables Grid)_ |  Lists all the variables in the library file IOList. Variables that display in the Search list box by default will show the _Select_ check box as checked. To select (or deselect) variables, click the _Select_ check box beside individual variables or use the _Select/Deselect All_ check box.  
_OK_ |  Exits the **Customize Search** window and updates the columns in the Searc**h** list box based on the selected variables. If no variables were selected, the Search list box will display four columns for the _Key_ and the defaulted variables.  
_Exit_ |  Exits the **Customize Search** window without updating the Search list box.  
_(List Box)_ |  Displays a list of records matching the search criteria, if found. Although only four columns are displayed, all fields in the record are searched. The four column headings consist of the primary Key and the NOMADS variables __obj_nme$_ , __obj_type$_ and __init_val$_. See **[NOMADS Library Variables](../../../appendix/Nomads%20Library%20Variables.md)**. Click the **[Customize](Library%20Bulk%20Edit.htm#customize)** button to select (or deselect) the columns to be displayed in the Search list box. To sort the list box columns in ascending/descending order, click on the column headings.  
_(Right Click Menu)_ |  Right click on a record in the Search list box to display a popup menu with the following options: |  _Details_ |  Invokes the **Record Details** window for the selected record (same as clicking the _Details_ button).  
---|---  
_List Options_ |  Invokes the **[List Box and Grid System Popup Menu](../../Creating%20Panel%20Controls/Popup%20Menu/List%20Box%20and%20Grid%20System%20Popup%20Menu.md)**.  
  
_(The Search list box right click popup menu was added in PxPlus 2024.)_  
  
_Details_ |  If matching records are found, click on a record inside the list box and then click the _Details_ button to invoke the **Record Details** window. This concurrent window displays the details for the selected record and stays open when another record in the list box is selected for viewing. Double clicking on a record also invokes this window. The columns in the **Record Details** window can be sorted in ascending/descending order by clicking on the column headings.  
_Exit_ |  Closes the **Search** window.  
  
#### **Note:**  
All records in the library file will be included in the search with the exception of records created by the **[File Maintenance Generator](../../Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** for the purposes of regenerating file maintenance panels.

_(The Search Library button was added in PxPlus 2023 Update 1.)_  
  
_Include Sub-Directories_ |  **_(Available when Type is Directory)_** Select this check box to further define the search criteria by including library files found in the sub-directories of the specified directory. (By default, the _Include Sub-Directories_ check box is **_not_** selected.) When _Type_ is _Library_ , this check box is **_not_** displayed. _(The Include Sub-Directories check box was added in PxPlus 2018.)_  
_Control Type_ |  Select the type of control. _(Default is All Controls.)_

#### **Note:**  
When a _Control Type_ is selected, the **Properties to Edit** grid is automatically loaded with a list of related properties.

Available selections are listed alphabetically below (except for _Panel Header_ and _Library Defaults_ , which are listed last). Click the link for information about the control type. |  |  _All Controls_ |  **_(Default)_**  
---|---|---  
|  _Button_ |  See **[Button Control](../../Creating%20Panel%20Controls/Button%20Control/Overview.md)**.  
|  _Chart_ |  See **[Chart Control](../../Creating%20Panel%20Controls/Chart%20Control/Chart.md)**.  
|  _Check Box_ |  See **[Check Box and Tri-State Control](../../Creating%20Panel%20Controls/Check%20Box%20and%20Tri-State%20Control/Overview.md)**.  
|  _External Control_ |  See **[External Control](../../Creating%20Panel%20Controls/COM%20Control/COM%20Control.md)**.  
|  _Drop Box_ |  See **[Drop Box Control](../../Creating%20Panel%20Controls/Drop%20Box%20Control/Drop%20Box%20Properties.md)**.  
|  _Embedded Panel_ |  See **[Embedded Panels](../../Creating%20Panel%20Controls/Embedded%20Panels/Overview.md)**.  
|  _Folder_ |  See **[Folder Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Folder%20Properties.md)**.  
|  _Fonted Text_ |  See **[Fonted/Fixed Text Control](../../Creating%20Panel%20Controls/Text%20Control/Text.md)**.  
|  _Frame_ |  See **[Box/Frame Control](../../Creating%20Panel%20Controls/Frame%20Control/Frame.md)**.  
|  _Grid_ |  See **[Grid Control](../../Creating%20Panel%20Controls/Grid%20Control/Grid%20Properties.md)**.  
|  _Horizontal Scroll Bar_ |  See **[Scrollbar Controls](../../Creating%20Panel%20Controls/Scrollbar%20Controls/Overview.md)**.  
|  _Image_ |  See **[Image/Picture Control](../../Creating%20Panel%20Controls/Image%20Control/Image.md)**.  
|  _List Box_ |  See **[List Box Controls](../../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.md)**.  
|  _Multi Line_ |  See **[Multi-Line Control](../../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.md)**.  
|  _Radio Button_ |  See **[Radio Button Control](../../Creating%20Panel%20Controls/Radio%20Button%20Control/Overview.md)**.  
|  _Shape_ |  See **[Shape Control](../../Creating%20Panel%20Controls/Shape%20Control/Shape.md)**.  
|  _Text_ |  See **[Fonted/Fixed Text Control](../../Creating%20Panel%20Controls/Text%20Control/Text.md)**.  
|  _Tristate Box_ |  See **[Check Box and Tri-State Control](../../Creating%20Panel%20Controls/Check%20Box%20and%20Tri-State%20Control/Overview.md)**.  
|  _Variable Drop Box_ |  See **[Drop Box Control](../../Creating%20Panel%20Controls/Drop%20Box%20Control/Drop%20Box%20Properties.md)**.  
|  _Variable List Box_ |  See **[List Box Controls](../../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.md)**.  
|  _Vertical Scroll Bar_ |  See **[Scrollbar Controls](../../Creating%20Panel%20Controls/Scrollbar%20Controls/Overview.md)**.  
|  _Panel Header_ |  See **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.md)**.  
|  _Library Defaults_ |  See **[Library Defaults](Library%20Defaults.md)**. _(The Library Defaults selection was added in PxPlus 2017 Update 0002.)_  
_Filter_ |  **_(Optional)_** The filter options below are used to further define the search criteria for filtering your selections. All the filter options are disabled when the selected _Control Type_ is _Library Defaults_.

#### **Note:**  
When a _Control Type_ is selected, the **Properties to Edit** grid is automatically loaded with a list of related properties.

|  _Expression_ |  Select this check box to enter an expression as the filter value in the multi-line input. If the expression evaluates to 1 (true), the control(s) are loaded into the **Selected Controls** tree view list box.

#### **Note:**  
When the _Expression_ check box is selected, the _Case-Sensitive_ and _Is Not_ check boxes are disabled.  
  
---|---  
_Case-Sensitive_ |  **_(Available when Expression check box is not selected)_** Select this check box if the filter value entered in the multi-line input is case-sensitive. (By default, the _Case-Sensitive_ check box is **_not selected_**.)  
_Is Not_ |  **_(Available when Expression check box is not selected)_** Select this check box if you want the search to **_exclude_** controls in which the filter value was found. (By default, the _Is Not_ check box is **_not selected_**.)  
_(Multi-line input)_ |  Used for entering a free-form filter value. If the _Expression_ check box is selected, enter an expression. If the filter value is case-sensitive, select the _Case-Sensitive_ check box.  
  
**_Examples:_**

The table below contains examples of searches with different search criteria:

**Control Type** |  **Expression** |  **Case-Sensitive** |  **Is Not** |  **Filter Value** |  **Meaning**  
---|---|---|---|---|---  
All |  Not Selected |  Not Selected |  Not Selected |  BT_ |  Find all controls with BT_ as part of their control names  
All |  Not Selected |  Selected |  Not Selected |  BT_ |  Find all controls with uppercase BT_ as part of their control names  
Button |  Not Selected |  Not Selected |  Not Selected |  {! |  Find all Button controls with bitmaps  
Button |  Not Selected |  Not Selected |  Selected |  {! |  Find all Button controls without bitmaps  
Multi-Line |  Selected |  N/A |  N/A |  POS("L"=_OBJ_STS$) |  Find all Multi-Line controls with the _Locked_ attribute set  
Fonted Text |  Selected |  N/A |  N/A |  NOT(UCS(_OBJ_VISUAL_CLASS$)="TEST") |  Find all Fonted Text controls that do not have the "TEST" Visual Class  
  
#### **Note:**  
When the filter value entered is **_not_** an expression, **_all fields_** in the library file record will be searched. This could result in a larger than expected list of controls in the **Selected Controls** tree view list box, as the search will display all controls in which a filter value match was found.  
  
You can try redefining your search criteria to narrow down the search results or exclude unwanted controls from the Library Bulk Edit process by not selecting them in the **Selected Controls** tree view list box.  
  
_Find Controls_ |  Button that launches the search process for filtering your selections. If the search process is expected to take several minutes, an _Abort Load_ button will display in the **Selected Controls** list box. Clicking this button halts the search process but does **_not_** clear the selection criteria or any property changes entered in the **Properties to Edit** grid. This allows any necessary modifications to be made before launching another search. _(The Abort Load button was added in PxPlus 2018 Update 0001.)_ If matches are found, the **Selected Controls** tree view list box will be populated with controls matching your search criteria. If no matches are found, the **Selected Controls** tree view list box will be blank and a message will display. _(The Search button was renamed to Find Controls in PxPlus 2023 Update 1.)_  
**Selected Controls** |  Tree view list box that is used to display a list of controls that match the search criteria, if any are found. Use this list to select the controls to which the properties changes will be applied. See **[Selected Controls](Library%20Bulk%20Edit.htm#controls)**.  
**Properties to Edit** |  Grid that lists the properties for the selected _Control Type_. Use this grid to enter the property changes to be applied to selected controls. See **[Properties to Edit](Library%20Bulk%20Edit.htm#properties)**.  
_Ok_ |  **_(Available when a property value in the Properties to Edit grid is changed)_** Processes the property changes for the selected controls and displays a message upon completion. The **Library Bulk Edit and Search** utility is subsequently closed.  
_Apply_ |  **_(Available when a property value in the Properties to Edit grid is changed)_** Processes the property changes for the selected controls and displays a message upon completion. The **Library Bulk Edit and Search** utility remains open for additional changes (i.e. to different libraries, controls or properties).  
_Clear_ |  Clears selections and leaves the **Library Bulk Edit and Search** utility open.  
_Exit_ |  Closes the **Library Bulk Edit and Search** utility without processing any changes.  
  
##  Selected Controls

Selecting the _Search_ button loads the **Selected Controls** tree view list box with a list of controls (if any found) that match the search criteria entered. Use this list to select the controls to which the properties changes in the **[Properties to Edit](Library%20Bulk%20Edit.htm#properties)** grid will be applied.

  
**_Expanded_ Tree View **(_Control Type selected: All Controls_) |    
**_Collapsed_ Tree View**  
---|---  
  
This tree view list box consists of the following:

_(Tree View)_ |  Lists all the controls (if any found) that match the search criteria entered. This list is used to select the controls to be edited. The tree view structure consists of a **_library_** (highest level), under which are listed the **_panels_** in that library, followed by an indented list of **_controls_** on that panel. | 

  * Each **_library_** node consists of a check box, followed by an image and the full library pathname. Clicking the check box beside a _library_ node selects all panels and panel controls in that library.

  
---  
  
  * Each **_panel_** node consists of a check box, followed by an image indicating the panel type (i.e. Window or Dialog), the panel name, and whether the panel is a "Window" or "Dialog". Clicking the check box beside a _panel_ node selects all controls on that panel.

  
  
  * Each **_control_** node consists of a check box, followed by an image indicating the control type (i.e. Button, Check Box, etc.), the control name, the bitmap name and/or text value associated with the control (i.e. {!exclamation}Button). Depending on the control type, additional details may be displayed, such as chart type (Charts), list box type and list values (List Boxes), shape type (Shapes), embedded panel name and library path name (Embedded Panels), grid format definition (Grids), initial value (Multi-Lines), and user-defined tag field (Scroll Bars).  
_  
(Control node detail enhancements were added in PxPlus 2018.)_

  
  
If the search criteria is based on _Control Type_ = _Panel Header_ , only _library_ and _panel_ nodes are loaded into the **Selected Controls** tree view list box.

If the search criteria is based on _Control Type_ = _Library Defaults_ , only _library_ nodes are loaded into the **Selected Controls** tree view list box.

Right clicking on a _panel_ node or _control_ node invokes a popup menu for quick access to **[Library Object Selection](../Library%20Object%20Selection/Overview.md)** and the **[NOMADS Designer](../../Panel%20Designer/Introduction.md)**. When right clicking on a _library_ node, only the **[Library Object Selection](../Library%20Object%20Selection/Overview.md)** option is available.

_(The right-click popup menu was added in PxPlus 2018.)_

To select all libraries/panels/controls in the tree view, click the _Select All_ button.

#### **Note:**  
A solid square inside a check box indicates that _some_ , not all, of the panels for a library (or controls for a panel) have been selected.  
  
_Collapse (Expand)_ |  Toggle button that is used to either collapse or expand the entire tree view. To collapse or expand a **_single_** "parent" node, click the corresponding **+**  _plus_ or **-**  _minus_ sign. This toggle button is disabled when the selected _Control Type_ is _Library Defaults_.  
_Reset_ |  Button that is used to clear all selected check boxes and reload the tree view.

#### **Note:**  
This button does **_not_** reset the search criteria and the **Properties to Edit** grid.  
  
_Select All (Deselect All)_ |  Toggle button that is used to either select or deselect **_all_** the check boxes in the tree view.  
  
##  Properties to Edit

The **Properties to Edit** grid lists the properties for the selected _Control Type_ and the current value of each property. Use this grid for entering the changes to be applied to selected controls. See **[Selected Controls](Library%20Bulk%20Edit.htm#controls)**. All values entered in the grid are cleared when either the _Clear Properties_ or _Clear_ button is selected.

#### **Note:**  
The same properties changes can be consecutively applied to controls in other libraries or directories if you do not select the _Clear Properties_ or _Clear_ buttons. When neither of these buttons is selected, the properties changes you entered will not be cleared, allowing you to apply these changes to different selections.

> This grid consists of the following:

_Property_ |  Lists the properties for the selected _Control Type_. If _Control Type_ is a specific type (i.e. Button, Check Box, etc.), the grid is loaded with the properties for that control. Position the mouse pointer over the property name to display a floating tip with the variable name. _(The floating tip with the variable name was added in PxPlus 2018.)_ If _Control Type_ is _All Controls_ , the grid is loaded with all properties for **_all_** control types; however, not all properties apply to every control. To find out which controls use a particular property, position the mouse pointer over the property name to display a floating tip with a list of applicable controls. If _Control Type_ is _Panel Header_ , the grid is loaded with **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.htm#properties)** properties. Position the mouse pointer over the property name to display a floating tip with the variable name. _(The floating tip with the variable name was added in PxPlus 2018.)_ If _Control Type_ is _Library Defaults_ , the grid is loaded with properties found in **[Library Defaults](Library%20Defaults.md)**. Position the mouse pointer over the property name to display a floating tip with the variable name. _(The floating tip with the variable name was added in PxPlus 2018.)_ The properties are grouped into categories and sorted alphabetically within each group by default. These categories can be expanded/collapsed by clicking the **+**_(plus)_ or **-**  _(minus)_ button adjacent to the category name. By default, the categories are displayed in the following order: _Name/Type, Events, Coordinates, Display, Attributes, Colors, Font, User Aids, Other_. Only the categories that apply to the selected _Control Type_ are displayed. |  _Name/Type_ |  **_(Available When Control Type is Check Box, Drop Box, List Box, Multi-Line, Tristate Box, Variable Drop Box or Variable List Box)_**  
  
Used to apply and reapply **[Data Classes](../../../Data%20Dictionary/Data%20Classes/Overview.md)** to applicable control types. See **[Applying Data Classes](Library%20Bulk%20Edit.htm#dataclasses)**.  
  
_(Support for applying data classes was added in PxPlus 2018 Update 0001.)_  
---|---  
_Coordinates_ |  Coordinates for the _Height_ (in number of lines) and _Width_ (in number of columns) of a control.  
_Display_ |  Visual display information (i.e. _Implied Decimal, Input Format, Input Length_).  
_Events_ |  Logic that will execute when a particular event occurs (i.e. _On Change_ , _On Focus_ , _Post Create_).  
_Attributes_ |  Control attributes (i.e. _Auto Tab Skip, Bitmap Button, Enable Scrolling_).  
_Colors_ |  _Background_ and _Foreground_ colors of the control or panel.  
_Font_ |  **_(Available When Type of search is "Library")_** Graphic font.  
_User Aids_ |  _Floating Tip, Help Reference, Message Bar_ text.  
_Other_ |  Additional control or panel features (i.e. _User Tag, Visual Class, iNomads Class_).  
  
#### **Note:**  
You can customize the sort order of these property categories and their associated properties. See [**Change Bulk Edit/Property Sort Order**](../../Panel%20Designer/Options%20and%20Utilities/Change%20Sort%20Order.md).  
  
_Value_ |  Displays the current value assigned to a given property. The method for entering or displaying these values is dependent on the property type. Some fields are intended for entering free-form values; e.g. co-ordinates for _Height_ and _Width_. Drop box style cells are identified by a down arrow button, which indicates that pre-set selections are available; e.g. _Tab Stop, Initially Disabled, Enable Scrolling, Object Persistence, Implied Decimal_ , etc. Query style cells are identified by a three-dotted button. These cells are often associated with more than one field, and clicking the button invokes a separate dialog for entering/changing field values. The dialog that is invoked varies depending on the property. Double clicking inside the cell either invokes the same dialog as the dotted button or allows values to be entered directly into the cell. The _As is_ option indicates that the current/default setting for a given property will be maintained "as is" for the controls selected in the **Selected Controls** tree view list box. _(The ability to double click inside a Query style cell was added in PxPlus 2023.)_  
_Clear Properties_ |  Clears all changes made to the property settings in the _Value_ column and reloads the **Properties to Edit** grid based on the _Control Type_ selected.  
  
##  Applying Data Classes

When the _Control Type_ selected is _Check Box, Drop Box, List Box, Multi-Line, Tristate Box, Variable Drop Box_ or _Variable List Box_ , the **Properties to Edit** grid displays a _Data Class_ property that is used to apply or reapply data classes to selected controls.

Select the _Data Class_ (three-dotted) button to launch the **Data Class Options** dialog:

> This dialog allows you to:

|  Reapply the current data class assigned to a control _As is_ to update control properties with the current information in the data class. With the _As is_ check box selected, click the _Reapply Class_ check box, and then click _OK_.  
---|---  
|  Choose an _existing_ data class to be applied. Deselect the _As is_ check box. In the _Class_ field, enter an existing data class by using the Query button (binoculars) or typing a valid data class name.  
|  Create a _new_ data class on-the-fly (either dynamic or not dynamic) to be applied. Deselect the _As is_ check box. In the _Class_ field, enter a new data class name and respond _Yes_ to the displayed message, which launches **[Data Class Definitions](../../../Data%20Dictionary/Data%20Classes/Overview.htm#Mark1)** maintenance.  
|  Clear the current data class assigned to a control. Deselect the _As is_ check box and leave the _Class_ field blank. When the _Apply_ button is selected, the data class will be cleared from selected controls.  
  
If a data class (either dynamic or not dynamic) is selected in the **Data Class Options** dialog, individual control properties in the **Properties to Edit** grid can be manually changed to _Dynamic_ (or a different setting) and then applied to selected controls. See **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**.

_(Support for applying data classes was added in PxPlus 2018 Update 0001.)_

## Completing the Library Bulk Edit Process

Once you have selected the controls to edit (in the **[Selected Controls](Library%20Bulk%20Edit.htm#controls)** tree view list box) and have edited the properties (in the **[Properties to Edit](Library%20Bulk%20Edit.htm#properties)** grid), you are now ready to process the changes. To do this, use either of the following options:

|  Click the _Apply_ button to apply the changes and keep the utility open to make any additional changes (i.e. for a different library or directory).  
---|---  
|  **_OR_**  
|  Click the _OK_ button to apply the changes and close the utility.  
  
To verify that the properties have been changed, access the library/panel using the **[NOMADS Panel Designer](../../Panel%20Designer/Introduction.md)**, which can be invoked from the right-click popup menu within the **[Selected Controls](Library%20Bulk%20Edit.htm#treeview)** tree view.

## See Also

**[Panel Bulk Edit Utility](../../Panel%20Designer/Options%20and%20Utilities/Bulk%20Edit%20Utility.md)**  
**[NOMADS Library Variables](../../../appendix/Nomads%20Library%20Variables.md)**
