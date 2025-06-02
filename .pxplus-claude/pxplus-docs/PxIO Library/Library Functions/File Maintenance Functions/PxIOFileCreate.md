# File Maintenance Functions 

**PxIOFileCreate** |  **__**  
---|---  
  
## Description

Creates a PxPlus file

## Format

**int** **PxIOFileCreate(PxIOService service, const char *pathname, PxIOFileType type, unsigned int recordSize, unsigned int keySize, unsigned int maxRecordNumber, const char *keyDefinitions, unsigned int options, unsigned intblockSize, unsigned char fieldSeparator);**

**_Where:_**

**service** |  PxIO service to use to create the file. This is required for security purposes.  
---|---  
**pathname** |  Pathname of the file to be created  
**type** |  Type of PxPlus file to create. See **[Appendix D](../Appendix%20References/Appendix%20D.md)** for a list of currently allowed types.  
**recordSize** |  Maximum size of a record in the file to be created  
**keySize** |  Size of a key in the new file  
**maxRecordNumber** |  Maximum number of records allowed in the new file. Use 0 for unlimited.  
**keyDefinitions** |  A pointer to a buffer containing key definitions for the file being created. See **[Key Definitions](../../../PxPlus%20User%20Guide/File%20Handling/Data%20Files/Keyed%20Files.htm#keydef)**.  
**options** |  A bit array containing file creation options. See **[Appendix E](../Appendix%20References/Appendix%20E.md)** for a list of currently allowed options.  
**blockSize** |  Block size in kilobytes for the file to be created  
**fieldSeparator** |  Field separator to be used by the file  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.

#### **Note:**  
The service must be included for security purposes, and the pathname is relative to the service. For a remote service using PxServer, the path is relative to the machine on which PxServer is running.
