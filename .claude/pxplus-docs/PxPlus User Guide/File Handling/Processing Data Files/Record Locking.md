# Processing Data Files

**Record Locking** |  **__**  
---|---  
  
Both keyed files and indexed files provide a record locking facility. Record locking allows the program to gain exclusive access to a record on a file, thereby preventing other programs from incorrectly updating the information.

Typical uses of record locking would be updating a product inventory record or adjusting an account balance. In general, record locking is necessary whenever modifying a value in a data file. When it is necessary to modify a value, the program should first read and lock the current value, perform the adjustment, then rewrite the value back. Locking the record will force other users to wait for the update to complete or until the lock is removed.

The **[EXTRACT](../../../directives/extract.md)** and **[EXTRACT RECORD](../../../directives/extract_record.md)** directives can be used to lock a record to prevent other users from having access to it. This lock stays active until the next I/O request for the same file or until the file is closed. Using a**KEY=** option on a**READ** ,**FIND** or**EXTRACT** statement to retrieve the next record while a record is locked will result in the locked record being returned instead. You can enable _read through_ access for records that have been extracted by setting the **['XI](../../../parameters/xi.md)'** parameter.
