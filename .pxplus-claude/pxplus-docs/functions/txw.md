# System Functions

**TXW( )** |  **_Text Width_**  
---|---  
  
##  Format

**TXW(**_string$_[,_chan_][,_ctrlopt_]**)**

**_Where:_**

_chan_ |  Channel or logical file number of the device.  
---|---  
_ctrlopt_ |  Control options. Supported options for **TXW( )** include: |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**FNT=** "_font_ ,_size_**[**_,attr_**]** " |  Font name, size, properties  
_string$_ |  String expression.  
  
##  Returns

Text width in graphical units (i.e. **@X(**_col_**)** and **@Y(**_line_**)** values).

#### **Note:**  
For use in graphics mode along with [**TXH( ) Text Height**](txh.md).

##  Description

The **TXW( )** function returns text width in graphical units for the given _string$_. If _chan_ is omitted, PxPlus assumes it is dealing with the main window. If the font selected indicates that the **&** (_ampersand_) character is used to denote underscored characters, **TXW( )** does not include the **&** character during its calculations.

##  Example

If you want to create a window based on the length of a message, use **TXW( )** to determine the size of the window/dialogue to create:

> LINE1$="Line 1."  
>  LINE2$="Line 2.."  
>  LINE3$="This is Line 3..."  
>  W1=txw(LINE1$,fnt="MS Sans Serif")  
>  W2=txw(LINE2$,fnt="MS Sans Serif")  
>  W3=txw(LINE3$,fnt="MS Sans Serif")  
>  W=max(W1,W2,W3)  
>  W=int(W/16)+4 ! Allow for up to 4 extra white spaces  
>  print 'dialogue'(C,L,W,5,TITLE$),'SR','CS',  
>  print 'font'("MS Sans Serif"),  
>  print 'text'(@x(2),@y(1),LINE1$),  
>  print 'text'(@x(2),@y(2),LINE2$),  
>  print 'text'(@x(2),@y(3),LINE3$),  
> msgbox "Press OK to continue."

#### **Note:**  
The logical width is based on logical pixel 1/16ths the size of a single column width.
