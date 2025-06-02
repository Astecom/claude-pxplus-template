# Directives 

**SAVE CONTROL** |  **_Save Image of Control_**  
---|---  
  
##  Format

**SAVE CONTROL** _ctl_id_ __**TO** _filename$_[,**ERR=**_stmtref_]

**_Where:_**

_ctl_id_ |  Unique value of the control to capture or 0 (_zero_) to capture the PxPlus desktop.  
---|---  
_filename_ |  A valid filename with one of the following extensions: _.bmp_ , ._jpg_ , ._jpeg_ , ._j2k_ or ._png_.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
**TO** |  Mandatory keyword, not case sensitive.  
  
##  Description

Use the **SAVE CONTROL** directive to capture graphical controls or the PxPlus desktop and store the results in an image file (._bmp_ , ._jpg_ , ._jpeg_ , ._j2k_ or ._png_). These saved images can then be used by the **'PICTURE'** mnemonic. This command will not work on invisible objects/windows.

As most of the functionality is controlled through Windows API calls, it is possible to receive an Error #15: Operating system command failed if the operating system is unable to execute the necessary functions.

The exact contents of the window to be captured can be controlled using the 'OPTION'("CaptureClientOnly","..") settings. When this **[CaptureClientOnly](../mnemonics/option.htm#captureclientonly)** option is enabled, only the interior of the window will be captured; otherwise, the window caption and frame will normally be captured.

#### **Note:**  
In a WindX environment, the **SAVE CONTROL** directive is passed to the WindX client; therefore, _filename_ must be a file on the WindX client, not on the server.

##  See Also

[**'PICTURE' Define/Draw Picture**](../mnemonics/picture.md)

##  Example

! SAVE.CTL - Create a Chart then save control & screen images  
print 'CS','font'("MS Sans Serif",-12),'GF',  
!  
! ^100 - Create the Chart  
Chrt=100;  
chart Chrt,@(20,0,40,20),sep=",",fmt="3DColumn",fnt="Verdana"  
chart load Chrt,"2,3,4,5,6,7,8,9,10,11,12,13/1,2,3,4,5,6,7,8,9,10,11,12/"  
Chrt'Title1$="Title 1",Chrt'Title2$="Title 2",Chrt'Footer$="Footer"  
Chrt'XAxisTitle$="X-Axis Title",Chrt'YAxisTitle$="Y-Axis Title"  
Chrt'CurrentSet=1,Chrt'CurrentPoint=0,Chrt'LegendText$="Item #1"  
Chrt'CurrentSet=2,Chrt'CurrentPoint=0,Chrt'LegendText$="Item #2"  
Chrt'PointText$="Jan,,Mar,,May,,Jul,,Sep,,Nov,,"  
!  
! ^100 - Save the images  
save control Chrt on "Chart.bmp",err=*next  
save control 0 on "Screen.bmp"  
!  
! ^100 - Print the saved images  
open (1)"*winprt*;asis"  
print (1)'picture'(@x(0),@y(0),@x(70),@y(24),"Chart.bmp",2),  
print (1)'picture'(@x(0),@y(25),@x(70),@y(49),"Screen.bmp",2),  
close (1)  
end
