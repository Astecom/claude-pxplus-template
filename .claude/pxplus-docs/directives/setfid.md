# Directives 

**SETFID** |  **_Set FID( ) Definition_**  
---|---  
  
##  Format

**SETFID [(**_chan_**)]**_fid_def_ _$_  
  
**_Where:_**

_chan_ |  Optional channel or logical file number.  
---|---  
_fid_def_ _$_ |  String value to define **FID(0)**. Its maximum length is 12 characters. String expression.  
  
##  Description

Use the **SETFID** directive to make dynamic changes in the value returned by the **FID( )** function. Any open channel may have its FID value changed. If _chan_ is not provided, it defaults to affect channel 0. This is most commonly used to change the FID value of channel 0 (i.e. the terminal) for legacy applications that require unique FID values.

By default, PxPlus uses the value of the operating system environment variable **[PVXFID0](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Environment%20Variables.htm#Mark16)** as the value for **FID(0)**. If this environment variable is not defined, PxPlus will dynamically assign a value starting at T0 (T _zero_).

##  See Also

[**FID( ) Return File Information Descriptor**](../functions/fid.md)

##  Example

In this example, the value in the WHO system variable is something like "SMITHJ":

> 0010 ! START_UP  
>  0020 open (1)"MYCONFIG"  
>  0030 read (1,key=who,err=0050)X$  
>  0040 setfid X$  
>  0050 close (1)

The following example defines a unique session and terminal FID in a Windows environment, given a directory called C:\FIDS with the files "T5", "T6", "T7", "T8", and so on. (This could also be done with terminal IDs of 3 characters or more.) In a START_UP program:

> 0010 open (1)"C:\FIDS"  
>  0020 read (1,end=1000)ID$  
>  0030 if ID$(1,1)="." goto 0020 ! Skip "." and ".."  
>  0040 %FID_FILE=gfn  
>  0050 open lock (%FID_FILE,tim=0,err=0020)pth(1)+dlm+ID$  
>  0060 setfid ID$  
>  0070 close (1)  
>  ....   
> 1000 msgbox "Sorry. There are no free FIDs for this station."  
> 1010 quit

This logic will open and leave open a file pertaining to the station FID. Once the task ends, the file will be available for another session.
