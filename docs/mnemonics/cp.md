# Mnemonics

**'CP'** |  **_Condense Print for Screen_**  
---|---  
  
**GUI Display/Printer _or_ Character Display/Printer**

##  Description

Use **'CP'** to reduce the window and region size, and/or change the font to condensed print. To restore the screen and font to regular size, use the **'SP'** mnemonic.

In PxPlus, **'CP'** or **'SP'** affect only the data that follows the mnemonic.

#### **Note:**  
This is only available on display devices that support this functionality.

## See Also

**['SP' Standard Print](sp.md)**

##  Example

open (1)"LP"  
print (1)"NORMAL"+'CP'+"COMPRESSED"+'SP'+"NORMAL"  
close (1)

If this example was run in PxPlus, the word COMPRESSED would be in condensed print, and NORMAL would be in standard print.

(In other Business Basics, the font for the complete line is affected, and for this example would be in standard print.)
