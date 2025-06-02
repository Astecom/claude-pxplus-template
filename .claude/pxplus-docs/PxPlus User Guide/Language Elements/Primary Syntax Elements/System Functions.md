# Primary Syntax Elements

**System Functions** |  **__**  
---|---  
  
System functions are numeric or string operations that process values and yield results within a program statement. PxPlus system functions consist of a three-character name, followed by arguments in _parentheses_ :

**_Example:_**

> and(A$,B$,err=0300)

Below is a list of some commonly used system functions, which can be applied to any Business Basic expression. For a list of all system functions, see **[System Functions](../../../functions.md)**.

**[ASC( )](../../../functions/asc.md)** |  Returns the internal numeric value of a given ASCII character.  
---|---  
**[CHG( )](../../../functions/chg.md)** |  Returns only the variables within the given argument that have changed since the last**CHG( )**.  
**[CHR( )](../../../functions/chr.md)** |  Returns an ASCII character for a given numeric value.  
**[DTE( )](../../../functions/dte.md)** |  Converts a date argument from Julian form to a formatted string.  
**[FFN( )](../../../functions/ffn.md)** |  Checks all open files for a reference to specified file name and returns the file number or -1 if the file is not open.  
**[FIB( )](../../../functions/fib.md)** |  Returns the file information block descriptor for the file specified.  
**[FID( )](../../../functions/fid.md)** |  Returns the file information descriptor for the file specified.  
**[FIN( )](../../../functions/fin.md)** |  Returns detailed physical aspects of the file specified.  
**[JUL( )](../../../functions/jul.md)** |  Converts a date argument from year, month, day values to Julian form; this defaults to the current date if no value is supplied.  
**[NOT( )](../../../functions/not.md)** |  Returns the inverted value of a string or numeric (i.e. with all ON bits turned OFF and vice versa).  
**[NUL( )](../../../functions/fncnul.md)** |  Tests argument and returns either 1 (_true_) or 0 (_false_) code for null string.  
**[NUM( )](../../../functions/num.md)** |  Converts a string containing numeric characters into a corresponding real numeric value (e.g. num("1.34") yields 1.34).  
**[PTH( )](../../../functions/pth.md)** |  Returns the absolute pathname for a given channel or logical file number.  
**[STK( )](../../../functions/stk.md)** |  Returns the line number/program name executing at the level specified.  
**[STR( )](../../../functions/str.md)** |  Converts a numeric (or string) argument into a formatted string using an optional masking argument (e.g. str(5*6:"000") yields "030").  
**[TCB( )](../../../functions/tcb.md)** |  Returns value regarding task information, activation/licensing the operating system.  
  
## Examples

The **[PRINT](../../../directives/print.md)** directive (or **?** shortcut) displays system function results:

> print asc ("A")  
>  65  
>   
>  print chr (65)   
>  A  
>   
>  N=num("65");  
>  print N+1  
>  66  
>   
>  STR$="HELLO "+str(N);  
>  print STR$  
>  HELLO 65  
>   
>  ? dte(0)  
>  11/20/08  
>   
>  DATE$=dte(0:"%Dl %Ml %D/%Y");  
>  print DATE$  
>  Thursday November 20/2008  
>   
>  ?jul(day)  
>  14203  
>  DATE$=dte(jul(day):"%Y/%M/%D");  
>  print DATE$  
>  2008/11/20

Code sample using **NUL( )** and**NOT( )** :

> 0010 input "ENTER YOUR NAME: ",N$  
>  0020 if nul(N$) then print "YOUR NAME IS REQUIRED!"; goto 0010  
>  0040 input "ADDRESS: ",A$  
>  0050 if not(nul(A$)) then goto DONE else print "ADDRESS PLEASE!"; goto 0040  
>  0060 DONE: print "BYE"  
>  run  
>  ENTER YOUR NAME:  
>  YOUR NAME IS REQUIRED!  
>  ENTER YOUR NAME: Anthony  
>  ADDRESS:  
>  ADDRESS PLEASE!  
>  ADDRESS: 45B West Wilmot Avenue  
>  BYE

Code sample using **CHG( )** :

> print chg("X,Y,A$,B$")  
>  X=666  
>  A$="HELLO WORLD"  
>  print chg("X,Y,A$,B$")  
>  run  
>  X,A$

Code sample using **FFN( )** :

> 0010 let X=ffn(".") ! FFN returns channel number if the file is open  
>  0020 if X=-1 then let X=hfn; open (X)"."! If -1 then file is not open  
>  0030 read record (X,end=DONE)R$  
>  0040 print R$; goto 0030  
>  0050 DONE: print "ALL DONE, BYE-BYE!"  
>  0060 end run  
>  libeay32.dll  
>  libharu.dll  
>  license.txt  
>  _~snip~_  
>  pvxzlib1.dll  
>  ssleay32.dll  
> windx  
>  xerces-c_2_8.dll  
>  ALL DONE, BYE-BYE!

Code sample using **FIN( )** :

> GET_FILE_INFO:  
>  FILE$="."  
>  open (1)FILE$;  
>  X$=fin(1)  
>  TIME_STAMP$=X$(5,4),T=dec($00$+TIME_STAMP$),D=int(T/86400),T=T-D*86400  
>  SV_BY=prm('BY');  
>  set_param 'BY'=1970;  
>  TIME_STAMP$=" on "+dte(D,T/3600:"%Ws, %Ms %D %Yl at %hz:%mz:%sz");  
>  set_param 'BY'=SV_BY  
>  print FILE$+" last modified: "+TIME_STAMP$  
>  close (1)  
>  run  
>  last modified: on Thu, Oct 9 2008 at 08:36:36
