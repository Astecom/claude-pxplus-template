# Mnemonics

**'MN'** |  **_End Edit Mode_**  
---|---  
  
**Editing _or_ Behaviour**

##  Description

Use **'MN'** to end Edit mode. This is the opposite of the **'ME'** mnemonic.

After use of the **'MN'** mnemonic, all keystrokes or negative **CTL** events not used by the input will be thrown away and **_not_** returned to the program.

## See Also

**['ME' Begin Edit Mode](me.md)**

##  Example

0090 obtain (0,siz=1,err=0090)@(0,0),'cursor'("off"),'ME',IN_VAR$,'MN'
