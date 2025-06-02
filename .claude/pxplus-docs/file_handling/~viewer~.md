# Special File Handling

***VIEWER*** |  **_Print Preview_**  
---|---  
  
##  Formats

1. |  _Open for Preview:_ |  **OPEN (**_chan_**)"*VIEWER* [ ;**_options_**]"**  
---|---|---  
2. |  _Via WindX_ : |  **CALL "*WindX.utl;SPAWN","*VIEWER* -XT=1 -ARG** _filename_**[DELETE]"**  
3. |  _Via Command Line_ : |  _path**\**_**PVX _\_ PXPLUS.EXE"*VIEWER* -XT=1 -ARG **_filename_**[DELETE]"**  
  
**_Where:_**

_chan_ |  Channel or logical file number (e.g. open (1)"*viewer*").  
---|---  
**DELETE** |  Optional keyword. Use the **DELETE** to tell PxPlus to erase the file when the viewer closes.  
_filename$_ |  Name of the file that the print job is stored in or being spooled to. The file must be a serial file and **_not_** locked. See [**SERIAL**](../directives/serial.md) directive. To override the normal requirement that a serial file be locked, use **['LU'](../parameters/lu.md)** system parameter.  
**PVX | PXPLUS.EXE** |  Command to launch PxPlus. See **[Launching PxPlus](../PxPlus%20Installation%20and%20Configuration/Launching%20PxPlus/Overview.md)**.  
***VIEWER*** |  Keyword, not case-sensitive. Special interface, enclosed in quotation marks within **[OPEN](../directives/open.md)** directive. (Include *****  _asterisks_ in syntax)  
_options_ |  A series of semi-colon separated options that can be used to set the Margins, Orientation, Paper size, etc. of the printer that the viewer is to emulate. Specific properties are listed under [**WINPRT_SETUP Properties**](../directives/winprt_setup.htm#Mark5).  
***WINDX.UTL;SPAWN** |  PxPlus **_utility;function_**. See **[Format 10: [WDX] and *WindX.utl](../command_tags/wdx.htm#Mark20)**.  
  
##  Description

#### **Note:**  
***VIEWER*** is supported for use in **_WindX_** or **_Windows only_**.

The ***VIEWER*** is a special device file for previewing reports. The ***VIEWER** * is able to:

  * Capture a print job to a file.
  * View currently spooling print jobs or print jobs stored on the disk.
  * Work on the local Windows client via WindX.
  * Zoom in/out in four states.
  * GoTo: Page, First Page, Last Page, Previous Page, Next Page, Specific Page Number.
  * Search text.
  * Copy to the Clipboard.
  * View a job while it is still spooling.



#### **Note:**  
If the global variable **%PDF_DEFAULT$** contains the option **VIEWER** , the system built-in PDF driver and external PDF viewer will be used whenever the application opens ***VIEWER***.

An **OPEN** may specify a number of semi-colon separated options for invoking the **VIEWER** interface. These may be included as part of the path or within the **OPT=** clause:

> **OPEN(**_chan_ ,**OPT="**_option;option_ _;_**")"*VIEWER*"**

Two special options (**INLINE** and **ONCLOSE**) can be used to control how the preview is created at run time. These and other options are described below.

***VIEWER*_Output Parameters_**

The options that can be used to define PDF output are:

**Option** |  **Description**  
---|---  
**COLLATE=YES | NO** |  **_(Printer Output Only)_** Collate paper.  
**COLOR=YES | NO** _or_ **COLOUR=YES | NO** |  **_(Printer Output Only)_** Colored print.  
**COLUMNS=**_num_ |  **_(Text-based Reports Only)_** Minimum number of columns.  
**COPIES=**_num_ |  **_(Printer Output Only)_** Set number of copies.  
**CREATED** |  Used to document the output file when it is saved.  
**DPI** |  Resolution in dots per inch.  
**FONT=**_fontspec_ |  Default font for reports. Defaults to "Courier New, -10".  
**FONTSIZE=**_num_ |  Default font size for reports.  
**INLINE** |  See **[*PDF* Output Parameters](~pdf~.htm#Mark6)**.  
**MARGINS=**_top_ **:**_left_**:**_right_**:**_bottom_ _or_ **MARGIN=**_top_**:**_left_**:**_right_**:**_bottom_ |  Defines margin settings in 1/1000ths of an inch.  
**ONCLOSE** |  Invokes a new instance of the viewer interface when the printer channel is closed.  
**ORIENTATION=LANDSCAPE | PORTRAIT** |  Swap output width for length, and vice versa.  
**PAGINATIONAT=**_num_ |  Auto form feed at row.  
**PAPERSIZE=**_num_ |  Define paper size.  
**PRINTER=**_string_ |  Associated printer name.  
**QUALITY=**_num_ |  **_(Printer Output Only)_** Specifies DPI, 0 (or unspecified) = printer default.  
**RANGE=**_num_ **|**  _from_**:**_to_ |  Select only specific page number or range to print.  
**ROWS=**_num_ |  **_(Text-based Reports Only)_** Minimum number of rows.  
**SCALETOFIT** |  **_(Text-based Reports Only)_** Resize report to fit paper size.  
**SOURCE=**_num_ |  Set specific paper source.  
**SUPPRESSALLBLANKPAGES** |  Suppress all blank pages.  
**SUPPRESSFIRSTBLANKPAGE** |  Suppress first blank page.  
**SUPPRESSWATERMARKS** |  Suppress watermark display.  
**TITLE=**_string_ |  Add Title tag to preview. Can also be used to complete the information in the Windows Print Job window.  
**USER** |  Used to document the output file when it is saved.  
**WATERMARKIMAGE=**_string_ |  Image name, assumes 100 pixels to the inch.  
**WATERMARKIMAGELOCATION=**_num_ |  0 = Centered  
1 = Tiled  
2 = Top Left  
3 = Top Right  
4 = Bottom Left  
5 = Bottom Right  
**WATERMARKTEXT=**_string_ |  Watermark text.  
**WATERMARKTEXTFONT=**_fontspec_ |  Font for watermark text.  
**WATERMARKTEXTLOCATION=**_num_ |  0 = Centered  
1 = Tiled  
2 = Top Left  
3 = Top Right  
4 = Bottom Left  
5 = Bottom Right  
**WATERMARKTEXTROTATION=**_num_ |  Text rotation, angle in degrees.  
  
The following six options are used only if the **['CP'](../mnemonics/cp.md)**, **['EP'](../mnemonics/ep.md)** and **['SP'](../mnemonics/sp.md)** mnemonics are encountered in the report. If not set, then the viewer will attempt to set correct values for each. It is not necessary to set all of these items. Simply setting **SPCols** is enough. The values for **'CP'** and **'EP'** are calculated, and the **Rows=** will all default to the same value.

**Option** |  **Description**  
---|---  
**CPCOLS=**_num_ |  0 to 255, number of columns when in 'CP'.  
**CPROWS=**_num_ |  0 to 255, number of rows when in 'CP'.  
**EPCOLS=**_num_ |  0 to 255, number of columns when in 'EP'.  
**EPROWS=**_num_ |  0 to 255, number of rows when in 'EP'.  
**SPCOLS=**_num_ |  0 to 255, number of columns when in 'SP'.  
**SPROWS=**_num_ |  0 to 255, number of rows when in 'SP'.  
  
##  Example

The following example illustrates how to open and use the ***VIEWER*** for print preview:

> CHAN=unt;  
>  open (CHAN)"*VIEWER*"  
>  print (CHAN)'font'("Courier New",-10),'DF',  
>  print (CHAN)'font'("Arial",2),'text'(@x(2),@y(2),"Fonted Text"),  
>  print (CHAN)'picture'(@x(3),@y(5),@x(43),@y(30),"*win/nomads2"),

#### **Note:**  
Set the [**'BM'**](../mnemonics/bm.md) mnemonic to **_On_** to have the ***VIEWER*** send all data directly to the print file without interpretation. This allows you to send print jobs to any Windows printer that is available on the client PC. The ***VIEWER*** filters out the first and/or last page if either is blank.

The ***VIEWER*** does not return values for maximum column/line; i.e. in **[MXC( ) / MXL( )](../functions/mxc.md)** functions.

The following example illustrates how to approximate the number of columns:

> CHAN=unt;  
>  open (CHAN)"*WINPRT* POINTSZ=-10"  
>  LOOP:  
>  print (CHAN)'font'("Courier New",POINTSZ),'DF',  
>  if mxc(CHAN)<132 \  
>  then POINTSZ+=2;  
>  goto LOOP  
>  LINES=mxl(CHAN),COLS=mxc(CHAN)  
>  print (CHAN)'AB', ! <\--- aborts print job  
>  close (CHAN)  
>  open (CHAN)"*VIEWER*"  
>  print 'font'("Courier New",POINTSZ),'DF',mn/line
