# Subordinate Objects  
  
**DS_Item** |  **__**  
---|---  
  
The **DS_Item** subordinate object is used to define an element in a data source. One is defined for each element. The **DS_Item** object corresponds to a record in the _pvxview.itm_ file.

For information on the _pvxview.itm_ file structure, see **[Views System File Structures](../Views%20System%20File%20Structures/Overview.htm#itm)**. Properties are read only and are set using corresponding **Set _xxx_****( )** methods.

## DS_Item Properties

The following table lists the properties of the **DS_Item** subordinate object:

**Property** |  **Description**  
---|---  
**Class$** |  Class of item.  
**DataType$** |  Data type: |  S |  String data **_(Default)_**  
---|---  
N |  Numeric data  
**Description$** |  Item description. This value may be prefaced with an **=**  _(equals sign)_ , denoting that the description contains an expression rather than a fixed value beginning at the second character.  
**Expression$** |  Formula/expression to derive the data.  
**InternalD$** |  Internal identifier for the data source element.  
**Length** |  Item length ("" _null_ = **_Default_**).  
**Name$** |  Field or column name (no trailing "$").  
**ParentSource** |  Object identifier for the parent data source object.  
  
## DS_Item Methods

The following table lists the methods of the **DS_Item** subordinate object:

**Method** |  **Description**  
---|---  
**Description$( )** |  Returns the evaluated description.  
**SetClass(**_Class$_**)** |  Set class of item.  
**SetType(**_Type$_**)** |  Set data type: |  S |  String data  
---|---  
N |  Numeric data  
**SetDescription(**_Description$_**)** |  **_(Internal Use Only)_** Set item description. Use **ViewCtl** equivalent.  
**SetExpression(**_Expression$_**)** |  Set formula/expression to derive the data.  
**SetInternalID(**_InternalID_**)** |  **_(Internal Use Only)_** Set internal identifier for the data source element.  
**SetLength(**_Length_**)** |  Set item length (**0** = **_Default_**).  
**SetName(**_Name$_**)** |  Set field or column name (no trailing "$").
