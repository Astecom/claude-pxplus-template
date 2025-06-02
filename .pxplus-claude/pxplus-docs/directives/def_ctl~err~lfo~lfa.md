# Directives

**DEF CTL/ERR/LFO/LFA/LPG/HWD/NID** |  **_Define System Variables_**  
---|---  
  
##  Formats

1\. _Set Contents of CTL Variable:_ |  **DEF CTL** =_num_  
---|---  
2\. _Set Contents of ERR Variable:_ |  **DEF ERR** =_num_  
3\. _Set Contents of LFO Variable:_ |  **DEF LFO** =_num_  
4\. _Set Contents of LFA Variable:_ |  **DEF LFA** =_num_  
5\. _Set Contents of LPG Variable:_ |  **DEF LPG** =_str_  
6\. _Set Contents of HWD Variable:_ |  **DEF HWD** =_str_  
7\. _Set Contents of NID Variable:_ |  **DEF NID** =_str_  
  
**_Where:_**

_num_ |  Value for setting selected variable. Numeric expression, integer.  
---|---  
_str_ |  Value for setting selected variable. String.  
  
##  Description

Use these **DEF** formats to define the contents of a specified system variable:

**_Numeric Variables:_**

|  DEF **CTL** |  Numeric code (integer) that represents a signal of user input from the keyboard or mouse.  
---|---|---  
|  DEF **ERR** |  Numeric value (integer) that indicates the last system-detected error.  
|  DEF **LFO** |  Channel/file number of the last file opened.  
|  DEF **LFA** |  Channel/file number of the last file or device accessed.  
  
**_String Variables:_**

|  DEF **LPG** |  Lead program to run (normally passed in the Command line or START directive).  
---|---|---  
|  DEF **HWD** |  Current directory when process started.  
|  DEF **NID** |  Network identifier for the processor running the application.  
  
_(The DEF CTL/ERR/LFO/LFA directives were added in PxPlus v7.00.)  
(The DEF LPG/HWD directives were added in PxPlus v8.11, build 9182.)  
(The DEF NID directive was added in PxPlus v8.30, build 9190.)_

## See Also

[**CTL Control Code: Key to End Input**](../variables/ctl.md)**  
** [**ERR Last System-Detected Error Value**](../variables/err.md)**  
** [**LFO Last File Number Opened**](../variables/lfo.md)**  
** [**LFA Last File Number Accessed**](../variables/lfa.md)**  
** [**LPG Lead Program Name**](../variables/lpg.md)**  
** [**HWD Starting/Home Directory**](../variables/hwd.md)**  
** [**NID Network or Network Node ID**](../variables/nid.md)
