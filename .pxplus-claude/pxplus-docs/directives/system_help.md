# Directives 

**SYSTEM_HELP** |  **_Invoke Windows Help_**  
---|---  
  
##  Formats

1\. _Invoke Standard Help_ _:_ |  **SYSTEM_HELP** _help_path_ _$_[,_help_key_ _$_][,**ERR=**_stmtref_]  
---|---  
2\. _Invoke Application-Supplied Help_ _:_ |  **SYSTEM_HELP " '**_help_msg_ ","", _ctl_id_ __[,**ERR=**_stmtref_]  
3\. _Open File Based on Type_ _:_ |  **SYSTEM_HELP { PRINT | EDIT | OPEN }**__**[ WAIT ]**_file_path_ _$_[,**ERR=**_stmtref_]  
  
**_Where:_**

_ctl_id_ |  Unique logical identifier for object. Numeric expression. Use integers, range **-** 32000 to +32000. Avoid integers that conflict with keyboard definitions (e.g. using 4 can cancel CTL=4 for the **F4** key).  
---|---  
_help_key_ _$_ |  Key to start within the Help file. This string expression must exactly match an entry unless the first character is: |  **?** |  To denote a partial key  
---|---  
# |  To denote that the key is the Help index  
_help_path_ _$_ |  Pathname of the Help file. If "*", then the standard PxPlus EXE Help file will be used. Maximum string size 8 KB.  
**'**_help_msg_ |  Application supplied message text, prefixed with an **'** (_apostrophe_).  
_file_path_ _$_ |  Pathname of the file that you want the system to open using its default OPEN, PRINT or EDIT logic. This is the same as opening the file from the operating system Shell/Explorer.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
_(The PRINT and EDIT options were added in PxPlus v6.30.)_

##  Description

Use the **SYSTEM_HELP** directive to invoke standard or application-supplied Help.

#### **Note:**  
This directive only functions **_in Windows or with the WindX terminal driver_**.  
  
When using WindX, the Help file must be resident on, or directly accessible to, the remote workstation. If used on a text mode terminal, the system will call ***text/sys_help** (or ***text/sys_print** for PRINT and ***text/sys_edit** for EDIT) to handle the request.

##  Format 1

**_Invoke Standard Help_**

**SYSTEM_HELP** _help_path_ _$_[,_help_ __key_ _$_][,**ERR=**_stmtref_]

Use this format to invoke the standard Windows Help system and CHM-based Help files. Help files must be created in accordance with the Windows standard.

Indicate the key to start within the Help index. (Optional) If a partial key (**?**) is used, the Help subsystem tries to find the entry in the Help index that most closely matches it. If the first character is a **#** (_pound sign_), then the key is considered the Help index for the file. If it is neither **?** nor **#** , the key must be an exact match for an entry in the Help index.

**_Example:_**

> 1000 input "Enter customer ID:",C$  
>  1010 if ctl=1 then system_help "OENTRY.HLP","Client"; goto 1000

**SYSTEM_HELP** allows you to use files other than those with a .HLP extension. PxPlus passes these directly to the Windows Shell command for processing, allowing Windows to apply normal file associations to automatically launch the appropriate application.

Preface the second argument with a **#** (_pound sign_) and append it to the first argument for URL handling.

**_Example:_**

> system_help "http://www.pvxplus.com/support.htm","mymark"

> would be:

> http://www.pvxplus.com/support.htm#mymark

Passing this to **SYSTEM_HELP** will automatically launch the default browser (if any) and jump to the Web page requested.

##  Format 2

**_Invoke Application-Supplied Help_**

**SYSTEM_HELP** "'_help_msg_ ","",_ctl_ __id_ __[,**ERR=**_stmtref_]

If this format is used, the text following the single quote in the Help message is displayed in a popup Help box.

**_Example:_**

> system_help "'Press Me","",10

##  Format 3

**_Open File Based on Type_**

**SYSTEM_HELP { OPEN | PRINT | EDIT } [ WAIT]**_file_path_ _$_[,**ERR=**_stmtref_] 

This directive can be used to request that the operating system open the file based on the file suffix.

**_Example:_**

If you want to print a document, you could issue:

> system_help print "c:\docs\My Resume.doc"

If no option (**OPEN** / **PRINT** / **EDIT**) is specified, the system will use **OPEN** by default.

If the **WAIT** option is specified, it must be the final option and will cause PxPlus to wait until the completion of a process initiated by the **SYSTEM_HELP** command.

_(The PRINT and EDIT options were added in PxPlus v6.30.)_
