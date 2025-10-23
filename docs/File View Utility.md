# System Utilities

**File View Utility**|   
---|---  
  
The **File View Utility** is used to view, but not modify, the records within a selected data file, along with other details such as the file type, record size, primary key size, current number of records and field information.

The _Search_ button invokes a concurrent **[Search](File%20View%20Utility.htm#Mark4)** window for defining filter criteria to search the records in a Keyed data file. The **[Customize](File%20View%20Utility.htm#Mark5)** button in the **Search** window launches a window for selecting which columns to display in the Search list box.

_(The Search button was added in PxPlus 2023 Update 1.)  
(The Customize button was added in PxPlus 2024.)_

To modify and update the records in a data file, use the **[File Update Utility](File%20Update%20Utility.md)**.

To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From **[System Utilities](PxPlus%20User%20Guide/Getting%20Started/System%20Utilities/Graphical%20Utilities.md)** |  In **System Utilities** , select the file from the list of files displayed for the current working directory or click the Directory Browse button to specify a different pathname. Click the _View File_ toolbar button.  
From **[Data Dictionary Maintenance](Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** |  Select the file using the Query button. Click the _Data_ toolbar button.  
  
The **File View Utility** displays the details for the selected file. A grid displays the field names, current data values and field lengths for each record. Use the browse buttons to scroll through the records in the file.

> This window consists of the following:

_File_ |  Full pathname of the selected file. Click the file Query button for a list of files in the specified directory.  
---|---  
_Key_ |  By default, displays the Primary key for the file. Click the drop-down arrow for a list of key records, if defined. See **[Defining Keys](Data%20Dictionary/Data%20Dictionary%20Maintenance/Defining%20Keys.md)**. _(The key definition information shown in the drop-down list was added in PxPlus 2023.)_  
_(Key Value)_ |  Displays the primary key value of the current record, if available. Click the Query button for a list of records in the selected file or use the Browse buttons to locate a record. _(The Query button was added in PxPlus 2021.)_  
_Search_ |  **_(Available when a Keyed data file is selected)_** Button that invokes a concurrent **[Search](File%20View%20Utility.htm#Mark4)** window for defining the filter criteria to search the records in the selected data file. _(The Search button was added in PxPlus 2023 Update 1.)_  
_Type_ |  Type of data file (i.e. **[Keyed](PxPlus%20User%20Guide/File%20Handling/Data%20Files/Keyed%20Files.md)**, **[Serial](PxPlus%20User%20Guide/File%20Handling/Data%20Files/Serial%20Files.md)**, **[Indexed](PxPlus%20User%20Guide/File%20Handling/Data%20Files/Indexed%20Files.md)**).  
_Record Size_ |  Maximum size (in bytes) of the data portion of the record.  
_Primary Key Size_ |  Size of the primary key (in bytes).  
_Current # of records_ |  Number of total records in the selected file.  
_(Grid)_ |  Displays the field names, field lengths, and data values for each record in the selected file.  
_View multiple fields per line_ |  Select this check box to present the data records in a list box format.  
_Expanded View_ |  **_(Available when "View multiple fields per line" check box is selected)_** Button that is used to view additional details for a selected data record in the list.  
_Close_ |  Exits the **File View Utility**.  
  
##  Search

The _Search_ button on the main panel invokes a concurrent **Search** window for defining filter criteria to search the records in the selected data file. Filter conditions can be entered as a free-form value, an expression or a regular expression.

A _Case-Sensitive_ option is also available. The **[Customize](File%20View%20Utility.htm#Mark5)** button launches a window for selecting which columns to display in the Search list box.

Records matching the search criteria, if found, are displayed in the list box.

> This window consists of the following:

**File** |  **_(Display Only)_** Full pathname of the selected file.  
---|---  
**Filter** |  **_(Optional)_** Filter options used to define the search criteria. |  _Expression_ |  Select this check box to enter an expression as the filter value in the multi-line input. If the expression evaluates to 1 (true), the records are loaded into the list box. **_Examples:_** _Example 1_ \- Find all records where the Region$ element is Ontario: UCS(Region$)="ONTARIO" _Example 2_ \- Find all records that do not have a phone number entered: Phonenumber$=""

#### **Note:**  
When the _Expression_ check box is selected, the _Regular Expression_ , _Case-Sensitive_ and _Is Not_ check boxes are disabled.  
  
---|---  
_Regular Expression_ |  Select this check box to enter a regular expression as the filter value in the multi-line input. This value will be used as the _mask$_ parameter in the **[MSK( )](functions/msk.md)** function (along with the entire record string as the _string$_ parameter). If the **MSK(** **)** function evaluates to 1 (true), the records are loaded into the list box. **_Examples:_** _Example 1_ \- Find all records that contain the words Lazy or Cozy anywhere within the record: Lazy**|** Cozy _Example 2_ \- Find all records that contain a **#** or **$** or **%** character: **[** #$%**]**

#### **Note:**  
When the _Regular Expression_ check box is selected, the _Expression_ , _Case-Sensitive_ and _Is Not_ check boxes are disabled.  
  
_Case-Sensitive_ |  **_(Available when Expression check box is not selected)_** Select this check box if the filter value entered in the multi-line input is case-sensitive. (By default, this check box is not selected.)  
_Is Not_ |  **_(Available when Expression check box is not selected)_** Select this check box if you want the search to exclude records in which the filter value was found. (By default, this check box is not selected.)  
_(Multi-line input)_ |  Used for entering a free-form filter value. If either the _Expression_ or _Regular Expression_ check box is selected, enter an expression. If the filter value is case-sensitive, select the _Case-Sensitive_ check box.  
_Search_ |  Launches the search process for the specified criteria. If matches are found, the list box will be populated with records matching the search criteria. If no matches are found, the list box will be blank and a message will display.  
_Customize_ |  Launches the **Customize Search** window for selecting (or deselecting) the columns to display in the Search list box based on any variables in the file IOList, if defined in the Data Dictionary. If the file IOList is not defined in the Data Dictionary, the _Customize_ button will be disabled. _(The Customize button was added in PxPlus 2024.)_ This window consists of the following: |  _Select/Deselect All_ |  Check box that is used to either select or deselect all the check boxes (in the _Select_ column) beside the listed variables.  
---|---  
_(Variables Grid)_ |  Lists all the variables in the file IOList, if defined in the Data Dictionary. The variables that display in the Search list box by default will show the _Select_ check box as checked. To select (or deselect) variables, click the _Select_ check box beside individual variables or use the _Select/Deselect All_ check box.  
_OK_ |  Exits the **Customize Search** window and updates the columns in the Searc**h** list box based on the selected variables. If no variables were selected, the Search list box will display four columns for the _Key_ and the first three fields of the file definition.  
_Exit_ |  Exits the **Customize Search** window without updating the Search list box.  
_(List Box)_ |  Displays a list of records matching the search criteria, if found. Although only four columns are displayed, all fields in the record are searched. The four column headings consist of a _Key_ (based on the selected **[Key](File%20View%20Utility.htm#Mark2)**) and the first three fields of the selected file definition. Click the **[Customize](File%20View%20Utility.htm#Mark5)** button to select (or deselect) the columns to be displayed in the Search list box. To sort the list box columns in ascending/descending order, click on the column headings.  
_(Right Click Menu)_ |  Right click on a record in the Search list box to display a popup menu with the _List Options_ selection, which invokes the **[List Box and Grid System Popup Menu](NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Popup%20Menu/List%20Box%20and%20Grid%20System%20Popup%20Menu.md)**. _(The Search list box right click popup menu was added in PxPlus 2024.)_  
_Select_ |  Displays the details of the selected record in the main panel list box while keeping the **Search** window open. Double clicking on a record also selects it. |  |   
---|---  
  
#### **Note:**  
When using the Search list to select a record with an alternate non-unique key, the first record with that non-unique key will display on the main panel, regardless of which record was selected.  
  
_Exit_ |  Closes the **Search** window.  
  
## See Also

**[File Update Utility](File%20Update%20Utility.md)**
