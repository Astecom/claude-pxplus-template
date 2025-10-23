# Data Integration

**External Databases** |  **__**  
---|---  
  
There are a few ways for PxPlus to interface with non-PxPlus data files. This information is intended for those who need to maintain their data in an external database.

The facilities described in this Help section are designed to emulate a collection of PxPlus files in an external database. The primary advantage of this approach is that the same PxPlus program will work, regardless of the database being used. However, you should be aware that interfacing your application to an external database can result in lower performance. It is strongly recommended that you consult with an expert in the external database product to help optimize the conversion process.

#### **Note:**  
Developers should have a good working knowledge of SQL if they plan to use these facilities. See **[Introduction to SQL](../Introduction%20to%20SQL/Overview.md)** and **[SQL Syntax Table](../../../odbc/using_odbc_driver/sql_syntax_table.md)**.

The ODBC interface is supported in PxPlus for Windows (plus some UNIX/Linux releases), and it allows access to any database system that publishes an ODBC Driver. Use the **[[ODB]](../../../command_tags/odb.htm)** tag as a prefix in an OPEN statement to denote that PxPlus is to route all file I/O requests to an external ODBC database. UNIX/Linux servers also support ODBC through the use of WindX with an open ODBC connection on the WindX workstation.

The remaining conversion facilities are _call-level interfaces_ to specific products: Oracle, IBM DB2, and MySQL. These types of databases are supported on Microsoft Windows and various UNIX/Linux platforms. Access to these databases is denoted using the **[[OCI]](../../../command_tags/oci.htm)**, **[[DB2]](../../../command_tags/db2.htm)** or **[[MySql]](../../../command_tags/mysql.htm)** tag as a prefix in an OPEN statement. These may require a separately purchased activation key apart from your initial PxPlus activation. Contact your local PxPlus reseller or visit the PxPlus website at **[www.pvxplus.com](http://www.pvxplus.com/)** for product information and licensing.

Implementation involves the selection of a target database, or perhaps databases, and the writing of the routines that will allow the re-creation of the PxPlus database on the target database.

In addition, the data dictionary can be created from an external database (ODB, MySql, Oracle, ADO or DB2). See **[Using External Databases to Create a Data Dictionary](../../../Data%20Dictionary/Introduction.htm#external_db)**.

## See Also

**[Selecting a Database Type](Selecting%20a%20Database%20Type.md)**  
**[Creating the Database](Creating%20the%20Database.md)**  
**[Creating Tables](Creating%20Tables.md)**  
**[Creating the Prefix File](Creating%20the%20Prefix%20File.md)**  
**[Conversion Process](Conversion%20Process.md)**  
**[Creating a Link File](Creating%20Link%20File.md)  
[Other Considerations](Other%20Considerations.md)**
