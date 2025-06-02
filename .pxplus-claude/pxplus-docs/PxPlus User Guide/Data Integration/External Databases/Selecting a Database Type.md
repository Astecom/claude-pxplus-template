# External Databases 

**Selecting a Database Type** |  **__**  
---|---  
  
PxPlus supports different interfaces. The one that most people are familiar with is Open Database Connectivity (ODBC). This interface is a set of calls that provide standardized access to a variety of data. The data can be stored in a flat file, a proprietary format, such as PxPlus or a Microsoft SQL Server. PxPlus can read and write that data as long as an ODBC Driver exists for the data store.

The main problem with this approach is the overhead imposed by the ODBC Manager. The call-level interfaces were created for PxPlus to overcome these limitations. Direct access to Oracle, DB2 and MySQL is available for selected platforms without the overhead of the ODBC administrator. Another advantage to using one of the direct interfaces is that functionality that is specific to the target database can be added to the PxPlus interface.

The decision of which database product to use can be difficult. It depends on the target market and the customer's in-house knowledge and skill set. If the target market is Windows, then it might make more sense to go with MS SQL Server. If the target market must support clients on UNIX/Linux, then a Microsoft-only approach may not be feasible.

Each database will need to be evaluated for usability, and each has its own learning curve - some steeper than others.

##  Interface Options

Use one of the following **Special File Command Tags** as a prefix in an**OPEN** statement to denote that PxPlus is to route all file I/O requests to the selected external database.

|  [**[ODB]**](../../../command_tags/odb.htm) |  Built-in PxPlus functionality. ** _You do not need the PxPlus SQL ODBC Driver to use this tag._** PxPlus supports ODBC under Windows, as well as two open source versions of ODBC for UNIX/Linux (iODBC and unixODBC). Use **TCB(197)** to determine if ODBC support is enabled for a given UNIX/Linux system.  
---|---|---  
|  [**[DB2]**](../../../command_tags/db2.htm) |  Requires activation of PxPlus DB2 support. Use **TCB(198)** to check if DB2 is supported on a platform.  
|  [**[MYSQL]**](../../../command_tags/mysql.htm) |  Requires activation of PxPlus MySQL support.  
|  [**[OCI]**](../../../command_tags/oci.htm) |  Requires activation of PxPlus Oracle Call Interface (OCI) support. Use **TCB(200)** to check if OCI is supported on a platform.  
  
See **[OPEN](../../../directives/open.md)** directive in the _PxPlus Language Reference_.

## OLE DB

Object linking and embedding for databases (OLE DB) is a set of Component Object Model (COM)-based interfaces that provide applications with uniform access to data stored in diverse information sources or data stores. OLE DB accesses disparate data in a standard, object-oriented way when using a Microsoft Operating System. PxPlus does not have an OLE DB consumer; however, developers may write their own interface via **[PxPlus COM Support](../../External%20Components/PxPlus%20COM%20Support/Overview.md)**.

## Connections

When working with an external database, PxPlus does not interact directly with the data in the file. The data is accessed through an interface. That interface may result in local calls to a DLL that reads the data from disk, or it might involve opening a TCP/IP connection to a server on the other side of the planet. This is the first place where a failure may result in an error not handled by existing code. If the**OPEN** fails, an Error #15 will typically occur, with the text provided by the data provider available via**MSG(-1)**.

Each connection to the database may require an access license. When using a Professional or a Web bundle, PxPlus will access multiple tables using a single connection. This results in only a single license being used.
