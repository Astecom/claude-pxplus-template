# System Parameters

**'XC'** |  **_Continue After Disconnect_**  
---|---  
  
##  Description

The **'XC'** parameter sets PxPlus to ignore write errors to the connected terminal. This allows a process to continue running and outputting to a terminal, even while the terminal is no longer connected. The process should continue until a **READ** /**INPUT** request, then the error is reported and PxPlus terminates.

This parameter should be used when there is the possibility that a terminal could become disconnected during an update process, and it is important to the application that the application complete its processing before having to handle the disconnect.

When the **'XC'** parameter is enabled, terminal disconnects (channel 0) are not immediately reported to the application program. This allows a process to trap the disconnect condition and handle it properly.

Normally (when **'XC'** is not enabled), a terminal disconnect will cause the system to complete processing the current instruction and shut down. No application recovery of this condition is possible.

When **'XC'** is enabled, the system will continue to run; however, all output requests to the terminal will be ignored with no error reported, and all input requests will be returned with an Error #86. In addition, most update processes will be able to complete their processing without having to worry about a premature termination caused by a disconnect.

#### **Important Note:**  
When running WindX, some file IO functions and variables processed against channel 0 cause an exchange of information with the WindX terminal. These functions will generate an Error #86 should the terminal have disconnected while **'XC'** is enabled. The most commonly used functions that are affected are **[FIB](../functions/fib.md)**, **[FIN](../functions/fin.md)**, **[TXW](../functions/txw.md)**, **[TXH](../functions/txh.md)** and **[MSE](../variables/mse.md)**.

##  Default

**_Off_** \- The system generates the error and terminates the process.
