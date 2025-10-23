# Web Utilities  
  
***WEB/MERGE** |  **_Merge Dynamic Data with HTML Templates_**  
---|---  
  
## Description

A template is an HTML page with special coding embedded in it. You can create templates using any HTML editor. A PxPlus Web Server utility, the ***web/merge** program, reads your HTML page, scanning for specialty codes (arguments enclosed in ~~ _double tildes_).

**_Example:_**

> ~~total?F:####0.00~~

It evaluates the special codes embedded in the HTML page, substituting data as necessary, and sends the dynamically created page to the output channel **[%print_fn](../PxPlus%20Web%20Server%20Variables/Overview.htm#print_fn)**.

#### **Note:**  
As a prerequisite to running the *web/merge program, set the value in HTML_FILE$ to the path/file name of your HTML template page.

The Web Server performs the *web/merge program when you RUN it, so variables, files, etc. are available throughout.

**_Example:_**

> ! home.html - A misdirection  
>  MESS1$="Welcome",MESS2$="Please sign on",USERID$="",USERPASSWD$=""  
>  HTML_FILE$="orders/login.htm" ! See Orders Web Page 1: login.htm .  
>  run "*web/merge"

## Format

**_Special Codes in HTML Page:_** ~~argument[?suffix]~~

**_Where:_**

~~ ... ~~ |  Double tildes enclose special codes.  
---|---  
argument |  String or numeric variable name. You can use any variable in any style (local, global, system, array).  
  
**_Example:_  
**  
~~address$~~   
~~total~~   
~~DAY~~ For some suffixes, your argument is the name of a program that the merge utility will perform. For instance, for the ?T suffix, it is the program to fill the table which immediately follows your ~~prog;stmtref?T~~. If there is no suffix, the argument is a simple variable name.  
?suffix |  An optional suffix. If you include a suffix, your argument must be valid for the special processing done by the suffix declaration. Valid suffixes are: |  **** |  **?+** |  Check Box/Radio Button is initialized based on the value in your argument variable. Values are 1 = On; 0 (zero) = Off.  
---|---|---  
**** |  **?A** |  Do not run value through HTML escape code translator (i.e. do not perform HTML encoding: <=&It; >=&gt; "=&quot; &=&amp;).  
**** |  **?F:xxx** |  Convert using format mask specified (uses STR( ) function).  
**** |  **?L** |  Perform URL encoding. (i.e. $20$+$8a$ becomes %20%8A, etc.)  
**** |  **?P** |  Perform the program name given.   
  
**_Example:_  
**  
~~my_prog?P~~ 

#### **Note:_  
_** Any performed program must have output in HTML format and must do its own escape coding. The Web Server will not check or convert output.  
  
**** |  **?X** |  Evaluate argument as string expression and substitute result.  
  
There are also three valid Table suffixes:

**** |  **?CT** |  (Colour Table) is a table suffix enhancement that allows you to set alternate row background colors. See **[Color Table Suffix](Merge%20Dynamic%20Data%20with%20HTML%20Templates.htm#color_table)**.  
---|---|---  
**** |  **?JT[/H]** |  (Jump Table) is a table suffix enhancement that allows you to fill the table with as many records as available, up to the maximum number of records you specify. Use /H for custom positioning of hyperlinks. See **[Jump Table Suffix](Merge%20Dynamic%20Data%20with%20HTML%20Templates.htm#jump_table)**.  
**** |  **?T** |  The basic Table definition suffix includes the name of your program for the merge utility to perform to fill the table which immediately follows your ~~prog;stmtref?T~~. See **[Table Suffixes](Merge%20Dynamic%20Data%20with%20HTML%20Templates.htm#table_suffixes)**.  
  
**_Examples:_  
**  
~~Total?F:####0.00~~   
~~dte(jul(0,0,0):"%Mz/%Dz/%Yl")?X~~   
~~myprog;filltable?T~~  
  
##  Table Suffixes

You can use a program name and entrypoint label as your argument with ?T (and with the ?CT and ?JT suffixes) in your HTML page or template, as in: ~~myprog;filltable?T~~. Your program should OPEN any files required, read the data needed to fill one row of your given table, and then EXIT, leaving the files OPEN and the record pointers intact. Your program should CLOSE the files and EXIT 2 (exit with an Error 2) at the end of the records (EOF). This will tell the ?T table logic to complete the code necessary to finish processing the HTML template.

**_Example:_**

For the example ~~myprog;filltable?T~~, the merge program executes the specialty code by running the program myprog starting at the filltable: entry point. Each cell in your table would have a variable name (such as ~~Desc$~~ ~~QTY~~ etc.) for the values to be returned when the program you name in your argument READs the file(s). See **[Basic HTML Template Creation](Merge%20Dynamic%20Data%20with%20HTML%20Templates.htm#basic_HTMLtemplate)**.

In the program "myprog;filltable", the merge program starts execution at the filltable:line label in myprog in this example. The program OPENs the files and READs the first record to obtain a row's worth of data. It leaves the files open and EXITs back to the merge program. The merge logic fills the cells of the row and returns control to myprog;filltable. The program reads more data and EXITs back to the merge program's table logic (which fills in the cells for the next row). This continues until myprog;filltable does an EXIT 2, which indicates to the merge program that the end of the table has been reached. The merge program's table logic then finishes off the HTML table coding and proceeds to process the rest of the template.

> 0080 !  
>  0090 filltable:  
>  0100 if %myfile=0 then %myfile=hfn; open (%myfile)"myfile"  
>  0130 read (%myfile,end=50)a$,b,desc$,qty  
>  0140 exit  
>  0150 close (%myfile);%myfile=0;exit 2

See **[Basic HTML Template Creation](Merge%20Dynamic%20Data%20with%20HTML%20Templates.htm#basic_HTMLtemplate)**.

## ?CT (Color Table) Suffix

The ?CT table suffix lets you create a table with alternating background colors for the rows. For instance, for ~~myprog;stmtref?CT~~, the PxPlus default is to alternate silver background (RGB 192,192,192) for the odd-numbered rows and gray background (RGB 222,222,222) for the even-numbered rows.

You can set one or both of the background colors to your own color choice. If you set only the first color, *web/merge creates the second color by using a lighter shade of your first choice.

#### **Note:**  
Some colors work better than others for alternating background shades.

## Setting Row Background Colors

In the program you use to load the table (myprog in the example), use the **COLOR:** statement label as a keyword to notify *web/merge that you are assigning your own background color(s) for alternating rows. Then, use your COLOR: routine to assign one or both colors to the *web/merge COLOR$ array, using the **#** pound symbol followed by the HEX equivalents of your RGB values.

**_Example:_**

For silver (RGB 192,192,192), you would use #C0C0C0. The example below just reverses the order of the defaults:

> COLOR:  
>  COLOR$[1]="#323232" ! Gray  
>  COLOR$[2]="#C0C0C0" ! Silver

## ?JT (Jump Table) Suffix

The ?JT table suffix lets you fill your table with as many records as are available, up to the maximum number of records. (This differs from the ?T suffix, which fills the table using ALL the records, stopping only when PxPlus encounters your EXIT 2 directive.) Use the numeric variable **MAX_ROW** (keyword, default = 100) to set the maximum number of rows you want returned for each page produced using the ?JT suffix.

By default, a jump table is followed by default hyperlinks of next and previous MAX_ROW records, centered under the table. For greater control of hyperlink placement, use the ?JT/H suffix. Then, instead of being centered directly under the table, the hyperlinks will be put where you place the following keywords, %FRWD_HYPLINK$ and %BACK_HYPLINK$, for the specified table in your HTML template. 

**_Example:_**

To place the hyperlinks at the left margin:

> ~~myprog;filltable?JT/H~~   
>  %back_hyplink$   
>  %FRWD_HYPLINK$

For a ?JT jump table, you must READ your records based on a key=JK$ (a specialty variable). It is important to READ immediately after OPENing your file so that *web/merge can save the relevant next and previous hyperlinks.

**_Example:_**

> open (CHANNEL)"YOUR_FILE"  
>  read (CHANNEL,err=*next)  
>  goto YOUR_LOAD_ROUTINE  
>    
>  YOUR_LOAD_ROUTINE:  
>  JK$=key(CHANNEL)  
>  read (CHANNEL,key=JK$,err=*next)

##  Basic HTML Template Creation

The next example of basic HTML template creation was designed using Frontpage. See **[Appendix - HTML Examples](../Appendix%20-%20HTML%20Examples/Overview.md)**.

> <html>   
>   
>  <head>   
>  <title>Exercise - Basic Template Creation and Usage</title>   
>  </head>   
>  <body background="images/whttxtr1.jpg">   
>  <div align="right">   
>   
>  <table border="1" cellpadding="3" width="100%">   
>  <tr>  
>  <td width="100%" colspan="2" bgcolor="#000000"><p align="center"><big><big><big><strong><font  
>  color="#FFFFFF" face="Arial">The PxPlus Web Server Workshop</font></   
>   
>  strong></big></big></big></td>  
>  </tr>  
>  <tr>  
>  <td width="50%"><font face="Tahoma">Your IP Address is: ~~%remote_ip$~~</   
>  font></td>  
>  <td width="50%"><font face="Tahoma">You've visited this page:  
>  ~~%hit_counter~~ times.</font></td>  
>  </tr>  
>  </table>  
>  </div><div align="right">  
>   
>  <table border="1" cellpadding="3" width="100%">  
>  <tr>  
>  <td width="66%" bgcolor="#000080"><font face="Tahoma" color="#80FFFF"><strong>Directory  
>  Browse of: ~~%document_uri$~~</strong></font></td>  
>  <td width="34%" bgcolor="#000080"><font face="Tahoma" color="#80FFFF"><strong>As of:  
>  ~~dte(0:&quot;%Mz/%Dz/%Yl %hz:%mz:%sz %P&quot;)?X~~</strong></font></td>  
>  </tr>  
>  </table>  
>  </div><div align="right">  
>   
>  <table border="1" cellpadding="3" width="100%">  
>  <tr>  
>  <td width="33%"><strong><font face="Tahoma">File Name</font></strong></td>  
>  <td width="33%"><strong><font face="Tahoma">Size (in bytes)</font></  
>  strong></td>  
>  <td width="34%"><strong><font face="Tahoma">Modification Date</font></  
>  strong></td>  
>  </tr>  
>  </table>  
>  </div>  
>   
>  <p>~~webpvx03;load_dir?T~~</p>  
>  <div align="right">  
>   
>  <table border="1" cellpadding="3" width="100%">  
>  <tr>  
>  <td width="33%">~~filname$?A~~</td>  
>  <td width="33%">~~filtype$~~</td>  
>  <td width="34%">~~fildate$~~</td>  
>  </tr>  
>  </table>  
>  </div>  
>   
>  <p>If you have any problems with this web page, please contact our <a href=" mailto:webmaster@pvxplus.com">webmaster</a>. </p>   
>  </body>  
>  </html>

## Basic Template Filling

> ! webpvx03 - Basic Template Filling - A Directory Browse  
>  !  
>  NOW$=dte(0:"%Mz/%Dz/%Yz %h:%mz:%sz %P")  
>  HTML_FILE$="basetmpl.htm"  
>  perform "*web/merge"  
>  end  
>  !  
>  !  
>  LOAD_DIR:  
>  if %DIR=0 \  
>  then %DIR=hfn;  
>  open input (%DIR)"."  
>  read (%DIR,end=LOAD_DIR_DONE)FILNAME$  
>  CHAN=hfn;  
>  open input (CHAN,err=LOAD_DIR_NEXT)FILNAME$  
>  FILNAME$="<a href="+quo+FILNAME$+quo+">"+FILNAME$+"</a>"  
>  if mid(fib(CHAN),19,1)="D" \  
>  then FILTYPE$="<Dir>" \  
>  else FILTYPE$=str(dec($00$+mid(fin(CHAN),1,4)):"###,###,##0")  
>  FILDATE$=dte(jul(1970,1,1)+dec($00$+mid(fin(CHAN),5,4))/60/60/24,*:"%Mz/%Dz/%Yz %h:%mz:%sz %P")  
>  LOAD_DIR_NEXT:  
>  close (CHAN)  
>  exit  
>  !  
>  !  
>  !  
> LOAD_DIR_DONE:  
>  close (%DIR);  
>  %DIR=0;  
>  exit 2

## Using Your HTML Editor

You can use any HTML editor to create your web pages and templates. 

**_Example:_**

In the following example, MS Word was used to create a document page containing text, a graphic and a table:

> This is a Word example, creating an HTML page   
>  {EMBED Paint.Picture }   
>  ~~myprog;filltable?T~~

~~Description$~~ |  ~~Quantity~~ |  ~~Price~~ |  ~~Extended~~  
---|---|---|---  
  
When the document page was "Saved As" HTML, Word generated the HTML code below:

> <HTML>   
>  <HEAD>  
>  <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=windows-1252">  
>  <META NAME="Generator" CONTENT="Microsoft Word 97">  
>  <TITLE>test</TITLE>  
>  <META NAME="Template" CONTENT="C:\PROGRAM FILES\MSWORKS\OFFICE\html.dot">  
>  </HEAD>  
>  <BODY LINK="#0000ff" VLINK="#800080">  
>   
>  <FONT FACE="Arial" SIZE=2><P>This is a Word example, creating an HTML page.</P>  
>  </FONT><P><IMG SRC="Image1.gif" WIDTH=196 HEIGHT=197></P>  
>  <FONT FACE="Arial" SIZE=2><P>~~myprog;filltable?T~~</P></FONT>  
>  <TABLE CELLSPACING=0 BORDER=0 CELLPADDING=7 WIDTH=732>  
>  <TR><TD WIDTH="25%" VALIGN="TOP" HEIGHT=30>  
>  <FONT FACE="Arial" SIZE=2><P>~~Description$~~</FONT></TD>  
>  <TD WIDTH="25%" VALIGN="TOP" HEIGHT=30>  
>  <FONT FACE="Arial" SIZE=2><P>~~Quantity~~</FONT></TD>  
>  <TD WIDTH="25%" VALIGN="TOP" HEIGHT=30>  
>  <FONT FACE="Arial" SIZE=2><P>~~Price~~</FONT></TD>  
>  <TD WIDTH="25%" VALIGN="TOP" HEIGHT=30>  
>  <FONT FACE="Arial" SIZE=2><P>~~Extended~~</FONT></TD>  
>  </TR>  
>  <TR><TD WIDTH="25%" VALIGN="TOP" HEIGHT=30><P></P></TD>  
>  <TD WIDTH="25%" VALIGN="TOP" HEIGHT=30><P></P></TD>  
>  <TD WIDTH="25%" VALIGN="TOP" HEIGHT=30><P></P></TD>  
>  <TD WIDTH="25%" VALIGN="TOP" HEIGHT=30><P></P></TD>   
>   
>  </TR>  
>  </TABLE>  
>   
>  <FONT FACE="Arial" SIZE=2><P>&nbsp;</P></FONT></BODY>  
>  </HTML>

For more information on using your particular HTML editor, refer to your HTML editor's manual.
