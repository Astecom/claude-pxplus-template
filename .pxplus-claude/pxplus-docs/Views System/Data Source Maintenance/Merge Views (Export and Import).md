# Data Source Maintenance

**Merge Views (Export and Import)** |  **__**  
---|---  
  
**Data Source Maintenance** includes access to _Export_ and _Import_ utilities, which are used to merge from one set of view definition files (_pvxview_ _.*_) into another. This is particularly useful for merging "master" updates into different user-customized definitions.

Both utilities are required to merge views:

|  **_Export_** |  Outputs a formatted text file representing a set of data source and view definitions.  
---|---|---  
|  **_Import_** |  Merges the contents of the formatted text file into the currently loaded definitions.  
  
##  Export

To invoke the **Export View and Data Source Definitions** utility, click the _Export_ toolbar button in **[Data Source Maintenance](Overview.md)**. This utility is used to **_export_** data source and view definitions to a formatted text file.

> This window consists of the following:

_(Show All Drop Box)_ |  Click the drop-down arrow for a list of selections for changing the contents of the current display: _Show All**(default)**_ , _Data Sources_ and _Views_.  
---|---  
_(Tree View List)_ |  Displays a list of all data source and view definitions, organized by data group, in a tree view format. Select the definitions to include in the export file by expanding the appropriate data group and clicking the check box beside the definition name.  
_(Contents List)_ |  Displays the details of a selected data source or view definition.  
_Export File_ |  Enter the pathname of a formatted text file to output to or click the Query button to specify a file name.  
_Clear export file before update_ |  When selected **_(default)_** , the output file will be cleared before the definitions are exported; otherwise, the selected definitions will be appended to the file.  
_Export_ |  Outputs the selected definitions to the specified export file.  
_Close_ |  Exits the **Export** utility and returns to the **Data Source Maintenance** main panel.  
  
##  Import

To invoke the **Import View and Data Source Definitions** utility, click the _Import_ toolbar button in **[Data Source Maintenance](Overview.md)**. This utility is used to merge the exported data source and view definitions into a currently loaded view.

This utility will only accept a formatted text file that has been created previously using the **[Export View and Data Source Definitions](Merge%20Views%20\(Export%20and%20Import\).htm#Mark1)** utility.

> This window consists of the following:

_File to be imported_ |  Enter the name of a valid text file to import or click the Query button.  
---|---  
_(Tree View List)_ |  Displays the data source and view definitions in the specified text file, organized by data group, in a tree view format. Select the data source and view definitions to import by expanding a data group and clicking the check box beside the definition name. To deal with duplicate definitions, the list will cycle through a series of merge options, which are represented as symbols inside the check boxes. A legend explaining these symbols is available by clicking the **[Help](Merge%20Views%20\(Export%20and%20Import\).htm#Mark3)** button. If a definition exists in more than one group, each occurrence will display the same merge option inside the check box. A different merge option can be selected by clicking the check box again until the desired merge option is displayed. Clicking the check box beside a data group cascades the setting for the group to its subordinate entries. Clicking on the topmost level of the tree selects the definitions in the entire tree.  
_(Contents List)_ |  Displays the details of a selected data source or view definition.  
_Help_ |  Displays a legend that explains each of the merge options.  
_Import_ |  Initiates the merge logic.  
_Close_ |  Exits the **Import** utility and returns to the **Data Source Maintenance** main panel.
