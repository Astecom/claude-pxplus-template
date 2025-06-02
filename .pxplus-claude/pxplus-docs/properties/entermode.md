# Control Object Properties

**EnterMode** |  **_Set Logic for ENTER Key_**  
---|---  
  
## Description

Set logic for ENTER key

This property is used to define how the ENTER key will be processed with the control. It is available for either the grid or the multi-line control.

**For the Grid:** Possible values are:

|  0 |  Normal processing (edits cell).  
---|---|---  
|  1 |  Move right across a grid by column, exit on last column.  
|  2 |  Move right across a grid by column, wrap to first column of next row, exit on last column of last row.  
|  3 |  Move down by row, hold on last row.  
|  4 |  Move down by row, return to column 1, hold on last row.  
  
#### **Note:**  
In the **_grid_** , if the SHIFT key is pressed, these key modes reverses the direction. In addition, if the Tab/Enter [**'+E'**](../mnemonics/+e.md) mnemonic has been set, this property will be ignored and the settings in the [**TabMode**](tabmode.md) property will be used.

**For the Multi-line:** The EnterMode property defines whether the ENTER key is to be allowed within the control or considered a TAB to exit the control. When 0 (zero), it indicates that the ENTER key will not be considered as a TAB; thus, depending on the type of multi-line, it will signal the input complete for a 1-line field or insert a line feed on a control with multiple input lines.

## Default

For GRID: The default setting is 0.  
For MULTI_LINE: The default setting reflects the '+E' mnemonic setting.

## Used By 

**GRID****MULTI_LINE** **MULTI_LINE** ** _(RTF word processing style)_**
