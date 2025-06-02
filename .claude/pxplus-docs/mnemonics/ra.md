# Mnemonics 

**'RA'** |  **_Restore Last Saved Attributes_**  
---|---  
  
**Character Display/Printer**

##  Description

The **'RA'** mnemonic causes the system to restore the current attributes of the device from the top entry on the saved attribute stack. These attributes include:

  * Foreground and Background colours
  * Foreground/Background attribute
  * Reverse Video/Display attribute
  * Bold/Blink attribute
  * Underscore attribute
  * Echo mode for terminals
  * Transparent input/output modes
  * Scrolling mode
  * Uppercase input conversion
  * Current position (line/column)



The attribute values may be saved on the stack using the **'SA'** mnemonic.

## See Also

[**'SA' Save Current Attributes**](sa.md)
