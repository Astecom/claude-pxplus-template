# Compound Properties

**Load/Access by Row Grid Properties** |  **_Grid_**  
---|---  
  
The following properties are used to load and access a Grid **_by row_** :

|  **['LoadList$](properties_list.htm#Mark90)** |  Lists column names in the order they appear physically in the Grid.  
---|---|---  
|  **['LoadIOList$](properties_list.htm#Mark89)** |  Same list of variables as **'LoadList$** but in compiled IOList format.  
|  **['RowData$](properties_list.htm#Mark121)** |  Returns or sets a complete row of data corresponding to the names defined in the **'LoadList$**. Each cell value is separated by the defined column separator character, **['Sep$](../properties/sep_.md)**.  
  
**'LoadList$** returns a list of column names in the order in which they physically appear within the Grid object. When a Grid is defined using **FMT=** in the **GRID** directive or columns names are assigned to columns in a Grid, **'LoadList$** returns a list of those column names in their current display order. The compiled version, **'LoadIOList$** , simplifies the loading of Grid rows from direct file contents or other IOList-based items.

**_Example:_**

> myGrid.ctl'RowData$=rec(myGrid.ctl'LoadIOList$)  
>  grid load myGrid.ctl,1,row,rec(myGrid.ctl'LoadIOList$)

The **'RowData$** property returns or sets a complete row of data in accordance to the names defined in **'LoadList$** or **'LoadIOList$**.

The data returned is for the row currently identified by the **'Row** property.

**_Example:_**

> read data from X'ROWDATA$ to iol=X'LOADIOLIST$  
>   
> **_or_**   
>   
>  X'ROWDATA$=rec(X'LOADIOLIST$)

Because the properties **'LoadList$** , **'LoadIOList$** and**'RowData$** use logical column names, column swapping has no impact.

## See Also

[**GRID Create/Control Grid**](../directives/grid.md)
