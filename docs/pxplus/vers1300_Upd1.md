# PxPlus Releases

**PxPlus 2016 Update 1 (version 13.10)** |  **_February 2017_**  
---|---  
  
PxPlus 2016 Update 1 is fundamentally a patch release designed to consolidate a number of library and language kernel changes and the handling of some application errors, which could cause application failures.

## PxPlus Kernel Changes

  * Restricted MSGBOX to 16K to avoid system failure when sending more than 80K.
  * Avoided infinite loop in kernel when application issued REPEAT DATA from same file to itself.
  * Addressed problem on Linux when using some special characters in directory names and attempting to read directory which yielded no files.
  * Resolved issue with internal IOLIST caching when using Alternate IOLISTs in data dictionary.
  * Fixed problem with Auto-increment EFF records when having to grow field sizes due to increment value assignment.
  * Added check to properly report error caused by attempt to issue a LOAD DATA to parse JSON into an array that was declared not to support associative elements.
  * Added support for automatic array definition and creation when assigning/copying all values from a dynamic array.
  * Added support to allow SSL Cipher restrictions to be applied to server as well as clients.
  * Resolved problem passing data within a structured string to a subprogram where the data values would not fit into the space defined by the structure.
  * Resolved problem in the *SYSTEM object file open event which occurred when doing legacy open of channel 0 on another channel.
  * Resolved problem caused by application deleting a parent window which has embedded children windows (opt="c" on window creation) that application continued to reference.
  * Resolved memory access problem caused by attempting to assign a column name on a Grid with a value greater than 2000 bytes.
  * Adjusted Windows Installer to set general read/write permissions on install directory to avoid problems with recent changes to Windows Server install logic.



In addition to the above, all library and help file contents changes from Online Updates 0001 through 0007 for PxPlus 2016 have been incorporated into this release.
