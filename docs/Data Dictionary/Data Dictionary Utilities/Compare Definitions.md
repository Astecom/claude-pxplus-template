# Data Dictionary Utilities 

**Compare Definitions** |  **__**  
---|---  
  
The **Data Dictionary Compare** utility is used to compare two tables from the same or different data dictionaries or physical files (or a combination of both). It compares file attributes, fields and key structures in one table with the fields in another. All common field names (and record formats for non-normalized files) will have their characteristics compared. The utility reports all changes, as well as any new or deleted fields.

Invoke this utility by selecting _Utilities > Compare Definitions_ from the **Data Dictionary Maintenance** menu bar.

> This utility consists of the following:

_Source 1_ |  Pathname of the _providex.ddf_ or physical file with embedded dictionary that you want to compare **_from_**.  
---|---  
_Table Name 1_ |  Table you want to compare **_from_**. Leave blank to indicate _all_. Click the Query Table View button _(magnifying glass)_ for a tree view of table names by Group. For information on creating a filter to locate a specific table name, see **[Filtering the Table Names Lookup](../Data%20Dictionary%20Maintenance/Filtering%20the%20Table%20Names%20Lookup.md)**.  
_Source 2_ |  Pathname of the _providex.ddf_ or physical file with embedded dictionary that you want to compare **_against_**. Enter * to use the physical files associated with the tables from _Source 1_.  
_Table Name 2_ |  Table you want to compare **_against_**. Leave blank to indicate _all._ Click the Query Table View button _(magnifying glass)_ for a tree view of table names by Group. For information on creating a filter to locate a specific table name, see **[Filtering the Table Names Lookup](../Data%20Dictionary%20Maintenance/Filtering%20the%20Table%20Names%20Lookup.md)**.  
_Suppress details on new/deleted files_ |  Check box to suppress table information that is found in _Source 1_ and not in _Source 2_ , or vice versa.  
_Print_ |  Prints the **Data Dictionary Compare** report.  
_Analyze_ |  Button used to begin the analysis.  
_Close_ |  Exits the **Data Dictionary Compare** utility.  
  
## Automated Call

The Data Dictionary Compare utility can also be called from a PxPlus program.

> **CALL** "***dict/compdict;ANALYZE** ",_source1$,table1$,source2$,table2$,result$,suppress$_

**_Where:_**

_source1$_ |  Full path of the _providex.ddf_ or physical file with embedded dictionary that you want to compare **_from_**.  
---|---  
_table1$_ |  Table you want to compare **_from_**. Leave blank to indicate _all_.  
_source2$_ |  Pathname of the _providex.ddf_ or physical file with embedded dictionary that you want to compare **_against_**. Enter * to use the physical files associated with the tables from _source1$_.  
_table2$_ |  Table you want to compare **_against_**. Leave blank to indicate _all._  
_result$_ |  A SEP-delimited string containing "**_what is being compared_** " + SEP + "_source1$ result_ " + SEP + "_source2$ result_ ".  
_suppress$_ |  The flag "1" will suppress details on new/deleted files.
