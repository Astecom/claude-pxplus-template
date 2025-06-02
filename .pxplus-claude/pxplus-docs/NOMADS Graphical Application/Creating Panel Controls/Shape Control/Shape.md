# Creating Panel Controls

**Shape Control** |  **__**  
---|---  
  
The Shapes tool is used to draw basic graphics, such as **[Arc](Shape.htm#arc)**, **[Circle](Shape.htm#circle)**, **[Line](Shape.htm#line)**, **[Pie](Shape.htm#pie)**, **[Polygon](Shape.htm#polygon)** and **[Rectangle](Shape.htm#rectangle)**, directly on a panel; e.g. a _Pie_ shape may be used to provide a visual illustration for sales figures. _Pen Style_ and _Fill_ options are also available (where applicable) to enhance the visual display of the shape.

#### **Important Note****:**  
**_As of PxPlus 2019_** , the _Arc, Circle, Line_ and _Pie_ shape objects were redesigned to make it easier to create and select the shape, define display properties and determine the size of the shape by using the object's width and height. For compatibility purposes, the **_former_** formats of these objects have been **_renamed_** to _Radius Arc, Radius Circle, Poly Line_ and _Radius Pie_ respectively and continue to function as they did previously.  
  
The recommendation is to use the redesigned formats of these objects; however, in certain instances, such as when drawing a multi-segmented line or when creating an _Arc, Circle_ or _Pie_ shape very close to the edge of a panel, the former formats may be used.

To insert images created outside of NOMADS and PxPlus, use the **[Image](../Image%20Control/Image.md)** tool. For more advanced chart styles, use the **[Chart](../Chart%20Control/Chart.md)** tool. A shape object is for display purposes only and does not respond to events.

To view a video presentation on how to use a _Rectangle_ shape to add an informational message to a panel, go to **[How to Add an Info Message](https://www.youtube.com/watch?v=rPbBCcMRWRc)**.

For more information on defining shapes, see **'[ARC](../../../mnemonics/arc.md)'**, **'[CIRCLE](../../../mnemonics/circle.md)'**, **'[LINE](../../../mnemonics/line.md)'**, **'[PIE](../../../mnemonics/pie.md)'**, **'[POLYGON](../../../mnemonics/polygon.md)'** and **'[RECTANGLE](../../../mnemonics/rectangle.md)'** mnemonics.

## Drawing Shapes

While the Shapes tool provides a method for creating simple shapes in NOMADS, it is not a freehand drawing tool. Shape characteristics are set primarily by adjusting the object's display properties rather than by dragging the mouse pointer.

To draw a shape object on a panel, select the Shapes control tool from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**. Hold down the left mouse button and drag the mouse to create a small rectangle as a starting point. Release the mouse button to set the initial coordinates for the new object.

By default, all shape objects start out as a _Rectangle_ but can be easily redefined as an _Arc, Circle, Line, Pie_ or _Polygon_ object by changing the _Shape_ property, and then setting the dimensions and other characteristics by using the **[Shape Properties](Shape.htm#shapeproperties)**.

To move the object after it is created, see **[Modifying Objects](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.md)**.

##  Shape Properties

The shape of an object is determined by selecting a shape type from the _Shape_ property drop-down list: **[Arc](Shape.htm#arc)**, **[Circle](Shape.htm#circle)**, **[Line](Shape.htm#line)**, **[Pie](Shape.htm#pie)**, **[Poly Line](Shape.htm#polyline)**, **[Polygon](Shape.htm#polygon)**, **[Radius Arc](Shape.htm#radius_arc)**, **[Radius Circle](Shape.htm#radius_circle)**, **[Radius Pie](Shape.htm#radius_pie)** and **[Rectangle](Shape.htm#rectangle)**. See **[Important Note](Shape.htm#note)** above.

When creating or editing a _Shape_ control, the **Shape Properties** dialogue (pictured below using the **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** version of the NOMADS Panel Designer) is displayed:

> This dialogue is divided into the following tabbed panels for viewing and/or changing shape properties: **[Display](Shape.htm#display)** and **[iNomads Settings](Shape.htm#inomads_set)**.

#### **Note:**  
Depending on the _Shape_ selected, the properties available on the **Display** tab will vary, and **Fill** properties are **_not_** applicable for _Arc, Radius Arc, Line_ and _Poly Line_ shapes. All other properties are identical across all shape types.

_Name_ |  Unique name of the shape control (NOMADS provides a default). Naming conventions for variables apply. Click the Browse Library button to copy parameters from an existing object (via the **[Library Browse](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Library%20Browse.md)** dialogue).

#### **Note:**  
When a new control name is entered, it will be checked against the **[Reserved Words](../../../Reserved%20Words.md)** list to determine if it is restricted for use as a NOMADS control name. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_  
  
---|---  
_Shape_ |  Click the drop-down arrow for a list of shape types: _Arc, Circle, Line, Pie, Poly Line, Polygon, Radius Arc, Radius Circle, Radius Pie_ and _Rectangle_. See **[Important Note](Shape.htm#note)** above.  
_(Convert to new Shape format)_ |  **_(Available when an existing Radius Arc, Radius Circle, Radius Pie or Poly Line Shape is selected)_** Button used to convert a pre-existing shape control (created with the former format) to its newer, redesigned format. Prior to conversion, a message will display, asking to confirm the request. _(The Convert to new Shape format button was added in PxPlus 2019.)_  
**Preview** |  Displays how the visible properties of the control will appear at run time.  
**Display**  
**Pen Style** |  |  _Styles_ |  Click the drop-down arrow for a list of pen styles. The styles _Dashed, Dotted, Dash-dot_ and _Dash-dot-dot_ work only when the _Pen Width_ is 1.  
---|---  
_Width_ |  Pen width in graphical units. Valid entries are 0 - 255.  
_Color_ |  Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
  
**Fill (Gradient Fill Requires 2 Colors)** |  **_(Not Applicable for Arc, Radius Arc, Line and Poly Line Shapes)_** |  _Pattern_ |  Click the drop-down arrow to select the direction of the gradient fill or pattern.  
---|---  
_Color (1 st)_ |  Starting color for the shape. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
_Color (2 nd)_ |  Second color for the two-color gradient or fill pattern. Fill colors are enabled based on the _Fill Pattern_ selected. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
  
**Visual Class** |  **_(Applicable Only for Circle, Line and Rectangle Shapes)_** Assign a visual class to the control. Click the Visual Class Maintenance button to launch the **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#vcutility)** utility for creating or editing visual classes. To assign visual classes to controls at the **_library_** level, see **[Visual Class Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**.

#### **Note:**  
Visual class names that begin with an "*" _(asterisk)_ are pre-defined visual classes used by PVX Plus and may be subject to change without notice.

_(The option to assign a Visual Class to Circle, Line and Rectangle shapes was added in PxPlus 2024.)_  
**Properties** |  **_(Varies depending on the Shape selected)_** For the properties of each shape, see **[Rectangle](Shape.htm#rectangle)**, **[Arc](Shape.htm#arc)**, **[Circle](Shape.htm#circle)**, **[Line](Shape.htm#line)**, **[Pie](Shape.htm#pie)**, **[Poly Line](Shape.htm#polyline)**, **[Polygon](Shape.htm#polygon)**, **[Radius Arc](Shape.htm#radius_arc)**, **[Radius Circle](Shape.htm#radius_circle)** and **[Radius Pie](Shape.htm#radius_pie)**.  
**Position** |  |  _Column_ |  Starting column for top left corner of the control - numeric expression. Format mask is #0.00. Valid entries are 0 to 620.  
---|---  
_Line_ |  Starting line for top left corner of the control - numeric expression. Format mask is #0.00. Valid entries are 0 to 255.  
  
_(Support for increased Column and Line maximums was added in PxPlus 2021.)_  
  
**Size** |  |  _Width_ |  Width of control in number of columns - numeric expression. Format mask is #0.00. Valid entries are 0 to 620.  
---|---  
_Height_ |  Height of control in number of lines - numeric expression. Format mask is #0.00. Valid entries are 0 to 255.  
  
_(Support for increased Width and Height maximums was added in PxPlus 2021.)_  
  
**General Attributes** |  |  _Initially Hidden_ |  Control is not displayed but is accessible programmatically.  
---|---  
**iNomads Settings**  
**iNomads Class** |  Assign an iNomads class to the control. Can be _Fixed_ or _Expression_. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined iNomads classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**. _(The iNomads Class property was added to Shapes in PxPlus 2018.)_  
_Security_ |  Security restrictions. See **[Restricting Access](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.md)** for information on **Object Security Definition**.  
_Groups_ |  Assign the control to a group. See **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md)**.  
_Notes_ |  Add notes/comments for the control. Maximum 1024 characters. _(The Notes button was added in PxPlus 2023.)_  
  
##  Rectangle Object

The **Display** properties below apply specifically to a **_Rectangle_** object.

**Display**  
---  
**Fill (Gradient Fill Requires 2 Colors)** |  |  _Pattern_ |  Click the drop-down arrow to select the direction of the gradient fill or pattern.  
---|---  
_Color (1st)_ |  Starting color for the shape. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
_Color (2nd)_ |  Second color for the two-color gradient or fill pattern. Fill colors are enabled based on the _Fill Pattern_ selected. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
  
**Properties** |  |  _Radius_ |  Radius value in graphical units. Valid entries are 0 - 255. Applying a Radius value greater than zero produces a rectangle with _rounded corners._  
---|---  
  
**_Example:_**

The properties shown below produce the **_Rectangle_** shape used in creating the following PxPlus Info message for the **[Library Bulk Edit and Search](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)** utility:

|  **_Given_** |  **_Yields_**  
---|---|---  
|  |   
  
To view a video presentation on how to use a **_Rectangle_** shape to add an informational message to a panel, go to **[How to Add an Info Message](https://www.youtube.com/watch?v=rPbBCcMRWRc)**.

##  Arc Object

The **Display** properties below apply specifically to an **_Arc_** object.

**Display**  
---  
**Properties** |  |  _Type_ |  Select the Arc portion of a _Circle_ shape or an _Ellipse_ shape.  
---|---  
_Angles_ |  Angles (in degrees) measured counter clockwise from the right-center (3 o'clock) position of the arc circle to the **_starting_** and **_ending_** points of the arc. Valid entries are 0 - 360.  
  
_(The Type property was added in PxPlus 2019.)_  
  
**_Example:_**

The properties shown below produce the following **_Arc_** shape:

|  **_Given_** |  **_Yields_**  
---|---|---  
|  |   
  
##  Circle Object

The **Display** properties below apply specifically to a **_Circle_** object.

**Display**  
---  
**Fill (Gradient Fill Requires 2 Colors)** |  |  _Pattern_ |  Click the drop-down arrow to select the direction of the gradient fill or pattern.  
---|---  
_Color (1 st)_ |  Starting color for the shape. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
_Color (2 nd)_ |  Second color for the two-color gradient or fill pattern. Fill colors are enabled based on the _Fill Pattern_ selected. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
  
**Properties** |  |  _Type_ |  Select a _Circle_ or an _Ellipse_ shape.  
---|---  
  
_(The Type property was added in PxPlus 2019.)_  
  
**_Example:_**

The properties shown below produce the following **_Circle_** shape:

|  **_Given_** |  **_Yields_**  
---|---|---  
|  |   
  
##  Line Object

The **Display** properties below apply specifically to a **_Line_** object.

**Display**  
---  
**Properties** |  |  _Line Type_ |  Line selections are: |  _Horizontal_ |  Horizontal line.  
---|---  
_Vertical_ |  Vertical line.  
_Down_ |  Line moves down toward the right.  
_Up_ |  Line moves up toward the right.  
  
The length and angle of the line is determined by the height and width of the shape object. If a line with multiple segments is required, use the **[Poly Line](Shape.htm#polyline)** object.  
  
_(The Line Type property was added in PxPlus 2019.)_  
  
**_Example:_**

The properties shown below produce the following **_Line_** shape:

|  **_Given_** |  **_Yields_**  
---|---|---  
|  |   
  
##  Pie Object

The **Display** properties below apply specifically to a **_Pie_** object.

**Display**  
---  
**Fill (Gradient Fill Requires 2 Colors)** |  |  _Pattern_ |  Click the drop-down arrow to select the direction of the gradient fill or pattern.  
---|---  
_Color (1st)_ |  Starting color for the shape. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
_Color (2nd)_ |  Second color for the two-color gradient or fill pattern. Fill colors are enabled based on the _Fill Pattern_ selected. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
  
**Properties** |  |  _Type_ |  Select the Pie portion of a _Circle_ shape or an _Ellipse_ shape.  
---|---  
_Angles_ |  Angles (in degrees) measured counter clockwise from the right-center (3 o'clock) position of the pie circle to the **_starting_** and **_ending_** points of the pie slice. Valid entries are 0 - 360.  
  
_(The Type property was added in PxPlus 2019.)_  
  
**_Example:_**

The properties shown below produce the following **_Pie_** shape:

|  **_Given_** |  **_Yields_**  
---|---|---  
|  |   
  
##  Poly Line Object

As of PxPlus 2019, the **_former_** _Line_ object was renamed to _Poly Line_ and continues to function as it did previously. The recommendation is to use the redesigned **[Line](Shape.htm#line)** object.

The **Display** properties below apply specifically to a **_Poly Line_** object.

**Display**  
---  
**Properties** |  |  _X/Y Values_ |  Logical screen coordinates in graphical units for the _ending point_ of the line (starting point is established via the _Position_ and _Size_ properties). Graphical units are similar to pixels, not line/column values. If the line has multiple segments, multiple X/Y values, separated by a comma, may be entered.  
---|---  
  
**_Example:_**

The properties shown below produce the following **_Poly Line_** shape:

|  **_Given_** |  **_Yields_**  
---|---|---  
|  |   
  
##  Polygon Object

The **Display** properties below apply specifically to a **_Polygon_** object.

**Display**  
---  
**Fill (Gradient Fill Requires 2 Colors)** |  |  _Pattern_ |  Click the drop-down arrow to select the direction of the gradient fill or pattern.  
---|---  
_Color (1 st)_ |  Starting color for the shape. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
_Color (2 nd)_ |  Second color for the two-color gradient or fill pattern. Fill colors are enabled based on the _Fill Pattern_ selected. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
  
**Properties** |  |  _X/Y Values_ |  Logical screen coordinates in graphical units for each of the polygon's corners. Graphical units are similar to pixels, not line/column values.  
---|---  
  
**_Example:_**

The properties shown below produce the following **_Polygon_** shape:

|  **_Given_** |  **_Yields_**  
---|---|---  
|  |   
  
##  Radius Arc Object

As of PxPlus 2019, the **_former_** _Arc_ object was renamed to _Radius Arc_ and continues to function as it did previously. The recommendation is to use the redesigned **[Arc](Shape.htm#arc)** object.

The **Display** properties below apply specifically to a **_Radius Arc_** object.

**Display**  
---  
**Properties** |  |  _Radius_ |  Radius value in graphical units. Valid entries are 0 - 255.  
---|---  
_Ratio_ |  Numeric aspect ratio/viewpoint. Valid entries are 0 - 255.  
_Angles_ |  Angles (in degrees) measured counter clockwise from the right-center (3 o'clock) position of the arc circle to the **_starting_** and **_ending_** points of the arc. Valid entries are 0 - 360.  
  
**_Example:_**

The properties shown below produce the following **_Radius Arc_** shape:

|  **_Given_** |  **_Yields_**  
---|---|---  
|  |   
  
##  Radius Circle Object

As of PxPlus 2019, the **_former_** _Circle_ object was renamed to _Radius Circle_ and continues to function as it did previously. The recommendation is to use the redesigned **[Circle](Shape.htm#circle)** object.

The **Display** properties below apply specifically to a **_Radius Circle_** object.

**Display**  
---  
**Fill (Gradient Fill Requires 2 Colors)** |  |  _Pattern_ |  Click the drop-down arrow to select the direction of the gradient fill or pattern.  
---|---  
_Color (1st)_ |  Starting color for the shape. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
_Color (2nd)_ |  Second color for the two-color gradient or fill pattern. Fill colors are enabled based on the _Fill Pattern_ selected. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
  
**Properties** |  |  _Radius_ |  Radius value in graphical units. Valid entries are 0 - 255.  
---|---  
_Ratio_ |  Numeric aspect ratio/viewpoint. Valid entries are 0 - 255.  
  
**_Example:_**

The properties shown below produce the following **_Radius Circle_** shape:

|  **_Given_** |  **_Yields_**  
---|---|---  
|  |   
  
##  Radius Pie Object

As of PxPlus 2019, the **_former_** _Pie_ object was renamed to _Radius Pie_ and continues to function as it did previously. The recommendation is to use the redesigned **[Pie](Shape.htm#pie)** object.

The **Display** properties below apply specifically to a **_Radius Pie_** object.

**Display**  
---  
**Fill (Gradient Fill Requires 2 Colors)** |  |  _Pattern_ |  Click the drop-down arrow to select the direction of the gradient fill or pattern.  
---|---  
_Color (1st)_ |  Starting color for the shape. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
_Color (2nd)_ |  Second color for the two-color gradient or fill pattern. Fill colors are enabled based on the _Fill Pattern_ selected. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
  
**Properties** |  |  _Radius_ |  Radius value in graphical units. Valid entries are 0 - 255.  
---|---  
_Ratio_ |  Numeric aspect ratio/viewpoint. Valid entries are 0 - 255.  
_Angles_ |  Angles (in degrees) measured counter clockwise from the right-center (3 o'clock) position of the pie circle to the **_starting_** and **_ending_** points of the pie slice. Valid entries are 0 - 360.  
  
**_Example:_**

The properties shown below produce the following **_Radius Pie_** shape:

|  **_Given_** |  **_Yields_**  
---|---|---  
|  | 
