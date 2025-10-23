# Mnemonics 

**'MS'** |  **_Serial Printer Mode_**  
---|---  
  
**GUI Display/Printer _or_ Character Display/Printer**

##  Format

**PRINT 'MS'**

##  Description

The **'MS'** mnemonic, when sent to a printer, causes the system to switch to Serial print mode from Parallel print mode (often referred to as Line printer mode).

In Serial print mode, all data printed is directly sent to the printer and printed immediately. In Parallel/Line print mode, the system buffers each print line internally and only the resultant print line is sent to the printer.

Overprinting of data is not possible when in Parallel/Line print mode as any attempt to reposition the output earlier in the print line merely causes the system to replace the data in the buffer. In Serial print mode, the printer can reposition itself over prior data, thus allowing for overprinting.

## See Also

[**'MP' Parallel Printer Mode**](mp.md)**  
** [**'SP' Set Printer Default**](../parameters/sp.md)
