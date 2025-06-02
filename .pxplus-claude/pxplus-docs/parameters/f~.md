# System Parameters

**'F,'** |  **_Suppress Commas on Numeric Overflow_**  
---|---  
  
##  Description

Suppresses commas when numeric formats overflow (i.e. thousands separators are stripped) and retry the format.

##  Default

**_Off_** \- Generates an Error #43: Format mask invalid on format mask overflows. (The error is not returned in cases like 0100 INPUT EDIT "Enter value:",INV_AMT:"$##,##0.00"where the directive allows for more input than the mask accommodates.)

## See Also

**[Data Format Masks](../appendix/data_format_masks.md)**
