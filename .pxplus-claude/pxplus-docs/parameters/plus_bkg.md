# Command Line Specific Parameters

**-BKG** |  **_Background Command Line Parameter_**  
---|---  
  
##  Description

The **-BKG** command line parameter can be used with the Windows _pxplus.exe_ to indicate that the process is a background task and, as such, will not and cannot interact with the desktop/user. Processes that specify this parameter on the Command line will be prevented from accessing the desktop.

As a background, the process will not consume a user slot from the system activation key. This provides the same functionality as specifying >/dev/null </dev/null on the Command line used to launch PxPlus on UNIX/Linux.

_(The '-BKG' system parameter was added in PxPlus v9.00, build 9200.)_

## Background

Normally, using PxPlus on a Windows system, each invocation of the software occupies a user slot regardless of whether the process was merely a background task or was truly going to interact with the end user. Even processes that have no user interaction still require a user slot - in effect resulting in a "phantom user".

This phantom user problem is a Windows-system issue. On UNIX/Linux, PxPlus can detect true background processes by the fact that the user input and output devices were set to /dev/null. With the user input/output disabled, no user interaction would be possible from the process, thus the process was truly a background task. This is why on UNIX/Linux, we always recommend that you append >/dev/null and </dev/null to any command launching a background process such as NTHOST.

Consequently, with this Windows-only problem/limitation, you often had to purchase an extra user slot for this "phantom user" when running on a Windows server as opposed to UNIX/Linux.

## Using -BKG

Specifying **-BKG** on the Command line can be used to address this situation by identifying a process as a background task that will **_not_** have any end-user interaction.

**_Example:_**

> C:\PVX Plus Technologies\PxPlus _version_number_ \pxplus.exe -**bkg** *plus\cs\host

When a Windows process is initiated with this command line parameter, the process will not occupy a user slot; however, no windows or message boxes will be presented to the user. In effect, the process will, like its UNIX background task counterpart, not have any user input/output capabilities.

However, it will be able to run programs in the background just like a UNIX system and will accept signals from foreground processes to terminate or perform other tasks.

#### **Note:**  
Like the -MN and -HD parameters, the **-BKG** must be the first parameter after the .exe path name. The **-BKG** parameter is case insensitive and has **_no_** effect in UNIX/Linux.

## Where Used

This feature has been incorporated into *NTHOST and the PxPlus Simple Client Server (*plus/cs/host) to eliminate the need for an extra user when running on a Windows host. Future plans call for it to also be implemented in other background/service processes that potentially run in a Windows environment.
