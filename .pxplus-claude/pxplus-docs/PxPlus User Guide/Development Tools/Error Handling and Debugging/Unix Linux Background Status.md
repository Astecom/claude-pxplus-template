# Error Handling and Debugging

**UNIX/Linux Background Status** |  **__**  
---|---  
  
Often, when running a process in the background, it is desirable to know what the process is doing. PxPlus has a feature built into all UNIX and Linux versions that allows an external process to obtain current information about a process on demand. By using the UNIX/Linux 'kill' command, a signal can be sent to a background process that, in turn, will cause it to log its current state.

Whenever a background PxPlus task receives either a **TSTP** or a **TOUT** signal, it will output its current state onto a _pxplus.sts_ file. The process will create the file in the directory where the pxplus binary resides (normally _/pxplus/pxplus.sts_).

If the signal is **TSTP** , a 'Break' or interrupt signal will be generated in the background process immediately after the state is reported. If a **TOUT** signal is used, the process will simply output its current state and continue execution.

## Typical Usage

To send the signal to a background PxPlus process you issue:

> kill -s **{** TSTP **|** TTOU**}**_nnnnn_

**_Where:_**

_nnnnn_ |  Contains the process ID of the background PxPlus task to which to send the signal.  
---|---  
  
When the process receives this signal, it will output the current program name, statement number, LFO, LFA and ERR to the _pxplus.sts_ file. If TSTP is specified, an interrupt will be generated within the application.

**_Example:_**

The following example shows finding the process number and requesting the status:

> # **ps -leaf | grep pxplus  
> ** 4 S root 23055 21106 0 75 0 - 684 - 16:10 pts/1 00:00:00 /pxplus/pxplus   
>  4 S root 23078 23059 0 75 0 - 424 pipe_w 16:11 pts/2 00:00:00 grep pxplus   
>  # **kill -s TTOU 23055  
> ** # **cat /pxplus/pxplus.sts  
> ** PxPlus Signal: Pid=23055, Thu Jul 13 16:11:40 2006   
>  Program: /pxplus/lib/_udv (5120)   
>  ERR=36 LFO=62 LFA=0   
>  MSG(-1)=<none>

_(user input in bold)_
