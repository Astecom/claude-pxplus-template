# Data Dictionary Objects   
  
**Db_Manager Object** |  **__**  
---|---  
  
This object provides a database-independent interface for retrieving and updating table information. Each method includes an argument to identify the source (or destination) database. The value of this argument can be specified using the following code:

**_Example:_**

> dbConstants =new("*dict/db_constants")  
> _tag$_ ="ado"   
> aDatabaseID=dbConstants'getDatabaseID _(tag$)_

The database _tag$_ may be one of the following:

|  _ado_ |  Microsoft SQL-Server interface (ADO)  
---|---|---  
|  _db2_ |  IBM DB2 interface (DB2)  
|  _oci_ |  Oracle interface (OCI)  
|  _odb_ |  ODBC interface  
|  _mysql_ |  MYSQL interface (MYSQL)  
|  _pvxddf_ |  PxPlus DDF/DDE Files  
|  _pvxdb_ |  PxPlus embedded Data Dictionary information from a physical file  
  
## Primary Methods

**Db_Manager** contains three primary methods:

**Tblinfo** **Methods** |  **Description**  
---|---  
**ReadDefn( )** |  Reads the table definition from the _providex.ddf_ and _providex.dde_ files, an external database, or a physical file with an embedded dictionary definition (determined by _sourcedb_ parameter) and stores it in a temporary location.  
**CreateTable( )** |  Retrieves the table definition from the temporary location and either creates a physical file with an embedded dictionary definition, a table in an external database, or the _providex.ddf_ /_providex.dde_ definitions (determined by _destinationdb_ parameter).  
**DropTable( )** |  Drops a table from the _providex.ddf_ /_providex.dde_ files, an external database or a physical file with an embedded dictionary definition (determined by _destinationdb_ parameter).  
  
Different parameter values are used for these methods depending on the source or destination database. See the sample programs below.

##  Database Interface Examples

The following sample programs illustrate the functionality of the **Db_Manager Object** :

**_Example 1_**

**Retrieving the table definition from a Microsoft SQL-Server database (ADO):**

> db=new("*dict/db_manager")   
> dbConstants=new("*dict/db_constants")   
>  Table$="Customer"   
> ConnectOpt$="user=sa;pswd=admin;db=test"   
>  DSN$="ws2003-x86-pdb.pvx.com"   
>  TableOk=db'ReadDefn(dbConstants'getDatabaseID("ado"),Table$,ConnectOpt$,DSN$)

**Removing/creating a new table definition in providex.ddf/providex.dde files:**

> Ddfpath$="c:\demo\data"   
> FilePath$="cstfile"   
> UpdateTable=0   
> GroupName$="Customers"   
> Db'Droptable(dbConstants'getDatabaseID("pvxddf"),Table$,ddfpath$) ! remove table definition if it exists   
>  Db'CreateTable(dbConstants'getDatabaseID("pvxddf"),ddfpath$,FilePath$,UpdateTable,GroupName$)

**Updating the table in the providex.ddf/providex.dde files:**

> Ddfpath$="c:\demo\data"   
> FilePath$=""   
> UpdateTable=1   
> GroupName$="" db'CreateTable(dbConstants'getDatabaseID("pvxddf"),ddfpath$,FilePath$,UpdateTable,GroupName$)

**_Example 2_**

**Retrieving the table definition from the providex.ddf/providex.dde files:**

> Db=new("*dict/db_manager")   
> dbConstants=new("*dict/db_constants") Table$="Customer"   
> Ddfpath$="c:\demo\data"   
>  TableOk=db'ReadDefn(dbConstants'getDatabaseID("pvxddf"),Table$,Ddfpath$)

**Updating the physical file:**

> FilePath$="cstfile" UpdateTable=1   
> db'CreateTable(dbConstants'getDatabaseID("pvxddf"),FilePath$,UpdateTable)

**Updating the table in the Microsoft SQL-Server database (ADO):**

> ConnectOpt$="user=sa;pswd=admin;db=test"   
>  DSN$="ws2003-x86-pdb.pvx.com"   
> UpdateTable=1   
>  db'CreateTable(dbConstants'getDatabaseID("ado"),Table$,ConnectOpt$,DSN$,UpdateTable)
