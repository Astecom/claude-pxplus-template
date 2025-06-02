# Control Object Properties

**RowHiLight** |  **_Row Selection Highlight_**  
---|---  
  
## Description

Row selection highlight: 1 = Row highlight; 0 = Cell highlight

This enables selection of a full row rather than limited to cells. Only locked cells are highlighted. One side effect is that when the cells are locked, the grid becomes a fancy list view.

The **[SelectCount](selectcount.md)** property returns the number of selected cells; however, when the **RowHiLight** property is set, **SelectCount** returns the number of rows:

**_Example:_**

> 0010 BEGIN  
>  0020 LET G=10  
>  0030 GRID G,@(20,10,50,12)  
>  0040 GRID ADD G,5,9  
>  0050 LET G'ROWHILIGHT=1  
>  0060 GRID SELECT G,0,0  
>  0070 PRINT G'SELECTCOUNT  
>  0080 INPUT *

## Used By

**GRID**
