# Compound Properties

**State Indicator Properties** |  **_Tree View_**  
---|---  
  
State indicators are images that will appear in front of a List Box entry and can be used to indicate whether the item has been selected or not. State indicators are currently supported for **_Tree View_** List Boxes and can be set up during the definition of a List Box control. See [**LIST_BOX**](../directives/list_box.md) directive.

The following properties are used to create and process state indicators:

|  **['ItemState](properties_list.htm#Mark70)** |  State of **['Item](properties_list.htm#Mark66)**  
---|---|---  
|  **['StateBitmaps$](properties_list.htm#Mark148)** |  List of images used to display states  
|  **['AutoState](properties_list.htm#Mark3)** |  Control auto toggling of states  
|  **['CascadeState](properties_list.htm#Mark11)** |  Control cascading of states  
  
## Assigning Images

The application must set the [**'StateBitmaps$**](properties_list.htm#Mark148)**** property in order to define the number of images that will be used in the display of state indicators. A maximum of 15 images can be assigned. All images must be of the same size/format and may specify transparency options. These images can be external or internal.

See **[Displaying Bitmaps/Icons](../appendix/displaying_bitmaps~icons.md)**.

## Toggling Between States

Once the bitmaps are set, each item/row/entry may set its [**'ItemState**](properties_list.htm#Mark70) property to determine what image is to appear next to the row text, depending on the state. A maximum of 15 states can be assigned for each image. A state of 0  _(zero)_ causes no state indicator to be displayed. 

For example, assuming that the list box is defined with 3 images: the first image will appear if the item state is 1, the second image will appear if the item state is 2 and the third image will appear if the item state is 3.

A CTL event will return **EOM="S"** if the property is set to a non-zero value. This is used to identify that the user clicked over the indicator state portion of the line, as opposed to elsewhere in the item. Applications that add state indicators to their existing logic should add a check for this EOM code.

## Auto Toggling of States

**['AutoState](properties_list.htm#Mark3)** is a numeric property that controls auto toggling of states. If this property is set, state indicators can automatically be toggled without generation of a CTL event with **EOM="S"**.

The number of states that the system will toggle through is determined by the value set in this property, or if the property is set to 1, the number of bitmaps assigned to the Tree View. In addition, when the user toggles a state indicator while holding down the Shift, all entries between the current entry and the last will be toggled to the new state of the current entry (in effect allowing for group select/deselect).

## Cascading States

If the **['CascadeState](properties_list.htm#Mark11)** property is set to non-zero, the system automatically cascades parent states to their children and correspondingly makes parent states representative of all of their children. Setting a parent state, either under program control or using the**'AutoState** property in the Tree View definition, will result in all subordinate children being set to the same state. 

When a child state is set, its parent state will be set according to the state of all of the child's siblings; i.e. if all children are in a consistent state, the parent will be set to the same state. If a parent has children of various states (some on, some off), the parent's state will be set to the value set in the **'CascadeState** property.

For example, you could have three state indicators - _Off_(state 1), _On_ __(state 2), and _Partial_(state 3). You would set **'AutoState** to 2 and **'CascadeState** to 3 to have children that automatically toggle off/on and parents that will be _On_ if all children are on, _Off_ if all children are off, and _Partial_ (state 3) if the children are not in a consistent state.

When cascading, only items with states will be affected. In addition, items without states will not affect their parents' states nor will changing the parent of an item without a state affect the children of that item.
