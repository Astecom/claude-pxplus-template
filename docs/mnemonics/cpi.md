# Mnemonics

**'CPI'** |  **_Logical Characters per Inch_**  
---|---  
  
**GUI Printer**

##  Format

**'CPI'(**_chars_**)**  
  
** _Where_ _:_**

_chars_ |  Logical characters per inch. Numeric expression.  
---|---  
  
##  Description

Use **'CPI'(**_chars_**)** to set the logical CPI (characters per inch) for printing where (as a rough guide to equivalent sizes):

> Point size - 12 = 6 LPI, 10 CPI  
>  Point size - 10 = 7.2 LPI, 12 CPI  
>  Point size - 7 = 10 LPI, 16 CPI

## See Also

**['LPI' Logical Lines/Inch](lpi.md)**  
**[TXH( ) Text Height](../functions/txh.md)**  
**[TXW( ) Text Width](../functions/txw.md)**

##  Example

With both channels (30) and (1) open:

> print (30)'cpi'(120/7.5),'lpi'(6),Data$  
>  print (1)'cpi'(16),Data$
> 
> 20  
>  print
