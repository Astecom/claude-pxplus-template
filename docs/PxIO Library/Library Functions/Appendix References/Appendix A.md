# Library Functions - Appendix References  
  
**Appendix A** |  **__**  
---|---  
  
The following table summarizes the allowed options for the type parameter of the **[PxIOGetLibOption](../Global%20Library%20Functions/PxIOGetLibOption.md)** and **[PxIOSetLibOption](../Global%20Library%20Functions/PxIOSetLibOption.md)** functions, as well as the allowed ranges for the corresponding value parameter of **[PxIOSetLibOption](../Global%20Library%20Functions/PxIOSetLibOption.md)**.

**Option** |  **Description** |  **Value Range** |  **Default Value**  
---|---|---|---  
LIB_OPTION_TYPE_IGNORE_MAX_REC |  Ignore maximum record count errors |  TRUE or FALSE |  TRUE  
LIB_OPTION_TYPE_SERIAL_NO_LOCK |  Serial files do not need to be locked |  TRUE or FALSE |  FALSE  
LIB_OPTION_TYPE_SHRINK_KEYED_FILE |  Shrink keyed files |  TRUE or FALSE |  FALSE  
LIB_OPTION_TYPE_VLR_SEGMENTS_MODIFY |  Allow VLR segment modification |  TRUE or FALSE |  TRUE  
LIB_OPTION_TYPE_DEDICATED_BUFFER |  Number of dedicated file buffers |  0 to 20 |  5  
LIB_OPTION_TYPE_SEGMENT_SIZE |  File segment size in MB |  0 to 2000 |  0  
LIB_OPTION_TYPE_EXCLUSIVE_FILE_USE |  File usage will be exclusive to library |  TRUE or FALSE |  FALSE  
  
#### **Note:**  
Since the value parameter of **PxIOSetLibOption** is an _int_ variable, options that specify a Boolean setting will interpret a non-zero value as TRUE and a zero value as FALSE.
