# Extended Commands

**ERRORS Console Command** |  **_View Error History_**  
---|---  
  
## Format

**ERRORS**

## Description

Typing the **ERRORS** command will display a list of all the historical error records that are present in the system. The output will include the ERR value, program and line number, OS error code (RET), last file accessed and opened, last pathname referenced, and which internal module reported the error.

_(The ERRORS command was added in PxPlus v11.00.)_

## Example

->errors  
\--------------------------------------------------------------------------------  
Lvl: 1 Err:2 in:C:\pxplus\lib\\_udv Line:620  
RET:269 LFA:62 LFO:62 LastPath:C:\pvxsrc\beforeDel.dmp  
Reported internally in module:pvxopt.c (762)  
\--------------------------------------------------------------------------------  
Lvl: 2 Err:53 in:C:\pxplus\lib\\_finfo Line:910  
RET:269 LFA:62 LFO:62 LastPath:C:\pvxsrc\arpswd  
Reported internally in module:pvxkey.c (582)  
\--------------------------------------------------------------------------------  
Lvl: 3 Err:14 in:C:\pxplus\lib\\_udv Line:4020  
RET:269 LFA:62 LFO:62 LastPath:C:\pvxsrc\arcust.B00  
Reported internally in module:pvxsub.c (1200)  
\--------------------------------------------------------------------------------  
Lvl: 4 Err:2 in:C:\pxplus\lib\\_finfo Line:240  
RET:269 LFA:62 LFO:62 LastPath:C:\pvxsrc\arcust.B00  
Reported internally in module:pvxopt.c (762)  
\--------------------------------------------------------------------------------  
Lvl: 5 Err:2 in:C:\pxplus\lib\\_udv Line:620  
RET:269 LFA:62 LFO:62 LastPath:C:\pvxsrc\arcust.B00  
Reported internally in module:pvxopt.c (762)  
\--------------------------------------------------------------------------------  
Lvl: 6 Err:2 in:C:\pxplus\lib\\_udv Line:620  
RET:269 LFA:62 LFO:62 LastPath:C:\pvxsrc\afterdel.dmp  
Reported internally in module:pvxopt.c (762)  
\--------------------------------------------------------------------------------  
Lvl: 7 Err:14 in:C:\pxplus\lib\\_udv Line:4020  
RET:269 LFA:62 LFO:62 LastPath:C:\pvxsrc\abcd  
Reported internally in module:pvxsub.c (1200)  
\--------------------------------------------------------------------------------  
---
