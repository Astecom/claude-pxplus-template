# 

**PxPlus SQL ODBC**|   
---|---  
  
The PxPlus SQL ODBC Driver delivers third-party access to PxPlus data. It enables any ODBC-compliant application on Windows or UNIX/Linux platforms to communicate with your PxPlus database from any location on the network.

#### **Note:**  
**_As of 2019_** , the PxPlus SQL ODBC Driver is no longer sold as a stand-alone product.

Two PxPlus SQL ODBC Driver modes are available:

**Mode** |  **Description**  
---|---  
_Local_ |  Accesses local PxPlus data directly.  
_Client/Server_ |  Accesses remote PxPlus data over a network.  
  
The PxPlus SQL ODBC Help documentation explains the basic concepts and features of the PxPlus SQL ODBC Driver. It covers the installation and configuration procedures for the PxPlus SQL ODBC Driver and the PxPlus SQL Server, as well as the defining/accessing of data files, and the use of the PxPlus SQL ODBC Driver to access PxPlus data from other languages and applications.

For answers to some commonly asked questions about the PxPlus SQL ODBC Driver and other PxPlus ODBC products, see **[Frequently Asked Questions](odbc_faq.md)**.

#### **Note:**  
If you are trying to access third party data from PxPlus, see **[[ODB] Open Database](../command_tags/odb.htm)**.

**_ODBC Client/Server_**

For greater performance and security over the network (without the need for additional software), consider the Client/Server mode of the PxPlus SQL ODBC Driver. This interface performs optimization of query processing on the server side to ensure safe high-speed access to your data, particularly for implementing distributed multi-user applications.

The PxPlus SQL ODBC Driver, when used as a client, is freely distributable. However, to be operational, it must be connected to a fully installed and activated PxPlus SQL Server.

#### **Note:**  
SSL secure network communication is supported as of version 8.00.0000, which requires PxPlus 2024 activation.

## What is ODBC?

ODBC is the acronym for **O** pen **D** ata **B** ase **C** onnectivity, an interface standard that maintains a common access method for DBMS (**D** ata **B** ase **M** anagement **S** ystems).

The ODBC interface provides a standard set of functions or APIs (**A** pplication **P** rogram **I** nterfaces) that allow applications to access a variety of ODBC-compliant databases. It also administers the database names and drivers associated with the data files.

ODBC access is based on SQL (**S** tructured **Q** uery **L** anguage), which is an English-like database access language designed to enable end-users to view and manipulate data files. Over the years, the SQL language has been standardized by ANSI and adopted by a large number of database manufacturers. SQL's original intent was to provide ad-hoc access to data - but not as a development language or as a database interface tool. With the advent of ODBC and other generic interfaces, SQL became the de-facto standard used to manipulate databases. Because the SQL language is English-like in its structure, it is easy to learn and understand.

The basic SQL directives are:

**Directive** |  **Description**  
---|---  
**[SELECT](../directives/select.md)** |  To read and return data.  
**[UPDATE](../directives/update.md)** |  To alter existing data records.  
**[INSERT](../directives/insert.md)** |  To add records.  
**[DELETE](../directives/delete.md)** |  To remove data records.  
  
**_Example:_**

This retrieves customer numbers and names from the Customer file:

> **SELECT** cst_id, cst_name FROM Customer

See [**Using the PxPlus SQL ODBC Driver**](using_odbc_driver.md).

**_ODBC Architecture_**

The standard ODBC architecture typically consists of four major components:

**Component** |  **Description**  
---|---  
_Application_ |  Responsible for interacting with the user and for calling ODBC functions to submit SQL statements to, and retrieve results from, one or more data sources. Some examples of ODBC applications on Windows are Excel and MS SQL Server. Some examples on UNIX/Linux are OpenOffice Calc and isql.  
_Driver_ |  Processes the ODBC function calls, submits SQL requests to a specific data source, and returns results to applications. In addition, the Driver is responsible for interacting with the software needed to access a specific data source.  
_Driver Manager_ |  Loads/calls drivers on behalf of an application. The Driver Manager processes ODBC function calls or passes them to the Driver. The Driver Manager on Windows is **odbcad32**. On UNIX/Linux, it is **odbcinst**.  
_Data Source_ |  Represents the data to be accessed. It can be a flat file or a particular database in a DBMS. It also refers to the actual location of the data, as well as any technical information needed to access the data (Driver Name, Network Address, User ID, Password, etc.).  
  
This architecture enables an application to access different ODBC data sources, in different locations, using the same function calls available in the ODBC API.

Components interact in the following chain of events:

1. |  ODBC-compliant application uses API calls to submit SQL directives to the data source.  
---|---  
2. |  Communication between the application and ODBC Driver is handled by the Driver Manager, which loads the Driver and passes along the API requests.  
3. |  The ODBC Driver implements ODBC API functions for the selected DBMS data source.  
4. |  Requests are processed by the data source, and the results are sent back up the chain to be retrieved by the application.  
  
**_Why Use PxPlus SQL ODBC Driver?_**

The PxPlus SQL ODBC Driver allows your PxPlus data to be accessed by the most popular database managers, query applications, and report writers: MS SQL Server, Excel or Word with MSQUERY, Informix and Crystal Reports, just to name a few.

Most programming languages have an ODBC access facility to allow files to be read or updated as well. The PxPlus SQL ODBC Driver allows standardized access to PxPlus data via:

> Standardized Data Formats: Text strings, numerics, dates

> Logical Relationships: Relates files with common data elements

> Data Sorting, Grouping and Filtering

> Simple Data Computations: Sum, Max, Min, Count, Avg

The PxPlus SQL ODBC Driver supports three basic types of data: strings, numerics and dates.

The **SELECT** statement is used to establish logical relationships between data files (usually referred to as joining files). A typical JOIN would be:

> SELECT _cst_id_ , _cst_name_ , _smn_name_ FROM Customer, Salesman   
>  WHERE _smn_id_ = _cst_smn_

> The statement reads the entire Customer file and, for each customer, reads the Salesman file for any records whose _smn_id_ matches _cst_smn_. If the field _smn_id_ is a Key field for the file, then the PxPlus SQL ODBC Driver reads the file directly by key; otherwise, the file is read in its entirety. The **WHERE** clause can be used to selectively filter out any unwanted data.

The PxPlus SQL ODBC Driver can sort the data on any field using the **ORDER BY** clause of the **SELECT** statement. If the **ORDER BY** fields match any of the key fields of the primary file, then the primary file is accessed by this key. In addition, you can GROUP data BY common fields. 

The **SUM** , **COUNT** , **AVG** , **MAX** and **MIN** functions can be used to provide statistical information on the data fields.

## See Also

**[Frequently Asked Questions](odbc_faq.md)**  
**[PxPlus ODBC Activation Chart](odbc_activation_chart.md)**

****
