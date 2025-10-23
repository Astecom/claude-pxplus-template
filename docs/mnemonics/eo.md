# Mnemonics

**'EO'** |  **_End Output Transparency_**  
---|---  
  
**Behaviour**

##  Description

Use **'EO'** to end output transparency mode. This is the opposite of the **'BO'** mnemonic.

If you want to send **Esc 'EO'** as a mnemonic, you must use it as a stand-alone mnemonic:

**_Example:_**

> print 'BO',X$,'EO'

To send **Esc 'EO'** as part of your data, embed it in an expression instead of using it as a stand-alone. Then, PxPlus evaluates **'EO'** as an embedded **Esc 'EO'** and sends it without interpretation to the device/printer:

**_Example:_**

> print 'BO'+X$+'EO'

## See Also

**['BO' Begin Output Transparency](bo.md)**
