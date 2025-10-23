# Chart Images Generation

**Schedule the Chart Generation** |  **__**  
---|---  
  
The second step is to schedule the chart generation. To generate a chart image, the chart definition or program is added to the Chart Scheduler. The Chart Scheduler allows you to schedule chart image generation either on a fixed schedule or an on-demand basis. Entries can be added, modified or deleted in the Chart Scheduler by accessing **Chart Image Generation Schedule Maintenance**.

##  Chart Image Generation Schedule Maintenance

The **Chart Image Generation Schedule Maintenance** utility displays a list of all scheduled entries that have been added, as indicated by the _All_ _entries_ selection in the drop box above this list _._ In addition to adding, changing or removing entries, you can refresh the list, view a report showing schedule details of all listed items, and generate a chart image on demand.

> _(Chart Image Generation Schedule Maintenance was added in PxPlus v11.50.)_

The **Chart Image Generation Schedule Maintenance** window can be accessed by using various methods, and the particular method used determines the level of information presented.

For example, you can invoke the general maintenance window (above), which shows a list of **_all_** schedule entries, from the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)**. To do this, first expand the _Graphical Application Builder (NOMADS)_ category, and then expand the _Utilities_ category. Under the _Utilities_ category, select _Chart Image Scheduler_. Another method is to select _Chart Image Scheduler_ from the _Utilities_ menu on the **[NOMADS Session Manager](../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** window.

More specifically, you can first select a library from within NOMADS, and then in **[Library Object Selection](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Overview.md)**, select _Chart Image Scheduler_ from the _Utilities_ menu to display schedule entries **_only for that library_**.

**Chart Image Generation Schedule Maintenance** can also be invoked from your application when a query is invoked. If the query has **_public_** chart definitions associated with it, the _Schedule Chart Image Generation_ option appears on the popup menu, and the **Chart Image Generation Schedule Maintenance** utility will display any entries associated with that query.

#### **Note:**  
To display a list of **_all_** schedule entries, rather than only those associated with a particular library or query, select _All entries_ from the drop-down list located at the top of window.

Another method for accessing the **Chart Image Generation Schedule Maintenance** utility is by using the CHARTSCHED command line program. It can be invoked from the Command line at several levels:

**Command** |  **Description**  
---|---  
chartsched |  General maintenance based on current directory and subdirectories  
chartsched _Directory_ |  Maintenance for all schedule items for the specified directory and subdirectories  
  
** _Example:_**  
  
chartsched/work  
chartsched _Library_ |  Maintenance for all schedule items for the specified library  
  
** _Example:_**  
  
chartschedtest.en  
chartsched _Library,QueryPanel_ |  Maintenance for all schedule items for the specified query  
  
** _Example:_**  
  
chartsched/work/test.en, testquery  
chartsched _ScheduleEntryName_ |  Item maintenance for the specified item  
  
** _Example:_**  
  
chartschedSales Totals  
  
#### **Note:**  
When invoking **Chart Image Generation Schedule Maintenance** for the first time, the chart schedule file, _chartsched_ _,_ is created in the local or prefix directory.

##  Adding a Chart to the Schedule

Using **[Chart Image Generation Schedule Maintenance](Schedule%20the%20Chart%20Generation.htm#sched_maint)** _,_ you can add both AutoChart definitions and program references to the schedule.

To **_add_** an AutoChart definition to the schedule, click the _Add Chart_ button in **Chart Image Generation Schedule Maintenance**. Depending on the method used to invoke this utility, a tree-view structure lists all of the **_public_** AutoChart definitions that exist at the current display level and lower.

> At the general maintenance level, you can specify a _Starting Directory_ , which is used as the top level of the tree-view structure. Selecting a Chart Definition from this display opens the **Chart Scheduler** window.

> For a chart schedule entry, the **Chart Scheduler** requires the following information:

_Schedule Item Name_ |  Unique name used to identify each schedule entry. The name is initially derived from the name of the chart definition; however, this can be changed.  
---|---  
**Location of Chart Definition** |  |  _Directory_ |  Path to the directory where the panel library containing the query definition with the selected AutoChart definition is stored. The directory path is optional if the panel library file is accessible using a simple path; i.e. it is in the current directory or a directory defined in the prefix settings. The value of the directory can be fixed or an expression. If the specified directory does not exist, you are prompted with a choice to use it or not.  
---|---  
_Expression_ |  Select this check box if the directory is an expression.  
_Library Name_ |  **_(Display Only)_** Name of the panel library in which the AutoChart definition is located.  
_Query Name_ |  **_(Display Only)_** Name of the query to which the AutoChart definition is associated.  
_Chart Name_ |  **_(Display Only)_** Name of the AutoChart definition used to generate the chart image.  
**Scheduling Information** |  |  _Frequency_ |  Frequency at which the chart image is to be generated when the Chart Scheduler is running. Selections are: |  5 minutes |  15 minutes |  1 hour |  3 hours |  12 hours  
---|---|---|---|---  
10 minutes |  30 minutes |  2 hours |  6 hours |  24 hours  
  
An _On Demand_ selection is also available. _On Demand_ means that instead of going through the Chart Scheduler to generate the image, the image can be generated by clicking the _Generate_ button in **Chart Image Generation Schedule Maintenance** , or it can be generated programmatically by calling the "*gencharts;Generate_Chart" program.

See **[Generate the Chart Image](Generate%20the%20Chart%20Image.md)** for information about **On Demand Chart Generation**.  
  
_Next Image Generation_ |  **_When adding a new schedule entry:_** Enter the date and time at which the chart is to be initially generated. You can type the date using the YYYY-MM-DD format or click the Calendar button to select the date. The time is entered using the 24-hour format. **_When modifying an existing schedule entry:_** This indicates the date and time of the next scheduled generation.  
_Last Image Generated_ |  **_For an existing schedule entry:_** This is the date and time at which the chart was last generated using either the fixed schedule or on-demand method. **_(Display Only)_** **_When adding a new schedule entry:_** This field is hidden.  
**Image Information** |  |  _Output to *mytiles subdirectory_ |  **_(As of PxPlus 2021, this option is no longer available for selection.)_** For any existing schedule entries that were defined **_prior to PxPlus 2021_** with this check box **_On_** , this option will display a check mark and be disabled. The functionality associated with this option will not change, which is to output the image to a _*mytiles_ subdirectory if the image is to be used by a Windows Tile using the PxPlus MyTiles™ utility.  
---|---  
_Directory_ |  **_(As of PxPlus 2021, this option is no longer available for selection.)_** For any existing schedule entries that were defined **_prior to PxPlus 2021_** with the _Output to *mytiles subdirectory_ check box **_On_** , the _Directory_ option will display and be disabled; otherwise, it will be hidden if the check box was **_Off_**.  
_Image Path or HTML File_ |  Name of the image file to be generated. The name must include the image file suffix, i.e. _.png, .gif, .jpg_. If the _Output to *mytiles subdirectory_ check box is **_On_** , enter the _Image File_. The _Image File_ entered must be a simple path name. If the _Output to *mytiles subdirectory_ check box is **_Off_** , enter the _Image Path or HTML File_. This can be a simple or full path name. The path can be a _Fixed_ value or _Expression_.  
_Image Shape_ |  If the _Output to *mytiles subdirectory_ check box is **_On_** , an image shape must be selected, either _Square_ or _Wide_.  
_Image Size in pixels_ |  Enter the _Width_ and _Height_ of the image in pixels. If the _Output to *mytiles subdirectory_ check box is **_On_** , only the _Width_ can be entered. The _Height_ is calculated based on the specified shape. If the _Output to *mytiles subdirectory_ check box is **_Off_** , the _Width_ and the _Height_ can be entered.  
_Test_ |  Button used to generate and view a chart image based on the current definition. When viewing the chart image, a check box option that allows you to delete the image file is available.  
  
Chart images can also be created by writing a program to create the chart and its image. To add this type of chart to the Chart Scheduler, click the _Add Program_ button in _Chart Image Generation Schedule Maintenance_. A modified version of the **Chart Scheduler** is displayed.

> For a chart schedule entry using a program, the **Chart Scheduler** requires the following information:

_Schedule Item Name_ |  Unique name used to identify each schedule entry. The name is initially derived from the name of the chart definition; however, this can be changed.  
---|---  
**Program Information** |  |  _(Input field)_ |  Path of the program that generates the chart image. Path may be a _Fixed_ value or an _Expression_. If the specified path does not exist, a message displays with a choice to use it or not.  
---|---  
_Expression_ |  Select this check box if the directory is an expression.  
**Scheduling Information** |  |  _Frequency_ |  See **[Adding a Chart to the Schedule](Schedule%20the%20Chart%20Generation.htm#addingachart)**.  
---|---  
_Next Image Generation_ |  See **[Adding a Chart to the Schedule](Schedule%20the%20Chart%20Generation.htm#addingachart)**.  
_Last Image Generated_ |  See **[Adding a Chart to the Schedule](Schedule%20the%20Chart%20Generation.htm#addingachart)**.  
  
## Removing a Chart from the Schedule

From the list of schedule entries displayed in **Chart Image Generation Schedule Maintenance** , click to highlight the schedule entry to be deleted and select the _Remove_ button.

## Modifying a Schedule Entry

From the list of schedule entries displayed in **Chart Image Generation Schedule Maintenance** _,_ click to highlight the schedule entry to be modified and select the _Properties button._ The **Chart Scheduler** window opens with the information for the selected entry displayed for editing.
