# Directives

**LINE_SWITCH** |  **_Redirect Console Input/Output_**  
---|---  
  
##  Formats

1. |  _Switch File (0):_ |  **LINE_SWITCH** [(_chan_ ,**ERR** _=stmtref_)]  
---|---|---  
2. |  _Switch File (0):_ |  **LINE_SWITCH** [_device$_]  
  
**_Where:_**

_chan_ |  Channel or logical file number to which to redirect file 0 (_zero_) input and output.  
---|---  
_device$_ |  Name of the device to which to switch file 0 (_zero_). String expression.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **LINE_SWITCH** directive to switch all I/O currently sent to channel or logical file number 0 (_zero_ , the terminal) to another device. Its primary purposes are to allow for secondary users on a PC or to provide remote maintenance capability.

While the **LINE_SWITCH** is in effect, the original device is disabled. PxPlus will expect to receive all input from and send all output to the new device designated as file or channel 0.

Use a **LINE_SWITCH** directive with no parameters to restore communications with the original device on channel (logical file number) 0 and **CLOSE** the alternate file.

##  Example

line_switch "PORT2" ! Defines/opens PORT2 as logical file number (0)  
line_switch ! Closes PORT2, restores terminal/console as logical file  
#(0)
