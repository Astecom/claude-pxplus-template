# Control Object Properties

**SortOnHdrClick** |  **_User-Initiated Column Sorting_**  
---|---  
  
## Description

User-initiated column sorting

This property is used to control the sorting of grid or report view columns based on the user clicking the column header.

## For the Grid

The property exists **_both_** for the complete grid **_and_** on each column. To reference the grid settings, set [**'Column**](column.md) to zero prior to accessing the property. To reference a column, set the 'Column property to the desired column prior to access.

Possible values are:

0 |  Disable sorting on click of column header.  
---|---  
1 |  Enable sorting on click of column header.  
-1 |  Use grid default setting. **_(Column Only)_**  
  
When setting the property for a specific column, you can specify a value of -1, which forces the column to adhere to the current grid default setting.

_(The SortOnHdrClick property support on the Grid was added in PxPlus v6.30.)_

##  For the Report View

This property is used to enable/disable the column sorting options.

Possible values are:

0 |  Disable sorting - column does not sort on click of column header.  
---|---  
1 |  Enable sorting - column will sort on click of column header. **_(Default)_**  
-1 |  Clicking the header generates a CTL event and places an EOM code of "H" in the READ queue. The **['ColumnClicked](columnclicked.md)** property will have the column number of the column whose header was clicked. Application can respond accordingly.  
  
_(Value of -1 for Report Views was added in PxPlus 2017.)_

## Default

For GRID: 0 (Column sorting is disabled on the grid and all columns.)  
For REPORT_VIEW: 1 (Column sorting is enabled; column will sort on click of column header.)

## Used By 

**GRID****REPORT_VIEW**
