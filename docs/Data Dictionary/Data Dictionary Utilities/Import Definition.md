# Data Dictionary Utilities

**Import Data Dictionary Definition**|   
---|---  
  
The **Import Data Dictionary Definition** utility is used to import the data dictionary definitions of one or more tables selected from an export text file into a data dictionary in another location.

This utility will only accept a formatted text file that has been created previously using the **[Export Data Dictionary Definition](Export%20Definition.md)** utility.

_(The Import Data Dictionary Definition utility was added in PxPlus 2021.)_

Invoke the **Import Data Dictionary Definition** utility by clicking the _Import_ button (in the "Dictionary" section) on the **Data Dictionary Maintenance** tool bar.

> This utility consists of the following:

**Location of Import Text File** |  Enter the name of a valid text file to import or click the Query button. Default is _exportDict.txt_. If the default text file _exportDict.txt_ exists in the current working directory, it will display as the default import file.  
---|---  
**Available Tables** |  List box that is loaded with all the table definitions that exist in the selected text file to be imported.  
_Select All_ |  Button used to move **_all_** tables in the **Available Tables** list box to the **Selected Tables** list box.  
_Include_ |  Button used to move a selected table in the **Available Tables** list box to the **Selected Tables** list box.  
_Remove_ |  Button used to remove a selected table from the **Selected Tables** list box and return it to the **Available Tables** list box.  
**Selected Tables** |  List box that contains the tables that have been selected for importing their definitions.  
_Overwrite Existing Table Names_ |  **_(Available when Selected Tables list box contains a table)_** Select this check box to overwrite existing table definitions of the same name in the current working directory. If duplicate table names are found, they will be automatically overwritten without first displaying a message to verify. If unchecked **_(default)_** , existing table definitions of the same name will not be overwritten. During the Import process, a message will display each time that a duplicate table name is encountered to either allow the imported table to be renamed or skip importing the table.  
_Update Physical File(s) After Import_ |  **_(Available when Selected Tables list box contains a table)_** Select this check box to update the data dictionary in the physical files after the data dictionary definitions are imported. If unchecked **_(default)_** , the physical file(s) will not be updated.

#### **Note:**  
If an error is encountered while attempting to update the physical file for a particular table, a message will display with three responses:  
  
_Abort_ will stop the physical file updates for all remaining tables to be imported.  
_Retry_ will retry the physical file update for the same table.  
_Ignore_ will skip the physical file update for the individual table but continue the physical update for all remaining tables to be imported.  
  
_Import_ |  **_(Available when Selected Tables list box contains a table)_** Button used to import the data dictionary definitions of the selected tables into the current data dictionary.  
_Close_ |  Exits the **Import Data Dictionary Definition** utility without importing any table definitions.  
  
## See Also

**[Data Dictionary Maintenance](../Data%20Dictionary%20Maintenance/Overview.md)**  
**[Export Data Dictionary Definition](Export%20Definition.md)**
