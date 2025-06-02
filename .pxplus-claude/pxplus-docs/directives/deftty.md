# Directives

**DEFTTY** |  **_Define Terminal Size_**  
---|---  
  
##  Format

**DEFTTY** [**(**_chan_**)**]_col,ln_  
  
**_Where:_**

_chan_ |  Channel or logical file number of the file to define as a terminal.  
---|---  
_col_ |  Default maximum number of columns for the terminal. This must be an integer value, range 0 to 255.  
_ln_ |  Default maximum number of lines for the terminal. This must be an integer value, range 0 to 255.  
  
#### **Note:**  
The number of lines has an additional limit based on a maximum of 20,000 characters per window (i.e. the maximum number of lines is 20,000/_col_).

##  Description

Use the **DEFTTY** directive to designate that the logical file number refers to a terminal. You can specify the default maximum lines and columns supported by the terminal. If you do not designate the file as a terminal, Windows and other mnemonics will not be supported.

##  See Also

**[MNEMONIC Define File Command Sequence](mnemonic.md)**

##  Examples

deftty (lfo)80,25
