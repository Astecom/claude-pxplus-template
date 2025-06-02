# Display Objects

**Text** |  **__**  
---|---  
  
Plain text (i.e. output to the text plane) can be displayed on a graphical panel, but placement is restricted to lines and columns, and the font is restricted to the session's fixed text plane font. It is, therefore, more common to draw text in graphics mode when displaying text on a graphical panel. Location of the text can be defined with precision, and any available font can be utilized.

To draw text in graphics mode, the **['FONT'](../../../mnemonics/font.md)** mnemonic is used to control the font, and the **['TEXT'](../../../mnemonics/text.md)** mnemonic is used to locate and display the text.

> **'FONT'**(_name$_ ,_size_[,_attrib_ _$_[,_angle_]]

Defines the current font and specifications. The font specified by the font _name$_ must exist on the system or the default system font is used. Optional _size_ values may be positive or negative. Positive font sizes are relative to the current default, e.g. .5 for half-size, 2 for double, etc. Negative font sizes are used for absolute font size in points.

The optional _attrib$_ string is composed of codes:

> **& -** Underscore the character following the '&' (as in hot keys)   
> **B -** Bold   
> **C -** Centre text   
> **F -** Show focus lines around text   
> **I -** Italics   
> **N -** Numeric data alignment   
> **R -** Right justify text   
> **S -** Applies background colour to area directly behind text   
> **U -** Underscore (**"_"**)   
> **W -** Word wrap   
> **# -** Same as**N**

For syntax details, see **['FONT'](../../../mnemonics/font.md)** mnemonic.

**_Example:_**

> PRINT 'FONT'("Courier New"),   
>  PRINT 'FONT'("Verdana",1,"BR"),   
>  PRINT 'FONT'("Arial",-12,"CI"),

To draw text in graphics mode:

> **'TEXT'**(_x,y_[_,x,y_]_,text$,attrib$_)

The first set of _x/y_ graphical coordinates provides the starting point (top left corner) of the text.

The optional second set of _x/y_ coordinates defines the bottom right corner of a rectangular region for displaying the text. The second set of coordinates is necessary to centre, right justify or word wrap the text.

The optional attribute string is composed of codes that include:

> **& -** Underscore the character following the '&' (as in hot keys)   
> **C -** Centre text   
> **F -** Show focus lines around text   
> **N -** Numeric data alignment   
> **R -** Right justify   
> **S -** Applies background colour to area directly behind text   
> **W -** Word wrap   
> **# -** Same as**N**

For syntax details, see **['TEXT'](../../../mnemonics/text.md)** mnemonic.

**_Example:_**

> PRINT 'FONT'("Arial",-11),   
>  PRINT 'GREEN','TEXT'(@x(2),@y(3),"&Hello","&"),   
>  PRINT 'TEXT'(@x(2),@y(4.5),@x(15)@y(6),T$,"R"),

The**TXH( )** and**TXW( )** functions can be used to determine the size of the text to be displayed.

For syntax details, see **[TXH( )](../../../functions/txh.md)** and **[TXW( )](../../../functions/txw.md)** functions.
