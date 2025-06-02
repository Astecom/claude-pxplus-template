# Mnemonics

**'*H'** |  **_Control Screen Colours_**  
---|---  
  
**Definition**

##  Format

**'*H'** =_colour_codes_ _$_  
  
**_Where:_**

_colour_codes_ _$_ |  String of 8 characters representing screen colours for program listings.  
---|---  
  
The following ASCII colour codes are supported:

|  **0** Black* |  **4** Blue |  **8** Dark Gray |  **<** Dark Blue  
---|---|---|---|---  
|  **1** Red |  **5** Magenta |  **9** Dark Red |  **=** Dark Magenta  
|  **2** Green |  **6** Cyan |  **:** Dark Green |  **>** Dark Cyan  
|  **3** Yellow |  **7** White |  **;** Dark Yellow |  **?** Dark Gray  
  
Each colour code position represents different elements:

1: |  Background colour for highlighting ***[...]** searches |  **0** to **7** for standard background colours  
---  
**8** to **?** for bright/foreground colours  
**R** for Reverse Video  
2: |  Colour for variables  
3: |  Colour for literals  
4: |  Colour for remarks  
5: |  Colour for error lines  
6: |  Colour for mnemonics  
7: |  Colour for statement numbers or labels  
8: |  Colour for operators (e.g. **\+ - ( ) * /**)  
  
For positions 2 to 8, the colour codes are **0** to **7** for standard foreground colours and **8** to **?** for dim/background colours. The command mode scanning feature uses Highlight=Yellow.  
  
##  Description

Use **'*H'** (_asterisk H_) to define colours in a displayed listing for the **LIST** directive and **LST( )** function. Default settings are shown in the example below.

## See Also

**[LIST List Program Statements](../directives/list.md)**  
**[LST( ) Return List Form of Statement](../functions/lst.md)  
['CS' Coloured Syntax](../parameters/cs.md)**

##  Example

mnemonic '*H'=";4:>1=;9"
