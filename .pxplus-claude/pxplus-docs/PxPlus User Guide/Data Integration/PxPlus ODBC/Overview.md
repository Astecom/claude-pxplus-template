# Data Integration

**PxPlus SQL ODBC Driver** |  **__**  
---|---  
  
The PxPlus SQL ODBC Driver enables any ODBC-compliant application on Windows or UNIX/Linux platforms to communicate with your PxPlus database from any location on the network.

#### **Note:**  
**_As of 2019_** , the PxPlus SQL ODBC Driver is no longer sold as a stand-alone product.

Two PxPlus SQL ODBC Driver modes are available:

**Mode** |  **Description**  
---|---  
_Local_ |  Accesses local PxPlus data directly  
_Client/Server_ |  Accesses remote PxPlus data over a network  
  
For more information, see **[PxPlus SQL ODBC Driver](../../../odbc/pxplus_odbc.md)**.

#### **Note:**  
If you are trying to access third party data from PxPlus, see **[[ODB] Open Database](../../../command_tags/odb.htm)**.

**_About ODBC_**

ODBC is the acronym for **_O_** _pen**D** ata **B** ase **C** onnectivity,_ an interface standard that maintains a common access method for DBMS (**_D_** _ata**B** ase **M** anagement **S** ystems_). The ODBC interface provides a standard set of functions or APIs (**_A_** _pplication**P** rogram **I** nterfaces_) that allow applications to access a variety of ODBC-compliant databases. It also administers the database names and drivers associated with the data files. ODBC access is based on **SQL**.

## ODBC Architecture

Typically, the standard ODBC architecture consists of four major components:

**Component** |  **Description**  
---|---  
_Application_ |  Responsible for interacting with the user and for calling ODBC functions to submit SQL statements to, and retrieve results from, one or more data sources.  
_Driver_ |  Processes the ODBC function calls, submits SQL requests to a specific data source, and returns results to applications. In addition, the driver is responsible for interacting with the software needed to access a specific data source.  
_Driver Manager_ |  Loads/calls drivers on behalf of an application. The driver manager processes ODBC function calls or passes them to the driver.  
_Data Source_ |  Represents the data to be accessed. It can be a flat-file or a particular database in a DBMS. It also refers to the actual location of the data, as well as any technical information needed to access the data (driver name, network address, user ID, password, etc.).  
  
This architecture enables an application to access different ODBC data sources in different locations, using the same function calls available in the ODBC API.

Components interact in the following chain of events:

  * ODBC-compliant application uses API calls to submit SQL directives to the data source.
  * Communication between the application and ODBC driver is handled by the driver manager, which loads the driver and passes along the API requests.
  * The ODBC driver implements ODBC API functions for the selected DBMS data source.
  * Requests are processed by the data source, and the results are sent back up the chain to be retrieved by the application.



## Implementation

The **[PxPlus SQL ODBC Driver](../../../odbc/pxplus_odbc.md)** itself is easy to implement. It installs automatically from the setup program. Open the Microsoft ODBC Administrator's _Control Panel_ applet, and create a new PxPlus Data Source Name (DSN). Once a DSN is established, other applications will be able to use SQL requests to access the PxPlus native database. The driver also supports a "DSN-less" connection to PxPlus data using a connection string supplied by the calling application.

The PxPlus SQL ODBC Driver allows your PxPlus data to be accessed by the most popular database managers, query applications, and report writers: MS SQL Server, Excel or MS Word with MSQUERY, Crystal Reports, just to name a few.

Most programming languages have an ODBC access facility to allow files to be read or updated as well. The PxPlus SQL ODBC Driver allows standardized access to PxPlus data via:

  * Standardized Data Formats: Text strings, numerics, dates
  * Logical Relationships: Relates files with common data elements
  * Data Sorting, Grouping and Filtering
  * Simple Data Computations: _Sum, Max, Min, Count, Avg_



The PxPlus SQL ODBC Driver supports three basic types of data: strings, numerics and dates.

The SELECT statement is used to establish logical relationships between data files (usually referred to as _joining_ files). A typical JOIN would be:

> SELECT _cst_id,cst_name_ ,_smn_name_ FROM Customer, Salesman   
>  WHERE _smn_id_ =_cst_smn_

The statement reads the entire Customer file and, for each customer, reads the Salesman file for any records whose _smn_id_ matches _cst_smn_. If the field _smn_id_ is a Key field for the file, then the PxPlus SQL ODBC Driver reads the file directly by key; otherwise, the file is read in its entirety. The WHERE clause can be used to selectively filter out any unwanted data.

The PxPlus SQL ODBC Driver can sort the data on any field using the ORDER BY clause of the SELECT statement. If the ORDER BY fields match any of the key fields of the primary file, then the primary file is accessed by this key. In addition, you can GROUP data BY common fields.

**SUM** , **COUNT** , **AVG** , **MAX** and **MIN** functions can be used to provide statistical information on the data fields.

## ODBC Client/Server

For greater performance and security over the network (without the need for additional software), consider the Client/Server version of the **[PxPlus SQL ODBC Driver](../../../odbc/pxplus_odbc.md)**. This interface performs optimization of query processing on the server side to ensure safe high-speed access to your data, particularly for implementing distributed multi-user applications.
