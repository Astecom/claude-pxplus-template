# Grid Control 

**Reading Values from the Grid** |  **__**  
---|---  
  
Because of the nature of the grid, **GRID READ** requests must include the column and row of the cell that has been affected by a change. To assure that no change ever gets lost, all changes are placed in a **READ** queue.

Whenever a **GRID READ** request is executed, if there is additional input in the queue, another 'CTL Event' is initiated. This ensures that, should any CTL events be lost, the changed data will be preserved. However, it does pose a problem due to potential race conditions when the host is unable to keep up with the user input. Superfluous CTL events may be received. To avoid this problem, the **[GRID READ](../../../directives/grid.htm#Mark29)** directive receives an Error #2: END-OF-FILE on read or File full on write if no data is in the **READ** queue.

Under NOMADS, the READ is done automatically and should not be done by your application. By default, NOMADS will load the following variables:

> _ctl_name_.ROW   
>  _ctl_name_.COLUMN  
>  _ctl_name$_(contains the new value for the cell)

The **GRID READ** is performed by *winproc during the On Change logic. This logic is executed when focus leaves the current cell.

#### **Note:**  
The control object property **['Value$](../../../properties/value_.md)** can be used to read cell contents as well having first specified the **['Column](../../../properties/column.md)** and **['Row](../../../properties/row.md)** to identify the cell desired.

## Retrieving a Row of Data

The property **['RowData$](../../../properties/rowdata_.md)** will return a row of data in accordance with the names defined in the **['LoadList$](../../../properties/loadlist_.md)**. The row number must first be identified using the **['Row](../../../properties/row.md)** property.

**_Example:_**

Assuming X contains the CTL value for the grid ...

> X'ROW=5  
>  READ DATA FROM X'ROWDATA$ TO IOL=X'LOADIOLIST$

... loads the IOList with the data from row 5.
