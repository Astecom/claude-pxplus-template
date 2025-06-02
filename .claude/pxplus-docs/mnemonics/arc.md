# Mnemonics

**'ARC'** |  **_Define/Draw Arc_**  
---|---  
  
**GUI Display/Printer**

##  Formats

1. |  _Draw Arc (Starting/Ending Angles)_ |  **'ARC'(**_x,y,radius,aspect,angle_1,angle_2_**)**  
---|---|---  
2. |  _Draw Arc (Radial Coordinates)_ |  **'ARC'(**_x,y,radius,aspect,startRadialX,startRadialY,endRadialX,endRadialY_**)**  
  
**_Where:_**

_angle_1_ |  Angle (in degrees) measured counter clockwise from the right-center (3 o'clock) position of the arc circle to the **_starting_** point of the arc. Numeric expression.  
---|---  
_angle_2_ |  Angle (in degrees) measured counter clockwise from the right-center (3 o'clock) position of the arc circle to the **_ending_** point of the arc. Numeric expression.  
_aspect_ |  Aspect ratio/viewpoint. (Ratio=1 results in no tilt.) Numeric expression.  
_startRadialX_ _  
startRadialY_ |  Coordinates along a line that extends from the center of the drawing, in graphical units. The point where this line intersects with the arc circle defines the **_start_** of the arc. Numeric expression.  
_endRadialX_ _  
endRadialY_ |  Coordinates along a line that extends from the center of the drawing, in graphical units. The point where this line intersects with the arc circle defines the **_end_** of the arc. Numeric expression.  
_radius_ |  Radius of the arc circle, in graphical units. Numeric expression.  
_x,y_ |  Coordinates for the center of the drawing, in graphical units. Numeric expression.  
  
_(Support for the Radial Coordinates format was added in PxPlus 2020.)_

##  Description

Use **'ARC'** to draw (print) an arc on the device. Use graphical units or **@X(col) / @Y(line)** functions for _x_ ,_y_ and _radius_.

When drawing the arc, it can extend in **_either_** of two ways:

  * **_From_** starting _angle_1_** _to_** ending _angle_2_ **_OR_**  
  

  * **_From_** where the line (defined by **_startRadialX_** and **_startRadialY_**) intersects with the arc circle **_to_** where the line (defined by **_endRadialX_** and **_endRadialY_**) intersects with the arc circle



The **'ARC'** mnemonic uses the current attributes for **'PEN'** mnemonic.

For PDFs and Windows graphical drawing, entering a ratio=0 means no ratio. A ratio < 0 is invalid and results in an Error 29: Invalid Mnemonic or position specification.

## See Also

**[@X(col) / @Y(line) Convert X/Y Coordinates](../functions/~x.md)  
['PEN' Define Pen Style](pen.md)**

##  Example

The examples below draw two different colored arcs. Aspect ratio=3 tilts the resulting drawing into an elliptical "shape". (Since this ellipsis is really two arcs as opposed to an enclosed shape, **['FILL'](fill.md)** mnemonic attributes do **_not_** apply.)

Aspect ratio=1 joins the arcs in a circular shape instead.

|  print 'pen'(1,3,1)  
print 'arc'(800,250,75,3,1,75)  
print 'pen'(3,1,9)  
print 'arc'(800,250,75,3,75,1) |   
---|---|---  
|  print 'pen'(1,1,12)  
print 'arc'(800,250,100,1,900,250,800,150)  
print 'pen'(1,1,9)  
print 'arc'(800,250,100,1,800,150,900,250) | 
