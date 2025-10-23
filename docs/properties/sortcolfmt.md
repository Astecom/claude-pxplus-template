# Control Object Properties

**SortColFmt $** |  **_Grid Column Sorting Format_**  
---|---  
  
## Description

Grid column sorting format

This property is used to control the sorting of grid columns when a sort by date is required. Normally, when the grid sorts columns, it does so by either a _numeric_ value comparison or a _string_ compare. If the column contains a _date_ , you need to tell the system the format of the date being provided so it can determine which value is the year, month or day respectively.

The SortColFmt$ property is used to control the sorting of date columns. This property can be set from one to three characters long where each character can be a '**#** ', '**S** ', '**Y** ', '**M** ' or '**D** ', as follows:

  * If set to '**#** ', the column will be sorted based on the assumption that all data in the column is numeric.
  * If set to '**S** ', the assumption is that all data in the column are strings and will be sorted based on string values.
  * If set to '**Y** ', '**M** ' or '**D** ', the letters will be used to indicate the order of the data in the column. (Lowercase '**s** ', '**y** ', '**m** ' or '**d** ' is also supported.)



**Example:** If the date is of the form day, month, then year, the 'SortColFmt$ property should be set to "DMY".

#### **Note:**  
For a date sort to work properly, the dates in the column must have a divider, such as a _dash_ ( **-** ), separating the date components.  
  
**_Example:_**  
  
01-01-2016  
  
A date such as 01012016 does not sort.

If this field is **_not_** set, the column will be pre-scanned to determine if all values are numeric. If all the column data is numeric, then a numeric sort will be performed; otherwise, a string sort will be used.

The 'SortColFmt$ property works in conjunction with the **['Column](column.md)** or **['Colno](colno.md)** property to identify the column to which the sort format will be applied.

#### **Note:**  
When forcibly sorting numerically, mixing numeric and non-numeric data will result in an incorrect and somewhat random sort sequence based on the original input sequence.

_(The SortColFmt$ property was added in PxPlus v7.10.)  
(The ability to specify a format or "#" or "S" was added in PxPlus v11.)_

## Default

The default value is "" (no sorting definition).

## Used By

**GRID**
