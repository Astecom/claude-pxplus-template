# System Functions 

**FIB( )** |  **_Return File Information Block_**  
---|---  
  
##  Format

**FIB(**_filespec_ [,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_filespec_ |  Can be a numeric expression indicating the open channel number to use or a string expression containing the pathname or table name (if string is prefixed by the keyword **TABLE**) of the file to use.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
_(TABLE support was added in PxPlus 2018 Update 1)._

##  Returns

String, file information block description.

##  Description

The **FIB(** **)** function returns a character string containing a file information block description for an existing open file. This information may be passed to a **[FILE](../directives/file.md)** directive to subsequently recreate the file.

See **File Information Functions Overview** and **PxPlus Standard Format for FIB(0) and FID(0)**.

Unlike **FID( )** , the **FIB( )** function is **_not_** affected by emulation mode settings.

#### **Note:**  
When **'[FF](../parameters/ff.md)'** is set to 0 or 3 and the **'[PO](../parameters/po.md)'** system parameter is switched **_On_** , the **[FID( )](fid.md)** and **FIB( )** functions return the original path used when the file was opened.

##  See Also

[**FID( ) Return File Information Descriptor**](fid.md)  
[**FIN( ) Return File Information**](fin.md)  
[**FILE Create New File from File Descriptor**](../directives/file.md)  
[**'FF' File Format**](../parameters/ff.md)  
[**'PO' Path Original**](../parameters/po.md)

##  Example

input "Enter filename:",F$  
open (1)F$  
if mid(fib(1),10,1)<>$02$ \  
then print "Not a Keyed file"

##  File Information Functions Overview

The **FIB( )** , **[FID( )](fid.md)** and **[FIN( )](fin.md)** functions return file information, descriptors and blocks. **FID( )** returns file characteristics or descriptors such as the type of file, size, keys (if applicable) and the absolute location (pathname) of the file on the disk system. **FIB(** **)** always returns the information in PxPlus Standard Format. See **[FIB/FID Layouts](fib.htm#Mark9)**.

PxPlus returns file identifiers for a file through either the **FID( )** or **FIB( )** function. Normally, these two functions will both provide the same information; however, to simplify conversion to PxPlus from various Business Basics, PxPlus returns one of five different formats for the **FID( )** function, based on the setting of the **['FF'](../parameters/ff.md)** system parameter.

There is **_one exception_** to the above. For a device, the **FID( )** function always returns only the device name. For example, **FID(0)** will yield the terminal identifier.

You can define the value returned by **FID(0)** externally using the environment variable **[PVXFID0](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Environment%20Variables.htm#Mark11)** or internally using the **[SETFID](../directives/setfid.md)** directive. **FIN(** **)** returns file information about the data structure (describing the physical aspects of a file such as maximum record, number of records, key size, record size).

##  FIB/FID Layouts

**_PxPlus Standard Format for_**** _FIB(__0) and FID(0)_**

The following tables describe the **FIB(0)** /**FID(0)** PxPlus standard format for 'FF'=0: **[Common Information](fib.htm#Mark10)**, **[Keyed Files](fib.htm#Mark11)** and **[Terminals](fib.htm#Mark13)**.

**_Common Information_**

**Bytes** |  **Description (for Common Information Only)**  
---|---  
1,3 |  Current record count (if available)  
4,6 |  Characters 1 - 6 of filename (will include the path, if used)  
10,1 |  $00$ Indexed  
$01$ Serial, PDF, Database  
$02$ Keyed  
$03$ Open via ISZ= (binary)  
$04$ Program  
$05$ Attached printer  
$06$ ZIP  
$07$ Isam  
$08$ _(Not Used)_  
$0A$ Pipe  
$0D$ Directory  
$0E$ TCP/IP  
$0F$ Device or Windows printer  
11,1 |  External key size  
12,3 |  Maximum number of records  
15,2 |  Record size  
17,1 |  Keyed file flag ($01$ if variable length records)  
18,1 |  Keyed file inventory threshold %  
19,1 |  File type: |  "*" |  Device |  ">" |  I/O Redirection  
---|---|---|---  
"2" |  EFF File Type Indicator |  "A" |  Attached Printer  
"B" |  Opened via ISZ= |  "C" |  C**-** ISAM  
"d" |  BBx Directory |  "D" |  Directory  
"E" |  DDE Connection |  "F" |  PDF File  
"I" |  Indexed |  "K" |  Keyed/Direct/Sort  
"l" |  DLL File |  "m" |  BBx M-Keyed File  
"M" |  Dynamic *MEMORY* File |  "N" |  TCP/IP Connection  
"o" |  OCI Data File |  "O" |  ODBC Data File  
"p" |  **(_Internal Use Only_)** Program Library PSEUDO File |  "P" |  Program  
"Q" |  MySql |  "S" |  Serial  
"T" |  WindX Connected Device/File |  "V" |  Variable Data File  
"W" |  Windows Printer |  "Z" |  ZIP File  
20,1 |  External file handle  
21,1 |  Current attribute byte  
22,1 |  Current foreground colour  
23,1 |  Current background colour  
24,1 |  Reserved for future use  
25,60 |  External file pathname  
  
**_Keyed Files_**

The following table applies to keyed files, *MEMORY* files and external database files:

_(Support to return key information on external database tables was added in PxPlus 2022 Update 1.)_

**Bytes** |  **Description (for Keyed Files Only)**  
---|---  
85,384 |  A series of 4 or 8-byte extended entries (for extended key attributes). The maximum number of key segments can range between 48 and 96, depending on the number of 4 and 8-byte entries found. The first of each group of 4 bytes indicates the key number or contains $FE$ if the 4 bytes are an extension of the key descriptor: |  (1,1) |  The four lower bits contain the key number. KEYNUM=dec(and(KDAT$(1,1),$0F$)) The four high order bits contain offset information used in conjunction with byte (3,1).  
A value of $FF$ indicates final entry.  
A value of $FE$ indicates that this key entry is an extension of the prior key entry. | 

#### **Note:   
**When working with an EFF file, the key number will be reset to 0 (zero) after the 16th key.  
  
**_Example:_**  
  
On a file with 35 keys, the key number in byte (1,1) will go from 0 to 15, then for key 17, byte (1,1) will be 0 again. It will climb to 15, then for the 33rd key, byte (1,1) will be 0 again. Byte (1,1) for the 35th key will be 2.  
  
---  
(2,1) |  Field number in record ($FF$=KEY).  
(3,1) |  Offset in field (in conjunction high order four bits of byte (1,1)), maximum 3839. KEYOFFSET=16*dec($00$+and($F0$,KDAT$(1,1)))+dec($00$+KDAT$(3,1))  
(4,1) |  Length of key (descending if bit $80$ is On).  
**_Extended Entry:_**  
(5,1) |  $FE$ indicates extended entry; otherwise, it is byte (1,1) of next entry.  
(6,2) |  Keyed file segment attributes (cumulative): $0100$ Unique key  
$0200$ Convert segment to uppercase  
$0400$ Convert segment to lowercase  
$0800$ Convert using translate table  
$1000$ Swap byte order  
$2000$ Primary key allows duplicates  
$4000$ Don't add key if the segment is null  
$0001$ Don't add key if all segments are null  
$0002$ Binary auto-increment key  
$0004$ Ignore data after $00$  
$0008$ Zero-filled auto-increment  
$0010$ Space-filled auto-increment *MEMORY* file and external database segment attributes (cumulative): $0001$ Unique key  
$0002$ Convert segment to uppercase  
$0004$ Convert segment to lowercase  
$0008$ Convert using translate table  
$0010$ Swap byte order  
$0020$ Primary key allows duplicates  
$0040$ Don't add key if the segment is null  
$0100$ Don't add key if all segments are null  
$0200$ Binary auto-increment key  
$0400$ Ignore data after $00$  
$0800$ Zero-filled auto-increment  
$1000$ Space-filled auto-increment  
(8,1) |  Null character for NULL keys ((6,2)=$0040$ or $0100$)  
  
**_Terminals_**

**Bytes** |  **Description (for Terminals Only)**  
---|---  
85,1 |  Current column  
86,1 |  Current line  
87,1 |  Maximum column  
88,1 |  Maximum line  
89,110 |  Window information (10 ***** 11 byte entries for top 10 windows): (1,1) Window number  
(2,2) Absolute column (2 bytes)  
(4,2) Absolute line (2 bytes)  
(6,1) Number of columns wide  
(7,1) Number of lines wide  
(8,1) Column 0 of _scroll_ region  
(9,1) Line 0 of _scroll_ region  
(10,1) Number of columns for _scroll_ region  
(11,1) Number of lines for _scroll_ region  
213,12 |  Actual device type  
  
BBx is a registered trademark of BASIS International Ltd.
