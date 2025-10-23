# Control Object Properties

**SelectCount** |  **_Number of Items/Cells Selected_**  
---|---  
  
## Description

Number of items/cells selected

This property returns the number of selected cells; however, when the **[RowHiLight](rowhilight.md)** property is set, **SelectCount** returns the number of rows:

**_Example:_**

> 0010 BEGIN  
>  0020 LET G=10  
>  0030 GRID G,@(20,10,50,12)  
>  0040 GRID ADD G,5,9  
>  0050 LET G'ROWHILIGHT=1  
>  0060 GRID SELECT G,0,0  
>  0070 PRINT G'SELECTCOUNT  
>  0080 INPUT *

Set the S**electCount** property to zero to deselect all items.

## See Also

**[Multiple Selections](../control_object_properties/multipleselect.md)**

## Used By

**GRID****LIST_BOX****LIST_VIEW****REPORT_VIEW****TREE_VIEW**

****

****
