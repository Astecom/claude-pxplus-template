# Language Reference - Appendix 

**Error Codes and Messages** |   
---|---  
  
Whenever PxPlus encounters an error, it sets the [**ERR**](../variables/err.md) system variable to an error code (an integer). The associated error message indicates the type of error.

**ERR** values greater than 255 indicate operating system errors. In these cases, PxPlus returns the value of the operating system's error code (integer) plus 256.

Use the [**MSG( )**](../functions/msg.md) function to obtain the error message that is associated with the number:

> ?msg(4)  
>  Error #4: Device not ready

A numerically arranged list of all the current error codes and their meanings is provided below.

##  Error #0

**Record/file busy**  
  
**_Possible Reasons_**** _:_**  
  
Cannot open a file that is locked by another user.  
Cannot **READ** , **FIND** , **EXTRACT** or **INPUT** if a record is being extracted by another user.  
Time**-** out occurred on a device.  
Permission denied.  
  
The BSY=stmtref option allows you to trap Error #0: Record/file busy. 

##  Error #1

**Logical END-OF-RECORD reached**  
  
Combined length of data elements cannot exceed preset maximum record length (as defined for your given file). 

##  Error #2

**END-OF-FILE on read or File full on****write**  
  
**_Possible Reasons:_**   
  
On a READ: The end of the file has been reached. **_or_**  
On a WRITE: The file is full or has reached a preset maximum record count.  
[TCP] disconnection.  
  
When PxPlus is processing a **[CLOSE](../directives/close.md)** directive and Error #2 is reported because of a full disk, the error is only reported once. Then PxPlus internally trashes the pending data and closes the channel. 

##  Error #3

**Input/Output error on file**  
  
A physical (hardware) error was returned from a device. If errors are recurring on a disk drive, record and report them to your hardware maintenance supplier. 

##  Error #4

**Device not ready**  
  
A "not ready" status was returned from the device. If the device is a printer, see if it is out of paper or the off**-** line button has been pressed. 

##  Error #5

**Data error on device or file**  
  
Typically reports a hardware malfunction: an error has occurred on a device during a read or write (most often on a read, indicating that the system is unable to read the data correctly). 

##  Error #6

**Directory error**  
  
Unable to re**-** establish a lock on a file.

##  Error #7

**Access out of file boundaries**  
  
On a READ or WRITE: Cannot use a record index that exceeds the maximum number of records allowed for the file. 

##  Error #8

**Data write error**  
  
Typically reports a hardware malfunction: An error has occurred while trying to update a data file. 

##  Error #10

**Illegal pathname specified**  
  
Invalid filename on a **SAVE** , **OPEN** , **LOAD** , **RUN** or **CALL** directive.  
  
**_Possible Reasons:  
_**  
Filename too long, contains invalid characters or has invalid syntax. A null string is an invalid pathname.  
In **[TCP]** : An invalid IP or DNS address. 

##  Error #11

**Record not found or Duplicate key on write**  
  
** _Possible Reasons:  
  
_** Non-existent record specified in **KEY=** or **IND=** option. On a **READ** or **EXTRACT** directive (**KEY=** option only), index position goes to the record with the next higher record key. Use the **DOM=** option to trap and process this error.  
**[TCP]** file I/O includes an **IND=**_value_ or **KEY=**_value_ for a client that is not connected.

##  Error #12

**File does not exist (or already exists****)  
**  
**_Possible Reasons:_**   
  
Cannot create a file (**DIRECT** , **INDEXED** ,**SORT** , etc.) if a file of the same given name already exists.   
Filename does not exist. Cannot **ERASE** , **OPEN** , **LOAD** , **RUN** or **CALL** a non**-** existent file.   
In **[TCP]** : Cannot **OPEN** , server is not listening. 

##  Error #13

**File access mode invalid****  
**  
**_Possible Reasons:_**   
  
Cannot send output to serial file unless first locked.   
Cannot receive input from an output**-** only device (e.g. a printer).   
Cannot send output to an input only device.  
Cannot write given output to file without a **KEY=** option or not before extracting a record.   
Cannot write to a non-externally keyed file using a **KEY=** option.   
Cannot drop the only active window on a terminal.   
OS returned an access mode violation or a permission denied status on an **OPEN INPUT** or **OPEN PURGE** directive for a file.   
Attempt to apply/remove a password when the file is in read-only mode, not locked, or not empty. 

##  Error #14

**Invalid I/O request for file state****  
**  
**_Possible Reasons:_**   
  
Cannot access a file that is not opened.   
Cannot unlock a file that is not locked.   
Cannot open a logical file number (channel) that is already open.   
On a **[CLOSE](../directives/close.md)** directive: Cannot close a channel that is not open, but no message is returned unless you used the **ERR=** option.   
Attempt to apply a password to an unopened channel. 

##  Error #15

**Operating system command failed****  
**  
**_Possible Reasons_**** _:_**  
  
Returned from the operating system. For more details,**PRINT MSG(-1).** One possible reason: exhaustion of .bmp handles.   
In **[TCP]** : Cannot open the socket locally or general TCP failure on file I/O. 

##  Error #16

**File/Disc is full****  
**  
Typically either the disk is full or the user has reached an allotted limit. The file being written to has no additional room for expansion.

##  Error #17

**Invalid file type or contents**  
**_  
Possible Reasons:_**   
  
Cannot use a **KEY=** option when the file does not have a key.  
Cannot have unequal lengths for the two parameters for an **AND( )** , **IOR( )** or **XOR( )** function.  
Cannot **SAVE** , **LIST** or **MERGE** a file that has a key.  
Cannot **WRITE** to a program file.  
Attempt to apply a password to a non-keyed file.   
Attempt to encrypt a non-VLR formatted file.

##  Error #18

**Program not loaded/Invalid program format****  
**  
Cannot **LOAD** , **RUN** or **CALL** a file that is not in the correct program format. 

##  Error #19

**Program size too large****  
**  
Program exceeds the 64k limit.

##  Error #20

**Syntax error****  
**  
The program statement contains a syntax error (usually just a typing error).

##  Error #21

**Statement number is invalid****  
**  
**_Possible Reasons:_**   
  
Cannot use a line number in excess of maximum 65000.   
Cannot edit/append to a non**-** existent line.   
Cannot refer incorrectly to an existing line; e.g. **TBL=**_nnnn_ where _nnnn_ is not a table.   
Program does not have line numbers. 

##  Error #22

**Invalid compound statement  
**  
Directive out of position. The particular directive **_must be the final item_** in a compound statement because it has the potential to transfer control; e.g. **GOTO** , **GOSUB** , etc. 

##  Error #23

**Missing/Invalid variable****  
**  
Mandatory variable is missing from the statement's syntax. 

##  Error #24

**Attempt to duplicate a function name****  
**  
Cannot create function of the same given name as one that already exists. 

##  Error #25

**Invalid call to user function (Non-existent or recursive)**  
**_  
Possible Reasons:_**   
  
Cannot call non**-** existent user**-** defined function (not defined or name misspelled).  
Cannot exceed limit on number of recursive calls to a user defined function. (Maximum of 100 recursive calls, 100 levels deep)

##  Error #26

**Variable type invalid****  
**  
**_Possible Reasons:_**   
  
Cannot use numeric value in string variable.   
Cannot use string value in numeric variable. 

##  Error #27

**Unexpected or incorrect WEND, RETURN or NEXT  
  
** Cannot execute **NEXT** , **WEND** , **RETURN** or **UNTIL** if there is no corresponding entry at the top of the stack (applies to **WHILE** /**WEND** , **GOSUB** /**RETURN** , **FOR** /**NEXT** or **REPEAT** /**UNTIL** stack).

##  Error #28

**No corresponding FOR****for NEXT  
**  
The variable name for the **[NEXT](../directives/next.md)** directive does not match the variable name given for the current **[FOR](../directives/for.md)** directive.

##  Error #29

**Invalid Mnemonic or position specification  
**  
**_Possible Reasons:_**   
  
Unrecognized or invalid mnemonic (undefined or misspelled, etc.) on a **PRINT** or **INPUT** statement (only generated if you have already set the **['EG'](../mnemonics/eg.md)** mnemonic).  
Invalid position in**@( )** function (outside of current window/scroll region boundaries).

##  Error #30

**Statement too complex --****cannot compile  
**  
Expression cannot exceed 249 parentheses. 

##  Error #31

**Memory limits reached -- Increase '-SZ' option  
  
** Cannot exceed pre-set maximum size for user work space (set either using a **-SZ** option or in the **[START](../directives/start.md)** directive). Free some of the workspace (delete unused variables, arrays, etc.) or increase the memory limits.

##  Error #32

**Invalid or redundant****Input/Output option  
**  
Invalid or duplicate option used on the **Input/Output** directive. 

##  Error #33

**Insufficient memory available in system -- try later  
**  
The operating system has denied a request for additional memory. Either the amount of memory being requested exceeds system capacity or the memory is in use.

##  Error #34

**Directive not allowed from COMMAND mode****  
**  
The particular directive cannot be executed from **COMMAND** mode. The **[FOR](../directives/for.md)** directive is one example. 

##  Error #35

**Invalid date/time specified****  
**  
An invalid date or time has been specified on a **[SETDAY](../directives/setday.md)** or **[SETTIME](../directives/settime.md)** directives.

##  Error #36

**ENTER parameters****don't match those of the CALL  
**  
The parameters in an **[ENTER](../directives/enter.md)** directive do not match the parameters in the corresponding **[CALL](../directives/call.md)** directive. The number and type (numeric or string) must be the same in both directives. 

##  Error #37

**Directive can only execute in subprogram****  
**  
Cannot execute an **[ENTER](../directives/enter.md)** or **[EXIT](../directives/exit.md)** directive except in subprogram.

##  Error #38

**Directive cannot be used within****CALLed program  
**  
The particular directive cannot be used in a subprogram. 

##  Error #39

**Invalid record definition****  
**  
This message applies to ODBC data. 

##  Error #40

**Divide check or numeric overflow**  
  
Cannot divide by zero. (To return zero for divide by zero errors, set the **['D0'](../parameters/d0.md)** parameter On.)  
Cannot exceed the machine's limits on the result of an arithmetic operation.

##  Error #41

**Invalid integer encountered (range error or non-integer)**  
  
Either the value specified is not an integer or it exceeds the range allowed for the type of operation being performed.  
  
Cannot use logical file number (channel) outside of permitted range.  
Cannot set **PRECISION** to value outside of range **-** 1 to +18.  
Cannot exceed 32767 elements in an array.  
Cannot use line or column position **@...( )** function outside of pre-set window or screen boundaries.  
Cannot return function value outside of existing range, for instance, a non**-** existent **TSK( )** number. 

##  Error #42

**Subscript out of range/Invalid subscript****  
**  
The value of the subscript is beyond the minimum/maximum settings defined for the array. 

##  Error #43

**Format mask invalid****  
**  
The format mask in a **PRINT** statement or a **STR( )** function is not large enough to contain the numeric value. Use the **['FI'](../parameters/fi.md)** parameter to suppress the message. 

##  Error #44

**Invalid step value****  
**  
Cannot use zero (0) for the **STEP** value in a **[FOR](../directives/for.md)** directive.

##  Error #45

**Referenced statement invalid****  
**  
Incorrect reference to existing statement; e.g. **IOL=**_nnnn_ where _nnnn_ does not contain an IOList or **TBL=**_nnnn_ where _nnnn_ does not contain a **[TABLE](../directives/table.md)** directive.

##  Error #46

**Length of string invalid****  
**  
This error is reported when the length of the string provided is not appropriate for the function of directive being executed.  
  
Format mask is in excess of 8192 bytes.   
Length of the string in the **KEY=** option cannot exceed the key length for the given file.   
Cannot execute the **ASC( )** function on a null string. 

##  Error #47

**Substring reference out of string****  
**  
**_Possible Reasons:_**   
  
Substring does not exist in string variable.  
Substring exceeds the capacity of the variable. 

##  Error #48

**Invalid input -- Try again****  
**  
This error occurs when data input is checked against a validation list. It indicates one of the following:   
  
Value for numeric variable is not in the range specified or has too many decimals.   
Value for a string variable exceeds the maximum length allowed. 

##  Error #49

**< *> Internal program format error <*>**  
  
The compiled statement contains invalid data and cannot be processed or decompiled. This is either because of an internal PxPlus error or because the program code has been modified externally.  
  
**_Possible Reasons:_**   
  
The program on disk has been damaged.   
The program was created using a feature from a newer version of PxPlus that is not supported by the version you are using.  
A new version of PxPlus was installed without the correct LEX tables (/pvx/lib/_lex*.*).

##  Error #50

**Reserved for FUTURE USE**

## Error #51

**Invalid VFU/key load**  
  
The VFU is not loaded because the mnemonic sequence is incorrect or other than numeric data has been inserted between the '**SL'** and **'EL'** printer mnemonics. 

##  Error #52

**Program is password protected**  
  
The current program has been saved with a password.   
  
Cannot change or list the program without using the **[PASSWORD](../directives/password.md)** directive.  
Cannot save a passworded program to a serial file. 

##  Error #53

**Invalid password**  
  
The password entered does not match the password recorded for the program or data file. (PVX Plus Technologies can recover a program if the password is unknown.) 

##  Error #54

**Unable to Load Error Handler**  
  
The system is unable to properly load and execute the specified error handler. This commonly happens when an application attempts to open more files than the O/S permits which triggers an un-trapped error.  
  
When PxPlus attempts to access the error handler program from disk to report the error, it is unable to do so, as this requires a file handle, which is what caused the original un-trapped error. 

##  Error #55

**Cannot locate statement label**  
  
Non**-** existent or misspelled statement label during program execution. (If the label is missing during a **SAVE** operation, the program is saved without a reported error; however, the program may not function properly.) 

##  Error #56

**Duplicate statement label**  
  
This error is only generated by the **SAVE** command. It warns that a statement label has been defined twice. The **SAVE** operation is completed without error; however, the program may not function properly. 

##  Error #57

**No such window defined****  
**  
**_Possible Reasons:_**   
  
Non**-** existent window number: Cannot locate for a **'DROP'** /**'GOTO'**.  
Cannot exceed window number 248 in creating new window. 

##  Error #58

**Line(s) in GOSUB/FOR/WHILE stack**  
  
One of the program lines you are trying to edit is currently in the stack. You must reset or end the program before making the change.

##  Error #59

**Invalid directive in function/object definition**  
  
In a multi-line function: Cannot include a directive, which could reset the stack or return to program Command mode.

##  Error #60

**Invalid control argument value**  
  
An attempt was made to access or set an invalid property or apply an invalid value to a property normally associated with a **GRID** or **CHART**. 

##  Error #61

**Authorization failure****  
**  
**_Possible Reasons:_**   
  
Cannot run an unauthorized program or system function. Contact your dealer to obtain the proper activation keys.   
Password record may have failed the internal CRC check.  
When using WindX, remote access ('WindX authorization') has been denied.

##  Error #62

**Not a development system****  
**  
Cannot create (or change access to) a secured program. Only developers can perform this task. 

##  Error #63

**Not activated for this software package****  
**  
Cannot save a program using a package ID without an activation key. 

##  Error #64

**No valid LEX table loaded****  
**  
The system is unable to locate or read the file containing the LEX (syntax) table (*lextbl.en). 

##  Error #65

**Window element does not exist or already exists**  
  
Cannot reference non**-** existent window or GUI object that has not yet been drawn. 

##  Warning #66

**Program size > 64K -- may not run on all environments**  
  
PxPlus issues this warning when you save a program that is getting close to the 64k limit. 

##  Error #67

**Invalid Try/Catch/Finally structure or transfer**  
  
This error is caused by an erroneous CATCH, FINALLY, or END_TRY directive being encountered in the application.

##  Error #68

**RPC (Remote Process Call) name not found**  
  
Cannot issue a call to a remote system that has not yet been defined. 

##  Error #69

**No****Journalization file open**  
  
File marked to be journalized but no journal file is open. 

##  Error #70

**EDIT command syntax error**  
  
The **[EDIT](../directives/edit.md)** directive was incorrectly entered. No changes will be made to the program. 

##  Error #71

**String not found**  
  
The string given (enclosed in square brackets) has not been found. 

##  Error #72

**Replacement string will not fit**  
  
The length of the string following an **[EDIT 'R'](../directives/edit.md)** directive exceeds the number of characters remaining in the original line. The complete **EDIT** command is rejected.

##  Error #73

**No current string defined**  
  
Cannot reference the current string using [ ] because no current string has been defined. 

##  Error #74

**RENUMBER rejected -- Line numbers too large**  
  
Cannot renumber if the result will generate statements exceeding maximum 65000. Change the **[RENUMBER](../directives/renumber.md)** directive to reduce the highest line number used. 

##  Error #75

**Invalid Hex string**  
  
Cannot use characters other than 0 to 9 or A to F in a Hex string. 

##  Error #76

**LINE_SWITCH failure - Terminal cannot be switched  
**  
The system cannot properly switch file 0 (zero) to the specified file (cannot switch to a file that is not a terminal).

##  Error #77

**Edit generates no line number**  
  
On an **[EDIT](../directives/edit.md)** directive: Resultant string does not contain a valid leading line number. 

##  Error #78

**Invalid MSK specification****  
**  
**_Possible Reasons:_**   
  
The mask specified in the **[MSK( )](../functions/msk.md)** function is invalid.   
Cannot reuse as current mask if no previous mask already available. 

##  Error #79

**Invalid FORMAT specification**  
  
The IOList contains an invalid format specification. 

##  Error #80

**Invalid key definition, number or name****  
**  
**_Possible Reasons:_**   
  
Invalid key definition on a **[KEYED](../directives/keyed.md)** directive.  
Invalid key number referenced.

##  Error #81

**Invalid IOLIST specification**  
  
The IOList contains an invalid specification. 

##  Error #82

**File must be 'LOCKED' before being 'PURGED'**  
  
File must be locked before using a **[PURGE](../directives/purge.md)** directive to erase all data. 

##  Error #83

**Invalid statement number range**  
  
Cannot have invalid range of statement numbers; e.g. an ending statement number less than the starting statement number. 

##  Error #84

**No DICTIONARY exists on****OPENed file**  
  
No embedded data dictionary exists but the file **[INPUT](../directives/input.md)** directive is looking for one. 

##  Error #85

**Program does not support line numbers**  
  
Returned if trying to use line numbers when **['NN'](../parameters/nn.md)** system parameter set to prohibit line numbers.

##  Error #86

**Transmission error to device**  
  
A communications problem is reported between a host and a WindX client (usually when the client does not respond quickly).  
  
In addition, this error will be returned on any READ or INPUT request to a disconnect terminal when the system [**'XC'**](../parameters/xc.md) parameter is enabled.

##  Error #87

**MENUBAR definition invalid**  
  
Syntax error in a menu bar definition.

##  Error #88

**Invalid/unknown property name**  
  
The property or method name of a PxPlus object (OOP object/OCX/COM/VBX control or GUI control) is invalid, or the parameters passed to a method call are incorrect. 

##  Error #89

**File access denied -- I/O operation pending**  
  
Processing an OCX event during the middle of a file I/O operation. For example, if a program is reading from a TCP/IP port and an OCX event occurs, the event processing logic may not access the TCP/IP port since doing so may harm a pending I/O operation.

##  Error #90

**Unable to locate Object class definition**  
  
Attempting to load an object class definition the system did not detect the **[DEF CLASS](../directives/def_class.md)** directive.

##  Error #91

**Class/Object in use**  
  
Attempting to **DROP** a class definition while it is still in use. 

##  Error #92

**Invalid CLASS****definition**  
  
Incorrect object class definition. It is likely that an invalid directive was found between the **[DEF CLASS](../directives/def_class.md)** and **[END DEF](../directives/end_def.md)**.

##  Error #93

**Already defined within class definition**  
  
Two or more **[PRECISION](../directives/precision.md)** or **[PROGRAM](../directives/program.md)** declarations in one class definition. 

##  Error #94

**Loop in Class inheritance found**  
  
Object class being defined is attempting to inherit a class definition that inherits the object class being defined. 

##  Error #95

**Bad Object Identifier**  
  
Specified object handle is not valid or the object has been deleted. 

##  Error #97

**Version conflict - function not supported**  
  
Attempting to use a feature of the language that has been disabled due to use of an activation key for an earlier version of the software.  
  
The key you are using only provides access to the functionality that existed at the time the key was issued. You must purchase a newer version of the software.

##  Error #98

**Feature not yet implemented**  
  
Cannot use the particular function or directive because it is not implemented in this release of PxPlus. 

##  Error #99

**Feature not supported**  
  
Cannot use the particular function or directive because it is not implemented or available on this hardware platform. 

##  Error #100

**No driver for terminal type or library missing**  
  
During initialization: PxPlus could not locate the device driver module for the type of terminal you are using (as defined in the TERM environment variable).  
  
This error may also result because the system cannot find the PxPlus library.

## Error #101 to Error #102

**_No message_**  
  
Reserved for future use.

#### **Note****:**  
Errors **105** to __**118** signal a logical error in the format of the Keyed file being referenced.  
  
Try to recover the file, if possible, either by restoring it from a backup or by running the PxPlus Keyed/Direct file key reconstruction utility (*UFAR).

##  Error #105

**Keyed file error (Short key block****)**  
  
Reported whenever a key/data block is read from the file and the OS reports that the data read is less than was expected. Normally, this indicates a truncated file caused by OS failure. 

##  Error #106

**Keyed file error (Bad key block****hdr)**  
  
The key/data block read has an invalid header. The first byte of the data block, which indicates the type of data stored within the block, is incorrect. See **[Note](list_of_messages.htm#note)** above. 

##  Error #107

**Keyed file error (Wrong key block****addr)**  
  
The logical address field within the key/data block (offset 2,4) does not match the address that was expected. See **[Note](list_of_messages.htm#note)** above. 

##  Error #108

**Keyed file error (Record length invalid****)**  
  
A data record read from the file has an invalid record length field. The record length ** _must not_** exceed the maximum record length for the file. See **[Note](list_of_messages.htm#note)** above. 

##  Error #109

**Keyed file error (Deleted record chain bad)**  
  
The deleted record chain on a fixed record length Keyed file is corrupted. Each record on this chain should have a deleted record flag set. See **[Note](list_of_messages.htm#note)** above.

##  Error #110

**Keyed file error (No EOF flag found****)**  
  
The key structure has become corrupted as there is no logical EOF key entry. See **[Note](list_of_messages.htm#note)** above.

##  Error #111

**Keyed file error (Record data unreadable****)**  
  
The system was unable to read a record from a fixed record length Keyed file. The operating system is indicating that the data is not available, usually due to file truncation. See **[Note](list_of_messages.htm#note)** above. 

##  Error #112

**Keyed file error (Record key size invalid****)**  
  
A data record read from the file has an invalid external key size length. The external key size **_must not_** exceed the maximum defined for the file. See **[Note](list_of_messages.htm#note)** above. 

##  Error #113

**Keyed file error (Variable record offset bad****)**  
  
An offset within a data block is invalid. The offset, which indicates where within the data block the physical record starts, must contain a positive value not exceeding the size of the data block. See **[Note](list_of_messages.htm#note)** above. 

##  Error #114

**Keyed file error (Physical record address bad****)**  
  
A logical record address in a variable length record file is incorrect.  
  
A logical address consists of a block address plus a one-byte record index within the block. The record index must be between 1 and 255. This error is reported if the index is zero. See **[Note](list_of_messages.htm#note)** above. 

##  Error #115

**File I/O Verification Error**  
  
Attempt to verify a file **READ** or **WRITE** failed. This error is only reported when using the **['VR'](../parameters/vr.md)** or **['VW'](../parameters/vw.md)** system parameters.

##  Error #116

**Invalid field descriptor byte**  
  
The contents of a record stored in a file with a dynamic field separator (**SEP=***) could not be parsed due to an invalid field descriptor or field identifier. 

##  Error #117

**Invalid segment number**  
  
The record address contained within a key block contains an invalid file segment reference.  
  
This may be reported when running PxPlus versions prior to 4.23 or when using PxPlus ODBC driver versions prior to 3.22. 

##  Error #118

**Keyed file error**  
  
Decompression failed. 

##  Error #119

**Maximum record count hit for demo/educational license**

This error message is generated by the system when running on a demonstration key and you are adding records to a file that has more than 500 records.

##  Error #120

**Internal system logic error**  
  
Contact PVX Plus Technologies Ltd.

##  Error #121

**Invalid program format**  
  
The Embedded I/O program associated with a Keyed file could not be loaded. 

##  Error #122

**_No message_**  
  
Reserved for future use.

##  Warning #123

**The following statement labels cannot be located**  
  
This warning appears when a non**-** existent label is referenced in a program. 

##  Warning #124

**The following statement labels occur more than once**  
  
This warning appears when the same label is defined more than once in a program.

##  Error #125

**Memory Parity error**  
  
Contact PVX Plus Technologies Ltd.

##  Error #126

**Forced termination - No valid activation file**  
  
Contact PVX Plus Technologies Ltd.

##  Error #127

**Break key depressed**  
  
An internal error generated when either the user hits the **BREAK** key or an **[ESCAPE](../directives/escape.md)** directive is encountered.

##  Error #256 (and >256)

**Operating System Errors**  
  
Any error message over 255 is a reported operating system error. PxPlus reports OS errors by taking the actual OS error number and adding 256.  
  
Use the following requests to determine what these errors are:

> **PRINT MSG(**_error#_**)__**_or****_**PRINT MSG(**_RET_**)**

****
