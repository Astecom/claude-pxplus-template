# Data Files

**Serial Files** |  **__**  
---|---  
  
Serial files are native OS flat files containing one or more records of variable length. Normal uses for serial files include holding print images or reports, or for interchange with other operating system applications. **[READ](../../../directives/read.md)**, **[WRITE](../../../directives/write.md)**, **[PRINT](../../../directives/print.md)** and **[INPUT](../../../directives/input.md)** directives may be used on a serial file. See **[File Processing Directives](../Processing%20Data%20Files/File%20Processing%20Directives.md)**.

The **[SERIAL](../../../directives/serial.md)** directive is used to create a serial file:

> **SERIAL** _filename$_ [, _max_recs_ [, _rec_size_ ]]

**_Where_** _:_

_filename$_ |  String variable that defines the name of the serial (sequential) file to create.  
---|---  
_max_recs_ |  Estimated number of records the file is to contain. The default is no initial allocation of file space, with no limit as to final size. (Not used in most operating system implementations.) Numeric expression.  
_rec_size_ |  Maximum size of the data portion of the record. (Optional on most operating systems.) Numeric expression.  
  
**_Example:_**

> SERIAL "filename"

On a serial file, the **[READ](../../../directives/read.md)** directive reads the file one record at a time, from beginning to end. **[WRITE](../../../directives/write.md)** appends data to the end of the file. Any attempt to**READ** after a**WRITE** without having either closed the file or repositioned the pointer via the**IND=** option will result in an Error #2: END-OF-FILE on read or File full on write. A serial file must be locked in order to **WRITE**. The **['LU'](../../../parameters/lu.md)** parameter can be used to eliminate the need to lock a serial file before writing to it.

**_Example:_**

> 0010 OPEN (2) "SERFIL" ! Open SERFIL as 2   
>  0020 READ (2,END=1000) NAM$, ADR$ ! Read next   
>  0030 PRINT NAM$, ADR$   
>  0040 GOTO 20   
>  1000 CLOSE (2)   
>  1010 END

The system provides an internal key for a serial file that may be used to reference records. This internal key is 4 characters long and contains the actual address of the record in binary.

When issuing a**WRITE** to a serial file, it must first be locked. The position of the last write prior to the file being closed marks the End-of-File.

#### **Note:**  
The end of line for a serial file is typically OS-dependent and is normally a Hex $0A$ on UNIX/Linux systems and Hex $0D0A$ on Windows.

In addition, when processing a typical serial file, a **WRITE** directive will append a Hex $8A$ field separator to each record, while the **[PRINT](../../../directives/print.md)** directive will not.
