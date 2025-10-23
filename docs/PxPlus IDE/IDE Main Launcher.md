# PxPlus IDE (Integrated Development Environment)

**IDE Main Launcher (Windows)** |  **__**  
---|---  
  
When launched from a **_Windows_** platform, the IDE Main Launcher presents all the PxPlus development tools, installation and setup components in a tree-like format with expandable/collapsible nodes. Expanding a "parent" node (e.g. _Data Management_) displays a list of different tasks that are available under that category. Tasks are launched one task at a time; however, you can launch multiple tasks.

As of PxPlus 2020, the IDE Main Launcher was enhanced with Web capability and streamlined access to _Menu_ , _History_ and _Project_ tasks. The ribbon toolbar can be customized with up to 10 buttons for launching commonly used tasks. This is done by using the drag-and-drop method or by right clicking on a selected task in the _Menu_ list. Web pages (up to 10) can be added so that frequently used Web sites are just a single click away. A _Find_ button is provided for entering specific text to search for in a displayed Web page. The IDE Main Launcher includes maintenance utilities for managing ribbon toolbar buttons and Web page tabs. A single button switches the Main Launcher to the standard IDE view, which does not include Web capability.

A ** _Web_** version of the PxPlus IDE Main Launcher is also available that provides easy access to many of these PxPlus development and setup tools. See **[IDE Main Launcher (Web)](IDE%20Main%20Launcher_Web.md)**.

_(The Windows version of PxPlus IDE was added in PxPlus 2014.)  
(The Web version of PxPlus IDE was added in PxPlus 2016.)  
(The Find button was added in PxPlus 2021 Update 2.)_

#### **Important Note:**  
If you are running a version of PxPlus that is higher than your activation, you will not be allowed to process any NOMADS panels due to potential compatibility issues.

|  **_  
Enhanced View_** |    
**_Standard View_**  
---|---|---  
  
#### **Note:**  
When you update your system with subsequent versions of PxPlus, the IDE Main Launcher will reflect any new development tools or utilities that have been added, while keeping intact any tasks you have previously defined.

The IDE Main Launcher can switch between **_enhanced_** or **_standard_** view as desired by clicking the Switch to Enhanced/Standard button (_double arrow_) located beside the _Project_ button. However, the IDE ribbon toolbar and HTML folder tabs are available in the _enhanced view_ only. If an Internet connection is not available, the IDE Main Launcher will display in _standard view_ only.

Only one instance of the IDE Main Launcher can be displayed at a time. The size and location of the IDE Main Launcher persist when the dialog is closed so that these remain the same the next time the dialog is opened.

##  IDE Header

The IDE title bar displays the PxPlus version associated with the IDE Main Launcher (i.e. _PxPlus 2023 IDE_) followed by the name of the current project. If the IDE Main Launcher is running on WindX, the word "WindX" is included in the title (i.e. _PxPlus 2023 IDE WindX)_.

> _(The ability to display "WindX" in the title when applicable was added in PxPlus 2016 Update 0001.)_

**_Menu_**** _Bar_ _Options_**

The menu bar consists of the following options: **[Projects](IDE%20Main%20Launcher.htm#projects)**, **[Menu](IDE%20Main%20Launcher.htm#menu)**, **[Update](IDE%20Main%20Launcher.htm#update)**, **[About](IDE%20Main%20Launcher.htm#about)**, **[Support](IDE%20Main%20Launcher.htm#support)**, **[Online Help](IDE%20Main%20Launcher.htm#onlinehlp)** and **[Release Notes](IDE%20Main%20Launcher.htm#releasenotes)**.

**Projects** |  |  _Create Project_ |  Launches the **Create Project** dialog for creating a new project. See **[Working with Projects](Introduction%20to%20PxPlus%20IDE.htm#projects)**. Alternatively, use the _New Project_ button (beside the _Project_ drop box) to invoke this dialog: This dialog consists of the following: |  _Name_ |  Enter a unique name for the project. Valid characters are: letters (A-Z, a-z); numbers (0-9); spaces; **( )**  _(parentheses)_ ; **,**  _(comma)_ ; **.**  _(period)_ ; **_**  _(underscore)_ ; **-**  _(dash)_. If an invalid character is used, a message will display. Duplicate project names are not allowed. If a duplicate name is entered, a message will display.  
---|---  
_Directory_ |  Working directory for the project. Defaults to the path for the current working directory. You can enter a different pathname or click the Query button to select a different working directory.  
_Settings File_ |  Name of the file that will be used to save the tasks and settings that define the project contents. A default file name consisting of the project name with the extension _.prj_ (project) is provided; however, this can be changed. Valid characters are: letters (A-Z, a-z); numbers (0-9); **( )**  _(parentheses)_ ; **,**  _(comma)_ ; **.**  _(period)_ ; **_**  _(underscore)_ ; **-**  _(dash)_. If an invalid character is used, a message will display. This field cannot be blank; otherwise, a message will display, and the default file name will be put back. _(The Settings File field was added in PxPlus 2023.)  
(The message to display if Settings File field is blank was added in PxPlus 2025.)_  
_Title Bar Color_ |  Sets the color of the title bar for all project specific windows. Initially set to the _Default_ color (gray). Click the Query button to access **[Color Selections](../NOMADS%20Graphical%20Application/Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions. _(The Title Bar Color field was added in PxPlus 2023.)_  
_Prefix File_ |  **_(Optional)_** Enter a new or existing prefix file that will contain the prefix file entries defined for the project or click the Query button. If you enter a prefix file that does not exist, it will be created when you click _OK_.

#### **Note:**  
If **[PREFIX FILE](../directives/prefix.htm#Mark10)** is set in START_UP and the corresponding prefix file already exists, it will take precedence over the project's prefix file.

_(The Prefix File field was added in PxPlus 2023 Update 1.)_  
_Default Library_ |  **_(Optional)_** Sets the default library for a project. Enter an existing library file or click the Query button. If you enter a file that does not exist, a message will display. The default library is used by the **[Open Project Application Library](../NOMADS%20Graphical%20Application/NOMADS%20Development/Open%20Project%20Lib.md)** task to open **[Library Object Selection](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)**. This library is also used as the default for the following IDE tasks: **[Panel Definition](../NOMADS%20Graphical%20Application/NOMADS%20Development/Panel%20Def_ide.md)** **[Query Definition](../NOMADS%20Graphical%20Application/NOMADS%20Development/Query%20Def_ide.md)** **[Menu Bar Definition](../NOMADS%20Graphical%20Application/NOMADS%20Development/Menu%20Bar%20Def_ide.md)** **[File Maintenance Generator](../NOMADS%20Graphical%20Application/NOMADS%20Development/File%20Maint_ide.md)** _(The Default Library field was added in PxPlus 2023 Update 1.)_  
_OK_ |  **_(Available when project Name is entered)_** Creates the new project. On the IDE Main Launcher, the new project is shown as the current project.  
_Cancel_ |  Closes the **Create Project** dialog without saving changes.  
_Edit Project_ |  Launches the **Edit Project** dialog for modifying an existing project. You can modify the current project _(default)_ or select a different project from the _Project_ drop box.

#### **Warning!**  
If the _Settings File_ name is changed, the project's current settings will no longer be used.

If the _Default_ project is selected, only the _Name_ and _Settings File_ fields are disabled and cannot be changed. If you modify a project that is **_not_** the current project, the current project will **_not_** be affected. _(The ability to select any project for editing was added in PxPlus 2016 Update 0001.)  
__(The ability to edit the Directory for the "Default" project was added in PxPlus 2019 Update 1.)_  
_Delete Project_ |  Deletes the current project. Prior to deleting, a confirmation message will display.

#### **Note:**  
The _Default_ project **_cannot_** be deleted.  
  
_Copy Project_ |  Launches the **Copy Project** dialog (similar to the **Edit Project** dialog) for copying an existing project, including all its tasks and settings, to a new project. You can copy the current project _(default)_ or select a different project from the _Project_ drop box. Enter the new project _Name_ and specify the _Directory_ if it is different from the current working directory.

#### **Note:**  
If the current project or a different project is copied, the _Project_ drop box (on the IDE Main Launcher) switches to the new (copied) project automatically.  
  
_Project Maintenance_ |  Launches the **[Project Maintenance](../Project%20Maintenance.md)** utility.  
  
_(The Projects > Project Maintenance menu option was added in PxPlus 2023.)_  
  
**Menu** |  |  _Task Definition_ |  Launches the **[Task Definition](IDE%20Main%20Launcher.htm#taskdefinition)** dialog for creating and maintaining tasks.  
---|---  
_Menu Maintenance_ |  Launches the **[Menu Maintenance](IDE%20Main%20Launcher.htm#menumaint)** dialog.  
**Update** |  Launches the **Update Manager** dialog that is used for accessing the Online Update feature. See **[Online Update](../Online%20Update.md)**. When an online update is ready to be applied, the **Update** menu bar item changes to ***Update*** (with asterisks) as a visual cue. Once the online update is successfully applied and no other updates are pending, the menu bar item changes back to **Update** (without asterisks). _(Displaying *Update* when an online update is available was added in PxPlus 2023.)_  
**About** |  Launches a separate dialog with detailed licensing information about the current PxPlus installation. This information includes the Serial Number, PxPlus Software package, Expiry Date, User Count and Version. _(The About option was added in PxPlus 2017.)_  
**Support** |  Launches the PVX Plus **Support Center** for submitting a HelpDesk ticket. _(The Support option was added in PxPlus 2021 Update 2.)_  
**Online Help** |  Launches the online PxPlus Help documentation (https://manual.pvxplus.com). _(The Online Help option was added in PxPlus 2024.)_  
**Release Notes** |  Provides quick access to the Release Notes (in the PxPlus Online Help) that correspond with the current PxPlus installation. _(The Release Notes option was added in PxPlus 2019.)_  
  
Certain tasks are project related and therefore must be assigned to a project. Designating a task as project related is controlled by the _Project Related?_ check box option on the **[Task Definition](IDE%20Main%20Launcher.htm#taskdefinition) **dialog. An icon precedes each of the tasks displayed on the Main Launcher. To distinguish between a project related and a non-project related task, different icons are used. For example, in the screen shot above, the icon for the project related task _Data Dictionary Maintenance_ is a different color than the icon for the non-project related task _CSV Import._

For a project related task, the current working directory is changed to the working directory defined for that project. If present, the Start_up program in that directory will be run prior to launching the task. Only one project can be worked on at a time.

#### **Important Note:**  
**_  
(Applicable Only If Using Simple Client Server)_**  
  
If you use the _PxPlus Command Line_ task in the IDE Main Launcher to access Command mode, the directory will be the main PxPlus starting directory instead of the directory associated with the current project. A message will display as a reminder that the session will be spawned in the starting directory of the Simple Client Server host.  
  
_(The reminder message was added in PxPlus 2021.)_

The IDE Main Launcher can be customized to meet the needs of an individual or a company by using the tasks accessed through the _IDE Maintenance_ category on the tree view. These tasks consist of **[Task Definition](IDE%20Main%20Launcher.htm#taskdefinition)**, **[Menu Maintenance](IDE%20Main%20Launcher.htm#menumaint)**, **[Import Menu Structure](IDE%20Main%20Launcher.htm#importmenu)** and **[Export Menu Structure](IDE%20Main%20Launcher.htm#exportmenu)**.

##  Project and Task Selection

When initially starting the IDE Main Launcher, a _Default_ project is already provided. To create additional projects, click the **[New Project](IDE%20Main%20Launcher.htm#tasksection)** button (beside the _Project_ drop box) or select the **[Create Project](IDE%20Main%20Launcher.htm#createproject)** option on the **Projects** menu.

Tasks are launched one task at a time; however, multiple tasks can be launched.

Tasks can be added to the **[IDE Ribbon Toolbar](IDE%20Main%20Launcher.htm#idetoolbar)** in a few ways:

Drag and drop a selected task from the _Menu_ list to the IDE ribbon toolbar.  
  
Use the _Toolbar_ button.  
  
Select the _Add to Toolbar_ option from the popup menu when right clicking on a task in the _Menu_ list.

This section of the IDE Main Launcher consists of the following:

_Project_ |  Select the current project from the drop-down list of projects that have been created. When a project is selected, the name of that project displays in the IDE header. Hover the mouse pointer over the _Project_ hyperlink to display a floating tip with the current Working Directory. Click the _Project_ hyperlink to invoke the **[Edit Project](IDE%20Main%20Launcher.htm#editproject)** dialog to modify the current project or select a different project. See **[Working with Projects](Introduction%20to%20PxPlus%20IDE.htm#projects)**.

#### **Note:  
** When initially starting the IDE, a _Default_ project will be created. This _Default_ project **_cannot_** be deleted.  
  
If the _Default_ project is selected in the **[Edit Project](IDE%20Main%20Launcher.htm#editproject)** dialog, only the _Name_ and _Settings File_ fields are disabled and cannot be changed.  
  
_(The ability to edit the Directory for the "Default" project was added in PxPlus 2019 Update 1.)_  
  
---|---  
_New Project_ |  Click this button to launch the **[Create Project](IDE%20Main%20Launcher.htm#createproject)** dialog. Alternatively, use the _Create Project_ option on the **Projects** menu. _(The New Project button was added in PxPlus 2021.)_  
_Menu_ |  Click this button to display a list of _Menu_ tasks. Any number of tasks can be launched. See **[Menu Maintenance](IDE%20Main%20Launcher.htm#menumaint)**.

#### **Note:**  
This button is not available in the **[PxPlus Web IDE](IDE%20Main%20Launcher_Web.md)**.

The following grid side buttons are available: |  _(Open All/Close All)_ |  Button that is used to toggle between opening or closing all tree view nodes.  
---|---  
_(Refresh)_ |  Button that is used to refresh the contents of the _Menu_ display.  
  
Right click on a _Menu_ task to display the following popup menu:

_Insert Task_ |  Displays the **[Task Definition](IDE%20Main%20Launcher.htm#taskdefinition)** dialog for selecting the task to insert. The task will be inserted **_below_** the selection currently highlighted on the tree view menu, depending on whether a parent node or a subordinate branch is highlighted.  
---|---  
_Insert Task on Menu_ |  **_(Available only when a parent node is highlighted)_** Displays the **[Task Definition](IDE%20Main%20Launcher.htm#taskdefinition)** dialog for selecting the task to insert as a subordinate branch under the highlighted parent node.  
_Delete Task_ |  **_(Available only when a subordinate branch is highlighted)_** Removes the currently highlighted task from the tree view menu only.  
_Add to Toolbar_ |  **_(Available only when a subordinate branch is highlighted)_** Adds a button to the **[IDE Ribbon Toolbar](IDE%20Main%20Launcher.htm#idetoolbar)** for quick access to the highlighted task.  
  
_(The Menu button was added in PxPlus 2020.)_  
  
_History_ |  Click this button to display a list of the libraries, panels (windows and dialogues), programs, menus, queries, data dictionary tables and reports that have been recently accessed and/or created. HTML Editor tasks are also included in this list. _(Support for including HTML Editor tasks in the History list was added in PxPlus 2021.)_

#### **Note:**  
This button is not available in the **[PxPlus Web IDE](IDE%20Main%20Launcher_Web.md)**.

A task type icon precedes each listed task. To see a list that describes what these icons represent, hover the mouse pointer over the **?** button beside the list box. Tasks are launched based on the current working directory to which they were associated at the time they were added to history. When selecting to open a NOMADS panel that is a generated **[File Maintenance](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** panel, a message will display. _(The ability to open File Maintenance panels in NOMADS from the History list was added in PxPlus 2023.)_ Up to 25 tasks, including those flagged as _favorites_ , can be saved to history. When this number is exceeded, the task list rolls forward to continuously reveal the most recent 25 tasks.

#### **Note:  
** Programs and Data Dictionary tables are only updated to the _History_ list when they have been modified.

The grid side buttons are: |  _Add/Remove from Favorites_ |  Button that is used to toggle between adding or removing the "favorite" designation (_star_) to/from a highlighted task. Also available from the popup menu when right clicking on a highlighted task. Tasks flagged as "favorites" are repositioned to the top of the list.  
---|---  
_Properties_ |  Button that displays a **Properties** dialog with the following details about the highlighted task (for information only). Also available from the popup menu when right clicking on a highlighted task. |  _Task_ |  Name of the highlighted task.  
---|---  
_Type_ |  Task type (i.e. library, window, data file, query, etc.).  
_Favorite_ |  Indicates whether the task is flagged as "favorite".  
_Full Pathname_ |  Path that indicates the file location.  
_Working Directory_ |  Directory that was associated with the task at the time the task was saved to history (may not necessarily be the working directory for the project).  
_Projects_ |  Lists all the projects in which the task is found.

#### **Note:  
** Tasks may exist in multiple projects.  
  
_Refresh_ |  Button that is used to refresh the contents of the _History_ list with any new objects that have been recently accessed and/or created.  
_Task Type Icons_ |  Button that displays a floating tip with a list of task type icons and their descriptions. _(The ? button was added in PxPlus 2017.)  
(The HTML Editor task type icon was added in PxPlus 2021.)_  
  
Right click on a _History_ task to display the following popup menu:

_Add/Remove from Favorites_ |  Same as the _Add/Remove from Favorites_ grid side button.  
---|---  
_Show Properties_ |  Same as the _Properties_ grid side button.  
_Add to Project xxxxxx_ |  Adds the selected task to the current project _xxxxxx_ displayed in the _Project_ drop box, as well as the **[IDE Header](IDE%20Main%20Launcher.htm#header)**. See **Note** below.  
_Add to another Project_ |  Displays the **Add to Project** dialog for selecting another project to which the selected task will be added. See **Note** below.  
  
#### **Note:  
** The _Add to Project xxxxxx_ option is not available for tasks that already exist in the current project.  
  
For screen libraries, the _Add to Project xxxxxx_ and _Add to another Project_ options are not available. To add screen libraries to a project, double click on the screen library task to display the NOMADS **[Library Object Selection](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Overview.md)** window. You can highlight only **_specific_** tasks and then select _Projects > Add Selection(s) to Project _from the menu bar **_or_** add **_all_** tasks by selecting _Projects > Add All Objects to Project_.  
  
_Project_ |  Click this button to display a tree view list of all tasks for the current project, grouped into categories (i.e. screen libraries, programs, panels, reports, etc.). HTML Editor tasks are also included in this list. See **[Working with Projects](Introduction%20to%20PxPlus%20IDE.htm#projects)**. _(Support for including HTML Editor tasks in the Project list was added in PxPlus 2021.)_

#### **Note:**  
This button is not available in the **[PxPlus Web IDE](IDE%20Main%20Launcher_Web.md)**.

A task type icon precedes each listed task (same icons used to identify the _History_ tasks). For a list that shows what these icons represent, hover the mouse pointer over the **?** button beside the list box. When selecting to open a NOMADS panel that is a generated **[File Maintenance](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** panel, a message will display. _(The ability to open File Maintenance panels in NOMADS from the Project list was added in PxPlus 2023.)_ |  _Refresh_ |  Button that is used to refresh the contents of the _Project_ display.  
---|---  
_Task Type Icons_ |  Button that displays a floating tip with a list of task type icons and their descriptions. _(The ? button was added in PxPlus 2017.)  
(The HTML Editor task type icon was added in PxPlus 2021.)_  
  
Right click on a Project task to display the following popup menu:

_Launch Task_ |  Runs the selected task.  
---|---  
_Remove from Project_ |  Removes the selected task from the current project. When the last task listed under a main heading is removed, the main heading is removed at the same time.  
_Add to another Project_ |  Displays the **Add to Project** dialog for selecting another project to which the selected task will be added.  
_(Enhanced/Standard IDE)_ |  _(Double arrow)_ Button that is used to toggle between the enhanced IDE (with Web) or standard IDE (without Web).

#### **Note:**  
This button is not available in the **[PxPlus Web IDE](IDE%20Main%20Launcher_Web.md)**.

_(The Enhanced/Standard IDE toggle button was added in PxPlus 2020.)_  
  
**[Project Maintenance](../Project%20Maintenance.md)** can be used to add one or more tasks of various types to a predefined project, as well as remove tasks, _all at one time_. To invoke this utility, select the _Project Maintenance_ task near the bottom of the _PxPlus IDE_ tree view or select _Project Maintenance_ from the **Projects** menu.

If adding a task to a project with a working directory that differs from the working directory for the task, a **Working Directory Conflict** message will display to notify you of this difference and inform you that continuing with this process may result in problems when accessing the task in the new project. At this point, you have the option to select _OK_ to continue with adding this task to the project or select _Cancel_ to terminate the process.

##  IDE Ribbon Toolbar and HTML Folders

The enhanced IDE Main Launcher includes a ribbon toolbar and HTML folder tabs, both of which can be easily customized so that commonly used tasks and information are readily accessible with just one click.

In addition, you can search for specific text in a displayed IDE Web page by using the **[Find](IDE%20Main%20Launcher.htm#find)** button.

|  **_  
Toolbar button and IDE ribbon toolbar_**  
---|---  
|    
**_Folders button and HTML folder tabs_**  
  
This section of the IDE Main Launcher consists of the following:

_(IDE Toolbar)_ |  Ribbon toolbar that can be customized to display task buttons for quick access to commonly used PxPlus development tasks. See **[Maintain IDE Toolbar Buttons](IDE%20Main%20Launcher.htm#maintaintoolbar)**.  
---|---  
_Toolbar_ |  Click this button to launch the **[Maintain IDE Toolbar Buttons](IDE%20Main%20Launcher.htm#maintaintoolbar)** dialog. _(The Toolbar button was added in PxPlus 2020.)_  
_Folders_ |  Click this button to launch the **[Maintain IDE HTML Tabs](IDE%20Main%20Launcher.htm#maintaintabs)** dialog for adding and maintaining HTML tabs.  
_Find_ |  Click this button to enter specific text to search for in a displayed IDE Web page. Alternatively, click inside the Web page and use the **Ctrl** +**F** hot key. This window consists of the following: |  _Find What_ |  Enter the search text. If text is selected in the Web page when **Find** is invoked, the selected text will be used as the default search text.  
---|---  
_Match case_ |  Select this option if the search is to be case sensitive. By default, this option is unchecked.  
_Direction_ |  Searches up or down within the displayed Web page. By default, _Down_ is selected.  
_Find Next_ |  Finds the next occurrence of the specified search text.  
_Cancel_ |  Cancels the search.  
  
_(The Find button was added in PxPlus 2021 Update 2.)_  
  
_Home  
Back  
Forward  
Refresh_ |  Buttons that are used to navigate and refresh the Web site that is associated with the currently selected HTML tab.

#### **Note:**  
The _Back_ and _Forward_ buttons are not available in the **[PxPlus Web IDE](IDE%20Main%20Launcher_Web.md)**.  
  
_(The IDE ribbon toolbar, HTML tabs and navigation buttons were added in PxPlus 2020.)_

##  Maintain IDE Toolbar Buttons

The **Maintain IDE Toolbar Buttons** dialog is used to add, maintain and delete task buttons in the IDE ribbon toolbar. A maximum of 10 task buttons can be added.

To invoke this dialog, click the _Toolbar_ button below the ribbon bar. Alternatively, right click on an _existing_ task button in the ribbon toolbar and select _Maintain Toolbar_ from the popup menu.

|    
  
  
|   
---|---|---  
  
This dialog consists of the following:

_Button#_ |  Task button order.  
---|---  
_Task_ |  Task name. Click the Query button _(magnifying glass)_ for a list of the tasks defined in **[Task Definition](IDE%20Main%20Launcher.htm#taskdefinition)**.  
_Description_ |  Enter the task description _(optional)_ that will display below the task button in the ribbon toolbar. If the task is dragged and dropped from the _Menu_ list to the ribbon toolbar, the description will default from **Task Definition** and can be modified if needed. If the task is selected from the Query button, the description will not default. It can be manually entered or left blank.  
_Bitmap_ |  Enter the bitmap _(optional)_ to display for the task button in the ribbon toolbar. If the task is dragged and dropped from the _Menu_ list to the ribbon toolbar, the bitmap will default from **Task Definition** and can be modified if needed. If the task is selected from the Query button, the bitmap will not default. It can be manually entered or left blank.  
_Move Up  
Move Down_ |  Rearranges the order of the task buttons in the ribbon toolbar.  
_Delete Row_ |  Removes the selected task button from the ribbon toolbar **_only_**. The task definition is **_not_** removed.  
_OK_ |  Saves any changes and closes the **Maintain IDE Toolbar Buttons** dialog. New buttons, if defined, are added to the ribbon toolbar (in _Button#_ sequence).  
_Cancel_ |  Cancels any changes and closes the **Maintain IDE Toolbar Buttons** dialog.  
  
#### **Note:**  
A task button can be added directly to the ribbon toolbar in other ways:  
  
Drag and drop a task from the _Menu_ list to the ribbon toolbar. **_OR_**  
  
Right click on a task in the _Menu_ list and select the _Add to Toolbar_ option from the popup menu.

_(The Maintain IDE Toolbar Buttons dialog was added in PxPlus 2020.)_

##  Maintain IDE HTML Tabs

The **Maintain IDE HTML Tabs** dialog is used to add, maintain and delete HTML tabs in the IDE Main Launcher. A maximum of 10 HTML tabs can be added.

To invoke this dialog, click the _Folders_ button below the ribbon toolbar.

|    
  
  
  
  
  
|   
---|---|---  
  
This dialog consists of the following:

_Tab#_ |  Tab order.  
---|---  
_Tab Name_ |  Enter the text to display on the tab or select a pre-defined tab name from the drop-down list.

#### **Note:**  
The _Help_ tab cannot be moved or deleted.  
  
_Tab URL_ |  Specify the URL to use for the tab.

#### **Note:**  
The URL can be **_any_** valid Web address.  
  
_Move Up  
Move Down_ |  Rearranges the order of the tabs.  
_Delete Row_ |  Removes the selected tab.  
_OK_ |  Saves any changes and closes the **Maintain IDE HTML Tabs** dialog. New tabs, if defined, are added (in _Tab#_ sequence).  
_Cancel_ |  Cancels any changes and closes the **Maintain IDE HTML Tabs** dialog.  
  
_(The Maintain IDE HTML Tabs dialog was added in PxPlus 2020.)_

##  Task Definition

The **Task Definition** dialog is used to define tasks that are to be performed in an application. You can enter a new _Task Name_ and _Description_ or click the Query button _(binoculars)_ to select an existing task name from the list.

This dialog is invoked by selecting _IDE Maintenance > Task Definitions_ from the main tree view or by selecting _Menu > Task Definition_ from the main menu bar.

The available options are presented on two tabs, **[Logic](IDE%20Main%20Launcher.htm#logic)** and **[Display](IDE%20Main%20Launcher.htm#display)**:

**Logic**  
---  
_Task type_ |  Click the drop-down arrow for a list of transaction types: |  _Menu/Sub-Menu_ |  These tasks are menus to be displayed on the Launcher. For an example, select the task _IDE_MAINT_ from the _Task Name_ query list to see the _Task type_ for this menu.  
---|---  
_Object to instantiate_ |  These tasks instantiate objects within a new session of PxPlus.  
_Program to run_ |  A task that simply needs to run a program is defined using this Task type.  
_Report to produce_ |  A task that needs to display a report in the Report Viewer.  
_Screen to process_ |  A task that needs to process a NOMADS panel.  
_Web Service_ |  A task to run a Web Service.   
  
_(The Web Service task type was added in PxPlus 2017.)_  
  
_Project Related?_ |  Check box to indicate if the current task is assigned to a project.  
_Windows Only?_ |  Check box to indicate if the current task is for Windows only. These tasks will _not_ appear in the tree view when not in a Windows environment.  
_PxPlus Task?_ |  Check box to indicate if the current task is a PxPlus task. Internal field.  
_Task for_ |  Click the drop-down arrow for a list of possible locations from which this task can be launched: _Both Desktop and Web, Desktop Only, Web Only_.  
_Panel/Program_ |  **_(Not Applicable for Menu/Sub-Menu Task Type)_** Enter the panel/program that is associated with launching the task. See **[Examples - Panel/Program by Task Type](IDE%20Main%20Launcher.htm#examples)**.  
_Parameter 1 - 4_ |  These four fields are used to define parameters to be passed when launching a program, panel or object.  
**Display**  
_ICON/Image_ |  If no bitmap is specified for a transaction, the standard menu and task bitmaps are used. However, these may be overridden for individual tasks by entering bitmap information in this field.  
_Wiki/URL_ |  Used to enter a Wiki page or URL address containing online help associated with the current task.  
  
##  Examples - Panel/Program by Task Type

The table below provides examples of _Panel/Program_ entries for each applicable task type.

**Task Type** |  **Panel/Program**  
---|---  
_Object to instantiate_ |  Enter the object pathname: **_Example:_** *ide/tasks This example instantiates the _*ide/tasks_ object.  
_Program to run_ |  Enter the program pathname: **_Example:_** *plus/util/dictdef This example runs the _*plus/util/dictdef_ program.  
_Report to produce_ |  Enter the report pathname: **_Example:_** *plus/winutl/windows_services.pvr This example displays the list of Windows Services defined in the Report Viewer.  
_Screen to process_ |  Enter the screen and the screen library: **_Example:_** Themes;*win/scrnlib.en This example processes the _Themes_ screen located in the *win/scrnlib.en library.  
_Web Service_ |  Enter a Web Service ID or a URL. If entering a Web Service ID, a Web server other than _localhost_ can be specified as _Parameter 1_. See **[PxPlus Web Services](../PxPlus%20Web%20Services.md)**. _(The ability to enter a host URL was added in PxPlus 2018.)_ **_Example 1:_** _Panel/Program:_ id=CLIENT_QRY This first example processes the CLIENT_QRY Web Service (defined in **[Web Services Maintenance](../Web%20Services%20Maintenance.md)**) by running the **[EZWeb Server](../EZWebServer/EZweb%20Introduction.md)** locally. **_Example 2:_** _Panel/Program:_ http://_servername_ :8888/services/rpt.pxp?rpt=gl_trialbal.pvr&type=html This second example processes the specified Web Service report using the "_servername_ _"_ Web server running on port 8888. **_Example 3:_** _Panel/Program:_ id=CLIENT_QRY  
_Parameter 1:_ http://_servername_ :8888 This third example processes the CLIENT_QRY Web Service (defined in **[Web Services Maintenance](../Web%20Services%20Maintenance.md)**) using the "_servername_ " Web server running on port 8888. Once a _Web Service_ task has been defined, you can add this task to a menu using **[Menu Maintenance](IDE%20Main%20Launcher.htm#menumaint)** and then launch it from the IDE Main Launcher. The results of the Web Service will be displayed on a resizable panel. If a Web Service ID is entered **_without_** a server name and port specified as _Parameter 1_ , the task will be launched running the **[EZWeb Server](../EZWebServer/EZweb%20Introduction.md)** locally. Below is an example of the CLIENT_QRY Web Service launched from the IDE Main Launcher.

#### **Note:**  
When selecting to launch a Web Service task, EZWeb Server will automatically start (if not already running), using the default port and secure (HTTPS) settings specified in the **[Launch EZWeb Server](../EZWebServer/EZweb%20Introduction.htm#Mark1)** window. If no default port has been assigned, a message will prompt you to define it.  
  
_(The ability to enable secure TLS/SSL mode for the EZWeb server was added in PxPlus 2022.)_  
  
**_When running WindX_** , the Web Service task will not be allowed to start, and a message will display.  
  
##  Menu Maintenance

The **Menu Maintenance** dialog allows tasks previously defined through **Task Definition** to be added to a menu or sub-menu for display on an application launcher. Invoke this dialog by expanding the _IDE Maintenance_ category on the tree view and selecting _Menu Maintenance_ or by selecting _Menu > Menu Maintenance_ from the Launcher menu bar.

This dialog consists of the following:

_Menu Entry_ |  This drop-down list is loaded with all tasks defined with the Task type _Menu/Sub-Menu_.  
---|---  
_System Transactions  
Transactions in selected menu_ |  _System Transactions_ (on the left) is a list of tasks that are not yet located on the selected menu.  
_Transactions in selected menu_ (on the right) is a list of tasks currently on the selected menu.  
Double-click or drag-and-drop a task to move it from left to right.  
_Delete_ |  Deletes a selected item from the _Transactions in selected menu_ list (on the right). Pressing the Delete key also deletes a selected item.  
_Up  
Down_ |  Use these buttons to change the item order in the _Transactions in selected menu_ list (on the right).  
_Reset_ |  This button becomes available after a change has been made to the _Transactions in selected menu_ list (on the right). Click this button to revert to the initial state of the menu.  
_Save_ |  This button becomes available after a change has been made to the _Transactions in selected menu_ list (on the right). Click this button to save the changes.  
_Close_ |  Closes the **Menu Maintenance** dialog. If any unsaved changes are detected, you are prompted to save the changes.  
  
##  Import Menu Structure

The **Import Menu Structure** dialog allows a menu structure to be imported. Invoke this dialog by expanding the _IDE Maintenance_ category on the tree view and selecting _Import Menu Structure_.

In this dialog, the box on the left displays the existing menu structure. The box on the right displays the name and structure of the menu to be imported.

##  Export Menu Structure

The **Export Menu Structure** dialog allows either the entire existing menu structure or a portion of it to be exported. Invoke this dialog by expanding the _IDE Maintenance_ category on the tree view and selecting _Export Menu Structure_.

In this dialog, click the _Select All_ button to select all the menu items for export. To export only specific sub-menus or individual menu items, click the _Unselect All_ button to clear all selections, and then click the check box beside only the desired items.

## See Also

**[Project Maintenance](../Project%20Maintenance.md)**  
**[Adding Tasks to Projects from Other Locations](Adding%20Tasks%20to%20Projects%20from%20Other%20Locations.md)**  
**[IDE Main Launcher (Web)](IDE%20Main%20Launcher_Web.md)**
