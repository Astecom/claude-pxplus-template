# PxPlus IDE (Integrated Development Environment)  
  
**Adding Tasks to Projects from Other Locations** |  **__**  
---|---  
  
Projects provide a method for organizing and managing the various tasks used in the development of business applications and make it easy to access all the related tasks through the PxPlus IDE. See **[Working with Projects](Introduction%20to%20PxPlus%20IDE.htm#projects)**.

**[Project Maintenance](../Project%20Maintenance.md)** can be used to add (or remove) _one or more_ various types of tasks to a predefined project _all at one time_ from one central location.

You can also add individual tasks to projects from various locations:

> **[NOMADS Library Object Selection](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)**

> **[NOMADS Panel Designer](../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**

> **[NOMADS+ Toolbar](../NOMADS+%20Toolbar/Introduction.md)**

> **[NOMADS Query Definition](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.md)**

> **[NOMADS Popup Menu Definition](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Popup%20Menu/Overview.md)**

> Report Writer > **[Report Designer](../Report%20Writer/Designing%20a%20Report/Report%20Designer/Overview.md)**

> **[Data Dictionary Maintenance](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)**

> **[File Update Utility](../File%20Update%20Utility.md)**

> **[*IT - Integrated Toolkit](../toolkit1/sect1.1/a.md)**

> **[Ed+ Program Editor](../Ed%20Program%20Editor.htm#project)**

> **[HTML Editor](../HTML%20Editor.md)**

_(Support for adding HTML Editor tasks to projects was added in PxPlus 2021.)  
(Support for adding Ed+ Program Editor tasks to projects was added in PxPlus 2023.)_

In each of these locations, select the _Projects_ menu. The following two options are displayed (with the exception of NOMADS Library Object Selection, which displays three options):

**Projects** |   
---|---  
_Create New Project_ |  Launches the **[Create Project](IDE%20Main%20Launcher.htm#createproject)** dialogue for entering a new project for the current working directory. Click the Query button to select a different working directory.  
_Add to Project_ |  Launches the **Add to Project** dialogue for adding the current task to an existing project that is selected from the _Project_ drop box.  
  
In NOMADS Library Object Selection, the _Projects_ menu displays three options:

**Projects** |   
---|---  
_Create New Project_ |  Launches the **[Create Project](IDE%20Main%20Launcher.htm#createproject)** dialogue for entering a new project for the current working directory. Click the Query button to select a different working directory.  
_Add All Objects to Project_ |  Launches the **Add to Project** dialogue for adding **_all_** objects from the library to an existing project that is selected from the _Project_ drop box.  
_Add Selection(s) to Project_ |  Launches the **Add to Project** dialogue for adding **_selected_** objects from the library to an existing project that is selected from the _Project_ drop box. Alternatively, you can select _Add to Project_ from the popup menu that is invoked by right clicking on a selected object in the list box.  
  
To add a selected task to an **_existing_** project, follow these steps:

1. |  From the menu bar, select _Projects > Add to Project_.  
---|---  
2. |  In the **Add to Project** dialogue, select the project from the _Project_ drop box and click _OK_.  
  
#### **Note:**  
When adding a Data Dictionary task to a project, make sure that the working directory for the project is the **_same_** as the working directory associated with the data dictionary. Otherwise, the selected task cannot be added to the project.

If the project **_does not exist_** , you must first create the project and then add the task. To do this:

1. |  Create the project by selecting _Projects > Create New Project_ from the menu bar.  
---|---  
2. |  In the **[Create Project](IDE%20Main%20Launcher.htm#createproject)** dialogue, enter a _Name_ for the new project. Enter the working _Directory_ for the project, if different from the defaulted current working directory, or click the Query button. Click _OK_ to complete the creation process.  
3. |  From the menu bar, select _Projects > Add to Project_. Select the new project from the _Project_ drop box. The _Directory_ defaults to the setting when the project was created and cannot be changed. Click _OK_ to complete the process.  
  
##  Viewing the Tasks for a Project

To see all the tasks for a project, follow these steps:

1. |  From the **[PxPlus IDE Main Launcher](IDE%20Main%20Launcher.md)**, select the project from the _Project_ drop box.  
---|---  
2. |  Click the **[Project](IDE%20Main%20Launcher.htm#project)** button to see a list of all the tasks for the selected project, grouped into categories (i.e. screen libraries, programs, panels, reports, etc.). HTML Editor tasks are also included in this list.  
  
_(Support for including HTML Editor tasks in the Project list was added in PxPlus 2021.)_  
  
Any new tasks that have been added will be displayed in the tree view under the appropriate "parent" category. For example, a Data Dictionary task will be listed under the _Dictionary_ category. If the task is not displayed, refresh the tree view list by selecting the Refresh button beside the list box.  
  
See **[Project and Task Selection](IDE%20Main%20Launcher.htm#tasks)**.
