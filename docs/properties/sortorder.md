# Control Object Properties 

**SortOrder $** |  **_Sorting Control Settings_**  
---|---  
  
## Description

Sorting control settings

This property is used to control how column data will be sorted in the grid or report view. It can have one of the following values or be set to null, which indicates the sort order is defined by the system StdSortOrder setting using the **[SETDEV SET](../directives/setdev_set.md)** directive or the **['OPTION'](../mnemonics/option.md)** mnemonic.

|  Null |  Uses StdSortOrder setting (if StdSortOrder not set, uses raw sort).  
---|---|---  
|  R |  Raw binary sort.  
|  C |  Case insensitive sort.  
|  A |  Sort ignores accents.  
|  N |  Null values at end of sort.  
|  CA |  Ignore case and accents.  
|  CN |  Ignore case/Null values last.  
|  AN |  Ignore accents/Null values last.  
|  CAN |  Ignore case and accents/Null values last.  
  
Alternatively, this property can be accessed as a string comprising the characters C, A or N. An empty string is used to indicate all settings are Off.

#### **Important Note:**  
The **['SortCaseSensitive](sortcasesensitive.md)** property for the grid control has been deprecated as of PxPlus v11 by the **'SortOrder** property, which allows for control not only of sort case but also accented characters and supports a system-wide default.

_(Original added as a numeric value in PxPlus v11.00. Upgraded to a string value in PxPlus v11.50.)_

## Default

Default value is _Null_. (Data is sorted using the StdSortOrder setting.)

## Used By 

**GRID****REPORT_VIEW**
