# Control Object Properties

**TopVisibleRow** |  **_Control Row Visibility in Grid_**  
---|---  
  
## Description

Control row visibility in grid

This property is used to access the row number that is currently displayed at the top of the grid. It can be used to determine/control vertical scrolling of the data.

If set, it must be set to a value between 1 and the number of rows in the grid. Setting this property to a row near the bottom of the grid contents does not always guarantee that the row identified will be the first row on the grid. The system will attempt to leave the bottom few rows visible; however, it will assure that the row indicated is visible.

_(The TopVisibleRow property was added in PxPlus v6.30.)_

## Default 

Not Applicable

## Used By 

**GRID**
