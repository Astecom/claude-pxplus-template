# Control Object Properties

**CascadeState** |  **_Control Cascading of States_**  
---|---  
  
## Description

Control cascading of states

This property controls the automatic cascading of states between parents and children in a tree view.

If the 'CascadeState property is set to non-zero, the system automatically cascades parent states to their children and correspondingly makes parent states representative of all of their children. Setting a parent state, either under program control or using the **['AutoState](autostate.md)** property in the tree view definition, will result in all subordinate children being set to the same state.

When a child state is set, its parent state will be set according to the state of all of the child's siblings; i.e. if all children are in a consistent state, the parent will be set to the same state. If a parent has children of various states (some on, some off), the parents state will be set to the value set in the 'CascadeState property.

## See Also

[**State Indicators**](../control_object_properties/stateind.md)

## Used By 

**TREE_VIEW**
