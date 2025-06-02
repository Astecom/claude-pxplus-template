# Step 6: File Maintenance Field Layout

**Adding and Removing Fields**|   
---|---  
  
Data Dictionary fields, any defined Extended Validation descriptive fields (**SHOW**._xxxxxx_) and Fonted Text fields can be added to the _Layout Grid_ in **[Step 6: Fields](Field%20Layout.md)**, whether you are using the **[Enhanced Layout](Enhanced%20Layout.md)** or the **[Two-Column Layout](Two_column.md)**.

Any field, **_except_** a Key field, can also be removed from the _Layout Grid_. See **[Removing Fields](Add%20Remove%20Fields.htm#remove_flds)**.

##  Adding Data Dictionary Fields

When fields from the selected data dictionary table are added to the _Layout Grid_ , they are displayed in blue font. You can add one, some or all fields to the _Layout Grid_.

**_To add a single field:_**

Select the field in the _Fields_ list box. Then, drag and drop it into the desired _Layout Grid_ cell.

**_To add multiple fields:_**

Select the fields in the _Fields_ list box using Shift-Click (consecutive selections) or Ctrl-Click (random selections). Then, drag and drop the selections into the _Layout Grid_ row that will be the starting point.

**_To add all fields:_**

Click the _Select All_ button to highlight all fields in the _Fields_ list box. Then, drag and drop the selections into the _Layout Grid_ row that will be the starting point.

#### **Note:**  
If the number of fields being dropped at one time will exceed the maximum number of rows (50) based on the starting row, a message will display.  
  
**_Example:_**  
  
If you attempt to drop 15 fields starting at row 40, a message will display, and the move will not be performed.

If adding a data dictionary field for which a Multi-Line will be created with no assigned data class **_and_** a length greater than or equal to 256, the Multi-Line will be created 5 lines high. It will be 40 columns wide if on a half row or 80 columns wide if on a full row.

_(The expanded Multi-Line input was added in PxPlus 2023 Update 1.)_

## Adding Extended Validation Descriptive Fields (SHOW._xxxxxx_)

A **SHOW**._xxxxxx_ field (**_where_** _xxxxxx_ is the name of its related field) can be added **_beside_** its related field in the adjoining cell or directly **_below_** it. It can also be added or moved to the **_same cell_** as its related field only if the related field is a non-Key segment. This combines the two fields in one cell and allows another field to be placed beside it in the adjoining cell.

To combine a **SHOW** _.xxxxxx_ field with its related field, the related field must first be in the _Layout Grid_. Before the two fields are combined, a message will display.

The placement of a **SHOW**._xxxxxx_ field will affect the width of the panel. For example, if a **SHOW**._xxxxxx_ field is added beside its related field in the adjoining cell, the panel will not be as wide as when it is added to the same cell as its related field.

If combining the two fields in the **_same cell_** using the **[Enhanced Layout](Enhanced%20Layout.md)**, it is recommended to format the cell as a **_Full_** section to accommodate the wide control. This is done by right clicking on the cell and selecting _Full Section_ from the popup menu. Adding a wide control to a smaller section will result in a very wide panel with blank space on the right side.

_(The ability to combine a SHOW.xxxxxx field and its related field was added in PxPlus 2021.)_

See **[Extended Class Validation and Display](../../../Data%20Dictionary/Data%20Classes/Extended%20Validation.md)**.

When added to the _Layout Grid_ , the **SHOW**._xxxxxx_ field is displayed in the following format:

_elementname_ **from**  _file_

**_Where:_**

_elementname_ is the name of the element and _file_ is the data file in the data dictionary.

**_Example:_**

Name from Sales Rep (SHOW.SalesRep)

When the panel is generated, the **SHOW**._xxxxxx_ field Multi-Line is locked and is not included in the tab sequence.

## Adding Fonted Text Fields

Enter the text directly into a cell in the _Layout Grid_. See **[Step 4: Controls](Control%20Settings.md)** for fonted text options.

##  Removing Fields

Key fields cannot be removed from the _Layout Grid_. When a data dictionary field is removed from the _Layout Grid_ , it is automatically returned to the _Fields_ list box. Other controls (i.e. List Box, Chart, Image, Horizontal Line, Fonted Text, etc.) are deleted.

To remove a **_single field_** , use one of the following methods:

Press the Delete key to remove the contents of the currently selected cell from the _Layout Grid_. (Fields cannot be multi-selected for removal.)  
Drag and drop a data dictionary field from the _Layout Grid_ to the _Fields_ list box. (Fields cannot be multi-selected for removal.)  
Right click on the cell containing the field and select the _Clear Current Cell_ option from the popup menu.

_(The ability to use the Delete key to remove a field was added in PxPlus 2021.)_

To remove a **_single row_** , use the following method:

Right click on a cell in the row and select the _Delete Row_ option from the popup menu.

To remove **_all fields_** on the current panel, use one of the following methods:

Click the **[Reset](Field%20Layout.htm#reset)** button, which displays a message for resetting the _Layout Grid_.  
Right click on a cell in the _Layout Grid_ and select the _Clear All Cells_ option from the popup menu.

## See Also

**[Moving Fields](Moving%20Fields.md)**
