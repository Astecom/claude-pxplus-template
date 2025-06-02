# Compound Properties  
  
**Drag and Drop Grid Properties** |  **_Grid_**  
---|---  
  
The following properties are associated with drag and drop functionality in **_Grids_** :

|  **['DraggedColumn$](properties_list.htm#Mark41)** |  Column where the drag started from  
---|---|---  
|  **['DraggedRow](properties_list.htm#Mark42)** |  Row where the drag started from  
|  **['DroppedOnColumn$](properties_list.htm#Mark213)** |  Column dropped on  
|  **['DroppedOnRow](properties_list.htm#Mark214)** |  Row dropped on  
  
When dragging off a Grid, the starting point must be a column or row header. If a column header is used and column swapping is enabled using the [**'SwapEnabled**](../properties/swapenabled.md)**** property, then the drop target must be a control other than the Grid itself. This is because dragging a column header within the Grid is how columns are swapped.

**_Example:_**

> ! Drag and drop rows from g1 (grid 1) to g2 (grid 2)  
>  ROW_DROP:  
>  R=G1'DRAGGEDROW;  
>  if R<1 \  
>  then return  
>  G1'ROW=R  
>  read data from G1'ROWDATA$ to iol=G1'LOADIOLIST$  
>  grid delete G1,0,R  
>  R=max(1,min(G2'DROPPEDONROW,G2'ROWSHIGH))  
>  grid add G2,0,R  
>  G2'ROWDATA$=rec(G2'LOADIOLIST$)  
>  return

## See Also

[**GRID Create/Control Grid**](../directives/grid.md)
