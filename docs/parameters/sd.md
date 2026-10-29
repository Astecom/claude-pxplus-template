# System Parameters

**'SD'** |  **_Subdirectory Slash_**  
---|---  
  
##  Description

Appends a trailing directory slash to the name of a subdirectory entry returned when reading a directory.

**_Walking a Directory Structure_**

When reading a directory, subdirectory entries can be identified if the system parameter **'SD'** is enabled. When **'SD'** is set, each subdirectory in a directory will have a trailing directory delimiter:

> '**\** ' _(backslash)_ for Windows  
>  '**/** ' _(forward slash)_ for UNIX/Linux

The following logic uses this to walk and process a directory structure:

> 0010 LET SV_SD=PRM('SD')  
>  0020 SET_PARAM 'SD'  
>  0030 LET D$=LWD ! Starting point  
>  0040 GOSUB DO_DIR  
>  0050 SET_PARAM 'SD'=SV_SD; END  
>  0060 !  
>  0070 DO_DIR:  
>  0080 PRINT 'BLUE',D$  
>  0090 SELECT F$ FROM D$ WHERE F$(1,1)<>"."  
>  0100 IF MID(F$,-1)<>DLM THEN GOSUB DO_FILE ELSE GOSUB DO_SUBDIR  
>  0110 NEXT RECORD  
>  0120 RETURN  
>  0130 !  
>  0140 DO_SUBDIR:  
>  0150 LET D1$=D$  
>  0160 LOCAL D$  
>  0170 LET D$=D1$+DLM+STP(F$,1,DLM)  
> 0180 GOSUB DO_DIR  
>  0190 RETURN  
>  0200 !  
>  0210 DO_FILE:  
> 0220 PRINT D$+DLM+F$  
>  0230 RETURN

The routine "***dirtree "** can also be used.

##  Default

**_Off_** \- No trailing slash is returned with the sub-directory entry.

## See Also

**[*DIRTREE](../utilities/dirtree.md)**

 

 

 
