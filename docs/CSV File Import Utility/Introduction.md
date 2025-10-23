# Utility Programs

**CSV File Import Utility** |  **__**  
---|---  
  
The **CSV File Import** utility is used for importing data in a CSV _(Comma Separated Values)_ file or a TSV _(Tab Separated Values)_ file directly into PxPlus.

Below is an example of sample employee data in a CSV file and a TSV file. The first line in each file contains the field names and is not considered part of the data. Each line below the first line is a record that consists of the data fields separated by a comma (CSV file) or a tab (TSV file). The addition of a separator after the last field is optional.

**_CSV file:_**

> **_TSV file:_**

> To invoke the **CSV File Import** utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Data Management_ category and select _CSV Import._  
From the **[NOMADS Session Manager](../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  Select _Utilities_ > _CSV File Import_ from the menu bar.  
  
The following window is displayed:

> This window consists of the following:

_CSV Import File_ |  Enter the name of the file to import or click the Query button. The _Logical File Name_ and _Physical File Name_ will default to the _CSV Import File_ name without the file suffix.  
---|---  
_Data Dictionary Path_ |  Location where the physical file will be created. If the _providex.dde_ and _providex.ddf_ files are not in this location, then a new set will be created. Click the Browse button to select the location of the directory.  
_Logical File Name_ |  Logical file name that will be created and loaded into the data dictionary.  
_Physical File Name_ |  Physical file name that will be created in the location entered for the data dictionary location.  
_Analyze_ |  Initiates the analysis phase of the utility, which makes several passes of the file being imported. Phase one reads through the file and determines the number of fields, name, size and type of fields to import. Phase two determines how many fields are required to create unique identifiers to act as the primary key. When the analysis is completed, the **[Adjust Import Settings](Introduction.htm#Mark1)** window displays the results of the analysis and allows the findings to be modified.  
_Cancel_ |  Exits the utility with no further action taken.  
  
##  Adjust Import Settings

The **Adjust Import Settings** window displays the results of the analysis and allows the settings to be adjusted according to the user's requirements.

This example shows the results of the analysis based on the CSV file containing the sample employee data.

> This window consists of the following:

**Column Name** |  **Description**  
---|---  
_Key_ |  Indicates which fields were selected by the analysis as the unique fields required to be the primary key. The analysis routine begins with the first field and continues to add fields sequentially until a pass is made where all the record keys are unique.  
_Name_ |  Contains the column header text. Characters that are **_not_** valid characters are replaced with the **_**  _underscore_ character. Valid characters are A to Z, a to z, 0 to 9 and _.  
_Description_ |  This is a duplicate of the _Name_ field.  
_Upper Case_ |  Indicates which fields were determined to be all uppercase during the analysis phase.  
_Length_ |  Indicates the number of characters that the field was found to contain during the analysis.  
_Type_ |  The type of field was determined during the analysis of the data. Types can be _String_ , _Numeric_ or _Date_. Based on the results of data validation, certain data can be interpreted as a "date type" data field. This can be modified in the **Adjust Import Settings** window.  
_Decimal_ |  Fields that were found to be numeric fields were checked for any decimal points.  
_Ignore_ |  If selected, this will notify the import routines that this particular field should be skipped during this import session.  
_Date Format_ |  Whenever a date is discovered in the analysis, a date format will be determined. When a single date format cannot be determined, multiple formats will be displayed in the _Date Format_ column. Select the appropriate date format and proceed with the Import. When a date format cannot be determined, the field will be left as a _String_ type field and will be imported as is. To force the import of the date when the analysis cannot determine the date format, the import file will require that the column be adjusted to conform to a valid date format.

#### **Note:  
** Valid dates will be imported to date format YYYYMMDD. For two-digit years, the import routine will use the current century to create a four-digit year. The current century will be applied for up to ten years from the current year at which point the century will be reduced by one.  
  
**_Example:_**  
  
13/05/24 with YY/MM/DD format will import as 20130524, while 59/05/24 will import as 19590524.  
  
_Import_ |  Proceeds with the import of the file. See **[CSV File Import Process](Introduction.htm#Mark2)**.  
_Cancel_ |  Closes the **Adjust Import Settings** window and exits the utility with no further action taken.  
  
##  CSV File Import Process

Selecting the _Import_ button begins the **CSV File Import** process to import the file into the system according to the Import settings. If the file being created already exists in the location specified for the _Data Dictionary Path_ , a message will display, allowing you to select whether to continue or terminate the process. Allowing the process to continue will overwrite the existing file with the new import.

You will then be prompted to print the data dictionary report. Responding _Yes_ displays the **[Print Data Dictionary Definition](../Data%20Dictionary/Data%20Dictionary%20Utilities/Print.md)** window, which includes options for printing either a _Detailed_ or _Summary_ report and for selecting the printing destination (_Viewer_ , _PDF_ or _Printer_). The default selections are to print a _Detailed_ report (first **_Example_** below) to the _Printer_. Responding _No_ to the prompt bypasses this step and initiates the next step, which is to generate a report of the Import process (second **_Example_** below).

**_Example:_**

Below is an example of a _Detailed_ data dictionary definition, which is based on the CSV file containing the sample employee data.

> After printing the data dictionary definition, a report of the Import process is generated, summarizing the information that was added/created.

**_Example:_**

Below is an example of the report that shows the details of the Import process, which is based on the CSV file containing the sample employee data.

> You can access the **[System Utilities](../PxPlus%20User%20Guide/Getting%20Started/System%20Utilities/Graphical%20Utilities.md)** to review the dictionary created and the data imported during the Import process.

**_Example:_**

To view the dictionary details as in the example below, click the _Primary Dictionary_ button on the System Utilities **[Tool Bar](../PxPlus%20User%20Guide/Getting%20Started/System%20Utilities/Graphical%20Utilities.htm#toolbar)**.

> **_Example:_**

To view the imported data using the **[File View Utility](../File%20View%20Utility.md)** as in the example below, click the _View File_ button on the System Utilities **[Tool Bar](../PxPlus%20User%20Guide/Getting%20Started/System%20Utilities/Graphical%20Utilities.htm#toolbar)**.

> 
