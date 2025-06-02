# System Functions

**@X( ) / @Y( )** |  **_Convert X/Y Coordinates_**  
---|---  
  
##  Formats

1\. _Return Column Position_: |  **@X(**_col_[,_chan_][,**ERR=**_stmtref_]**)**  
---|---  
2\. _Return Line Position_: |  **@Y(**_lin_ e[,_chan_][,**ERR=**_stmtref_]**)**  
3\. _Return Pixel Position_: |  **@X(** =_pixel_[,**ERR=**_stmtref_]**)**  
_or_ |  **@Y(** =_pixel_[,**ERR=**_stmtref_]**)**  
  
**_Where_** _:_

_chan_ |  Channel or logical file number of the device or file.  
---|---  
_col_ |  Standard print position column number. Numeric expression.  
_line_ |  Standard print position line number. Numeric expression.  
_pixel_ |  Absolute pixel position desired. Numeric expression.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Integer value. When used with _col_ or _line_ values, returns the logical graphical unit for the position requested. When used with _pixel_ , returns graphical unit value representing the pixel.

##  Formats 1 and 2

**_Logical Addressing_**

Use these functions to convert column and line number addresses for graphics output into x- and y-axis coordinates in graphical units. The values returned are integers.

**_Example:_**

In this example, the functions return 16 graphical units as the coordinate for column 1 and 60 for line 2:

> A=1,B=2  
>  print @x(A),@y(B)  
>   
>  ->run  
>  16 60

These functions take the column/line numbers and, based on your given channel, return the corresponding graphics coordinates. Numeric variables, fractions and negative numbers are allowed as column and line values.

If you do not include a channel, the default is 0 (zero), the terminal/console. If you use either of these functions in a print statement, the output will go to the channel or logical file number you specify in the **PRINT** directive; i.e. to a terminal, file or printer.

##  Format 3

**_Direct Pixel Addressing_**

These functions convert an absolute pixel address into logical graphic units. Technically, if the absolute value of a graphical unit is >10000, it represents an actual pixel address; thus, @X(=100) will return 10100, @X(=-240) returns -10240.

While technically you could compute the graphical units directly in the application, these functions are provided to allow for future expansion as the resolution of output devices increase. There is no difference between **@X(=** or **@Y(=**. They both return the same values.

_(The ability to use direct pixel addressing was added in PxPlus v7.00, build 9163.)_

##  Example

print @(5,5),"CUSTOMER LISTING",  
print 'fill'(0,0),'rectangle'(@x(4),@y(5),@x(22),@y(6)),

When this example is run, the words "CUSTOMER LISTING" are displayed on the screen, outlined by a rectangle.

The **@X(**_col_**)** values start the rectangle at the graphical equivalent of column 4 (one column before the text) and end it one column after the text.

The **@Y(**_line_**)** values are equivalent to lines 5 and 6, and they define the rectangle as 1 line high starting at the top of line 5.
