# Customizing PxPlus   
  
**INI Contents** |  **__**  
---|---  
  
The sections and parameters supported for use in a PxPlus INI file are listed below.

## [Config] Section

**ActivationKey=**_path_ |  Path name to the directory that contains the PxPlus activation file, ACTIVATE.PVX (e.g. ".. \LIB\KEYS").  
---|---  
**AutoConvertUTF8=**_xxx_ |  Enables the automatic conversion of high-order ASCII keyboard input to UTF8 if _xxx_ is set to "Y", "y" or "1". See the **'OPTION'** mnemonic **[AutoConvertUTF8](../../mnemonics/option.htm#autoconvertutf8)** setting.  
**AutoEnablePDF=** 0 | 1 |  Controls the default setting of the **['AP'](../../parameters/ap.md)** system parameter.  
**BlinkTime=**_nnn_ |  Number of milliseconds between blinks for blinking text on graphical windows devices.  _(Default is 500ms.)_  
**BrowserDebug** |  Controls whether or not the browser developer console will display in a popup window for any subsequently created **[*BROWSER](../../utilities/browser.md)** controls. See the **'OPTION'** mnemonic **[BrowserDebug](../../mnemonics/option.htm#browserdebug)** setting. _(This functionality was added in PxPlus 2021.)_  
**BrowserLang** =_language code_ |  Forces the embedded Chromium browser language to be _language code_. See **[Language Codes](../../utilities/browser.htm#Mark1)** for a list of supported languages and codes. Defaults to user OS language unless PRINT 'OPTION'("BrowserLang") is used to override. See the **'OPTION'** mnemonic **[BrowserLang](../../mnemonics/option.htm#browserlang)** setting. _(This functionality was added in PxPlus 2019.)_  
**ButtonCursor=**_n_ |  Cursor number to be used when the pointer is over a button.  
**ButtonDisableCursor=**_n_ |  Cursor number to be used when the pointer is over a disabled button.  
**Certificates=IGNORE | VALIDATE | TRUSTREQD** |  **_(Applicable to Client Connections Only)_** Defines the default certificate validation rules: |  **IGNORE** |  **_(Default)_** Performs no validation of the certificate(s) presented by the server.  
---|---  
**VALIDATE** |  Indicates that you want the certificate validated (expiry dates, etc.) but is not required to have been issued by a trusted supplier (i.e. it could be self-signed).  
**TRUSTREQD** |  Validates that the certificate came from a trusted vendor and that the certificate host name must match.  
  
_(This functionality was added in PxPlus 2017.)_  
  
**CertStore=**_pathname_ |  Defines the location of the trusted certificate store file or directory. The default certificate store is the _ca-bundle.crt_ file in the PxPlus install directory. The latest version of this file is downloaded from the following location: **<https://raw.githubusercontent.com/bagder/ca-bundle/master/ca-bundle.crt>**. If directory, the last character **_must_** be a directory delimiter (/ or \\). See the OpenSSL documentation on the **SSL_CTX_load_verify_locations** function for contents at the following link: **<https://www.openssl.org/docs/manmaster/man3/SSL_CTX_load_verify_locations.html>** _(This functionality was added in PxPlus 2017.)_  
**CommandLine=**_text -prm -prm ._ |  Optional argument used to define the Command line to be used when running PxPlus. This argument is used only when an INI file is specified. Its contents replace the INI file name in the original command sequence. 

#### **Warning!_  
_** The CommandLine= parameter overrides any Command line used to launch PxPlus. This can have adverse effects on programs such as *NTHOST/*NTSLAVE, the Application Server, *WINDX.UTL;SPAWN and *Server;Spawn.  
  
**Cursor** _n_ =_text_ |  Overrides settings for the graphic display of the mouse pointer (as controlled via the **['CURSOR'](../../mnemonics/cursor.md)** mnemonic). **_Where:_** _n_ identifies a cursor number to override and _text_ specifies the pointer to use. _text_ value can be the name of a valid resource within an associated resource library or an *****  _(asterisk)_ followed by a standard system cursor name. These are represented as follows: |  ***** |  Standard arrow (IDC_ARROW)  
---|---  
***appstart** |  Standard arrow and small hourglass (IDC_APPSTARTING)  
***arrow** |  Standard arrow (IDC_ARROW)  
***cross** |  Crosshair (IDC_CROSS)  
***ibeam** |  I-beam (IDC_IBEAM)  
***hand** |  XP(SP3)/2003/2008/2012/Vista/Windows 7 & 8: Hand (IDC_HAND)  
***help** |  Arrow and question mark (IDC_HELP)  
***no** |  Slashed circle (IDC_NO)  
***size** |  Four-pointed arrow pointing north, south, east, and west (IDC_SIZEALL)  
***sizenesw** |  Double-pointed arrow pointing northeast and southwest (IDC_SIZENESW)  
***sizenwse** |  Double-pointed arrow pointing northwest and southeast (IDC_SIZENWSE)  
***sizewe** |  Double-pointed arrow pointing west and east (IDC_SIZEWE)  
***sizens** |  Double-pointed arrow pointing north and south (IDC_SIZENS)  
***uparrow** |  Vertical arrow (IDC_UPARROW)  
***wait** |  Hourglass (IDC_WAIT)  
  
The IDC value, shown in parenthesis, represents the corresponding Windows LoadCursor API resource identifier.   
  
**_Example:_**  
  
In the following example, cursor #5 ('CURSOR'(5) mnemonic) is changed to the standard Windows Hand mouse pointer:  
  
Cursor5=*hand   
  
The following INI entries can be used to reset cursors #5 and #6 to their pre-V7.50 states:  
  
Cursor5=PvxPush   
Cursor6=PvxNoPush  
  
**Debug=**_n_ |  Enables access to the debugging environment windows. Values are: |  **0** |  **_(Default)_** Debugging available if no lead program specified - no debugging windows if a lead program is given.  
---|---  
**1** |  Debugging windows are always available.  
**-1** |  Debugging windows are never available.  
**DebugPlus** |  **_Deprecated -- No Longer in Use_**  
**DebugPlusOpt=**_n_ |  Set by the system to store the various options enabled in the Trace window.  
**DefaultCommandLine=**_xxx_ |  Defines the OS Command line parameters if NO Command line parameters are provided. System will ignore this option if any Command line parameters are present on the OS Command line that launched PxPlus.  
**Directory=**_text_ |  Starting directory name.  
**Disabled3Detch=**_n_ |  Controls the use of 3D etching on disabled objects, where 0 is Off and 1 is On. By default, _n_ =0.  
**Drag=**_xxx_ |  Defines the pathname of the Image file (ICON) that is to be used when initiating the internal Drag/Drop logic.  
**Fid0=**_text_ |  Override setting of **FID(0)**.  
**ForceMessageBoxOnTop=** -1 | 1 |  When set to 1, this forces a message box to display on the desktop when running as a service. A -1 does not display the message box and automatically selects the OK button.

#### **Note** :  
By selecting '1', MSGBOX TIM will no longer work.  
  
**GetFileDelim=**_hh_ |  Defines the character to be used between each file name passed in a GET_FILE_BOX. See **['GS'](../../parameters/gs.md)** system parameter. Value is the Hex code for the character to use.  
**GrayMapping=**_n_ |  When set to 1, PxPlus substitutes the light and dark gray with the colours in the Windows desktop. When set to 0, then light and dark gray are used. By default, _n_ =1.  
**HideTips=** 0 | 1 |  If set to 1, the system will not display tips for any graphical controls. This is controlled by the system menu (ALT - Space, _Hide Tips_ option).  
**Icon=**_text_ |  Name of the icon to be used by PxPlus. This can be the name of an icon contained in a specified ResourceLib file or it can be an icon file name; e.g. _path/myicon.ico_.  
**IgnoreTempKeyWarning=** 0 | 1 |  If set to 1, the system will not display a 7-day advance warning that a temporary installation key is about to run out.  
**Library=**_path_ |  Path name to PxPlus library location (e.g. ".. PXPLUS\LIB").  
**LogFile=**_xxx_ |  Defines the text file to receive the internal system error log. The log file **_must_** already exist, as the INI file will not create it. When specifying, include the full absolute pathname of the log file (without quotes). When defining the log file, you can specify the maximum file size (in megabytes) that you want the log file to grow. See **[PxPlus Log File](../../PxPlus%20User%20Guide/Development%20Tools/Error%20Handling%20and%20Debugging/Additional%20Debugging%20Procedures%20and%20Facilities.htm#logfile)**.  
**PDFEmbed=**_x_ |  Controls whether PDF fonts are to be embedded in system-generated PDF documents. Options are: |  "A" |  Indicates all must be embedded.  
---|---  
"N" |  Indicates that fonts are **_not_** to be embedded.  
"Y" |  **_(Default)_** Indicates where needed fonts can be embedded.  
**PDFFontDir=**_xxx_ |  Defines the pathname to the directory where PDF fonts are stored. See the **'OPTION'** mnemonic **[PDFFontDir](../../mnemonics/option.htm#pdffontdir)** setting.  
**PDFMargin=**_n_ |  Defines the standard margins (top, bottom, left and right) in inches to use for all PDF output.  _(Default is 0.25.)_  
**PrinterCPI=**_n_ |  Defines the default printer CPI for graphical printers.  
**PrinterFont=**_xxx_ |  Allows the setting of the default printer font to use when outputting to a graphical printer (Windows spooler or PDF).  
**PrinterLPI=**_n_ |  Defines the default printer LPI for graphical printers.  
**ResourceLib=** lib.dll |  DLL file that contains bitmaps and icons that extend the internal bitmaps {!name} available in your PxPlus session.  
**RetryDeviceError=**_n_ |  Controls what happens on a timeout from a physical device such as an LPT port. System parameters **['DT'](../../parameters/dt.md)** (Device Timeout) and **['WT'](../../parameters/wt.md)** (Number of Retries) also affect the behaviour of device timeouts. When _n_ is set to 0, then an _err_ _=0_ is reported immediately after a **DT** time has occurred. When _n_ is set to 1 or 2, then a Device Timed Out message box appears and asks the user to retry or abort. If the user aborts, then an err=0 is reported immediately. When set to 2, then a **BREAK** is also issued. By default, _n_ =0.  
**ShutdownMsg=**_text_ |  Three possible options for this parameter are: |  _Text_ |  Specifies text to appear in a message box when the user attempts a shutdown and a PxPlus session is still running.  
---|---  
_^Text_ |  Same as =Text, except that the user is not able to exit PxPlus.  
_*ignore*_ |  Allows PxPlus to be exited while a program is running without asking if the user really wants to shut down. This is for applications that run in the background or as NT services.  
**SysMenu** _n_ =[_&_]_text_ =_nnn_ |  Allows up to 10 custom items to be added to the drop down menu that appears when you click on the icon in the upper left corner of the base PxPlus launch window. **_Where:_** |  _text_ |  Text of the menu item (prefix with **&** to have the selection letter underscored).  
---|---  
_nnn_ |  Indicates the CTL value to generate when the menu item is selected.  
  
**_Examples:  
_**  
SysMenu1=&Sleepy=1001  
SysMenu2=&Dopey=1002  
SysMenu3=&Bashful=1003  
SysMenu4=D&oc=1004  
  
**SystemPalette=**_n_ |  When set to 1, PxPlus uses the Windows colour palette. When set to 0, PxPlus does not use the Windows colour palette. (By default, _n_ =1.)  
**TipColor _or_  
TipColour** |  Used to define the color for non-HTML tips. Valid formats for defining a color include predefined system color names (e.g. LightRed), RGB values, HSL values, Hex color codes, color blending, and dynamic color lightening. For information on these formats, see **[Color Properties](../../control_object_properties/colour_properties.md)**. Setting this option sets the **['TC'](../../parameters/tc.md)** system parameter to -3. If 'TC' is set to -3 but the **TipColor** (or **TipColour**) setting is not defined, the default Windows color will be used. _(added in PxPlus 2021)_  
**WindowAutoSize=**_xxx_ |  Enables the system automatic Command window resizing if _xxx_ is set to "Y", "y" or "1".  
**TCP and SSL Options**  
**AllowedCiphers=**_list_ |  Can be set to restrict SSL ciphers to use when performing SSL secured network transmissions.  
**IPV4Only=** 1 |  When set to 1, disables support for IPv6 addressing and assures all addresses are IPv4 compatible.  
**NoSSLv2=** 1 |  When set to 1, disables support for SSLv2 protocol, which is considered untrustworthy.  
**NoSSLv3** =1 |  When set to 1, disables support for SSLv3 protocol, which is considered untrustworthy.  
**NoTLSv1=** 1 |  When set to 1, disables support for TLS V1 protocol. This protocol is considered secure, but the option to disable it is available in case this changes.  
**NoTLSv1.1=** 1 |  Disables TLSv1.1 support. _(This functionality was added in PxPlus 2017.)_  
**NoTLSv1.2=** 1 |  Disables TLSv1.2 support. _(This functionality was added in PxPlus 2017.)_  
**NoTLSv1.3** =1 |  Disables TLSv1.3 support. _(This functionality was added in PxPlus 2020.)_  
  
## [WindowFrame] Section

**TypeSizeLoc=** 1,649,467,66,66 |  Defines the screen mode, size and position. It is updated automatically by PxPlus when the session terminates. The **_first_** value represents screen mode: **1** (normal), **2** (minimized), or **3** (maximized).  
The **_second_** and **_third_** values represent window width and height in graphical units.  
The **_fourth_** and **_fifth_** values represent the window position, X and Y coordinates for the upper left corner in graphical units.  
---|---  
**Caption=**_text_ |  Default caption line to appear on the PxPlus main window.  
**ToolBar=**_nnn_ |  Toolbar size. By default, the toolbar is set to the same size as the windows caption boxes.  
**MessageBar=**_nnn_ |  Message bar size. By default, the message bar is set to the same size as the windows caption boxes plus a few pixels to allow for the 3D effect.  
  
## [Font] Section

**Bold=** 0 | 1 |  Bold toggle. When set to 1, all foreground data is displayed as Bold.  
---|---  
**Charset=** 0 |  Character set (0=ANSI) -- **_DO NOT CHANGE!_**  
**LockFont=** 0 | 1 |  Font locking. When set to 1, the user may not change the fixed-width font from the system menu (button in top left corner of the screen).  
**Name=**_text_ |  Name of the default fixed-width font (e.g. Courier New). The fixed-width font name and size are used by PxPlus to determine the size of a column or row in a Window.  
**Points=** 12 |  Default fixed-width font size. The fixed-width font name and size are used by PxPlus to determine the size of a column or row in a Window.  
**SystemFontName=**_text_ |  Name of the default graphical font to use (e.g. Times New Roman). If this entry is omitted, then the system uses the Windows default system font.  
**SystemFontPoints=** 12 |  Default graphical font size.  
**TipFontName=**_text_ |  Name of the font to use in floating tips (e.g. Courier New).  _Default_ is 'MS Sans Serif'.  
**TipFontPoints=** 10 |  Tip font size. _Default_ is 10.  
  
##  [ODBC], [OCI] and [DB2] Sections

Each of these section headings can be inserted into the PXPLUS.ini file to manually override specific defaults. The **[ODBC]** , **[OCI]** and **[DB2]** INI parameters and settings are described along with corresponding SQL keywords (if available).

**ACCESS=READ | WRITE**  
  
** _ODBC & DB2 -_** Determines type of file access required. Default is WRITE.  
**_  
_** SQL keywords: SQL_ACCESS_MODE, SQL_MODE_READ_ONLY, SQL_MODE_READ_WRITE  
---  
**AUTOCOMMIT=ON | OFF**  
  
** _ODBC & DB2 -_** Determines auto commit functionality of the database driver. It is applicable only if the driver supports transactions.  
  
SQL keywords: SQL_AUTOCOMMIT, SQL_AUTOCOMMIT_ON, SQL_AUTOCOMMIT_OFF  
**CHECK_DATES=Y | N****  
CHECK_NUMERICS=Y | N  
CHECK_LENGTH=Y | N**  
  
**ODBC -** Determines the type of data validation required.  
  
Setting these to "Y" enables run time checking of **_Dates_** (must match **[DATEFMT=](INI%20Contents.htm#Mark2)** setting), **_Numeric_** (must have the proper number of digits before/after the decimal point), and **_Length_** (must be less than or equal to the length of the field).

#### **Note:**  
The Check_Date ** _only_** takes effect if they also have a **DATEFMT=** specified for the ODBC. For the Date validation, the minimum year is 1500.  
  
**CONCURRENCY=READONLY | LOCK | OPT_VERSION | OPT_VALUE**  
  
** _ODBC & DB2 -_** Determines the type of concurrent access control/locking to be used.  
  
READONLY sets the cursor; is set to Read Only - no updates allowed. LOCK applies low-level record locking. OPT_VERSION causes optimistic locking with the database version control to be used. OPT_VALUE causes optimistic locking with comparing record/column values to be used. SQL keywords: SQL_CONCURRENCY, SQL_CONCUR_READ_ONLY, SQL_CONCUR_LOCK, SQL_CONCUR_ROWVER, SQL_CONCUR_VALUES  
**CURSOR_TYPE=FORWARD | STATIC | KEYSET | DYNAMIC**  
  
** _ODBC & DB2 -_** Defines the type of cursor that is to be used. FORWARD indicates that any result sets can be read in a forward only direction. STATIC indicates that the result set is static. KEYSET forces the cursor to use/maintain record keys in a keyset. DYNAMIC indicates that the cursor is effective in the current row set only. SQL keywords: SQL_CURSOR_TYPE, SQL_CURSOR_FORWARD_ONLY, SQL_CURSOR_STATIC, SQL_CURSOR_KEYSET_DRIVEN, SQL_CURSOR_DYNAMIC  
**CURSOR_USE=DRIVER | ODBC | IF_NEEDED**  
  
** _ODBC & DB2 -_** Controls the type of cursor to be used within the ODBC connection. DRIVER **_(Default)_** assumes the specific driver's own cursors. ODBC causes the ODBC interface to use the "Driver Managers" cursor library that may provide additional functionality not available within the database driver. IF_NEEDED tells the system to use the specific database driver's own cursor functionality unless the additional functionality is requested specifically. SQL keywords: SQL_ODBC_CURSORS, SQL_CUR_USE_DRIVER, SQL_CUR_USE_ODBC, SQL_CUR_USE_IF_NEEDED  
**DATEFMT** =_text_ _  
  
**ODBC, OCI & DB2 -**_ String mapping of date format to be returned. Applies to all date fields in table.  
**DB** =_dbname_**_or_ QUALIFIER**=_dbname_ _  
  
**ODBC Only -**_ Qualifies the specific database that you wish to use when using a driver to service multiple databases.  
  
SQL keyword: SQL_CURRENT_QUALIFIER  
**DEBUGIT** =_text  
  
**ODBC, OCI & DB2 -**_ String to append to SQL statement along with program name and line number for debugging purposes.  
  
_text_ must be the comment character(s) appropriate to the database.  
  
**_Example:_**  
  
"-" is the comment identifier for Microsoft SQL Server; anything after -- is ignored by SQL Server when compiling the SQL statement.  
**EXTROPT** =_text  
  
**ODBC, OCI & DB2 -**_ Controls the format of the SELECT statement used to process an EXTRACT.  
  
By default, PVX generates a SELECT * FROM _table_ FOR UPDATE WHERE... If specified, then _text_ is substituted in place of FOR UPDATE. In addition, if the first character of _text_ is $, then the remaining characters of _text_ are placed at the end of the SELECT statement rather than after the file name. This allows for different variations of SQL to be supported.  
**ISOLATION=UNCOMMITED | COMMITED | REPEATABLE | SERIAL | VERSIONING**  
  
** _ODBC & DB2 -_** Controls the isolation that this connection will have relative to other processes on the same database.  
  
In particular, it controls _D_ irty reads (reading data that may be rolled back), Non-_R_ epeatable reads (reading data after being changed by other transactions), and _P_ hantom reads (reading data newly added to file). Settings include:  
  
UNCOMMITED (_D, R, P_ possible)  
COMMITED (_D_ possible, _R_ & _P_ not possible)  
REPEATABLE (_P_ possible, _D_ & _R_ not possible)  
SERIAL (_D, R,_ & _P_ not possible)  
VERSIONING (_D, R,_ & _P_ not possible, but uses versioning as opposed to record locks)  
  
SQL keywords: SQL_TXN_ISOLATION,SQL_TXN_READ_UNCOMMITTED, SQL_TXN_REPEATABLE_READ, SQL_TXN_SERIALIZABLE, SQL_TXN_VERSIONING  
**KEYSET_SIZE** =_n  
  
**ODBC & DB2 -**_ Size of the key set for use with the cursor.   
  
SQL keyword: SQL_KEYSET_SIZE  
**MAXROWS** =_n  
  
**ODBC & DB2 -**_ Maximum number of rows/records returned.  
  
SQL keyword: SQL_MAX_ROWS  
**NULLPADKEY** =_x  
  
**ODBC, OCI & DB2 -**_ Set to force keys to be padded to full length with the null character, $00$. _x_ can be 1, Y or y. Use NULLPADKEY=N to turn off this behavior.  
**ORACLE=Y | N**  
  
** _ODBC & OCI -_** Indicates if the database uses ORACLE SQL sequence.  
  
If ORACLE= and TOP= are used, then SELECT commands are generated as SELECT * FROM (SELECT * FROM TABLE) WHERE ROWNUM < 1. _Defaults:_ ORACLE=Y (under [OCI]), ORACLE=N (under [ODBC]).  
**POSUPDATE** =_x_ **_ODBC & DB2 -_** Use one of the following: |  M |  Must use positioned update  
---|---  
O |  **_(Default)_** Optionally use positioned update  
N |  Never use positioned update  
**PREPARE** =_x  
  
**ODBC, OCI & DB2 -**_ Set to use prepared statements. _x_ can be 1, Y or y. Use PREPARE=N to turn off this behavior. Prepared statements are pre-compiled SQL that may improve performance.  
**PSWD** =_text  
  
**ODBC, OCI & DB2 -**_ Default password. Used if no password supplied on **OPEN**.

#### **Warning!  
** The above setting is **_not secure_**. Anyone with access to the INI can read the password.  
  
**ROWSET_SIZE** =_n  
  
**ODBC & DB2 -**_ Size of the row set used by the cursor.   
  
SQL keyword: SQL_ROWSET_SIZE  
**TEXTMAX** =_n  
  
**ODBC & DB2 -**_ Defines the maximum length of a returned column. _Default_ is TEXTMAX=4096.  
**TIMEOUT** =_n  
  
**ODBC & DB2 -**_ Timeout value for any SQL operation (time before error 0 returned).  
  
SQL keyword: SQL_QUERY_TIMEOUT  
**TOP** =_n  
  
**ODBC, OCI & DB2 -**_ If specified, then PxPlus uses the TOP keyword in all SELECT statements, where possible.  
  
If _n_ is non-zero, then the **[KEF( )](../../functions/kef.md)** and **[KEL( )](../../functions/kel.md)** functions issue a SELECT TOP 1... SQL statement, which improves system performance. If _n_ > 0, then PVX issues SELECT TOP  _n_ to reduce the data transferred. TOP= -1 indicates the driver supports TOP; however normal reading should not use it. _Default_ is 0 (zero) - TOP **_not_** supported.  
**UNIQUE** =_x  
  
**ODBC, OCI & DB2 -**_ Set for new opens to be on a unique connection. _x_ can be 1, Y or y. Use UNIQUE=N to turn off this behavior.  
**USER** =_text  
  
**ODBC, OCI & DB2 -**_ Default user ID. Used if no user ID is supplied on **OPEN**.  
  
## Debug Sections

Debug windows and their respective settings from PxPlus' Windows Debug Environment are saved in the INI file under the following section headings:

> [TraceWindow]   
>  [WatchWindow]   
>  [BreakWindow]   
>  [CommandWindow]
