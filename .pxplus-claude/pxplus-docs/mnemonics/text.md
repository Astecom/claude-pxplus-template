# Mnemonics 

**'TEXT'** |  **_Draw Text_**  
---|---  
  
**GUI Display/Printer**

##  Format

**'TEXT'(**_x_**,**_y_[,_x_ ,_y_],_text$_ ,[_attrib_ _$_]**)**  
  
**_Where:_**

_attrib_ _$_ |  Optional attribute string.

#### **Note:**  
If an attribute string is provided, the settings for the alignments, fill, wrap, ellipsis, focus and underscore (&) attributes are taken from the attribute string, **_not_** the current 'FONT' mnemonic.  
  
If a URL is provided in the attribute string, it will also override these settings.

Valid codes include: |  **&** |  Underscore the character following the '**&** ' (as in hot keys).  
---|---  
**B** |  Bottom alignment of text. See **[Note](text.htm#Mark6)** below. _(added in PxPlus 2017)_  
**C** |  Center text horizontally.  
**E** |  Truncate text if it extends beyond size specified and insert  _ellipsis_ (****) at the end.

#### **Note:**  
The **E** option is **_only valid_** if start and end positions are specified, no angle on the font, and on a single line.

_(added in PxPlus 2019)_  
**F** |  Show focus lines around text.  
**L** |  Left alignment of text. _(added in PxPlus 2017)_  
**M** |  Middle alignment of text. See **[Note](text.htm#Mark6)** below. _(added in PxPlus 2017)_  
**N** |  Numeric data alignment.  
**R** |  Right alignment of text. _(added in PxPlus 2017)_  
**S** |  Fills only the text background (not the whole region) with chosen background color.  
**T** |  Top alignment of text. See **[Note](text.htm#Mark6)** below. _(added in PxPlus 2017)_  
**W** |  Word wrap. See **[Word Wrap Behavior](text.htm#wordwrap)**.  
**#** |  Same as **N**.  
**< URL[**_style=inherit_**] >** |  **_(*PDF* Only)_** Change the text into a hyperlink where **URL** is the destination and the _style=inherit_ option may be applied. See **[Hyperlinks](text.htm#Mark5)**.

#### **Note:**  
This option requires the use of the **Haru PDF** library and thus requires that the **['HP'](../parameters/hp.md)** system parameter be set.

_(added the <URL> attribute in PxPlus 2018)  
(added the style=inherit option in PxPlus 2019)_  
***TEXT  
*RTF  
*MORE** |  Special text block printing modes designed to give programmer ability to easily print multiple lines of output to a printer. See **[Block Printing](text.htm#block)**.  
  
#### **Note****:**  
The vertical alignment options (**T** op, **M** iddle, **B** ottom) can only be specified using the **'TEXT'** mnemonic. If using **[*PDF*](../file_handling/~pdf~.md)**, the **['HP'](../parameters/hp.md)** system parameter **_must_** be set to **_On_** ('HP'=1) to use the LibHaru ***PDF*** interface; otherwise, if **'HP'** is **_Off_** , the vertical alignment options will **_not_** be supported.  
  
The default vertical and horizontal alignments are set based on the **['FONT'](font.md)** mnemonic (default is **T** op-**L** eft).  
  
If the horizontal alignment is **_not_** specified, **L** eft is assumed.  
  
If the vertical alignment is **_not_** specified, **T** op is assumed unless the horizontal alignment is **C** enter, in which case, **M** iddle is assumed.  
  
_text$_ |  String expression.  
_x_**,**_y,x,y_ |  Point coordinates for top left and (optionally) bottom right, in graphical units. Numeric expression.  
  
##  Description

Use **'TEXT'** to draw (print) text in graphics mode, starting at the point set by the first _x,y_ coordinates. Use graphical units or **@X(**_col_**)** and **@Y(**_line_**)** functions (see **[@X( ) / @Y( )](../functions/~x.md)** function) for the various coordinates. The **'TEXT'** mnemonic uses current **['FONT'](font.md)** and color attributes (i.e. **['RED'](red.md)**, **['BLUE'](blue.md)**).

Use the optional **_second_** set of _x,y_ parameters to define the bottom right corner of a rectangular region for displaying the text. You can use the functions **[TXH( )](../functions/txh.md)** and **[TXW( )](../functions/txw.md)** to make sure the text fits the region.

#### **Note:**  
For Windows printers, if the current background color is white, the output will be considered **_transparent_** (i.e. with no background fill).

**_Example:_**

> print 'font'("MS Serif",-11)  
>  print 'green','text'(240,420,"&Hello","&")

**_Word Wrap Behavior_**

If you print using **'TEXT'** with word wrap **_On_** , printing to either **[*WINPRT*](../file_handling/~winprt~.md)** and **[*PDF*](../file_handling/~pdf~.md)** will word wrap normal text (i.e. text containing spaces); however, only *PDF* (**_not_** *WINPRT*) will word wrap lengthy unbroken text that does not contain spaces.

If you print using **'TEXT'** with word wrap **_Off_** , both *WINPRT* and *PDF* will **_always_** truncate text. If you print without using **'TEXT'** , text will **_not_** word wrap.

##  Hyperlinks

**_Text Hyperlinks_**

If using the LibHaru **[*PDF*](../file_handling/~pdf~.htm#Mark27)** interface, i.e. **['HP'](../parameters/hp.md)** is **_On_** , and you print to a ***PDF*** channel using **'TEXT'** with the **<**_URL_**>** attribute, the text will become a hyperlink with _URL_ as the destination. The text will be underlined and displayed in blue to distinguish it as hyperlink text unless the _style=inherit_ option was specified with the URL. In that case, the current font and foreground color will determine the look of the hyperlink text.

PDF viewer applications will attempt to guess whether a URL is a Web link or a file link. To prevent the PDF viewer application from being incorrect, the recommendation is that you prefix Web links with **_http://_** , **_https://_** or **_ftp://_** and prefix file links with **_file:///_**.

If you are creating a file link and using the **_file:///_** prefix, you **_must_** use an absolute path to the file. However, if you want to use a relative path to the file, do **_not_** use the **_file:///_** prefix and just specify the relative path. For example, if the open PDF file is in the directory _C:\myapp\reports_ and you want to link to another PDF file called _abc.pdf_ located in _C:\myapp\reports\2016,_ you need to specify the URL as _2016\abc.pdf_.

**_Examples:_**

> print (pdf_chan)'text'(240,420,"Google","C<http://www.google.com>")  
>  print (pdf_chan)'text'(240,420,"Your Report","R<file:///c:/my_app/abc/report.pdf>")  
>  print (1)'font'("Arial",-30,"I")  
>  print (1)'F1'  
>  print (pdf_chan)'text'(240,420,"Your Report","R<abc/report.pdf style=inherit>")

_(Support for text hyperlinks in PDFs if using LibHaru was added in PxPlus 2018.)  
(The style=inherit option was added in PxPlus 2019.)_

## Block Printing

PxPlus provides a special attribute string of "***TEXT** " (or "***RTF** ") to print blocks of text with word wrap to *WINPRT* and *PDF* printed output (PDF output current only support *TEXT, not *RTF).

To use this Block print feature, the **'TEXT'** mnemonic allows the attribute string to contain "*TEXT" (or "*RTF"):

> 'TEXT'(x1,y1,x2,y2, "<string>", **"*TEXT"**)  
>  'TEXT'(x1,y1,x2,y2, "<RTF string>", **"*RTF"**)

This would take the string (simple text or RTF) and print it within the bounds of the region specified on the printer. If *RTF, the current font and color setting would be ignored. If "*TEXT", the assumption would be word wrap but use current font, colors, etc.

Should the space required to print the output exceed the size of the region specified, the system will set the internal FIN value of "BYTESLEFT" to a non-zero value, indicating how much of the data was not printed. If all the data was printed, this value will be set to 0  _(zero)_.

By testing the value in BYTESLEFT, the application can determine that the output did overflow the region and can issue a print with the attribute string of "*MORE". When specifying *MORE, the system will automatically resume printing the text where it left off. In addition, the application does not need to send the text string again since the system will have already buffered the output data; thus the output text string can be left blank (this will improve system throughput).

**_Example:_**

Assuming that the string COMMENT$ has a long comment to be printed on a document and may potentially require multiple pages to output, the following logic could be used:

**Sample Using "BYTELEFT" to Handle Page Overflow**  
---  
gosub PRINT_HEADER  
!  
print (fileno)'text'(@x(10),@y(10),@x(60),@y(40),comment$,"*TEXT"),  
!  
while fin(fileno,"BYTESLEFT")<>"0"  
gosub PRINT_FOOTER  
print (fileno)'FF',  
gosub PRINT_HEADER  
print (fileno)'text'(@x(10),@y(10),@x(60),@y(40),"","*MORE"),  
wend  
!  
gosub PRINT_FOOTER  
  
Block printing also returns the actual number of print lines that were used to print the data in the internal FIN value of "**TEXTUSEDHEIGHT** ". This value can be used to determine the exact height of the data printed so that the application can determine where to resume printing at if it wants to print below the text.

**_Example:_**

A typical example of using these two fields would be in a form print program where you may have lines intermixed with comments where the comments may be varying in length RTF text:

**Sample Invoice Print Routine with Variable Length RTF Comments**  
---  
max_line=40  
min_line=10  
!  
NEXT_INVOICE:  
read (inv_file,end=*return)  
!  
gosub PRINT_INV_HDR  
line=min_line  
!  
NEXT_LINE:  
read (inv_line,end=END_INVOICE)  
!  
if line>max_line \  
then gosub PRINT_INV_FOOT;  
gosub PRINT_INV_HDR;  
line=min_line  
!  
print (fileno)'text'(@x(10),@y(line),@x(60),@y(line+1),linedata$),  
line++  
!  
if comment$="" \  
then goto NEXT_LINE  
!  
if line>max_line \  
then gosub PRINT_INV_FOOT;  
gosub PRINT_INV_HDR;  
line=min_line  
!  
print (fileno)'text'(@x(10),@y(line),@x(60),@y(max_line),comment$,"*RTF"),  
!  
while fin(fileno,"BYTESLEFT")<>"0"  
gosub PRINT_INV_FOOT  
gosub PRINT_INV_HDR  
line=min_line  
!  
! Note we don't resend the comment line - system has it buffered  
!  
print (fileno)'text'(@x(10),@y(line),@x(60),@y(max_line),"","*MORE"),  
wend  
!  
line+=num(fin(fileno,"TEXTUSEDHEIGHT"))  
goto NEXT_LINE  
!  
END_INVOICE:  
gosub PRINT_INV_FOOT  
goto NEXT_INVOICE  
  
(The 'TEXT' Block Printing capabilities were added in PxPlus v8.11.)
