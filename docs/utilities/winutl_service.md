# Utility Routines

***PLUS/WINUTL/SERVICE** |  **_Windows Task Monitor Service_**  
---|---  
  
The **"*plus/winutl/service"** utility provides a facility similar to the Unix/Linux 'inittab' functionality. It allows the application developer to have a series of processes spawned and monitored in the background of a Windows system.

_(The *Plus/Winutl/Service utility was added in PxPlus v8.11.)_

## Installing as a Service on Windows

This utility can be installed as a Windows service using either of the following two methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Installation and Setup_ category and select _Install Windows Services_ to launch the **[Install Windows Services](../Install%20Windows%20Services.md)** interface. From the _Type of Service_ drop box, select _Inittab_ _Emulation Server_. After entering the service settings in the grid, select the _Install_ button.  
From the PxPlus Command line |  Enter: **RUN "*plus/winutl/service"** If installing, you will be asked to provide the configuration settings _(Starting Directory)_. It will then install into your Windows services registry. You may be required to run PxPlus as an administrator to allow the registry updates to take effect.  
  
After installation is complete, the next step is to go to the Windows _Control Panel_ and select _Administrative Tools_ where, in the _Services_ section, you should now find the PxPlusInit service. The defaults are set for _Automatic Start_ on reboot and Interactive. You can change these as desired, and then start the process or reboot to have the system start it.

## Inittab Entries

The file ***plus/winutl/inittab** contains the information regarding the tasks to be started and/or monitored by the service. It consists of a text file containing a list of tasks to run.

Each line that starts with an alpha character must describe a task/process to run in the following format:

  * For tasks that will be started only once during service startup:



> _taskid_ **once** _command_line_

  * For tasks that will be started during service startup then monitored and restarted should they terminate:



> _taskid_ **respawn** _command_line_

  * Task that you do not want started (or terminate if running) can have the option **_off_** , as in:



> _taskid_ **off** _command_line_

In the scenarios above:

  * The _taskid_ is a user defined identifier for the process. It must start with a letter and may be up to 10 characters long.
  * The _command_line_ contains the Windows command that will be executed to launch the process.



If the first word on the Command line is "pxplus", the service will replace it with the current pathname to PxPlus and the spawned task will have FID(0) set the _taskid_.

**Provided Sample inittab**  
---  
!  
! Pvx Plus Technologies -- Windows background service interface  
!  
! inittab file used by PxPlus  
!  
! Each line which starts with an alpha character is used to define   
! a process to be run. The line format is:  
!  
! id option command  
!  
! Where:  
! id : is a user defined identifier used to identify the task  
! option : contains 'once' to spawn task only once during service start  
! command : has the command line to be invoked.   
! : (to simply run pxplus make first word on the command  
! : pxplus -- the service will replace this with the pathname to   
! : to the pxplus.exe in use by the service  
!  
! NOTE: Leading/trailing spaces on the lines will be stripped  
!  
! Examples:  
!  
!  
! test1 once pxplus **  
! test2 respawn pxplus *f  
! test3 once notepad c:\pvxsrc\temp.txt  
  
The inittab file is scanned when the service is started and rescanned every 5 seconds to see if it has changed. To add/drop entries from the inittab, simply edit the file and the service will process the changes, generally within 5 seconds.

#### **Note:**  
Should a task marked as '**respawn'** have to be relaunched more than 10 times within a 1-minute interval, the system will cease launching it until the inittab is changed.

## Logging

The service keeps track of its activity in the file "***plus/winutl/inittab.log** ". This file will contain the last 1000 events with each event being recorded with a date/time stamp. No maintenance is required on this file, as it will automatically limit itself to 1000 entries, dropping older entries, as needed.
