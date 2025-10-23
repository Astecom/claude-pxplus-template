# Control Object Properties

**Font$** |  **_Font for Control/Cell_**  
---|---  
  
## Description

Font for control/cell

This property is used to reference the font for a control/cell. It will contain (or can be set to) a string containing three comma-separated fields of the font name, size and attributes.

**_Example:_**

To set the font to Arial, 1.5 times normal size, and Bold, the format would be xxx'Font$="Arial,1.5,B".

When setting the 'Font$ property on a **_grid_** for all columns/rows ('Column=0 and 'Row=0), the system will check that the current default **[RowHeight](rowheight.md)** is large enough to accommodate the font selected. If the default row height is too small, the system will automatically adjust the default and all existing row heights to a size large enough to accommodate the font size.

_(Support for the automatic adjustment of row height was added in PxPlus 2019.)_

## See Also

[**'FONT' Mnemonic**](../mnemonics/font.md)

## Used By

**BUTTON****CHART****CHECK_BOX****DROP_BOX****GRID****LIST_BOX****LIST_VIEW****MULTI_LINE****RADIO_BUTTON****REPORT_VIEW****TREE_VIEW****TRISTATE_BOX****VARDROP_BOX****VARLIST_BOX**
