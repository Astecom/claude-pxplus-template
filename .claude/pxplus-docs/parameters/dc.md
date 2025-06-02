# System Parameters

**'DC'** |  **_Destructive Cursor_**  
---|---  
  
##  Description

Sets destructive cursor. (Moving from left to right, replaces intervening characters with spaces up to the new cursor position.)

##  Default

**_Off_** \- The cursor jumps over the intervening characters.

##  Example

> set_param 'DC'=0  
>  print @(15),"B",@(10),"A",@(20),"C"

With **'DC'_Off_** , the screen output is "A B C". The cursor jumps first to column 15 and prints the B, jumps to column 10 and prints the A, then finally jumps to column 20 and prints the C.

> set_param 'DC'  
>  print @(15),"B",@(10),"A",@(20),"C"

With **'DC'_On_** , PxPlus uses a destructive cursor (line print mode, as in BBx and some MAI systems). The preceding example would result in " A C" because the output driver simply issues spaces when advancing on the same line. With **'DC'_On_** , after printing the B and A, the driver uses 9 spaces to position itself at column 20 to print the C. The destructive cursor overwrites the B with the space.

BBx is a registered trademark of BASIS International Ltd.
