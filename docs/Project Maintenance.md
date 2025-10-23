# Utility Programs  
  
**Project Maintenance**|   
---|---  
  
**Project Maintenance** is used to add one or more tasks of various types to a predefined project, as well as remove tasks -- _all at one time_. This provides the convenience of organizing and managing your projects from one central location. See **[Working with Projects](PxPlus%20IDE/Introduction%20to%20PxPlus%20IDE.htm#projects)**.

You may find that, while working on a specific task, you need to add that task to a project. To do this, select the _Projects_ menu from within your current working location. See **[Adding Tasks to Projects from Other Locations](PxPlus%20IDE/Adding%20Tasks%20to%20Projects%20from%20Other%20Locations.md)**.

_(The Project Maintenance utility was added in PxPlus 2014 - Feature Pack 1.)_

To invoke **Project Maintenance** , use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Select the _Project Maintenance_ task near the bottom of the _PxPlus IDE_ tree view.  
From the **[PxPlus IDE Main Launcher](PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Select _Projects_ > _Project Maintenance_ from the menu bar. _(The Projects > Project Maintenance menu option was added in PxPlus 2023.)_  
  
The **Project Maintenance** window is displayed below with a sample entry:

> The **Task Types** that can be selected are:

  * _Library Objects_ (Windows, Dialogues, Popup Menus, Queries)
  * _Programs_
  * Report Writer _Reports_
  * _Data Files_
  * _Data Dictionary_ Entries
  * _HTML Pages_



See **[Task Types to Maintain](Project%20Maintenance.htm#tasktypes)**.

The **Project Maintenance** window consists of the following:

_Project_ |  Select the project to be maintained from the list of available projects. Clicking the _Project_ hyperlink launches the **[Edit Project](PxPlus%20IDE/IDE%20Main%20Launcher.htm#editproject)** window for editing the selected project.  
---|---  
_Working Directory_ |  Displays the working directory for the selected project. This pathname is also used as the starting directory when you select the Query button (see _Type_ below) to locate a _Library_ or _Directory_.  
_Type_ |  Selections are _Library_ and _Directory_ : |  _Library_ |  **_(Default)_** Used to specify a NOMADS library file. Enter the full pathname for the library file or select the Query button.  
---|---  
_Directory_ |  Used to specify the directory containing the NOMADS library files to use. Enter the full pathname for the directory or select the Query button.  
  
See **[Task Types to Maintain](Project%20Maintenance.htm#tasktypes)**.  
  
_Include Sub-Directories_ |  **_(Available when Type is Directory)_** Select this check box to include tasks (based on the _Task Types_ selections) found in the sub-directories of the specified directory. (By default, this check box is **_not_** selected.) When _Type_ is _Library_ , this check box is **_not_** displayed.

#### **Note:**  
The _Include Sub-Directories_ check box does **_not_** apply to data dictionary entries. Only the data dictionary in the specified directory can be maintained using this utility.

_(The Include Sub-Directories check box was added in PxPlus 2017.)_  
**Task Types to Maintain** |  If the selected _Type_ is **_Library_** , only the _Library Objects_ check box is selected. All other Task Types _(Programs, Reports, Data Files, Data Dictionary, HTML Pages)_ are not applicable. If the selected _Type_ is **_Directory_** , all the Task Types check boxes are selected by default. These Task Types are: |  _Library Objects_ |  Library objects (Windows, Dialogues, Popup Menus and Queries) in the selected library/directory are loaded into the list box.  
---|---  
_Programs_ |  All programs in the selected directory (except some PxPlus system programs) are loaded into the list box.  
_Reports_ |  All Report Writer reports in the selected directory are loaded into the list box.  
_Data Files_ |  All data files in the selected directory (except some PxPlus system files) are loaded into the list box.  
_Data Dictionary_ |  If a PxPlus data dictionary exists in the selected directory, all entries in the data dictionary file (except the Global Dictionary) are loaded into the list box.  
_HTML Pages_ |  The Webster+ **[File Maintenance](NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** HTML pages in the selected directory (or sub-directories, if included) are loaded into the list box. When selecting a directory for loading HTML pages, keep in mind that generated HTML pages are stored in a predefined Webster+ directory. See the **[Webster+ > Directory](NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Menu%20Options.htm#webster)** menu option in **Library Object Selection**.  
  
#### **Note:**  
When you select/deselect any of the Task Types check boxes, the list box is reloaded, and any previous selections are lost.

_(The HTML Pages task type was added in PxPlus 2021.)_  
  
**Select Tasks for Project** |  A list box showing a tree view display of the tasks found in the specified library or directory, based on the _Task Types to Maintain_ selections. Each "parent" node represents a selected Task Type. Expand/collapse a single "parent" node by clicking the adjacent **+**  _plus_ or **-**  _minus sign_. If a check mark exists next to a task when you expand the "parent" node, this indicates that the task is already associated with the selected project. To **_add a task_** to the selected project, select the check box next to that task. To **_remove a task_** from the selected project, deselect the check box next to that task.

#### **Note:**  
If the selected directory contains a large number of files and/or libraries, the list box may take a few moments to load. When loading is complete, the list box will display all applicable tasks, based on the selections.  
  
_Expand/Collapse_ |  Toggle button that is used to either _expand_ or _collapse_ ** _all_** the "parent" nodes for the tasks in the tree view. Expand/collapse a single "parent" node by clicking the adjacent **+**  _plus_ or **-**  _minus sign_.  
_Reset_ |  Discards any _unapplied_ changes and reloads the **Select Tasks for Project** list box. When it reloads, only the changes that were previously saved remain intact.  
_Ok_ |  Saves the changes to the selected project and returns to the PxPlus IDE Main Launcher. At the same time, a **Tasks Added/Removed** message box reports the number of tasks added or deleted from the selected project.  
_Apply_ |  Saves the changes to the selected project without exiting **Project Maintenance**. At the same time, a **Tasks Added/Removed** message box reports the number of tasks added or deleted from the selected project. In addition, the selections for _Project_ , _Type_ and _Task Types_ persist (remains unchanged). This allows you to continue selecting/deselecting tasks for the project using the same settings.  
_Cancel_ |  Clears the current entry, except for _Project_ , _Working Directory_ and _Type_. (The _Task Types to Maintain_ selections and _Include Sub-Directories_ check box are **_not_** changed.)  
_Exit_ |  Closes **Project Maintenance** and returns to the PxPlus IDE Main Launcher without saving any current changes.
