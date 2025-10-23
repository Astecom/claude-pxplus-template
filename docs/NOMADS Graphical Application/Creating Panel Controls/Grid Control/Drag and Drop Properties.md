# Grid Control   
  
**Drag and Drop Properties** |  **__**  
---|---  
  
Grid controls support drag and drop functionality. The following four properties are used to support drag and drop (see **[Grid Properties](../../../control_object_properties/grid_properties.md)**):

|  **['DraggedColumn$](../../../properties/draggedcolumn.md)** |  Column where the drag started from  
---|---|---  
|  **['DraggedRow](../../../properties/draggedrow.md)** |  Row where the drag started from  
|  **['DroppedOnColumn$](../../../properties/droppedoncolumn.md)** |  Column dropped on  
|  **['DroppedOnRow](../../../properties/droppedonrow.md)** |  Row dropped on  
  
When dragging off a grid, the starting point must be a column or row header. If a column header is used and column swapping is enabled using the **['SwapEnabled](../../../properties/swapenabled.md)** property, then the drop target must be a control other than the grid itself. This is because dragging a column header within the grid is the method used to swap columns.

See **[Drag and Drop Utility](../../Panel%20Designer/Options%20and%20Utilities/Drag%20and%20Drop%20Utility.md)**.
