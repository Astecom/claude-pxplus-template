# Control Object Properties

**FindOptions $** |  **_FindItemText_ _Control Settings_**  
---|---  
  
## Description

FindItemText control settings

This property is used to control how the 'FindItemText will search the data in the grid or report view.

It can have one of the following characters specified in its value:

|  **Char.** |  **Function**  
---|---  
C |  Search is case insensitive.  
A |  Accents will be ignored when comparing data.  
W |  Search should start from current position and wrap around.  
* |  Match is for data anywhere in the text (cannot be used with Sort option).  
S |  Data is sorted.  
R |  Search backwards.  
I |  _(Uppercase "i")_ In a list box with a bitmap, include the name of the bitmap in the search.  
  
_(The FindOptions$ property was added in PxPlus v11.00.)  
__(The "I" option was added in PxPlus 2023.)_

## See Also

[**'FindItemText$**](finditemtext.md)  
[**'FindColNo**](findcolno.md)

## Default

Default value is "" (no options specified).

## Used By

**GRID****REPORT_VIEW**
