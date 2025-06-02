# PxPlus System Programs and Files

***ERROR** |  **_Generic Error Handler_**  
---|---  
  
The ***ERROR** program is intended to serve primarily as a sample error handling program. This utility displays the message associated with the error condition and the current program stack. The user may abort the program by entering 'A', retry the error by entering 'R', or restart the session by entering 'S'.

If the system variable %Z_PASSWORD$ is defined, the 'A' and 'S' options both require the entry of the value stored in this variable as a password.

#### **Note:**  
Normally, each application designer will develop his/her own error handler.
