# Control Object Properties

**ItemState** |  **_Numeric Value Indicating State of Item_**  
---|---  
  
## Description

Numeric value indicating the state of the item

This property is used in conjunction with **['StateBitmaps$](statebitmaps_.md)**, which defines the state bitmaps. Once the state bitmaps are set, each item/row/entry may set its **['ItemState](itemstate.md)** property to determine what image is to appear next to the row text depending on the state. A maximum of 15 states can be assigned - 1 through 15. A state of 0 (zero) causes no state indicator to be displayed.

**Example:** Assuming the list box is defined with 3 images, the first image will appear if the item state is 1, the second image will appear if the item state is 2 and the third image will appear if the item state is 3. 

## See Also

**[State Indicators](../control_object_properties/stateind.md)**

## Used By

**TREE_VIEW**
