# Object-Oriented Interface  
  
**rptline** |  **__**  
---|---  
  
The **rptline** object is a data member of the **[rptgroup](../rptgroup/Overview.md)** object, delegated to store and manipulate a report line definition. One object is created for each report line in the section in the order that they are to be displayed.

The **[pvxreport](../pvxreport/Overview.md)** or **[rptgroup](../rptgroup/Overview.md)** **GetLine( )** methods can be used to retrieve the object handle for an **rptline** object, which allows access to all the object's methods and properties.

The **rptline** object has its own data member, the **[rptcell](../rptcell/Overview.md)** object, to define the cells in the line. It has methods to create and access these objects.

## rptline Properties

The following table lists the properties of the **rptline** object:

**Property** |  **Description**  
---|---  
**Height** |  Height of the line in points (72's of an inch). Must be a positive number.  
**Library$** |  Name of the library file containing the layout to be inserted in this location. Can be a simple file name or complete path. Read only. Set using the **SetLibraryReference( )** method.  
**LibraryReference$** |  Name of the library layout to be inserted in this location. Must be unique. Read only. Set using the **SetLibraryReference( )** method.  
**Overlay** |  Line advancement setting. |  **0** |  Normal Line Advance |  **_(Default)_** The next line of the report is advanced by the height of the line just printed.  
---|---|---  
**1** |  Overlay Next Line |  The current and next lines are printed at the same vertical location.  
**-1** |  Overlay Previous Line |  The current and previous lines are printed at the same vertical location.  
  
See **[Line Advancement](../../Designing%20a%20Report/Creating%20the%20Report%20Layout/Line%20Advancement.md)**.

_(The Overlay property was added in PxPlus 2021.)_  
  
## rptline Methods

The following table lists the methods of the **rptline** object:

**Method** |  **Description**  
---|---  
**AddCell( )** |  Creates a new **[rptcell](../rptcell/Overview.md)** object using the next available sequence number. Only cells with data or formatting need to have an **rptcell** object created for them.  
  
**CellCount** for the line is incremented. Returns the object handle if successful, **0** if not.  
**AddFilter(**_Setidx_**)** |  Creates a new **[rptfilter](../rptfilter/Overview.md)** object within the **[rptfilterset](../rptfilterset/Overview.md)** object specified by _Setidx_ using the next available sequence number. One object is created for each filter set.  
  
The sequence number can be used as the index number to identify the object when using the **RemoveFilter( )** and **GetFilter( )** methods.  
  
**FilterCount** for the **rptfilterset** object is incremented. Returns the object handle if successful, **0** if not.  
**AddFilterSet( )** |  Creates a new **[rptfilterset](../rptfilterset/Overview.md)** object. If one already exists, returns address to current.  
  
**FilterSetCount** is set to **1**. Returns the object handle if successful, **0** if not.  
**CellCount( )** |  Returns the number of cells in a line.

#### **Note:  
** A cell contains data or formatting information. Empty cells do not have an assigned object.  
  
**ClearFilters( )** |  Removes the **[rptfilterset](../rptfilterset/Overview.md)** object and resets **FilterSetCount** to **0**.  
**FilterCount([**_Setidx_**])** |  Returns the number of **[rptfilter](../rptfilter/Overview.md)** objects in the **[rptfilterset](../rptfilterset/Overview.md)** object specified by _Setidx_. If _Setidx_ is omitted, returns the number of **rptfilter** objects in the first filter set.  
**FilterSetCount( )** |  Returns the number of **[rptfilterset](../rptfilterset/Overview.md)** objects in the set (**1** or **0**).  
**GetCell(**_idx_**)** |  Returns the handle for an **[rptcell](../rptcell/Overview.md)** object.  
  
_idx_ _-_ Sequence number of the **rptcell** object.  
  
This allows access to all **rptcell** properties. Returns **0** if the arguments are invalid.  
**GetCondition$(**_Setidx,Filteridx_**)** |  Returns a string containing the PxPlus expression associated with a filter.  
  
_Setidx_ \- Index indicating which **[rptfilterset](../rptfilterset/Overview.md)** object.  
  
_Filteridx_ \- Index of the **[rptfilter](../rptfilter/Overview.md)** object.  
**GetFilter(**_Setidx**,** Filteridx_**)** |  Returns the handle for an **[rptfilter](../rptfilter/Overview.md)** object.  
  
_Setidx_ \- Index indicating which **[rptfilterset](../rptfilterset/Overview.md)** object.  
  
_Filteridx_ \- Index of the **rptfilter** object.  
**GetFilterSet( )** |  Returns the handle for the **[rptfilterset](../rptfilterset/Overview.md)** object. This allows access to all **rptfilterset** properties and methods. Returns **0** if not successful.  
**RemoveCell(**_idx_**)** |  Removes an **[rptcell](../rptcell/Overview.md)** object from the section.  
  
_idx_ _-_ Sequence number of the cell to be removed.  
  
If an **rptcell** object is removed, the sequence number of the **rptcell** objects with higher sequence numbers is adjusted down.  
  
**CellCount** is decremented for the line. Returns the object handle if successful, **0** if not.  
**RemoveFilter(**_Setidx,Filteridx_**)** |  Removes an **[rptfilter](../rptfilter/Overview.md)** object.  
  
_Setidx_ \- Index indicating which **[rptfilterset](../rptfilterset/Overview.md)** object.  
  
_Filteridx_ \- Index of the **rptfilter** object.  
**RemoveFilterSet( )** |  Removes the **[rptfilterset](../rptfilterset/Overview.md)** object. If the **rptfilterset** object is removed, **FilterSetCount** is set to **0**. Returns the object handle if successful, **0** if not.  
**SetLibraryReference(**_LibName_ _$,LibRef$_**)** |  Sets the name of the layout and the library containing the layout to be inserted.   
  
_LibName_ _$_ \- Name of the library file. Can be a simple file name or complete path.  
  
_LibRef_ _$_ \- Name of the library layout to be inserted. Returns **1** if successful, **0** if not.
