# Data Dictionary Utilities   
  
**INI File Generation** |  **__**  
---|---  
  
The **Create INI file definition** utility allows for the generation of INI file contents directly from the data dictionary. Usually, there would be no need for an INI file if you have a file that contains an embedded data dictionary; however, in some instances, an INI file format is useful.

When generating the contents for an INI file from a table with multiple record formats, the system will generate a logical table name consisting of the table name, an underscore and the record name. All spaces within table names will be converted to underscores. The _Generate_ button outputs the contents of the INI file to the utility window for viewing.

Invoke the **Create INI file definition** utility by selecting _Utilities > Generate external > INI file contents_ from the **Data Dictionary Maintenance** menu bar.

> This utility consists of the following:

_Table Name_ |  Click the Query Table View button _(magnifying glass)_ for a tree view of table names by Group. For information on creating a filter to locate a specific table name, see **[Filtering the Table Names Lookup](../Data%20Dictionary%20Maintenance/Filtering%20the%20Table%20Names%20Lookup.md)**.  
---|---  
_Copy to Clipboard_ |  **_(Available after INI file definition is generated)_** Button used to copy the generated INI file definition to the Clipboard.  
_Generate_ |  Button used to generate the INI file definition. The contents are displayed in the utility window for viewing purposes and can be output to a file or the Clipboard, if desired.  
_Export_ |  **_(Available after INI file definition is generated)_** Button used to export the generated INI file definition to a file.  
_Close_ |  Exits the **Create INI file definition** utility.  
  
## Automated Call

The INI File Generation utility can also be called from a PxPlus program.

> **CALL** "***dict/defini** ",_contents_ _$,errmsg$,tablename$,ddf_path$_

**_Where:_**

_contents$_ |  INI file contents are returned in this variable.  
---|---  
_errmsg_ _$_ |  Warning and error messages are returned in this variable.  
_tablename_ _$_ |  Logical table name.  
_ddf_path_ _$_ |  Pathname of the _providex.ddf_ file (defaults to simple pathname).
