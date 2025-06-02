# Report Designer  
  
**Tool Bar**|   
---|---  
  
The **Report Designer** tool bar provides convenient access to many of the functions that are also available as **[Menu Options](Report%20Designer%20Menu.md)**. A list of tool bar options is provided below in their order of appearance.

**Tool Bar Option** |  **Description**  
---|---  
_New_ |  Define a new report.  
_Open_ |  Open an existing report file.  
_Save_ |  Save the report definition. See **[Saving the Report Definition](../Saving%20the%20Report%20Definition/Overview.md)**.  
_Report Wizard_ |  Launches the **[Report Wizard](../../Report%20Wizard/Introduction.md)** for creating a new report.  
_Options_ |  Launches **[Report Options](../Report%20Options/Overview.md)**.  
_Preview_ |  Preview the report output. See **[Testing the Report](../Testing%20the%20Report/Overview.md)**.  
_Print_ |  Send the report to the alternate output destination selected from the drop-down list: _Clipboard, Custom Output, HTML document, PDF document, Printer, Tab delimited file, Viewer_.  
_Cut_ |  See **[Editing the Layout](../Creating%20the%20Report%20Layout/Editing%20the%20Layout.md)**.  
_Copy_ |  See **[Editing the Layout](../Creating%20the%20Report%20Layout/Editing%20the%20Layout.md)**.  
_Paste_ |  See **[Editing the Layout](../Creating%20the%20Report%20Layout/Editing%20the%20Layout.md)**.  
_Find_ |  Find the specified text value in the layout. Find will search data items, formulas and fixed text within the cells.  
_Find Next_ |  Find the next instance of the specified text value in the layout.  
_Insert Row_ |  Insert a line below the current line.  
_Delete Row_ |  Delete the current line.  
_Insert Column_ |  Insert a column to the right of the current column. If the _Inherit attributes from column on left when inserting a column_ designer option has been turned _On_ , then when a column is inserted, the cell attributes (i.e. font, colors, alignment, word-wrap and borders) from the previous column (on the left) are inherited on a cell-by-cell basis. If column 1 is inserted or the option is not selected, then the column cells will be assigned default attributes.

#### **Note:**  
If the cell to the left is a _joined_ cell (see **[Join](../Creating%20the%20Report%20Layout/Formatting.htm#join)**), the inherited attributes would be those of the cell if it were _not_ joined and therefore may not match the attributes displayed when joined.

The _Inherit attributes from column on left when inserting a column_ option is at the bottom of the main Report Designer panel and in the **[Designer Options](../../Designer%20Options/Introduction.htm#inherit_attrib)** window, which is accessed through the _Options_ menu. _(The Inherit attributes from column on left when inserting a column option was added in PxPlus 2023.)_  
_Delete Column_ |  Delete the current column.  
_Join_ |  Merge the highlighted cells. If the value in a cell spills into the next column, you should join the cells. For printed output, this may not always be necessary as the value will print outside of the cell area, but HTML output requires that such cells be joined to maintain proper column spacing. A common use of joined cells is to centre titles across several columns. Cells may be joined across columns and rows, but the rows must be in the same section. In iNomads, where only one cell can be highlighted, the **Join Cells** window shown below is presented to specify the total number of columns and/or total number of rows, including the anchor cell, to be joined. _(The Join Cells window was added in PxPlus 2018.)  
(The Join tool bar option was added in PxPlus 2021.)_  
_Font_ |  Set the **[Font](../Creating%20the%20Report%20Layout/Formatting.htm#format)** and font attributes (i.e. style, point size, orientation).  
_Text_ |  Select the **[Text Colour](../Creating%20the%20Report%20Layout/Formatting.htm#format)**.  
_Background_ |  Select the **[Background Colour](../Creating%20the%20Report%20Layout/Formatting.htm#format)**.  
_Text Alignment_ |  When an item is added to the layout, a **_text_** item will be _Top Left_ justified and a **_numeric_** item will be _Top Right_ justified. Text alignment for selected items can be adjusted by clicking one of the **_horizontal_** alignment buttons (_Left_ , _Center_ , _Right_) **_and/or_** one of the **_vertical_** alignment buttons (_Top_ , _Middle_ , _Bottom_).   
_(Compound text alignment menu options were added in PxPlus 2019.)  
(Horizontal/vertical alignment toolbar buttons were added in PxPlus 2020.)_  
_Border width_ |  Adjust the border width to _Thin_ , _Medium_ or _Wide_. The width must be set prior to adding the border.  
_Borders_ |  Set preference for displaying **[Borders](../Creating%20the%20Report%20Layout/Formatting.htm#format)**. Available selections are _Full grid; Edges Only, Inside only, Left Edge; Right Edge, Top Edge, Bottom Edge, No Borders_. All borders are black.  
_Set Line Condition_ |  Launches the **Define Filters** dialogue for adding a condition to a line. See **[Conditional Lines](../Creating%20the%20Report%20Layout/Conditional%20Lines.md)**.  
_Set Cell Condition_ |  Launches the **Define Filters** dialogue for specifying the conditions under which an alternate cell definition will be used. See **[Alternate Cell Condition](../Creating%20the%20Report%20Layout/Conditional%20Cell%20Definition.md)**.  
_Switch Cell_ |  Switch between two cell definitions if an alternate cell definition has been created. See **[Switch Cell Definition](../Creating%20the%20Report%20Layout/Conditional%20Cell%20Definition.md)**.
