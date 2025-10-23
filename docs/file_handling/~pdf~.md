# Special File Handling 

***PDF*** |  **_PDF Print Interface_**  
---|---  
  
##  Formats

1. |  _Open PDF File:_ |  **OPEN (**_chan_**[,**_fileopt_**])"*PDF*[;**_option_**][;**_option_**] [...]"**  
---|---|---  
2. |  _PDF via WindX:_ |  **OPEN [INPUT] (**_chan_**[,**_fileopt_**])"[WDX]*PDF*[;**_option_**][;**_option_**] [...]"**  
  
**_Where:_**

_chan_ |  Channel or logical file number.  
---|---  
_fileopt_ |  File options. Supported options for opening ***PDF*** include: |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**OPT=**_option string_ |  PDF output parameters (see **[Output Parameters](~pdf~.htm#Mark6)**). To obtain the current **OPT=** value, use the [**OPT( )**](../functions/opt.md) function.  
_option_ |  Supported parameters for defining PDF output (see **[Output Parameters](~pdf~.htm#Mark6)**).  
***PDF*** |  Keyword, not case-sensitive. Special device filename, enclosed in quotation marks within the **[OPEN](../directives/open.md)** directive. (Include *****  _asterisks_ in syntax)  
**[WDX]** |  File tag for directing output to a PDF on a WindX client machine instead of the server.  
  
For information on creating hyperlinks using text, pictures and rectangles, see **[Hyperlinks](~pdf~.htm#Mark27)**.

##  Description

Use ***PDF*** for directing output to a PDF (Postscript Document Format) compatible file. The interface to the PDF output is fundamentally the same as the interface to the Window's print spooler an application opens the logical file ***PDF*** instead of **[*WINPRT*](~winprt~.md)**.

The **OPEN** pathname may specify a number of semi-colon separated options for the PDF file. A number of semi-colon separated options for the PDF file may be included as part of the pathname or as part of the **OPT=** clause:

> **OPEN(**_chan_**)"PDF* [;**_option_**] [;**_option_**] []"  
> **  
> **OPEN(**_chan_**,OPT="**_option_**;**_option_**;")"*PDF*"**

***PDF*_Output Parameters_**

The following options can be used to define PDF output:

**Option** |  **Description**  
---|---  
**ASIS** |  Uses last defined settings and does not present the user with a window to enter parameters. If the output file already exists, it will be overwritten.  
**AUTHOR=**_string_ |  Adds an _Author_ tag to the PDF document.  
**CREATOR=**_string_ |  Adds a _Creator_ tag to the PDF document.  
**DISPLAY** |  Brings up an input window for the user to enter information, regardless if it is needed.  
**DPI****=**_num_ |  Dots per inch used only when **[PIXELPOS](~pdf~.htm#Mark31)** is _On_. Defaults to 150. _(added in PxPlus 2020)_  
**EMBED****= YES | NO | ALL** |  Determines if font can be embedded (**YES**), cannot be embedded (**NO** , thus only the 14 standard fonts supported), or mandates all fonts must be embedded (**ALL** , which results in a PDF/A-1b compliant file -- see below). This default value for this option can be set in the **[Config]** section of the **INI** using a **PDFEMBED=xxx** option. _(added in PxPlus v8.30)_  
**ENCRYPT** |  Encrypts document. By default, a password is required; therefore, if no owner password is provided, the system will default to 'password'. _(added in PxPlus v8.30)_  
**FILE=**_filename_ |  Allows specification of output file pathname.  
**FORM=**_formname_ |  Allows specification of forms names. Default is **LETTER** size (8.5" x11"). See **Forms Handling**.  
**INLINE** |  Can be used in conjunction with the **VIEW** option to have the system run the PDF viewer in line that is when the execution will be suspended until after the PDF viewer task is closed. _(added in PxPlus v11.00)_  
**KEYWORDS=**_string_ |  Adds a _Keywords_ tag to the PDF document.  
**MARGINS=**_top_**:**_left_**:**_right_**:**_bottom_ _  
  
or_ **MARGIN=**_top_**:**_left_**:**_right_**:**_bottom_ |  Defines margins. See **Margin Settings**.  
**METRIC** |  Indicates that the PDF is to default to Metric paper size (A4) instead of 8.5 x11 (Letter) sized paper. _(added in PxPlus v8.30)_  
**NOCOMPRESSION** |  Disable compression of the PDF file.  
**NOCOPY** |  Disable document copy. _(added in PxPlus v8.30)_  
**NOEDIT** |  Disable document editing. _(added in PxPlus v8.30)_  
**NOENTRY** |  Disable form entry and annotation. _(added in PxPlus v8.30)_  
**NOPRINT** |  Disable document printing. _(added in PxPlus v8.30)_  
**OPENPSWD** =_password_ |  Sets password required to open/view the document. To function, the document must also have an **OWNERPSWD**. _(added in PxPlus v8.30)_  
**ORIENTATION=LANDSCAPE | PORTRAIT** |  Defines how the report is intended to print. Default is **PORTRAIT**.  
**OVERWRITE** |  Indicates that overwriting the output file is OK, no need to verify with the user.  
**OWNERPSWD** =_password_ |  Sets the password to be used to identify the user as the document owner. _(added in PxPlus v8.30)_  
**PAPERSIZE=**_formnumber_ |  Allows specification of form given internal form number. See **Forms Handling**.  
**PIXELPOS** |  Set for pixel positioning instead of PDF positioning when using @X/Y(=_num_). Set **[DPI=](~pdf~.htm#Mark30)** to define pixel size. _(added in PxPlus 2020)_  
**PRODUCER=**_string_ |  Adds a _Producer_ tag to the PDF document.  
**SUBJECT=**_string_ |  Adds a _Subject_ tag to the PDF document.  
**TITLE=**_string_ |  Adds a _Title_ tag to the PDF document.   
**VIEW** |  **_(Only Available on Windows or When Using a WindX-based Client Server Interface)_** Launches a PDF viewer when the PDF file is closed. If no **FILE=** is specified, a temporary file is created and deleted when the user exits the PDF viewer. _(added in PxPlus v8.30)_  
**WATERMARK=**_xxx_ |  Allows for the specification of an image that is to be printed on each page of the PDF output prior to any application-generated data. The image will be scaled and centered on the page. _(added in PxPlus 2014 - Feature Pack 1)_  
  
> **These options require the use of the Haru PDF library and thus require that the['HP'](../parameters/hp.md) system parameter be set.**

**_PDF/A Compliant Output_**

To create a PDF/A compliant output file, you **_must_** declare that all fonts be embedded **(EMBED=ALL)**. The PDF file must also not be encrypted or have a password, as these would violate the ISO standards for PDF/A.

**_Margin Settings_**

Values for margin settings are typically given in 1000ths of an inch; however, the following also applies:

  * If the value contains the _letter_ ** _I_** , it is considered  _inches._
  * If the value contains the letter **_M_** , it is considered  _millimetres_.
  * If the value contains a decimal point or the value is less than 25, it is considered not as 1/1000 but as either _inches_ or _millimetres_.



**_Example:_**

|  MARGINS="250:250:250:250" |  All 4 margins are 250/1000's (1/4 inch).  
---|---|---  
|  MARGINS="1:1:1:1" |  All margins are 1 inch.  
|  MARGINS="1i:1i:1i:1i" |  All margins are 1 inch.  
|  MARGINS="1.25:1.25:1.25:1.25" |  All margins are 1-1/4 inches.  
|  MARGINS="20m:20m:20m:20m" |  All margins are 20 millimeters.  
  
##  General Information

If neither the **FORM=** or **PAPERSIZE=** is given, or the value for either of these two parameters cannot be found in the _Forms Library_ , then the default **LETTER** size (8.5" x11") is assumed.

If both **FORM=** and **PAPERSIZE=** are given, the **FORM=** option has priority. See **Forms Handling**.

If **FORM=** or **PAPERSIZE=** and **ORIENTATION=** is given, then the width and height as specified by **FORM=** or **PAPERSIZE=** is used. If the width is greater than the height and **PORTRAIT** was specified, then the width and height are swapped. If the height is greater than the width and **LANDSCAPE** was specified, then the height and width are swapped.

If the **ASIS** or **DISPLAY** options are not specified and no **FILE=** is given, then the system prompts the user for the file. If **ASIS** is specified, but no **FILE=** has been defined by a prior open to ***PDF*** , then the system will generate an Error #12: File does not exist (or already exists). The filename specified by **FILE=** cannot have a **[WDX]** prefix. If the user wants output to go to a remote file, he/she should issue the **OPEN** as follows:

> **OPEN (**_nnn_**) "[WDX]*PDF*"**

To simplify the logic behind this process and allow for developer customization, whenever ***PDF*** is opened, the input pathname is forwarded for processing to the user-defined program ***ext/pdf** (if it exists) or the PxPlus-supplied program ***ext/system/pdf**. It determines if the selection window should be presented and validates the **FORM=** and **PAPERSIZE=** options.

These options passed may be retrieved via **PTH( )** and **OPT( )**.

**_Example:_**

> open (1)"*PDF*;FILE=/tmp/pvx.pdf; FORM=Letter:8.5in:11in"

If using the native ***PDF*** interface, i.e. ['**HP'**](../parameters/hp.md) is **_Off_** , then the [**'FONT'**](../mnemonics/font.md) mnemonic only supports the following 14 basic PDF fonts:

> "Courier", "Courier-Bold", "Courier-BoldOblique", "Courier-Oblique", "Helvetica", "Helvetica-Bold", "Helvetica-BoldOblique", "Helvetica-Oblique", "Times-Roman", "Times-Bold", "Times-Italic", "Times-BoldItalic","Symbol" and "ZapfDingbats".

#### **Note:**  
These 14 basic PDF fonts are **_case sensitive_** , unlike using the fonts installed on the system, which are case insensitive.

**_Font Mapping_**

To simplify the mapping of common Windows fonts to the standard PDF fonts, the system automatically performs the following font translation:

**Windows Font** |  **PDF Font**  
---|---  
Arial |  Helvetica  
MS Sans Serif |  Helvetica  
Microsoft Sans Serif |  Helvetica  
Tahoma |  Helvetica  
Verdana |  Helvetica  
Times New Roman |  Times  
Courier New |  Courier  
  
If using the native ***PDF*** interface, i.e. **['HP'](../parameters/hp.md)** is **_Off_** , then font mapping will always occur.

If using the LibHaru ***PDF*** interface, i.e. **['HP'](../parameters/hp.md)** is **_On_** , then font mapping will occur **_only_** if the font is not found; otherwise, the standard PDF font or the font installed on the system will be used. The [**'FONT'**](../mnemonics/font.md) mnemonic supports the 14 basic PDF fonts, as well as any TrueType font installed on the system. You can also use the '**FONT'(list*,**_chan_**)** on the open ***PDF*** channel to list the fonts available.

#### **Note:**  
**_Prior to PxPlus 2017:_** If using the LibHaru ***PDF*** interface, i.e. **'HP'** is **_On_** , font mapping is **_not_** supported. The Helvetica font is used as the default even if **EMBED=ALL** is specified. This will result in a non-embedded font being used, in which case the PDF file will not be PDF/A compliant. See [**PDF/A Compliant Output**](~pdf~.htm#pdfa).  
  
**_PxPlus 2017 or later:_** If a font name is given that does **_not_** match a standard PDF font or a font installed on the system, then font mapping will occur, and the mapped font will be used (rather than the Helvetica font).

**_Mnemonics and Functions_**

The following mnemonics are supported with ***PDF*** :

> **['TEXT'](../mnemonics/text.md)**, **['FONT'](../mnemonics/font.md)**, **['PEN'](../mnemonics/pen.md)**, **['FILL'](../mnemonics/fill.md)**, **['PICTURE'](../mnemonics/picture.md)**, **['PIE'](../mnemonics/pie.md)**, **['POLGON'](../mnemonics/polygon.md)**, **['ARC'](../mnemonics/arc.md)**, **['RECTANGLE'](../mnemonics/rectangle.md)**, **['LINE'](../mnemonics/line.md)**, **['CIRCLE'](../mnemonics/circle.md)**, **['OFFSET'](../mnemonics/offset.md)**, **['LPI'](../mnemonics/lpi.md)**, **['CPI'](../mnemonics/cpi.md)**, **['MODE'](../mnemonics/mode.md)**, **['F _n_ '](../mnemonics/f_.md)** and **['B _n_ '](../mnemonics/b_.md)** (Foreground and Background Color), **['WHITE' and '_WHITE'](../mnemonics/white.md)** and other named colors, **['COLOUR'](../mnemonics/colour.md)** and **['COLOR'](../mnemonics/colour.md)**, **['LF'](../mnemonics/lf.md)**, **['CR'](../mnemonics/cr.md)**, ['**LM'**](../mnemonics/lm.md), ['**PM'**](../mnemonics/pm.md) and **['FF'](../mnemonics/ff.md)**.

If using the **['TEXT'](../mnemonics/text.md)** mnemonic to specify the vertical alignment options (**T** op, **M** iddle, **B** ottom), the **['HP'](../parameters/hp.md)** system parameter **_must_** be set to **_On_** ('HP'=1) to use the LibHaru ***PDF*** interface; otherwise, if **'HP'** is **_Off_** , the vertical alignment options will **_not_** be supported.

***PDF*** also supports language functions such as:

> **[FIB( )](../functions/fib.md)**, **[FIN( )](../functions/fin.md)**, **[FID( )](../functions/fid.md)**, **[PTH( )](../functions/pth.md)**, **[OPT( )](../functions/opt.md)**, **[MXC( )](../functions/mxc.md)**, **[MXL( )](../functions/mxc.md)**, etc.

**_UTF-8_**

If PxPlus UTF-8 mode is **_On_** , i.e. **'U8'** is **_On_** , then the following is true:

  * If using the native ***PDF*** interface, i.e. **['HP'](../parameters/hp.md)** is **_Off_** , then only ASCII characters are supported outputting to a PDF. Non-ASCII UTF-8 characters will not be displayed correctly.
  * If using the LibHaru ***PDF*** interface, i.e. **['HP'](../parameters/hp.md)** is **_On_** , then UTF-8 characters are supported outputting to a PDF.



#### **Note:**  
You must also use a font that supports the characters you want to display in the PDF; i.e. simplified Chinese characters will not display using Arial. Instead, you must use a font like SimSun.

_(UTF-8 support was added in PxPlus 2016.)_

**_Page Orientation_**

If using the LibHaru ***PDF*** interface, i.e. **['HP'](../parameters/hp.md)** is **_On_** , then it is possible to specify the page orientation for each page using the [**'LM'**](../mnemonics/lm.md) mnemonic or a _landscape_ orientation and using the [**'PM'**](../mnemonics/pm.md) mnemonic for a _portrait_ orientation.

You can switch between portrait and landscape modes when outputting PDF files using the 'LM' and 'PM' mnemonics if the mnemonic is issued ** _prior_** to outputting any data to the page.

#### **Note:**  
Issuing either of these mnemonics before or immediately after issuing the **['FF'](../mnemonics/ff.md)** mnemonic switches the orientation of the page.

_(Support for changing page orientation was added in PxPlus 2016.)_

**_Text Mode Printing_**

***PDF*** accepts character mode text.

**_Example:_**

> print (chan)"This is a sentence to output."

**_Some Limitations_**

The following are known limitations that control options under the PxPlus PDF interface:

|  |  Invalid mnemonics are ignored.  
---|---|---  
|  |  **['BO'](../mnemonics/bo.md)** and **['EO'](../mnemonics/eo.md)** and user-defined mnemonics are ignored.  
|  |  Only **['PEN'](../mnemonics/pen.md)**  _Solid_ , _Dashed_ , or _No Pen_ style options are supported.  
|  |  Only **['FILL'](../mnemonics/fill.md)**  _Solid_ and _No Fill_ options are supported (no gradient fills, lines, or hashes).  
|  |  **['PICTURE'](../mnemonics/picture.md)** support applies to the **_.jpg_** image format on macOS and AIX and to the **_.jpg_** and full color **_.png_** image formats on Linux. Transparency options are also only supported on Windows.  
_(Support for .jpg and .png images on Linux was added in PxPlus 2019.)_  
|  |  **['RECTANGLE'](../mnemonics/rectangle.md)**  _Rounded_ options are **_not_** supported.  
|  |  Compression is **_not_** supported for PDF files.  
|  |  _Output element skipping_ is applied instead of _truncate_ ; i.e. PDF documents skip the processing of output elements that exist outside the page borders or flow over a page border. **[*WINPRT*](~winprt~.md)** displays as much of the element as possible while truncating the portion that flows over a border.  
|  |  There is a limit of 8192 pages with the PDF LibHaru interface. Attempting to print beyond this limit will report an Error #2: END-OF-FILE on read or File full on write.  
  
##  Forms Handling

The PxPlus-supplied utility program ***ext/system/pdf** is embedded with a forms handling mechanism that validates and displays dialogues to the end user. To provide consistency with Windows forms handling, the PDF output paper size is determined via **_form name_** rather than by the physical dimensions of the paper.

For the purposes of the PDF handler, the **FORM=** option provides a form name followed by a _colon_ and includes the paper size in terms of width and height. The paper size values are assumed to be in thousandths of an inch unless followed by the letter **_I_** (for _inches)_ or the letter **_M_** (for _millimetres_).

The PDF processor within the system will only utilize the width and height portions of the **FORM=** option. The form name is provided strictly as a reference for the display.

The **_Form Library_** is a keyed file. The PDF utility program will search for ***ext/forms.**_xx_ then for ***ext/system/forms.**_xx_ , where _xx_ is a language code. The properties for this file are:

__ |  _Form Number_ |  Primary key, 3 digits (explained below).  
---|---|---  
__ |  _Name of Form_ |  Alternate key, 24 characters.  
__ |  _Width_ |  This field contains the width of the paper in the units specified below.  
__ |  _Height_ |  This field contains the height of the paper in the units specified below.  
__ |  _Units of Measure_ |  Contains "**I** " for inches or "**M** " for mm.  
__ |  _Priority_ |  Alternate key, Priority$+ Form number.  
  
The _*ext/system/forms.en_ file is pre-loaded with standard form sizes. The PDF selector window allows additional forms to be added to the file. When the first form is added to this file by the end user, a copy of the file ***ext/system/forms._xx_** is made in ***ext/forms._xx_** , which is then used.

To simplify installation of applications with custom forms, when the selection window is presented and a **FORM=** is specified, the form name will be automatically added if it does not already exist in the **_Forms Library_**. This allows applications to be created with hard-coded **FORM=** clauses in their **OPEN** command the system automatically creates the required form entry.

Form numbers are based on pre-defined form numbers used by MS Windows. As user-defined forms are added, new numbers will be assigned sequentially starting no lower than 256 (form numbers 0 to 255 are reserved).

Should the **OPEN** include a **PAPERSIZE=** option but no **FORM=** specification, the system will look up the form using the **PAPERSIZE=** value to determine what the proper form is. If there is neither a **FORM=** specification nor a valid **PAPERSIZE=** value, **LETTER** (8.5x11 inch) will be assumed. The **PAPERSIZE=** is ignored when a **FORM=** option is present.

The priority field is used to determine the load sequence for lists used to display the available forms in the system. By default, Letter, Legal, A4, A5, and a number of other standard form sizes are priority "0". All other forms have a priority of "5". User forms are added with a priority of "1" and appear near the top of the list when displayed, just below the standard form sizes.

##  Hyperlinks

**_Text Hyperlinks_**

A hyperlink can be outputted to a PDF document by printing using the **['TEXT'](../mnemonics/text.htm#Mark5)** mnemonic with the _< URL>_ attribute **_where_** URL is the destination of the hyperlink. The text will be underlined and displayed in blue to distinguish it as hyperlink text unless the _style=inherit_ option was specified with the URL. In that case, the current font and foreground color will determine the look of the hyperlink text.

**_Example:_**

> print (pdf_chan)'text'(240,420,"Google","C<http://www.google.com>")

_(Support for text hyperlinks was added in PxPlus 2018.)  
(The style=inherit option was added in PxPlus 2019.)_

**_Picture Hyperlinks_**

A picture can be created as a hyperlink that can be outputted to a PDF document by using the **['PICTURE'](../mnemonics/picture.htm#Mark4)** mnemonic with the **_<_**_URL**>**_ attribute **_where_** _URL_ is the destination of the hyperlink.

**_Example:_**

> open (pdf_chan)"*PDF*;file=C:\my_app\abc\report.pdf"  
>  print (pdf_chan)'picture'(1,1,100,100,"C:\my_app\abc\resources\mylogo.png,<https://www.mycompany.com>",2)  
>  print (pdf_chan)'picture'(500,800,700,880,"C:\my_app\resources\mapbutton.png,<file:///c:/my_app/abc/map.pdf>")  
>  close (pdf_chan)

_(Support for picture hyperlinks was added in PxPlus 2019.)_

**_Rectangle Hyperlinks_**

A rectangle can be created as a hyperlink that can be outputted to a PDF document by using the **['RECTANGLE'](../mnemonics/rectangle.htm#Mark5)** mnemonic with the **<**_URL_**>** attribute where _URL_ is the destination of the hyperlink. This can also be used to create an arbitrary region in the PDF that is a hyperlink. By setting **['PEN'](../mnemonics/pen.md)** to 0, the rectangle will not be drawn; however, the hyperlink will be created.

**_Example:_**

> open (pdf_chan)"*PDF*;file=C:\my_app\abc\report.pdf"  
>  print (pdf_chan)'pen'(1,3,8),'fill'(2,6)  
>  print (pdf_chan)'rectangle'(200,200,600,600,0,"<https://www.pvxplus.com>")  
>  print (pdf_chan)'pen'(0,0,0)  
>  print (pdf_chan)'rectangle'(800,100,900,400,0,"<file:///C:/my_app/abc/map.pdf>")  
>  close (pdf_chan)

_(Support for rectangle hyperlinks was added in PxPlus 2019.)_

##  Utility for Processing PDF Options

PxPlus includes PDF utility programs for processing options on an **OPEN** :

|  ***** **ext/system/pdf** |  PxPlus-supplied program  
---|---|---  
|  ***** **ext/pdf** |  User-defined program  
  
Both utility programs have the following format:

> **ENTER** _NewParameters$_**,**_OldParameters$_**, ERR=***_next_

The utility will handle most PDF option string validation and forms processing internally. It ensures that the string that it gets passed to process has a valid **FORM=** option before it is returned to the actual PDF interface. It is basically a pre-processor for the PDF string.

Once the PDF string is accepted, the utility program returns it to PxPlus, which saves it as the default setting. To allow for application designers to access this default setting, the **OPEN** logic for ***PDF*** files allows the developer to issue:

> **OPEN INPUT (**_chan_**) "*PDF*;ASIS"**

Then, query the **PTH( )** and **OPT( )** of the PDF file in order to obtain the settings. The **INPUT** clause prevents the system from erasing the output file. Optionally, to set default settings, the developer can issue:

> **OPEN INPUT _(_**_chan)_ "***PDF*** ;_new settings_ "

**_PDF Message Selection Box (Graphical)_**

The user will be presented with a dialogue box to allow for selection of the output file, form and orientation. When a file pathname has been given, the system checks to see if the file exists, and if so, the user is asked if he/she wishes to overwrite the output file. The _Form_ drop box contains the list of all the known form sizes in the system with the currently selected form name highlighted/selected (the default being _Letter_). The dialogue also has a _New_ button for adding a new form description.

Selecting the _Accept_ button in the message box results in the form description being saved/added to the form library and the identified form being set as the output form type.

**_PDF Message Selection Box (Text Mode)_**

The user will be presented with a character-mode window. When a file pathname has been given, the system checks to see if the file exists, and if so, the user is asked if he/she wishes to overwrite the output file. Once the file has been given, a drop list of the potential forms is displayed. The currently selected item is highlighted. After selecting the form, the user must select the orientation from a drop list with choices of _Portrait_ or _Landscape_.

Once all the selections are made, the user can select _OK_ or _Cancel_ to confirm the input.

##  Capturing Output to *WINPRT* as PDF Output

Output to **[*WINPRT*](~winprt~.md)** can be automatically intercepted for PDF using the **['AP'](../parameters/ap.md)** system parameter. When **'AP'** is set, if the user selects _Output To File_ and includes a filename ending in **_.pdf_** , the system looks at the options selected during the ***WINPRT*** Printer Selection dialogue and processes the output through ***PDF*** instead of ***WINPRT***.

**'AP'** may be set **_On_** in one of three ways:

> Via SET_PARAM 'AP'

> In an **INI** file **[Config]** section as **AutoEnablePDF=1**

> From the System Menu on a dialogue (drop-down menu from clicking the icon in a window title bar) as Use Internal PDF Driver

By setting the **AutoEnablePDF=-1** in the **[Config]** section of your **INI** file, you can remove the entry from the dialogue system drop-down menu. However, you are still be able to turn the **['AP'](../parameters/ap.md)** parameter on and off programmatically.

##  Default PDF Settings

The global variable **%PDF_DEFAULT$** can be set to contain any default PDF options such as default paper size, margins, etc. As in the ***PDF*** pathname, options should be separated by semi-colons.

In addition, **%PDF_DEFAULT$** can contain the option **VIEWER** , which will make the PDF driver the default report viewer in the system and will be used whenever the application opens ***VIEWER***.

##  See Also

[**'AP' Auto-Enable PDF Output**](../parameters/ap.md)  
[**'HP' Use Haru PDF Library**](../parameters/hp.md)  
[**'U8' Control UTF-8 Processing Defaults**](../parameters/u8.md)  
[**'FONT' Define/List Fonts**](../mnemonics/font.md)  
**['TEXT' Draw Text](../mnemonics/text.md)  
['PICTURE' Define/Draw Picture](../mnemonics/picture.md)**  
**['RECTANGLE' Draw a Rectangle](../mnemonics/rectangle.md)**  
[***WINPRT* Windows Printing**](~winprt~.md)
