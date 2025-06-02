# Processing Data Files

**File Locking** |  **__**  
---|---  
  
By default, all files accessed by PxPlus are shared between users, allowing any number of users to access the same file and data at the same time. Due to design aspects of a file or its contents, it may be desirable to reserve a file for exclusive use. When a file is reserved for exclusive use, only the user who placed the reservation on the file may have access to its contents. All other users are denied access to the reserved file.

A file may be reserved for exclusive use via the **[LOCK](../../../directives/lock.md)** directive. Once reserved, the file is considered locked. Locking a file can only be accomplished if the user who places the lock is the only user that currently has the file open. If another user has the file open, the**LOCK** request will be denied. Once locked, no other users will be able to open the file. Any attempt to do so will return Error #0: Record/file busy.

There are two instances when it is necessary to lock a file within PxPlus:

|  **_Writing to a Serial File_** |  Due to the nature of a serial file and the format of the data it contains, it is mandatory that a serial file be locked before attempting to write to it. Any attempt to write to a serial file without locking it will return an error.  
---|---|---  
|  **_Purging Data from a File_** |  The **[PURGE](../../../directives/purge.md)** directive removes all records from a file. Before this command can be performed, the file must be locked in order to assure that no other user is accessing the file. If the **PURGE** directive is used on a file that is not locked, an Error #82: File must be 'LOCKED' before being 'PURGED' will be generated.  
  
PxPlus will automatically lock all physical devices when they are opened. This will prevent multiple users from attempting to share printers and tape drives at the same time. An exclusive reservation against a file can be removed by the **[UNLOCK](../../../directives/unlock.md)** directive and is automatically removed when the file is closed.
