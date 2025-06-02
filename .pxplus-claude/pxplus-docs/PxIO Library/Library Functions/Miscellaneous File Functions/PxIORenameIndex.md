# Miscellaneous File Functions 

**PxIORenameIndex** |  **__**  
---|---  
  
## Description

Rename a key in a keyed file without having to rebuild the file

## Format

**int** **PxIORenameIndex(PxIOFileHandle handle, int nKeyNo, size_t nameLength, unsigned char *pName);**

**_Where:_**

**handle** |  The handle of an open keyed file  
---|---  
**nKeyNo** |  The key number of the key to rename |   
**nameLength** |  Size of new key name |   
**pName** |  Pointer to byte buffer containing the new key name |   
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**. 
