# Control Object Properties

**Pseudo Objects** |   
---|---  
  
Pseudo objects provide a means to access files, windows and all controls directly as objects. Using pseudo object handles provide a more consistent way to access attributes of system elements and can make it easier for a programmer used to OOP-style programming to deal with the items. Through the use of these pseudo objects, the programmer can access various properties of a file, window or control from other than the currently active window.

Pseudo handles have set values based in the system element they represent. Their value is based on the following algorithm(s):

|  **_For File Pseudo Objects:_** |  The object handle will be 1,000,000,000 + file number.  
---|---|---  
|  **_For Window Objects:_** |  The object handle will be 1,000,000,000 + window number * 100,000.  
|  **_For Control Objects:_** |  The object handle will be 1,000,000,000 + window number * 100,000 + the control ID.  
  
**_Examples:_**

To access the properties of File 15, the Pseudo object would be 1000000015.  
To access the properties of Window 2, the value would be 100020000000000.  
To access control 234 in window 2, the handle would be 100020023400000.

#### **Note:**  
The window numbers used in the object handle are always 1 based regardless of the value of the [**'B0'**](../parameters/b0.md) system parameter.

## See Also

[**Using File Handles**](sect2.1/a.md)**  
** [**Using Window Handles**](sect2.2/a.md)**  
** [**Using Control Handles**](sect2.3/a.md)

## Generating Pseudo Handles

The system object *SYSTEM provides three methods to generate pseudo object handles:

**Method Call** |  **Description**  
---|---  
**'File(**_file_no_ **)** |  Returns a Pseudo object handle for the specified file.  
**'Window(**_window_no_ **)** |  Returns a Pseudo object handle for the specified file. If _window_no_ zero is given, the current window handle is returned.  
**'Control(**_control_no_ {, _window_no_ } **)** |  Returns a Pseudo object handle for the specified control. If no window number is provided, the current 'active' window will be assumed.  
  
**_Example 1:_**

Sysobj=new("*SYSTEM")  
FileHdl=SysObj'File(5) ! This will yield a pseudo handle to the file open on channel 5

**_Example 2:_**

BUTTON 10,@(10,10,10,2)="Hello"  
sysobj=NEW("*system")  
window_1_obj=sysobj'window(1)  
ctrl_10_in_wdw_1_obj=sysobj'control(1,10)  
ctrl_10_in_curr_wdw_obj=sysobj'control(10)  
! Create a new window which has focus  
PRINT 'DIALOGUE'(5,5,80,24,"",'CS'),'SR'  
! Access properties from the original window  
PRINT "Properties of original Window: ",window_1_obj'*  
PRINT  
PRINT "Its caption was: ",window_1_obj'caption$  
PRINT "Setting it to DAY";  
window_1_obj'caption$=DAY  
PRINT  
! Access properties from controls on the original window  
PRINT "Change button control text to 'world'"  
ctrl_10_in_wdw_1_obj'text$="world"  
ESCAPE
