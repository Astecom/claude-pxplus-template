# NOMADS Run-Time Utilities

**NOMADS Trace**|   
---|---  
  
The NOMADS Trace utility creates a program trace file of the logic being executed in the NOMADS environment.

**_To start a trace_** , press **CTRL-F12**. By default, the trace saves the trace file to the following locations:

|  On a **_Windows_** system: |  _C:/nomads.trc_  
---|---|---  
|  On a **_non-Windows_** system: |  _/tmp/[currentUser].trace_  
  
Setting **%NOMADS'Trace_File$** will override the default trace file. If a trace file already exists, you will be prompted to erase it.

**_To end the trace_** , press **CTRL-F12** again.

On a stand-alone Windows system, the resulting trace is automatically displayed in Notepad; otherwise, a message box displays with the name of the trace file.
