# Mnemonics

**'BM'** |  **_Begin Output of Markup Files_**  
---|---  
  
**Behaviour**

##  Description

Use **'BM'** to begin output of markup files containing embedded mnemonics.

For instance, in the PxPlus ***VIEWER*** , **'BM'** sends all data directly to the print file without interpretation in tokenized format (**_except_** for **'FF'** , **'CR'** and **'LF'** mnemonics, which are output as 0C, 0D and 0A respectively). This allows you to send print jobs to any Windows printer.

To end markup, use the **'EM'** mnemonic.

## See Also

**['EM' End Output Markup Mode](em.md)  
['FF' Form Feed](ff.md)  
['CR' Carriage Return](cr.md)  
['LF' Line Feed (Advance Line)](lf.md)**
