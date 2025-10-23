# Query Subsystem 

**Run-Time Query** |  **__**  
---|---  
  
When a **[NOMADS Query Definition](Query%20Definition.md)** is invoked, a panel is displayed showing a list of records from which to choose.

For information on the different modes of query display, see **[Query+](Overview.htm#queryplus)**, **[Drop Queries](Overview.htm#dropquery)** and **[Classic Query](Overview.htm#classicquery)**.

|    
**_Run-Time Query Example  
(with right click popup menu displayed)_**  
---|---  
  
Besides the basic display, the query offers a number of features (i.e. search, sort, filters, etc.) that are available to the end user at run time to further enhance the query experience. The **[Query Profile](Run-time%20Query.htm#qryprofiles)** feature makes it convenient for end users to save run-time query settings, such as column order/width, filters and additional formulas, etc., so that the settings can be reloaded at a later time by selecting a named profile.

_(The ability to save Query Profile settings was added in PxPlus 2019.)_

These features are available either by selecting the toolbar button or by selecting from the right-click popup menu. The following links provide information about a particular feature:

|  **[Sort By](Run-time%20Query.htm#sortby)** |  **[Filters](Run-time%20Query.htm#filters)** |  **[Edit File](Run-time%20Query.htm#editfile)**  
---|---|---|---  
|  **[Start At/Match Column](Run-time%20Query.htm#startat)** |  **[Formulas](Run-time%20Query.htm#formulas)** |  **[Sub-Query](Run-time%20Query.htm#subqry)**  
|  **[Find Text](Run-time%20Query.htm#findtxt)** |  **[Query Profiles](Run-time%20Query.htm#qryprofiles)** |  **[Print Report](Run-time%20Query.htm#printreport)**  
|  **[Favorites](Run-time%20Query.htm#favorites)** |  **[Copy and Export](Run-time%20Query.htm#copyexport)** |  **[Refresh](Run-time%20Query.htm#refresh)**  
|  **[Columns](Run-time%20Query.htm#columns)** |  **[Charts](Run-time%20Query.htm#charts)** |  **[Suppressing Run-Time Features](Run-time%20Query.htm#suppress)**  
  
#### **Note:**  
The **[Drop Tree Query](Overview.htm#dropquery)** supports only the _Find_ , _Refresh_ , _Print_ , _Filters_ and _Profile_ features in its right-click popup menu.  
  
_(Drop Tree Query functionality was added in PxPlus 2021.)_

##  Sort By

**_Query+: Drop Query Mode_**

The query is initially loaded using the key selected in the query definition. Sorting by columns in ascending/descending order is available by clicking on the column headings. Column sorting ignores case and accents. If a column contains images, then the sort is undefined; therefore, it is recommended that an alternate sort algorithm be assigned for that column.

**_Classic Query: Default Sort Mode (Sort by File Key)_**

The query can be sorted by any of the key definitions associated with the data file.

**_Classic Query: Sort by Columns Mode_**

The query is initially loaded using the key selected in the query definition. Sorting by columns in ascending/descending order is available by clicking on the column headings or by selecting the column from the _Sort By_ drop box. The key order that was used to initially load the query is also available in the _Sort By_ drop box.

##  Start At/Match Column

**_Query+: Match Column / Drop Query Goto_**

Enter a _Match Column_ or _Go to_ value to position the query at the record whose currently selected column matches the value. The user has to enter formatting characters in string input values (e.g. dashes for phone numbers formatted as 000-000-0000). Columns containing images or string values that use an alternate sorting algorithm will have undefined results. Numeric column matches are **_not_** supported.

**_Classic Query: Default Sort Mode (Sort by File Key)_**

Enter a S _tart at_ (or _From_) value to position the query at the record whose currently selected key matches the value. Because it is the key value being matched, the value entered does not necessarily match the data as displayed, especially if it is formatted.

**_Classic Query: Sort by Columns Mode_**

Enter a _Start at_ (or _From_) value to position the query at the record whose currently selected column matches the value. The user has to enter formatting characters in string input values (e.g. dashes for phone numbers formatted as 000-000-0000), but not in numeric input. Columns containing string values that use an alternate sorting algorithm pose a particular problem because the value displayed in the column does not match the corresponding sort value. In this case, the S _tart at_ logic attempts to derive a workable sort value.

##  Find Text

The search feature allows the user to search the contents of the query for occurrences of a specified text value. An option to specify whether the search should be case sensitive is also provided.

When a value is passed to the query, from a multi-line for example, that value is placed in the _Find Text_ input field since that value is used to position the query.

_(Populating the Find Text input field with the passed query value was added in PxPlus 2023.)_

##  Favorites

Individual records in the query data may be designated as _Favorites_ , which may be displayed separately using _Favorites_ display mode. _Favorites_ mode replaces the normal display with just those records designated as favorites, allowing the user to have a personalized filter for those records required most often.

_Show Favorites/Show All_ |  Toggle between the normal query display and the _Favorites_ display.  
---|---  
_Add to Favorites_ |  While in normal query display mode, add a favorite by highlighting the record and clicking the _Add to Favorites_ button or the right-click popup menu selection. Some items may be part of a group of records sharing the same identifier. In this case, all members of the group will be considered a favorite.  
_Remove from Favorites_ |  While in _Favorites_ display mode, remove a favorite by highlighting the record and clicking the _Remove from Favorites_ button or the right-click popup menu selection. Some items may be part of a group of records sharing the same identifier. In this case, all members of the group will be removed from the _Favorites_ list.  
  
You can highlight favorite records in the normal display by setting the %NOMADS'Query_Fave_Color$ property to the color to be used.

**_Example:_**

> %NOMADS'Query_Fave_Color$="Dark Green"  
>  %NOMADS'Query_Fave_Color$="RGB:192 64 0"

The _Favorites_ feature is enabled by default. Individual queries have a _Suppress Favorites_ option in the **[Query Header Definition](Query%20Header.htm#options)** (on the **Options** tab) with selections to _Always_ or _Never_ __ suppress favorites. A _Default_ setting is also available that uses the %NOMADS'Query_Suppress_Favorites setting (0=_Off_ , 1=_On_).

See **[%NOMADS'Query_Suppress_Popup$](Designing%20and%20Using%20the%20Query%20Subsystem.htm#querysuppresspopup)** and **[%NOMADS'Query_Fave_Color$](Designing%20and%20Using%20the%20Query%20Subsystem.htm#queryfavecolor)**.

##  Columns

When creating a query definition, individual columns can be defined with an _Initially_ _hide column_ option. This means that the column, although included in the definition, will not be displayed when the query is invoked for the first time. Once invoked, the user then has the option to show these columns, as well as hide any column.

Query+ also allows the user to change the order of the columns.

_Hide (Column Name)_ |  Hides the column that was clicked on with the mouse. For example, if you clicked on the _Vendor Name_ column, this option becomes _Hide Vendor Name,_ and when selected, the _Vendor Name_ column is hidden.  
---|---  
_Show/Hide/Reorder Columns_ |  Invokes the**Show/Hide/Reorder Columns** window for selecting the columns to be shown. You can also change their order **_(Query+, Drop Query)_** by dragging them to their new locations in the list or by moving them with the _Move Up/Move Down_ buttons.  
_Reset Default Columns_ |  Resets the column selection and order to that of the original query definition.  
_Save Column Settings_ |  Select this option to automatically save the selection of shown/hidden columns, as well as their order and width for the current profile when the profile or query is exited. The columns displayed, their order and width will be restored when the query profile is next loaded. If not selected, the last saved or default _Show/Hide_ settings, as well as the last saved or original column order and sizes will be restored the next time the query profile is loaded. These settings can also be saved using the _Save_ option on the query _Profile_ menu.  
  
##  Filters

Dynamic filters can be added to individual columns. Filters include tests for equality, inequality and range. A description of the filter can be viewed in the tip that appears over the column heading.

When filters are applied to more than one column, the conditions are applied using the **AND** operator (e.g. CustClass$ is equal to "xyz" AND Balance is less than 0).

If selection criteria is specified when a query definition is created, then the user filters are applied in addition to the selection criteria using the AND operator.

_Add filter to (Column Name)_ |  Invokes the **Filter** window for adding, modifying and removing a column filter. This window consists of the following: |  _Column_ |  From the drop-down list, select a column to filter. If just a part of the column value is to be evaluated, you can specify an _Offset_ and _Length_. **_Example:_** To evaluate only the first three characters of the column value, set _Offset_ to 1 and _Length_ to 3.  
---|---  
_Condition_ |  Select a condition to apply. Conditions include evaluations for equality, inequality, ranges, etc.  
_Value_ |  Enter the value(s) to compare. Use _double quotes_ (**""**) to indicate a null text value. A PxPlus expression can be entered if prefixed by an **_=_**_equals sign_ ; e.g. =%Class$. **_Example:_** If the condition is a range _Between <Value1> and <Value2> inclusive_, then two values, such as 0 and 100, may be entered.  
_Match case_ |  Select this check box for a case-sensitive filter. Existing column filters are displayed in the _Column_ drop-down list.  
_Remove filter from (Column Name)_ |  Remove any filter that may be associated with the current column.  
_Disable User filters_ |  Toggle to disable/enable the current user filters.  
_Save filters_ |  Select this option to automatically save the current user filters when a profile or query is exited. The filters will be restored when the query profile is next loaded. If not selected, the filters will not be saved or restored unless saved from the query _Profile_ menu.  
  
##  Formulas

**_(Query+, Drop Query)_**

Select _Formulas_ to invoke the **Formula Wizard** for defining a new formula, along with editing or deleting an existing one. The Wizard walks you through naming and defining the formula, as well as formatting the results.

Numeric formulas can be built from column values. Addition, subtraction, multiplication, division, exponentiation and modulus operations are supported. PxPlus functions, such as **ABS(** **)**_absolute value_ , **INT( )**_integer_ , **MIN( )**_minimum value_ , and **MAX( )**_maximum value_ , can also be used to manipulate values.

Text formulas can be built, which concatenate text components. These components can be comprised of literal values and column values. Partial items can be defined, and segments can be padded, have characters stripped, or be converted to upper/lowercase.

Formula-defined columns, like other columns, can also be shown/hidden, resized and re-ordered.

#### **Note:**  
Formulas that are created are unique to the currently active **[Query Profile](Run-time%20Query.htm#qryprofiles)**. If a new profile is saved, it will inherit all the user formulas from the profile that is active when it is saved.  
  
To share a user formula with the user's other profiles, the **Formula Wizard** has a _Copy formula to other profiles_ option.

##  Query Profiles

**_(Query+, Drop Query)_**

A query profile is a collection of run-time settings that has been applied to a standard query definition by a particular end user. The settings can consist of column settings (column order, column widths, hidden columns), as well as column filters and additional formulas that have been created at run time.

_(The ability to save Query Profile settings was added in PxPlus 2019.)_

A query profile can be saved with a name and recalled at a later time. The column and filter information that is saved is based on the whether the _Save column Settings_ option (_Columns_ menu) and the _Save filters_ option (_Filters_ menu) are selected. User formulas are saved immediately for the currently active profile but can be shared with other profiles either through inheritance when new profiles are created or by using the _Copy formula to other profiles_ option in the **Formula Wizard**.

The **_*Main*_** profile is initially derived from the original query settings and consists of run-time settings made by the user that have not been assigned a name. Each user can create up to 10 profiles (including the **_*Main*_** profile) per query.

#### **Note:**  
The **_*Main*_** profile **_cannot_** be deleted. Attempting to delete this profile displays a message that it cannot be completely deleted but will be reset to the standard or original query settings.

**_Query Profile Options_**

The query right-click popup menu provides options for loading, saving and deleting a query profile, along with other functions listed below. The Toolbar query view provides a _Profile_ button that displays these options, and the main menu of the Hybrid and Menu query views has a _Profile_ group with these options. See **[Query View](Query%20Header.htm#options)** for an explanation of each of these views.

Below is a list of query profile options:

_Load profile_ |  Invokes the **Load a Profile** window for selecting a profile to load from a list of profiles that have been created (if available) for the **_current query_**. To load a profile, click the _Load_ button to load a profile belonging to the current user, **_or_** click _Save_ and then click _Load_ to save another user's "shareable" profile and then load it. This window consists of the following: |  **Select Profile** |  Displays a list of profiles created by the current user, as well as profiles that were created by other users and designated as "shareable" (for the current query only).  
---|---  
_(Profile Details)_ |  Displays settings (i.e. columns, formulas, filters) for the selected query profile.  
_Save_ |  **_(Available when selecting a "shareable" profile that was created by another user)_** Allows the current user to save the "shareable" profile of another user for his/her own use.  
_Load_ |  Invokes the current query using the settings from the selected profile belonging to the current user.  
_Cancel_ |  Closes the **Load a Profile** window with no further action taken.  
  
#### **Note:**  
A profile can also be loaded by clicking an entry belonging to the current user in the [ **Profile List**](Run-time%20Query.htm#list).  
  
_Save profile_ |  Saves the current settings to the currently active profile.  
_SaveAs_ |  Invokes the **Save Query Profile As** window for saving a new profile using the current settings or for saving an existing profile with different settings. This window consists of the following: |  **Profile Name** |  To save a new profile, enter a name that is unique to the particular query and user. A profile name is restricted to 30 characters, consisting of letters, digits, spaces and the following special characters: **< / - . _ \ >**.  
---|---  
_Description_ |  **_(Optional)_** Enter a description for the profile.  
_Share with other users_ |  Selecting this check box allows the profile to be available for other users to load and to save the profile settings for their own use.  
_Set as default_ |  Selecting this check box sets this profile as the _default_ profile to be used when the query is invoked.  
_Ok_ |  Saves the profile and closes the **Save Query Profile As** window.  
_Cancel_ |  Closes the **Save Query Profile As** window without saving changes.  
_Delete profile_ |  Invokes the **Delete Profile** window for selecting the profile to delete. When the currently active profile is deleted, the query switches to the default profile. If the deleted query is also the default, then the query will switch to the **_*Main*_** profile.

#### **Note:**  
The **_*Main*_** profile **_cannot_** be deleted. If selected for deletion, a message warns that it cannot be completely deleted but will be reset to the standard or original query settings.

This window consists of the following: |  **Profile Name to delete** |  Click the drop-down arrow to select the profile to delete from the list of existing profiles.  
---|---  
_OK_ |  Deletes the selected profile and closes the **Delete Profile** window.  
_Cancel_ |  Closes the **Delete Profile** window with no further action taken.  
_Set current profile as default_ |  Sets the currently active profile as the default profile, which will be used when the query invoked. If not set, the **_*Main*_** profile is used.

#### **Note:**  
In the _Profile List_ , the default profile is indicated by the word **_< Default>_**.  
  
_Reset current profile to standard settings_ |  Resets the settings of the currently active profile to the original query settings. This includes column and filters settings, and removes any user formulas defined for the profile.  
_Export Profile_ |  Invokes the **Export Query Profile** window for exporting the user's current query settings (i.e. column order, hidden columns, column filters, user formulas, and/or favorites) to an XML file that can be used later to import the settings to another system or user. Settings can be saved for any query definition in any library that exists in the same directory where the current query is stored. This window consists of the following: |  _Select query profiles to be exported_ |  Displays a tree view from which to select the libraries, panels and profiles whose settings are to be exported.  
---|---  
_Export Options_ |  Select the types of settings to export, which include column order, hidden columns, column widths, column filters, user formulas and/or favorites.  
_Details_ |  Displays settings for the selected query profile.  
_Export File (.xml)_ |  Enter the name of the file to which the exported query profiles/settings will be saved. Click the Query button to specify the file pathname.  
_Clear export file before update_ |  When selected, the export file is cleared before current query settings are saved; otherwise, these settings will be added to the file's existing contents.  
_Export_ |  The export process generates XML code to describe the settings, which is saved in the export file.  
_Close_ |  Closes the **Export Query Profile** window.  
_Import Profile_ |  Invokes the **_Select query profiles to be imported_** window for importing a query profile. This window consists of the following: |  _File to be imported (.xml)_ |  Enter the name of the XML file with the profile to be imported. Click the Query button to specify the file pathname.  
---|---  
_(List Box)_ |  Displays a tree view from which to select the libraries, queries and profiles whose settings are to be imported.  
**Import Options** |  Select the types of settings to import, which include column order, hidden columns, column widths, column filters, user formulas and/or favorites.  
_Details_ |  Displays settings for the selected query profile.  
**Merge Option** |  |  _Merge_ |  Overwrites duplicate settings. **_(Default)_**  
---|---  
_Replace_ |  Removes/replaces selected settings.  
_Import_ |  The import process parses the XML file and either _merges_ the imported settings with existing ones or _replaces_ them, depending on the **Merge Option**.  
_Close_ |  Closes the **Select query profiles to be imported** window.  
_(Profile List)_ |  A list of all profiles that the current user has saved for the **_current query_**. To load a profile, click an entry in the list. A check mark next to a profile name indicates it is currently selected.  
  
##  Copy and Export

The Query Subsystem provides a facility to copy query data to the clipboard and to export it to comma- or tab-separated files, Symbolic Link Format files _(.slk)_ , or to SpreadsheetML files, an XML dialect.

The _.slk_ and _.xml_ formats represent the information in an MS Excel spreadsheet. SpreadsheetML files can be read by MS Excel 2003 versions and later. Symbolic Link files can be read by earlier versions. These file formats are also readable by other spreadsheet products such as Open Office.

_Copy (Column Name)_ |  Copy the value of the cell where the mouse was clicked to the Clipboard.  
---|---  
_Copy Other Column_ |  Copy the value of the specified column in the current row to the Clipboard.  
_Copy Selected Record_ |  Copy the current record to the Clipboard.  
_Copy All Records_ |  Copy all records in the query to the Clipboard.  
_Export All Records to File_ |  Export the query data to a file. The user must specify the file name and type: |  _.txt_ |  Tab-delimited  
---|---  
_.csv_ |  Comma-separated  
_.slk_ |  Symbolic Link  
_.xml_ |  Microsoft 2003 XML  
_Export All Records to Spreadsheet_ |  Export the query data to an XML spreadsheet file in the user's designated _Temp_ directory and open it.  
  
When copying or exporting data, hidden columns and records that are excluded due to column filtering are **_not_** included. In addition, if _Favorites_ mode is currently in effect, then only the designated favorite records will be exported.

The _Copy_ and _Export_ features are enabled by default. Individual queries have a _Suppress Export_ option on the **Query Header Definition[Options](Query%20Header.htm#options)** panel with selections to _Always or Never_ suppress export. A _Default_ setting is also available that uses the **[%NOMADS'Query_Suppress_Export](Designing%20and%20Using%20the%20Query%20Subsystem.htm#querysuppressexport)** setting (0=**_Off_** , 1=**_On_**).

See **[%NOMADS'Query_Suppress_Popup$](Designing%20and%20Using%20the%20Query%20Subsystem.htm#querysuppresspopup)**.

##  Charts

**_(Query+ Only)_**

The **[NOMADS AutoChart](../../../NOMADS%20AutoChart/Introduction.md)** feature allows the user to quickly define simple charts based on the columns of a query, to save the definitions, and to display the charts.

_Define a chart_ |  Invokes the **[Chart Wizard](../../../NOMADS%20AutoChart/Defining%20and%20Displaying%20an%20AutoChart.md)** that will step you through the process of creating, editing or deleting an AutoChart definition based on the query data. A _public_ AutoChart definition can be used to generate and load data into a Smart Chart. See **[Smart Controls](../../Smart%20Controls/Overview.md)**.  
---|---  
_Display chart_ |  Displays the chart designed for the query. If more than one chart was created, select the chart to display from the list of chart titles presented.  
_Schedule Chart Image Generation_ |  **_(Available to users authorized to create Public AutoCharts)_** Invokes **[Chart Image Generation Schedule Maintenance](../../../Chart%20Images%20Generation/Schedule%20the%20Chart%20Generation.md)** to schedule the generation of chart images.  
  
##  Edit File

Edit the data file. The current record is loaded into the specified File Maintenance window, although any record(s) may ultimately be edited.

When returning to the query, the data is updated, and the last record manipulated is highlighted.

##  Sub-Query

**_(Classic Query without Sort by Columns Option)_**

Generates a sub-query based on the current entry in the selected column.

##  Print Report

Click the _Print_ button to produce a simple report listing the title, file name and column headings, followed by a list of all the records that pass the selection criteria. Report columns are formatted in the same way as the screen display.

#### **Note:**  
This is **_not_** a report generator, as there are no options for control breaks, totals or staggered lines. It gives users access to either the report viewer **_(Query+, Drop Query)_** or the Print Selection screen with font, orientation and printer setup options **_(Classic Query)_**.

The font size is adjusted to fit all columns on the page. If your query has a large number of fields or very wide columns, NOMADS prints the report using a small font to fit the information into the space allotted. If the font is too small, users can select landscape orientation to increase the report width and thus the font size. If it is still too small, you may need to redesign your query panel by decreasing column size or the number of fields to create a usable report.

The _Print_ feature is available by default. The _No Print Button_ option on the **Query Header Definition[Options](Query%20Header.htm#options)** panel allows you to suppress this feature.

##  Refresh

**_(Classic Query with Sort by Columns Option, Query+, Drop Query)_**

Refreshes the contents of the query. In Query+, hover the mouse over the _Refresh_ toolbar button to display a tooltip indicating the number of entries.

##  Suppressing Run-Time Features

You can exclude certain types of features from the query popup menu and toolbar. This is accomplished by setting the **[%NOMADS'Query_Suppress_Popup$](Designing%20and%20Using%20the%20Query%20Subsystem.htm#querysuppresspopup)** property with any combination of the following:

> **C** Copy  
> **E** Export  
> **F** Filters  
> **G** Charts  
> **H** Hidden columns  
> **P** Profile  
> **U** User formulas  
> **V** Favorites

**_Example 1:_**

%NOMADS'Query_Suppress_Popup$="EC"

This example will suppress the **_E_** _xport_ and **_C_** _opy_ options.

**_Example 2:_**

%NOMADS'Query_Suppress_Popup$="PGU"

This example will suppress the **_P_** _rofile_ , **_G_** _raphs/Charts_ and **_U_** _ser Formulas_ options.

(The order of the letter codes does not matter.)

To suppress all features, set:

%NOMADS'Query_Suppress_Popup$="*"

The settings for suppressing _Favorites_ and _Export/Copy_ can be overridden on a per-query basis by setting the _Suppress Favorites_ and _Suppress Export_ query header options for the individual query to a value other than _Default_.
