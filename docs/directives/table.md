# Directives

**TABLE** |  **_Define Translation Table_**  
---|---  
  
##  Format

**TABLE** _hex-table_  
  
**_Where:_**

_hex-table_ |  Hex conversion table that consists of multiple Hex digit pairs.  
---|---  
  
##  Description

Use the **TABLE** directive to define the translation table PxPlus is to use for subsequent **TBL=**_stmtref_ __ options in I/O operations or with the **TBL( )** function.

Use the first pair of Hex digits to define the conversion mask and the remaining Hex pairs to define the converted data bytes.

##  See Also

**[TBL( ) Convert String Via Table](../functions/tbl.md)**

##  Example

table 0F30313233343536373839414243444546
