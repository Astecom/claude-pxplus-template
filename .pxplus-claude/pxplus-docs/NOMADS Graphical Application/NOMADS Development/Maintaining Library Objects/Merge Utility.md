# Maintaining Library Objects 

**Merge Panels Utility** |  **__**  
---|---  
  
The **Merge Panels** utility provides the capability to merge the contents of one library into another.

To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From **[NOMADS Session Manager](../Getting%20Started.htm#sessionmgr)** |  Select _Library > Merge_ from the menu bar, and when prompted, specify the pathname of the library file to be merged from (Input Library).  
From **[NOMADS Library Object Selection](../Library%20Object%20Selection/Overview.md)** |  Select the _Merge_ button on the tool bar or select _Utilities > Merge_ from the menu bar.  
  
The following window is displayed:

> This window consists of the following:

_Input Library_ |  Indicates the name of the library file to be **_merged_** ** _from_**. Default is the current selection. Click the Query button to specify a different library file. Click the drop-down arrow for a list (up to nine) of previous selections.  
---|---  
_Output Library_ |  Indicates the name of the library file to be **_merged_** ** _into_**. Click the Query button to specify a library file. Click the drop-down arrow for a list (up to nine) of previous selections.  
_(Panels List Box)_ |  Displays the name, title and date information of the panels in the selected libraries. The _Merged_ check box is selected automatically after a panel is successfully merged into the Output Library.  
**Display Criteria** |  |  _Show Newer_ |  Select to list all panels that have an Input Library date later than the Output Library date and any panels that exist in the Input Library only.  
---|---  
_Show Corresponding_ |  Select to list all panels with the same name that exist in both library files with different dates.  
_Show Different_ |  Select to list all panels with different dates and any panels that exist in only one library.  
_Show All_ |  Select to list all panels in the libraries, including panels with the same name and date.  
**Merge** |  |  _Single_ |  Merges highlighted panel from Input Library into the Output Library, provided the dates are different or the panel exists only in the Input Library (according to the Display Criteria selected).  
---|---  
_All_ |  Merges all the panels displayed in the list, provided the dates are different or the panel exists only in the Input Library (according to the Display Criteria selected).  
Selecting one of these options displays a message, explaining the action to be performed and advising to make a backup of files prior to proceeding with the merge.  
**Compare** |  |  _Single_ |  Compares a single selected panel in the Input Library with the Output Library (according to the Display Criteria selected).  
---|---  
_Corresponding_ |  Compares only panels that have the same name when comparing the two libraries.  
_All_ |  Compares the library defaults and all the panels for the Input Library with those for the Output Library. NOMADS subsequently lists a report on the screen to show any differences found with the comparison. This report can be printed to hard copy, if required.  
_Swap Libraries_ |  Button that is used to switch Input Library to Output Library and vice-versa.  
_Close_ |  Exits the **Merge Panels** utility.
