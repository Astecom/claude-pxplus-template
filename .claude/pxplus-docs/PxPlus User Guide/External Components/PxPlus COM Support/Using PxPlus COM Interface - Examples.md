# PxPlus COM Support

**Using PxPlus COM Interface - Examples** |  **__**  
---|---  
  
The code samples below show how to perform a number of actions using the PxPlus COM Interface. These are not complete programs and are intended only to demonstrate some practical non-event COM usage in PxPlus applications. For event-driven program examples of COM, see **[Event-Driven COM](../Event-Driven%20COM/Overview.md)**.

## Example 1

This example demonstrates how to embed a shell browser window within PxPlus and to display either a web page or a folder view as the contents.

> 0010 DEF OBJECT IE, @(2, 2, 70, 16) = "Shell.Explorer"   
>  0020 IE'Navigate2("http://www.pvxplus.com")   
>  0030 ESCAPE   
>  0040 IE'Navigate2("file://c:\")   
>  0050 ESCAPE   
>  0060 DELETE OBJECT IE

## Example 2

The following invokes Adobe PDF printing hidden from the user.

> 0010 DEF OBJECT PDF,"PDF.PdfCtrl.6"   
>  0020 PDF'LoadFile("C:\tmp\test.pdf")   
>  0030 PDF'Print()   
>  0040 DROP OBJECT PDF

## Example 3

This example demonstrates how to use the tool window dialogue to select a control.

> 0010 PRINT 'CS'   
>  0020 DEF OBJECT AXCTL, @(40,1,30,10)="*", ERR=0100   
>  0030 PROG$ = AXCTL'PVXNAME$   
>  0040 ESCAPE   
>  0050 END   
>  0100 PRINT MSG(-1)

## Example 4

This example demonstrates how to embed a Word document from a file reference. Requires Microsoft Word to be installed.

> 0010 GET_FILE_BOX READ WORDDOC$, LWD, "Word Document", "Word Document|*.doc,"   
>  0020 IF WORDDOC$="" THEN END   
>  0030 DEF OBJECT WD, @(0,0,80,20)="[File]"+WORDDOC$   
>  0040 INPUT *   
>  0050 DELETE OBJECT WD   
>  0060 END

## Example 5

This example demonstrates how to open an Access database and to read the table schema. Requires Microsoft Access to be installed.

> 0010 GET_FILE_BOX READ MDB$, LWD, "Access Database"," Access Database |*.mdb,"   
>  0020 IF MDB$="" THEN END   
>  0030 DEF OBJECT CONN, "ADODB.Connection"   
>  0040 LET CONNSTR$ = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source="+MDB$   
>  0050 CONN'OPEN(CONNSTR$)   
>  0060 DEF OBJECT VARDATA,"*VARARRAY"   
>  0070 VARDATA'CREATE(4)   
>  0080 VARDATA'SETDATA(3,"Table")   
>  0090 LET R = CONN'OPENSCHEMA(20,*VARDATA)   
>  0100 LET N$ = ""; FOR I=0 TO R'FIELDS'COUNT-1; LET N$=N$+R'FIELDS(I)'NAME$+" | "; NEXT I; PRINT N$   
>  0110 LET RA = R'GETROWS(20)   
>  0120 FOR I=0 TO RA'UBOUND(2)   
>  0130 LET TXT$ = ""   
>  0140 FOR II=0 TO RA'UBOUND(1)   
>  0150 LET TXT$ = TXT$+RA'GETDATA$(II,I)+" | "   
>  0160 NEXT II   
>  0170 PRINT TXT$   
>  0180 NEXT I 

## Example 6

This example demonstrates how to use WMI to display the MAC and IP address for the local computer. It also demonstrates the "for each" enumerator usage using a collection and an array.

> 0010 DEF OBJECT WMI,"[GetObject]winmgmts:\\\\.\root\cimv2"   
>  0020 LET COLITEMS = WMI'EXECQUERY("Select * from   
>  WIN32_NetworkAdapterConfiguration where IPEnabled = True")   
>  0030 LET ITEMSFOREACH=COLITEMS'PVXFOREACH   
>  0040 WHILE ITEMSFOREACH'NEXT()   
>  0050 PRINT ITEMSFOREACH'DATA'PROPERTIES_("MACAddress")'VALUE$   
>  0060 LET IPARRAY=ITEMSFOREACH'DATA'PROPERTIES_("IPAddress")'VALUE   
>  0100 LET IPFOREACH=IPARRAY'PVXFOREACH   
>  0110 WHILE IPFOREACH'NEXT()   
>  0120 PRINT IPFOREACH'DATA$   
>  0130 WEND   
>  0140 IPARRAY'PVXFREE()   
>  0150 WEND   
>  0160 ITEMSFOREACH'PVXFREE()   
>  0170 ESCAPE   
>  0180 DELETE OBJECT WMI 

## Example 7

This example demonstrates how to use the Scripting File System object to list the available drive letters on the local computer.

> 0010 DEF OBJECT FSO, "Scripting.FileSystemObject"   
>  0020 LET DRIVE_ITER = FSO'DRIVES'PVXFOREACH   
>  0030 WHILE DRIVE_ITER'NEXT()   
>  0040 LET DRIVE = DRIVE_ITER'DATA   
>  0050 PRINT DRIVE'DRIVELETTER$   
>  0060 WEND   
>  0070 ESCAPE   
>  0080 DELETE OBJECT FSO

## Example 8

This example demonstrates how to create a picture interface and then load the picture into a control that displays picture data.

> 0020 INPUT "Enter Picture Value:",PIC$   
>  0025 IF LEN(PIC$)=0 THEN GOTO 0100   
>  0026 IF (X>0) THEN X'PVXFREE()   
>  0028 DEF OBJECT X,@(50,1,30,15)="Forms.Image.1"   
>  0030 DEF OBJECT Y,"[picture]"+PIC$   
>  0040 X'PICTURE.PUT(*Y)   
>  0050 GOTO 0020

## Example 9

The following code sample is used for controlling a Shockwave Flash animation.

> 0010 print 'dialogue'(0,0,60,20,"Flash",'CS')   
>  0020 Places=10   
>  0030 !   
>  0040 def object Flash,@(0,0,45,15.5)="Shockwaveflash.shockwaveflash.1"   
>  0050 R$=lwd+dlm+"earth.swf"   
>  0060 Flash'LOADMOVIE(0,R$)   
>  0070 Flash'SETVARIABLE("n","Earth")   
>  0080 !   
>  0090 drop_box Places,@(47,5,10,10)   
>  0100 print 'text'(@x(47),@y(4.25),"Visit:"),   
>  0110 drop_box load Places,"<Just Spin>,North and South America,Africa, Hawaii,Asia,Australia,Russia,Europe,"   
>  0120 drop_box write Places,"<Just Spin>"   
>  0130 !   
>  0140 obtain X   
>  0150 if ctl=4 then print 'pop'; end   
>  0160 if ctl=Places then gosub MOVE   
>  0170 goto 0140   
> 0180 !   
> 0190 MOVE:   
>  0200 if Places'CURRENTITEM=1 then Flash'PLAY(); Flash'SETVARIABLE("n","Earth"); goto 0140   
>  0210 if Places'CURRENTITEM=2 then EARTHP=39; goto SETP   
>  0220 if Places'CURRENTITEM=3 then EARTHP=62; goto SETP   
>  0230 if Places'CURRENTITEM=4 then EARTHP=44; goto SETP   
>  0240 if Places'CURRENTITEM=5 then EARTHP=52; goto SETP   
>  0250 if Places'CURRENTITEM=6 then EARTHP=58; goto SETP   
>  0260 if Places'CURRENTITEM=7 then EARTHP=61; goto SETP   
>  0270 !   
>  0280 SETP:   
>  0290 Flash'STOP()   
>  0300 C=Flash'CURRENTFRAME()   
>  0310 if C=EARTHP then goto 0140   
>  0320 if C>EARTHP then INC=-1 else INC=1   
>  0330 R$=Places'VALUE$   
>  0340 Flash'SETVARIABLE("n","Moving To "+R$)   
>  0350 !   
>  0360 for I=C to EARTHP step INC   
>  0370 Flash'GOTOFRAME(I)   
>  0380 wait .05   
>  0390 next I   
>  0400 Flash'SETVARIABLE("n",R$)   
>  0410 goto 0140
