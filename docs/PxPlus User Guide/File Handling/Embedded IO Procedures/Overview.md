# File Handling

**Embedded I/O Procedures** |  **__**  
---|---  
  
Embedded Input/Output (I/O) procedures provide the ability to intercept and control all file I/O directives and functions using a user-defined program.

The program is called when the file is accessed by an **[OPEN](../../../directives/open.md)**, **[READ](../../../directives/read.md)**, **[FIND](../../../directives/find.md)**, **[EXTRACT](../../../directives/extract.md)**, **[WRITE](../../../directives/write.md)**, **[REMOVE](../../../directives/remove.md)**, **[PURGE](../../../directives/purge.md)**, **[LOCK](../../../directives/lock.md)**, **[UNLOCK](../../../directives/unlock.md)**, **[CLOSE](../../../directives/close.md)**, and all **[KEY( )](../../../functions/key.md)**, **[IND( )](../../../functions/ind.md)**, **[RNO( )](../../../functions/rno.md)** and **[FIB( )](../../../functions/fib.md)** / **[FID( )](../../../functions/fid.md)** / **[FIN( )](../../../functions/fin.md)** functions.

For more information on the various syntax elements in PxPlus for file operations, see **[Processing Data Files](../Processing%20Data%20Files/Overview.md)**.

The program name may be specified in the **[Data Dictionary Maintenance](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** interface, which writes it to the embedded data dictionary structure of the file, or it can be specified using the **[SETDEV](../../../directives/setdev.md)** directive on an already-open channel. Both **_Pre_** and **_Post_** operations are provided for most directives, while functions have either a **_Pre_** or a **_Post_** operation.

Possible applications for embedded I/O procedures include:

  * Security and data encryption (apply passwords and/or encrypt the data)
  * Data integrity
  * Data replication
  * Prevent a customer from being deleted when there is an outstanding balance
  * Remove cross-reference information from all files before deleting a customer
  * Normalizing data files (re-direct alternate records types to "normal" files)
  * Circular file journalizing (maintain a queue of the last _nnn_ # of transactions)



## Implementation

Embedded I/O procedures allow the developer to intercept file input and output operations on a PxPlus keyed data file or on any channel using the **[SETDEV](../../../directives/setdev.md)** directive. A user-defined program is logically invoked using the **[PERFORM](../../../directives/perform.md)** directive during use of any of the above-mentioned I/O directives.

For the program to be invoked on an **OPEN** of the file, the name of the program must be written to the file's internal data dictionary. This is only available for keyed files and is done using the PxPlus **[Data Dictionary Maintenance](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** interface.

The embedded I/O program must exist and be accessible using the standard **PREFIX** search rules in order to open the data file. If the program cannot be located, then an Error #121: Invalid program format is reported and the **OPEN** will fail.

To use an I/O procedure on any other type of file, a **SETDEV** directive must be executed after the channel has been opened. The syntax for the **[SETDEV](../../../directives/setdev.md)** directive appears as follows:

> **SETDEV** (_channel_) **PROGRAM** "_IOProc_ "

**_Where:_**

_channel_ |  Channel number to which the I/O procedure program is assigned  
---|---  
_IOProc_ |  User-defined program to **PERFORM**  
  
**_Example:_**

> 10 OPEN(1)FID(0)  
>  20 SETDEV (1) PROGRAM "ioproc.tst"

#### **Note:**  
If the specified program is not accessible, an Error #121 is not generated on execution of the **[SETDEV](../../../directives/setdev.md)** directive.

To verify that the program can be located, **OPEN** or **ADDR** the program prior to issuing the **[SETDEV](../../../directives/setdev.md)** directive to ensure that PxPlus can access it. Another option is to reference the currently executing program:

> **SETDEV**(1) PROGRAM PGN

## Predefined Entry Points

When file input/output is performed, the user-defined program will be logically invoked using a**PERFORM** at the following predefined entry points:

**_For Directives:_**  
---  
**** |  **PRE_READ** |  **POST_READ**  
**** |  **PRE_EXTRACT** |  **POST_EXTRACT**  
**** |  **PRE_WRITE** |  **POST_WRITE**  
**** |  **PRE_REMOVE** |  **POST_REMOVE**  
**** |  **PRE_PURGE** |  **POST_PURGE**  
**** |  **PRE_LOCK** |  **POST_LOCK**  
**** |  **PRE_UNLOCK** |  **POST_UNLOCK**  
**** |  **PRE_CLOSE** |  **POST_PASSWORD**  
**_  
For Functions:_** |   
**** |  **PRE_KEY** |  **PRE_KEN** |   
**** |  **PRE_KEL** |  **PRE_RNO** |   
**** |  **PRE_KEC** |  **POST_FIB** |   
**** |  **PRE_IND** |  **POST_FID** |   
**** |  **PRE_KEF** |  **POST_FIN** |   
**** |  **PRE_KEP** |  |   
  
**_Additional Notes:_**

  * There is no line label entry point used when a file is opened, as the program is simply invoked.
  * The **[CLOSE](../../../directives/close.md)** directive only supports the **PRE_CLOSE** entry point.
  * If the entry point for a particular function does not exist, no error will be reported.
  * All entry point labels are optional, and PxPlus will only **PERFORM** the routines that exist within the program.



## Execution Environment

The program is invoked logically using the **[PERFORM](../../../directives/perform.md)** directive; therefore, it is recommended that all variables within the I/O procedure be declared**LOCAL**. This will prevent variables referenced in the I/O procedure from conflicting with any program accessing the file.

Command mode processing is **_not_** recommended within an I/O procedure. Although it may be possible to add an**ESCAPE** to the I/O procedure to have it drop to console mode, doing so can produce undesirable results, which could terminate the PxPlus session.

The I/O procedure can generate an error, which in turn will be returned to the function or directive being executed. Errors may be generated by the I/O procedure as follows:

> **EXIT** _error_

**_Where:_**

_error_ |  Error number to report back to the directive or function accessing the channel  
---|---  
  
**_Additional Notes:_**

  * Any error reported by the I/O program is reported as an I/O error on the file.
  * While the I/O procedure is executing, any subsequent file access to the same file is not passed to the file I/O procedure.
  * A normal PxPlus **PERFORM** does not allow an **ENTER** statement; however, there is a special **ENTER** provided for I/O procedures.



The following arguments are passed to the I/O procedure:

> **ENTER** _access_mode, key$, index, value$, access_options, keynumber_

**_Where:_**

_access_mode_ |  |  **0** |  _Next_  
---|---  
**1** |  _Key_  
**2** |  **IND=**  
**3** |  **RNO=**  
_key$_ |  Value in _key$_ or null  
_index_ |  Value in**IND=** , **RNO=** , or**KNO=** (if**KEY=** specified)  
_value$_ |  Record contents for**READ** /**WRITE**  
_access_options_ |  Bit-masked type value indicating the following: |  **1** |  **DOM=** specified  
---|---  
**2** |  **END=** specified  
**4** |  **NUL=** specified  
**8** |  **BSY=** specified  
**16** |  **FIND** directive  
**32** |  **EXTRACT** directive  
_keynumber_ |  Value of**KNO=**  
  
All parameters are read only and are not supplied for**OPEN** and**CLOSE** operations.

#### **Note:**  
The**POST_READ** and**POST_EXTRACT** logic is performed prior to the variables in the IOList being populated with data. This allows the data in the record to be modified before it is available for use by the program accessing the file.

If a**TIM=** clause was specified on the File I/O directive, then the value is reported in**TCB(92).**

## Changing Return Values

The I/O program can alter the return value using:

> **RETURN** _xxx$  
> _  
> **_or  
> _**  
> **RETURN** _xxx_

A**RETURN** _anything_ in **_Pre_** -logic will result in the **_Post_** -logic **_not_** being executed.

## Sample Code

0010 ! ENCRYPT - Embedded I/O Procedure to encrypt data   
0100 ! ^100   
0110 OPEN: ! This label is for informational purposes only, the program   
0111 !" execution started at line 10 when the open was performed   
0120 LOCAL P$   
0130 IF %PASSWORD$="OK" THEN GOTO 0190   
0140 PRINT 'WINDOW'(10,10,50,6,"Password?",'MODE'($000F$)+'CS'),   
0150 OBTAIN (0,ERR=0160)@(0,1),"Please enter the password? ",P$   
0160 PRINT (0,ERR=*NEXT)'POP',   
0165 ! Next line is an example of forcing an error to be returned using   
0166 ! the EXIT err   
0170 IF UCS(P$)<>"PASSWORD" OR CTL<>0 THEN EXIT 52   
0180 %PASSWORD$="OK"   
0190 EXIT ! end of open routine   
0200 ! ^100 " Start of POST_READ routine   
0210 POST_READ: LOCAL VALUE$,ACCESS_MODE,KEY$,INDEX,V$   
0220 ENTER ACCESS_MODE,KEY$,INDEX,V$   
0230 VALUE$=V$; GOSUB ENCRYPT_IT; RETURN VALUE$   
0240 END ! End of POST_READ routine   
0300 ! ^100   
0310 PRE_WRITE: LOCAL VALUE$,ACCESS_MODE,KEY$,INDEX,V$   
0320 ENTER ACCESS_MODE,KEY$,INDEX,V$   
0330 VALUE$=V$; GOSUB ENCRYPT_IT; RETURN VALUE$   
0340 END   
1000 ! ^1000   
1010 ENCRYPT_IT:   
1020 LOCAL ENCRYPT_STRING$   
1030 IF VALUE$="" THEN RETURN   
1040 ENCRYPT_STRING$="Use this string to randomize the data"   
1050 ENCRYPT_STRING$=DIM(LEN(VALUE$),ENCRYPT_STRING$)   
1060 VALUE$=XOR(VALUE$,ENCRYPT_STRING$)   
1070 RETURN 
