# Grid Control 

**Named Columns** |  **__**  
---|---  
  
Grid columns can be given logical names. This feature allows applications to assign names to columns that are the same as the variables used within the underlying application; i.e. ITEMID$, DESC$, PRICE, QTY. It also facilitates dealing with swapped columns. Naming may be handled in NOMADS through the **Grid Format Definition** dialogue (see **[Formatting a Grid](Formatting%20a%20Grid.md)**) or programmatically using PxPlus **[Control Object Properties](../../../control_object_properties.md)**.

## NOMADS Definition

In the **Grid Format Definition** dialogue, enter the _Column Name_. The name can represent a string or numeric variable. The column name is optional. The NOMADS format definition applies to the **FMT=** option when the Grid is created:

> GRID 10,@(10,10,60,10), FMT="[Item](Normal:ITEMID$)L15,[Description] (Normal:DESC$) L20,[Price](Normal:PRICE)L12,[Qty](Normal:QTY)L10"

## PxPlus Properties

_Control Object_ properties can also be used to set column names. This is done by setting the **['Row](../../../properties/row.md)** to -1 and assigning a variable to the **['Text$](../../../properties/text_.md)**:

> GRID 10,@(10,10,50,10) ! Define grid   
>  X=10   
>  X'COLUMNSWIDE=4,X'ROW=-1   
>  X'COLUMN=1,X'VALUE$="Item",X'TEXT$="ITEMID$",X'COLUMNWIDTH=15   
>  X'COLUMN=2,X'VALUE$="Description",X'TEXT$="DESC$",X'COLUMNWIDTH=20   
>  X'COLUMN=3,X'VALUE$="Price",X'TEXT$="PRICE",X'COLUMNWIDTH=12   
>  X'COLUMN=4,X'VALUE$="Qty",X'TEXT$="QTY",X'COLUMNWIDTH=10

For a list of properties that can be applied to an entire **_grid_** , a **_cell_** , a **_column_** or a **_row_** , see **[Grid Properties](../../../control_object_properties/grid_properties.md)**.

## Referencing a Column

Use the **['Column$](../../../properties/column_.md)** property to reference a column:

> X'COLUMN$="QTY",X'ROW=4,X'VALUE$="200" ! Assign cell value 200

If you set **'Column$** with the name of a variable, then internally, the column number is used as a pointer. If you read the property **['Column](../../../properties/column.md)**, then the column number is returned. **'Column$** returns the name of the column. Column swapping has no impact on an application that uses logical column names to identify a column.
