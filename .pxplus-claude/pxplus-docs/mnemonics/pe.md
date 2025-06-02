# Mnemonics  
  
**'PE'** |  **_Auxiliary Port Off_**  
---|---  
  
**Character Printer**

##  Description

**'PE'** contains the auxiliary port **_off sequence_** that tells the terminal to stop sending output to the attached printer and to send output back to the terminal's display area. This should be defined in the device driver for the terminal type and then retrieved and set on the printer channel after opening the printer.

To set the auxiliary port **_on sequence_** , use the **'PS'** mnemonic.

## See Also

**['PS' Auxiliary Port On](ps.md)**
