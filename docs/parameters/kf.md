# System Parameters

**'KF'=** |  **_Keyed File Format_**  
---|---  
  
##  Description

To set the default format type for creation by the **KEYED** directive.

**_Where:_**

|  **'KF'=0** |  The **KEYED** directive always creates VLR or FLR-based files.  
---|---|---  
|  **'KF'=1** |  The **KEYED** directive creates EFF formatted files **_with_** a 2GB limit.  
|  **'KF'=2** |  The **KEYED** directive creates EFF formatted files **_without_** the 2GB limit on platforms that provide Large File Support (LFS), 64-bit addressing. Setting this parameter on a system that does not provide LFS will automatically change to a **'KF'** value of 1.  
  
##  Default

**'KF'=0**

## See Also

**[KEYED Create Single/Multi-Keyed File](../directives/keyed.md)**
