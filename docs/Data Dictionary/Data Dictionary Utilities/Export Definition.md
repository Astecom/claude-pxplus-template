# Data Dictionary Utilities  
  
**Export Data Dictionary Definition**|   
---|---  
  
The **Export Data Dictionary Definition** utility is used to export the data dictionary definitions of one or more selected tables to a text file. The text file can be copied to another location (such as a customer site), if needed. The table definitions in the text file can then be imported into a different data dictionary by using the **[Import Data Dictionary Definition](Import%20Definition.md)** utility.

_(The Export Data Dictionary Definition utility was added in PxPlus 2021.)_

Invoke the **Export Data Dictionary Definition** utility by clicking the _Export_ button (in the "Dictionary" section) on the **Data Dictionary Maintenance** tool bar.

> This utility consists of the following:

**Available Tables** |  List box that is loaded with all of the tables currently defined in the Data Dictionary. If a table is currently entered on the **Data Dictionary Maintenance** main panel, it will be considered as one of the selected tables.  
---|---  
**Selected Tables** |  List box that contains the tables selected for export. If a table is currently entered on the **Data Dictionary Maintenance** main panel, it will be loaded into the **Selected Tables** list box.  
_Select All_ |  Button used to move **_all_** tables in the **Available Tables** list box to the **Selected Tables** list box.  
_Include_ |  Button used to move a selected table in the **Available Tables** list box to the **Selected Tables** list box.  
_Remove_ |  Button used to remove a selected table from the **Selected Tables** list box and return it to the **Available Tables** list box.  
**Location of Export Text File** |  |  _Directory_ |  Enter the directory that will store the export text file or click the Query button to specify a directory. Default is the current working directory.  
---|---  
_File_ |  Enter the name of the export text file (with a **_.txt_** extension). Default is _exportDict.txt_.  
  
For information on the export text file, see **[Export Text File Format](Export%20Definition.htm#Mark1)**.  
  
_Export_ |  **_(Available when Selected Tables list box contains a table)_** Button used to export the data dictionary definitions of the tables in the **Selected Tables** list box to the text file that will be created in the specified location. If the export text file already exists, a message asks if it should be replaced. A message displays when the export is successfully completed.  
_Close_ |  Exits the **Export Data Dictionary Definition** utility without creating an export text file.  
  
##  Export Text File Format

To successfully import the data dictionary table definitions, the export text file must adhere to a specific format.

The first line of the export text file contains a file heading.

The body of the export text file consists of one or more groups of lines beginning with **ddf** and **dde** , which are the table and data element definitions for each table that is exported. The number of groups depends on the number of tables that are exported, and a blank line precedes each table.

For each table that is exported, the table definition details by variable name are listed first in the group (lines beginning with **ddf**). Following that, the data element definitions are listed for each element index by variable name (lines beginning with **dde**).

**_Example:_**

Below is an export text file (_exportDict.txt_) that shows a file heading (_*PxPlus Data Dictionary Export File*_) and the exported details for two tables (_StatusCodes_ and _Departments_) with a blank line preceding each table definition.

> #### **Important Note:**  
If necessary, changes may be made to the export text file prior to importing the file, providing that extra care is taken to adhere to the same format.

## See Also

**[Data Dictionary Maintenance](../Data%20Dictionary%20Maintenance/Overview.md)**  
**[Import Data Dictionary Definition](Import%20Definition.md)**
