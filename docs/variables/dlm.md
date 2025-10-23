# System Variables

**DLM** |  **_Return System Directory Delimiter_**  
---|---  
  
**_String System Variable_**

##  Contents

String, operating system's directory delimiter

##  Description

The **DLM** variable contains the operating system's directory delimiter (e.g. "/"... for UNIX, "\"... for Windows).

**_Example:_**

On a Windows PC:

> ?dlm  
>  \

#### **Helpful Tip:_  
_** Use **SEP=DLM** when reading directories (e.g. in list boxes) to have PxPlus append the operating system delimiter to sub-directory names.

##  Example

The following is a Tree View list box example:

> list_box 10,@(5,5,25,10),opt="e|",fmt="!diskette|!File|!File_open",sep=dlm  
>  F=1,D$="."  
>  NXTDIR:  
>  open (F)D$  
>  NXTFILE:  
>  read (F,end=ENDDIR)F$  
>  if F$(1,1)="." \  
>  then goto NXTFILE  
>  if mid(F$,-1)<>dlm \  
>  then list_box load 10,0,pth(F)+dlm+F$;  
>  goto NXTFILE  
>  D$=pth(F)+dlm+F$  
>  F++  
>  goto NXTDIR  
>  ENDDIR:  
>  close (F)  
>  F--  
>  if F>0 \  
>  then goto NXTFILE  
>  escape
