# Control Object Properties

**SortCaseSensitive** |  **_Control Case Sensitivity on Sort_**  
---|---  
  
#### **Important Note:**  
This property has been deprecated as of PxPlus v11 by the **['SortOrder](sortorder.md)** property, which allows for control not only of sort case but also accented characters and supports a system wide default.

## Description

Control case sensitivity on sort

This property is used to control whether the case of the data will be ignored when sorting data within the grid. If this property is On (**_Default:_** 1), then values will be sorted as such that uppercase data will be placed **_before_** lowercase data. If this property is Off (0), then the case of the data will be ignored.

## Default

1 (Data is sorted with uppercase before lowercase.)

## Used By

**GRID**
