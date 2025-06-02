# NOMADS AutoChart

**Defining and Displaying an AutoChart**|   
---|---  
  
## Defining an AutoChart 

To define an AutoChart for a **_List Box_** or **_Grid_** , the control must have multiple columns, and the system popup menu must be available to the control. An AutoChart is defined via the _Define a Chart_ menu item on the system menu. To add a system popup menu, see **[List Box and Grid System Popup Menu](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Popup%20Menu/List%20Box%20and%20Grid%20System%20Popup%20Menu.md)**.

To define an AutoChart for a **_Query_** , the system must use the **[Query+](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Overview.htm#queryplus)** interface. AutoChart definitions are based on the columns of a Query (_Standard Query_ or _Query List_) and are created using the _Define a Chart_ option in the **[Query Definition](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.md)** or a **[Run-Time Query](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Run-time%20Query.htm#charts)**.

End-user AutoChart definitions, which are only visible to the user who created them, are created at run time. To create an AutoChart for a List Box or Grid, the user must right click on the List Box or Grid when the panel is being run and select _Define a Chart_.

To create an end-user AutoChart for a Query, the user must invoke the Query and select the _Define a Chart_ menu item from the popup menu or from the _Charts_ button at the top of the Query. End-user AutoChart definitions are saved in _chart.inf_ files.

Public AutoChart definitions are visible to all users and can be created by the developer or by end-users with special settings on their system, as explained below. The difference is that public _developer_ definitions are created on the development system and saved in _chart.dev_ files, and public _end-user_ definitions are created on the end-user system and stored in _chart.inf_ files.

_(The ability to separate developer and end-user Auto Chart definitions was added in PxPlus 2020.)_

To create public developer AutoCharts that are separate from end-user definitions, the developer can set the %NOMADS property **[%NOMADS'DeveloperCharts=1](../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#developer_charts)** on their development system. This will save **_all_** new AutoChart definitions for both Query and/or List Box and Grid type definitions in the developer _chart.dev_ files. No end-user definitions can be made while this setting is in effect.

_(The %NOMADS'DeveloperCharts property was added in PxPlus 2020.)_

Another way to create a public developer Autochart based on a Query is to define the AutoChart from within the **[Query Definition](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.md)**. Charts can be defined either by clicking the _Define Chart_ button on the **Query Definition** toolbar or by clicking the _Test_ button and selecting the _Define a Chart_ menu item when the Query is running, similar to the end-user definition. A public AutoChart based on a Query List or a Standard Query definition can be used to create a **_Smart Chart_**. See **[Smart Controls](../NOMADS%20Graphical%20Application/Smart%20Controls/Overview.md)**.

It is also possible to allow end-users to define public AutoCharts. By setting the %NOMADS property **[%NOMADS'PublicAutoChart=1](../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#publicautochart)** for an end-user, that user has the capability to create private and public AutoChart definitions for Queries and/or List Boxes and Grids. These charts are defined at run time using the _Define a Chart_ menu item described above; however, a _Public_ option will now appear as part of the definition. Public definitions created in this manner are considered to be end-user public definitions and are stored in the _chart.inf_ file.

The **[AutoChart Definition File Maintenance](AutoChart%20Definition%20File%20Maintenance/Overview.md)** utility can be used to copy and delete AutoChart end-user and public definitions.

The _Define a chart_ option launches the **Chart Wizard** , which walks you through a series of steps for designing a new AutoChart. See **[Chart Wizard Steps](Defining%20and%20Displaying%20an%20AutoChart.htm#Steps)**.

  
**_Charts Button: Define a Chart option_**  
---  
  
**_Popup Menu: Define a Chart option_**  
  
##  Chart Wizard Steps

**[Step 1: Name Chart](Defining%20and%20Displaying%20an%20AutoChart.htm#Step1)**

Identify the chart design definition.

**[Step 2: Select Chart Type](Defining%20and%20Displaying%20an%20AutoChart.htm#Step2)**

Specify how the chart results are to be displayed.

**[Step 3: Select the Data](Defining%20and%20Displaying%20an%20AutoChart.htm#Step3)**

Choose the column to be charted.

**[Step 4 and Step 5: Group the Data](Defining%20and%20Displaying%20an%20AutoChart.htm#Step4)**

Set up a primary group to categorize the data and an optional secondary group to refine the chart definition.

**[Step 6: Filter the Data](Defining%20and%20Displaying%20an%20AutoChart.htm#Step6)**

Set up selection criteria to determine what data is to be used to generate the chart.

**[Step 7: Finish](Defining%20and%20Displaying%20an%20AutoChart.htm#Step7)**

Select options to govern the behavior of the chart and save the chart design.

##  Welcome Panel

Invoking the Chart Wizard displays the **_Welcome_** panel, which provides a **_How to Create a Chart_** link that launches PxPlus Help documentation. Click _Next_ to proceed to the first step.

> ##  Step 1: Name Chart

Identify the chart design definition.

> Indicate whether you want to create a new chart, or edit or delete an existing chart.

Give the new chart definition a unique and meaningful _Chart Name_ so that it can be identified later when displaying, editing or deleting it.

By default, an AutoChart is available only to the user who created it. By setting the **[PublicAutoChart](../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#publicautochart)** property of the %NOMADS object to non-zero, you can select the _Public chart_ option and create an AutoChart that will be available for **_all users_** to display:

> IF %nomads=0  
>  then %nomads=NEW("*obj/nomads")  
>  %nomads'PublicAutochart=1

##  Step 2: Select Chart Type

Specify how the chart results are to be displayed.

> Select a chart type to display the results: _Pie_ , _Bar_ , _Column_ or _Line_.

_Pie_ , _Bar_ and _Column_ charts are useful for comparing grouped results, such as sales totals for salespersons.

A _Line_ chart is useful for displaying actual values such as daily temperatures.

Enter a title to be displayed on the chart. When designing a new chart, the title initially defaults to the _Chart Name_ entered in **[Step 1](Defining%20and%20Displaying%20an%20AutoChart.htm#Step1)**.

_(The use of the Chart Name as the default title was added in PxPlus 2020.)_

##  Step 3: Select the Data

Select the column that contains the data to be charted.

> Indicate the type of value to be charted: _Actual Value**(default)** , Count, Sum, Average, Maximum_ or _Minimum_. Will the chart display calculated values (i.e. sums, averages, maximum or minimum values) or the actual values themselves? In these cases, the selected column must contain numeric values.

When charting sums, averages, maximum and minimum values, a **_primary group_** will need to be set up (in **[Step 4](Defining%20and%20Displaying%20an%20AutoChart.htm#Step4)**) to determine against which column the sum, average, etc. will be applied. When charting actual values, a primary group is optional.

If the purpose of the chart is to count the number of occurrences of values within a column, the column may contain numeric or text values. For example, in a list of sales transactions, a count could be based on the Sales Rep ID column to determine the number of sales in which each salesperson was involved.

##  Step 4 and Step 5: Group the Data

Set up a primary group to categorize the data (in **Step 4**) and an optional secondary group (in **Step 5**) to refine the chart definition. See **[Grouping the Data](Defining%20and%20Displaying%20an%20AutoChart.htm#Grouping_Data)**.

> _Count_ , _Sum_ , _Average_ , _Minimum_ and _Maximum_ chart options are cumulative or summary values and are based on grouping the data, such as sales totals for each salesperson where the sum of the sales amounts are grouped by the Salesperson ID. Another example would be inventory counts for products that are grouped by Product Line. For these chart options, a primary group is required.

Once a primary group has been set up, you have the option to specify a secondary data category to further refine the chart definition.

In  **Step 5**, set up an optional secondary group to allow comparisons of multiple sets of data, such as sales totals for a salesperson per month where the sales totals are grouped by Salesperson ID and the month portion of a Date field. Another example would be inventory counts for products across different warehouses that are grouped by Product Line and Warehouse.

#### **Note:**  
Pie charts do not support a secondary group but **_must_** have a primary group.

> A chart definition specifying the _Actual Value_ option does not require grouping; however, groupings can be set up based on the value of a specified column. For example, a file consisting of daily records containing the date, the name of a city and the average temperature in that city can be used to plot the daily temperature against the other cities, where the City field defines one grouping and the Day defines another.

_(The ability to define a secondary group was added in PxPlus 2020.)_

**_Grouping the Data_**

When setting up a primary and an optional secondary group, the first step is to select the column to be used for grouping.

The next step is to indicate the type of value in that column, i.e. _Numeric_ , _Text_ , _Year (from date)_ , _Month (from date)_ or _Day number (from date)_.

If the value is a date, it is important to specify year, month or day number rather than text, as the sorting sequence for the results will reflect the date sequence rather than the alphabetic sequence that is used for text. In the case of months, the results will include all 12 months with a point value of 0 included for any months not present in the data. In addition, months designated by a 2-character digit will be displayed using the abbreviated month name.

The grouping of the data can be based on a portion, rather than the whole value, of the column. To specify what part of the value to use, click the **_Define portion of the column value to use_** hyperlink button to invoke the **[Define Column Portion](Defining%20and%20Displaying%20an%20AutoChart.htm#Define_Portion)** window.

The **_Set (or Edit) Group Values_** hyperlink button (in **[Step 4 and Step 5](Defining%20and%20Displaying%20an%20AutoChart.htm#Step4)**) invokes the **[Group Information](Defining%20and%20Displaying%20an%20AutoChart.htm#GroupInfo)** window, which is used to define pre-set group member values for each grouping, if desired.

By default, in a chart with only a primary group specified, the chart points are displayed in a single color with the group name below each point in a _Column_ or _Line_ chart or next to each bar in a _Bar_ chart. A _Use Legend_ option is available (in **Step 4** only), which, when turned **_On_** , displays the chart points in different colors with a color-coded legend to identify the points. If a chart specifies both a primary group and a secondary group, the use of the legend is mandatory, and the _Use Legend_ option is not available.

**_Define Column Portion_**

To specify the portion of the data to use, indicate the position of the _Starting character_ and the maximum number of subsequent characters. This can be done in two ways. One way is to enter the desired value in the _Starting character_ and _Maximum characters_ fields. Another way is to use the mouse to highlight the portion to use from the sample value provided. The sample value displayed is taken from the selected column of a live record, if available; otherwise, the sample value will display a number of X's (depending on the length of the column).

> The first character is 1, and if you leave the _Maximum characters_ field blank, the default is the remainder of the value. The starting character position is determined by counting from the beginning of the value (i.e. from left to right).

If the _Count from end_ check box is selected, the starting character position is determined by counting from the end of the value (i.e. from right to left).

The values for the _Starting character_ position and/or _Maximum characters_ fields can be changed at any time either by entering the new value in the appropriate field or by clicking on the highlighted portion of the sample value to clear the previous highlight and then using the mouse to select the new portion.

Clicking _OK_ on the **Define Column Portion** window saves the desired settings and displays them on the wizard panel as shown above in **[Step 5](Defining%20and%20Displaying%20an%20AutoChart.htm#Step5)**.

**_Defining Pre-set Group Member Values_**

Values used for grouping data, such as Salesperson IDs or Department Codes, are derived from the dataset being processed. The dataset may not reference all possible members within the group. By default, the missing members will not appear in the chart; however, missing members can be included in the chart by supplying the information needed to determine all the possible members.

For example, suppose a company has three salespersons: Ann, John and William. When charting their sales for a particular month, John did not make any sales for that month. Because there were no records for John, by default, the chart would not include him. To include any missing salespersons, the names of all salespersons can be supplied as pre-set group member values. This can be done by clicking the **_Set (or Edit) Group Values_** hyperlink button (in **[Step 4 and Step 5](Defining%20and%20Displaying%20an%20AutoChart.htm#Step4)**) to invoke the  **Group Information** window for the current grouping.

> To create a chart containing all possible group members, you can supply a fixed list with all the member values, define an expression that will supply the values when evaluated, or supply file information that can be used to derive the values from file data.

The source of the group member values may be derived as follows:

**Source of Group Values** |  **Description**  
---|---  
_From Dataset_ |  **_(Default)_** Group member values are derived from the dataset being processed. The dataset may not have records for all group members, resulting in members not appearing in the chart.  
_Fixed values_ |  Enter one group member value per line in the input box.  
_Expression_ |  Enter an expression that will supply the list of member values to be used for the group. The resulting values must be separated by a character, such as a comma or slash, which should also end the list. **_Example:_** Ann/John/William/  
_From File_ |  Enter the file information required to retrieve group values from a file: Select the logical file name of the file containing the group values. Select the key to read the file. (Default is the primary key.) Select the field that contains the group value. (Default is the first field.)  
  
When _From Dataset_ or _From File_ is selected, the group member values will be sorted alphabetically when charted.

If _Fixed_ _values_ or _Expression_ is selected, the group members will remain in the order specified, with any additional members found in the dataset added to the end.

_(The ability to define pre-set group member values was added in PxPlus 2020.)_

##  Step 6: Filter the Data

Set up selection criteria to determine what data is to be used to generate the chart.

> Filters can be applied to the values in individual columns (or portions of the values) to determine if a row in the list should be included in the chart calculations.

To do this, select the **_Click to define data filters_** hyperlink button to invoke the **Filter** window:

> Conditions that can be applied to column filters are:

|  _None_ |  _Between <Value1> and <Value2> inclusive_  
---|---|---  
|  _Equal to <Value1>_ |  _Between <Value1> and <Value2> exclusive_  
|  _Not equal to <Value1>_ |  _Any of <Value1>,<Value2>,<Value3>,..._  
|  _Less than <Value1>_ |  _None of <Value1>,<Value2>,<Value3>,_  
|  _Greater than <Value1>_ |  _Starts with <Value1>_  
|  _Less than or equal to <Value1>_ |  _Contains <Value1> AND <Value2> AND _  
|  _Greater than or equal to <Value1>_ |  _Contains <Value1> OR <Value2> OR _  
  
#### **Note:**  
When defining a comparison value (i.e. _Value1_ , _Value2_ , etc.), an expression can be used by preceding the expression with an **=**  _(equals sign)_.   
  
**_Example:_**  
  
If the variables %low and %high contain the values for the _Between <Value1> and <Value2>_ range, then _Value1_ would be defined as =%low and _Value2_ as =%high.

Individual filters can be defined for multiple columns, but the data in a row must pass all filters to be included.

##  Step 7: Finish

Select options to govern the behavior of the chart and save the chart design.

> The _Display_ options allow you to choose to display _All_ items or a certain number of _Top items_ or _Bottom items_. If you select either _Top items_ or _Bottom items_ (i.e. items with the highest or lowest values), you must indicate the _Number of items_ to display. You must also indicate whether to show all items tied for the last position and whether to group the remaining results as "Other". The _Suppress zero (0) value items_ check box is used to suppress any items with a value of zero. These options are **_not_** available to charts with secondary data groups (see **[Step 5](Defining%20and%20Displaying%20an%20AutoChart.htm#Step5)**).

The _Auto-Update_ check box can be selected to indicate that the chart is to be updated automatically if the content of the associated list changes while the chart is displayed. This will occur a few seconds after the last change takes place. (The slight time lag is by design to allow multiple updates to occur, such as reloading the list, before the chart is redisplayed.)

If the _Auto-Update_ option is **_not_** selected, the AutoChart display window will have a _Refresh_ button to allow the user to update the chart as desired.

To preview the chart, select the **_Click to preview the chart_** hyperlink button.

At this point, you can go back to make changes, select _Finish_ to save the definition, or select _Cancel_ to abandon it.

##  Displaying an AutoChart 

To display an AutoChart, click the _Charts_ button at the top of the Query or right click on the data list to invoke the popup menu. If an AutoChart definition exists for the control, a _Charts_ > _Display Chart_ option will display in the popup menu.

If more than one AutoChart definition exists, selecting the _Display Chart_ option will show the names of all AutoCharts associated with that list control. AutoCharts defined by the user appear first, followed by any public definitions.

|  |    
**_Charts Button: Display Chart option_**  
  
  
** _Popup Menu: Display Chart option_** |  |    
**_AutoChart_ _display window_**  
---|---|---|---|---  
  
When selecting an AutoChart to display, the chart is displayed as a concurrent window so that the user may continue to work on the original panel. The AutoChart display window is also synchro-locked to the original panel; that is, when moved next to the top corner of the original panel, the AutoChart window will snap into position adjacent to the original panel, and the movements of the AutoChart window are synchronized with the original panel. The AutoChart window is also resizable.

The AutoChart window displays an _Output to Clipboard_ button in the bottom left corner. When selected, data from the chart is placed on the Clipboard in a format that can be easily pasted into a spreadsheet:

> group name + TAB + value + CRLF

If the _Auto-Update_ option is selected in the AutoChart definition (see **[Step 7](Defining%20and%20Displaying%20an%20AutoChart.htm#Step7)**), the chart will automatically be updated whenever the contents of the associated list control change. There is a minor delay before the update takes place to allow multiple updates to the list control before the chart itself is updated.

If the _Auto-Update_ option is **_not_** selected, a _Refresh_ button displays next to the _Output to Clipboard_ button to allow the user to update the chart as desired.

## See Also

**[Creating a Smart Control (or Smart Chart) Definition](../NOMADS%20Graphical%20Application/Smart%20Controls/Defining%20Smart%20Controls.htm#Mark2)**
