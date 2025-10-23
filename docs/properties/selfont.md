# Control Object Properties

**SelFont $** |  **_RTF Word Processor FONT Setting_**  
---|---  
  
## Description

RTF word processor FONT setting

This property reflects the Font to be used for the currently selected text in a RTF word processor multi-line style control. If no text is currently selected, the current text entry will be affected.

**Example:** To set the font to Arial, 1.5 times normal size, and Bold, the format would be: xxx'Font$="Arial,1.5,B" (comma-separated).

_(The SelFont$ property was added in PxPlus v7.10.)_

## See Also

[**'FONT' Mnemonic**](../mnemonics/font.md)

## Default

The default setting comes from the control's default Font specification.

## Used By 

**MULTI_LINE _(RTF word processing style)_**
