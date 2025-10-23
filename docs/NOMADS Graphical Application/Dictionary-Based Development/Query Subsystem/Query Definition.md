# Query Subsystem 

**Query Definition** |  **__**  
---|---  
  
Query contents are defined in the **Query Definition** window. This window is used to set up link files, define columns, edit the Query Header and set up selection criteria. After the query is defined, it can be tested and saved.

When creating a new query, the **Query Definition** window is launched after defining the **[Query Header](Query%20Header.md)**. When selecting an existing query in **[Library Object Selection](../../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)**, the **Query Definition** window is launched to show the query contents.

The **Query Definition** window can also be accessed in the NOMADS Panel Designer when **[Assigning a Query](Invoking%20a%20Query.htm#assigningquery)** to a List Box, Drop Box, Multi-Line or Grid control.

> The **Query Definition** window consists of the following:

**File Elements** |  Displays a list of files (the main data file/table and any defined link files) and their elements. Icons next to each element indicate whether the field is a string, numeric or date (i.e. DATE class) field. (Manual files have no elements listed.) Array elements are displayed with their dimensions in braces; e.g. Month${1:12}. Items can be selected from this list for addition to the **Columns** list for display in the query. Select an item by double-clicking on it, by highlighting it and clicking a selection button, or by selecting the _Add_ option from the right-click popup menu associated with the item. Popup menus associated with the main file and cross-reference files also allow you to add fields from the respective files. When an array is added as part of an "add all fields" or "add all fields in file" scenario, all the elements in the array are automatically added to the **Columns** list. If the array alone is selected from the **File Elements** list, the **Select Array Element** window is displayed to allow you to select all elements or select a single array element by specifying its subscripts. This window consists of the following: |  _Select element range_ |  Click the drop-down arrow for selections: |  _All Elements_ |  **_(Default)_** All elements defined for the array will be selected.  
---|---  
_Single Element_ |  A single array element will be selected by specifying a valid range for each of its subscripts.  
_Array subscript 1  
Array subscript 2  
Array subscript 3_ |  **_(Available when Single Element is selected)_** Enter a valid range for each array subscript. The number of subscripts shown is based on whether the array was defined with one, two or three dimensions.  
_OK_ |  Adds all elements or only the specified array element to the **Columns** list. If an invalid range was entered for an array subscript, a message will display.  
_Cancel_ |  Cancels any changes and closes the **Select Array Element** window.  
  
_(Support for array elements in the query was added in PxPlus 2022.)_  
  
**Columns** |  Displays a list of columns selected from the **[File Elements](Query%20Definition.htm#elements)** list. Columns can be a simple element (i.e. field/column name such as InvoiceNumber) or a formula (i.e. a PxPlus expression). When a file element is initially added to the **Columns** list, default characteristics (such as title, column width, format, etc.) are set. These can be modified later using the **Column Options** window or by double-clicking the column item. When defining a new query, the **Columns** list is automatically populated with fields that make up the chosen key, if available, as well as the first non-key field that is 15 or more characters long. (This feature is not available to queries built with manually defined files.) _(Support for automatically populating the Columns list with the primary key(s) and next field was added in PxPlus 2024.)_  
_Selection Buttons_ |  The selection buttons between the lists are used to add all or only selected items from the **File Elements** list to the **Columns** list. They are also used to remove all or only selected items from the **Columns** list. For manual files, select a file and click the selection button to invoke the **Column Options** window where you can manually define the column to add.  
_Select as 'Hidden'_ |  When this check box option is selected, any items selected from the **File Elements** list are added to the **Columns** list as _initially hidden_ ; i.e. the column is initially hidden at run time until the user selects it to be shown. This option can also be toggled for a specific element by right clicking on the element in the **Columns** list and selecting the _Hide/Show_ option or by using the **Column Options** window. When using **_Query+_**_Toolbar, Hybrid, Menu_ or _Drop Query_ views (see **[Query View](Query%20Header.htm#queryview)** option), columns can be set to be initially hidden or shown by clicking the **[Test/Design](Query%20Definition.htm#testdesign)** toolbar button to display the query and selecting the _Show/Hide/Reorder Columns_ item from the **[Columns](Run-time%20Query.htm#columns)** run-time option to set the column visibility. Click the _Save + Exit_ button to save and incorporate these settings into the query definition when exiting the query. _(The ability to save query changes when in Test/Design mode was added in PxPlus 2023 Update 1.)_  
_Choose initial sort column_ |  **_(Query+, Not Applicable to Drop Tree Query)_** Click the link to invoke the **Select Column Sort Order** window to specify a column to sort by (ascending or descending) after the query is loaded. This overrides the default sort sequence, which is determined by the key selection in the query header. The column sort affects the initial load only; subsequent reloads will maintain the last column sort used in the query. This window consists of the following: |  **Select Column for Initial Sort** |  Click the drop-down arrow to select a column for the initial sort.  
---|---  
**Sort Order** |  Specify the initial sort order. (**_Default:_**  _Ascending Order_)  
  
#### **Note:**  
Setting an initial sort column requires that all the data must be loaded into the query before it can be sorted; therefore, performance enhancing features, such as Load on Demand and Background Loading, are not available.

_(The Choose initial sort column option was added in PxPlus 2022.)_  
  
_Move Up  
Move Down_ |  Buttons (below the **Columns** list) that are used to change the order of the items in the **Columns** list. The order of the columns can also be set for **_Query+_**_Toolbar, Hybrid, Menu_ or _Drop Query_ views (see **[Query View](Query%20Header.htm#queryview)** option) by clicking the **[Test/Design](Query%20Definition.htm#testdesign)** toolbar button to display the query and selecting the _Show/Hide/Reorder Columns_ item from the **[Columns](Run-time%20Query.htm#columns)** run-time option to reorder the columns. Click the _Save + Exit_ button to save and incorporate these settings into the query definition when exiting the query. _(The ability to save query changes when in Test/Design mode was added in PxPlus 2023 Update 1.)_  
_Close_ |  Exits the **Query Definition** window. If any unsaved changes are detected, you will be prompted to save the changes. _(The Close button was added in PxPlus 2019 Update 1.)_  
  
##  Toolbar Options

The **Query Definition** toolbar consists of the following functions:

_Save_ |  Saves the current query definition. (If the session terminates abnormally without saving, the unsaved changes can be recovered the next time you load the definition.)  
---|---  
_Test**or** Test/Design_ |  **_(Classic Query and Query+ Drop Tree Query)_** Tests the current query definition. **_(Query+ Toolbar, Hybrid, Menu and Drop Query)_** When testing the query, many of the run-time features are disabled, such as _Favorites_ , _Filters_ , _Formulas_ and _Profiles_. See **[Run-Time Query](Run-time%20Query.md)**. The **[Columns](Run-time%20Query.htm#columns)** feature is enabled to allow the developer to use the _Show/Hide/Reorder Columns_ option to initially show and hide and reorder the columns. Column widths can also be adjusted by dragging the edge of the column header to the desired width. The size of the query panel itself (except for the Drop Query) can also be resized by dragging the edges of the panel. These new settings can be saved and incorporated into the query definition by clicking the _Save + Exit_ button when exiting the query. Be sure to save the current query definition to ensure that all changes are saved. **_Example:_** Below is an example of a query displayed in _Test/Design_ mode: _(The Test/Design button was added in PxPlus 2023 Update 1.)_  
_Header_ |  Launches the **[Query Header Definition](Query%20Header.md)** window for editing header information.  
_Filter_ |  Launches the **[Query Selection Criteria](Query%20Selection%20Criteria.md)** window for setting up selection criteria.  
_Security_ |  Launches the **[Object Security Definition](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.htm#objectsecurity)** window for setting up top-level security for the query. See **[Query Security](Query%20Security.md)**. _(The Security button was added in PxPlus 2021.)_  
_Print_ |  Prints the details of the query definition.  
_Add Link  
Update Link  
Remove Link_ |  Click the _Add Link_ button to launch the **[Query File Link](Query%20File%20Link.md)** window for adding a link to a cross-reference file. To modify an existing link, highlight the name of the link file in the **[File Elements](Query%20Definition.htm#elements)** list and then click the _Update Link_ button to launch the **Query File Link** window. To remove an existing link, highlight the name of the link file in the **File Elements** list and then click the _Remove Link_ button.  
_Column Options_ |  Launches the **[Columns Options](Column%20Options.md)** window for defining the column title, width, format, etc., as well as the Field Definition for manually defined files.  
_Add Formula_ |  Launches the **[Query Formula Definition](Query%20Formula.md)** window for adding or modifying a formula.  
_Define Chart_ |  **_(Available when Show Query+ Options check box AND one or more Columns are selected)_** Launches the **[Chart Wizard](../../../NOMADS%20AutoChart/Defining%20and%20Displaying%20an%20AutoChart.md)** for defining simple charts based on the columns of a query. The results are public developer AutoChart definitions that can be used to generate and load data into a Smart Chart. See **[Smart Controls](../../Smart%20Controls/Overview.md)**. _(The Define Chart button was added in PxPlus 2019.)_  
_Show Query+ Options_ |  When selected, only query options available to **_Query+_** displays are enabled. In addition, the _Test_ button will generate a **_Query+_** panel.  If not selected, options and test display will be those of the **_Classic Query_**. For information on the modes of query display, see **[Query Subsystem](Overview.md)**.

#### **Note:**  
The _Show Query+ Options_ check box is not shown for Query List definitions.  
  
## Menu Options

The **Query Definition** menu bar consists of a **_Projects_** __ menu with the following selections:

_Projects_ |  Lists options for projects: |  _Create New Project_ |  Launches the **[Create Project](../../../PxPlus%20IDE/IDE%20Main%20Launcher.htm#createproject)** dialogue for entering a new project for the current working directory. Click the Query button to select a different working directory.  
---|---  
_Add to Project_ |  Launches the **Add to Project** dialogue for adding the current task to an existing project that is selected from the _Project_ drop box. To manage all the tasks within a project, see **[Project Maintenance](../../../Project%20Maintenance.md)**. For information on adding tasks to a project from other locations, see **[Adding Tasks to Projects from Other Locations](../../../PxPlus%20IDE/Adding%20Tasks%20to%20Projects%20from%20Other%20Locations.md)**.  
_Quit_ |  Closes the **Query Definition** window. If any unsaved changes are detected, you are prompted to save the changes.  
  
## See Also

**[Query File Link](Query%20File%20Link.md)**  
**[Column Options](Column%20Options.md)**  
**[Query Formula Definition](Query%20Formula.md)**  
**[Defining Query Column and Row Display](Query%20Column%20and%20Row%20Display.md)**
