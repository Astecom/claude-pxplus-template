# System Functions

**PTH( )** |  **_Return Pathname_**  
---|---  
  
##  Formats

1\. _Get Pathname of File:_ |  **PTH(**_filespec_[,**ERR=**_stmtref_]**)**  
---|---  
  
The following were added in PxPlus v7.00:

2\. _Get Full Pathname of File:_ |  **PTH(**_filename$_[, _filename_ $, ...] [,**ERR=**_stmtref_]**)**  
---|---  
3\. _Get Pathname of Dictionary:_ |  **PTH(*DICTIONARY** __[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_filespec_ |  Can be a numeric expression indicating the open channel number to use or a string expression containing the pathname or table name (if string is prefixed by the keyword **TABLE**) of the file to use.  
---|---  
_filename$_ |  String containing filename(s) whose existence is to be validated and full pathname returned.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
_(TABLE support was added in PxPlus 2018.)_

##  Returns

**_Format 1_** |  Pathname of the open file specified by the value in _filespec_.  
---|---  
**_Format 2_** |  Full pathname of the file specified in the _filename_. If none of the filenames provided exist, an Error #12: File not found exception is generated. Any filename that starts with a square bracket (ODBC, Remote, or other special file type) is **_not_** validated but simply returned to the application. Multiple filenames may be provided, comma-separated. If multiple filenames are provided, the path of the first file found will be returned.

#### **Note:**  
Pathnames with the special file command tags [**[WDX]**](../command_tags/wdx.htm) and [**[LCL]**](../command_tags/lcl.htm) are supported by this format.

_(The ability to specify multiple filenames was added in PxPlus v10.00.)  
([WDX] and [LCL] support was added in PxPlus 2016.)_  
**_Format 3_** |  Pathname of the current data dictionary file open.  
  
##  Description

The **PTH( )** function returns the operating system path of the file specified. (The value returned is an ASCII string reporting the full pathname, including directories and the filename.)

If the file is a device (e.g. a printer), the device name is returned.

#### **Note:**  
The file must be open for Format 1 of the **PTH( )** function to operate.

##  Example

With "/usr/ar"as current directory:

> open (26)"PRODFL"  
>  print "Just opened file: ",pth(26)  
>  ....  
>   
>  ->run  
> Just opened file: /usr/ar/PRODFL

**PTH( )** returns the device name when the file is a device:

> open (30)PRINTER$  
>  ?pth(30)  
>  LPT1
