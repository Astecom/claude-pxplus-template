# Mnemonics

**'*X'** |  **_Program to Call on CLOSE_**  
---|---  
  
**Definition**

##  Format

**MNEMONIC (**_chan_**)'*X'="**  _prog_name_[;_entry_][;_params_]"  
  
**_Where:_**

_chan_ |  Channel or logical file number for which the mnemonic is defined.  
---|---  
_entry_ |  Name of starting statement label to use as entry point in the program. Optional. If included, add to the _prog_name_ string expression (e.g. RUN "PROG;STARTING_LABEL").  
_params_ |  Parameters (if any) needed in your **CALL** ed program.  
_prog_name_ |  Name of the program. String expression.  
  
##  Description

**'*X'** (_asterisk X_) contains the pathname of a program to **CALL** on the closing of a channel. When a file is closed, PxPlus issues a **CALL** to the program/entry point specified by the contents of **'*X'**. This takes place just prior the file being actually being closed, allowing the program to alter the contents of the file if desired.

To retrieve the parameter list, the **CALL** ed program should reference PGM(-3), which contains the complete string contained in the **'*X'** mnemonic definition.

For additional information regarding the use of special mnemonics (i.e. **'@@'** , **'*C'** , **'*I'** , **'*O'** , **'*R'** , **'*X'** , **'AT'** , **'GD'** , **'WX'**) when creating a device driver, see **[Dynamic Information in Mnemonics](dynamic_information_in_mnemonics.md)** or **[Device Drivers](../PxPlus%20User%20Guide/Appendix%20of%20Miscellaneous%20Topics/Device%20Drivers/Overview.md)**.

##  Example

load "TSTX"  
list  
0010 LBL:  
0020 msgbox "HELLO--"+sep+"FIL="+str(lfa)+sep+"MNM="+mnm('*X',lfa)  
0030 end  
open (1)"\JUNK.TXT"  
mnemonic (1)'*X'="TSTX;LBL;My backspace key is orange"  
close (1)
