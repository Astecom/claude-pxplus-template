# Utility Routines 

***SYSTEM** |  **_Event Handling Object_**  
---|---  
  
## Format

_Initializes Event Handling Object:_ **DEF OBJECT**  _obj_id_ , **"*SYSTEM"**

**_Where:_**

***SYSTEM** |  Keyword used in defining PxPlus Event Handling Object.  
---|---  
_obj_id_ |  Numeric variable that will be used to save the object reference.  
  
## Description

This object simplifies event handling in PxPlus. Use this object to turn event handling on and off and to isolate any syntax changes from your programs. To prevent an application from looping endlessly, a limit of 64 nested events has been imposed.

The interface supports the following syntax options:

**SetTimer**(_secs_) |  **_Method Call.___** Fires a "timeout" event in PxPlus on intervals the number of seconds indicated by secs. The timer will continue to fire "timeout" events until a **SETTIMER(0)** is issued. The handling method will not receive any value when the event occurs. **_(Windows Only)_**  
---|---  
**SignalOnData**(_chan_ , 0 | 1) |  **_Method Call.___** Fires a "data available" event on the channel number given. A **1** indicates that the function is enabled; a **0** indicates that it is not. The channel number (_chan_) must refer to only certain kinds of files: console, TCP, serial connection, pipes and I/O redirection. The handling method will receive the channel number when the event occurs.  
**SignalOnClose**(_chan_ , 0 | 1) |  **_Method Call.___** Fires a "file close" event for the channel number given. A **1** indicates that the function is enabled; a **0** indicates that it is not. The handling method will receive the channel number.  
**SignalOnOpen**(0 | 1) |  **_Method Call.___** Fires a "file close" event for the channel number given. A **1** indicates that the function is enabled; a **0** indicates that it is not. The handling method will receive the channel number.  
**SignalLoadClass**(0 | 1) |  **_Method Call.___** Fires a "LoadClass" event whenever a class definition needs to be loaded into the system either through a **NEW** or **[LIKE](../../directives/like.md)** directive. The handling method will be passed the name of the class required. Once the event is serviced, the system will re-check to see if the desired class is now present; if not (or no event service provided), the standard load of a ".pvc" file will occur.
