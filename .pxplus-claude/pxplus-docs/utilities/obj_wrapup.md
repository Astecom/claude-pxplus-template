# Utility Routines

***PLUS/OBJ/WRAPUP** |  **_Wrapup_ _Object_**  
---|---  
  
## Invocation

_oHandle_ _=_**NEW( "*plus/obj/wrapup",**  _program_entry_ _$, param$_ **FOR { FILE** _fileno_ __**| WINDOW | PROGRAM | OBJECT**  _objid_ **| CONTROL** _ctlid_ **} )**

**_Where:_**

_oHandle_ |  Variable that will receive the handle to the wrapup object. Generally, this will not be used unless you wish to add additional parameters/properties to be passed to the wrapup logic. (See **[Examples](obj_wrapup.htm#examples)**)  
---|---  
_program_entry_ _$_ |  String that contains the name of the program and/or entry point to be called when the wrapup event occurs. If the entry point is in the current program, the _program_entry_ _$_ can simply start with a **;** (_semi-colon_).  
_param_ _$_ |  Parameter string to be passed to the _program_entry_ _$_ logic, or if no program/entry point is specified, a directive to be executed when the wrapup occurs.  
_fileno_ |  Channel number of the file that when closed will initiate the wrapup logic.  
_objid_ |  Handle/ID of the object that when deleted/dropped will initiate the wrapup logic.  
_ctlid_ |  ID of the graphical control that, when deleted, will initiate the wrapup logic.  
  
## Description

The **"*plus/obj/wrapup.pvc"** object provides a simple means to establish _**'wrapup'**_ procedures for any program exit, window/file closure or control/object release. This module allows you to establish a piece of code to execute or a routine to call whenever a wrapup related event occurs.

You can specify either the name of program/entry point to be called when the wrapup event occurs and an optional parameter to pass to it, or if the program/entry point is empty, the system will simply issue an EXECUTE of the parameter field.

Whenever the **_program;entry_** is called, it is passed two parameters. The first is the parameter string that was passed to the object creation when the NEW( ) function was called. The second parameter is the object identifier of the wrapup object itself. The wrapup object allows the user to add additional properties so you pass additional values to the wrapup routine by simply assigning a value to a property in the wrapup object. The wrapup routine can access these properties using the object ID that will be passed as the second parameter to the wrapup routine.

_(The Wrapup object *PLUS/OBJ/WRAPUP was added in PxPlus v8.11.)_

## Timing of Event

To have the event occur just prior the close of a file:

> x = NEW( "*plus/obj/wrapup", "program;entry", "param" FOR FILE nnn)

To have the event occur before the current window is closed/dropped:

> x = NEW( "*plus/obj/wrapup", "program;entry", "param" FOR WINDOW)

To have the event occur just before End/Exit/Return from current program:

> x = NEW( "*plus/obj/wrapup", "program;entry", "param" FOR PROGRAM)

To have the event occur just before specified object is deleted/dropped:

> x = NEW( "*plus/obj/wrapup", "program;entry", "param" FOR OBJECT objid)

To have the event occur just before specified control is deleted from the screen:

> x = NEW( "*plus/obj/wrapup", "program;entry", "param" FOR CONTROL ctlid)

## Passing Additional Values

The wrapup object allows new properties to be dynamically created in the application.

**_Example:_**

If you wanted to save the original precision for subsequent restoration in the wrapup:

> oWrap=new("*plus/obj/wrapup",";Wrapup" for program)  
> oWrap'sv_prc=prc  
>  precision 5

This would create a new property in the wrapup object so that in the Wrapup routine, the original value could be retrieved using the second parameter passed in as:

> Wrapup:  
>  enter *,oWrap  
>  precision oWrap'sv_prc  
>  exit

##  Example

If your program needed to set a system parameter, such as KR, but you wanted to make sure it would be reset once the program was done, regardless if the program exited normally or took an error exit:

Using EXECUTE:

> x=new("*plus/obj/wrapup","","SET_PARAM 'KR'="+str(prm('KR')) for program)  
> set_param 'KR'

When the program exited, the system would then EXECUTE the command to restore the 'KR' setting to its original state.

Using a Wrapup routine:

> x=new("*plus/obj/wrapup",";Reset_KR" for program)  
> x'kr_value=prm('KR') ! Create a property in the object  
> set_param 'KR'  
>   
>    
>   
> Reset_KR:  
>  enter *,objid  
>  set_param 'KR'=objid'kr_value  
>  return

Either of these approaches assures that no matter how the program terminated, the parameter would be reset.
