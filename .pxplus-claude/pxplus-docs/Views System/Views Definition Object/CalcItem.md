# Subordinate Objects

**CalcItem** |  **__**  
---|---  
  
The **CalcItem** subordinate object is used to define a calculated item in a view. See **[Define Calculated Items](../View%20Maintenance/Define%20Calculated%20Items.md)**. One is defined for each item. The **CalcItem** object corresponds to a record in the _pvxview.clc_ file.

For information on the _pvxview.clc_ file structure, see **[Views System File Structures](../Views%20System%20File%20Structures/Overview.htm#clc)**. Properties are read only and are set using corresponding **Set _xxx_( )** methods.

_(The CalcItem subordinate object was added in PxPlus 2021.)_

## CalcItem Properties

The following table lists the properties of the **CalcItem** subordinate object:

**Property** |  **Description**  
---|---  
**Class$** |  Class of item.  
**DataType$** |  Data type: |  S |  String data **_(Default)_**  
---|---  
N |  Numeric data  
**Description$** |  Item description.  
**Expression$** |  Formula/expression to derive the data.  
**InternalD$** |  Internal identifier for the calculated item.  
**Length** |  Maximum item length.  
**Name$** |  Field or column name (no trailing "$").  
**ParentSource** |  Object identifier for the parent view object.  
  
## CalcItem Methods

The following table lists the methods of the **CalcItem** subordinate object:

**Method** |  **Description**  
---|---  
**Description$( )** |  Returns the description.  
**SetClass(**_Class$_**)** |  Set class of item. _(Not Currently Used)_  
**SetType(**_Type$_**)** |  Set data type: |  S |  String data  
---|---  
N |  Numeric data  
**SetDescription(**_Description$_**)** |  Set item description.  
**SetExpression(**_Expression$_**)** |  Set formula/expression to derive the data.  
**SetInternalID(**_InternalID_**)** |  **_(Internal Use Only)_** Set internal identifier for the data source element.  
**SetLength(**_Length_**)** |  Set item length.  
**SetName(**_Name$_**)** |  Set field or column name (no trailing "$").
