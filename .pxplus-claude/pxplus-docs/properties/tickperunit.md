# Control Object Properties

**TickPerUnit** |  **_Display Units in Grid "Ruler"_**  
---|---  
  
## Description

Display units in grid "ruler"

This property sets the number of ruler-style "ticks" between numbers (units) displayed in the header cells (row and column) of the grid.

**Example:** 'TickPerUnit=8 will display a number every 8 ticks on the ruler and cause median points (at 'TickPerUnit/2) to appear slightly larger.

Ruler numbers begin at zero and count upwards by whole numbers but will be reset to zero again if the header cell contains a **'[Value$](value_.md)** greater than null.

## Default

0

## Used By

**GRID**
