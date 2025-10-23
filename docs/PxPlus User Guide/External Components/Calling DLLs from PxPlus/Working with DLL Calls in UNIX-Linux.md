# Calling DLLs from PxPlus

**Working with DLL Calls in UNIX/Linux** |  **__**  
---|---  
  
The function**TCB(196)** will return 1 to indicate UNIX/Linux support. One of the primary conditions for this feature is that the libraries accessed must be shared. This is demonstrated by the suffix ".so".

By typing "info libc" at a shell prompt on a Linux machine, the "info" command will return all the information held in the library. Choose the feature within the library you wish to use and then access the library.

**_Example:_**

In the following example, the getpwnam command is used from the lib.so.6 on a Red Hat system. When the main pages for getpwnam are examined, the format is as follows:

> Struct passwd *getpwnam(const char *name);

The result is a pointer to a structure containing the fields of the record in the password database. The structure is as follows:

Char |  *pw_name |  User name  
---|---|---  
Char |  *pw_passwd |  User password  
Uid_t |  pw_uid |  User ID number  
Gid_t |  pw_gid |  User Group number  
Char |  *pw_gecos |  Real Name  
Char |  *pw_dir |  Home Directory  
Char |  *pw_shell |  Shell Command  
  
The*****_asterisk_ marks the field as a pointer.

> 0010 ! ACCESS_LIBRARY   
>  0015 INPUT "Enter user name ",NAME$   
>  0017 PW_GID=0,PW_UID=0   
>  0020 LIBRARY$="libc.so.6" ! Shared object library on Red Hat Linux   
>  0030 LET SOME_VARIABLE=DLL(ADDR LIBRARY$,ERR=*NEXT);GOTO 50   
>  The purpose of the ADDR is hold the library in memory.   
> 0040 ! Could not open the library.  
>  0045 GOTO WRAP_UP   
>  0050 LET STS_OF_CALL=DLL(FIND SOME_VARIABLE,"getpwnam",ERR=*NEXT);GOTO 70

This statement finds the "C" library call in the library opened with the handle of SOME_VARIABLE.

> 0060 GOTO WRAP_UP   
>  0070 DIM X_NAME$(64,$00$);LET MID(X_NAME$,1,LEN(NAME$)=NAME$   
>  0080 LET X=DLL(*,STS_OF_CALL,X_NAME$)   
>  0090 IF X=0 THEN LET NAME$=NAME$+" INVALID";GOTO WRAP_UP

After looking at the structure of the return value, the memory will need to be assigned.

> 0100 LET X$=MEM(X,(5*TCB(301))+(2*TCB(306)))

This returns 5 pointers and two integers.

> 110 PW_UID=DEC($00$+SWP(X$(TCB(301)+TCB(301)+1,TCB(306))))

The decimal value of the swapped memory location represents the User ID number. The**TCB(301)** is the pointer size, and the**TCB(306)** is the integer size made available because of 64-bit OS.

> 120 PW_GID=DEC($00$+SWP(X$(TCB(301)+TCB(301)+TCB(306)+1,TCB(306))))   
>  150 WRAP_UP: ! WRAP UP   
>  160 PRINT NAME$,STR(PW_UID:"###"),STR(PW_GID:"###")
