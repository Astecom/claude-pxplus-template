# Directives   
  
**OPEN** |  **_Open a File for Processing_**  
---|---  
  
##  Formats

1. |  [_Open File/Device Channel_](open.htm#Mark8) _:_ |  **OPEN [ CREATE ] [ END ]** (_chan_[_,fileopt_])**[ TABLE ]**_string$_ **[ FOR**  _dependency_ **]**  
---|---|---  
2. |  [_Open for Read-Only Mode_](open.htm#Mark11) _:_ |  **OPEN INPUT** (_chan_[_,fileopt_])**[ TABLE ]**_string$_ **[ FOR**  _dependency_ **]**  
3. |  [_Open Locked_](open.htm#Mark13) _:_ |  **OPEN [ CREATE ] [ END ] LOCK** (_chan_[_,fileopt_])**[ TABLE ]**_string$_ **[ FOR**  _dependency_ **]**  
4. |  [_Open Locked and Pre-Cleared_](open.htm#Mark16) _:_ |  **OPEN [ CREATE ] PURGE** (_chan_[_,fileopt_])**[ TABLE ]**_string$_ **[ FOR**  _dependency_ **]**  
5. |  [_Open Static Keyed File Read Only_](open.htm#Mark18) _:_ |  **OPEN LOAD** (_chan_[_,fileopt_])**[ TABLE ]**_string$_ **[ FOR**  _dependency_ **]**  
6. |  [_Open File for Use in Object (OOP)_](open.htm#Mark20)_:_ |  **OPEN OBJECT** (_chan_[_,fileopt_])**[ TABLE ]**_string$_ **[ FOR**  _dependency_ **]**  
7. |  _Open Dictionary_ _:_ |  **OPEN DICTIONARY [ DIRECTORY ]**_string$_ **[ FOR**  _dependency_ **]**  
8. |  _Compatibility Mode Open_ _:_ |  **OPEN+**(_chan_[_,fileopt_])**[ TABLE ]**_string$_ **[ FOR**  _dependency_ **]**  
9. |  _[Open Read/Write Pipe to Executable](open.htm#Mark24):_ |  **OPEN** (_chan_) "**|** "+_exe_path_ _$_  
10. |  _[Open Read Pipe to Executable](open.htm#Mark24):_ |  **OPEN** (_chan_) "**<** "+_exe_path_ _$_  
11. |  _[Open Write Pipe to Executable](open.htm#Mark24):_ |  **OPEN** (_chan_) "**>** "+_exe_path_ _$_  
  
**_Where:_**

_chan_ |  Can be a numeric expression indicating the open channel number to use or a string expression containing the pathname or table name (if string is prefixed by the keyword **TABLE**) of the file to use.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **BSY** =_stmtref_ |  Traps Error #0: Record/file busy  
---|---  
**BSZ=**_num_ __ |  Block size  
**ERR=**_stmtref_ __ |  Error transfer  
**IOL=**_iolref_ |  Default IOList  
**ISZ=**_num_ |  Open file in binary mode. When using the **ISZ=** option, the following **_limits_** apply to EFF files: **ISZ=1** indicates greater than 2GB access  
**ISZ >1** is limited to 2GB  
**KEY=**_pswd_ _$_ |  Password to open file (See [**PASSWORD**](password.md) directive)  
**NBF=**_num_ |  Dedicated number of buffers  
**OPT=**_char$_ |  File open option string  
**REC=**_name$_ |  Record prefix where the **_name_** of the variable (rather than its contents) defines the prefix (**REC=VIS _(_**_name$)_ can also be used where the **_contents_** of the _name$_ variable defines the prefix) An **[Example](open.htm#Mark10)** that uses the **REC=** option is provided below. For information on using the **REC=** option, see **[Prefixing Variables in an IOList via REC=](../PxPlus%20User%20Guide/File%20Handling/Processing%20Data%20Files/Input%20and%20Output%20Parameters.htm#Mark1)**.  
**TIM=**_num_ |  Number of seconds to try and open the file for  
_stmtref_ |  Program line number or statement label to which to transfer control  
_string$_ |  Name of the file, table or device to open. The string expression can include a specialty filename or file tag (e.g. ***MEMORY*** , **[RPC]** , etc.).  
**CREATE** |  If **OPEN** directive includes the **CREATE** keyword: If the file specified does not exist, it will be created as a SERIAL file and then opened.  
**END** |  If **OPEN** directive includes the **END** keyword: The file will be opened for output at the end of the file as opposed to the start of the file.  
**TABLE** |  See **[TABLE Option](open.htm#Table)**.  
_dependency_ |  Other object, window, file, control or such on which this object is dependent. If this other item is deleted from the system, the object will also be deleted. See **[Dependencies](open.htm#Mark23)**.  
_exe_path_ _$_ |  External executable to send data to and/or read data from via standard input (**stdin**) and standard output (**stdout**).  
  
_(The TABLE option was added in PxPlus v6.30.)  
(The CREATE option was added in PxPlus v6.30. Support for the CREATE option for WindX was added in PxPlus 2018.)  
(The FOR dependency option was added in PxPlus 2020.)_

##  Description

Use this directive to open a file or device and assign a logical file number to it.

#### **Note:**  
WindX in PxPlus supports the use of this directive via the [WDX] or [LCL] tags; e.g. OPEN "[WDX]somefile.ext". Non-PxPlus versions require you to encapsulate the command in an EXECUTE directive with a [WDX] tag (i.e. EXECUTE "[WDX]..."). See [**[WDX] Direct Action to Client Machine**](../command_tags/wdx.htm) or **[[LCL] Access to Users Local Machine](../command_tags/lcl.htm)**.

**_Error Messages on OPEN_**

If you use a channel that is already **OPEN** , the system returns an Error #14: Invalid I/O request for file state. If you try to **OPEN** a file that does not exist, it returns an Error #12: File does not exist (or already exists). In some circumstances (e.g. in trying to **OPEN** a printer twice), an Error #0: Record/file busy is generated.

**_Example:_**

> keyed "TEST",[1:1:6],,128  
>  open (5)"TEST"  
>  open (5)"TEST" ! Not okay: channel 5 is already in use  
>  Error #14: Invalid I/O request for file state  
>  open (4)"TEST" ! Okay - "TEST" file can be OPEN on two channels  
>  open (30)PRINTER$  
>  open (10)PRINTER$ ! Not okay: Error #0: Record/file busy

**_About File OPEN Options_**

Use the **OPT=** parameter to define options for a variety of file types. For example, on ODBC/database files, the option string can provide record layout declarations, database connection options, etc. For * **MEMORY** * files, it can contain the key definitions, and on Windows COM ports, you can specify communications port settings (e.g. OPT="9600,n,8,1,x" where the values represent baud rate, parity, data bits, stop bits and xon/xoff flow control). See [**COM Ports and Serial Devices**](../appendix/com_ports_and_serial_devices.md).

The **OPT="ZIP"** file option can be used with the **OPEN CREATE** directive to specify to PxPlus to create a ZIP file.

See the specific file type definitions in the [**Special Command Tags**](../command_tags.md) section for details on the various **OPT=** values supported by PxPlus.

Use the **IOL=** option to define a standard IOList to be used while the file is open. The system will use this IOList for all subsequent file **READ** , **WRITE** , **EXTRACT** or **FIND** statements where you do not explicitly supply variable lists. You can also use the **REC=** option to supply a prefix to be added to all the variables in the **IOL=** specification.

If the **ISZ=** option is used, the system opens the file in binary mode; that is, there is no attempt to analyze the file structure or contents. All subsequent access to the file/channel is done as if the file is an indexed file with a record size equal to the value set in the **ISZ=** option.

With **ISZ=1** , a **READ RECORD** directive will return 1 byte at a time (each logical record is 1 byte). For **ISZ=1024** , the data is returned 1024 bytes at a time, with the first 1024 bytes in IND=0, the next 1024 bytes in IND=1 and so on. You can gain access to the file sequentially or by using the index. For compatibility reasons, you can also use **ISZ=-1** , which works the same as setting **ISZ=1**.

If you use the **BSZ=** option, file access will be buffered in a buffer equal to the size you set for the option.

**_OPEN with_****PREFIX FILE _Definition_**

You can have two fields in a prefix file data record. (A prefix file is a special Keyed file that contains information used when a file is opened.) The first of the two fields is the path/filename of the real file to open. The second is an options field. Any value in this field will be passed as the **OPT=** values when opening the real path/filename. When opening a filename assigned in a **PREFIX FILE** directive, you can include additional **OPT=** values in the **OPEN** directive to have the system append these as additional options for the true file being opened (i.e. the filename in the prefix file record).

**_Example:_**

Given a prefix file record containing:

> Key="GLMAST"   
>  DATA RECORD="[ODB]DSN;TABLE"+sep+"KEY=field1"

If you open(chan)"GLMAST", then internally the system will issue:

> open(chan,opt="KEY=field1")"[ODB]DSN;TABLE"

If you open(chan,opt="REC=somedata")"GLMAST", then internally the system will issue:

> open(chan,opt="KEY=field1;REC=somedata")"[ODB]DSN;TABLE"

**_TABLE Option_**

The keyword **TABLE** before the _string$_ indicates that the value provided is the logical table name for the file as defined in the currently opened data dictionary file. See **OPEN DICTIONARY**.

_(The TABLE option was added in PxPlus v6.30.)_

**_OPEN LOAD Caching_**

A new option included in PxPlus 2019 allows the system to locally cache data files/tables in memory resident keyed tables to improve performance. With this option enabled, the system will automatically convert an OPEN LOAD of a database table or any keyed file (VLR/EFF) to a memory file with the same data, key structure, IOList and embedded data dictionary elements. This reduces the number of SQL requests or disc/network requests for files that will remain static during batch processing.

See **[OPEN LOAD Caching](../PxPlus%20User%20Guide/File%20Handling/Open%20Load%20Caching.md)**.

_(OPEN LOAD Caching was added in PxPlus 2019.)_

##  Dependencies

The OOP interface included in PxPlus allows for the automatic linking of objects to other system components, such as programs, windows, controls, files and other objects. As these other components are closed or deleted, its linked objects will automatically have their usage count decremented. Potentially, the linked objects could also be freed up.

This allows programmers to leave much of the housekeeping logic related to objects up to the system, as opposed to having to worry about coding for it themselves. By linking objects to items such as the current window, the programmer no longer needs to worry about dropping the object when the window is deleted.

To establish this linkage, the file **OPEN** directive includes a **FOR** option where the programmer can specify the component that will be linked to the object.

**Syntax** |  **Causes the Object to be Deleted When**  
---|---  
OPEN(..... **FOR WINDOW**) |  ... the current window is destroyed.  
OPEN(..... **FOR CONTROL** _ctlid_) |  ... the specified control is destroyed.  
OPEN(..... **FOR FILE** _fileno_) |  ... the specified file is closed.  
OPEN(..... **FOR OBJECT [**  _objid_ **]** ) |  ... the current object or object specified is destroyed.  
OPEN(..... **FOR PROGRAM**) |  ... the current program level is exited.  
  
**_Where:_**

_ctlid_ |  Control identifier that will be linked to the object  
---|---  
_fileno_ |  File number that will be linked to the object  
_objid_ |  Object identifier  
  
_(The object dependency capability for the OPEN directive was added in PxPlus 2020.)_

##  See Also

[**CLOSE Close File**](close.md)  
[**OPT( ) Return File Open Options**](../functions/opt.md)  
[**PREFIX Set File Search Rules**](prefix.md)  
[**PASSWORD Apply Password and Encryption**](password.md)  
[**Special Command Tags**](../command_tags.md)  
**[Accessing ZIP Files](../PxPlus%20User%20Guide/File%20Handling/Processing%20Data%20Files/Accessing%20ZIP%20Files.md)**  
**[Accessing Directory Files](../PxPlus%20User%20Guide/File%20Handling/Processing%20Data%20Files/Accessing%20Directory%20Files.md)**

##  Format 1

**_Open File/Device Channel_**

**OPEN [ CREATE ] [ END ]** (_chan_[,_fileopt_]) **[ TABLE ]**  _string$_ **[ FOR**  _dependency_ **]**

The given file or device must be opened before the program can gain access to it. You can normally have a maximum of 127 files open at any time in a session (less under some operating systems). In the extended file access mode **'XF'** , you can open up to 65000 files, subject to operating system limitations.

In Windows, use a **:**_(colon)_ at the end of a filename to open an LPT _n_ port number directly. For example, **LPT1** and **LPT1:** are considered to be the same device.

PxPlus supports the use of the **OPEN CREATE** directive with **OPT="ZIP"** to create ZIP files.

#### **Note:**  
The actual number of files you can open at any one time depends on operating system parameters. Consult your system configuration information for details on how to increase the number of files you can open.

**_Example:_**

> 0010 open (2,err=1000)"CSTMER"

> The following example uses the **REC=** option:

> open (1,rec=ABC$,err=1000)"myfile"  
>  read (1)A$,B$  
>  print ABC.A$,ABC.B$

##  Format 2

**_Open for Read-Only Mode_**

**OPEN INPUT** (_chan_[,_fileopt_]) **[ TABLE ]**  _string$_ **[ FOR**  _dependency_ **]**

If you use the **OPEN INPUT** format, the program cannot update the file (opened as read only).

Use this format to open a disk directory or to access files with read-only permissions. See **[Accessing Directory Files](../PxPlus%20User%20Guide/File%20Handling/Processing%20Data%20Files/Accessing%20Directory%20Files.md)**.

The **OPEN INPUT** directive under UNIX will not lock a text mode device.

##  Format 3

**_Open Locked_**

**OPEN [ CREATE ] [ END ] LOCK** (_chan_[,_fileopt_]) **[ TABLE ]**  _string$_ **[ FOR**  _dependency_ **]**

Using this format, the file is reserved for exclusive use prior to the **OPEN**. However, if another user already has the file **OPEN** , the **LOCK** format of the directive fails, and the program will be returned with an Error #0: Record/file busy.

#### **Note:**  
Under UNIX, /dev/null and /dev/console files are not locked when opened; however, all other files are.

**_WindX Example_**

> 00010 begin  
>  00020 print  
> 00030 !  
>  00040 let in_file$=%wdx$+"D:\DATA\BATCH\R0000188"  
>  00050 let o_file$="D:\JUNK\TEST\TST_OUT"   
>  00060 execute "[WDX]ERASE "+o_file$+",ERR=*NEXT"  
>  00070 execute "[WDX]SERIAL ""D:\JUNK\TEST\TST_OUT"""  
>  00130 let no_file$="Y"  
>  00140 let in_file=hfn;  
>  open (in_file)in_file$  
>  00150 let f$=fin(in_file)  
>  00160 close (in_file)  
>  00165 let pd=pos(dlm=in_file$,-1);  
>  if pd<>0 \  
>  then let inn_file$=in_file$(pd+1) \  
>  else let inn_file$=in_file$  
>  00170 let chars=dec(f$(1,4))  
>  00180 !  
>  00190 let blk_size=1024,done$="N",c=0  
>  00200 if chars<blk_size \  
>  then let blk_size=chars  
>  00210 !  
>  00220 open (in_file,isz=blk_size)in_file$  
>  00230 let o_file=hfn;  
>  open lock (o_file,isz=blk_size)%wdx$+o_file$  
>  00250 let cur_byte=0,st_byte=0,se_byte=0  
>  00260 let r_c=blk_size  
>  00500 ! !500  
>  00510 ! Get Pos of First ISA  
> 00520 !  
>  00530 read record (in_file,end=0700)in_rec$  
>  00540 let l=l+1;  
>  print @(0,5),l  
>  00550 write record (o_file)in_rec$  
>  00555 let by=by+len(in_rec$)  
>  00556 let tst=chars-by;  
>  if tst<blk_size \  
>  then let r_c=tst  
>  00590 goto 0530

#### **Note:**  
WindX supports the use of **SERIAL** and **ERASE** commands via the **[[WDX]](../command_tags/wdx.htm)** tag. It is not necessary to embed these commands in an **EXECUTE** directive.

##  Format 4

**_Open Locked and Pre-Cleared_**

**OPEN [ CREATE ] PURGE** (_chan_[,_fileopt_]) **[ TABLE ]**  _string$_ **[ FOR**  _dependency_ **]**

If you use the **OPEN PURGE** format, the file will be locked and pre-cleared (purged) prior to the completion of the **OPEN** statement.

##  Format 5

**_Open Static Keyed File Read Only_**

**OPEN LOAD** (_chan_[,_fileopt_]) **[ TABLE ]**  _string$_ **[ FOR**  _dependency_ **]**

With the **OPEN LOAD** format, the file is assumed to be a static Keyed file (i.e. no other task on the system will update this file) and is opened for **READ** access only. Whenever a portion of the file's key structure is read into memory, it will be kept in memory until you **CLOSE** the file. This yields extremely fast access to static files by reducing the disk I/O and effectively caches the file in memory.

**_OPEN LOAD Caching_**

A new option included in PxPlus 2019 allows the system to locally cache data files/tables in memory resident keyed tables to improve performance. With this option enabled, the system will automatically convert an OPEN LOAD of a database table or any keyed file (VLR/EFF) to a memory file with the same data, key structure, IOList and embedded data dictionary elements. This reduces the number of SQL requests or disc/network requests for files that will remain static during batch processing.

For example, a Sales report might want to access the Salesperson Name, Department and Vendor information when producing a listing. These files would likely not change during the report execution; therefore, they could be loaded in a quick access memory table. By caching the file contents in the memory file, the processing time for the report will improve, particularly in cases where the same file/table is being accessed repeatedly.

Since a file opened using an OPEN LOAD is read only, existing logic would remain intact with no application changes required.

See **[OPEN LOAD Caching](../PxPlus%20User%20Guide/File%20Handling/Open%20Load%20Caching.md)**.

_(OPEN LOAD Caching was added in PxPlus 2019.)_

##  Format 6

**_Open File for Use in Object (OOP)_**

**OPEN OBJECT** (_chan_[,_fileopt_]) **[ TABLE ]**  _string$_ **[ FOR**  _dependency_ **]**

In **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)**, the **OPEN OBJECT** directive indicates that a file being opened is for the exclusive use of an object. Only the object itself can alter the state of the file, and once the object is deleted, the file is automatically closed. Any external attempt to alter the state of the file returns an Error #13: File access mode invalid.

The file is not closed on an external **BEGIN**. It will only be closed when the object is deleted or by an explicit **CLOSE (**_chan_**)** from within the object. **FFN** and other file functions will not see the file while outside of the object and thus cannot affect its position or other characteristics; however, system variables like **HFN** and **CHN** will reflect that the file is open, and some functions (**PTH** , **FIN** , **FIB** , etc.) can be used to query file attributes.

**_Example:_**

> def class "Customer"  
>  property CUST_NO$,NAME$,ADDR$,CITY$,SALESMAN$,AMT_OWING  
>  local FILE_NO  
>  !  
>  function FIND(X$)  
>  enter C$  
>  read (FILE_NO,key=C$) ! Loads all the variables  
>  return 1  
>  !  
>  function NEXT()  
>  read (FILE_NO,end=*next);  
>  return 1  
>  return 0  
>  !  
>  function UPDATE()  
>  write (FILE_NO);  
>  return 1  
>  end def  
>  !  
>  ON_CREATE:  
>  FILE_NO=hfn  
>  open object (FILE_NO,iol=*)"ARCUST"  
>  return

> The file is opened in the ON_CREATE. There is no need to worry about closing the file since the system does it automatically.

## See Also

[**DEF CLASS Define Object Class**](def_class.md)  
[**PROPERTY Declare Object Properties**](property.md)  
[**FUNCTION Declare Object Method**](function.md)  
[**LIKE Inherit Properties**](like.md)  
[**PROGRAM Create/Assign Program File**](program.md)  
[**RENAME CLASS Change Name of Class**](rename_class.md)  
[**STATIC Add Local Properties at Runtime**](static.md)  
[**DROP OBJECT Delete Object**](drop_object.md)  
[**NEW( ) Create New Object**](../functions/new.md)  
[**REF( ) Control Reference Count**](../functions/ref.md)

##  Format 7

**_Open Dictionary_**

**OPEN DICTIONARY [ [DIRECTORY]**_string$_ **]** **[ FOR**  _dependency_**]**

If desired, files can be referenced by their logical table as opposed to their physical file pathname. Before referencing files by their table name, you must define where the data dictionary is in the system by using the **OPEN DICTIONARY** directive.

**_Example:_**

> open dictionary ! Open dictionary in current directory  
>  open (1) table "Customer"  
>  print pth(1)  
>  C:\Pvxsrc\cstfile

The value in _string$_ should be either the pathname of the _providex.ddf_ file or the pathname of the directory in which the _providex.ddf_ file exists. If no _string$_ is provided, the current directory is assumed to contain the dictionary file.

The [**PTH(*DICTIONARY)**](../functions/pth.md) function can be used to determine the current dictionary being used.

_(The TABLE option was added in PxPlus v6.30.)_

##  Format 8

**OPEN+_Compatibility Mode Open_**

**OPEN+** (_chan_[,_fileopt_]) **[ TABLE ]**  _string$_ **[ FOR**  _dependency_ **]**

The compatibility mode **OPEN+** directive is designed to simplify the conversion of applications from BBx. It provides the following functionality:

  * Opens files that do not have recognized file headers in Binary mode (same as ISZ=-1) as opposed to considering them as Serial text mode files.
  * Processes field separators in the same manner as BBx; that is, $00$, $0D, $0A$, and $1C$ through $1F$ are all considered field separators.
  * Changes the logic for a **[READ](read.md)** directive when dealing with a Binary file to scan up to the next delimiter, regardless of the length.
  * Processes the following **OPT=** string values:

|  **O_RDONLY** |  Opens the file as **INPUT** only (same as **OPEN INPUT**).  
---|---|---  
|  **O_EXCL** |  Opens the file for exclusive access (same as **OPEN LOCK**).  
|  **O_APPEND** |  Opens the file but sets the logical position for serial files at EOF so that subsequent data will be appended to the file.  
|  **O_TRUNC** |  Opens the file and pre-clears all existing data from it (same as **OPEN PURGE** followed by **UNLOCK** once cleared).  
|  **O_CREATE** |  Opens the file if it exists; else creates a text file (Serial/Binary file).  
  
The conversion utility ***conv.bbx/cv_gui** (as of PxPlus build 9163) allows for the automatic translation of all **OPEN** directives to **OPEN+**.

_(The OPEN+ capability was added in PxPlus v7.00, build 9163.)_

##  Formats 9, 10 and 11

**_Open Read and/or Write Pipes to Executable_**

**OPEN** (_chan_) "**|** "+_exe_path_ _$_  
**OPEN** (_chan_) "**<** "+_exe_path_ _$_  
**OPEN** (_chan_) "**>** "+_exe_path_ _$_

**_Where:_**

**|** |  Both **stdin** and **stdout**  
---|---  
**< ** |  Only **stdin**  
**> ** |  Only **stdout**  
  
You can interact with an external executable (_exe_path_ _$_) by using **|** (_pipes_), which allow you to send data to the executable via standard input (**stdin**) and read data from the executable via standard output (**stdout**).

**_Example:_**

> open (hfn)"|sqlite3.exe"  
>  write record (lfo)selectcmd$  
>  read record (lfo)response$  
>  write record (lfo)".exit"  
>  close (lfo)

BBx is a registered trademark of BASIS International Ltd.
