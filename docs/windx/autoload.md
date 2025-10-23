# WindX™ Thin-Client

**WindX Auto-Download** |   
---|---  
  
PxPlus offers two auto-download features on WindX:

|  **Dynamic Download** |  Used to ensure images and utility programs are accessible on the workstation and in sync with the host copies.  
---|---|---  
|  **Static Download** |  Automatically downloads directories to the workstation whenever the user connects to the system.  
  
This facility is designed to be compatible with most of the recent WindX versions. See **Compatibility**.

Since WindX can be used by multiple applications, it is strongly recommended that you review and adhere to the **Download Guidelines**.

##  Dynamic Downloads

The dynamic auto-download feature of WindX is designed to simplify the distribution and access to images and programs. This feature solves the problem of maintaining current information and programs on WindX connected clients. It avoids having to make common directories accessible across the network. It offers the following capabilities:

  * Images that are displayed or printed on the workstation using the **['PICTURE'](../mnemonics/picture.md)** mnemonic always need to be directly accessible to the workstation in order to be rendered. The auto-download feature makes sure that any image that does not reside on the workstation but does exist on the server will be made available to the workstation. The system accomplishes this by automatically downloading the files into a temporary directory (***plus/wdx/tmp**) on the workstation and then routing all subsequent requests to the copy in this directory.  
  
Whenever WindX processes a **['PICTURE'](../mnemonics/picture.md)** mnemonic, the system will verify that the image exists on the WindX workstation. If so, then the workstation copy is used. If the image is not present, the system will check if it exists on the host and, if so, the host image will be downloaded. Before sending the host image to the workstation, the system checks to see if the workstation already has a copy in the "***plus/wdx/tmp** " directory and will use it, if present.


  * Often, it is desirable to have logic performed on the workstation as opposed to the host. To facilitate this, any program remotely CALLed that resides in the "***plus/wdx/usr** " will be automatically downloaded, if required. Effectively, to run a program on the workstation, place it in the "***plus/wdx/usr** " directory on the host then issue a CALL "[wdx]*plus/wdx/usr/...." and the system will automatically download and run it.



The auto-download system includes automatic version checking to make sure that the program and/or images residing on the workstation are the same version as the copies on the host. If the host version has a different last date modified, the host version will be re-downloaded onto the workstation. This guarantees all the images and programs at the workstation will be the most current at all times.

You can control the auto-download feature through the [**'+U'**](../parameters/plusu.md) system parameter.

**_Clearing Temporary Download Directory_**

Files downloaded to the temporary download directory ("***plus/wdx/tmp** ") are automatically removed from the workstation if not accessed for 30 days. If desired, you can remove more recent files by calling:

> CALL "[WDX]*plus/wdx/util;Clear_tmp", _number_of_days_

**_Where:_**

> _number_of_days_ contains how many days of images you wish to be left on the workstation. Specifying zero results in all files in the temporary download directory being removed.

##  Static Downloads

The static download facility allows the developer to define a series of directories on the host that will be downloaded to the workstation during the connect sequence.

When the workstation connects, the system will determine if the host static directories have changed and, if so, it will prompt the user to accept the changes. If the user accepts the upload request, all files changed on the host will be downloaded into their appropriate directory on the workstation.

If a file is busy, the current file will be renamed .BAK to allow the update to proceed. This allows the .EXE to be replaced

**_Static Download Configuration File_**

The definition of the static directories is controlled by the file "***plus/wdx/usr/sync.conf** " on the host. This file contains a series of statements that define the various configuration parameters for the automatic synchronization of files between the host and a WindX workstation.

The logical target directories that are supported in the configuration file are:

|  **[EXEC]** |  Workstation directory where the .EXE and .DLL files exist.  
---|---|---  
|  **[LIB]** |  Workstation directory where the library exists.  
|  **[WINDX]** |  Workstation directory where WindX and its file exist.  
  
**_Example:_**

> /pxplus/wndxupd=[EXEC]

> /pxplus/wndxupd/windx=[WINDX]

A **;Restart** option can be added at the end of the line, which, if any files were copied, will force the user to exit WindX.

**_Example:_**

> /pxplus/wndxupd=[EXEC];restart

In addition, the **[+RESTART=](autoload.htm#restart)** directive allows you to define the message text to display when the user is forced to exit/restart WindX. This message can be created in any language you choose.

Whenever you change the configuration file or make any changes to the files that are to be updated, you need to run "***plus/wdx/reload** ". This program will re-examine all the host directories and record the version information (date modified) for all files it finds. This version information will be compared to the version information kept on the workstation in a "**.plusvers** " file in each directory in order to determine which files need to be updated.

**_Defining Directories to Download_**

The configuration file specifies the names of the directories on the host that you want to transfer to the workstation. Each directory to transfer should be followed by an **=**  _(equals sign)_ and the target directory on the workstation. Each host directory must have a target directory assigned on the workstation. The format of the lines is:

> **hostpath=windxpath**

The system will send all files from the host directory to the directory specified on the workstation. The target directory on the WindX client will be automatically created, if required. Only files that _do not_ start with a period are downloaded. Sub-directories within a host directory are not processed. They should be defined individually.

**_Example:_**

> /myapp/helpfiles=*user/helpfiles

> This would cause the system to download all files found in _/myapp/helpfiles_ to the workstation directory _*user/helpfiles_. The system will automatically create the target directories as needed.

One of the most common directories to be synced is the application **"*bmp"** directory, which would be specified as follows:

> ***bmp=*bmp**

## Configuration Parameters

In addition to directory definitions, the configuration file can also contain various parameters. All parameters start with a **+**  _(plus sign)_.

**Parameter** |  **Description**  
---|---  
**+FORCE** |  This parameter, if present, indicates that the user **_must_** accept the updates in order to proceed. Without this parameter, the user is given the choice of YES to update, NO to not update, or CANCEL to quit WindX. Adding this parameter to the configuration file restricts the user to OK to update or CANCEL to quit.  
**+TITLE** |  This parameter is used to define the title bar for all the windows that will be displayed during the auto-update. **_Example:_** **+TITLE=** Jones and Smith Application update  
**+PROMPT** |  This parameter can be used to define the message text to display to the user when the system detects that the workstation needs to be updated. **_Example:_** **+PROMPT=** Do you want to allow your workstation to be updated _\n_ with files from the host?  
**+RESTART** |  This parameter can be used to define the message text to display to the user when the system has to restart the connection due to an update. **_Example:_** **+RESTART=** Connection must be restarted  
**+SYNCFILE** |  This parameter allows you to override the default file name that will be used on the workstation to record the current download version information. The file will be created in ***plus/wdx,** and the name of the file should contain a unique application identifier with a suffix of **".sync"**. See **Download Guidelines**. If omitted, a default of **"windx.sync"** is used. **_Example:_** **+SYNCFILE=** easyapp.sync This example would create a file "***plus/wdx/easyapp.sync** " on the user's workstation, which will contain the version information for the last update.  
**+ONERR=**_x_ |  You can control how errors are handled by adding a **'+ONERR=**_x_**'** option to your configuration. If _'x'_ is set to "A", then the upload will abort.  
If _'x'_ is set to "R", it will retry once. Setting it to "I" will ignore the error, and it will not be reported. For any other value or no setting (or if **+ONERR=** is set to "R" and initial retry failed), the error will be displayed with the user being presented with the option to Abort, Retry or Ignore.  
  
You may include "\n" within the **+PROMPT** or **+RESTART** value to indicate a new line is to be inserted, "\r" to insert a carriage return or "\t" to insert a tab character. If desired, you can also specify **+PROMPT=** (or **+RESTART=**) to append to the prompt, allowing you to define the message text on multiple lines in the configuration file.

#### **Note** :  
The ability to change the prompt and title bar allows the use of different languages in the download process.

**_Comment Lines_**

Any line starting with an **!**  _(exclamation point)_ , **;**  _(semi-colon)_ or **#**  _(pound sign)_ is considered a comment in the configuration file.

#### **Note:**  
A sample configuration file is included with PxPlus in the file "***plus/wdx/sync.conf** ". It can be used as the basis for your application configuration file.

##  Compatibility

The auto-download capability is designed as such that most current versions of WindX on the workstation do not need to be updated to support this capability.

##  Download Guidelines

Since WindX can be used by a variety of applications and can be installed in a variety of locations on a workstation, it is strongly recommended that you adhere to the following guidelines:

|  1. |  Only download to locations relative to the system library; that is, all target directories should start with an ***** (_asterisk_).  
---|---|---  
|  2. |  Avoid the use of relative pathnames as your target directory on the workstation. You cannot guarantee from what directory WindX is running.  
|  3. |  While programs can be included within a **[Static Download](autoload.htm#static)**, the suggestion is to use the **[Dynamic Download](autoload.htm#dynamic)** facility for programs. This will make it easier to correct problems in the field rather than forcing all the users to log off and back on in order to get corrected programs.  
|  4. |  Since it is possible that the copy of WindX installed on the workstation will be used by multiple applications, always prefix your target download directories with an application identifier.  
  
**_Example:_**  
  
Assuming an application name of XXXX, some suggestions are: |  **Type of Information** |  **Directory**  
---|---  
Static downloads (help files, templates, etc.) |  ***plus/usr/XXXX/....**  
Dynamic downloaded programs |  ***plus/wdx/usr/XXXX/...**  
Static application Bitmaps (buttons, etc.) |  ***bmp/XXXX/.....**(referenced as**!XXXX/....** in programs)  
**+SYNCFILE** definition in static configuration file |  **XXXX.sync**  
  
##  Manual Transfers

The auto-download capability includes two special calls that provide on-the-fly upload and download capabilities for WindX clients. These are:

To send a file to the workstation:

> **CALL "*plus/wdx/util;Send_to_wdx",**  _host_file_ _$_ , _windx_file_ _$, asciiflg_

To retrieve a file from the workstation:

> **CALL "*plus/wdx/util;Get_from_wdx",**  _windx_file_ _$_ , _host_file_ _$, asciiflg_

**_Where:_**

_host_file_ _$_ |  This contains the pathname of the file on the host to send or target host file to receive the workstation file.  
---|---  
_windx_file_ _$_ |  This contains the pathname of the file on the workstation to receive the file or the file to be retrieved. When sending a file to the workstation all intervening directories will be created as required. (This file **_must_** contain a full directory name, which has at least one subdirectory this is to minimize security risks around accessing files.)  
_asciiflg_ |  Option numeric flag to indicate if the file contains ASCII text lines. If set to one (1), then the standard Windows $0d0a$ will be converted if required to the end of line character for the current host operating system. Default is 0 - the file is **_not_** ASCII text.  
  
## Deactivating Auto Update

To stop the auto update from updating client workstations, rename the **host.sync** file in ***plus/wdx**.
