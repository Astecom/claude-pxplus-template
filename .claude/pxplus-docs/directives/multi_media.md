# Directives

**MULTI_MEDIA** |  **_Control Multimedia Interface_**  
---|---  
  
##  Format

**MULTI_MEDIA** _command$_[,_var_ _$_[,_ctl_val_]]  
  
**_Where:_**

_command$_ |  String containing the multi-media command to execute. String expression.  
---|---  
_ctl_val_ |  String variable to receive any response or error message.  
_var_ _$_ |  Optional CTL code to be generated when a NOTIFY signal is returned by the multi-media system. Numeric expression.  
  
##  Description

#### **Note:**  
This directive functions only under **_WindX or Windows_**.

Use the **MULTI_MEDIA** directive to pass commands to the Windows Multi-media Control Interface (MCI). These strings can contain commands that will play WAV files, MID files, AVI files or control various multi-media devices.

Typical commands include:

**Command** |  **Function/Purpose**  
---|---  
open _filename_ |  Opens the specified file and loads the required drivers. You can append an optional "alias name" to change the name of the file and make controlling the file easier.  
close _filename_ |  Closes the specified files and releases the drivers.  
close all |  Stops and closes all files.  
play _filename_ |  Plays the specified file. The file will be opened (if not already opened), played and closed automatically.  
rewind _filename_ |  Rewinds the file.  
stop _filename_ |  Stops the playback.  
  
##  Example

The following examples illustrate the different uses for the **MULTI_MEDIA** directive:

**_Example 1:_**

> multi_media "open c:\video\files\emo.avi alias video"

**_Example 2:_**

> 0010 ! Close all previous Multi_media commands for this session  
>  0020 multi_media "close all"  
> 0030 !  
> 0040 ! Assign an Alias to the Wave file for use in the Play command  
>  0050 multi_media "open c:\windows\media\ada.wav alias wavefile"  
>  0060 !  
> 0070 ! Issue the Play command requesting notification of a CTL=100  
> 0080 ! after the wave file has finished  
>  0090 multi_media "play wavefile notify",100  
>  0100 !  
> 0110 ! Wait for the CTL=100  
>  0120 obtain X$  
>  0130 if ctl=4 then stop  
>  0140 if ctl<>100 then goto 0110  
>  0150 print "Multi_media command finished"

Future references to the file could simply use the alias. Two options can be appended to the play command:

|  NOTIFY |  Send the CTL value when completed.  
---|---|---  
|  WAIT |  Wait for the playback to complete.  
  
If an error occurs during processing, it will be returned in the _return$_ variable.

#### **Note:**  
Full documentation of all available MCI commands is beyond the scope of this manual. Refer to other (Microsoft) sources for complete documentation on the MCI system.
