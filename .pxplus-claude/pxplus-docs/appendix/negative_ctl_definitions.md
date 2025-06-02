# Language Reference - Appendix 

**Negative CTL Definitions** |   
---|---  
  
PxPlus normally handles all negative CTL values internally. Values are used as follows

-1 _to_ -999 |  Used by the input handler to save current instructions, internally call **"*CONTROL"**  
---|---  
-1000 _to_ -1999 |  For input editing control keys and mouse interaction  
-2000 _to_ -2255 |  For composite character generation  
  
##  Table of Negative CTL Values

The negative CTL value and their assigned values are listed below.

#### **Important Note:**  
CTL values less than -2999 or greater than 32001 are reserved **_for Internal Use Only_** ; therefore, **_do not_** use CTL values in these ranges.

**CTL Value** |  **Assigned Actions**  
---|---  
-1 |  Invoke utility sub-menu  
-2 |  Invoke screen print utility  
-3 |  Reserved  
-4 |  Display session statistics  
-5 |  Field help  
-6 |  Field query  
-7  |  Program help  
-8 |  Reserved for future use  
-9 |  Reserved for future use  
-10 _to_ -999 |  Save current instruction and screen, then call user program $CTL-_nnn_ (-_nnn_ = CTL value). Upon exit, reset screen and re-execute saved instruction.  
-1000 |  Ignore key  
-1001 |  Generate Escape/Break  
-1002 |  Clear input buffer and blank on screen  
-1003 |  Backspace and delete prior character  
-1004 |  Backup one position to left  
-1005 |  Forward one position to right  
-1006 |  Insert a blank at current position  
-1007 |  Delete character at current position  
-1008 |  Skip to next blank character  
-1009 |  Toggle Insert mode  
-1010 |  Return to start of input (Home)  
-1011 |  Up a line  
-1012 |  Down a line  
-1013  |  Page up  
-1014 |  Page down  
-1015 |  Tab forward 10 spaces  
-1016 |  Tab backward 10 spaces  
-1017 |  Return to start end re-input  
-1018 |  Go to end of input  
-1019 |  Shift screen to the left  
-1020 |  Shift screen to the right  
-1021 |  Advance to start of next word  
-1022 |  Go back to start of previous word  
-1023 |  Clear from cursor to end of input  
-1024 |  Restore input line to original value  
-1025 |  Go Home and reset default  
-1026 _to_ -1079 |  Reserved for future use  
-1080 |  **LEFT-MOUSE-CLICK-DOWN/** drag  
-1081 |  **LEFT-MOUSE-CLICK-UP**  
-1082 |  **RIGHT-MOUSE-CLICK-DOWN** /drag  
-1083 |  **RIGHT-MOUSE-CLICK-UP**  
-1084 _to_ -1090 |  Reserved for future use  
-1091 |  Mouse wheel rolled up  
-1092 |  Mouse wheel rolled down  
-1093 _to_ -1098 |  Reserved for future use  
-1099 |  Reject keystroke and ring bell  
-1100 |  Reserved for future use  
-1101  |  Lost focus  
-1102 |  Received focus  
-1103 |  Display cursor  
-1104  |  Focus has changed  
-1105 |  Window resized  
-1106 |  Window has been minimized  
-1107 |  Window has been restored  
-1108 |  Window resized maximized  
-1109 |  Reserved for **[SignalCaptionChg](../mnemonics/option.htm#signalcaptionchg)** device option in NOMADS _(added in PxPlus 2017)_  
-1110 _to_ -1199 |  Reserved for future use  
-1200 |  Context-sensitive help  
-1304 _to_ -1309 |  Reserved for future use  
-1310 |  End trace  
-1311 |  End command window  
-1312 |  End watch window  
-1313 |  End breakpoint window  
-1314 _to_ -1399 |  Reserved for future use  
-1401 _to_ -1403 |  **_Message Bar Region_ LEFT-MOUSE-CLICK _Events  
  
_** PxPlus returns CTL values when the user performs a **LEFT-MOUSE-CLICK** on a segment in the message bar region. Each of the four possible segments of the message bar region has been assigned a different negative CTL value. The event is reported on the button up only. |  1st area (segment zero) |  Returns CTL= -1400  
---|---  
2nd area (segment 1) |  Returns CTL= -1401  
3rd area (segment 2) |  Returns CTL= -1402  
4th area (segment 3) |  Returns CTL= -1403  
  
See [**'MESSAGE'**](../mnemonics/message.md) mnemonic.  
  
-1404 _to_ -1408 |  Reserved for future use  
-1409 |  **_Toolbar_ LEFT-MOUSE-CLICK-UP**  
|  **MOUSE-CLICK** CTL events are now supported in the Toolbar bar region. The event is reported on the button up only.  
|  **RIGHT-MOUSE-CLICK-UP** returns CTL= -1409  
\--1410 _to_ -1413 |  **_Message Bar Region_** **RIGHT-MOUSE-CLICK _Events  
  
_** PxPlus returns CTL values when the user performs a **RIGHT-MOUSE-CLICK** on a segment in the Message bar region. Each of the four possible segments of the message bar region has been assigned a different negative CTL value. The event is reported on the button up only. |  1st area (segment zero) |  Returns CTL= -1410  
---|---  
2nd area (segment 1) |  Returns CTL= -1411  
3rd area (segment 2) |  Returns CTL= -1412  
4th area (segment 3) |  Returns CTL= -1413  
  
See [**'MESSAGE'**](../mnemonics/message.md) mnemonic.  
  
-1414 _to_ -1418 |  Reserved for future use  
-1419 |  **_Toolbar_ MOUSE-CLICK _Events  
  
_ MOUSE-CLICK** CTL events are now supported in the Toolbar bar region. The event is reported on the button up only.  
  
**LEFT-MOUSE-CLICK-UP** returns CTL= -1409  
**  
RIGHT-MOUSE-CLICK-UP** returns CTL= -1419  
-1420 _to_ -1801 |  Reserved for future use  
-1802 _to_ -1803 |  **RIGHT-MOUSE-CLICK** _Change.__RIGHT-MOUSE-CLICK no longer returns CTL=4._ |  -1802 |  **RIGHT-MOUSE-BUTTON** DOWN or mouse moved while right button is down  
---|---  
-1803 |  **RIGHT-MOUSE-BUTTON** UP  
-1804 _to_ -1899 |  Reserved for future use  
-1900 |  Input Time-out (NOMADS Internal)  
-1950 |  When running WindX, a -1950 CTL will initiate a Security reset.  
-1999 |  **_Window Close Request_**  _(Windows**X** Close Button)_ By default, the system maps this to CTL=4 (in *DEV/WINDOWS). You can test for CTL=4 in your programs or use the [**DEFCTL**](../directives/defctl.md) directive to remap -1999 to a different CTL: DEFCTL -1999=10 ! Map close to return 10 You can test the **EOM** system variable to find out whether the user pressed the actual function key or selected one of the Close options: HTA(EOM) returns $00800004$ for <Alt-F4> or $0080F831$ for the Close option. See **['F4'](../parameters/f4.md)** system parameter and **[EOM](../variables/eom.md)** system variable.  
-2000 _to_ -2255 |  **_Composite Character Generation  
  
_** Whenever the system detects a CTL value in this range, the character whose ASCII value equals the absolute value of CTL less 2000 is placed into the input buffer. This feature allows you to define input sequences to generate the Extended ASCII characters even when the terminal cannot generate them.  
-2256 _to_ -2999 |  Reserved for future use  
-3000 _to_ -3999 |  Used in PxPlus for internal menu generation from Command mode
