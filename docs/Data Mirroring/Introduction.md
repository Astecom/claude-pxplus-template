# File Handling  
  
**Data Mirroring** |  **__**  
---|---  
  
The goal of the Data Mirroring system is to allow file updates to be replicated on different systems, on different files, and/or a SQL database. This is accomplished by recording all file system updates on the main system to the system journals, transferring these journals to a target system, then re-applying the updates as required. Keyed files (VLR and EFF), as well as Indexed files, can be replicated.

#### **Important Note:**  
A **_prerequisite_** to using Data Mirroring Configuration is that **[File System Journalization](Enabling%20Journalization.md)** must already be enabled.  
  
Data Mirroring **_cannot_** be currently used on files that have auto-increment enabled, as the generated auto-increment field is inserted **_after_** the journalization. This could result in different values on the files on the server and the system journals.  
  
**_Prior to PxPlus 2023 Update 1:_** Files with extended records cannot be journalized and therefore cannot be used with Data Mirroring.  
  
**_PxPlus 2023 Update 1 or later:_** Files with extended records can be journalized and therefore can be used with Data Mirroring. There is a size limit of 8MB for extended records. Records larger than that cannot be journalized, and any attempt to write the record will result in an Error #108: Record size error.  
  
_(Support for the journalization of files with extended records was added in PxPlus 2023 Update 1.)_

Data Mirroring can be used for a variety of reasons. For instance, you can use it to create a reserve copy of your existing data in the event of a system failure. You can use it to create a central repository for branch operations or to load an external database for data analysis and reporting.

The Data Mirroring replication system consists of three processes, each handled by a different background program:

|  **_*plus/jrnl/send_** |  This program **_sends_** a series of journal files to another system.  
---|---|---  
|  **_*plus/jrnl/recv_** |  This program **_receives_** the journal files sent by **_*plus/jrnl/send_** and replicates the journals on a new system.  
|  **_*plus/jrnl/apply_** |  This program **_applies_** the changes recorded in a series of journal files onto the files on the target system/directory.  
For the **_*plus/jrnl/apply_** routine, the following are available as _global_ variables: **_%smtp$_** , **_%mailto$_** and **_%mailfrom$_**. _(These variables were added in PxPlus 2014 Feature Pack 1.)_  
  
These programs are all designed to be run in the background, allowing the existing PxPlus application to continue to function regardless of the state of the connection to the target system. See **[Background Processes and Configuration Overview](Introduction.htm#overview)**.

In addition, by enabling **[File System Journalization](Enabling%20Journalization.md)**, there is minimal impact to the performance on the primary application. Should the connection to the target system be lost or is temporarily interrupted, these programs will retain pending and new updates in the journal files and forward them to the target system once communication is restored. _(Data Mirroring using system journaling was added in PxPlus 2014.)_

#### **Note:**  
Setting up and maintaining a Data Mirroring system is easier with the addition of the **[Data Mirroring Configuration](Data%20Mirroring%20Configuration.md)** interface. _(as of PxPlus 2017)_  
  
This interface allows you to configure the _Send_ , _Receive_ and Apply _processes_ , monitor the activity for each process at a glance and view a detailed activity log.

##  Background Processes and Configuration Overview

Each background program (**_*plus/jrnl/send, *plus/jrnl/recv_** and **_*plus/jrnl/apply_**) is associated with its own configuration file (**_send.conf_** , **_recv.conf_** and **_apply.conf_**) that will define the input and output directories, target system and rules to apply for each process. These files are clear text files that contain the configuration parameters for each program. They need to reside in the directory from which each of the background programs is launched.

Standard configuration files are provided in the **_*plus/jrnl_** sub-directory and can be tailored to meet your needs.

#### **Important Note:**  
It is strongly advised that you **_do not edit the files in this directory directly_** but instead copy them to another directory and run the processes from there to avoid software updates from potentially overwriting any customization you may do.

The default values for most of the values used by the system have been placed in these files as comments starting with #!!. Each line in the configuration file can be a comment or variable definition used to set a run-time option/parameter.

A variable definition contains the name of the variable, an **=**  _(equals sign)_ and the value. If the value is _numeric_ , then the variable name will be considered a numeric variable. If _not numeric_ , then a string variable will be created. If, due to the nature of the value, you need to force the assignment of a string value, simply surround the value with **"**  _(__quotes)_.

#### **Note:**  
The text values of YES or TRUE will be considered numeric 1, while NO or FALSE 0.  
  
**_Example:_**  
  
**COMPRESS_DATA=YES** is the same as **COMPRESS_DATA=1**.

Blank lines or lines starting with #, ! or **;** are considered comment lines and can be interspersed anywhere in the configuration file.

For information on the configuration file parameters associated with the _Send_ , _Receive_ and _Apply_ processes, see **[Send Configuration](Data%20Mirroring%20Configuration.htm#sendconfig)**, **[Receive Configuration](Data%20Mirroring%20Configuration.htm#receiveconfig)** and **[Apply Configuration](Data%20Mirroring%20Configuration.htm#applyconfig)**.

##  Controlling and Monitoring the Background Processes

The programs for the processes run in the background and can be managed by the existence of related files:

**File** |  **Description**  
---|---  
_xxxxx_.**is.active** |  File that exists when the process is active  
_xxxxx_.**conf** |  Configuration  
_xxxxx_.**stop** |  File that **_you create_** to stop the process

#### **Note:**  
The _*plus/jrnl/apply_ program will check for the **_apply.stop_** file every 100 transactions to allow the _Apply_ process to be stopped before completing the entire series of journal files.  
  
_(The check for the apply.stop file was added in PxPlus 2021.)_  
  
_xxxxx_.**log** |  Log of activity and errors  
_xxxxx_.**pause** |  File that **_you create_** to pause the process  
_xxxxx_.**is.paused** |  File that exists when the process is paused  
  
**_Where:_**

> _xxxxx_ is the name of the process (**_send_** , **_recv_** or **_apply_**).

**_Example:_**

> Pauses if the file _recv.pause_ (or _send.pause_ _/apply.pause_) is found.  
>  Terminates if the file _recv.stop_ (or _send.stop_ _/apply.stop_) is found.

By creating/removing these files, external utilities can easily control the execution of the background processes.

One typical use of this facility is to temporarily suspend the updating of a remote system while a backup is taking place. Prior to running a backup on the target system, you simply need to create a _.pause_ file, wait for the process to pause, and then you may proceed with the backup without worrying about inconsistencies in the file contents, as all the updates will be deferred until the _.pause_ file is deleted.

In a production system, if you wanted to take the mirrored files off-line to do a backup, you would need to pause the _apply_ process. You could pause any of the processes (_send, recv_ or _apply_); however, as the _send_ and _receive_ can be used to make off-site copies, it is generally better to pause the _apply_ process if doing a backup.

The current state of each of the background tasks can be determined through the presence of the following files:

  * The file _recv.is.active_ (or _send.is.active_ _/apply.is.active_) while active.
  * The file _recv.is.paused_ (or _send.is.paused_ _/apply.is.paused_) while paused due to _.pause_ file presence.
  * The file _recv.is.connecting_ (or _send.is.connecting_) while trying to establish communications.



## Journal Files Transfer Process

The **_send_** and **_receive_** background processes are used to transfer the journal files to the target site:

  * The **_send_** process _(*plus/jrnl/send)_ monitors the journal files for updates (on the system with the application data) and sends them to the target system. For the "sender" to connect to the "receiver", the receiving machine **_must_** be accessible either by IP address or by name. Both will wait for the other to connect, providing the "receiver" has an open connection port.
  * The **_receive_** process _(*plus/jrnl/recv)_ receives the journal files and creates equivalent journals on the target (mirroring) system.



## See Also

**[File System Journalization](Enabling%20Journalization.md)**  
**[Data Mirroring Configuration](Data%20Mirroring%20Configuration.md)**
