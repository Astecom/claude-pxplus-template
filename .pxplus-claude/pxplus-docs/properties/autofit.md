# Control Object Properties

**AutoFit** |  **_Force Grid to Resize Column to Fit Contents_**  
---|---  
  
## Description

This property, when set to any value, forces the associated grid to resize the column currently selected by the **['Colno](colno.md)** or **['Column](column.md)** property to the width required to fit its contents.

If the currently selected column is set to zero, **_all_** columns in the grid will be resized.

The value set in 'AutoFit indicates how many rows to check, with zero indicating **_all_** rows and the column header. Any value other than zero specifies the number of rows (starting at the first row) to take into account in computing the new column width. A non-zero setting may be used to minimize the time it might take to scan all the rows in a large grid.

Reading this property returns zero, as the value of the property itself has no meaning, and simply the act of setting it causes the grid to be updated.

#### **Note:**  
If a column has the **[ColumnSizeLock](columnsizelock.md)** property set to **_On_** or a **[ColumnWidth](columnwidth.md)** of zero (hidden), the width will **_not_** be adjusted unless the column number is explicitly set to that column (i.e. **'Colno** is **_not_** zero).

_(The AutoFit property was added in PxPlus 2017.)_

## Used By

**GRID**
