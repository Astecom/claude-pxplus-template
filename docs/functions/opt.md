# System Functions

**OPT( )** |  **_Return File Open Options_**  
---|---  
  
##  Format

**OPT(**_chan_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_chan_ |  Channel or logical file number of the file to reference.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Value used in **OPT=** option.

##  Description

The **OPT( )** function returns the value used in the **OPT=** option of the **OPEN** directive for the given file. If the file referred to in the **OPT( )** function is not open, PxPlus returns an Error #13: File access mode invalid. If you omitted the **OPT=** option for an open file, the **OPT( )** function returns a null string.

Use this function primarily with device drivers to deal with such processes as generating banners and multiple copies.

##  See Also

**[OPEN Open a File for Processing](../directives/open.md)**

##  Example

! Report OPT( ) value for open COM port:  
settings$="9600,n,8,1,x"  
port$="COM2"  
open (1,isz=1,opt=settings$)port$  
print opt(1)  
end  
  
->run  
9600,n,8,1,x
