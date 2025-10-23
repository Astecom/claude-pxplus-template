# System Parameters

**'PQ'** |  **_Password Queue_**  
---|---  
  
##  Description

Sets the maximum number of files that can be recorded in the password queue.

The queue stores the filename and password for each passworded file that has been successfully opened. All attempts to open a passworded file without specifying a password will be verified with the queue to see if the password has been previously supplied. If the filename appears in the queue, the password will be re-applied from the existing entry.

Specifying a password value for a filename that already appears in the queue causes the entry to be removed and the password to be re-verified. To reset the queue, use **SET_PARAM 'PQ'=PRM('PQ')**.

##  Default

**'PQ'=100**

## See Also

**[PASSWORD Apply Password and Encryption](../directives/password.md)**
