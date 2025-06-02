# Mnemonics

**'PIE'** |  **_Define/Draw Pie Slice_**  
---|---  
  
**GUI Display/Printer**

##  Formats

1. |  _Draw Pie (Starting/Ending Angles)_ |  **'PIE'(**_x,y,radius,aspect,angle_1,angle_2_**)**  
---|---|---  
2. |  _Draw Pie (Radial Coordinates)_ |  **'PIE'(**_x,y,radius,aspect,startRadialX,startRadialY,endRadialX,endRadialY_**)**  
  
**_Where:_**

_angle_1_ |  Angle (in degrees) measured counter clockwise from the right-center (3 o'clock) position of the pie circle to the **_starting_** point of the pie slice. Numeric expression.  
---|---  
_angle_2_ |  Angle (in degrees) measured counter clockwise from the right-center (3 o'clock) position of the pie circle to the **_ending_** point of the pie slice. Numeric expression.  
_aspect_ |  Aspect ratio/viewpoint. (Ratio=1 results in no tilt.) Numeric expression.  
_startRadialX_ _  
startRadialY_ |  Coordinates along a line that extends from the center of the pie, in graphical units. The point where this line intersects with the pie circle defines the **_start_** of the pie slice. Numeric expression.  
_endRadialX_ _  
endRadialY_ |  Coordinates along a line that extends from the center of the pie, in graphical units. The point where this line intersects with the pie circle defines the **_end_** of the pie slice. Numeric expression.  
_radius_ |  Radius of the pie, in graphical units. Numeric expression.  
_x,y_ |  Coordinates for the center of the pie, in graphical units. Numeric expression.  
  
_(Support for the Radial Coordinates format was added in PxPlus 2020.)_

##  Description

Use **'PIE'** to draw (print) a pie slice on the device (e.g. terminal). Use graphical units or **@X(col) / @Y(line)** functions for _x_ ,_y_ and _radius_.

When drawing the pie slice, it can extend in **_either_** of two ways:

  * **_From_** starting _angle_1_** _to_** ending _angle_2_ **_OR_**  
  

  * **_From_** where the line (defined by **_startRadialX_** and **_startRadialY_**) intersects with the pie circle **_to_** where the line (defined by **_endRadialX_** and **_endRadialY_**) intersects with the pie circle



The **'PIE'** mnemonic uses current attributes for the **'FILL'** and **'PEN'** mnemonics.

For PDFs and Windows graphical drawing, entering a ratio=0 means no ratio. A ratio <0 is invalid and results in an Error 29: Invalid Mnemonic or position specification.

## See Also

**[@X(col) / @Y(line) Convert X/Y Coordinates](../functions/~x.md)  
['FILL' Define Fill Style](fill.md)**  
**['PEN' Define Pen Style](pen.md)**

##  Example

These examples display a pie cut into two uneven slices:

|  print 'pen'(1,3,8),'fill'(2,6)  
print 'pie'(224,450,100,1,45,1)  
print 'pen'(1,3,6),'fill'(4,15)  
print 'pie'(260,440,100,1,1,45) |   
---|---|---  
|  print 'pen'(1,3,8),'fill'(2,6)  
print 'pie'(224,450,100,1,274,400,324,447)  
print 'pen'(1,3,6),'fill'(4,15)  
print 'pie'(260,440,100,1,360,437,310,390) | 
