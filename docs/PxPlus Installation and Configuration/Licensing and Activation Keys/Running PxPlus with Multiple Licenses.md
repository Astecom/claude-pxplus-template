# License Management

**Running PxPlus with Multiple Licenses**|   
---|---  
  
If you need one machine to run PxPlus with multiple licenses, it is quite easy to set up.

The following is a typical scenario:

> A company has purchased licenses for its two branch operations: a 10-user license for the system in Montreal and a 20-user license for the system in Toronto. Management now decides that instead of having two servers, they want to consolidate the branch operation onto a single server in the cloud.

Technically, you can simply install two copies of PxPlus in separate locations and run them on different ports. **_This is the preferred and most straightforward approach._**

However, this means that when upgrading the software, you must upgrade both instances.

If you want to share a single install between multiple licenses, the following technique can be used to accomplish this. This technique involves having multiple license files on the system and pointing different instances of PxPlus to the different license files by setting the **[PVXKEY](../Customizing%20PxPlus/Environment%20Variables.htm#Mark20)** environment variable prior to running PxPlus or any of its utility programs, such as product registration.

If you want to do the opposite and share the common license file, **[ACTIVATE.PVX](../../PxPlus%20System%20Programs%20and%20Files/System%20Activation%20Information/Overview.md)**, between different instances and versions of PxPlus, see **[Sharing the PxPlus Activation File](Sharing%20Activation%20File.md)**.

## UNIX/Linux Setup

To make it simple to accomplish this, the following is a small Linux shell script that can be used:

> **#!/bin/bash  
>  lic=$PWD/lic_$1  
> [ ! -d "lic_$1" ] && mkdir "$lic"  
>  export PVXKEY=$lic  
>  shift  
>  $@**

Take the above script and place it in your PxPlus install directory in a file called **usekey** , and then set execute permission on this file using the following command:

> **chmod  a+x ./usekey**

What this script does is allow you to specify the license to use when launching PxPlus or the registration program **pxpreg**. It creates a sub-directory "**lic__XXXX_** " to hold the license if it does not already exist and sets the **PVXKEY** environment variable to point to that directory.

So, taking our example, let's look at this more closely.

To enter the activation key for Montreal (MTL), we could enter the following:

> **./usekey  MTL ./pxpreg**

This would create a sub-directory called **lic_MTL** and run **./pxpreg** against it, allowing you to enter the license keys.

For Toronto (TOR), you could enter the following:

> **./usekey  TOR ./pxpreg**

To run the online registration, the commands would be:

> **./usekey  MTL ./pxplus "*plus/reg/net"**

> **./usekey  TOR ./pxplus "*plus/reg/net"**

Once you have the keys set up, you can use the same script to run the Simple CS interface for each of the branches.

For Montreal to allow users to connect to port 4093:

> **./usekey  MTL ./pxplus "*plus/cs/host" -arg 4093**

For Toronto to allow users to connect to port 10000:

> **./usekey  TOR ./pxplus "*plus/cs/host" -arg 10000**

This approach can be extended to allow any number of different types of licenses to be run from the same install.

## Windows Setup

You can set up a similar script on Windows as a **.BAT** file. It would look something like this:

> **@ECHO OFF  
>  SETLOCAL  
>  SET lic=%CD%\lic_%1  
>  IF NOT EXIST "%lic%" MKDIR "%lic%"  
>  SET PVXKEY=%lic%  
>  %2 %3 %4 %5 %6 %7**

Take the above script and place it in your PxPlus install directory in a file called **usekey.bat**.

Now you can use this **.BAT** file to register and launch PxPlus using different licenses on Windows.

So, taking our example, let's look at this more closely.

To enter the installation key for Montreal (MTL), you could go to the Windows command line, change your directory to where you have your PxPlus installed and enter the following:

> **usekey.bat MTL .\pxpwactv**

This will run the activation key entry program for PxPlus with the resultant activation key going to the directory **lic_MTL** in the install directory.

To enter the key for Toronto (TOR), the command would be:

> **usekey.bat TOR .\pxpwactv.exe**

To run the online registration, the commands would be:

> **usekey.bat MTL .\pxplus "*plus/reg/net"**

> **usekey.bat TOR .\pxplus "*plus/reg/net"**

To run PxPlus using the MTL key, you could enter this command:

> **usekey.bat MTL .\pxplus.exe "*plus/cs/host" -arg 4093**

For Windows, you may want to create a desktop shortcut link for this. Your shortcut would have the command with the starting directory being where PxPlus is installed.

#### **Note:**  
If you do not want the license files in the directory where PxPlus was installed or if you want to run your application in a different directory, you can provide a full pathname to the **_pxplus.exe_** and change the **_usrkey.bat_** file so that '**lic** ' points to where you want to save the license file(s).

 

 

 
