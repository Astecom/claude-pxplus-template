# System Functions

**FFN( )** |  **_Find File Number_**  
---|---  
  
##  Format

**FFN(**_filename$_**[ FROM **_fileno_** __] [ FOR OBJECT | EXCEPT OBJECT ] [** ,**ERR=**_stmtref_**] )**

**_Where:_**

_filename$_ |  Name of the file to locate. String expression.  
---|---  
_fileno_ |  Lowest channel number to start checking.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Integer, channel/file number for open file or -1 if not open or accessible. In all cases, only files currently accessible will be returned.

##  Description

This function checks all open files for any reference to the _filename$_ specified. The function returns the file number as an integer if the file is open. If the file is not currently open on any channel, **FFN( )** returns a value of **-** 1.

The filename specified in **FFN( )** must match the name used to **OPEN** the file:

> open(1)"cstfile"  
>  print ffn("/pvx/nomads/cstfile") ! Incorrect  
>  -1  
>  print ffn("cstfile") ! Correct  
> 1

If a **FROM** _fileno_ option is specified, the search starts with the file number provided. By default, files that are open but reserved for use by an object will not be checked unless the **FFN** function is executed within the object that has the file reserved.

The **FOR OBJECT** or **EXCEPT OBJECT** clauses can be used within an object to alter this behavior. The **FOR OBJECT** will only return file numbers that are reserved for the current object whereas the **EXCEPT OBJECT** will return files that are generally accessible (i.e. not reserved exclusively by the current object). Use of the **FOR/EXCEPT OBJECT** clause when not in an object will generate an Error #95: Bad Object Identifier.

##  Example

Read a record from the CUSTDB file. If the file is not open, then open it on a global file number:

> 0100 let X=ffn("CUSTDB")  
>  0110 if X=-1 then let X=gfn; open (X)"CUSTDB"  
>  0120 read (X,key=CST_ID$,err=9000)iol=%CST_IOL$

**FFN( )** is case**-** sensitive (as is necessary in UNIX). To perform a case insensitive search for the filename, set either **'FL'** (lowercase) or **'FU'** (uppercase) parameters:

> open (5)"CSTfile" ! With neither 'FL' nor 'FU' set  
>  print ffn("CSTFILE")  
>  -1  
> set_param 'FL'  
>  print ffn("CSTFILE")  
>  5  
>  print ffn("cstFILE")  
>  5

Forward slashes may be used in place of backslashes:

> open (1)"\pvx\nomads\cstfile"  
>  print ffn("/pvx/nomads/cstfile")  
>  1

A leading **./** or **.\** is ignored by the **FFN( )** function:

> open (1)"./cstfile"  
>  print ffn("cstfile")  
>  1
