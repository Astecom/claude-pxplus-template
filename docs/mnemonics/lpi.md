# Mnemonics

**'LPI'** |  **_Logical Lines/Inch_**  
---|---  
  
**GUI Printer**

##  Format

**'LPI'(**_lines_**)**  
  
**_Where:_**

_lines_ |  Logical lines/rows per inch for graphics mode. Numeric expression.  
---|---  
  
##  Description

Use **'LPI'** to set the logical LPI (lines per inch) value in graphics printing where (as a rough guide to equivalent sizes):

> Point size -12 = 6 LPI, 10 CPI  
>  Point size -10 = 7.2 LPI, 12 CPI  
>  Point size - 7 = 10 LPI, 16 CPI

## See Also

**['CPI' Logical Characters per Inch](cpi.md)**  
**[TXH( ) Text Height](../functions/txh.md)**  
**[TXW( ) Text Width](../functions/txw.md)**

##  Example

print (30)'lpi'(6),  
print (1)'lpi'(76/10)
