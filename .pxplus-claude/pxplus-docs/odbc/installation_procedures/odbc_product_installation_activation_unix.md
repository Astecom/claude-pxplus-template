# Installation and Activation Procedures

**ODBC Product Installation and Activation (UNIX/Linux)**|   
---|---  
  
The installation archives for the PxPlus SQL ODBC Driver or PxPlus SQL Server can be obtained from your PxPlus reseller or from the PxPlus website [**www.pvxplus.com**](http://www.pvxplus.com/). The installation process is very similar for all PxPlus UNIX/Linux ODBC products.

## PxPlus SQL ODBC Driver Installation Archive

Obtain the PxPlus ODBC distribution file from your PxPlus reseller or via the PxPlus website [**www.pvxplus.com**](http://www.pvxplus.com/). Ensure that you download the correct version for your specific UNIX/Linux operating system.

The PxPlus SQL ODBC Driver distribution file is named with a **._taz_** extension, which is short for .tar.Z, a compressed version of a UNIX _.tar_ file:

> sql_odbc_driver__v.vv.vvvv_ddd_www_aaa_.taz

**_Where:_**

|  _v.vv.vvvv_ |  Identifies the version of the PxPlus SQL ODBC Driver (e.g. 5.00.0000)  
---|---|---  
|  _ddd_ |  Identifies a specific operating system (e.g. ol.61 for Oracle Linux/CentOS versions 6.1 and up)  
|  _www_ |  Identifies the word size (e.g. 32-bit)  
|  _aaa_ |  Identifies the architecture (e.g. x86)  
  
#### **Note:**  
The UNIX/Linux version of the PxPlus SQL ODBC Driver requires that **unixODBC** be installed to work. For information on **unixODBC** , visit [**www.unixodbc.org**](http://www.unixodbc.org/).

The sql_odbc_driver__v.vv.vvvv_ddd_www_aaa_.taz distribution file contains the following installation components:

|  **_pxpsql_** |  PxPlus SQL Command Line Client executable  
---|---|---  
|  **_libpxpio.so_** |  PxPlus SQL ODBC Library used by _libpxpsqlodbc.so_  
|  **_libpxpsqlodbc.so_** |  PxPlus SQL ODBC Driver  
|  **_license.sample_** |  PxPlus SQL ODBC Driver sample license configuration file  
|  **_install.txt_** |  Installation readme file  
|  **_license.txt_** |  License agreement  
|  **_licenses_3rdparty.txt_** |  Third-party license agreements (version 8.00.0000/PxPlus 2023)  
|  **_readme.txt_** |  Readme file for this version containing change information  
  
## PxPlus SQL Server Installation Archive

Obtain the PxPlus SQL Server distribution file from your PxPlus reseller or via the PxPlus website [**www.pvxplus.com**](http://www.pvxplus.com/). Ensure that you download the correct version for your specific UNIX/Linux operating system.

The PxPlus SQL Server distribution file is named with a **._taz_** extension, which is short for **_.tar.Z_** , a compressed version of a UNIX _.tar_ file:

> sql_server_ _v.vv.vvvv_ddd_www_aaa_.taz

**_Where:_**

|  _v.vv.vvvv_ |  Identifies the version of the PxPlus SQL Server (e.g. 5.00.0000)  
---|---|---  
|  _ddd_ |  Identifies a specific operating system (e.g. ol.61 for Oracle Linux/CentOS versions 6.1 and up)  
|  _www_ |  Identifies the word size (e.g. 32-bit)  
|  _aaa_ |  Identifies the architecture (e.g. x86)  
  
The sql_server__v.vv.vvvv_ddd_www_aaa_.taz distribution file contains the following installation components:

|  **_pxpsqlsvr_** |  PxPlus SQL Server executable  
---|---|---  
|  **_libpxpio.so_** |  PxPlus SQL ODBC Library used by _pxpsqlsvr_  
|  **_pxpsqlsvr.conf.sample_** |  Sample PxPlus SQL Server configuration file  
|  **_install.txt_** |  Installation Readme file  
|  **_license.txt_** |  License agreement  
|  **_licenses_3rdparty.txt_** |  Third-party license agreements (version 8.00.0000/PxPlus 2023)  
|  **_readme.txt_** |  Readme file for this version containing change information  
  
## Installation Procedure

After you download the installation archive, move it to the _/tmp_ directory. Follow these steps to expand, install and activate the PxPlus ODBC program on your computer:

**Step** |  **Description**  
---|---  
**1.** |  Change to the _/tmp_ directory and rename the product_name__v.vv.vvvv_ddd_www_aaa_.taz with a **_.tar.Z_** extension so that it can be uncompressed: umask 0   
cd /tmp   
mv product_name__v.vv.vvvv_ddd_www_aaa_.taz product_name__v.vv.vvvv_ddd_www_aaa.tar.Z_  
uncompress product_name__v.vv.vvvv_ddd_www_aaa.tar.Z_  
**2.** |  Create the new directory to receive the PxPlus software and then change into it: mkdir /usr/install_dir  
cd /usr/install_dir  
**3.** |  Use the _tar_ command to copy the software into the directory: tar -xvf /tmp/product_name__v.vv.vvvv_ddd_www_aaa_.tar  
**4.** |  If required, set the file permissions on the executable and configuration files to whatever is necessary depending on the _username_ who will be running the product: chmod 500 pxp*  
chmod 600 pxpsqlsvr.conf.sample  
chown root pxp*  
chgrp root pxp*   
**5.** |  If this is the **_first_** time the product has been installed on the system, then for a PxPlus SQL Server install, copy the sample configuration file to create the configuration file. For a PxPlus SQL ODBC Driver install, copy the sample license to create the license file: cp pxpsqlsvr.conf.sample pxpsqlsvr.conf (PxPlus SQL Server)  
cp license.sample license (PxPlus SQL ODBC Driver)  
**6.** |  Copy libraries to either the _/usr/lib_ or _/usr/lib64_ directory: cp libpxpio.so /usr/lib/libpxpio.so  
cp libpxpsqlodbc.so /usr/lib/libpxpsqlodbc.so  
  
## Activation Procedure

To activate the PxPlus UNIX/Linux ODBC products, use a text editor (e.g. vi) to modify (or create a new copy of) the _license_ file (for the PxPlus SQL ODBC Driver) and the _pxpsqlsvr.conf_ file (for the PxPlus SQL Server).

The _sample_ files contain documentation at the top of the files on the entries that are required and the syntax of those entries. These files are used to configure the Activation Information.

Enter your activation information as follows:

> serial=_xxxxx_ -_y_ \- _zzzzzzzzzzzzzzzz_

**_Where:_**

|  _xxxxx_ |  Serial Number  
---|---|---  
|  _y_ |  User Count  
|  _zzzzzzzzzzzzzzzz_ |  Activation Key  
  
If purchasing a Professional or Web edition of PxPlus that includes SQL ODBC Driver support, you must use the Serial Number, User Count, and **ODBC** Activation Key of your PxPlus Professional or Web license.

To run the PxPlus ODBC products in demonstration mode, set the _serial=_ entry to a blank value. The PxPlus SQL ODBC Driver in demo mode will notify the user that he/she is connected to a demo-activated product each time it is used and is limited to returning a maximum of 10 records. The PxPlus SQL Server in demo mode will allow one user to access the server with demo messages appearing periodically on the client's screen.

At this point, the installation is complete; however, the configuration file may require updated settings.

For configuration details, see

> [**PxPlus SQL ODBC Driver Configuration (Windows)**](../configuration_procedures/odbc_driver_configuration_windows.md)  
>  [**PxPlus SQL ODBC Driver Configuration (UNIX/Linux)**](../configuration_procedures/odbc_driver_configuration_unix_linux.md)

> [**PxPlus SQL Server Configuration (Windows)**](../configuration_procedures/server_settings_windows.md)  
>  [**PxPlus SQL Server Configuration (UNIX/Linux)**](../configuration_procedures/server_settings_unix_linux.md)

Once configured, you are ready to start using the ODBC product.

## See Also

[**Using the PxPlus SQL ODBC Driver**](../using_odbc_driver.md)  
[**PxPlus SQL Command Line Client**](../pxplus_sql_cmd_line_client.md) (installed with the PxPlus SQL ODBC Driver)  
[**PxPlus SQL Server**](../pxplus_file_server.md)
