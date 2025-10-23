# Configuration Procedures  
  
**PxPlus SQL ODBC Driver Configuration (UNIX/Linux)**|   
---|---  
  
The PxPlus SQL ODBC Driver is configured and activated using the _license_ file and the _ODBC.ini_ and _ODBCinst.ini_ files. The _license_ file is installed with the PxPlus SQL ODBC Driver and can be found in the install directory **/usr/pxpsqlodbc/**. The _ODBC.ini_ and _ODBCinst.ini_ files are installed as part of **unixODBC** and can be found in the **/etc/** directory.

#### **Note:   
**The UNIX/Linux version of the PxPlus SQL ODBC Driver requires that**unixODBC** be installed to work. For information on**unixODBC** , visit **[www.unixodbc.org](http://www.unixodbc.org/)**.  
  
The 32-bit version of the PxPlus SQL ODBC Driver requires the 32-bit version of **unixODBC** , and the 64-bit version of the PxPlus SQL ODBC Driver requires the 64-bit version of **unixODBC**.  
  
_(UNIX/Linux support using unixODBC was added in PxPlus 2016.)_

For a description of PxPlus UNIX/Linux SQL ODBC Driver components and file locations, see [**ODBC Product Installation and Activation (UNIX/Linux)**](../installation_procedures/odbc_product_installation_activation_unix.md).

## Configuration File

To configure the PxPlus SQL ODBC Driver, use a text editor (e.g. vi) to modify or create a new copy of the license file. The top of the _license.sample_ file contains documentation on the entries that are required and the syntax of those entries. This file is used to configure the activation information and file Write settings.

The PxPlus SQL ODBC Driver will run in demonstration mode if it cannot find the license file or it does not contain a valid activation. A demo-activated PxPlus SQL ODBC Driver will notify the user that he/she is connected to a demo-activated product each time it is used and is limited to returning a maximum of 10 records.

The server checks for two entries in the license file:

_Activation Information_ |  Activation information for running this software. Enter your activation information as follows: serial=_xxxxx_ _\- y- zzzzzzzzzzzzzzzz_ **_Where:_** |  |  _xxxxx_ |  Serial Number  
---|---|---  
|  _y_ |  User Count  
|  _zzzzzzzzzzzzzzzz_ |  Activation Key  
  
If purchasing a Professional or Web version of PxPlus that includes PxPlus ODBC support, you must use the Serial Number, User Count, and **Temporary** activation key of your PxPlus Professional or Web license.

If purchasing PxPlus ODBC separately, use the information provided with your purchase.

To run the PxPlus SQL ODBC Driver in demonstration mode, set the _serial=_ entry to a blank value. This will allow use of the PxPlus SQL ODBC Driver with demo messages appearing periodically on the screen.  
  
_Write Permissions_ |  The PxPlus SQL ODBC Driver can be Read Only or it can have Write access. To make it Read Only, remove _AllowWriteCmds_. If you want to allow Write access, add _AllowWriteCmds_ _._  
  
## Configure PxPlus SQL ODBC Driver

An entry for the PxPlus SQL ODBC Driver must be added to the _ODBCinst.ini_ file. This lets the UNIX/Linux operating system know about the PxPlus SQL ODBC Driver.

The entry should look like the following:

> [PxPlus]_  
> _ Description = PxPlus SQL ODBC Driver  
> Driver = /usr/lib/libpxpsqlodbc.so  
> FileUsage = 1

The Driver name and description can be whatever you want.

The _Driver =_ field must point to where you copied the **libpxpio.so** and **libpxpsqlodbc.so** libraries when you installed the Driver (usually _/usr/lib_ or _/usr/lib64_).

##  Configure Data Source Name (DSN)

To use the PxPlus SQL ODBC Driver, a DSN (**D** ata **S** ource **N** ame) **_must_** be created. The DSN defines what PxPlus data to access and how to access it.

Create a DSN by adding an entry to the _ODBC.ini_ file. The entry should be made up of **[Connection String Keywords](connection_string_keywords.md)** and corresponding settings.

The _Driver_ setting is **_mandatory_** and should specify the name of the driver as defined in the _ODBCinst.ini_ file.

The DSN name and description can be whatever you want.

The _InstallDir_ keyword must be defined so that the installation directory can be found.

_(InstallDir support was added in PxPlus 2020.)_

**_Defining Local DSN_**

If using the PxPlus SQL ODBC Driver on _local_ data, you must define either a Data Dictionary file (_providex.ddf_) and/or an INI file.

If using a Data Dictionary, the _Directory_ setting is **_required_**. It contains the path to the directory where the Data Dictionary file (_providex.ddf_) can be found. This path must **_not_** include the name of the data dictionary file. For example, if the _providex.ddf_ file is located at _/pxp/data/providex.ddf_ , then use _/pxp/data_.

If using an INI file, the _IniFile_ setting is **_required_**. It contains both the path **_and_** the name of the INI file. For example, if the INI file is located at _/pxp/data/mydata.ini_ , then use _/pxp/data/mydata.ini_.

**_Example:_**

> [PxPlusLocalDSN]  
>  Driver=PxPlus  
>  Description=PxPlus ODBC Local DSN  
> InstallDir=/usr/pxpsqlodbc  
>  Directory=/pxp/data  
> ViewDLL=/pxp  
>  Debug=1  
> LogFile=/root/odbc.log  
>  SERVER=NotTheServer

**_Defining Remote DSN_**

If using the PxPlus SQL ODBC Driver on _remote_ data, you **_must_** define a **RemotePVKIOHost** and at least one **Catalog** ; otherwise, the server will not start. A maximum number of 256 catalogs may be defined.

**_Example:_**

> [PxPlusRemoteDSN]  
>  Driver=PxPlus  
>  Description=PxPlus ODBC Remote DSN  
>  Catalog=data  
> RemotePVKIOHost=192.168.1.164  
>  SSL=1  
> ViewDLL=/pxp  
>  Debug=1  
> LogFile=/tmp/odbc.log  
>  SERVER=NotTheServer
