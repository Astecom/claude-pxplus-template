# System Parameters

**'EO'** |  **_Embedded 'EO' Mnemonics_**  
---|---  
  
##  Description

Sets handling of embedded **'EO'** mnemonics (to end output transparency).

When enabled, PxPlus scans strings following a **'BO'** mnemonic for embedded **ESC+"EO"**. Normally, when output transparency is on, PxPlus will not scan the output data sent; thus, the **'EO** ' mnemonic cannot be embedded in the output string.

This system parameter simplifies the conversion to PxPlus from other languages.

#### **Note:**  
When **'EO'** is **_On_** , any **ESC+"EO"** sequence embedded in the data will terminate output transparency mode; this could cause some binary command sequences to printers to inadvertently end output transparency. It is good practice **_not_** to use this parameter and explicitly output the 'EO' mnemonic in a **PRINT** directive.

##  Default

**_Off_** \- The strings are not checked for embedded **'EO'** mnemonics.

## See Also

**['BO' Begin Output Transparency](../mnemonics/bo.md)  
[PRINT Display Information](../directives/print.md)**

##  Example

The example below shows a typical use of the **'BO'** (begin) and**'EO'** (end) output transparency mnemonics. The **'EO'** mnemonic is not embedded in the string; therefore, PxPlus will automatically recognize it and terminate a **'BO'** mnemonic:

> print (chan)'BO',"some sequence",'EO'

In the next example, the **'EO'** mnemonic is embedded in the string (appended using the **+**  _plus sign_):

> print (chan)'BO'+"some sequence"+'EO'

In this case, if the **'EO'** system parameter is **_Off_** (_default_), the embedded **'EO'** mnemonic is ignored. When the **'EO'** parameter is **_On_** , PxPlus recognizes the embedded mnemonic and ends output transparency.
