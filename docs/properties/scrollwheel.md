# Control Object Properties

**ScrollWheel** |  **_Set Scroll Wheel Increment_**  
---|---  
  
## Description

Set scroll wheel increment

This property is used to define how many lines each click of the scroll wheel will move a list box or grid.

Possible values are:

|  0 |  Scroll wheel support (all events go to parent window).  
---|---|---  
|  1 |  Scroll only if the control has focus (mouse can hover on or off control).  
|  2 |  Scroll only if the control has focus (mouse must be hovered over control).  
|  3 |  If control does not have focus, then scroll when mouse hovers over this control (otherwise, same as 1).  
|  4 |  If control does not have focus, then scroll when mouse hovers over this control (otherwise, same as 2).  
  
## Used By 

**DROP_BOX****GRID****H_SCROLLBAR****LIST_BOX****LIST_VIEW****MULTI_LINE****REPORT_VIEW****TREE_VIEW****VARDROP_BOX****VARLIST_BOX****V_SCROLLBAR**
