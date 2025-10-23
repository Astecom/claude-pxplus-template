# Control Object Properties

**ColumnSizeLock** |  **_Column Resizing by User_**  
---|---  
  
## Description

Column resizing by user

This property controls the ability of the user to resize the width of a column by dragging the column header.

If set to 0, the column may not be resized. If set to 1, the column is resizable.

When used with the **_grid_** , this property is only valid when the grid itself is deemed resizable (the **[Resizable](resizable.md)** property > 0).

_(Support for the ColumnSizeLock property in Report View Lists was added in PxPlus v9.00, build 9200.)_

## Default

For GRID: 0 (fixed size)  
For REPORT_VIEW: 1 (resizable)

## Used By

**GRID****REPORT_VIEW**
