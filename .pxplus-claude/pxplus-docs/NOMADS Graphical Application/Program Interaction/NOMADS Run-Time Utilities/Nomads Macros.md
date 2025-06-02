# NOMADS Run-Time Utilities

**NOMADS Macros**|   
---|---  
  
NOMADS provides a simple scripting tool that records macros consisting of keystrokes entered while processing a panel in a NOMADS run-time environment and can be played back on demand. This allows you to record common key sequences and play them back when desired.

#### **Note:**  
If a NOMADS query is invoked during the processing of a panel, the invocation and processing of the query is not included in the script, but the return value is recorded.

## Creating a NOMADS Macro

When a NOMADS panel is invoked, a NOMADS macro script can be created by pressing **CTRL+SHIFT+F11**. You are prompted for the name of a _Nomads Script (*.NMS) file_ in which to save the script. From this point, all your keystrokes are recorded until you end the recording process by selecting the _End Recording_ button on the **Nomads Script** dialog that displays when recording is initiated.

You can press **CTRL+SHIFT+F11** again without selecting the _End Recording_ button to finish the current recording and start a new one (or redo a previous recording).

## Playing Back a NOMADS Macro

To play back a previously recorded macro script while processing a panel in the NOMADS run-time environment, press **CTRL+SHIFT+F12**. A file dialog will be displayed for selecting the name of the _Nomads Script (*.NMS) file_ containing the script to be replayed. Once selected, the script will be run.

A synchronization error will be reported if the macro script does not match the panel on which it is being run.

## Suppressing the NOMADS Macro Interface

The **NOMADS Macro** interface, i.e. initiating script recording or playback via the **CTRL+SHIFT+F11/F12** keystrokes while in the NOMADS run-time environment, can be suppressed by setting the **[%NOMADS'ScriptSuppress](../../Appendix/NOMADS%20Variables/Overview.htm#scriptsuppress)** property to a non-zero value.

See **[NOMADS Variables](../../Appendix/NOMADS%20Variables/Overview.md)**.

## Initiating Macro Recording/Playback Programmatically

NOMADS macros can also be initiated programmatically.

To **_create a script_** , the following CALLs can be employed:

> CALL "*winproc;Make_Script" [,scriptFile$] ! turn on recording  
>  ! Process your panel here  
>  CALL "*winproc;End_Script" ! end recording

To **_play back a script_** , use the following CALLs:

> CALL "*winproc;Start_Script" [,scriptFile$] ! turn on playback  
>  ! Process your panel here  
>  CALL "*winproc;End_Script" ! end playback

#### **Note:**  
Including the _scriptFile_ _$_ name is optional in both of the above cases. If a file name is not included, then a file dialog will be displayed to manually select a file name.
