# Control Object Properties

**SignalOnExit** |  **_Signal Event on Exit_**  
---|---  
  
## Description

Signal event on exit

This property controls whether a 'Change' signal will be generated when the control (or region of a grid control) is exited regardless of whether the control's value changes. Normally, controls only signal changes when the control loses focus **_and_** the contents have changed. Setting "SignalOnExit" allows a change signal to also be generated whenever focus leaves the control (or region for grid).

Possible values are:

|  0 |  No signal on exit unless control value has changed.  
---|---|---  
|  1 |  Signal on exit regardless of whether value has changed (on grid, signals whenever changing cell).  
|  2 |  Signal when changing row or on exit of grid (sets column value to 0 and row value to last row exited). **_(Grid Only)_**  
|  3 |  Signal when exiting the grid (sets column and row values to zero). **_(Grid Only)_**  
  
## Used By 

**DROP_BOX****GRID****LIST_BOX****LIST_VIEW****MULTI_LINE****MULTI_LINE** ** _(RTF word processing style)_ ****REPORT_VIEW****TREE_VIEW****VARDROP_BOX****VARLIST_BOX**
