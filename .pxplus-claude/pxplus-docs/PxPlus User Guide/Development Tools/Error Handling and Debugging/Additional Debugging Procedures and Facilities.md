# Error Handling and Debugging

**Additional Debugging Procedures** |  **__**  
---|---  
  
While **[Error Codes and Messages](Error%20Codes%20and%20Messages.md)** and the **[Windows Debugging Environment](Windows%20Debugging%20Environment.md)** provide the most obvious means for finding errors in syntax and logic, a few other facilities can be employed to handle or prevent programming problems.

#### **Note:**  
For debugging procedures involving the installation, start up and configuration of PxPlus, see **[Troubleshooting](../../../PxPlus%20Installation%20and%20Configuration/Troubleshooting/Overview.md)**.

## Current State Information (Windows)

For a quick look at the current state of the PxPlus version installed on your system, select the _About PxPlus_ option from the PxPlus icon drop-down menu, then click the _Info_ button.

The PxPlus Current State Information window is displayed with information that includes the version number and build date, current date, program backtrace, list of all open files, and a list of all active OOP objects. Update contents by clicking the _Refresh_ button. 

#### **Note:**  
This feature is **_only_** available with PxPlus for Windows.

##  PxPlus Log File

The PxPlus log file is used to provide a more detailed breakdown of internal errors that are encountered by PxPlus on Windows and UNIX/Linux platforms.

When defining the log file, you can specify the maximum size you want the log file to grow by appending a **,** (_comma_) followed by the maximum file size (in megabytes) to your log file pathname. Once the log file reaches this size, it will be renamed automatically by suffixing it with ".1", and a new log file will be created. Any prior log files ending with ".1" will be renamed with ".2", ".2" will be renamed with ".3" and so on up to ".5". The log file ending with ".5" will not be renamed ".6"; instead, it will be removed from the system. A total of six log files can be created (i.e. the current log file with no suffix, and the five prior log files with suffixes .1 through .5). This total number is fixed and cannot be changed.

_(The ability to define the maximum log file size was added in PxPlus 2022.)_

The log file is activated by adding a **LogFile=**_filename_ entry (without quotes) to the PxPlus INI file under the **[Config]** section. For information on defining the **LogFile** entry, see **[INI Contents](../../../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/INI%20Contents.htm#Mark7)**.

In the UNIX environment, it can also be enabled by the existence of a file called _pvxtrace.log_. If the file exists when PxPlus attempts to add the first entry, then entries are appended to this file. If it does not exist, the logging feature is disabled for the balance of the PxPlus session.

All entries in the log file are displayed using the following format:

> _mmm_ _dd hh:mm_**[**_progname:stmt_ _#_**]**_errormsg_

**_Where:_**

_mmm dd hh:mm_ |  Date and time of the entry  
---|---  
_progname:stmt_ _#_ |  Name of the program and statement executing when the entry was added  
_errormsg_ |  Actual descriptive message  
  
**_Example:_**

> Sep 15 16:52 [*ntslave:0320] [TCP][Winsock]Error status:10049 (-1)

Entries in the log for TCP/IP issues include a descriptive message, followed by the actual TCP/IP error code and the socket number that was being used. A socket value of -1 usually indicates the **OPEN** was not successful.

## Logical Line Labels

While logical line labels do not qualify as debugging options, they can reduce potential difficulties caused by renumbering programs and can simplify the development of programs without line numbers.

See **[Labels/Logical Statement References](../../../appendix/labels~logical_statement_references.md)**.

## Generic Escape Key Handling

Using the following syntax, an application can intercept **Esc** keys system wide:

> **SETESC** _prog_name$_

The **[SETESC](../../../directives/setesc.md)** directive takes precedence over the generic escape key handler.

## For ODBC-Related Problems

The **['!Q'=](../../../parameters/!q.md)** system parameter can be used to show all of the SQL commands being executed in a Windows message box. The _OK/Cancel_ option allows a programmer to disable the message boxes by selecting _Cancel_.
