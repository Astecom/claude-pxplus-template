# Compound Properties

**Multiple Selection Properties** |  **_Grid, List Box, List View, Tree View_**  
---|---  
  
The following properties are used to process multiple selections in **_Lists_** and **_Grids_** :

|  **['SelectCount](properties_list.htm#Mark131)** |  Number of items/cells selected. Set this property to zero to de-select all.  
---|---|---  
|  **['SelectIndex](properties_list.htm#Mark132)** |  Index to **'SelectItem**. Set this to point to a selected element; e.g. set to 1 to point at the first item selected, 2 to point at the second item selected, etc.  
  
The following property applies to **_Lists_** only:

|  **['SelectItem](properties_list.htm#Mark133)** |  Item number in list selected. This returns the sequential location within the list of the item being pointed at by the **'SelectIndex** property.  
---|---|---  
  
See [**LIST_BOX**](../directives/list_box.md) directive or [**GRID**](../directives/grid.md) directive.

**_Example:_**

> for I=1 to LB1'SelectCount  
>  LB1'SelectIndex=I  
>  print LB1'SelectItem  
>  next

## In Tree Views

In addition to the above properties, **_Tree View_** controls support the following:

|  **['SelectedChildren](properties_list.htm#Mark268)** |  Number of child items selected  
---|---|---  
|  **['SelectStateMask](properties_list.htm#selectstatemask)** |  State filter to apply  
  
Use **'SelectedChildren** in conjunction with **'SelectedStateMask** to return the number of child items with the desired state. 

When **'SelectedStateMask** is set, the **'SelectCount** , **'SelectIndex** and **'SelectItem** properties will reflect only those items that have the specified state; e.g. to find all items that have a state of one, set **'SelectStateMask** to 1. **'SelectCount** will then indicate the number of items that have this state and sequencing through **'SelectIndex** and **'SelectItem** will return their item numbers. 

## In Grids

The following properties can be applied to **_Grids_** for access to selected items based on the location defined by **['SelectIndex](properties_list.htm#Mark132)**:

|  **['SelectRow](properties_list.htm#Mark136)** |  Row number of selected cell  
---|---|---  
|  **['SelectColumn](properties_list.htm#Mark130)** |  Column number of selected cell  
|  **['SelectValue$](properties_list.htm#Mark138)** |  Value within selected field  
|  **['SelectText$](properties_list.htm#Mark137)** |  Text contained within the highlight  
  
**_Example:_**

> ! Example using multiple selection properties for a Grid control  
>  CELL_SELECTIONS:  
>  TOTAL_SELECTED=G1'SELECTCOUNT  
>  if G1'ROWSHIGH<1 or TOTAL_SELECTED=0 \  
>  then exit  
>  for T=1 to TOTAL_SELECTED  
>  G1'SELECTINDEX=T  
>  SL_VAL$=G1'SELECTVALUE$  
>  SL_COL=G1'SELECTCOLUMN  
>  SL_ROW=G1'SELECTROW  
>  G1'ROW=-1  
>  G1'COLUMN=SL_COL  
>  SL_COL_TITLE$=G1'VALUE$  
>  msgbox "Cell Value:"+pad(SL_VAL$,50)+sep+"Column:"+str(SL_COL)+sep+"Row:"+str(SL_ROW)+sep+"Column Title:"+pad(SL_COL_TITLE$,50),"Selection Item"+str(T)+" of "+str(TOTAL_SELECTED)  
>  next T  
>  exit
