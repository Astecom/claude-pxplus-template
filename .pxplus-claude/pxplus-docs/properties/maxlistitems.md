# Control Object Properties

**MaxListItems** |  **_Control Drop List Size in Grid_**  
---|---  
  
## Description

Control drop list size in grid

This property is used to control the number of lines that will appear in a drop down list in the grid. This property affects **_all_** cells in the grid.

By default, this property will be set to zero where the drop down list size is determined by the height of the grid and the number of options in the list.

Setting this property to a positive non-zero value defines the maximum number of options to show in the drop down list in the grid.

Setting this property to a negative value will result in an Error #60: Invalid control argument value.

#### **Note:**  
Due to the nature of the browsers, this property is unable to be supported in iNomads; however, the property is defined for compatibility purposes. Any value assigned to this property in iNomads will be ignored.

_(The MaxListItems property was added in PxPlus 2020.)_

## Used By

**GRID**
