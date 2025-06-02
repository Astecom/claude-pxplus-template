# Panel Designer  
  
**Panel Layout Utility**|   
---|---  
  
The **Panel Layout Utility** provides the ability to apply panel layout changes to multiple panels simultaneously, either for a particular library or for multiple libraries within the same directory. Using this utility not only reduces the amount of time needed to apply panel changes, but also applies the changes consistently across all selected panels.

_(The Panel Layout Utility was added in PxPlus 2014 - Feature Pack 1.)_

This utility provides the ability to:

  * Change existing folder controls to one of the new _sidebar_ styles introduced in PxPlus 2014.
  * Embed header-type panels in the top left corner of panels.



> #### **Important Note!**  
Prior to running this utility, it is strongly recommended to **_first make a backup of your original libraries_**.

To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Graphical Application Builder (Nomads)_ category. Then, expand the _Utilities_ category and select _Panel Layout Utility_.  
From the **[NOMADS Session Manager](NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  From the _Utilities_ menu, select _Panel Layout Utility_.  
  
The main dialog consists of the following:

_Type_ |  Type of processing to be performed: |  _Library_ |  Processes one or more panels within a specified NOMADS library _(Default)_  
---|---  
_Directory_ |  Processes all NOMADS libraries within a specified directory  
  
In the adjacent field, enter the full pathname of the library or directory to be processed or use the Query button.

For each NOMADS library processed, a backup of the original library is automatically created, which contains the library panels in their original format. The naming format for the backup library is **lib_name.bak** _,_ where _lib_name_ is the name of the original library including the extension. This file is used by the _Revert .BAK Libraries_ option (on the _Include_ drop box), which allows you to back out the most recent panel layout changes and put back the library's original panels. See **[Reverting .BAK Libraries](Panel%20Layout%20Utility.htm#reverting)** below.

**_Example:_**

Original library: _Customers.en_  
Backup library: _Customers.en.bak_

#### **Note:**  
If the _lib_name.bak_ file already exists, it will be erased and re-created during the processing of the panel layout changes.  
  
_Include_ |  Specifies additional details for the processing of the panel layout changes. Selections are: |  _Folders Only_ |  _(Default)_ Changes all folder controls in the selected library or directory to either _Left_ or _Right Sidebar_ folders, depending on the _Position_ selected. The options in the **Header Embedded Panel** section cannot be changed.  
---|---  
_Folders Only, add Headers_ |  Changes all folder controls in the selected library or directory to either _Left_ or _Right Sidebar_ folders and inserts an embedded panel in the top left corner of panels containing folder controls. The panel that is embedded is determined by the _Library_ and _Panel_ selections in the **Header Embedded Panel** section.  
_All Panels, add Headers_ |  Inserts an embedded panel in the top left corner of **_all_** panels (dialogs and windows), regardless if they contain folders. The panel that is embedded is based on the _Library_ and _Panel_ selections in the **Header Embedded Panel** section. The **Folder Tabs** and **Folder Frame Style** sections cannot be changed.  
_Revert .BAK Libraries_ |  Removes the processed library and uses its corresponding **.bak** file to restore the library to its original name with its original panels. See **[Reverting .BAK Libraries](Panel%20Layout%20Utility.htm#reverting)** below.  
_Reset_ |  Clears the current entry and puts all the options back to their default settings.  
_Next_ |  Displays the **[Panels](Panel%20Layout%20Utility.htm#panels)** tab.  
_Exit_ |  Cancels the current entry and closes the utility.  
  
##  Layout

The **Layout** tab consists of the following:

**Folder Tabs** |  |  _Tabless_ _Folder_ |  Creates a folder control without tabs (controlled programmatically only).  
---|---  
_Position_ |  Sets the location for the tabs on the folder control, either _Left Sidebar_ or _Right Sidebar_.  
_Width_ |  Width of the tabs on the folder control. In turn, the same number will increase the _Width_ setting in the Panel Definition to allow for the left or right sidebar tabs.  
_Offset_ |  This number determines how many lines down (or up, if negative) the tabs will be drawn from the top of the folder control.  
**Folder Frame Style** |  |  _Fixed_ |  Select this option to choose a predefined frame style from the drop box.  
---|---  
_Expression_ |  Select this option to enter an expression for the frame style.  
_Folder Visual Class_ |  Assign a predefined Visual Class for a folder control.  
**Header Embedded Panel** |  |  _Library_ |  Enter the library that contains the panel you want to embed or use the Query button. This option is available only when the _Include_ drop box selection is _Folders Only, add Headers_ ** _or_** _All Panels, add Headers_.  
---|---  
_Panel_ |  Select a panel name from the list of panels in the selected library. This option is available when a library containing the panel to embed has been selected.

#### **Note:**  
The panel that you select to embed will not be displayed in the _Include Panels_ list (**Panels** tab) if it resides in a library that is also on this list.  
  
_Extra Lines_ |  Specify the number of blank lines that the utility needs to insert at the _top_ of each library panel to create sufficient space for adding a horizontal embedded panel. In turn, the same number will increase the _Height_ setting in the Panel Definition. Valid values are 1 to 10. **_Example:_** If the controls in the panel you want to embed occupy 2 lines in height, you would enter a value of 2.

#### **Helpful Tip:**  
To determine how many extra lines/columns will be needed, manually embed the panel on one library panel first.

If a control starts at position _Column 0.00, Line 0.00**and**_ its width extends across the **_full width_** of the embedded panel, the utility will use it to calculate the minimum number of extra blank lines needed. This number is inserted into the _Extra Lines_ field, which can be manually changed if needed.  
_Extra Columns_ |  Specify the number of blank columns that the utility needs to insert to the _left_ of each library panel to create sufficient space for adding a vertical embedded panel. In turn, the same number will increase the _Width_ setting in the Panel Definition. Valid values are 1 to 10. **_Example:_** If the controls in the panel you want to embed occupy 10 columns in width, you would enter a value of 10.

#### **Note:**  
If you are embedding a panel in conjunction with switching to a sidebar-style folder, extra columns will also be added to accommodate the tab width.

If a control starts at position _Column 0.00, Line 0.00**and**_ its height extends down the **_full height_** of the embedded panel, the utility will use it to calculate the minimum number of extra blank columns needed. This number is inserted into the _Extra Columns_ field, which can be manually changed if needed.  
_Stretchable_ |  Allows the embedded panel to automatically resize itself to adapt to the width or height of the main window or dialog into which it is inserted. Defaults to **_On_**.  
  
Select the _Next_ button to go to the **[Panels](Panel%20Layout%20Utility.htm#panels)** tab.

#### **Note:**  
The **Panels** tab must be accessed before the panel layout changes can be processed.

##  Panels

The **Panels** tab consists of the following:

> **Include Panels** |  Displays a tree view that lists all the panels for each library that corresponds with the specified _Type_ (_Library_ or _Directory_) and path entered. Libraries, Windows and Dialogs are indicated by their standard bitmaps.  
  
By default, all panels are selected, as indicated by the check box adjacent to each panel. To exclude a panel, deselect its check box prior to processing the panels.  
  
If you selected to embed a panel (on the **Layout** tab) that belongs to the same library included on this list, that panel will be excluded from the list. In addition, any panels that already have an embedded panel in the top left corner will be excluded.

#### **Note:**  
The **Include Panels** list will automatically reload with all check boxes re-selected if, prior to selecting _Proceed_ , you modify the selections for one or more of the following: _Type_ , _Include_ , the main library/directory path, and/or the library/panel settings for the _Header Embedded Panel_. When this happens, you will need to reset your panel selections.  
  
---|---  
_Proceed_ |  Launches the Panel Layout process for the selected panels.  
  
After choosing the panels to include/exclude, select the _Proceed_ button to process the panel layout changes. The changes, as specified on the **Layout** tab, are applied to the panels selected on the **Panels** tab.

Once this process has finished applying the changes to all the selected panels and no errors were encountered, a "Processing complete" message displays to indicate that the changes were successful. Clicking OK on this message clears only the library/directory pathname at the top of the main dialog. All other selections remain intact to allow you to run the utility again for a different library using the same settings and _Layout_ selections. If you do not want to re-use the same settings, select the _Reset_ button to clear your previous selections and return to the default settings. When you are done, you can review the panel changes in NOMADS and make any post-processing adjustments, if necessary.

If the process encountered errors after applying the changes to all the selected panels, an **Error Log** displays. These errors occur when the Header Embedded Panel you had selected to insert does not fit on one or more of the selected panels. The error log lists those panel(s) from which the embedded panel was omitted for this reason.

> To resolve this error, use **_one_** of the following methods:

|  Make the necessary size adjustments to the embedded panel and/or the panels listed on the error log. Then, run this utility again for only those panels on the error log by using the **Panels** tab to make your selections.  
---|---  
|  Manually insert the embedded panel into each panel listed on the error log.  
|  Reverse the panel layout changes that were applied to _all_ the panels, including those not listed on the error log. To do this, select _Revert .BAK Libraries_ from the _Include_ drop box. See **[Reverting .BAK Libraries](Panel%20Layout%20Utility.htm#reverting)** below. After that, make the necessary size adjustments, and then run this utility again for _all_ the panels in the library.  
  
##  Reverting .BAK Libraries

The _Revert .BAK Libraries_ option (on the _Include_ drop box) is used to back out the most recent panel layout changes and put back the library's original panels using the **.bak** file created during the processing of the panel layout changes.

#### **Note:**  
The revert process can only be performed for the panels of a "processed" library when a corresponding **.bak** file exists for that library.

The steps below guide you through the revert process:

**Step** |  **Description**  
---|---  
1. |  From the _Include_ drop box, select _Revert .BAK Libraries_. Selecting this option first allows the utility to filter the Query list, as well as the list on the **Panels** tab, to display _backup_ library files (**.bak**), rather than all library files, for easier file selection.  
2. |  From the _Type_ drop box: |  Select _Library_ to revert a specific library.  
---  
Select _Directory_ to revert one or more libraries in a specific directory.  
3. |  In the input control adjacent to the _Type_ drop box, specify the location for the _Library_ or _Directory_. If the _Type_ selected is **_Library_** _:_ Use the Query button to select a particular **.bak** file corresponding to the library you want to revert. **_Example:_** To revert the panel changes for the library _Customers.en_ , you would select its backup file _Customers.en.bak_. If the _Type_ selected is **_Directory_** _:_ Use the Query button to select the source **directory** that contains the **.bak** file (or files) corresponding to the library (or libraries) you want to revert.  
  
**_Example:_**  
  
Suppose you have a directory called _Work_ that contains two libraries, _Library1.en_ and _Library2.en_ , as well as two backup library files, _Library1.en.bak_ and _Library2.en.bak._ When specifying the directory pathname, you would only need to specify where the _Work_ directory is located. The utility will detect the presence of the two **.bak** files in this directory and list them on the **Panels** tab (see Step 5).  
4. |  The options on the **Layout** tab cannot be changed.  
5. |  Select the _Next_ button to display the **Panels** tab. The **Include Panels** list displays only **.bak** files, one for each "processed" library stored in the path previously entered. All the **.bak** files are selected by default for the revert process, but you can deselect the check box beside the file(s) that you do not want included in this process. If no **.bak** files are listed, this indicates that the library or directory specified in step 3 does not contain any **.bak** files. As a result, the revert process cannot be performed.  
6. |  Select the _Proceed_ button. A message displays when the processing is complete. At this point, the contents of the **.bak** files are restored to the original library, and the **.bak** files are removed.  
7. |  Review the panels in NOMADS to verify that they have been restored to their previous state, prior to processing the last panel layout changes.
