# Control Object Properties

**TopVisibleItem** |  **_Control Item/Line Visibility in List_**  
---|---  
  
## Description

Control item/line visibility in list

This property is used to access the item number that is currently displayed at the top of the list. It can be used to determine/control vertical scrolling of the data.

If set, it must be set to a value between 1 and the number of items in the list. Setting this property to a row near the bottom of the list contents does not always guarantee that the row identified will be the first line within the control. The system will attempt to leave the bottom few lines visible; however, it will assure that the item indicated is visible.

_(The TopVisibleItem property was added in PxPlus v6.30.)_

## Default 

1

## Used By 

**LIST_BOX****LIST_VIEW REPORT_VIEW**
