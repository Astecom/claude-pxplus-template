# System Variables  
  
**UID** |  **_Current User ID_**  
---|---  
  
**_String System Variable_**** __**

##  Contents

String, current User ID

##  Description

The **UID** variable contains the current User ID. On systems without User registration, it returns the value of the environment variable **USER** or the Network User ID. The **UID** and **WHO** variables are identical.

## See Also

**[USER Environment Variable](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Environment%20Variables.htm#Mark7)**  
**[WHO Current User ID](who.md)**

##  Example

0010 ! START_UP  
0020 open (1)"MYCONFIG"  
0030 read (1,key=who,err=0050)X$  
0040 setfid X$  
0050 close (1)  
  
?uid  
SMITHJ
