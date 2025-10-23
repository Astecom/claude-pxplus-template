# 

**PxPlus IDE** |  **_Integrated Development Environment_**  
---|---  
  
The **PxPlus IDE** (**I** ntegrated **D** evelopment **E** nvironment) is a project-based development environment that combines all the features of PxPlus and presents them in a modern interface. It is designed to provide application developers with convenient accessibility to all the development, installation and setup tools available in the PxPlus Development Suite.

The PxPlus IDE can be accessed from a Windows platform and from a Web browser. When PxPlus is installed, two new **_shortcuts_** are created:

|  **_PxPlus IDE  
PxPlus Web IDE_** |  Launches PxPlus IDE on a **_Windows_** platform. See **[IDE Main Launcher (Windows)](IDE%20Main%20Launcher.md)**.  
Launches PxPlus IDE from a **_Web_** browser. See **[IDE Main Launcher (Web)](IDE%20Main%20Launcher_Web.md)**.  
---|---|---  
  
The PxPlus IDE Main Launcher includes the following:

  * _Menu_ , _History_ and _Project_ buttons for selecting what tasks to display in the list
  * IDE toolbar customization
  * HTML folder tab customization
  * Integrated Help display
  * Enhanced or Standard view



##  Working with Projects

Projects provide a method for organizing and managing the various tasks and settings used in the development of business applications. Each project requires a working directory and a settings file. The settings file is used to save project settings and the data that defines the project contents. Projects can be defined with an optional title bar color to help identify individual projects. The **[Projects](IDE%20Main%20Launcher.htm#projects)** menu on the IDE menu bar provides options for creating and maintaining projects.

Projects can also be used when working in the **[NOMADS Session Manager](../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)**, which is invoked by entering **nom** from the PxPlus Command line. See **[How to Use Projects from the NOMADS Session Manager](../How%20To/How%20to%20Use%20Projects%20Nom%20Session%20Mgr.md)**.

_(Support for using projects from the NOMADS Session Manager was added in PxPlus 2025.)_

Each project has its own settings file. The same settings file can be shared with multiple projects. The _Default_ project uses the standard _nomads.ini_ file, which can be shared with other projects. Project settings files are saved in a location outside of PxPlus to enable them to be usable from release to release. Projects are used by the PxPlus IDE and are also accessible from the **[*IT - Integrated Toolkit](../toolkit1/overview.md)**.

Various tasks and settings within PxPlus can be saved by project. To add tasks to projects, see **[Project Maintenance](../Project%20Maintenance.md)** and **[Adding Tasks to Projects from Other Locations](Adding%20Tasks%20to%20Projects%20from%20Other%20Locations.md)**.

The tasks that can be saved by project include:

  * NOMADS **[Library Objects](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.htm#objectlist)** (i.e. Windows, Dialogues, Popup Menus, Queries)
  * Programs
  * **[Report Writer](../Report%20Writer/Introduction.md)** Reports
  * Data Files
  * **[Data Dictionary](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** entries
  * **[File Maintenance](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** HTML Pages



The settings that can be saved by project include:

  * **[IDE Main Launcher](IDE%20Main%20Launcher.md)** settings (i.e. IDE Ribbon Toolbar, HTML Folders, History and Project items, Enhanced/Standard view)
  * NOMADS **[Library Object Selection](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** settings
  * NOMADS **[Panel Designer](../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** settings
  * **[IT - Integrated Toolkit](../toolkit1/overview.md)** settings
  * **[Ed+ Program Editor](../Ed%20Program%20Editor.md)** settings
  * **[HTML Editor](../HTML%20Editor.md)** settings
  * **[Report Designer](../Report%20Writer/Designing%20a%20Report/Report%20Designer/Overview.md)** settings
  * Port Number used for each of the following:  
**[EZWeb Server](../EZWebServer/EZweb%20Introduction.htm#Mark1)**  
**[Webster+ Installation](../Webster/Webster%20Setup.htm#installation)**
  * Database information for each of the following:  
**[Bulk Database Export Utility](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Bulk%20Database%20Export.md)**  
**[Database Import Utility](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Database%20Import.md)**



Ed+ and HTML Editor settings on the **[Web](IDE%20Main%20Launcher_Web.htm#webide)** are stored in the browser and not by project.

Tasks are launched in the proper working environment based on the working directory for the project. If present, the Start_up program in the working directory will be run prior to launching each task.

Tasks can be project-related or non-project and are driven by the **[Task](IDE%20Main%20Launcher.htm#taskdefinition)** and **[Menu](IDE%20Main%20Launcher.htm#menumaint)** tables. Designating a task as project related is controlled by the _Project Related?_ check box option on the **Task Definition** dialog. All project-related tasks must be associated with a project.

_(The ability to save tasks and settings by project was added in PxPlus 2023.)  
(The ability to save Bulk Database Export and Database Import information by project was added in PxPlus 2023 Update 1.)_
