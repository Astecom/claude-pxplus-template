# Table Definitions

**Generating INI Table Definitions**|   
---|---  
  
INI table definitions may be generated in NOMADS **[Data Dictionary Maintenance](../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** by doing the following steps:

**Step** |  **Description**  
---|---  
**1.** |  From the **Utilities** menu, select _Generate external_ and then select _INI file contents_.  
**2.** |  Select a _Table Name_ by clicking the Query button (_magnifying glass_) beside the input field. This displays a tree view list of table names by Group. For information on creating a filter to locate a specific table name, see **[Filtering the Table Names Lookup](../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Filtering%20the%20Table%20Names%20Lookup.md)**.  
**3.** |  Click the _Generate_ button. The table entry is generated and displayed, and the contents may be cut and pasted from the display or exported to a text file.  
  
INI table definitions may also be generated using the following program CALL:

> **CALL** "*Dict/Defini",_contents_ _$_ ,_errmsg_ _$_**,**_tablename_ _$_**,**_ddfpath_ _$_

**_Where:_**

|  _contents$_ |  Returns a string containing the table definition.  
---|---|---  
|  _errmsg_ _$_ |  Returns an error message if problems are encountered during generation, or null if successful.  
|  _tablename_ _$_ |  Logical name of the table for which the definition is generated.  
|  _ddfpath_ _$_ |  Path of the _providex.ddf_ file containing the table definition.  
  
In the case of tables with multiple record formats, a table entry is created for each format using the **MUSTBE** clause to identify the field used as the record type indicator.
