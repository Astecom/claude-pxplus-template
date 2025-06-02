# Mnemonics

**'BOX'** |  **_Define/Draw a Box_**  
---|---  
  
**GUI Display _or_ Character Display**

##  Format

_Long or short form:_**'BOX'** or **'BX'  
**  
**'BOX'(**_col_ ,_ln_ ,_wth_ ,_ht_[,_title$_[,_attrib_ _$_]]**)**  
  
**_Where:_**

_col,ln,wth,ht_ |  Position/coordinates. Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines.  
---|---  
_attrib_ _$_ |  Optional attributes. If you include attributes, use a string of one or more mnemonics.  
_title$_ |  Optional title. String expression.  
  
##  Description

You can use either **'BOX'** or **'BX'** in the format to draw a text mode box. If you include a title, it is displayed left justified on the top line of the box unless the **'AH'** system parameter is set. If you include attributes, these are sent to the display device before the box is displayed.

## See Also

**['AH' Alternative 'WINDOW'/'BOX' Heading](../parameters/ah.md)**

##  Example

The boxes in the example are drawn joined with titles. Current **'FILL'** and **'PEN'** settings are ignored when you use **'BOX'** :

> print 'CS';  
>  list  
>  print 'pen'(2,3,6),'fill'(3,8)  
>  print 'box'(4,6,16,10,"Box 1",'BJ')  
>  print 'bx'(19,6,10,10,"Box 2")  
>  print 'EJ'
