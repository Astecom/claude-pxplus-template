# Events Logic 

**Actions and Parameters** |  **__**  
---|---  
  
The logic settings for event handling consist of two fields: an **_action_** and the **_parameters_** for that action. When an action is defined for an event type, NOMADS will execute it automatically each time the associated event occurs. If a null value is used for _library_ name, NOMADS assumes the current library.

#### **Note:**  
The Library name may be a specific or generic reference. See [**Cascading Language Suffixes**](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md).

**Action** |  **Description/Parameters**  
---|---  
_Perform**or** Call_ |  Event logic is often contained in a separate program. To run program code, select a _Perform_ or _Call_ action, specify a program name and label entry point.   
**_  
Format:_**  _"_[_program_ ;]_label_  _"_.  
  
For a _Perform_ , variables are shared, so no arguments are required. For a _Call_ , you may pass a comma-separated list of up to 20 optional parameters.   
**_  
Format:_**  _"_[_program_ ;]_label_  _",_[ _arg1$,arg2$,...arg20$_]  
  
If a Default Program has been specified, then the program name may be omitted from _Perform_ or _Call_ logic. See **[Default Program](Default%20Program.md)**.  
_End_ |  Terminates panel object.  
_End All Active Wdws_ |  Closes all windows, including the main window and all attached concurrent windows.  
_Execute_ |  Any sequence of valid PxPlus commands separated by semi-colons can be added directly to the control definition if the _Execute_ action is selected to process the logic. Program code that is included on the panel cannot be performed or called, but commands may include a **[PERFORM](../../../directives/perform.md)** or **[CALL](../../../directives/call.md)** directive.   
**_  
Format:_**  _"command1_[;_command2;command3 ..._]_"_  
_Help_ |  Many controls include a _Help_ option for event logic. For example, you may specify a _Help_ reference to be activated _On Exit_ in the Panel Header to launch a help file when the panel is closed or _On Change_ when a button is pressed.   
**_  
Format:_**  _"helpfile;reference"_  
_Ignore_ |  No logic is performed. **_(Default)_**  
_Jumpto_ |  _Jumpto_ is the equivalent of a PxPlus **[PERFORM](../../../directives/perform.md)** directive. You can launch another panel and specify a different library; however, in the _Jumpto_ action, all variables are passed to the new panel and its associated program(s), so no argument list is needed.  
**_  
Format:_**  _panel"_ ,"[_library_]"  
_Link_ |  This is essentially a **CALL** to the NOMADS program ***winproc**.  
  
For example, select _Link_ on an _On Exit_ event to launch a different panel that may reside in the same or a different library. You may pass up to 20 variables to the new panel by specifying the variable name(s) as parameters.  
**_  
Format:_**  _"panel"_ ,"[_library_]"[,_arg1$,arg2$,...arg20$_]  
_Merge-Jumpto_ |  When a panel is launched via _Link_ or _Jumpto_ , the parent window is disabled. Use _Merge-Jumpto_ to launch **[Concurrent Panels](../Concurrent%20Panels/Overview.md)**.  
**_  
Format:_**  _"panel"_ ,"[_library_]"  
_Non-NOMADS_ |  In the _Post Display_ logic event for a panel, you may select _Non-NOMADS_ to run an existing application that was not developed in NOMADS. At run time, NOMADS draws a window and **RUN** s your specified program within it.  
  
## Examples

|  _Perform_ |  ";init"  
---|---|---  
|  _Call_ |  "c:\mypath\prog_01;validate_custID",cust_ID$,cust_name$  
|  _Execute_ |  user-name$=arg_1$;MSGBOX "UserID is "+user_name$  
|  _Non-NOMADS_ |  "c:\mypath\prog_101;init"  
|  _Help_ |  "C:\MY_PATH\MY.HLP;162"  
|  _Link_ |  "my_panel","",Cust_ID$,cust_name$  
|  _Jumpto_ |  "my_panel","my_library.en"
