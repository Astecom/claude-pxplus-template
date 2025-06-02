# Installation and Activation Procedures

**ODBC Product Installation and Activation (Windows)**|   
---|---  
  
The installation programs for the PxPlus SQL ODBC Local/Client Driver or PxPlus SQL Server can be obtained from your PxPlus reseller or from the PxPlus website [**www.pvxplus.com**](http://www.pvxplus.com/). The installation process is virtually identical for all PxPlus Windows ODBC products.

After downloading the appropriate installation program (e.g. sql_odbc_driver_x.xx.xxxx_windows_yy-bit_zzz.exe), follow these steps to install the ODBC product on your computer:

**Step** |  **Description**  
---|---  
**1.** |  Double click on the installation program that was downloaded to your computer to begin the installation process. Respond _Yes_ to the **User Account Control** popup that asks "_Do you want to allow this app to make changes to this device?_ ". This launches an **Install Wizard** similar to the PxPlus installation.  
**2.** |  Read the license agreement and then click the **I accept the agreement** button. Click _Next_ to continue.  
**3.** |  Optionally enter your User Name and Company Name. Click _Next_ to continue.  
**4.** |  For the PxPlus SQL ODBC Local/Client Driver, you must select an **Install Type** , either _Server Side Licensing_ or _Client Side Licensing_.

#### **Note:**  
If you selected _Client Side Licensing_ and need to have Write access, you must set the _Allow the SQL ODBC Driver to write data files_ check box.  
  
This is not necessary for _Server Side Licensing_ because the Write permissions are set by the server for that installation type.  
  
**5.** |  For the PxPlus SQL Server install, if this is the **_first_** install, the next screen will be the **Catalog** page. This page is used to specify the location of the PxPlus data that your server will access. Additional catalogs can be defined, and the catalog entered can be modified later using the **[PxPlus SQL Server Configuration (Windows)](../configuration_procedures/server_settings_windows.md)** utility. ODBC clients will use the _Catalog Name_ to specify what data they want to access on the server. _(Catalog support was added in ODBC version 6.00.0000+/PxPlus 2018.)_  
**6.** |  Unless this is a _Server Side Licensing_ PxPlus SQL ODBC Driver install, the next screen will be the **Activation** page. A valid Serial Number, User Count and Activation Key are required to set up and run a permanent version of the ODBC product. The necessary activation information is issued with every purchase of a product package from PVX Plus Technologies Ltd. or authorized dealer/distributor. When installing PxPlus ODBC products as part of a Web or Professional license, use your **_ODBC Activation Key_** for permanent activation. Permanent keys that are generated for bundled activations do not apply to ODBC components. For demonstration activation, you can leave the fields blank. In this case, the **Activation** dialog pops up for every ODBC connection, and a "nag" message is repeated continuously during execution. The activation information is not verified during the install; it is only checked for a valid format. If the activation is invalid, the ODBC product will use a demonstration activation. If this is an installation over an **_existing_** installation, the three fields will be auto-populated with the previous activation information, if any.  
**7.** |  If this is the **_first_** install, the next screen will be the **Select Destination Location** page. Select the destination location for the install files. If the selected destination location already exists, you will be asked if you want to still use that folder anyway.  
**8.** |  For the PxPlus SQL Server install, if this is the **_first_** install, the next screen will be the **Select Start Menu Folder** page. Select a _Start_ menu folder or select not to create a _Start_ menu folder.  
**9.** |  The **Ready to Install** page is used to confirm all the install settings before actually performing the install. If all the information is correct, click _Next_ to finish the installation. If something is incorrect, click _Back_ until you are at the right screen to correct the problem. For the PxPlus SQL Server install, if the SQL Server is running as a service, a dialog pops up and gives you an option to continue and automatically stop the service and install over it, or you can abort and exit the installation.  
  
## See Also

**[PxPlus SQL ODBC Driver Configuration (Windows)](../configuration_procedures/odbc_driver_configuration_windows.md)**  
**[PxPlus SQL Server Configuration (Windows)](../configuration_procedures/server_settings_windows.md)**
