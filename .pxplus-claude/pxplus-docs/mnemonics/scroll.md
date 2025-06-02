# Mnemonics 

**'SCROLL'** |  **_Define/Control Scroll Region_**  
---|---  
  
**GUI Display _or_ Character Display _or_ Editing**

## Formats

1. |  _Define Region:_ |  **'SCROLL'**_(col,ln,wth,ht)_  
---|---|---  
  
**_Long or short forms:_**

2. |  _Start/Enable Scrolling:_ |  **'SCROLL'("ON")**  _or_ **'SE'**  
---|---|---  
3. |  _Reset to Full Window:_ |  **'SCROLL'("RESET")**  _or_ **'SR'**  
4. |  _Disable Scrolling:_ |  **'SCROLL'("OFF")**  _or_ **'SD'**  
**_Where:_** |   
---|---  
_col,ln,wth,ht_ |  Position/coordinates. Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines.  
  
##  Description

Use **'SCROLL'** to define or change the scroll region in the screen/window. All subsequent mnemonics for cursor position, clearing, deletion and insertion will only affect this defined area.

If the cursor advances beyond the last line:  
  
When**'SCROLL'** is **ON** , PxPlus moves all the lines on the screen up one line.  
  
When**'SCROLL'** is **OFF** , PxPlus returns the cursor to the first column in the first line.

The **'SE'** and **'SD'** mnemonics can also be used to enable or disable the scrolling.

Use **'SR'** or **'SCROLL'("RESET")** to reset the scroll region to the full window/screen. For a window with a border, the border is included in the scroll region.

#### **Note:**  
The values **ON** , **OFF** and **RESET** can be literals, variables or string expressions.

## See Also

**['SE' & 'SD' Scroll Enable/Disable](se.md)**
