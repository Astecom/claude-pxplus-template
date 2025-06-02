# Options and Utilities

**Change Bulk Edit/Property Sort Order**|   
---|---  
  
The **Change Bulk Edit/Property Sort Order** option is used to customize how property groupings are displayed in **[Property Sheets](../Properties%20Table/Overview.md)**, the **[Panel Bulk Edit Utility](Bulk%20Edit%20Utility.md)**, and the **[Library Bulk Edit and Search Utility](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)** (for the **Properties to Edit** grid).

Invoke the **Change Bulk Edit/Property Sort Order** window from the **[NOMADS Panel Designer](../Introduction.md)** menu bar either by selecting _Options > Change Bulk Edit/Property Sort Order_ (when using **[NOMADS+](../../../NOMADS+%20Toolbar/Introduction.md)** or **[Folder Style](../Folder%20Style/Using%20the%20Folder%20Style.md)**) or by selecting _Options > Properties Table > Change Bulk Edit/Property Sort Order_ (when using **[Property Sheets](../Properties%20Table/Overview.md)**).

The following window is displayed:

> This window consists of the following:

_(List Box)_ |  Displays the currently defined property categories in a tree view format. Expand (collapse) the list of properties associated with a category by clicking the **+**  _plus sign_ (or **-**  _minus sign_) or by double-clicking the category name. The list of properties for each category is sorted in alphabetical order by default. The presence (or absence) of a check mark in the check box next to a category determines whether the list of properties for the category is expanded (or collapsed) by default when accessing the Properties Table, Panel Bulk Edit Utility or Library Bulk Edit and Search Utility. In addition, when you access the interface for these programs, you can expand/collapse a category by selecting the up/down arrow buttons adjacent to the category name.  
---|---  
_Applicable Objects_ |  Click on a property to view a list of the objects to which the selected property can be applied.  
_Move Up  
Move Down_ |  Use these buttons to rearrange the order of selected categories and/or their associated properties.  
_OK_ |  Applies the changes. Custom settings are saved by user ID and recorded in the file _*win/providex.cso_.

#### **Note:**  
These custom settings will be retained when you upgrade PxPlus. As new properties are introduced with NOMADS enhancements, they will be added at the end of the appropriate property groupings in the existing _*win/providex.cso_ file.

Any changes you make in this window are reflected in the Properties Table, Panel Bulk Edit Utility or Library Bulk Edit and Search Utility the next time it is accessed.  
_Cancel_ |  Closes the **Change Bulk Edit/Property Sort Order** window and does not apply any changes.  
_Load Defaults_ |  Removes any custom settings from the _*win/providex.cso_ file and resets the sort order back to original system defaults.
