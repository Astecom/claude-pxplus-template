# Mnemonics

**'FRAME'** |  **_Define/Draw a Frame_**  
---|---  
  
**GUI Display**

##  Format

**'FRAME'(**_x,y,x,y,style_**[** ,_title$_ **[**_,textColor$_**[**_,frameHilightColor$_**[**_,frameShadowColor$_**]]]])**

**_Where:_**

_x,y_ |  Placement coordinates, top left and bottom right, in graphical units. Numeric expression.  
---|---  
_style_ |  Determines the style level and bevel sizes in creating the frame. Numeric expression:  
|  **> 0 'FRAME'** is elevated button with bevel width=style value.  
|  **< 0 'FRAME'** is inset with bevel width=style value.  
|  **=0 'FRAME'** appears etched or flat (depends on **'2D'** , **'3D'** or **'4D'**).  
_title$_ |  Frame title. Optional. String expression.  
_textColor_ _$_ |  Color of the header text. Optional. (_Default:_ Black)  
_frameHilightColor_ _$_ |  Color of highlight line. Optional. (_Default:_ Light Gray)  
_frameShadowColor_ _$_ |  Color of shadow line. Optional. (_Default:_ Dark Gray)  
  
_(The textColor$, frameHilightColor$ and frameShadowColor$ arguments were added in PxPlus 2024.)_

##  Description

Use **'FRAME'** to draw (print) a frame on the screen. Use graphical units or **@X(_col_) / @Y(_line_)** functions for beginning and ending the frame.

**_Frame Color_**

To define the color of the frame, use either of the following:

Set the **FrameDarkClr** and **FrameLiteClr** properties using the **['OPTION'](option.md)** mnemonic

Specify the _frameHilightColor_ _$_ and _frameShadowColor_ _$_ arguments

**_Frame Text Color_**

To define the color of the frame text, the frame text can be prefixed with any of the following mnemonics:

Any  _foreground_ color mnemonic, such as 'RED', 'BLUE', 'CYAN', etc. (See **[Example](frame.htm#Mark4)**)

Any  _background_ color mnemonic, such as '_RED', '_BLUE', '_CYAN', etc.

**['COLOUR'](colour.md)** (or **'COLOR'**) mnemonic for defining the _foreground_ color

**['_COLOUR'](colour.md)** (or **'_COLOR'**) mnemonic for defining the _background_ color

Specify the _textColor_ _$_ argument

#### **Note:**  
If you are running **_PxPlus version 11 or higher_** and are using 4D mode to draw controls, the **'FRAME'** text color can also be changed by setting the **FrameTextClr** property using either the **['OPTION'](option.md)** mnemonic or the **[SETDEV](../directives/setdev_set.md)** directive:  
  
SETDEV (0) SET "FrameTextClr" TO "_xxx_ " (**_where_** _xxx_ is the new value)

_(Support for defining frame text color was added in PxPlus 2021.)_

## See Also

**[@X(col) and @Y(line) Convert X/Y Coordinates](../functions/~x.md)  
['COLOUR' User-Defined Colours](colour.md)**

##  Example

print 'frame'(100,100,450,450,10,"Hello There")  
print 'frame'(100,100,500,200,10,'red'+"Frame Title")  
print 'frame'(100,100,300,300,0,"Details","red","green","green")
