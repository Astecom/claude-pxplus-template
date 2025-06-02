# System Parameters

**'WD'=** |  **_Defer File Writes_**  
---|---  
  
##  Description

Defers all file writes until _nnn_ __ updates have been done, the file is closed, or an **INPUT** is requested from channel #0 (terminal).

#### **Note:**  
The **'WD'** parameter **_only_** affects Keyed file I/O.

Performance can be improved in single user environments if the **'WD'** parameter is set high.

##  Default

**'WD'=10000** in a single user environment under Windows; otherwise **'WD'=100**.

##  Example

set_param 'WD'=10000
