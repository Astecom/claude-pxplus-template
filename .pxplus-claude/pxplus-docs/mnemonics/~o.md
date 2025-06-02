# Mnemonics

**'*O'** |  **_Output Conversion Table_**  
---|---  
  
**Definition**

##  Format

**'*O'** =_table$_

##  Description

**'*O'** (_asterisk O_) is used to create a 256-character terminal output conversion table. As each character is sent to an output device, it is translated into a new character based on this table, if defined.

The outgoing character is translated to its numeric value in an ASCII table (0 - 255), and this value is used as an _offset_ into the 256-character table defined by **'*O'**. The _character at that offset_ will be used for output instead of the original character.

For additional information regarding the use of special mnemonics (i.e. **'@@'** , **'*C'** , **'*I'** , **'*O'** , **'*R'** , **'*X'** , **'AT'** , **'GD'** , **'WX'**) when creating a device driver, see **[Dynamic Information in Mnemonics](dynamic_information_in_mnemonics.md)** or **[Device Drivers](../PxPlus%20User%20Guide/Appendix%20of%20Miscellaneous%20Topics/Device%20Drivers/Overview.md)**.
