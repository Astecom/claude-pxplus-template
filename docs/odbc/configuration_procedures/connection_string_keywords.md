# Configuration Procedures  
  
**Connection String Keywords**|   
---|---  
  
The PxPlus SQL ODBC Driver recognizes keywords as part of a connection string. The format is _keyword_ =_value_ (case insensitive) with multiple entries separated by **;**  _(semi-colon)_.

**_Example:_**

> DSN=MyDSN;UID=John;PWD=foo;Company=ABC

This table lists the keywords:

**Keyword** |  **Description**  
---|---  
**DSN** |  Name of the DSN to use for default values.  
**FileDSN** |  Name of the file DSN to use for default values.  
**Driver** |  Name of the Driver to use (DSN-less connection).  
**Description** |  **_(Optional)_** Description of the DSN.  
**InstallDir** |  **_(UNIX/Linux Only)_** Directory in which the ODBC Driver was installed. _(InstallDir support was added in PxPlus 2020.)_  
**Directory** |  Directory containing the _providex.ddf_ file if defining _local_ DSN. See **[Configure Data Source Name (DSN)](odbc_driver_configuration_unix_linux.htm#config_dsn)**.

#### **Note:**  
The **Directory** setting must **_not_** include the data dictionary file name. (The _providex.dde_ file is not required by the PxPlus SQL ODBC Driver.)  
  
**_Example:_**  
  
If the _providex.ddf_ file is located at _/pxp/data/providex.ddf_ , then use _/pxp/data_.  
  
**IniFile** |  Directory **_and_** file name of the INI file to be used if defining _local_ DSN. See **[Configure Data Source Name (DSN)](odbc_driver_configuration_unix_linux.htm#config_dsn)**.

#### **Note:**  
The **IniFile** setting **_must_** include the INI file name.  
  
**_Example:_**  
  
If the INI file is located at _/pxp/data/mydata.ini_ , then use _/pxp/data/mydata.ini_.  
  
**Prefix** |  Data search prefix.  
**RemotePVKIOHost** |  Server name or IP address of the server.  
**RemotePVKIOPort** |  Port that the server is monitoring.  
**SSL** |  0 - Unencrypted TCP/IP communication  
1 - SSL encrypted TCP/IP communication _(SSL support was added in version 8.00.0000/PxPlus 2024.)_  
**Catalog** |  Name of catalog. A catalog defines a remote data dictionary and/or INI file and optionally a prefix if defining _remote_ DSN. See [**Configure Data Source Name (DSN)**](odbc_driver_configuration_unix_linux.htm#config_dsn). A maximum number of 256 catalogs may be defined. _(Catalog support was added in PxPlus 2018.)_  
**Compression** |  Using ZLib compression to minimize network traffic between the client and the server  
**Company** |  Company Code  
**UID** |  User ID  
**PWD** |  Password  
**SID** |  Session ID  
**ViewDLL** |  Location of the Views DLL/SO  
**BurstMode** |  0 - Burst mode Off  
1 - Burst mode On  
**DirtyReads** |  0 - Dirty read Off  
1 - Dirty read On  
**Debug** |  0 - Debug output Off  
1 - Debug output On  
**Silent** |  0 - Silent Off  
1 - Silent On  
**KeyRestrict** |  0 - Report key columns  
1 - Disable reporting of key columns  
**EnforceDouble** |  0 - Do not force numerics to double  
1 - Report all numerics as double  
**EnforceNullDate** |  0 - Null date Off  
1 - Null date On  
**StripTrailingSpaces** |  0 - Do not strip trailing spaces from key values when joining multiple tables  
1 - Strip trailing spaces from key values when joining multiple tables _(StripTrailingSpaces support was added in PxPlus 2017.)_  
**ReadOnly** |  0 - Connection may allow Write access  
1 - Connection will deny Write access  
**LegacyNULL** |  0 - Columns are defined as not nullable  
1 - Columns are defined as nullable and empty strings are returned as null _(LegacyNULL support was added in PxPlus 2017.)_  
**LogFile** |  Path and name of the file to which to write debug output
