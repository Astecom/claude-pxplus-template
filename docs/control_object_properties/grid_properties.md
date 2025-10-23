# GRID Create/Control Grid

**GRID Properties**|   
---|---  
  
The Grid control is used to create a table of cells in columns and rows; i.e. a spreadsheet input format. This control can be created either by using the **[GRID](../directives/grid.md)** directive or by using the **[NOMADS Panel Designer](../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** to draw a **[Grid Control](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Grid%20Control/Overview.md)** and apply the desired attributes.

Below are lists of properties that can be applied to the **_entire grid_** , a **_cell_** , a **_column_** or a **_row_**. See **[Grid Properties](grid_properties.htm#grid_props)**, **[Cell Properties](grid_properties.htm#cell_props)**, **[Column Properties](grid_properties.htm#column_props)** and **[Row Properties](grid_properties.htm#row_props)**.

Use the links in the **Property** column below to access the PxPlus Help page for a selected property. The Help page may provide additional details, particularly if the property can be used to define other controls.

For a complete list of all the properties available, see **[Properties List](properties_list.md)**.

Grid controls are a very useful way of dealing with tabular data. However, loading and interacting with a grid can sometimes be slow, especially when working in a WindX environment. For information and examples on the different ways to speed up grid interactions, see **[How to Speed Up Grid Loading and Processing](../How%20To/How%20to%20Speed%20Up%20Grid.md)**.

##  Grid Properties

The table below lists properties that apply to the entire **_grid_**.

**Property** |  **Description**  
---|---  
**[Auto](../properties/auto.md)** |  When set, the control will generate a 'Change' event whenever its value changes as opposed to the default _Off_ state where the control will only generate the change event when losing focus. Possible values are: |  0 |  Only signal change when exiting the control or on special event such as double click/Enter. **_(Default)_**  
---|---  
1 |  Signal all changes to the value of the control regardless of why the change occurred.  
2 |  Signal all changes done by the user but not done by the program.  
**[AutoColSize](../properties/autocolsize.md)** |  This property is used to control the automatic adjustment of column sizes so that the total space occupied by the columns will fill the control width. When this property is set to 1, the system will adjust all columns in the control so that the sum of the column widths will completely fill the control width exclusive of any scrollbars that may be present. Once set, any resizing of the control will again re-apply the automatic columns sizing logic. (**_Default:_** 0 - No automatic column resizing) When adjusting the column sizes, the system will compute the new size based on percentages. **_Example:_** Consider the following - Control has three columns:

  * Column 1 is 40 pixels wide.
  * Column 2 is 10 pixels wide.
  * Column 3 is 50 pixels wide.

If this control had AutoColSize enabled, it would determine that column 1 was 40% of the total column width, column 2 was 10%, and column 3 was 50%. These columns would each be adjusted based on the total width of the control to retain the same percentages. Therefore, if the control itself was 150 pixels wide, column 1 would become 150*40%=60 pixels, column 2 would become 150*10%=15 pixels, and column 3 would become 150*50%=75 pixels.  
**[AutoSequence](../properties/autosequence.md)** |  This property assigns a column number that will contain the automatic row sequence number. (**_Default:_** 0 - No column will be used to show automatic row sequence) PxPlus automatically fills in values of the cells with the appropriate row number. When rows are changed, the column containing the sequence number is automatically updated. _Changing this property forces full redraw of the grid._  
**[AutoTrack](../properties/autotrack.md)** |  This property is used to control the automatic tracking of the contents of a grid relative to movement of the scrollbars (vertical/horizontal). By default, when a scrollbar position is changed by dragging the "thumb", the grid will **_not_** follow the movement until the thumb is released. This reduces the screen re-draw overhead within the system but does not allow the user to view the data during the scroll operation. The 'AutoTrack property can be used to control whether the grid is to be updated while the thumb is being moved -- in effect, having the grid contents track the thumb position. The value in 'AutoTrack determines which, if any, scrollbars will be tracked. Possible values are: |  0 |  The grid will not track thumb movements. (**_Default_**)  
---|---  
1 |  The grid will track thumb movements on the vertical scrollbar.  
2 |  The grid will track thumb movements on the horizontal scrollbar.  
3 |  The grid will track thumb movements on both scrollbars.  
**[BackHilight1$](../properties/backhilight1_.md)** |  Background color, alternating lines: Background color for every second line. (**_Default:_** "DEFAULT") If set to other than the value "DEFAULT", the color set in this property will be used as the background color on every second line in a list. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**.  
**[BackHilight2$](../properties/backhilight2_.md)** |  Background color, alternating three lines: Background color for every third line. (**_Default:_** "DEFAULT") If set to other than the value "DEFAULT", the color set in this property will be used as the background color on every third line in a list. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**.  
**[Border](../properties/border.md)** |  Add border: 1 - Border; 0 - No border (**_Default:_** 1)

#### **Note:**  
Applicable only when using Windows XP or Windows 7 style controls.  
  
**[BringToTop](../properties/bringtotop.md)** |  This property, when set to **_any_** value, will cause the control to be moved to the top of the display order. Once at the top of the display order, the control will appear visually on top of any other control on the window. (**_Default:_** Not Applicable - Always returns 0)  
**[ButtonColor$  
ButtonColour$](../properties/buttoncolor_.md)** |  Background color for system-generated buttons in a grid, including Drop Box buttons and Query buttons. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. This property will also be applied to cells with the **['Lock](../properties/lock.md)** property set to 1 only when creating a **["Button"](../directives/grid.htm#Mark8)** cell type, providing that the **[BackColor$](../properties/backcolor_.md)** property has not been set specifically for that cell. _(The ButtonColor$ property was added in PxPlus 2020.)_  
**[CbMarkColor$  
CbMarkColour$](../properties/cbmarkclr_.md)** |  Color of the check mark or X in the check box. For information on valid color names and color specifications, see [**Color Properties**](colour_properties.md). _(Support for Grid Check Boxes was added in PxPlus 2025.)_  
**[CellHiLight](../properties/cellhilight.md)** |  Cell selection highlight. Possible values are: |  0 |  Cell is not highlighted.  
---|---  
1 |  Cell has focus rectangle. (**_Default_**)  
2 |  Cell is highlighted (appears selected).  
3 |  Cell is highlighted and has focus rectangle.  
**[CellLeft](../properties/cellleft.md)** |  Cell left position: Relative X position for cell.  
**[CellTop](../properties/celltop.md)** |  Cell top position: Relative Y position for cell.  
**[CellTypeList$](../properties/celltypelist_.md)** |  List of supported cell types. See **[CellType$](../properties/celltype_.md)** property. For a list of available cell type values, see **[Cell Types](../directives/grid.htm#Mark8)** as described in the **GRID** directive.  
**[Col](../properties/col.md)** |  Screen position (column) of control.  
**[Colno](../properties/colno.md)** |  Column number of grid. This property is fundamentally the same as referring to the 'Column property, however, is included to allow a numeric column number to be specified as a string with accessing the properties. If the application references 'Column$ in a grid, it will receive the logical column name as opposed to its number. Referencing 'Colno$ will return the column number as a string.  
**[Cols](../properties/cols.md)** |  Width of control in column units.  
**[Column](../properties/column.md)** |  Currently referenced column number of grid. This property does not contain the current column number of the control, but rather the column number being referenced when used in conjunction with other properties. For instance, in a grid, setting 'Column to 2 and 'Row to 3 will allow the application to reference the 'Text$ value for the cell in column 2, row 3. It will not change the current position within the grid.  
**[Column$](../properties/column_.md)** |  Grid column name.  
**[ColumnNames$](../properties/columnnames_.md)** |  Comma-separated list of grid column names.  
**[ColumnsWide](../properties/columnswide.md)** |  Number of columns.  
**[CtlName$](../properties/ctlname_.md)** |  Control type ("GRID"). See **[GRID](../directives/grid.md)** directive.  
**[CurrentCellColor$  
CurrentCellColour$](../properties/currentcellcolor_.md)** |  Background color for current cell. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**.  
**[CurrentCellTextColor$  
CurrentCellTextColour$](../properties/curcelltxtcolor_.md)** |  Text color for current cell. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The CurrentCellTextColor$ property was added in PxPlus 2024.)_  
**[CurrentColno](../properties/currentcolno.md)** |  Current column number with focus: This property contains the same information as 'CurrentColumn; however, regardless of whether referenced as a string or numeric property, only the column number is reflected. (The 'CurrentColumn property reflects the column name when referenced as a string). It is recommended that this property be used when accessing the control using **[Pseudo Properties](psuedo_multi.md)**.  
**[CurrentColumn$](../properties/currentcolumn.md)** |  Current column with focus: When this property is referenced as a numeric ('CurrentColumn), it returns the column number. When referenced as a string ('CurrentColumn$), it will return the logical column name.  
**[CurrentRow](../properties/currentrow.md)** |  Current row with focus. (**_Default:_** 1)  
**[CurrentValue$](../properties/currentvalue.md)** |  This property is used to access the value of the current cell within a grid. Using the CurrentValue$ property avoids the application from having to set the **['Row](../properties/row.md)** and **['Colno](../properties/colno.md)** properties for a grid prior to reading the value in the grid.  
**[DraggedColumn$  
DraggedColno](../properties/draggedcolumn.md)** |  Column number dragged from. This property indicates the column number (cell) where dragging started. See [**Drag and Drop**](dragdropgrid.md). (**_Default:_** 0)  
**[DraggedRow](../properties/draggedrow.md)** |  This property indicates the row number (cell) where dragging started. See [**Drag and Drop**](dragdropgrid.md). (**_Default:_** 0)  
**[DroppedOnColumn$  
DroppedOnColno](../properties/droppedoncolumn.md)** |  This property indicates the column number (cell) where the mouse was released/items dropped. See [**Drag and Drop**](dragdropgrid.md).  
**[DroppedOnRow](../properties/droppedonrow.md)** |  This property indicates the row number (cell) where the mouse is released/items dropped. See [**Drag and Drop**](dragdropgrid.md).  
**[Enabled](../properties/enabled.md)** |  Enabled indicator: 1 = True; 0 = False (**_Default:_** 1)  
**[EnterMode](../properties/entermode.md)** |  This property is used to define how the ENTER key will be processed with the control. For the grid, possible values are: |  |  0 |  Normal processing (edits cell).  
---|---|---  
|  1 |  Move right across a grid by column, exit on last column.  
|  2 |  Move right across a grid by column, wrap to first column of next row, exit on last column of last row.  
|  3 |  Move down by row, hold on last row.  
|  4 |  Move down by row, return to column 1, hold on last row.  
  
(**_Default for Grid:_** The default setting is 0.)

#### **Note:**  
In the **_grid_** , if the SHIFT key is pressed, these key modes reverses the direction. In addition, if the Tab/Enter [**'+E'**](../mnemonics/+e.md) mnemonic has been set, this property will be ignored and the settings in the **[TabMode](../properties/tabmode.md)** property will be used.  
  
**[Eom$](../properties/eom_.md)** |  Last change terminator. See also **[GRID](../directives/grid.md)** directive.  
**[ExcelStyle](../properties/excelstyle.md)** |  This property is used to control the display of grid lines in either the grid or the report view controls. Possible values are: |  0 |  No grid lines appear. **_(Default for Report View)_**  
---|---  
1 |  Grid lines appear both between the columns and between each line in the output. **_(Default for Grid)_**  
2 |  Vertical grid lines will be shown between columns.  
3 |  Horizontal grid lines will be shown between lines/row.  
  
#### **Note:**  
Prior to PxPlus v8.11 (build 9182), this property was only available on the grid and only accepted a value of 0 or 1. As of PxPlus v8.11, PxPlus supported the property in the report view and options 2/3.  
  
**[FillColor$  
FillColour$](../properties/fillcolor.md)** |  This property defines the color to be used to fill in the empty regions of a grid (blank space to the right and below the grid). Any valid PxPlus color or RGB specification can be used. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. A value of DEFAULT indicates that the system is to use the default 'Windows' background color as selected by the user.  
**[FindColNo](../properties/findcolno.md)** |  This property is used to control which column the 'FindItemText will search. If not set, the search encompasses all rows/columns within the grid. See **[FindItemText$](../properties/finditemtext.md)** property and **[FindOptions$](../properties/findoptions.md)** property. (**_Default:_** 0 - No column specified; searches all columns)  
**[FindItemText$](../properties/finditemtext.md)** |  This property, when set, causes the system to search the list box or grid for the text supplied. If the text is found, the system will set the **['Column](../properties/column.md)** and **['Item](../properties/item.md)** (or **['Row](../properties/row.md)**) property for the control to the entry where the match was found. If no match is found, the 'Column and 'Item ('Row for the grid) property is set to zero. A typical use of this property would be to locate a value in the list box and then change or delete it. It can also be used to validate that an entry exists in the list box. This property is generally only written to. Reading this value will return the same as reading the **['ItemText$](../properties/itemtext_.md)** property. **Controlling the Search (List View/Grid Only):** The search is controlled by the settings found in 'FindOptions$. These options are provided as a series of characters in 'FindOptions$: |  **Char.** |  **Function**  
---|---  
C |  Search is case insensitive.  
A |  Accents will be ignored when comparing data.  
W |  Search should start from current position and wrap around.  
* |  Match is for data anywhere in the text (cannot be used with Sort option).  
S |  Data is sorted.  
R |  Search backwards.  
  
**Search Range (List View/Grid Only):** When searching, if the "W"rap option is not specified, the search will start from the beginning of the data in the control and proceed through the end. If the "R"everse option is set, the search starts at the end and proceeds to the beginning. If the "W"rap option is set, the search will start from the position immediately after that specified in the 'Item ('Row for Grid) and 'Column and search through all the data wrapping around the end/start back to the starting point.

If the property 'FindColNo (or 'Column for Grid) is set, only data in that column will be searched. If the "S"ort option is specified, only the column specified in the **['Sort](../properties/sort.md)** property will be checked and its setting (Ascending/Descending) will be used to determine the assumed sort sequence. If 'Sort is not set, the system will assume that the column specified in 'FindColNo has been pre-sorted in Ascending order. If 'FindColNo is not set, then the system will assume the first column is to be used and is in ascending sequence. 

If both "W"rap and "S"ort options are specified, the system will use the starting point set in 'Item ('Row on Grid) and 'Column and determine the search direction based on the value at the starting point. If the value at the start point matches that of the search value, the "R" option will determine the search direction.

See [**'FindColNo**](../properties/findcolno.md) and [**'FindOptions$**](../properties/findoptions.md) properties.

#### **Note:**  
Prior to PxPlus v11, this property and functionality was not available on the grid. In addition, the 'Column was not set nor were the 'FindOptions$ and 'FindColNo (**_list view only_**) supported.

**_Example 1:_ Changing item text in a list box**

To change the value of the list box entry of "CAT" to "DOG" for list box "LIST1", you could do the following:

List1'FindItemText$="CAT" ! Locate the item  
List1'ItemText$ = "DOG" ! Change the value

**_Example 2:_ Locate and delete an item from a list box**

To locate and delete a value from a list box:

List1'FindItemText$="CAT" ! Locate the item to delete  
LIST_BOX LOAD List1, List1'Item, *

**_Example 3:_ Validate the existence of an item in a list**

To search a list box to find a specific value, set the FindItemText$ to the desired search value then read 'Item. If zero, the item does not exist.

List1'FindItemText$=X$ ! Locate the item  
IF List1'Item=0 THEN MSGBOX X$+" is not found"  
  
**[FindOptions$](../properties/findoptions.md)** |  This property is used to control how the 'FindItemText will search the data in the grid. It can have one of the following characters specified in its value: |  **Char.** |  **Function**  
---|---  
C |  Search is case insensitive.  
A |  Accents will be ignored when comparing data.  
W |  Search should start from current position and wrap around.  
* |  Match is for data anywhere in the text (cannot be used with Sort option).  
S |  Data is sorted.  
R |  Search backwards.  
  
(**_Default_** value is "" - no options specified.)

See [**'FindItemText$**](../properties/finditemtext.md) and **['FindColNo](../properties/findcolno.md)** properties.  
  
**[Fmt$](../properties/fmt_.md)** |  Control format definition. Refer to the **FMT=** option as described in the **[GRID](../directives/grid.md)** directive.  
**[Focus](../properties/focus.md)** |  Focus indicator: 1 = Control has focus (**_Default:_** 0)  
**[ForegroundButtonColor$  
ForegroundButtonColour$](../properties/foregrdbtnclr_.md)** |  Foreground text color for system-generated buttons in a grid, including drop box buttons and query buttons. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The ForegroundButtonColor$ property was added in PxPlus 2024.)_  
**[HdrBackColor$  
HdrBackColour$](../properties/hdrbackcolor_.md)** |  This property sets the background color for the **_top row only_** of the grid (Row -1) and does **_not_** affect the leading left column (Colno -1). For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The HdrBackColor$ (or HdrBackColour$) property was added for Grids in PxPlus 2018.)_  
**[HdrFont$](../properties/hdrfont_.md)** |  This property defines the font for the **_top row only_** of the grid (Row -1) and does **_not_** affect the leading left column (Colno -1). _(The HdrFont$ property was added for Grids in PxPlus 2018.)_  
**[HdrHeight](../properties/hdrheight.md)** |  This property can be used to control the height of the header in the grid in pixels. Setting this property to -1 restores the height to its default size. Setting this property to 0 results in no header. _(The HdrHeight property was added in PxPlus 2020.)_  
**[HdrLineColor$  
HdrLineColour$](../properties/hdrlineclr_.md)** |  This property sets the color of the border lines drawn between columns when the **['ExcelStyle](../properties/excelstyle.md)** property is set for the **_top row only_** of the grid (Row -1) and does **_not_** affect the leading left column (Colno -1). For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The HdrLineColor$ property was added in PxPlus 2025.)_  
**[HdrTextColor$  
HdrTextColour$](../properties/hdrtextcolor_.md)** |  This property sets the color of the text for the **_top row only_** of the grid (Row -1) and does **_not_** affect the leading left column (Colno -1). For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The HdrTextColor$ (or HdrTextColour$) property was added for Grids in PxPlus 2018.)_  
**[Height](../properties/height.md)** |  Height of control in pixels.  
**[HideButtons](../properties/hidebuttons.md)** |  This property hides query buttons or drop box icons associated with grid cells if there is a bitmap (thus, the bitmap is all that shows on a transparent background). The **[StdGridHideButtons](../mnemonics/option.htm#stdgdhidebtns)** option (in the 'OPTION' mnemonic or **[SETDEV](../directives/setdev_set.md)** directive) can be used to set the default 'HideButtons property for all subsequent grids. _(The HideButtons property was added in PxPlus 2020.)_  
**[hWnd](../properties/hwnd.md)** |  Windows handle for control.  
**[ImpliedDecimal](../properties/implieddecimal.md)** |  Controls implied decimal input.  
**[InsDelEnabled](../properties/insdelenabled.md)** |  Cell editing keys: 0 = Off; 1 = On. (**_Default:_** 0) This enables use of **Insert** to begin cell editing and **Delete** for clearing the contents of a cell.  
**[Key$](../properties/key_.md)** |  Hot key to jump to control.  
**[Left](../properties/left.md)** |  Left margin for control in pixels.  
**[Line](../properties/line.md)** |  Screen position of control.  
**[LineColor$](../properties/linecolor_.md)  
[LineColour$](../properties/linecolor_.md)** |  This property contains the color of the lines drawn between rows and columns when the **['ExcelStyle](../properties/excelstyle.md)** property is set. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** DEFAULT (normally BLACK)) _(The LineColor$ (or LineColour$) property was added in PxPlus 2020.)_  
**[Lines](../properties/lines.md)** |  Height of control in number of lines.  
**[LoadIOList$](../properties/loadiolist_.md)** |  This property contains the list of columns that will be returned in **['RowData](../properties/rowdata_.md)** in compiled IOList format. See [**Loading/Accessing by Row**](grid_by_row.md) and the **['LoadList$](../properties/loadlist_.md)** property. By **_default_** , the list of columns will contain the column names starting from the first column (far left) through the end of the grid. It can be altered by setting either the 'LoadList$ or 'LoadIOList$ property.

#### **Note:**  
By **_default_** , the compiled IOList generated for the grid uses fields formatted as **CHR**(_dlm_). See **CHR**(_dlm_) in the **[IOLIST](../directives/iolist.htm#Mark2)** directive.  
  
**[LoadList$](../properties/loadlist_.md)** |  This property contains the list of columns that will be returned in **['RowData](../properties/rowdata_.md)** as a string of column names separated by a delimiter _(last character of string)_. See [**Loading/Accessing by Row**](grid_by_row.md). By **_default_** , the list of columns will contain the column names starting from the first column (far left) through the end of the grid. It can be altered by setting either the 'LoadList$ or 'LoadIOList$ property.  
**[LockBottom](../properties/lockbottom.md)** |  Number of rows at the bottom of the grid to exclude from sorting. See **[LockTop](../properties/locktop.md)** property.  
**[LockButtonColor$  
LockButtonColour$](../properties/lockbtnclr_.md)** |  Background color for locked system-generated buttons in a grid, including drop box buttons and query buttons. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The LockButtonColor$ property was added in PxPlus 2025.)_  
**[LockColumns](../properties/lockcolumns.md)** |  This property is used to set the number of leftmost columns that will remain fixed and will not be resized when the display is scrolled horizontally.  
**[LockForegroundButtonColor$  
LockForegroundButtonColour$](../properties/lockforegrdbtnclr_.md)** |  Foreground text color for locked system-generated buttons in a grid, including drop box buttons and query buttons. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The LockForegroundButtonColor$ property was added in PxPlus 2025.)_  
**[LockRows](../properties/lockrows.md)** |  Number of rows to lock into position, starting from row 1.  
**[LockTop](../properties/locktop.md)** |  Number of rows at the top of the grid to exclude from sorting. See **[LockBottom](../properties/lockbottom.md)** property. _(The LockTop property was added in PxPlus 2019.)_  
**[LookAndFeel](../properties/lookandfeel.md)** |  Defines how a control will look. Possible values are: |  2 |  Old Windows 3.1 2D look.  
---|---  
3 |  Windows 95/98 3D look.  
4 |  Windows XP/Vista/Windows 7 look.  
**[MaxListItems](../properties/maxlistitems.md)** |  This property is used to control the number of lines that will appear in a drop down list in the grid. This property affects **_all_** cells in the grid. By default, this property will be set to zero where the drop down list size is determined by the height of the grid and the number of options in the list. Setting this property to a positive non-zero value defines the maximum number of options to show in the drop down list in the grid. Setting this property to a negative value will result in an Error #60: Invalid control argument value.

#### **Note:**  
Due to the nature of the browsers, this property is unable to be supported in iNomads; however, the property is defined for compatibility purposes. Any value assigned to this property in iNomads will be ignored.

_(The MaxListItems property was added in PxPlus 2020.)_  
**[MenuColumn$  
MenuColno](../properties/menucolumn.md)** |  This property indicates the column number of a selected cell on a right-click of the mouse.  
**[MenuCtl](../properties/menuctl.md)** |  This property reports/sets the CTL value to generate when an object is selected on a right-click of the mouse.  
**[MenuRow](../properties/menurow.md)** |  This property indicates the row number of a selected cell on a right-click of the mouse.  
**[Msg$](../properties/msg_.md)** |  Message line text for the control.  
**[MultiSelect](../properties/multiselect.md)** |  Select multiple cells: 1 = On; 0 = Off (**_Default:_** 1)  
**[ObjectID](../properties/objectid.md)** |  User object method. (**_Default:_** 0 - No object specified) The 'ObjectID property allows applications to intercept property values and add methods to controls. When set to a valid Object ID by the application, you can add methods and add/override property logic for any control in the system. When set in the system, it allows the application to logically request methods against the control that, in turn, will be performed by the related Object ID. It will also first check the object for any property requests and if the property is defined in the object set or get that property instead of the controls. To allow the specified object to get true access to the control, while executing within the object identified by the 'ObjectID property, the system will direct any property requests directly to the control. **Sample used to add a GetValue$ and SetValue method to a grid** Grid Object definition (GRID.PVC): 0010 DEF CLASS "grid"  
0020 LOCAL _CTLNO  
0030 FUNCTION GETVALUE$(COL,ROW)  
0040 ENTER C,R  
0050 LET _CTLNO'COLUMN=C  
0060 LET _CTLNO'ROW=R  
0070 RETURN _CTLNO'VALUE$  
0080 FUNCTION SETVALUE(COL,ROW,VALUE$)  
0090 ENTER C,R,V$  
0100 LET _CTLNO'COLUMN=C  
0110 LET _CTLNO'ROW=R  
0120 LET _CTLNO'VALUE$=V$  
0130 RETURN 1  
0140 END DEF  
0150 ON_CREATE:  
0160 ENTER CTLNO  
0170 LET _CTLNO=CTLNO  
0180 LET _CTLNO'OBJECTID=_OBJ  
0190 RETURN Test program to create the grid and assign the Object to the grid control: 0010 GRID 10,@(30,2,40,15)  
0020 GRID ADD 10,10,10  
0030 LET X=10  
0040 LET O=NEW("grid",X)  
0050 FOR I=1 TO 3  
0060 X'SETVALUE(I,I,"Hi there")  
0070 NEXT  
0080 PRINT X'GETVALUE$(2,2)  
0090 ESCAPE

#### **Note:**  
When a control is deleted from the system, any object identified by an 'ObjectID property will be automatically dropped.  
  
**[OnFocusCtl](../properties/onfocusctl.md)** |  On Focus CTL event. 0 is returned if no On Focus CTL value is set up for the control.  
**[OnLoadCtl](../properties/onloadctl.md)** |  This property, when set to a non-zero value, causes the system to generate an internal CTL event following any changes to a grid. It can be used to monitor changes to a list style control so that external action (such as updating screen or files) can be performed. If the value of this property is non-zero, the system will use its value as a CTL event to generate. If zero (default state), no event will be generated. To avoid multiple signals being generated, the system will defer the generation for approximately 1/2 second following the last update. This means that when multiple rows/cells are being updated, the event will generally only occur once the updating is complete.  
**[OnTipCtl](../properties/ontipctl.md)** |  This property controls the CTL event that will be fired prior to the system displaying the Tip for any control. If the value of this property is non-zero, the system will use its value of a CTL event to fire and will defer the display of the tip until the application changes the value in 'Tip$. If the value in 'Tip$ is not changed, no tip will be displayed. Setting this to zero **_(Default)_** disables the event from being sent and the current 'Tip$ will be displayed.  
**[OverlapEnabled](../properties/overlapenabled.md)** |  Allow cells to overlap: 1 = Yes; 0 = No (**_Default:_** 1)  
**[Parent](../properties/parent.md)** |  Parent window handle.  
**[PasteFilter](../properties/pastefilter.md)** |  Strip non-printing characters from pasted data. When this property is set to _On_ , the filter strips leading/trailing non-printing characters, such as line feeds or tabs, from data that is copied/pasted into a grid control and replaces any internal sequence of non-printing characters with a single space. (**_Default:_** 1 = On) **_Example:_** Data that is copied as 

> 123 Main Street  
>  Markham  
>  Ontario

will be pasted as:

> 123 Main Street Markham Ontario

The Clipboard will reflect the actual data pasted in case the user wants to paste the data elsewhere. _(The PasteFilter property was added in PxPlus 2020 Update 1.)_  
**[Resizable](../properties/resizable.md)** |  Enable grid resize by user. Possible values are: |  0 |  Neither row or columns are resizable.  
---|---  
1 |  Both columns and rows are resizable. **_(Default)_**  
2 |  Columns are resizable, rows are not.  
3 |  Rows are resizable, columns are not.  
**[Row](../properties/row.md)** |  Grid row reference.  
**[RowHeaderBackColor$  
RowHeaderBackColour$](../properties/rowhdrbackclr_.md)** |  Sets the background color for the leading left column only of the grid (Colno -1) and does not affect the grid top row (Row -1). For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The RowHeaderBackColor$ property was added in PxPlus 2024.)_  
**[RowHeaderLineColor$  
RowHeaderLineColour$](../properties/rowhdrlineclr_.md)** |  Sets the color of the border lines drawn between rows when the **['ExcelStyle](../properties/excelstyle.md)** property is set for the **_leading left column only_** of the grid (Colno -1) and does **_not_** affect the grid top row (Row -1). For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The RowHeaderLineColor$ property was added in PxPlus 2025.)_  
**[RowHeaderTextColor$  
RowHeaderTextColour$](../properties/rowhdrtextclr_.md)** |  Sets the text color for the leading left column only of the grid (Colno -1) and does not affect the grid top row (Row -1). For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The RowHeaderTextColor$ property was added in PxPlus 2024.)_  
**[RowHiLight](../properties/rowhilight.md)** |  Row selection highlight: 1 = Row highlight; 0 = Cell highlight. This enables selection of a full row rather than limited to cells. Only locked cells are highlighted. One side effect is that when the cells are locked, the grid becomes a fancy list view. The **[SelectCount](../properties/selectcount.md)** property returns the number of selected cells; however, when the **RowHiLight** property is set, **SelectCount** returns the number of rows: **_Example:_** 0010 BEGIN  
0020 LET G=10  
0030 GRID G,@(20,10,50,12)  
0040 GRID ADD G,5,9  
0050 LET G'ROWHILIGHT=1  
0060 GRID SELECT G,0,0  
0070 PRINT G'SELECTCOUNT  
0080 INPUT *  
**[RowsHigh](../properties/rowshigh.md)** |  Number of rows defined in the grid.  
**[ScrollWheel](../properties/scrollwheel.md)** |  Set scroll wheel increment. This property is used to define how many lines each click of the scroll wheel will move a list box or grid. Possible values are: |  0 |  Scroll wheel support (all events go to parent window).  
---|---  
1 |  Scroll only if the control has focus (mouse can hover on or off control).  
2 |  Scroll only if the control has focus (mouse must be hovered over control).  
3 |  If control does not have focus, then scroll when mouse hovers over this control (otherwise, same as 1).  
4 |  If control does not have focus, then scroll when mouse hovers over this control (otherwise, same as 2).  
**[SelectColumn$  
SelectColno](../properties/selectcolumn.md)** |  **_(Read Only)_** Column number of selected cell. See [**Multiple Selections**](multipleselect.md).  
**[SelectCount](../properties/selectcount.md)** |  Number of items/cells selected. See [**Multiple Selections**](multipleselect.md). This property returns the number of selected cells; however, when the **[RowHiLight](../properties/rowhilight.md)** property is set, **SelectCount** returns the number of rows: **_Example:_** 0010 BEGIN  
0020 LET G=10  
0030 GRID G,@(20,10,50,12)  
0040 GRID ADD G,5,9  
0050 LET G'ROWHILIGHT=1  
0060 GRID SELECT G,0,0  
0070 PRINT G'SELECTCOUNT  
0080 INPUT * Set the **SelectCount** property to zero to deselect all items.  
**[SelectIndex](../properties/selectindex.md)** |  Index to 'SelectItem: Set this property to point to a selected element; e.g. 1 points to the first item selected, 2 points to the second item selected, etc. See [**Multiple Selections**](multipleselect.md).  
**[SelectRow](../properties/selectrow.md)** |  **_(Read Only)_** Row number of selected cell. See [**Multiple Selections**](multipleselect.md).  
**[SelectText$](../properties/selecttext_.md)** |  Text contained within the highlight: This allows for cut, copy and paste within a graphical user interface input region. See [**Multiple Selections**](multipleselect.md).  
**[SelectValue$](../properties/selectvalue_.md)** |  Value within selected field. See [**Multiple Selections**](multipleselect.md).  
**[Sep$](../properties/sep_.md)** |  Separator character between each field, column or data point.  
**[SepLoad$](../properties/sepload_.md)** |  Separator character for each row or data set.  
**[ShowLocked](../properties/showlocked.md)** |  This property applies to the **_entire_** grid and controls the color of locked cells. When set to 1 **_(Default)_** , locked cells are shown with a gray background. Setting this property to 0 (zero) does not change the color of locked cells. This allows background colors to be set on alternating lines in a grid (see **[BackHilight1$](../properties/backhilight1_.md)** and **[BackHilight2$](../properties/backhilight2_.md)**), regardless if cells are locked. _(The ShowLocked property was added in PxPlus 2019.)_  
**[SignalOnExit](../properties/signalonexit.md)** |  This property controls whether a 'Change' signal will be generated when the control (or region of a grid control) is exited regardless of whether the control's value changes. Normally, controls only signal changes when the control loses focus **_and_** the contents have changed. Setting 'SignalOnExit allows a change signal to also be generated whenever focus leaves the control (or region for grid). |  0 |  No signal on exit unless control value has changed.  
---|---  
1 |  Signal on exit regardless of whether value has changed (on grid, signals whenever changing cell).  
2 |  Signal when changing row or on exit of grid (sets column value to 0 and row value to last row exited)._**(Grid Only)**_  
3 |  Signal when exiting the grid (sets column and row values to zero). **_(Grid Only)_**  
**[SkipLockedCells](../properties/skiplockedcells.md)** |  Skip over locked cells. Possible values are: |  0 |  Do not skip over locked cells.  
---|---  
1 |  Skip over locked cells when advancing _horizontally_ (Left/Right arrow). **_(Default)_**  
2 |  Skip over locked cells when advancing _vertically_ (Up/Down arrow).  
3 |  Skip over locked cells **_both_**  _vertically_ and _horizontally_.  
**[Sort](../properties/sort.md)** |  Column sorting: Sorts the contents of the control. In grids, this property sets the number of the column on which the data is to be sorted. Positive integers indicate normal ascending sort order; negative integers indicate descending order. (**_Default for Grid:_** 0) When using the grid sort on numeric data, the currency sign, thousands separator, and decimal point are ignored. The values used to represent these characters are established when the grid is first created.  
**[Sort$](../properties/sort_.md)** |  Sort by column name: This sets a column name (inside quotes) by which to sort. A _minus sign_ indicates descending order. **_Example:_** x'Sort$ = "- col_name" (Locked rows are included in the sort.)  
**[SortCaseSensitive](../properties/sortcasesensitive.md)** |  This property is used to control whether the case of the data will be ignored when sorting data within the grid. If this property is On (**_Default:_** 1), then values will be sorted as such that uppercase data will be placed before lowercase data. If this property is Off (0), then the case of the data will be ignored. (**_Default:_** 1 - Data is sorted with uppercase before lowercase.)

#### **Important Note:** _  
_ This property has been deprecated as of PxPlus v11 by the **['SortOrder](../properties/sortorder.md)** property, which allows for control not only of sort case but also accented characters and supports a system wide default.  
  
**[SortGrouping](../properties/sortgrouping.md)** |  This property is used to control the sorting of a grid by defining the number of lines that make up a logical group within the grid. (**_Default:_** 1 - Each line is independent.) **_Example:_** If each logical entry in the grid contained two lines, you would set 'SortGrouping to 2. This will cause the sort to keep each pair of lines together when sorting. In terms of the values being sorted, only the data in sort column from the first line are considered when sorting. The contents of the secondary lines within the group will not be considered.  
**[SortNullLast](../properties/sortnull.md)** |  This property is used to control how null entries will be sorting within the grid. f this property is set to **_Off_** (**_Default:_** 0), then null values will be sorted first. If this property is set to **_On_** (1), then null values will be placed at the end of the sorted data. (**_Default:_** 0 - Null values occur first in the sort sequence.)  
**[SortOrder$](../properties/sortorder.md)** |  Sorting control settings. This property is used to control how column data will be sorted in the grid. It can have one of the following values or be set to Null, which indicates the sort order is defined by the system StdSortOrder setting using the **[SETDEV SET](../directives/setdev_set.md)** directive or the **['OPTION'](../mnemonics/option.md)** mnemonic. |  Null |  Uses StdSortOrder setting (if StdSortOrder not set, uses raw sort).  
---|---  
R |  Raw binary sort.  
C |  Case insensitive sort.  
A |  Sort ignores accents.  
N |  Null values at end of sort.  
CA |  Ignore case and accents.  
CN |  Ignore case/Null values last.  
AN |  Ignore accents/Null values last.  
CAN |  Ignore case and accents/Null values last.  
  
(**_Default:_** Null - Data is sorted using the StdSortOrder setting.)

Alternatively, this property can be accessed as a string comprising the characters C, A or N. An empty string is used to indicate all settings are Off.

#### **Important Note:**  
The **['SortCaseSensitive](../properties/sortcasesensitive.md)** property for the grid control has been deprecated as of PxPlus v11 by the **'SortOrder$** property, which allows for control not only of sort case but also accented characters and supports a system-wide default.  
  
**[SortStyle](../properties/sortstyle.md)** |  Sort without nulls: Determines if cells with null values are to be included in the sort. SortStyle values indicate the following: |  0 |  Null values are sorted.  
---|---  
1 |  Null values are excluded and cells will remain at the bottom of the grid (Excel-like style).  
**[SuppressHdr](../properties/suppresshdr.md)** |  Suppress grid headers. Possible values are: |  0 |  Headers not suppressed.  
---|---  
1 |  Row header suppressed (left side).  
2 |  Column header suppressed (top).  
3 |  Both headers suppressed.  
  
Suppression is done by setting the header height/width to 0. When not suppressed, the height/width will return to the last value.

_(The SuppressHdr property was added in PxPlus 2020.)_  
  
**[SwapEnabled](../properties/swapenabled.md)** |  Column swap enabled: 1 = Yes; 0 = No (**_Default:_** 0)  
**[TabMode](../properties/tabmode.md)** |  This property is used to define how the TAB key will be processed with the grid control. Possible values are: |  0 |  Normal processing (exits grid). (**_Default_**)  
---|---  
1 |  Move right across a grid by column, exit on last column.  
2 |  Move right across a grid by column, wrap to first column.  
3 |  Move down by row, hold on last row.  
4 |  Move down by row, return to column 1, hold on last row.  
**[TickPerUnit](../properties/tickperunit.md)** |  This property sets the number of ruler-style "ticks" between numbers (units) displayed in the header cells (row and column) of the grid. Ruler numbers begin at 0 (zero) and count upwards by whole numbers but will be reset to 0 (zero) again if the header cell contains a **['Value$](../properties/value_.md)** greater than null. (**_Default:_** 0) **_Example:_** 'TickPerUnit=8 will display a number every 8 ticks on the ruler and cause median points (at 'TickPerUnit/2) to appear slightly larger.  
**[TickPixels](../properties/tickpixels.md)** |  This property sets the space in pixels between ruler-style "ticks" (marker lines) displayed in the header cells of the grid.  
**[Tip$](../properties/tip_.md)** |  Tip message for control.  
**[TipColno](../properties/tipcolno.md)** |  Column number for the cell that is requesting its tip. In response to an OnTipCtl event, the program can read this property and set the appropriate cell tip value. See **['TipRow](../properties/tiprow.md)** property.  
**[TipRow](../properties/tiprow.md)** |  Row number for the cell that is requesting its tip. In response to an OnTipCtl event, the program can read this property and set the appropriate cell tip value. See **['TipColno](../properties/tipcolno.md)** property.  
**[Top](../properties/top.md)** |  Top of control in pixels.  
**[TopVisibleRow](../properties/topvisiblerow.md)** |  This property is used to access the row number that is currently displayed at the top of the grid. It can be used to determine/control vertical scrolling of the data. (**_Default:_**__ Not Applicable) If set, it must be set to a value between 1 and the number of rows in the grid. Setting this property to a row near the bottom of the grid contents does not always guarantee that the row identified will be the first row on the grid. The system will attempt to leave the bottom few rows visible; however, it will assure that the row indicated is visible.  
**[TrackColor$  
TrackColour$](../properties/trackcolor_.md)** |  Cell tracking color. Header cells corresponding to a cell that currently has focus are switched to the color set by this property as the user moves around the grid. This provides a visual cue to the user for which column and row they are on currently. Only header cells that use their default color will change to the tracking color. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT")  
**[Visible](../properties/visible.md)** |  Control visible flag: 1 = Yes; 0 = No (**_Default:_** 1)  
**[Width](../properties/width.md)** |  Width of control in pixels.  
**[_PropList$](../properties/_proplist_.md)** |  Controls the list of properties to be returned in '_PropValues$. Each value is separated by the value in '_PropSep$. This property can be used to speed up the processing of multiple property accesses but reducing the number of interactions with the control. See **[Multi-Property Access](multi_prop.md)**.  
**[_PropSep$](../properties/_propsep_.md)** |  Controls the separator used between each of the values of the properties returned in '_PropValues$ as defined by '_PropList$. This property can be used to speed up the processing of multiple property accesses but reducing the number of interactions with the control. See **[Multi-Property Access](multi_prop.md)**.  
**[_PropValues$](../properties/_propvalue_.md)** |  Accesses the values of the properties defined in '_PropList$. Each value is separated by the value in '_PropSep$. This property can be used to speed up the processing of multiple property accesses but reducing the number of interactions with the control. See **[Multi-Property Access](multi_prop.md)**.  
  
##  Cell Properties

The following properties **_apply to a cell_** in the grid:

#### **Note:**  
Any of the cell properties below can be applied to the **_entire_** grid by setting **_both_** the _Column_ and _Row_ to 0 (zero).

**Property** |  **Description**  
---|---  
**[Align$](../properties/align_.md)** |  Text alignment of the data in a grid cell. Possible values are: |  |  "BC" |  Bottom-Center |  "ML" |  Middle-Left  
---|---|---|---|---  
|  "BL" |  Bottom-Left |  "MR" |  Middle-Right  
|  "BR" |  Bottom-Right |  "R" |  Right  
|  "C" |  Center |  "TC" |  Top-Center  
|  "L" |  Left |  "TL" |  Top-Left (**_Default_**)  
|  "MC" |  Middle-Center |  "TR" |  Top-Right  
  
_(The alignment values "MC", "ML" and "MR" were added in PxPlus 2014 FP1 Update 0001.)_  
  
**[AutoCompName$](../properties/autocompname.md)** |  Name of a defined Auto Complete entry. Auto Complete entries are assigned to individual cells and are used to show text suggestions when a user types a partial entry. See **[Assigning Auto Complete Entries](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/System%20Options/Auto%20Complete.htm#assign_auto_compl_entries)**.  
**[AutoValue$](../properties/autovalue.md)** |  List of entries to load into Auto Complete drop box. See [**'CellAutoCtl**](../properties/cellautoctl.md) property.  
**[BackColor$  
BackColour$](../properties/backcolor_.md)** |  Background color. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT")  
**[Bitmap$](../properties/bitmap_.md)** |  Bitmap to appear in a grid cell. **_Example:_** !Stop (embedded bitmap)  
C:\windows\clouds.bmp (external bitmap)  
**[BottomBorder](../properties/bottomborder.md)** |  Bottom border of cell (thickness): 0 to 3 pixels (**_Default:_** 0)  
**[BottomLeftTick$](../properties/bottomlefttick_.md)** |  When set to a color, this property displays a tick in the bottom left corner of the cell. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT")  
**[CellAutoCtl](../properties/cellautoctl.md)** |  Generates ctl_id to signal Auto Complete: ctl_id to signal that the list of entries for the Auto Complete drop box is to be loaded via the **[AutoValue$](../properties/autovalue.md)** property.  
**[CellBlankWhenZero](../properties/cellblankwhenzero.md)** |  When this property is set and cell contents are displayed, if the cell contains **_no_** non-zero numeric characters (1-9), the cell will be displayed as if null although the actual contents will be preserved. _(The CellBlankWhenZero property was added in PxPlus 2020.)_  
**[CellDClick](../properties/celldclick.md)** |  Cell double click. Possible values are: |  0 |  Enter Edit mode when cell is double clicked. (**_Default_**)  
---|---  
1 |  Does not enter Edit mode when cell is double clicked. Returns $02$ in _eom$.  
**[CellFormat$](../properties/cellformat_.md)** |  Cell format mask. See **FMT=** option in the [**MULTI_LINE**](../directives/multi_line.md) directive. (**_Default:_** Null)

#### **Note:**  
The grid will not format data over 1024 bytes long. _(as of PxPlus 2017)_  
  
**[CellHlp$](../properties/cellhlp_.md)** |  Help reference for a grid cell.  
**[CellImpliedDecimal](../properties/cellimplieddecimal.md)** |  Controls implied decimal input on cell-by-cell basis.  
**[CelliNomadsClass](../properties/cellinomadsclass.md)** |  Apply an iNomads class to a grid cell: The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined classes, see **[iNomads Classes](../iNOMADS/iNomads%20Classes.md)**.

#### **Note:**  
The CelliNomadsClass property can also be set in the **[Grid Presets Definition](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Grid%20Control/Presets%20Definition.md)** when using the NOMADS Panel Designer; however, it will **_only_** be applicable when the panel is run in iNomads.

_The CelliNomadsClass property was added in PxPlus 2018._  
**[CellIsNumeric](../properties/cellisnumeric.md)** |  When set, this property forces a cell to only accept numeric data. When exiting the cell after it is edited, if the cell contains no numbers (0-9), it will be set to "0". _(The CellIsNumeric property was added in PxPlus 2020.)_  
**[CellTag$](../properties/celltag.md)** |  This property provides the ability to place an application defined "Tag" on a specific cell. The contents of the tag string is application dependent and not used by the system. It can be used to store any cell related information required by the application.  
**[CellTbl$](../properties/celltbl.md)** |  Translation table for cell: This property controls the translation of the values selected in the cell and how the value will be passed to/from the application. Generally, it contains a table of single-character values representing selections from the controls with each character representing each of values in the control in sequence. The size of each entry can be changed using the 'CellTblWidth property.  
**[CellTblWidth](../properties/celltblwidth.md)** |  Translation table width for cell: This property can be used to set the length of each of the items in the 'CellTbl$ property. It can be set to any positive value (**_Default:_** 1). Setting 'CellTblWidth to zero indicates that 'CellTbl$ contains a delimited string, with the last character of the string being the delimiter character.  
**[CellTip$](../properties/celltip_.md)** |  Tip for cell: Tip message.  
[**CellType** **$**](../properties/celltype_.md) |  Grid cell type. (**_Default:_** "Normal") For a list of available cell type values, see **[Cell Types](../directives/grid.htm#Mark8)** as described in the **GRID** directive.  
**[Class](../properties/class.md)** |  Apply a data class to a grid cell: The Class property can also be set in **[Grid Presets Definition](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Grid%20Control/Presets%20Definition.htm#dataclasses)** when using the NOMADS Panel Designer. See **[Data Classes](../Data%20Dictionary/Data%20Classes/Overview.md)**.  
**[Font$](../properties/font_.md)** |  This property is used to reference the font for a cell. It will contain (or can be set to) a string containing 3 comma-separated fields of the font name, size and attributes. **_Example:_** To set the font to Arial, 1.5 times normal size, and Bold, the format would be xxx'Font$="Arial,1.5,B". When setting the 'Font$ property on a **_grid_** for all columns/rows ('Column=0 and 'Row=0), the system will check that the current default **[Row Height](../properties/rowheight.md)** is large enough to accommodate the font selected. If the default row height is too small, the system will automatically adjust the default and all existing row heights to a size large enough to accommodate the font size. See **['FONT'](../mnemonics/font.md)** mnemonic. _(Support for the automatic adjustment of row height was added in PxPlus 2019.)_  
**[JoinColumns](../properties/joincolumns.md)** |  Merge two or more columns (left to right): Set this property in the column that starts the join (leftmost) to the total number of joined columns - that number of columns will be merged into one. For columns belonging to an existing join, this property returns a negative integer indicating the column's current position within the join.  
**[JoinRows](../properties/joinrows.md)** |  Merge two or more rows (downward): Set this property in the row that starts the join (uppermost) to the total number of joined rows - that number of rows will be merged into one. For rows belonging to an existing join, this property returns a negative integer indicating the row's current position within the join.  
**[LeftBorder](../properties/leftborder.md)** |  Left border of cell (thickness): 0 to 3 pixels (**_Default:_** 0)  
**[Len](../properties/len.md)** |  Input length of cell.  
**[Lock](../properties/lock.md)** |  Lock status: Possible values are: |  0 |  Unlock **_(Default)_**  
---|---  
1 |  Lock  
2 |  Lock (cell contents can be selected/copied) **_(Grid Only)_**  
-1 |  Permanently locked **_(Multi-Line Only)_**  
  
_(The Lock status of 2 was added in PxPlus 2019.)_  
  
**[LockBackColor$  
LockBackColour$](../properties/lockbackclr_.md)** |  Background color when the grid cell is locked. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The LockBackColor$ property was added in PxPlus 2024.)_  
**[LockTextColor$  
LockTextColour$](../properties/locktextclr_.md)** |  Foreground text color when the grid cell is locked. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The LockTextColor$ property was added in PxPlus 2024.)_  
**[Nul$](../properties/nul_.md)** |  String text to display when the value of the grid cell is empty: If a numeric format string has been assigned, then the text is displayed when the value is 0 (zero).  
**[PriorValue$](../properties/priorvalue_.md)** |  This property contains the value last returned when the grid cell was read. _(The PriorValue$ property was added in PxPlus 2018.)_  
**[Query](../properties/query.md)** |  Assign a query to a grid cell. The expression should include the query definition name and library in the following format: "_QueryName,Library_ ". When defined, the grid cell will display a lookup button with a bitmap, if a bitmap has been set; otherwise, the lookup button will display a **?** (_question_ _mark_) by default. The Query property can also be set in **[Grid Presets Definition](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Grid%20Control/Presets%20Definition.htm#queries)** when using the NOMADS Panel Designer.  
**[RightBorder](../properties/rightborder.md)** |  Right border of cell (thickness): 0 to 3 pixels.  
**[SpellCheck](../properties/spellcheck.md)** |  Enable spell checking. For a multi-line and grid cell, set this property to non-zero to enable spell checking on the input field. Reading this property will determine whether spell checking is enabled. (**_Default:_** 0) _(The SpellCheck property was added in PxPlus 2019.)_  
**[Text$](../properties/text_.md)** |  Text of item or label. In a grid, this property applies to the following cell types: "BarChart", "Button", "DropBox" and ""DropBoxHideBtn", "UseTextEllipsis", "UseTextNormal" and "UseTextSingleLine", "VarDropBox" and VarDropBoxHideBtn". See **[Cell Types](../directives/grid.htm#Mark8)** as described in the **GRID** directive.  
**[TextColor$  
TextColour$](../properties/textcolor_.md)** |  Foreground text color. See **[Color Properties](grid_properties.htm#color_props)** for a list of valid color names. (**_Default:_** "DEFAULT")  
**[TopBorder](../properties/topborder.md)** |  Top border of cell (thickness): 0 to 3 pixels. (**_Default:_** 0)  
**[TopLeftTick$](../properties/toplefttick_.md)** |  When set to a color, this property displays a tick in the top left corner of the cell. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT")  
**[Uppercase](../properties/uppercase.md)** |  Force text to uppercase: 1 = On; 0 = Off. (**_Default:_** 0)  
**[Value$](../properties/value_.md)** |  Current grid cell value.  
  
##  Column Properties

The following properties **_apply to a column_** in the grid:

#### **Note:**  
Any of the column properties below can be applied to the **_entire_** grid by setting **_both_** the _Column_ and _Row_ to 0 (zero).

**Property** |  **Description**  
---|---  
**[AutoFit](../properties/autofit.md)** |  This property, when set to any value, forces the associated grid to resize the column currently selected by the **['Colno](../properties/colno.md)** or **['Column](../properties/column.md)** property to the width required to fit its contents. If the currently selected column is set to zero, **_all_** columns in the grid will be resized. The value set in 'AutoFit indicates how many rows to check, with zero indicating **_all_** rows and the column header. Any value other than zero specifies the number of rows (starting at the first row) to take into account in computing the new column width. A non-zero setting may be used to minimize the time it might take to scan all the rows in a large grid. Reading this property returns zero, as the value of the property itself has no meaning, and simply the act of setting it causes the grid to be updated.

#### **Note:**  
If a column has the **[ColumnSizeLock](../properties/columnsizelock.md)** property set to **_On_** or a **[ColumnWidth](../properties/columnwidth.md)** of zero (hidden), the width will **_not_** be adjusted unless the column number is explicitly set to that column (i.e. 'Colno is **_not_** zero.)

_(The AutoFit property was added in PxPlus 2017.)_  
**[ColumnPixels](../properties/columnpixels.md)** |  Width of column in pixels.  
**[ColumnSizeLock](../properties/columnsizelock.md)** |  This property controls the ability of the user to resize the width of a column by dragging the column header. If set to 0, the column may not be resized. If set to 1, the column is resizable. (**_Default:_** 0 (fixed size) When used with the grid, this property is only valid when the grid itself is deemed resizable (the **[Resizable](../properties/resizable.md)** property > 0).  
**[ColumnWidth](../properties/columnwidth.md)** |  Width of column in column units.  
**[SortColFmt$](../properties/sortcolfmt.md)** |  This property is used to control the sorting of grid columns when a sort by date is required. (**_Default:_** Default value is "" - no sorting definition). Normally, when the grid sorts columns, it does so by either a _numeric_ value comparison or a _string_ compare. If the column contains a _date_ , you need to tell the system the format of the date being provided so it can determine which value is the year, month or day respectively. The SortColFmt$ property is used to control the sorting of date columns. This property can be set from one to three characters long where each character can be a '**#** ', '**S** ', '**Y** ', '**M** ' or '**D** ' as follows:

  * If set to '**#** ', the column will be sorted based on the assumption that all data in the column is numeric.
  * If set to '**S** ', the assumption is that all data in the column are strings and will be sorted based on string values.
  * If set to '**Y** ', '**M** ' or '**D** ', the letters will be used to indicate the order of the data in the column. (Lowercase '**s** ', '**y** ', '**m** ' or '**d** ' is also supported.)

**_Example:_** If the date is of the form day, month, then year, the 'SortColFmt$ property should be set to "DMY".

#### **Note:**  
For a date sort to work properly, the dates in the column must have a divider, such as a _dash_ ( **-** ), separating the date components.  
  
**_Example:_**  
  
01-01-2016  
  
A date such as 01012016 does not sort.

If this field is **_not_** set, the column will be pre-scanned to determine if all values are numeric. If all the column data is numeric, then a numeric sort will be performed; otherwise, a string sort will be used. The 'SortColFmt property works in conjunction with the [**'Column**](../properties/column.md) or [**'Colno**](../properties/colno.md) property to identify the column to which the sort format will be applied.

#### **Note:**  
When forcibly sorting numerically, mixing numeric and non-numeric data will result in an incorrect and somewhat random sort sequence based on the original input sequence.  
  
**[SortOnHdrClick](../properties/sortonhdrclick.md)** |  This property is used to control the sorting of grid columns based on the user clicking the column header. For the grid, the property exists **_both_** for the complete grid **_and_** on each column. To reference the grid settings, set **['Column](../properties/column.md)** to zero prior accessing to the property. To reference a column, set the 'Column property to the desired column prior to access. Possible values are: |  0 |  Disable sorting on click of column header.  
---|---  
1 |  Enable sorting on click of column header.  
-1 |  Use grid default setting. **_(Column Only)_**  
  
(**_Default for Grid:_** 0 - Column sorting is disabled on the grid and all columns.)

When setting the property for a specific column, you can specify a value of -1, which forces the column to adhere to the current grid default setting.  
  
##  Row Properties

The following properties **_apply to a row_** in the grid:

#### **Note:**  
Any of the row properties below can be applied to the **_entire_** grid by setting **_both_** the _Column_ and _Row_ to 0 (zero).

**Property** |  **Description**  
---|---  
**[RowData$](../properties/rowdata_.md)** |  Row data based on cell columns identified in the 'LoadList$ or 'LoadIOList$ property. Each value will be separated by the column separator as defined for the grid. Reading this property will return the contents cells within the row identified in the **['Row](../properties/row.md)** property. Writing it will update the cells. See **[Loading/Accessing by Row](grid_by_row.md)**, **['LoadList$](../properties/loadlist_.md)** property and **['LoadIOList$](../properties/loadiolist_.md)** property.  
**[RowHeight](../properties/rowheight.md)** |  Height of current row in lines.  
**[RowPixels](../properties/rowpixels.md)** |  Height of row in pixels.  
  
## See Also

**[Grid Property Access](grid_cell.md)**  
**[Multiple Selections](multipleselect.md)**  
**[Drag and Drop](dragdropgrid.md)**  
**[Loading/Accessing by Row](grid_by_row.md)**  
**[Color Properties](colour_properties.md)**  
**['COLOUR' & '_COLOUR' Mnemonic](../mnemonics/colour.md)**  
**[Using Property Names](../control_object_properties.htm#Mark1)**  
**[Compound Properties](compound_properties.md)**
