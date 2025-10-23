# Control Object Properties

**SuppressHdr** |  **_Suppress Grid Headers_**  
---|---  
  
## Description

Suppress grid headers

Possible values are:

|  0 |  Headers not suppressed.  
---|---|---  
|  1 |  Row header suppressed (left side).  
|  2 |  Column header suppressed (top).  
|  3 |  Both headers suppressed.  
  
Suppression is done by setting the header height/width to 0. When not suppressed, the height/width will return to the last value.

_(The SuppressHdr property was added in PxPlus 2020.)_

## Used By

**GRID**
