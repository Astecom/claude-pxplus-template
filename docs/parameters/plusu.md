# System Parameters

**'+U'** |  **_WindX Auto-Download_**  
---|---  
  
##  Description

The **'+U'** parameter is used to control the dynamic auto-download features of PxPlus' WindX.

The auto-download system includes automatic version checking to make sure that the program and/or images residing on the workstation are the same version as the copies on the host. If the host version has a different last date modified, the host version will be downloaded again to the workstation. This guarantees that all the images and programs at the workstation will be the most current at all times.

Using the **'+U'** parameter, you can control the auto-download feature:

|  **'+U' = 0** |  No auto-download  
---|---|---  
|  **'+U' = 1** |  Auto-download all images and only programs found in the "***plus/wdx/usr** " directory _(Default)_  
|  **'+U' = 2** |  Auto-download all images and all programs  
|  **'+U' = 3** |  Auto-download all images and all programs found in the system library (added in PxPlus v8.11, build 9182)  
  
_(The '+U' system parameter was added in PxPlus v7.00.)_

##  Default

**1**

## See Also

[**Dynamic Downloads**](../windx/autoload.htm#dynamic)
