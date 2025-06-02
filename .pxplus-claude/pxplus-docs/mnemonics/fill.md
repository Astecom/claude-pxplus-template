# Mnemonics

**'FILL'** |  **_Define Fill Style_**  
---|---  
  
**GUI Display/Printer**

##  Formats

1. |  _One-Colour Fill Pattern:_ |  **FILL' (**_pattern_**,**_colour1_**)**  
---|---|---  
2. |  _Two-Colour Fill Pattern/Gradient:_ |  **'FILL' (**_pattern_**,**_colour1,colour2_**)**  
  
**_Where:_**

_pattern_ |  Numeric code for **_fill pattern_** type. Supported options include:  
---|---  
|  0 - No fill |  4 - Crossed line |   
|  1 - Solid fill |  5 - Bottom left to top right |   
|  2 - Horizontal lines |  6 - Top left to bottom right |   
|  3 - Vertical lines |  7 - Diagonal crossed lines |   
|  |    
Numeric code for **_gradient pattern_** direction. Supported options include:  
---  
2 - Top to bottom |   
3 - Left to right |   
5 - Top-left to bottom-right |   
6 - Bottom-left to top-right |   
_colour1_ |  Fill colour. Use colour code, colour name, or RGB setting; i.e. RGB:_n_ _n n**where** n = _0 - 255. Options include:  
|  0 - Black |  8 - Dark Gray  
|  1 - Light Red |  9 - Dark Red  
|  2 - Light Green |  10 - Dark Green  
|  3 - Light Yellow |  11 - Dark Yellow  
|  4 - Light Blue |  12 - Dark Blue  
|  5 - Light Magenta |  13 - Dark Magenta  
|  6 - Light Cyan |  14 - Dark Cyan  
|  7 - White |  15 - Gray  
_  
colour2_ |    
Second colour for _two-colour gradient_ or _fill_ patterns. Options are the same as for _colour1_ ; however, when applying two colours, ensure that both are defined using the same convention (i.e. if _colour1_ uses RGB, _colour2_ must use RGB as well).  
| | | |   
  
##  Description

Use **'FILL'** to define the current fill pattern/gradient and colours for an open channel (default is the terminal).

The direction for _gradient fill_ is derived from the pattern codes 2, 3, 5 and 6. Non-gradient _two-colour fill patterns_ are 4 and 7 (first colour for lines and the second colour for background fill).

##  Examples

print 'pen'(1,3,1),'fill'(2,6),'circle'(224,450,100)  
print 'fill'(1,"RGB: 192,192,192"),  
print 'fill'(0,"Light Red"),  
print 'fill'(3,"Colour32","Colour51")
