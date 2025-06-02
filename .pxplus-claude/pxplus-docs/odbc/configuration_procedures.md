# PxPlus SQL ODBC

**Configuration Procedures**|   
---|---  
  
## PxPlus SQL ODBC Driver

The configuration settings for the PxPlus SQL ODBC Driver allow you to specify the following:

  * Location of the PxPlus data
  * Server, port, and SSL secure communication setting of the PxPlus SQL Server
  * SSL secure communication setting of the PxPlus SQL Server
  * Logon information
  * Performance and compatibility options
  * Debugging options
  * PxPlus SQL ODBC Driver activation



On Windows, the PxPlus SQL ODBC Driver and data sources are configured using the **ODBC Data Source Administrator**  _(odbcad32)_.

On UNIX/Linux, the PxPlus SQL ODBC Driver is configured using the _odbc.ini_ file, and the data sources are configured using the _odbcinst.ini_ file.

For information on configuring the PxPlus SQL ODBC Driver and data sources, see:

> **[PxPlus SQL ODBC Driver Configuration (Windows)](configuration_procedures/odbc_driver_configuration_windows.md)**  
> **[PxPlus SQL ODBC Driver Configuration (UNIX/Linux)](configuration_procedures/odbc_driver_configuration_unix_linux.md)**

## PxPlus SQL Server

The configuration settings for the PxPlus SQL Server allow you to specify the following:

  * TCP/IP port number and optionally an SSL certificate to turn on secure communication
  * Set up and manage the data files access permissions
  * Establish the server activation



When the PxPlus SQL Server is installed on a Windows system, the server component is configured using the **PxPlus SQL Server Settings** dialog.

Under UNIX/Linux, the server is configured using Command Line arguments and a configuration text file.

#### **Note:**  
SSL secure network communication is supported as of version 8.00.0000/PxPlus 2024.

For information on the PxPlus SQL Server Configuration for Windows and UNIX/Linux, see:

> **[PxPlus SQL Server Configuration (Windows)](configuration_procedures/server_settings_windows.md)**  
> **[PxPlus SQL Server Configuration (UNIX/Linux)](configuration_procedures/server_settings_unix_linux.md)**
