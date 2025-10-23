# Directives

**WINPRT_SETUP** |  **_Windows Printer Setup_**  
---|---  
  
##  Formats

1. |  _Read Current Selection_ _:_ |  **WINPRT_SETUP**[**SERVER**]**READ** _var_ _$_ [,**ERR=**_stmtref_]  
---|---|---  
2. |  _Read Properties_ _:_ |  **WINPRT_SETUP**[**SERVER**]**READ PROPERTIES** _var_ _$_ [,**ERR=**_stmtref_]  
3. |  _Update Selection_ _:_ |  **WINPRT_SETUP**[**SERVER**]**WRITE** _printer$_[,**ERR=**_stmtref_]  
4. |  _Update Properties_ _:_ |  **WINPRT_SETUP**[**SERVER**]**WRITE PROPERTIES** _settings$_[,**ERR=**_stmtref_]  
5. |  _List Available Printers_ _:_ |  **WINPRT_SETUP**[**SERVER**]**LIST** _var_ _$_[,**ERR=**_stmtref_]  
6. |  _List Printer Names Only_ _:_ |  **WINPRT_SETUP**[**SERVER**]**DIRECTORY** _var_ _$_ [,**ERR=**_stmtref_]  
7. |  _Display Printer Dialogue_ _:_ |  **WINPRT_SETUP INPUT** _var_ _$_[,**ERR=**_stmtref_]  
  
**_Where_**** _:_**

_printer$_ |  String expression to select the current printer by name.  
---|---  
_settings$_ |  String expression for assigning property values.  
**SERVER** |  Optional keyword enabling access to printers defined on a Windows server when using WindX.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_var_ _$_ |  String variable to receive the returned value for printer name(s) or properties.  
  
##  Description

Use the **WINPRT_SETUP** directive to control settings for the currently selected Windows printer and its properties.

## WINPRT_SETUP Properties

The default properties of a printer are determined by the individual printer/driver manufacturers. Some properties (e.g. collate, ordered printing) are not available for all drivers. Others (e.g. font, point size) vary from printer to printer. Default paper size seems to be consistently letter size (8 1/2" x 11", expressed as PAPERSIZE=1 for DMPAPER_LETTER).

See **Paper Sizes** for a list of **PAPERSIZE=**_num_ codes.

The properties that can be assigned to your Windows printer (printer/driver dependent) include the following:

**** |  **COLLATE=YES | NO | AUTO** |  **PAPERLENGTH=**_num_ _(in 1/10th of mm)_  
---|---|---  
**** |  **COLOR=YES | NO**(or COLOUR) |  **PAPERSIZE=**_num_  
**** |  **COPIES=**_num_ |  **PAPERWIDTH=**_num_ _(in 1/10th of mm)_  
|  **DUPLEX=**_num_ |  **QUALITY=**_num_  
**** |  **FILE=** +_filename_ | -_filename_ |  **RANGE=**_from_ :_to_  
|  [**FORCE6X10 = YES | NO**](winprt_setup.htm#Force6x10) |  **RESOLUTION=**_num_ :_num_  
|  **MARGINS=**_left_ :_top_ :_right_ :_bottom_ |  **SCALE=**_num_ (_%_)  
**** |  **OFFSET=**_x_ :_y_ |  **TITLE= <report title>**  
**** |  **ORIENTATION=LANDSCAPE | PORTRAIT** |  **TRUETYPE=**_num_  
  
Most properties are self-explanatory, such as COPIES=1, and some need a little explanation. For example, the assignment used for the offset property **OFFSET** =_x:y_ is in thousandths of an inch and is the offset to the print area from the upper left corner of the page. (e.g. OFFSET=750:500 offsets the print area three-quarters of an inch from the left margin and half an inch down from the top margin.)

Valid numeric settings for **TRUETYPE=**_num_ are:

> **1** |  Print TT fonts as graphics  
> ---|---  
> **2** |  Download TT fonts as soft fonts  
> **3** |  Substitute device fonts for TT fonts  
  
Valid numeric settings for **DUPLEX=**_num_ (if capable of double-sided printing) are:

> **1** |  Duplex is Off  
> ---|---  
> **2** |  Duplex in Portrait  
> **3** |  Duplex in Landscape  
  
Valid numeric settings for **QUALITY=**_num_ are:

> **-1** |  Draft  
> ---|---  
> **-2** |  Low Resolution  
> **-3** |  Medium Resolution  
> **-4** |  High Resolution  
  
The **TITLE** option allows the programmer to specify the Windows Spooler title for the report. If not specified, the system will use the window caption line.

_(The TITLE option was added in PxPlus v7.65.)_

##  FORCE6X10 Option

Normally, when printing a proportional font to a graphical Print device, the system will determine the logical column width based on the average width of the characters for the font requested. This can cause minor problems with output alignment since fonts often vary slightly between operating systems and at different resolutions.

To resolve this problem, the application may include FORCE6X10=YES, which will force the system to set the logical column width as 60% of the line height (which is what is specified in font size specifications). The 6x10 ratio is derived from the fact that historically, printers printed 6 lines to the inch and 10 characters per inch; thus, the character width was 60% the line height. Most common fixed width fonts also adhere to this ratio.

Specifying FORCE6X10=YES will automatically adjust the column width to 60% of the line height given in the FONT specification; thus, outputting to **[*WINPRT*](../file_handling/~winprt~.md)**, **[*PDF*](../file_handling/~pdf~.md)** and **[*BITMAP*](../file_handling/~bitmap~.md)**, regardless of the chosen font, will remain consistent in terms of general page layout.

##  Margin Control

The **MARGINS=** property accepts values for _left_ , _top_ , _right_ and _bottom_ in 1000ths of an inch. These values affect both text mode printing (e.g. print (x)"ABC",) and graphical printing (e.g. print (x)'PICTURE(...),).

**_Example:_**

The following example indicates a one-inch margin on all sides of the page:

> winprt_setup write properties "MARGINS=1000:1000:1000:1000"

The default values are -1:-1:-1:-1, which is the equivalent of no margin setting. If only two values are given, the _right_ and _bottom_ margins default to the hardware-imposed print margins. A value of -1 indicates that the printer is to use its default physical margin.

The software internally adjusts the top and left margins by any hardware imposed printing offsets. Most laser or ink jet printers impose a margin around the edge of the paper where they cannot print. These values are taken into account by the property settings to assure consistent output positioning regardless of printer type.

#### **Note:**  
Due to printer wear and tear, paper slippage, and other outside factors, the output position is never guaranteed to be 100% correct; however, the PxPlus logic for handling margins is consistent with most other Windows-based software. The alignment will be similar to the output from other programs printed on the same printer using the same operating system and printer drivers.

The keyword **MARGIN** may be used instead of **MARGINS** , if preferred; however, **WINPRT_SETUP READ PROPERTIES** always returns **MARGINS=** as the property name. 

##  Paper Sizes

The chart below lists paper sizes according to the Windows system definition file _print.h_ , with the Internal Name followed by the number to use as the PAPERSIZE=_num_ option for the print drivers, followed by a more general description of the paper. 

**Paper: Internal Name** |  **#** |  **Size/Description**  
---|---|---  
DMPAPER_LETTER |  1 |  Letter 8 1/2 x 11 in.  
DMPAPER_LETTERSMALL |  2 |  Letter Small 8 1/2 x 11 in.  
DMPAPER_TABLOID |  3 |  Tabloid 11 x 17 in.  
DMPAPER_LEDGER |  4 |  Ledger 17 x 11 in.  
DMPAPER_LEGAL |  5 |  Legal 8 1/2 x 14 in.  
DMPAPER_STATEMENT |  6 |  Statement 5 1/2 x 8 1/2 in.  
DMPAPER_EXECUTIVE |  7 |  Executive 7 1/4 x 10 1/2 in.  
DMPAPER_A3 |  8 |  A3 297 x 420 mm  
DMPAPER_A4 |  9 |  A4 210 x 297 mm  
DMPAPER_A4SMALL |  10 |  A4 Small 210 x 297 mm  
DMPAPER_A5 |  11 |  A5 148 x 210 mm  
DMPAPER_B4 |  12 |  B4 250 x 354  
DMPAPER_B5 |  13 |  B5 182 x 257 mm  
DMPAPER_FOLIO |  14 |  Folio 8 1/2 x 13 in.  
DMPAPER_QUARTO |  15 |  Quarto 215 x 275 mm  
DMPAPER_10X14 |  16 |  10x14 in.  
DMPAPER_11X17 |  17 |  11x17 in.  
DMPAPER_NOTE |  18 |  Note 8 1/2 x 11 in.  
DMPAPER_ENV_9 |  19 |  Envelope #9 3 7/8 x 8 7/8  
DMPAPER_ENV_10 |  20 |  Envelope #10 4 1/8 x 9 1/2  
DMPAPER_ENV_11 |  21 |  Envelope #11 4 1/2 x 10 3/8  
DMPAPER_ENV_12 |  22 |  Envelope #12 4 \276 x 11  
DMPAPER_ENV_14 |  23 |  Envelope #14 5 x 11 1/2  
DMPAPER_CSHEET |  24 |  C size sheet  
DMPAPER_DSHEET |  25 |  D size sheet  
DMPAPER_ESHEET |  26 |  E size sheet  
DMPAPER_ENV_DL |  27 |  Envelope DL 110 x 220 mm  
DMPAPER_ENV_C5 |  28 |  Envelope C5 162 x 229 mm  
DMPAPER_ENV_C3 |  29 |  Envelope C3 324 x 458 mm  
DMPAPER_ENV_C4 |  30 |  Envelope C4 229 x 324 mm  
DMPAPER_ENV_C6 |  31 |  Envelope C6 114 x 162 mm  
DMPAPER_ENV_C65 |  32 |  Envelope C65 114 x 229 mm  
DMPAPER_ENV_B4 |  33 |  Envelope B4 250 x 353 mm  
DMPAPER_ENV_B5 |  34 |  Envelope B5 176 x 250 mm  
DMPAPER_ENV_B6 |  35 |  Envelope B6 176 x 125 mm  
DMPAPER_ENV_ITALY |  36 |  Envelope 110 x 230 mm  
DMPAPER_ENV_MONARCH |  37 |  Envelope Monarch 3.875 x 7.5 in.  
DMPAPER_ENV_PERSONAL |  38 |  6 3/4 Envelope 3 5/8 x 6 1/2 in.  
DMPAPER_FANFOLD_US |  39 |  US Std Fanfold 14 7/8 x 11 in.  
DMPAPER_FANFOLD_STD_GERMAN |  40 |  German Std Fanfold 8 1/2 x 12 in.  
DMPAPER_FANFOLD_LGL_GERMAN |  41 |  German Legal Fanfold 8 1/2 x 13 in.  
DMPAPER_USER |  256 |  (undefined - user custom size)  
  
#### **Warning!**  
The PostScript driver mistakenly uses DMPAPER_ values between * 50 and 56. **_Do not_** use this range when defining new paper sizes.

##  Format 1

**_Read Selection_**

**WINPRT_SETUP READ** _var_ _$_[,**ERR=**_stmtref_]

Use the **WINPRT_SETUP READ** format to read the currently selected default printer name. The value returned in _var_ _$_ will be the operating system name of an existing physical queue.

**_Example:_**

> winprt_setup read PRTR$  
>  ?PRTR$  
> HPLaserJet III on \\\machine_1\hp

##  Format 2

**_Read Properties_**

**WINPRT_SETUP READ PROPERTIES** _var_ _$_[,**ERR=**_stmtref_]

Use the **WINPRT_SETUP READ PROPERTIES** format to read the current settings of the properties associated with your current printer. The values are returned in a semi-colon separated list.

**_Example:_**

> open (1)"*WINPRT*"  
> winprt_setup read properties PROP$  
>  ?PROP$  
>  RANGE=ALL; COLLATE=NO; COPIES=1; ORIENTATION=PORTRAIT; PAPERSIZE=1; RESOLUTION=300:300; OFFSET=0:0; TRUETYPE=2; DRIVER=WINSPOOL

##  Format 3

**_Update Selection_**

**WINPRT_SETUP WRITE** _printer$_[,**ERR=**_stmtref_]

Use the **WINPRT_SETUP WRITE** format to write or change the currently selected default printer using a string expression to pass the system the name of the printer to use.

**_Example:_**

> winprt_setup write "Canon BJC-4300 on \\\machine_2\canon"

##  Format 4

**_Update Properties_**

**WINPRT_SETUP WRITE PROPERTIES** _settings$_[,**ERR=**_stmtref_]

Use the **WINPRT_SETUP WRITE PROPERTIES** format to write or change the current properties using a string expression to pass the system the property assignments to use.

**_Example:_**

> P$="COPIES=2;ORIENTATION=LANDSCAPE"  
> winprt_setup write properties P$

##  Format 5

**_List Available Printers_**

**WINPRT_SETUP LIST** _var_ _$_[,**ERR=**_stmtref_]

Use **WINPRT_SETUP LIST** to obtain a comma-delimited list of all the printers defined in the system. Note that if you use this format on a workstation that does not have printers installed, there will be no value in your string variable, and PxPlus will return an Error #12: File does not exist (or already exists).

**_Example:_**

> winprt_setup list choices$  
>  ? choices$  
>  HP LaserJet III on \\\machine_1\hp,Envoy 7 Driver on EVY:,Canon BJC-4300 on \\\machine_2\Canon,Acrobat PDFWriter on LPT1:,Default PostScript Printer on LPT1:,Default PostScript Pri (Copy 1) on LPT1:,Acrobat Distiller 3.0 on LPT1:,Acrobat Distiller 3.0 (Copy 1) on LPT1:,

##  Format 6

**_List Printer Names Only_**

**WINPRT_SETUP DIRECTORY** _var_ _$_

Using the **DIRECTORY** keyword returns a comma-delimited list of printers with just the printer portion of the names, excluding the ON Device portion.

**_Example:_**

> winprt_setup directory choices$  
>  ? choices$  
>  HP LaserJet III,Envoy 7 Driver,Canon BJC-4300,Acrobat PDFWriter,Default PostScript Printer,Default PostScript Pri (Copy 1),Acrobat Distiller 3.0, Acrobat Distiller 3.0 (Copy 1),HP LaserJet 2100 Series PCL 6,

##  Format 7

**_Display Printer Dialogue_**

**WINPRT_SETUP INPUT** _var_ _$_[,**ERR=**_stmtref_]

Use the **WINPRT_SETUP INPUT** format to display the Windows Printer Selection dialogue box, allowing the user to select a printer. The string variable returns the name of the printer selected by the user.

**_Example:_**

> ? current$ ! Colour inkjet is current setting  
>  Canon BJC-4300 on \\\machine_1\canon  
> winprt_setup input current$ ! User changes current selection to laser  
> ? current$  
>  HP LaserJet 2100 Series PCL 6 on \\\machine_1\hp

##  See Also

[***WINPRT* Windows Printing**](../file_handling/~winprt~.md)  
[***WINDEV* Raw Print Mode**](../file_handling/~windev~.md)  
[***WINPRT* / *WINDEV* Queues**](../file_handling/_winprt_windev_queues.md)  
**[*WINPRT* / *WINDEV* Printing Examples](../file_handling/_winprt_windev_printing.md)**  
[***PDF* PDF Print Interface**](../file_handling/~pdf~.md)
