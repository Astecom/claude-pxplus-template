# Data Dictionary Maintenance  
  
**Update Physical Files**|   
---|---  
  
The **Update Physical Files** utility is used to update/create physical files for multiple selected native (PxPlus) files.

_(The Update Physical Files utility was added in PxPlus 2023.)_

This utility, which is similar to the _Update File_ utility, is used to update multiple selected files that require an update; for example, when keys, data elements or other information has been modified. For each file, the utility compares the _Last Change_ date with the _Last Updated_ date to determine if an update is necessary. It lists and flags all the files that require updating.

For files that require a data conversion, this utility will automatically  _Convert existing data_ for each selected file. See **[Update Options](Updating%20the%20Data%20Dictionary.htm#updateoptions)**. However, unlike the _Update File_ utility, there is no option to back up your original files prior to updating. Therefore, making a backup of your files before running this utility is **_strongly_** recommended.

Files with no keys defined or no physical file, database prefix files and link files cannot be updated. To see these files in the grid, uncheck the **[Only Display Files That Require Updating](Update%20Physical%20Files.htm#display_files)** check box.

To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From **[Data Dictionary Maintenance](Overview.md)** |  Click the _Update Files_ tool bar button.  
From **[Bulk Edit Data Elements](Bulk%20Edit%20Elements.md)** utility |  Click the _Update Physical Files_ button.  
  
The **Update Physical Files** window is displayed:

> #### **Important Note!**  
Prior to running this utility, **_make sure that you have a backup of your original files_**.

This window consists of the following:

_(Tables Grid)_ |  Grid that lists the tables in the PxPlus data dictionary. The grid contents are based on the _Only Display Files That Require Updating_ check box. |  _Edit All_ |  Toggles the _Update_ check box either **_On_** or **_Off_** for all the tables in the list.  
---|---  
_Table_ |  **_(Display Only)_** Name of the data table.  
_Description_ |  **_(Display Only)_** Description of the table.  
_Last Change_ |  **_(Display Only)_** Date/time of when the last change was made in the data dictionary definition (i.e. change to the keys, description, notes, elements, etc.).  
_Last Updated_ |  **__(_ Display Only)_** Date/time and user when the file was last updated.  
_Update_ |  Check box that indicates the file requires updating. By default, this check box is selected if the file's _Last Change_ date is greater than the _Last Updated_ date.  
_Only Display Files That Require Updating_ |  When selected **_(default)_** , only files that require updating are listed in the grid. If not selected, all files will be listed. If there are any files that do not require an update or cannot be updated (i.e. files with no keys defined or no physical file, database prefix files and database link files), a short explanation will display.  
_Apply_ |  Updates the physical files and PxPlus data dictionary files for tables with the _Update_ check box selected.  
_Exit_ |  Closes the **Update Physical Files** utility.
