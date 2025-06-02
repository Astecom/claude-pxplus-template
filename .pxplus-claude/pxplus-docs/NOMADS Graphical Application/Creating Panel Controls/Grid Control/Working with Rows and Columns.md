# Grid Control 

**Working with Rows and Columns** |  **__**  
---|---  
  
## Adding/Deleting/Clearing Rows and Columns

To insert a new column or row:

> **GRID ADD** _ctl, col, row_

To delete a column or row:

> **GRID DELETE** _ctl, col, row_

To clear a cell or range of cells:

> **GRID CLEAR** _ctl, col, row, #cols, #rows_

The **GRID ADD** directive can be used to add new rows/columns to the grid. Either a row or column or both must be given (non-zero).

**_Example:_**

To insert a new column 3:

> GRID ADD ctl, 3, 0

The **GRID DELETE** directive can be used to remove columns and/or rows. If the row number is zero, only the column will be deleted and vice-versa. If both row and column are zero, then all cells will be deleted.

The **GRID CLEAR** directive can be used to reset a range of cells to the default (empty) setting.

## See Also

**[GRID Directive](../../../directives/grid.md)**
