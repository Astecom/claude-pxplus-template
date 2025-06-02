# Control Object Properties

**SepSort $** |  **_Separator Character for Sort Value_**  
---|---  
  
## Description

Separator character for Sort value

This property is used to define a character, which will separate the contents of a list view or report view column that is to be displayed from the values of the column as it will be used for column sorting.

Often when displaying data in a list view or report view, it is desirable to have what is displayed be different from how the value should be sorted. For instance, the display value of a list view or report view may be a bitmap or some other graphical information, which is not able to be sorted. If you define a SepSort$ value, any data in the column before the specified character will define what will be displayed, and data following the character will be used for the purposes of sorting.

_(The SepSort$ property was added in PxPlus v11.50.)_

## Used By

**LIST_VIEW** **REPORT_VIEW**
