# Printing

**Printing in MS Windows** |  **__**  
---|---  
  
PxPlus for Windows includes two logical device names for accessing Windows printers: ***WINPRT*** and***WINDEV***. When used in an**OPEN** statement, these devices will invoke the print subsystem API at run time. Logical device names for printing to **_file types_** in Windows are described under **[Logical Printers](../Logical%20Printers/Overview.md)**.

The standard interface,***WINPRT*** , is designed to handle typical hard copy print requests. It allows your application to print any variety of character and graphical output (i.e. bitmap images and proportional fonts) and employ a full suite of**PRINT** options and mnemonics.

***WINDEV*** supports the direct-to-device printing methods associated more with legacy and/or converted applications. This interface accepts the _raw_ print escape sequences that are otherwise ignored in the Windows print system. It sends output using a _pass-through_ mode _,_ which tells the printer driver to read the raw data and queue the job. See **[Raw Printing](../Character-Based%20Printing/Overview.htm#rawprinting)**.

This section focuses on the access and control of hard copy print destinations from PxPlus in Windows (and WindX) primarily through ***WINPRT*** and***WINDEV***.

See **[*WINPRT Windows Printing](../../../file_handling/~winprt~.md)** and **[*WINDEV Raw Print Mode](../../../file_handling/~windev~.md)**.

## Selecting a Printer

When***WINPRT*** (or***WINDEV***) are used in an**OPEN** statement without options or queue names, the user will be presented with the default Windows print manager **_selection dialogue_** at run time.

**_Example:_**

> OPEN (1)"*WINPRT*"

If a print queue name is specified along with***WINPRT*** (or***WINDEV***), then the dialogue will not be displayed, and output is sent to the printer automatically at run time.

To assign a specific printer, use the print queue's name as it appears in the _Printers_ folder of the _Control Panel_ on the local system (this is assigned to the printer when it is first installed on the OS). Omit any mention of ports. For instance, if the _Control Panel_ folder records the name as HP LasertJet on LPT1, simply use HP LaserJet as the queue name in your directive.

**_Example:_**

> OPEN (1)"*WINPRT*;HP LaserJet"   
>  OPEN (2)"*WINPRT*;Bills Desk - Canon;orientation=landscape;copies=3"   
>  OPEN (3)"*WINDEV*;HP LaserJet;copies=2"

The printer options are listed below.

**Option** |  **Description**  
---|---  
**ASIS** |  Use the**ASIS** keyword to access the most recently selected printer and its previous settings. **_All settings for queue options will be identical to the previous selection._** Users do not have access to the printer selection dialogue at run time and cannot alter the settings. **_Example:_** OPEN (2)"*WINDEV*;ASIS" ***WINPRT*** allows you to override printer settings with the**ASIS** option, but the changed properties must be valid for the appropriate driver. **_Example:_** OPEN (1)"*WINPRT*;ASIS;copies=5;offset=500:500"   
OPEN (2)"*WINPRT*;ASIS;file=hello.txt"

#### **Note:**  
This option does **_not_** apply to***WINDEV***.  
  
**DEFAULT** |  Use the**DEFAULT** keyword to**OPEN** the printer that is currently set as the default in Windows. Again, users will not have access to the printer selection dialogue and cannot alter the settings at run time. **_Example:_** If the default printer is _"Bills Desk - Canon",_ then the print jobs in the examples below will be sent to that Canon printer: OPEN (1)"*WINPRT*;DEFAULT"   
OPEN (2)"*WINPRT*;DEFAULT;copies=5;orientation=landscape;offset=300:600"   
OPEN (3)"*WINDEV*;DEFAULT" ***WINPRT*** allows you to override printer settings with the**DEFAULT** option, but the changed properties must be valid for the appropriate driver.

#### **Note:**  
This option does **_not_** apply to***WINDEV***.  
  
**NORMAL** |  Use the**NORMAL** keyword with your**OPEN** directive when you want the user to be presented with a printer selection dialogue that includes a page range option (_but no paper size or source tray options)_. **_Example:_** OPEN (30)"*WINDEV*;NORMAL" All settings will be displayed in the printer selection dialogue when the user sees it. Users can accept the current settings or alter them.  
**SETUP** |  Use the**SETUP** keyword in your**OPEN** directive when you want the user to be presented with a printer selection dialogue that includes paper size and source tray options _(but no page range option_). **_Example:_** OPEN (1)"*WINPRT*;SETUP"   
OPEN (2)"*WINDEV*;SETUP"   
OPEN (3)"*WINPRT*;SETUP;range=1:5" All settings will be displayed in the printer selection dialogue - users can accept the current settings or alter them.

#### **Note:**  
The**SETUP** and**NORMAL** options must be included with***WINPRT*** in order to display a printer selection dialogue with pre-set printer properties.  
  
**_Example:_**  
  
OPEN (14)"*WINPRT*;NORMAL;orientation=landscape"  
  
## Initializing a Windows Printer

Before sending data to***WINPRT*** , you should set the initial font and point size of the printer to a known state and make it the default (using the **['FONT'](../../../mnemonics/font.md)** mnemonic and the **['DEFAULT' or 'DF'](../../../mnemonics/default.md)** mnemonic).

**_Example:_**

> OPEN (chan)"*winprt*"   
>  PRINT (chan)'FONT'("Courier New",-10),'default',

A negative number defines the absolute point size:

> PRINT (1)'FONT'("Arial",-7),'DF')

All standard**PRINT** statement data will use the selected font with spacing based on logical CPI values (pitch). Use the following guide to equivalent measures:

**Point Size** |  **= Logical LPI** |  **= Logical CPI**  
---|---|---  
**_-_** 12 |  =6 LPI |  =10 CPI  
**_-_** 10 |  =7.2 LPI |  =12 CPI  
**_-_** 7 |  =10 LPI |  =16 CPI  
  
Column and row addressing are based on the default font. Switching fonts will not alter the column or row addressing unless you change the default font. It is recommended that you use the **['CPI'](../../../mnemonics/cpi.md)** and **['LPI'](../../../mnemonics/lpi.md)** mnemonics to set text alignment after issuing a**'DEFAULT' or 'DF'** to ensure that the output will have consistent columns/lines per page, regardless of the font chosen.

**_Example:_**

> OPEN (1)"*winprt*"   
>  PRINT (1)'FONT'("Courier New,-12"),'DF','CPI'(10),'LPI'(6),

The above example sets default font and then sets CPI (characters per inch) and LPI (lines per inch) to establish line/column alignment for the output. Now, regardless of font size, the location of the output will remain consistent.

**_Example:_**

> 0010 FONT$="Times New Roman",COLS_REQD=132,REALLY_SMALL_FONT=200   
>  0020 CHAN=UNT; OPEN (CHAN)"*WINPRT*"   
>  0030 PRINT (CHAN)'FONT'(FONT$,-12),'DF', ! Set base to 10 CPI   
>  0040 CUR_COL=MXC(CHAN)+1,INCHES_WIDE=CUR_COL/10   
>  0050 PRINT (CHAN)'FONT'(FONT$,CUR_COL/REALLY_SMALL_FONT),'DF',   
>  0060 PRINT (CHAN)'CPI'(COLS_REQD/   
>  0070 FOR Z=0 TO 12   
>  0080 PRINT (CHAN)@(Z*10),"Hello   
>  0090 NEXT

The above example scales the text to the page based on 132 characters. It is inadvisable to reset the default font or alter the initial CPI/LPI settings after beginning to output the data, as this will alter the relative positioning of the output.

To further assure proper alignment of text, the **[OPEN](../../../directives/open.md)** directive has an option clause**FORCE6X10=YES|NO**.

**_Example:_**

> OPEN (1,OPT=FORCE6X10=YES")"*winprt*"

When set to **YES** , this option automatically adjusts the column width to 60% of the line height defined in font size specifications. This setting solves some minor alignment issues when printing proportional fonts to a graphical print device. Historically, most fixed-width fonts adhered to a 6x10 ratio of 6 lines to the inch and 10 characters per inch; i.e. for a character width that is 60% of the line height.

## Setting Up Defaults

Depending on the printing requirements, some applications may want certain print criteria (i.e. paper size, margins, copies, etc.) to remain constant, regardless of how specific output data is to be formatted.***WINPRT*** allows you to configure various printer settings; however, if you want to establish defaults that remain in effect throughout the application, it is better to use**WINPRT_SETUP**.

The **[WINPRT_SETUP](../../../directives/winprt_setup.md)** directive is designed to read/define a default printer and its properties. It can also be used to produce a list of the printers that are currently available to the system. This functionality has multiple uses in printer selection and initialization routines and permits some repetitive options to be removed from specific printer**OPEN** statements.

To enable access to printers defined on a Windows server under WindX, use the keyword**SERVER** in the**WINPRT_SETUP** statement.

**_Example:_**

WINPRT_SETUP SERVER ...

**WINPRT_SETUP READ** _var$_ |  Returns the name of the current default printer.  
---|---  
**WINPRT_SETUP WRITE** _printer$_ |  Changes the current default printer.  
**WINPRT_SETUP INPUT** _var$_ |  Prompts the user with the Windows printer selection dialogue and returns the name of the printer selected by the user.  
**WINPRT_SETUP LIST** _var$_ |  Generates a list of all the printers defined in the system.  
**WINPRT_SETUP DIRECTORY** _var$_ |  Generates a list of all printers with just the printer portion of the names (excludes the "ON Device" portion).  
**WINPRT_SETUP READ PROPERTIES** _var$_ |  Returns the property settings associated with your current default printer.  
**WINPRT_SETUP WRITE PROPERTIES** _settings$_ |  Changes one or more of the default printer properties. Multiple options can be specified by separating settings with semi-colons. See **[WINPRT_SETUP Properties](../../../directives/winprt_setup.htm#Mark5)**. |  **COLLATE=YES | NO | AUTO** |  **PAPERLENGTH=**_num_ (1/10 _mm_)  
---|---  
**COLOR=YES | NO**(or **COLOUR**) |  **PAPERSIZE=**_num_  
**COPIES=**_num_ |  **PAPERWIDTH=**_num_ (1/10 _mm_)  
**DUPLEX=**_num_ |  **QUALITY=**_num_  
**FILE=+**_filename_**| -**_filename_ |  **RANGE=**_from_ :_to_  
**FORCE6X10=YES | NO** |  **RESOLUTION=**_num_ :_num_  
**MARGINS=**_left_**:**_top_**:**_right_**:**_bottom_ |  **SCALE=**_num_ (_%_)  
**OFFSET=**_x_ :_y_ |  **TITLE= <report title>**  
**ORIENTATION=PORTRAIT | LANDSCAPE** |  **TRUETYPE=**_num_  
  
**WINPRT_SETUP _Examples_**

Default properties are determined by the individual printer manufacturers. The following example lists the properties set for the current default printer:

**_Example:_**

> OPEN (1)"*WINPRT*"   
>  WINPRT_SETUP READ PROPERTIES PROP$   
>  ?PROP$ RANGE=ALL;COLLATE=NO;COPIES=1;ORIENTATION=PORTRAIT;PAPERSIZE=1;RESOLUTION=300:300;OFFSET=0:0;TRUETYPE=2;DRIVER=WINSPOOL

Use the following statement to set up a 1-inch margin on all sides of the page:

**_Example:_**

> WINPRT_SETUP WRITE PROPERTIES "MARGINS=1000:1000:1000:1000"

The currently selected default printer name can be determined as follows:

**_Example:_**

> WINPRT_SETUP READ PRTR$   
>  ?PRTR$   
> HPLaserJet III on \\\machine_1\hp

## Aborting a Windows Print Job

The **['AB'](../../../mnemonics/ab.md)** mnemonic is used to abort a print job from the Windows spooler.

**_Example:_**

> PRINT (30)'AB' ! To cancel the current job

Look for the name (title bar caption) of your current PxPlus window to find your print job in the Windows print spooler job listing. How much gets printed after the abort is determined by the printer driver and by the print spooler options _Start Printing After the First Page_ or _Start Print After the Last Page_.
