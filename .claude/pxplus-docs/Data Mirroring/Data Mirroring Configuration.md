# Data Mirroring

**Data Mirroring Configuration**|   
---|---  
  
Data Mirroring Configuration simplifies the setup and maintenance of the Data Mirroring system by providing an interface for configuring the _Send_ , _Receive_ and _Apply_ processes, monitoring the activity for each process at a glance and viewing a detailed activity log.

_(Data Mirroring Configuration was added in PxPlus 2017.)_

#### **Important Note:**  
A **_prerequisite_** to using Data Mirroring Configuration is that **[File System Journalization](Enabling%20Journalization.md)** must already be enabled.  
  
**_Prior to PxPlus 2023 Update 1:_** Files with extended records cannot be journalized and therefore cannot be used with Data Mirroring.  
  
**_PxPlus 2023 Update 1 or later:_** Files with extended records can be journalized and therefore can be used with Data Mirroring. There is a size limit of 8MB for extended records. Records larger than that cannot be journalized, and any attempt to write the record will result in an Error #108: Record size error.  
  
_(Support for the journalization of files with extended records was added in PxPlus 2023 Update 1.)_

To invoke Data Mirroring Configuration, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Data Management_ category and select _Data Mirroring Configuration_.  
From the PxPlus Command line |  Enter: **DM** _(The Command line method of invoking Data Mirroring Configuration was added in PxPlus 2018.)_  
  
The screen shot on the left is displayed initially when no processes have been set up. The screen shot on the right is an **_example_** showing the _Send_ , _Receive_ and _Apply_ processes already set up and active.

|    
  
**Data Mirroring Configuration _(No Processes Set Up)_** |    
  
**Data Mirroring Configuration _(Processes Set Up and Active)_**  
---|---|---  
  
This interface consists of the following:

_(Status Bitmap)_ |  Indicates the status of the process. Possible statuses are: |  |  **_Connecting_** |  The process is currently waiting to connect.  
---|---|---  
|  **_Active_** |  The process is currently running.  
|  **_Stopped_** |  The process is currently not running.  
|  **_Paused_** |  The process is currently paused.  
  
Left or right clicking on the bitmap displays a popup menu with selections for _Start Process_ , _Pause Process_ , _Resume Process_ and _Halt Process_ , which are the same as selecting the _Start_ , _Pause_ , _Resume_ and _Halt_ buttons beside the grid.

_(Left clicking to display popup menu was added in PxPlus 2017 Update 0002.)_  
  
_Description_ |  Displays _four_ lines of information about the process: |  |  _1st Line:_ |  **Server:** followed by the process _Mirror ID_ , _Process Type_ , _Description_  
---|---|---  
|  _2nd Line:_ |  Process status _(Connecting, Active, Stopped, Paused)_  
|  _3rd Line:_ |  Home directory pathname  
|  _4th Line:_ |  Configuration file name  
  
Double click on the description to launch the **[Data Mirroring Configuration - Edit Process](Data%20Mirroring%20Configuration.htm#editprocess)** interface for the selected process.

#### **Note:**  
If the configuration file for a process has **_not_** yet been defined, the _Description_ for that process displays in red text with the words _Not Defined_ after the _Configuration File Name_.  
  
The buttons beside the grid (explained below) are used to change the status of a selected process. They are enabled/disabled depending on the current status of the selected process.  
  
**_Example:_**  
  
If the selected process is _Stopped_ , only the _Start_ and _View Log_ buttons are enabled.

#### **Note:**  
If the configuration file for a process has **_not_** been defined, the _Start_ , _Pause_ , _Resume_ , _Halt_ and _View Log_ buttons are disabled.  
  
_Start_ |  Starts the process as a minimized, spawned PxPlus task. This button will be enabled if an existing process with a _Stopped_ status is selected.  
_Pause_ |  Pauses the process. This button will be enabled if an existing process with an _Active_ status is selected.  
_Resume_ |  Continues the process. This button will be enabled if an existing process with a _Paused_ status is selected.  
_Halt_ |  Stops the process and removes the minimized, spawned PxPlus task. This button will be enabled if an existing process with either a _Connecting_ or _Active_ status is selected.  
_View Log_ |  Displays a separate panel with the log file pathname and contents. This button will be enabled if a log file exists for the selected process.

#### **Note:**  
These log files are text files that could potentially become quite large over time. Once a log file reaches its capacity, it will no longer be able to display all of the logged entries. Therefore, to prevent the file from becoming too large, it is **_strongly_** recommended that you reset the log file periodically by either renaming it or deleting it.  
  
_New_ |  Launches the **[Data Mirroring Configuration - New Process](Data%20Mirroring%20Configuration.htm#newprocess)** interface for creating a new process.  
_Edit_ |  Launches the **[Data Mirroring Configuration - Edit Process](Data%20Mirroring%20Configuration.htm#editprocess)** interface for editing the selected process.  
_Delete_ |  Launches the **Confirm Deletion** dialog for confirming the deletion of the selected process. Select the _Include Configuration/Log files_ check box on this dialog to delete the associated Configuration and Log files for the selected process. By default, this check box is not selected.  
_Exit_ |  Closes the **Data Mirroring Configuration** interface.  
  
Right clicking on a process in the grid displays a popup menu with selections for _Start Process_ , _Pause Process_ , _Resume Process_ and _Halt Process_. These are the same as selecting the _Start_ , _Pause_ , _Resume_ and _Halt_ buttons beside the grid or using the popup menu when you left or right click on the **[Status Bitmap](Data%20Mirroring%20Configuration.htm#interface)**.

#### **Note:**  
Any change made to the status of a process is reflected in the grid when the change is actually applied. This may take several seconds after the change was requested, depending on configuration settings.

##  Data Mirroring Configuration - New Process

The **Data Mirroring Configuration - New Process** interface is used to create a new process, It is invoked by selecting the _New_ button on the main **Data Mirroring Configuration** interface.

> This interface consists of the following:

_Mirror ID_ |  An ID used to identify the process. Maximum length is 20 characters.

#### **Helpful Tip:**  
Assigning the same Mirror ID to associated processes makes it easier to identify which processes are interconnected.  
  
**_Example:_**  
  
A branch office is configured to send sales data to the head office. The branch office defines the Send process with a _Mirror ID_ of SALES. The head office defines the Receive process with a _Mirror ID_ of SALES and the Apply process with a _Mirror ID_ of SALES.  
  
---|---  
_Process Type_ |  **_(Available when Mirror ID is entered)_** Type of process. Drop box selections are _Send_ , _Receive_ , _Apply_.  
_Description_ |  **_(Available when Mirror ID and Process Type are entered)_** An optional description that is used to identify the process. Maximum length is 30 characters. After the new process is written, this description can be modified, if needed.  
_Home Directory_ |  **_(Available when Mirror ID and Process Type are entered)_** Working directory for launching the process. Enter the full pathname or click the Query button to specify the directory. When defining a new process, this defaults to the current working directory.  
_Configuration File Name_ |  **_(Available when Mirror ID and Process Type are entered)_** Name of the text configuration file to be associated with the process. Defaults to _send.conf_ , _recv.conf_ or _apply.conf_ , depending on the _Process Type_ selected. This field cannot be left blank. When you enter a file name and click the _Write_ button or the _Edit Configuration_ button (described below), a message asks if you want to copy from the standard configuration file (for the selected _Process Type_).  
  
Responding _Yes_ creates the new configuration file in the _Home Directory_ using a copy of the standard configuration file and launches a separate interface for specifying the configuration file parameters.  
  
Responding _No_ does **_not_** create the new configuration file. You are returned to the main **Data Mirroring Configuration** interface with the description for the new process displayed in red text and the words _Not Defined_ appearing after the _Configuration File Name_ in the description. When you are ready to define this file, select this process for editing and click the _Edit Configuration_ button. See **[Edit Configuration](Data%20Mirroring%20Configuration.htm#editconfig)** below.

#### **Note:**  
You **_cannot_** have duplicate configuration file names in the **_same_** _Home Directory_.  
  
_(Duplicate configuration file name checking was added in PxPlus 2018.)_  
  
_Edit Configuration_ |  This button next to _Configuration File Name_ is used to edit the configuration file parameters for the process. See **[Edit Configuration](Data%20Mirroring%20Configuration.htm#editconfig)** below.  
_View Log_ |  Displays a separate panel with the log file pathname and contents. This button is enabled if a log file exists for the selected process.  
_Write_ |  Writes the process record. If a non-existent _Configuration File Name_ has been entered, a message asks if you want to copy from the standard configuration file (for the selected _Process Type_). See _Configuration File Name_ above.  
_Clear_ |  Clears the process record.  
_Exit_ |  Closes the interface without saving the process record.  
  
##  Data Mirroring Configuration - Edit Process

The **Data Mirroring Configuration Edit Process** interface is used to edit an _existing_ process and is invoked by clicking the _Edit_ button on the main **Data Mirroring Configuration** interface.

#### **Note:**  
An existing process can be edited **_only_** when its current status is **_Stopped_** ; otherwise, the settings on this interface are for _viewing only_.

The **Data Mirroring Configuration Edit Process** interface is displayed. This interface is similar to the **[Data Mirroring Configuration - New Process](Data%20Mirroring%20Configuration.htm#newprocess)** interface with a few exceptions: _Mirror ID_ , _Process Type_ and _Clear_ are disabled, and a _View Log_ button, similar to the one found on the main **Data Mirroring Configuration** interface, is displayed. The current status (i.e. _Stopped_) is indicated in red text next to the _Process Type_.

> ##  Edit Configuration

Click the _Edit Configuration_ button next to _Configuration File Name_ to invoke the Edit Configuration interface that is used to view and edit the configuration file parameters associated with a process. These parameters are stored in a text configuration file (_send.conf_ , _recv.conf_ or _apply.conf_ _)_ , depending on the _Process Type_.

Below is the Edit Configuration interface for a **_Send_** process. The **_Receive_** and **_Apply_** processes have their own Edit Configuration interfaces. The configuration file parameters associated with the **[Send](Data%20Mirroring%20Configuration.htm#sendconfig)**, **[Receive](Data%20Mirroring%20Configuration.htm#receiveconfig)** and **[Apply](Data%20Mirroring%20Configuration.htm#applyconfig)** processes are explained in the tables below.

> ## Send Configuration

This file (default is **_send.conf_**) contains the configuration parameters for the journal transmission program **_*plus/jrnl/send_**. This program monitors journal files for updates and **_sends_** a series of journal files to another system.

**Parameter** |  **Variable** |  **Description**  
---|---|---  
**General Information** |  |   
_Directory to Hold Journal Files_ |  DIR |  The DIR value can be defined to override the directory in which the journal files to send can be found. This directory will also be used to hold the log and other related files.  
  
If not specified, the current directory will be used.  
_Log File Name for Error Messages_ |  LOGFILE |  The LOGFILE value defines the pathname for the log file that will receive any error messages. The default value is "send.log".  
  
If not set, the system will use the FILEID+".log" as the name of the file in the journal directory. Should an error occur in the configuration file **_prior_** to the definition of the log file, the default log file of "send.log" will be used.  
_ID to Uniquely Identify Control Files_ |  FILEID |  The FILEID value can be used to uniquely identify control files (error log, etc.) used by this sending process. The default value is "send", thus the default error log will be "send.log".  
  
The FILEID can be changed if running multiple transmission programs from within the same directory. Using different values allows you to properly track and monitor the different transmission programs.  
  
If present and not "send", all log files will be prefixed by the FILEID.  
_Compress Data Being Sent_ |  COMPRESS_DATA |  The COMPRESS_DATA value can be used to indicate that the data being sent is to be compressed. It must be set the **_same_** at both ends (sender and receiver). By default, this check box is set to YES.  
**Connection Information**  
_IP Address / Name of Target System_ |  TCPADDR |  The TCPADDR value defines the IP address and/or name to the target system.  
  
If not entered, "localhost" is assumed.  
  
See the _server_ parameter in **[[TCP] Transmission Control Protocol](../command_tags/tcp.htm)**.  
_Port_ |  TCPPORT |  The Port to use is defined by the TCPPORT value. The default value is 4913. See the _socket_ parameter in **[[TCP] Transmission Control Protocol](../command_tags/tcp.htm)**.

#### **Note:**  
Both a sender and receiver must use the **_same_** Port, which must be **_unique_** for each corresponding sender and receiver.  
  
_TCP Options_ |  TCPOPTIONS |  Any additional PxPlus TCP options can be provided in TCPOPTIONS.  
  
See the _tcp_opts_ parameter in **[[TCP] Transmission Control Protocol](../command_tags/tcp.htm)**.  
_Password_ |  PASSWD |  The PASSWD value is used to secure the handshake. Both a sender and receiver must have the **_same_** PASSWD value. Using the PASSWD helps eliminate spoofing of the connection.  
  
If not specified, the default value (defined in the text file) is used.  
_Seconds Before Checking for New Data_ |  IDLE_WAIT |  The IDLE_WAIT defines how long (in seconds) that the system will sleep between checking the journal files to see if more data is ready to be sent. The default value is 5.  
_Seconds Before Re-connect Attempt_ |  RECONNECT_TIME |  The RECONNECT_TIME defines the time (in seconds) that the system will wait before attempting to reconnect to the target system should an error occur and the connection gets dropped. The default value is 30.  
_Seconds Before Checking Connection is Active_ |  CHECK_TIME |  The CHECK_TIME defines how often (in seconds) that the system will forcibly send a message to the target system to check that the connection is still alive. The default value is 30. The check request will only be sent out if no other activity occurs.  
  
If the connection is not active, the port and journal will be closed, and a reconnect will be attempted after a wait of RECONNECT_TIME.  
_Seconds Before Considering Response Lost_ |  RECV_TIME |  The RECV_TIME defines how long (in seconds) that the system will wait for a response from the target system before considering the message lost. The default value is 10.  
  
If no response is received within the RECV_TIME, the port and journal will be closed, and a reconnect will be attempted after a wait of RECONNECT_TIME.  
**Notification Information**  
_Email Address for Error Reporting_ |  MAILTO |  Whenever a serious error occurs, the system can automatically send an email to the email address specified in MAILTO.

#### **Note:**  
If MAILTO and SMTP are not set, no mail is generated.

**_Examples of Send Errors:_** _** Password rejected by remote -- stopping_ _** Target is in use -- stopping_ _** Invalid response: [response] received from [tcp addr] Resetting line_ _** Journal [journal number] send error Receiving system file is larger than host - stopping_ _** Missing journal.[journal number] on server (target system asked for file higher than server) stopping_  
_SMTP Server_ |  SMTP |  The error email message uses the SMTP server defined in SMTP.

#### **Note:**  
If MAILTO and SMTP are not set, no mail is generated.  
  
_Email From Address_ |  MAILFROM |  The _From_ address for the error email message can be set using the MAILFROM parameter.  
_View File_ |  Button that is used to view the configuration parameters for the associated process.

#### **Note:**  
While you can modify the parameters directly within this file, it is **_strongly_** recommended to use the Edit Configuration interface to make any changes.  
  
_Save_ |  Saves changes and closes the Edit Configuration interface.  
_Cancel_ |  Closes the Edit Configuration interface without saving any changes.  
  
## Receive Configuration

This file (default = **_recv.conf_**) contains the configuration parameters for the journal transmission program **_*plus/jrnl/recv_**. This program **_receives_** the journal files sent by **_*plus/jrnl/send_** and replicates the journals on a new system.

**Parameter** |  **Variable** |  **Description**  
---|---|---  
**General Information** |  |   
_Directory to Hold Journal Files_ |  DIR |  The DIR value can be defined to override the directory in which the journal files will be created. This directory will also be used to hold the log and other related files.  
  
If not specified, the current directory will be used.  
_Log File Name for Error Messages_ |  LOGFILE |  The LOGFILE value defines the pathname for the log file that will receive any error messages. The default value is "recv.log".  
_Compress Data Being Sent_ |  COMPRESS_DATA |  The COMPRESS_DATA value can be used to indicate that the data being received has been compressed. It **_must_** be set the same at both ends (sender and receiver). By default, this check box is set to YES.  
**Connection Information**  
_Port_ |  TCPPORT |  The Port to use is defined by the TCPPORT value. The default value is 4913. See the _socket_ parameter in **[[TCP] Transmission Control Protocol](../command_tags/tcp.htm)**.

#### **Note:**  
Both a sender and receiver must use the **_same_** Port, which must be **_unique_** for each corresponding sender and receiver.  
  
_TCP Options_ |  TCPOPTIONS |  Any additional PxPlus TCP options can be provided in TCPOPTIONS. See the _tcp_opts_ parameter in **[[TCP] Transmission Control Protocol](../command_tags/tcp.htm)**.  
_Password_ |  PASSWD |  The PASSWD value is used to secure the handshake. Both a sender and receiver **_must_** have the same PASSWD value. Using the PASSWD helps eliminate spoofing of the connection.  
  
If not specified, the default value (defined in the text file) is used.   
_Seconds Before Checking for New Data_ |  IDLE_WAIT |  The IDLE_WAIT defines how long (in seconds) that the system will sleep between checking the **_.stop / .pause_** files and awaiting connection/data. The default value is 5.  
_Seconds Before Considering Response Lost_ |  RECV_TIME |  The RECV_TIME defines how long (in seconds) that the system will wait for a response from the target system before considering the message lost. The default value is 10.  
  
If no response is received within the RECV_TIME, the port and journal will be closed, and a reconnect will be attempted after a wait of RECONNECT_TIME.  
**Notification Information**  
_Email Address for Error Reporting_ |  MAILTO |  Whenever a serious error occurs, the system can automatically send an email to the email address specified in MAILTO.

#### **Note:**  
If MAILTO and SMTP are not set, no mail is generated.

**_Examples of Receive Errors:_** _** Cannot open server port [tcp path] shutting down_ _** Expected Minimum journal file number from sender_ _** Improper password received from [key of tcp channel]_ _** Cannot create file journal.[journal number] on receiver: [message]_ _** Received end of journal.[journal number] yet no data received stopping_  
_SMTP Server_ |  SMTP |  The error email message uses the SMTP server defined in SMTP.

#### **Note:**  
If MAILTO and SMTP are not set, no mail is generated.  
  
_Email From Address_ |  MAILFROM |  The _From_ address for the error email message can be set using the MAILFROM parameter.  
_View File_ |  Button that is used to view the configuration parameters for the associated process.

#### **Note:**  
While you can modify the parameters directly within this file, it is **_strongly_** recommended to use the Edit Configuration interface to make any changes.  
  
_Save_ |  Saves changes and closes the Edit Configuration interface.  
_Cancel_ |  Closes the Edit Configuration interface without saving any changes.  
  
## Apply Configuration

This file (default = **_apply.conf_**) contains the configuration parameters for the journal application program **_*plus/jrnl/apply_**. This program **_applies_** the changes recorded in a series of journal files onto the files on the target system/directory.

#### **Note:**  
The _*plus/jrnl/apply_ program will check for the **_apply.stop_** file every 100 transactions to allow the _Apply_ process to be stopped before completing the entire series of journal files.  
  
_(The check for the apply.stop file was added in PxPlus 2021.)_

**Parameter** |  **Variable** |  **Description**  
---|---|---  
**General Information** |  |   
_Directory to Hold Journal Files_ |  DIR |  The DIR value can be defined to override the directory in which the journal files are found. This directory will also be used to hold the log and other related files.  
  
If not specified, the current directory will be used.  
_Log File Name for Error Messages_ |  LOGFILE |  The LOGFILE value defines the pathname for the log file that will receive any error messages. The default value is "apply.log".  
  
If not set, the system will use "apply.log" as the name of the file in the journal directory. Should an error occur in the configuration file **_prior_** to the definition of the log file, the default log file of "apply.log" will be used.  
**Connection Information**  
_Seconds Before Checking for New Data_ |  IDLE_WAIT |  The IDLE_WAIT defines how long (in seconds) that the system will sleep between checking the journal files to see if more data is ready to be applied. The default value is 5.  
_Target Output Directory_ |  OUTPUT_DIR |  The OUTPUT_DIR value defines the target output directory. If not specified, the current working directory will be used.  
_Prefix_ |  PREFIX |  The PREFIX value can be used to define a standard PxPlus prefix value to be applied to the output.  
_PxPlus Prefix File_ |  PREFIX_FILE |  The PREFIX_FILE value can be used to define a PxPlus prefix file to be used when looking up the actual pathnames for the files.  
_Program for User Journal Messages_ |  USERJRNL |  The USERJRNL directive defines the name of the program to call to process any user defined journal messages. This program will be passed the contents of the string from a SYSTEM_JRNL WRITE <string> directive.  
_Redirect Options_ |  REDIRECT |  The REDIRECT option (there may be multiple) allows you to define a mask and replacement target file name. The mask and replacement name must be separated by a comma. If the replacement name is **-**  _(dash)_ , then the output is discarded. In addition, in the file name, %0, %1, %2, ... will be changed with the full mask or segments. **_Examples:_**  
  
REDIRECT=AR(.*),AcctRec%1  
REDIRECT=GL9,-  
_Program Option (mask,file)_ |  PROGRAM |  The PROGRAM option provides a file name mask, which, if matched, will cause the system to send the data to a program. This program will be passed the following values: |  _Journal Record Type_ |  1 character _(string)_  
---|---  
_Journal Data_ |  Record contents _(string)_  
_Journal Key Info_ |  External key size for Keyed file, Index for Indexed _(numeric)_  
_File Name_ |  Adjusted file name _(string)_  
_File Pathname_ |  Original file pathname _(string)_  
**Notification Information**  
_Email Address for Error Reporting_ |  MAILTO |  Whenever a serious error occurs, the system can automatically send an email to the email address specified in MAILTO.

#### **Note:**  
If MAILTO and SMTP are not set, no mail is generated.

**_Examples of Apply Errors:_** _** Error X on read of journal file: [path to journal file]_ _** Program [program name] has exited with an error [error number] processing [file name]_  
_SMTP Server_ |  SMTP |  The error email message uses the SMTP server defined in SMTP.

#### **Note:**  
If MAILTO and SMTP are not set, no mail is generated.  
  
_Email From Address_ |  MAILFROM |  The _From_ address for the error email message can be set using the MAILFROM parameter.  
_View File_ |  Button that is used to view the configuration parameters for the associated process.

#### **Note:**  
While you can modify the parameters directly within this file, it is **_strongly_** recommended to use the Edit Configuration interface to make any changes.  
  
_Save_ |  Saves changes and closes the Edit Configuration interface.  
_Cancel_ |  Closes the Edit Configuration interface without saving any changes.
