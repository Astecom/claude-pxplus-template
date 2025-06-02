# Mnemonics

**'LINE'** |  **_Define/Draw a Line_**  
---|---  
  
**GUI Display/Printer**

##  Format

**'LINE'(**_x_ ,_y_ ,_x_ ,_y_[,_x_ ,_y_ ...]**)**  
  
**_Where:_**

_x_**,**_y_ |  Sets of _x,y_ coordinates in graphical units. Numeric expression.  
---|---  
  
##  Description

Use **'LINE'** to draw (print) a line on the device (e.g. terminal). Use graphical units or **@X(col) / @Y(line)** functions for the various coordinates. The **'LINE'** mnemonic draws these lines using the current **'PEN'** attributes.

## See Also

**[@X(col) / @Y(line) Convert X/Y Coordinates](../functions/~x.md)**  
**['PEN' Define Pen Style](pen.md)**

##  Example

print 'line'(224,450,355,420,210,400)
