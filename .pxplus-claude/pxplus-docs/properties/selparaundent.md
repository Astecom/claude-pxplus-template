# Control Object Properties

**SelParaUndent** |  **_RTF Word Processor PARAGRAPH UNDENT Setting_**  
---|---  
  
## Description

RTF word processor PARAGRAPH UNDENT setting

This property reflects the amount of indentation to be eliminated from the contents of the currently selected paragraph(s) in a RTF word processor multi-line style control. If no paragraph is currently selected, the current text entry will be affected. The indentation is measured in TWIPS, which is 1/1440 of an inch (or 1/20th of a POINT). To create an indentation of 1/2 an inch, use 720.

The Undentation only affects the body of the paragraph that follows the first line.

**Example:** If you wanted to indent the first line by 1/2 an inch yet leave the rest of the paragraph un-indented, you would set both the 'Indent and 'ParaUndent properties to 720.

_(The SelParaUndent property was added in PxPlus v7.10.)_

## Default

0

## Used By 

**MULTI_LINE _(RTF word processing style)_**
