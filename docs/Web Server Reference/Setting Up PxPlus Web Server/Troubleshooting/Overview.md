# Web Server Reference

**Troubleshooting** |  **__**  
---|---  
  
## Debug Mode

Configure your troubleshooting settings in the PxPlus Web and Debug Mode screen, accessed via the Details Configuration dialogue. You can use the Restart Stalled Tasks setting in conjunction with debug mode and debug windows to test and debug your code.

#### **Note:**  
Debug mode and the debug windows are not available in UNIX.

The Web Server automatically sets the **'NE'** system parameter to _Off_ when each of your jobs is completed. With 'NE' set to _Off_ , the Web Server can return values in such system variables and functions as **ERR, RET, and MSG(-1)** to report untrapped errors in your code.

## Error Conditions

There are two types of error conditions in dealing with the Web Server:

**Type** |  **Description**  
---|---  
_Hard Errors_ |  Unrecoverable conditions. These are reported to the console. The specific port monitor exits. The base launcher automatically restarts any failed port monitor within 30 seconds of its going down.  
_Soft Errors_ |  Recoverable conditions. These errors are reported to the browser sending the request that generated the error.  
  
#### **Note:**  
When you receive a message that the Web Server is unable to gain access to a TCP port, that usually indicates that another application has the TCP port open or the O/S has the socket in a WAIT state, pending the clearing of unclaimed data in the socket.

For information on error handling, see **[PxPlus Web and Debug Mode](Overview.htm#WebDebugMode)** below. In addition, see **[%exit_code](../PxPlus%20Web%20Server%20Variables/Overview.htm#exit_code)** and **[Base64 Error Messages](../PxPlus%20Web%20Server%20Utilities/Encrypt%20or%20Decode%20Data.htm#base64errors)**.

##  PxPlus Web and Debug Mode

**Prompt** |  **Web Server Details Configuration**  
---|---  
_Restart Stalled Tasks_ |  **_On:_** The port monitor checks for stalled task handlers approximately every 30 seconds, doing the following:

  * Terminates a task handler that has been running longer than 90 seconds and is stalled due to an error or ESCAPE directive.


  * Starts a new task handler in its place.

Long jobs are acceptable if they respond periodically.  
  
**_Off:_** If you include a **PRINT 'SHOW'(1),;ESCAPE** directive in your PxPlus program, control will transfer to the task handler and processing will stop at your ESCAPE. This gives you an opportunity to check your variables and debug the program if necessary.  
  
This setting should be _Off_ when you are debugging a PxPlus program. (Then, task handlers are not monitored or restarted, so the Web Server will not terminate your task in the middle of debugging.) If your Web Server is running on an NT server, jobs will appear on the console.  
_Debug Mode_ |  **_On:_** The Web Server displays any PxPlus debug windows you have selected just before your PxPlus application runs. The task handler will automatically stop on the first line of your code so that you can debug the program if necessary. (No ESCAPE is necessary in your code.) After your task handler exits, only the Trace and Watch windows remain open. Any other debug windows you selected are closed automatically.

#### **Note:  
** Debug mode is not available when you run the Web Server in a UNIX environment (not even if you use WindX).  
  
_Trace Window  
Watch Values  
BreakPoints  
Command Mode_ | 

#### **Note:  
** These settings are only available when Debug Mode is set to _On_. They are not available in UNIX (not even if you use WindX).

When you turn _On_ your setting(s) for Trace Window, Watch Values, BreakPoints or Command Mode, the Web Server will turn on the given debugging window(s) automatically for debug mode.
