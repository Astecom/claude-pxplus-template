# File Information Functions 

**PxIOGetFileInfo** |  **__**  
---|---  
  
## Description

Retrieves file information

## Format

**int** **PxIOGetFileInfo(PxIOFileHandle handle, PxIOFileInfoType type, int *fileInfo);**

**_Where:_**

**handle** |  The handle of an open file  
---|---  
**type** |  Specifies the type of file information that is being requested. The allowed values for this parameter are: |  INFO_TYPE_EXTERNAL_KEY_SIZE |  External key size  
---|---  
INFO_TYPE_RECORD_SIZE |  Record size  
INFO_TYPE_RECORD_COUNT |  Current record count  
INFO_TYPE_FILE_SIZE |  Current file size in bytes  
INFO_TYPE_RECORD_MAX |  Maximum number of records allowed  
INFO_TYPE_FILE_TYPE |  File type. See the list in **[Appendix D](../Appendix%20References/Appendix%20D.md)**.  
INFO_TYPE_FIELD_SEPARATOR |  Field separator used in the file  
INFO_TYPE_BLOCK_THRESHOLD |  Block usage percentage threshold of a keyed file  
INFO_TYPE_BLOCK_SIZE |  Block size of a keyed file in kilobytes  
INFO_TYPE_CREATION_OPTIONS |  Options specified when the file was created. See **[Appendix E](../Appendix%20References/Appendix%20E.md)** for a list of possible options.  
INFO_TYPE_KEY_SEQUENCE_COUNT |  Number of key sequences  
INFO_TYPE_LOCK_SIZE |  Size of the current record lock in bytes  
INFO_TYPE_CREATION_STAMP |  File creation stamp  
INFO_TYPE_ATTRIBUTES |  File's extended flags. See **[Appendix G](../Appendix%20References/Appendix%20G.md)**.  
INFO_TYPE_BUFFER_SIZE |  Size of the file-specific buffer  
**fileInfo** |  A pointer to an _int_ variable that will receive the requested file information  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
