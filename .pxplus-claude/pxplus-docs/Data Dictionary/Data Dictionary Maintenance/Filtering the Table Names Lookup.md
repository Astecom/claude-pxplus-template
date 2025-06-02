# Data Dictionary Maintenance  
  
**Filtering the Table Names Lookup**|   
---|---  
  
The **Lookup Table Names** dialog displays a tree view list of all table names in the data dictionary according to _Group_. This dialog is launched when clicking the Query Table View button _(magnifying glass)_ to search for a table name, as in **[Data Dictionary Maintenance](Overview.md)** for example.

This list can be filtered by _Table Name_ , _Table Description_ , _Column Name_ or _File Type_ to make it easier to locate a specific table name.

_(Support to filter by Table Name, Table Description or Column Name was added in PxPlus 2018.)  
(Support to filter by File Type was added in PxPlus 2023 Update 1.)_

> ---  
  
The **Lookup Table Names** dialog consists of the following:

_(Tree View)_ |  Initially displays a list of all tables, including descriptions, in the data dictionary according to **[Group](Overview.htm#options)**. Any tables not assigned to a particular Group are listed under _-none-_ in the tree view. A file type icon precedes each listed table name. To see a list that describes what these icons represent, hover the mouse pointer over the **?** button beside the tree view. _(The table descriptions were added in PxPlus 2023.)  
(The file type icons were added in PxPlus 2023 Update 1.)_  
---|---  
_File Type Icons_ |  Button (beside the tree view) that displays a floating tip with a list of file type icons and their descriptions. _(The ? button was added in PxPlus 2023 Update 1.)_  
**Filter By** |  Used to define the filter criteria to be applied to the list of table names. Filter selections are _Table Name**(Default)**_ , _Table Description_ , _Column Name_ (name of data element), and _File Type_. When filtering by _Table Name_ , _Table Description_ or _Column Name_ , available operands are _Contains**(Default)**_ , _Equals_ , _Starts with_ or _Ends with_. Enter a filter value in the adjacent input control. When filtering by **[File Type](Overview.htm#file_type)**, available types are _Native_ (PxPlus) file, _Prefix_ (database **[Prefix](../../PxPlus%20User%20Guide/Data%20Integration/External%20Databases/Creating%20the%20Prefix%20File.md)** file), _Link_ (database **[Link](../../PxPlus%20User%20Guide/Data%20Integration/External%20Databases/Creating%20Link%20File.md)** file) or _Unknown_ (no file defined). Selecting either _Prefix_ or _Link_ displays a drop box for selecting a database type: _All Databases**(Default)**_ , **[ODB](../../command_tags/odb.md)**, **[MySQL](../../command_tags/mysql.md)**, **[ADO](../../command_tags/ADO.md)**, **[DB2](../../command_tags/db2.md)** or **[OCI](../../command_tags/oci.md)**. _(Support to filter by File Type was added in PxPlus 2023 Update 1.)_  
_Apply_ |  Button that applies the defined filter criteria to the list of table names.  
_Reset_ |  **_(Available only when a Filter is applied)_** Clears the filter value entered and reloads the list of table names.  
_Collapse All  
(Expand All)_ |  Toggle button that collapses (or expands) all the groups listed in the tree view to display the table names assigned to each group.  
_OK_ |  Selects the highlighted table name.  
_Cancel_ |  Closes the **Lookup Table Names** dialog.
