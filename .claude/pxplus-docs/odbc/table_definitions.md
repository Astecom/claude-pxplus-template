# PxPlus SQL ODBC  
  
**Table Definitions**|   
---|---  
  
To access PxPlus data files in ODBC, the contents of the files (or _tables_) must be described for use with the PxPlus SQL ODBC Driver. Tables can be defined in two ways:

|  **PxPlus Data Dictionary** |  This is the preferred method, as files are easily defined using NOMADS **[Data Dictionary Maintenance](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** and are fully compatible with the PxPlus SQL ODBC Driver.  
---|---|---  
|  **Formatted Text File (INI file)** |  Files are created manually. This method is required when files contains multiple record types.  
  
#### **Note:**  
Data Dictionary Maintenance allows the entry of multiple record definitions _(as of PxPlus version 5)_. However, the PxPlus SQL ODBC Driver does not use this information. The PxPlus SQL ODBC Driver will read only the first record format.

Data Dictionary and INI file locations are defined for the PxPlus SQL ODBC Driver using the **ODBC Data Sources** application in Windows and the _ODBC.ini_ file in UNIX/Linux _._ See [**Configuration Procedures**](configuration_procedures.md).

This Help section describes both methods for defining data sources for use with the PxPlus SQL ODBC Driver: [**PxPlus Data Dictionary**](table_definitions/pxplus_data_dictionary.md) and [**INI Definition**](table_definitions/ini_definition.md).

**_Terminology_**

When working with ODBC, the standard term for a set of data is a _table_. In PxPlus, a table is often a _physical file_. In this documentation, the terms _table_ and _file_ are both used. When the documentation refers to the data as stored on disk, the term _physical file_ is used.

#### **Note:**  
Due to the ability to store multiple record formats in a single physical file, there may be multiple logical tables for a single physical file.
