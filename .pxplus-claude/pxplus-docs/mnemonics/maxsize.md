# Mnemonics

**'MAXSIZE' & 'MINSIZE'** |  **_Window Resize User Limit_**  
---|---  
  
**GUI Display**

##  Formats

1. |  _User's Maximum Setting:_ |  **'MAXSIZE'(**_width_**,**_height_**)**  
---|---|---  
2. |  _User's Minimum Setting:_ |  **'MINSIZE'(**_width_**,**_height_**)**  
  
**_Where:_**

_width,height_ |  Size limits on the user's permission to resize a window. Width in columns, height in lines. Numeric expression.  
---|---  
  
##  Description

Use **'MAXSIZE'** and **'MINSIZE'** to limit the maximum and minimum a window can be resized by the user when dragging the window's edge. These mnemonics only affect the window size that the user can set, not what the program sets as the size. They have no effect on the **'SIZE'** mnemonic.

#### **Note:**  
The values you use for **'MINSIZE'** must not exceed the values for **'MAXSIZE'**. By default, **'MINSIZE'** is set to 0,0 and **'MAXSIZE'** is set to the originally defined window size. If you set **'MAXSIZE'**(0,0), then the total defined window size is used.

## See Also

**['SIZE' Control Visual Size of Window](size.md)**

##  Example

In this example, the user is limited to resizing the scrollable dialogues display area by reducing it to a minimum of 5 columns by 5 lines or increasing it to a maximum of 40 columns by 15 lines:

> print 'dialogue'(1,1,80,25,"Title",'CS',opt="Z")  
>  print 'size'(30,10),  
>  print 'minsize'(5,5),  
>  print 'maxsize'(40,15)
