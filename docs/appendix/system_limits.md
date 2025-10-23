# Language Reference - Appendix   
  
**System Limits** |   
---|---  
  
This section lists PxPlus system limits (these are subject to any operating system constraints of memory and resources). There is also a general limit of 2GB on all data storage.

The following are preset limits for **_PxPlus Basic Programs_** :

**For PxPlus Basic Programs** |  **Limit** |  **Notes**  
---|---|---  
Array (32-bit platforms),_max elements (millions)_ |  10 |   
Array, _dimensions_ |  3 |   
Command line (32-bit platforms)_, max characters_ |  512 |  Entire length includes path, parameters and arguments.  
COM interface method calls _, max arguments_ |  20 |   
Device Driver name length |  12 |  This is the size of the filename as it exists in the _*dev_ directory.  
Line number _, highest_ |  64999 |   
Memory _, max GB_ |  2 |  ... or the maximum the operating system allows, whichever is smaller.  
Mnemonics, _max characters_(billion) |  2 |   
String length for data Precision, _digits of accuracy_ |  18 |  Default  
Program size (32-bit platforms), _max GB_ |  2 |  ... or the maximum the operating system allows, whichever is smaller.  
Record limit, _max bytes per record_ |  10240 |   
Statement label,_max characters_ |  127 |   
Statement length,_max in KB_ |  32 |  _(The maximum statement length limit increased to 32 in PxPlus 2019 Update 2.)_  
Statement length (console editing), _max in KB_ |  4 |   
String size, _max GB_ |  2 |   
TCP sockets _max connections_ |  65535 |  The limit is 16 in Windows 95/98.  
TCP/IP address _, max characters_ |  256 |  _(The maximum number of characters increased to 256 in PxPlus 2018.0002.)_  
Variable name _, max characters_ |  127 |  This would include the leading or trailing percent sign as in the case of a global variable or integer.  
WebServer port _, highest port number_ |  65535 |  Values below 2000 reserved for standard Internet activities.  
Window size limits |  255 |  Maximum is 225 for lines and 255 for columns.  
  
The following are preset limits for PxPlus **_Data Files:_**

**For Data Files** |  **Limit** |  **Notes**  
---|---|---  
Channels, max number |  127 _or_ 65000 |  See [**'XF'**](../parameters/xf.md) system parameter.  
File size, max bytes |  2** ^ 31-1** |  See [**'MB'=**](../parameters/mb.md) system parameter.  
Files, max number open concurrently |  500 |   
Key segments (VLR/FLR files) |  48 - 96 |  The maximum number of segments for a keyed file is 96; however, some segment options take up two segment positions (such as key suppression). Use of these options will reduce the maximum number of segments.  
Key I/O buffers, max number |  100 |   
Keys, max number of |  16/256 |  0 - 15 for VLR/FLR, or 0 - 255 for EFF.  
Key max length  
 _segment/allsegments_ |  127/240 |  No key segment can exceed 127 bytes, and the maximum length of a multi-segment key is 240.

#### **Note** :  
Since external keys comprise a single segment, they are limited to 127 bytes.  
  
Record size (fixed), max bytes |  32167 |   
Record size (variable length), max bytes |  31000 / 2GB |  The limit is 32000 when the extended record size option is not used. When this option is used, the maximum is 2GB.  
  
**_Internal Limitations_**

With this increased string limit, a few internal logical limitations have been imposed to avoid passing excessively long strings to some of the system functions.

The following functions/directives are restricted to 8KB string lengths:

> **[CALL](../directives/call.md)** subprogram names/entry point names  
>   
> **[LIST_BOX LOAD](../directives/list_box.md)** for a single line  
>   
> **[SYSTEM_HELP](../directives/system_help.md)** command  
>   
> **[STR( )](../functions/str.md)** function format masks  
>   
> **[SYS( )](../functions/sys.md)** function system command  
>   
> **[XEQ( )](../functions/xeq.md)** pathname  
>   
> **[EVS( )](../functions/evs.md)** / **[EVN( )](../functions/evn.md)** expressions  
>   
> **[MSK( )](../functions/msk.md)** mask definition  
>   
> **[DAY_FORMAT](../directives/day_format.md)** and **[DTE( )](../functions/dte.md)** formats

## See Also

**['SZ'= Maximum Memory Size for Session](../parameters/sz.md)**
