# NOMADS Run-Time Utilities  
  
**NOMADS Run-Time Events Logging**|   
---|---  
  
NOMADS provides a simple logging tool that records key events, such as displaying and exiting panels, generating CTL values and processing panel logic, in a log file. This logging tool is controlled by an environment variable set on the client machine, giving developers the flexibility to control when logging is turned on/off and which terminals are tracked. This can be useful when testing and debugging an application.

#### **Note:**  
This logging tool can be used in the NOMADS and iNomads environments.

_(The logging tool was added in PxPlus 2017.)_

Logging is controlled by the Windows environment variable **[PXP_LOGFILE](../../../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Environment%20Variables.htm#Mark8)** on the client machine.

To turn on logging on a particular machine, create the Windows **PXP_LOGFILE** environment variable on that machine and set it to the path of the log file. The path may be a fixed value (e.g. /tmp/PxPlus.log) or a PxPlus expression prefixed by an **=**  _equals sign_ that will evaluate to a valid pathname (e.g. ="\tmp\"+fid(0)+"-"+DTE(0:"%Y%Mz%Dz")+".log"). Using an expression allows you to have different log files for different users, terminals and sessions. The specified path must be relative to the server, as that is where the log file will be maintained. The log file does not need to pre-exist; however, the directory structure in which it resides **_must_** exist.

Logging begins when a new session is started and a value is detected in the **PXP_LOGFILE** environment variable. If the value is an _expression_ , it is evaluated. A serial file with the specified pathname is automatically created on the server, if necessary. If the file is accessible, then logging will automatically begin and descriptions of the events for that session will be appended to it. The NOMADS (or iNomads) run-time engines will log the key events using the **%NOMADS'Do_Log(**_message$_**)** method. (The ***obj/nomads** class is automatically instantiated within the NOMADS and iNomads environments using the **%NOMADS** object identifier whenever a session is started.) The messages that are logged consist of a Date/Time stamp and the User ID, followed by a brief description of the event.

**_Example:_**

Below are sample entries recorded in a NOMADS log file:

> 2016-12-29 14:30:24 Jane: Display panel:cstmaint, Library:C:\work\work.en  
>  2016-12-29 14:30:24 Jane: WinProc Cmd='P"*win/flmaint;Init"' (Cur scrn=CSTMAINT CTL=0)  
>  2016-12-29 14:30:24 Jane: WinProc Cmd='X_KEYDEF$="CST_ID$",_NUMDEF$="CST_AMT,",_REQD$="CST_ID$, CST_NAME$,CST_CLS$,CST_SMN$,",_REQD_PNL$="0000"' (Cur scrn=CSTMAINT CTL=0)  
>  2016-12-29 14:30:24 Jane: WinProc Cmd='P"*win/flmaint;Main_post_display"' (Cur scrn=CSTMAINT CTL=0)  
>  2016-12-29 14:30:24 Jane: Recvd CTL:15001 EOM=$00803A99$  
>  2016-12-29 14:30:24 Jane: WinProc Cmd='P"*win/flmaint;Check_changes"' (Cur scrn=CSTMAINT CTL=15001)  
>  2016-12-29 14:30:27 Jane: Recvd CTL:10014 EOM=$0080271E$  
>  2016-12-29 14:30:27 Jane: WinProc Cmd='P"*win/flmaint;Next_rec"' (Cur scrn=CSTMAINT CTL=10014)  
>  2016-12-29 14:30:31 Jane: Recvd CTL:10010 EOM=$0080271A$  
>  2016-12-29 14:30:31 Jane: WinProc Cmd='P"*win/flmaint;Write_rec"' (Cur scrn=CSTMAINT CTL=10010)  
>  2016-12-29 14:30:33 Jane: Recvd CTL:15001 EOM=$00803A99$  
>  2016-12-29 14:30:33 Jane: WinProc Cmd='P"*win/flmaint;Check_changes"' (Cur scrn=CSTMAINT CTL=15001)  
>  2016-12-29 14:30:34 Jane: Recvd CTL:10017 EOM=$00802721$  
>  2016-12-29 14:30:34 Jane: WinProc Cmd='XPerform "*win/flmaint;Check_changes";cmd_str$="END"' (Cur scrn=CSTMAINT CTL=10017)  
>  2016-12-29 14:30:34 Jane: WinProc Cmd='P"*win/flmaint;Wrapup"' (Cur scrn=CSTMAINT CTL=10017)  
>  2016-12-29 14:30:34 Jane: Exit panel: CSTMAINT, Library:work.en

The **%NOMADS'Do_Log(**_message$_**)** method can also be used within your code, in which case you only need to supply the description of the event in the message, which will be appended by the **%NOMADS'Do_Log(**_message$_**)** method to the Date/Time stamp and User ID.

If the specified log file exists, new log entries will be appended to the end of the file; therefore, the developer needs to programmatically purge the log file whenever a fresh start is desired. In addition, the developer is responsible for maintaining any log files created on the system.

#### **Note:**  
iNomads also supports a general system-wide event log that is triggered by creating a serial file with the pathname **_*plus/inomads/system.log_**. Once created, events for all users in iNomads sessions are logged to this file. Logging can be stopped by removing the file.
