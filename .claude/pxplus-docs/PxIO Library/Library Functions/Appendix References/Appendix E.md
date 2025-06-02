# Library Functions - Appendix References  
  
**Appendix E** |  **__**  
---|---  
  
The following are the allowed options that may be passed to the **[PxIOFileCreate](../File%20Maintenance%20Functions/PxIOFileCreate.md)** function in the options parameter and may be retrieved by the **[PxIOGetFileInfo](../File%20Information%20Functions/PxIOGetFileInfo.md)** function when the type parameter is set to INFO_TYPE_CREATION_OPTIONS:

**Option** |  **Description**  
---|---  
CREATE_OPTION_VARRECSZ |  Enable variable length records (FILE_TYPE_KEYED only)  
CREATE_OPTION_EXTENDED |  Extended record size  
CREATE_OPTION_UPDATEPLUS |  Enable UpdatePlus™ logic (FILE_TYPE_KEYED only)  
CREATE_OPTION_NO_SEPARATOR |  Records will have no field separator  
CREATE_OPTION_BBX_SEPARATORS |  Use BBx field separators  
CREATE_OPTION_DEF_SEPARATOR |  Use default field separator  
CREATE_OPTION_NULL_KEY_STRIP |  BBx style NULL keys. Strips trailing nulls from a key (FILE_TYPE_KEYED only).  
  
Because the options parameter of **[PxIOFileCreate](../File%20Maintenance%20Functions/PxIOFileCreate.md)** is a bit array, more than one option may be passed to the function at a time. However, the separator options cannot be specified simultaneously. If one of the separator options is set, none of the other separator options can be set. Similarly, more than one option may be passed back in the fileInfo field when calling the **[PxIOGetFileInfo](../File%20Information%20Functions/PxIOGetFileInfo.md)** function and specifying INFO_TYPE_CREATION_OPTIONS.

BBx is a registered trademark of BASIS International Ltd.
