# Webster+

**Webster+ Setup and Configuration**|   
---|---  
  
Webster+ can be run in a variety of environments using the **[Apache](../apache.md)** Web server, the PxPlus **[EZWeb Server](../EZWebServer/EZweb%20Introduction.md)** or **[IIS](Webster%20Setup.htm#iis_setup)**. It is included with the PxPlus Web bundle and provides not only the logic to generate dynamic Web pages but also a security system, file upload/download utilities, email and SMS interfaces, a menu system, as well as a variety of setup/configuration tools.

## Basic Webster+ Environment Setup

While you can install and setup Webster+ a number of ways, the key, however, is the **_webster.pxp_** program, which is used as the root program of all Webster+ processing. A basic _webster.pxp_ program is provided in the system ***webster** directory (*webster/webster.pxp).

This program is invoked by all Webster+ requests and is responsible for establishing the Webster+ environment, such as global variables and any other settings you may require.

The default **_webster.pxp_** is as follows:

> ! Generic server module for *obj/webster binder  
>  ! Modify this for setting global variables and any webster initialization you want  
>  ! As of PxPlus 2021 (v19), prefixes should be set in start_up.web in order to  
>  ! handle the Wiki interface  
>  !  
>  ! Then run "*webster/webster"  
>  !  
>  RUN "*webster/webster"

The **_start_up.web_** program defines the location of the data files, pages and programs through the use of the **[PREFIX](../directives/prefix.md)** directive.

The default **_start_up.web_** is as follows:

> ! Standard start_up for Webster -- sets the prefix rules  
>  ! Setting the prefix here allows the WIKI system to use the same search rules  
>  !  
>  PREFIX "../data/ ../pages/"  
>  PREFIX PROGRAM "../prog/"

#### **Important Note:**  
For security purposes, it is best to have the **docroot** directory empty except for the **_webster.pxp_** and **_start_up.web_** program, which uses the **PREFIX** directive to point at your data, program and HTML pages.  
  
Make sure that you do **_not_** use subordinate directories, as these would potentially be accessible to remote access.

Typically and in keeping with the default setup, it is recommended that you create a directory on your system with four sub-directories as follows:

**Sub-Directory** |  **Description**  
---|---  
_data_ |  This directory will contain your data files.  
_docroot_ |  This is your default home directory where you will place _*webster.pxp_.  
_pages_ |  This directory will contain your HTML pages.  
_prog_ |  This directory will contain your Webster+ application programs.  
  
If you want to use Webster+ to access existing application programs and data, you will need to change the prefix rules according to your existing application setup. It is **_strongly_** recommended that you do **_not_** have any files/directories below the Webster+ home/starting directory as these may be subject to remote direct access.

##  Server Install Utility

To simplify the setup of Webster+, an install program, **"*webster/install"** , is provided to guide you through your setup. After you have entered the necessary details, the install program will create a basic Webster+ install directory, along with the files you need to configure/run EZWeb or Apache.

Before running the install program, you will need to know the following:

1. |  The directory in which you want to create the Webster+ setup (**_docroot_** will be created as a sub-directory of this directory).  
---|---  
2. |  Which Web server you will be using (_Apache_ or _EZWeb_).  
3. |  Which Port number you want to use (HTTP Port 80, HTTPS Port 443, or other).  
4. |  If using an SSL/TLS secure connection and EZWeb, you will need the pathname to your PEM file.  
  
If using Apache, you will need to configure your Apache Web server accordingly.  
  
This utility will set up the directory, and if using Apache, it will create the configuration files required. If using EZWeb, on Windows, it will create a desktop short cut to launch EZWeb. On UNIX\Linux, it will create a script file, which can be used to start EZWeb.

##  Installing Webster+

Once you have the information needed for your setup (see **[Server Install Utility](Webster%20Setup.htm#install_utility)**), you can run the install program by using one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Web Deployment_ category and select _Install Webster+._ See **[Installing from the IDE Main Launcher](Webster%20Setup.htm#ide_launcher)**.  
From the PxPlus Command window |  Enter: **run "*webster/install"** See **[Installing from the Command Line](Webster%20Setup.htm#command_line)**.  
  
_Installing from the IDE Main Launcher_

The Webster+ Install Assistant is used to enter the details for your desired Webster+ setup.

_(The Webster+ Install Assistant was added in PxPlus 2023.)_

This window consists of the following:

_Install Path_ |  Enter the pathname of a new or existing directory in which you want to run your Webster+ website or use the Directory Browse button. If an existing directory is specified but it is not empty, a message will display.  
---|---  
_Port_ |  Enter the Port number to use. If the Port is currently in use, a message will display.  
_Web Server_ |  Select which Web server you want to use: **[EZWeb](Webster%20Setup.htm#install_ezweb)** or **[Apache](Webster%20Setup.htm#install_apache)**. (**_Default_** is _EZWeb_.)  
_SSL/TLS PEM File Path_ |  **_(Available when EZWeb is selected)_** **_(Optional)_** If using SSL/TLS, enter the pathname to the PEM file with your site certificates or use the File Query button.  
_Domain Name_ |  **_(Available when Apache is selected)_** Enter the domain name to use (e.g. computer.example.com).  
_Install_ |  **_(Available when an Install Path is entered)_** Starts the Webster+ installation. **_If using_**** _EZWeb_ _:_** The system creates the directory structure that you require and includes your SSL/TLS PEM file (if applicable). It copies the baseline _webster.pxp_ program to the **_docroot_** sub-directory. When the Webster+ installation is completed, a message displays: This message lets you know: |  |  A new desktop short cut has been created. It is used to launch EZWeb on the specified Port.  
---|---  
|  The pathname of your new **_pages_** sub-directory needs to be specified as the target location for your Webster+ generated HTML forms. To do this, select the **[Define Webster+ Pages Directory](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Menu%20Options.htm#webster)** option on the _Webster+_ menu in NOMADS Library Object Selection.  
  
**_If using Apache:_**

The system defines the Apache Server Name using the _Domain Name_. The system creates the directory structure that you require. It copies the baseline _webster.pxp_ program to the **_docroot_** sub-directory.

When the Webster+ installation is completed, a message displays:

This message lets you know:

|  The new cgi script file **_pxp.cgi_** needs to be copied to your **_cgi-bin_** directory.  
---|---  
|  The new **_webster_xxxx.conf_** file needs to be reviewed. It contains information to be added to your existing Apache configuration.  
|  The pathname of your new **_pages_** sub-directory needs to be specified as the target location for your Webster+ generated HTML forms. To do this, select the **[Define Webster+ Pages Directory](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Menu%20Options.htm#webster)** option on the _Webster+_ menu in NOMADS Library Object Selection.  
  
For additional information on Apache configuration, see **[Apache Setup](Webster%20Setup.htm#setup_apache)**.  
  
_Cancel_ |  Closes the **Webster+ Install Assistant** without installing Webster+.  
  
_Installing from the Command Line_

The install program will ask a series of questions regarding your desired setup. Most of the questions have default answers. If you make a mistake, press the F3 key to go back one question. If you want to exit, press the F4 key.

The first question asks for the name of the target directory in which you want to run your Webster+ website. This directory will contain the **_docroot_** sub-directory in which your site will run. If the directory already exists, you will be asked to confirm that the directory name is correct.

#### Name of directory where you want docroot to be created: **C:\somedir\webster**  
This directory already exists. Use it anyway? (Y/N): **Y**

The system then asks for the Port number to use for Webster+. If the Port is currently in use, you will be asked to confirm that the Port number is correct. For standard HTTP sites, this would normally be Port 80.

#### Port number to use for Webster+: **8888**  
Checking to see if active

You then need to select which Web server you want to use, _EZWeb_ or _Apache_.

#### Which Web server are you going to use? (1=Ezweb, 2=Apache): **1**

_EZWeb Setup_

If you selected EZWeb, the system will now create the directory structure you require and allow you to define your SSL/TLS certificate file.

#### Setting up Webster.  
Creating sub-directories..  
Copying baseline webster.pxp to docroot.  
If using SSL/TLS, what is the pathname to the PEM file with your site certificates?  
Short cut 'Webster on 8888' has been created on your desktop.  
  
Make sure to specify 'C:\somedir\webster\pages' as your Webster+  
generated HTML forms target location.  
.. setup complete.

To specify your Webster+ generated HTML forms target location, select the **[Define Webster+ Pages Directory](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Menu%20Options.htm#webster)** option on the _Webster+_ menu in NOMADS Library Object Selection.

_Apache Setup_

If you selected Apache, the system will need to know your site domain name so that the Apache Server Name can be defined.

#### Setting up Webster.  
Creating sub-directories..  
Copying baseline webster.pxp to docroot.  
What domain name do you want to use? **computer.example.com**  
Created C:\somedir\webster\pxp.cgi cgi script. Please copy to your cgi-bin directory.  
Created C:\somedir\webster\webster_8888.conf with Apache configuration -- please review.  
Add or include the lines in the above file to your existing Apache configuration.  
  
Make sure to specify 'C:\somedir\webster\pages' as your Webster+  
generated HTML forms target location.  
.. setup complete.

To specify your Webster+ generated HTML forms target location, select the **[Define Webster+ Pages Directory](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Menu%20Options.htm#webster)** option on the _Webster+_ menu in NOMADS Library Object Selection.

Due to the potential differences between different versions of Apache, be sure to review the output file before copying to your Apache server. In particular, the **_webster_xxxx.conf_** file has two different options depending on the version of Apache you are running:

_Extract from webster_xxxx.conf File:_

  
  
  
  
(   
  
(   
(   
  
|  <Directory "C:/somedir/webster">  
Options FollowSymLinks  
AllowOverride None  
# Use line below for Apache 2.4 and later  
Require all granted  
# Use next 2 lines below for Apache 2.2 and earlier  
# Order allow,deny  
# Allow from all  
# --   
</Directory>  
---|---  
  
_If using Apache 2.2 or earlier_ , insert a **#** in front of the "Require all granted" lines and remove the **#** from the "Order allow,deny" and "Allow from all" lines.

## Running Webster+

To start EZWeb, you can either run the icon or select the _Launch Webster+ Using EZWeb_ task from the _Web Deployment_ category on the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)**.

If you start EZWeb by running the icon, you have to connect via a browser. This would be, for your local machine, browsing to the URL **http://127.0.0.1:_pppp_ /** where _pppp_ is the Port number. By default, EZWeb and the Apache configuration are set to run **webster.pxp** ; thus, the URL is in effect **http://127.0.0.1:_pppp_ /webster.pxp**.

If you select the _Launch Webster+ Using EZWeb_ task on the PxPlus IDE Main Launcher, the **Launch EZWeb Server** window will open. Enter the Port number where Webster+ is installed. This number is reflected immediately on the _Launch Webster+ on port_ button. Select the _Save_ button to save this Port number as the default for the current project. To launch Webster+ on the Port specified, select the _Launch Webster+ on port_ button. A message notifies you that EZWeb has started, and following that, a browser window will launch.

#### **Important Note:**  
The **Launch EZWeb Server** window will display only if the current project's directory includes a Webster+ installation; otherwise, a message will display.

By default, the system will display the Webster+ default page ***default** (file *webster/default.html). However, you can include various parameters in the URL to control which page or program to run, along with the values to pass into the process. These parameters can be placed following a _question mark_ (**?**) after the URL and will consist of a series of _variable=value_ pairs with each pair separated by an _ampersand_ (**&**) as per standard HTML URL formatting, as in the following example:

_Example:_

> http://127.0.0.1/webster.pxp?pg$=clientmnt&client$=12456

This example will display the page clientmnt, having passed it the value of 123456 in the variable client$.

Webster+ itself recognizes and processes a few specific variables that can be included in the URL:

**Variable** |  **Description**  
---|---  
**pg$** |  Name of the page to display.  
**tx$** |  Name of the program to run. Optionally, this can be suffixed by the event to pass to the program with a _colon_ as in **prog01:newRecord** , which would run program **prog01** , passing it the _event$ of **"newRecord"**.  
**_prog$** |  Name of the program to run.  
**_event$** |  Event to pass the program identified by the **___**_prog_ _$_ (or _tx_ _$_) value mentioned above. Optionally, the __event$_ value can include (and will override) the name of the program, the actual event, and the page to display by separating these values with an _at sign_ (**@**), as in the following example: **_Example:_** _event$=prog01@newRecord@product This example will load __prog$_ with **"prog01"** , __event$_ with **"newRecord"** and set _pg_ _$_ to **"product"**.  
**_link** |  If set to non-zero (i.e. _link=1) and using a file maintenance generated page, this will cause the page to act as if the user called up a record. Generally used for drill down/query operations when the record key values are included in the URL.  
  
If a page is specified with no program, the page's HTML file will be passed to the Webster+ binding logic and the result displayed.

#### **Note:**  
Pages or program names that start with an _asterisk_ (*****) indicate system pages/programs. The system will first look to see if there is a user override with a leading _underscore_ ( **_** ) present in the application directory structure.  
  
**_Example:_**  
  
pg$=*default will look first to see if there is a file "_default.html" present in the application and, if so, will use it instead of the page *webster/default.html.

##  IIS Setup for Webster+

To install and run Webster+ using an IIS server, you must define both the Webster+ and its document root, along with a CGI handler for the **_.pxp_** suffix. This can be done by running the IIS Manager.

_Define the Site_

The first step is to run the IIS Manager, select your machine from the **Connections** plane on the left side, and then expand to **Sites**. You can then select _Add Website_ from the **Actions** plane on the right side. The **Add Website** window is displayed:

> Enter a _Site name_ to identify the site and then provide the _Physical path_ to the _docroot_ directory.

Select the _Type_ of binding (_http_ or _https_) and enter the _Port_ number.

Enter the Web _Host name_ , which is the domain name that the user will use to access your site.

You will likely also need to set the _Connect as_ to define the user name and security settings you want to use when running your Webster+ application.

Click the _OK_ button to have the site created. It will start immediately unless you uncheck the _Start Website immediately_ check box near the bottom of the page.

_Define the CGI Handler_

You also need to define the CGI handler for your site. Select the site you just added from the _Connections_ plane on the left side:

> This should display the various options and configuration settings for your site. Under the IIS section, you should see _Handler Mappings_. Double click on this to display the current mappings that are applied by default:

> On the _Actions_ plane on the right side, select _Add Script Map_. The _Add Script Map_ window is displayed:

> In this window, you need to specify the _Request path_ of ***.pxp** , the _Executable_ command to launch PxPlus, and a _Name_ for the handler.

The _Executable_ command line will need to be something like the following (you will need to adjust it based on the location of your PxPlus installation):

> "C:\PVX Plus Technologies\PxPlus 2021\pxplus.exe" -bkg *plus/apache/pxp_cgi -arg debug

Click the _OK_ button to create this CGI handler for your website.

Once the site has been defined, you should be able to start the site and connect.

_(Support for IIS Setup for Webster+ was added in PxPlus 2022.)_

## System Configuration

Webster+ will provide a default landing page (*webster/pages/default.html) as shown below:

> This default page can be changed by providing a "_default.html" page in your application (generally in _pages/_default.html_ if using the typical directory layout).

Clicking the _Setup_ option shown on the left side will bring up the System Configuration page:

> By using the toolbar across the top of the screen, you can select the various Webster+ configuration utilities:

**Menu Selection** |  **Description**  
---|---  
**[Config](General%20Configuration.md)** |  This utility allows you to configure the site information (i.e. name, etc.), colors, custom CSS, and security settings. In addition, you can configure the Email server and SMS server that the site will use.  
**[Users](User%20Maintenance.md)** |  This utility allows you to add, edit and delete users on the system.  
**[Groups](Group%20Maintenance.md)** |  This utility allows you to define the various security groups on the system and the hierarchy of those groups.  
**[Security](Security%20Maintenance.md)** |  This utility allows you to control which page, program or report that specific groups of users can run.  
**[Links](Sidebar%20Links%20Maintenance.md)** |  This utility allows you to define the links that will appear on the left sidebar when using the default template.  
**[Menus](Menu%20Maintenance.md)** |  This utility can be used to edit/define menus for use throughout the system.  
**[Messages](Message%20Library%20Maintenance.md)** |  This utility allows you to create and maintain message libraries to be used within Webster+.  
  
## See Also

**[Webster+ Inspector](Inspector.md)**
