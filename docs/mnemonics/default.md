# Mnemonics

**'DEFAULT' or 'DF'** |  **_Define Default_**  
---|---  
  
**GUI Display/Printer _or_ Character Display**

##  Format

_Long or short form:_**'DEFAULT'**_or_**'DF'**

##  Description

Use either **'DEFAULT'** or **'DF'** to define the current attributes/font as the default for an **OPEN** channel. For example, you can set a default for fixed font, reverse video, blinking, underscore, foreground, background, etc.

To set the default font for all graphical objects, the **'GF'** mnemonic may be used.

## See Also

**['GF' Default Font for Window Objects](gf.md)**

##  Example

To set a font in **[*WINPRT*](../file_handling/~winprt~.md)** printing as the standard default font for an **OPEN** channel:

> open (30)"*WINPRT*;ASIS"  
>  print (30)'font'("Courier New",-7),'DF'
