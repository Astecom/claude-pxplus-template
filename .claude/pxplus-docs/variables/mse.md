# System Variables

**MSE** |  **_Mouse State_**  
---|---  
  
**_String System Variable_**

##  Contents

String, current state of mouse

##  Description

The **MSE** variable contains a 32-byte string that describes the current state of the mouse. This table shows the positions of all mouse attributes represented in the **MSE** string:

**MSE String** |  **Description**  
---|---  
(1,1) |  Current state: |  $FF$ |  Mouse inactive/unavailable (e.g. terminal, UNIX/Linux console)  
---|---  
$00$ |  Mouse present - no buttons pushed  
$01$ |  Left button down  
$02$ |  Right button down  
$03$ |  Both buttons down  
(2,1) |  Current mouse column in binary  
(3,1) |  Current mouse line in binary  
(4,2) |  Current mouse X (column) position in binary  
(6,2) |  Current mouse Y (line) position in binary  
(8,1) |  Absolute column number  
(9,1) |  Absolute row number  
(10,1) |  Standard character width  
(11,1) |  Standard character height  
(12,1) |  Width of scroll box on standard scroll bar  
(13,1) |  Height of scroll box on standard scroll bar  
(14,2) |  Mouse X (column) position relative to current window in binary  
(16,2) |  Mouse Y (line) position relative to current window in binary  
(18,2) |  Current control object with focus  
(20,2) |  Last control object with focus, relative to the current window  
(22,1) |  WindX/JavX revision level from $00$ to $FF$ ($FF$ for no Thin-Client)  
(23,2) |  CTL value for context-sensitive help  
(25,2) |  Last control object to lose focus, relative to the current window  
(27,2) |  Maximum X (column) coordinates of the screen

#### **Note:**  
The Maximum/Minimum values represent the size of the useable desktop, not the actual screen size. The region occupied by the Windows task bar is not included in the screen size.  
  
(29,2) |  Maximum Y (line) coordinates of the screen

#### **Note:**  
The Maximum/Minimum values represent the size of the useable desktop, not the actual screen size. The region occupied by the Windows task bar is not included in the screen size.  
  
(31,1) |  Returns current window state. Values correspond to the **['SHOW'](../mnemonics/show.md)** mnemonic. **DEC(MID(MSE,31,1)) Values** : -1 Hidden  
0 Minimized  
1 Normal  
2 Maximized  
(32,1) |  Returns either W for WindX or J for JavX ($00$ for no Thin-Client)  
  
##  Example

The following logic can be used to determine if WindX is running by checking its version number:

> if mid(mse,22,1)>$00$ and mid(mse,22,1)<$FF$ \  
>  then %WDX$="[WDX]"

To get the maximum screen size in lines and columns:

> X$=mse  
>  XCHAR=dec($00$+X$(10,1))  
>  YCHAR=dec($00$+X$(11,1))  
>  MAX_WIDE=int(dec(X$(27,2))/XCHAR)  
>  MAX_HIGH=int(dec(X$(29,2))/YCHAR)
