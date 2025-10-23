#   
  
**Data Dictionary** |  **__**  
---|---  
  
A **_data dictionary_** is a collection of data definitions used by applications to describe and access a database. These definitions do not contain actual data; rather, they comprise standardized "bookkeeping" information about the data (metadata). This includes details on the types, names and structures of all data elements, as well as their interrelationships within the larger context of the database. The primary purpose of a data dictionary is to define the contents of a database so that it can be easily viewed, queried and accessed by an application.

The data dictionary plays a very important role in PxPlus programming and data handling. Once your data has been defined in a PxPlus data dictionary, you will be able to use the powerful tools available in NOMADS to automate the building of Web-based and graphical user interface applications based on this information.

One of these tools is the **[File Maintenance Generator](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)**, which generates Web-based **[Webster+ HTML](../Webster/Webster.md)** pages and/or Windows-based **[NOMADS](../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.md)** panels as file **_maintenance_** or **_inquiry-only_** panels and/or data entry panels. Another tool is the NOMADS **[Query Subsystem](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Overview.md)**, which generates panels that display records from datasets and returns a value associated with a record selected by the user. These tools can help to easily create an integrated file maintenance and query system without writing a single line of code.

The data dictionary can be created from an external database (ODB, MySql, OCI, ADO or DB2). See **[Using External Databases to Create a Data Dictionary](Introduction.htm#external_db)**.

## PxPlus Data Dictionary

The primary method for building a data dictionary in PxPlus is [**Data Dictionary Maintenance**](Data%20Dictionary%20Maintenance/Overview.md). It is used to create new files or embed the dictionary information in an existing file. Equivalent programmatic access is also available through a suite of predefined **[Data Dictionary Objects](Data%20Dictionary%20Objects/Overview.md)**.

A central repository of data dictionary definitions is maintained in two PxPlus files, _providex.ddf_ and _providex.dde_ :

|  **_providex.ddf_** |  Defines all the **_files_** (or **_tables_**) that belong to the database.  
---|---|---  
|  **_providex.dde_** |  Defines specific **_elements_** (or **_columns_**) that exist within these files.  
  
One important feature of the PxPlus data dictionary is that the definitions stored in the repository are also written directly into the corresponding database files. At the most basic level, a data dictionary is used for accessing the data in a database; however, the data dictionary has multiple uses in PxPlus from rapid application development to the conversion of data:

**_Embedded IOLists_** |  Because the definitions can be saved to the physical files, a separate IOList does not have to be written in programs that use the data. PxPlus accesses the embedded definitions independent of the central data dictionary.  
---|---  
**_NOMADS_** |  The File Maintenance Generator, Query Subsystem and NOMADS Smart controls use the data dictionary and data class objects. See **[NOMADS Development](../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.md)**. _(The File Maintenance Generator was added in PxPlus 2019.)_  
**_File Maintenance Generator_** |  NOMADS panels and/or Webster+ HTML pages are generated as file maintenance or inquiry-only panels based on data files defined in a data dictionary. See **[File Maintenance Generator](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** and **[Webster+](../Webster/Webster.md)**.  
**_Query Subsystem_** |  The element and key information from the data dictionary can be used to create query definitions. See **[Query Subsystem](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Overview.md)**.  
**_Smart Controls_** |  Smart controls provide developers with the ability to make self-loading controls to display and select the contents of data files or database tables. See **[Smart Controls](../NOMADS%20Graphical%20Application/Smart%20Controls/Overview.md)**.  
**_Views_** |  The Views System can employ the data dictionary's embedded definitions to generate end-user Views of the data. See **[Views System](../Views%20System/Introduction.md)**.  
**_Report Writer_** |  The Report Writer can access files with embedded dictionaries, as well as PxPlus Views, to design and generate graphical reports. See **[Report Writer](../Report%20Writer/Introduction.md)**.  
**_PxPlus SQL ODBC Driver_** |  The data dictionary is fully compatible with the PxPlus SQL ODBC Driver. The Driver simply reads the embedded IOList to determine the fields and format of the database file. Otherwise, when the data dictionary is not present, a manually written INI file would have to be created for each file in order to access the data. See **[PxPlus SQL ODBC Driver](../odbc/pxplus_odbc.md)**.  
  
##  Supported File Types

The PxPlus data dictionary is designed to support _normalized_ files - files in which all records have the same record layout. The **Update File** process in **[Data Dictionary Maintenance](Data%20Dictionary%20Maintenance/Overview.md)** uses the PxPlus **[KEYED](../directives/keyed.md)** directive to create all physical files. A key is a string of characters used to identify the records in a file.

Three keyed file formats are available for data dictionary utilities: **FLR** (Fixed Length Records), **VLR** (Variable Length Records), and **EFF** (Enhanced File Format). See **[EFF vs. VLR File Formats](../PxPlus%20User%20Guide/File%20Handling/Data%20Files/EFF%20vs%20VLR%20File%20Formats.md)**.

Data dictionary support for multiple-format files, such as those with header and detail records, is limited to variant records. The ability to define non-normalized data files is provided only within the data dictionary, not within PxPlus itself or within the NOMADS File Maintenance or Query generation facilities. Variant records are supported primarily for the creation of INI files and SQL database definitions when migrating applications. See the **[INI File Generation](Data%20Dictionary%20Utilities/INI%20File%20Generation.md)** and **[SQL Create Table](Data%20Dictionary%20Utilities/SQL%20Create%20Table.md)** utilities.

## Creating a Data Dictionary Definition

Each of your data files can be defined by using **[Data Dictionary Maintenance](Data%20Dictionary%20Maintenance/Overview.md)**. Once all the pertinent information is entered, the individual data dictionary information is embedded into the file, as well as written to the definition files, _providex.ddf_ and _providex.dde_.

In addition, the data dictionary can be created from an external database (ODB, MySql, OCI, ADO or DB2). See **[Using External Databases to Create a Data Dictionary](Introduction.htm#external_db)**.

To set up a data dictionary definition for a file, the four steps are:

**Step** |  **Description**  
---|---  
1\. Identify the database file |  Enter information to describe the physical file, including pathname, group, file type and block size. See **[Info](Data%20Dictionary%20Maintenance/Overview.htm#info)** tab.  
2\. Define the elements |  Enter information for defining the elements in the physical file (e.g. variable name, type, length, format, delimiter, etc.). See **[Elements](Data%20Dictionary%20Maintenance/Overview.htm#elements)** tab.  
3\. Define the keys |  Define the primary and alternate keys for the physical file. See **[Defining Keys](Data%20Dictionary%20Maintenance/Defining%20Keys.md)**.  
4\. Embed the updated definition into the physical file |  Embed the current definition into the physical file. Depending on the contents of the current definition, PxPlus will determine how to update the physical file with the current definition. See **[Updating the Data Dictionary](Data%20Dictionary%20Maintenance/Updating%20the%20Data%20Dictionary.md)**.

#### **Note:**  
Be aware that all changes made to the definition (table) currently loaded in Data Dictionary Maintenance are written immediately to the _providex.ddf_ and _providex.dde_ files as they are entered.  
  
##  Using External Databases to Create a Data Dictionary

The data dictionary can also be created from an external database **[(ODB](../command_tags/odb.md)**, **[MySql](../command_tags/mysql.md)**, **[OCI](../command_tags/oci.md)**, **[ADO](../command_tags/ADO.md)** or **[DB2)](../command_tags/db2.md)**. The **[Database Import Utility](Data%20Dictionary%20Maintenance/Database%20Import.md)** can be used to define the data dictionary and create database **[Prefix](../PxPlus%20User%20Guide/Data%20Integration/External%20Databases/Creating%20the%20Prefix%20File.md)** or **[Link](../PxPlus%20User%20Guide/Data%20Integration/External%20Databases/Creating%20Link%20File.md)** files or PxPlus native files.

By using Prefix or Link files, PxPlus development application tools are available to interact and connect with the external database. These tools include the **[Query Subsystem](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Overview.md)**, the **[Report Writer](../Report%20Writer/Introduction.md)**, the **[Views System](../Views%20System/Introduction.md)**, and the **[File Maintenance Generator](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** for quickly creating Web-based **[(Webster+)](../Webster/Webster.md)** and Windows-based **[(NOMADS)](../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.md)** file maintenance and data entry screens, report interfaces, etc.

Other PxPlus tools, such as the **[Bulk Edit Data Elements](Data%20Dictionary%20Maintenance/Bulk%20Edit%20Elements.md)** utility and **[File Link Maintenance](File%20Link%20Maintenance.md)**, can be used to build and quickly refine the data dictionary and create interrelationships between files.

Database export utilities, such as the PxPlus **[Bulk Database Export Utility](Data%20Dictionary%20Maintenance/Bulk%20Database%20Export.md)**, can be used to add and load tables in an existing database (ODB, MySql, OCI, ADO or DB2) by using PxPlus native files.

## See Also

**[Using the Data Dictionary](Using%20the%20Data%20Dictionary/Overview.md)**   
**[Data Dictionary Maintenance](Data%20Dictionary%20Maintenance/Overview.md)**  
**[Data Dictionary Utilities](Data%20Dictionary%20Utilities/Overview.md)**  
**[Data Classes](Data%20Classes/Overview.md)  
[Bulk Edit Data Elements](Data%20Dictionary%20Maintenance/Bulk%20Edit%20Elements.md)**
