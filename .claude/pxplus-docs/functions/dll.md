# System Functions 

**DLL( ) / DLX( )** |  **_Call External Function_**  
---|---  
  
##  Formats

1. |  _Load Library_: |  _lib_num_ = **DLL(ADDR** _lib_string$_[,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Unload Library_ _:_ |  **DLL(DROP** _lib_num_[,**ERR=**_stmtref_]**)**  
3. |  _Get Function Address_: |  _fnc_addr_ __ = **DLL(FIND** _lib_num,fnc_name$_[,**ERR=**_stmtref_]**)**  
4. |  _Call Using String_ _:_ |  **DLL( [FLOATING POINT]**_lib_string$,fnc_name$,arg_[_,arg,arg.._.][,**ERR=**_stmtref_]**)**  
5. |  _Call by Library Number_ _:_ |  **DLL(**__**[FLOATING POINT]**_lib_num,fnc_name$,arg_[ _,arg,arg.._.][,**ERR=**_stmtref_]**)**  
6. |  _Call Using Function Address_ _:_ |  **DLL( [FLOATING POINT] *** ,_fnc_address,arg_[_,arg,arg.._.][,**ERR=**_stmtref_]**)**  
  
The following were added in PxPlus v10:

7. |  _Define Callback Routine_ _:_ |  **DLL (CALL OBJECT** _obj_id_ __**EVENT** _"event_name"_ [,**ERR=**_stmtref_]**)**  
---|---|---  
8. |  _Free Callback Routine_ _:_ |  **DLL (CLEAR** _routine_addr_ __[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_arg_ _, arg..._ |  Parameters or arguments to pass to the function. The number and type of arguments you use vary from function to function. See **DLL( ) Parameters**.  
---|---  
_event_name_ |  Name of the event that will be passed to the referenced _obj_id_ __ to handle callbacks.  
_fnc_addr_ |  Address of the desired function. Numeric expression.  
_fnc_name_ |  Name of the function. The function name is the _case-sensitive_ entry point in the DLL. Some API functions have an appended letter A for ASCII; others have an appended W for wide character UNICODE. String expression.  
_lib_num_ |  Internal library identifier used to reference a _loaded_ library. Numeric expression.  
_lib_string_ _$_ |  Name of the .dll, .exe or other shared library that contains the function to be used. String expression.  
_obj_id_ |  Object handle for an object that contains the callback logic.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
**FLOATING POINT** |  The FLOATING POINT keyword is used to declare that the value being returned or passed is a floating point (double) value. If the keyword occurs immediately following the open parenthesis of the **DLL** function, then the function is assumed to return a floating point number:

> DLL(FLOATING POINT... ) )

If the keyword precedes any passed-in numeric _arg_ value, then the value will be passed as a floating point value:

> DLL("MyDll", "MyFunc", FLOATING POINT x1, FLOATING POINT y1, ... ) )  
  
_(The ability to specify FLOATING POINT was added in PxPlus v9.00.)_

##  Returns

Calls external function or returns DLL identifiers and addresses.

#### **Note:**  
**DLL( )** and **DLX( )** functions are only available under MS Windows, as well as most UNIX/Linux environments. **TCB(196)** will return 1 if the function is supported. DLLs do not need to be registered to be used in PxPlus.

Under WindX, remember that DLLs run on the host. Use a call to a WindX program to invoke a DLL.

##  Description

Use the **DLL( )** function to access functions within DLLs that are external to PxPlus. It is similar to a call to execute external DLL functions from inside your PxPlus applications. The **DLL( )** function will also return any function identifiers and addresses, as defined by the DLL routine.

In 32-bit environments, the **DLX( )** function is unnecessary since both **DLX( )** and **DLL( )** functions return 32-bit values. In 16**-** bit environments, **DLL( )** returns 16-bit values while the **DLX( )** function returns 32-bit values.

A DLL is a freestanding library of "C**-** style" functions commonly used in the Microsoft Windows and/or various UNIX/Linux systems. In Windows, all functions controlling the environment are done through DLL calls with function names as the entry points in the DLL. Most Windows API functions reside in the following DLLs:

**32-bit DLL** |  **Purpose**  
---|---  
USER32.DLL |  USER32.DLL User interface  
KERNEL32.DLL |  System interface  
GDI32.DLL |  Graphics interface  
  
#### **Warning!**  
You can use third party DLLs but make sure you have good documentation on what you are passing and getting back. PVX Plus can provide assistance on how to call a DLL but does **_not_** provide support for third party DLLs.  
  
There is no validation on what you pass. Bad pointers can cause memory corruption and potential GPFs.

##  Format 1

**_Load Library_**

_lib_num_ =**DLL**(**ADDR** _lib_string$_[,**ERR=**_stmtref_])

Use the **DLL(ADDR** ...**)** format to address or load the DLL. This lets you load and lock a library into memory and obtain the addresses of its functions and the internal identifier. You can then use this identifier on subsequent **DLL( )** functions to avoid having to reload the DLL. Note that the return value is the handle to the DLL and should be used in all subsequent **DLL( )** calls.

#### **Note:**  
In some instances (e.g. when the DLL maintains internal data structures), it is mandatory to keep the DLL loaded in order to use or call the function. When in doubt, load the DLL (not needed for Windows API DLLs). Keeping the DLL loaded has memory consequences but commonly lets you gain access speed.

##  Format 2

**_Unload Library_**

**DLL**(**DROP** _lib_num_[,**ERR=**_stmtref_])

Use the **DLL(DROP** ...**)** format to unload a loaded DLL when you no longer need it.

#### **Note:**  
If you **LOAD** a DLL, you must **DROP** or unload it to free up the memory that was allocated to it.

##  Format 3

**_Get Function Address_**

_fnc_address_ =**DLL**(**FIND** _lib_num,fnc_name$_[,**ERR=**_stmtref_])

You can obtain the address of a **DLL( )** function in an addressed (loaded) library by using the **FIND** format. This format asks the **DLL( )** function to return its current address, which you can then use in subsequent calls. The address is only valid while the library is loaded.

In some cases, you may need to use the return value as a memory pointer. The **MEM( )** function can be used to obtain memory information (address, contents, etc.). If you need a 32**-** bit result from a **DLL( )** call, use the function **DLX( )** instead.

When you call an external function and pass arguments to it, you can identify it using a string, a library number or a function address.

See **DLL( ) Parameters** and [**MEM( ) Return Memory Value**](mem.md).

##  Format 4

**_Call Using String_**

**DLL**(_lib_string$,fnc_name$,arg_[_,arg,arg.._.][,**ERR=**_stmtref_]) 

Use this format to call the **DLL( )** function using strings to identify the library and function by name.

##  Format 5

**_Call by Library Number_**

**DLL**(_lib_num,fnc_name$,arg_[_,arg,arg.._.][,**ERR=**_stmtref_]) 

Use this format to call the **DLL( )** function using a numeric to identify the library by its internal identifier and the function name.

##  Format 6

**_CALLs Using Function Address_**

**DLL**(***** ,_fnc_address,arg_[_,arg,arg.._.][,**ERR=**_stmtref_])

Use this format to call a **DLL( )** function in a loaded library using the internal function address as a memory pointer.

#### **Note:**  
The address is only valid while the library is loaded.

## Formats 7 and 8

**_CALLBACK (Windows Only)_**

PxPlus supports up to five active callbacks, each of which can have up to 15 parameters. It has been implemented as part of the **DLL** function with two options:

> **DLL(CALL** ...**)** ! To define the callback function and get its address  
> **DLL(CLEAR** ...**)** ! To free the callback address

All callback functions **_must_** be defined within an object so they can return a value to the caller. The callback is internally processed as an event and processed by a event handler within the object. To obtain a reference to the callback routine, the **DLL(CALL** ...**)** function is called to return the callback address for the event handler within the object specified. When finished with the callback, the entry must be freed using the **CLEAR** option of the **DLL** function.

**_Example:_**

To get the callback address for "NameOfEvent" in obj_id:

> CB_valu=dll(call object obj_id event "NameOfEvent")

You can then pass CB_valu to the external DLL. When finished, either drop the object or issue the following to free the callback:

> Junk=dll(clear CB_valu)

Below is a sample callback object:

> def class "cb"  
>  function EnumWindow(hwnd,lparam) for event "EnumWindows"  
>  enter hwnd,lparam  
>  print "Lparam=",lparam," hwnd=",hwnd  
>  return 1  
>  end def

Below is a test program that uses the callback functionality to spin through all the Windows:

> cb=new("cb")  
>  proc=dll(call object cb event "EnumWindows")  
>  x=dll("USER32.DLL","EnumWindows",proc,123)  
>  print dll(clear proc)  
>  drop object cb

## DLL( ) Parameters

DLLs normally expect one of two types of parameters: _integers_ and _pointers_. The arguments/parameters you use when you call the **DLL( )** function are passed to the function in the following ways:

**Example** |  **Type** |  **32-Bit Data Format Passed** |  **16-Bit Data Format Passed**  
---|---|---|---  
X$ |  Strings |  Address of string |  Address of string  
X |  Numeric Variables |  Double word value (32-bit)  |  Double word value (32-bit)   
X% |  Integer Variables |  16-bit value passed as 32-bit  |  Single word value (16-bit)  
INT(X+1) |  INT( ) Function |  Standard 32-bit  |  Single word value (16-bit)  
X+Y |  Numeric Expression |  32-bit value |  32-bit value  
  
##  Examples

**_Example 1:_** The following example swaps the left and right mouse buttons:

> A=dll("USER.EXE","SwapMouseButton",1) ! Passes 32-bit value

> **_or_**

> A=dll("USER.EXE","SwapMouseButton",int(1)) ! Passes 16-bit value  
>  if A<>0 \  
>  then print "Could not swap button"

An integer value of 0 swaps the mouse buttons back.

**_Example 2:_** Pointers are commonly used to pass string values, usually terminating with a null byte. This example passes a pointer to a DLL to return the handle of a window with the title Notepad:

> A=dll("USER.EXE","FindWindowA","Notepad"+$00$,0)

**_Example 3:_** Sometimes, a pointer refers to a region of memory or a structure to receive information from a DLL. You must pre**-** allocate a string variable to receive the data. The example below returns the window title, given the handle. The returned string terminates with a null byte ($00$):

> dim X$(256)  
>  A=dll("USER.EXE","GetWindowTextA",Hndl,X$,len(X$))

**_Example 4:_** To pass a pointer to a number, define a two**-** or four**-** byte string and read the value after swapping the bytes:

> dim X$(256)  
>  A=dll("SOME.DLL","GetSomething",Hndl,X$)  
>  X=dec($00$+swp(X$))

**_Example 5:_** In this example, program DLLS1 starts Notepad, locates the handle and closes the window handle:

> ! DLLS1 Start Notepad and Close It  
>  invoke "NOTEPAD"  
>  input "Press enter after Notepad has started ",X$  
>  HWND%=dll("USER32.DLL","FindWindowA","Notepad"+$00$,0)  
>  if HWND%<=0 \  
>  then print "Notepad not found!";  
>  stop  
>  WM_CLOSE=dec($0010$),WPARAM%=0,LPARAM=0  
>  X=dll("USER32.DLL","SendMessageA",HWND%,int(WM_CLOSE),WPARAM%,LPARAM)

##  Inter-Task Communication

This example illustrates inter**-** task communication. The program DLLS3 starts a second pvxwin32 session, finds its Window handle, sends CTL values 101 through 103, defines an atom (pointing to a string variable in a global string table) and passes the atom reference to the second session. Then, it waits for the second session to terminate.

> 0010 ! DLLS3 - Inter-task communication - Send CTLs and a string  
>  0020 MAX_COL=mxc(0)+1,MAX_ROW=mxl(0)+1  
>  0030 print 'show'(-1),'dialogue'(0,0,MAX_COL,int(MAX_ROW/2)-1,"Inter-task communication",'mode'($000F$)+'CS'),  
>  0040 if arg(1,err=*next)="Receiver" then goto RECEIVER  
>  1000 ! ^1000  
>  1010 LOOP=0  
> 1100 ! ^100 - Find Receiver and start if necessary  
>  1110 if LOOP++>1 then print "Cannot start/find the Receiver!"; stop  
>  1120 HWND%=dll("USER32.DLL","FindWindowA",0,"PVXWIN32 - Receiver"+$00$)  
>  1130 if HWND%>0 then goto 1200  
>  1140 invoke arg(0)+" "+pgn+" -ARG Receiver"  
>  1150 wait 1  
>  1160 goto 1100  
>  1200 ! ^100 - Send CTL 101 to 103 to Receiver  
>  1210 WM_USER=dec($0400$),WPARAM%=0,LPARAM=0  
>  1220 for WPARAM%=101 to 103  
>  1230 print "Sending CTL value of",WPARAM%," to Receiver"  
>  1240 X=dll("USER32.DLL","SendMessageA",HWND%,int(WM_USER),WPARAM%,LPARAM)  
>  1250 next  
>  1300 ! ^100 - Send CTL 104 and the address of a string  
>  1310 WM_USER=dec($0400$),WPARAM%=104,LPARAM=0  
>  1320 ATOM$="Message to Send ",LPARAM=dll("KERNEL32.DLL","GlobalAddAtomA",ATOM$+$00$)  
>  1330 print " Sending CTL Value ",WPARAM%,"to Receiver with message:",'BR',ATOM$,'ER'  
>  1340 X=dll("USER32.DLL","SendMessageA",HWND%,int(WM_USER),WPARAM%,LPARAM)  
>  2000 ! ^1000  
>  2010 LOOP=0; print "Waiting for Receiver to shutdown",  
>  2020 HWND%=dll("USER32.DLL","FindWindowA",0,"PVXWIN32 - Receiver"+$00$)  
>  2030 if HWND%<=0 then goto 2100  
>  2040 print ".",; if LOOP++<30 then wait 1; goto 2020  
>  2100 ! ^100  
>  2110 X=dll("KERNEL32.DLL","GlobalDeleteAtom")  
>  2120 print 'drop'(-1),'show'(2),  
>  2130 stop  
>  3000 ! ^1000 - Receive CTL values from Sender  
>  3010 RECEIVER:  
>  3020 print 'caption'("PVXWIN32 - Receiver"),'move'(0,int(MAX_ROW/2)+1),  
>  3030 input "Press F4 when finished ",*; print @(0),'BR',"Received CTL =",ctl,'ER','CL'  
>  3040 if ctl=4 then goto 3200  
>  3050 if ctl<>104 then goto 3030  
>  3060 ATOM=tcb(81) ! Atom identifier  
>  3070 dim ATOM$(512)  
>  3080 X=dll("KERNEL32.DLL","GlobalGetAtomNameA",ATOM,ATOM$,len(ATOM$))  
>  3090 X=dll("KERNEL32.DLL","GlobalDeleteAtom") ! Release Atom  
>  3100 X=pos($00$=ATOM$); if X then ATOM$=ATOM$(1,X-1)  
>  3110 print "Received: ",'BR',ATOM$,'ER'  
>  3120 goto 3030  
>  3200 ! ^100  
>  3210 stop
