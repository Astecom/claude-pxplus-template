# Data Dictionary Utilities   
  
**Key Definitions** |  **__**  
---|---  
  
The **Generate External Database Key Definitions** utility generates SQL key definitions for data dictionary tables. The key definitions are stored in a PxPlus file _providex.kdf_. The file is keyed by the logical table name (64 characters) and is created in the same directory as the _providex.ddf_ and _providex.dde_ files.

Invoke this utility by selecting _Utilities > Generate external > Key Definitions_ from the **Data Dictionary Maintenance** menu bar.

> This utility consists of the following:

_Dictionary Source_ |  Path to the dictionary source file.  
---|---  
_(List Box)_ |  When a _Dictionary Source_ is specified, a tree view list displays with the _Dictionary Source_ pathname as the top level and a list of group names to which the data dictionary tables were assigned (in **[Data Dictionary Maintenance](../Data%20Dictionary%20Maintenance/Overview.md)**) below that. Double-click the check box beside a group name to access a list of tables in that group. Tables not assigned to a group are listed under _-none-_. Select which data dictionary table(s) to generate key definitions for by clicking the check box beside the desired table name. To select **_all tables_** for the Dictionary Source, click the check box beside the _Dictionary Source_ pathname in the tree view list.  
_Generate_ |  Button used to generate key definitions. When the generation is done, a message displays, indicating that the _providex.kdf_ file was updated.  
_Close_ |  Exits the **Generate External Database Key Definitions** utility.
