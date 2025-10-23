# Mnemonics

**Dynamic Information in Mnemonics**|   
---|---  
  
Some mnemonics require dynamic information to generate specific output sequences (e.g. the line and column number in the **'[@@](~~.md)'** mnemonic). Use the format below to define a mnemonic that contains dynamic information in its output sequence. You must identify a variable using a leading **\**  _(backslash)_ followed by the one-character identifier, optional modifier, and format code.

_Define Variable:_**=ESC+"[**_\id_char_**{**_modifier_**}**_fmt_code_**"**  
  
**_Where_**** _:_**

_\id_char_ |  Identifier for the variable. Include the backslash in the syntax. Valid identifiers include:  
---|---  
|  **\b** |  Bottom margin of window/scroll region  
|  **\h** |  Height of window/scroll region  
|  **\l** |  (Lowercase L) Left margin of window/scroll region  
|  **\r** |  Right margin of window/scroll region  
|  **\t** |  Top margin of window/scroll region  
|  **\w** |  Width of window/scroll region  
|  **\A** |  Current attributes in binary  
|  **\B** |  Background colour index  
|  **\C** |  Current column  
|  **\F** |  Foreground colour index  
|  **\L** |  Current line  
_  
modifier_ |    
Optional modifier(s) of the variable's value. If you include these operators, insert them between the variable and the output _fmt_code_. You can include one or more of the modifiers. The list below shows the valid modifiers and their associated functions:  
|  **+** |  _(Plus sign)_ |  Add the value of the next byte  
|  **-** |  _(Minus sign)_ |  Subtract the value of the byte  
|  **&** |  _(Ampersand)_ |  AND the value of the next byte  
|  **^** |  _(Caret)_ |  XOR the value of the next byte  
|  **|** |  _(Pipe)_ |  OR the value of the next byte  
_  
fmt_code_ |    
Mandatory output format code following each variable. Valid format codes include:  
|  **** |  **2** |  Output is two-byte ASCII  
|  **** |  **3** |  Output is three-byte ASCII  
|  **** |  **a** |  Output is ASCII plain text number (base 0)  
|  **** |  **b** |  Output is single byte binary (base 0)  
|  **** |  **A** |  Output is ASCII plain text number (base 1)  
|  **** |  **B** |  Output is single**-** byte binary (base 0x20)  
|  **** |  **T** |  Table output. Following T, the next byte must contain the number of bytes in the table. The table must follow that in the output sequence. If the number of bytes exceeds table length, no output is generated.
