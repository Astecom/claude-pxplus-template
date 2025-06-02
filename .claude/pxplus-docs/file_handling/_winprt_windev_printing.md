# Special File Handling

***WINPRT* / *WINDEV* Printing Examples** |   
---|---  
  
This page provides some general printing information, tips and examples for using both *WINDEV* and *WINPRT* special device files.

##  Abort

You can abort a print job at any time by printing the **['AB'](../mnemonics/ab.md)** mnemonic to the printer channel.  
  
**_Example:_**

> print (30)'AB' ! To cancel the current job

#### **Note:**  
How much data prints when you abort is determined by the printer driver, the Windows print spooling subsystem, and your setting in the print spooler options:  
  
** _"Start Printing After the First Page"_**  
  
 _or_  
  
** _"Start Print After the Last Page"_**

Look for the name (title bar caption) of your current PxPlus window to find your print job in the Windows print spooler job listing.

##  Initial Settings

Before you print data to the ***WINDEV*** and ***WINPRT*** special device files, you should always set the initial font and point size of the printer to a known state and make it the default (using the **['DEFAULT' or 'DF'](../mnemonics/default.md)** mnemonic):

**_Example:_**

> open (chan)"*winprt*"  
>  print (chan)'font'("Courier New",-10),'default',

It is suggested that you use negative sizes to define specific point sizes:

**_Example:_**

> print (1)'font'("Arial",-7),'DF'

All standard **PRINT** statement data will use the selected font with spacing based on logical CPI values (pitch). Use the following guide to equivalent measures:

|  **Point Size** |  **=Logical LPI** |  **=Logical CPI**  
---|---|---|---  
|  **-** 12 |  =6 LPI |  =10 CPI  
|  **-** 10 |  =7.2 LPI |  =12 CPI  
|  **-** 7 |  =10 LPI |  =16 CPI  
  
Column and row addressing are based on the default font. Switching fonts will not alter the column or row addressing. You can use the [**'CPI'**](../mnemonics/cpi.md) and [**'LPI'**](../mnemonics/lpi.md) mnemonics to simplify text alignment. The following example scales the text to allow for 200 characters across but addresses the page based on 132 characters:

**_Example:_**

> FONT$="Times New Roman",COLS_REQD=132,REALLY_SMALL_FONT=200  
>  CHAN=unt;  
>  open (CHAN)"*WINPRT*"  
>  print (CHAN)'font'(FONT$,-12),'DF', ! Set base to 10 CPI  
>  CUR_COL=mxc(CHAN)+1,INCHES_WIDE=CUR_COL/10  
>  print (CHAN)'font'(FONT$,CUR_COL/REALLY_SMALL_FONT),'DF',  
>  print (CHAN)'cpi'(COLS_REQD/INCHES_WIDE),'lpi'(6),  
>  for Z=0 to 12  
>  print (CHAN)@(Z*10),"Hello World"  
>  next

##  Text Mode, Fixed Pitch Font

The example below uses a fixed-pitch font for text mode printing (e.g. for report printing). The application adjusts the font to allow for the number of columns in COLS_REQD. The **[MXC( ) / MXL( )](../functions/mxc.md)** functions return maximum available column and line for the channel based on the current default settings for paper size, printable area, offset, margin, default font height, width and pitch:

**_Example:_**

> 0010 LOOP=0,COLS_REQD=132,FONT$="Courier New"  
>  0020 CHAN=unt; open (CHAN)"*WINPRT*"  
>  0030 print (CHAN)'font'(FONT$,-12),'DF', ! Set Font to 10 CPI  
>  0040 print (CHAN)'font'(FONT$,mxc(CHAN)/COLS_REQD),'DF', ! Scale it  
>  0050 if mxc(CHAN)<COLS_REQD then if LOOP++<5 then goto 0040  
>  0060 print mxc(CHAN),LOOP

This method of printing works with any Windows printer with no adjustments necessary for legacy code. To control fonts on a text mode device, send raw escape sequences to the printer using **[*WINDEV*](~windev~.md)**, UNC (Universal Naming Conventions) or direct access to LPT ports. Note that your choice of fonts with ***WINDEV*** , UNC or an LPT number is limited to the fonts supported by the given printer.

See the Help section on [**Mnemonics**](../mnemonics.md).

##  Text Mode, Proportional Font

Proportional fonts are supported using **[*WINPRT*](~winprt~.md)** and can be scaled to fit the page. You can print fields individually for proper alignment; that is, use the @(col) position for each element or field. A dimensioned string such as DIM X$(80); X$(1)="Customer",X$(46)="Balance" would not be properly aligned. PxPlus left justifies any string variable at the specified column based on the default font. Decimal alignment is supported for the **[STR( )](../functions/str.md)** function or format masks. Numeric variables print right justified with decimal alignment, provided that a format mask is used.

**_Example:_**

> 0010 LOOP=0,COLS_REQD=78,FONT$="MS Sans Serif"  
>  0020 CHAN=unt; open (CHAN)"*WINPRT*"  
>  0030 print (CHAN)'font'(FONT$,-12),'DF', ! Set Font to 10 CPI  
>  0040 print (CHAN)'font'(FONT$,mxc(CHAN)/COLS_REQD),'DF', ! Scale it  
>  0050 if mxc(CHAN)<COLS_REQD then if LOOP++<5 then goto 0040  
>  0060 print (CHAN)@(0),"Customer",@(45),"Balance"  
>  0070 print (CHAN)@(0),"Mustangs Unlimited",@(45),19.67:"####,##0.00-"  
>  0080 print (CHAN)@(0),"CJ Pony Parts Inc.",@(45),289.67:"####,##0.00-"

You can use text justification mnemonics to override the normal handling of string and numeric data. Normally, these mnemonics are required only when the individual fields are grouped into a single variable, which is being sent to a printer using a proportionally spaced font:

> [**'JC' Justify Centre**](../mnemonics/jc.md)  
>  [**'JD' Justify Decimal-Aligned**](../mnemonics/jd.md)  
>  [**'JL' Left-Justify Text**](../mnemonics/jl.md)  
>  [**'JN' Right-Justify for Numeric**](../mnemonics/jn.md)  
>  [**'JR' Right-Justify Numeric**](../mnemonics/jr.md)  
>  [**'JS' Left-Justify String**](../mnemonics/js.md)

You can use the **'+S'** mnemonic to automatically replace the **_** (_underscore_), **-** (_dash_) and **=** (_equals sign_) with solid underlines. The solid line technique also only applies to fields that are printed separately. See **['+S' & '-S'](../mnemonics/+s.md)** mnemonics.

**_Example:_**

> dim A$(10,"_"),B$(10,"-"),C$(10,"=")  
>  CHAN=unt;  
>  open (CHAN,err=*end)"*winprt*"  
>  print (CHAN)'font'("MS Sans Serif",1),'DF',  
>  print (CHAN)'+S',@(0),A$,@(12),B$,@(24),C$

##  GUI API and Mnemonics

#### **Restriction:**  
All access to the Windows print subsystem must use standard Windows print API calls. Since only PxPlus predefined mnemonics are mapped to Windows API calls, you are limited to using PxPlus predefined mnemonics.

You can mix and match varying fonts and attributes, use graphics mnemonics (i.e. **['ARC'](../mnemonics/arc.md)**, **['CIRCLE'](../mnemonics/circle.md)**, **['FILL'](../mnemonics/fill.md)**, **['FONT'](../mnemonics/font.md)**, **['FRAME'](../mnemonics/frame.md)**, **['LINE'](../mnemonics/line.md)**, **['PEN'](../mnemonics/pen.md)**, **['PICTURE'](../mnemonics/picture.md)**, **['PIE'](../mnemonics/pie.md)**, **['POLYGON'](../mnemonics/polygon.md)**, **['RECTANGLE'](../mnemonics/rectangle.md)** and **['TEXT'](../mnemonics/text.md)**) and include text mode printing all on the same page. Move line positioning (column and row) around as desired. Printing is page oriented rather than line oriented. In GUI API, you can access any part of the entire page at any time. Top to bottom ordering is not necessary. This also applies when using WindX under UNIX.

**_Example:_**

The following routine illustrates some of the available graphic mnemonics:

> ! Printing Graphics  
>  CHAN=unt;  
>  open (CHAN)"*WINPRT*"  
>  print (CHAN)'font'("Times New Roman",3,"BI"),'blue',  
>  print (CHAN)'text'(@x(0),@y(0),@x(70),@y(5),"Printing Graphics","C"),  
>  print (CHAN)'pen'(1,2,4),'arc'(@x(7),@y(9.5),@x(1),1,0,180),  
>  print (CHAN)'pen'(1,3,1),'fill'(1,4),'rectangle'(@x(2),@y(9),@x(12),@y(13)),  
>  print (CHAN)'pen'(1,1,7),'line'(@x(2.5),@y(9.5),@x(11.5),@y(9.5),@x(11.5),@y(12.5),@x(2.5),@y(12.5),@x(2.5),@y(9.5)),  
>  print (CHAN)'pen'(1,2,4),'fill'(7,1),'circle'(@x(54),@y(10),@x(6),1.8),  
>  L=@x(24),R=@x(33),S=@x(4),X=@y(6),Y=@y(14)  
>  print (CHAN)'pen'(1,3,2),'fill'(1,12),'polygon'(L-S*2,X,R+S*4,Y,L,Y,R-S,X,L,X)  
>  print (CHAN)'picture'(@x(0),@y(11),@x(40),@y(18),"*win/nomads2",2),

You can use all of the foreground and background colours with colour printers. Use the **['PEN'](../mnemonics/pen.md)** and **['FILL'](../mnemonics/fill.md)** mnemonics to control the colour settings for graphics mnemonics.

The following routine prints each of the available 16 colours:

**_Example:_**

> ! Colour Printing  
>  FONT$="MS Sans Serif",COLS_REQD=80  
>  CHAN=unt;  
>  open (CHAN)"*WINPRT*"  
>  print (CHAN)'font'(FONT$,-12),'DF', ! Set base to 10 CPI  
>  CUR_COL=mxc(CHAN)+1;  
>  if CUR_COL=0 \  
>  then CUR_COL=80  
>  INCHES_WIDE=CUR_COL/10  
>  print (CHAN)'font'(FONT$,CUR_COL/COLS_REQD),'DF',  
>  print (CHAN)'cpi'(COLS_REQD/INCHES_WIDE),'lpi'(6),  
>  for Z=0 to 15  
>  INTENSITY$=tbl(Z>7,"","Light ")  
>  COLOUR$=tbl(mod(Z,8),"Black","Red","Green","Yellow","Blue","Magenta","Cyan","White")  
>  COLOUR_MNEM$=esc+"F"+chr(asc("0")+Z)  
>  print (CHAN)@(0),COLOUR_MNEM$,INTENSITY$,COLOUR$  
>  next

##  [WDX]*WINDEV* Escape Sequences

If you are opening **[WDX]*WINDEV*** and defining/creating mnemonics that will send escape sequences to the printer channel, you must send the mnemonic definitions to the WindX client instead of defining them on the server. (This is because internally there are actually two channels open: one PxPlus is using to route printing to WindX and one WindX opens, connected to the actual port on the client. Your mnemonic is run locally on the server's channel and not sent to WindX for the remote client.)

#### **Note:**  
WindX supports the use of the **[MNEMONIC](../directives/mnemonic.md)** directive via the **[[WDX]](../command_tags/wdx.htm)** tag (as of version 4.20).

To send the mnemonic to the client in older versions of PxPlus/WindX, you can either:

  * Create a device driver containing mnemonic definitions on the WindX client PC and then use a **[CALL](../directives/call.md)** directive:



> CALL [WDX]*dev/_your_driver_name_  
>   
> ** _OR_**

  * Use an **[EXECUTE](../directives/execute.md)** directive from the server side for mnemonic definitions on the client:  
  
EXECUTE "[WDX]MNEMONIC (LFO)'XX'=..."



#### **Note:**  
With ***WINPRT*** , escape sequences are **_not_** allowed and may have an unpredictable effect on the device and/or printer driver.  
  
With ***WINDEV*** , you can use escape sequences; however, both the validity of sequences and the printer's support for raw mode (if any) are printer and driver dependent.

##  Pages and Form Feeds in Printing

You can access an entire page and print to it; however, you can only print to the current page at any one time. To complete a page, either use a form feed or close the channel.

For proper spooler operation, do not include leading or trailing form feeds within the print job. Spoolers always assume the paper is at top-of-form when a job begins.

#### **Note:**  
A form feed is automatically appended to every print job sent.
