# Directives 

**VIDEO_PALETTE** |  **_Control Video Colours_**  
---|---  
  
##  Formats

1. |  _Read Palette_ _:_ |  **VIDEO_PALETTE READ** _var_ _$_[,**ERR=**_stmtref_]  
---|---|---  
2. |  _Change Palette_ _:_ |  **VIDEO_PALETTE** _string$_[,**ERR=**_stmtref_]  
3. |  _Read Palette Indexed Table_ _:_ |  **VIDEO_PALETTE INDEXED READ** _var_ _$_[,**ERR=**_stmtref_]  
4. |  _Change Palette Indexed Table_ _:_ |  **VIDEO_PALETTE INDEXED** _string$_[,**ERR=**_stmtref_]  
  
**_Where_**** _:_**

_string$_ |  String expression containing the new **VIDEO_PALETTE** or **INDEXED** table settings to be used.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_var_ _$_ |  String variable to receive the current **VIDEO_PALETTE** or **INDEXED** table settings.  
  
##  Description

PxPlus supplies a 16-colour video palette with direct access to the standard 16 colours provided by Windows. Use the **VIDEO_PALETTE** directive to modify the 16-colour video palette in PxPlus.

##  Format 1

**_Read Palette_**

**VIDEO_PALETTE READ** _var_ _$_[,**ERR=**_stmtref_]

Use this format to read the current settings of the video palette. The video palette consists of a string of 16 3-byte entries, where each byte defines the intensity of the colours Red, Green and Blue.

**_Example:_**

> The 3-byte entry for bright (foreground) green is $00FF00$, magenta is $FF00FF$, etc.

**VIDEO_PALETTE READ X$** will return the following defaults in a single string:

> $000000 FF0000 00FF00 FFFF00$  
>  $0000FF FF00FF 00FFFF FFFFFF$  
>  $808080 800000 008000 808000$  
>  $000080 800080 008080 C0C0C0$

The string is only punctuated by spaces to show you the 16 3-byte entries.

##  Format 2

**_Change Palette_**

**VIDEO_PALETTE** _string$_[,**ERR=**_stmtref_]

Use this format to change/reset the video palette, as in **VIDEO_PALETTE** _X$_ where  _X$_ contains your new values.

#### **Note:**  
Changing the palette may not work on all systems. This depends on the colour capabilities of the PC hardware.

##  Format 3

**_Read Palette Indexed Table_**

**VIDEO_PALETTE INDEXED READ** _var_ _$_**[,ERR=**_stmtref_**]**

There is also an indexed table to reference the video palette. This index table consists of 48 entries: six 8-byte tables, where each byte represents an index into the video palette:

> The **_first_** 8 bytes represent the standard foreground colours.

> The **_second_** 8 bytes represent the colours used when the **'SB'** mnemonic is in effect.

> The **_third_** 8 bytes represent the colours used when the **'BB'** mnemonic is in effect.

> The **_fourth_** 8 bytes represent the colours used when both **'BB'** and **'SB'** are in effect.

> The **_fifth_** 8 bytes represent the "Background" colours.

> The **_sixth_** 8 bytes represent the colours used when **'BR'** and **'SB'** are in effect.

Use the **READ** format to return the current settings in the index table, as in **VIDEO_PALLETTE READ INDEXED**  _X$_.

See [**'BB'**](../mnemonics/bb.md), [**'BR'**](../mnemonics/br.md) and [**'SB'**](../mnemonics/sb.md) mnemonics.

##  Format 4

**_Change Palette Indexed Table_**

**VIDEO_PALETTE INDEXED** _string$_[,**ERR=**_stmtref_]

Use this format to change/reset the video palette index table, as in **VIDEO_PALLETTE INDEXED** _X$_ where _X$_ contains your new values.
