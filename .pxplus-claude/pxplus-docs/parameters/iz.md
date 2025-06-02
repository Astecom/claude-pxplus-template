# System Parameters

**'IZ'=** |  **_Ignore Maximum Memory Setting_**  
---|---  
  
##  Description

When the **'IZ'** parameter is set, the system will ignore the maximum memory setting defined by either the **START** directive or the **'SZ'=** system parameter.

Use the **'IZ'** parameter when converting an application from another language where the values on the **START** directive may be incompatible with PxPlus standards.

#### **Important Note:**  
Care should be taken when running systems with the **'IZ'** parameter enabled as it allows an application to allocate potentially all of the available memory to the process. This can cause system failures and/or severe system degradation.

##  Default

**_Off_** \- Memory use will be limited via **START** and **'SZ'=** settings.

## See Also

[**START Restart Session**](../directives/start.md)  
[**'SZ'= Maximum Memory Size for Session**](sz.md)
