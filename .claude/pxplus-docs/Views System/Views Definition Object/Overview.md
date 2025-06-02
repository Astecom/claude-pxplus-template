# Views System

**Views Definition Object** |  **__**  
---|---  
  
The views definition object, **[ViewCtl](ViewCtl.md)**, can be used to create, update and delete data sources, views and data groups. It provides the same functionality programmatically that is available via **[Data Source Maintenance](../Data%20Source%20Maintenance/Overview.md)** and **[View Maintenance](../View%20Maintenance/Overview.md)**.

This object _(*views/viewctl.pvc_) embodies the entire view definition and can be created from the beginning or loaded from the definition stored in the view definition files, updated and then saved back into the definition files.

**ViewCtl** is created by the following command:

> ObjID = NEW ("*views/viewctl [,ViewsDirectory$], ERR=stmtref)

**_Structural Overview_**

The main **[ViewCtl](ViewCtl.md)** object delegates functionality to subordinate objects for dealing with individual view, data source and data group definitions. These objects will in turn delegate functionality to another level of subordinates for dealing with calculated items, views items, data source items, and relationships.

Subordinate objects to **ViewCtl** include **[ViewDef](ViewDef.md)**, **[CalcItem](CalcItem.md)**, **[ViewItem](ViewItem.md)**, **[DataGroup](DataGroup.md)**, **[DataSource](DataSource.md)**, **[DS_Item](DS_Item.md)** and **[DS_Link](DS_Link.md)**.

The structure of the views definition object is depicted in the following chart:

> **[ViewCtl](ViewCtl.md)** creates a group of **[ViewDef](ViewDef.md)** objects to hold view information (one per view). More than one view can be maintained using this method. Each **[ViewDef](ViewDef.md)** object creates a group of **[CalcItem](CalcItem.md)** objects to define calculated expressions that are available to the view (one object per item), as well as **[ViewItem](ViewItem.md)** objects to define the selected items within the view (one object per item).

**[DataSource](DataSource.md)** objects are created to hold the definition of the primary data source of each view, as well as the definitions for related (or linked) data sources used by the views. Each DataSource object will in turn create a group of **[DS_Item](DS_Item.md)** objects (one for each defined element in the data source) and a group of **[DS_Link](DS_Link.md)** objects to define the parent-child relationships that exist for the data source.

Finally, a group of **[DataGroup](DataGroup.md)** objects will define to which data groups the views and their data sources are assigned (one object per data group). Object groups are created using the ***obj/group** utility that defines lists of related objects.

For a detailed list of the different components within the views definition structure, see **[ViewCtl Properties](ViewCtl.htm#viewctl_properties)** and **[ViewCtl Methods](ViewCtl.htm#viewctl_methods)**, as well as its **[Subordinate Objects](Subordinate%20Objects.md)**. In each of these, assume that the **Add _xxx_( )** and **Load _xxx_( )** methods return the object identifier of the object that has been added or loaded successfully, or 0 (zero) if not. All other methods return values of 1 (success) and 0 (failure), unless otherwise indicated.
