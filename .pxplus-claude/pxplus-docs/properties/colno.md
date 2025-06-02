# Control Object Properties

**Colno** |  **_Column Number of Grid, List View or Report View_**  
---|---  
  
## Description

Column number of grid, list view or report view

This property is fundamentally the same as referring to the **['Column](column.md)** property, however, is included to allow a numeric column number to be specified as a string with accessing the properties.

If the application references **['Column$](column_.md)** in a grid, it will receive the logical column name as opposed to its number. Referencing **'Colno$** will return the column number as a string.

_(The Colno property was added in PxPlus v7.10.)_

## Used By

**GRID****LIST_VIEW** **REPORT_VIEW**
