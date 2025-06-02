# Query Subsystem 

**Designing and Using the Query Subsystem** |  **__**  
---|---  
  
The following sections contain information for programmers regarding the design and use of the Query Subsystem.

##  Performance Considerations

**_Query+ - Loading the Query_**

Query+ uses a Report View list box to display the data, which is loaded using two types of load logic. When loading a native file, if no filters are assigned to the query either in the **[Query Selection Definition](Query%20Selection%20Criteria.md)** criteria or user filters created at run time, then the list box is loaded using **_Load On Demand_** logic. That is, only the records required to populate the current display are read and loaded, which can result in a rapid display. If there are filters, then the records are loaded into the list box using **_Background Load_** logic. That is, the list box continues to load in the background while the user is looking at it. In both cases, accessing certain run-time features, such as copying or exporting a file, finding text and matching columns, etc. may require that the entire list be loaded before continuing.

**_Drop Query and Drop Tree Query Loading the Query_**

The Drop Query and Drop Tree Query load the entire dataset when the query is invoked. The user must wait until the load is finished before proceeding. These queries are designed to display small datasets, as would be displayed in a drop box.

**_Classic Query Sort by Key Mode - Handling Large Data Files_**

You can speed up access to large files using alternate scroll logic. The default scroll logic uses **[RNO( )](../../../functions/rno.md)** functionality to determine position within the file; however, this can degrade performance when a file is too large. NOMADS supplies an alternate scroll algorithm, which is less precise but much faster for large files.

To invoke the alternate logic, the following criteria must be met:

  * The _Switch Scroll Bar for Large File_ check box must be set. See **Query Header Definition[Options](Query%20Header.htm#options)** tab.
  * The number of records in the file must exceed the value stored in the global variable **[%NOMADS'Query_Sbar_Max](Designing%20and%20Using%20the%20Query%20Subsystem.htm#querysbarmax)**. Because this value is stored as a global variable, it can be unique to individual machines.



The default scroll bar logic is used in the following instances:

  * If the _Switch Scroll Bar for Large File_ check box has not been set, even if the file is larger than the indicated limit.
  * If **[%NOMADS'Query_Sbar_Max](Designing%20and%20Using%20the%20Query%20Subsystem.htm#querysbarmax)** contains a value of zero (i.e. is not set).
  * If the _Switch Scroll Bar for Large File_ check box has been set, but the file is smaller than the limit.



**_Classic Query - Sort by Columns Mode_**

If _Sort by Columns_ (Pre-load Data) is set for a Classic Query, NOMADS pre-loads selected records into a memory file and creates a second memory file to handle column sorting (if required). This can have an effect on performance, as you have to wait for the pre-load. You can set up the sorting mode in the **[Query Header Definition](Query%20Header.md)**.

When you decide which mode is best for a particular application, the following performance implications should be taken into account.

The _Sort by Columns_ mode allows you to base prefix and range selection criteria on either the alternate Sort By key or the primary key. This can speed up access when you have a prefix or range applied to the alternate sort key since only the records within the range are read. If _Sort by Columns_ (Pre-load Data) has not been selected, then you can only apply prefixes and ranges to the primary key (and alternate keys that begin with the same field(s) as the primary key). Therefore, restrictions on alternate keys beginning with fields different from the primary key must be in the form of a _Select Logic_ test, and the entire file must be read to filter the data.

## Native File vs. Database Query Definitions

Although native files and database tables require different information and have different definitions, it is possible to display database tables using native file definitions and vice versa.

**_Case 1:_**

> You can use query definitions originally set up for the native file system to display database tables if you use a PxPlus **[PREFIX FILE](../../../directives/prefix.htm#Mark10)** directive to define the database and table name corresponding to the original file. You do not have to change the **[Query Definition](Query%20Definition.md)**. The only difference is that NOMADS displays such queries using the _Sort by Columns_ mode. See **Query Header Definition[Options](Query%20Header.htm#options)** tab.

**_Case 2:_**

> **_(Classic Query)_** You can use a query definition for a database table to display a native file if the following conditions are met:

  * The database table name and logical file name are the same.
  * The _Data Source Name_ is a global expression, loaded with the name of the physical file.
  * The global variable **[%NOMADS'Query_Odb_Ignore](Designing%20and%20Using%20the%20Query%20Subsystem.htm#queryodb)** is set to 1.



> For information on the **_Classic Query_** and other modes of query display, see **[Query Subsystem](Overview.md)**.

##  Query Variables

This table lists the special **_Query Variables_** used to interface with the query:

**QRY_VAL$** |  Value of the control whose query button is pressed. This value is passed to the query logic. It is also used for the value that is returned from the query and placed back in the control.  
---|---  
**QRY_REC_COUNT** |  Contains the number of query records successfully selected at the point it is accessed. See **[Query Selection Criteria](Query%20Selection%20Criteria.htm#Mark3)**. _(The QRY_REC_COUNT variable was added in PxPlus 2023.)_  
**PRIME_KEY$** |  Value of the primary key. Can be used to access entire multi-segmented keys, as well as an external key. Use in expressions in formulas, filters and return values.  
**ENTIRE_RECORD$** |  Contains the contents of the entire main file record. Can be used in **[Selection Logic](Query%20Selection%20Criteria.htm#Mark4)** or in **[Return Value](Query%20Header.htm#returnvaluehead)** expressions. (The Query Subsystem uses the **[REC( )](../../../functions/rec.md)** function to obtain this value.) You can use this variable alone or in conjunction with **PRIME_KEY$**. **_Example:_** PRIME_KEY$+ENTIRE_RECORD$ _(The ability to use the ENTIRE_RECORD$ variable in Selection Logic also was added in PxPlus 2024 Update 1.)_  
**QUERY_ROW$** |  Contains the contents of a row in the query. Can be used in **[Selection Logic](Query%20Selection%20Criteria.htm#Mark4)** or in **[Return Value](Query%20Header.htm#returnvaluehead)** expressions. **_Example:_** In the Query **Selection Logic** , you could use the following test to display all records that contain the value of the associated multi-line (ARG_1$): ARG_1$="" OR POS(UCS(ARG_1$)=UCS(QUERY_ROW$))>0 _(The QUERY_ROW$ variable was added in PxPlus 2024 Update 1.)_  
**%QRY_VARIOL$** **%QRY_VARDATA$** |  The **%QRY_VARIOL$** and **%QRY_VARDATA$** variables can be used to pass external data to the run-time Query+ logic. The **%QRY_VARIOL$** variable can be loaded with a compiled IOList containing the names of the variables to hold external data. The **%QRY_VARDATA$** can be loaded with the data for the variables in **REC( )** format. It is recommended that these variables be declared as **LOCAL**. **_Example:_** LOCAL %QRY_VARIOL$=CPL("IOLIST MYVAL$,XVAL") LOCAL %QRY_VARDATA$=REC(IOL=%QRY_VARIOL$) At run time, the Query+ logic loads the data from **%QRY_VARDATA$** into the variables in **%QRY_VARIOL$** ; therefore, the data in these variables is available to use in such things as filters and formulas, both in the query definition and at run time. _(The %QRY_VARIOL$ and %QRY_VARDATA$ variables were added in PxPlus 2021.)_  
  
This table lists several **_%NOMADS_** _**properties**_ (or %NOMAD variables) that you can use in your applications to refine the look and control the behaviour of your query. For additional variables, see **[NOMADS Variables](../../Appendix/NOMADS%20Variables/Overview.md)**.

**Qry_Attr$** |  **_(Multi-Lines Only)_** Sets query button attributes. Options are: **B** \- Bitmap  
**F** \- Flat  
**f** \- Flat - No Border  
**T** \- Transparent  
**Q** \- Embedded **_Example:_** To set a flat bitmap button: %NOMAD_Qry_Attr$="FB" To view a video presentation on how to use the embedded query feature, which includes the %NOMAD_Qry_Attr$ property, see **[How to Use Embedded Query](https://www.youtube.com/watch?v=K01hzcnYNlk&feature=youtu.be)**.  
---|---  
**Qry_Btn$** |  **_(Multi-Lines Only)_** Load this with a bitmap reference to display a different default bitmap for the query button. **_Example:_** {!Help}  
**Qry_Clear_Start** |  **_(Classic Query Only)_** If 0 _(zero)_ , position at _Start At_ value in the query. ** _(Default)_**  
  
A non-zero value overrides _Start At_ value and starts display at the beginning of the file. The variable QRY_VAL$ will be cleared before the query panel is displayed. For information on the **_Classic Query_** and other modes of query display, see **[Query Subsystem](Overview.md)**.  
**Qry_Print$** |  Name of a user program to call when the Print button is selected in a query. Arguments passed to the program are the 12-character space-padded uppercase screen key and the path to the screen library. The program logic totally replaces the query's default print logic.  
**Qry_Tip$** |  **_(Multi-Lines Only)_** _Tip Value_ text to be displayed when the mouse is on the query button.  
**Qry_Wide** |  **_(Multi-Lines Only)_** Set this to change the default width of the query button.  
**Query_AutoColSize** |  Set to 1 to automatically adjust the sizes of the columns to fit the width of a query. _(Query_AutoColSize property was added in PxPlus 2019.)_  
**Query_Clear_Status** |  **_(Classic Query Only)_** If non-zero, the query window status bar is cleared. For information on the **_Classic Query_** and other modes of query display, see **[Query Subsystem](Overview.md)**.  
**Query_ColumnDisplay$** |  Set the query column display class. **_Default_** is "*obj/qrycoldsp".  
**Query_Fave_Color$** |  Highlight records designated as favorites in the normal query display by specifying a highlight color. **_Example:_** %NOMADS'Query_Fave_Color$="Dark Green"  
  
**_or_**  
  
%NOMADS'Query_Fave_Color$="RGB:192 64 0"  
**Query_GridLines** |  Displays grid lines in the query. Options are:  
  
**0** \- No grid lines  
**1** \- Full grid  
**2** \- Vertical lines  
**3** \- Horizontal lines _(Query_GridLines property was added in PxPlus 2017.)_  
**Query_Hide_On_Maint** |  Set to 1 to hide the query panel when the query maintenance button is selected and redisplay the query when the maintenance process is finished.  
**Query_Kno** |  If non-zero, overrides the value in the **[Query Definition](Query%20Definition.md)**. The run-time query logic uses this value to override the key number used to sort the query.  
**Query_NoDropHeader** |  Set to 1 to suppress the display of the column headings in **[Drop Queries](Overview.htm#dropquery)**. _(Query_NoDropHeader property was added in PxPlus 2019.)_  
**Query_No_Gray** |  Set this to non-zero to override the Gray/White Display setting and display a White Only background.  
**Query_Odb_Ignore** |  **_(Classic Query Only)_** A non-zero value ignores the ODBC table flag and processes as a native file. For information on the **_Classic Query_** and other modes of query display, see **[Query Subsystem](Overview.md)**.  
**Query_ProfileClean** |  Number of days of disuse after which query profile records are removed from _query.inf_. (**_Default_** is 90.)  
**QueryProgram$** |  Set the NOMADS query program (*winqry or *winqry2). **_Default_** is "*winqry2" if Smart Control is activated; otherwise, "*winqry".  
**Query_RetKno** |  Contains the value of the last key number used to sort the query.  
**Query_Sbar_Max** |  Number of records in a large file used to determine if alternate scrollbar logic is to be used. See **[Performance Considerations](Designing%20and%20Using%20the%20Query%20Subsystem.htm#performance)**.  
**Query_Suppress_Export** |  Set to 1 to suppress the _Export_ and _Copy_ features in the run-time query.  
**Query_Suppress_Favorites** |  Set to 1 to suppress the _Favorites_ feature in the run-time query.  
**Query_Suppress_Persistence** |  **_(Query+ and Classic Query Only)_** Suppress persistence on the query. Options are: **0** \- Do not suppress persistence (if set)  
**1** \- Suppress persistence (location/size of query will be the original location/size)  
**2** \- Suppress location persistence (location will be the original location, but size will persist if changed) If %NOMADS'Query_Suppress_Persistence>0, then maximized panels are overridden.

#### **Note:**  
For information on suppressing panel persistence, see [**Panel Persistence**](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Persistence.md) and the [**%NOMADS'RelPnl_Suppress_Persistence**](Overview.htm#relpnlsuppresspersistence) property.

_(Query_Suppress_Persistence property was added in PxPlus 2019.)_  
**Query_Suppress_Popup$** |  Exclude certain types of menu options from the query popup menu. Suppress menu items by setting the variable with any combination of the following options: **E** \- Export  
**C** \- Copy  
**H** \- Hidden columns  
**F** \- Filters  
**G** \- Charting  
**V** \- Favorites  
**P** \- Profile  
**U** \- User formulas **_Example:_** A setting of "EC" suppresses the _Export_ and _Copy_ options.  
A setting of "CEFGHPUV" or "*" suppresses the entire popup menu.

#### **Note:**  
The order of the letter codes is not important.  
  
**Query_View** |  Default **[Query+](Overview.htm#queryplus)** view to use. Options are: **0** \- Default _(Toolbar View)_  
**1** \- Drop Query  
**2** \- Toolbar View  
**3** \- Menu View  
**4** \- Hybrid View  
**5** \- Drop Tree For information on the Drop query and Drop Tree query, see **[Drop Queries](Overview.htm#dropquery)**.

#### **Note:**  
This variable supersedes the [**%NOMADS'Drop_Qry_All**](../../Appendix/NOMADS%20Variables/Overview.htm#dropqryall) variable.

_(Query_View property was added in PxPlus 2017.)  
(Drop Tree option was added in PxPlus 2021.)_
