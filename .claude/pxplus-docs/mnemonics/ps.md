# Mnemonics

**'PS'** |  **_Auxiliary Port On_**  
---|---  
  
**Character Printer**

##  Description

**'PS'** contains the auxiliary port **_on sequence_** that tells the terminal to route incoming characters to the auxiliary port instead of the terminal's display area.

This sequence remains active until an **_off sequence_** is encountered via the **'PE'** mnemonic. This should be defined in the device driver for the terminal type and then retrieved and set on the printer channel.

## See Also

**['PE' Auxiliary Port Off](pe.md)**
