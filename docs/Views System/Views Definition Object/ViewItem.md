# Subordinate Objects

**ViewItem** |  **__**  
---|---  
  
**ViewItem** is a subordinate object used to define an item selected for the view. One object is defined for each item selected. Items can be data source items or calculated items. The **ViewItem** object corresponds to a record in the _pvxview.vue_ file.

For information on the _pvxview.vue_ file structure, see **[Views System File Structures](../Views%20System%20File%20Structures/Overview.htm#vue)**. Properties are read only and are set using corresponding **Set _xxx_( )** methods.

## ViewItem Properties

The following table lists the properties of the **ViewItem** subordinate object:

**Property** |  **Description**  
---|---  
**Column$** |  Column name (no trailing "$").  
**Condition$** |  **_(Internal Use Only)_** Filter condition specific to the view item. Use **ViewCtl SetFilter( )** method.  
**ItemType$** |  Indicates the source of the item where: |  "I" or blank |  Data source item  
---|---  
"C" |  Calculated item  
  
_(ItemType$ property was added in PxPlus 2021.)_  
  
**Path$** |  Source linkage. For calculated items, linkage is to the **[CalcItem](CalcItem.md)** object ID. For data source items, linkage consists of:  
  
[_Link ObjID_ [+ _Link ObjID_ ]] + **DS_Item**  _ObjID_ Linkage begins just below the primary data source, resulting in the linkage for items from the primary data source consisting of the **DS_Item** _ObjID_ alone.  
**RawCondition$** |  Raw condition data consisting of the condition code, case flag and up to eight comparison values all separated by $01$.  
  
**_Example:_**  
  
_Code$_ \+ _$01$_ \+ _Case$_ \+ _$01$_ [+ _v1$_ \+ _$01$_ ...+ _v8$ ]_  
  
See the **[SetCondition$( )](ViewItem.htm#setcondition)** method for code and case flag values.  
  
## ViewItem Methods

The following table lists the methods of the **ViewItem** subordinate object:

**Method** |  **Description**  
---|---  
**SetColumn(**_Column$_**)** |  Set a column name (no trailing "$").  
**SetCondition(**_Code_**,**_Case_ **[,**  _v1$_ ****_v8$_ **])  
SetCondition(**_Condition1$_ **|**  _Condition2$_**)** |  Set a filter condition specific to the view item. (Use **ViewCtlSetFilter( )** method.) |  _Code_ \- Condition indicator code:  
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
_Case_ \- Case sensitivity indicator:  
0 |  Not case sensitive  
1 |  Case sensitive  
  
_v1$...v8$_ \- Values to be used in comparison. Pass numeric values as string arguments.  
_  
Condition1$_ \- A single string consisting of code, case and optional values separated by $01$.  
  
**_Example:_**  
_  
_ _Code$+$01$+Case$+$01$_ [ _+__v1$+$01$...+v8$_ ]  
  
The format of this condition matches the contents of the **RawCondition$** property.

_Condition2$_ \- A simple PxPlus conditional expression:  
  
**_Example:_**  
  
CST_BALANCE>0   
  
This format is **_not_** recommended, as it only supports a restricted number of expressions.

#### **Note:   
**View item-level filters are analyzed at run time to optimize data retrieval by determining key ranges for reading records.  
  
**SetPath(**_Path$_**)** |  Set the source linkage. For calculated items, the linkage is to the **[CalcItem](CalcItem.md)** object ID. For data source items, linkage consists of:  
  
[_Link ObjID_ [+ _Link ObjID_ ]] + **DS_Item** _ObjID_ _  
_  
Linkage begins just below the primary data source, resulting in the linkage for items from the primary data source consisting of the **DS_Item**  _ObjID_ alone.  
  
**ViewItem** objects must be grouped sequentially based on their linkage path. If it is possible that a **ViewItem** object is out of sequence based on the value in its **Path$** property, use the **ViewDefAdjustItemSequence( )** method to adjust the sequence of the objects.  
**SetType(**_Type$_**)** |  Set the type of data where: |  "I" or blank |  Data source item  
---|---  
"C" |  Calculated item  
  
_(SetType method was added in PxPlus 2021.)_
