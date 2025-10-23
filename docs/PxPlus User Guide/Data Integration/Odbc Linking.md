# Data Integration

**ODBC Linking Linux OS to MS SQL Databases**|   
---|---  
  
The information below provides detailed steps on how to set up an ODBC connection to extract information from an MS SQL database while running on a Linux (Red Hat/CentOS/Oracle Linux) platform.

## Installation

The first step is to install the required drivers. The install instructions and drivers **Microsoft SQL Server ODBC Driver 1.0 for Linux** can be found on the Microsoft download website at the following link: **<https://www.microsoft.com/en-us/download/details.aspx?id=28160>**.

#### **Note:**  
The SQL Server ODBC Driver requires that unixODBC 2.3.0 or higher be installed. If unixODBC is not installed or an older version is installed, visit the Microsoft download website at the above link and then follow the directions provided in the **Install Instructions** section. You can also visit the unixODBC website at **[www.unixodbc.org](https://www.unixodbc.org/)** for downloads and installation instructions.

When the install is complete, the _odbcinst.ini_ file should resemble the following:

> **/etc/odbcinst.ini**  
>   
>  [SQL Server Native Client 11.0]  
>  Description=Microsoft SQL Server ODBC Driver V1.0 for Linux  
>  Driver=/opt/microsoft/sqlncli/lib64/libsqlncli-11.0.so.1790.0  
>  Threading=1  
> UsageCount=1

The newly installed driver will require a connection link to the ODBC through the _odbc.ini_ file. The Driver assignment should correspond to the entry in the _odbcinst.ini_ file above. The Server assignment must contain the network information required to find the MS SQL database.

> **/etc/odbc.ini**  
>   
>  [MSSQLTest]  
>  Driver = SQL Server Native Client 11.0  
>  Server = [protocol:]server[,port] _i.e. Server = tcp:192.168.0.1,1433 (default port)_

At this point, it is a good idea to ensure that the connection is operational. To test the connection, try the following command:

> isql -v MSSQLTest Username Password

If the connection to the server is correct, the following should display:

> Connected!  
>   
> sql-statement  
>  help [tablename]  
>  quit  
>  SQL>

Test the connection to the database with the following:

> use database_name  
>  select * from table_name;  
>  | KEY | DESCRIPTION |  
>  | PXP | PVX Plus Technologies |  
> SQLRowCount returns 0  
>  1 row fetched  
>  SQL>

To exit the test, enter _quit_ :

> SQL> quit

## Programming PxPlus

To program the connection to the MS SQL Database, some easy steps will need to be followed.

Set a variable to contain the record layout along with the KEY assignment:

> rec$="REC=CUSTNO:5,NAME:35,TOTAL:10.2,ADDRESS:35;KEY=CUSTNO"

The next statement will be the OPEN statement that will supply the connection information and return the data:

> OPEN(chn,iol=*,opt=rec$)"[ODB]MSSQLTest;mycust;db=master;user=UserId;pswd=Password;cursor_type=dynamic"

Without the _cursor_type_ _=dynamic_ parameter, the program will only read data from the table and would require a CLOSE and OPEN to allow writes.

**_Example:_**

> rec$="REC=CUSTNO:5,NAME:35,TOTAL:10.2,ADDRESS:35;KEY=CUSTNO"  
>  OPEN(chn,iol=*,opt=rec$)"[ODB]MSSQLTest;mycust;db=master;user=UserId;pswd=Password;cursor_type=dynamic"  
> rd_lp:  
>  read (chn,end=eof)  
>  if custno$="0059" then total=total*-1; write (1)  
> goto rd_lp  
>  !  
> eof:  
>  close(chn)  
>  exit

## See Also

**[[ODB] Open Database](../../command_tags/odb.htm)**  
**[PREFIX FILE Directive](../../directives/prefix.md)**
