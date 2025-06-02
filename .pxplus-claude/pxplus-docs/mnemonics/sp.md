# Mnemonics 

**'SP'** |  **_Standard Print_**  
---|---  
  
**GUI Display/Printer _or_ Character Display/Printer**

##  Description

Use **'SP'** to switch to standard print from **'CP'** (condensed print). In PxPlus, **'CP'** or **'SP'** affects only the data that follows the mnemonic. On GUI devices, the **'SP'** mnemonic will reset to standard printing size.

## See Also

[**'CP' Condense Print for Screen**](cp.md)

##  Example

open (1)"LP"  
print (1)"NORMAL"+'CP'+"COMPRESSED"+'SP'+"NORMAL"  
close (1)

If this example was run in PxPlus, the word COMPRESSED would be in condensed print and the word NORMAL would be in standard print. (In some other Business Basics, the font for the complete line is affected, and for this example, all text would be in standard print.)
