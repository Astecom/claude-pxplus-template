# Input/Output and Control Options 

**Using Embedded IO** |   
---|---  
  
Embedded IO procedures allow the developer to intercept file Input and Output operations on a PxPlus KEYED data file. A user-defined program is logically PERFORMed during any OPEN, READ, WRITE, REMOVE and CLOSE operation. Optionally, with PxPlus 2014, you can specify an Object to handle the embedded IO processing.

The program to be PERFORMed and/or Object to use must be specified in the Data Dictionary Maintenance function in NOMADS to enable this feature.

The Embedded IO program/object must exist and be accessible using the standard PREFIX search rules in order to open the data file. If the program does not exist, then an Error #121: Invalid program format is reported.

_(Use of objects to handle embedded IO was added in PxPlus 2014.)_

## How It Works

Whenever a keyed file is opened (VLR or EFF), its file header is checked to see if an embedded IO program in specified.

If a program is specified, the system will then load and issue a PERFORM to various pre-defined entry points within the program in accordance to the file IO operation being executed. For example, when a REMOVE is executed, the system will look for, and if found, issue a PERFORM to the label PRE_REMOVE.

If an Object is specified (the embedded IO specification starts with OBJ=), then the object will be instantiated and the method POST_OPEN will be invoked.

The developer only needs to define those entry points/methods he/she needs to use. For example, if the logic does not need to intercept the READ directive, then the PRE_READ and/or POST_READ entry points do not need to be defined.

## Calling Parameters

Most entry points are passed four arguments that can be accessed by an **[ENTER](../directives/enter.md)** directive (no parameters are sent to OPEN/CLOSE).

> LOCAL ACCESS_MODE, KEY$, INDEX, VALUE$, FLAG, KNO (See **[Note](embeddedio.htm#Mark1)** below)  
>  ENTER ACCESS_MODE, KEY$, INDEX, VALUE$, FLAG, KNO

**_Where:_**

ACCESS_MODE |  Type of access being performed: **0** \- Next, **1** \- KEY=, **2** \- IND=, **3** \- RNO=  
---|---  
KEY$ |  Value in KEY$ or NULL  
INDEX |  IND or RNO value  
VALUE$ |  Record contents being written or standard value from FIB/FID/FIN

#### **Note:**  
When using embedded IO with an Extended Record Size VLR file, only the first segment will be passed in VALUE$ to the embedded IO program.  
  
FLAG |  A flag word indicating which IO options were present on the directive: 0x0001 - DOM=  
0x0002 - END=  
0x0004 - NUL=  
0x0008 - BSY=  
0x0010 - Directive is a FIND as opposed to a READ  
0x0020 - Directive is an EXTRACT as opposed to a READ  
0x0040 - Directive included a LOCK clause (added in PxPlus 2014)  
KNO |  KNO currently being used  
  
In addition to the parameters passed to the embedded IO program, the program can return values to the file system to change the normal IO behaviour by altering the record contents, etc.

## Entry Point/Parameter Information (Performed Program)

The following is a table of pre-defined entry points that will be logically PERFORMed, the value passed in the fourth argument, and what return value can be sent back, if desired:

**Directive** |  **When 'Performed'** |  **Entry Point** |  **Input VALUE$** |  **Return Value**  
---|---|---|---|---  
**[OPEN](../directives/open.md)** |  After file is opened |  <none>** 1** |  |   
**[CLOSE](../directives/close.md)** |  Before file is actually closed |  PRE_CLOSE |  |   
**[READ](../directives/read.md)** / **[FIND](../directives/find.md)** |  Before the file is read |  PRE_READ |  |  Returned value is considered the data record and is passed back to the application. Physical read not done.  
|  After the file is read |  POST_READ |  Record as read from the file |  Returned value is considered the data record and is passed back to the application.  
**[EXTRACT](../directives/extract.md)** |  Before the file is read |  PRE_EXTRACT** 2** |  |  Returned value is considered the data record and is passed back to the application. Physical read not done.  
|  After the file is read |  POST_EXTRACT** 2** |  Record as read from the file |  Returned value is considered the data record and is passed back to the application.  
**[WRITE](../directives/write.md)** / **[UPDATE](../directives/update.md)** / **[INSERT](../directives/insert.md)** |  Before the file is updated |  PRE_WRITE |  Record as output by program and will/should be written to the file |  A 'RETURN 0' will bypass the actual write to the file.  
|  After the file is updated |  POST_WRITE |  Record as it was written to the file |   
**[REMOVE](../directives/remove.md)** |  Before the file is updated |  PRE_REMOVE |  |   
|  After the file is updated |  POST_REMOVE |  |   
**[LOCK](../directives/lock.md)** |  Before the file is locked |  PRE_LOCK |  |   
|  After the file is locked |  POST_LOCK |  |   
**[UNLOCK](../directives/unlock.md)** |  Before the file is unlocked |  PRE_UNLOCK |  |   
|  After the file is unlocked |  POST_UNLOCK |  |   
**[PURGE](../directives/purge.md)** |  Before the file is purged |  PRE_PURGE |  |   
|  After the file is purged |  POST_PURGE |  |   
**Function** |  **When 'Performed'** |  **Entry Point** |  **Input VALUE$** |  **Return Value**  
**[FIB( )](../functions/fib.md)** |  After result from FIB function |  POST_FIB |  Original FIB value |  Revised FIB value  
**[FID( )](../functions/fid.md)** |  After result from FIB function |  POST_FID |  Original FID value |  Revised FID value  
**[FIN( )](../functions/fin.md)** |  After result from FIB function |  POST_FIN |  Original FIN value |  Revised FIN value  
**[IND( )](../functions/ind.md)** |  Before function called |  PRE_IND |  |  IND return value  
**[KEC( )](../functions/kec.md)** |  Before function called |  PRE_KEC |  |  KEC return value  
**[KEF( )](../functions/kef.md)** |  Before function called |  PRE_KEF |  |  KEF return value  
**[KEL( )](../functions/kel.md)** |  Before function called |  PRE_KEL |  |  KEL return value  
**[KEN( )](../functions/ken.md)** |  Before function called N/A |  PRE_KEN |  |  KEN return value  
**[KEP( )](../functions/kep.md)** |  Before function called |  PRE_KEP |  |  KEP return value  
**[KEY( )](../functions/key.md)** |  Before function called N/A |  PRE_KEY |  |  KEY return value  
**[RNO( )](../functions/rno.md)** |  Before function called N/A |  PRE_RNO |  |  RNO return value  
  
** 1 There is no line label entry point used when a file is OPENed as the program is simply PERFORMed.   
2 The PRE/POST extract routines are called if present; otherwise, an Extract will also attempt PRE/POST read.**

#### **Note****:**  
As the embedded IO program is performed, care must be taken that NO variables are changed within the code. All variables used should be declared as LOCAL or the routine can issue a CALL to insulate the mainline program from the IO routine. The advantage of the PERFORM is that other variables that may exist in the application will still be accessible to the logic. In particular, you should always LOCALize the entry parameters as shown above.

## Methods Invoked (Embedded IO Object)

When using an object to handle embedded IO, each IO operation is invoked as a method within the object. The method names used are the same as the Entry Points found in column three of the preceding table. For example, instead of the system performing the Entry point PRE_READ in an embedded IO program, it will invoke the method PRE_READ(..), passing it the same parameters.

The only difference being that when the file is OPENed, the method POST_OPEN( ) is invoked, passing in the original pathname as specified in the program (string), channel number (numeric) and the full pathname to the file (string).

**_Example:_**

> 0010 ! ENCRYPT - Embedded IO Procedure to encrypt data   
> 0100 ! ^100  
>  0110 OPEN:  
>  0120 LOCAL P$  
>  0130 IF %PASSWORD$="OK" THEN GOTO 0190  
>  0140 PRINT 'WINDOW'(10,10,50,6,"Password?",'MODE'($000F$)+'CS'),  
>  0150 OBTAIN (0,ERR=0160)@(0,1),"Please enter the password? ",P$  
>  0160 PRINT (0,ERR=*NEXT)'POP',  
>  0170 IF UCS(P$)<>"PASSWORD" OR CTL<>0 THEN EXIT 52  
>  0180 %PASSWORD$="OK"  
>  0190 EXIT   
>  0200 ! ^100   
>  0210 POST_READ: LOCAL VALUE$,ACCESS_MODE,KEY$,INDEX,V$  
>  0220 ENTER ACCESS_MODE,KEY$,INDEX,V$  
>  0230 VALUE$=V$; GOSUB ENCRYPT_IT; RETURN VALUE$  
>  0240 END   
>  0300 ! ^100   
>  0310 PRE_WRITE: LOCAL VALUE$,ACCESS_MODE,KEY$,INDEX,V$  
>  0320 ENTER ACCESS_MODE,KEY$,INDEX,V$  
>  0330 VALUE$=V$; GOSUB ENCRYPT_IT; RETURN VALUE$  
>  0340 END   
>  1000 ! ^1000  
>  1010 ENCRYPT_IT:  
>  1020 LOCAL ENCRYPT_STRING$  
>  1030 IF VALUE$="" THEN RETURN   
>  1040 ENCRYPT_STRING$="Use this string to randomize the data"  
>  1050 ENCRYPT_STRING$=DIM(LEN(VALUE$),ENCRYPT_STRING$)  
>  1060 VALUE$=XOR(VALUE$,ENCRYPT_STRING$)  
>  1070 RETURN
