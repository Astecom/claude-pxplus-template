# Utility Routines

***PLUS/JRNL/SEND(RECV)** |  **_System Journal Transport_**  
---|---  
  
## Description

Two utility programs (_*plus/jrnl/send_ and _*plus/jrnl/recv_) provide a facility to do a controlled transfer of system journals between two system (an originator and a target system). These programs are designed to be used, and can only be used in conjunction with the automated system journal indexing option of PxPlus.

The send program should be run on the system creating the journals and will forward the journals (as they are being updated) to the target system running the _recv_ program.

Both programs work from a configuration file (_send.conf_ and _recv.conf_ respectively). The name of the configuration files can be overridden by specifying alternate pathnames in the first -ARG value of the command line used to launch the utilities.

_(The journal file Send/Receive utilities were added in PxPlus v9.10.)_

## Processing Flow

When launched, the send program attempts to connect to the target system based on the information it finds in the configuration file. Once the connection is established, the sending program forwards the sequence number of the oldest journal file it has. The target (running the _recv_ program) responds with the highest journal sequence number and position that it has already received.

The sender then proceeds to forward all journal information that has been recorded subsequent the target systems highest point. Once all information has been sent the sender will go into an idle state and await further data to be placed on the system journal files.

## Monitoring

Whenever the send program starts sending a journal file it will create a file "sending.nnn" where nnn is the journal sequence number being sent. Once the journal is closed and the target system has confirmed closure, the "sending.nnn" file will be deleted and a file "sent.nnn" will be created.

Whenever the _recv_ program starts receiving a journal file it will create a file "receiving.nnn". Once the journal is closed and the target system has received and confirmed closure, the "receiving.nnn" file will be deleted and a file "received.nnn" will be created.

_There is no data placed on any of the above files; their existence is intended to be used to monitor the progress of the transfers._

## Error Handling

Both programs log events to a log file (_send.log_ and _recv.log_). In addition to the event logging, critical errors that prevent the on-going operation of the process can be forwarded to an email account.

The email server and account must be specified in the respective configuration files.

## Configuration Files

The configuration files used by both of these programs are simple text files used to define a number of internal variables referenced by their respective programs.

Blank lines and lines starting with #, ! or ; are considered comment lines. All other lines must define system variables and consist of the variable name, followed by an **=** (_equals sign_) and the value to be assigned. If the value assigned is numeric, the variable is assumed to be numeric. If the value is not numeric or is surrounded by quotes, the variable is considered a string variable.

Sample configuration files (see below) are provided in the _*plus/jrnl_ directory. In these files, the system default variables and values are included as comments, each starting with #!!.

**Default send.conf**  
---  
#  
# PxPlus Journal directory send configuration file  
#  
# This file contains the configuration parameters for the journal transmission program  
# *plus/jrnl/send.  
#  
# Each line can be a comment or variable definition. A variable definition contains the  
# name of the variable, an equals sign (=) and the value. If the value is numeric, then the   
# variable name will be considered a numeric variable. If not numeric, then a string variable  
# will be created. (To force string, surround the value with quotes ").  
#  
# Note: The values of YES or TRUE will be considered numeric 1, while NO or FALSE 0.  
#  
# e.g. COMPRESS_DATA=YES is same as COMPRESS_DATA=1.  
#  
#   
# Blank lines or lines starting with #, ! or ; are considered comment lines.  
#   
# The default values for most values have been placed in this file as comments starting with #!!.  
#  
# ------------------------------------------------------------------  
# General information  
#  
# The DIR value can be defined to override the directory in which the journal files  
# to send can be found. This directory will also be used to hold the log and other  
# related files. If not specified, the current directory will be used.  
  
#!! DIR="."  
  
# The LOGFILE value defines the pathname for the logfile that will receive any error messages.  
# If not set, the system will use the FILEID+".log" as the name of the file in the journal  
# directory. Should an error occur in the config file *prior* the definition of the logfile,  
# the default log file of "send.log" will be used.  
  
#!!LOGFILE=send.log  
  
  
# The FILEID value can be used to uniquely identify control files (error log, etc.)  
# used by this sending process. The default value is "send" thus the default error  
# log will be "send.log".   
#  
# The FILEID can be changed if running multiple transmission programs from within the  
# same directory. Using different values allows you to properly track/monitor the   
# different transmission programs.  
#  
# If present and not "send", all log files will be prefixed by the FILEID.  
  
#!!FILEID=send  
  
# The COMPRESS_DATA value can be used to indicate that the data being sent is to be compressed.  
# It must be set the same at both ends.  
  
#!!COMPRESS_DATA=YES  
  
# ------------------------------------------------------------------  
# Connection information  
#  
# The TCPADDR value defines the IP address and/or name to the target system.  
# The port to use is defined by the TCPPORT value (default if not set is 4913).  
# Any additional PxPlus TCP options can be provided in TCPOPTIONS.  
  
#!! TCPADDR=localhost  
#!! TCPPORT=4913  
#!! TCPOPTIONS=  
  
# The PASSWD value is used to secure the handshake. Both a sender and receiver must  
# have the same PASSWD value. Using the PASSWD helps eliminate spoofing of the  
# connection.  
  
#!! PASSWD=HooHa  
  
# The IDLE_WAIT defines how long (secs) the system will sleep for between checking the  
# journal files to see is more data is ready to be sent.  
  
IDLE_WAIT=5  
  
# The RECONNECT_TIME defines the time (secs) that the system will wait before attempting to  
# re-connect to the target system should an error occur and the connection gets dropped.  
  
#!!RECONNECT_TIME=30  
  
# The CHECK_TIME defines how often (secs) the system will forcibly send a message to the  
# target system in order to check that the connection is still alive. The check request  
# will only be sent out if no other activity occurs.  
  
#!!CHECK_TIME=30  
  
# The RECV_TIME defines how long (secs) the system will wait for a response from the  
# target system before considering the message lost.  
  
#!!RECV_TIME=30  
  
# ------------------------------------------------------------------  
# Notification information  
#  
  
# Whenever a serious error occurs, the system can automatically send an email to the  
# email address specified in MAILTO. It uses the smtp server defined in SMTP.  
#  
# The From address can be set using the MAILFROM parameter.  
#  
# If MAILTO and SMTP are not set, no mail is generated.  
  
# MAILTO=person.to.contact@example.com  
# STMP=mail.example.com  
# MAILFROM=person.to.sendfrom@example.com  
  
**Default recv.conf**  
---  
#  
# PxPlus Journal directory recv configuration file  
#  
# This file contains the configuration parameters for the journal transmission program  
# *plus/jrnl/recv.  
#  
# Each line can be a comment or variable definition. A variable definition contains the  
# name of the variable, an equal sign (=) and the value. If the value is numeric then the   
# variable name will be considered a numeric variable. If not numeric then a string variable  
# will be created. (To force string surround the value with quotes ")  
#  
# Note: The values of YES or TRUE will be considered numeric 1, while NO or FALSE 0.  
#  
# e.g. COMPRESS_DATA=YES is same as COMPRESS_DATA=1  
#  
#   
# Blank lines or lines starting with #, ! or ; are considered comment lines.  
#   
# The default values for most values have been placed in this file as comments starting with #!!.  
#  
# ------------------------------------------------------------------  
# General information  
#  
# The DIR value can be defined to override the directory in which the journal files  
# to send can be found. This directory will also be used to hold the log and other  
# related files. If not specified, the current directory will be used.  
  
#!! DIR="."  
  
# The LOGFILE value defines the pathname for the logfile that will receive any error messages.  
  
  
#!!LOGFILE=recv.log  
  
# The COMPRESS_DATA value can be used to indicate that the data being sent is to be compressed.  
# It must be set the same at both ends.  
  
#!!COMPRESS_DATA=YES  
  
# ------------------------------------------------------------------  
# Connection information  
#  
# The port to use is defined by the TCPPORT value (default if not set is 4913).  
# Any additional PxPlus TCP options can be provided in TCPOPTIONS.  
  
#!! TCPPORT=4913  
#!! TCPOPTIONS=  
  
# The PASSWD value is used to secure the handshake. Both a sender and receiver must  
# have the same PASSWD value. Using the PASSWD helps eliminate spoofing of the   
# connection.  
  
#!! PASSWD=HooHa  
  
# The IDLE_WAIT defines how long (secs) the system will sleep for between checking the  
# for .stop/.pause files and awaiting connection/data.  
  
IDLE_WAIT=5  
  
# The RECV_TIME defines how long (secs) the system will wait for a response from the  
# target system before considering the message lost.  
  
#!!RECV_TIME=30  
  
# ------------------------------------------------------------------  
# Notification information  
#  
  
# Whenever a serious error occurs, the system can automatically send an email to the  
# email address specified in MAILTO. It uses the smtp server defined in SMTP.  
#  
# The From address can be set using the MAILFROM parameter.  
#  
# If MAILTO and SMTP and not set, no mail is generated.  
  
# MAILTO=person.to.contact@example.com  
# STMP=mail.example.com  
# MAILFROM=person.to.sendfrom@example.com
