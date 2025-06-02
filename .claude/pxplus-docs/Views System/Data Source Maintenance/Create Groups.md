# Data Source Maintenance 

**Create Groups** |  **__**  
---|---  
  
The **Create Groups** window is used to add and maintain groups. A group is a way to organize and relate the data sources logically. Groupings should be based upon a user view of the data rather than on a physical or application view. Data sources and views may belong to one or more groups. For example, a _Customer_ data source could belong to the _Customer Info_ , _Billing Info_ and _Master Files_ groups.

To invoke this window, click the _Groups_ toolbar button in **[Data Source Maintenance](Overview.md)**.

A tree view of defined groups, as well as the data sources and views in each group, is displayed.

> This window consists of the following:

_(Tree View List)_ |  Presents a hierarchical view of all defined groups, along with their related data sources and views. {Unassigned} is the default group for data sources and views that are not assigned to a group or are orphaned. It cannot be deleted. The default group name may be changed; however, it will always appear as the first group. Right click on a group name, data source or view to invoke a popup menu with related options. For example, right clicking on a group name provides options pertaining only to groups, while right clicking on a data source or view provides options pertaining only to data sources or views.  
---|---  
_Add_ |  Invokes the **Define a Group** window for adding a new group. Also available from the popup menu when right clicking on a group name in the tree view. |  _Group Title_ |  Enter a name for the new group. Maximum 32 characters.  
---|---  
**Available Data Sources** |  List box that is loaded with a list of existing data sources and views.  
**Data Sources in Group** |  List box that is used to keep track of any data sources that have been selected in the **Available Data Sources** list for adding to the new group.  
_Add_ |  Adds a data source selected in the **Available Data Sources** list to the **Data Sources in Group** list.  
_Remove_ |  Removes a selected data source from the **Data Sources in Group** list and returns it to the **Available Data Sources** list.  
_OK_ |  Creates the new group and exits the **Define a Group** window.  
_Cancel_ |  Exits the **Define a Group** window without creating the new group.  
_Apply_ |  Creates the new group and keeps the **Define a Group** window open for defining additional groups.  
_Copy_ |  Copies the selected group, data source or view. When prompted, enter the name of the group, data source or view to copy to. Also available from the popup menu when right clicking on an item in the tree view.  
_Remove_ |  Removes the selected group. If a data source or view within a group is selected, it will be removed from the group. Prior to deleting, a message will display. Also available from the popup menu when right clicking on an item in the tree view.  
_Properties_ |  Used to update the properties of a selected group, data source or view. Also available from the popup menu when right clicking on an item in the tree view.  
_Print_ |  Click the drop-down arrow for print options that are related to the current selection. If a group is selected, two options will display: _Print Groups_ and _Print Items in this Group._ If a data source is selected, one option will display: _Print Data Source Definition_. If a view is selected, one option will display: _Print View Definition._
