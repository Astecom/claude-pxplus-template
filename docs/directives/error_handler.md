# Directives 

**ERROR_HANDLER** |  **_Define Generic Handler_**  
---|---  
  
##  Formats

1. |  _Define/Remove Generic Handler_: |  **ERROR_HANDLER** [_prog_ _$_]  
---|---|---  
2. |  _Find Current Name_ _:_ |  **ERROR_HANDLER READ** _var_ _$_  
  
**_Where:_**

_prog_ _$_ |  Name of the error handler program. String expression. A null string ("") will cancel the current error handler. If desired, an optional entry label within the error handler program may be specified (as in "Myerr;ErrTrap").  
---|---  
_var_ _$_ |  String variable. Receives the name of the current error handler.  
  
##  Description

Use the **ERROR_HANDLER** directive to assign a generic error**-** trapping program to be invoked internally by the system whenever an error occurs that is not already handled (i.e. by an **ERR=** statement reference or a **[SETERR](seterr.md)** directive).

If the system is unable to properly load and execute the specified error**-** handling program, PxPlus will display Error #54: Unable to Load Error Handler.

##  Format 1

**_Define/Remove Generic Handler_**

**ERROR_HANDLER** [_prog_ _$_] 

This defines an error**-** handling program to take corrective action and then return to the offending statement via an **[EXIT](exit.md)** directive. If you have an error handler program in place when an error occurs without handling instructions, PxPlus calls this program to deal with it.

If you use an **EXIT ERR** directive to return from the error**-** handling program, the normal error processor is invoked and control can be transferred to Command mode.

To cancel the current error handler, omit the program name (i.e. use **ERROR_HANDLER**). The error handler program remains in effect until a **[START](start.md)** directive is executed.

The following is a typical START_UP program:

> prefix "===/ MISC/"  
>  if who<>"BOSS" \  
>  then setesc off  
>  error_handler "*ERROR"  
>  ! The asterisk marks "*ERROR" as a system utility

##  Format 2

**_Find Current Name_**

**ERROR_HANDLER READ** _var_ _$_

Use the **READ** format to find out the name of the program currently in effect as the error handler:

> error_handler read A$  
>  ?a$  
>  *error

##  See Also

[**START Restart Session**](start.md)
