# Utility Routines

***NEXTSEQ** |  **_Return Next Logical Primary Sequence_**  
---|---  
  
## Invocation

**CALL "*Nextseq",**_next_seq_ _$, file_channel_

**_Where:_**

_next_seq_ _$_ |  Required |  Output |  This string variable will received the next sequence to be used for the file.  
---|---|---|---  
_file_channel_ |  Required |  Input |  This numeric value defines the file for which the next higher primary key will be returned.  
  
## Description

This routine is designed to be used in conditions where the allocation of the next higher key to a file may not allow the file to be archived and merges using source control.

For example, the system Data Dictionary uses a unique 6-digit number to define the tables. If, during development, multiple programmers defined new files, the same sequence number could be used causing conflicts within the Source Control system.

This utility, when properly configured, can be used to help avoid this situation. To use this utility, you pre-assign ranges (prefixes) of keys to individual programmers. For example, one program might have a prefix of "01", another "02", etc. When the system needs to assign a next sequence number, it will assign the next higher number in the range identified by the prefix. Thus, if a user has a prefix of "01", the next sequence will be in the range of "010000" through "019999". A programmer with a "02" prefix will get sequences from the "020000" through "029999" range, etc.

The following two methods are provided to assign the user prefix:

  * The Global variable **%PXP_ID_PFX$** may be set in the application through START_UP, program control or the users INI file.
  * The Environment variable **PXP_ID_PFX** may be set at the OS level for the programmer/workstation.



Currently, the Data Dictionary Maintenance and File Maintenance RID Generation logic uses this routine to assign the next higher sequence numbers.

_(The *NextSeq utility and capability were added in PxPlus v10.20.)_
