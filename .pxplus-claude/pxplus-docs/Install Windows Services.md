# Running on the Web

**Install Windows Services**|   
---|---  
  
The **Install Windows Services** window is used to add and install one or more instances of each type of Windows service. The types of services that can be installed are **[EZWeb Server](EZWebServer/EZweb%20Introduction.md)**, **[Simple Client Server](simplecs/clienthost.md)**, **[AutoChart Scheduler](Chart%20Image%20Utilities/Installing%20Chart%20Generator%20as%20a%20Windows%20Service/Overview.md)**, **[Inittab Emulation Server](utilities/winutl_service.md)** and **[PxPlus Web Server](Web%20Server%20Reference/Setting%20Up%20PxPlus%20Web%20Server/Introduction.md)**.

Access this window from the **[PxPlus IDE Main Launcher](PxPlus%20IDE/IDE%20Main%20Launcher.md)** by expanding the _Installation and Setup_ category and selecting _Install Windows Services_.

> _(The Install Windows Services window was added in PxPlus 2016.)_

This window includes a drop box for selecting the type of service and a grid for defining the settings for the service. Grid side buttons provide functionality for installing/uninstalling a service, adding another service and removing a selected service. A print button is provided for viewing and printing a detailed listing of all the types of services.

The **Install Windows Services** window consists of the following:

_Type of Service_ |  Type of Windows service. Selections are _EZWeb_ _Server_ , _Simple Client Server_ , _AutoChart_ _Scheduler_ , _Inittab_ _Emulation Server_ , and _PxPlus Web Server_. (**_Default_ :**  _EZWeb_ _Server_)  
---|---  
_Install_ |  **_(Available only when selecting an existing service in the grid where the Installed check box = No)_**  
  
Displays a message that first asks if you want to install the selected service. Responding _Yes_ installs the service. If the installation is successful, the _Installed_ check box is selected  _automatically_. A message confirms that the service has been installed, and the _Install_ button changes to an _Uninstall_ button for this service. Responding _No_ to the install message does not install the service.  
_Uninstall_ |  **_(Available only when selecting an existing service in the grid where the Installed check box = Yes)_**  
  
Displays a message that first asks if you want to uninstall the selected service. Responding _Yes_ uninstalls the service. If the uninstall is successful, the _Installed_ check box is deselected _automatically_. A message confirms that the service has been uninstalled, and the _Uninstall_ button changes back to an _Install_ button for this service. Responding _No_ to the uninstall message does not uninstall the service.  
_Add_ |  Creates a new row at the bottom of the grid for defining an additional service.  
_Remove_ |  Deletes the selected service from the grid. Before an installed service can be removed, it must first be uninstalled with the _Uninstall_ button. If all services for the selected service type are removed from the grid, including the default, and then you immediately exit the panel, the default service will display the next time **Install Windows Services** is invoked.  
**Thecolumns displayed in the grid vary depending on the _Type of Service_ selected, as explained below:**  
_Name of Service_ |  Unique name for the service. Entering a duplicate name for any of the service types is not allowed. If a duplicate name is entered, a message will indicate that the name already exists. A default name is provided in the first row for each _Type of Service_ selected (e.g. _PxPlusEZWeb_ is the default service name for the EZWeb Server service type). When adding a new service, the default name displays as _< New Service>_. This default name must be changed to a unique name before you can edit the other settings for the new service, exit the panel or add a new service.  
_Installed_ |  Indicates whether the selected service is installed. This check box is selected or deselected _automatically_ when clicking the _Install_ or _Uninstall_ button. It cannot be changed manually by clicking directly on the check box.  
_Starting Directory_ |  **_(Not Applicable for PxPlus Web Server)_** Directory used as the start-up directory for the service. Click the Browse button to locate the starting directory.  
_Port #_ |  **_(EZWeb Server and Simple Client Server Only)_** TCP/IP Port number Default Port number for EZWeb Server _without_ SSL Certificate:_80 (standard Web port for HTTP requests)  
_ Default Port number for EZWeb Server _with_ SSL Certificate: _443_  
Default Port number for Simple Client Server:_4093_ Port numbers cannot be duplicated. When adding a new service, the default Port number automatically increments by 1 until a unique number can be assigned to the new service. Attempting to manually change the Port number to a number already assigned to a service displays a "Port number is in use" message.  
_Start_ |  Start-up option for the service. Selections are _Manual_ and _Automatic_. _(**Default** : Manual)_  
_SSL Certificate_ |  **_(EZWeb Server and Simple Client Server Only)_** Specify the pathname to the server's SSL Certificate file. Click the File Selection button to select an existing file. _(The File Selection button was added in PxPlus 2017.)  
(The SSL Certificate column was added to the Simple Client Server grid in PxPlus 2018.)_  
_Certificate Key_ |  **_(EZWeb Server and Simple Client Server Only - Available when an SSL Certificate is entered)_** Option that is used to indicate the PEM file, which contains the certificate private key. Click the File Selection button to select an existing file. This is needed only if you have defined the security argument and have separate PEM files for the certificate and private key.

#### **Note:**  
This column is disabled if no _SSL Certificate_ has been entered or if a _PFX Password_ has already been entered.

_(The Certificate Key column was added to the EZWeb Server and Simple Client Server grids in PxPlus 2019.)_  
_PFX Password_ |  **_(EZWeb Server Only - Available when an SSL Certificate is entered)_** Option that is used to indicate the PFX certificate password if a PFX certificate is defined for the security argument. This can be either blank or not defined to define an empty password.

#### **Note:**  
This column is disabled if no _SSL Certificate_ has been entered or if a _Certificate Key_ has already been entered.

_(The PFX Password column was added to the EZWeb Server grid in PxPlus 2019.)_  
_Reconnect Time (secs)_ |  **_(Simple Client Server Only)_** Defines the time (in seconds) that the server will wait before attempting to reconnect in the event that the connection is dropped.  
_Forced Program_ |  **_(Simple Client Server Only)_** Forced Lead program to be run by the host when the client connects. Click the File Selection button to select an existing file. _(The File Selection button was added in PxPlus 2017.)_  
_Security Options_ |  **_(Simple Client Server Only - Available when an SSL Certificate is entered)_** Button that is used to display the **TCP Options** window to allow certain SSL protocols to be disabled or forced. These checkboxes are applicable only when an _SSL Certificate_ has been entered. If anything other than _All Protocols Supported (default behavior)_ is selected and saved, a check mark will display on the _Security Options_ button. See **[PxPlus Simple Client-Server Interface](simplecs/clienthost.md)**. If desired, support for various protocols may be disabled by selecting the _Disable Support for_ radio button and then selecting the protocols to be disallowed. Alternatively, the _Force Support for Only_ radio button option allows only one selected protocol to be used. _(The Security Options button was added to the Simple Client Server grid in PxPlus 2020.)_  
  
#### **Note:**  
Once a service is installed, you cannot modify any of the settings for that service. To change a setting, you must first uninstall the service. The _Security Options_ is still available for an installed service; however, all of the **TCP Options** displayed will be disabled.
