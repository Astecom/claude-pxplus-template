# Display Objects

**Placement and Size** |  **__**  
---|---  
  
The various display objects are located on the panel using graphical units. Graphical units are based on 1/16 of the width of a character cell. Since the size of character cells change based on the session's fixed base font, the size of a graphical unit will change proportionately. Therefore, the relative location of a graphical element on a panel will be the same whether the base font is large or small. However, base fonts with different width to height aspect ratios may result in a different value when measuring vertically.

Unlike **[Interface Windows](../Interface%20Windows/Overview.md)** and **[Control Objects](../Control%20Objects/Overview.md)** (which are sized by specifying width and height in terms of columns and lines), the dimensions of graphical display elements are determined by specifying the graphical coordinates of the vertices that define the element. For example, text areas and rectangles are defined by specifying an x/y coordinate for the top left corner and another for the bottom right.

Horizontal and vertical graphical units are consistent, such that a rectangle drawn from 0,0 to 100,100 will form a square. Shapes, such as arcs, pies and circles, are defined by specifying the x/y coordinate for the centre of the shape and a radius measured in graphical units.

## @x( ) and @y( ) Functions

When programming, it is not obvious how many graphical units represent a particular location. (The top left corner of the panel is location 0,0.) Therefore, PxPlus includes two system functions to convert the more familiar line and column locations into graphical units. The **@x( )** function returns the x-axis graphical coordinate of a given column, and**@y( )** returns the y-axis graphical coordinate of a given line.

For syntax details, see **[@X( ) / @Y( )](../../../functions/~x.md)** functions.

The values passed to these functions can be fractional, but the return value will be an integer representing the number of graphical units. Because fractional values may be passed to these functions, they can be used to locate graphical display elements in precise locations on the panel.

## MXC( ) and MXL( ) Functions

To determine the width and height of a panel in graphical units, you can use the **MXC( )** and**MXL( )** functions in conjunction with**@x( )** and**@y( )**.

**_Example:_**

> PRINT @X(MXC(0)+1) ! Width of panel in graphical units   
>  1280   
>  PRINT @Y(MXL(0)+1) ! Height of panel in graphical units   
>  844

While the number of horizontal graphical units for a panel 80 columns wide will remain consistent, the number of vertical graphical units for a panel 25 lines high may differ based on the width:height ratio of the base font.

For syntax details, see **[MXC( ) / MXL( )](../../../functions/mxc.md)** functions.
