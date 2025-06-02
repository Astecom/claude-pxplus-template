# System Functions 

**FIN( )** |  **_Return File Information_**  
---|---  
  
##  Formats

1. |  _Return File Information_: |  **FIN(**_filespec_ __[,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Return Detailed Information_ _:_ |  **FIN(**_filespec_ ,_field_ _$_ [,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_filespec_ |  Can be a numeric expression indicating the open channel number to use or a string expression containing the pathname or table name (if string is prefixed by the keyword **TABLE**) of the file to use.  
---|---  
_field$_ |  String expressions (case insensitive). For a list of valid keywords, see **[Format 2](fin.htm#Mark7)**.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
_(TABLE support was added in PxPlus 2018 Update 1.)_

##  Returns

String, physical information about open file.

##  Description

The **FIN(** **)** function returns a character string containing details about an existing open file. The information returned is not the same as that in the **[FIB( )](fib.md)** function. While some of the information in the **FIN( )** function is common to information in the **FIB( )** function, the **FIN( )** function includes more detailed information about the physical file (e.g. file size in bytes, date and time of the last update, etc.).

#### **Note** :  
The **[FID( )](fid.md)** and **FIN( )** format layouts will be changed whenever there is a change to the **['FF'](../parameters/ff.md)** system parameter.

##  Format 1

**_Return File Information_**

**FIN(**_filespec_ [,**ERR=**_stmtref_]**)**

**_Example:_**

In this example, the **FIN(** **)** function is used to find out the number of characters in IN_FILE$ (the variable contains the name of a serial file):

> IN_FILE=hfn;  
>  open (IN_FILE)IN_FILE$  
>  F$=fin(IN_FILE)  
>  close (IN_FILE)  
>  CHARS=dec(F$(1,4))  
>  !

##  Format 2

**_Return Detailed Information_**

**FIN(**_filespec_ ,_field_ _$_[,**ERR=**_stmtref_]**)**

Use this format to have the **FIN(** **)** function return details.

**_Example:_**

This returns the value of the Windows API Device handle for a communications port:

> fin(10,"DEVHANDLE")

The following table lists the valid keywords for the **FIN( )** function:

**FIN _Field$_** **Value** |  **Description**  
---|---  
**4D_ML_Adjust** |  Override value for the height adjustment to be applied to 4D Multi-Lines.  
**AlwaysOnTop** |  Returns "1" if the window is locked On Top of all other windows; "0" if not.  
**AutoCompleteLimit** |  FIN(0,"AutoCompleteLimit") returns the current AutoComplete limit. (_Default_ is 10.)  
**AutoConvertUtf8** |  Returns "1" if enabled, "0" if not. When enabled in conjunction with setting the **['U8'](../parameters/u8.md)** system parameter, the system will internally convert UTF-8 data to its corresponding single byte character based on the current text plane character set to allow for its display. This conversion will be done on any standard PRINT to the text plane and on all user input of extended characters (e.g. Accented characters, high-order ASCII, etc.). Where there is no corresponding single byte character for a UTF-8 code, a ? will be output. If the 'U8' system parameter is not set, this option is ignored.  
**AutoSpellCheck** |  Returns the current setting for automatic spell checking for Multi-Line controls. Possible values are: |  "YES" |  _(Default)_ Spell checking is automatically applied to Multi-Line controls that allow multiple lines of input (greater than 1.5 lines high).  
---|---  
"ALL" |  Spell checking is automatically applied to Multi-Line controls that allow multiple lines of input, as well as all Multi-Line controls that allow for 12 or more characters of input and do **_not_** have a format mask. Controls that are marked _Uppercase_ only or are used for Arabic (right to left) input are **_not_** spell checked.  
"NO" |  Spell checking is **_not_** automatically applied to Multi-Line controls. Only Multi-Line controls with the "S" option specified (see **[MULTI-LINE](../directives/multi_line.htm#Mark4)** directive) will have spell checking enabled.  
  
_(added in PxPlus 2019)_  
  
**BbxFIN** |  Returns a fully compatible BBx style FIN for a terminal device.  
**BlinkTime** |  BLINKTIME returns the rate at which data will blink on a graphical device. The value defines the rate appears or disappears in terms of milliseconds (i.e. "500" indicated 500ms or 1/2 a second). A rate of "0" indicates blinking is disabled. The default rate is "500" milliseconds. _(added in PxPlus v8.11, build 9182)_  
**BrowserDebug** |  Returns "1", "Y" or "y" if the browser developer console will display in a popup window for **[*BROWSER](../utilities/browser.md)** controls that are created. The browser developer console makes it possible to examine the code and properties of the Web page loaded by the *BROWSER control and debug any errors. Returns "0" if the browser developer console will not display. _(added in PxPlus 2021)_  
**BrowserLang** |  Returns the language code that controls the embedded Chromium browser language. See **[Language Codes](../utilities/browser.htm#Mark1)** for a list of supported languages and codes. The value of **BrowserLang** is only read the first time per process that an embedded Chromium browser is created. This will override the **BrowserLang** INI setting. Defaults to user OS language unless **BrowserLang** was set in the INI file. See **[INI Contents](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/INI%20Contents.htm#Mark6)**. _(added in PxPlus 2019)_  
**Buffered** |  Returns "1" for output buffered, "0" for not buffered.  
**Buffers** |  Returns the number of buffers allocated specifically for the file. Returns "0" if using common buffer pool.  
**BytesLeft** |  Returns the number of bytes of text data unprinted in the last Block print to a WINPRT or PDF file.  
**CaptureClientOnly** |  Returns the settings controlling the SAVE CONTROL output. Will return "1" if only the client area (interior) of a window/control will be saved; otherwise, will return "0" indicating the border and caption for the window/control will be included in the output. _(added in PxPlus v11.50)_  
**CascadeTextFont** |  Returns "1" if the current text mode font will be cascaded into subordinate windows as opposed to using the default text mode font.  
**CB_RB_TextFont** |  Returns which font will be used for Radio Button and Check Box text. Returns "1" if the system is set to display text using fixed text plain font. Default is to use the graphical font ("0").  
**CbxImage** |  **_(Windows Only)_** Returns the pathname to the image used to create Check Boxes on the screen. See **[Customizing Radio Buttons and Check Boxes](../appendix/customizing_rb_and_cb.md)**. _(added in PxPlus 2017)_  
**CbxMarkSize** |  **_(Windows Only)_** Width of the space (in pixels) used to draw the Check Boxes in front of or following the text. Default is based on the height of one line. See **[Customizing Radio Buttons and Check Boxes](../appendix/customizing_rb_and_cb.md)**. _(added in PxPlus 2017)_  
**ClrSelectIgnore** |  Returns "1" if using the Windows default display colors (white characters on blue) for a selected line in a List box/List view. Returns "0" if using the colors specified for the List box/List view contents. _(added in PxPlus 2014 - Feature Pack 1)_  
**Colour** _nnn_ |  RGB value or logical name for colour number (1 - 256).  
**Copy_1Line_NoCR** |  Returns the current setting of the **[Copy_1Line_NoCR](../mnemonics/option.htm#copy_1line)** option that controls the appending of a line feed at the end of single line copy. _(added in PxPlus 2021 Update 1)_  
**CTLList** |  List of CTL values currently present on the window. _(added in PxPlus v6.30)_  
**CurColor**  
  
 _or_ **CurColour** |  Current text color that is set by the last **['COLOR'](../mnemonics/colour.md)** mnemonic. _(added in PxPlus 2021)_  
**CurFont** |  Current graphic font that is set by the last **['FONT'](../mnemonics/font.md)** mnemonic. _(added in PxPlus 2021)_  
**CurKno** |  Returns the current KNO value.  
**DateFmt** |  Returns the current specified Date format used to return dates for an **[ODB](../command_tags/odb.md)**, **[MySql](../command_tags/mysql.md)**, **[OCI](../command_tags/oci.md)**, **[DB2](../command_tags/db2.md)** or **[ADO](../command_tags/ADO.md)** database connection. If no **DateFmt** was specified for the channel, this will return a null string and you will need to consult that specific database documentation to determine the format it will return (generally YYYY-MM-DD hh:mm:ss.hhh). _(added in PxPlus 2023)_  
**DevHandle** |  Windows API device handle for communications port.  
**Device** |  Can be used with WINPRT or WINDEV devices to return the physical device name of the printer being used. _(added in PxPlus v6.30)_  
**DisableDummyPrinters** |  Returns "Y" or "N" based on whether you have included the option in the system INI to ignore the NUL: print driver interface.  
**DiskFIN** |  Can be used with a *PDF* file to obtain a Disk FIN( ) format return value instead of a Device style response. _(added in PxPlus v6.30)_  
**DoubleBfr** |  Controls the double buffering of screen updates on Windows. If set to "1", all screen updates are first done off-screen then copied on screen in a single update, thereby reducing flickering. The default setting is **_Off_** (0). _(added in PxPlus v10)_  
**Driver** |  PxPlus device driver name.  
**DropFiles** |  List pathnames of files that have been dropped onto a control/window from an external application. _(added in PxPlus v7.00)_  
**Extract** |  Extract status of file (1 if Extract pending).  
**FileLength** |  Size of physical file. _(Includes the total size of all segments in a multi-segmented VLR file as of PxPlus v11.50)_  
**Filename** |  Original filename used in **OPEN**.  
**File_Create** |  Returns file creation command for any PxPlus-based file.  
**Font** |  Window text font.  
**Formats** |  Returns a list of the valid record formats for the opened file. The format names will be separated by a standard field separator character (SEP). If the file does not contain multiple record formats, the function will return a null string. _(added in PxPlus v6.30)_  
**Frame** |  Returns the current window frame setting. Possible values are: |  "NONE" |  The window has no border/frame.  
---|---  
"CAPTION" |  The window has a border and caption line.  
"THICK" |  The window has a thick border.  
"THIN" |  The window has a thin border (usually a single pixel wide black line).  
  
_(added in PxPlus v7.00, build 9163.1)_  
  
**FrameDarkClr** |  Colour of shadow line drawn by the **['FRAME'](../mnemonics/frame.md)** mnemonic. (_Default_ : Dark Gray) _(added in PxPlus v11.00)_  
**FrameLiteClr** |  Colour of highlight line drawn by the **['FRAME'](../mnemonics/frame.md)** mnemonic. (_Default:_ Light Gray) _(added in PxPlus v11.00)_  
**FrameTextClr** |  Colour of text header used by the **['FRAME'](../mnemonics/frame.md)** mnemonic.  
**FreeCTL** |  Returns the lowest unused CTL number within the range of 5000 through 9999 for the current window (can only be used with file 0). _(added in PxPlus v6.30)_  
**GraphicFont** |  Window default graphic font.  
**Graphics** |  Returns a printable list of currently active graphic mnemonics for the current window.  
**GrayDisabledBmp** |  Controls the display of images on disabled buttons. Returns "0" or "N" (**_Off_**) if the images on disabled buttons display only as shadows. This means that only the shadow left by the outline of the image is seen. Returns "1" or "Y" (**_On_**) if the images on disabled buttons are converted to gray scale. The _default_ setting is "0" or "N" (image displays as a shadow). **_Example:_** _(added in PxPlus 2017)_  
**GridAlignLines** |  Returns "0" or "1", depending on the current setting. When **_enabled_** ("1"), any Multi-Line text (lines separated by line feed $0a$) in a Grid **_Button-style cell_** will have each line of text individually aligned as per the **['Align$](../properties/align_.md)** property. When **_disabled_** ("0"), the lines will be treated as a block of text, and that full block will be aligned as per the **['Align$](../properties/align_.md)** property.

#### **Note:**  
This option was added in PxPlus 2017 with a _default_ setting of **_enabled_**.

_(added in PxPlus 2017)_  
**GridMLVersion** |  Returns the setting for the **GridMLVersion** option, which is used to set the behavior of the **Enter** key and the **Up/Down** arrow keys when editing a Grid cell with lines of Multi-Line text. Returns "1" _(default setting)_ when **Enter** or **Ctrl - Enter** creates a new line, and the **Up/Down** arrow keys are used to move up/down between the lines of text in the cell. Returns "0" when **Ctrl - Enter** creates a new line, the **Enter** key enters/exits the cell, and the **Up/Down** arrow keys are used to move to other cells. _(added in PxPlus 2019)_  
**Handle** |  Operating system file handle.  
**HDC** |  Returns handle to the device context for a *WINPRT* channel.  
**HeightTextUsed** |  Returns the number of lines of print space used in the last Block print to a WINPRT or PDF file. _(added in PxPlus v7.11)_  
**HideTips** |  This option is issued to control the display of Floating tips in the system. If set to "1", tips will not be displayed. Setting it to a null value or "0" (_default_ setting) enables tips. _(added in PxPlus v8.00)_  
**HoverCTL** |  Returns the CTL value that the system will generate when the mouse hovers over the text plane in the current windows. A value of "0" indicates the option is disabled _(Default)_. _(added in PxPlus v7.30)_  
**HWND** |  **_(Windows/WindX Only)_** Returns the handle of the current window.  
**ICON** |  Window default icon image name.  
**Identifier_QUO** **** |  **_(ODB, Oracle, DB2, and MySql Only)_** Returns the character(s) required by a SQL-based database that must surround field, column, or table names that contain invalid characters such as spaces. _(added in PxPlus v8.00)_  
**IMAGELIB** |  Returns pathname of current extended image library. _(added in PxPlus v11.00)_  
**IMAGELIST** |  **_(Windows/WindX Only)_** Returns a comma-separated list of active 'IMAGE' groups followed by a colon and the number of items in each group.  
**Input** |  Returns "1" if there is input available on the device. Returns "0" if there is no input available. Generally used only with physical devices and/or TCP channels. _(added in PxPlus v10)_  
**IO_Program** |  Program filename of imbedded I/O.  
**Journalized** |  Returns "1" if the specified file is being journalized; otherwise "0". _(Must use the channel for the file you are inquiring about.)_ _(added in PxPlus 2016)_  
**KeyBoard** |  **_(Windows Only)_** Returns a four-character hex string containing the current keyboard language. _(added in PxPlus v8.11, build 9182)_  
**Key_Definition** |  Human readable key definition.  
**Key_Names** |  List of Named Keys for an open channel.  
**Key_Options** |  Returns the **OPT=** value.  
**Key_Size** |  External Key size of a Keyed file.  
**Ksz** |  Same as **Key_Size**.  
**LCL_CTime** **  
LCL_MTime  
LCL_ATime** |  These FIN functions return the files creation, modified, and last access time as a string consisting of: YYYY-MM-DD hh:mm:ss The date/time returned has be converted to local time on the system thus for files on a shared server the value may differ based on the current time zone. _(added in PxPlus v8.11, build 9182)_  
**LockOverDisable** |  Returns "Y" if Multi_Line input fields that are **_both_** locked **_and_** disabled are set to display as locked (as opposed to disabled). Returns "N" if not set. _(added in PxPlus 2023 Update 1)_  
**LogFile** |  Returns the currently defined system log file as defined in the INI file or through the use of the **['OPTION'( )](../mnemonics/option.md)** mnemonic. When defining the log file, you can specify the maximum file size (in megabytes) that you want the log file to grow. See **[PxPlus Log File](../PxPlus%20User%20Guide/Development%20Tools/Error%20Handling%20and%20Debugging/Additional%20Debugging%20Procedures%20and%20Facilities.htm#logfile)**. _(added in PxPlus v10)_  
**MaskColour** **  
**_  
or_ **MaskColor** |  Returns the colour to be considered completely transparent within the current window. Returns a value of "N/A" if transparency is not available.

#### **Note:**  
Clicking the mouse on a fully transparent section of the window passes the mouse click to the window below.

_(added in PxPlus v7.00, build 9163.1)_  
**MaxKno** |  Maximum file access key number allowable for the file.  
**MaxRec** |  Same as **[Records_Allowed](fin.htm#recs_allowed)**.  
**ML_Overlap_Adjust** |  Returns the current setting for the automatic adjustment of the size/position of overlapping Multi-Line controls. When enabled (returns "1"), the system will adjust Multi-Lines so that neither the field nor its border overlap any adjacent Multi-Line. _(added in PxPlus v6.30)_  
**MouseWheelCount** |  Current setting for the mouse wheel in terms of the number of Up/Sown arrows to emulate when using the wheel. _(added in PxPlus v6.30)_  
**MessageBar** |  Returns the height of the message (status) bar region at the bottom of the screen. _(added in PxPlus v7.65)_  
**Msg_Is_Tip** |  Returns the setting for the "Msg_Is_Tip" option, which, if set ("1"), automatically converts all MSG= values to TIP values.  
**Name** |  Same as **[Pathname](fin.htm#pathname)**.  
**NumRec** |  Number of records used.  
**Orientation** |  Can be used with a **[WINPRT](../file_handling/~winprt~.md)** or **[PDF](../file_handling/~pdf~.md)** device to obtain the current printout orientation of either LANDSCAPE or PORTRAIT. _(added in PxPlus v8.00)_  
**Output** |  Returns "0" if the device is not ready to receive any output data. Returns "1" if the device is able to receive some data (at least 1 byte). Generally used only with physical devices and/or TCP channels. _(added in PxPlus v10)_  
**Owner** |  Number of the object that owns the file (i.e. the object that issued the OPEN OBJECT directive for the file). _(added in PxPlus v8.00)_  
**PasteFilter** |  Returns the setting for the **[PasteFilter](../properties/pastefilter.md)** property. _(added in PxPlus 2020 Update 1)_  
**Pathname** |  Full pathname of file.  
**PDFFactor** |  Returns the multiplication factor to be used in computing the extra vertical space (height)to be allocated to PDF fonts. Applies only to PDF files when using the Haru library (_Default:_ 1.2). _(added in PxPlus v9.00, build 9200)_  
**PDFFontDir** |  Returns the directory the system will search for true type fonts when creating PDF files. _(added in PxPlus v9.00, build 9200.1)_  
**PDFMargin** |  Returns the number of thousandths of an inch currently used for setting the default PDF printer margins. These will be assigned on all edges of the printed document. Default value is 250 (1/4 of an inch). _(added in PxPlus v9.00, build 9200)_  
**Port** |  Can be used with a **[WINPRT](../file_handling/~winprt~.md)** device to obtain the physical port being used for print job. _(added in PxPlus v6.30)_  
**Printer_Status** |  **_(Obsolete -- SCO Only)_** Returns printer status.  
**RbtImage** |  **_(Windows Only)_** Returns the pathname to the image used to create Radio Buttons on the screen. See **[Customizing Radio Buttons and Check Boxes](../appendix/customizing_rb_and_cb.md)**. _(added in PxPlus 2017)_  
**RbtMarkSize** |  **_(Windows Only)_** Width of the space (in pixels) used to draw the Radio Button in front of or following the text. Default is based on the height of one line. See **[Customizing Radio Buttons and Check Boxes](../appendix/customizing_rb_and_cb.md)**. _(added in PxPlus 2017)_  
**Record_Size** |  Maximum record size.  
**Records_Allowed** |  Maximum number of records.  
**Records_Used** |  Same as **[NumRec](fin.htm#NumRec)**.  
**ResourceLib** |  Returns the pathname to resource library/libraries. As of PxPlus v11, the resource library value may contain multiple semi-colon (or comma) separated file names up to a maximum of 10.  
**RMouseCopy** |  Returns the setting of right mouse click Copy/Paste functionality. This functionality is primarily used when running older Text mode applications and provides the ability to copy/paste text from the screen much like a terminal emulator. When the value is "1", the user can use the right mouse button to copy/paste text from/to the application. It is "0" by default. Its setting is automatically cascaded to subsequent windows. _(added in PxPlus v8.11, build 9182)_  
**Rsz** |  Same as **[Record Size](fin.htm#rec_size)**.  
**Save_Msg_Bfr** |  If initially set to non-blank (by the **[SETDEV](../directives/setdev.md)** directive or **['OPTION'](../mnemonics/option.md)** mnemonic) and a SAVE command is issued, this FIN value will return a list of errors that occurred during the SAVE function.  
**Separator** |  Field separator character or "***** Dynamic***** " for files with dynamic field separators.  
**SignalCaptionChg** |  Returns the CTL value that is generated when the caption changes on a window/dialogue. If null ("") or "0", then no CTL is generated when window caption changes. _(added in PxPlus 2017)_  
**SortImageList** |  Returns the setting for the sorting of all **['IMAGE'](../mnemonics/image.md)** graphics groups by name. This sort order is used by the **[NOMADS Panel Designer](../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** to determine the order in which the graphics are drawn on a window. When the value is "1", the 'IMAGE' groups are sorted and drawn in alphabetical order by name on the current window. When a new 'IMAGE' group is created, it is inserted into the list of 'IMAGE' groups alphabetically. When the value is "0" _(Default)_ , the 'IMAGE' groups are drawn in the order they are created with the default group first followed by all subsequent groups in the order they were created. _(added in PxPlus 2014.01 Update 0005)_  
**Source** |  Can be used with a **[WINPRT](../file_handling/~winprt~.md)** device to return the current selected source (Bin) number. Use **SourceList** (below) to determine the possible sources and their associated numbers. _(added in PxPlus v7.11)_  
**SourceList** |  Can be used with a **[WINPRT](../file_handling/~winprt~.md)** device to return a comma-separated list of printer paper sources (bins). Each entry consists of its internal source number, a colon, and name. **_Example:_** "7:Sheet,259:Sheet (Borderless),4:CD/DVD," _(added in PxPlus v7.11)_  
**SnapTo** |  Returns the window to which the current window will "SnapTo" when moved.  
**StdFont** |  Standard window text font.  
**StdGraphicFont** |  Standard graphic font.  
**StdGridHideButtons** |  Returns the standard/default for the **['HideButtons](../properties/hidebuttons.md)** property used for grids. _(added in PxPlus 2020)_  
**StdGridQueryImg** |  Returns an image pathname or internal image (!xxxxxx), which will be used as the image to display in the query/lookup buttons of a grid only when a grid is first created. An invalid value will result in the original ellipsis (...) being used. _(added in PxPlus 2021)_  
**StdSortOrder** |  The value provided defines the default column sort settings used by the LIST_BOX (Report View) and GRID. Possible values are: |  Null |  Uses StdSortOrder setting (if StdSortOrder not set, uses raw sort).  
---|---  
R |  Raw binary sort.  
C |  Case insensitive sort.  
A |  Sort ignores accents.  
N |  Null values at end of sort.  
CA |  Ignore case and accents.  
CN |  Ignore case/Null values last.  
AN |  Ignore accents/Null values last.  
CAN |  Ignore case and accents/Null values last.  
  
_(added in PxPlus v11.00 and upgraded to a string value in v11.50)_  
  
**Suppress_FF** |  Returns the file FF suppression settings, which will be one of the following values: |  "NO" |  No FF suppression.  _(Default)_  
---|---  
"ALL" |  Suppresses any 'FF' mnemonic if it will result in a blank page being produced. This setting will **_not_** suppress a 'FF' mnemonic at the start of a report where a leading 'FF' is often used to assure output starts at the top of a page.

#### **Note:**  
PDF and WINPRT output will suppress a leading 'FF', as these by definition always start a report on a new page.  
  
"FIRST" |  Suppresses an 'FF' mnemonic if it is the first output to the channel. Only the first 'FF' is suppressed.  
"LAST" |  Suppresses a trailing 'FF' mnemonic that applications often send to eject the paper at the end of a report. It is always enabled on output to PDF files.  
"BOTH" |  A combination of "FIRST" and "LAST".  
  
_(added in PxPlus v9.00, build 9200)_  
  
**SysGuiFont** |  Standard Windows graphical user interface font for controls.  
**SysMenu#** |  Returns the value of **FIN (0,"SysMenu#")** when adding a menu item to the system drop-down menu. This will return the current setting or "" if not set, or "<err>" will be returned if a non-numeric value for # is supplied. _(added in PxPlus 2016)_  
**System_Jrnl** |  Returns the pathname to the system journal if open; otherwise "" _(must use channel 0)_. See **[SYSTEM_JRNL](../directives/system_jrnl.md)** directive. _(added in PxPlus 2016)_  
**TextUsedHeight** |  When used with **[*WINPRT*](../file_handling/~winprt~.md)** or **[*PDF*](../file_handling/~pdf~.md)**, returns the number of graphical units the last 'TEXT' mnemonic used when formatted. See [**'TEXT'**](../mnemonics/text.md) mnemonic.  
**TipFont** |  Returns the current font attributes of the floating tip windows. _(added in PxPlus v9.00)_  
**TipTimerCycles** |  Defines the length of time (in tenths of a second) that a tip will be displayed. _(added in PxPlus v8.30)_  
**ToolBar** |  Returns the height of the toolbar (region at the top on the main window above window 0). _(added in PxPlus v9.00)_  
**Transparency** |  Percentage transparent for the current window. A value of "0" indicates non-transparent, "100" would be completely transparent. Can only be applied to TOP level windows. Returns the value "N/A" if transparency is not available. _(added in PxPlus v9.00)_  
**True_TTY** |  **_(UNIX/Linux Only)_** Returns FacetTerm TTY. (Returns "JavX" when using JavX.)  
**UTC_ATime** |  Last accessed time, UTC in seconds since Jan 1, 1970.  
**UTC_CTime** |  Creation/changed time, UTC in seconds since Jan 1, 1970.  
**UTC_MTime** |  Last modified time, UTC in seconds since Jan 1, 1970.  
**WdwIcon** |  Window icon image name.  
**XYClient** |  Returns the width and height (in pixels) of the client region for the current window. _(added in PxPlus v8.30, build 9190)_  
**XYMonitors** |  Returns a list of monitors on the workstation. The returned list contains a string with a line feed ($0a$) separating strings describing each monitor on the system. The monitor strings contain a series of comma-separated values consisting of the logical device name followed by the co-ordinates of the top, left, bottom and right corners of the monitor. **_Example:_** print fin(0,"XYMONITORS")  
  
\\\\.\DISPLAY1,0,0,1920,1080  
\\\\.\DISPLAY2,1920,0,3840,1080 _(added in PxPlus 2014)_  
**XYMouse** |  Returns the X and Y position for the mouse in a graphical environment. The values returned are absolute value relative to the desktop monitor as opposed to the current window. _(added in PxPlus v7.00, build 9163.1)_  
**XYPos**   
  
_or_ **XYPos_NoChk** |  Returns four comma-separated numbers containing the absolute pixel address (top, left, bottom, and right) for the current window. These numbers are relative to the desktop of the workstation or the current window's parent window. _(added in PxPlus v7.00, build 9163.1)_  
**XYRegion** |  Returns four comma-separated numbers containing the dimensions (in pixels - top, left, bottom and right) of the full desktop. These values will differ from the maximum window size returned in the MSE variable as it returns the size of the largest window workspace excluding caption and border. This value returns the usable size of the desktop. A non-zero _top_ value indicates the tool bar is on the top. A non-zero _left_ value indicates the tool bar is to the left. _(added in PxPlus v7.00, build 9163.1)_  
**XYWdw** |  Returns four comma-separated numbers containing the dimensions (in pixels - top, left, bottom, and right) of the current **_child_** window. This is slightly different to **XYPos** in that the information pertains to the Child windows as opposed to the outer/dialog window. _(added in PxPlus v8.11, build 9182)_  
**ZIPFilename** |  Returns the file/directory name of the next ZIP archive entry. Directory names will always end in a '**/'**  _(forward slash)._ _(added in PxPlus 2014)_  
**ZIPInfo** |  Returns all of the metadata about the next file/directory entry in a ZIP archive. _(added in PxPlus 2014)_  
**ZOrder** |  Returns "1" (default setting) if the current window will be brought to the top of the Z-Order when input focus switches to the window. "0" indicates that the Z-order of the window will not be changed when focus switches to the window. _(added in PxPlus v8.11, build 9182)_  
**TCP-Specific Values**  
**IPAddr** |  TCP/IP address.  
**Secure** |  Indicates if the current connection is secure (uses SSL or TLS) or not. If the connection is secure, the value "1" is returned; else "0".  
**SSL_Protocol** |  Returns the version of SSL currently in use on the specified connection. _(added in PxPlus v11.50)_  
**TLS** |  Returns "1", "1.1", "1.2" or "1.3" if TLS is enforced on connection. _(TLS added in PxPlus 2017)  
(TLS 1.3 support added in PxPlus 2020)_  
**X509_Issuer** |  Who issued the SSL certificate.  
**X509_KeyType** |  What type of key is in the certificate.  
**X509_Not_After** |  Latest date that the certificate is valid for.  
**X509_Not_Before** |  Earliest date that the certificate is valid for.  
**X509_Subject** |  Who the certificate is issued to.  
**Internal Use Values**  
**CheckNews** |  Returns "1" if the used has requested News to be checked; otherwise "0".  
**LastCheckNews** |  Returns the time the news was last checked.  
***ProcId=xxxx** |  Used in a WindX session to pass the process number to the WindX workstation so it will appear in the About box. (No return value - reading the FIN value sets the process ID.)  
***Watch** |  When read, clears the Watch list (no return value).  
**Item Colours and Shading** The following _keyword$_ values return colours to specific characteristics:  
**BtnDownBtmClr** |  Colour for blend at the bottom of pushed button.  
**BtnDownBtmPct** |  Lightness applied to face at the bottom of pushed button.  
**BtnDownMidClr** |  Colour for blend at in middle of pushed button.  
**BtnDownMiddle** |  Mid-point percentage from the top of pushed button.  
**BtnDownMidPct** |  Lightness applied to face in middle of pushed button.  
**BtnDownTopClr** |  Colour for blend at the top of pushed button.  
**BtnDownTopPct** |  Lightness applied to face at the top of pushed button.  
**BtnFaceClr** |  Button face colour.  
**BtnFocusHilight** |  Focus highlight.  
**BtnFrameClr** |  Button/Check Box/Radio Button frame colour.  
**BtnHoverHilight** **** |  Mouse Over highlight.  
**BtnNormBtmClr** |  Colour for blend at the bottom of normal button.  
**BtnNormBtmPct** |  Lightness applied to face at the bottom of normal button.  
**BtnNormMidClr** |  Colour for blend at in middle of normal button.  
**BtnNormMiddle** |  Mid-point percentage from the top of normal button.  
**BtnNormMidPct** |  Lightness applied to face in middle of normal button.  
**BtnNormTopClr** |  Colour for blend at the top of normal button.  
**BtnNormTopPct** |  Lightness applied to face at the top of normal button.  
**CbxMarkClr** |  Check mark or 'X' in a Check Box.  
**ClrAutoCompBack** |  The background colour to be used for text in auto complete List boxes. _(added in PxPlus v9.00, build 9200)_  
**ClrAutoCompText** |  The text colour to be used for text in auto complete List boxes. _(added in PxPlus v9.00, build 9200)_  
**ClrDisabledBack** |  The background colour to be used for text in disabled List boxes, Multi-Lines, Radio-button text and Check boxes. _(added in PxPlus v9.00, build 9200)_  
**ClrDisabledText** |  The text colour to be used for text in disabled List boxes, Multi-Lines, Radio-button text and Check boxes. _(added in PxPlus v9.00, build 9200)_  
**ClrHighlight  
ClrHighlightText** |  The background and text colours to be used to display currently selected items from a List Box or Drop Box and display the background and text in a Multi-Line when it has focus. If focus on the Multi-Line selects all of the text or if a portion of the inputted text is selected for Copy, Cut, Delete or Paste functions, then the selected text uses the standard Windows colour for selected text. _(added in PxPlus 2017)_  
**ClrPlusZ_SB_Back** |  Returns the background for any 'SB' data. (_Default:_ Light Gray button face color) _(added in PxPlus 2022 Update 1)_  
**ClrPlusZ_SF_Back** |  Returns the background for any 'SF' data. (_Default:_ White) _(added in PxPlus 2022 Update 1)_  
**ClrPlusZ_Text** |  Returns text. (_Default:_ Black) _(added in PxPlus 2022 Update 1)_  
**ClrToolBar** |  Background colour for the tool bar. _(added in PxPlus v9)_  
**DrpBtnBackClr** |  Returns the background color for the Drop Box button. _(added in PxPlus 2024)_  
**DrpBtnDisableBackClr** |  Returns the background color of the Drop Box button when the Drop Box is disabled. _(added in PxPlus 2024)_  
**DrpBtnHoverBackClr** |  Returns the background color for the Drop Box button while hovering over it. _(added in PxPlus 2024)_  
**DrpBtnHoverTickClr** |  Returns the color of the down arrow/tick on the Drop Box button while hovering over it. _(added in PxPlus 2024)_  
**DrpBtnTickClr** |  Returns the color of the down arrow/tick on the Drop Box button. _(added in PxPlus 2024)_  
**FrameDarkClr** |  Colour of shadow line drawn by **['FRAME'](../mnemonics/frame.md)** mnemonic. (_Default:_ Dark Gray) _(added in PxPlus v11.00)_  
**FrameLiteClr** |  Colour of highlight line drawn by **['FRAME'](../mnemonics/frame.md)** mnemonic. (_Default:_ Light Gray) _(added in PxPlus v11.00)_  
**FrameTextClr** |  Colour of text header used by the **['FRAME'](../mnemonics/frame.md)** mnemonic. _(added in PxPlus v11.00)_  
**RbtMarkClr** |  Ball within a Radio Button.  
**StdFocusBackClr** |  Returns the background colors used to display currently selected items from a List Box or Drop Box and display the background color in a Multi-Line when the control has focus. _(added in PxPlus 2018)_  
**StdFocusTextClr** |  Returns the text colors used to display currently selected items from a List Box or Drop Box and display the text in a Multi-Line when the control has focus. _(added in PxPlus 2018)_  
**StdGridLineClr** |  Returns the standard/default line color used for Grids. Default is RGB: 220,220,220. _(added in PxPlus 2020)_  
**StdLvueHotlinkClr** |  **_(Report View Only)_** Returns the default hotlink column color for List Views. _(added in PxPlus 2018)_  
**StdLvueHoverBackClr** |  **_(Report View Only)_** Returns the background hover color applied system-wide for all List Views. _(added in PxPlus 2018)_  
**StdLvueHoverTextClr** |  **_(Report View Only)_** Returns the text color used when the mouse is over a row in a List View. _(added in PxPlus 2018)_  
**StdLvueLineClr** |  **_(Report View Only)_** Returns the standard/default line color used for report style List Views. Default is RGB: 220,220,220. _(added in PxPlus 2020)_  
**StdRowHilight1** |  Colour to be used as the background of alternate rows in a List Box or Grid. _(added in PxPlus v11.00)_  
**StdRowHilight2** |  Colour to be used as the second background of alternate rows in a List Box or Grid. _(added in PxPlus V11.00)_  
**TipArrowColor** |  Color to be used by HTML tips for the tip arrowhead _and_ the underline below the tip title. (_Default:_ Dark Red) For information on HTML Tips, see **[Defining an Info Tip](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Defining%20an%20Info%20Tip.md)**. _(added in PxPlus 2016)_  
**TipColor  
** _  
or_ **TipColour** |  Color to be used for non-HTML tips. If the 'TC' system parameter is set to -3 but the **TipColor** (or **TipColour**) setting is not defined, the default Windows color will be used. _(added in PxPlus 2021)_  
The system will return the colours using their internal names as shown below: |  |  Black |  |  White |  |  DarkGray |  |  LightGray |   
---|---|---|---|---|---|---|---  
LightRed |  |  LightMagenta |  |  DarkRed |  |  DarkMagenta |   
LightGreen |  |  LightCyan |  |  DarkGreen |  |  DarkCyan |   
LightBlue |  |  LightYellow |  |  DarkBlue |  |  DarkYellow |   
  
or via RGB code (i.e. "RGB:_n n n"**where** n=_0-255)  
  
** Indicates this option can only be used with channel 0**

#### **Note 1:**  
The record count returned by **NUMREC** / **RECORDS_USED** is based on the last file I/O operation performed by the current task. To obtain up-to-date values, force an I/O operation against the file prior to requesting this information, or use **FIB(** **)** instead.  
  
**Note 2:**  
**UTC_ATime** , **UTC_CTime** , and **UTC_MTime** (Universal Coordinated Time) values returned are OS dependent. Exact definitions of these items may only be determined by checking the OS/file system documentation, as well as, characteristics for the stat function from where the information is queried.

## Keywords for the 'OPTION' Mnemonic

The keywords used in the **'OPTION'** mnemonic can also be used by the **FIN( )** function to retrieve information about environment properties with reference to _channel 0_. For example, FIN(0,""RESOURCELIB") returns the current resource library.

For a list of available keywords, see **['OPTION'](../mnemonics/option.md)** mnemonic.

## For UNIX FacetTerm Use Only

The **FIN(** **)** function reports the actual TTY on which the UNIX FacetTerm session was initiated. If the environment variable FACETTYPE is set/ON in a current FacetTerm session, recognition is automatic. FIN(0,"TRUE_TTY") will return the TRUE /dev/tty terminal or device.

The value returned on a system without FacetTerm will be the same as the value returned by **PTH(0)**. See [**PTH(** **) Return Pathname**](pth.md).

## FIN( ) Contents

Three formats of **FIN** are provided, depending on whether the file is a **[Disk Resident](fin.htm#disk_resident)**, an **[External Database Table](fin.htm#external_tbls)**, or a **[Device](fin.htm#Mark12)**:

**_FIN(__) - For Disk Resident Files_**

**Bytes** |  **Common Header for ALL Disk Resident Files __(Total length = 68 bytes)**  
---|---  
1,4 |  Number of bytes in the file  
5,4 |  Date/Time of last modification (Seconds since Jan. 1, 1970)  
9,4 |  Date/Time of last access  
13,4 |  Date/Time of file creation/change  
17,2 |  Physical device number  
19,4 |  **_(UNIX/Linux Only)_** Inode number  
23,2 |  **_(UNIX/Linux Only)_** User ID of file owner  
25,2 |  **_(UNIX/Linux Only)_** Group ID of file owner  
27,2 |  Status flag. Bitmapped values for **OPEN** clauses: $0001$ - **READ** OK  
$0002$ - **WRITE** OK  
$0004$ - **EXECUTE** OK **_(Windows Only Flag Value)_**  
$0008$ - Is a directory  
$0010$ - **LOCK** 'ed  
$0020$ - **OPEN INPUT**  
$0040$ - **OPEN LOAD  
** $0080$ - File has been purged  
60,4 |  Maximum record count  
64,4 |  Current record index  
**Additional Information for KEYED Files**  
77,4 |  Number of records on file  
85,1 |  Current access key number  
86,128 |  Key definition data See **[FIB( ) Keyed Files](fib.htm#Mark11)** (bytes 85, 384) or use utilities to return key information (e.g. *UFI and **KEY.INF).  
  
#### **Note:**  
File times returned by the **FIN(** **)** function on UNIX/Linux systems are reported based on the current time zone rather than GMT. This keeps the file time reporting consistent with Windows versions of PxPlus.

**_FIN(__) - For External Database Tables Only_**

Doing a **FIN**(_chan_) on an external database table that was opened using **[[ADO]](../command_tags/ADO.htm)**, **[[DB2]](../command_tags/db2.htm)**, **[[MYSQL]](../command_tags/mysql.htm)**, **[[OCI]](../command_tags/oci.htm)** or **[[ODB]](../command_tags/odb.htm)** will return key information.

**Bytes** |  **Description (for External Database Tables Only)**  
---|---  
1,85 |  Unused/Undefined  
85,1 |  Current access key number  
86,128 |  Key definition data See **[FIB( ) Keyed Files](fib.htm#Mark11)** (bytes 85, 384) or use utilities to return key information (e.g. *UFI and **KEY.INF).  
  
**_Example:_**

> x$=fin(chan)  
> kno_num=dec(x$(85,1))  
> key_def$=X$(86,128)

_(Support to return key information on external database tables was added in PxPlus 2022 Update 1.)_

**_FIN(__) - For Device Files Only_** ** _(also Windows Printers *PDF* and *FAX*)_**

**Bytes** |  **Description (for Device Files Only)** **_(TCP files are reported as devices)_**  
---|---  
1,1 |  Current column  
2,1 |  Current line number  
3,1 |  Maximum column number  
4,1 |  Maximum line number  
5,1 |  Column offset to start of scroll region  
6,1 |  Line offset to start of scroll region  
7,1 |  Current width of scroll region  
8,1 |  Current height of scroll region  
9,1 |  Reserved (always $00$)  
10,1 |  Current window number  
11,1 |  Reserved (always $00$)  
12,1 |  Current device attribute bits  
13,1 |  Current foreground colour  
14,1 |  Current background colour  
15,1 |  Reserved (always $00$)  
16,1 |  Default attributes  
17,1 |  Default foreground colour  
18,1 |  Default background colour  
19,2 |  Current device mode  
21,4 |  Current device status words 1 and 2  
25,2 |  Auxiliary attributes  
27,2 |  Device option flags  
29,2 |  **_(Windows Only)_** Operating system handle  
31,1 |  Standard character width  
32,1 |  Standard character height  
33,... |  Pathname to device ($00$ - terminated)  
33+_n_... |  Device type ($00$ - terminated)  
  
##  See Also

[**FIB( ) Return File Information Block**](fib.md)  
[**FID( ) Return File Information Descriptor**](fid.md)  
[**FILE Create New File from File Descriptor**](../directives/file.md)  
[**'FF' File Format**](../parameters/ff.md)  
[**'PO' Path Original**](../parameters/po.md)

BBx is a registered trademark of BASIS International Ltd.
