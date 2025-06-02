# Directives 

**PROCESS EVENT** |  **_Generate Internal Event_**  
---|---  
  
##  Format

_Generate Internal Event:_ |  **PROCESS EVENT** _eventname_ _$_ **[** ,_arglist_ _,..._**]** **[** ,**ERR=**_stmtref_ **]**  
---|---  
  
**_Where_** _:_

_eventname_ _$_ |  Name of the event being generated.  
---|---  
_arglist_ |  Optional parameters to be passed to the event handler.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

This directive will cause the system to execute the actions assigned to the event named in _eventname_ _$_. It will also pass any parameters (values, variables or expressions) supplied in the _arglist_ to the action processing logic.

An optional **ERR=** branch may be supplied to trap any errors which may occur or be returned by the event actions.

_(The PROCESS EVENT directive was added in PxPlus v11.00.)_

##  System Defined Events

The following table lists the PROCESS EVENTS currently implemented within the PxPlus environment (as of PxPlus 2014):

**Event Name** |  **Arguments Passed** |  **Description**  
---|---|---  
**FileOpen** |  Path$, Channel |  Generated when a data file is opened  
**FileClose** |  Path$, Channel |  Generated when a data file is closed  
**FileErase** |  Path$ |  Generated when a file is erased  
**FilePurge** |  Path$ |  Generated when a file is cleared as a result of a **[REFILE](refile.md)** or **[PURGE](purge.md)** directive  
**FileRename** |  OldName$, NewName$ |  Generated when a file is renamed  
**SentEMail** |  To$, Subject$ |  Generated when an email is sent by **[*WEB/MAIL](../Web%20Server%20Reference/Setting%20Up%20PxPlus%20Web%20Server/PxPlus%20Web%20Server%20Utilities/Send%20Mail%20to%20a%20Local%20SMTP%20Server.md)** or **[*WEB/EMAIL](../Web%20Utilities/Email%20Utility/Overview.md)**  
**UserLogon** |  Userid$ |  User logon completed  
**UserLogoff** |  Userid$ |  User has logged off  
**NomadsQuery** |  Query_info$, ControlName$, Ctlid, Tag$ |  Generated when NOMADS is about to run a query  
**NomadsPreLoad** |  Screen$, Library$ |  Before load of panel (Handler can change values)  
**NomadsPostLoad** |  Screen$, Library$ |  After load of panel  
**NomadsEndPanel** |  Screen$, Library$ |  End of panel  
**NomadsPanelReplace** |  Screen$, Library$, NewScreen$, NewLib$ |  Replacement panel requested (Handler can change values)  
  
## See Also

[**Event Handling**](../PxPlus%20User%20Guide/Event%20Handling.md)  
**[ON PROCESS EVENT Define Internal Event Logic](onprocessevent.md)**
