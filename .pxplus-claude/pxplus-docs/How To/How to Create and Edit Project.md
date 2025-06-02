# Projects How To Tutorials

**How to Create and Edit a Project**|   
---|---  
  
Projects provide a method for organizing and managing the various tasks and settings used in the development of business applications. Each project requires a working directory and a settings file. The settings file is used to save project settings and the data that defines the project contents.

Each project has its own settings file. The same settings file can be shared with multiple projects. The _Default_ project uses the standard _nomads.ini_ file, which can be shared with other projects.

Various tasks and settings within PxPlus can be saved by project. For a list of the tasks and settings that can be saved, see **[Working with Projects](../PxPlus%20IDE/Introduction%20to%20PxPlus%20IDE.htm#projects)**.

The steps below first show you how to create a new project and then edit the project.

**_How to Create a Project_**

1. |  Invoke the IDE Main Launcher. The IDE Main Launcher can switch between **_enhanced_** or **_standard_** view as desired by clicking the Switch to Enhanced/Standard button (_double arrow_) located beside the _Project_ button.  
---|---  
2. |  Launch the task for creating a new project. This can be done by using one of the following methods: **_Method 1:_** Click the _New Project_ button beside the _Project_ drop box. **_OR_** **_Method 2:_** From the menu bar, select _Projects_ > _Create Project_.  
3. |  The **Create Project** dialog displays.  
4. |  In the _Name_ field, enter a unique name for the new project. For this example, type _Demo One_ and then press the Tab key. If you enter a project name that already exists, a message will display: . If this happens, click _OK_. The **Create Project** window will redisplay. Enter a different project name.  
5. |  The _Directory_ field defaults to the path for the current working directory. When creating any project, this defaults to the directory where PxPlus is installed, but typically this is changed. You can enter a different pathname or select it by clicking the Query (_folder_) button. For this example, this will be changed to point to the directory where the data is stored (e.g. _C:\PVX Plus Technologies\PxPlus 2024\Data_).  
6. |  The _Settings File_ field is automatically populated with the new project _Name_ and the extension _.prj_ , but this can be changed. The settings file is used to save project settings and the data that defines the project contents. Each project has its own settings file. The same settings file can be shared with multiple projects. Project settings files are saved in a location outside of PxPlus to enable them to be usable from release to release. For this example, leave this setting as is (e.g. _demo_one.prj_).  
7. |  The _Title Bar Color_ field shows the _Default_ color, which is Gray, as shown in the sample color square. For this example, change this by clicking the Color Selections (_paint palette_) button. The **Color Selections** window displays. Select Dark Cyan and then click _OK_.  
8. |  The _Title Bar Color_ field shows the selected color. Press the Tab key.  
9. |  The _Prefix File_ field is optional. If desired, you can enter the name of a new or existing prefix file that will contain the prefix file entries defined for the project or click the Query button. If you enter a prefix file that does not exist, it will be created when you click _OK_. For this example, leave this blank. Press the Tab key.

#### **Note:**  
If **[PREFIX FILE](../directives/prefix.htm#Mark10)** is set in START_UP and the corresponding prefix file already exists, it will take precedence over the project's prefix file.  
  
10. |  The _Default Library_ field is optional. For this example, leave this blank, as it will be added later.  
11. |  Click _OK_ to create the new project.  
12. |  The IDE Main Launcher relaunches and shows the following changes: The IDE title bar is now Dark Cyan in color and shows the new project name (e.g. _Demo One_).  
The  _Project_ drop box shows _Demo One_ is the current project.  
  
**_How to Edit a Project_**

These next steps show you how to edit a project. For this example, the _Demo One_ project will be edited.

1. |  Invoke the IDE Main Launcher. The IDE title bar indicates that _Demo One_ is the current project.  
---|---  
2. |  Launch the task for editing an existing project. This can be done by using one of the following methods: **_Method 1:_** From the menu bar, select _Projects_ > _Edit Project_. **_OR_** **_Method 2:_** Click the _Project_ hyperlink.  
3. |  The **Edit Project** dialog displays. The _Project_ field shows _Demo One_ because it is the current project. You can select a different project by clicking the _Project_ drop down arrow. For this example, _Demo One_ is the project to be edited. Leave this setting as is.  
4. |  For this example, the _Name_ , _Directory_ and _Settings File_ fields are not being edited. Leave these settings as is.

#### **Warning!**  
If the _Settings File_ name is changed, the project's current settings will no longer be used.  
  
5. |  The first setting to change is the _Title Bar Color_. Click the Color Selections (_paint palette_) button. The **Color Selections** window displays. Select Light Cyan and then click _OK_.  
6. |  The _Title Bar Color_ field shows the selected color.  
7. |  The second setting to change is the _Default Library_. To set the default library for the project, the library must already exist. For this example, an existing library (_Panels.en_) will be entered. The pathname is _C:\PVX Plus Technologies\PxPlus 2024\Data\Panels.en_. In the _Default Library_ field, enter the pathname or click the Query button. If a library file is entered that does not exist, an **Invalid Library File** message will display: If this happens, click _OK_. The **Edit Project** window redisplays. Enter a valid library file.  
8. |  After completing the changes in the **Edit Project** window, click _OK_.  
9. |  The IDE Main Launcher relaunches and shows the following changes: The IDE title bar color is now Light Cyan.  
The _Project_ drop box shows that the name of the project that was edited (e.g. _Demo One_).  
10. |  To check that the _Default Library_ setting will open the correct library file, expand the _Graphical Application Builder (NOMADS)_ category on the IDE Launcher and then select _Open Project Application Library_.  
11. |  The **Library Object Selection** window opens this project's default library. Notice that the title bar is Light Cyan. This provides a visual cue that you are currently working in the _Demo One_ project.  
  
## See Also

**[IDE Main Launcher (Windows)](../PxPlus%20IDE/IDE%20Main%20Launcher.md)  
[Working with Projects](../PxPlus%20IDE/Introduction%20to%20PxPlus%20IDE.htm#projects)**  
**[How to Copy a Project](How%20to%20Copy%20Project.md)**  
**[How to Delete a Project](How%20to%20Delete%20Project.md)**
