# System Parameters

**'XF'** |  **_Extended File Channels_**  
---|---  
  
##  Description

Sets extended file mode where the channels range from 1 - 32767 for local files and 32768 - 65000 for global files. Channel 0 (zero) is the console or terminal.

##  Default

**_Off_** \- Channels 1 to 63 are used for local files, and 64 to 127 are used for global files.

#### **Note:**  
Before you turn the **'XF'** parameter **_Off_** , make sure that none of your currently open files have extended file numbers (which are inaccessible when you SET_PARAM -'XF').
