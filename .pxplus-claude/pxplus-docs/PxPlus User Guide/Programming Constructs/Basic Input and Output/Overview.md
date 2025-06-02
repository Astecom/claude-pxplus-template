# Programming Constructs

**Basic Input and Output** |  **__**  
---|---  
  
The **[INPUT](../../../directives/input.md)** directive is used to enter data interactively while the program is running. It issues prompts to the user and processes the responses. **PRINT** statements may be used to format and output printable data to a monitor or printer, as well as into a file. PxPlus I/O statements need to reference a **_channel number_** in order to access a device or file. The relationship between a channel and the physical file or device must first be established via the **[OPEN](../../../directives/open.md)** directive.

Other I/O directives (**READ** , **WRITE** , etc.) are used specifically for transferring data in and out of files. See **[File Processing Directives](../../File%20Handling/Processing%20Data%20Files/File%20Processing%20Directives.md)**.

For information on I/O processing in a graphical user interface environment, see **[Graphical User Interfaces](../../Graphical%20User%20Interfaces/Introduction.md)**.

##  Opening/Closing Devices and Files

Most input/output operations in PxPlus require a channel number (_chan_) to identify the connection to a specific device, interface or file. These are established using the **[OPEN](../../../directives/open.md)** directive, which associates a _logical_ number (normally between 0 and 127) with a _physical_ file or device. Once the _chan_ is defined, the program will be able to access the input or generate output simply by referencing that number.

In theory, all I/O statements use channel numbers; however, the _console_ (keyboard and display screen) is defined as channel 0 by default and may be omitted from**INPUT** or**PRINT** statements intended for immediate display.

For files, the**OPEN** process also sets a pointer to the beginning of the opened file and allocates system resources. The actual number of files that can be opened at any one time depends on the operating system. See **[File Handling](../../File%20Handling/Introduction.md)** for information on using**OPEN** for file I/O operations.

The basic syntax for an**OPEN** statement is:

> **OPEN** (_chan_[  _,fileopt_ ]) _string$_

**_Where:_**

_chan_ |  Logical channel number to be assigned.  
---|---  
_fileopt_ |  Various options used for controlling the contents and characteristics of a data file. See **[Processing Data Files](../../File%20Handling/Processing%20Data%20Files/Overview.md)**.  
_string$_ |  Name of the file or device to open. The string expression can include a specialty file name or file tag (e.g. ***MEMORY*** , **[RPC]** , etc.).  
  
Several**OPEN** keywords are also available for specific types of file access operations, including **INPUT** ,**LOCK** ,**PURGE** and**LOAD**.

Most I/O operations begin with an **[OPEN](../../../directives/open.md)** directive to establish the relationship with the target device or file.

**_Example:_**

> PRINT "Today's date is ",DAY  
>   
>  OPEN (1)"*WINPRT*;HP Laser Jet;Orientation=Landscape"  
>   
>  PRINT (1)@(0),"Customer",@(45)," Balance"

In this example, the first statement simply outputs text to the screen, which is the default syntax for **PRINT**. The second **PRINT** statement outputs text to **_channel_** (1), which is the identity of a printer made available for use via the preceding **[OPEN](../../../directives/open.md)** directive.

The **[CLOSE](../../../directives/close.md)** directive closes the connection to one or more files/devices and allows their channel number(s) to be reused. The basic syntax is:

> **CLOSE** {**(*)** | **(**_chan_**)** [, **(**_chan_**)** ...]}

**_Where:_**

_*_ |  An _asterisk_ denotes "all**OPEN** local channels" _except_ channel 0.  
---|---  
_chan_ |  Channel number.  
  
#### **Note:**  
Local files are closed automatically on a**BEGIN** or**END** statement. All files are closed at the end of a user session or whenever a **[START](../../../directives/start.md)** directive is issued.

## See Also

**[Input Statements](Input%20Statements.md)  
[Output Statements](Output%20Statements.md)**
