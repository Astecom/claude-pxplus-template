# System Functions 

**TCB( )** |  **_Return Task Information_**  
---|---  
  
##  Formats

1. |  _Return Task Information_: |  **TCB (**_tcb_code_ [,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Return Activation Information_ _:_ |  **TCB (**_pkg_index_ _, info_reqd_[,**ERR=**_stmtref_]**)**  
3. |  _Return Platform Information_: |  **TCB (**_keyword_[,**ERR=**_stmtref_ ]**)**  
4. |  _Return UNIX User Information_: |  **TCB (**_keyword_ , _userid_ [,**ERR=**_stmtref_ ]**)**  
  
**_Where:_**

_info_reqd_ |  Can be one of the following values: |  0 |  Actual package number  
---|---  
1 |  Expiry date  
2 |  Package activation flags  
_pkg_index_ |  A number from 0 to the number of packages installed.  
_keyword_ |  Keyword associated with specific platform information.  
_userid_ |  User ID whose information is to be returned.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_tcb_code_ |  Value indicating what type of information is to be returned. Numeric expression.  
  
##  Description

The **TCB( )** function returns information for several different purposes:

> A single _tcb_code_ specified in the **TCB( )** function returns a corresponding system control value. See **Format 1: Return Task Information**.

> Two numeric codes (_pkg_index_ , _info_reqd_) are required for activation/licensing information. See **Format 2: Return Activation Information**.

> Specific keywords are used to return information about the platform that PxPlus is compiled for or on. See **Format 3: Return Platform Information**.

> Specific keywords are used to return user registration information on UNIX/Linux. See **Format 4: Return User Information**.

##  Format 1

**_Return Task Information_**

**TCB (**_tcb_code_[,**ERR=**_stmtref_]**)**

When **TCB( )** is used with a **_single code_** (_tcb_code_), it returns task information in the form of a numeric system control value. The codes and their values are:

**TCB( )** |  **Return Values**  
---|---  
0 |  **_(Reserved)_** 0 (zero).  
1 |  **_(Reserved)_** 0 (zero).  
2 |  Error branch taken indicator. Will be set to non-zero whenever an error branch (ERR=, DOM=, NUL=, BSY= or END=) branch is taken. Reset to 0 (zero) whenever the system detects the presence of an error branch option. **_Example:_** read (1,key=K$,err=*NEXT) ...   
if tcb(2) then ... _prior read had error_ ...   
3 |  Internal system error code.  
4 |  Current statement number (only reported when running a program, not in Command mode).  
5 |  Line number of the last error.  
6 |  **SETESC** statement number.  
7 |  **SETERR** statement number.  
8 |  Top statement number in **GOSUB** stack.  
9 |  Returns the operating system error code.  
  
**_On Windows:_** This is the value returned by the system call GetLastError, which will have the error code from the last Windows system call.  
  
**_On UNIX/Linux:_** Returns the value in the system error number field _errno_.  
10 |  Internal system error code.  
11 |  Retry statement number.  
12 |  Current level number.  
13 |  Current level number. PxPlus includes current level in both **TCB(12)** and **TCB(13)** for compatibility with other Business Basics.  
14 |  Current precision (**-** 1=**FLOATINGPOINT**).  
15 |  Current maximum memory size in bytes.  
16 |  Length of string found in last **[MSK( )](msk.md)** function.  
17 |  Current level of user functions.  
18 |  Current iteration of range assignment.  
19 |  Current iteration for enhanced **FOR..NEXT** loop.  
20 |  Number of arguments in **'CALL'**.  
21 |  Current activation flags.  
22 |  Number of days left for current activation.  
23 |  Maximum user count.  
24 |  Number of users available.  
25 |  Operating system version number.  
27 |  Reports current session's user slot number and type of slot: >0 - Dedicated non-shared user slot number being used  
<0 - Shared user slot number being used  
0 - Task is not being counted in the user slot table (background task) See [**'1U'**](../parameters/1u.md) system parameter.  
29 |  Reports the current build level of PxPlus.  
30 |  Statement number of last error in called program.  
31 |  Last object to lose focus.  
32 |  Version level of activation.  
33 |  System serial number.  
34 |  System machine class.  
35 |  System identification number.  
36 |  PxPlus Library version code.  
37 |  EFF support: 0 - EFF not supported  
1 - EFF support for files up to 2GB  
2 - EFF support for files over 2GB  
39 |  Highest used object identifier. (0 = no objects in system)  
40 |  **SETTRACE** file number (if active).  
41 |  Number of duplicate labels on last save.  
42 |  Number of unknown state labels on last save.  
43 |  Offset to the last detected error in the last statement compiled. Reports the number of characters before the error occurred.  
44 |  Number of seconds of offset to GMT (Greenwich Mean Time).  
45 |  Daylight Savings indicator: 1 if Daylight Savings active, 0 if not.  
46 |  **_(Reserved for System Use)_** _(TCB(46) was added in PxPlus 2021.)_  
47 |  Returns the maximum number of lines/columns that the system can support (254 or 620, depending on the release you are using and activation levels). _(TCB(47) was added in PxPlus 2021.)_  
50 |  Number of file reads.  
51 |  Number of file writes.  
52 |  Number of Keyed I/O forced buffer flushes.  
53 |  Number of programs loaded from disk.  
54 |  Number of programs loaded from program cache.  
55 |  Program swap-outs.  
56 |  Program swap-ins.  
57 |  Program reloads from disk.  
60 |  **_(PVX Windows)_** Keyed file header busy retries.  
61 |  Busy record count.  
62 |  Number of unsuccessful file opens.  
**For TCB(63) to TCB(66) below, the values in the system parameters['VR'](../parameters/vr.md) and ['VW'](../parameters/vw.md) define the number of read/write retries before a data read/write error will be generated:**  
63 |  Number of **READ** s verified.  
64 |  Number of **WRITE** s verified.  
65 |  Number of **READ** mis-compares.  
66 |  Number of **WRITE** mis**-** compares.  
67 |  On completion of **KEYED LOAD** command: > 0 - The number of keys reloaded  
-1 - Keyed load encountered different number of keys on different key chains  
68 |  Password retry count.  
70 |  Number of logical **[OPEN](../directives/open.md)** directives executed.  
71 |  Number of logical **[READ](../directives/read.md)** / **[EXTRACT](../directives/extract.md)** / **[FIND](../directives/find.md)** directives executed.  
72 |  Number of logical **[WRITE](../directives/write.md)** and **[REMOVE](../directives/remove.md)** directives executed.  
73 |  Number of dynamically added EFF file buffers.  
74 |  Number of dynamically added VLR file buffers.  
75 |  Number of WindX packets forced to send response due to [**'TA'=**](../parameters/ta.md) system parameter.  
79 |  Returns the number of active WindX Plug-ins connected to the server. It can be compared against the number of licensed WindX Plug-in users, which can be obtained from MOD (TCB (20013, 2), 2048), to see if more users can connect.

#### **Note:**  
This value is only valid on a **_Base_** product **_and_** only if the WindX Plug-in Add-on is present.

_(TCB(79) was added in PxPlus 2019 Update 2.)_  
80 |  Last VBX status or error code.  
81 |  Last Window LPARAM= value.  
82 |  Windows operating system version: 0 - If running under Windows 3.1  
1 - If running under Windows 95  
2 - If running under Windows NT  
-1 - If running on a **non** -Windows system  
83 |  Status of the debug window:  
  
$0001$ - Command Window is active  
$0002$ - Trace Window is active  
$0004$ - Break Window is active (prior PxPlus v8.11, build 9182.1 indicated breakpoints exist)  
$0008$ - Watch Window is active  
$0040$ - Break points are defined (as of PxPlus v8.11, build 9182.1)  
$0080$ - Watch values exist (as of PxPlus v8.11, build 9182.1) _  
_ $0800$ - Debug windows are disabled (as of PxPlus v8.11, build 9182.1)  
84 |  Last OS exit status from a process launched by an [**INVOKE**](../directives/invoke.md) or a [**SYS( )**](sys.md) function. Only valid if system waits for task completion.  
85 |  Last spawned task/process identifier (PID).  
86 |  WindX serial number (or zero if not using WindX). (added in PxPlus v8.11)  
87 |  **_(UNIX/Linux Only)_** Returns PID of lock conflict. When a file I/O attempt is made and fails due to a lock, **TCB(87)** returns the PID of the process owning the lock. Use this process ID along with the output of a 'ps' command to identify who has a record locked.  
88 |  WindX version number or 0 (zero) if not running under a WindX session.  
89 |  Numeric value of current PID. This allows for PID values that are larger than the 16**-** bit values returned by GID and will remain constant for 32**-** bit, upcoming 64**-** bit (and beyond) operating systems. Replaces the use of DEC($00$+GID) to retrieve the current PID value.  
91 |  Current Task/Thread Priority level. Three system parameters control the priority of a task, primarily to balance the load in a Client/Server environment. See **['Q_'](../parameters/q_.md)**, **['Q^'](../parameters/q%5e.md)** and **['QF'](../parameters/qf.md)** task priorities.  
92 |  Yields the **TIM=**_value *_ 100 (100ths of a second) when doing embedded I/O, or -1 if no **TIM=**.  
93 |  Current object ID used in the **[WITH](../directives/with.md)** directive.  
94 |  **_(UNIX/Linux Only)_** Current logical effective UserID.  
95 |  **_(UNIX/Linux Only)_** Current logical effective GroupID.  
96 |  **_(UNIX/Linux Only)_** Current True OS effective UserID.  
97 |  **_(UNIX/Linux Only)_** Current True OS effective GroupID.  
99 |  Program security flags.  
101 |  Number of times variables were referenced.  
102 |  Number of variables not found in the variable table.  
103 |  Number of memory compares performed to locate variables.  
104 |  Number of times the variable table was re-balanced.  
110 |  Number of memory allocations made by PxPlus.  
130 |  Number of entries currently in the Error History table. (added in PxPlus v11)  
170 |  Windows Service handle. 0 if not running as a service.  
190  |  **ADO** Support: 1 if available, 0 if not.  
191 |  **LibHaru**(Enhanced PDF) support: 1 if available, 0 if not.  
192  |  **_(Obsolete)_** Running **UltraFX** : 1 if enabled, 0 if not.  
193 |  **XML** support: 1 if available, 0 if not.  
195  |  **ZLIB** support: 1 if available, 0 if not.  
196 |  **DLL( )** UNIX/Linux support: 1 if enabled, 0 if not.  
197  |  **ODBC** : 1 if enabled, 0 if not.  
198 |  **DB2** support: 1 if enabled, 0 if not.  
199 |  Built-in **SSL** : 1 if SSL supported, 0 if not.  
**TCB values in the 200 range are designated for use with ORACLE:**  
200 |  OCI available: 1 if OCI is enabled, 0 if not.  
201 |  OCI Connects.  
202 |  OCI Opens.  
203 |  OCI Shares.  
204 |  OCI Selects.  
205 |  OCI Inserts.  
206 |  OCI Updates.  
207 |  OCI Deletes.  
208 |  OCI Prepare Selects.  
209 |  OCI Prepared Select Used.  
210 |  OCI Prepare Insert.  
211 |  OCI Prepared Insert Used.  
212 |  OCI Prepare Failures.  
213 |  OCI Dictionary Reads.  
214 |  OCI User Commands.  
**The following TCB values return information used for sizing variables when building a C structure, either a numeric size (in bytes not bits) or 0 if there is no such data type:**  
301 |  Size of a pointer (any kind of memory pointer).  
302 |  Size of a _Boolean._  
303 |  Size of a _char_ or _byte._  
304 |  Size of a _short_ or _short int._  
305 |  Size of an _int._  
306 |  Size of a _long_ or _long int._  
307 |  Size of a _long double._  
308 |  Size of a _long long._  
309 |  Size of a _double._  
310 |  Size of a _float._  
311 |  **_(Windows Only)_** Size of a WORD.  
312 |  **_(Windows Only)_** Size of a DWORD.  
313 |  **_(Windows Only)_** Size of a HANDLE.  
314 |  **_(Windows Only)_** Size of a WCHAR.  
315 |  **_(Windows Only)_** Size of a LPARAM.  
316 |  **_(Windows Only)_** Size of a WPARAM.  
500 |  Number of characters into the compression routine for WindX.  
501 |  Number of characters out of the compression routine for WindX.  
502 |  Number of times Windows version of the system was Idle and went through the Message Queue.  
503 |  Number of extra characters (or missing characters if negative) in data detected on last read against an IOList.  
504 |  Windows character set.  
505 |  Windows Code page for character presentation.  
506 |  Process ID. If running under client server, this will be the process ID on the server.  
507 |  External debugger status: 0 - No debug active  
-1 - This process is being debugged  
>0 - Process ID being debugged by this process  
510 |  Object number for the currently defined [**Object Defined Controls**](../objctl1/overview.md) server.  
511 |  Current number of cached object classes. _(added in PxPlus v8.01, build 9181)_  
512 |  Number of object class definitions that have been processed by the system. (added in PxPlus v8.01, build 9181)  
513 |  Number of times an object class definition was loaded from object cache. _(added in PxPlus v8.01, build 9181)_  
  
##  Format 2

**_Return Activation Information_**

**TCB(**_pkg_index_ , _info_reqd_[,**ERR=**_stmtref_]**)**

When **TCB( )** is used with **_two codes_** (_pkg_index_ , _info_reqd_), it reports PxPlus licensing information in numeric form (owner code, package ID, and date):

_pkg_index_ |  Can be any number from 0 to the number of packages installed. Maximum is 20.  
---|---  
_info_reqd_ |  Can be one of the following values: |  0 |  Package ID. 0 (zero) indicates the base PxPlus activation.  
---|---  
1 |  Expiry date in numeric form YYYYMMDD. 0 means no expiry date.  
2 |  Package activation flags (32-bit flags as a numeric).  
  
To simplify locating a package's information, you can specify the actual package ID instead of the index.

**_Example:_**

> To get the expiry date for package 7587, you could issue: TCB(7587, 1).

To validate if an activation is present, you can issue **TCB(**_packageid_ , 0**)** , which will return the index for the package if it is present in the system or -1 if not.

This option is available for any package whose package number is >20.

_(The ability to pass package numbers to the TCB function was added in PxPlus v6.30.)_

**_Example_**** _:_**

> for ID=0 to 100  
>  PACKAGE=tcb(ID,0,err=*break)  
>  EXPIRY=tcb(ID,1)  
>  FLAGS=tcb(ID,2)  
>  print "PACKAGE#: ",tbl(PACKAGE=0,str(PACKAGE),"PXPLUS"),  
>  print @(20),"EXPIRES: ",tbl(EXPIRY=0,str(EXPIRY),"<NEVER>"),  
>  print @(40),"ACT FLAGS: ","$"+hta(bin(FLAGS,4))+"$"  
>  next ID

##  Format 3

**_Return Platform Information_**

**TCB(**_keyword_[,**ERR=**_stmtref_ ] **)**

The following keywords (case insensitive) return information about the platform that PxPlus is compiled for or on, along with activation information:

**Keyword** |  **Return Values**  
---|---  
"compiled_bits" |  Either 32 or 64.  
"compiled_cpu" |  Type of processor (x86/PowerPC, etc.).  
"compiled_architecture" |  CISC/RISC/EPIC (nature of the CPU).  
"compiled_os" |  Operating system name.  
"compiled_osver" |  Operating system version.  
"registered_name" |  Name of the user given when the software was registered/activated. (added in PxPlus v8.01, build 9181)  
"OpenSSL_Version" |  OpenSSL version being used by PxPlus. See **[SSL/TLS Security Certificates](../ssl_tls_certificates.md)**. _(added in PxPlus 2020)_  
  
##  Format 4

**_Return User Information (UNIX/Linux Only)_**

**TCB(**_keyword, user_[,**ERR=**_stmtref_ ] **)**

The following keywords (case insensitive) return information about the specific User ID based on the OS registration tables **_(UNIX/Linux Option Only)_** :

**Keyword** |  **Return Values**  
---|---  
"OS_getusergid" |  Returns the UNIX GID for the specified user. **_Example:_** tcb("OS_getusergid", "fred")  
"OS_getuseruid" |  Returns the UNIX UID number for the specified user. **_Example:_** tcb("OS_getuseruid", "fred")  
"OS_getusername" |  Returns the UNIX user name for the specified user.  
"OS_getuserhome" |  Returns the UNIX home directory for the specified user.  
"OS_getusershell" |  Returns the UNIX shell program for the specified user.
