# Web Server Reference

**Components of the Web Server** |  **__**  
---|---  
  
The PxPlus Web Server consists of the Web Server Configuration application and three operating components (described below). See also **[Editing Configuration Details](../Setting%20Up%20PxPlus%20Web%20Server/Editing%20Configuration%20Details/Overview.md).**

## Base Launcher (Web Server Application)

The PxPlus Web Server runs using one base launcher application (as a background task). This is the engine that launches your individual web servers (port monitors) and tracks their configuration and activity.

##  Port Monitors

Port monitors are individual web servers, each responsible for monitoring a unique TCP socket number. You can configure up to 100 port monitors per Web Server base launcher. Your port monitors share the use of your licensed task handlers, but any given port monitor can use as many task handlers as you have licensed and idle/available (up to 1,000 simultaneously).

A port monitor's tasks include:

>   * Monitoring a specific TCP socket (port), waiting for HTTP requests from browsers.
> 


>   * Checking the validity and security of incoming requests.
> 


>   * Delegating tasks to task handlers.
> 


>   * Checking for stalled jobs.
> 


>   * Cancelling stalled tasks that have timed out.
> 


>   * Returning data from the task handlers to the browser (following the rules outlined in the HTTP Specification 1.0, RFC 1945).
> 


##  Task Handlers

The task handler is the PxPlus application that processes requests coming in through port monitors. Task handlers control processing by finding the requested files/pages or running your PxPlus program(s) and returning the resulting data to the port monitor when tasks are completed. You are allowed to license up to a maximum of 1,000 PxPlus Web Server task handlers.

You can have all of your task handlers active simultaneously (as many as you have licensed, potentially working simultaneously for one given port monitor). That is, a given port monitor can use as many task handlers as are necessary and idle/available, up to your licensed maximum. If there are no idle task handlers available when a request is received from a browser, then the Web Server queues the requests until task handlers are available or until the browser disconnects.

#### **Note:**  
The Web Server uses less than 1.5 MB of RAM for each instance under UNIX and approximately 2.5 MB of RAM under Windows. Each task handler runs an instance of the PxPlus interpreter. If your PxPlus Web Server engine is handling 1,000 simultaneous browser requests, it is using concomitant task handlers and memory.

##  About Timeouts

Port monitors check approximately every 30 seconds for stalled jobs. Task handlers are given at least 90 seconds to complete their tasks and return the data to the port monitor.

You can send long jobs if they respond periodically. However, your PxPlus application must be completed before the port monitor can send any data to the browser, since the header must contain information about mime types and the length of the job, etc. The PxPlus Web Server will not currently send any response to the browser until job processing is complete. Browsers also have a timeout, typically about 60 seconds, for a response from the server.

If your Restart Stalled Tasks setting is ON (see **[PxPlus Web and Debug Mode](../Setting%20Up%20PxPlus%20Web%20Server/Troubleshooting/Overview.htm#WebDebugMode)**), the port monitor terminates stalled task handlers by the timeout and starts a new task handler in its place. 

#### **Note:**  
If the port monitor terminates a stalled task, it will inform the browser that the page requested was not available.

## Your Environment

The Web Server takes a snapshot of your PxPlus environment before it begins processing. You can create a START_UP program in the lib/_web directory and set global variables, system parameters, message libraries, PRECISION settings, global variables and globally OPENed files. When the Web Server is about to RUN your PxPlus program, it will use your settings for each task handler it launches. This gives you your own program environment and behavior but does not affect the Web Server or task handlers themselves.

#### **Note:**  
When your application is completed and control returns to the Web Server, the Web Server CLOSEs all the file channels (local and global) that you OPENed in your PxPlus program(s). It does not close any of its own files then, nor does it close any files that you OPENed in your START_UP. This allows you to OPEN common files in your START_UP program so that they are always available to any PxPlus program your Web Server runs.
