# Maintaining Library Objects   
  
**Search/Replace Library Utility** |  **__**  
---|---  
  
The **Search/Replace Library** utility provides the capability to select and edit one or all object definitions within the current library.

To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Graphical Application Builder (NOMADS)_ category. Then expand the _Utilities_ category and select _Search and Replace_.  
From **[NOMADS Library Object Selection](../Library%20Object%20Selection/Overview.md)** |  Select _Utilities > Search/Replace_ from the menu bar.  
From the **[NOMADS Session Manager](../Getting%20Started.htm#sessionmgr)** |  Select _Library > Search/Replace_ from the menu bar.  
  
The following window is displayed:

> This window consists of the following:

**Library Contents** |  Lists all available objects in the current library.  
---|---  
**Panels Selected** |  Lists the panels that are currently selected to be searched.  
_Add_ |  Button used to move a selected object from the **Library Contents** list to the **Panels Selected** list.  
_Add All_ |  Button used to move all objects from the **Library Contents** list to the **Panels Selected** list.  
_Drop_ |  Button used to remove a selected object from the **Panels Selected** list and return it to the **Library Contents** list.  
_Drop All_ |  Button used to remove all objects from the **Panels Selected** list and return them to the **Library Contents** list.  
**Search** |  |  _Search For_ |  Value to seek in the selected object definitions  
---|---  
_Replace With_ |  Value used to replace the original value entered in the _Search For_ field  
**Options** |  Check boxes indicating which options are to be searched. Deselect any options that you want skipped. Click the _Select All_ check box to search all options.

#### **Note:**  
Make sure that the _Text Value_ check box is selected to search for mask information for a Multi-line input field.  
  
**Match** |  |  _Match Using Case_ |  Sets the search to be case sensitive  
---|---  
_Replace Using Case of Original Text_ |  Clones the original case in the replacement  
_Replace_ |  Button used to step through all occurrences that match the value in the _Search For_ field. This launches the **Checking for matching values** window, which allows you to replace or skip each instance of a match.  
_Replace All_ |  Button used to globally replace all occurrences that match the value in the _Search For_ field.

#### **Important Note:**  
No confirmation messages are displayed and there is no audit trail.  
  
_Search Only_ |  Button used to step through all occurrences that match the value in the _Search For_ field without replacing instances.

#### **Important Note:**  
Use as a precautionary measure before replacing values.  
  
_Close_ |  Exits the **Search/Replace Library** utility.
