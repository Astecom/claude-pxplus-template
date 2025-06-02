# Control Object Properties

**ItemTextColor $ (or ItemTextColour$)** |  **_Control Text Color for Current Tree View Item_**  
---|---  
  
## Description

Controls the text color for the current tree view item identified by the **['Item](item.md)** property. For information on valid color names and color specifications, see **[Color Properties](../control_object_properties/colour_properties.md)**.

#### **Note:**  
On Windows, when setting the text color for a tree view item, the system only supports 15 bits of color (3 * 5 bits). RGB colors will be automatically converted to this resolution; however, this will mean that the value returned when this property is read may be slightly different from the value to which the item was set. Generally, the color difference will not be noticeable to the end user.

_(The ItemTextColor$ (or ItemTextColour$) property was added in PxPlus 2020.)_

## Used By

**TREE_VIEW**
