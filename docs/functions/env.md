# System Functions

**ENV( )** |  **_Get Environment Values_**  
---|---  
  
##  Formats

1. |  _Using Numeric ID_ _:_ |  **ENV(**_env_index_[,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Using String ID_ _:_ |  **ENV(**_env_name_ _$_[,**ERR=**_stmtref_ _]_**)**  
  
**_Where:_**

_env_index_ |  Index of the environment variable you wish to have returned.  
---|---  
_env_name_ _$_ |  Name of the environment variable you wish to have returned.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Value of an environment variable.

##  Description

Use the **ENV( )** function to obtain the value of an environment variable (specified numerically or in a string) from the externally defined environment table. Environment variables are typically external to PxPlus and are used by the operating system and other utilities for defining the user's environment.

##  Format 1

**_Using Numeric ID_**

**ENV(**_env_index_[,**ERR=**_stmtref_]**)**

If _env_index_ exceeds the size of the environment table, the system returns Error #41: Invalid integer encountered (range error or non-integer); otherwise, **ENV( )** returns the current value of the given environment variable as a "name=value" pair.

The following program displays all the environment variables:

> 0010 let I=1  
>  0020 let X$=env(I,err=0050)  
>  0030 print X$  
>  0040 let I=I+1; goto 0020  
>  0050 stop

> ->run  
>  TEMP=C:\WINDOWS\TEMP  
>  PROMPT=$p$g  
> winbootdir=C:\WINDOWS  
>  COMSPEC=C:\WINDOWS\COMMAND.COM  
>  CLASSPATH=.;c:\COREL\OFFICE7\SHARED\BARISTA;c:\COREL\OFFICE7\SHARED\TRUEDOC  
>  LD_LIBRARY_PATH=c:\COREL\OFFICE7\SHARED\TRUEDOC\BIN  
>  PATH=C:\WINDOWS;C:\WINDOWS\COMMAND;C:\COREL\OFFICE7\SHARED\TRUEDOC\BIN;C:\SOFTWARE\WP60;...  
>  CMDLINE=WIN  
> windir=C:\WINDOWS  
>  BLASTER=A220 I5 D1 H5 P330 T6

_(As of PxPlus v10.10,**ENV(-1)** will return the name of the product: PxPlus-Base, PxPlus-Pro, PxPlus-eComm or PxBasic.)  
(As of PxPlus 2016 Update 0003, **ENV(-2)** will return Copyright information in the following format: Copyright 2005-2016, PVX Plus Technologies Ltd.)_

##  Format 2

**_Using String ID_**

**ENV(**_env_name_ _$_[,**ERR=**_stmtref_ _]_**)**

If _env_name_ _$_ does not match an environment variable, the **ENV( )** function returns a null ("") string; otherwise, the function returns the current value of the given environment variable.

The following program tests and displays the environment variable TERM:

> T_TYP$=env("TERM")  
>  if T_TYP$="" \  
>  then print "No terminal defined";  
>  stop  
>  print "You are using a "+T_TYP$+" terminal"
