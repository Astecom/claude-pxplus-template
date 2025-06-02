# Control Object Properties

**BitmapPosition $** |  **_Bitmap Position/Appearance of Chart_**  
---|---  
  
## Description

Bitmap position/appearance of chart

Predefined positions include TopLeft, Left, BottomLeft, TopRight, Right and BottomRight. These preserve bitmap size and proportions.

Use the **STRETCH** parameter to force the bitmap to be stretched within the chart's window.

The **TILE** parameter creates a "tile" effect multiplying the original bitmap to cover the entire chart's window.

A custom position may be defined using syntax: _"x:y:column:line"_. With this syntax, the bitmap is positioned within the given rectangle. Proportions and the size of the bitmap are altered to fit the rectangle.

## Default

"TOPLEFT"

## Used By

**CHART**
