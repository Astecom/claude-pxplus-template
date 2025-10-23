# Mnemonics 

**'FL'** |  **_Start Function Key Load_**  
---|---  
  
**Editing _or_ Behaviour**

##  Description

Use **'FL'** to start loading function keys. This feature is included for compatibility with other languages. This mnemonic will allow you to change the characters that will be returned to the application when a function key is pressed.

The **'FL'** mnemonic is generally followed by a single character code indicating the type of function to be performed, usually followed by the <keycode> (the function key number as a binary character), and one or more parameters encoded in the print sequence:

**'FL' Sequence** |  **Description**  
---|---  
"0" <keycode> |  Drops the definition for the specified key.  
"1" |  Drops all key definitions.  
"2" <keycode><len><data...> |  Sets the value returned for the specific key code to the string defined in <data...> whose length is in the byte <len>.  
"3" <cnt>  
<keycode><len><data..>  
<keycode><len><data..>.. |  Sets the value of multiple keys in a single load.  
"4" <keycode> |  Places the length byte and data associated with the <keycode> into the input buffer.  
"5" |  Places all defined key code values in the input buffer in the same format as used on "3" above.  
"8" <keycode> |  Places just the data portion of the specified key into the input buffer.  
  
**_Example:_**

A typical command to change the function key would be:

> print 'FL',"2",chr(2),$01$,$88$,

This would cause the F3 key to place $88$ into the input buffer.

The <keycode> contains the function key number base zero; thus, F1 is CHR(0), F2 is CHR(1), etc.

#### **Note:**  
PxPlus utilities do not expect function and editing keys to be loaded with other values from the use of '**FL** ' or '**EL** '. Issue a PRINT 'FL',"1",'EL',"1" to reset loaded function or editing keys just prior to running any of the PxPlus utilities.

## See Also

[**'EL' Start Edit Key Load/End VFU Load**](el.md)  
[**DEFCTL Define/Redefine CTL Values**](../directives/defctl.md)
