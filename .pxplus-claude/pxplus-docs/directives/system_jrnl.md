# Directives 

**SYSTEM_JRNL** |  **_File System Journalization_**  
---|---  
  
##  Formats

1. |  _Open System Journal_ _:_ |  **SYSTEM_JRNL OPEN** _journal$_  
---|---|---  
2. |  _Close System Journal_ _:_ |  **SYSTEM_JRNL CLOSE**  
3. |  _Enable Journalization_ _:_ |  **SYSTEM_JRNL ENABLE** _filename$_  
4. |  _Disable Journalization_ _:_ |  **SYSTEM_JRNL DISABLE** _filename$_  
5. |  _Add Entry to File_ _:_ |  **SYSTEM_JRNL WRITE** _var_ _$_  
6. |  _EFF Begin Transaction_ _:_ |  **SYSTEM_JRNL BEGIN**  
7. |  _Database Auto-Commit Control_ _:_ |  **SYSTEM_JRNL AUTO**{**ON** | **OFF**}  
8. |  _Database Commit Transaction_ _:_ |  **SYSTEM_JRNL SAVE**  
9. |  _Dynamic Auto-Commit_ _:_ |  **SYSTEM_JRNL BEGIN AUTO**  
10. |  _Database Roll Back Transaction_ _:_ |  **SYSTEM_JRNL RESTORE**  
11. |  _Dirty File Indicator:___|  **SYSTEM_JRNL DIRECTORY** _directory_ _$_  
12. |  _Swap Journal Files:_ |  **SYSTEM_JRNL SWAP**  
  
**_Where:_**

_directory$_ |  Name of common directory where tracking files are to be created.  
---|---  
_filename$_ |  Data file identified for journalization.  
_journal$_ |  Name of the serial file being used as the journal. String expression. First create the journal as an empty serial file via **SERIAL** _journal$._  
_var_ _$_ |  String containing data to be added to open journal.  
  
##  Description

Use **SYSTEM_JRNL** to have PxPlus log all updates to specified data files.

#### **Note:**  
When journalization is enabled, you can set up and maintain a Data Mirroring system using the **[Data Mirroring Configuration](../Data%20Mirroring/Data%20Mirroring%20Configuration.md)** interface. See **[Data Mirroring](../Data%20Mirroring/Introduction.md)**.  
  
_(The Data Mirroring Configuration interface was added in PxPlus 2017.)_

## Journal Sequencing

Journal files are limited to a size of 2GB. It is important to make sure that a journal file is closed and a new journal is started before exceeding this limit.

To avoid this problem, PxPlus provides for the automatic rollover to new journal files whenever a journal file exceeds 2,000,000,000 bytes in size. This option is enabled by specifying a directory name as the _journal$_ field when opening a system journal. If a directory is specified, the system will automatically create subordinate files within the directory called _journal.1, journal.2, ..._

As each file fills up, the system will automatically create and start logging to the next highest file.

_(Automatic journal sequencing was added in PxPlus v9.00.)_

##  Format 1

**_Open System Journal_**

**SYSTEM_JRNL OPEN** _journal$_

The **SYSTEM_JRNL OPEN**  _journal$_ format opens the journal (serial file).

**_Example:_**

> serial "MYJRNL"  
> system_jrnl open "MYJRNL"

The _journal$_ pathname specified in the **OPEN** can be suffixed with the string **;LOCK** , which opens the journal but does **_not_** allow the user to close the journal file or to disable journalization either system wide or on specific files.

_(Support for the ;LOCK functionality was added in PxPlus 2017.)_

#### **Note:**  
The directory indicating where the journal file resides **_must_** exist.

**_Journal Contents_**

The physical journal file is a binary file that has a special format designed for quick write access and efficient retrieval. Each of the journal file's records has a 20-byte header consisting of:

**Bytes** |  **Description**  
---|---  
1 |  Type of record:

#### **Note:**  
Types _w_ , _d_ and _+_ are **_PxPlus only_**.

|  **Type** |  **Description** |  **Data** |  **Back Pointer Points To** |  **PxPlus Additional Data**  
---|---|---|---|---  
"O" |  Jrnl Open |  Userid +";" + PTH(0) + ";" + FID(0) |  |   
"C" |  Jrnl Close |  |  |   
"o" |  File Open |  Pathname |  Jrnl Open |  External Keysz  
"c" |  File Close |  |  File Open |   
"B" |  Before Image |  Before contents of record |  File Open |  External Keysz  
"A" |  After Image |  Updated/After image of record |  File Open |  External Keysz  
"D" |  Delete Record  |  Image of record deleted |  File Open |  External Keysz  
"E" |  Erase File |  Pathname of file |  Jrnl Open |   
"R" |  Rename File |  Old name of file +$00$ + New name |  Jrnl Open |   
"P" |  Purge File |  |  File Open |   
"U" |  User Record |  Output from a SYSTEM_JRNL WRITE directive |  Jrnl Open |   
"w" |  Dictionary Write |  Dictionary record |  File Open |  Index  
"d" |  Dictionary Remove |  |  File Open |  Index  
"+" |  File Create |  FILE CREATE directive |  Jrnl Open |   
2-4 |  Record size in bytes  
5-8 |  Time of day when record was written in seconds past 01/01/1970 GMT  
9-12 |  Address of prior record for session  
13-16 |  Address of related record  
  
** _Example:_**  
  
After/Before Image points to file Open record. Open file record points to User login record.  
17-20 |  4-byte binary value that contains:  
  
For Keyed files: the size of any external key  
  
For Indexed files: the record address being updated  
  
The rest of the record is the before/after image of the data. The file itself has a 4-byte header with the address of the last record on the file.

#### **Note:**  
Prior to PxPlus 2014, the journal header was only 16 bytes long. PxPlus 2014 added bytes 17 - 20 with additional information required to help rebuild the output file.

##  Format 2

**_Close System Journal_**

**SYSTEM_JRNL CLOSE**

This format closes the open system journal.

##  Format 3

**_Enable_**** _Journalization_**

**SYSTEM_JRNL ENABLE** _filename$_

Use this format to enable journalization for the specified data file (Keyed or Indexed files only). Enabling journalization sets a bit in the file header for the specified file.

Specifying a file name of ***** (_asterisk_) initiates the journalization of all keyed/indexed file updates.

#### **Note:**  
If you have enabled journalization for a data file, you cannot access that file unless the journal file is open.

##  Format 4

**_Disable_**** _Journalization_**

**SYSTEM_JRNL DISABLE** _filename$_

Use this format to disable journalization for the specified data file.

##  Format 5

**_Add Entry to File_**

**SYSTEM_JRNL WRITE** _var_ _$_

This format adds the contents of _var_ _$_ to the currently open journal (serial file).

##  Format 6

**_EFF Begin Transaction_**

**SYSTEM_JRNL BEGIN**

This directive is used to mark the start of a transaction. All updates to file systems (EFF, ODB, DB2, Oracle, and MYSQL) will be deferred until the transaction completes and it is committed using the **SYSTEM_JRNL SAVE** directive.

#### **Note:**  
**SYSTEM_JRNL BEGIN** turns off Auto-commit.

##  Format 7

**_ODBC/OCI Auto-Commit Control_**

**SYSTEM_JRNL AUTO**{**ON** | **OFF**}

This format is used to control Auto-commit mode of an EFF, ODBC, DB2, Oracle or MySql database connection. Auto-commit means that all updates to the database are made immediately and cannot be rolled back in case of an error.

**SYSTEM_JRNL AUTO OFF** will disable the Auto-commit mode of operation. All updates to the database are deferred until the application successfully ends or a **SYSTEM_JRNL SAVE** directive is issued. **SYSTEM_JRNL AUTO ON** re-enables Auto-commit mode.

#### **Note:**  
**SYSTEM_JRNL BEGIN** turns off Auto-commit.

##  Format 8

**_ODBC/OCI/EFF Commit Transaction_**

**SYSTEM_JRNL SAVE**

This format will commit all pending/deferred updates to a database transaction if Auto-commit mode is disabled. An Error #15 is reported if a database error occurs.

#### **Note:**  
**SYSTEM_JRNL BEGIN** turns off Auto-commit.

## Format 9

**_Dynamic Transaction Auto-Commit_**

**SYSTEM_JRNL BEGIN** **AUTO**

PxPlus provides enhanced Auto-commit logic that automatically uses transaction processing logic to defer all updates to a database until the application enters an idle state, such as waiting for input or issuance of a WAIT directive. This Dynamic Auto-commit improves both system performance and the reliability of updates since all changes to the database occur at the same time. This helps assure synchronization of all updates between files and/or databases.

#### **Note:**  
Due to the nature of the commitment process on different databases servers, the system cannot assure that updates done on different databases occur in unison. It is possible, although unlikely, that during a commit cycle, updates may be committed to one database and an error may occur during the commit to another database, thereby rendering a potential inconsistency between the databases.

To disable the Dynamic Auto-commit, re-enable Auto-commit by issuing **SYSTEM_JRNL AUTO ON**.

##  Format 10

**_ODBC/OCI/EFF Roll Back Transaction_**

**SYSTEM_JRNL RESTORE**

This format will roll back and discard all pending/deferred updates within database transaction if Auto-commit mode is disabled. An Error #15 is reported if a database error occurs.

#### **Note:**  
**SYSTEM_JRNL BEGIN** turns off Auto-commit.

## Format 11

**_Dirty File Indicator_**

**SYSTEM_JRNL DIRECTORY**  _directory_ _$_

This format is used to track potential file corruption (dirty files) by maintaining a list of all the files that have been opened and modified during a PxPlus session. PxPlus creates a single tracking file per active process in _directory$_.

When a session terminates normally, it deletes its tracking file; therefore, the existence of a tracking file means there is either a PxPlus task currently active, or that a PxPlus task has terminated abnormally (due to software fault or operating system failure).

Specifying a null directory name will disable this feature. If the directory name specified does not already exist, an Error #12: File does not exist (or already exists) will be generated. An Error #13: File access mode invalid is reported if a file of the same name exists but not as a directory.

**_Tracking Files_**

Each tracking file (log) is created with a unique name using the following format:

__ |  _username_.MMDDHHMMSS.log |  **_Windows_**  
---|---|---  
__ |  _username_.MMDD.PPPPP.NNN.log |  **_UNIX/Linux_**  
  
**_Where:_**

_username_ |  Name for the session. In the case of client/server applications, the workstation name (if present) or IP address will be used; otherwise, the user name for the host process will be used. No attempt is made to determine the true workstation end-user name -- only the workstation name, as returned from the socket's 'GetPeerName' function, will be used.  
---|---  
_MMDDHHMMSS_ |  Date and time that the log started.  
_MMDD.PPPPP.NNN_ |  Date and process ID of the task that created the log file. 'NNN' is a sequence number in case the process id is duplicated during the day.

#### **Note:**  
The length of the PID and sequence number will be based on their value; it is not a fixed length.  
  
The tracking file contains a list of all the data files that have been physically updated and not yet closed by the PxPlus process. Every time a file has an update issued against it, the system will add the pathname to the tracking file. Each line will be separated by a standard (OS dependent) end-of-line sequence.

Multiple occurrences of the same file may exist in the tracking file, as entries are maintained based on open channels.

The tracking file is updated to indicate when a file is being updated prior to the execution of the **WRITE** or **REMOVE** directives. When a file that was logged is closed, its entry from the log file will be removed. To help ensure that the contents of the tracking file are accurate, PxPlus will close the file after each write.

#### **Note:**  
Only Keyed files (EFF, VLR and FLR) and Indexed files are tracked.

## Format 12

**_Swap Journal Files_**

**SYSTEM_JRNL SWAP**

This directive can be used in conjunction with the auto-sequencing of log files, which was added as of PxPlus v9. When issued, the current journal file is marked full and a new journal file is started.

##  See Also

[**SERIAL Create a Sequential File**](serial.md)  
**[Data Mirroring](../Data%20Mirroring/Introduction.md)**

##  Example

**_Example 1_** \- The following code sample illustrates parsing of a **SYSTEM_JRNL** file:

> 0010 ! DumpJrnl - Sample routine to parse a System_Jrnl file  
> 0020 ! Note: Time is in GMT  
>  0030 open (1,isz=1)"jrnl.dat"  
>  0040 read record (1,ind=0,siz=4,err=0500)filesize$  
>  0050 let filesize=dec($00$+filesize$)  
>  0060 print "Size of Journal file is: ",filesize  
>  0070 let nextindex=4  
>  0080 !  
> 0100 ! !^100  
>  0110 if nextindex=0 or nextindex>filesize \  
>  then goto 0500  
>  0120 read record (1,ind=nextindex,siz=20,err=0500)header$  
>  0130 let type$=header$(1,1)  
>  0140 let recsize=dec($00$+header$(2,3))  
>  0150 let time=dec($00$+header$(5,4))  
>  0160 let priorrec=dec($00$+header$(9,4))  
>  0170 let relatedrec=dec($00$+header$(13,4))  
>  0180 let datarec$="";  
>  if recsize \  
>  then read record (1,ind=nextindex+20,siz=recsize-16,err=0500)datarec$  
>  0190 let nextindex+=recsize  
>  0200 !  
> 0300 ! !^100 - Format & display  
>  0310 let disprec$=sub(sub(datarec$,sep,"~"),esc,"~")  
>  0320 let days=int(time/86400);  
>  if (days*86400)>time \  
>  then days--  
>  0330 let time=time-days*86400  
>  0340 let sv_by=prm('BY');set_param 'BY'=1970  
>  0350 let t$=dte(days,time/3600:"%Ms%Dz/%Ys-%hz:%mz:%sz%p")  
>  0360 set_param 'BY'=sv_by  
>  0370 !  
>  0380 print t$," Type: ",type$," Prior Rec:",priorrec:"####,##0"," RelatedRec:",relatedrec:"####,##0"," RecSize",recsize:"###,##0"," Record:",disprec$  
>  0390 goto 0100  
>  0400 !  
> 0500 ! ^100

**_Example 2_** \- The following illustrates the use of **SYSTEM_JRNL** for tracking potential file corruption (dirty file indicator):

> Dir$="/SysJrnl.Dir/";  
>  directory Dir$,err=*next  
>  WorkFile$="WorkFile.Dat";  
>  keyed WorkFile$,10,0,-256,err=*next  
>  !  
>  ! Generate a log file  
>  system_jrnl directory Dir$  
>  open (unt)WorkFile$;  
>  WorkFile=lfo  
>  write (WorkFile,key="Test")"Test","Record"  
>  ! List$=""  
>  select Log$ from Dir$ where pos(".log"=Log$)  
>  select File$ from Dir$+Log$  
>  if pos(File$+sep=List$) \  
>  then continue \  
>  else List$+=File$+sep  
>  print "Checking: ",File$," ",  
>  call "*ufac",err=*next,File$,1;  
>  print "Okay";  
>  continue  
>  print File$,":",msg(err)  
>  next record  
>  next record  
>  !  
>  close (WorkFile)

#### **Note:**  
As of PxPlus 2016, the *UFAC file check utility no longer supports split files, multi-segmented files and files greater than 2GB, as rebuilding the entire file is a more efficient process.
