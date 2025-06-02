# Projects How To Tutorials

**How to Use Projects from the NOMADS Session Manager**|   
---|---  
  
Starting with PxPlus 2025, projects can be used from the **[NOMADS Session Manager](../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)**. This provides another way to access and work with projects besides the **[PxPlus IDE](../PxPlus%20IDE/Introduction%20to%20PxPlus%20IDE.md)**. Projects provide a method for organizing and managing the various tasks and settings used in the development of business applications.

Each project requires a working directory and a settings file. The settings file is used to save project settings and the data that defines the project contents. Each project has its own settings file. The same settings file can be shared with multiple projects. The _Default_ project uses the standard _nomads.ini_ file, which can be shared with other projects.

Various tasks and settings within PxPlus can be saved by project. For information on the tasks and settings that can be saved, see **[Working with Projects](../PxPlus%20IDE/Introduction%20to%20PxPlus%20IDE.htm#projects)**.

## How to Set a Project

These steps show you how to set a project from the **NOMADS Session Manager**.

1. |  From the PxPlus Command line, enter **nom** to invoke the **NOMADS Session Manager**.  
---|---  
2. |  The **NOMADS Session Manager** displays. The blank space to the right of the menu bar indicates that no project has been set. From the menu bar, select _Projects_ > _Set Project_.  
3. |  The **Select Project** dialog displays.  
4. |  From the _Project_ drop box, select the project. Click _OK_ to set the project.  
5. |  The selected project (i.e. _Demo_) displays to the right of the menu bar, indicating that this project has been set.  
6. |  Setting a project also sets the current directory, which will be used as the working directory for the project. To view the current directory, select _Options_ > _Change Directory_ from the menu bar. Tasks are launched in the proper working environment based on the working directory for the project.  
  
## How to Create a Project

These steps show you how to create a project from the **NOMADS Session Manager**.

1. |  In the **NOMADS Session Manager** , a new project can be created by using one of the following methods: **_Method 1:_** From the menu bar, select _Projects_ > _Set Project_. The **Select Project** dialog displays. To create a new project, click the button to the right of the drop box. **_OR_** **_Method 2:_** From the menu bar, select _Projects_ > _Create Project_.  
---|---  
2. |  The **Create Project** dialog displays.  
3. |  Enter the details for the new project. See **[How to Create a Project](How%20to%20Create%20and%20Edit%20Project.htm#createproject)**.  
4\.  |  Click _OK_ to create the new project.  
  
In the **NOMADS Session Manager** , the _Project_ menu consists of the following additional tasks:

_Edit Project_ |  Displays the **Edit Project** dialog for modifying the project information. See **[How to Edit a Project](How%20to%20Create%20and%20Edit%20Project.htm#editproject)**.  
---|---  
_Delete Project_ |  Displays a message that asks you to confirm that you want to delete the current project. See **[How to Delete Project](How%20to%20Delete%20Project.htm#deletemsg)**.  
_Copy Project_ |  Displays the **Copy Project** dialog for copying an existing project to a new project. See **[How to Copy a Project](How%20to%20Copy%20Project.htm#copyproject)**.  
_Open Project Library_ |  This task opens **Library Object Selection** for the _Default Library_ defined for the current project. A default project library is useful when you are often working with the same library. If no default library was defined, a message will display.  
_Project Maintenance_ |  Displays the **[Project Maintenance](../Project%20Maintenance.md)** dialog for adding various types of tasks to the selected project.  
  
## See Also

**[Working with Projects](../PxPlus%20IDE/Introduction%20to%20PxPlus%20IDE.htm#projects)  
[IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.htm#projects)  
[Adding Tasks to Projects from Other Locations](../PxPlus%20IDE/Adding%20Tasks%20to%20Projects%20from%20Other%20Locations.md)**
