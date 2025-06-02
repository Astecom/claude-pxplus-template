# Library Functions - Appendix References 

**Appendix B** |  **__**  
---|---  
  
The following table summarizes the allowed options for the type parameter of the **[PxIOGetServiceOption](../Service%20Functions/PxIOGetServiceOption.md)** and **[PxIOSetServiceOption](../Service%20Functions/PxIOSetServiceOption.md)** functions, as well as the allowed range for the corresponding value parameter of **[PxIOSetServiceOption](../Service%20Functions/PxIOSetServiceOption.md)**.

**Option** |  **Description** |  **Value Range** |  **Default Value**  
---|---|---|---  
SERVICE_OPTION_TYPE_KEYED_FILE_BBX |  Keyed file I/O Emulates BBx |  TRUE or FALSE |  FALSE  
SERVICE_OPTION_TYPE_SEQUENCE_FILE_BBX |  Serial file I/O Emulates BBx |  TRUE or FALSE |  FALSE  
SERVICE_OPTION_TYPE_BBX_EMULATION |  Sets BBx emulation mode

#### **Note:**  
Setting or resetting this parameter will affect the other BBx service options.

|  TRUE or FALSE |  FALSE  
  
#### **Note:**  
While the allowed value settings of the service options are TRUE and FALSE, the value parameter of **[PxIOSetLibOption](../Global%20Library%20Functions/PxIOSetLibOption.md)** is an _int_ variable; therefore, the function will interpret a non-zero value as TRUE and a zero value as FALSE.

BBx is a registered trademark of BASIS International Ltd.
