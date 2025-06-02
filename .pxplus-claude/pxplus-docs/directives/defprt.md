# Directives

**DEFPRT** |  **_Define as Printer_**  
---|---  
  
##  Format

**DEFPRT (**_chan_**)**_col,ln_  
  
**_Where:_**

_chan_ |  Logical file number or channel of the file to define as a printer.  
---|---  
_col_ |  Default maximum number of columns supported by the printer. This must be an integer value, range 0 to 255.  
_ln_ |  Default maximum number of lines supported by the printer. This must be an integer value, range 0 to 255.  
  
##  Description

Use the **DEFPRT** directive to specify that a given channel refers to a printer. You can specify the default maximum lines and columns supported by the printer.

If you do not designate the file as a printer, PxPlus does not apply printer mnemonics, and the values for the **MXC( )** and **MXL( )** functions are not set.

You can use the **DEFPRT** directive for TCP files.

##  See Also

**[MNEMONIC Define File Command Sequence](mnemonic.md)**

##  Example

defprt (lfo)80,25
