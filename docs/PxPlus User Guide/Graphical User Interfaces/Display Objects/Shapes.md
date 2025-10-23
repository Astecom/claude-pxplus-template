# Display Objects

**Shapes** |  **__**  
---|---  
  
The graphical shapes that are available to PxPlus include the **[Arc](Shapes.htm#arc)**, **[Pie](Shapes.htm#pie)**, **[Circle](Shapes.htm#circle)**, **[Line](Shapes.htm#line)**, **[Rectangle](Shapes.htm#rectangle)** and **[Polygon](Shapes.htm#polygon)**. All of these shapes use the current attributes for the**'[PEN](../../../mnemonics/pen.md)'** and**'[FILL](../../../mnemonics/fill.md)'** mnemonics to determine their outline and fill characteristics.

## Pen Style

**'PEN'**(_style,width,colour_)

Defines the pen style to outline subsequently drawn shapes. Styles include:

> **0 -** No pen   
> **1 -** Solid pen   
> **2 -** Dashed line   
> **3 -** Dotted line   
> **4 -** Dash-dot   
> **5 -** Dash-dot-dot 

Width is in graphical units. Colour can be a colour code (0 - 15) or the name of one of the PxPlus standard colours, the name of a user-defined colour, or an RGB setting (**RGB:**_n n n_). PxPlus colour codes/names are as follows:

> **0 -** Black  
> **1 -** Light Red  
> **2 -** Light Green  
> **3 -** Light Yellow  
> **4 -** Light Blue  
> **5 -** Light Magenta  
> **6 -** Light Cyan  
> **7 -** White

| 

> **8** **-** Dark Gray  
> **9** **-** Dark Red  
> **10 -** Dark Green  
> **11 -** Dark Yellow  
> **12 -** Dark Blue  
> **13 -** Dark Magenta  
> **14 -** Dark Cyan  
> **15 -** Gray  
  
---|---  
  
For syntax details, see **'[PEN](../../../mnemonics/pen.md)'** mnemonic.

**_Example:_**

> PRINT 'PEN'(1,10,6),   
>  PRINT 'PEN'(1,1,"RGB: 192,192,192"),   
>  PRINT 'PEN'(0,3,"Light Red"),

#### **Note:**  
The current**'PEN'** and**'FILL'** settings are reset after a **['CS'](../../../mnemonics/cs.md)** (Clear Screen) mnemonic has been output.

## Fill Pattern

**'FILL'**(_pattern_ ,_colour1_ [_,colour2_])

Defines the fill pattern to be used with subsequently drawn shapes. Two types of fill patterns are available: _Standard_ and _Gradient._

_Standard_ patterns include:

> **0 -** No fill   
> **1 -** Solid fill   
> **2 -** Horizontal lines   
> **3 -** Vertical lines   
> **4 -** Crossed lines   
> **5 -** Diagonal bottom left to top right   
> **6 -** Diagonal top left to bottom right   
> **7 -** Diagonal crossed lines 

Patterns 4 and 7 require two colours to be specified, the first for the lines and the second for the background.

_Gradient_ patterns include:

> **2 -** Top to bottom   
> **3 -** Left to right   
> **5 -** Top left to bottom right   
> **6 -** Bottom left to top right 

Two colours must be specified for a gradient pattern, with the direction being derived from the code. Colours can be a colour code (0-15) or the name of one of the PxPlus standard colours (see**'[PEN](Shapes.htm#pen)'** above), the name of a user-defined colour, or an RGB setting (**RGB:**_n n n_). If a second colour is specified, then both colours must be specified using the same format.

For syntax details, see **'[FILL](../../../mnemonics/fill.md)'** mnemonic.

**_Example:_**

> PRINT 'FILL'(1,"RGB: 192,192,192"),   
>  PRINT 'FILL'(0,"Light Red"),   
>  PRINT 'FILL'(3,"UserColour32","UserColour51"),

##  Arc

**'ARC'**(_x,y,radius,aspect,angle_1,angle_2_)

Draws an arc centred at the given _x_ and _y_ graphical coordinates with the specified radius (also in graphical units) that extends from starting _angle_1_ to _angle_2._ If an aspect ratio other than 1 is specified, then the arc is tilted into an elliptical shape. Since an arc is not a closed figure, fill patterns do not apply.

For syntax details, see **'[ARC](../../../mnemonics/arc.md)'** mnemonic.

**_Example:_**

> PRINT 'PEN'(1,2,1),'ARC'(400,200,100,1,0,120),

##  Pie

**'PIE'**(_x,y,radius,aspect,angle_1,angle_2_) 

Draws a pie slice centred at the given _x_ and _y_ graphical coordinates with the specified radius (also in graphical units) that extends from starting _angle_1_ to _angle_1._ If an aspect ratio other than 1 is specified, then the pie is tilted into an elliptical shape.

For syntax details, see **'[PIE](../../../mnemonics/pie.md)'** mnemonic.

**_Example:_**

> PRINT 'PEN'(0,0,0),'FILL'(1,3),'PIE'(400,200,100,1,45,0),

##  Circle

**'CIRCLE'**(_x,y,radius,aspect_) 

Draws a circle centred at the given _x_ and _y_ graphical coordinates with the specified radius (also in graphical units). If an aspect ratio other than 1 is used, then the circle is tilted into an elliptical shape.

For syntax details, see **'[CIRCLE](../../../mnemonics/circle.md)'** mnemonic.

**_Example:_**

> PRINT 'PEN'(1,3,1),'FILL'(2,6),'CIRCLE'(224,450,90),

##  Line

**'LINE'**(_x1,y1,x2,y2_ [_,x,y_ ]) 

Draws a line (or lines) joining the sequential pairs of _x_ and _y_ graphical coordinates. Fill patterns do not apply to lines.

For syntax details, see **'[LINE](../../../mnemonics/line.md)'** mnemonic.

**_Example:_**

> PRINT 'PEN'(1,3,1),'LINE'(0,@y(5),@x(80),@y(5)),

##  Polygon

**'POLYGON'**(_x,y,x,y,x,y_ ) 

Draws a polygon by joining the sets of _x/y_ graphical coordinates. 

For syntax details, see **'[POLYGON](../../../mnemonics/polygon.md)'** mnemonic.

**_Example:_**

> PRINT 'PEN'(1,3,8),'FILL'(2,6),   
>  PRINT 'POLYGON'(224,450,100,100,400,200,390,390),

This example creates an irregular four-sided figure by setting the coordinates for the four corners.

##  Rectangle

**'RECTANGLE'**(_x1,y1,x2,y2,_ [_radius_])

Draws a rectangle defined by two sets of _x/y_ graphical coordinates. An optional radius may be specified as a rounding factor for the corners.

For syntax details, see **'[RECTANGLE](../../../mnemonics/rectangle.md)'** mnemonic.

**_Example:_**

> PRINT 'PEN'(1,3,8),'FILL'(4,6,8),   
>  PRINT 'RECTANGLE'(100,100,400,600),   
>  PRINT 'RECTANGLE'(700,100,820,220,30),

## Display Object Sampler

This simple code illustrates the variety of graphical user interface **[Display Objects](Overview.md)**.

> PRINT 'DIALOGUE'(0,0,80,25,"Shapes"),'SR','CS',   
> panelWidth=@X(MXC(0)+1)   
> panelHeight=@Y(MXL(0)+1)   
>  PRINT 'PEN'(0,0,0),'FILL'(2,4,6),   
>  PRINT 'RECTANGLE'(0,@Y(0),panelWidth,panelHeight),   
>  PRINT 'FONT'("Arial",3,"BI"),   
>  PRINT 'TEXT'(@X(2),@Y(9.5),"Shapes"),   
>  PRINT 'PEN'(1,3,2),   
>  PRINT 'ARC'(@X(10),@Y(18),@X(5),1,0,180),   
>  PRINT 'PEN'(1,2,3),'FILL'(1,3),   
>  PRINT 'PIE'(@X(25),@Y(18),@X(5),1,25,340),   
>  PRINT 'PEN'(1,1,0),'FILL'(2,2,10),   
>  PRINT 'CIRCLE'(@X(40),@Y(18),@X(5),1),   
>  PRINT 'PEN'(1,3,5),   
>  PRINT 'LINE'(@X(50),@Y(15),@X(60),@Y(15),@X(50),@Y(21),@X(60),@Y(21)),   
>  PRINT 'PEN'(1,3,7),'FILL'(4,7,1),   
>  PRINT 'POLYGON'(@X(65),@Y(18),@X(68),@Y(15),@X(72),@Y(15),@X(75),@Y(18),@X(72),@Y(21),@X(68),@Y(21)),   
>  OBTAIN *   
>  PRINT 'POP',

> 
