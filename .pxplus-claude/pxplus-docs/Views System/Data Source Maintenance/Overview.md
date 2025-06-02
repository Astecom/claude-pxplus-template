# Views System  
  
**Data Source Maintenance** |  **__**  
---|---  
  
**Data Source Maintenance** is used to create and maintain data source and view definitions.

> It also provides options for the following functionality:

  * Copy existing data source and view definitions to create new definitions.
  * Define groups for related data source and view definitions.
  * Specify logic procedures.
  * Export/Import utilities to merge from one set of view definitions files into another.
  * Print one or multiple data source and view definitions.



To invoke this window, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Views_ category and select _Data Source Maintenance._  
From the **[NOMADS Session Manager](../../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  From the menu bar, select _Utilities_ > _Views Data Source Definition._  
PxPlus statement |  **CALL** "*views/views;DataSource_Maintenance"  
PxPlus statement |  **PROCESS** "DS_Main","*views/views.en"  
From the PxPlus Command line |  Enter: **DS**  
  
**Data Source Maintenance** presents a list of data sources, followed by view definitions. Selecting a data source or view allows access to different maintenance functionality:

**_Data Sources_** |  _Double clicking_ on a data source invokes the **[Data Source Definition Wizard](Data%20Source%20Definition.md)** for editing the properties for the selected data source. _Right clicking_ on a data source displays a popup menu with the following options: |  _Create a View from this Data Source_ |  Invokes the **[Define a View](../View%20Maintenance/Define%20a%20View.md)** window.  
---|---  
_Add a New Data Source_ |  Invokes the **[Data Source Definition Wizard](Data%20Source%20Definition.md)**.  
_Update Data Source Properties_ |  Brings up the data source definition for editing.  
_Copy to another Data Source_ |  Prompts you for the name of a data source to copy to.  
_Delete Data Source and all references_ |  Displays a message prior to deletion.  
_Print_ |  Presents a choice of print options: _Print Selected Data Source, Print All Data Sources_ and _Print All_.  
**_Views_** |  _Double clicking_ on a view invokes the **[Define a View](../View%20Maintenance/Define%20a%20View.md)** window for editing the selected view. _Right clicking_ on a view displays a popup menu with the following options: |  _Update View Properties_ |  Brings up the view definition for editing.  
---|---  
_Copy to another View_ |  Prompts you for the name of a view to copy to.  
_Delete View and all references_ |  Displays a message prior to deletion.  
_Print_ |  Presents a choice of print options: _Print Selected View, Print All Views_ and _Print All_.  
  
## Tool Bar

The tool bar consists of the following options, some of which are also available on the popup menu when right clicking on a selected data source or view definition:

_New Data Source_ |  Launches the **[Data Source Definition Wizard](Data%20Source%20Definition.md)** for creating a new data source definition. Also available from the popup menu when right clicking on a selected data source definition. _(The Data Source Definition Wizard was added in PxPlus 2021.)_  
---|---  
_Copy_ |  Copies the selected data source or view definition. When prompted, enter the name of the data source or view to copy to. Also available from the popup menu when right clicking on a selected data source or view definition.  
_Remove_ |  Deletes the selected data source or view definition, as well as all group references to it. Prior to deleting, a message will display. Also available from the popup menu when right clicking on a selected data source or view definition.  
_Properties_ |  Launches the **[Data Source Definition Wizard](Data%20Source%20Definition.md)** in "update" mode to allow the selected data source definition to be edited. The title bar at the top of the wizard panels indicates the name of the data source being updated. The _Source Type_ and _Primary Data Source_ fields (on the **Step 1: Data Source** panel) cannot be changed; however, the properties on the other wizard panels can be updated. Also available from the popup menu when right clicking on a selected data source or view definition. _(The Data Source Definition Wizard was added in PxPlus 2021.)_  
_Create View_ |  Launches the **[Define a View](../View%20Maintenance/Define%20a%20View.md)** window for creating a new view from the selected data source definition. Also available from the popup menu when right clicking on a selected data source definition.  
_Groups_ |  Launches the **[Create Groups](Create%20Groups.md)** window for creating a new group, as well as copying, deleting or updating a selected group, data source or view definition.  
_Logic_ |  Launches the **[Logic Procedures](../Logic%20Procedures/Overview.md)** window for specifying the logic to be performed for the data source or view.  
_Export  
Import_ |  Launches the **[Export (or Import) View and Data Source Definitions](Merge%20Views%20\(Export%20and%20Import\).htm)** window for merging from one set of view definition files into another.  
_Print_ |  Click the drop-down arrow for a list of options (depends on whether a data source or a view definition is selected): When a **_data source_** is selected, options are _Print Selected Data Source, Print All Data Sources, Print All_. When a **_view_** is selected, options are _Print Selected View, Print All Views, Print All._ Also available from the popup menu when right clicking on a selected data source or view definition.  
  
##  Internal Key Code

**Data Source Maintenance** includes a field for setting an _Internal Key Code_. This three-character code is used to create unique key values that differentiate components defined by the system designer from those defined by the end user.

The internal keys for views components consist of eight characters: the first three are derived from the Internal Key Code, and the last five are zero-padded sequential numeric values.

The _Internal Key Code_ can also be set by loading the **%VIEW_OWNER$** global variable. The default value is "000".

## See Also

**[Data Source Definition Wizard](Data%20Source%20Definition.md)**  
**[View Maintenance](../View%20Maintenance/Overview.md)**
