# Control Object Properties

**OnLoadCtl** |  **_CTL Event to Fire When Contents Change_**  
---|---  
  
## Description

CTL event to fire when contents change

This property, when set to a non-zero value, causes the system to generate an internal CTL event following any changes to a list box or grid. It can be used to monitor changes to a list style control so that external action (such as updating screen or files) can be performed. If the value of this property is non-zero, the system will use its value as a CTL event to generate; if zero **_(default state)_** , no event will be generated.

To avoid multiple signals being generated, the system will defer the generation for approximately 1/2 second following the last update. This means that when multiple rows/cells are being updated, the event will generally only occur once the updating is complete.

_(The OnLoadCtl property was added in PxPlus v7.10.)_

## Default

0 (zero)

## Used By

**DROP_BOX****GRID****LIST_BOX****LIST_VIEW****REPORT_VIEW****VARDROP_BOX****VARLIST_BOX**
