# Control Object Properties

**Color Properties** |  **_Define Color Attributes_**  
---|---  
  
Some properties are used to define color attributes in various graphical control objects. Some examples are **[BackColor$](../properties/backcolor_.md)**, **[BackHilight1$](../properties/backhilight1_.md)**, **[BorderColor$](../properties/bordercolor.md)**, **[CurrentCellColor$](../properties/currentcellcolor_.md)**, just to name a few.

To apply a color to these properties, you can specify a color name and number, an RGB value, an HTML Hex code, an HSL value or a color specification in HTML format.

Specifying two colors separated by a **+** (_plus sign_) will blend the colors together. Adding **_*nnn_** at the end of any color specification will lighten/darken the color.

The **[Properties List](properties_list.md)** provides a complete alphabetically arranged list of **_all_** the various properties available, including color properties.

#### **Note:**  
Throughout the system, property names with the word/syllable "color" can also be spelled using the alternate English spelling of "colour".

## Color Names and Numbers

The following table defines the named colors in the system and their respective color numbers:

|  Black |  **0** |  Light Blue |  **4** |  Dark Gray |  **8** |  Dark Blue |  **12**  
---|---|---|---|---|---|---|---  
Light Red |  **1** |  Light Magenta |  **5** |  Dark Red |  **9** |  Dark Magenta |  **13**  
Light Green |  **2** |  Light Cyan |  **6** |  Dark Green |  **10** |  Dark Cyan |  **14**  
Light Yellow |  **3** |  White |  **7** |  Dark Yellow |  **11** |  Light Gray |  **15**  
  
If the "Light" or "Dark" clause is omitted from a color name specification, the system will assume "Light" for text/foreground colors and "Dark" for background colors.

#### **Note:**  
The color keyword "LIGHT" or "GRAY" may be entered as "LITE" or "GREY" respectively.

## RGB Color Specifications

Wherever a color name/string can be specified, an RGB value can be supplied:

> "RGB: _rrr_ , _ggg_ , _bbb_ "

**_Where:_**

_rrr_ |  Red intensity in the range of 0 to 255  
---|---  
_ggg_ |  Green intensity in the range of 0 to 255  
_bbb_ |  Blue intensity in the range of 0 to 255  
  
**_Example:_**

White would be "RGB: 255 255 255", and Orange would be "RGB: 250 165 0".

##  HTML Hex Color Codes

Each HTML color code consists of the **#** symbol followed by six letters or numbers in the hexadecimal number system, which represent the Red, Green and Blue components of the color (i.e. #RRGGBB). The first two values represent the intensity of the Red color, the next two values represent the intensity of the Green color, and the last two values represent the intensity of the Blue color. The value 00 is the least intense and FF is the most intense. FF in the hexadecimal system represents the number 255 in decimal form.

**_Example:_**

This example lists the hexadecimal codes and equivalent decimal codes that produce the colors Red, Green, Blue and Cyan.

**Color Name** |  **Hexadecimal Code (#RRGGBB)** |  **Decimal Code (R,G,B)** |  **Result**  
---|---|---|---  
Red |  #FF0000 |  (255,0,0) Maximum of Red, no Green, no Blue |   
Green |  #00FF00 |  (0,255,0) No Red, maximum of Green, no Blue |   
Blue |  #0000FF |  (0,0,255) No Red, no Green, maximum of Blue |   
Cyan |  #00FFFF |  (0,255,255) No Red, maximum of Green and Blue |   
  
##  HTML Named Colors

You can also use any of the 140 standard HTML named colors by prefixing the HTML color name with a **#** symbol.

_(Support for the use of HTML named colors was added in PxPlus 2022.)_

**_Example:_**

To use the HTML named color Maroon, in your code, you would set the color to:

> #Maroon _(case insensitive)_

Any invalid name will be considered Default. For information on which colors are supported, visit <https://www.w3schools.com/tags/ref_colornames.asp>.

The following table lists all the HTML named colors:

**Color Name** |  **Result** |  **Color Name** |  **Result**  
---|---|---|---  
#AliceBlue |  |  #AntiqueWhite |   
#Aqua |  |  #Aquamarine |   
#Azure |  |  #Beige |   
#Bisque |  |  #Black |   
#BlanchedAlmond |  |  #Blue |   
#BlueViolet |  |  #Brown |   
#Burlywood |  |  #CadetBlue |   
#Chartreuse |  |  #Chocolate |   
#Coral |  |  #CornflowerBlue |   
#Cornsilk |  |  #Crimson |   
#Cyan |  |  #DarkBlue |   
#DarkCyan |  |  #DarkGoldenrod |   
#DarkGray |  |  #DarkGreen |   
#DarkKhaki |  |  #DarkMagenta |   
#DarkOliveGreen |  |  #DarkOrange |   
#DarkOrchid |  |  #DarkRed |   
#DarkSalmon |  |  #DarkSeaGreen |   
#DarkSlateBlue |  |  #DarkSlateGray |   
#DarkTurquoise |  |  #DarkViolet |   
#DeepPink |  |  #DeepSkyBlue |   
#DimGray |  |  #DodgerBlue |   
#Firebrick |  |  #FloralWhite |   
#ForestGreen |  |  #Fuchsia |   
#Gainsboro |  |  #GhostWhite |   
#Gold |  |  #Goldenrod |   
#Gray |  |  #Green |   
#GreenYellow |  |  #Honeydew |   
#HotPink |  |  #IndianRed |   
#Indigo |  |  #Ivory |   
#Khaki |  |  #Lavender |   
#LavenderBlush |  |  #LawnGreen |   
#LemonChiffon |  |  #LightBlue |   
#LightCoral |  |  #LightCyan |   
#LightGoldenrodYellow |  |  #LightGray |   
#LightGreen |  |  #LightPink |   
#LightSalmon |  |  #LightSeaGreen |   
#LightSkyBlue |  |  #LightSlateGray |   
#LightSteelBlue |  |  #LightYellow |   
#Lime |  |  #LimeGreen |   
#Linen |  |  #Magenta |   
#Maroon |  |  #MediumAquamarine |   
#MediumBlue |  |  #MediumOrchid |   
#MediumPurple |  |  #MediumSeaGreen |   
#MediumSlateBlue |  |  #MediumSpringGreen |   
#MediumTurquoise |  |  #MediumVioletRed |   
#MidnightBlue |  |  #MintCream |   
#MistyRose |  |  #Moccasin |   
#NavajoWhite |  |  #Navy |   
#OldLace |  |  #Olive |   
#OliveDrab |  |  #Orange |   
#OrangeRed |  |  #Orchid |   
#PaleGoldenrod |  |  #PaleGreen |   
#PaleTurquoise |  |  #PaleVioletRed |   
#PapayaWhip |  |  #PeachPuff |   
#Peru |  |  #Pink |   
#Plum |  |  #PowderBlue |   
#Purple |  |  #Red |   
#RosyBrown |  |  #RoyalBlue |   
#SaddleBrown |  |  #Salmon |   
#SandyBrown |  |  #SeaGreen |   
#Seashell |  |  #Sienna |   
#Silver |  |  #SkyBlue |   
#SlateBlue |  |  #SlateGray |   
#Snow |  |  #SpringGreen |   
#SteelBlue |  |  #Tan |   
#Teal |  |  #Thistle |   
#Tomato |  |  #Turquoise |   
#Violet |  |  #Wheat |   
#White |  |  #WhiteSmoke |   
#Yellow |  |  #YellowGreen |   
  
## HSL Color Specifications

Wherever a color name/string can be specified, an HSL value can be supplied:

> "HSL: _hhh_ _, sss, lll_ "

**_Where:_**

_hhh_ |  Color hue in the range of 0 to 360  
---|---  
_sss_ |  Color saturation level as a percentage in the range of 0 to 100  
_lll_ |  Color lightness as a percentage in the range of 0 to 100  
  
For a description of how HSL works, visit **<http://en.wikipedia.org/wiki/HSL_and_HSV>**.

## Color Blending

If desired, wherever a color specification is needed, you can specify two colors separated by a **+** (_plus sign_), which will cause the system to blend the colors together.

**_Example:_**

The color specification of 

> "LIGHT RED" + "LIGHT YELLOW"

will result in an Orange color due to the blending of Yellow and Red.

## Dynamic Color Lightening

To create shades of a specified color, you can append **_*nnn_** at the end of any color specification to cause the system to lighten/darken the color. The value of _nnn_ defines the percentage by which the color will be lightened or darkened.

A value of *100 leaves the color alone, *120 will brighten the color by 20%, whereas *80 will darken it 20%.

**_Example:_**

Running the following program will adjust the lightness of the color BLUE between 50 and 150 percent:

> for i=50 to 150 step 10  
>  print 'fill'(1,"BLUE*"+str(i)),'rectangle'(i*5,@y(15),i*5+50,@y(17)),  
>  next

This yields the following result:

(HSL, Color Blending and Dynamic Color Lightening are available as of PxPlus 2014.)
