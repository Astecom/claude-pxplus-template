# System Utilities

**File Update Utility**|   
---|---  
  
The **File Update Utility** is used to view, modify and update the records within a selected data file, one record at a time. You can also view other details such as file type, record size, current number of records and field information.

The _Search_ button invokes a concurrent **Search** window for defining filter criteria to search the records in a Keyed data file. The _Customize_ button in the **Search** window launches a window for selecting which columns to display in the Search list box.

See **[File View Utility](File%20View%20Utility.htm#Mark4)**.

_(The Search button was added in PxPlus 2023 Update 1.)  
(The Customize button was added in PxPlus 2024.)_

To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Data Management_ category and select _File Update Utility_. Specify the file to update using the displayed browse window.  
From **[System Utilities](PxPlus%20User%20Guide/Getting%20Started/System%20Utilities/Graphical%20Utilities.md)** |  In **System Utilities** , select the file from the list of files displayed for the current working directory or click the Directory Browse button to specify a different pathname. Click the _File Update_ tool bar button.  
From the PxPlus Command line |  Enter **_fm_** and then specify the file to update using the displayed browse window.  
  
The **File Update Utility** displays the details for the selected file. A grid displays the field names, field lengths, and old/new data values for each record. Use the browse buttons to scroll through the records in the file.

The data for a field can be modified by entering the new value in the _New Value_ column. After saving/updating the file, the _Old Value_ and _New Value_ columns reflect the saved changes the next time you select this file.

> This window consists of the following:

_File_ |  Full pathname of the selected file. Click the file Query button for a list of files in the specified directory.

#### **Note:**  
The file pathname displays either the full pathname or only the selected file name, depending on the method used to access this utility.  
  
For example, if the utility is accessed from **[System Utilities](System%20Utilities.md)**, the full pathname displays each time. On the other hand, if the utility is accessed from either the **[PxPlus IDE Main Launcher](PxPlus%20IDE/IDE%20Main%20Launcher.md)** or the PxPlus Command line, only the selected file name displays initially; selecting another file from the File Query button will display the full pathname.  
  
---|---  
_(Key Value)_ |  Displays the primary key value of the current record, if available. Click the Query button for a list of records in the selected file or use the Browse buttons to locate a record. If a query is not available for the file, a message will display. _(The Query button was added in PxPlus 2021.)_  
_Search_ |  Button that invokes a concurrent **Search** window for defining filter criteria to search the records in the selected data file. See **[File View Utility](File%20View%20Utility.htm#Mark4)**. _(The Search button was added in PxPlus 2023 Update 1.)_  
_Type_ |  Type of data file (i.e. **[Keyed](PxPlus%20User%20Guide/File%20Handling/Data%20Files/Keyed%20Files.md)**, **[Serial](PxPlus%20User%20Guide/File%20Handling/Data%20Files/Serial%20Files.md)**, **[Indexed](PxPlus%20User%20Guide/File%20Handling/Data%20Files/Indexed%20Files.md)**).  
_Record Size_ |  Maximum size (in bytes) of the data portion of the record.  
_Current # of records_ |  Number of total records in the selected file.  
_(Grid)_ |  Displays the field names, field lengths, and old/new data values for each record in the selected file.  
_New Field Number_ |  Adds a new field number as a new row to the bottom of the grid for the current record only.

#### **Note:**  
If the data file has an embedded data dictionary, it is strongly recommended to use **[Data Dictionary Maintenance](Data%20Dictionary/Introduction.md)** for adding new fields.  
  
_Update_ |  Saves/updates the selected file with any changes. A message confirms that the record has been updated. If the current record is changed, attempting to close the utility or use the Browse buttons without selecting the _Update_ button will display a message to save the record.  
_Delete_ |  Deletes the current record for the selected file. Prior to deleting the record, a message displays.  
_Close_ |  Exits the **File Update Utility**.  
  
## See Also

**[File View Utility](File%20View%20Utility.md)**
