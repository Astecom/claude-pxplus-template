# File Handling

**Processing Data Files** |  **__**  
---|---  
  
Different methods are available for transferring data to/from a PxPlus data file.

File access requires an **[OPEN](../../Programming%20Constructs/Basic%20Input%20and%20Output/Overview.htm#Mark1)** statement to establish a connection before I/O operations can take place. This process involves setting a pointer to the beginning of the opened file, allocating system resources, and assigning a file number from 1 to 63 for _local files,_ and 64 to 127 for _global files_. Extended file mode (see **['XF'](../../../parameters/xf.md)** system parameter) expands these ranges from 0 to 32767 for _local files_ , and 32768 to 65000 for _global files_.

Once a file is opened, all further references to that file are handled via the assigned channel/file number. The actual number of files that can be opened at any one time depends on the operating system. Once a file number is assigned to a file, it cannot be reused until the file is closed, typically by the **[CLOSE](../../../directives/close.md)** directive.

Most applications will be accessing data and program files in more than one location (different directories, drives, etc.). While files can be referenced directly via their complete pathname, dealing with the different locations and path formats can sometimes be problematic. PxPlus has the ability to set default file search rules to simplify this process. See **[Prefix Processing](../Prefix%20Processing/Overview.md)**.

PxPlus also has the ability to **OPEN** OS sequential (flat) files in order to handle transfer of data from non-PxPlus applications. See **[Foreign File Access](../Foreign%20File%20Access/Overview.md)**.

## See Also

**[Accessing Files](Accessing%20Files.md)  
[File Processing Directives](File%20Processing%20Directives.md)  
[File Processing Functions](File%20Processing%20Functions.md)  
[Processing Records](Processing%20Records.md)  
[Accessing Directory Files](Accessing%20Directory%20Files.md)  
[File Locking](File%20Locking.md)  
[Record Locking](Record%20Locking.md)  
[Input and Output Parameters](Input%20and%20Output%20Parameters.md)  
[Accessing ZIP Files](Accessing%20ZIP%20Files.md)**
