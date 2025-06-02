# System Parameters

**'+F'** |  **_File Close Caching_**  
---|---  
  
##  Description

When the **'+F'** parameter is enabled, the system will defer the actually physical close of data files and can re-use these logically closed files later in the program if they are re-opened. In effect, it 'caches' file connections.

In most operating environments, there is a lot of system overhead in the opening and closing of data files. Using the **'+F'** parameter can improve throughput if the application constantly opens and closes the same file over and over again. Consider for example a subroutine that opens a file to look up a piece of information then closes this data file once it has the information it needs and returns to the called. This routine would open/close the same file each and every call which could slow down the system. Setting the **'+F'** parameter avoids the operating system overhead involved with the open/close.

The system attempts to determine which files can have their connection cached to avoid problems within your application. The following rules are applied:

  * The file must be KEYED (VLR or EFF), INDEXED or SERIAL.
  * The file must be opened for full Read/Write access.
  * The file cannot have been LOCKed by the application.



_(The '+F' system parameter was added in PxPlus v7.00.)_

##  Default

**_Off_**
