# System Parameters

**'+I'** |  **_Control the_ _Intel-i-buf™_ _VLR Buffer Manager_**  
---|---  
  
##  Description

The **'+I'** parameter controls whether PxPlus will use its intelligent buffer management scheme on VLR files. This scheme, when enabled _(default)_ , can improve the performance of file IO operations to VLR files which use dedicated file buffers (SET_NBF 0 or OPEN with the NBF option).

The Intel-i-buf™ also adjusts the priority of data buffers based on their contents to minimize disk accesses.

_(The '+I' system parameter was added in PxPlus v7.10, build 9171.2.)_

##  Default

**_On_**

_(Enabled as part of the File Caching control prior PxPlus v7.10, build 9171.2.)_
