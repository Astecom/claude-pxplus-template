# Miscellaneous File Functions 

**PxIOAddIndex** |  **__**  
---|---  
  
## Description

Add a key to a keyed file without having to rebuild the file

## Format

**int** **PxIOAddIndex(PxIOFileHandle handle, struct KEYDEF *pKeyDef);**

**_Where:_**

**handle** |  The handle of an open keyed file  
---|---  
**pKeyDef** |  The key definition of the key to add. For details on the format of a key definition, see **[Appendix H](../Appendix%20References/Appendix%20H.md)** for the KEYDEF structure in PxIO.h.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**. 
