# PxPlus Installation and Configuration

**PxPlus SQL ODBC and WindX**|   
---|---  
  
## PxPlus SQL ODBC Driver

The PxPlus SQL ODBC Driver delivers third party access to PxPlus data. It enables any ODBC-compliant application on any Windows platform to communicate with your PxPlus database from any location on the network.

#### **Note:**  
**_As of 2019_** , the PxPlus SQL ODBC Driver is no longer sold as a stand-alone product.

Two PxPlus SQL ODBC Driver modes are available:

**Mode** |  **Description**  
---|---  
_Local_ |  Accesses local PxPlus data directly  
_Client/Server_ |  Accesses remote PxPlus data over a network  
  
For information about the PxPlus SQL ODBC Driver, including installation procedures, see **[PxPlus SQL ODBC Driver](../../odbc/pxplus_odbc.md)**.

##  WindX Thin-Client

WindX Thin-Client technology allows you to create a remote graphics interface that will run PxPlus applications from any host. It provides convenient Windows access on the client side of your application, while maintaining processing and data storage on your UNIX, Linux or Windows server (even if the server does not support graphical user interface). The **WindX Plug-in** can be obtained from your PxPlus reseller or from the PxPlus website **[www.pvxplus.com](https://www.pvxplus.com/)**.

It is freely distributable for clients but must connect with a PxPlus application on a server that maintains a multi-user Base with Thin-Client package, Professional or Web license. If the server is not licensed for Plug-in access, server file/directory permissions are incorrect, or a PxPlus session cannot be established within two (2) minutes of start-up, then the Plug-in will terminate automatically.

See **[WindX Thin-Client](../../windx.md)**.

#### **Note:  
** The Plug-in download for WindX is for installation on **_Windows client machines only_**.

**_Client Installation_**

Click on a link to download the WindX Plug-in installation file and save it to disk. Once you download the installation program, follow these steps to install WindX on your client computer:

1. |  If possible, remain connected to the Internet. The installation process may include some options to download additional components.  
---|---  
2. |  Double-click on the installation program that was downloaded to your computer to begin the installation process. The installation program launches an **_Install Shield Wizard_** and immediately checks for any existing versions of WindX. \- If an older version of WindX is detected, you will be given the option to upgrade/overwrite your existing version or to install the new version in a different location.  
\- If your current version of WindX is identical to the new install, you will be given the option to modify, repair or remove the existing components.  
  
The wizard takes you through a series of dialogue boxes. During the installation process, the system will check to determine if WindX authorization has been set. If security has **_not_** been set, the system will prompt the user to either enable or disable security. If security has been set (either enabled or disabled), then no prompt will display.  
3. |  Follow the wizard instructions and click _Next >_ to complete each step. The final step installs the driver onto your hard disk and displays a progress bar to indicate the current installation status. _This process may take several minutes._  
4. |  The **_Install Shield Wizard_** will be completed when all components are copied to disk. WindX is fully installed at this point.  
  
See **[PxPlus Windows Installation](../Installation%20Instructions/Windows%20Installation.md)** for activation procedures.

_(The security prompt during WindX Plug-in installation was added in PxPlus 2019.)_

## PxPlus AutoUpdater (Windows)

PxPlus/WindX client installations may be configured to check for and perform automatic installation updates when connected to PxPlus on the server.
