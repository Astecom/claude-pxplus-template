# Grid Control 

**Presets** **Definition** |  **__**  
---|---  
  
To aid in the development of grid applications, the NOMADS toolkit supports preset definition records. These presets allow the designer to build a table of properties that can be assigned to columns, rows or individual cells. These are assigned to the grid after it has been created and prior to the execution of the Post Create logic.

## Defining Presets

To define presets, select the **Presets** tab of the **Grid Properties** dialogue. The **Presets** tab allows you to define a maximum of 999 preset records, consisting of _Property_ , _Column_ (Number or Name), _Row_ number and _Value/Expression_.

> The **Presets** tab consists of the following:

_Property List_ |  Determines the contents for the _Property_ drop box list (in **Presets** grid). The selection (if different from the default) is **_not_** saved. Click the drop-down arrow for a list of selections: |  _Show All_ |  **_(Default)_** ** _All_** grid, cell, row **_and_** column properties will display. See **[Grid Properties](../../../control_object_properties/grid_properties.htm#grid_props)**.  
---|---  
_General_ |  Properties applicable to the grid as a whole will display.  
_Cell_ |  Properties applicable to a cell will display. See **[Cell Properties](../../../control_object_properties/grid_properties.htm#cell_props)**.  
_Row_ |  Properties applicable to a row will display. See **[Row Properties](../../../control_object_properties/grid_properties.htm#row_props)**.  
_Column_ |  Properties applicable to a column will display. See **[Column Properties](../../../control_object_properties/grid_properties.htm#column_props)**.  
  
**_Example:_**

  
**_Property drop box when "Show All" is selected_** |    
**_Property drop box when "Row" is selected_**  
---|---  
  
_(The Property List drop box was added in PxPlus 2019.)_  
  
_(Drag and Drop)_ |  _Four-headed arrow_ button used to drag and drop an individual row to a different location within the **Presets** grid to change the order of the rows entered. _(The Drag and Drop button was added in PxPlus 2019.)_  
_Property_ |  Use **_either_** of the following methods to select a property for formatting specific columns, rows or individual cells: |  |  Click the drop-down arrow for a list of grid control object properties. By default, all properties are available. To narrow down this list, select an option from the **[Property List](Presets%20Definition.htm#propertylist)** drop box.  
---|---  
|  Right click on a cell in the _Property_ column to invoke a popup menu with the following categories: _Contents, Display/Color, Formatting, Grid, Interface, Layout, Misc_. Hover the mouse pointer on a category to display a sub-set of associated properties for selection.   
**_Popup menu when right clicking on a cell in the Property column_**  
  
  
  
For selections specific to NOMADS, see **[Data Classes](Presets%20Definition.htm#dataclasses)**, **[Popup Menus](Presets%20Definition.htm#popupmenus)**, **[Queries](Presets%20Definition.htm#queries)** and **[Auto Complete](Presets%20Definition.htm#autocomplete)**.

_(The Property column right-click popup menu was added in PxPlus 2019.)_  
  
_Column (Number/Name)_ |  **_(Available only if applicable for the selected Property)_** Value to be placed in the **'Column** or **'Column$** property (string or numeric). If 0 _(zero)_ is entered, the defined preset is assigned to _all columns_. If **_no_** column names are assigned in **[Grid Format Definition](Formatting%20a%20Grid.md)** (_Format_ button on **Attributes** tab), then _Column_ (in the **Presets** tab) uses a "Normal" cell type. If column names are assigned in **[Grid Format Definition](Formatting%20a%20Grid.md)**, then _Column_ (in the **Presets** grid) uses a _Variable_ drop box that is loaded with the assigned column names. Select a column name from the drop box, type a column name, or enter a numeric value. If the column name is not a valid variable, a message is displayed, and you must enter a value. If the column name is a valid variable but does not match any of the known column names, a warning message informs you of the mismatch, and the value is considered valid. Warning messages are displayed only when the column value is initially entered or changed.  
_Row_ |  **_(Available only if applicable for the selected Property)_** Value to be placed in the **'Row** property. It must be numeric. If 0 _(zero)_ is entered, the defined preset is assigned to _all rows._ If -1 is entered, the defined preset is assigned to the _header row only_.  
_Exp_ |  Check box to indicate that the content of the _Value/Expression_ column is an expression. The default _(Off)_ indicates literal/fixed.  
_Value/Expression_ |  Value that will be assigned to the property. If the value is **_not_** marked as an expression, click the drop-down arrow to access defaults for the selected property (if applicable). The cell type for this column is determined by the selected property. If a color property, such as BackColor, LineColor, etc., is selected, click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**.  
_Insert Above  
Insert Below_ |  Adds a blank row above or below the currently selected row for entering a property. _(The Insert Above/Insert Below buttons were added in PxPlus 2019.)_  
_Duplicate Row_ |  Creates a duplicate of the currently selected row and inserts it below the current row. _(The Duplicate Row button was added in PxPlus 2019.)_  
_Delete_ |  Removes the currently selected row (i.e. removes the preset record).  
_Move Up  
Move Down_ |  Changes the order of the existing rows entered in the **Presets** grid.  
_Apply Column Names_ |  **_(Available only if Column Names exist in Grid Format Definition)_** If column names are assigned in **Grid Format Definition** , clicking this button will replace column number settings (**Presets** grid) with the column name in the _Column (Number/Name)_ column. If no column names are assigned, this button will be disabled. _(The Apply Column Names button was added in PxPlus 2019.)_  
_Format_ |  Button that launches the **[Grid Format Definition](Formatting%20a%20Grid.md)** dialogue for defining grid columns, including _Title, Width, Alignment, Cell Type, Column Name_ and _Column Separator_. _(The Format button was added to the Presets tab in PxPlus 2019.)_  
  
##  Data Classes

Using the **Presets** tab, data classes can be assigned to an entire grid or to individual cells (each is for different purposes) by selecting _Class_ from the _Property_ drop box. The data class assigned to an entire grid is used for NOMADS **[Object-Oriented Programming](../../Program%20Interaction/Object-Oriented%20Programming/Overview.md)**, and it is not validated. When assigning a data class to a cell, the data class is selected from the data classes file (_providex.dcl_) for determining the cell type and properties. See **[Data Classes](../../../Data%20Dictionary/Data%20Classes/Overview.md)**.

If the assigned data class is for a **_Drop Box_** or a **_List Box_** control, the cell will be created as a drop box with information from the data class. If the data class was defined with **_Load From File_** functionality, at run time, the drop box will be populated from the pre-defined data source. See **[Populate from Data Source](../../../Data%20Dictionary/Data%20Classes/Populate%20from%20Data%20Source.md)** for information on defining the **_Load From File_** functionality.

If the assigned data class is for a **_Multi-Line_** control, the cell will be created as a "Normal" text containing one line of data. If a query exists in the data class definition, the cell will be created as a "LookupHideBtn" with a query button that will be hidden except when the cell is selected. If the data class was defined with **[Extended Class Validation](../../../Data%20Dictionary/Data%20Classes/Extended%20Validation.md)**, at run time, when a value is entered, additional table validation will be provided.

_(Support for Load From File functionality in Grids was added in PxPlus 2019 Update 1.)  
(Support for Extended Class Validation in Grids was added in PxPlus 2019 Update 1.)_

##  Popup Menus

A **[Popup Menu](../Popup%20Menu/Overview.md)** can be assigned to an entire grid or to individual cells through the **Presets** tab. Select _Popup_ from the _Property_ drop box. Existing popup objects can be assigned.

**_Assigning an Existing Popup Menu_**

1. |  In the **Presets** tab, select _Popup_ from the _Property_ drop box, and then enter a _Column (Number or Name)_ and a _Row_.  
---|---  
2. |  To assign a popup menu, click the _magnifying glass_ button to the right of the _Value/Expression_ cell to launch the **[Assign Popup Menu](../Popup%20Menu/Applying%20a%20Popup%20Menu.htm#Mark1)** dialogue. The value is passed back to the _Value/Expression_ cell once the dialogue is closed.  
  
##  Queries

A query object can be assigned to an entire grid or to individual cells through the **Presets** tab. Select _Query_ from the _Property_ drop box. If a query is assigned to a cell, the cell will be created as a "LookupHideBtn" with a default bitmap. This bitmap can be overridden during the query assignment. The existing query objects can be easily assigned to a cell.

**_Assigning a Cell Query_**

1. |  On the **Presets** tab, select _Query_ from the _Property_ drop box, and then enter a _Column (Number or Name)_ and a _Row_.  
---|---  
2. |  To assign a query object, click the _magnifying glass_ button to the right of the _Value/Expression_ cell to launch the **Query Display** dialogue. This dialogue allows you to assign a _Panel or Query Program_ as the cell query. Regular and Drop queries are supported when assigning a Panel. See **[Assigning a Query](../../Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#assigningquery)**.  
3. |  At run time, the query value is passed back to the _Value/Expression_ cell when the query is closed.  
  
**_Invoking a Query_**

The query is invoked by clicking the _magnifying glass_ button to the right of the cell or by pressing **Shift - F2**. If a cell does not have a designated query, the default query assigned to the grid is invoked. After the query window is closed, the query return value is loaded into the cell and the On Change logic executes (if defined). See **[Invoking a Query](../../Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.md)**.

## Controlling TAB and ENTER Keys

The '**TabMode** and '**EnterMode** properties allow you to control the behavior of these keys within the grid. See **[Grid Properties](../../../control_object_properties/grid_properties.md)**.

In NOMADS, these properties can be set through the **Presets** tab. The following values can be assigned to these properties:

**** |  **0** \- Normal processing (**Tab** = exit grid, **Enter** = edit cell).  
---|---  
**** |  **1** \- Move across grid horizontally (exit on last column).  
**** |  **2** \- Move across grid and wrap to next line. Last cell wraps to first.  
**** |  **3** \- Move down a row on grid - hold on last row.  
**** |  **4** \- Move down a row on grid and return to column 1 - hold on last row.  
  
Holding the **Shift** key while pressing the **Tab** or **Enter** key forces movement in the opposite direction.

#### **Note:**  
If '**TabMode** is set and the **Enter** key is set to work like the **Tab** key via the **'[+E](../../../mnemonics/+e.md)'** mnemonic or by %NOMAD_ENTER_TAB=1, then the **'TabMode** setting is placed automatically into **'EnterMode**.  
  
You can change **'EnterMode** after setting **'TabMode** if different behavior is desired for **Enter** versus **Tab** on the grid.

##  Auto Complete

Grid **Auto Complete** allows you to preload individual cells with text entry suggestions. This content is assigned via the **Presets** tab of the **Grid Properties** dialogue.

See **[Assigning Auto Complete Entries](../../System%20Maintenance%20Tools/System%20Options/Auto%20Complete.htm#assign_auto_compl_entries)**.
