# Library Functions - Appendix References  
  
**Appendix G** |  **__**  
---|---  
  
Listed below are the attributes that may be retrieved by the **[PxIOGetFileInfo](../File%20Information%20Functions/PxIOGetFileInfo.md)** function when the type parameter is set to INFO_TYPE_ATTRIBUTES. The _FileInfo_ field is treated as a bit array; therefore, more than one attribute may be set when the function returns.

**Option** |  **Description**  
---|---  
ATTRIBUTE_EXTENDED_KEY_SEG |  File has an extended key segment  
ATTRIBUTE_REBUILDING_KEY |  Key is being rebuilt at time of call  
ATTRIBUTE_FIXED_KEY_TABLE |  Key table has version 3.12 correction  
ATTRIBUTE_JOURNALIZE |  File is journalized
