# PxPlus IDE (Integrated Development Environment)

**IDE Main Launcher (Web)**|   
---|---  
  
When you install PxPlus 2016 or later, a new shortcut is created for the **PxPlus Web IDE**. The PxPlus Web IDE provides application developers with Web browser accessibility to some of the standard PxPlus development and setup tools that are also available on the **[PxPlus IDE Main Launcher (Windows)](IDE%20Main%20Launcher.md)**.

Selecting this new shortcut launches the **[PxPlus Web IDE](IDE%20Main%20Launcher_Web.htm#webide)** by running **[EZWeb Server](../EZWebServer/EZweb%20Introduction.md)**, using the Host and Port Number specified in the **[Configure PxPlus Web IDE](IDE%20Main%20Launcher_Web.htm#configure)** window. If EZWeb Server is not currently running, selecting the shortcut automatically starts the Web IDE on the default port, but this port can be changed in the **Configure PxPlus Web IDE** window shown below.

As of PxPlus 2020, the PxPlus Web IDE has been enhanced to provide streamlined access to _Menu_ tasks and Web pages. A new ribbon toolbar can be customized with up to ten buttons for launching commonly used tasks. This is done by using the drag-and-drop method or by right clicking on a selected task in the _Menu_ list. Web pages (up to ten) can be added so that frequently used Web sites are just a single click away. The Web IDE includes maintenance utilities for managing ribbon toolbar buttons and Web page tabs.

To set up a multi-user version of the Web IDE on your network, see **[Setting Up a Web IDE Transaction](IDE%20Main%20Launcher_Web.htm#transaction)**.

##  Configure PxPlus Web IDE

The **Configure PxPlus Web IDE** window is used to specify the Host and EZWeb Port Number to use for running the PxPlus Web IDE.

> To invoke this window, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher (Windows)](IDE%20Main%20Launcher.md)** |  Expand the _Web Deployment_ category and select _Configure PxPlus Web IDE._  
From the **[PxPlus Web IDE](IDE%20Main%20Launcher_Web.htm#webide)** |  Select _Web Deployment_ > _Configure PxPlus Web IDE_ from the menu bar.  
  
This window consists of the following:

|  _Host_ |  Enter a named host or IP address. Default is _localhost_.  
---|---|---  
|  _Port Number_ |  Enter the Port Number to use for running the PxPus Web IDE. The default is the last saved EZWeb Server Port Number specified in the **[Launch EZWeb Server](../EZWebServer/EZweb%20Introduction.md)** window if it exists; otherwise, it defaults to 80. If the _Host_ is local, entering and saving a different Port Number overwrites the last saved EZWeb Server Port Number.  
  
#### **Note:**  
The _Host_ and _Port Number_ are both **_required_**. If either field is blank when the _Save_ button is selected, a message will display.

##  PxPlus Web IDE

When the PxPlus Web IDE shortcut is selected, you are presented with the default layout shown below, which closely resembles the PxPlus IDE when launched from a **_Windows_** platform. See **[IDE Main Launcher (Windows)](IDE%20Main%20Launcher.md)**.

The title bar displays the PxPlus version and the name of the current project. The hamburger menu button contains options for accessing some of the PxPlus development and setup tools, similar to the **[Menu Bar](IDE%20Main%20Launcher.htm#menubar)** in the PxPlus IDE for Windows.

> The display of the Hamburger Menu button is controlled by the template option, _Use 3 Line (hamburger ICON) option for menu bar initiation_ , in **[Template Configuration Maintenance](../iNOMADS/Template%20Configuration.htm#hamburger)** (**Layout** tab). If this option is _not_ selected, the menu selections display below the title bar, as shown below:

> The current project is selected from a drop-down list of projects that have been created using the **Projects** menu. See **[Menu Options](IDE%20Main%20Launcher.htm#menubar)**. Alternatively, new projects can be created by using the _New Project_ button (next to the _Project_ drop box).

_(The New Project button was added in PxPlus 2021.)_

PxPlus development tools, installation and setup components are presented in a tree view format with expandable/collapsible nodes. Right clicking on a task displays a popup menu with task-related options.

For information on how to customize and maintain the IDE ribbon toolbar and HTML folder tabs, see **[IDE Ribbon Toolbar and HTML Folders](IDE%20Main%20Launcher.htm#idetoolbar)**.

To search for specific text in a displayed Web page, click inside the page and use the hot key **Ctrl** +**F** to invoke the Find option for the browser.

##  Setting Up a Web IDE Transaction

To set up a multi-user version of the Web IDE on your network, the **webide** transaction has been pre-defined in **[iNomads Transaction Maintenance](../iNOMADS/Transaction%20Maintenance.md)**. You can modify the _Starting Directory_ , _Call Start_UP before running_ and _Security Info_ settings to suit your needs.

> These settings are defined as follows:

_Transaction_ |  Unique name for the transaction. This transaction ID is needed for the URL to launch iNomads.  
---|---  
_Panel/Program_ |  Use the standard PxPlus Web IDE program, **launcher**.  
_Panel Library_ |  Use the standard PxPlus Web IDE panel library, ***ide/ide.en**.  
_Starting Directory_ |  Enter the starting directory. If there will be multiple users and the _Requires Logon_ check box is selected, this directory must be where the user security files are located. For information on defining security classifications and users, see **[Security Manager](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Overview.md)**.  
_Call Start_UP before running_ |  Select this check box, if desired.  
_Template_ |  Use the standard PxPlus Web IDE template, **ide2020** , or create your own template by using the **[Template Designer Wizard](../iNOMADS/Template%20Designer%20Wizard.md)**.  
_Security Info_ |  |  _Requires Logon_ |  Select this check box to require users to enter a User ID and Password to log on to the Web IDE. To use this option, user security must be set up by using the **[Security Manager](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Overview.md)**.  
---|---  
_Password_ |  **_(Optional)_** If a password is entered, users will be required to enter this additional password to log on to the Web IDE if user security is set up. If user security is not set up, this will be the only password that users will need to enter to log on to the Web IDE.  
_On Exit URL_ |  This can contain the URL to a Web page that will display when the transaction completes, or it may contain the word _Close_ , in which case the system will attempt to close the browser window.

#### **Note:**  
Some browsers will not allow the main browser window to be closed.  
  
The first time that each user launches the PxPlus Web IDE, a "Default" project will be created for that user.

The directory associated with the Default project will be the location of the PxPlus installation. If the _Security_ task on the IDE launcher will be used to define **[Security Classifications](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Defining%20Classifications.md)** and **[Users](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Assigning%20Users%20to%20Classifications.md)**, it is important that the IDE project points to the correct directory because the security files will be created in that location.

If the location of the Web IDE is different from the location of the PxPlus installation, you should either create another project with the correct directory by selecting the IDE _New Project_ button **_or_** change the Default project directory to point to the correct location (i.e. the _Starting Directory_ used for the Web IDE transaction).

**_Launching the Web IDE with a URL_**

Once the iNomads Web IDE transaction is defined and a Web server (either **[EZWeb Server](../EZWebServer/EZweb%20Introduction.md)** or **[Apache](../apache.md)**) is running, the Web IDE can be launched by entering the following URL into any browser:

> http(s)://_servername_ :_port_ /inomads?txid=_id_

**_Where:_**

|  _servername_ __|  Name of the Web server (e.g. abcserver).  
---|---|---  
|  _port_ |  Port number running the Web server (e.g. 8080).  
|  _id_ |  Name of the iNomads Web IDE transaction (e.g. webide).  
  
**_Example:_**

> http(s)://abcserver:8080/inomads?txid=webide

## See Also

**[IDE Main Launcher (Windows)](IDE%20Main%20Launcher.md)**  
**[Task Definition](IDE%20Main%20Launcher.htm#taskdefinition)**  
**[Menu Maintenance](IDE%20Main%20Launcher.htm#menumaint)**
