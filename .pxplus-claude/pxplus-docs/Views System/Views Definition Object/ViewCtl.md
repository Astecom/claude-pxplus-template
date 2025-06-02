# Views Definition Object

**ViewCtl** |  **__**  
---|---  
  
**ViewCtl** is the main interface object. The following alphabetically arranged list of properties and methods belongs to the **ViewCtl** object:

**** |  **[AddDataGroup](ViewCtl.htm#Mark7)** |  **[GetDataSource( )](ViewCtl.htm#Mark33)** |  **[RemoveFromDataGroup( )](ViewCtl.htm#Mark59)**  
---|---|---|---  
**** |  **[AddDataSource( )](ViewCtl.htm#Mark8)** |  **[GetDataSourceIDs$(](ViewCtl.htm#Mark34) )** |  **[RemoveItem( )](ViewCtl.htm#Mark60)**  
**** |  **[AddItem( )](ViewCtl.htm#Mark9)** |  **[GetGroupID$( )](ViewCtl.htm#Mark35)** |  **[RemoveLink( )](ViewCtl.htm#Mark61)**  
**** |  **[AddLink( )](ViewCtl.htm#Mark10)** |  **[GetImportList$( )](ViewCtl.htm#Mark36)** |  **[Save( )](ViewCtl.htm#Mark62)**  
**** |  **[AddView( )](ViewCtl.htm#Mark11)** |  **[GetItem( )](ViewCtl.htm#Mark37)** |  **[SetCloseLogic( )](ViewCtl.htm#Mark63)**  
**** |  **[AssignToDataGroup( )](ViewCtl.htm#Mark12)** |  **[GetItemCount( )](ViewCtl.htm#Mark38)** |  **[SetCondition( )](ViewCtl.htm#Mark64)**  
**** |  **[ChangeDataGroupDescription( )](ViewCtl.htm#Mark13)** |  **[GetLink( )](ViewCtl.htm#Mark39)** |  **[SetDescription( )](ViewCtl.htm#Mark65)**  
**** |  **[CheckDuplicateDescription$( )](ViewCtl.htm#Mark14)** |  **[GetNextKeyID$( )](ViewCtl.htm#Mark40)** |  **[SetDescription$( )](ViewCtl.htm#Mark66)**  
**** |  **[Clear( )](ViewCtl.htm#Mark15)** |  **[GetType$( )](ViewCtl.htm#Mark41)** |  **[SetDirectory( )](ViewCtl.htm#Mark67)**  
**** |  **[ClearGroups( )](ViewCtl.htm#Mark16)** |  **[GetView( )](ViewCtl.htm#Mark42)** |  **[SetExecutionLogic( )](ViewCtl.htm#Mark68)**  
**** |  **[CloseLogic$](ViewCtl.htm#Mark17)** |  **[GetViewCount( )](ViewCtl.htm#Mark43)** |  **[SetFilter( )](ViewCtl.htm#Mark69)**  
**** |  **[CloseLogicType$](ViewCtl.htm#Mark18)** |  **[Import( )](ViewCtl.htm#Mark44)** |  **[SetImport( )](ViewCtl.htm#Mark70)**  
**** |  **[Copy( )](ViewCtl.htm#Mark19)** |  **[InitLogic$](ViewCtl.htm#Mark45)** |  **[SetInitLogic( )](ViewCtl.htm#Mark71)**  
**** |  **[CopyDataGroup( )](ViewCtl.htm#Mark20)** |  **[InitLogicType$](ViewCtl.htm#Mark46)** |  **[SetInternalKeyCode( )](ViewCtl.htm#Mark72)**  
**** |  **[DataGroup( )](ViewCtl.htm#Mark21)** |  **[InternalKeyCode$](ViewCtl.htm#Mark47)** |  **[SetLogicObject( )](ViewCtl.htm#Mark73)**  
**** |  **[DataSource( )](ViewCtl.htm#Mark22)** |  **[List$( )](ViewCtl.htm#Mark48)** |  **[SetUnassignedMessage( )](ViewCtl.htm#Mark74)**  
**** |  **[Delete( )](ViewCtl.htm#Mark23)** |  **[ListByGroup$( )](ViewCtl.htm#Mark49)** |  **[TranslatePath$( )](ViewCtl.htm#Mark75)**  
**** |  **[DeleteDataGroup( )](ViewCtl.htm#Mark24)** |  **[ListGroupMembers$( )](ViewCtl.htm#Mark50)** |  **[UnassignedMessage$](ViewCtl.htm#Mark76)**  
**** |  **[DeleteFromDataGroup$( )](ViewCtl.htm#Mark25)** |  **[ListMemberGroups$( )](ViewCtl.htm#Mark51)** |  **[UserLogic](ViewCtl.htm#Mark77)**  
**** |  **[Disable( )](ViewCtl.htm#Mark26)** |  **[Load( )](ViewCtl.htm#Mark52)** |  **[VError](ViewCtl.htm#Mark78)**  
**** |  **[ExecutionLogic$](ViewCtl.htm#Mark27)** |  **[LoadDataGroup( )](ViewCtl.htm#Mark53)** |  **[VError$( )](ViewCtl.htm#Mark79)**  
**** |  **[ExecutionLogicType$](ViewCtl.htm#Mark28)** |  **[LogicObject$](ViewCtl.htm#Mark54)** |  **[ViewDef( )](ViewCtl.htm#Mark80)**  
**** |  **[Export( )](ViewCtl.htm#Mark29)** |  **[OpenLink( )](ViewCtl.htm#Mark55)** |  **[ViewMessage$( )](ViewCtl.htm#Mark81)**  
**** |  **[FindOrphans( )](ViewCtl.htm#Mark30)** |  **[Print( )](ViewCtl.htm#Mark56)** |  **[ViewsDirectory$( )](ViewCtl.htm#Mark82)**  
**** |  **[GetDataGroup( )](ViewCtl.htm#Mark31)** |  **[Remove( )](ViewCtl.htm#Mark57)** |  **[WriteDataGroup( )](ViewCtl.htm#Mark83)**  
|  **[GetDataGroupCount( )](ViewCtl.htm#Mark32)** |  **[RemoveDataGroup( )](ViewCtl.htm#Mark58)** |   
  
Full descriptions of all **[ViewCtl Properties](ViewCtl.htm#viewctl_properties)** and **[ViewCtl Methods](ViewCtl.htm#viewctl_methods)** (grouped according to functionality) are provided below.

For descriptions of the different individual objects, see **[ViewDef](ViewDef.md)**, **[ViewItem](ViewItem.md)**, **[DataGroup](DataGroup.md)**, **[DataSource](DataSource.md)**, **[DS_Item](DS_Item.md)** and **[DS_Link](DS_Link.md)**.

## ViewCtl Properties

The following table lists the properties of the **ViewCtl** object, as well as groups of subordinate objects:

**Property** |  **Description**  
---|---  
**CloseLogic$** |  Logic to be executed prior to exiting the Views System. See **[Logic Procedures](../Logic%20Procedures/Overview.md)**.  
**CloseLogicType$** |  Same as for **InitLogicType$**.  
**ExecutionLogic$** |  Logic to be executed prior to retrieving data. See **[Logic Procedures](../Logic%20Procedures/Overview.md)**.  
**ExecutionLogicType$** |  Same as for **InitLogicType$**.  
**InitLogic$** |  Logic to be executed upon entering the Views System. Reference based on **InitLogicType$**.  
  
If type C, **InitLogic$** contains _program;entrypoint_.  
  
If type X, **InitLogic$** contains PxPlus statement(s) to be executed. String, 128 characters. See **[Logic Procedures](../Logic%20Procedures/Overview.md)**.  
**InitLogicType$** |  Single character string indicating logic type: |  C |  Call  
---|---  
X |  Execute  
I or blank |  Ignore **_(Default)_**  
**InternalKeyCode$** |  Internal key code to be used as the three-character prefix for internal ID values for new views, data sources, items, links and groups. If the given code is not three characters long, it will be left justified and padded on the right with spaces. Default value is 000. Use **SetInternalKeyCode(** **)** method to set.  
**LogicObject$** |  Object specified to supply logic references. See **[Logic Procedures](../Logic%20Procedures/Overview.md)**.  
**UnassignedMessage$** |  Message to be used for the default data group to which views and data sources belonging to no data group are assigned. Use **SetUnassignedMessage(** **)** method to set.  
**UserLogic** |  Object identifier for **LogicObject$**.  
**VError** |  Code number indicating the type of error that caused a method to fail. For code details, use the **VError$( )** method or see **[VError Codes](VError%20Codes.md)**.  
**ViewMessage$** |  String to be prefixed to a view description; e.g. "View:".  
**ViewsDirectory$** |  Directory in which to access the Views definition files (_pvxview_ _.*_). If blank, normal search rules will apply. Read only. Set using **SetViewsDirectory(** **)**.  
**_The following are local object Groups_** (***obj/group**) **_that define lists of related objects:_**  
**DataGroup** |  Standard group list of **DataGroup** objects. One object for each data group to which the views and data sources in memory belong.  
**DataSource** |  Standard group list of **DataSource** objects, including the primary and related data sources.  
**ViewDef** |  Standard group list of **ViewDef** objects. One object for each view.  
  
## ViewCtl Methods

The tables below group different **ViewCtl** methods according to their functionality. Use the following links to jump to a particular group of methods:

|  [**Loading and Manipulating Definitions in Memory**](ViewCtl.htm#Mark1)  
---|---  
|  [**Saving Definitions**](ViewCtl.htm#Mark2)  
|  [**Direct Access to Definition Files (Update Methods)**](ViewCtl.htm#Mark3)  
|  [**Direct Access to Definition Files (Retrieval Methods)**](ViewCtl.htm#Mark4)  
|  [**Export and Import Methods**](ViewCtl.htm#Mark5)  
|  [**Miscellaneous Methods**](ViewCtl.htm#Mark6)  
  
**_Loading and Manipulating Definitions in Memory_**

These load and manipulate the **ViewCtl** object and its subordinate objects in memory. They do not affect the _pvxview.*_ definition files. To commit any changes to the definition files, invoke the **Save( )** method.

**Method** |  **Description**  
---|---  
**AddDataGroup(**_GrpDesc_ _$_**)** |  Create/name new group definition.  
**AddDataSource(**_SrcType_ _$_**,**  _SrcName_ _$_**[,**  _ExprFlg_ _$_ **])** |  Create a **DataSource** object and initialize its properties with information based on the source.  
  
Source type indicator: |  L |  PxPlus file identified by logical name  
---|---  
P |  PxPlus file identified by path name or prefix file reference to an external database table (PxPlus SQL ODBC Driver, ADO, Oracle, MySQL or DB2)  
O |  Custom data source object  
T |  External database table  
  
_SrcName_ _$_ will vary depending on _SrcType_ _$_ : logical file name (L), PxPlus file name/path or prefix file reference to an external database table (P), object name;tableID (O), or (T) open string for the database table composed of the database file tag ([ODB], [DB2], [OCI]) followed by _DSN; table_name;**KEY**_**=**  _KeyDef_ [; _other_connection_strings_ ]:_  
  
_ [ODB]Northwind;Customers;KEY=Custo merID;KEY=CompanyName   
  
If the database is located on a WindX client, the [WDX] tag may be prefixed to _SrcName_ _$_.  
  
_ExprFlg_ _$_ indicates whether _SrcName_ _$_ contains an expression that must be evaluated. ""(_null_) indicates that _SrcName_ _$_ contains fixed value _(default)_ and an "=" indicates an expression to be evaluated. No **DS_Item** or **DS_Link** objects are created.  
  
**AddItem(**_SrcObjID_ **|**  _SrcDesc_ _$_**[,**  _ColName_ _$_ **|** " ***** " **])** |  Add a new **DS_Item** object to the specified data source. If a column name (no trailing "$") is specified, the object is initialized with information derived from the data source driver. If an *****_asterisk_ is supplied, all columns in the source will be added.  
**AddItem(**_VuObjID_ **|**  _VuDesc_ _$_**,**  _ItemPath_ _$_**)** |  Add a new **ViewItem** to the specified view, based on the item path. The sequence of the **ViewItem** objects will be adjusted automatically to ensure they are grouped by their linkage path.  
**AddLink(**_PSrcDesc_ _$_**,**  _LSrcDesc_ _$_**,**  _kno_ _$_**,**  _KeyDef_ _$_**)  
AddLink(**_PSrcObjID_**,**  _LSrcObjID_**,**  _kno_ _$_**,**  _KeyDef_ _$_**)** |  Create a new **DS_Link** object based on the specified parent data source and link source.  
  
_kno_ _$_ is the key number, and _KeyDef_ _$_ is the Key expression to read the linked data source.  
**AddView(**_DS_Desc_ _$_ **|**  _SrcObjID_**)** |  Create a **ViewDef** object based on the specified data source. If the data source is not currently in memory, it gets loaded.  
**AssignToDataGroup(**_Desc_ _$_**,**  _DataGroup_ _$_**)  
AssignToDataGroup(**_SrcObjID_**,**  _GrpObjID_**)** |  Assign specified view or data source to a data group.  
**CheckDuplicateDescription$(**_ObjID_**,**  _Desc_ _$_**)** |  Checks if the description of the view, data source, item, link, or data group has already been used and returns an alternate unused description using a numeric suffix; e.g. Client(2).  
**C****lear(** **)** |  Re-initialize the **ViewCtl** definition and delete all subordinate objects created by it. (Does not change **ViewsDirectory$( )** or **InternalKeyCode$**.)  
**Clear(**_SrcObjID_**)** |  Re-initialize the specified **ViewDef** or **DataSource** object and delete all subordinate objects.  
**ClearGroups( )** |  Removes all **DataGroup** objects.  
**GetDataGroup(**_GroupDesc_ _$_ **|**  _idx_**)** |  Return the object identifier for the specified **DataGroup** object.  
**GetDataGroupCount( )** |  Return the number of **DataGroup** objects.  
**GetDataSource(**_DS_Desc_ _$_ **|**  _idx_**)** |  Return the object identifier for the specified **DataSource** object.  
**GetDataSourceCount( )** |  Return the number of **DataSource** objects.  
**GetItem(**_ObjID_**,**  _idx_**)** |  Return the **ViewItem** or **DS_Item** object identifier.  
**GetItem(**_SrcObjID_**,**  _ItemName_ _$_**|**  _ItemDesc_ _$_**)** |  Return the **ViewItem** object identifier of the item with the given name or description.  
**GetItem(**_VuObjID_**,**  _ItemPath_ _$_**|**  _ColumnName_ _$_**)** |  Return the **ViewItem** object identifier of the view item which has the given path or column name (no trailing "$").  
**GetItem(**_ItemPath_ _$_**)** |  Return the **ViewItem** object identifier for the item.  
**GetItemCount(**_ObjID_**)** |  Return the number of **ViewItem** or **DS_Item** objects in the specified **ViewDef** or **DataSource** object.  
**GetLink(**_SrcObjID_**,**  _idx_**)  
GetLink(**_SrcObjID_**,**  _LnkDesc_ _$_**)  
GetLink(**_LinkPath_ _$_**)** |  Return the **DS_Link** object identifier.  
**GetView(**_ViewDesc_ _$_ **|**  _idx_**)** |  Return the object identifier for the specified **ViewDef** object.  
**GetViewCount( )** |  Return the number of **ViewDef** objects.  
**L****oad(**_Name$_**)** |  Create a **ViewDef** or **DataSource** object and load it using information from the views definition files. Also creates and loads all related items, links and groups. 

#### **Note:  
** If a view is loaded that has items referencing fields from linked files that do not exist on the system, the items will not be loaded and no error will be generated.  
  
**LoadDataGroup(**_GrpDesc_ _$_**)** |  Create a **DataGroup** object and load with information from the views definition files.  
**OpenLink(**_ObjID_ **|**  _LinkPath_ _$_**)** |  Load the data source used in the link.  
**R****emove(**_Name$_**)** |  Remove the specified **ViewDef** or **DataSource** object and subordinate objects from memory.  
  
In the case of **DataSource** objects, the following are also removed:  
  
\- Any **ViewDef** objects using the **DataSource** as its primary data source.  
\- Any **ViewItem** objects referencing the data source items.  
\- Any **DS_Link** objects using the object as its source.  
**RemoveDataGroup(**_GrpDesc_ _$_ **|**  _idx_**)** |  Remove the specified **DataGroup** object from memory.  
**RemoveFromDataGroup(**_Desc_ _$_**,**  _GrpDesc_ _$_**)  
RemoveFromDataGroup(**_SrcObjID_**,**  _GrpObjID_**)** |  Remove the specified view or data source from a data group.  
**RemoveItem(**_ObjID_**,**  _idx_**)**  
**RemoveItem(**_SrcObjID_**,**  _ItemDesc_ _$_ **|**  _ItemName_ _$_**)**  
**RemoveItem(**_VuObjID_**,**  _ItemPath_ _$_ **|**  _ColName_ _$_**)** |  Remove a **ViewItem** or **DS_Item** object.   
  
In the case of removal of a **DS_Item** object, any **ViewItem** objects referencing the item will also be removed.  
**RemoveLink(**_SrcObjID_**,**  _LinkDesc_ _$_**|**  _idx_**)** |  Remove a **DS_Link** object. Also removes any **ViewItem** objects referencing the link.  
**SetCloseLogic(**_Type$, Logic$_**)** |  Set **CloseLogic$**.  
**SetCloseLogic(**_SrcObjID_ _, Type$, Logic$_**)** |  Set closing logic for a **ViewDef** or **DataSource** object.  
**SetCondition(**_VuObjID_**,**  _ItmPath_ _$_**,**  _Code_**,**  _Case_ **[,**  _v1$...v8$_**])  
SetCondition(**_VuObjID_**,**  _Column$_**,**  _Code_**,**  _Case_ **[,**  _v1$_**...**_v8$_**])** |  Set a filter condition at the view item level.   
  
_ItmPath_ _$/Column$_ (no trailing $) - Used to identify the view item. |  _Code -_ Condition indicator code:  
---  
1 |  Equal to <Value1>  
2 |  Not equal to <Value1>  
3 |  Less than <Value1>  
4 |  Greater than <Value1>  
5 |  Less than or equal to <Value1>  
6 |  Greater than or equal to <Value1>  
7 |  Between <Value1> and <Value2> inclusive  
8 |  Between <Value1> and <Value2> exclusive  
9 |  Any of <Value1>,<Value1>, <Value1>  
10 |  None of <Value1>,<Value1>, <Value1>  
11 |  Contains <Value1>  
12 |  Starts with <Value1>  
_Case -_ Case sensitivity indicator: |   
0 |  Not case sensitive |   
1 |  Case sensitive |   
  
_v1$...v8$_ \- Values to be used in comparison. Pass numeric values as string arguments. 

#### **Note:**  
View item-level filters are analyzed at run time to optimize data retrieval by determining key ranges for reading records.  
  
**SetDescription(**_ObjID_**,**  _Description$_**)** |  Set the _Description$_ property of any **ViewCtl** subordinate object. Checks for duplicate descriptions in the views definition files and in memory. Fails if the description is a duplicate.  
**SetDescription$(**_ObjID_ , _Description$_**)** |  Set the _Description$_ property of any **ViewCtl** subordinate object. Checks for duplicate descriptions in the views definition files and in memory. If the description is a duplicate, a unique description will be created and set using the **CheckDuplicateDescription** **$( )** method. The value of _Description$_ will be returned.  
**SetDirectory(**_Directory$_**)** |  Set the directory in which the views definition files are located and open them. Will add a trailing delimiter to the **ViewDirectory$** property if omitted. Also clears the **ViewCtl** object of all subordinate objects.  
**SetExecutionLogic(**_Type$, Logic$_**)** |  Set **ExecutionLogic$**.  
**SetFilter(**_VuObjID_**,**  _Condition$_**)** |  Set the filter to be applied at the view level. |  _Condition$_ |  A free-form PxPlus expression that can be evaluated as true (**1**) or false (**0**). Variables used in the condition must be the column names assigned to the view items. The condition may be a simple condition or a complex condition using **AND** and **OR** logical operators:  
  
CustType$="C" OR CustBalance>1000  
---|---  
  
#### **Note:   
**View-level filters are not analyzed at run time to optimize data retrieval by determining key ranges for reading records. If the filter you are setting could be used for optimization purposes, see if you can set a similar condition at the view item level using the **SetCondition( )** method.  
  
**SetInitLogic(**_Type$, Logic$_ **[,**  _A$_ **])** |  Set **InitLogic$**. Set A$ to "A" to apply immediately.  
**SetInitLogic(**_SrcObjID_ _, Type$, Logic$_**)** |  Set initialization logic for a **ViewDef** or **DataSource** object.  
**SetInternalKeyCode(**_Code$_**)** |  Set the internal key code to be used as the three-character prefix for internal ID values for new views, data sources, items, links and groups. If the given code is not three characters long, it will be left justified and padded on the right with spaces. **_Default_** value is 000.  
**SetLogicObject(**_ObjID_ _, ObjNm$_**)** |  Set logic object for a **ViewDef** or **DataSource** object.  
**SetLogicObject(**_ObjNm_ _$_ [, _A$_ ]**)** |  Set **LogicObject$**. Set A$ to A to apply immediately.  
**SetUnassignedMessage(**_Message$_**)** |  Set the message to be used for the default data group to which views and data sources belonging to no data group are assigned.  
**TranslatePath$(**_Path$_ **[,**_PathType_ _$_**])** |  Translates an **ItemPath$** or **LinkPath$** from the descriptive format to the format using object identifiers, used by the **ViewDef** and **ViewItem** objects. |  _Path$_ |  Descriptive path  
---|---  
_PathType_ _$_ |  Indicates the type of path:  
|  I or _null_ |  Path is an **ItemPath$** **(_Default_)**  
|  L |  Path is a **LinkPath$**  
  
Returns a string composed of **DS_Link** and **DS_Item** object identifiers.

#### **Note:   
**This method will open all links (i.e. load the related data sources) used in the path.  
  
_LinkPath_ _$_ \- _PrimarySourceDesc_ _$_ +SEP [+ _LinkDesc_ _$_ +SEP...]   
_ItemPath_ _$_ \- _PrimarySourceDesc_ _$_ +SEP [+ _LinkDesc_ _$_ +SEP...]+ _DS_ItemDesc_ _$_ (or _DS_ItemName_ _$_)

**_Saving Definitions_**

The **Save( )** method commits the definition held in memory by the **ViewCtl** object to the _pvxview.*_ definition files. It resolves **UpdateStamp$** fields, as well as the internal identifiers in memory, for any new objects created using an **Add _xxx_( )** method. (Internal identifiers are the internal keys used by the views definition files.)

**Method** |  **Description**  
---|---  
**S****ave([**_ObjID_**])** |  Commit the definition in memory to the views definition files. Save the definition of the specified view, data source or group, as well as any subordinate items, links and groupings.   
  
If an object identifier is not specified, save _all_ view and data source definitions in memory, including their subordinate items, links and groupings.  
**GetNextKeyID$(**_Channel_**)** |  Return the next available internal ID for the specified file (used internally by the **Save(** **)** method).  
  
**_Direct Access to Definition Files (Update Methods)_**

The following **ViewCtl** methods directly update the pvxview.* definition files without affecting any view definitions currently in memory:

**Method** |  **Description**  
---|---  
**ChangeDataGroupDescription(**_Old$, New$_**)** |  Change the description of an existing group. |  _Old$_ |  Group description to be changed.  
---|---  
_New$_ |  New description to be assigned.  
**C****opy(**_Name$, NewName$_ [, _Group$_]**)** |  Copy view or data source definition (header, items and optional group assignments, if _Group$_ is specified). 

#### **Note** :  
When a view is copied, the password is not copied.  
  
**CopyDataGroup(**_FromGrp_ _$_ , _ToGrp_ _$_ [, _Flag$_]**)** |  Copy members from one data group to another. If the group being copied to does not exist, it will be created. |  _Flag$_ |  Indicator to clear members from the receiving group before copying.  
---|---  
"" _null_ |  Do not clear the existing group members. **_(Default)_**  
C |  Clear existing group members.  
**D****elete(**_ViewDesc_ _$_ | _DS_Desc_ _$_**)** **Delete(**_InternalID_ _$, Type$_**)** |  Deletes a view or data source definition. Can also be based on _InternalID_ (i.e. _Src_ID_ _$_) and _Type$_ ("D" = Data source, "V" = View).   
  
**_Views:_**  
\- Header record from pvxview.src  
\- View items from pvxview.vue  
\- Group assignments from pvxview.gpd  
\- Record from providex.ddf  
**  
_Data Sources:  
_** \- Header record from pvxview.src  
\- Data source elements  
\- Link references  
\- Group assignments from pvxview.gpd  
\- _Does not delete views references to data source_  
**DeleteDataGroup(**_GroupDesc_ _$_**)** |  Delete the specified group definition. If any views or data sources are "orphaned" by the deletion of the group, they will be placed in the default or unassigned group.  
**DeleteFromDataGroup$(**_GrpDesc_ _$_ , _Desc_ _$_**)** |  Delete the specified view or data source from the data group.  
**D****isable(**_DS_Desc_ _$_**)** |  Flag the data source as disabled: Set SRC_TYPE$ field in _pvxview.src_ header to "D" and delete group assignments from _pvxview.gpd_. Does not remove items or link/view references.  
**FindOrphans(** **)** |  Find views and data sources that do not belong to a data group and put them in the default data group.  
**WriteDataGroup(**_GrpDesc_ _$_ , _SrcList_ _$_ [, _Flag$_]**)** |  Add the views and data sources in the list to the group. |  _ScrList_ _$_ |  List of view and data source descriptions separated by SEP  
---|---  
_Flag$_ |  Indicator to clear existing group relationships first  
" " _null_ |  Do not clear existing group relationships  
C |  Clear existing group relationships  
  
**_Direct Access to Definition Files (Retrieval Methods)_**

The following **ViewCtl** methods retrieve information directly from the _pvxview.*_ definition files without regard for any view definition currently in memory:

**Method** |  **Description**  
---|---  
**GetDataSourceIDs$(**_ViewDesc_ _$_**)** |  Returns a SEP-separated string containing the internal ID's of all data sources referenced in the view specified by _ViewDesc_ _$_ , or a null string if an error occurs.  
  
If the view references a link whose link record is missing, then the ID for the data source associated with the missing link is listed as "00000000".  
**GetGroupID$(**_GrpDesc_ _$_**)** |  Returns the internal ID (_Grp_ID_ _$_) of the specified group. Useful for determining if a group exists. Returns "" (null) if the group does not exist.  
**GetType$(**_Desc_ _$_**)** |  Returns the _SourceType_ _$_ of the specified view or data source.  
**L****ist$(** **)  
List$(**_Type$_ ,[_Bmp1$_ [_Bmp2$_]]**)** |  Returns a $00$ separated list of views and/or data sources in alphabetic order. The _Type$_ indicator will determine what is returned: |  A |  Views and data sources **_(Default)_**  
---|---  
D |  Data sources  
V |  Views  
G |  Groups  
  
Bitmap references are:  
  
_Bmp1$_ = Bitmap for data source (e.g. "!File" ), or views (e.g. "!Grid" ) if _Type$_ ="V"  
_Bmp2$_ = Bitmap for views (e.g. "!Grid" ) if _Type$_ ="A"  
  
If bitmap references are included, the format for each item in the return value will be:  
  
Bmp$+SEP+Description$+$00$  
  
The return value is suitable for display in a List Box.  
  
**ListByGroup$(**[_Type$_]**)  
ListByGroup$(**_Type$_ , _B1$_ , _B2$_ [, _B3$_]**)  
ListByGroup$(**_Type$_ , _B1$_ , _B2$_ , _B3$_ ,"_S_ "**)** |  Returns a list of views and/or data sources sorted by data group. The _Type$_ indicator will determine what is returned: |  A |  All views and data sources **_(Default)_**  
---|---  
D |  All data sources  
V |  All views  
  
Normally, data groups with no items will be suppressed, unless the "S" flag is included. If no bitmap references are included, format of the items will be:  _DataGroupDesc_ _$+_ SEP _+View|DataSourceDesc$+_ $00$.  
  
Bitmap references are:  
  
_B1$_ = Bitmap for the group level (e.g. "{!Files}" )  
_B2$_ = Bitmap for data sources (e.g. "{!File}" ) or views if _Type$_ ="V"  
_B3$_ = Bitmap for views (e.g. "{!Grid}" ) if _Type$_ ="A"  
  
Format of each item in the return value with bitmaps: _Bmp$_ \+ _GrpDesc_ _$_ \+ SEP + _View|DataSourceDesc_ _$_ \+ $00$. The return value is suitable for display in a Tree view control.  
  
**ListGroupMembers$(**_GrpDesc_ _$_ [,[_LB_Type_ _$_]**)  
ListGroupMembers$(**_D$_ , _LBT$, B1$, B2$, B3$_**)** |  Returns a list of views and data sources which belong to the specified group. The _LB_Type_ _$_ indicator determines how the output will be formatted: |  L |  Formatted for List Boxes **_(Default)_**  
---|---  
T |  Formatted for Tree View controls  
  
If no bitmap references are included, the format of individual items in the return value will be:

**_List Box:_** |  _View_ | _DataSourceDesc_ _$_ \+ $00$  
---|---  
**_Tree View:_** |  _DataGroupDesc_ _$_ \+ SEP + _View_ | _DataSourceDesc_ _$_ \+ $00$  
  
Bitmap references are:  
  
_B1$_ = Bitmap for the group level (e.g. "!Files" for List Boxes and "{!Files}" for Tree Views)  
_B2$_ = Bitmap for data sources (e.g. "!File" for List Boxes and "{!File}" for Tree Views)  
_B3$_ = Bitmap for views (e.g. "!Grid" for List Boxes and "{!Grid}" for Tree Views)  
  
Format of each item in the return value with bitmaps:

**_List Box:_** |  _B2$_ | _B3$_ \+ _View_ | _DataSourceDesc_ _$_ \+ $00$  
---|---  
**_Tree View:_** |  First entry: _B1$_ \+ _GrpDesc_ _$_ \+ $00$  
Other entries: _B2$_ | _B3$_ \+ _GrpDesc_ _$_ \+ SEP + _Desc_ _$_ \+ $00$  
**ListMemberGroups$(**_MemberDesc_ _$_**)** |  Return a SEP-separated list of groups to which a specified data source or view belongs.  
**P****rint(**_Type$_ [, _Desc_ _$_ [,"_V_ "][, _Opt$_]]**)** |  Print view and/or data source definitions to the printer or PxPlus Viewer. If the outputting to the printer, "*winprt*;Asis" is used to output directly to the Windows default printer without invoking the printer dialogue box.  
  
_Type$_ will determine what type of definition is printed: |  A |  Data sources and views |   
---|---|---  
D |  Data sources |   
V |  Views |   
G |  Groups  
  
|   
_Desc_ _$_ |  Determines which definition is printed. If omitted or "" _null_ , all definitions of the specified type are output.  
_V_ |  Outputs to the PxPlus Viewer rather than to the printer. If omitted, the default destination is the Windows default printer.  
_Opt$_ |  Provides printer options: _Normal, Asis**(Default)**_ and _Default_.  
| | |   
  
**_Export and Import Methods_**

**ViewCtl** export and import processing is accomplished using the methods described in the following table:

**Method** |  **Description**  
---|---  
**E****xport(**_Channel_ [, _SourceList_ _$_]**)** |  Export the specified definitions to a specially formatted text file.   
  
_Channel_ is the open channel to the serial file to which the exported definitions will be written.  
  
_SourceList_ _$_ provides a list of data sources and views to be included in the export file. List entries are separated by $00$.   
  
If _SourceList_ _$_ is omitted or blank, the default is to include all definitions. The application must open/close the export text file, as well as purge it, if desired. When exporting, the text file must also be locked, unless the **['LU'](../../parameters/lu.md)** parameter is set.  
**_The following methods handle importing definitions:_**  
**GetImportList$(**_Channel_ [, _Code$_]**)** |  Return a SEP-separated list of the data sources and views included in the exported file. The optional code will determine what source types will be included in the list: |  A |  All **_(Default)_** ; i.e. data sources and views  
---|---  
D |  Data sources only  
V |  Views only  
**SetImport(**_SrcDesc_ _$_ , _MergeOpt_**)** |  Specify a definition to be imported (must exist in the exported file). (Used in conjunction with Import( )).   
  
_SrcDesc_ _$_ is the data source or view description to be imported (must exist in the exported file).  
  
_MergeOpt_ provides options for dealing with definitions that exist in both source/destination files, as follows: |  0 |  Skip the definition  
---|---  
1 |  Replace the contents of the destination definition with those of the source  
2 |  Merge the contents of the two definitions, with precedence given to the source  
**I****mport(**_Channel_**)** |  Import the data source and view definitions specified previously using the **SetImport( )** method, or all the definitions if none have been specified by **SetImport( )**. In the latter case, merge option 1 (_replace_) will be used.  
  
_Channel_ is the open channel to an exported file.  
  
**_Miscellaneous Methods_**

Other **ViewCtl** methods are described as follows:

**Method** |  **Description**  
---|---  
**VError$(**[_ErrorCode_]**)** |  Return a description of the last view error to occur (based on the contents of the **VError** property) or of the specified _ErrorCode_. See **[VError Codes](VError%20Codes.md)**. The format of the error description is as follows:  
  
**Views Error**  _#nnnn_ **-**  _ClassName_ _: Method( ) Error Description  
_  
** _Example:  
_**  
Views Error #1234 - ViewCtl: GetView( )   
View not found
