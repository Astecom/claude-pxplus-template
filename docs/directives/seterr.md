# Directives

**SETERR** |  **_Set Error Transfer_**  
---|---  
  
##  Formats

1. |  _Error Transfer to Line/Label:_ |  **SETERR** _stmtref_  
---|---|---  
2. |  _Error Transfer to Program:_ |  **SETERR** _prog_ _$_  
3. |  _Error Transfer to Entry Point:_ |  **SETERR** _prog_ _$_[;_entry$_]  
  
**_Where:_**

_;entry$_ |  Optional entry label in the error-trapping program. Define once per session.  
---|---  
_prog_ _$_ |  Name of a generic error-trapping program. Define it once per session.  
  
##  Description

Use **SETERR** to define the transfer address for any error for which you have not used the **ERR=** option. While a **SETERR** is in effect, any error (divide check, subscript range error, etc.) transfers control to the statement number, label or program specified in **SETERR**. To disable the **SETERR** transfer in a program, use statement number 0000 as _stmtref_.

Once a **SETERR** transfer occurs, PxPlus inhibits further **SETERR** transfers until either another **SETERR** is executed or a **RETRY** directive re-executes the statement, which caused the error. This prevents system looping caused by errors in an error handler.

The following table shows the **_order of precedence_** for error handling:

**** |  **ERR=** |  Error trapping at the line level.  
---|---|---  
**** |  **SETERR** _stmtref_ |  General error trapping within a program.  
**** |  **SETERR** _"prog;entry"_ |  General error trapping for the current session. Entry point is optional.  
**__** |  **_... else ..._** |  Drop to the console and report the error (provided the **['XT'](../parameters/xt.md)** parameter is disabled).  
  
**ERROR_HANDLER READ** can be used to determine the current **ERROR_HANDLER** or **SETERR** program in effect.

##  Using SETERR in an Object

The **SETERR** directive **_(Format 1 only)_** can be specified in any object class definition. If present, all calls to methods or program logic associated with properties as defined in the class will automatically have the **SETERR** applied to them.

_(Support for a SETERR clause in any object class definition was added in PxPlus 2014 - Feature Pack 1.)_

##  See Also

**[ERROR_HANDLER Define Generic Handler](error_handler.md)**  
**[Error Processing](../PxPlus%20User%20Guide/Development%20Tools/Error%20Handling%20and%20Debugging/Error%20Processing.md)**

##  Example

3160 seterr 3230  
3170 data 1,2,3,"CAT"  
3180 data 4,5,6,"DOG"  
3190 read data iol=3220  
3200 print iol=3220  
3210 goto 3190  
3220 iolist X,Y,Z,A$  
3230 print "GOTCHA"  
3240 seterr 0000 ! Disables seterr  
3250 stop  
  
->goto 3160  
->begin  
->run  
1 2 3CAT  
4 5 6DOG  
GOTCHA
