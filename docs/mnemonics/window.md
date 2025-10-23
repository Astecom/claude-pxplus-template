# Mnemonics 

**'WINDOW' or 'WA'** |  **_Define/Draw Window_**  
---|---  
  
**GUI Display _or_ Character Display**

##  Format

**'WINDOW'(**_col_ ,_ln_ ,_wth_ ,_ht_[,_wdw_id_],[_title$_][,_attrib_ _$_][,OPT=_val_ _$_]**)**

**_Where:_**

_col,ln,wth,ht_ |  Position/coordinates. Numeric expressions. Column and line coordinates for top left corner, width in number of columns, height in number of lines.  
---|---  
_attrib_ _$_ |  Attribute string. Optional. If you include attributes, use a string of one or more mnemonics to define the defaults for the window.  
_title$_ |  Optional title. String expression/literal.  
_val_ _$_ |  Valid **OPT=** values for defining windows in a graphics environment (ignored in text mode). Valid options are: |  **-** |  (_Minus sign_) Indicates that the Window has a "minimize" button (requires 'X' option).  
---|---  
**c** |  Window is a child of the current window.  
**m** |  Enables the "maximize" box in the top right corner of the window (requires 'X' and 'Z' option).  
**S** |  Window has a status line/message bar.  
**X** |  Enables the close button and system menu on the title bar of the window (i.e. the "X" in the top right corner).  
**Z** |  Creates a resizable window.  
_wdw_id_ |  Window's unique ID number (0 - 255).  
  
##  Description

Use either**'WINDOW'** or **'WA'** in the format to draw (print) a new window. If you include a title, a box of the defined height and width is drawn around the window. The title will be left justified on the top line of the box unless the **'[AH](../parameters/ah.md)' **system parameter is set.

By default, under Windows, the title bar will not have a close button or any other adornment (buttons or system menu icon) other than the title. These can be added by specifying the 'X' option.

PxPlus uses the WS_BORDER and WS_THICKFRAME frame styles from the Windows API with the **'WINDOW'** mnemonic. See **[Windows API Frame Styles](../mnemonics.htm#Mark5)**.

## See Also

[**'DIALOGUE' Define/Draw Dialogue Region**](dialogue.md)  
[**'TEXTWDW' Create Text Window**](textwdw.md)

##  Example

print 'window'(5,5,100,40,"Title",opt="S")
