# Mnemonics 

**'MODE'** |  **_Set Attributes and Colour_**  
---|---  
  
**GUI Display _or_ Character Display**

##  Format

**'MODE'(**_attrib_[_$_]**)**

**_Where:_**

_attrib_[_$_] |  Attribute represented by a string or numeric value.  
---|---  
  
##  Description

Use **'MODE'** to directly reset the current attributes and colour of plain character text. A one, two or three character string is represented as follows:

|  1 character |  New attribute setting  
---|---|---  
|  2 characters |  Current foreground and background colour bytes  
|  3 characters |  First byte for new attributes, followed by the colour bytes  
  
If a numeric value is provided, the low order 8 bits is considered as a single character string and is assumed to contain the new attribute setting. If either of the colour bytes contains the value $FF$, then the colour byte is ignored, and the current colour (foreground or background) remains as is.

The bits within the attribute byte are represented as follows:

> $01$ Background  
>  $02$ Inverse video  
>  $04$ Blinking  
>  $08$ Underscore  
>  $10$ Graphic character

#### **Note:**  
To assist with conversions from BBx, this mnemonic has been extended in PxPlus to allow for the inclusion of "BBX:" as a prefix to an attribute string. If this prefix is used, the attribute string is considered to contain attributes in a format that is compatible with BBx.

_(The "BBX:" prefix functionality was added in PxPlus v7.00.)_

BBx is a registered trademark of BASIS International Ltd.
