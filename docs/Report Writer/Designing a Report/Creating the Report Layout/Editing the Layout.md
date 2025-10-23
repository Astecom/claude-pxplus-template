# Creating the Report Layout 

**Editing the Layout** |  **__**  
---|---  
  
The Report Designer _Edit_ menu provides functions for editing the report layout. These functions (except for _Clear Area_) can be selected as buttons from the Report Designer toolbar:

_Cut_ |  Copy contents, format (font, color, alignment, etc.) and conditions associated with the selected cells, then clear the content of the selected cells and restore them to default format. Selected cells must be contiguous and must be in the same grouping of lines; i.e. selected cells may not cross a section header.  
---|---  
_Copy_ |  Copy contents, format (font, color, alignment, etc.) and conditions associated with the selected cells. Selected cells must be contiguous and must be in the same grouping of lines; i.e. selected cells may not cross a section header.  
_Paste_ |  Paste cell contents, format and conditions beginning at the current cell location, and add lines/columns to the section if required to contain all the elements being copied. If pasted cells contain merged rows or columns, joins will be included only if they are self-contained and do not extend beyond the scope of the cells being pasted. Cells that contain group functions can only be pasted into detail lines and group footers, where the function will be converted to the appropriate group level. They cannot be pasted into page or group headers or the page footer; a warning message will be displayed and the receiving cell left blank. Line heights will not be affected by the height of the pasted lines.  
  
#### **Note:**  
_Cut/Copy/Paste_ features are **_internal only_** and do not use the Windows Clipboard.  
  
When editing a conditional line with _Cut/Copy/Paste_ , the line condition will be included only if the entire line is selected.  
  
If a group function is used in defining the condition, the function will be adjusted if pasted into a different section or removed if the function is not valid (e.g. a group total pasted into a group header).

_Clear Area_ |  Clear all data from the highlighted cells. This function also resets the cell formatting to default settings. This differs from selecting cells and pressing Delete, which only clears the data.  
---|---  
_Insert Line_ |  Insert a line below the current line.  
_Delete Line_ |  Delete the current line.  
_Insert Column_ |  Insert a column to the right of the current column. If the _Inherit attributes from column on left when inserting a column_ designer option has been turned _On_ , then when a column is inserted, the cell attributes (i.e. font, colors, alignment, word-wrap and borders) from the previous column (on the left) are inherited on a cell-by-cell basis. If column 1 is inserted or the option is not selected, then the column cells will be assigned default attributes.

#### **Note:**  
If the cell to the left is a _joined_ cell (see **[Join](Formatting.htm#join)**), the inherited attributes would be those of the cell if it were _not_ joined and therefore may not match the attributes displayed when joined.

The _Inherit attributes from column on left when inserting a column_ option is at the bottom of the main Report Designer panel and in the **[Designer Options](../../Designer%20Options/Introduction.htm#inherit_attrib)** window, which is accessed through the _Options_ menu. _(The Inherit attributes from column on left when inserting a column option was added in PxPlus 2023.)_  
_Delete Column_ |  Delete the current column.  
_Find Text_ |  Find the specified text value in the layout. Find Text will search data items, formulas and fixed text within the cells.  
  
To facilitate editing, it is possible to select entire lines and columns for processing. Click on the row header area at the left of the Report Designer grid (where the ruler marks are located) to select all columns in a row up to the last column currently used in the report. This does not apply to Group section headlines.

To select an entire column (excluding section headers), click on the column header area at the top of the Report Designer grid. Section headers are highlighted if the first column is selected although they are not included.

#### **Note:**  
Joined cells will be included only if the column/row being selected is the first column/row in the join.

To select **_all_** , click on the top left header cell. You can also right click on the header cells to select the row/column, as well as invoke a popup menu with applicable editing and formatting options.

#### **Note:**  
Selecting multiple cells, such as entire lines and columns, is **_not_** currently supported in the iNomads environment.
