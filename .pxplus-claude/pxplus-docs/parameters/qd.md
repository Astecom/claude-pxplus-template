# System Parameters

**'QD'=** |  **_Windows Queue Display_**  
---|---  
  
##  Description

**_(WindX Only)_**

Controls the amount of time (in seconds) a session waits before forcing a check of the Windows message queue for keyboard/mouse activity. This parameter is only in effect when **'!W'** WindX keyboard synchronization is enabled and only while a task is executing code that does not issue an **INPUT** or **OBTAIN** within the delay period.

The **'QD'** parameter is a client-side setting that must be set after a WindX connection has been established via:

> EXECUTE "[wdx]SET_PARAM 'QD'=nnn". 

#### **Note:**  
During the delay period, PxPlus will not respond to Ctrl - Break or process mouse events, which could be perceived that the application is being non-responsive.

_(The**'** QD'= system parameter was added in PxPlus v7.)_

##  Default

**'QD'=4**

## See Also

**['!W' WindX Keyboard Synchronization](!w.md)**
