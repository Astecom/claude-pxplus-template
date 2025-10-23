# Mnemonics 

**'DIALOGUE' (or 'DIALOG')** |  **_Define/Draw Dialogue Region_**  
---|---  
  
**GUI Display**

##  Format

**{'DIALOGUE' | 'DIALOG'} (**_col_ ,_ln_ ,_wth_ ,_ht_[,_wdw_id_],[_title$_][,_attrib_ _$_][,**OPT=**_string$_]**)**

#### **Note:**  
PxPlus also accepts the spelling **'DIALOG'**.  
  
_(Support for the spelling 'DIALOG' was added in PxPlus 2016.)_

**_Where:_**

_col,ln,wth,ht_ |  Position/coordinates. Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines.  
---|---  
_attrib_ _$_ |  Optional attribute string. If you include attributes, use one or more mnemonics to define the defaults for the window. String expression.  
_title$_ |  Optional title. String expression.  
_string$_ |  Optional attributes. Supported options include: |  **Attr.** |  **Description**  
---|---  
**&** |  _(Ampersand)_ Creates a window that logically attaches to the current window (i.e. leaves the current window active and shares controls).  
***** |  _(Asterisk)_ Creates a resizable window with automatic scrollbars for text plane.  
  
**_Example:_**  
  
print 'dialogue'(1,1,60,20,"Title",opt="*")  
- |  _(Dash/Minus Sign)_ Window has a minimize button.  
**?** |  Window supports Win95 Help button.  
**^** |  _(Caret)_ Window is always on top (not applicable to the **'WINDOW'** mnemonic). **_Example:_**  
  
print 'dialogue'(1,2,30,3,"My Top Dog",opt="^")  
**c** |  Window is a child of the current window.  
**C** |  Disables **X** (close) button on the title bar of the window and eliminates the system control menu from the title bar.  
**F** |  Window can be maximized, occupying full screen (regardless of number of columns/rows). Area outside the defined text region will be cleared to the default background colour for the window.  
**h** |  Window has no title bar.  
**i** |  Window has no icon in the upper left corner.  
**L** |  Synchro-Lock. Maintain dialogue window's position relative to its parent window so that when the parent is moved, the child moves with it and tries to 'snap' top lines to the same position. _(PxPlus v10, auto-align/dock to upper left corner added in PxPlus v11.)_  
**m** |  Enables "maximize" box in the top right corner of the window (only for dialogue windows created with OPT="*").  
**M** |  Window has a menu bar.  
**s** |  **'DIALOGUE'( )** returns a CTL value to signal when the dialogue view state is changed: |  **CTL** |  **Change of State**  
---|---  
CTL=-1106 |  When the dialogue is minimized  
CTL=-1107 |  When the dialogue is restored to normal state  
CTL=-1105 |  When the dialogue is maximized; also returned for the **Z** option (see below) if dialogue has been resized  
**S** |  Window has a status line/message bar.  
**x** |  Disables **X** (close) button on the title bar of the window and eliminates the system control menu from the title bar.  
**X** |  Enables **X** (close) button on the title bar of the window and supports the system control menu on the title bar.  
**Z** |  Creates a resizable window. When the user resizes the window, a CTL=-1105 is generated.  
_wdw_id_ |  Optional dialogue window's unique ID number (0 - 255).  
  
##  Description

Use **'DIALOGUE'** to define a new window, which is not contained in the main PxPlus screen. In a non-Windows environment, this does the same as a Window **OPT=** "_string_of_characters_ " mnemonic.

#### **Note:**  
The **'DIALOGUE'** mnemonic with OPT="^" can be useful for error message windows. Although the users can still perform other operations, the error message will remain "Always on Top" as a constant reminder to deal with the error.

PxPlus uses the WS_DLGFRAME frame style from the Windows API for the **'DIALOGUE'** mnemonic.

## See Also

**[Windows API Frame Styles](../mnemonics.htm#Mark5)**  
**['TEXTWDW' Create Text Window](textwdw.md)  
[WINDOW' Define/Draw Window](window.md)**

##  Example

This example creates a dynamic, resizable/scrollable viewer using a **'DIALOGUE'** window, which is large enough to display the complete picture. A **'SIZE'** mnemonic fits the window to the screen. The user is supplied with scroll bars to view the desired image.

> 0010 call "*picture;Get_size","c:\windows\clouds.bmp",WD,HI  
>  0020 let WD=int(WD),HI=int(HI)  
>  0030 print 'dialogue'(10,10,WD,HI,"MY Photo",opt="*-m"),'size'(30,10),'B?','SR','CS',

PxPlus normally redraws the text plane below the picture. Line 0040 suppresses the text plane to avoid flicker:

> 0040 print '-T',  
>  0050 print 'picture'(0,0,@x(WD),@y(HI),"C:\windows\clouds.bmp"),  
>  0060 obtain 'C0',*; if ctl<>4 then goto *same
