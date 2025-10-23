# Printing

**Logical Printers** |  **__**  
---|---  
  
A **PRINT** destination does not necessarily mean a hard copy device. In PxPlus, you have the option to send output data to an image file, HTML, PDF, or preview facility just as easily as any physical printer. In these alternative formats, your output can be further manipulated, merged with other documents, displayed/distributed as is, or simply "printed out" at a later time.

The following logical **PRINT** destinations can be made available for use (in an **OPEN** statement) using standard file options. See **[Special File Handling](../../../file_handling.md)**.

##  HTML Output - *HTML*

***HTML*** generates HTML (Hypertext Markup Language) documents from character-based output in PxPlus (Windows or UNIX/Linux). Only reports that are formatted using _fixed-pitched fonts_ (e.g. Courier) can be converted to HTML. However, the resulting **_.htm_** files are in a _universal format_ that can be viewed in any browser or incorporated into a Web page for posting on the Internet.

**_Example:_**

> OPEN (1)"*HTML*;FILE=Sample.htm;SHOW;FONT=Courier New;TITLE=Sample;BACK=FFFFFF;TEXT=000000"

This example creates an HTML file called Sample.htm. It generates a report titled "Sample" that is formatted in the Courier New font in black text on a white background. The keyword**SHOW** indicates that the current default browser will be automatically invoked to display the file once it is created. If a file name is omitted, the system prompts for a path/file name to store the resulting HTML document.

For syntax details, see **[*HTML*](../../../file_handling/~html~.md)**.

##  Virtual Bitmap - *BITMAP*

***BITMAP*** captures graphical output to a 24-bit colour bitmap image stored in memory. The resulting***BITMAP*** image can be retrieved for display using the **['PICTURE'](../../../mnemonics/picture.md)** mnemonic, which accepts the assigned***BITMAP*** channel number preceded by a**#** in place of a file name.

**_Example:_**

> OPEN (1)"*BITMAP*"   
>  PRINT (1)"HELLO"   
>  PRINT 'PICTURE'(@X(col1),@Y(row1),@X(col2),@Y(row2),"#1"),

The **[SAVE FILE](../../../directives/save_file.md)** directive can also save***BITMAP*** contents directly to a .bmp file.

**_Example:_**

> OPEN (1)"*BITMAP*"   
>  PRINT (1)"HELLO"   
>  SAVE FILE (1) TO "C:\test.bmp"

See **[*BITMAP*](../../../file_handling/~bitmap~.md)**, the **[SAVE FILE](../../../directives/save_file.md)** directive, and the **['PICTURE'](../../../mnemonics/picture.md)** mnemonic.

##  Print Preview - *VIEWER*

***VIEWER*** directs graphical and character-based output to the internal _print preview_ facility (Viewer). The Viewer is a customizable _user interface_ in PxPlus for Windows (and WindX) that renders output for display as it would appear in hard copy form using ***WINPRT*** or any other print destination. When a report is loaded into the Viewer interface, it can then be displayed, manipulated and "printed out" using a wide variety of format settings, including:

  * 1-page, 2-page, 2-page book style, and 4-page viewing


  * 10 to 400% zoom increments and Fit-To-Width/Fit-To-Window display


  * Page-specific paper size and (landscape/portrait) orientation


  * Find and Find Again search functionality


  * Full report scrolling


  * Watermarks for display or print


  * Banner information for display or print


  * Background spooling



The above settings, as well as many other actions, are controlled directly from the Viewer panel menu bar, GUI buttons and drop-downs. A full suite of options representing various graphical and character-based output properties may also be specified on the**OPEN** command, either in the**"*VIEWER*** " syntax or by issuing an**OPT=**_string$_.

**_Example:_**

> OPEN(chan)"*VIEWER*"   
>  OPEN(chan)"*VIEWER*;Title=My Report;Orientation=Landscape"

For syntax details for setting output properties, see **[*VIEWER*](../../../file_handling/~viewer~.md)**.

##  PDF Output - *PDF*

***PDF*** generates documents in PDF (Postscript Display Format) from any graphical and/or character-based output in PxPlus (Windows or UNIX/Linux). The .pdf files created using this**PRINT** destination are fully compatible with Adobe Acrobat, as well as with any other PDF reader.

**_Example:_**

> OPEN (1) "*PDF*;FILE=/tmp/pvx.pdf; FORM=Letter:8.5in:11in"

If the file name is omitted, the system prompts for a path/file name to store the resulting PDF.

Output to***WINPRT*** can be automatically intercepted for PDF using the **['AP'](../../../parameters/ap.md)** system parameter. When**'AP'** is set, if the user selects _Output To File_ and includes a file name ending in .pdf, PxPlus looks at the option selected during the***WINPRT*** Printer Selection dialogue and processes the output through ***PDF*** , instead of***WINPRT***.

For syntax details, see **[*PDF*](../../../file_handling/~pdf~.md)**.
