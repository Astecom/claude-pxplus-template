# Mnemonics

**'SIZE'** |  **_Control Visual Size of Window_**  
---|---  
  
**GUI Display**

##  Format

**'SIZE'(**_width_**,**_height_**)**  
  
**_Where:_**

_width,height_ |  Window's width in columns and height in lines. Numeric expression.  
---|---  
  
##  Description

Use **'SIZE'** to control the visual size of a window.

#### **Note:**  
There is no effect on the **'SIZE'** mnemonic when you use **'MAXSIZE'** and **'MINSIZE'** to control the window size that the user can set.

## See Also

**['MAXSIZE' & 'MINSIZE' Window Resize User Limit](maxsize.md)**

##  Example

To resize a dynamic window to the columns and lines specified:

> print 'size'(40,10)
