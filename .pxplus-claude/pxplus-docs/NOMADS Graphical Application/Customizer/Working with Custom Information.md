# Customizer 

**Working with Custom Information** |  **__**  
---|---  
  
The **[Customizer General Maintenance](Working%20with%20Custom%20Information.htm#custom_gen_maint)** and **[Customize](Working%20with%20Custom%20Information.htm#customize)** windows can be used to access and update the definitions for generating custom information on a panel. Developers (and users with ADMIN or CUSTOMIZER access) are able to access the definition of any panel in any library using **Customizer General Maintenance**. Specific definitions that are accessed via **Customizer General Maintenance** or invoked for the **_currently open panel_** are modified using the **Customize** window.

The options for creating, updating and removing a definition (and the criteria of a definition) using these windows are explained below.

##  Customizer General Maintenance

**Customizer General Maintenance** can be accessed from within the PxPlus development environment or at run time by users with ADMIN or CUSTOMIZER security classifications. See **[Defining Custom Information](Defining%20Custom%20Information.md)** and **[Security Considerations](Security%20Considerations.md)**. This window allows you to create, edit or delete the definition for customized information associated with _any_ panel in _any_ library to which you have access.

> To invoke this window, use one of the following methods:

**Location** |  **Method**  
---|---  
From **[NOMADS Library Object Selection](../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** |  Click the _Customize_ tool bar button.  
  
_(The Customize button was added in PxPlus 2017.)_  
From **[NOMADS Library Object Selection](../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** |  Right click on a panel object in the Object list and select _Customize Panel_.  
From **[NOMADS Library Object Selection](../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** |  Select a panel object in the Object list and from the _Utilities_ menu, select _Customize Panel_.  
  
The **Customizer General Maintenance** window is divided into two tabbed folders:

|  **[Custom Information](Working%20with%20Custom%20Information.htm#maint_options)** |  Used to create, remove or update a custom panel definition.  
---|---|---  
|  **[User Files](Working%20with%20Custom%20Information.htm#maint_user_files)** |  Used to create, remove or update custom user files, which are defined by the user and are not standard application files. See **[Custom User Files](Custom%20User%20Files.md)**.  
  
This window consists of the following options:

_User_ |  Indicates the intended audience for the definitions selected. Enter or select a valid User ID to list all definitions belonging to a specific (_Personal_) user. Select _Public_ from the drop-down list to display all public panels and to create, update or delete general usage definitions. Select _All_ from the drop-down list to display all public and personal definitions within the current library.  
---|---  
**Custom Information**  
_Library_ |  Indicates the path and file name of the library selected. Click the Query button to specify a different library file.  
_Add_ |  Launches the **Add a Custom Definition** window for selecting a panel to customize. Once the definition is created for the selected panel, its name will be added to the list of definitions.  
_Remove_ |  Removes the selected panel definition from the list. This invokes a warning message that you are about to delete custom information for the selected panel and asks if you wish to continue.  
_Properties_ |  Launches the **[Customize](Working%20with%20Custom%20Information.htm#customize)** window for editing the information items for the selected panel definition.  
**User Files**  
_Add_ |  Launches the **Define a User File** window for creating a new user file. See **[Custom User Files](Custom%20User%20Files.md)**.  
_Remove_ |  Deletes the selected user file.  
_Properties_ |  Launches the **Define a User File** window for editing a selected user file. See **[Custom User Files](Custom%20User%20Files.md)**.  
_View Contents_ |  Displays a window for viewing the contents of the selected user file.  
_Change Contents_ |  Launches the PxPlus **[File Update Utility](../../File%20Update%20Utility.md)** for viewing, modifying and updating individual records in the selected user file.  
  
##  Customize

The **Customize** window displays the information items that comprise a custom panel definition.

To invoke this window, use one of the following methods:

**Location** |  **Method**  
---|---  
From **[Customizer General Maintenance](Working%20with%20Custom%20Information.htm#custom_gen_maint)** |  To **_add a new_** custom definition: On the **Customizer General Maintenance** > **Custom Information** tab, click the _Add_ button and select a panel from the list of panels in the current library. The **Customize** window is displayed.  
From **[Customizer General Maintenance](Working%20with%20Custom%20Information.htm#custom_gen_maint)** |  To **_edit an existing_** custom definition: On the **Customizer General Maintenance** > **Custom Information** tab, select an existing panel definition from the list and click the _Properties_ button. The **Customize** window is displayed.  
From a panel at run time |  When invoked from a panel _at run time_ , the custom definition will be specific to the _currently open_ panel. To invoke, use one of the following methods:

  * Right click on the panel's title bar and select _Customizer_ from the popup menu.
  * Right click on a _blank_ area inside the panel _(not on a control)_ and select _Customize Panel_ from the popup menu.
  * If custom definitions were previously created for the panel, right click on the _Custom Information_ grid and select _Customize Panel_ from the popup menu. See **[Displaying Custom Information](Overview.htm#Mark1)**.

The **Customize** window is displayed with the panel object name and library pathname in the title bar. This window is divided into two tabbed folders: **[Custom Information](Working%20with%20Custom%20Information.htm#customize_window)** and **[User Files](Working%20with%20Custom%20Information.htm#user_files)**.  
  
The **Customize** window consists of the following:

**_Current definitions available: xxx_** |  **_(Applicable when Customize window is invoked from a panel at run time)_** Display-only text for indicating whether _Personal_ and/or _Public_ custom definitions are available for the currently open panel. To see a list of available customizations, select either _Personal_ or _Public_ from the adjacent drop box.

#### **Note:**  
When creating a custom definition for the _currently open_ panel, users that have ADMIN or CUSTOMIZER access will be able to specify whether the definition is to be **_Personal_** or **_Public_**. Users without this access are only able to create personal definitions. See **[Security Considerations](Security%20Considerations.md)**.

_(Current definitions text was added in PxPlus 2018.)_  
---|---  
**Custom Information**  
_Add_ |  Launches the **Update Custom Information** window for creating an information item for the definition based on **[Information Sources](Information%20Sources.md)**.  
_Remove_ |  Deletes the selected information item.  
_Properties_ |  Launches the **Update Custom Information** window for editing a selected information item.  
_Move Up  
Move Down_ |  Changes the order of the information items in the list.  
_Merge_ |  Launches the **Merge Customizer Items** window for selecting existing custom items from other definitions to add to your custom definition. Select items from public definitions and your own personal definitions, as well as items from other users that have been marked as _shareable_. Those with ADMIN or CUSTOMIZER access will have access to all custom items. _(The Merge button was added in PxPlus 2018.)_  
_Clear All_ |  Removes all information items from the current or selected panel. _(The Clear All button was added in PxPlus 2018.)_  
**User Files**  
_Add_ |  Launches the **Define a User File** window for creating a new user file. See **[Custom User Files](Custom%20User%20Files.htm#Mark1)**.  
_Remove_ |  Deletes the selected user file.  
_Properties_ |  Launches the **Define a User File** window for editing a selected user file. See **[Custom User Files](Custom%20User%20Files.htm#Mark1)**.  
  
When custom information is defined at run time, the information is displayed immediately upon returning from the **Customize** window unless the Customizer grid is on a fixed size panel, in which case it is displayed the next time the panel is invoked. See **[Displaying Custom Information](Overview.htm#Mark1)**.
