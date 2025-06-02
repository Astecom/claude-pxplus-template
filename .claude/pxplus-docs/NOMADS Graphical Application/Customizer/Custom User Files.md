# Customizer   
  
**Custom User Files** |  **__**  
---|---  
  
Custom user files are not standard application files; they are defined by the users. Users define the fields in the file, which may be updated within the _Custom Information_ grid. These user files are not restricted to individual panel definitions. They can be accessed by multiple panel definitions. They can also be defined as _Personal_ or _Public_ where public user files can only be created by those with ADMIN or CUSTOMIZER security classifications. See **[Security Considerations](Security%20Considerations.md)**. Security restrictions may be placed at the file level, as well as on individual file elements.

User files can be defined by invoking the **[Customize](Working%20with%20Custom%20Information.htm#customize)** window for a specific panel or by launching **[Customizer General Maintenance](Working%20with%20Custom%20Information.htm#custom_gen_maint)**. Using the **Customize** window allows you to define personal user files (you can also define public user files if you possess _Administrator_ access). Using **Customizer General Maintenance** allows you to define public user files (you can also define personal user files for any user by entering their specific _User ID)_.

## Creating and Modifying Custom User Files

To create or remove a user file definition or update its properties, select the **User Files** tab on the **[Customize](Working%20with%20Custom%20Information.htm#customize)** or **[Customizer General Maintenance](Working%20with%20Custom%20Information.htm#custom_gen_maint)** windows. (Existing properties may not be altered if a user file is currently in use.)

The **User Files** tab presents the following:

|  _Add_ |  Launches the **[Define a User File](Custom%20User%20Files.htm#Mark1)** window for creating a new user file.  
---|---|---  
|  _Remove_ |  Deletes the selected user file.  
|  _Properties_ |  Launches the **[Define a User File](Custom%20User%20Files.htm#Mark1)** window for editing the current properties of an existing user file.  
  
In **Customizer General Maintenance** , the **User Files** tab presents two additional buttons:

|  _View Contents_ |  Launches a separate window for viewing the record contents of a selected user file.  
---|---|---  
|  _Change Contents_ |  Launches the PxPlus **[File Update Utility](../../File%20Update%20Utility.md)** that allows you to browse a selected user file, as well as update and delete individual records.  
  
##  Define a User File

To define a **_new_** User File, click the _Add_ button on the **User Files** tab to display the **Define a User File** window. To edit an **_existing_** User File that has been selected, click the _Properties_ button.

> This window consists of the following:

_Descriptive File Name_ |  Enter a descriptive file name to identify the new file.  
---|---  
_Physical File Name_ |  When a _Descriptive File Name_ for the new file is entered, a default physical file name is generated automatically. This file name can be overridden by entering your own simple file name. By default, user files are created in the _Custom_ directory, which is located in the same directory as the PxPlus executable or where the _Lib_ directory is kept (on a Vista system). This can be overridden by preloading an alternate directory path into the **[%NOMAD_Custom_Dir$](../Appendix/NOMADS%20Variables/Overview.htm#customdir)** global variable.  
**Define File Items** |  Displays a list of the individual file items (or fields) defined for the user file.  
_Add_ |  Launches the **Define File Item** window for creating a new file item. This window consists of the following: |  _Item Identifier_ |  Code name used to identify the data item.  
---|---  
_Description_ |  Enter the text to appear as a label in the _Custom Information_ grid.  
**Data Type** |  Select whether the information is _Text_ or _Calculation (Numeric)_.  
_Length_ |  Maximum length of the data.  
_Display Format_ |  **_(Optional)_** Displays the formatting that was entered or selected using the _Define_ button. Formatting for numeric data includes currency symbols, thousands separators, signs, etc. Formatting for text data, such as dates, includes dashes, slashes, etc.  
_Define_ |  Launches a separate **Numeric Format** or **Text Format** window for defining a numeric or text display format, depending on the **Data Type** selected.  
_Input Type_ |  Select one of the following: |  _Input Box_ |  Normal text cell containing one line of data.  
---|---  
_Input Box with Ellipsis_ |  Normal text cell that will show "" if the text exceeds the displayable area.  
_Multi_line_ _Input_ |  Normal text cell that can contain multiple lines of text.  
_Check Box_ |  Recessed check box (Unchecked = "0", Checked = "1").  
_Check Mark_ |  Recessed check mark (Unchecked = "0", Checked = "1").  
_Drop Box_ |  Text cell that allows the user to make a selection from a drop-down list.  
_Hidden Drop Box_ |  Same as the _Drop Box_ , but the drop-down button is shown only when focus is on the cell.  
_Variable Drop Box_ |  Same as the _Drop Box_ , but the user may also make a selection by keying in information not included in the drop box selection.  
_Control Text_ |  Add text labels for _Check Box_ and _Check Mark_ input types by entering them as control text. Item lists for the various Drop Boxes must be entered into the control text, one item per line.  
_Security_ |  Click this button to assign security levels to individual elements of public user files. If the system detects that the NOMADS security classification file does not exist, a message will display. See **[Setting Up Security Classifications](../System%20Maintenance%20Tools/Security%20Manager/Defining%20Classifications.htm#Mark1)**.  
_Remove_ |  Deletes the selected file item.  
_Properties_ |  Launches the **Define File Item** window for editing the selected file item.  
_Move Up  
Move Down_ |  Changes the order of the items in the **Define File Items** list.  
  
Keys to access user file records are not defined at this time. Instead, they are defined for individual panels when user items are selected for display. This is because the name of the key component fields may differ from panel to panel. Keys have a maximum of 127 characters.

## User File Data

Besides being displayed in a _Custom Information_ grid on a NOMADS panel, you may want to access user file data in other ways, such as for reporting, etc. User files and their elements are defined in the user definition files, _providex.udf_ and _providex.ude_. While the file definitions contained within these files are **_not_** accessible to PxPlus **[Data Dictionary Utilities](../../Data%20Dictionary/Data%20Dictionary%20Utilities/Overview.md)** or directly to the **[PxPlus SQL ODBC Driver](../../odbc/pxplus_odbc.md)**, the definitions within these files are used to embed the data dictionaries into the user files, which allow them to be accessed in other ways.

User files are standard PxPlus VLR files with embedded dictionaries. See **[Layout of a User File](File%20Definitions.htm#layout_user)**. As such, they can be accessed using standard PxPlus file I/O directives and functions. In addition, because the files contain an embedded dictionary, they can be used directly by the PxPlus **[Views System](../../Views%20System/Introduction.md)** and the PxPlus **[Report Writer](../../Report%20Writer/Introduction.md)**.

User files can be used to define data sources within the PxPlus **[Views System](../../Views%20System/Introduction.md)**. The data source definition must use the physical file name to define the source. Relationships may also be set up with other data sources based on the key definition of the user file. A View based on such a relationship could create a dataset where data from the user file would be included with data from application files.

**_Example:_**

A user file is created with two fields to hold additional client information. These fields have been added as custom information to the Client Maintenance panel, keyed on the client ID (the key for the client file). Within the Views system, you can use Data Source Maintenance to create a data source for the user file based on physical path, and another data source for the application client file. Within the client data source definition, set up a relationship linking the user file data source, based on client ID. Based on the client data source, you can now derive View definitions using Views Maintenance that will include the additional fields from the user file.

Once defined within the context of a View, the user file data becomes available to the **[PxPlus SQL ODBC Driver](../../odbc/pxplus_odbc.md)**. The Views are also available to provide a source of data to the PxPlus **[Report Writer](../../Report%20Writer/Introduction.md)**.
