# Data Dictionary

**Data Dictionary Maintenance** |  **__**  
---|---  
  
NOMADS includes the **Data Dictionary Maintenance** utility for building and maintaining the data dictionary. This utility presents all the different options and fields necessary to complete the basic steps for creating definitions in the data dictionary.

These basic steps include:

  * Identifying the database file
  * Defining the elements
  * Defining the keys
  * Copying the updated definition to the physical file



In addition, the data dictionary can be created from an external database (ODB, MySQL, OCI, ADO or DB2). See **[Using External Databases to Create a Data Dictionary](../Introduction.htm#external_db)**.

**Data Dictionary Maintenance** is displayed below with a sample entry:

> To invoke **Data Dictionary Maintenance** , use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Data Management_ category and select _Data Dictionary Maintenance._  
From the **[NOMADS Session Manager](../../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  Select _Dictionary > Maintenance_ from the menu bar.  
From the PxPlus Command window |  Select _Utilities > Data Dictionary_ from the menu bar.  
From the PxPlus Command window |  Enter: **DD** (or **DD**  _tablename_)  
  
##  Main Panel

The Main panel consists of options for **[Updating the Data Dictionary](Updating%20the%20Data%20Dictionary.md)** and embedding the definition in the physical file. These options include table name, key definition, access logic and notes.

Two tabbed folders, **Info** and **Elements** , are provided for specifying details about the data files and their elements:

|  **[Info](Overview.htm#info)** |  Contains fields that are used to describe the physical file, including pathname, group, file type and block size.  
---|---|---  
|  **[Elements](Overview.htm#elements)** |  Presents a grid with fields that are used to define all the data elements within the current definition, as well as for the Global Dictionary.  
  
The **[Menu Bar](Overview.htm#menubar)** and **[Tool Bar](Overview.htm#toolbar)** provide options for adding and maintaining the data file definitions.

The Main panel includes the following **_fields_** :

_Name_ |  Descriptive name for your data source to identify its definition in the data dictionary; e.g. Client List. Maximum 64 characters. **_Create a new definition_** by entering a name that does not already exist. You are prompted to confirm the creation of a new definition. See **[Creating a Definition](Updating%20the%20Data%20Dictionary.htm#creatingdefinition)**.

#### **Note:**  
When a new table name is entered, it will be checked against the **[Reserved Words](../../Reserved%20Words.md)** list to determine if it is restricted for use in the Data Dictionary. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_

**_Select an existing definition_** by using any of the following methods:

  * Type the name of the definition.
  * Click the Query Table View button _(magnifying glass)_ for a tree view of table names by Group. For information on creating a filter to locate a specific table name, see **[Filtering the Table Names Lookup](Filtering%20the%20Table%20Names%20Lookup.md)**.
  * Click the Query button _(binoculars)_ for a query view of tables by table name. For information on using the query features (i.e. search, sort, filter, etc.), see **[Run-Time Query](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Run-time%20Query.md)**.
  * Use the Browse buttons to locate a table name.

If you select an existing table with [**System Journalization**](../../directives/system_jrnl.md) and/or [**File Splitting**](../../Historical%20File%20Splitting/Introduction.md) enabled, a message displays adjacent to the _Description_ field, indicating that one or both of these processes is enabled. If System Journalization is enabled for the table but the system journal file is not open, an Error #69: No Journalization file open is reported.  
---|---  
_(Define File Links)_ |  The Define File Links button (_chain link with drop-down arrow_), located to the left of the Global Dictionary button (_globe_), allows you to access the **[File Link Maintenance](../File%20Link%20Maintenance.md)** and **[File Links Express](../File%20Link%20Maintenance.htm#express)** utilities to create/edit cross-reference linkages that exist between application data files. Clicking the chain link invokes **File Link Maintenance**. Clicking the drop-down arrow invokes a menu for accessing either **File Link Maintenance** or **File Links Express**. If a logical file name has been entered in the _Name_ field, the File Link utilities will automatically be populated with information related to that file. If the _Name_ field is blank, **File Link Maintenance** will display all file links, and **File Links Express** will not display any file links. The Define File Links button is disabled if the Global Dictionary button (_globe_) is selected or if a new file _Name_ is entered but no file definition has been created. _(The Define File Links button was added in PxPlus 2025.)_  
_(Global Dictionary)_ |  The Global Dictionary button _(globe)_ loads the Global Dictionary definition. See **[Global Dictionary](Overview.htm#global)**.  
_Description_ |  A short description of the table contents.  
_Last File Change_ |  This information is updated automatically whenever a change is made in the data dictionary definition (i.e. updating the description, notes, options or elements, changing keys, etc.). This information is used by the **[Update Physical Files](Update%20Physical%20Files.md)** utility. _(Last File Change was added in PxPlus 2021.)_  
_Last Physical Update_ |  This information is updated automatically when the file is updated by clicking the _Update File_ toolbar button or selecting _File > Update File_ from the menu bar. This information is used by the **[Update Physical Files](Update%20Physical%20Files.md)** utility. If a data dictionary definition is copied (see **[Import Dictionary](../Data%20Dictionary%20Utilities/Import%20Dictionary.md)**) or a _Physical File_ is entered that does not exist, the _Last Physical Update_ information will be cleared. _(Last Physical Update was added in PxPlus 2021.)_  
  
##  Global Dictionary

PxPlus provides a _Global Dictionary_ to which you can optionally add data elements for **_global_** use. When an element is defined globally, you can select and load its definition into various file definitions using the **[Elements](Overview.htm#elements)** tab. Global Dictionary element definitions are stored in the data dictionary files, _providex.ddf_ and _providex.dde_.

**_Loading the Global Dictionary Definition_**

Load the Global Dictionary definition by clicking the Global Dictionary button _(globe)_ next to the browse buttons on the Main panel. You can also click either the Query Table View button _(magnifying glass)_ or the Query button _(binoculars)_ and then select _{Global Dictionary}_ from the list.

Once the Global Dictionary definition is loaded, data elements can then be added, deleted and maintained using the **[Data Elements](Overview.htm#grid)** grid, just like any other data definition. See **[Adding a Data Element to the Global Dictionary](Overview.htm#add_global)**.

#### **Note:**  
When the Global Dictionary definition is loaded, other functions (i.e. _Rename Table_ , _Delete Table_ , etc.) will not be available.

_(The Global Dictionary button was added in PxPlus 2017.)  
(The Data Elements grid was added in PxPlus 2020.)_

**_Adding a Data Element to the Global Dictionary_**

After the Global Dictionary definition is loaded, new data elements can be added by using any of the following methods:

**Method** |  **Description**  
---|---  
_Create a new element from the beginning_ |  Enter a new element in the last blank row of the **Data Elements** grid. A new element can also be inserted **_before_** or **_after_** an existing element. Click the _Field Name_ of the existing element above or before which you want to insert the new element. Right click on this selection and choose _Insert Element_ (_Before_ or _After_) from the popup menu **_or_** use the _Insert Element Before_ (or _Insert Element After_) buttons beside the grid to insert a new row. Alternatively, create a new element by clicking the button in the _Dtl_ column to invoke the **[Element Description](Element%20Description.md)** window. When the new element is saved, it is added to the bottom of the **Data Elements** grid. Use the _Move Up/Move Down_ buttons beside the grid to reposition the new element.

#### **Note:**  
When a new element name is entered, it will be checked against the **[Reserved Words](../../Reserved%20Words.md)** list to determine if it is restricted for use in the Data Dictionary. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_  
  
_Create a new element from an existing element_ |  In the **Data Elements** grid, click the _Field Name_ of the existing element with settings you want to use for the new element. Right click on this selection and choose _Repeat Element_ from the popup menu. The new element is inserted below the existing element with the same settings and is initially assigned the same _Field Name_ ending with **_** (_underscore_) and a number (e.g. Address_1). The settings for the new element can be modified as needed.  
_Add an existing element from another table_ |  On the Main panel, select the table containing the element you want to add to the Global Dictionary. In the **Data Elements** grid, click the _Field Name_ of the element you want to add to the Global Dictionary. Right click on this selection and choose _Add to Global Elements_ from the popup menu **_or_** use the _Add Selected Data Element to Global Dictionary_ button (_globe_) beside the grid. A message will display when the Global Dictionary has been updated. To verify, load the Global Dictionary definition and review the **Data Elements** grid.

#### **Note:**  
This method does **_not_** remove the selected element from its originating table.  
  
##  Info and Elements Tabs

The **[Info](Overview.htm#info)** tab describes features about the physical database file; i.e. pathname, group, file type, and size. The **[Elements](Overview.htm#elements)** tab provides various options and settings for defining elements in the physical files.

#### **Note:  
** Some settings, as well as some data dictionary utilities, can be invoked via the Data Dictionary Maintenance **[Menu Bar](Overview.htm#menubar)**.

These tabbed folders consist of the following:

**Info**  
---  
**Physical File** |  Pathname of the actual database file - either a _Fixed_ value (e.g. XX_AR) or an _Expression_ (e.g. %COMPANY$+"_AR"). Click the Query button to select a file.  
**File Type** |  **_(Display Only)_** Indicates whether the current file is a _Native_ (PxPlus) file, a database **[Link](../../PxPlus%20User%20Guide/Data%20Integration/External%20Databases/Creating%20Link%20File.md)** file, or a database **[Prefix](../../PxPlus%20User%20Guide/Data%20Integration/External%20Databases/Creating%20the%20Prefix%20File.md)** file. _(The File Type was added in PxPlus 2023.)_  
_View Prefix File Entry/Link File Contents_ __|  **_(Available when File Type is a database Prefix File or a database Link File)_** Button (beside _File Type_) that is used to display the contents of a database **[Prefix](../../PxPlus%20User%20Guide/Data%20Integration/External%20Databases/Creating%20the%20Prefix%20File.md)** file entry or **[Link](../../PxPlus%20User%20Guide/Data%20Integration/External%20Databases/Creating%20Link%20File.md)** file in view-only mode. This button is disabled for _Native_ files. **_Example:_** _(The View Prefix File Entry/Link File Contents button was added in PxPlus 2023 Update 1.)_  
**Options** |  |  _Notes_ |  A multi-line input control used for entering notes about the table and its use. Press Enter to start a new line. Maximum 1024 characters. When done, press the Tab key prior to exiting or using the Browse buttons; otherwise, changes to the notes will not be saved. _(The Notes input control was added in PxPlus 2021.)_  
---|---  
_Group_ |  Group name for assigning files to a common theme or application; e.g. Accounting, Billing, GL.  
_Type_ |  **_(Available when_ [File Type](Overview.htm#file_type) _is Native File)_** File type to create. Click the drop-down arrow for a list of file types (below). See **[Supported File Types](../Introduction.htm#filetypes)**. |  _Variable Length_ |  VLR (variable-length record)  
---|---  
_Enhanced Format (2GB limit)_ |  Limited EFF  
_Enhanced Format ( >2GB limit)_ |  Unlimited EFF  
_Fixed Length_ |  FLR formatted files  
_Block Size_ |  **_(Available when_ [File Type](Overview.htm#file_type) _is Native File)_** Maximum file size in kilobytes. The default setting allows PxPlus to decide the recommended file size for the file type; e.g. VLR (1-31), FLR (1-32), and EFF (4-63). The default size is computed by taking the largest key size and multiplying by 200. This is compared with the record size, and the higher of the two is rounded to the nearest 1K. The desired block size can also be selected.  
_Separator_ |  **_(Available when_ [File Type](Overview.htm#file_type) _is Native File)_** Character to be used as a field separator in the file. The field separator must be a Hex string for a single character (e.g. $8A$). The default separator is the setting of the **['FS'](../../parameters/fs.md)** parameter ($8A$ if 'FS' not set).

#### **Warning!**  
**_DO NOT USE_** $00$, $01$, $02$, $03$, $04$, $09$ or $0A$ as a field separator in a NOMADS/iNomads environment, as these characters are used within some fields of NOMADS files and would cause NOMADS to malfunction.  
  
**_Avoid_** $1B$ in general, which begins mnemonics.  
  
_Extended Records_ |  **_(Available when_ [File Type](Overview.htm#file_type) _is Native File)_** Check box to indicate that records will be written as multiples of the size specified during file creation.  
_Compression Type_ |  **_(Not Applicable to FLR Files)_** Indicates simple compression to record data. Click the drop-down arrow for a list of selections. This field is disabled when **[File Type](Overview.htm#file_type)** is _Link File_ or _Prefix File_.  
_Convert to Text for  
Version Control System_ |  **_(Available when_ [File Type](Overview.htm#file_type) _is Native File)_** Check box to indicate whether the selected data file definition will be flagged for conversion to text format for use in the Version Control System.  
_Force data Validation  
on WRITE/UPDATE_ |  **_(Available when_ [File Type](Overview.htm#file_type) _is Native File)_** Check box to indicate that, when the file is opened with an **IOL=*** , the generated IOLIST is to automatically include the validation options as if an OPT="VALIDATE" was specified. For information on these validation options, see **[IOLIST](../../directives/iolist.htm#Mark6)** directive.

#### **Note:**  
For **_Date_** validation, the system allows empty/null dates by default. To disallow empty/null dates, set the **[Required](Element%20Description.htm#Mark6)** flag for the field.  
  
_Enable UpdatePlus logic_ |  **_(Available when_[Type](Overview.htm#type) _is Variable Length (VLR) or Fixed Length (FLR). Not Applicable to EFF Files.)_** Select this check box to enable **[UpdatePlus™](../../directives/keyed.htm#updateplus)** logic for the _Physical File_ specified. If the file was previously created with UpdatePlus™ enabled (i.e. file was created with OPT="U" - see **[KEYED](../../directives/keyed.htm#Mark9)** directive), this check box will be selected automatically. This check box is disabled when **[File Type](Overview.htm#file_type)** is _Link File_ or _Prefix File_.  
  
_(The Force Data Validation option was added in PxPlus 2017.)  
(The Enable UpdatePlus logic option was added in PxPlus 2017 Update 0002.)_  
  
**Elements**  
_Non-Normalized_ |  **_(Available when_ [File Type](Overview.htm#file_type) _is Native File)_** Select this check box to allow the definition of non-normalized data files. See **[Non-Normalized Data](Non-Normalized%20Data.md)**.  
_Record Format_ |  **_(Available when_ [File Type](Overview.htm#file_type) _is Native File)_** Record type description for non-normalized data files.  
_Define_ |  **_(Available when Non-Normalized check box is selected)_** Select this button to display the **Non-Normalized Record Definitions** window. See **[Non-Normalized Data](Non-Normalized%20Data.md)**.  
_Search Grid for: (F3)_ |  Input field that is used for searching the field names in the **Data Elements** grid as letters are entered (case insensitive). Access this field by using the mouse or by pressing either the F3 key or the Tab key. _(The Search Grid option was added in PxPlus 2021.)_  
**Data Elements** |  Grid that displays all the data elements in the selected table, along with their settings. This grid can also be used to add, edit and delete a data element. To make bulk changes to multiple data elements in the PxPlus data dictionary and apply the changes to selected tables, use the **[Bulk Edit Data Elements](Bulk%20Edit%20Elements.md)** utility. |  _Field_ |  Field number that indicates the sequence of elements in the data dictionary.  
---|---  
_Dtl_ |  Button that invokes the **[Element Description](Element%20Description.md)** window.  
_Field Name_ |  Unique name of the element. See **[Name](Element%20Description.htm#Mark12)** in the **Element Description** window.

#### **Note:**  
When a new element name is entered, it will be checked against the **[Reserved Words](../../Reserved%20Words.md)** list to determine if it is restricted for use in the Data Dictionary. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_

Click the Globe button to display a list of Global Dictionary elements and their descriptions. Double-clicking on a Global element adds it to the current row if the row is empty. If the current row is not empty, a message will display. Responding _Yes_ updates the _Field Name**and**_ all other columns with settings from the selected Global element. Responding _No_ updates **_only_** the _Field Name_ but does **_not_** update the other columns. Responding _Cancel_ puts back the original _Field Name_ and no other columns are changed. Right click on the _Field Name_ to display a popup menu with the following selections: |  _Insert Element_ |  Inserts a new element either **_before_** or **_after_** the currently selected data element. Same as using the _Insert Before/After_ buttons beside the **Data Elements** grid.  
---|---  
_Repeat Element_ |  Repeats the settings from an existing element to create a new element. The new element is inserted below the existing element with the same settings and is initially assigned the same _Field Name_ ending with **_** (_underscore_) and a number (e.g. Address_1). The settings for the new element can be modified as needed.  
_Delete Element_ |  Deletes the currently selected data element. Same as using the _Delete_ button beside the **Data Elements** grid or using the **[Delete](Element%20Description.htm#Mark16)** button in the **Element Description** window.  
_Add to Global Elements_ |  **_(Not Available when Global Dictionary is selected)_** Adds the selected element to the Global Dictionary. If a data element with the same name already exists in the Global Dictionary, a message asks if you want to update this Global Dictionary record. Responding _Yes_ updates the Global Dictionary record with the settings from the selected data element. Responding _No_ does not change the Global Dictionary record.  
_Data Class_ |  Enter the name of an existing data class or use the Query button to load the information from a data class definition into the element's fields. A data class can also be created on the fly. Enter a new name for the _Data Class_ and respond _Yes_ to the displayed message, which launches **[Data Class Definitions](../Data%20Classes/Overview.htm#Mark1)**. If the data class assigned to the element has been deleted in **Data Class Definitions** maintenance, the Data Class name will change to dark red. If a data class with the _Class Name_ "Email" or "URL" (case insensitive) is assigned to a data dictionary field, the input entered for the field will be validated as either an email address or URL on a generated Webster+ HTML page. See **[File Maintenance Generator](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)**. _(The dark red text indicating a deleted Data Class was added in PxPlus 2021.)  
(Email and URL input field validation for generated Webster+ HTML pages was added in PxPlus 2021 Update 1.)_  
_Description_ |  Brief description of the element, which can be a _Fixed_ value, _Expression_ or _Message Library Reference_.  
_Type_ |  Indicate whether the element is _Numeric_ or _String_.  
_Len_ |  Set the maximum length of the data field. The system will validate that the length specified agrees with the _Format_ selected; otherwise, a message will display. _(Length validation in the Elements grid was added in PxPlus 2021 Update 1.)_ Numeric field lengths can be defined using implied decimal format. **_Example:_** 6.2: 6 represents total length of the field, excluding explicit signs and decimals, where applicable, and 2 represents scaling factor or number of decimal places.  
_Format_ |  Options that define the format for writing the data field to the file. See **[Format Mask](Element%20Description.htm#Mark5)** in the **Element Description** window.  
_Display_ |  Print/input format. See **[Format Mask Options](Element%20Description.htm#Mark1)**.  
_Ext_ |  Check box to indicate that the element forms part of an external key and is not duplicated in the data portion of the record. **_Example:_** Key: CST_ID$ Data: CST_NM$, CST_ADDR$, CST_PHONE$ In this case, CST_ID$ forms the key and is not duplicated in the data portion of the record.  
_Req_ |  Check box to indicate that the element is a **_required_** field and must contain data before the record can be written in File Maintenance.  
_U/C_ |  Check box to indicate that the data should always be in uppercase letters. Used by NOMADS sub-systems.  
_R/O_ |  Check box to indicate that the element is designated as read only or locked. Used by NOMADS sub-systems. _(The R/O check box was added in PxPlus 2021.)_  
  
_(The Data Elements grid was added in PxPlus 2020.)_  
  
_Move Up  
Move Down_ |  Buttons used to move the selected data element up or down within the **Data Elements** grid.  
_Insert Before  
Insert After_ |  Buttons used to insert a new element **_before_** or **_after_** the selected data element. Same as using the **[Insert Element](Overview.htm#grid)** popup menu option when right clicking on a _Field Name_ in the **Data Elements** grid. _(The Insert Before/Insert After buttons were added in PxPlus 2020.)_  
_Delete_ |  Button used to delete the selected data element. Same as using the **[Delete Element](Overview.htm#grid)** popup menu option when right clicking on a _Field Name_ in the **Data Elements** grid.  
_Undo_ |  **_(Available when a change is entered only in the Data Elements grid)_** Button used to undo the last change(s) entered **_only in the Data Elements grid_**. The Undo button will **_not_** undo any changes entered using the _Add/Edit Notes_ button. It will also **_not_** undo any changes entered in the **Element Description** window (accessed from the **[Dtl](Overview.htm#grid)** column).

#### **Important Note:**  
The Undo button will become disabled if the **Element Description** window is accessed immediately after changes have been entered in the **Data Elements** grid. If this happens, the previous grid changes cannot be undone.

_(The Undo button was added in PxPlus 2020.)_  
_Add/Edit Notes_ |  **_(Available when a new data element is entered or an existing data element is selected)_** Button used to add (or edit) notes for a new or existing data element. Maximum 1024 characters. The button's appearance and tooltip change to indicate that a note was added for the element. Alternatively, notes can be added or edited for an element in the **Element Description** window by using the **[Notes](Element%20Description.htm#Mark2)** input control on the **User Aids** tab. _(The Add/Edit Notes button was added in PxPlus 2022.)_  
_Update_ _Global Dictionary Elements in other Files_ |  **_(Available when Global Dictionary is selected)_** Button used to invoke the **[Update Global Dictionary Elements](Overview.htm#update_global)** window. If the selected global element does not exist in other data tables, a message will display.  
_Add Data Element to the Global Dictionary_ |  **_(Not Available when Global Dictionary is selected)_** Button used to add the selected element to the Global Dictionary. Same as using the **[Add to Global Elements](Overview.htm#grid)** popup menu option when right clicking on a _Field Name_ in the **Data Elements** grid. If a data element with the same name already exists in the Global Dictionary, a message asks if you want to update this Global Dictionary record. Responding _Yes_ updates the Global Dictionary record with the settings from the selected data element. Responding _No_ does not change the Global Dictionary record.  
  
## Menu Bar Options

The options below are listed in the order that they appear on the menu bar: **[File](Overview.htm#file)**, **[Edit](Overview.htm#edit)**, **[Options](Overview.htm#optionsmnu)**, **[Utilities](Overview.htm#utilities)**, **[Projects](Overview.htm#projects)**, **[NOMADS Tools](Overview.htm#nomtools)** and **[Wiki Info](Overview.htm#wiki_info)**.

**File** |  Some of these options are also available as tool bar buttons.  
---|---  
_Change/Create Dictionary_ |  Displays the **Change/Create Dictionary** window for changing or creating the pathname to a new _providex.ddf_ file. Specify a different pathname by clicking the Query button or manually entering it. If no _providex.ddf_ file exists in the pathname specified, a prompt will ask if you wish to create the dictionary. Responding _Yes_ creates the dictionary files _providex.ddf_ _/dde_ in the pathname specified. Responding _No_ does not create these files. If the _Change Directory_ check box is selected, the directory containing the dictionary becomes the current working directory. _(Support for creating a new dictionary was added in PxPlus 2019 Update 1.)_  
_New Table_ |  Adds a new file. Selecting this option clears the current record to allow you to enter the details for the new definition. _(The New Table option was added to the File menu in PxPlus 2023 Update 1.)_  
_Copy Table_ |  Launches the **[Copy Data Dictionary](Copy%20Data%20Dictionary.md)** window for copying an existing data dictionary definition in the same dictionary to a new table name. _(The Copy Table option was added to the File menu in PxPlus 2023 Update 1.)_  
_Rename Table_ |  Changes the selected table to a new name. A database link file or prefix file cannot be renamed.  
_Delete Table_ |  Deletes the selected table.  
_Define Keys_ |  Sets up primary and alternate keys for the physical file. See **[Defining Keys](Defining%20Keys.md)**.  
_IO Procedure_ |  Launches the **Embedded I/O Procedures** window for entering the name of a program that contains logic for controlling file access. PxPlus provides the ability to specify an object using the syntax _obj_ _=xxxxx_.  
_Update File/Prefix/Link_ |  If the current file is a native PxPlus file, updates and/or creates the physical file. If a data conversion is required, the **Update physical** window will display. See **[Updating the Data Dictionary](Updating%20the%20Data%20Dictionary.md)**. If the current file is a database link file or prefix file, updates the link file or the entry in the prefix file. To update the external database for field/key changes, use the Database Manager program. _(The Update File/Prefix/Link option was added in PxPlus 2023.)_  
_Update Files_ |  Launches the **[Update Physical Files](Update%20Physical%20Files.md)** utility for updating/creating physical files for multiple selected native (PxPlus) files. _(The Update Physical Files utility was added in PxPlus 2023.)  
(The Update Files option was added to the File menu in PxPlus 2023 Update 1.)_  
_Create SQL Key Defn File_ |  Creates _providex.kdf_ in the same directory as the _providex.ddf_ and _providex.dde_ files. This file contains SQL key definitions for a PxPlus data dictionary table, keyed by the logical table name (64 characters). If the _providex.kdf_ file already exists, a prompt to delete and recreate the file will display.  
_Database Export Utility_ |  If a native PxPlus file is currently selected, launches the **[Database Export Utility](Database%20Export.md)** for adding the data file to an existing database (ODB, MySQL, OCI, ADO or DB2). If no table or database link file or prefix file is currently selected, launches the **[Bulk Database Export Utility](Bulk%20Database%20Export.md)** for exporting table definitions from the PxPlus data dictionary into an existing database. _(The Database Export Utility was added in PxPlus 2023.)_  
_Database Import Utility_ |  Launches the **[Database Import Utility](Database%20Import.md)** for importing table definitions from an existing database (ODB, MySQL, OCI, ADO or DB2) into the PxPlus data dictionary. _(The Database Import Utility was added in PxPlus 2023.)_  
_Export Dictionary_ |  Launches the **[Export Data Dictionary Definition](../Data%20Dictionary%20Utilities/Export%20Definition.md)** utility that is used to export the data dictionary definitions of one or more selected tables to a text file. Used in conjunction with the **[Import Data Dictionary Definition](../Data%20Dictionary%20Utilities/Import%20Definition.md)** utility. _(The Export Dictionary Utility was added in PxPlus 2021.)  
(The Export Dictionary option was added to the File menu in PxPlus 2023 Update 1.)_  
_Import Dictionary_ |  Launches the **[Import Data Dictionary Definition](../Data%20Dictionary%20Utilities/Import%20Definition.md)** utility that is used to import the data dictionary definitions of one or more tables selected from an export text file into a data dictionary in another location. Used in conjunction with the **[Export Data Dictionary Definition](../Data%20Dictionary%20Utilities/Export%20Definition.md)** utility. _(The Import Dictionary Utility was added in PxPlus 2021.)  
(The Import Dictionary option was added to the File menu in PxPlus 2023 Update 1.)_  
_Exit_ |  Closes **Data Dictionary Maintenance**.  
  
**Edit** |  Provides options to use in conjunction with the **[Data Elements](Overview.htm#grid)** grid (the **Elements** tab **_must_** be selected).  
---|---  
_Add Element_ |  Adds a new row at the current location in the grid for adding a new data element.  
_Delete Element_ |  Deletes the selected data element. Prior to the deletion, a message will display.  
_Bulk Edit Elements_ |  Launches the **[Bulk Edit Data Elements](Bulk%20Edit%20Elements.md)** utility for applying bulk changes to data elements in the PxPlus data dictionary. _(The Bulk Edit Data Elements utility was added in PxPlus 2023.)_  
_Add Globally_ |  Adds the selected data element to the Global Dictionary. A message will display when the Global Dictionary is updated or if a data element with the same name already exists in the Global Dictionary.  
  
**Options** |  Provides additional data dictionary options.  
---|---  
_SQL Key Definition Update_ |  Determines whether the SQL Key Definition file will automatically be updated when the PxPlus Data Dictionary key definition is changed. See **[SQL Key Definition Update Options](SQL%20Key%20Definition.htm#sqlkeydef_upd)**.  
  
**Utilities** |  Provides additional data dictionary tools and security control.  
---|---  
_Print_ |  Launches the **[Print Data Dictionary Definition](../Data%20Dictionary%20Utilities/Print.md)** utility that is used to generate output in a standard format that lists all of the elements in the definitions that have been selected for printing.  
_Compare Definitions_ |  Launches the **[Data Dictionary Compare](../Data%20Dictionary%20Utilities/Compare%20Definitions.md)** utility for comparing two tables from the same or different data dictionaries or physical files (or a combination of both). It compares file attributes, fields and key structures in one table with the fields in another.  
_Generate external_ |  Sub-menu for accessing the following selections: |  _INI file contents_ |  Opens the **Create INI file definition** window. This utility allows for the generation of INI file contents directly from the data dictionary. See **[INI File Generation](../Data%20Dictionary%20Utilities/INI%20File%20Generation.md)** utility.  
---|---  
_SQL Create Table_ |  Opens the **Generate SQL Create Table commands** window. This utility simplifies the process of converting the data dictionary to a SQL-based database such as ORACLE or Microsoft SQL. See **[SQL Create Table](../Data%20Dictionary%20Utilities/SQL%20Create%20Table.md)** utility.  
_Key Definitions_ |  Opens the **Generate External Database Key Definitions** window. This utility generates SQL key definitions for data dictionary tables. See **[Key Definitions](../Data%20Dictionary%20Utilities/Key%20Definitions.md)** utility.  
_Merge_ |  Launches the **[Data Dictionary Merge Utility](../Data%20Dictionary%20Utilities/Merge.md)** that allows table definitions to be merged from one set of dictionary files _(ddf/dde)_ to another.  
_Import Dictionary_ |  Launches the **[Copy Data Dictionary Definition](../Data%20Dictionary%20Utilities/Import%20Dictionary.md)** window that is used to copy a file definition from a different PxPlus data dictionary (in another directory) into the current file definition.  
_Data Class Definitions_ |  Launches **[Data Class Definitions](../Data%20Classes/Overview.htm#Mark1)** maintenance that is used to create and maintain data classes, including Dynamic data classes, for specific control types. _(Data Class Definitions was added to the Utilities menu in PxPlus 2021 Update 1.)_  
_File Link Maintenance_ |  Launches the **[File Link Maintenance](../File%20Link%20Maintenance.md)** utility for defining and maintaining the cross-reference linkages that exist between application data files. _(File Link Maintenance was added to the Utilities menu in PxPlus 2021 Update 1.)_  
_File Links Express_ |  Launches the **[File Links Express](../File%20Link%20Maintenance.htm#express)** utility for creating/editing cross-reference file links to other files in the data dictionary based on the primary key or other unique alternate key of the file being linked to. _(File Links Express was added to the Utilities menu in PxPlus 2025.)_  
_View Data_ |  If the current file is a native PxPlus file, launches the **[File View Utility](../../File%20View%20Utility.md)** for viewing data file information, such as type, record size, primary key size, current number of records, etc. If the current file is a database link file or a prefix file, any data in that file displays in a separate window for viewing only. _(The ability to view data in a database link file or prefix file was added in PxPlus 2023.)  
(The View Data option was added to the Utilities menu in PxPlus 2023 Update 1.)_  
_File Splitting_ |  **_(Available when_ [File Type](Overview.htm#file_type) _is Native File)_** Launches the **[Historical File Splitting](../../Historical%20File%20Splitting/Introduction.md)** utility that is used to split larger data files into multiple independent files. This option does not apply for database link and prefix files. _(The File Splitting option was added to the Utilities menu in PxPlus 2023 Update 1.)_  
_Security_ |  Provides access to set up and maintain the optional security system that controls user access to the system. See NOMADS **[Security Manager](../../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Overview.md)**.  
  
**Projects** |  Provides access to project-related options. _(The ability to add dictionary entries to a Project was added in PxPlus 2014 - Feature Pack 1.)_  
---|---  
_Create New Project_ |  Launches the **[Create Project](../../PxPlus%20IDE/IDE%20Main%20Launcher.htm#createproject)** dialogue for entering a new project for the current working directory. Click the Query button to select a different working directory.  
_Add to Project_ |  Launches the **Add to Project** dialogue for adding the current task to an existing project that is selected from the _Project_ drop box. To manage all the tasks within a project, see **[Project Maintenance](../../Project%20Maintenance.md)**. For information on adding tasks to a project from other locations, see **[Adding Tasks to Projects from Other Locations](../../PxPlus%20IDE/Adding%20Tasks%20to%20Projects%20from%20Other%20Locations.md)**.

#### **Note:  
** When adding a Data Dictionary task to a project, make sure that the working directory for the project is the **_same_** as the working directory associated with the data dictionary. Otherwise, the selected task cannot be added to the project.  
  
**NOMADS Tools** |  Provides access to NOMADS development tools for creating and editing library objects. _(The NOMADS Tools menu option was added in PxPlus 2023 Update 1.)_  
---|---  
_Open Project Application Library_ |  Runs the **[Open Project Application Library](../../NOMADS%20Graphical%20Application/NOMADS%20Development/Open%20Project%20Lib.md)** task that opens Library Object Selection using the project default library. If no default library was defined for the current project, a message will display. _(The Open Project Application Library task was added in PxPlus 2023 Update 1.)_  
_Panel Definition_ |  **(_Not Available in the_** **[PxPlus Web IDE](../../PxPlus%20IDE/IDE%20Main%20Launcher_Web.htm#webide))** Runs the **[Panel Definition](../../NOMADS%20Graphical%20Application/NOMADS%20Development/Panel%20Def_ide.md)** task for creating or editing a panel. _(The Panel Definition task was added in PxPlus 2023 Update 1.)_  
_Query Definition_ |  Runs the **[Query Definition](../../NOMADS%20Graphical%20Application/NOMADS%20Development/Query%20Def_ide.md)** task for creating or editing a Standard query or a Query List definition. _(The Query Definition task was added in PxPlus 2023 Update 1.)_  
_Menu Bar Definition_ |  Runs the **[Menu Bar Definition](../../NOMADS%20Graphical%20Application/NOMADS%20Development/Menu%20Bar%20Def_ide.md)** task for creating or editing a menu. _(The Menu Bar Definition task was added in PxPlus 2023 Update 1.)_  
_File Maintenance Generator_ |  Runs the **[File Maintenance Generator](../../NOMADS%20Graphical%20Application/NOMADS%20Development/File%20Maint_ide.md)** task for creating or editing a file maintenance panel. _(The File Maintenance Generator task was added in PxPlus 2023 Update 1.)_  
  
**Wiki Info** |  _(The Wiki Info menu option was added in PxPlus 2023.)_  
---|---  
|  **_(Not Available when running WindX)_** Spawns EZWeb for the **[PxPlus Wiki](../../PxPlus%20Wiki/PxPlus%20Wiki.md)** (if not already running) and then displays the file information for the current table in a new tab on your default Web browser. **_Example:_** When the PxPlus Wiki launches, the file information for the current table, Clients, displays:  
  
## Tool Bar Options

The **_tool bar_** consists of the following buttons:

_New_ |  Adds a new file. Selecting this button clears the current record to allow you to enter the details for the new definition.  
---|---  
_Update File/Prefix/Link_ |  **(_Button varies depending on_ [File Type](Overview.htm#file_type))** If the current file is a native PxPlus file, updates and/or creates the physical file. If a data conversion is required, the **Update physical** window will display. See **[Updating the Data Dictionary](Updating%20the%20Data%20Dictionary.md)**. If the current file is a database link file or a prefix file, updates the link file or the entry in the prefix file. To update the external database for field/key changes, use the Database Manager program. _(The ability to update a database link file or prefix file was added in PxPlus 2023.)_  
_Update Files_ |  Launches the **[Update Physical Files](Update%20Physical%20Files.md)** utility for updating/creating physical files for multiple selected native (PxPlus) files. _(The Update Physical Files utility was added in PxPlus 2023.)_  
_Copy_ |  Launches the **[Copy Data Dictionary](Copy%20Data%20Dictionary.md)** window for copying an existing data dictionary definition in the same dictionary to a new table name.  
_Rename_ |  **_(Available when_ [File Type](Overview.htm#file_type) _is Native File)_** Changes the selected table to a new name. This button is disabled for database link and prefix files.  
_Delete_ |  Deletes the currently loaded table.  
_Bulk Edit_ |  Launches the **[Bulk Edit Data Elements](Bulk%20Edit%20Elements.md)** utility for applying bulk changes to data elements in the PxPlus data dictionary. _(The Bulk Edit Data Elements utility was added in PxPlus 2023.)_  
_SQL Keydef_ |  Opens the **SQL Key Definition** window that is used to create/remove the SQL key definition for a selected table. Button is hidden if _providex.kdf_ does not exist. To create the _providex.kdf_ file, select _File_ > _Create SQL Key Defn File_ from the menu bar. See **[SQL Key Definition](SQL%20Key%20Definition.htm#sqlkeydef)**.  
_Define Keys_ |  Sets up primary and alternate keys for the physical file. See **[Defining Keys](Defining%20Keys.md)**.  
_IO Procedure_ |  Launches the **Embedded I/O Procedures** window for entering the name of a program that contains logic for controlling file access. PxPlus provides the ability to specify an object using the syntax _obj_ _=xxxxx_.  
_Export ("Database" tool bar section)_ |  If a native PxPlus file is currently selected, launches the **[Database Export Utility](Database%20Export.md)** for adding the data file to an existing database (ODB, MySQL, OCI, ADO or DB2). If no table or database link file or prefix file is currently selected, launches the **[Bulk Database Export Utility](Bulk%20Database%20Export.md)** for exporting table definitions from the PxPlus data dictionary into an existing database. _(The Database Export Utility was added in PxPlus 2023.)_  
_Import ("Database" tool bar section)_ |  Launches the **[Database Import Utility](Database%20Import.md)** for importing table definitions from an existing database (ODB, MySQL, OCI, ADO or DB2) into the PxPlus data dictionary. _(The Database Import Utility was added in PxPlus 2023.)_  
_Data_ |  If the current file is a native PxPlus file, launches the **[File View Utility](../../File%20View%20Utility.md)** for viewing data file information, such as type, record size, primary key size, current number of records, etc. If the current file is a database link file or a prefix file, any data in that file displays in a separate window for viewing only. _(The ability to view data in a database link file or prefix file was added in PxPlus 2023.)_  
_Print_ |  Launches the **[Print Data Dictionary Definition](../Data%20Dictionary%20Utilities/Print.md)** utility that is used to generate output in a standard format that lists all of the elements in the definitions that have been selected for printing.  
_Export ("Dictionary" tool bar section)_ |  Launches the **[Export Data Dictionary Definition](../Data%20Dictionary%20Utilities/Export%20Definition.md)** utility that is used to export the data dictionary definitions of one or more selected tables to a text file. Used in conjunction with the **[Import Data Dictionary Definition](../Data%20Dictionary%20Utilities/Import%20Definition.md)** utility. _(The Export Utility was added in PxPlus 2021.)_  
_Import ("Dictionary" tool bar section)_ |  Launches the **[Import Data Dictionary Definition](../Data%20Dictionary%20Utilities/Import%20Definition.md)** utility that is used to import the data dictionary definitions of one or more tables selected from an export text file into a data dictionary in another location. Used in conjunction with the **[Export Data Dictionary Definition](../Data%20Dictionary%20Utilities/Export%20Definition.md)** utility. _(The Import Utility was added in PxPlus 2021.)_  
_File Splitting_ |  **_(Available when_ [File Type](Overview.htm#file_type) _is Native File)_** Launches the **[Historical File Splitting](../../Historical%20File%20Splitting/Introduction.md)** utility that is used to split larger data files into multiple independent files. This button is disabled for database link and prefix files.
