# Data Dictionary

**Data Dictionary Objects** |  **__**  
---|---  
  
PxPlus includes a set of predefined data dictionary _objects_ for working with the data dictionary. These objects, which are designed for use under PxPlus Object Oriented Programming (OOP), are described in this section.

## Maintenance Objects

The **Database** and **PVXDb** objects allow you to create and modify the PxPlus data dictionary at both the logical (_providex.ddf_ and _providex.dde_) and physical file level. These provide the same functionality programmatically that is available via the **[Data Dictionary Maintenance](../Data%20Dictionary%20Maintenance/Overview.md)** interface:

|  **Database** |  Accesses _providex.ddf_ and _providex.dde_ files, returning table, column and index information for the specified table name (_table_).  
---|---|---  
|  **PVXDb** |  Accesses internal definitions that are embedded in a file using a file handle _(fh)_ to reference each PVX data file.  
  
For a list of the methods belonging to these objects, see **[Database and PVXDb Objects](DataBase%20and%20PVXDb%20Objects.md)**. These, in turn, delegate functionality to a level of **[Subordinate Maintenance Objects](DataBase%20and%20PVXDb%20Objects.htm#subordinate)**.

For sample programs, see **[Maintenance Examples](Maintenance%20Examples.md)**.

## Database Interface Object

The following object provides a database-independent interface for retrieving and updating table information:

|  **Db_Manager** |  Accesses table information for retrieval and update between an external database and the _providex.ddf_ and _providex.dde_ files.  
---|---|---  
  
For information about this object, see **[Db_Manager Object](Db_Manager%20Object.md)**.

For sample programs, see **[Database Interface Examples](Db_Manager%20Object.htm#examples)**.
