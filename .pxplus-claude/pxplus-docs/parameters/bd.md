# System Parameters

**'BD'** |  **_Use Windows GDI+_**  
---|---  
  
## Description

**_(Windows Only)_**

The 'BD' (**B** etter **D** rawing) parameter controls whether Windows GDI+ is used to provide smoother curved and angled lines when the following shapes are drawn: _Arc, Ellipse, Pie, Line_ and _Polygon_.

If this parameter is **_On_** , Windows **GDI+** will be used.

If this parameter is **_Off_** , Windows **GDI** will be used, which is sufficient for straight horizontal and vertical lines; however, curved and angled lines will appear slightly jagged and uneven.

_(The**'** BD' system parameter was added in PxPlus 2020.)_

## Default

**_On_** Windows **GDI+** will be used.

## Example

  
**_Curved Line: Smooth_** |    
**_Curved Line: Uneven_**  
---|---
