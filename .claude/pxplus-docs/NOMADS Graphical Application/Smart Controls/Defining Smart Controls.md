# Smart Controls 

**Defining Smart Controls** |  **__**  
---|---  
  
Creating **_Smart Controls_** consists of two main components: a **_Query List_** definition and a **_Smart Control_** (or a **_Smart Chart_**) definition. Furthermore, creating **_Smart Charts_** requires one additional component, a **_Query AutoChart_** definition, before the Smart Chart definition can be created.

|  1. |  **[Create a Query List Definition](Defining%20Smart%20Controls.htm#Mark1)**: |  To specify the details and format of the dataset to be loaded  
---|---|---|---  
|  2. |  **[Create a Query AutoChart Definition](Defining%20Smart%20Controls.htm#Mark7)**: |  **_(For Smart Charts Only)_** To define a **[NOMADS AutoChart](../../NOMADS%20AutoChart/Introduction.md)** based on the columns of a Query List definition  
|  3. |  **[Create a Smart Control (or Smart Chart) Definition](Defining%20Smart%20Controls.htm#Mark2)**: |  To associate the query and to set up optional **[Trigger Variables](Defining%20Smart%20Controls.htm#Mark3)**, **[Conditional Trigger Test](Defining%20Smart%20Controls.htm#Mark3)** and **[Load Logic](Defining%20Smart%20Controls.htm#Mark3)**  
  
##  Creating a Query List Definition

Smart Controls use a Query object definition to determine the content of the Smart Control in terms of file selection, column definition and selection criteria. A **_Query List_** object consists of a query-like definition that is **_used exclusively by Smart Controls_** to auto-load a list of records from a data file or database table. This type of definition is a subset of the Standard Query with header information containing the file and key information only and the column definitions having limited options.

You can also use a Standard Query definition for Smart Controls (with the **_exception_** of the Smart Multi-Line); however, the control will only use this same subset of information and ignores the information in the other fields.

See **[Query Header](../Dictionary-Based%20Development/Query%20Subsystem/Query%20Header.md)** for information on _Standard Query_ header options.

**_To create a Query List Definition:_**  
---  
|  1. |  In NOMADS **[Library Object Selection](../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)**, click the _Query_ toolbar button _(if using Toolbar View)_ or select _Objects > Query Object_ from the menu bar.  
|  2. |  Type a new _Name_ for the Query List definition. When prompted for **Query Type** , select _Query List_. Click _OK_ , which brings up the **Query Definition - File information** window for defining the Query List **_header_** information.  
|  |  **_Alternatively_** , a new Query List can be defined in the **[Smart Control Definition](Defining%20Smart%20Controls.htm#Mark2)** window. To do this, type a **_new_**  _Panel_ name for the Query List definition. Click the _Define_ button, which brings up the **Query Definition - File information** window for defining the Query List **_header_** information. |   
---  
|  3. |  The **Query Definition - File information** window consists of the following options: |  **Data Source** |  Options for defining the query's data source: |  _Database_ |  If this check box is selected, the information to be displayed will be from an external database table. If not selected **_(Default)_** , the information is assumed to be from a PxPlus data file.  
---|---  
_Database Type_ |  **_(Available when Database check box is selected)_** Select from the following types: _ODBC, ODBC (Local), Oracle, Oracle (Local), DB2, DB2 (Local), MySQL, MySQL (Local), ADO, ADO (Local)_.  
_Data Source Name_ |  **_(Available when Database check box is selected)_** Enter the database name (_Fixed_ value or _Expression_).  
_Connect Option_ |  **_(Available when Database check box is selected)_** Connection options to be appended to an **OPEN** statement when opening the database.  
**File/Table** |  Name of the primary file or database table to be displayed in the query (_Fixed_ value/_Expression_). The Query system provides a drop-down list of all files in the PxPlus data dictionary _(providex.ddf)_ or all tables in the specified database. If accessing a _database_ , you must select a table name from the drop-down list. For PxPlus _data files_ , select an existing file or table by using one of the following methods:

  * Type the physical file or table name.
  * Click the Query Table View button _(magnifying glass)_ for a tree view of table names by Group. For information on creating a filter to locate a specific table name, see **[Filtering the Table Names Lookup](../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Filtering%20the%20Table%20Names%20Lookup.md)**.
  * Click the Browse button _(file folder)_ to look through the directory structure to find a file or table name.

If you are not maintaining the data file in the data dictionary, then you must manually define the data fields. Data can have internal or external keys or can be sort files.  
**Key Information** |  Options for defining the key information: |  _Sort By_ |  Select the key by which a PxPlus data file is to be sorted. At run time, you can override this setting by loading the **[%NOMADS'Query_Kno](../Dictionary-Based%20Development/Query%20Subsystem/Designing%20and%20Using%20the%20Query%20Subsystem.htm#querykno)** variable with an alternate key number.  
---|---  
_Smart Key (Multi-lines Only)_ |  An expression consisting of any combination of trigger variables from the panel, global variables, and/or literal values that may be concatenated to create the key value to read the record to attain the required data.  
  
**_Example:_**  
  
%COMPANY_CODE$+CLIENT_CODE$  
**Other Options** |  |  _Static Columns (Grids Only)_ |  Number of columns in a Grid that remain fixed when the display is shifted horizontally.  
---|---  
**Row Highlight** |  |  _Add (Edit) row display option_ |  Click the link to invoke the **[Row Display Option](../Dictionary-Based%20Development/Query%20Subsystem/Query%20Header.htm#rowdisplay)** window that is used to assign visual attributes, such as bold text, text color or highlight color, to a row based on specified conditions.  
---|---  
  
_(The Add (Edit) row display option was added in PxPlus 2021.)_  
  
|  4. |  When you have finished entering the Query List **_header_** information, click _OK_ , which brings up the **Query List Definition** window for defining the Query List **_contents_**. This window is identical to the **[Query Definition](../Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.md)** window that is used to define a Standard Query where you can set up link files, define columns, edit file information and set up selection parameters. **[Query Security](../Dictionary-Based%20Development/Query%20Subsystem/Query%20Security.md)** can also be set up for the Query List. However, the query selection criteria for a **_Query List_** definition (using the _Filter_ toolbar button) is slightly different from the **[Query Selection Criteria](../Dictionary-Based%20Development/Query%20Subsystem/Query%20Selection%20Criteria.md)** for a **_Standard_** Query. The names and values of the trigger variables are available to the Query Load logic; therefore, these variables may be used to define **_Prefix_** and **_Range_** values as opposed to the Load logic of a Standard Query that uses global variables for these values. In addition, the _Prefix_ and _Range_ values can be applied to the _Sort By_ key rather than just the primary key. The trigger variables are also available in an identical set of variables with a _VAR. prefix, which allows you to build selection tests that compare the external trigger variables with the _VAR. prefix to variables in the Query definition with the same name, e.g. _VAR.GLAcct$=GLAcct$. The _Choose initial sort column_ option is available for Smart Report View List Boxes and Grids. However, unlike a query where the sort column is implemented only on the initial load, with Smart Controls, the sort column is implemented each time the control is reloaded. _(The use of _VAR. aliases for variables passed to the *winlist logic was added in PxPlus 2021.)  
(The Choose initial sort column option was added in PxPlus 2022.)_  
|  5. |  When you have finished entering this information, click the _Save_ toolbar button to save the current Query List definition.  
  
## Creating a Query AutoChart Definition

#### **Note:**  
**_(Smart Charts)_** A Query AutoChart definition is required before the **[Smart Chart Definition](Defining%20Smart%20Controls.htm#Mark2)** can be created.

Create a **[NOMADS AutoChart](../../NOMADS%20AutoChart/Defining%20and%20Displaying%20an%20AutoChart.md)** based on the columns in a Query List definition:

|  1. |  In NOMADS **[Library Object Selection](../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)**, select the existing Query List object that will be used for creating the AutoChart.  
---|---|---  
|  2. |  The **Query List Definition** window displays. Click the _Define Chart_ toolbar button.  
|  3. |  The **Welcome** panel of the **Chart Wizard** displays. The **[Chart Wizard](../../NOMADS%20AutoChart/Defining%20and%20Displaying%20an%20AutoChart.htm#Welcome)** walks you through the steps for creating and saving an AutoChart. |   
---  
  
##  Creating a Smart Control (or Smart Chart) Definition

The **Smart Control Definition** window is used to turn on the _Smart Load_ logic and assign a Query to the target control (**_List Box_** , **_Drop Box_** , **_Grid_** , **_Multi-Line_** or **_Chart_**) to supply the list content and formatting information. It also allows you to optionally define load-triggering criteria (trigger variables and loading conditions) for the control, as well as specify Pre- and Post-Load logic as desired.

#### **Note:**  
**_(Multi-Lines Only)_**  _Smart Load_ logic is **_not_** compatible with **[EZ Load](../Creating%20Panel%20Controls/Multi-Line%20Control/Ez%20Load%20Multiline.md)** logic.

**_To invoke the Smart Control Definition window:_**  
---  
|  1. |  In the **[NOMADS Panel Designer](../Panel%20Designer/Introduction.md)**, access the **Properties** window for the target **[List Box](../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.md)**, **[Drop Box](../Creating%20Panel%20Controls/Drop%20Box%20Control/Drop%20Box%20Properties.md)**, **[Grid](../Creating%20Panel%20Controls/Grid%20Control/Grid%20Properties.md)**, **[Multi-Line](../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.md)** or **[Chart](../Creating%20Panel%20Controls/Chart%20Control/Chart.md)** control.  
|  2. |  Locate the _Smart Load_ button:  
  
**_For_ _List Boxes_** , **_Drop Boxes_** , **_Grids_** and **_Multi-Lines_** , the _Smart Load_ button is located on the **Attributes** tab (using the Folder Style version of the NOMADS designer).  
  
**_For_ _Charts_** , the _Smart Load_ button is located in the upper right corner of the main panel.  
|  3. |  Click the _Smart Load_ button:  
  
When defining **_Smart List Boxes_** , **_Drop Boxes_** , **_Grids_** and **_Multi-Lines_** , the **Smart Control Definition** window is displayed. When defining **_Smart Charts_** , the **Smart Chart Definition** window is displayed, which includes additional **[Chart Selection](Defining%20Smart%20Controls.htm#Mark5)** options.

#### **Note:**  
Smart Charts are available **_only_** if **[Query+](../Dictionary-Based%20Development/Query%20Subsystem/Overview.htm#queryplus)** queries are being used, as **[Classic](../Dictionary-Based%20Development/Query%20Subsystem/Overview.htm#classicquery)** queries do not support charting.  
  
|  4. |  The **Smart Control Definition** window consists of the following options: |  **Use Smart Load logic** |  Select this check box to enable Smart Load logic for the control. (By default, it is not selected.)  
---|---  
**Query Selection** |  **_(For List Boxes, Drop Boxes, Grids and Multi-Lines - Available when Use Smart Load logic check box is selected)_** The query assigned to a Smart Control **_must_** be a _Query List_ or a _Standard Query_ definition. If a query has already been assigned on the **Query** tab of the **Properties** dialogue, it will be loaded as the **Query Selection** in the **Smart Control Definition**. (See **Important Note**.) Alternately, when a query is selected in the **Smart Control Definition** , it is reflected on the **Query** tab of the **Properties** dialogue. The query can be assigned in either location.

#### **Important Note:**  
If a query has been assigned on the **Query** tab of the **Properties** dialogue, it **_must_** be a _Panel_ **Query Type**. If it is an alternate **Query Type**  _(Query Program, Non-Query Logic, Spinner Controls, Calendar)_ , clicking the _Smart Load_ button will display a message, prompting you to clear the current query associated with the Smart Load before continuing.

|  _Select Query_ |  Button that invokes the **Select a Query Definition** window. This window presents a tree-view structure that lists Query Lists and Queries that exist at the current display level and lower, arranged by directory, screen library and query. Select a Query by clicking on the Query item or one of its columns. When a Query List or Query is selected, the _Library_ and _Query Definition_ input fields (described below) are automatically populated. A Query definition can also be selected by entering the _Library_ and _Query Definition_ input fields manually, as described below. _(The Select Query button was added in PxPlus 2020.)_  
---|---  
_Library_ |  Enter the path to the library containing the query definition. Click the drop-down arrow to invoke a list of recently used libraries. The Browse button allows you to browse the directory to locate the library. Be sure to **_use the simplest form of the path_** for your application.

#### **Note:**  
The Library name may be a specific or generic reference. See [**Cascading Language Suffixes**](../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md).  
  
_Panel_ |  Name of the query definition to invoke. Click the drop-down arrow for a list of all query panels in the selected library. If the query has not yet been defined, enter a new name and then click the _Define_ button to create it.

#### **Note:**  
When entering a new name, valid characters are: letters (A-Z, a-z); numbers (0-9); **~**  _(tilde)_ ; **@**  _(at symbol)_ ; **.**  _(period)_ ; **$**  _(dollar sign)_ ; **_**  _(underscore)_ ; **-**  _(dash)_ ; **+**  _(plus sign)_. If an invalid character is used, a message will display.  
  
_Define_ |  Button that launches a query definition window using the _Panel_ name to either create a new or edit an existing query definition. If creating a new query definition, it will default to a _Query List_ type of definition.  
**Chart Selection** |  **_(For Charts Only - Available when Use Smart Load logic check box is selected)_** |  _Select Chart_ |  Button that invokes the **Select a Chart Definition** window.   
  
This window presents a tree-view structure that lists all the _public_ query AutoChart definitions that exist at the current display level and lower, arranged by directory, screen library, query and chart definition. When a chart definition is selected, the _Library_ , _Panel_ and _Chart Name_ input fields in the **Smart Chart Definition** window are automatically populated. A chart can also be selected by entering the _Library_ , _Panel_ and _Chart Name_ input fields manually.  
---|---  
_Library_ |  Enter the path to the library containing the chart definition. Click the drop-down arrow to invoke a list of recently used libraries. The Browse button allows you to browse the directory to locate the library. Be sure to **_use the simplest form of the path_** for your application.

#### **Note:**  
The Library name may be a specific or generic reference. See [**Cascading Language Suffixes**](../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md).  
  
_Panel_ |  Name of the query definition to invoke. Click the drop-down arrow for a list of all query panels in the selected library. If the query has not yet been defined, enter a new name and then click the _Define_ button to create it.

#### **Note:**  
When entering a new name, valid characters are: letters (A-Z, a-z); numbers (0-9); **~**  _(tilde)_ ; **@**  _(at symbol)_ ; **.**  _(period)_ ; **$**  _(dollar sign)_ ; **_**  _(underscore)_ ; **-**  _(dash)_ ; **+**  _(plus sign)_. If an invalid character is used, a message will display.  
  
_Define_ |  Button (next to _Panel_ input field) that launches a query definition window using the _Panel_ name to either create a new or edit an existing query definition. If creating a new query definition, it will default to a _Query List_ type of definition.  
_Chart Name_ |  Name of the Query+ AutoChart definition to be used to load the chart. Click the drop-down arrow for a list of all _public_ chart definitions that belong to the selected query. The name of a chart definition can also be entered manually.  
_Define_ |  Button (next to _Chart Name_ input field) that launches the **[Chart Wizard](../../NOMADS%20AutoChart/Defining%20and%20Displaying%20an%20AutoChart.md)** based on the selected query panel to either create a new or edit an existing chart definition. See Run-Time Query **[Charts](../Dictionary-Based%20Development/Query%20Subsystem/Run-time%20Query.htm#charts)**.  
_Ignore Query chart format_ |  By default, the chart format and titles are derived from the Query+ AutoChart definition. Select the _Ignore Query chart format_ check box to use the format and titles from the chart control definition.  
  
_(Chart Selection was added in PxPlus 2019.)_  
  
**Trigger Variables and Controls** |  Trigger variables serve two purposes: |  1. |  They initiate the Load logic. If trigger variables are used, any change in the value of a trigger variable will cause the Smart Control to be reloaded after the trigger control's On Change logic has been executed (provided that the conditional trigger test is satisfied as well). If no trigger variables are defined, the Smart-enabled control will be loaded whenever a panel is drawn. When there is more than one folder on a main panel, the control is reloaded each time you switch to a folder with a Smart Control.  
---|---  
2. |  The trigger variables are made available to the special Smart Control Load logic. This means that you can use these variables in the Query Selection Definition of the associated query object to filter the records to be displayed. The trigger variables are also available in an identical set of variables with a _VAR. prefix, which allows you to build selection tests that compare external variables with the _VAR. prefix to variables in the Query definition with the same name, e.g. _VAR.GLAcct$=GLAcct$. _(The use of _VAR. aliases for variables passed to the *winlist logic was added in PxPlus 2021.)_  
  
The following options are available when a query is assigned for the **[Query Selection](Defining%20Smart%20Controls.htm#Mark3)**:

_Variables_ |  Enter the name of a variable from your PxPlus application. Click the _Add Variable_ button to add the variable to the _Selected Triggers_ list.  
---|---  
_Controls_ |  Lists all available controls in the current panel. Click the _Add Control_ button to move a selected control to the _Selected Triggers_ list.  
_Selected Triggers_ |  Lists variables and controls currently selected to be used in the trigger criteria. To remove a selected item from this list, click the _Remove_ button.  
**Conditional Trigger Test** |  **_(Not Applicable for Smart Multi-Lines)_** Additional test to be imposed on load-triggering criteria. If defined, the _Conditional Trigger Test_ must be satisfied for the Load logic to be triggered.  
**Text to Display if Read Fails** |  **_(For Smart Multi-Lines Only - Available when Query Selection is entered)_** Text to load into the Multi-Line when the query fails to retrieve data. Can be a _Fixed_ value, string _Expression_ or _Message Library_ entry (see **[Message Library Maintenance](../Message%20Library%20Maintenance/Overview.md)**). If left blank, spaces will be loaded.  
**Options** |  |  _Clear control when all Triggers are null_ |  If this check box is selected, the Smart control being defined will be cleared whenever all the variables/controls in the _Selected Triggers_ list are null. _(The Clear control when all Triggers are null check box was added in PxPlus 2021.)_  
---|---  
_Hide control during load_ |  **_(Not Applicable for Smart Multi-Lines)_** If this check box is selected, the control is hidden while it is being loaded. Loading is faster and cleaner in appearance, especially when displaying grids with graphical row/column displays. _(The Hide control during load check box was added in PxPlus 2021 Update 1.)_  
_Suppress graphic row/column displays_ |  **_(For Report View List Boxes and Grids Only)_** If the query assigned to the Smart control uses _Row Highlight_ or _Column Display_ options such as bold text, foreground and background colors, images or percent bars, the graphic displays can be suppressed by selecting this check box. Default is **_On_** for Grids and **_Off_** for Report View List Boxes. _(The Suppress graphic row/column displays check box was added in PxPlus 2021 Update 1.)_  
**Load Logic** |  |  _Pre-Load Logic_ |  Optional logic to be processed prior to loading. Available processes are _Ignore_ , _Perform_ , _Call_ , _Execute_. See **[Events Logic](../Program%20Interaction/Events%20Logic/Overview.md)**.  
---|---  
_Post-Load Logic_ |  Optional logic to be processed after loading. Available processes are _Ignore_ , _Perform_ , _Call_ , _Execute_. See **[Events Logic](../Program%20Interaction/Events%20Logic/Overview.md)**.  
  
#### **Note:**  
Smart Multi-Lines are intended for information as **_display only_**. Typically, this type of field might be used to look up and display a client name beside the input field where the client code is entered. As display-only fields, it is common practice to turn **_Off_** the _Tab Stop_ option and turn **_On_** the _Locked_ and _Borderless_ attributes for the Multi-Line.  
  
As an alternative to Smart Multi-Lines, **[EZ Load Multi-Lines](../Creating%20Panel%20Controls/Multi-Line%20Control/Ez%20Load%20Multiline.md)** can be used.

## See Also

**[Formatting Smart Controls](Formatting%20Smart%20Controls.md)  
[Creating a Smart File](Creating%20a%20Smart%20File.md)**
