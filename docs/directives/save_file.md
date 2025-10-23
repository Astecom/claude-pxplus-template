# Directives 

**SAVE FILE** |  **_Save Image to Disk_**  
---|---  
  
##  Format

**SAVE FILE (**_chan_[,**ERR=**_stmtref_]) **TO** _filename$_  
  
**_Where:_**

_chan_ |  Channel or logical file number to be read from.  
---|---  
_filename$_ |  A valid filename with one of the following extensions: _.bmp_ , ._jpg_ , ._jpeg_ , ._j2k_ or ._png_.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
**TO** |  Mandatory keyword, not case sensitive.  
  
##  Description

Use the **SAVE FILE** directive to save an image written to ***BITMAP*** (virtual file) directly to an image file on disk with the extension ._bmp_ , ._jpg_ , ._jpeg_ , ._j2k_ or ._png_.

#### **Note:**  
This capability is for **_Windows only_**. The bitmap _chan_ can be a WindX-connected file if the pathname contains a **"[WDX]"** prefix. In addition, if the pathname contains **"[WDX]"** , then the _chan_ must be a WindX file.

##  See Also

[***BITMAP* Virtual Bitmap**](../file_handling/~bitmap~.md)

## Example

In this example, ***BITMAP*** is used to capture PxPlus internal bitmaps, which are then saved to _.bmp_ files using **SAVE FILE** :

> 0010 PicList$='picture'(*)+","  
>  0020 x=pos(","=PicList$); if x=0 then stop  
>  0030 f$=PicList$(1,x-1),PicList$=PicList$(x+1)  
>  0040 open (1)"*bitmap*;Width=1;Length=1"  
>  0050 print (1)'picture'(0,0,@x(mxc(1)+1),@y(mxl(1)+1),"!"+f$,4),  
>  0060 f$="/tmp/"+f$+".bmp"; erase f$,err=*proceed  
>  0070 save file (1) to f$  
>  0080 close (1)  
>  0090 goto 0020
