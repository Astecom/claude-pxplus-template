# Calling DLLs from PxPlus

**Working with DLLs in PxPlus - Examples** |  **__**  
---|---  
  
The following examples illustrate the use of the functions described earlier for working with Windows DLLs in PxPlus.

For examples of UNIX/Linux function calls, see **[Working with DLL Calls in UNIX/Linux](Working%20with%20DLL%20Calls%20in%20UNIX-Linux.md)**.

## Example 1

The following statement swaps the left and right mouse buttons:

> 0010 A=DLL("USER32.DLL","SwapMouseButton",1) ! Passes 32-bit value

An integer value of zero swaps the mouse buttons back.

## Example 2

Pointers are commonly used to pass string values, usually terminating with a null byte. This passes a pointer to a DLL to return the handle of a window with the title Notepad:

> 0030 A=DLL("USER32.DLL","FindWindowA",0,"Notepad"+$00$)

## Example 3

Sometimes a pointer refers to a region of memory or a structure to receive information from a DLL. You must pre-allocate a string variable to receive the data. The example below returns the window title, given the handle. The returned string terminates with a null byte ($00$):

> DIM X$(256)   
>  0030 A=DLL("USER32.DLL","GetWindowTextA",Hndl,X$,LEN(X$))

## Example 4

To pass a pointer to a number, define a two or four byte string and read the value after swapping the bytes, as follows:

> DIM X$(256)   
>  A=DLL("SOME.DLL","GetSomething",Hndl,X$)   
>  X=DEC($00$+SWP(X$)

## Example 5

Program DLLS1 in this example starts Notepad, locates the handle and closes the window handle:

> 0010 !dlls1 Start Notepad and Close It   
>  0020 INVOKE "NOTEPAD"   
>  0030 INPUT "Press enter after Notepad has started ",X$   
>  0040 LET HWND%=DLL("USER32.DLL","FindWindowA","Notepad"+$00$,0)   
>  0050 IF HWND%<=0 THEN PRINT "Notepad not found!"; STOP   
>  0060 LET WM_CLOSE=DEC($0010$),WPARAM%=0,LPARAM=0   
>  0070 LET X=DLL("USER32.DLL","SendMessageA",HWND%,   
>  0070:INT(WM_CLOSE),WPARAM%,LPARAM) 

## Example 6

The following example illustrates inter-task communication. The program DLLS3 starts a second PVXWIN32 session, finds its Window handle, sends CTL values 101 through 103, defines an atom (pointing to a string variable in a global string table) and passes the atom reference to the second session. Then it waits for the second session to terminate.

> 1340 X=DLL("USER32.DLL","SendMessageA",HWND%,INT(WM_USER),WPARAM%,LPARAM)   
>   
>  00010 ! DLLS3 - Inter-task communication - Send CTLS & a string   
>  00020 MAX_COL=MXC(0)+1,MAX_ROW=MXL(0)+1   
>  00030 PRINT 'SHOW'(-1),'DIALOGUE'(0,0,MAX_COL,INT(MAX_ROW/2)-1, \ "Inter-task com0030:munication",'MODE'($000F$)+'CS'),   
>  00040 IF ARG(1,ERR=*NEXT)="Receiver" \ THEN GOTO RECEIVER   
>  01000 ! !^1000   
>  01010 LOOP=0   
>  01100 ! !^100 - Find Receiver & start if necessary   
>  01110 IF LOOP++>1 \ THEN PRINT "Cannot start/find the Receiver!"; STOP   
>  01120 HWND%=DLL("USER32.DLL","FindWindowA",0,"PVXWIN32 - Receiver"+$00$)   
>  01130 IF HWND%>0 \ THEN GOTO 1200   
>  01140 INVOKE ARG(0)+" "+PGN+" -ARG Receiver"   
>  01150 WAIT 1   
>  01160 GOTO 1100   
>  01200 ! !^100 - Send CTL 101 to 103 to Receiver   
>  01210 WM_USER=DEC($0400$),WPARAM%=0,LPARAM=0   
>  01220 FOR WPARAM%=101 TO 103   
>  01230 PRINT "Sending CTL value of",WPARAM%," to Receiver"   
>  01240 X=DLL("USER32.DLL","SendMessageA",HWND%,INT(WM_USER),WPARAM%,LPARAM)   
>  01250 NEXT   
>  01300 ! !^100 - Send CTL 104 & the address of a String   
>  01310 WM_USER=DEC($0400$),WPARAM%=104,LPARAM=0   
>  01320 ATOM$="Message to Send",LPARAM=DLL("KERNEL32.DLL","GlobalAddAtomA", \ ATOM$+$00$)   
>  01330 PRINT " Sending CTL Value ",WPARAM%,"to Receiver with message:", \ 'BR',ATOM$,'ER'   
>  01340 X=DLL("USER32.DLL","SendMessageA",HWND%,INT(WM_USER),WPARAM%,LPARAM)   
>  02000 ! !^1000   
>  02010 LOOP=0; PRINT "Waiting for Receiver to shutdown",   
>  02020 HWND%=DLL("USER32.DLL","FindWindowA",0,"PVXWIN32 - Receiver"+$00$)   
>  02030 IF HWND%<=0 \ THEN GOTO 2100   
>  02040 PRINT ".",; IF LOOP++<30 \ THEN WAIT 1; GOTO 2020   
>  02100 ! !^100   
>  02110 X=DLL("KERNEL32.DLL","GlobalDeleteAtom")   
>  02120 PRINT 'DROP'(-1),'SHOW'(2),   
>  02130 STOP   
>  03000 ! !^1000 - Receive CTL values from Sender   
>  03010 RECEIVER:   
>  03020 PRINT 'CAPTION'("PVXWIN32 - Receiver"),'MOVE'(0,INT(MAX_ROW/2)+1),   
>  03030 INPUT "Press F4 when finished ",*; PRINT @(0),'BR',"Received CTL=",CTL,'ER','CL'   
>  03040 IF CTL=4 \ THEN GOTO 3200   
>  03050 IF CTL<>104 \ THEN GOTO 3030   
>  03060 ATOM=TCB(81) ! Atom identifier   
>  03070 DIM ATOM$(512)   
>  03080 X=DLL("KERNEL32.DLL","GlobalGetAtomNameA",ATOM,ATOM$,LEN(ATOM$))   
>  03090 X=DLL("KERNEL32.DLL","GlobalDeleteAtom") ! Release Atom   
>  03100 X=POS($00$=ATOM$); IF X \ THEN ATOM$=ATOM$(1,X-1)   
>  03110 PRINT "Received: ",'BR',ATOM$,'ER'   
>  03120 GOTO 3030   
>  03200 ! !^100   
>  03210 STOP
