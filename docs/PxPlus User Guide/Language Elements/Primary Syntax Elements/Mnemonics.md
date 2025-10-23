# Primary Syntax Elements 

**Mnemonics** |  **__**  
---|---  
  
Mnemonics are special control sequences for output to a display device or printer. Mnemonic instructions are inserted within a**PRINT** or**INPUT** statement and are specific to the channel on which they are defined. The language provides an extensive list of predefined mnemonics; however, additional two-character mnemonics may be created via the **[MNEMONIC](../../../directives/mnemonic.md)** directive.

Below is a list of some commonly used mnemonics. For a list of all mnemonics, see **[Mnemonics](../../../mnemonics.md)**.

**['BR'](../../../mnemonics/br.md)** |  Begin reverse video mode.  
---|---  
**'[CE'](../../../mnemonics/ce.md)** |  Clear from cursor to end of screen.  
**['CH'](../../../mnemonics/ch.md)** |  Position cursor at home; i.e. @(0,0).  
**'[CL'](../../../mnemonics/cl.md)** |  Clear from cursor to end of line.  
**'[CS'](../../../mnemonics/cs.md)** |  Clear screen.  
**['DEFAULT' or 'DF'](../../../mnemonics/default.md)** |  Set current attributes as defaults (color, foreground/background, etc.).  
**'[FF'](../../../mnemonics/ff.md)** |  Advance page (issue form feed).  
**'[LF'](../../../mnemonics/lf.md)** |  Advance one line and return to column 0 (line feed).  
**['RED' & '_RED'](../../../mnemonics/red.md)** |  Input/output will be in red foreground or background (see the list of **[Mnemonics](../../../mnemonics.md)** for other colors).  
**'[RM'](../../../mnemonics/rm.md)** |  Reset to default attributes.  
  
## See Also

**[Mnemonic Categories](../../../mnemonics/mnemonic_categories.md)**

For examples of how mnemonics can be used for print and display output, see:

**[Controlling Output](../../Programming%20Constructs/Basic%20Input%20and%20Output/Output%20Statements.htm#output)**  
**[Interface Windows](../../Graphical%20User%20Interfaces/Interface%20Windows/Overview.md)**  
**[Display Objects](../../Graphical%20User%20Interfaces/Display%20Objects/Overview.md)**  
**[Printing](../../Printing/Introduction.md)**  
**[Device Drivers](../../Appendix%20of%20Miscellaneous%20Topics/Device%20Drivers/Overview.md)**
