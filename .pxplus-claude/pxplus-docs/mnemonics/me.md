# Mnemonics

**'ME'** |  **_Begin Edit Mode_**  
---|---  
  
**Editing _or_ Behaviour**

##  Description

Use '**ME** ' to begin Edit mode. In Edit mode, any keystroke or negative **CTL** event not used by the input (e.g. Up/Down arrows) will be returned to your program in the **CTL** variable instead of being rejected.

PxPlus uses built-in Edit functions to format and process all keyboard input but will terminate input and returns values to your program when it encounters keystrokes or negative **CTL** events the input editor does not handle.

To end Edit mode, use the **'MN'** mnemonic.

## See Also

**[CTL Control Code: Key to End Input](../variables/ctl.md)  
['MN' End Edit Mode](mn.md)**

##  Example

input "Enter Amount:",'ME',AMNT:"$###,##0",'MN'
