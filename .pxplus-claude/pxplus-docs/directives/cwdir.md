# Directives

**CWDIR** |  **_Change Working Directory_**  
---|---  
  
##  Format

**CWDIR** _new_dir_ _$_[,**ERR=**_stmtref_]  
  
**_Where:_**

_new_dir_ _$_ |  String expression. Name of the new directory in which you want to work or run applications. Include a disk letter and colon ":" to change to another drive.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **CWDIR** directive to change from the current working directory to a new one. If the specified directory name does not exist, PxPlus returns an Error #12: File does not exist (or already exists).

##  See Also

**[LWD Current Working Directory](../variables/lwd.md)**  
**[HWD Starting/Home Directory](../variables/hwd.md)**

##  Example

cwdir "C:\"+C$+"PROGS"  
run "SOMETHING"  
cwdir hwd ! Return home
