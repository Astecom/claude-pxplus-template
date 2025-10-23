# Mnemonics 

**'F#'** |  **_Foreground Colour_**  
---|---  
  
**GUI Display/Printer _or_ Character Display**

**_Where:_**

_#_ |  Numeric colour code. Supported colour codes are:  
---|---  
**_#_** |  **Colour Name** |  |  **_#_** |  **Colour Name** |   
---|---|---|---|---|---  
0 |  Black (default for graphical device) |  |  8 |  Dark Gray |   
1 |  Light Red |  |  9 |  Dark Red |   
2 |  Light Green |  |  : |  Dark Green |   
3 |  Light Yellow |  |  ; |  Dark Yellow |   
4 |  Light Blue |  |  < |  Dark Blue |   
5 |  Light Magenta |  |  = |  Dark Magenta |   
6 |  Light Cyan |  |  > |  Dark Cyan |   
7 |  White (default for text mode device) |  |  ? |  Light Gray |   
  
##  Description

Use the format above to begin outputting a foreground colour to a device (i.e. **PRINT** , **INPUT** , etc.).

The 16 colour codes are in ASCII sequence from 0 to ?, which are similar to the same colour codes for **'B#'** Background Colour; however, the foreground colours have the dark/light colours flipped.

## See Also

**['B#' Background Colour](b_.md)**

##  Example

In this example, the prompt and user's response will be in White text on a Blue background:

> input 'B4','F7',"Please enter your name: ",NAME$,
