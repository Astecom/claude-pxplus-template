# Control Object Properties

**ValueNoSignal $** |  **_Change Control's Value Without Generating OnChange Event_**  
---|---  
  
## Description

Change control's value without generating OnChange event

Same as 'Value$; however, when used to change the value in the control, no "OnChange" event will occur. Normally, on list style or input controls which have Signal All Changes enabled, changing the control value under either program control or by user input will generate an OnChange event. Changing the value of a control using the ValueNoSignal$ property allows the controls value to change without generating the OnChange event.

_(The ValueNoSignal$ property was added in PxPlus v6.30.)_

## Used By 

**LIST_BOX****LIST_VIEW****MULTI_LINE****REPORT_VIEW TREE_VIEW****VARDROP_BOX****VARLIST_BOX**
