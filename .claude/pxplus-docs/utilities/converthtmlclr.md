# Utility Routines

***TOOLS/CONVERTHTMLCOLOR** |  **_Convert HTML Color Name into Hex Color_**  
---|---  
  
## Invocation

**CALL "*tools/converthtmlcolor"** ,_htmlcolorname_ _$_ ,_outputhexcolor_ _$_

**_Where:_**

_htmlcolorname_ _$_ |  Name of the HTML color to convert.  
---|---  
_outputhexcolor_ _$_ |  Output string where the Hex color is returned.  
  
## Description

Convert HTML color name into Hex color.

_(The ConvertHTMLColor utility was added in PxPlus 2021.)_

## Example

CALL "*tools/converthtmlcolor","DarkGoldenRod",_hexcolor_ _$_

**_Where:_**

_hexcolor_ _$_ will be "#b8860b" (the Hex color of the HTML color "DarkGoldenRod").

## See Also

**[*TOOLS/PrintHTML](printhtml.md)**  
FIN **[CurFont](../functions/fin.htm#curfont)** and **[CurColor (CurColour)](../functions/fin.htm#curclr)**
