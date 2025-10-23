# Mnemonics

**'TEXTWDW'** |  **_Create Text Window_**  
---|---  
  
**GUI Display _or_ Character Display**

##  Format

**'TEXTWDW'(**_col_ ,_ln_ ,_wth_ ,_ht_[,_wdw_id_],[_title$_][,_attrib_ _$_][,**OPT=**_val_ _$_]**)**  
  
**_Where:_**

_col,ln,wth,ht_ |  Position/coordinates. Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines.  
---|---  
_attrib_ _$_ |  Attribute string. Optional. If you include attributes, use a string of one or more mnemonics to define the defaults for the window.  
_title$_ |  Optional title. String expression/literal.  
_val_ _$_ |  Valid **OPT=** values for defining windows in a graphics environment (ignored in text mode):  
|  ***** |  Creates a resizable window with automatic scrollbars.  
|  **-** |  Window has a minimize button.  
|  **c** |  Window is a child of the current window.  
|  **C** |  Disables **X** (close) button on the title bar of the window and eliminates the system control menu from the title bar.  
|  **m** |  Enables "maximize" box in the top right corner of the window (only for dialogue windows created with **OPT="*"**).  
|  **S** |  Window has a status line/message bar.  
|  x |  Disables **X** (close) button on the title bar of the window and eliminates the system control menu from the title bar.  
|  **X** |  Enables **X** (close) button on the title bar of the window and supports the system control menu on the title bar.  
|  **Z** |  Creates a resizable window.  
_wdw_id_ |  Window's unique ID number (0 - 255).  
  
##  Description

Use **'TEXTWDW'** to create a text-style text mode window under Windows. If you include a title, a box of the defined height and width will be drawn around the window, and the title will be left justified on the top line of the box.

## See Also

**['DIALOGUE' Define/Draw Dialogue Region](dialogue.md)**  
**['WINDOW' Define/Draw Window](window.md)**

##  Example

print 'textwdw'(10,10,50,10,"Title",opt="*")
