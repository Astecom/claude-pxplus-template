# How To Tutorials

**How to Use the PxPlus IDE Launcher**|   
---|---  
  
The PxPlus **Integrated Development Environment** (or **IDE**) is a project-based development environment that integrates all of the various features of PxPlus in an easy-to-use interface. The PxPlus IDE can be accessed from a Windows platform or from a web browser.

When launched from a Windows platform, the IDE can be displayed in **_enhanced_** view or in **_standard_** view. The main difference between these views is that the **_enhanced_** view has additional functionality and can be customized. You can add folder tabs to launch helpful web pages with just a single click. A **Help** tab is already provided to display the PxPlus Online Help information for the current task. You can add buttons to the IDE ribbon toolbar to quickly access commonly used PxPlus tasks.

  
**_Enhanced View_** |    
**_Standard View_**  
---|---  
  
**_How to Switch Between Views_**

These steps show you how to switch between **_enhanced_** view and **_standard_** view at any time.

1. |  Hover the mouse over the double left arrow button to the right of the _Project_ button. Notice the button tooltip that reads "_Switch to Standard_ ".       
---|---  
2. |  Click this button. The PxPlus IDE changes to standard view.  
3. |  Hover the mouse over the double right arrow button to the right of the _Project_ button. Notice the button tooltip now reads "_Switch to Enhanced_ ".       
4. |  Click this button. The PxPlus IDE changes back to enhanced view.  
  
In this tutorial, you will learn about the **_enhanced view_** and its four distinct sections: **[Project](How%20to%20Use%20PxPlus%20IDE.htm#project)**, **[Tasks](How%20to%20Use%20PxPlus%20IDE.htm#tasks)**, **[Ribbon Toolbar](How%20to%20Use%20PxPlus%20IDE.htm#toolbar)** and **[Web Page Folder Tabs](How%20to%20Use%20PxPlus%20IDE.htm#fldrtabs)**.

##  Project Section

Projects provide a structured method for grouping and managing the various tasks (i.e. objects, programs, data files) and settings used in PxPlus for the development of business applications.

The **Project** section consists of a _Project_ hyperlink button, a _Project_ drop box and a _New Project_ button. When you initially start the IDE Launcher, a _Default_ project is already provided in the _Project_ input field.

    

You can create additional projects. Projects are created one at a time either by clicking the _New Project_ button beside the _Project_ drop box or by selecting _Projects_ > _Create Project_ from the top menu bar.

See the tutorial **[How to Create and Edit a Project](How%20to%20Create%20and%20Edit%20Project.md)**.

This example shows that a new project called Sample Work was created.  
  
    

If multiple projects are created, you choose the project you want to work on by selecting it from the _Project_ drop-down list.

When you select a project from the list or create a new project, the IDE relaunches and shows the name of the current project in the _Project_ input field **_and_** in the top header bar.

##  Tasks Section

The **Tasks** section consists of three main components - **Menu** , **History** and **Project**.  
  
    

  |  **Menu** |  Selecting this button displays a list of all PxPlus tasks and utilities in a tree view format.  
---|---|---  
  |  **History** |  Selecting this button displays a list of PxPlus tasks that have been recently accessed.  
  |  **Project** |  Selecting this button displays a list of PxPlus tasks that have been added to the selected project.  
  
Right clicking on a task displays a menu with additional options. Beside the list of tasks are side buttons that provide additional functions.

**_How to Use the Menu Tree View_**

These steps show you how to use the **Menu** tree view.

1. |  Click the **Menu** button if it is not already highlighted.  
---|---  
2. |  Expand all the nodes in the tree view by clicking the first side button (_magnifying glass with + sign_). This button acts as a toggle to either expand or collapse all the nodes in the tree view.  
  
      
3. |  All the nodes in the tree view are expanded. Notice that the magnifying glass now shows a **** (_minus_) sign. Use the vertical scroll bar to scroll the task list up to the top.  
  
      
4. |  Individual nodes can also be collapsed or expanded as needed. Collapse the _Graphical Application Builder (NOMADS)_ node only by clicking the preceding minus sign.  
5. |  The **Menu** tree view looks like this:  
  
      
6. |  You will now open and close a task. Double click on the _Program Editor (*IT)_ task at the top of the **Menu** tree view. The **Integrated Toolkit ™** window opens, showing the name of the current project (Sample Work) in the title bar. Close this window by clicking the **X** in the top right corner.       
7. |  In the **Menu** tree view, the _Program Editor (*IT)_ task is still highlighted. Right click on this task to open a menu with additional options.      The first and second options, _Insert Task_ and _Insert Task on Menu_ (currently disabled), both launch the **[Task Definition](../PxPlus%20IDE/IDE%20Main%20Launcher.htm#taskdefinition)** window for selecting a defined task to insert.  
The third option, _Delete Task_ , removes the highlighted task from the **Menu** tree view only.  
The fourth option, _Add to Toolbar,_ adds a button for the selected task to the IDE Ribbon Toolbar. You will learn about this option and the IDE Ribbon Toolbar in the next section below.  
8. |  For now, close this right click menu by left clicking anywhere inside the white space beside the **Menu** tree view.  
  
##  Ribbon Toolbar Section

You can add up to 10 buttons on the ribbon toolbar to launch tasks most often used, as well as edit and delete buttons.

**_How to Add a Task Using the Toolbar Button_**

These steps show you how to add a task by using the _Toolbar_ button.

1. |  Click the _Toolbar_ button located to the left of the _Folders_ button.  
  
      
---|---  
2. |  The **Maintain IDE Toolbar Buttons** window opens.  
  
      
3. |  You will be adding Button #2 for the Program Editor (*IT) task. On the second row, under the **Task** column, enter **IT**. This is the Task ID for the *IT Program Editor. You can also select it from a list by clicking the lookup button _(magnifying glass)_.  
  
      
4. |  Under the **Description** column, enter **Program Editor**. This is the description that will display in the toolbar.  
  
      
5. |  Under the **Bitmap** column, enter **!Programs**. This is the bitmap that will display in the toolbar. You can also select a bitmap by clicking the lookup button _(magnifying glass)_.  
  
      
6. |  Click _OK_ to save your changes.  
7. |  The task button is added to the toolbar.  
  
      
  
**_How to Add a Task Using the Menu Tree View_**

These steps show you the two methods for adding a task using the **Menu** tree view.

**_Method 1:_** Right click on a task in the _Menu_ tree view and select the _Add to Toolbar_ option.

1. |  Under _Data Management_ , right click on the _Data Dictionary Maintenance_ task. A menu with four options displays.  
  
      
---|---  
2. |  Select the _Add to Toolbar_ option.  
3. |  The task button is added to the toolbar. Notice that the text is cut off. You will learn later how to edit this button.  
  
      
  
**_OR_**

**_Method 2:_** Left click on a task in the _Menu_ tree view and then drag it to an empty spot on the IDE ribbon toolbar.

1. |  Under _Data Management_ , left click on the _Data Class Definitions_ task, hold down the mouse button, and drag the mouse pointer to an empty spot in the toolbar.  
  
      
---|---  
2. |  Release the mouse button. The task button is added to the toolbar.  
  
      
  
**_How to Edit a Task Button_**

These steps show you how to edit a task button.

1. |  Invoke the **Maintain IDE Toolbar Buttons** window. This can be done by using one of the following methods: **_Method 1:_** Click the _Toolbar_ button below the ribbon toolbar.  
  
     **_OR_** **_Method 2:_** In the ribbon toolbar, right click on the task button that you want to edit and then select _Maintain Toolbar_ from the popup menu.  
  
      
---|---  
2\.  |  The **Maintain IDE Toolbar Buttons** window opens. It is used to add, maintain and delete task buttons in the IDE ribbon toolbar.  
  
      
3. |  The description for the _Data Dictionary Maintenance_ task button is too long, so you will be editing this. Under the **Description** column, click the description for Button #3.  
  
      
4. |  Type _Data Dictionary_ and then press Enter. The description is changed.  
  
      
5. |  The description for the _Data Class_ task button is also too long. Under the **Description** column, click the description for Button #4.  
  
      
6. |  Type _Data Class_ and then press Enter. The description is changed.  
  
      
7. |  Click _OK_ to save your changes.  
8. |  The ribbon toolbar shows the edited task bar descriptions.  
  
      
  
**_How to Move a Task Button_**

These steps show you how to move a task button to change the order of the task buttons on the ribbon toolbar.

In this example, you will be moving the _Data Dictionary_ task button to the second position.

1. |  Invoke the **Maintain IDE Toolbar Buttons** window by using either of the two methods mentioned previously.  
---|---  
2. |  Click anywhere in the Button #3 row for the _Data Dictionary_ task button.  
  
      
3. |  Click the _Move Up_ button.  
  
      
4. |  The _Data Dictionary_ task button is now in the second position.  
  
      
5. |  Click _OK_ to save your changes.  
6. |  The ribbon toolbar shows the _Data Dictionary_ task button in the second position.  
  
      
  
**_How to Delete a Task Button_**

These steps show you how to remove a task button from the ribbon toolbar. This can be done by using one of the following methods:

**_Method 1:_**

In this example, you will be removing the _Data Class_ task button.

1. |  In the ribbon toolbar, right click on the _Data Class_ task button and then select _Delete from Toolbar_ from the popup menu.  
  
      
---|---  
2. |  A message asks you to confirm that you want to delete this button. Click _Yes_.  
  
      
3. |  The _Data Dictionary_ task button is removed from the ribbon toolbar.  
  
      
  
**_OR_**

**_Method 2:_**

In this example, you will be removing the _Data Dictionary_ task button.

1. |  Invoke the **Maintain IDE Toolbar Buttons** window by using either of the two methods mentioned previously.  
---|---  
2. |  Click anywhere in the Button #2 row for the _Data Dictionary_ task button.  
  
      
3. |  Click the _Delete Row_ button.  
  
      
4. |  The _Data Dictionary_ task button row is deleted.  
  
      
5. |  Click _OK_ to save your changes.  
6. |  The _Data Dictionary_ task button is removed from the ribbon toolbar.  
  
      
  
#### **Note:**  
When a task button is deleted, it is removed **_from the ribbon toolbar only_**. The task itself is not removed from the **Menu** tree view. This allows you to add a task button to the ribbon toolbar at any time if you make a mistake.

##  Web Page Folder Tabs Section

You can add up to 10 HTML folder tabs to easily access websites from the IDE.

**_How to Add a New Folder Tab_**

These steps show you how to add a new web page folder tab to the IDE.

1. |  Click the _Folders_ button located to the right of the _Toolbar_ button.  
  
      
---|---  
2. |  The **Maintain IDE HTML Tabs** window opens. Tab #1, which is named **Help** , is already provided. It cannot be modified, deleted or moved.  
  
      
3. |  You will be adding Tab #2 to launch the PVX Plus YouTube page. Under the **Tab Name** column, enter _PVX Plus Videos_ as the name to appear on the folder tab.  
  
      
4. |  Under the **Tab URL** column, enter _https://www.youtube.com/pvxplus_.  
  
      
5. |  Click _OK_ to save your changes.  
6. |  The **PVX Plus Videos** folder tab is added.  
  
      
  
**_How to Add a Predefined Folder Tab_**

These steps show you how to add a predefined folder tab (i.e. _PxPlus Forum_ , _PVX Plus Website_ , _Knowledge Center_ and _Release Info_) to the IDE.

1. |  On the _Tab Name_ field, click the drop-down arrow and select a predefined tab name from the list. In this example, select **PxPlus Forum**.  
  
      
---|---  
2. |  The _Tab URL_ field is automatically populated.  
  
      
3. |  Click _OK_ to save your changes.  
4. |  The **PxPlus Forum** folder tab is added:  
  
  
  
**_How to Edit a Folder Tab_**

These steps show you how to edit a web page folder tab that has already been added to the IDE.

In this exercise, you will change the name of the **PVX Plus Videos** tab.

1. |  Click the _Folders_ button to invoke the **Maintain IDE HTML Tabs** window.  
---|---  
2. |  For Tab #2, click the _Tab Name_ field.  
  
      
3. |  Enter the new name, **PxPlus Videos**.  
  
      
4. |  Click _OK_ to save your changes.  
5. |  The tab is changed to **PxPlus Videos**.  
  
      
  
**_How to Change the Order of the Folder Tabs_**

These steps show you how to change the order of the web page folder tabs on the IDE.

In this exercise, you will be moving the **PxPlus Videos** tab.

1. |  Click the _Folders_ button to invoke the **Maintain IDE HTML Tabs** window.  
---|---  
2. |  Under the _Tab Name_ column, click on **PxPlus Videos**.  
3. |  Click the _Move Down_ button.  
  
      
4. |  This tab now becomes Tab #3.  
  
      
5. |  Click _OK_ to save your changes.  
6. |  The **PxPlus Videos** tab is now the third tab.  
  
      
  
**_How to Delete a Folder Tab_**

These steps show you how to remove a web page folder tab from the IDE.

In this exercise, you will remove the **PxPlus Forum** tab.

1. |  Click the Folders button to invoke the **Maintain IDE HTML Tabs** window.   
---|---  
2. |  Under the _Tab Name_ column, click on **PxPlus Forum**.  
3. |  Click the _Delete Row_ button.  
  
      
4. |  The _PxPlus Forum_ row is removed.  
  
      
5. |  Click _OK_ to save your changes.  
6. |  The **PxPlus Forum** tab is removed. Two tabs, **Help** and **PxPlus Videos** , remain.  
  
      
  
**_Using the Navigation Buttons_**

Four navigation buttons are provided to control the current website displayed:

  |  **Home** |  Returns the current website to home.  
---|---|---  
  |  **Back** |  Moves the website one page back.  
  |  **Forward** |  Moves the website one page forward.  
  |  **Refresh** |  Refreshes the current website.  
  
## See Also

**[IDE Main Launcher (Windows)](../PxPlus%20IDE/IDE%20Main%20Launcher.md)**

 

 

 
