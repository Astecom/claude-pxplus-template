# Data Dictionary Maintenance

**Bulk Database Export Utility**|   
---|---  
  
The **Bulk Database Export Utility** allows you to define a connection to an existing database (ODB, MySQL, OCI, ADO or DB2) and then selectively export table definitions from the PxPlus data dictionary into the specified database.

In addition, this utility can be used to:

  * Create **[Link Files](../../PxPlus%20User%20Guide/Data%20Integration/External%20Databases/Creating%20Link%20File.md)** that point to tables in the database
  * Create Link files that point to the database itself
  * Add entries to the **[Prefix File](../../PxPlus%20User%20Guide/Data%20Integration/External%20Databases/Creating%20the%20Prefix%20File.md)** that point to tables in the database
  * Add entries to the Prefix File that point to the database itself
  * Validate native PxPlus data files
  * Load data from native PxPlus data files to database tables



The **[Create DB File](Bulk%20Database%20Export.htm#createdbfile)** button launches a separate window that allows you to create either a Link file or a Prefix file entry that points to the database itself.

_(The Bulk Database Export Utility was added in PxPlus 2023.)  
__(The Create DB File button was added in PxPlus 2023 Update 1.)_

The utility remembers database connection information after successfully connecting to the database when the **[Load Tables](Bulk%20Database%20Export.htm#loadtbl)** button is selected. Multiple database connections can be remembered, one connection for each database type. The connection information is remembered on a "per project" basis. This allows one project to use one database while another project can use a different database easily.

When the utility is invoked, the connection information for the last database that was successfully connected to is automatically loaded into the fields in the **[Target Database](Bulk%20Database%20Export.htm#targetdb)** section. If you change the _Database Type_ field and a database of that type previously connected successfully, the remembered database connection information will automatically be loaded.

_(The remembering of database connection information was added in PxPlus 2023 Update 1.)_

This utility lists all the tables in the PxPlus data dictionary, sorted in alphabetical order by default. A check mark indicates which table definitions are currently in the database. Options for different _Actions_ can be selected individually for each table, or the _Edit All_ drop down can be used to select an option for all the tables. The selected actions are used to validate native PxPlus data files, create/merge/replace database tables, load a database table with data from a native PxPlus data file, create database link files, and add database table entries to the prefix file.

To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From **[Database Export Utility](Database%20Export.md)** |  Click the _Bulk Export_ button.  
From [**Data Dictionary Maintenance**](Overview.md) |  Click the _Export_ button in the **_Database_** section of the tool bar if no table with a native PxPlus data file is currently selected.  
From [**Data Dictionary Maintenance**](Overview.md) |  From the menu bar, select _File_ > _Database Export Utility_ if no table with a native PxPlus data file is currently selected.  
From the PxPlus Command line |  Enter: **RUN "*dict/expdde"**  
Call Export actions programmatically |  See [**Calling Export Actions Programmatically**](Database%20Export.htm#Mark6).  
  
The **Bulk Database Export Utility** is displayed below with a sample entry:

> This window consists of the following:

**Target Database** |  Enter the database information. The utility remembers the database connection information after successfully connecting to the database (when the **[Load Tables](Bulk%20Database%20Export.htm#loadtbl)** button is selected) and automatically loads this information into these fields when the utility is invoked. _(The automatic loading of database connection information was added in PxPlus 2023 Update 1.)_ |  _Database Type_ |  Type of database. Selections are _ODB, MySQL, OCI, DB2_ and _ADO_. Defaults to _ODB_.  
---|---  
_Data Source**or** Server_ |  **_(This field changes depending on the Database Type selected)_** If _Database Type_ is [**ODB**](../../command_tags/odb.md): Enter the name of the _Data Source_. **_(Required for ODB)_** If _Database Type_ is [**MySQL**](../../command_tags/mysql.md), [**OCI**](../../command_tags/oci.md) or [**ADO**](../../command_tags/ADO.md): Enter a _Server_ address. If the database is running locally, this value may be omitted. **_(Required for ADO)_** If _Database Type_ is [**DB2**](../../command_tags/db2.md): The _Server_ field is disabled, as only the _Database Name_ is used and the server is defined in the _db2cli.ini_ file.  
_Database Name**or** System ID_ |  **_(This field changes depending on the Database Type selected)_** If _Database Type_ is [**ODB**](../../command_tags/odb.md), [**MySQL**](../../command_tags/mysql.md), [**DB2**](../../command_tags/db2.md) or [**ADO**](../../command_tags/ADO.md): Enter the _Database Name_. **_(Required for MySQL or DB2)_** If _Database Type_ is [**OCI**](../../command_tags/oci.md): Enter the Oracle _System ID_ value. **_(Required for OCI)_**  
_User Name_ |  User login name.  
_Password_ |  User password.  
_Additional Options_ |  Parameters to be included in the **OPT=** string when opening the database or updating the prefix file. All parameters are semi-colon separated. Defaults to NONULLS=Y;NULLPADKEY=Y for all database types **_except_** OCI, which defaults to NULLPADKEY=Y. _(The additional option NULLPADKEY=Y was added in PxPlus 2023.)_  
_Create DB File_ |  Button that launches the **Create Database Connection File** window that allows you to create either a Link file or a Prefix file entry that points to the database itself. A direct connection to the database may be useful so that you can do a global OPEN to the database, providing the UserID and Password. This avoids needing the UserID and Password on every link/prefix entry. It can also be used to get a list of tables from the database or if your program needs to make direct queries against the database. This window consists of the following: |  _Database File Type_ |  Select the database file type to create, either _Link File**(Default)**_ or _Prefix File Entry_.  
---|---  
_Link File Path_ |  **_(Applicable when Database File Type is Link File)_** Enter the path for the link file or click the Query button.  
_Prefix File Entry Name_ |  **_(Applicable when Database File Type is Prefix File Entry)_** Enter the prefix file entry name.  
_Create_ |  Creates the link file in the specified path or creates the entry in the prefix file, depending on which _Database File Type_ is selected.  
_Cancel_ |  Closes the **Create Database Connection File** window with no further action taken.  
  
_(The Create DB File button was added in PxPlus 2023 Update 1.)_  
  
_Load Tables_ |  Button that is used to load tables from the PxPlus data dictionary into the _Tables_ grid. If changes have been made in the grid but not applied, a message will display. When the database connection is successful, the connection information (one connection for each database type) is remembered on a "per project" basis and is automatically loaded when the utility is invoked. _(The remembering of database connection information was added in PxPlus 2023 Update 1.)_  
_(Tables Grid)_ |  Grid that lists all the tables in the PxPlus data dictionary. This list can be sorted by clicking on the column header for the following columns only: _Table_ , _Group_ , _Description_ and _In DB_. Subsequent clicks toggle the sort between ascending/descending order. By default, the list is sorted by _Table_ name in ascending order. _(Column sorting for applicable columns was added in PxPlus 2023 Update 1.)_ This grid consists of the following: |  _Edit All_ __|  The changes made to the _Validate_ , _DB Action_ , _Load Table_ and _File Action_ options in this row will be applied to all the tables in the list. For _DB Action_ , available selections are: |  _No Action_ |  **_(Default)_** No action to apply.  
---|---  
_Create or Merge Table_ |  Sets the _DB Action_ to either _Create Table_ or _Merge Table_ for each table in the list, depending on whether the table is in the database.  
_Create or Replace Table_ |  Sets the _DB Action_ to either _Create Table_ or _Replace Table_ for each table in the list, depending on whether the table is in the database.  
_Table_ |  **_(Display Only)_** Displays the name of each table from the PxPlus data dictionary.  
_Group_ |  **_(Display Only)_** Displays the current group name of the table from the data dictionary. _(The Group column was added in PxPlus 2023 Update 1.)_  
_Description_ |  **_(Display Only)_** Displays the table description from the data dictionary.  
_In DB (DB = Database)_ |  **_(Display Only)_** Displays a check mark if the table is in the database or an X if it is not in the database.  
_File Type_ |  **_(Display Only)_** Displays the current physical file type from the data dictionary. Possible values are: |  _No File_ |  No physical file exists.  
---|---  
_Native_ |  A native PxPlus data file exists.  
_Native Prefix_ |  A prefix file entry points to a native PxPlus data file.  
[_ODB_**|**_MySQL_**|**_ADO_**|**_DB2_**|**_OCI_] _Prefix_ |  A prefix file entry points to an external database table.  
[_ODB_**|**_MySQL_**|**_ADO_**|**_DB2_**|**_OCI_] _Link_ |  A link file points to an external database table.  
  
_(The File Type column was added in PxPlus 2023 Update 1.)_  
  
_Validate_ __|  Check box to validate the existing data in the PxPlus native data file. Will be locked if no native file exists.  
_DB Action_ _(DB = Database)_ |  Action options that can be set, depending on whether the table is in the database. Click the drop down arrow for available selections. To edit this option for all the tables in the list, use the **[Edit All](Bulk%20Database%20Export.htm#edit_all)** drop down (in top row). If the table is in the database, available options are _No Action_ , _Merge Table_ or _Replace Table_. If the table is not in the database, available options are _No Action_ or _Create Table_. |  _No Action_ |  **_(Default)_** No action to apply.  
---|---  
_Merge Table_ |  **_(Available when table is in the database)_** Updates an existing table in the database so that data stored in that database table is preserved and only what comes from the data dictionary is updated. Keys/Indices will not be merged or changed. A merge will attempt to update/add all columns in the data dictionary record to the table in the database. If a column cannot be added, the merge will be considered incomplete, not a failure, as the columns that can be added will still be added and the table in the database may be changed. A merge is considered a success if it connected and completed all changes requested. A merge is considered a failure if it could not connect or request any changes.  
_Replace Table_ |  **_(Available when table is in the database)_** Deletes an existing table in the database and creates a new table. A message will display to warn that any data currently in the table will be overwritten, which could lead to possible data loss, and to ask if you want to proceed unless the **[Disable Data Loss Warning](Bulk%20Database%20Export.htm#warning)** check box is set.  
_Create Table_ |  **_(Available when table is not in the database)_** Creates a new table in the database.  
_Load Table_ __|  Check box to populate the database table with the data in the native PxPlus data file. This is locked if no native file exists. A message will display to warn that any matching records in the table will be overwritten, which could lead to possible data loss, and to ask if you want to proceed unless the **[Disable Data Loss Warning](Bulk%20Database%20Export.htm#warning)** check box is set. If a failure happens while the load is in progress, the table in the database may have some but not all of the records from the PxPlus native file.  
_File Action_ __|  Action options that are related to creating/editing files - a prefix (PFX) file entry or a link file. Click the drop down arrow for available selections. To edit this option for all the tables in the list, use the **[Edit All](Bulk%20Database%20Export.htm#edit_all)** drop down (in top row). |  _No Action_ |  **_(Default)_** No action to apply.  
---|---  
_Add to PFX File_ |  Creates a new entry in the prefix file to the table in the database. If no prefix file is defined, the user will be prompted to select or enter a name for a prefix file to be updated/created.  
_Create Link File_ |  Creates a link file that points to the table in the database.  
  
If a prefix file entry, link file or a native file already exists and this action is specified, it will remove the existing file/entry. If an existing native file is found, a message will display to warn about possible data loss and ask if you want to proceed unless the **[Disable Data Loss Warning](Bulk%20Database%20Export.htm#warning)** check box is set.  
  
_Strip User/Password from Link Files and Prefix Entries_ |  Controls whether the User and Password connection options are stripped from link files and prefix file entries. By default, this check box is selected. For security reasons, it is **_strongly_** recommended not to save the User and Password information in plain text.  
_Disable Data Loss Warning_ |  If selected, disables a warning message from displaying for each **[DB Action](Bulk%20Database%20Export.htm#db_action)** or **[File Action](Bulk%20Database%20Export.htm#file_action)** that will possibly cause data loss. By default, this check box is not selected to help prevent accidental data loss. If you are applying several _DB Actions_ or _File Actions_ and are knowingly overwriting data and/or replacing native data files, you can set this option to avoid displaying a warning message for each table.  
_View Log_ |  **_(Available when changes have been applied)_** Displays a log of applied changes as a PDF, which also provides options for printing or saving the log, if desired.  
_Apply_ |  **_(Available when Validate, DB Action, Load Table or File Action is set to other than No Action)_** Applies changes to all the tables that had a _Validate, DB Action, Load Table_ or _File Action_ set to something other than _No Action_. A message displays that lists which changes were applied successfully, which changes were incomplete (partially successful), and which changes failed.  
_Exit_ |  Closes the **Bulk Database Import Utility**. If changes have been made in the grid but not applied, a message will display. If records exist in the log file, a message will ask if you want to view the log.  
  
## Calling Export Actions Programmatically

For information on invoking the individual Export actions (i.e. Validate, CreateTable, LoadTable, etc.) programmatically, see **[Calling Export Actions Programmatically](Database%20Export.htm#Mark6)**.

_(The Call routines for invoking individual Export actions were added in PxPlus 2023.)_

## See Also

**[Database Export Utility](Database%20Export.md)**  
**[Database Import Utility](Database%20Import.md)**  
**[Creating a Link File](../../PxPlus%20User%20Guide/Data%20Integration/External%20Databases/Creating%20Link%20File.md)**  
**[Creating the Prefix File](../../PxPlus%20User%20Guide/Data%20Integration/External%20Databases/Creating%20the%20Prefix%20File.md)**
