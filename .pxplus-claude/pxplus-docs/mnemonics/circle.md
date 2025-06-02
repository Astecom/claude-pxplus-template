# Mnemonics

**'CIRCLE'** |  **_Define/Draw a Circle_**  
---|---  
  
**GUI Display/Printer**

##  Format

**'CIRCLE'(**_x,y,radius,aspect_**)**  
  
**_Where:_**

_aspect_ |  Numeric aspect ratio/viewpoint. (Ratio=1 results in no tilt.)  
---|---  
_radius_ |  Radius of the circle, in graphical units. Numeric expression.  
_x,y_ |  Coordinates for the centre of the drawing, in graphical units. Numeric expression.  
  
##  Description

Use **'CIRCLE'** to draw (print) a circle on the device. For _x_ ,_y_ and _radius,_ use graphical units or the **@X( ) / @Y( )** functions. The **'CIRCLE'** mnemonic uses the current attributes for **'FILL'** and **'PEN'** mnemonics.

For PDFs and Windows graphical drawing, entering a Ratio=0 means no ratio. A ratio <0 is invalid and results in an Error #29: Invalid Mnemonic or position specification.

## See Also

**[@X( ) / @Y( ) Convert X/Y Coordinates](../functions/~x.md)  
['FILL' Define Fill Style](fill.md)**  
**['PEN' Define Pen Style](pen.md)**

##  Example

print 'pen'(1,3,1),'fill'(2,6)  
print 'circle'(720,600,100,1)  
print 'pen'(1,3,6),'circle'(950,600,100,2)
