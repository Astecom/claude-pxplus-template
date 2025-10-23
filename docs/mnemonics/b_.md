# Mnemonics 

**'B#'** |  **_Background Colour_**  
---|---  
  
**GUI Display/Printer _or_ Character Display**

**_Where:_**

_#_ |  Numeric colour code. Supported colour codes are:  
---|---  
**_#_** |  **Colour Name** |  |  **_#_** |  **Colour Name** |   
---|---|---|---|---|---  
0 |  Black (default for text mode device) |  |  8 |  Dark Gray |   
1 |  Dark Red |  |  9 |  Light Red |   
2 |  Dark Green |  |  : |  Light Green |   
3 |  Dark Yellow |  |  ; |  Light Yellow |   
4 |  Dark Blue |  |  < |  Light Blue |   
5 |  Dark Magenta |  |  = |  Light Magenta |   
6 |  Dark Cyan |  |  > |  Light Cyan |   
7 |  White (default for graphical device) |  |  ? |  Light Gray |   
  
##  Description

Use the format above to begin outputting a background colour to a device (i.e. **PRINT** , **INPUT** , etc.).

On a graphical device (Windows, PDF, Printers), the default background colour is White, whereas on text mode devices, the default background is Black. The 16 colour codes are in ASCII sequence from 0 to ?, which are similar to the same colour codes for **'F#'** Foreground Colour; however, the background colours have the dark/light colours flipped.

## See Also

**['F#' Foreground Colour](f_.md)**

##  Example

In this example, the prompt and user's response will both be in White text on a Blue background:

> input 'B4','white',"Please enter your name: ",NAME$,
