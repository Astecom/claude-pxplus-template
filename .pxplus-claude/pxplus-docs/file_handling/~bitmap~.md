# Special File Handling  
  
***BITMAP*** |  **_Virtual Bitmap_**  
---|---  
  
##  Format

**OPEN**  _(chan)_ "***BITMAP*** "**[** ;_options_**]**

**_Where:_******

_chan_ |  Channel or logical file number (e.g. OPEN (1)"*BITMAP*").  
---|---  
_options_ |  The following options are supported following ***BITMAP*** : |  **DPI=**_nnn_ |  Image resolution in dots per inch. The value given must be greater than 0. If not specified, the default is 120.  
---|---  
**LENGTH=**_nnn_**.**_nn_ |  Image height in inches (to 2 decimal places). If not specified, the default is 11. The length can also be suffixed by **_mm_** (indicating millimeters), **_in_** (indicating inches) or **_px_** (indicating pixels). _(The ability to indicate pixels was added in PxPlus 2019.)_  
**ORIENTATION={LANDSCAPE | PORTRAIT}** |  Swaps the width and length (rotates the image). If not specified, the default is **PORTRAIT**.  
**WIDTH=**_nnn_**.**_nn_ |  Image width in inches (to 2 decimal places). If not specified, the default is 8.5. The width can also be suffixed by **_mm_** (indicating millimeters), **_in_** (indicating inches) or **_px_** (indicating pixels). _(The ability to indicate pixels was added in PxPlus 2019.)_  
***BITMAP*** |  Keyword, not case-sensitive. Special interface, enclosed in quotation marks within the **[OPEN](../directives/open.md)** directive. (Include *****  _asterisks_ in syntax)  
  
##  Description

#### **Note:**  
***BITMAP*** is supported for use in **_Windows only_**.

***BITMAP*** is a special file for generating a 24-bit colour bitmap image in memory. You can open this file and PRINT an image to it, just as you would using **[*WINPRT*](~winprt~.md)**. The generated image can then be printed either to the screen or to the printer using the **['PICTURE'](../mnemonics/picture.md)** mnemonic.

#### **Warning!**  
24-bit colour at high DPI (resolution) can use very large amounts of memory. If there are insufficient operating system resources available, the result will be an Error #15: Operating system command failed.

##  See Also

**['PICTURE' Define/Draw Picture](../mnemonics/picture.md)**

##  Example

begin ;  
open (12)"*bitmap*";  
print 'CS',  
print (12)'rectangle'(@x(1),@y(1),@x(10),@y(5)),  
print (12)'text'(@x(12),@y(2),"Howdy"),  
print 'picture'(@x(40),@y(0),@x(79),@y(24),"#12",0),

****

****

****
