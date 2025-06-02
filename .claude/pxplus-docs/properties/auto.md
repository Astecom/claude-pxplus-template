# Control Object Properties

**Auto** |  **_Signal On All Changes_**  
---|---  
  
## Description

Signal on all changes

When set, the control will generate a 'Change' event whenever its value changes as opposed to the default _Off_ state where the control will only generate the change event when losing focus.

Possible values are:

0 |  Only signal change when exiting the control or on special event such as double click/Enter. **_(Default)_**  
---|---  
1 |  Signal all changes to the value of the control regardless of why the change occurred.  
2 |  Signal all changes done by the user but not done by the program. (The ability to only receive user changes was added in PxPlus v7.00.)  
  
## Default

0 - Only signal change when exiting the control or on special event such as double click/Enter

## Used By 

**DROP_BOX****GRID****H_SCROLLBAR****LIST_BOX****LIST_VIEW****MULTI_LINE****MULTI_LINE _(RTF word processing style)_ ****REPORT_VIEW****TREE_VIEW****VARDROP_BOX****VARLIST_BOX****V_SCROLLBAR**
