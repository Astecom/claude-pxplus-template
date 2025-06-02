# NOMADS AutoChart 

**AutoChart Definition File Maintenance** |  **__**  
---|---  
  
The **NOMADS AutoChart** feature allows the user to quickly define simple charts based on the columns of a List Box, Grid or Query, to save the definitions, and to display the charts from the right-click popup menu or Query+ interface. See **[Defining and Displaying an AutoChart](../Defining%20and%20Displaying%20an%20AutoChart.md)**.

These definitions are stored in _Chart Definition_ files that are found in the same directories as the panel libraries containing the panels and queries on which the charts are based. Public chart definitions created by the developer using a **[Query Definition](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.md)** are stored in _chart.dev_ files, and end-user definitions are stored in _chart.inf_ files.

The **AutoChart** **Definition File Maintenance** utility provides a means to manually remove or copy entries in the _Chart Definition_ files. Public definitions can be copied from end-user files to developer files and vice versa. End-user entries can be copied to another user ID. Entries belonging to a defunct user ID can be deleted.

_(The ability to separate developer and end-user Auto Chart definitions was added in PxPlus 2020.)_

## Invoking AutoChart Definition File Maintenance

**AutoChart** **Definition File Maintenance** can be invoked either from the **[NOMADS Session Manager](../../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)**  _Utilities_ menu or from the _Utilities menu_ in **[NOMADS Library Object Selection](../../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Overview.md)**. The difference is that the starting point for locating the Chart Definition files will be your current directory when invoked from the main NOMADS _Utilities_ menu or the directory of the selected library when invoked from **Library Object Selection**.

The utility can also be invoked programmatically. See **[Invoking AutoChart Definition File Maintenance Programmatically](Overview.htm#programmatically)**.

When invoked, **AutoChart Definition File Maintenance** is displayed:

> This window consists of the following:

_Starting Directory_ |  This is the starting point for locating the Chart Definition files and their AutoChart entries. (Enter the top directory of your application to see all entries pertaining to it.) All entries found in the starting and subordinate directories will be displayed in the chart list.  
---|---  
_Chart file_ |  Select the Chart Definition to display: |  _Developer definitions (chart.dev)_ |  Public chart definitions created by the developer using a Query Definition, which are stored in _chart.dev_ files.  
---|---  
_End-User definitions (chart.inf)_ |  End-user definitions, which are stored in _chart.inf_ files.  
  
_(The Chart file drop box was added in PxPlus 2020.)_  
  
Profile entry list |  Entries include the library location (relative to the starting directory), the name of the panel or query and control on which the chart is based, as well as the name of the user who owns the chart and the chart name.  
_Select/Deselect all_ |  Check this box to select all current entries in the chart list. Uncheck it to deselect all entries.  
Selecting miscellaneous profile entries |  Select and deselect individual chart entries by clicking the check box next to the entry within the list. You can also select ranges of entries by clicking the first entry, then pressing Shift - Click on the last entry. If you are navigating the list using the arrow keys, select entries using the <**Enter** > key.  
**Filter by:  
**_Directory  
Library  
Panel/Query  
User_ |  A number of fields are available to filter the entries that are shown in the chart list. Selections include _Directory_ , which allows you to specify a subdirectory under the starting directory. You can also select a specific panel _Library_ , _Panel_ or _Query_ definition, and/or _User_ ID to filter the profile list. (The _User_ ID filter does not apply to the developer definitions, which are public.)  
**Function** |  Select the function to perform: |  _Copy to end-user/developer file_ |  Copy public items to the end-user or developer file, depending on the current _Chart file_ being displayed.  
---|---  
_Copy to another user_ |  **_(Not available when Developer definitions file is selected from Chart file drop box)_**  
  
Copies the selected charts to another user. You must specify the user either by entering the User ID or by selecting one from the drop box. If duplicate entries for that user exist, you can select the _Overwrite duplicates_ check box if you want to overwrite the existing entries for the user; otherwise, the existing entries will not be changed.  
_Delete_ |  Deletes the selected chart entries.  
  
_(The Copy to end-user/developer file function was added in PxPlus 2020.)_  
  
## Invoking AutoChart Definition File Maintenance Programmatically

Besides invoking **AutoChart Definition File Maintenance** through NOMADS, you can also invoke it programmatically using the following syntax:

> process "CHARTINFMNT","*plus/winutl/scrnlib.en"[,_UserID_ _$, LibPath$, Panel$_]

**_Where:_** |   
---|---  
_UserID_ _$_ |  User ID on which to filter. Denote _Public_ charts by setting the User ID to "*"  
_LibPath_ _$_ |  Path to panel library to use as filter  
_Panel$_ |  Specific panel name or query definition to use as filter
