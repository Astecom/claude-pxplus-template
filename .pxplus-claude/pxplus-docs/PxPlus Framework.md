# 

**PxPlus Application Framework**|   
---|---  
  
The **PxPlus Framework** , available as of PxPlus 2018, consists of tools, utilities and programs that are designed to assist developers in developing new or enhancing existing business applications. The framework is installed by running the installation utility provided with PxPlus 2018, which automatically sets up the data dictionary, adds the framework tables, and merges the Navigation system with an existing menu system, if applicable.

For information on installing and running the framework installation utility, see **[Framework Installer](PxPlus%20Framework.htm#installer)**.

#### **Note:**  
The framework requires a PxPlus Professional license.

The framework includes the following components that are designed to work together with existing logic or as the basis for a new application:

**Navigation/Menu System** |  The framework includes a task-based Navigation system that provides the capability to control the tasks to which specific users will have access based on their security. Tasks can include launching programs, system functions or reports. The Navigation system also includes options to control the effective run dates within the applications on a workstation by workstation basis. Task tracking is available with optional logging of which users ran which transactions at what time and on which workstation. Chat functionality is provided to allow authorized users to exchange messages and supervisory personnel to issue system wide broadcast messages.  
---|---  
**Basic Application Structural Components** |  The framework can be easily incorporated into either a single or multi-company environment with customization of the display based on the company preferences (i.e. colors and themes settings and the handling of user input options such as tabbing within grid cells, query styles and other NOMADS design elements). The framework also includes logic for breaking down the application into sub-systems such as Accounting, Payroll or General Ledger. This sub-system structure can then be used by the system security components to control which users have access to which tasks by company and by sub-system.  
**Internal Infrastructure Components** |  The framework provides tools for maintaining the infrastructure (i.e. parameters, code tables, messages, etc.) by including parameters by workstation, user and company, as well as system-wide. Additional modules provide access to tools designed for international systems with support for country tables and currency conversion routines.  
**Development Components** |  The framework provides developers with a variety of tools that make development easier: |  Enhanced data classes that provide automatic input validation  
---  
Loading of drop boxes  
Improved data formatting  
Segmented data entry  
Direct access to on-the-fly data entry for missing and new data elements  
Grid tools to allow for the automatic loading, validation and formatting of columns and cells within the grid  
Components that are designed to simplify the creation of header and detail maintenance routines such as invoice header and lines  
Built-in support for secondary extended grid entry  
**Documentation System** |  The framework provides a PxPlus Wiki-based documentation component that is pre-loaded with documentation pertaining to the framework, its various modules, their functions and properties. The Wiki is designed to be run locally or on the Web with built-in interfaces to the Navigation system. See **[PxPlus Wiki System](PxPlus%20Framework.htm#pxpluswiki)**.  
  
##  PxPlus Wiki System

The PxPlus framework includes a Wiki-style documentation system that is used not only by the framework launcher to provide application documentation but can also be used stand-alone to document your application, as well as your programs, files and NOMADS panel libraries. See **[Running the Wiki Stand-Alone](PxPlus%20Framework.htm#standalone)**.

The actual documentation text is maintained and formatted using Wiki-style encoding. This encoding makes it easy to migrate the documentation to new formats and apply system-wide changes to the look of the documentation by tailoring the style sheets (CSS) within the Wiki system.

**_Manual Launch of the Wiki_**

The Wiki is automatically launched by the framework Navigation system. It can also be launched in your current directory by executing the following command:

> **CALL "*FW/Launcher;Wiki"** ,_portno_

**_Where:_**

_portno_ is the port on which you want the Wiki to respond. If a _portno_ is not provided, port 80 is used.

Once it is launched, you can get to the Wiki using the following URL:

> **http://localhost:**_portno_**/pxpwiki**

**_Where:_**

_portno_ is the port number you specified on the CALL to launch the Wiki. It can be omitted if port 80 _(default)_ was used.

##  Framework Installer

The PxPlus framework can be installed in a new directory as the basis of a new application or on top of existing application. The installer program ***FW/Install** is used to install the framework and perform the various steps required to update your system:

> **RUN "*FW/Install"**

**_Before running the installer_** , make sure you are in the desired directory and have set up any prefixes and the basic directory structure to be used. For example, if you want all data files in a sub-directory called _Data_ and programs in a directory called _Prog_ , you should first create these directories and make sure your PREFIX settings are correct before running the installer.

The installer does the following:

  * Creates the data dictionary files if not present (_providex.dde_ _, providex.ddf, providex.dcl_).
  * Copies the standard **FW__xxx_** table definitions into the dictionary. Physical files with the same name as the table name (in lowercase) will be created.
  * Creates/updates the Menu Tasks provided by the framework. The system will **_not_** overwrite any task definitions you may have changed.
  * Updates all the print button controls to the new Task records.
  * Creates any new global variable settings required.
  * Creates any new sub-systems required by the framework.
  * Merges/creates the country and currency tables.



Once the install is complete, you can run the framework menu program ***FW/Menu** to launch the Navigation system as follows:

> **RUN "*FW/Menu"**

**_Changing the Path Name of Tables_**

You can change the physical path name of any table using the standard NOMADS **[Data Dictionary Maintenance](Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** utilities.

#### **Note:**  
If the path name is changed, make sure you move/copy the original physical files contents as set up by the installer to the new file location.

**_Removing the Framework_**

The ***FW/Install** program has a secondary entry point that can be used to remove the framework from the current directory.

To remove the framework, you can run the installer from the **Remove** entry point as follows:

> **RUN "*FW/Install;Remove"**

This will remove all the framework tables from the data dictionary and delete the framework files.

#### **Warning!**  
**_This is a full and permanent removal. Any changes you made to the menu structures, control files or Wiki will be lost._**  
  
To avoid accidental erasure, a warning message will display to confirm your desire to delete the framework.

**_Running the Wiki Stand-Alone_**

The Wiki documentation system can be run stand-alone using **[EZWeb Server](EZWebServer/EZweb%20Introduction.md)**. This will allow you to view various program and file data structures on your system.

To launch the Wiki stand-alone, run the following command from within the directory you want to browse:

> **CALL "*FW/Launcher;Wiki_Only"** ,  _port_

**_Where:_**

_port_ is the optional port number to be used. This will be set to 80 by default.

Once it is launched, you can then view your directory by navigating to _http://localhost/services/pxpwiki.pxp_.

#### **Note:**  
If you have multiple programmers in your development area, you might want to launch this on a separate server so that all users can have access to the information.

## User Security/Classifications

The framework supports three levels of security controlled by user classes/types and the system default classification, which can be set in the system configuration.

The three levels of security are _Admin_ , _Editor_ and _Reader_ :

_Admin_ |  As supplied, the default class is set to _Admin_ and security is disabled, allowing all users to edit/view all pages. No user logon is required nor is the option to log on displayed. _Admin_ users can make system configuration changes and add/edit/delete users.

#### **Important Note:**  
When security is first enabled, a default User ID of _Admin_ with a password of _Admin_ is set up. Once installed, this User ID should be modified for security purposes.  
  
---|---  
_Editor_ |  Setting the default class to _Editor_ enables basic security, which allows all users to edit pages but not change any system settings. A logon option is provided, which allows privileged users (_Admin_ class) to log on and make system changes.  
_Reader_ |  Setting the default class to _Reader_ enables full security, which allows users to view pages and requires users to log on with a User ID that belongs to the _Editor_ class in order to edit a page.
