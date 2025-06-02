# Subordinate Objects  
  
**DataSource** |  **__**  
---|---  
  
**DataSource** is a subordinate object used to define the primary data source for the view or data sources defined in relationships. It will create groups of **[DS_Item](DS_Item.md)** and **[DS_Link](DS_Link.md)** objects to do this. The main **DataSource** object corresponds to a record in the _pvxview.src_ file.

For information on the _pvxview.src_ file structure, see **[Views System File Structures](../Views%20System%20File%20Structures/Overview.htm#src)**. Properties are read only and are set using corresponding **Set _xxx_( )** methods.

## DataSource Properties

The following table lists the properties of the **DataSource** subordinate object:

**Property** |  **Description**  
---|---  
**Description$** |  Data source name - short description of data source (used to identify the data source).  
**Expression_Ind$** |  Expression indicator for _PrimarySource_ _$.__  
  
_ "=" denotes _PrimarySource_ _$_ contains an expression to be evaluated.  
  
A blank indicates that the value of _PrimarySource_ _$_ is a fixed value **_(Default)_**.  
**InternalID$** |  Internal identifier for the data source.  
**InitLogicType$** |  Single character string indicating logic type: |  C |  Call  
---|---  
X |  Execute  
I or blank |  Ignore **_(Default)_**  
**InitLogic$** |  Logic to be executed when a data source object is established. Reference based on **InitLogicType$**.  
  
If type C, **InitLogic$** contains _program; entrypoint_.  
  
If type X, **InitLogic$** contains PxPlus statement(s) to be executed. String, 128 characters. See **[Logic Procedures](../Logic%20Procedures/Overview.md)**.  
**CloseLogicType$** |  Same as for **InitLogicType$**.  
**CloseLogic$** |  Logic to be executed when a data source object is dropped. See **[Logic Procedures](../Logic%20Procedures/Overview.md)**.  
**LongDescription$** |  Long description for storing notes about the data source.  
**LogicObject$** |  Object specified to supply logic references. See **[Logic Procedures](../Logic%20Procedures/Overview.md)**.  
**PrimarySource$** |  Primary data source, contents of this property vary according to **SourceType$** : _Logical file name_ (L), _File name_ (P), _Object name;tableID_ (O), or _External database table connection string_ (T).  
**SourceType$** |  Source type indicator: |  L |  PxPlus file identified by logical name.  
---|---  
P |  PxPlus file identified by path name or prefix file reference to an external database table (PxPlus SQL ODBC Driver, ADO, Oracle, MySQL or DB2).  
O |  Custom data source object.  
T |  External database table.  
D |  Disabled source.  
**Src** |  Object identifier to the data source driver associated with the data source (e.g. _*views/logio_ , _*views/fileio_ or any custom data source object).  
**UpdateStamp$** |  Last update.  
**_The following items are object Groups_** (***obj/group**) **_that define a list of related objects:_**  
**DS_Item** |  Standard group of **DS_Item** objects. One object for each item defined in the data source.  
**DS_Link** |  Standard group list of **DS_Link** objects. One object for each link used by the **DataSource**.  
  
## DataSource Methods

The following table lists the methods of the **DataSource** subordinate object:

**Method** |  **Description**  
---|---  
**AddItem([**_ColumnName_ _$_ **|** " ***** " **])** |  **_(Internal Use Only)_** Create a new **DS_Item** object. If a column name (no trailing "$") is supplied, the item object is initialized with information derived from the data source driver. If an *****_asterisk_ is supplied, all columns in the source will be added. Use **ViewCtl** equivalent.  
**AddLink( )** |  **_(Internal Use Only)_** Create a new **DS_Link** object. Use **ViewCtl** equivalent.  
**Clear( )** |  Re-initialize the data source object and delete all subordinate objects.  
**ClearItems( )** |  **_(Internal Use Only)_** Remove subordinate **DS_Item** objects.  
**ClearLinks( )** |  **_(Internal Use Only)_** Remove subordinate **DS_Link** objects.  
**GetItem(**_Item$_ **|**_idx_**)** |  Return the **DS_Item** object handle for the specified item. If _Item$_ is used, the method will attempt to match it to both the item description and name.  
**GetItemCount( )** |  Return the number of items in the data source.  
**GetItemIndex(**_Item$_**)** |  Return the **DS_Item** group index for the specified item. (Name or description may be used.)  
**GetLink(**_LinkDesc_ _$_ **|**  _idx_**)** |  Return the object identifier for the specified **DS_Link** object.  
**GetLinkCount( )** |  Return the number of links defined for the data source.  
**GetLinkIndex(**_LinkDesc_ _$_**)** |  Return the **DS_Link** group index for the specified link.  
**RemoveItem(**_Item$_ **|**_idx_**)** |  **_(Internal Use Only)_** Remove the specified **DS_Item** object. If _Item$_ is used, the method will attempt to match it to both the item description and name. Use **ViewCtl** equivalent.  
**RemoveLink(**_LinkDesc_ _$_ **|**  _idx_**)** |  **_(Internal Use Only)_** Remove the specified **DS_Link** object. Use **ViewCtl** equivalent.  
**SetCloseLogic** **(**_Type$,Logic_ _$_**)** |  Set **CloseLogic$**.  
**SetDescription(**_Description$_**)** |  **_(Internal Use Only)_** Set description of data source (used to identify the data source). Use **ViewCtl** equivalent.  
**SetInitLogic(**_Type$,Logic_ _$_**)** |  Set **InitLogic$**.  
**SetInternalID(**_InternalID_ _$_**)** |  **_(Internal Use Only)_** Set internal identifier for the data source.  
**SetLogicObject(**_ObjNm_ _$_**)** |  Set **LogicObject$**.  
**SetLongDescription$(**_LongDesc_ _$_**)** |  Set long description for storing notes about the data source.  
**SetPrimarySource(**_SrcType_ _$,SrcName$,Expr_**)** |  Set **SourceType$** and **PrimarySource$**. _Expr_ is either **X** or " " _null_.  
**SetUpdateStamp(**_Stamp$_**)** |  **_(Internal Use Only)_** Set date/time stamp of last update.
