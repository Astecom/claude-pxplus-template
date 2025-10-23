# Mnemonics 

**'MP'** |  **_Parallel Printer Mode_**  
---|---  
  
**GUI Display/Printer _or_ Character Display/Printer**

##  Format

**PRINT 'MP'**

##  Description

The **'MP'** mnemonic, when sent to a printer, causes the system to switch to Parallel print mode (often referred to as Line printer mode) from Serial print mode.

In Serial print mode, all data printed is directly sent to the printer and printed immediately. In Parallel/Line print mode, the system buffers each print line internally and only the resultant print line is sent to the printer.

Overprinting of data is not possible when in Parallel/Line print mode as any attempt to reposition the output earlier in the print line merely causes the system to replace the data in the buffer. In Serial print mode, the printer can reposition itself over prior data, thus allowing for overprinting.

## See Also

[**'MS' Serial Printer Mode**](ms.md)**  
** [**'SP' Set Printer Default**](../parameters/sp.md)
