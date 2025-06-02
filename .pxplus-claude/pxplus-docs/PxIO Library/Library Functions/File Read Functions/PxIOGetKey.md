# File Read Functions 

**PxIOGetKey** |  **__**  
---|---  
  
## Description

Gets a key from the specified file

## Format

**int** **PxIOGetKey(PxIOFileHandle handle, KeyInfo *key, int keyNumber, PxIOKeyType keyType);**

**_Where:_**

**handle** |  The handle of an open keyed file  
---|---  
**key** |  A pointer to a keyInfo structure. When the function is called, the data field must be a pointer to a buffer to receive the key information, and the length field must contain the size of the buffer. Upon return, the length field will contain the size of the returned key or the needed buffer size if there was a length error.  
**keyNumber** |  The key sequence number upon which the returned key is to be based. If the value passed is -1, then the key sequence will be based on the one previously used with the file handle. The initial key sequence of a file will be the primary one.  
**keyType** |  The key to retrieve. The following options are available: |  KEY_TYPE_FIRST |  First key in the specified key sequence  
---|---  
KEY_TYPE_CURRENT |  Current key in the specified key sequence  
KEY_TYPE_NEXT |  Next key in the specified key sequence  
KEY_TYPE_PREVIOUS |  Previous key in the specified key sequence  
KEY_TYPE_NEXT_NEXT |  The key following the next key in the sequence  
KEY_TYPE_LAST |  The last key in the specified key sequence  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
