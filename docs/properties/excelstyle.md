# Control Object Properties

**ExcelStyle** |  **_Excel Style Display (Grid Lines)_**  
---|---  
  
## Description

Excel style display

This property is used to control the display of grid lines in either the grid or the report view controls.

Possible values are:

0 |  No grid lines appear. **_(Default for Report View)_**  
---|---  
1 |  Grid lines appear both between the columns and between each line in the output. **_(Default for Grid)_**  
2 |  Vertical grid lines will be shown between columns.  
3 |  Horizontal grid lines will be shown between lines/row.  
  
#### **Note:**  
Prior to PxPlus v8.11 (build 9182), this property was only available on the grid and only accepted a value of 0 or 1. As of PxPlus v8.11, PxPlus supported the property in the report view and options 2/3.

_(The ability to support Report Views was added in PxPlus v8.11.)_

## Default

For GRID: 1  
For REPORT_VIEW: 0

## Used By

**GRID****REPORT_VIEW**
