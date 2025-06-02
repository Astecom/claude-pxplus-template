# PxPlus SQL ODBC

**Frequently Asked Questions**|   
---|---  
  
This page provides answers to some commonly asked questions about the PxPlus SQL ODBC Driver and other PxPlus ODBC products:

**[What version of the ODBC products does my PxPlus license allow me to use?](odbc_faq.htm#Mark13)**  
---  
**[Should I use the 32-bit or 64-bit PxPlus SQL ODBC Driver?](odbc_faq.htm#Mark1)**  
**[I'm creating a new Data Source Name (DSN) for Windows configuration. Why isn't my installed PxPlus SQL ODBC Driver listed?](odbc_faq.htm#Mark2)**  
**[I'm trying to configure a Data Source Name (DSN). Why am I getting the following error(s): _"The setup routines could not be found"_ and/or _"The specified DSN contains an architecture mismatch"_?](odbc_faq.htm#Mark3)**  
**[I set up a Data Source Name (DSN), but why don't I see any tables?](odbc_faq.htm#Mark4)**  
**[I can see my tables, but why can't I access them?](odbc_faq.htm#Mark5)**  
**[I can access all of my tables, but why can't I access any Views?](odbc_faq.htm#Mark6)**  
**[Can I perform a join between more than two tables?](odbc_faq.htm#Mark7)**  
**[Why is my SQL query so slow?](odbc_faq.htm#Mark8)**  
**[Why am I getting a _"Network Communication"_ error and/or an _"ISAM Communication"_ error?](odbc_faq.htm#Mark9)**  
**[Is version _X_ of the PxPlus SQL ODBC Driver compatible with version _Y_ of the PxPlus SQL Server?](odbc_faq.htm#Mark10)**  
**[Does the PxPlus SQL ODBC Driver work with Sage 100?](odbc_faq.htm#Mark11)**  
**[Can I test the PxPlus SQL ODBC Driver and/or PxPlus SQL Server before purchasing?](odbc_faq.htm#Mark12)**  
  
#### **Note:**  
The information given on this page assumes that you are using the latest version of the PxPlus ODBC products. If you are encountering issues, check that you are using the latest version.

##  What version of the ODBC products does my PxPlus license allow me to use?

Major versions of the ODBC products (i.e. when the first number of the version changes) typically will be tied with the most recent major PxPlus release at the time.

See **[PxPlus ODBC Activation Chart](odbc_activation_chart.md)** to find out which version of the ODBC products your license entitles you to use.

##  Should I use the 32-bit or 64-bit PxPlus SQL ODBC Driver?

The PxPlus SQL ODBC Driver that you should use depends on the applications from which you will be using it.

If you are using the PxPlus SQL ODBC Driver from a 32-bit application, then you need the 32-bit driver.

If you are using the PxPlus SQL ODBC Driver from a 64-bit application, then you need the 64-bit driver.

If you are using the PxPlus SQL ODBC Driver from **_both_** a 32-bit _and_ a 64-bit application, then you need to install **_both_** the 32-bit _and_ 64-bit drivers. The PxPlus SQL ODBC Driver can have both the 32-bit and 64-bit versions installed at the same time using the same license. For example, if you are using the PxPlus SQL ODBC Driver from Microsoft Excel, then you likely need the 32-bit driver, as most users have a 32-bit version of Microsoft Office. If you are using the PxPlus SQL ODBC Driver from Microsoft SQL Server 2012, then you likely need the 64-bit version, as this is a 64-bit application.

#### **Important Note:**  
A 32-bit operating system **_cannot_** run 64-bit applications. If you are using a 32-bit operating system, your applications are 32-bit and you need the 32-bit PxPlus SQL ODBC Driver.  
  
If you are using a 64-bit operating system, your applications could be either 32-bit or 64-bit.  
  
The method used to determine whether an application is 32-bit or 64-bit varies depending on the _type_ and _version_ of the operating system. This information can be found on the Internet based on the type and version of the operating system you are using.

##  I'm creating a new Data Source Name (DSN) for Windows. Why isn't my installed PxPlus SQL ODBC Driver listed?

The most common reason for this likely has to do with the 64-bit Windows having two versions of the ODBC Data Sources application: a 32-bit version and a 64-bit version.

On Windows versions **_prior to Windows 8_** , the 32-bit version is hidden in the C:\Windows\SysWOW64 directory, and the 64-bit version is accessed through the Control Panel. If you open the 64-bit version of the ODBC Data Sources application and try to create a new Data Source Name (DSN), only 64-bit PxPlus SQL ODBC Drivers are listed.

If you open the 32-bit version of the ODBC Data Sources application and try to create a new DSN, only 32-bit PxPlus SQL ODBC Drivers are listed.

If you are using **_Windows 7_** and install a 32-bit PxPlus SQL ODBC Driver, and then go to the _Control Panel_ to open the ODBC Data Sources application, you will not be able to create a DSN because only 64-bit PxPlus SQL ODBC Drivers are listed. The solution in that case is to go to the C:\Windows\SysWOW64 directory and launch **odbcad32.exe** to get the 32-bit version of the ODBC Data Sources application, which allows you to create a DSN with the 32-bit PxPlus SQL ODBC Driver. For your convenience, the installer for the PxPlus SQL ODBC Driver can optionally install a shortcut to the 32-bit ODBC Data Sources application.

On **_Windows 8 and higher_** , the ODBC Data Sources application is labeled as 32-bit or 64-bit; therefore, this becomes less of an issue.

##  I'm trying to configure a Data Source Name (DSN). Why am I getting the following error(s): _"The setup routines could not be found"_ and/or _"The specified DSN contains an architecture mismatch"_?

The reason that these errors are occurring likely has to do with the 64-bit Windows having two versions of the ODBC Data Sources application: a 32-bit version and a 64-bit version.

On Windows versions **_prior to Windows 8_** , the 32-bit version is hidden in the C:\Windows\SysWOW64 directory, and the 64-bit version is accessed through the _Control Panel_. If you open the 64-bit version of the ODBC Data Sources application and try to configure a Data Source Name (DSN) created for a 32-bit PxPlus SQL ODBC Driver, you will get this error.

If you open the 32-bit version of the ODBC Data Sources application and try to configure a DSN created for a 64-bit PxPlus SQL ODBC Driver, you will get this error.

If you are using **_Windows 7_** and go to the _Control Panel_ to open the ODBC Data Sources application, and then select a DSN to configure that was created for the 32-bit PxPlus SQL ODBC Driver, you will get this error. The solution in that case is to go to the C:\Windows\SysWOW64 directory and launch **odbcad32.exe** to get the 32-bit version of the ODBC Data Sources application, which allows you to configure the DSN. For your convenience, the installer for the PxPlus SQL ODBC Driver can optionally install a shortcut to the 32-bit ODBC Data Sources application.

On **_Windows 8 and higher_** , the ODBC Data Sources application is labeled as 32-bit or 64-bit; therefore, this becomes less of an issue.

##  I set up a Data Source Name (DSN), but why don't I see any tables?

If the PxPlus SQL ODBC Driver reports 0 (zero) tables, the most common reason for this is an incorrect setting for either the _Data Dictionary_ or _INI File_ fields when defining the Data Source Name (DSN).

The PxPlus SQL ODBC Driver uses the data dictionary file (**providex.ddf**) or an INI file to retrieve the list of tables. If the DSN is not correctly pointing to the data dictionary or INI file, then it will report 0 (zero) tables.

If you are using a data dictionary, check that the _Data Dictionary_ setting contains the path to the directory where the data dictionary file (**providex.ddf**) can be found. In addition, check that the permissions on the file are permissive enough for read access for the user using the PxPlus SQL ODBC Driver.

If you are using an INI file, check that the _INI File_ setting includes the path to the INI file and the name of the file. In addition, check that the permissions on the file are permissive enough for read access for the user using the PxPlus SQL ODBC Driver.

If you are using a client/server ODBC setup, check that the _Catalog_ setting on the **Server** tab correctly corresponds to a _Catalog_ defined on the PxPlus SQL Server to which you are connecting. In addition, check that **_on the server_** , a _Catalog_ is defined with the name in the DSN and that the _Data Dictionary / INI File_ settings are correct as described above for the local DSN.

#### **Note:**  
A good way to test that you can see all tables is to use the _Test Connection_ button in the **Debug** tab of the DSN. It will report the number of tables it found defined in the data dictionary or INI file.

For details on configuring the _Data Dictionary_ , _INI File_ and _Catalog_ settings for a DSN, see:

**[PxPlus SQL ODBC Driver Configuration (Windows)](configuration_procedures/odbc_driver_configuration_windows.md)**  
**[PxPlus SQL ODBC Driver Configuration (UNIX/Linux)](configuration_procedures/odbc_driver_configuration_unix_linux.md)**

For details on configuring a _Catalog_ for the SQL Server, see:

**[PxPlus SQL Server Configuration (Windows)](configuration_procedures/server_settings_windows.md)**  
**[PxPlus SQL Server Configuration (UNIX/Linux)](configuration_procedures/server_settings_unix_linux.md)**

##  I can see my tables, but why can't I access them?

Check the actual location of the physical files and then verify that your  _Data Dictionary_ , _INI File_ and/or _Prefix_ settings points to the correct location.

If you are using a client/server ODBC setup, check that the _Catalog_ setting correctly corresponds to a _Catalog_ defined on the PxPlus SQL Server to which you are connecting. In addition, check that **_on the server_** , a _Catalog_ is defined with the name in the Data Source Name (DSN) and that the _Prefix_ setting is correct.

If the table you are trying to access is a _View_ , see the response for **[I can access all of my tables, but why can't I access any Views?](odbc_faq.htm#Mark6)** for details on Views configuration.

#### **Note:**  
A good way to test that you can see and access all tables is to use the _Test Schema_ button in the **Debug** tab of the DSN. It will report the number of tables it found defined in the data dictionary or INI file, and it will report the first file it had trouble accessing, if any.

For details on configuring the _Prefix_ setting for a DSN or SQL Server, see:

**[PxPlus SQL ODBC Driver Configuration (Windows)](configuration_procedures/odbc_driver_configuration_windows.md)**  
**[PxPlus SQL ODBC Driver Configuration (UNIX/Linux)](configuration_procedures/odbc_driver_configuration_unix_linux.md)**

**[PxPlus SQL Server Configuration (Windows)](configuration_procedures/server_settings_windows.md)**  
**[PxPlus SQL Server Configuration (UNIX/Linux)](configuration_procedures/server_settings_unix_linux.md)**

For details on how to determine if the data dictionary and INI files point to the correct physical file locations, see [**Data Dictionary Maintenance**](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md) and [**INI Definition**](table_definitions/ini_definition.md).

##  I can access all of my tables, but why can't I access any Views?

Verify that the _Path to Views DLL_ setting is configured correctly. It should point to the directory where the **view dll/so** file can be found.

If you are using a Windows version of the PxPlus SQL ODBC Driver or PxPlus SQL Server, the Views DLL that you need to point to is **pvxwin32.dll** , which is installed with the Windows version of PxPlus.

If you are using a UNIX/Linux PxPlus SQL ODBC Driver or PxPlus SQL Server, the Views DLL that you need to point to is **libpvx.so** , which is installed with the UNIX/Linux version of PxPlus.

If you are using a client/server ODBC setup, verify that the _Path to Views Library_ setting in the PxPlus SQL Server configuration is correct.

#### **Important Note:  
** The Views library **__must__** be the same architecture as the PxPlus SQL ODBC Driver.  
  
If you need to use the 64-bit PxPlus SQL ODBC Driver, you need the Views library installed with 64-bit PxPlus.  
  
If you need to use the 32-bit PxPlus SQL ODBC Driver, you need the Views library installed with 32-bit PxPlus.  
  
If you have a requirement to use a different architecture SQL ODBC Driver as compared to PxPlus, then you can run the PxPlus SQL Server in the same architecture as PxPlus and connect to it using the different architecture SQL ODBC Driver in client mode pointed to the PxPlus SQL Server.

For details on configuring the _Path to Views DLL_ setting for a Data Source Name (DSN), see:

**[PxPlus SQL ODBC Driver Configuration (Windows)](configuration_procedures/odbc_driver_configuration_windows.md)**  
**[PxPlus SQL ODBC Driver Configuration (UNIX/Linux)](configuration_procedures/odbc_driver_configuration_unix_linux.md)**

**[PxPlus SQL Server Configuration (Windows)](configuration_procedures/server_settings_windows.md)**  
**[PxPlus SQL Server Configuration (UNIX/Linux)](configuration_procedures/server_settings_unix_linux.md)**

##  Can I perform a join between more than two tables?

Yes. To do a join with three or more tables, you need to nest a join within a join. The two methods for nesting a join within a join are: (1) nest the join where the first table would normally be, and (2) nest the join where the second table would normally be. Parenthesis can be used to make reading the join easier.

**_Example:_**

> SELECT * FROM (Customer LEFT OUTER JOIN SalesReps ON Customer.SALESREP = SalesReps.SALESREP) LEFT OUTER JOIN Shipping ON Customer.CUSTID = Shipping.CUSTID  
>  SELECT * FROM Customer LEFT OUTER JOIN (SalesReps LEFT OUTER JOIN Commission ON SalesReps.SALESREP = Commission.SALESREP) ON Customer.SALESREP = SalesRep.SALESREP

See **[Using the PxPlus SQL ODBC Driver](using_odbc_driver.md)**.

##  Why is my SQL query so slow?

The most common reason for an SQL query that is being processed by a PxPlus SQL ODBC Driver to take a long time is that the SQL query itself is inefficient. The PxPlus SQL ODBC Driver will do exactly what the SQL query asked it to do. If the SQL query asks it to do a huge amount of file IO, then this will take a long time in any case. An example of this is if your SQL query is a cross join between two large tables with millions of records each, and you ask the PxPlus SQL ODBC Driver to read the entire second table every time it reads one of the millions of rows of the first table.

To help ease this problem, two effective strategies are available. The first strategy is to try to always use key fields in the WHERE clause of the SQL query. When you filter based on a key, the PxPlus SQL ODBC Driver can go directly to the data in question instead of having to read through the entire file. The second strategy is to minimize the amount of data you ask the PxPlus SQL ODBC Driver to read. This means that, wherever possible, avoid joining large tables and use more restrictive joins instead of a cross join.

##  Why am I getting a _"Network Communication"_ error and/or an _"ISAM Communication"_ error?

These errors are typically caused by incorrect settings for the _Server Name or IP_ field and/or the _TCP/IP Port_ field for the Data Source Name (DSN). Check that the network name or IP address and the port are correct. You can verify the port on which the SQL Server is running by looking at the Configuration application (if it is running on Windows) or looking at the **pxpsqlsvr.conf** file (if it is running on UNIX/Linux).

If these settings are not the issue, then verify there is no network problem and test to see that the server is reachable from the client. You should also verify that firewalls on both the client and the server are not blocking the client or server communication.

#### **Note:**  
A good way to test that you can connect to the PxPlus SQL Server and see all tables is to use the _Test Connection_ button in the **Debug** tab. It will report any connection errors and the number of tables it found defined in the data dictionary or INI file on the server.  
  
You can also use a Web browser to check if the server is running correctly. See **[Checking the Server (Info Page)](pxplus_file_server.htm#Mark2)**.

In addition, check that there is no client/server version mismatch. For details on client/server compatibility, see the response for **[Is version X of the PxPlus SQL ODBC Driver compatible with version Y of the PxPlus SQL Server?](odbc_faq.htm#Mark10)**

For details on configuring the _Server Name or IP_ and/or _TCP/IP Port_ settings for a DSN, see:

**[PxPlus SQL ODBC Driver Configuration (Windows)](configuration_procedures/odbc_driver_configuration_windows.md)**  
**[PxPlus SQL ODBC Driver Configuration (UNIX/Linux)](configuration_procedures/odbc_driver_configuration_unix_linux.md)**

##  Is version _X_ of the PxPlus SQL ODBC Driver compatible with version _Y_ of the PxPlus SQL Server?

While every possible effort has been made to ensure that each version is compatible, there are some limitations regarding which version of the PxPlus SQL ODBC Driver works with which version of the PxPlus SQL Server.

The following table indicates the versions of the PxPlus SQL ODBC Driver that correspond with the versions of PxPlus SQL Server:

**PxPlus SQL ODBC Driver Version** |  **PxPlus SQL Server Version**  
---|---  
4.21 |  4.21  
5.00 |  4.21+  
5.10 |  5.10  
6.10+ |  6.10+  
32-bit |  32-bit and 64-bit  
64-bit |  32-bit and 64-bit  
  
If you attempt to use the PxPlus SQL ODBC Driver with a non-compatible version, the result is usually an ISAM communication error or other network error; however, it can also lead to undefined behavior and crashes.

##  Does the PxPlus SQL ODBC Driver work with Sage 100?

Yes. However, it is important to keep in mind that it is impossible to guarantee that it will always work in the future because at any time, Sage could change how their files work. Be aware that, if using the 64-bit PxPlus SQL ODBC Driver with Sage 100, you must bypass password authentication by leaving the _Password_ field blank for the Data Source Name (DSN). This is because the 32-bit Sage 100 has a security DLL that cannot be loaded by the 64-bit PxPlus SQL ODBC Driver. Bypassing the authentication works by ignoring the password and just giving you access to the data files.

For details on configuring the _Password_ setting for a DSN, see:

**[PxPlus SQL ODBC Driver Configuration (Windows)](configuration_procedures/odbc_driver_configuration_windows.md)**  
**[PxPlus SQL ODBC Driver Configuration (UNIX/Linux)](configuration_procedures/odbc_driver_configuration_unix_linux.md)**

##  Can I test the PxPlus SQL ODBC Driver and/or PxPlus SQL Server before purchasing?

Yes. When installing the product, leave the _Serial Number_ and _User Count_ fields blank and enter _DEMO_ for the _Activation Key_ field. Alternatively, you can just leave all the fields blank. The product will then install and allow you to use all of the features but limit the number of rows returned to 10 for all queries. In addition, each time you use the product, you will be presented with message box popups informing you that you are using a non-activated/demo product. These message box popups will prevent you from testing any background applications that use the PxPlus SQL ODBC Driver or testing the running of the PxPlus SQL Server as a service/background process. The reason for this is that when running in the background, you cannot see and clear the message box popups.

If you decide to purchase the PxPlus SQL ODBC Driver while running in Demo mode, you can activate the product without reinstalling. For the Windows PxPlus SQL ODBC Driver, open one of your Data Source Names (DSN), select the **Activation** tab and enter the activation information. For the UNIX/Linux PxPlus SQL ODBC Driver, edit the license file and enter your activation information. For the Windows PxPlus SQL Server, use the Configuration application, select the **Activation** tab and enter the activation information. For the UNIX/Linux PxPlus SQL Server, edit the **pxpsqlsvr.conf** file and enter the activation information.

For details on activation during installation, see:

**[ODBC Product Installation and Activation (Windows)](installation_procedures/odbc_product_installation_activation.md)**  
**[ODBC Product Installation and Activation (UNIX/Linux)](installation_procedures/odbc_product_installation_activation_unix.md)**

For details on activating an installed product, see:

**[PxPlus SQL ODBC Driver Configuration (Windows)](configuration_procedures/odbc_driver_configuration_windows.md)**  
[**PxPlus SQL ODBC Driver Configuration (UNIX/Linux)**](configuration_procedures/odbc_driver_configuration_unix_linux.md)

**[PxPlus SQL Server Configuration (Windows)](configuration_procedures/server_settings_windows.md)**  
**[PxPlus SQL Server Configuration (UNIX/Linux)](configuration_procedures/server_settings_unix_linux.md)**
