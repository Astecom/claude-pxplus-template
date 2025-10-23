# Mnemonics

**'POLYGON'** |  **_Define/Draw a Polygon_**  
---|---  
  
**GUI Display/Printer**

##  Format

**'POLOYGON'(**_x_**,**_y_**,**_x_**,**_y_**,**_x_**,**_y_**,**_x_**,**_y_**...)**  
  
**_Where:_**

_x_**,**_y_ |  Set of point/position coordinates in graphical units. Numeric expression.  
---|---  
  
##  Description

Use **'POLYGON'** to draw (print) a polygon (e.g. triangle, hexagon, etc.). PxPlus joins the various _x,y_ points to form the polygon. Use graphical units or **@X(col) / @Y(line)** functions for the coordinates.

The **'POLYGON'** mnemonic uses current attributes for the **'FILL'** and **'PEN'** mnemonics.

## See Also

**[@X(col) / @Y(line) Convert X/Y Coordinates](../functions/~x.md)  
['FILL' Define Fill Style](fill.md)**  
**['PEN' Define Pen Style](pen.md)**

##  Example

This example creates an irregular four-sided figure by setting the coordinates for the four corners:

> print 'pen'(1,3,8),'fill'(2,6)  
>  print 'polygon'(224,450,100,100,400,200,390,390)
