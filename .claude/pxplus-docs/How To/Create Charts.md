# How to Use PxPlus Query Definitions in Non-NOMADS Environments

**Create Charts**|   
---|---  
  
In the **[Query Definition](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.md)**, you can create simple chart definitions based on the columns of a query, which can be displayed in the query Lookup Table at run time or can be used to draw a chart on a panel.

Click the _Define Chart_ button on the **Query Definition** toolbar to launch the **[Chart Wizard](../NOMADS%20AutoChart/Defining%20and%20Displaying%20an%20AutoChart.htm#Welcome)** that will step you through the process of creating, editing or deleting a public **[NOMADS AutoChart](../NOMADS%20AutoChart/Introduction.md)** definition based on the query data.

> Once defined, a public chart definition can be displayed in the **[Run-Time Query](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Run-time%20Query.md)** by anyone whenever the query is displayed in a query Lookup Table.

> #### **Note:**  
Different chart brands (i.e. Plus, Google, RGraph) are available for displaying the charts. The above example is set in the **[%NOMADS'Chart$](../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#chart)** variable.

The AutoChart definition can also be used to generate chart images that you can add to your application. This is done by using the **[*TOOLS/CHARTIMAGE](../utilities/chart_image.md)** utility:

> CALL "*tools/chartimage", ERR=_stmtref_ , _query$_ , _library$_ , _chart$_ , _imgPath_ _$_ [,_imgWidth_ , _imgHeight_]

**_Example:_**

> CALL "*tools/chartimage","qclient","panels.en","Sales by Sales Rep","sales.png"

> 
