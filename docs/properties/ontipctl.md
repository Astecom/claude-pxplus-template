# Control Object Properties

**OnTipCtl** |  **_CTL Event to Fire Before Showing Tip_**  
---|---  
  
## Description

CTL event to fire before showing tip

This property controls the CTL event that will be fired prior to the system displaying the Tip for any control. If the value of this property is non-zero, the system will use its value of a CTL event to fire and will defer the display of the tip until the application changes the value in 'Tip$. If the value in 'Tip$ is not changed, no tip will be displayed.

Setting this to zero **_(Default)_** disables the event from being sent and the current 'Tip$ will be displayed.

_(The OnTipCtl property was added in PxPlus v7.10.)_

## Default

0

## Used By 

**BUTTON****CHART****CHECK_BOX****DROP_BOX****GRID****H_SCROLLBAR****LIST_BOX****LIST_VIEW****MULTI_LINE****RADIO_BUTTON****REPORT_VIEW****TREE_VIEW****TRISTATE_BOX****VARDROP_BOX****VARLIST_BOX****V_SCROLLBAR**
