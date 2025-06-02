# Printing  
  
**Character-Based Printing** |  **__**  
---|---  
  
The syntax elements available for character-based printing in PxPlus are intended primarily to service _converted_ or _legacy_ applications that are limited to _line-oriented_ output. If a PxPlus application is designed to run on Windows, then it should employ complete graphical (display and print) functionality. See **[Printing in MS Windows](../Printing%20in%20MS%20Windows/Printing%20in%20MS%20Windows.md)**.

When character-based printing is required, PxPlus allows you to format and print the output in several different ways, depending on the code, the operating system, and the printer interface used.

## Standard Printing

The standard interface to the Windows print manager,***WINPRT*** , is designed to minimize any changes to print from legacy applications. This allows text-only PxPlus applications to have transparent access to any print destination that is available to the current Windows system.

Since the source of the output is character-based, the hard copy will also be character-based. However,***WINPRT*** does not accept any _raw_ control sequences that may be required to print from legacy or converted applications.

##  Raw Printing

If an application includes printer-specific control sequences in its print routines, the output will be stripped out by the Windows print system. Therefore, the standard PxPlus printer interface,***WINPRT*** , **_canno_** t be used for this type of output data.

Use one of the following methods for handling device-specific instructions and direct-to-output printing in PxPlus:

  * ***WINDEV* -** Interface for printing _Raw Mode_ in Windows


  * **UNC Name -** Universal Naming Convention


  * **LPT Access -** Direct to the local LPT port



***WINDEV*** allows you to send output data via Windows in a _pass-through mode._ This instructs the printer driver to accept the raw escape sequences and queue the printer. However, these instructions will only be valid if they are supported by the specified printer and print driver. Refer to the printer's documentation (supplied by the manufacturer) for the specific PCL (Printer Control Language) syntax. Raw printing mode may be controlled using the **['RP'](../../../parameters/rp.md)** parameter.

Sets of mnemonics and/or escape sequences used to initialize different printers can be maintained outside your PxPlus application via **[Print Drivers and Link Files](../Print%20Drivers%20and%20Link%20Files/Overview.md)**.

## Fixed-Pitch Fonts

Fixed-pitch fonts are easily applied via***WINPRT***. The example below adjusts the font to allow for the number of columns in COLS_REQD. The **[MXC( ) / MXL( )](../../../functions/mxc.md)** functions return maximum available column and line for the channel, based on the current default settings for paper size, printable area, offset, margin, default font height, width and pitch.

**_Example:_**

> 0010 LOOP=0,COLS_REQD=132,FONT$="Courier New"   
>  0020 CHAN=UNT; OPEN (CHAN)"*WINPRT*"   
>  0030 PRINT (CHAN)'FONT'(FONT$,-12),'DF', ! Set Font to 10 CPI   
>  0040 PRINT (CHAN)'FONT'(FONT$,MXC(CHAN)/COLS_REQD),'DF', ! Scale it   
>  0050 IF MXC(CHAN)<COLS_REQD THEN IF LOOP++<5 THEN GOTO 0040   
>  0060 PRINT MXC(CHAN),LOOP

This method of printing works with any Windows printer and with no adjustments for legacy code. To control fonts on a text mode device, send raw escape sequences to the printer using***WINDEV*** , UNC or LPT ports. However, the choice of fonts using the direct-to-output method is limited to the fonts supported by the given printer. See **[MXC( ) / MXL( )](../../../functions/mxc.md)** functions.

## Proportionally-Spaced Fonts

***WINPRT*** also allows the use of proportional fonts with text-only reports and can scale them to fit the page.

When applying proportional fonts to character-based reports:

  * Fields should be printed individually to ensure proper alignment.


  * Decimal alignment is supported for the **[STR( )](../../../functions/str.md)** function and format masks.


  * Typical line drawing characters (**_** ,**-** ,**=**) can be replaced by solid lines automatically using the **['+S' & '-S'](../../../mnemonics/+s.md)** mnemonic.



Applications should print fields individually for proper alignment; i.e. use the @(col) position for each element or field. A dimensioned string like DIM X$(80); X$(1)="Customer",X$(46)=" Balance" would not be properly aligned. String variables are left justified at the specified column, based on the default font. Decimal alignment is supported for the **[STR( )](../../../functions/str.md)** function or **[Data Format Masks](../../../appendix/data_format_masks.md)**. Numeric variables print right justified with decimal alignment, provided a format mask is used.

**_Example:_**

> 10 LOOP=0,COLS_REQD=78,FONT$="MS Sans Serif"   
>  20 CHAN=UNT; OPEN (CHAN)"*WINPRT*"   
>  30 PRINT (CHAN)'FONT'(FONT$,-12),'DF', ! Set Font to 10 CPI   
>  40 PRINT (CHAN)'FONT'(FONT$,MXC(CHAN)/COLS_REQD),'DF', ! Scale it   
>  50 IF MXC(CHAN)<COLS_REQD THEN IF LOOP++<5 THEN GOTO 0040   
>  60 PRINT (CHAN)@(0),"Customer",@(45)," Balance"   
>  70 PRINT (CHAN)@(0),"Mustangs Unlimited",@(45),19.67:"####,##0.00-"   
>  80 PRINT (CHAN)@(0),"CJ Pony Parts Inc.",@(45),289.67:"####,##0.00-"

However, the following style of coding will** _not_** work properly when using a proportionally spaced font because the variables are not printed individually:

> 10 DIM X$(80); X$(1)="Customer",X$(46)=" Balance"   
>  20 PRINT (CHAN)X$   
>  30 DIM X$(80); X$(1)="Mustangs Unlimited",X$(46)=STR(19.67:"####,##0.00-")   
>  40 PRINT (CHAN)X$

You can also use text justification mnemonics to override the normal handling of string and numeric data. Normally, the following mnemonics are required only when the individual fields are grouped into a single variable that is being sent to a printer using a proportionally spaced font:

|  **['JC'](../../../mnemonics/jc.md)** |  _Justify Centre_  
---|---|---  
|  **['JD'](../../../mnemonics/jd.md)** |  _Justify Decimal-Aligned_  
|  **['JL'](../../../mnemonics/jl.md)** |  _Left-Justify Text_  
|  **['JN'](../../../mnemonics/jn.md)** |  _Right-Justify for Numeric_  
|  **['JR'](../../../mnemonics/jr.md)** |  _Right-Justify Numeric_  
|  **['JS'](../../../mnemonics/js.md)** |  _Left-Justify String_  
  
The**'+S'** mnemonic automatically replaces the underscore, dash and equals sign (_, - and =) with solid lines. The solid line technique also only applies to fields that are printed separately. See **['+S' & '-S'](../../../mnemonics/+s.md)** mnemonic.

**_Example:_**

> 10 DIM A$(10,"_"),B$(10,"-"),C$(10,"=")   
>  20 LET CHAN=UNT; OPEN (CHAN,ERR=*END)"*winprt*"   
>  30 PRINT (CHAN)'FONT'("MS Sans Serif",1),'DF',   
>  40 PRINT (CHAN)'-S',@(0),A$,@(12),B$,@(24),C$,@(36),"No solid lines"   
>  50 PRINT (CHAN)'+S',@(0),A$,@(12),B$,@(24),C$,@(36),"Solid lines"   
>  60 PRINT (CHAN)'+S',@(0),A$+" "+B$+" "+C$,@(36),"No solid lines" 
