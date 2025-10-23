# System Functions

**FID( )** |  **_Return File Information Descriptor_**  
---|---  
  
##  Format

**FID(**_chan_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_chan_ |  Channel or logical file number of the file to return information about.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

String, file information descriptor.

##  Description

The **FID( )** function returns a character string containing the file information descriptor for an existing open file. If the file is a device (printer, terminal, etc.), the filename used to open the file will be returned. If the file is a disk file, a file description string is returned. You can make subsequent use of this file description by passing it to a **[FILE](../directives/file.md)** directive to recreate the file.

See **[File Information Functions Overview](fib.htm#Mark7)** and **[PxPlus Standard Format for FIB(0) and FID(0)](fib.htm#Mark8)**.

If you are running PxPlus in an emulation mode, the format of the information returned will be changed to reflect the system being emulated.

#### **Note:**  
When **['FF'](../parameters/ff.md)** is set to 0 or 3 and the **['PO'](../parameters/po.md)** system parameter is switched **_On_** , the **FID( )** and **[FIB( )](fib.md)** function returns the original path used when the file was opened. In addition, the **FID( )** and **[FIN( )](fin.md)** format layouts will be changed whenever there is a change to the **'FF'** system parameter.

**_Determining FID in PxPlus_**** _Under_ _UNIX_**

By default, PxPlus assigns a unique FID value for each terminal based on the /etc/initab entry for the terminal. Unfortunately, when you use dynamic terminal allocation (e.g. Telnet), each time a user signs off and then signs on, he/she will have a different FID value. There are workarounds; however, no one solution works in all instances. If, for security purposes, you use the User_ID rather than the Terminal_ID, you can set the file information descriptor in the user's profile by inserting the following lines:

> PVXFID0=desired_FID_val  
>  export PVXFID0

As an alternative, you can assign the file information descriptor once in PxPlus by issuing a **[SETFID](../directives/setfid.md)** directive to establish a new **FID(0)** value. If you do not want to use User_IDs but you are using Telnet and PCs, see if there is a host-initiated file transfer you could use to get a file containing the FID value off the PC.

Using WindX, you could open a file on the PC and read it to determine a FID value:

> open (1)"[wdx]C:\PVXFID"  
>  read record (1)F$  
>  close (1)  
> setfid F$

Finally, you could see if the terminal emulator allows you to define values for function keys and has an escape sequence to send the values. Some terminals send a "HEREIS" string on receipt of an ENQ (Hex $05$); however, this varies from terminal to terminal.

**FIB(1) / FID(1)'FF'=1**

**Bytes** |  **Description (Total Length = 22 bytes)**  
---|---  
1,3 |  $000000$  
4,6 |  Characters 1 - 6 of filename  
10,1 |  File type indicator: $00$ Indexed  
$01$ Serial - WindX connected file (any type)  
$02$ Keyed or EFF  
$03$ Open via ISZ= (binary)  
$04$ Program  
$06$ ZIP  
$0D$ Directory  
$0F$ Device  
11,1 |  External key size  
12,3 |  Maximum number of records  
15,2 |  Record size  
17,4 |  Reserved for future use  
21,2 |  Characters 7 - 8 of filename  
  
**FIB(2) / FID(2)'FF'=2**

**Bytes** |  **Description (Total Length = 16 bytes)**  
---|---  
1,6 |  Characters 1 - 6 of filename  
7,1 |  File type indicator: $00$ Indexed  
$01$ Serial - WindX connected file (any type)  
$02$ Keyed  
$03$ Open via ISZ= (binary)  
$04$ Program  
$06$ ZIP  
$0D$ Directory  
$0F$ Device  
8,1 |  External key size  
9,2 |  Maximum number of records (bytes reversed)  
11,2 |  Record size (bytes reversed)  
13,4 |  _Not Used_  
  
**FIB(3) / FID(3)'FF'=3**

**Bytes** |  **Description (Total Length = 9+ bytes)**  
---|---  
1,1 |  File type indicator: $00$ Indexed  
$01$ Sequential - WindX connected file (any type)  
$02$ Keyed  
$03$ Opened via ISZ= (binary)  
$04$ Program  
$05$ Directory  
$06$ BBxMkeyed (no external key) **_or_**  
$06$ ZIP  
$07$ C-Isam  
$0A$ UNIX Pipe  
$0E$ TCP/IP-Network  
$0F$ Device/Attached Printer  
2,1 |  External key size  
3,4 |  Maximum number of records  
7,2 |  Record size (bytes reversed)  
9,... |  Pathname **_Example:_** set_param 'FF'=3  
open (30)"SESAME"  
A$=fid(30)  
print A$(9)  
  
run  
C:\OTHER\TESTS\SESAME  
1,... |  Device name **_Example:_** set_param 'FF'=3  
open (31)PRINTER$  
B$=fid(31);  
print B$  
  
->run  
LPT1  
  
[Details for files, above (1,1 to 9,...) inapplicable]  
  
**FIB(4) / FID(4)'FF'=4**

**FID(4)** is the same as **FID(3)** ; however, all serial files return a file type indicator of $03$ for binary. This format is only intended to facilitate program migration to PxPlus.

##  See Also

**[FIB( ) Return File Information Block](fib.md)**  
**[FIN( ) Return File Information](fin.md)**  
**[FILE Create New File from File Descriptor](../directives/file.md)**  
**['FF' File Format](../parameters/ff.md)**  
**['PO' Path Original](../parameters/po.md)**
