# Mnemonics 

**'*C'** |  **_Automatic Output on CLOSE_**  
---|---  
  
**Definition**

##  Format

**MNEMONIC (**_chan_**)'*C'** =_data$_

##  Description

**'*C'** (_asterisk C_) contains a string expression that will be automatically sent to the file/device when a **CLOSE** is executed.

#### **Note:**  
For ***WINPRT*** devices, because the Windows spooler automatically resets the printer when closed, the **'*C'** mnemonic is ignored.

For additional information regarding the use of special mnemonics (i.e. **'@@'** , **'*C'** , **'*I'** , **'*O'** , **'*R'** , **'*X'** , **'AT'** , **'GD'** , **'WX'**) when creating a device driver, see **[Dynamic Information in Mnemonics](dynamic_information_in_mnemonics.md)** or **[Device Drivers](../PxPlus%20User%20Guide/Appendix%20of%20Miscellaneous%20Topics/Device%20Drivers/Overview.md)**.
