# Mnemonics

**'TR'** |  **_Terminal Read from Start_**  
---|---  
  
**Editing**

##  Description

The **'TR'** mnemonic transmits an image to a program as a string. Normally, **'TR'** reads from 0,0 to the end of the screen; however, when in BBx emulation mode (**SET_PARAM 'BX'**), **'TR'** reads from 0,0 to the current cursor position. The **'RP'** mnemonic has the same functionality as **'TR'** except that it is not affected by BBx emulation.

#### **Note:**  
In graphics mode, if a terminal mnemonic transmits the contents of the screen to the program, the data consists of four bytes for each character. The first two bytes contain background and foreground characters, the third byte holds character attributes, and the fourth byte holds the actual character on the screen.

## See Also

**['RP' Terminal Read to End](rp.md)**  
**['RC' Return Cursor Address](rc.md)**  
**['RL' Return Line Contents](rl.md)**

BBx is a registered trademark of BASIS International Ltd.
