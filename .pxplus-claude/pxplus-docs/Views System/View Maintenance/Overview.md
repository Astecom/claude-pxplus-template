# Views System

**View Maintenance** |  **__**  
---|---  
  
**View Maintenance** is used to **[Define a View](Define%20a%20View.md)**, as well as edit, reorganize and print existing view definitions.

> To invoke this window, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Views_ category and select _View Maintenance._  
From the **[NOMADS Session Manager](../../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  From the menu bar, select _Utilities_ > _Views Definition._  
PxPlus statement |  **CALL** "*views/views;View_Maintenance"  
PxPlus statement |  **PROCESS** "View_Main","*views/views.en"  
From the PxPlus Command line |  Enter:**VU**  
  
**View Maintenance** presents a list of all available data sources and views in their logical groups. Selecting a data group, data source or view allows access to different maintenance functionality:

**_Data Groups_** |  _Double clicking_ on a data group expands (or collapses) a tree view of current data sources and views in that group. _Right clicking_ on a data group displays a popup menu with the following options: |  _Add a New Group_ |  Invokes the **[Define a Group](../Data%20Source%20Maintenance/Create%20Groups.htm#add)** window.  
---|---  
_Update Group Properties_ |  Brings up the group definition for editing.  
_Copy to another Group_ |  Prompts you for the name of a group to copy to.  
_Delete Group_ |  Displays a message prior to deletion.  
_Print_ |  Presents a choice of print options: _Print Groups_ and _Print Items in this Group_.  
**_Data Sources_** |  _Double clicking_ on a data source displays a message for creating a new view from the selected data source. Responding _Yes_ invokes the **[Define a View](Define%20a%20View.md)** window. _Right clicking_ on a data source displays a popup menu with the following options: |  _Create a View from this Data Source_ |  Invokes the **[Define a View](Define%20a%20View.md)** window.  
---|---  
_Print Data Source Definition_ |  Prints the definition.  
**_Views_** |  _Double clicking_ on a view invokes the **[Define a View](Define%20a%20View.md)** window for editing the selected view. _Right clicking_ on a view displays a popup menu with the following options: |  _Add a New View_ |  First prompts you to select a data source to use. After that, the **[Define a View](Define%20a%20View.md)** window is launched.  
---|---  
_Update View Properties_ |  Brings up the view definition for editing.  
_Copy to another View_ |  Prompts you for the name of a view to copy to. An _Add to current Group_ check box option is provided, which is selected by default.  
_Delete View and all References_ |  Displays a message prior to deletion.  
_Remove View from Group_ |  Removes the selected view from the group and puts it in the {Unassigned} default group.  
_Print View Definition_ |  Presents a choice of print options: _Print Groups_ and _Print Items in this Group_.  
  
## See Also

**[Data Source Maintenance](../Data%20Source%20Maintenance/Overview.md)**
