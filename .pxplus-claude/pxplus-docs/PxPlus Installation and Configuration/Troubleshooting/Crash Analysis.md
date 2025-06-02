# Troubleshooting

**Crash Analysis**|   
---|---  
  
Both Windows and UNIX/Linux versions of PxPlus 2016 (and later) contain logic to trap unexpected application failures. When an unexpected crash occurs, the system wrap up logic will output key application information to the log file, if present.

The information reported consists of the following:

  * Cause of the failure (GPF, Segmentation fault, Invalid instruction, TERM request)

  
---  
  
  * ERR, CTL, RET, LFA and LFO

  
  
  * Last path accessed

  
  
  * Program stack with line number and program name

  
  
  * List of open files

  
  
  * ERR information including error history, if enabled

  
  
  * Jump history, if enabled

  
  
  * Stack dump **_(Linux Only)_**

  
  
Setting the log file can be done by using any of the following options:

  * 'OPTION'("LOGFILE","path") mnemonic (See **['OPTION'](../../mnemonics/option.md)** mnemonic.)

  
---  
  
  * SETDEV (0) SET "LogFile" TO "PATH" (See **[SETDEV SET](../../directives/setdev_set.md)** directive.)

  
  
  * Inclusion of a LOGFILE= in the [Config] section of the Windows INI file (See **[INI Contents](../Customizing%20PxPlus/INI%20Contents.md)**.)

  
  
When defining the log file, you can specify the maximum file size (in megabytes) that you want the log file to grow. See **[PxPlus Log File](../../PxPlus%20User%20Guide/Development%20Tools/Error%20Handling%20and%20Debugging/Additional%20Debugging%20Procedures%20and%20Facilities.htm#logfile)**.

_(The ability to define the maximum log file size was added in PxPlus 2022.)_

#### **Note:**  
On UNIX/Linux, the log file defaults to _pvxtrace.log_ , if present.
