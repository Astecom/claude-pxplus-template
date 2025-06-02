# Subordinate Objects  
  
**DataGroup** |  **__**  
---|---  
  
The **DataGroup** subordinate object is used to define a data group to which a view or data source has been assigned. One object is defined for each assigned group. **DataGroup** corresponds to the _pvxview.grp_ and _pvxview.gpd_ files.

For information on the _pvxview.grp_ and _pvxview.gpd_ file structures, see **[Views System File Structures](../Views%20System%20File%20Structures/Overview.htm#grp)**. Properties are read only and are set using corresponding **Set _xxx_****( )** methods.

## DataGroup Properties

The following table lists the properties of the **DataGroup** subordinate object:

**Property** |  **Description**  
---|---  
**DefaultGroup** |  **_(Internal Use Only)_** Indicator (0/1) for default group (i.e. the group to which unassigned views and data sources are assigned).  
**Description$** |  Data group description (used to identify the data group).  
**InternalID$** |  Internal identifier for the data group.  
**Members$** |  List of SEP-separated object identifiers for views and data sources that belong to the group.  
  
## DataGroup Methods

The following table lists the methods of the **DataGroup** subordinate object:

**Method** |  **Description**  
---|---  
**AddMember(**_ObjID_**)** |  Add the specified view or data source object to the data group. Returns -1 if the object is already a member.  
**ClearMembers( )** |  Clears all the members from the data group.  
**FindMember(**_ObjID_**)** |  Returns a Boolean value (0/1) indicating whether the data source or view represented by _ObjID_ belongs in the group.  
**RemoveMember(**_ObjID_**)** |  Remove the specified view or data source object from the data group. Returns -1 if the object is not already a member.  
**SetDefault(**_Flg_**)** |  Set the group as the default when _Flg_ =1.  
**SetDescription(**_Description$_**)** |  **_(Internal Use Only)_** Set the data group description used to identify the data group. Use **ViewCtl** equivalent.  
**SetInternalID(**_InternalID_ _$_**)** |  **_(Internal Use Only)_** Set the internal identifier for the data group.
