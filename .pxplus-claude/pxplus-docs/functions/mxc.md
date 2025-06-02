# System Functions

**MXC( ) / MXL( )** |  **_Return Maximum Column/Line_**  
---|---  
  
##  Formats

1. |  _Return Maximum Columns:_ |  **MXC(**_chan_[,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Return Maximum Lines:_ |  **MXL(**_chan_[,**ERR=**_stmtref_]**)**  
  
**_Where_** _:_

_chan_ |  Channel or logical file number of the file to reference, typically 0 (zero) for the terminal. Use an integer for a device channel (e.g. a printer). Numeric expression.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Integer, zero-based, maximum columns/lines allowed for file/device.

##  Description

The **MXC( )** function returns an integer reporting the zero-based maximum number of columns allowed for a file or device. **MXL( )** returns an integer reporting the zero-based maximum number of lines allowed for your given file or device. Use these functions as a quick means to determine the size of the current display window on a screen.

#### **Note:**  
The functions **MXC( )** and **MXL( )** return the maximum available column and line values for the channel based on the current default settings for paper size, printable area, offset, margin, font and pitch.

##  Example

On a terminal where MXC(0)=79 and MXL(0)=24 with LEN(X$)=15:

> X$="THIS IS A TITLE"  
>  print @(mxc(0)-len(X$)+1,0),X$ ! Right justified on line 1  
>  print @(0,mxl(0)),"F1-Help F4-Quit", ! Left justified on bottom line

The next example returns the maximum column and line values for a given printer (ASIS is the last printer opened on channel 30). The values are zero-based; i.e. the **MXC( )** value returned is 79 for 0-79 = 80 columns:

> open input (30)"*WINPRT*;ASIS"  
>  C=mxc(30)+1 ! For this printer mxc(30) returns 79, C=80 (0-79)  
>  L=mxl(30)+1 ! For this printer mxl(30) returns 55, L=56 (0-55)  
>  close (30)
