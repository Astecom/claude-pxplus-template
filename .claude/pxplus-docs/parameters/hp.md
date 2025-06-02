# System Parameters

**'HP'** |  **_Use Haru PDF Library_**  
---|---  
  
##  Description

Set the **'HP'** parameter to **_On_** to use the LibHaru library for PDF creation via ***PDF***. Set to **_Off_** to use the deprecated native PDF creation interface via ***PDF***.

LibHaru is an open-source library that enables the use of any TrueType font (**.ttf** and **.ttc** files) loaded on your system, access to PDF security features, and the ability to generate PDF files that are ISO compatible (PDF/A-1 - ISO ISO 19005-1:2005).

To use this feature, the Haru library must be present (**libhpls.dll** on Windows, **libhpls.so** on UNIX/Linux systems).

#### **Note:**  
The **'HP'** parameter is automatically forwarded to the WindX workstation for processing when running PxPlus.

## Default

**_On_** \- LibHaru support is enabled. _(for PxPlus 2016 and higher)_

**_Off_** \- LibHaru support not enabled. _(for all other versions)_

## See Also

**[*PDF* PDF Print Interface](../file_handling/~pdf~.md)**
