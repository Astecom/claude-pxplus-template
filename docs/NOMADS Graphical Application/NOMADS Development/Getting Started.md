# NOMADS Graphical Application  
  
**NOMADS Development** |  **__**  
---|---  
  
A graphical user interface is a graphical display that contains devices or controls that enable users to perform interactive tasks in an application. Arguably, a well-designed graphical user interface is quite often the most compelling feature of an application, at least from the users' perspective.

One of the more popular aspects of PxPlus is its ability to incorporate a rich variety of graphical components, such as panels (forms), menus, tool bars, buttons, radio buttons, check boxes, list boxes, and scrollbars - just to name a few. The easiest way to design and build PxPlus graphical user interface functionality is to use **NOMADS** , the **N** on-procedural **O** bject **M** odule **A** pplication **D** evelopment **S** ystem.

#### **Important Note:**  
If you are running a version of PxPlus that is higher than your activation, you will not be allowed to process any NOMADS panels due to potential compatibility issues.

**NOMADS** is an easy-to-learn, easy-to-use, programming environment for the development and implementation of PxPlus graphical user interface applications. NOMADS employs a top-down approach that streamlines and simplifies graphical development tasks, optimizes system resources, and saves time.

It provides an interactive, visually oriented framework for creating panels (forms, windows or dialogues), populating them with controls, and then associating logic with these controls. The NOMADS **Development Environment** provides all the tools you need to build these components, which are automatically generated for you in PxPlus using a powerful built-in run-time engine, ***winproc**.

**_Development Environment_**

NOMADS is comprised of a **[Session Manager](Getting%20Started.htm#sessionmgr)** and a **[Design/Development Toolset](Getting%20Started.htm#toolset)** for building graphical user interface components. It provides an efficient, creative environment for:

  * Separating data, logic, presentation text, and images into reusable components.
  * Designing event-driven applications.
  * Localizing and simplifying modifications.
  * Integrating NOMADS-built applications with other types of PxPlus applications.



The system features a common data manager for consistent access to a variety of data files. It also facilitates the conversion from character-based to graphical user interface functionality by allowing you to run graphical and character-based application components concurrently.

**_Graphical User Interface Components_**

NOMADS assembles groups of interrelated components to define the panels, dialogues and windows used in your graphical user interface application. The object definitions for these components are stored in keyed data files called _libraries_. See **[Library Object Selection](Library%20Object%20Selection/Overview.md)**.

#### **Note:**  
The terms _object_ and _control_ are often used interchangeably. In this documentation, an _object_ may refer to _any_ component associated with a graphical user interface application. _Control_ (or _control object_) is reserved only for the graphical elements that have user functionality associated with them (buttons, list boxes, scrollbars, etc.).

**_NOMADS Engine_**

At the heart of NOMADS is a powerful run-time engine, ***winproc** , the central controller that operates in PxPlus behind the scenes. It processes the information stored in library objects _,_ generates graphical user interface components and executes associated event-handling logic.

Your PxPlus application requires a **PROCESS** directive to run NOMADS-based components. At run time, PxPlus converts this statement into a **CALL** to ***winproc** , which then generates the graphical user interface for your PxPlus application. See **[Invoking a Panel from an Application](../Program%20Interaction/Invoking%20a%20Panel%20From%20an%20Application/Overview.md)**.

**_Program Interface_**

There are several ways to incorporate NOMADS graphical user interface components and set up event-handling logic to be processed within your PxPlus application.

A list of reserved **[NOMADS Variables](../Appendix/NOMADS%20Variables/Overview.md)** is available for use in your program. NOMADS components can be managed and controlled through use of the PxPlus Object-Oriented Programming (OOP) interface. Using the PxPlus COM interface allows you to incorporate ready-made (third party) Windows components directly into your NOMADS panels.

See **[Program Interaction](../Program%20Interaction/Introduction.md)**.

##  Design/Development Toolset

NOMADS includes a set of tools and utilities for building graphical components and defining how your graphical user interface will work with your application:

**Tools and Utilities** |  **Description**  
---|---  
**[Library Object Selection](Library%20Object%20Selection/Overview.md)** |  This is your _central console_ for managing library objects once a library file has been selected for editing. It displays a list of the object definitions stored in the library. It is the primary launch point for all of the library object creation tools and maintenance utilities in NOMADS.  
**[Panel Designer](../Panel%20Designer/Introduction.md)** |  The Panel Designer is the primary design interface for developing panels, drawing layouts, and creating various user controls with associated logic and data. It is fully integrated with the PxPlus **[Integrated Toolkit (IT)](../../toolkit1/overview.md)** program editor. All of the details of your graphical user interface components are stored in a library file, which is then processed by ***winproc** at run time. For information on creating the different types of controls that can be added to panels, see **[Creating Panel Controls](../Creating%20Panel%20Controls/Introduction.md)**.  
**[File Maintenance Generator](../Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** |  The File Maintenance Generator automatically generates new NOMADS panels and/or **[Webster+](../../Webster/Webster.md)** HTML pages as file maintenance or inquiry-only panels with built-in editing and browse functionality, based on data files defined in a PxPlus **[Data Dictionary](../../Data%20Dictionary/Introduction.md)**. Options are provided to create a single panel or a panel containing a folder with multiple tabs, to position edit and browse buttons on the panel, to determine whether acknowledgement and confirmation messages are to be displayed, and to determine what update logic should be used. _(The File Maintenance Generator was added in PxPlus 2019.)_  
**[Query Subsystem](../Dictionary-Based%20Development/Query%20Subsystem/Overview.md)** |  The Query Subsystem generates panels that display records from datasets and return a value associated with a record selected by the user. Query datasets can be based on an existing **[Data Dictionary](../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** definition, a **[PxPlus View](../../Views%20System/Introduction.md)**, an ODBC data source, or a manually defined file with no embedded dictionary.  
**[Smart Controls](../Smart%20Controls/Overview.md)** |  Provides developers with the ability to make self-loading controls to display and select the contents of data files or database tables.  
**[Security Manager](../System%20Maintenance%20Tools/Security%20Manager/Overview.md)** |  This feature allows you to control access to panel controls by setting up security classifications to match specific user IDs.  
**[Message Library Maintenance](../Message%20Library%20Maintenance/Overview.md)** |  This utility allows you to create and maintain a set of text messages outside your program code and facilitates supporting multilingual environments.  
**[System Maintenance Tools](../System%20Maintenance%20Tools/Introduction.md)** |  Various tools are available for performing system-level housekeeping and administrative tasks.  
  
##  NOMADS Session Manager

To get started on a graphical user interface development project in NOMADS, invoke the NOMADS Session Manager by running the PxPlus program **"*nomads"**. Run this directly from the PxPlus Command line either by entering **RUN "*nomads"** or by simply entering **nom**. You can also use a shortcut that has been set up for this purpose. During installation, PxPlus for Windows places a **NOMADS** shortcut under the group _PVX Plus Technologies > PxPlus_, which can be accessed via the Windows Start menu.

A NOMADS session begins at the NOMADS Session Manager. All NOMADS development tools, system-level options and utilities, and any existing development projects are accessed initially via the Session Manager window.

The **Session Manager** menu bar consists of the following:

**Library** |  Consists of options for creating, opening, and editing a graphical user interface development project (library) in NOMADS. See **[Opening a Library File](Library%20Object%20Selection/Opening%20a%20Library%20File.md)**.  
---|---  
**Dictionary** |  Consists of options for defining and maintaining file definitions. |  _Maintenance_ |  Invokes **[Data Dictionary Maintenance](../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)**.  
---|---  
_Classes_ |  Invokes **[Data Classifications](../../Data%20Dictionary/Data%20Classes/Overview.md)**.  
_File Link Maintenance_ |  Invokes **[File Link Maintenance](../../Data%20Dictionary/File%20Link%20Maintenance.md)**.  
_Password_ |  Invokes **[Data File Password Utility](../../Data%20Dictionary/Password%20Protection/Overview.md)**.  
_User Reserved Words Maintenance_ |  Invokes **[User Reserved Words Maintenance](../../Reserved%20Words.md)**. _(User Reserved Words Maintenance was added in PxPlus 2020.)_  
**Security** |  Used to set up security based on user IDs and security classes (used to identify the type of user and to control access to the system). See **[Security Manager](../System%20Maintenance%20Tools/Security%20Manager/Overview.md)** _._  
**Options** |  Consists of system-level configuration and maintenance options. See **[System Maintenance Tools](../System%20Maintenance%20Tools/Introduction.md)** _._  
**Help** |  Displays NOMADS version number and copyright information.  
**Utilities** |  Access to various associated PxPlus utilities. |  _System_ |  Invokes **[System Utilities](../../PxPlus%20User%20Guide/Getting%20Started/System%20Utilities/Graphical%20Utilities.md)**.  
---|---  
_Application Parameter Configuration_ |  Invokes **[Application Parameter Configuration](../System%20Maintenance%20Tools/Application%20Parameters.md)**.  
_Views Data Source Definition_ |  Invokes **[Data Source Maintenance](../../Views%20System/Data%20Source%20Maintenance/Overview.md)**.  
_Views Definition_ |  Invokes **[View Maintenance](../../Views%20System/View%20Maintenance/Overview.md)**.  
_Report Writer_ |  Invokes **[Report Designer](../../Report%20Writer/Designing%20a%20Report/Report%20Designer/Overview.md)**.  
_Library Language Translation_ |  Invokes **[Library Language Translator](../Multilingual%20Capabilities/Library%20Language%20Translator/Overview.md)**.  
_CSV File Import_ |  Invokes **[CSV File Import](../../CSV%20File%20Import%20Utility/Introduction.md)**.  
_Chart Image Scheduler_ |  Invokes **[Chart Image Generation Schedule Maintenance](../../Chart%20Images%20Generation/Schedule%20the%20Chart%20Generation.md)**.  
_AutoChart_ _File Maintenance_ |  Invokes **[AutoChart Definition File Maintenance](../../NOMADS%20AutoChart/AutoChart%20Definition%20File%20Maintenance/Overview.md)**.  
_Query Profile Information Maintenance_ |  Invokes **[Query Profile Information Maintenance](../../NOMADS%20Query%20Profile%20Maintenance%20Utility/Introduction.md)**.  
_Panel Conversion Utility_ |  Invokes **[Panel Layout Utility](../../Panel%20Layout%20Utility.md)**.  
_Wizard Creation Wizard_ |  Invokes **[Wizard Creation Wizard](../Wizard%20Creation%20Wizard.md)**.  
_Library Bulk Edit_ |  Invokes **[Library Bulk Edit and Search](Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)**. _(The Library Bulk Edit utility was added in PxPlus 2017 and renamed to Library Bulk Edit and Search in PxPlus 2023 Update 1.)_  
_Calendar_ |  Invokes **[Calendar Control Definition](../System%20Maintenance%20Tools/System%20Options/Calendar.md)**. _(The Calendar utility was added to the Utilities menu in PxPlus 2022.)_  
**Projects** |  Access to project-based tasks. _(The Projects menu was added in PxPlus 2025.)_ |  _Set Project_ |  Launches the **Select Project** dialog for selecting the current project when working within the NOMADS Session Manager. If you select a project and the working directory defined for the project is no longer accessible (e.g. directory was renamed), a message will display, and the current project will automatically be set to the Default project. In that case, edit the project to make the necessary corrections and then set this project again. This dialog consists of the following: |  _Project_ |  Launches the **[Edit Project](../../PxPlus%20IDE/IDE%20Main%20Launcher.htm#editproject)** dialog, which shows information for the current project.  
---|---  
_(Create New Project)_ |  Button (beside _Project_ drop box) launches the **[Create Project](../../PxPlus%20IDE/IDE%20Main%20Launcher.htm#createproject)** dialog for creating a new project.  
_OK_ |  Sets the selected project as the current project. The name of the set project (shown in green below) displays to the right of the menu bar at the top of the NOMADS Session Manager:  
_Exit_ |  Closes the _Set Project_ dialog without saving any changes.  
_Create Project_ |  Launches the **[Create Project](../../PxPlus%20IDE/IDE%20Main%20Launcher.htm#createproject)** dialog for creating a new project.  
_Edit Project_ |  **_(Available only when a project has been set)_** Launches the **[Edit Project](../../PxPlus%20IDE/IDE%20Main%20Launcher.htm#editproject)** dialog for modifying the current project or a different project.  
_Delete Project_ |  **_(Available only when a project has been set)_** Deletes the current project. Prior to deleting, a confirmation message will display.

#### **Note:**  
The _Default_ project **_cannot_** be deleted.  
  
_Copy Project_ |  **_(Available only when a project has been set)_** Launches the **[Copy Project](../../PxPlus%20IDE/IDE%20Main%20Launcher.htm#proj_maint)** dialog (similar to the **Edit Project** dialog) for copying the current project (or a different project) to a new project, including its tasks and settings. Click the _OK_ button to set the new (copied) project as the current project. The name of the set project displays to the right of the menu bar at the top of the NOMADS Session Manager.  
_Open Project Library_ |  **_(Available only when a project has been set)_** This option uses the _Default Library_ file defined for the current project to open **Library Object Selection**. If the current project does not have a _Default Library_ defined, a message will display. To define a _Default Library_ for a project, select _Projects_ > _Edit Project_ from the top menu bar.  
_Project Maintenance_ |  Launches **[Project Maintenance](../../Project%20Maintenance.md)** for organizing and managing tasks for projects.  
**Quit** |  Exits NOMADS.  
  
Development of a graphical user interface application in NOMADS usually begins with the _Library_ option. You can create a new library, select an existing library for editing, as well as compare, merge, and edit object definitions from different libraries.

## See Also

**[Library Object Selection](Library%20Object%20Selection/Overview.md)**  
**[Accessing Library Objects from IDE](Library%20Objects_ide.md)**  
**[Maintaining Library Objects](Maintaining%20Library%20Objects/Overview.md)**
