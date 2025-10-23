# System Parameters

**'XU'** |  **_Clear Keyed File Header Locks Prior to DLL/OCX Call_**  
---|---  
  
## Description

**_(Windows Only)_**

The **'XU'** parameter is used to clear keyed file header locks prior to invoking an external DLL call or OCX object.

When keyed files (VLR, FLR or EFF) are accessed, the file header is temporarily locked to avoid changes to the key tables while searching for records. In most cases, this lock is automatically removed. However, if a file header lock is still pending, setting the 'XU' system parameter will automatically unlock any outstanding keyed file header locks prior to invoking the DLL or OCX.

#### **Note:**  
Setting this parameter may slow down applications that make frequent calls to either DLLs or OCXs while reading keyed files.

_(The 'XU' system parameter was added in PxPlus 2016.)_

## Default

**_Off_**
