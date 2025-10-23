# Subordinate Objects  
  
**ViewDef** |  **__**  
---|---  
  
**ViewDef** is a subordinate object used to define a basic view definition. It creates a group of **[CalcItem](CalcItem.md)** objects to manage information concerning calculated items that have been defined for the view, as well as a group of **ViewItem** objects to manage information concerning items selected for the view. A **ViewDef** object corresponds to a record in the _pvxview.src_ file.

For information on the _pvxview.src_ file structure, see **[Views System File Structures](../Views%20System%20File%20Structures/Overview.htm#src)**.

## ViewDef Properties

The following table lists the properties of the **ViewDef** subordinate object:

**Property** |  **Description**  
---|---  
**CloseLogic$** |  Logic to be executed when a view is closed using the **'Close()** method. See **[Logic Procedures](../Logic%20Procedures/Overview.md)**.  
**CloseLogicType$** |  Same as for **InitLogicType$**.  
**Description$** |  Short description used to identify the view.  
**Filter$** |  Free-form data filter.  
**InitLogic$** |  Logic to be executed when a view is opened using the **'Open()** method. Reference based on **InitLogicType$**.  
  
If type C, **InitLogic$** contains _program;entrypoint_.  
  
If X, **InitLogic$** contains PxPlus statement(s) to be executed. String, 128 characters. See **[Logic Procedures](../Logic%20Procedures/Overview.md)**.  
**InitLogicType$** |  Single character string indicating logic type: |  C |  Call  
---|---  
X |  Execute  
I or _null_ |  Ignore **_(Default)_**  
**InternalID$** |  Internal identifier for the view.  
**Key$** |  Sort key for reading the primary data source.  
**Locked** |  Indicates that the view definition cannot be modified unless unlocked with password. |  1 |  Locked  
---|---  
0 |  Not locked  
**LogicObject$** |  Object specified to supply logic references. See **[Logic Procedures](../Logic%20Procedures/Overview.md)**.  
**LongDescription$** |  Long description for storing notes about the view.  
**Order$** |  Element order: |  A |  Alphabetic  
---|---  
" " _null_ |  Natural order **_(Default)_**  
**OriginalDescription$** |  **_(Internal Use Only)_** Original description of the view when loaded.  
**Password$** |  Encrypted password for locking view definition.  
**PrimarySource** |  **[DataSource](DataSource.md)** object identifier for primary data source.  
**UpdateStamp$** |  Last update.  
  
## ViewDefMethods

The following table lists the methods of the **ViewDef** subordinate object:

**Method** |  **Description**  
---|---  
**AddCalcItem( )** |  Add a new **CalcItem** object to the view. _(AddCalcItem method was added in PxPlus 2021.)_  
**AddItem(**_ItemPath_ _$_**)** |  **_(Internal Use Only)_** Add a new **ViewItem** object to the view based on the item path. The sequence of the **ViewItem** objects will be adjusted automatically to ensure they are grouped by their linkage path. Use **[ViewCtl](ViewCtl.md)** equivalent.  
**AdjustItemSequence( )** |  Adjust the sequence of the **ViewItem** objects based on their linkage path.  
**Clear( )** |  Re-initialize the view definition and delete all **CalcItem** and **ViewItem** objects created by it.  
**ClearCalcItems( )** |  Delete all **CalcItem** objects belonging to the view. _(ClearCalcItems method was added in PxPlus 2021.)_  
**ClearItems( )** |  Delete all **ViewItem** objects belonging to the view.  
**GetCalcItem(**_ItemPath_ _$_ | _Column$_ | _idx_**)** |  Return the object identifier for the specified **CalcItem**. (No trailing "$" when specifying a column.) _(GetCalcItem method was added in PxPlus 2021.)_  
**GetCalcItemCount( )** |  Return the number of **CalcItem** entries. _(GetCalcItemCount method was added in PxPlus 2021.)_  
**GetCalcItemIndex(**_ItemPath_ _$_ | _Column$_**)** |  Return the specified **CalcItem** group index. (No trailing "$" when specifying a column.) _(GetCalcItemIndex method was added in PxPlus 2021.)_  
**GetItem(**_ItemPath_ _$_ **|**  _Column$_ **|**  _idx_**)** |  Return the object identifier for the specified **ViewItem**. (No trailing "$" when specifying a column.)  
**GetItemCount( )** |  Return the number of **ViewItem** entries.  
**GetItemIndex(**_ItemPath_ _$_ **|**  _Column$_**)** |  Return the specified **ViewItem** group index. (No trailing "$" when specifying a column.)  
**LoadPassword(**_Password$_**)** |  **_(Internal Use Only)_** Load an encrypted password. View must be unlocked with no current password.  
**RemoveCalcItem(**_ItemPath_ _$_ | _idx_**)** |  Remove a calculated item from the view. _(RemoveCalcItem method was added in PxPlus 2021.)_  
**RemoveItem(**_ItemPath_ _$_ **|**  _idx_**)** |  **_(Internal Use Only)_** Remove an item from the view. Use **ViewCtl** equivalent.  
**SetCondition(**_ItmPath_ _$_**,**  _Code_**,**  _Case_**[,**  _v1$_  _v8$_**])**  
**SetCondition(**_Column$_**,**_Code_**,**  _Case_ **[,**  _v1$..v8$_**])** |  Set a filter condition at the view item level.  
  
_ItmPath_ _$/Column$_ (No trailing "$"): Used to identify item. |  _Code -_ Condition indicator code:  
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

#### **Note:   
**View item-level filters are analyzed at run time to optimize data retrieval by determining key ranges for reading records.  
  
**SetCloseLogic(**_Type$,Logic_ _$_**)** |  Set **CloseLogic$**.  
**SetDescription(**_Description$_**)** |  **_(Internal Use Only)_** Set the description of the view. Use **ViewCtl** equivalent.  
**SetFilter(**_Condition$_**)** |  **_(Internal Use Only)_** Set the filter to be applied at the view level. |  _Condition$_ |  A free-form PxPlus expression that can be evaluated as true (**1**) or false (**0**). Variables used in the condition must be the column names assigned to the view items. The condition may be a simple condition or a complex condition using **AND** and **OR** logical operators.  
  
**_Example:_**  
  
CustType$(2,1)="C" **OR** CustBalance>1000  
---|---  
  
#### **Note:   
**View-level filters are not analyzed at run time to optimize data retrieval by determining key ranges for reading records. If the filter you are setting could be used for optimization purposes, see if you can set a similar condition at the view item level, using the **SetCondition( )** method.

Use **ViewCtl** equivalent.  
  
**SetInitLogic(**_SrcObjID_ _, Type$, Logic$_**)** |  Set initialization logic for a **ViewDef** or **DataSource** object.  
**SetInitLogic(**_Type$, Logic$_**)** |  Set **InitLogic$**.  
**SetInternalID(**_InternalID_ _$_**)** |  **_(Internal Use Only)_** Set the internal identifier for the view.  
**SetKey(**_Key$_**)** |  Set the sort key for reading the primary data source.  
  
_Key$ -_ Key number (0-based for primary key).  
**SetLogicObject(**_ObjNm_ _$_**)** |  Set **LogicObject$**.  
**SetLongDescription(**_LongDescription_ _$_**)** |  Set the long description for storing notes about the view.  
**SetOrder(**_Order$_**)** |  Set the element order: |  A |  Alphabetic  
---|---  
" " _null_ |  Natural order **_(Default)_**  
**SetOriginalDescription$(**_Description$_**)** |  **_(Internal Use Only)_** Set the original description when view is loaded.  
**SetPassword(**_Password$_**)** |  Put a password on an unlocked view definition. Remove the password by passing a null password.  
**SetPrimarySource(**_ObjID_**)** |  **_(Internal Use Only)_** Set the object identifier of the primary **DataSource** object.  
**SetUpdateStamp(**_Stamp$_**)** |  **_(Internal Use Only)_** Set the date/time stamp for the last update.  
**Unlock(**_Password$_**)** |  Unlock a passworded view definition for update, but do not remove the password.  
  
_ItmPath_ _$_ \- [Link _ObjID_ [+ Link _ObjID_ ]] + _DS_Item_ _ObjID_

The path begins just below the primary data source, resulting in the path for items from the primary data source consisting of the _DS_ItemObjID_ alone.
