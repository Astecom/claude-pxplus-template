# Special File Handling

***STDIO*** |  **_Windows Standard IO Access_**  
---|---  
  
##  Format

**OPEN** (_chan_**[,**_option_**]**)"***STDIO*** "  
  
_or  
_  
**SELECT ... FROM "*STDIO*"**

**_Where:_**

_chan_ |  Channel or logical file number.  
---|---  
_options_ |  File options used to access '**stdin** '/'**stdout** ': |  **BSZ=**_num_ |  Block size  
---|---  
**ERR=**_stmtref_ |  Error transfer  
**IOL=**_iolref_ |  Default IOList  
**OPT=**_char$_ |  File open options  
**REC=**_name$_ |  Record prefix (**REC=VIS(**_name$_**)** can also be used)  
_iolist_ |  The _iolist_ __ iolist to be applied to **stdin**.  
***STDIO*** |  Logical file name (not case sensitive).  
  
##  Description

The ***STDIO*** logical file can be used in the Windows environment to gain access to the logical '**stdin** ' and '**stdout** ' files.

Normally, when running on Windows, there is no **stdin** or **stdout** attached to the PxPlus process. However, when launched from the Command line with piped input or output, the process will have a **stdin** or standard output file assigned by the operating system. As all IO to channel zero is effectively routed to the Windows screen, the application will need to specifically open ***STDIO*** in order to access these standard IO assignments.

When reading from **stdin** , the input is considered a system device; thus, you should issue a READ to accept individual lines or READ RECORD to read a specific length of data.

_(*STDIO* functionality was added in PxPlus v7.00.)_

## Example

**_Reading Standard Input (stdin):_**

> dir a* | pxplus prog01

In the program "prog01", you could then read the output of the DIR command:

> open (1)"*stdio*"  
>  while 1  
>  read (1,err=*break)R$  
>  print R$,  
>  wend  
> msgbox "all done"

**_Writing to Standard Output (stdout):_**

The following will output a sorted directory listing piping through the Windows sort command:

> pxplus -mn prog02 | sort

Where the program "prog02" contains:

> set_param 'SD' ! Include directory delimiter  
>  open (1)"*stdio*"  
>  select F$ from "." where mid(F$,1,1)<>"."  
>  print (1)F$  
>  next record  
>  close (1)

#### **Note:**  
If neither **stdin** or **stdout** are allocated to the process, the OPEN will fail with file not found (Error 12).
