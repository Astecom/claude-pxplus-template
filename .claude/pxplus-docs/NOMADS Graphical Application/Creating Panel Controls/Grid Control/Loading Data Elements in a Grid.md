# Grid Control 

**Loading Data Elements in a Grid** |  **__**  
---|---  
  
Once created, a grid can be loaded using **GRID LOAD** syntax in your program code. **[Smart Controls](../../Smart%20Controls/Overview.md)** can also be used to simplify this process by auto-loading data based on query definitions. Use the **Auto Load** property to set this feature (if activated).

You can programmatically retrieve or set a selected value in a grid, using the variable with the same name as the control. See **[Accessing and Manipulating Controls](../../Program%20Interaction/Event-Handler%20Routines/Accessing%20and%20Manipulating%20Controls.md)**.

The **[GRID LOAD](../../../directives/grid.htm#Mark16)** directive requires the specification of both the target row and column. All column and row specification are base 1; therefore, the top most cell is 1,1. By default, there are also column and row headers that can be accessed by column and/or row -1. These headers may not be included in any range specifications.

If you write to a grid when the column number is zero (0), then all columns will be affected by the change. If the row number is zero (0), then all rows will be affected by the change. If both are zero (0), then all cells will be affected.

The three ways to load a grid are explained in these sections below: **GRID LOAD Directive** , **Dynamic Properties** and **Named Columns**.

Loading and interacting with a grid can sometimes be slow, especially when working in a WindX environment. For information and examples on the different ways to speed up grid interactions, see **[How to Speed Up Grid Loading and Processing](../../../How%20To/How%20to%20Speed%20Up%20Grid.md)**.

##  GRID LOAD Directive

**GRID LOAD**  _ctl_id,col,row_**[,**  _data$_ **]**

To make the load process easier, the **[GRID LOAD](../../../directives/grid.htm#Mark16)** directive will accept multiple rows and columns of data. The column data must be separated by the character identified in the column separator in the grid creation, and the rows must be separated by the delimiter contained in the last data character of the loaded data.

The column number and row number are used to indicate the starting point within the grid. If both are zero (0), then the grid will be cleared before loading. If the row is zero (0), then the data will be appended after the last existing row on the grid.

##  Dynamic Properties

The control attribute **'Value$** can be used to write cell contents having first specified the **['Column](../../../properties/column.md)** and **['Row](../../../properties/row.md)** to identify the cell desired.

##  Named Columns

The **['LoadList$](../../../properties/loadlist_.md)** property allows the application programmer to define the order of the columns that are loaded from the data sent to the grid by a **GRID LOAD**. Historically, **GRID LOAD** loads the columns in sequence; i.e. column 1, column 2, etc. Unfortunately, this can cause a problem with the ability to alter column order (swap columns). To avoid this issue, you can define the order of the column data that is sent.

When you read this property, it returns either column order list (if previously defined) or the column order by name as it exists currently in the grid.

The **['LoadIOList$](../../../properties/loadiolist_.md)** property contains the compiled version of **'LoadList$**. The grid's column separator **['Sep$](../../../properties/sep_.md)** will be included between each variable in the IOList. Using this list enables the user to load data by record, as well as overcome problems involved with swapping columns.

**_Example:_**

> GRID LOAD Grid1,1,Row,REC(Grid1'LoadIOList$)

#### **Note:**  
Use of this property assumes that the grid columns have been named using proper variable names. Failure to use proper variable names will result in an invalid IOList being returned.

## Assigning a Row of Data

The property **['RowData$](../../../properties/rowdata_.md)** will set a row of data in accordance with the names defined in the **['LoadList$](../../../properties/loadlist_.md)**. The row number must first be identified using the **['Row](../../../properties/row.md)** property.

**_Example:_**

Assuming X contains the CTL value for the grid 

> X'ROW=5   
>  X'ROWDATA$=REC(X'LOADIOLIST$)

... loads the contents of the IOList into row 5.
