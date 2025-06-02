# Control Object Properties

**Sort** |  **_Column Sorting_**  
---|---  
  
## Description

Column sorting: Sort the contents of the control

**For the Grid and Report View:** This property sets the number of the column on which the data is to be sorted. Positive integers indicate normal ascending sort order; negative integers indicate descending order. When using the grid sort on numeric data, the currency sign, thousands separator, and decimal point are ignored. The values used to represent these characters are established when the grid is first created.

**For the Tree View:** Sorting values indicate the following:

|  1 |  Automatically sort data in ascending order.  
---|---|---  
|  0 |  Reset sort indicators.  
|  -1 |  Causes the current [**'Item**](item.md) to be sorted.  
|  -2 |  Causes the current [**'Item**](item.md) and its descendants to be sorted.  
  
## Default

For GRID and REPORT_VIEW: 0  
For TREE_VIEW: 1

## Used By

**GRID****REPORT_VIEW****TREE_VIEW**
