# Configuration Procedures

**PxPlus SQL Server Configuration (UNIX/Linux)**|   
---|---  
  
There is no configuration interface for the PxPlus SQL Server installed on a UNIX/Linux system. Instead, the server behavior is controlled via Command Line arguments and a plain text configuration file _(pxpsqlsvr.conf)_.

For a description of UNIX/Linux PxPlus SQL Server components and file locations, see [**ODBC Product Installation and Activation (UNIX/Linux)**](../installation_procedures/odbc_product_installation_activation_unix.md).

##  Configuration File

The UNIX/Linux version of the SQL Server must have access to the _pxpsqlsvr.conf_ file to be configured for use. If this file cannot be located, the SQL Server will attempt to automatically create one based on the _pxpsqlsvr.conf.sample_ file provided with the installation ._taz_ file. If neither of these files can be accessed, an error is reported. If the activation key is invalid, the server will operate in Demo mode. If the port number is invalid, it will default to 20222.

The server checks for these entries in the _pxpsqlsvr.conf_ file:

_TCP/IP Port Number_ |  TCP port number on which the server will listen. The default value is 20222. Enter the port number as follows: ` port=20222`  
---|---  
_SSL_ |  Enable SSL encrypted TCP/IP communication. Enter the SSL certificate path (should be in PEM format) as follows: ssl=/usr/certs/sslcert.pem

#### **Note:**  
PxPlus SQL Server uses OpenSSL libraries to provide SSL/TLS functionality. An X509 certificate created for use with OpenSSL or Apache is needed. (Apache also uses OpenSSL libraries.)  
  
An X509 certificate usually comes in the form of a PEM file, which contains both the certificate and private key.

_(SSL support was added in version 8.00.0000/PxPlus 2024.)_  
_Activation Information_ |  Activation information for running this software. Enter your activation information as follows: ` serial=_xxxxx_ -_y_ - _zzzzzzzzzzzzzzzz_` **_Where:_** |  |  _xxxxx_ |  Serial Number  
---|---|---  
|  _y_ |  User Count  
|  _zzzzzzzzzzzzzzzz_ |  Activation Key  
  
If purchasing a Professional or Web version of PxPlus that includes SQL ODBC Driver support, you must use the Serial Number, User Count, and ODBC Activation Key of your PxPlus Professional or Web license.

To run the SQL Server in _demonstration_ mode, set the _serial=_ entry to a blank value. This will allow one user to access the server with demo messages appearing periodically on the client's screen.  
  
_View Library Path_ |  Path to the _libpvx.so_ library usually found in the PxPlus install directory. **_Example:_** ViewLib=/pxplus

#### **Note:**  
PxPlus needs to be properly activated for **[Views](../../Views%20System/Introduction.md)** to work.  
  
_Catalog Definitions_ |  Define sets of data that the SQL server can access. The client will use the _Catalog Name_ to tell the server what data it wants to access. A maximum number of 256 catalogs may be defined.

#### **Note:**  
At least one catalog **_must_** be defined; otherwise, the server will not start.

The **_format_** for a catalog definition is: _CatalogName_ =*[_DDPath_][_INIPath_][_Prefix_] **_Where:_** |  |  _CatalogName_ |  Name of the catalog. It can be entered into the DSN configuration on the client.  
---|---|---  
|  **_*_** |  Indicates the default catalog. There can be only **_one_** default.  
|  _DDPath_ |  Location of the PxPlus Data Dictionary file  _(providex.ddf)_.  
|  _INIPath_ |  Path and name of the INI file used to define the data dictionary manually.  
|  _Prefix_ |  Search paths to be inserted in front of all relative file references used in Data Dictionary or INI definitions. As of PxPlus 2018, **[Equals Sign](../../directives/prefix.htm#Mark13)** and **[Asterisks](../../directives/prefix.htm#Mark15)** substitution is supported. Use a , (_comma_) as the separator between multiple prefixes.  
  
_(Catalog support was added in PxPlus 2018.)  
(Support for up to 256 catalogs was added in PxPlus 2019.)_  
  
_File Access Security Policies_ |  Security, as in: ` */*=[a][r][*][*]` Customizable security for users and files. The server initially defaults to "no access". Security rules **_must_** be established to provide access to the data. For information on the security syntax and permissions sequence, see **Permissions**. The above settings, which appear in the sample configuration file, grant users almost unrestricted Read access to the server's data sources. An *****  _(asterisk)_ indicates _any_. Therefore, for security reasons, you should reset these parameters based on your own business rules prior to operating the server in a live environment.  
  
##  Permissions

The PxPlus SQL Server Configuration file allows customizable security for users and files. Security entries are case-insensitive except where noted. All the non-alpha characters, "/ = [ ]", are part of the security syntax.

The **_format_** of a security policy appears as:

> `_User ID_` `/ _Company Code_ =[_Mode_][_Type_][_Data Dictionary_][_INIFile_]`

**_Where:_**

_User ID_ |  Specific User ID supplied by the client driver. An *****  _(asterisk)_ signifies _all_ User IDs. Spaces are significant. "John /"and "John/" are considered two different entries.  
---|---  
_Company Code_ |  Specific Company Code supplied by the client driver. An *****  _(asterisk)_ signifies _all_ Company Codes. Spaces are significant. "/ ABC" and "/ABC" are considered two different entries.  
_Mode_ |  Either **A** for _Access_ or **D** for _Denied_. If in _Denied_ mode, the Administrator can temporarily deny access without removing the policy entry.  
_Type_ |  Either **R** for _Read Only_ or **RW** for _Read Write_.  
_Data Dictionary_ |  A comma or semi-colon separated list of paths to the _providex.ddf_ files to which the client's DSN will have access. An *****  _(asterisk)_ signifies that _any_ Data Dictionary path is valid. **_This entry is case sensitive._**

#### **Note:**  
This field must **_not_** include the data dictionary file name.  
  
**_Example:_**  
  
If the _providex.ddf_ file is located at _/pxp/data/providex.ddf_ , then use _/pxp/data_.  
  
_INIFile_ |  Comma or semi-colon separated list of paths and file names of INI files to which the client's DSN will have access. An *****  _(asterisk)_ signifies _any_ INI file path and file name. **_This entry is case sensitive._**

#### **Note:**  
This field **_must_** include the INI file name.  
  
**_Example:_**  
  
If the INI file is located at _/pxp/data/mydata.ini_ , then use _/pxp/data/mydata.ini_.  
  
The PxPlus SQL Server checks access permissions by searching the permission rules from the maximum restriction to the lowest one. It is a method to grant access to specific directories on the server based on a client's User ID and Company Code.

If the check for a specific User ID and Company Code fails, then the User ID is substituted with * (_any_) and the combination for User ID = _any_ with Company Code = _specific_ is checked against the corresponding rule if it is present on the system. The next check is performed for User ID = _specific_ , Company Code = _any_ , and the last check is for User ID = _any_ , Company Code = _any_.

Refer to the following table:

> **Sequence** |  **User ID** |  **Company Code**|   
> ---|---|---|---  
> 1. |  _Specific_ |  _Specific_ |  **_Highest Restriction_**  
> 2. |  _Any_ |  _Specific_|   
> 3. |  _Specific_ |  _Any_|   
> 4. |  _Any_ |  _Any_ |  **_Lowest Restriction_**  
  
By default, access to all SQL ODBC Driver resources is denied unless access is granted via a security policy configuration line.

#### **Note:**  
Access policies are currently kept only by User ID/Company Code, which means that each User ID/Company Code may only have one policy entry.  
  
It is not currently possible to specify that a specific User ID/Company Code has Read access to one set of entries and Read Write access to a different set of entries.

## Sample Configuration Entries

Below are sample configuration entries:

> serial=12345-6-123456789ABCDEF0  
>  port=20000  
>  catalogs:  
> mydata=*[/pxp.mydata][/nomtrain/test.ini][]  
> pxpdata=[/pxpdata][][]  
>  security:  
>  */*=[a][r][*][*]  
>  John/ABC=[D][RW][/pxpdata;/pxp/mydata][/nomtrain/test.ini]

##  Automatic Start

#### **Note:**  
The following method is an example intended for the Red Hat type inittab systems.  
  
Other Linux versions may require system-specific Automatic Start procedures such as Debian and Ubuntu.

To have the UNIX/Linux PxPlus SQL Server start automatically, it must be set up in the _inittab_ file. Each _inittab_ entry is position dependent and has the following format:

> _id_ :_rstate_ :_action_ :_process_

**_Where:_**

|  _id_ |  Unique identifier for the entry.  
---|---|---  
|  _rstate_ |  Run-level for which this entry is to be processed. More than one run-level can be specified.  
|  _action_ |  Actions to affect the process specified.  
|  _process_ |  Command to be executed by the system.  
  
**_Example:_**

The following is an example of an _inittab_ entry for the PxPlus SQL Server:

> podb:2:once:/usr/pxpsqlsvr/pxpsqlsvr -f /usr/pxpsqlsvr/myOdbc.conf </dev/null >/dev/null 2>&1

This example would start the PxPlus SQL Server the first time the server booted to run level 2. The configuration file named _myOdbc.conf_ located in _/usr/pxpsqlsvr/_ would be used to configure the server. Any messages sent to standard out or standard error by the server would be suppressed. If the server stopped for any reason, the system will not restart it.

#### **Warning!**  
Modifications to the _inittab_ _/startup_ scripts on a UNIX/Linux system may cause serious problems. All changes should be performed by qualified personnel.
