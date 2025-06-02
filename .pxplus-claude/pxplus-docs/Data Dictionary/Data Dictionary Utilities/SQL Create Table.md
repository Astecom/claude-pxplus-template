# Data Dictionary Utilities   
  
**SQL Create Table** |  **__**  
---|---  
  
The **Generate SQL Create Table Commands** utility simplifies the process of converting the data dictionary to a SQL-based database such as ORACLE or Microsoft SQL. The utility outputs **[CREATE TABLE](../../directives/create_table.md)** directives for defining database tables that are consistent with the PxPlus data dictionary. By default, this output includes all the fields within a table definition, including fields in non-normalized tables.

In the case of non-normalized files, duplicate element names are output once, and the first occurrence of the element name defines the element's format. Table Index definitions will also be created using either the Key name as supplied in the Data Dictionary definition or a generated name based on the Table Name followed by an underscore and key number. The _Generate_ button outputs the **CREATE** statements to the utility window for viewing.

Invoke the **Generate SQL Create Table Commands** utility by selecting _Utilities_ > _Generate external_ > _SQL Create Table_ from the **Data Dictionary Maintenance** menu bar.

> This utility consists of the following:

_Table Name_ |  Click the Query Table View button _(magnifying glass)_ for a tree view of table names by Group. For information on creating a filter to locate a specific table name, see **[Filtering the Table Names Lookup](../Data%20Dictionary%20Maintenance/Filtering%20the%20Table%20Names%20Lookup.md)**.  
---|---  
_Use Double Quotes_ |  Check box to enclose the table and element names in double quotes.  
_Copy to Clipboard_ |  **_(Available after CREATE statements are generated)_** Button used to copy the generated CREATE statements to the Clipboard.  
_Generate_ |  Button used to generate the CREATE statements. The output is displayed in the utility window for viewing purposes and can be output to a file or the Clipboard, if desired.  
_Export_ |  **_(Available after CREATE statements are generated)_** Button used to export the generated CREATE statements to a file.  
_Close_ |  Exits the **Generate SQL Create Table Commands** utility.  
  
## Automated Call

The SQL Create Table utility can also be called from a PxPlus program.

> **CALL** "***DICT/GENSQL** "_,contents_ _$,errmsg$,tablename$,ddf_path$,quo_char$_

**_Where:_**

_contents$_ |  SQL **CREATE** commands are returned in this variable.  
---|---  
_errmsg_ _$_ |  Warning and error messages are returned in this variable.  
_tablename_ _$_ |  Logical table name.  
_ddf_path_ _$_ |  Pathname of the _providex.ddf_ file (defaults to simple pathname).  
_quo_char_ _$_ |  Character to enclose tables, columns, indexes names (defaults to null).
