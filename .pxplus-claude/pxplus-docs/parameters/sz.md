# System Parameters

**'SZ'=** |  **_Maximum Memory Size for Session_**  
---|---  
  
##  Description

Defines the maximum memory (in kilobytes) that the session is allowed to use. This value can also be changed via the **START** directive.

#### **Note:**  
The maximum setting is 1,048,576 (1024*1024), which is 1 GB of memory.  
  
If an application wishes to allocate more than this, it can set the [**'IZ'**](iz.md) system parameter, which when set, tells the system to ignore the value set in 'SZ'. When 'IZ' is set, the maximum memory will be determined by the operating system.

##  Default

**'SZ'=64000**

_(Support to change the default value from 32000 to 64000 was added in PxPlus 2024.)_

#### **Note:**  
For older Windows versions of PxPlus, this value was set to 1024 or the maximum memory available, whichever was less. For older UNIX/Linux versions, this value was 512.

## See Also

[**START Restart Session**](../directives/start.md)  
**['IZ'= Ignore Maximum Memory Setting](iz.md)**
