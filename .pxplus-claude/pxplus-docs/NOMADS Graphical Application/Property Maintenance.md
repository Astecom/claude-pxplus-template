# NOMADS Graphical Application

**Property Maintenance Utility (*win/propset)**|   
---|---  
  
The **Property Maintenance** utility (***win/propset**) is designed to provide the foundation for displaying and maintaining properties. This utility can be used for **_any_** PxPlus object within your application.

In PxPlus, this functionality is used by the **[NOMADS Environment Maintenance](Maintain%20Nomads%20Environment.md)** utility to display and maintain **[%NOMADS Properties](Appendix/NOMADS%20Variables/Overview.htm#properties)** used by the %NOMADS object (***obj/nomads.pvc**).

_(The Property Maintenance utility was added in PxPlus 2020.)  
(The NOMADS Environment Maintenance utility was added in PxPlus 2020.)_

The **Property Maintenance** utility uses two files, a developer-defined **_Definition File_** and a user-defined **_Settings File_**. The developer-defined Object _Definition File_ is a simple text file that stores information about a PxPlus object and the properties associated with it. At run time, this information is presented in a grid format on the maintenance panel. Property values are entered in the grid and saved to a user-defined _Settings File_. These settings may be applied to the object _on demand_ by calling the utility's ***win/propset;apply** method. See **[Applying the Properties to the Object](Property%20Maintenance.htm#applying)**.

The ***obj/param** object can also be used to create, load and maintain an independent object consisting of just the parameters as defined in a **_Definition File_**. For usage details with an example, see **[*OBJ/PARAM](../utilities/obj_param.md)**.

_(The *OBJ/PARAM object was added in PxPlus 2020.)_

## Invocation

To run an instance of the **Property Maintenance** utility, the following **CALL** syntax is used:

> **call "*win/propset;maint"** , _def_file_ _$_ , _settings_file_ _$_

**_Where:_**

|  _def_file_ _$_ |  Pathname of the developer-defined Object _Definition File_ that contains the properties definitions. See **[Defining a Definition File](Property%20Maintenance.htm#definition)**.  
---|---|---  
|  _settings_file_ _$_ |  Pathname of the user-defined _Settings File_ that contains the properties and their values to be set. See **[Settings File](Property%20Maintenance.htm#settings_file)**.  
  
**_Example:_**

One way to better understand how this works is to look at the PxPlus **[NOMADS Environment Maintenance](Maintain%20Nomads%20Environment.md)** utility as an example. This utility, which was created for the %NOMADS object, is invoked by using the following syntax:

> **call "*win/propset;maint"** ,"*win/_nomads_ __properties.txt_ ","_nomads_ __prop_ __save.txt_ "

**_Where:_**

|  _nomads_ __properties.txt_ |  PxPlus system _Definition File_ that stores information about the %NOMADS object and the properties associated with it.  
---|---|---  
|  _nomads_ __prop_ __save.txt_ |  User-defined _Settings File_ that stores the values entered in the _Properties Grid_ for %NOMADS properties.  
  
Below are two examples of maintenance panels created with this utility. See **[Performing the Property Maintenance](Property%20Maintenance.htm#prop_maint)**.

|  |  This is an example of the maintenance panel that displays at run time for %NOMADS properties.  
  
It also shows a few values that have been entered by a user.  
  
The properties in the grid are loaded based on the contents of the _Definition File_ that was created specifically for the %NOMADS object.  
---|---|---  
|  |  This is an example of how you can use the Property Maintenance utility to create a maintenance panel, similar to the one above, for **_any_** PxPlus object within **_your_** application. This is a sample maintenance panel that was created to display and maintain properties for the PxPlus Excel Object. For details on how this example was created, see **[Example: Property Maintenance Task](Property%20Maintenance.htm#excel_obj)**. After creating your Property Maintenance task, you can add it to the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** for easy access. To do this, see **[Adding a Property Maintenance Task to IDE Main Launcher](Property%20Maintenance.htm#add_ide)**.  
  
##  Defining a Definition File

To maintain the properties of a PxPlus object within your application, a developer-defined Object _Definition File_ must be manually defined using any name you wish, such as _yourobject_properties.txt_. The _Definition File_ is a simple text file used for entering specific details about the object and its associated properties.

The _Definition File**must**_ adhere to the **_Definition File Format_** described in the table below. This format was used in defining the PxPlus system _Definition File_ for the %NOMADS object. To look at an excerpt from this file, see **[Definition File - %NOMADS Object](Property%20Maintenance.htm#nomads_deffile)**.

**_Definition File Format_**

Although the **_Settings_** below are shown in uppercase, the actual text used in the developer-defined _Definition File_ is **_case insensitive_**. Spaces are also allowed on either side of the **=** (_equals sign_).

**_Example:_**

Either **_Title =_** or **_title =_** (with spaces) is a valid setting, as is **_Title=_** or **_title=_** (without spaces).

**Setting******|  **Description**  
---|---  
**TITLE=** |  **_(Required)_** The developer-defined Object _Definition File**must**_ begin with a line that specifies the **_Title_** to display at the top of the maintenance panel. **_Example:_** TITLE=Maintain NOMADS Environment  
**OBJECT=** |  **_(Optional)_** If desired, enter an object handle that will display before the Property name (beside the **Property Description:** prompt near the bottom of the maintenance panel). Defaults to __obj_ if not set. **_Example:_** OBJECT=%NOMADS  
**HELPLINK=** |  **_(Optional)_** If desired, enter a URL address for a resulting link button control that will display to the right of the **Property Description** text (near the bottom of the maintenance panel). When selected, this link will launch a concurrent panel showing the Web page. See **HELPLINK_TEXT=** below. **_Example:_** HELPLINK=https://manual.pvxplus.com/PXPLUS/NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm  
**HELPLINK_TEXT=** |  **_(Optional)_** If **HELPLINK=** is set, "Help" will display as the default text for the resulting link button control. To override the default text, use this setting to enter the desired text. **_Example:_** HELPLINK_TEXT=Nomads Properties Help  
**CATEGORY=** |  **_(Optional)_** If desired, categories can be used to organize the properties into sub-sections to make locating a particular property easier, particularly if there are many properties that may be set. Define all the properties that belong to a certain category before entering the name of another category. **_Example:_** CATEGORY=Charts _then define all the properties for the Charts Category_ CATEGORY=Controls _then define all the properties for the Controls Category_

#### **Note:**  
If no **CATEGORY=** settings are defined, no _Category_ column will display in the _Properties Grid_.  
  
**PROPERTY=** |  **_(Required)_** Each object property must be defined and should include the **PROPERTY=** and **NOTE=** settings at a minimum. **_Example:_** PROPERTY=Center_Wdw  
NOTE=Select to set center next panel when displayed. For simple text input, these two settings may be all that is needed to define the property. Depending on the desired type of input, additional **_Property Settings_** (in the table below) can also be used.

#### **Note:**  
If the **NOTE=** text will be lengthy, line feeds can be inserted by using the **|**_(pipe symbol)_ where desired to make the text easier to read.  
  
**_Example:_**  
  
NOTE=This is the first part of the note.**|** This is the second part of the note that will display on the line below.

**_Property Settings_** Other settings, besides the **PROPERTY=** and **NOTE=** settings, can be used to define the property: |  **LEN=** |  Used to limit the allowable length of string input. **_Example:_**  
  
LEN=2  
---|---  
**CELLFORMAT$=** |  Used to specify an input format and length for numeric input. **_Example:_**  
  
CELLFORMAT$="####"  
**CELLTYPE$=** |  Used to specify the grid cell type. Some commonly used cell types are "CheckMark", "DropBox", "Lookup" and "LookupHideBtn". See **[Cell Types](../directives/grid.htm#Mark8)**. **_Example:_**  
  
CELLTYPE$="Lookup"

#### **Note:**  
Use CELLTYPE$="CheckMark" for numeric properties that are set to either **1** (_On_) or **0** (_Off_).  
  
**LOOKUP=** |  Used to indicate a method in a program that can be called to perform lookup logic. **_Example:_** LOOKUP="_program_name_ ";"_method_name_ " **_Where:_** The corresponding method would look something like: METHOD_NAME: g1'row=g1'CurrentRow,g1'column=g1'currentcolumn,qry_val$=g1'value$ process "SOMEQUERY","",qry_val$,[optional parameters] g1'row=GRID_1.ROW,g1'column=5,g1'value$=qry_val$ return For common types of lookups, the ***win/propset** program also recognizes the following standard settings: |  LOOKUP=File |  Displays a GET_FILE_BOX that will return a file path.  
---|---  
LOOKUP=Directory |  Displays a GET_FILE_BOX that will return a directory path.  
LOOKUP=Color (**_or_** Colour) |  Displays the standard PxPlus Color query.  
LOOKUP=Font |  Displays the standard PxPlus Font query  
LOOKUP=Bitmap |  Displays the standard PxPlus Bitmap query  
LOOKUP=Query |  Displays a list of all Query library panels.  
LOOKUP=Popup |  Displays a list of all Popup library panels.  
LOOKUP=Class |  Displays a list of Data Classes.  
LOOKUP=Theme |  Displays a list of Themes.  
  
When using these standard LOOKUP settings, a BITMAP$ value will be provided; however, it may be overridden using the BITMAP$= setting.  
  
**BITMAP$=** |  Bitmap to be used for the Lookup button. **_Example:_** BITMAP$="!Find"  
**TEXT$=** |  For a Drop Box entry, set TEXT$= to a delimited string of the available options, ending with the delimiter character. **_Example:_** TEXT$="Option 1/Option 2/Option 3/"  
**CELLTBL$=** |  If a Drop Box entry requires a translation table, set CELLTBL$= to the translation values (with no delimiters). **_Example:_** CELLTBL$="123"  
**CELLTBLWIDTH=** |  If a Drop Box entry with a translation table has translation values longer than one character, set CELLTBLWIDTH= to the length of the translation values. **_Example:_** CELLTBL$="JanFebMarAprMayJunJulAugSepOctNovDec"  
CELLTBLWIDTH=3  
  
**_Definition File -_****_%NOMADS_ _Object_**

To serve as a guide when creating a developer-defined Object _Definition File_ , it may be helpful to look at the contents of the **nomads_properties.txt** file for the %NOMADS object, located in the ***win** directory.

**_Example:_**

To provide an example of a developer-defined Object _Definition File_ , the following is an excerpt from the **nomads_properties.txt** file that shows the **TITLE=** , **OBJECT=** and **HELPLINK=** settings and the other types of property definitions available:

> ! Title for maintenance dialog  
>  TITLE=Maintain NOMADS Environment  
>  ! Object name for displaying Property Description  
>  OBJECT=%NOMADS  
>  ! Optional Help link  
>  HELPLINK=https://manual.pvxplus.com/PXPLUS/NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm  
>  HELPLINK_TEXT=Nomads Properties Help  
>   
>    
>   
>  CATEGORY=Menu Bar  
>   
>  PROPERTY=Menu$  
>  NOTE=Enter the menu group or item to be pasted to the menu bar definition in a different panel.||Example: Group  
>   
>  PROPERTY=Menu_LeftEdge_Clr$  
>  NOTE=Enter the left edge color for menu items.  
>  CELLTYPE$="Lookup"  
>  LOOKUP=Color  
>   
>  PROPERTY=Menu_TextBackground_Clr$  
>  NOTE=Enter the text background color for menu items.  
>  CELLTYPE$="Lookup"  
>  LOOKUP=Color  
>  BITMAP$="!Find"  
>   
>  CATEGORY=Message Library  
>   
>  PROPERTY=Msgmnt$  
>  NOTE=Enter the name of message library being updated in the Message Library Maintenance.  
>  CELLTYPE$="Lookup"  
>  LOOKUP=File  
>   
>  CATEGORY=Panel Persistence  
>   
>  PROPERTY=Panel_Info_Force  
>  NOTE=Select to automatically save panel/control coordinates on the termination of a panel whether or not their values have changed, if panel/object persistence is turned on. Used with Panel Persistence.  
>  CELLTYPE$="CheckMark"  
>   
>  PROPERTY=Panel_Info_Prog$  
>  NOTE=Enter the name of the program that will read and write the panel information to a disk file. Use the generic program *winpnl or create your own. Used with Panel Persistence.  
>  CELLTYPE$="Lookup"  
>  LOOKUP=File

##  Performing the Property Maintenance

The **Property Maintenance** panel consists of the following:

_Definition File_ |  Displays the pathname of a developer-defined Object _Definition File_ used to load the properties into the grid. This is the first parameter passed when calling the ***win/propset;maint** method.  
---|---  
_Settings File_ |  Displays the pathname of the user-defined _Settings File_ used to save the values entered in the _Properties Grid_. This is the second parameter that is needed when calling the ***win/propset;maint** method.  
_Copy To_ |  Launches the **Copy Settings File** window for copying the user-defined _Settings File_ to another directory.  
_(Properties Grid)_ |  The grid lists the properties defined for the PxPlus object and is also used to define the settings for desired properties. It consists of the following columns: |  _Category_ |  Properties can be sorted into categories to make it easier to find a particular property. Click the column heading to toggle between ascending or descending order.  
---|---  
_Property_ |  By default, properties are initially sorted by _Category_ (if defined) and then by _Property_ name for each _Category_. To sort the entire list by _Property_ name, click the _Property_ column heading to toggle between ascending or descending order.  
_Set_ |  Select this check box to set the value entered for the property to allow it to be applied. This check box is selected automatically when a value is entered in the _Value/Expression_ column. If a value is entered ** _and_** the _Set_ check box is **_not_** selected, the value will **_not_** be applied after it is saved in the user-defined _Settings File_. To sort the entire list to see which properties have the _Set_ check box selected, click the _Set_ column heading.  
_Exp_ |  Select this check box if the value to be entered in the _Value/Expression_ column will be an **_expression_**.  
_Value/Expression_ |  Enter a value for the property. Depending on the contents of the developer-defined Object _Definition File_ , the value may be set by a check box, a string or numeric entry, selected from a query containing data from another table, or selected from a predefined list of possible values.  
**Property Description** |  Describes the selected property and the method for setting its value when clicking on a row in the grid.  
_Reset_ |  Clears the contents of the user-defined _Settings File_ so that properties can be defined again from the beginning. Prior to clearing this file, a message will display.  
_Display Settings_ |  Displays the **_last saved_** contents of the user-defined _Settings File_ in a separate window (for viewing only).  
_OK_ |  Saves the values in the _Value/Expression_ column to the user-defined _Settings File_ and exits the utility. If a value was entered **_and_** the _Set_ check box was **_not_** selected, the value will be saved as a **_remark line_** (i.e. begins with **!**  _exclamation point_) and will **_not_** be applied. Therefore, any property values set by another means (e.g. in the **[START_UP Program](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/START_UP%20Initialization%20Program.md)**) will **_not_** be overwritten unless deliberately set in the _Properties Grid_. **_Null_** values that do **_not_** have the _Set_ check box selected are **_not_** saved.  
_Cancel_ |  Exits the utility without saving any values.  
_Apply_ |  Similar to the _OK_ button but does not exit the utility after saving.  
  
##  Settings File

Once the values for the desired properties have been entered in the _Properties Grid_ on the maintenance panel, the values can then be saved to the user-defined _Settings File_ when either the _OK_ or _Apply_ button is selected.

**_Example:_**

To provide an example of a user-defined _Settings File_ , below is a sample **nomads_prop_save.txt** file that shows the %NOMADS properties that were set:

> Chart$="plus"  
>  Chart_Colors$=X$  
>  ! PublicAutoChart=1 (This line begins with ! (exclamation point), indicating it is a remark line. As a result, this value will not be applied.)  
>  FM_Clear_Option$="1"  
>  FM_Update_Option$="L"  
>  SuppressWindXMakeFolder=1

##  Applying the Properties to the Object

To apply the properties (saved in the user-defined _Settings File_) to the object itself, the following syntax is used:

> **call "*win/propset;apply"** ,_object_id,settings_file_ _$_

**_Where:_**

|  _object_id_ |  Object identifier associated with the object for which the properties should be applied.  
---|---|---  
|  _settings_file_ _$_ |  Pathname of the text file containing properties and values to be set.  
  
Because the object handler is passed in the **CALL** , the object **_must_** be instantiated.

**_Example:_**

_PxPlus Excel Object Properties:_ |  X=new("*obj/excel)  
call "*win/propset;apply",_X,"excel_prop_save.txt"_  
---|---  
  
##  Example: Property Maintenance Task

This example was created using the **[PxPlus Excel Object](../PxPlus%20User%20Guide/External%20Components/PxPlus%20COM%20Support/Excel%20Object.md)**. It demonstrates how you can use this utility to define a new Property Maintenance task for **_any_** PxPlus object within **_your_** application.

**_Calling Syntax - PxPlus Excel Object_**

To run an instance of the **Property Maintenance** utility for the PxPlus Excel object, the following **CALL** syntax can be used:

> **call "*win/propset;maint"** ,"*win/_excel_properties.txt_ ","_excel_ __prop_ __save.txt_ "

**_Where:_**

|  _excel_ __properties.txt_ |  Developer-defined Object _Definition File_ used to store information about the PxPlus Excel object and the properties associated with it. See **[Definition File - PxPlus Excel Object](Property%20Maintenance.htm#deffile_excel)**.  
---|---|---  
|  _excel_ __prop_ __save.txt_ |  User-defined _Settings File_ used to store the values entered in the _Properties Grid_ for Excel object properties. See **[Settings File - PxPlus Excel Object](Property%20Maintenance.htm#setfile_excel)**.  
  
**_Definition File - PxPlus Excel Object_**

In the example below, the developer-defined Object _Definition File_ below (**excel_properties.txt**) defines the properties of the PxPlus Excel object, which are not read only.

Since the object handle is variable, no OBJECT= was used. A sort by Category (see **[CATEGORY=](Property%20Maintenance.htm#settings)** setting) was not included in this example, since only six properties were defined.

> ! Title for maintenance dialog  
>  TITLE=PxPlus Excel Object Properties

> PROPERTY=CASE_SENSITIVE_SEARCH  
>  NOTE=Defaults to 'Off' for case insensitive searches. Set to 'On' for case sensitive searches. Bitmap to display to the left of the tab, if applicable.  
>  CELLTYPE$="CheckMark"

> PROPERTY=DISPLAY_ALERTS  
>  NOTE=Allows suppression of Excel message boxes. Defaults to 'Off'.  
>  CELLTYPE$="CheckMark"

> PROPERTY=KEEP_VISIBLE  
>  NOTE=Check to keep the Excel application active and visible when the PxPlus Excel object is dropped. Has no effect if the VISIBLE property has not been set. Defaults to 'Off'.  
>  CELLTYPE$="CheckMark"

> PROPERTY=MATCH_ENTIRE_CELL  
>  NOTE=Defaults to 'Off' for partial matches within cell contents. Set to 'On' to force matches on the entire cell contents.  
>  CELLTYPE$="CheckMark"

> PROPERTY=SEP$  
>  NOTE=Delimiter used on various Read$ and Write methods to separate individual cell values. Defaults to the standard PxPlus field delimiter SEP ($8A$).  
>  LEN=10

> PROPERTY=VISIBLE  
>  NOTE=Allows the Excel application to be visible. Defaults to 'Off'.  
>  CELLTYPE$="CheckMark"

Based on the contents of this file, the following maintenance panel displays at run time, which can be used to enter values:

> [ ](Property%20Maintenance.htm#settings)

**_Settings File - PxPlus Excel Object_**

In the example below, the user-defined _Settings File_ below (**excel_prop_save.txt**) stores the values entered for the PxPlus Excel object properties in the _Properties Grid_ above.

> KEEP_VISIBLE=1  
>  SEP$=excel_sep$  
>  VISIBLE=1

##  Adding a Property Maintenance Task to IDE Main Launcher

After creating your **Property Maintenance** task, you can add this task to the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)**.

To do this, the **_first step_** is to define a task with this program. In the **[Task Definition](../PxPlus%20IDE/IDE%20Main%20Launcher.htm#taskdefinition)** dialog, enter the following:

|  _Panel/Program_ |  Enter: **"*win/propset;maint"**  
---|---|---  
|  _Parameter 1_ |  This is the first argument, _def_file_ _$_ , which is the pathname of the developer-defined Object _Definition File_ that contains property definition information.  
|  _Parameter 2_ |  This is the second argument, _settings_file_ _$_ , which is the pathname of the user-defined _Settings File_ that contains the properties and values to be set.  
  
Once the task is defined, the **_second_** step is to add it to a menu in the IDE Main Launcher using **[Menu Maintenance](../PxPlus%20IDE/IDE%20Main%20Launcher.htm#menumaint)**.

**_Example:_**

As an example, below is the task definition for the **NOMADS Environment Maintenance** utility:

> ## See Also

**[PROPERTY Declare Object Properties](../directives/property.md)**  
**[NOMADS Environment Maintenance](Maintain%20Nomads%20Environment.md)**  
**[START_UP Initialization Program](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/START_UP%20Initialization%20Program.md)**  
**[*OBJ/PARAM Parameter Object](../utilities/obj_param.md)**
