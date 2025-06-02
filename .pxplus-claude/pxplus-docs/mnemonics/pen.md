# Mnemonics 

**'PEN'** |  **_Define Pen Style_**  
---|---  
  
**GUI Display/Printer**

##  Format

**'PEN'(**_style,width,colour_**)**

**_Where:_**

_colour_ |  **'PEN'** colour. Use colour code, colour name, or RGB setting; i.e. RGB:_n_ _n n**where** n _= 0 - 255.  
  
Standard numeric colour values are:  
---|---  
|  |  0 - Black |  8 - Dark Gray  
---|---  
1 - Light Red |  9 - Dark Red  
2 - Light Green |  10 - Dark green  
3 - Light Yellow |  11 - Dark Yellow  
4 - Light Blue |  12 - Dark Blue  
5 - Light Magenta |  13 - Dark Magenta  
6 - Light Cyan |  14 - Dark Cyan  
7 - White |  15 - Gray  
_style_ |  |  Numeric code for fill pattern type. Supported options include:  
---  
0 - No Pen |  3 - Dotted  
1 - Solid Pen |  4 - Dash-dot  
2 - Dashed |  5 - Dash-dot-dot  
_width_ |  Pen width, in device pixels. Numeric expression.  
  
#### **Note:**  
**'PEN'**_styles_ 2 (Dashed), 3 (Dotted), 4 (Dash-dot) and 5 (Dash-dot-dot) only work if _width_ is 1.  
  
**'PEN'**_style_ 1 (Solid) is the only style that works if _width_ is greater than 1. (This is an internal Windows API specification/ restriction.).

##  Description

Use **'PEN'** to define the current pen style, width and colour for graphics drawing.

##  Example

print 'pen'(1,10,6)  
print 'pen'(1,1,"RGB: 192,192,192")  
print 'pen'(0,3,"Light Red")
