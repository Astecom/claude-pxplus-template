# Directives 

**MNEMONIC** |  **_Define File Command Sequence_**  
---|---  
  
##  Format

**MNEMONIC**[**(**_chan_**)**]_mnm_ __name_ _$_**=**_esc_sequ_ _$_  
  
**_Where:_**

_chan_ |  Channel or logical file number for which the mnemonic is defined.  
---|---  
_mnm_name_ _$_ |  Valid mnemonic name, enclosed in apostrophes. String expression.  
_esc_sequ_ _$_ |  Escape or command sequence required by the file/device in order to process the mnemonic. String expression.  
  
##  Description

Use the **MNEMONIC** directive to define additional mnemonics for files and/or devices. Once you define a mnemonic for a given logical file number, it stays active until the channel is closed. When PxPlus encounters a user-defined mnemonic in a **PRINT** or **INPUT** statement, it converts the mnemonic to the character string in the escape sequence.

**_Under WindX_**

WindX supports the use of this **MNEMONIC** directive via the [WDX] tag. After opening a channel across a WindX connection, all declared mnemonics (except '*R' and '*X') are sent automatically to the WindX workstation. PxPlus considers the '*R' and '*X' mnemonics to be local to the server unless you use the [WDX] tag in declaring them. ('*R' declares an operating system command to execute on channel close, and '*X' declares a program to call on channel close.)

**_Example:_**

This is an example of the EXECUTE command under WindX (prior to v4.20):

> if WDX%<>$00$  
>  then execute "[WDX]mnemonic(lfo)'5X'=$1B+hex$"  
>  else goto MY_LABEL

##  See Also

**[[WDX] Direct Action to Client Machine](../command_tags/wdx.htm)**  
[**Mnemonics**](../mnemonics.md)

##  Example

To define and use a mnemonic:

> open (1)"/dev/printerxx"  
>  mnemonic 'US'=esc+"_" ! Define mnemonic  
>    
>  print (1)'US',"Title line...", ! Underscored

The example below illustrates how the **MNEMONIC** directive can be used for flexible text fonts on a screen in Windows. Define the font and the logical screen size in a statement. To assign settings for the PxPlus standard mnemonics '**CP'** and '**SP'** :

> mnemonic (0)'CP'="Courier New,-8":120,40  
>  mnemonic (0)'SP'="*":80,25

> A subsequent PRINT 'CP' directive will change the screen font to Courier New with a size of 8 points, and PRINT 'SP' will restore the screen font to standard print.

#### **Note:**  
The TEXT plane font must always be a fixed font.

**_WindX Examples:_**

> open (chan)"[WDX]\\\mach\printer_share"

> mnemonic (chan)'FF'=$0C$ ! automatically goes to WindX workstation

> mnemonic (chan)'*R'="erase "+filename$ ! local to server, not workstation

> mnemonic (chan)'*R'="[WDX]erase "+filename$ ! on workstation, not server
