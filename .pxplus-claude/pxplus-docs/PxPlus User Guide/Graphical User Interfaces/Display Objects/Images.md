# Display Objects

**Images** |  **__**  
---|---  
  
The '**PICTURE'** mnemonic is used to draw a picture on the panel.

> **'PICTURE'(**_x_ , _y_ , _x_ , _y_ ,{  _name$_ | **#**_chan_ [, _transp_opt_ ]}[, _display_opt_ ] **)**

The images can be bitmaps or, with the PxPlus **_Multiple Image Support_** feature, other image formats (_gif, jpg, png, tif_ , etc.).

A number of display options are available:

**** |  **0** |  Align at top left  
---|---|---  
**** |  **1** |  Centre/crop within region  
**** |  **2** |  Scale to fit  
**** |  **3** |  Tile bitmaps to fill the given area  
**** |  **4** |  Half-tone for enhanced legibility (may lighten black images)  
**** |  **5** |  Scale with proper aspect ratio but output in top left  
**** |  **6** |  Scale with proper aspect ratio but centred in the region  
  
For options 0, 1 and 3, the image is cropped to fit within the specified region on the screen. When scaling an image, options 5 and 6 are recommended when it is important that the aspect ratio be maintained and the picture is not to be stretched unnaturally. If it is not important to maintain the aspect ratio when scaling, option 4 generally results in a cleaner image than option 2:

> PRINT 'PICTURE'(0,0,@X(MXC(0))+1,@Y(7),"people.bmp",4),

For syntax details, see **['PICTURE'](../../../mnemonics/picture.md)** mnemonic.
