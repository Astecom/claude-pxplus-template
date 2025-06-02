# Directives 

**CLOSE** |  **_Close File_**  
---|---  
  
##  Format

**CLOSE** {**(*)** | **(**_chan_**)**}[,**(**_chan_**)**...[,**ERR=**_stmtref_])]

**_Where:_**

***** |  Asterisk denotes "all **OPEN** local channels". CLOSE (*) resets all files then closes everything but channel 0 (unless the **['WK'](../parameters/wk.md) **parameter is set). This closes all open windows and purges graphical controls from the system.  
---|---  
_chan_ |  Channel or logical file number. 

#### **Note:  
** If running with the [**'FF'**](../parameters/ff.md) system parameter (FID Format) set to 2 (Thoroughbred), closing channel 0 will be treated the same as CLOSE (*).  
  
_stmtref_ |  Program line number or statement label to which to transfer control.   
  
##  Description

Use the **CLOSE** directive to close a given logical file number. The memory used for buffers and control information is returned to the system. Once closed, the file (channel) number can be reused for a different file. 

#### **Note:**  
A **CLOSE** directive will delete a memory file. See [***MEMORY* Create and Use Memory File**](../file_handling/~memory~.md). When you **CLOSE** (_chan_), PxPlus returns all memory that was occupied by the memory file to the system.

The **ERR=** branch will be taken should an error occur during the close. If the application tries to close an unopened file, an error will only be generated if an **ERR=** branch is provided. If an **ERR=** branch is not provided, the close is assumed to have occurred previously and no error is generated.

#### **Note:**  
When executed within an object (in **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)**), **CLOSE (*)** will close any standard local files as well as files owned by the object.

##  See Also

[**OPEN Open a File for Processing**](open.md)  
[**BEGIN Reset Files and Variables**](begin.md)  
[**START Restart Session**](start.md)  
[**'WK' Keep Window**](../parameters/wk.md)

##  Example

The following will open channel 30, print to it and then close it:

> open (30)"PRINT_DEVICE"  
>  print (30)  
>  close (30)

Assuming the following logic:

> CSTFILE=hfn;  
>  open (CSTFILE)"CSTFILE"  
>  PRDFILE=unt;  
>  open (PRDFILE)"PRDFILE"  
>  ORDFILE=7;  
>  open (ORDFILE)"ORDFILE"  
>  print CSTFILE,PRDFILE,ORDFILE  
>  stop  
>   
>  ->run  
>  63 5 7

Either of the two statements below will close channels 63, 5 and 7. The second statement closes all other open local channels as well:

> close (CSTFILE),(PRDFILE),(ORDFILE) ! Just closes channels 63,5,7  
>  close (*) ! Closes ALL open file channels (i.e. 63,5,7 and 30)

Thoroughbred is a registered trademark of Thoroughbred Software International Inc.
