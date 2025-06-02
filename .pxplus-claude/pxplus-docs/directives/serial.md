# Directives 

**SERIAL** |  **_Create a Sequential File_**  
---|---  
  
##  Format

**SERIAL** _filename$_[,_max_ __recs_[,_rec_size_]][,**ERR=**_stmtref_]  
  
**_Where_** _:_

_filename$_ |  String variable that defines the name of the serial (sequential) file to create.  
---|---  
_rec_size_ |  Maximum size of the data portion of the record. (Optional on most operating systems.) Numeric expression.  
_max_recs_ |  Estimated number of records the file is to contain. The default is no initial allocation of file space with no limit as to final size. (Not used in most operating system implementations.) Numeric expression.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

When you use the **SERIAL** directive to create a serial (sequential or flat) file, PxPlus creates a standard text data file in a format the operating system can access directly. The record size is "for documentation purposes only" on most operating systems. If you do specify the size, make it large enough to hold all the data fields written to the file for each record. If a file of the name you use already exists, PxPlus returns an Error #12: File does not exist (or already exists).

#### **Note:  
** WindX in PxPlus supports the use of this directive via the [WDX] or [LCL] tags; e.g. SERIAL "[WDX]somefile.ext". Non-PxPlus versions require you to encapsulate the command in an EXECUTE directive with a [WDX] tag (i.e. EXECUTE "[WDX]..."). See [**[WDX] Direct Action to Client Machine**](../command_tags/wdx.htm) or **[[LCL] Access to Users Local Machine](../command_tags/lcl.htm)**.

**_Record Access Mode and Binary Access Mode_**

In **_record access mode_** , a serial file is read a line or record at a time. Each line is determined by the presence of end-of-line-character(s), which are different based on the operating system. On UNIX (or similar operating systems), the end-of-line character is the line feed ($0A$). On Microsoft Windows, it is a carriage return followed by a line feed ($0D0A$).

#### **Note:**  
Starting with PxPlus 2020, UNIX/Linux systems will auto strip a $0D$ preceding the end-of-record line feed. This option can be controlled by the **['CR'](../parameters/cr.md)** system parameter.

Each **READ** or **READ RECORD** will only read 1 line. When using a standard **READ** directive **READ** , each line will be parsed by any field **SEP** s that exist within the line, and the corresponding variables within the **READ** will be set. If you use a **READ RECORD** , then the field **SEP** s will not be parsed, and the variable on the directive will receive the complete lines data.

When you **OPEN** a serial file in record access mode, there are 2 logical file pointers in the file. The **_read pointer_** starts at the top of the file, and the **_write pointer_** starts at the bottom; therefore, reads return the data starting from the first record whereas writes automatically append to the end of the file.

You can move both file pointers by issuing a **READ** or **WRITE** and supplying an **IND=** clause (IND=0 is the first record, IND=1 is second, etc.).

When a file is opened in **_binary access mode_** , you can read and write byte by byte with no regard for the data contents. The data on the file is logically parsed into records each of whose size is based on the **ISZ=** in an **OPEN** clause.

**_Example:_**

This sets binary access mode with the contents of the file being considered a series of 1-byte records:

> open (chan,isz=1)"filename"

This sets binary mode with a series of 512-byte records:

> open (chan,isz=512)

A **READ** or **READ RECORD** will read the **ISZ=** number of bytes and treat these as a record. Using an **IND=** moves the current file pointer to a specific record; therefore, when using **ISZ=1** , the **IND=** will take you to a specific byte offset within the file.

##  See Also

[**Labels/Logical Statement References**](../appendix/labels~logical_statement_references.md)  
[**'NN' No Line Numbers as References**](../parameters/nn.md)  
[**LOAD Read Program into Memory**](load.md)  
[**SAVE Write Program to File**](save.md)

##  Example

Both examples below create files whose structures are viewed by PxPlus as serial (or unknown type):

> 0010 serial "PRNTFL",,133

> 0010 serial A$+"-"+B$,100,50,err=1090
