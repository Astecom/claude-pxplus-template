# Mnemonics 

**'EL'** |  **_Start Edit Key Load/End VFU Load_**  
---|---  
  
The **'EL'** mnemonic has two uses depending on the target device:

> If the target device is a terminal, it is used to initiate the loading of the EDIT keys.

> If the target is a printer, it is used to end the loading of VFU.

## Terminal Device - Load Edit Keys

Use the '**EL** ' mnemonic to start loading the keyboard Edit keys. This feature is included for compatibility with other languages.

This mnemonic will allow you to change the characters that will be returned to the application when any of the following edit keys are pressed:

**Hex Key Code** |  **Edit Key**  
---|---  
$00$ |  Left arrow  
$01$ |  Right arrow  
$02$ |  Up arrow  
$03$ |  Down arrow  
$04$ |  HOME key  
$05$ |  END key  
$06$ |  Page Up key  
$07$ |  Page Down key  
$08$ |  Insert key  
$09$ |  Delete key  
  
The **'EL'** mnemonic is generally followed by a single character code indicating the type of function to be performed, followed by the one or more parameters encoded in the print sequence:

**'EL' Sequence** |  **Description**  
---|---  
"0" <keycode> |  Drops the definition for the specified key.  
"1" |  Drops all key definitions.  
"2" <keycode><len><data...> |  Sets the value returned for the specific key code to the string defined in <data...> whose length is in the byte <len>.  
"3" <cnt>  
<keycode><len><data..>  
<keycode><len><data..>.. |  Sets the value of multiple keys in a single load.  
"4" <keycode> |  Places the length byte and data associated with the key code into the input buffer.  
"5" |  Places all defined key code values in the input buffer in the same format as used on "3" above.  
"8" <keycode> |  Places just the data portion of the specified key into the input buffer.  
  
**_Example:_**

A typical command to change the function key would be:

> print 'EL',"2",$06$,$01$,$88$,

This would cause the Page Up key to place $88$ into the input buffer. See [**DEFCTL**](../directives/defctl.md) directive.

#### **Note:**  
PxPlus utilities do not expect function and editing keys to be loaded with other values from the use of '**FL** ' or '**EL** '. Issue a PRINT 'FL',"1",'EL',"1" to reset loaded function or editing keys just prior to running any of the PxPlus utilities.

## Character Printer - End VFU Load

Use **'EL'** to end VFU load. The data following **'SL'** (from **'SL'** up to an **'EL'**) defines the VFU channels. The total number of characters defines the page length; the characters themselves represent the channels that can be slewed to. The first character must be a 1 (channel 1).

## See Also

[**'FL' Start Function Key Load**](fl.md)  
[**'SL' Start VFU Load**](sl.md)  
**['S#' Slew to Channel](s_.md)**  
**['VT' Slew to S6, Vertical Tab](vt.md)**
