# System Functions

**TXH( )** |  **_Text Height_**  
---|---  
  
##  Format

**TXH(**_string$_[,_chan_][,_ctrlopt_]**)**  
  
**_Where:_**

_chan_ |  Channel or logical file number of the device.  
---|---  
_ctrlopt_ |  Control options. Supported options for **TXH( )** include: |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**FNT=** "_font_ ,_size_**[**_,attr_**]** " |  Font name, size, properties  
**SIZ=** "_wrapwidth_ " |  Word wrap to maximum width  
_string$_ |  String expression.  
  
##  Returns

Text height in graphical units (i.e. **@X(**_col_**)** and **@Y(**_line_**)** values).

#### **Note:**  
For use in graphics mode along with [**TXW( ) Text Width**](txw.md).

##  Description

The **TXH( )** function returns text height in graphical units for the given _string$_. By default, if no **SIZ=** is specified, this function returns the height of a single line of text in either the font specified or the current font on the device specified by _chan_.

If you set a size, **TXH( )** returns the height required to print your given text with no line exceeding the size (with word wrap enabled). The **SIZ=** option can be used to determine the height of the text. If the font selected indicates that the **&** (_ampersand_) character is used to denote underscored characters, **TXH( )** does not include the **&** character during its calculations.

If _chan_ is omitted, the system assumes it is dealing with the main window.

##  Example

print 'CS'  
R$="Hello World"  
W=txw(R$) ! Get width of text  
if W>@x(40) \  
then W=@x(40) ! Force <= 40 columns  
H=txh(R$,siz=W) ! Make it fit in width  
print 'text'(@x(20),@y(5),@x(20)+W,@y(5)+H,R$)
