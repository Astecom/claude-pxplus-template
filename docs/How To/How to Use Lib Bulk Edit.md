# How To Tutorials

**How to Use the Library Bulk Edit and Search Utility**|   
---|---  
  
The **[Library Bulk Edit and Search](../NOMADS%20Graphical%20Application/NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)** utility is used to bulk edit panels that are in a single library or in multiple libraries within the same directory. You can use it to find controls with particular characteristics and then bulk edit those controls with the changes you specify. This utility is similar to the **[Panel Bulk Edit](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/Bulk%20Edit%20Utility.md)** utility, which is used in the NOMADS Panel Designer to bulk edit controls on the current panel only.

There are many reasons for using the Library Bulk Edit and Search utility:

  * Speeds up development time
  * Easy to search for and select the panels or types of controls to change
  * Applies changes consistently across selected panels
  * Allows changes to **[Panel Headers](../NOMADS%20Graphical%20Application/Panel%20Designer/Panel%20Header/Overview.md)** and **[Library Defaults](../NOMADS%20Graphical%20Application/NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.md)**
  * Can search or view data in NOMADS library files



The steps below show you how to:

a. Search a single screen library to find all buttons with bitmaps.  
b. Bulk edit the bitmap buttons by applying a pre-defined Visual Class that controls the appearance of bitmap buttons.  
c. Use the **Search Library** functionality to view the library file records that were edited.

**_How to Use Library Bulk Edit and Search_**

1. |  Invoke the **Library Bulk Edit and Search** utility. This can be done by using one of the following methods: **_Method 1:_** From the IDE Main Launcher, expand the _Graphical Application Builder (NOMADS)_ category. Then, expand the _Utilities_ category and select _Library Bulk Edit_. **_OR_** **_Method 2:_** From NOMADS **Library Object Selection** , select _Utilities > Library Bulk Edit_ from the menu bar. **_OR_** **_Method 3:_** Invoke the **NOMADS Session Manager** from the PxPlus Command line by entering **nom**. Then, select _Utilities > Library Bulk Edit_ from the menu bar.  
---|---  
2. |  The **Library Bulk Edit and Search** window displays and presents a warning message about making a backup. Click _OK_ to acknowledge the message.  
3. |  In the top section, specify the criteria (i.e. _Type_ , _Control Type_ , _Filter_ options) for locating the controls to be edited. Start by selecting the _Type_ of search:

> Select **_Library_** if you want to search a particular library file.

> Select **_Directory_** if you want to search more than one library file in the same directory. If the search should include library files found in the sub-directories of the specified directory, also select the _Include Sub-Directories_ check box.

By default, _Library_ is selected. For this example, leave this setting as is.  
4. |  In the adjacent input control, enter the pathname of the library file or click the Query (_folder_) button to select it (e.g. C:\PVX Plus Technologies\PxPlus\Lib\\_demo\2021\data\scrnlib.en).

#### **Note:**  
If this utility was initially invoked from NOMADS Library Object Selection, the pathname of the current library file will be displayed and set to view only. The _Type_ drop box will be set to _Library_ and also be view only.  
  
5. |  Select the _Control Type_. By default, _All Controls_ is selected. Click the drop down arrow and select _Button_.  
6. |  The **[Filter](../NOMADS%20Graphical%20Application/NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.htm#filter)** options are used to define search criteria to further specify the controls you want to find. By default, the _Expression_ , _Case-Sensitive_ and _Is Not_ check boxes are not selected. Leave these as is. Enter the criteria to search for buttons with bitmaps. In the input control beside the _Is Not_ check box, enter **{!** (open curly bracket followed by an exclamation point). This will cause data containing **{!** in any fields to be returned by the search. Since the bitmap is stored in the init_text$ library field surrounded by **{ }** (_curly brackets_), all bitmap buttons should be located.  
7. |  Click the _Find Controls_ button. Button controls that are from the selected library file and also match the filter criteria are loaded into the **Selected Controls** tree view. The top node shows the pathname of the selected library. This is followed by another level of nodes for each of the panels. Below each panel node is an indented list of Button controls. Right clicking in the tree view displays a popup menu with selections for accessing **[Library Object Selection](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** or the **[NOMADS Designer](../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**.  
8. |  Select the controls to be bulk edited. This can be done by using one of the following methods: **_Method 1:_** To select only certain controls, select the check box beside the individual controls. **_OR_** **_Method 2:_** To select all controls on a panel, select the check box beside the individual panels. **_OR_** **_Method 3:_** To select all controls in the selected library, click the _Select All_ button or select the check box beside the library node at the top of the tree view. For this example, click the _Select All_ button. The check boxes beside all controls are selected, and the _Select All_ button text changes to _Deselect All_.  
9. |  In the **[Properties to Edit](../NOMADS%20Graphical%20Application/NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.htm#properties)** grid, enter the property changes to be applied to the selected controls. The property to edit is the _Visual Class_ property, which is listed near the bottom of the **Properties to Edit** grid. Use the vertical scroll bar to access this property.  
10. |  Click the dotted button beside the _Visual Class_ property. The **Visual Class** dialog displays:  
11. |  For this example, an existing Visual Class defined for button controls will be selected. If needed, a new Visual Class can be defined by clicking the Visual Class Maintenance button (beside the drop box on the right) to invoke the **[Visual Classes Maintenance](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#vcutility)** utility. For the drop box on the left, change the _As is_ value by clicking the drop down arrow and selecting _Fixed_. Then, for the drop box on the right, click the drop down arrow and select a Visual Class defined for the Button control type. If a Visual Class is selected which was not defined for a Button control type, a message will display:  
12. |  In the **Visual Class** dialog, click _OK_ to accept the entry and return to the main **Library Bulk Edit and Search** window.  
13. |  In the **Properties to Edit** grid, the _Visual Class_ property displays the new selection.  
14. |  For this example, this is the only property being edited. Click the _OK_ button below the **Properties to Edit** grid to process this change.  
15. |  The **Complete** message displays, showing the number of libraries, panels and controls that were edited. This message may take a little extra time to display, depending on the number of controls that were previously selected in the **Selected Controls** tree view. Click _OK_ to acknowledge this message. The **Library Bulk Edit and Search** utility closes.  
  
**_How to Use the Search Library Functionality_**

Now that a bulk edit has been applied to all bitmap buttons in the selected library, these next steps show you how to use the **Search Library** functionality to view the library file records that were edited.

1. |  Invoke the **Library Bulk Edit and Search** utility. This can be done by using one of the following methods: **_Method 1:_** From the IDE Main Launcher, expand the _Graphical Application Builder (NOMADS)_ category. Then, expand the _Utilities_ category and select _Library Bulk Edit_. **_OR_** **_Method 2:_** From NOMADS **Library Object Selection** , select _Utilities > Library Bulk Edit_ from the menu bar. **_OR_** **_Method 3:_** Invoke the **NOMADS Session Manager** from the PxPlus Command line by entering **nom**. Then, select _Utilities > Library Bulk Edit_ from the menu bar.  
---|---  
2. |  The **Library Bulk Edit and Search** window displays. Click _OK_ to acknowledge the warning message about making a backup.  
3. |  The _Type_ drop box defaults to _Library_. Leave this setting as is.  
4. |  In the adjacent input control, enter the same pathname of the library file used in the steps above or click the Query (_folder_) button to select it (e.g. C:\PVX Plus Technologies\PxPlus\Lib\\_demo\2021\data\scrnlib.en).  
5. |  Click the _Search Library_ button.  
6. |  The **Library Bulk Edit and Search Search** window displays.  
7. |  Without entering any Filter criteria, click the _Search_ button. All records in the library file are loaded into the list box. Initially, this list displays the following information: **_Column 1:_** Key to each record  
**_Column 2:_** Name of the control (_obj_nme$)  
**_Column 3:_** Character representing the type of control (_obj_type$)  
**_Column 4:_** Initial value (init_val$) The total number of records displays below the grid.  
8. |  Click the _Customize_ button.  
9. |  The **Library Bulk Edit and Search Customize Search** window displays. It is used to select the columns you want to display in the Search list box, which also determines the data that will display. The Key value always displays in Column 1 of the Search list box and is not customizable. The library values that display in the Search list box by default (i.e. _obj_nme$, _obj_type$ and init_val$) are indicated by check marks in the _Select_ column. If desired, other columns can be selected for display. To select certain IOList variables one at a time, choose the appropriate check box in the _Select_ column. To select all of the IOList variables, choose the _Select / Deselect All_ check box above the grid.

#### **Note:**  
This window is also useful for viewing the IOList variables. These are often necessary when trying to determine expressions to use for Filter values.  
  
10. |  For this example, choose the _Select / Deselect All_ check box. All check boxes in the _Select_ column are selected.  
11. |  Click _OK_ to accept the selections and close this window.  
12. |  You are returned to the **Library Bulk Edit and Search Search** window. The Search list box is reloaded with all of the IOList variables populated for all of the records. In most cases, a Search would be done to find certain records in a file rather than view the contents of an entire file. To view the columns to the right, use the horizontal scrollbar or manually resize the window. In this example, the window was resized. Notice that the **[Filter](../NOMADS%20Graphical%20Application/NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.htm#searchlib)** options above the list box are similar to the ones on the **Library Bulk Edit and Search** main panel except for the addition of the _Regular Expression_ check box.  
13. |  Select the _Expression_ check box. Then, enter the following in the **Filter** input control: _obj_visual_class$="*BUTTONBITMAP"  
14. |  Click the _Search_ button.  
15. |  The matching records, which were previously edited with the Visual Class *BUTTONBITMAP, are displayed. Use the horizontal scroll bar to see the _obj_visual_class$ values of *BUTTONBITMAP.  
16. |  Click on any row of the Search list box to select it. Then, click the _Details_ button.  
17. |  The **Record Details** window displays, showing all of the values in the selected record. Use the vertical scroll bar to see all the values.  
18. |  Click the _Exit_ button to close this window. You are returned to the **Library Bulk Edit and Search - Search** window.  
19. |  Right click on any line in the Search list box. A popup menu displays with two options: _Details_ and _List_Options_.  
20. |  The **_Details_** option displays the same window as clicking the _Details_ button. Select **List Options**. A popup menu displays with options to copy records, export records, search, print, etc.  
21. |  Click the _Exit_ button under the Search list box. You are returned to the main **Library Bulk Edit and Search** window.  
22. |  Click the _Exit_ button to exit the utility.  
  
## See Also

**[Library Bulk Edit and Search Utility](../NOMADS%20Graphical%20Application/NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)**  
**[Panel Bulk Edit Utility](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/Bulk%20Edit%20Utility.md)**  
**[NOMADS Library Variables](../appendix/Nomads%20Library%20Variables.md)**  
**[Visual Classes](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)**
