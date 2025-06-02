# Mnemonics 

**'SA'** |  **_Save Current Attributes_**  
---|---  
  
**Character Display/Printer**

##  Description

The **'SA'** mnemonic causes the system to save in an internal stack the current attributes of the device. These attributes include:

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



The current state is preserved on a five-entry stack.

To restore the last saved value, use the **'RA'** mnemonic.

## See Also

[**'RA' Restore Last Saved Attributes**](ra.md)
