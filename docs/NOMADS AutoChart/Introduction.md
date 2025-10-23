# Charting

**NOMADS AutoChart** |  **__**  
---|---  
  
**NOMADS AutoChart** allows the user to quickly define simple charts based on the columns of a List Box, Grid or Query, to save the definitions, and to display the charts from the right-click popup menu or Query+ interface.

AutoChart is available as a selection in the List Box and Grid system right-click popup menu. See **[List Box and Grid System Popup Menu](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Popup%20Menu/List%20Box%20and%20Grid%20System%20Popup%20Menu.md)**.

AutoCharts can also be accessed on the **[Query+](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Overview.htm#queryplus)** interface by using the _Charts_ toolbar button. The _Define a chart_ option invokes the **[Chart Wizard](Defining%20and%20Displaying%20an%20AutoChart.htm#Welcome)** to walk you through the process to design a new AutoChart. Special public developer definitions can also be defined in the **[Query Definition](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.md)**. See **[Defining an AutoChart](Defining%20and%20Displaying%20an%20AutoChart.htm#Defining_an_AutoChart)**.

#### **Note:**  
The AutoChart feature is available only to List Boxes, Grids and Query+ displays **_with more than one column_** defined.

_(NOMADS AutoChart was added in PxPlus v11.00.)_

Pie, Bar, Column and Line charts can be defined based on:

  * Simple values from a specified column. **_OR_**
  * Sums, averages, maximum or minimum values derived from column values grouped against values from another column. **_OR_**
  * Counting the number of times a column value occurs.



**_Data filters_** can be applied to exclude rows of data from the chart calculations. Multiple chart definitions can be created for any List Box, Grid or Query+ display.

AutoCharts can be **_Public_** or **_Private_**. Public chart definitions are available to all, whereas private definitions can only be accessed by the user who created them. A special setup is required to create/edit public chart definitions, which is described in **[Defining an AutoChart](Defining%20and%20Displaying%20an%20AutoChart.htm#Defining_an_AutoChart)**. This allows developers to create public definitions for their applications, which users cannot edit.

_(The ability to separate developer and end-user Auto Chart definitions was added in PxPlus 2020.)_

A _public_ AutoChart definition can be used to automatically generate and load chart data into a **_Smart Chart_** control. For information on defining a Smart Chart control, see **[Smart Chart Definition](../NOMADS%20Graphical%20Application/Smart%20Controls/Defining%20Smart%20Controls.htm#Mark8)**.

When selecting an AutoChart to display, the chart is displayed as a concurrent window so that the user may continue to work on the original panel. Only one AutoChart can be displayed per panel at any time. If the contents of the List Box or Grid change, an _Auto-Update_ option in the AutoChart definition can be selected to force the chart to be updated within seconds of the last change. If the _Auto-Update_ option is **_not_** selected, a _Refresh_ button allows the user to update the AutoChart when desired.

The appearance of the chart will differ based on the brand of chart selected. PxPlus supports **Plus Charts** , **RGraph Charts** , and **Google Interactive Charts** (using the Google Visualization API), as well as the internal native chart control. See **[Charting Alternatives in PxPlus](../Charting%20Alternatives%20in%20PxPlus/Introduction.md)**.

To add a Chart control using the NOMADS Panel Designer, see **[Chart Control](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Chart%20Control/Chart.md)**.

## See Also

**[Defining an AutoChart](Defining%20and%20Displaying%20an%20AutoChart.htm#Defining_an_AutoChart)**  
**[Chart Wizard](Defining%20and%20Displaying%20an%20AutoChart.htm#Welcome)**  
**[Displaying an AutoChart](Defining%20and%20Displaying%20an%20AutoChart.htm#Displaying_an_AutoChart)**  
**[NOMADS Chart Control](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Chart%20Control/Chart.md)**  
**[Smart Chart Definition](../NOMADS%20Graphical%20Application/Smart%20Controls/Defining%20Smart%20Controls.htm#Mark8)**
