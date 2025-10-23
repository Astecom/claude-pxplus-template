# Webster+

**Webster+ Calculations**|   
---|---  
  
Within Webster+, you can specify fields (inputs or hidden fields) that can be set to contain calculated values. These values are derived from the various other values within the page and are calculated locally on the workstation with no server involvement.

**_Example:_**

> You may want to create a field that will have the discounted price. This field might have a calculation assigned to it:

> UnitPrice - (UnitPrice * DiscountPct / 100)

> This calculation could be assigned a field called TruePrice that could be a display-only field on your screen. The system will automatically execute this calculation and set the value accordingly.

When calculations are used with Grids, the variable name should be prefixed with the Grid name followed by a **:** (_colon_). If the calculation itself is outside the Grid references, the value used will be the sum of all values in the Grid with that name. If referenced within the Grid, it will only use the value for that column on the current row.

The calculations themselves are basically done using JavaScript; however, a number of PxPlus functions are supported:

**Function** |  **Description**  
---|---  
**INT**(_numeric_) |  Returns the integer value of the numeric value. See **[INT](../functions/int.md)** function.  
**LCS**(_value_) |  Returns the lowercase of the string. See **[LCS](../functions/lcs.md)** function.  
**LEN**(_string_) |  Returns the length of the string. See **[LEN](../functions/len.md)** function.  
**MAX**(_values_) |  Returns the highest value. See **[MAX](../functions/max.md)** function.  
**MIN**(_values_) |  Returns the lowest value. See **[MIN](../functions/min.md)** function.  
**NUM**(_string_) |  Returns the numeric value of a numeric expression in a string. See **[NUM](../functions/num.md)** function.  
**PAD**(_string, length, code, char_) |  Returns the value of the string padded/truncated to the length specified. See **[PAD](../functions/pad.md)** function.  
**STP**(_string, code, char_) |  Strips the string. See **[STP](../functions/stp.md)** function.  
**STR**(_numericVal_) |  Returns the numeric value converted to a string. The formatting option is not supported. See **[STR](../functions/str.md)** function.  
**TBL**(_n, value0, value1_) |  Returns the value based on the value of '_n_ '. See **[TBL](../functions/tbl.md)** function.  
**UCS**(_value_) |  Returns the uppercase of the string. See **[UCS](../functions/ucs.md)** function.  
  
## See Also

**[Using Grids in Webster+](Using%20Grids%20in%20Webster.md)**
