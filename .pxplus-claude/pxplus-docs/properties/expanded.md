# Control Object Properties

**Expanded** |  **_Node Expanded_**  
---|---  
  
## Description

Node expanded. Possible values are:

-2 |  Collapse selected level and all subordinates  
---|---  
-1/0 |  Collapsed  
1 |  Expanded  
2 |  Expand selected level and all subordinates  
  
When read, this property will only return 0 or 1 to indicate whether the tree is collapsed or expanded. This property can be set to -2 or 2 to collapse or expand all nodes; however, these values will not be returned when reading the property.

## Default

0

## Used By

**TREE_VIEW**
