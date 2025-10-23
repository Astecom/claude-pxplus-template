# Mnemonics 

**'FONT'** |  **_Define/List Fonts_**  
---|---  
  
**GUI Display/Printer**

##  Formats

1. |  _Define Font (with Specification):_ |  **'FONT'(**_name$_ ,_size_[,_attrib_ _$_[,_angle_]]**)**  
---|---|---  
2. |  _Define Font (via Special Names):_ |  **'FONT'(**{"* **SYSFONT** " | "* **GUIFONT** " | "***CURFONT** "}**)**  
3. |  _List Channel's Fonts:_ |  **'FONT'(LIST***[,_chan_]**)**  
4. |  _List Fonts, Properties:_ |  **'FONT'(LIST PROPERTIES FOR**[_name$_][,_chan_]**)**  
5. |  _List Sizes for a Font:_ |  **'FONT'(LIST** _name$_**)**  
  
**_Where:_**

_angle_ |  Slant for printing, in degrees. Optional.  
---|---  
_attrib_ _$_ |  Font attributes. Optional string expression. Valid codes include: |  **&** |  Underscore the character following the "&" (as in hot keys)  
---|---  
**B** |  Bold  
**C** |  Center text  
**F** |  Show focus lines around text  
**I** |  Italics  
**N** |  Numeric data alignment  
**R** |  Right justify text  
**S** |  Fills only text background (not whole region) with chosen colour  
**U** |  Underscore ("_")  
**W** |  Word wrap  
**#** |  Same as N  
  
#### **Note:**  
Use the **['TEXT'](text.md)** mnemonic to specify **_vertical_** alignment settings (**T** op, **M** iddle, **B** ottom).

You can also control the character set:

**!** |  Use symbol character set (char. set 2)  
---|---  
**O** |  Use OEM character set (char. set 255)  
**J** |  Use Japanese character set (char. set 128)  
**D** |  Use character set 1 or current default for the given font  
**%**_nnn_ |  Use specific Windows character set _nnn_ (**_Default_** is ANSI, character set 0)  
_chan_ |  Logical file number or channel.  
* **CURFONT** |  Keyword representing the current graphic font being used. (added in PxPlus v10.10)  
* **GUIFONT** |  Keyword representing the dialogue font used by standard MS Windows applications for dialogues.  
* **SYSFONT** |  Keyword representing the default graphical system font, typically "System,0.66,B".  
_name$_ |  Font name. String expression. Font must exist in the system.  
_size_ |  Numeric. Use positive values for font sizes relative to the current default for the device (**.5** for half size, **2** for double, etc.). Use negative sizes for absolute font size in points.  
  
As a rough guide to equivalent sizes:

> Point size -12 = 6 LPI, 10 CPI  
>  Point size -10 = 7.2 LPI, 12 CPI  
>  Point size - 7 = 10 LPI, 16 CPI  
  
##  Description

**'FONT'** defines the current font and specifications. It can also be used to return comma-delimited font and property (attribute) lists for the channel (default is the terminal) or a size list for a specific (existing) font.

Two special font names may be used in place of the specifications:

|  ***SYSFONT** |  Default graphical system font  
---|---|---  
|  ***GUIFONT** |  Standard MS Windows dialogue font  
  
These fonts will change based on the operating system version and theme. The new special font names may be used anywhere a font specification is given.

A new ***CURFONT** font may be specified, which indicates that the system should retain the current font selected. _(as of PxPlus v10.10)_

#### **Note:**  
**'FONT'** works with ***WINPRT*** , the Windows console, and ***PDF*** but **_not_** with direct-to-device printers.

## See Also

**[*PDF* PDF Print Interface](../file_handling/~pdf~.md)  
**[***WINPRT* Windows Printing**](../file_handling/~winprt~.md)

##  Example

f$="MS Serif";  
print 'font'(list F$) ! Returns sizes for MS Serif font: 13,16,19,21,27,35,10,11,  
print 'font'("MS Serif",-11)
