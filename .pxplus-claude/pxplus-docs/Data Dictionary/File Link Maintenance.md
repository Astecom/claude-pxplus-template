# Data Dictionary

**File Link Maintenance** |  **__**  
---|---  
  
The **File Link Maintenance** utility allows you to define and maintain the cross-reference linkages that exist between application data files. Based on existing files with embedded dictionaries defined in **[Data Dictionary Maintenance](Data%20Dictionary%20Maintenance/Overview.md)**, you can specify which files have fields that can be used to populate keys to read cross-reference files to obtain more information. A one-to-one relationship is supported between the files where the fields from one file match the key for the cross-referenced file. For example, an Invoice Header file may contain a client code that can be used to read the Client Master File to obtain the client's name and address, as well as the sales code to obtain the name of the sales representative from the Salesperson file.

The purpose of this utility is to provide link definitions that can be used to simplify specifying relationships in **[Query Definitions](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.md)** and **[Views Data Source Definitions](../Views%20System/Data%20Source%20Maintenance/Data%20Source%20Definition.htm#step3)**, as well as **[Input Source Definitions](../Report%20Writer/Designing%20a%20Report/Defining%20the%20Data/Input%20Source.md)** in the **[Report Designer](../Report%20Writer/Designing%20a%20Report/Report%20Designer/Overview.md)**.

With the **[File Links Express](File%20Link%20Maintenance.htm#express)** utility, you can quickly create new cross-reference file links to other files in the data dictionary based on the primary key or other unique alternate key of the file being linked to.

_(The File Link Maintenance utility was added in PxPlus 2016.)  
(The File Links Express utility was added in PxPlus 2023.)_

> To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Data Management_ category and select _File Link Maintenance_.  
From the **[NOMADS Session Manager](../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  From the _Dictionary_ menu, select _File Link Maintenance_.  
From **[Data Dictionary Maintenance](Data%20Dictionary%20Maintenance/Overview.md)** |  On the Main panel, use the **[Define File Links](Data%20Dictionary%20Maintenance/Overview.htm#file_links)** button (_chain link with drop-down arrow_) to invoke **File Link Maintenance** either by clicking the chain link or by clicking the drop-down arrow and selecting _File Link Maintenance_ from the displayed menu. _(The Define File Links button in Data Dictionary Maintenance was added in PxPlus 2025.)_  
From **[Data Dictionary Maintenance](Data%20Dictionary%20Maintenance/Overview.md)** |  From the _Utilities_ menu, select _File Link Maintenance_.  
From the PxPlus Command line |  Enter: **LINKS**  
  
This window consists of the following:

**File To Link** |  If no _File To Link_ is specified, the default is to display _All_ links. Enter a logical file name to show just the links related to that file. To query the logical file name by Group or by Name, use any of the following methods: |  |  Click the Query Table View button _(magnifying glass)_ for a tree view of table names by Group. For information on creating a filter to locate a specific table name, see **[Filtering the Table Names Lookup](Data%20Dictionary%20Maintenance/Filtering%20the%20Table%20Names%20Lookup.md)**.  
---|---  
|  Click the Query button _(binoculars)_ for a query view of tables by table name. For information on using the query features (i.e. search, sort, filter, etc.), see **[Run-Time Query](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Run-time%20Query.md)**.  
|  Use the browse buttons to locate a table name.  
_Link Express_ __|  Button that invokes the **[File Links Express](File%20Link%20Maintenance.htm#express)** utility for creating multiple links to other files in the data dictionary based on the primary key or other unique alternate key of the file being linked to. _(The Link Express button was added in PxPlus 2023.)_  
**File Links** |  Displays a list of all currently existing link definitions. This list consists of the link description, the file being linked ** _from_** , the file being linked **_to_** , and the key used to read the latter.  
_Add_ |  Invokes **[File Link Definition](File%20Link%20Maintenance.htm#linkdefinition)** for adding a new link definition.  
_Edit_ |  Invokes **[File Link Definition](File%20Link%20Maintenance.htm#linkdefinition)** for editing an existing link definition selected from the list.  
_Delete_ |  Deletes an existing link definition selected from the list.  
_Test_ |  Button that is used to test a selected link definition. Click on a link definition row to select it and then click the _Test_ button to display the results in a separate window. _(The Test button was added in PxPlus 2023 Online Update 0001.)_  
_Close_ |  Closes **File Link Maintenance**.  
  
#### **Note:**  
When you select a link to add to a **[Query](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.htm#queryfilelink)** or **[Views Data Source Definition](../Views%20System/Data%20Source%20Maintenance/Data%20Source%20Definition.htm#step3)**, current information from the link definition is copied to the Query or Views interface where it can be modified as desired. Any future changes to the original File Link Definition will have no effect on existing Query or Views linkages. Link definitions specified in a Report Writer report definition, however, use the original File Link Definition references, so changes to File Link Definitions will affect the report.

##  File Link Definition

**File Link Definition** is used to add, edit, delete and test file link definitions. You can perform multiple updates in one session.

> This window consists of the following:

_Link From_ |  Logical file name of the main file whose fields can be used to populate a key to read a cross-reference file. |  |  Click the Query Table View button _(magnifying glass)_ for a tree view of table names by Group. For information on creating a filter to locate a specific table name, see **[Filtering the Table Names Lookup](Data%20Dictionary%20Maintenance/Filtering%20the%20Table%20Names%20Lookup.md)**.  
---|---  
|  Click the Query button _(binoculars)_ for a query view of tables by table name. For information on using the query features (i.e. search, sort, filter, etc.), see **[Run-Time Query](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Run-time%20Query.md)**.  
|  Click the Link Query button _(chain link)_ to select an existing link definition.  
  
To display information about the selected file, hover the mouse pointer over the information button.  
  
_Link To_ |  Logical file name of the cross-reference file. |  |  Click the Query Table View button _(magnifying glass)_ for a tree view of table names by Group. For information on creating a filter to locate a specific table name, see **[Filtering the Table Names Lookup](Data%20Dictionary%20Maintenance/Filtering%20the%20Table%20Names%20Lookup.md)**.  
---|---  
|  Click the Query button _(binoculars)_ for a query view of tables by table name. For information on using the query features (i.e. search, sort, filter, etc.), see **[Run-Time Query](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Run-time%20Query.md)**.  
  
To display information about the selected file, hover the mouse pointer over the information button.  
  
_Access Key_ |  Key by which to read the cross-reference file (i.e. _Link To_). To display a more detailed key definition, hover the mouse pointer over the information button.  
_Record Prefix_ |  A string used to prefix the field names of the cross-reference file record in case there are duplicate field names in the main file. The prefix can be a maximum of 10 characters. **_Example:_** The main file and link file may both have a field called _ProductCode_ _$_. To differentiate the fields, a record prefix of _prod_ would result in the fields in the cross-reference file being prefixed by _prod.,_ e.g. _prod.ProductCode_ _$._

#### **Note:**  
Prefixes will be truncated to 4 characters in Query Link Definitions.  
  
_Key Expression_ |  A PxPlus expression comprised of fields from the main file, functions, literals and/or global variables that is used to populate the key of the cross-reference file when reading it. A key expression may be string or numeric. **_Examples:_** TRN_CUSTID$ "D"+FLD#2$(1,3) PAD(Company$,5,$00$)+PAD(Department$,10,$00$)+STR(EmployeeNum) KEY(__fileFN,KNO=0,KEY=Company$:Department$:EmployeeNum) **_Multi-Segment Keys_** When dealing with multi-segmented keys (i.e. keys made up of more than one field), you can use a **+**  _(plus sign)_ to concatenate multiple string segments of a key when entering a free-form expression. Be sure to add the correct padding logic to the initial key segments. By default, the initial segments of native PxPlus keys are padded with $00$ characters, and the final segment is not padded. Such a key definition might look like this: PAD(Company$,5,$00$)+PAD(Department$,10,$00$)+STR(EmployeeNum) Individual applications can pad key segments with other characters, such as spaces; therefore, knowledge of the key architecture of individual files is a **_must_**. Knowledge of segment characteristics is not necessary; however, if the key expression uses the **KEY(__linkFN,KNO=_n_ ,KEY=FLD1$:FLD2$)** format where **__linkFN** is a special channel variable used by the system when evaluating the key, **_n_** is the key number used by the file, and **FLD1$:FLD2$** are the key segment variables. The latter format is also more flexible as it can handle changes in key segment length if keys are updated for a file. In addition, this format allows a mixture of string and numeric segments. **_Key Expression Builder_** An easy way to build a key expression is to use the **Key Expression** utility, which is invoked by clicking the Tool button next to the _Key Expression_. The key expression is built by specifying key segments to match the target key definition. These segments can consist of fields from the parent file, literal values and variables. Partial items can be defined, and segments can be padded, have characters stripped, or be converted to upper/lower case. In the case of **_multi-segment keys_** , a _Generate a KEY=F1$:F2$ expression_ check box option is available: |  |  If it is not selected, the key segments will be concatenated, and individual key segments would have to be padded or manipulated appropriately.  
---|---  
|  If it is selected, then a key expression in the format **KEY(__linkFN,KNO=_n_ ,KEY=FLD1$:FLD2$)** will be generated where the segments need not be manipulated. (For an explanation of the contents of the generated key, see **[Multi-Segment Keys](File%20Link%20Maintenance.htm#multiseg_keys)**.)  
  
Simple numeric keys can be built using a numeric field. Multi-segment numeric keys should be built using the _Generate a KEY=F1$:F2$ expression_ option.

_(The Generate a KEY=F1$:F2$ expression check box was added in PxPlus 2023.)  
__(Support for numeric key definitions when defining key expressions in file links was added in PxPlus 2023 Update 1.)_  
  
_Link Description_ |  A unique description to identify the file link definition.  
_Test_ |  Tests the current file link definition and displays the results in a separate window.  
_Save_ |  Saves/updates the file link definition.  
_Delete_ |  Deletes the selected file link definition. Prior to deleting the file link, a message will display.  
_Clear_ |  Clears the fields and leaves the **File Link Definition** window open.  
_Close_ |  Closes **File Link Definition** and returns to **File Link Maintenance**. If any unsaved changes are detected, a message will display.  
  
##  File Links Express

The **File Links Express** utility allows you to quickly create new cross-reference file links to other files in the data dictionary based on the primary key or other unique alternate key (see **[Defining Keys](Data%20Dictionary%20Maintenance/Defining%20Keys.md)**) of the file being linked to.

**_Example:_**

> The primary key (Country$) for the _Countries_ file may exist in a number of other files in the data dictionary that are not currently linked to it. This utility will search the data dictionary for all files that contain a Country$ field and list them as possible cross-reference files.

Options for each cross-reference file can be defined individually, or the _Edit All_ feature (in top row) can be used for a specific column to apply the option for all the tables in the list.

_(The File Links Express utility was added in PxPlus 2023.)  
(The ability to select other unique alternate keys, besides Primary key, was added in PxPlus 2023 Online Update 0001.)_

To invoke the **File Links Express** utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From **File Link Maintenance** |  Click the **[Link Express](File%20Link%20Maintenance.htm#linkexpress)** button.  
From **[Data Dictionary Maintenance](Data%20Dictionary%20Maintenance/Overview.md)** |  On the Main panel, click the drop-down arrow on the **[Define File Links](Data%20Dictionary%20Maintenance/Overview.htm#file_links)** button (_chain link with drop-down arrow_) and select _File Links Express_ from the displayed menu. _(The Define File Links button in Data Dictionary Maintenance was added in PxPlus 2025.)_  
From **[Data Dictionary Maintenance](Data%20Dictionary%20Maintenance/Overview.md)** |  From the _Utilities_ menu, select _File Links Express._ _(File Links Express was added to the Data Dictionary Utilities menu in PxPlus 2025.)_  
  
The **File Links Express** window is displayed:

> This window consists of the following:

_File to Link to_ |  Enter the table to search for potential links to other files in the data dictionary based on key information.  
---|---  
_Select Key_ |  Select the table key from a list of unique keys on which to base the link definition. _(The Select Key drop box was added in PxPlus 2023 Online Update 0001.)_  
_(Links Grid)_ |  Grid that is used to add or edit file links. This grid consists of the following: |  _Edit All_ |  The changes made to the _Prefix_ , _Key Expression_ or _Make Link_ options in this row will be applied to all the tables in the list.  
---|---  
_Link from Table_ |  List of tables linked to the _File to Link to_ entry. The initial list consists of tables that share the fields of the selected key of the _File to Link to_. To add additional tables that may have different field names that correspond to the selected key, click the Add a new link button and either enter the new table name or click the lookup button to select a table.  
_Link Description_ |  Description of the link. **_Must_** be unique. A default description consisting of the _Link from Table_ and the _File to Link to_ is provided for new links but may be changed.  
_Prefix_ |  Prefix to use for the record prefix of the _File to Link to_.  
_Key Expression_ |  Key expression based on fields from the _Link from Table_ that is used to read the _File to Link to_. Default is the selected key of the _File to Link to_. Enter the Key expression in the grid or click the dotted button to invoke the **[Key Expression](File%20Link%20Maintenance.htm#keyexpr)** utility.  
_Make Link_ |  Select the check box to include the entry when updating the file links.  
_Test the selected link_ |  Button that is used to test a selected link definition. Click on a link definition row to select it and then click the _Test_ button to display the results in a separate window. _(The Test button was added in PxPlus 2023 Online Update 0001.)_  
_Add a new link_ |  Button that is used to add a table to the list.  
_Remove selected table from list_ |  Button that is used to remove the selected table from the list **_only_**. Does not remove the file link definition from the system. To remove a file link definition, select the table in **File Link Maintenance** and click the _Delete_ button.  
_View Log_ |  **_(Available when additions or changes have been applied)_** Displays the log file that contains a list of link definitions that have been added or updated. The contents are displayed as a PDF, which also provides options for printing or saving the log, if desired.  
_Apply_ |  Saves the file link definitions that are indicated by the _Make Link_ entries. Whenever link definitions are applied, a log file is updated. The log entries are cumulative as links to different files are applied.  
_Exit_ |  Closes the **File Links Express** utility. If changes have been made to the file link definitions but not applied, a message will display. If records exist in the log file, a message will ask if you want to view the log.
