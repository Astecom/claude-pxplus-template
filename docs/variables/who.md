# System Variables

**WHO** |  **_Current User ID_**  
---|---  
  
**_String System Variable_**

##  Contents

String, current User ID

##  Description

The **WHO** variable contains the current User ID. On systems without User registration, it returns the value of the environment variable **USER** or the Network User ID.

Normally, the value returned by the **UID** and **WHO** variables are identical; however, when running MAS90 emulation, the value in **WHO** returns the computer network name, which is what is returned in the **NID** system variable.

## See Also

**[USER Environment Variable](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Environment%20Variables.htm#Mark7)**  
**[UID Current User ID](uid.md)**  
**[NID Network or Network Node ID](nid.md)**

##  Example

0010 ! START_UP  
0020 open (1)"MYCONFIG"  
0030 read (1,key=who,err=0050)X$  
0040 setfid X$  
0050 close (1)  
  
?who  
SMITHJ
