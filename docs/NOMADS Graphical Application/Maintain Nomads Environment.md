# NOMADS Graphical Application

**NOMADS Environment Maintenance**|   
---|---  
  
The **NOMADS Environment Maintenance** utility is designed to provide **_one central location_** to display and maintain **[%NOMADS Properties](Appendix/NOMADS%20Variables/Overview.htm#properties_list)** used by the %NOMADS object (***obj/nomads.pvc**) to control the behavior of different aspects of the NOMADS environment. Previously, these settings might have been added to the **[START_UP Program](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/START_UP%20Initialization%20Program.md)** or another program to tailor the NOMADS environment for your application.

This utility displays a maintenance panel with a grid that lists available %NOMADS properties. Property values are entered in the grid and saved to a user-defined _Settings File_. The **[Load Properties](Maintain%20Nomads%20Environment.htm#loadprops)** button loads the property values in the grid with any non-null values currently set in the %NOMADS object.

_(The Load Properties button was added in PxPlus 2023 Update 1.)_

Clicking on a row displays a description of the selected property in the area below the grid. The description provides information on how to define the property's value. Depending on the property, the value may be set by a check box, a string or numeric entry, selected from a query containing data from another table, or selected from a predefined list of possible values.

> _(The NOMADS Environment Maintenance utility was added in PxPlus 2020.)_

**_Property Maintenance Utility_**

The **NOMADS Environment Maintenance** utility uses the **[Property Maintenance Utility](Property%20Maintenance.md)** (***win/propset**) to display the properties in the grid and keep track of their values. The information used to load the %NOMADS properties in the grid is stored in a PxPlus system _Definition File_ (***win/nomads_properties.txt**). The property values entered in the grid are saved to a user-defined _Settings File_ (**nomads_prop_save.txt**) in the directory where the data for the current working directory is stored.

On instantiation, the %NOMADS object checks for the existence of the user-defined _Settings File_ and applies the property values that have been set. See **[Applying %NOMADS Properties](Maintain%20Nomads%20Environment.htm#applying_props)**.

The **Property Maintenance** utility is designed to provide the foundation for displaying and maintaining properties. This utility can be used for **_any_** PxPlus object within your application.

_(The Property Maintenance utility *win/propset was added in PxPlus 2020.)_

##  Invoking NOMADS Environment Maintenance

To invoke the **NOMADS Environment Maintenance** utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Graphical Application Builder (NOMADS)_ category. Select _Maintain NOMADS Environment_.  
From the **[NOMADS Session Manager](NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  From the _Options_ menu, select _Maintain NOMADS Environment_.

#### **Note:**  
When the **NOMADS Environment Maintenance** utility is accessed from the NOMADS Session Manager, some of the %NOMADS object properties (i.e. **[Alt_Sfx$](Appendix/NOMADS%20Variables/Overview.htm#alt_sfx)**, **[Def_Sfx$](Appendix/NOMADS%20Variables/Overview.htm#def_sfx)** and **[Last_View$](Appendix/NOMADS%20Variables/Overview.htm#lastview)**) have been set for use by the NOMADS Designer programs. Therefore, the grid values that are loaded when selecting the **[Load Properties](Maintain%20Nomads%20Environment.htm#loadprops)** button may be affected.  
  
From the PxPlus Command line |  Enter: **call "*win/propset;maint","*win/nomads_properties.txt","nomads_prop_save.txt"**  
  
The following window is displayed:

> This window consists of the following:

_Definition File_ |  Displays the pathname of the PxPlus system _Definition File_ (***win/nomads_properties.txt**) used to load %NOMADS properties into the grid.  
---|---  
_Settings File_ |  Displays the pathname of the user-defined _Settings File_ (**nomads_prop_save.txt**) used to save the values entered in the grid.

#### **Note:**  
The name and location of this file **_must not be changed_**. It is used exclusively for %NOMADS properties settings that are associated with a working directory.  
  
To copy the contents of this file to another location, use the _Copy To_ button.  
  
_Load Properties_ |  Button that is used to load the grid values with any non-null values currently set in the %NOMADS object. These values may have been set in the Start_up program or in subsequent programs that are run prior to accessing the **NOMADS Environment Maintenance** utility. Selecting this button displays a message, which explains that grid values not currently set will be populated with the associated %NOMADS object property values. You are asked to choose whether you want to proceed, or you can click the _Cancel_ button to abort. Responding _Yes_ will change the grid values to the %NOMADS object property values. Responding _No_ will leave the grid values unchanged in cases where the grid values and the %NOMADS object property values differ. Be aware that if the **NOMADS Environment Maintenance** utility was accessed from the NOMADS Session Manager, some of the %NOMADS object properties (i.e. **[Alt_Sfx$](Appendix/NOMADS%20Variables/Overview.htm#alt_sfx)**, **[Def_Sfx$](Appendix/NOMADS%20Variables/Overview.htm#def_sfx)** and **[Last_View$](Appendix/NOMADS%20Variables/Overview.htm#lastview)**) have been set for use by the NOMADS designer programs. Therefore, the grid values that are loaded when selecting the _Load Properties_ button may be affected.

#### **Note:**  
To ensure that any new values are saved and %NOMADS object property values are updated, click the _Apply_ button.

_(The Load Properties button was added in PxPlus 2023 Update 1.)_  
_Copy To_ |  Launches the **Copy Settings File** window for copying the user-defined _Settings File_ (**nomads_prop_save.txt**) to another directory. If the "copy to" file already exists in the specified directory, a message will display.

#### **Important Note:**  
The default "copy to" file is **nomads_prop_save.txt**. This is the user-defined _Settings File_ that the %NOMADS object checks for when instantiated.  
  
A different "copy to" file may be entered; however, if the file will be used to apply %NOMADS property settings in another location, the user-defined _Settings File_ ** _must_** be named "**nomads_prop_save.txt** ".  
  
_(Properties Grid)_ |  The grid lists available %NOMADS properties and is also used to define the settings for desired properties. See **[%NOMADS Properties](Appendix/NOMADS%20Variables/Overview.htm#properties)**. This grid consists of the following columns: |  _Category_ |  Each property is assigned to a category, which identifies the PxPlus feature or functionality affected by the property and makes it easier to find a particular property (i.e. _Get_File_Box_). Click the column heading to toggle between ascending or descending order.  
---|---  
_Property_ |  By default, properties are initially sorted by _Category_ and then by _Property_ name for each _Category_. To sort the entire list by _Property_ name, click the _Property_ column heading to toggle between ascending or descending order.  
_Set_ |  Select this check box to set the value entered for the property to allow it to be applied. This check box is selected automatically when a value is entered in the _Value/Expression_ column. If a value is entered ** _and_** the _Set_ check box is **_not_** selected, the value will **_not_** be applied after it is saved in the user-defined _Settings File_. To sort the entire list to see which properties have the _Set_ check box selected, click the _Set_ column heading.  
_Exp_ |  Select this check box if the value to be entered in the _Value/Expression_ column will be an **_expression_**.  
_Value/Expression_ |  Enter a value for the property. Depending on the contents of the PxPlus system _Definition File_ , the value may be set by a check box, a string or numeric entry, selected from a query containing data from another table, or selected from a predefined list of possible values.  
**Property Description** |  Describes the selected %NOMADS property and the method for setting its value when clicking on a row in the grid.  
_Nomads Properties Help_ |  Hyperlink-style button that launches a concurrent panel displaying the **[%NOMADS Properties](Appendix/NOMADS%20Variables/Overview.htm#properties)** Help page. This panel can also be resized.  
_Reset_ |  Clears the contents of the user-defined _Settings File_ so that properties can be defined again from the beginning. Prior to clearing this file, a message will display.  
_Display Settings_ |  Displays the **_last saved_** contents of the user-defined _Settings File_ in a separate window (for viewing only).  
_OK_ |  Saves the values in the _Value/Expression_ column to the user-defined _Settings File_ and exits the utility. If a value was entered **_and_** the _Set_ check box was **_not_** selected, the value will be saved as a **_remark line_** (i.e. begins with **!**  _exclamation point_) and will **_not_** be applied. See **[Example](Maintain%20Nomads%20Environment.htm#example)** below. Therefore, any property values set by another means (e.g. in the **[START_UP Program](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/START_UP%20Initialization%20Program.md)**) will **_not_** be overwritten unless deliberately set in the _Properties Grid_. **_Null_** values that do **_not_** have the _Set_ check box selected are **_not_** saved.  
_Cancel_ |  Exits the utility without saving any values.  
_Apply_ |  Similar to the _OK_ button but does not exit the utility after saving.  
  
##  Applying %NOMADS Properties

Each time that the %NOMADS object is instantiated, any values in the user-defined _Settings File_ are automatically applied. Since different working directories may contain different versions of the user-defined _Settings File_ , it is possible to define NOMADS environments that are tailored to each location.

The following syntax is used to apply the %NOMADS properties:

> **call** "*win/propset;apply",%nomads,_"nomads_prop_save.txt"_

**_Where:_**

_"nomads_prop_save.txt"_ is the user-defined _Settings File_.

**_Example:_**

Below is an example of a user-defined _Settings File_ that contains the property values that were entered using this utility:

> Chart$="plus"  
>  Chart_Colors$=X$  
>  ! PublicAutoChart=1 (This line begins with ! (exclamation point), indicating it is a remark line. As a result, this value will not be applied.)  
>  FM_Clear_Option$="1"  
>  FM_Update_Option$="L"  
>  SuppressWindXMakeFolder=1

#### **Note:**  
When instantiated, the %NOMADS object looks for the **nomads_prop_save.txt** file and uses the first file found using the current file prefixes.

## See Also

**[%NOMADS Properties](Appendix/NOMADS%20Variables/Overview.htm#properties)**  
**[Property Maintenance Utility](Property%20Maintenance.md)**  
**[START_UP Initialization Program](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/START_UP%20Initialization%20Program.md)**
