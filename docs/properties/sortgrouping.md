# Control Object Properties

**SortGrouping** |  **_Lines Per Entry for Grid Sort_**  
---|---  
  
## Description

Lines per entry for grid sort

This property is used to control the sorting of a grid by defining the number of lines that make up a logical group within the grid.

**Example:** If each logical entry in the grid contained two lines, you would set 'SortGrouping to 2. This will cause the sort to keep each pair of lines together when sorting.

In terms of the values being sorted, only the data in sort column from the first line are considered when sorting. The contents of the secondary lines within the group will not be considered.

_(The SortGrouping property was added in PxPlus v7.10, build 9171.)_

## Default

Default value is 1 (each line is independent).

## Used By

**GRID**
