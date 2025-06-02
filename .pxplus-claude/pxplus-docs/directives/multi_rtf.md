# Directives 

**MULTI_LINE** |  **_Rich Text Word Processor Control_**  
---|---  
  
## Description

A Rich Text editor style provides built-in word processor functionality within the PxPlus environment. It provides the following text formatting options:

  * Different fonts and character sizes
  * Left, Right and Centering paragraph alignment
  * Italics, Bold, Underline, Strikeout
  * Indentation both on the Left and Right
  * Bullets



#### **Note:**  
Rich Text Multi-Line controls are **_not_** supported in iNomads.

The control also has a built-in text Find capability accessible through CTRL-F to initiate the find and F3 to find the next occurrence.

The user can also press CTRL-Shift-Insert to call up the font selector where they can change the current font, its size, color and attributes. CTRL-Shift-Up Arrow and CTRL-Shift-Down Arrow can be used to change the size of the current font.

## Defining RichText Control

A Rich Text word processor control can be created using the "r" option with a MULTI_LINE directive:

> MULTI_LINE rtf_id,@(_col, line, width, height_), OPT="r"

All other options except FMT= apply.

#### **Note:**  
You can define a Rich Text multi-line to use **_either_** the _Transparent Background_ ** _or_** the _Locked_ option but **_not both_** for the same control. Enabling both options together causes the text font/color to be lost because Windows sets the background color of the RTF to a different color if the background is locked.

## RTF File Interface

The output of the control is a RTF string that can be used to create a file compatible with most word processors. The data stream used by the control can be directly written to or read from an RTF word processor file.

The following logic can be used to load a multi-line from an RTF file:

> open (1,isz=-1)"file.rtf"  
>  FILESIZE=num(fin(1,"FILELENGTH"))  
>  read record (1,siz=FILESIZE)RTFDATA$  
>  close (1)  
> multi_line write ML_ID,RTFDATA$

To create an RTF file from the contents of an RTF word processing control, you simply need to read the control and write it to a file:

> multi_line read ML_ID,RTFDATA$  
>  serial "file.rtf",err=*next  
>  open purge (1,isz=-1)"file.rtf"  
>  write record (1)RTFDATA$  
>  close (1)

## Properties

For a list of properties that are used with **_Rich Text Format_** word processor controls, see **[Multi_Line Rich Text Properties](../control_object_properties/multiline_rtf_properties.md)**.

## Example

**_Example 1:_**

Using the properties, you can create formatted text similar to the following:

Dear Sir,  
  
Your product order **123456** is ready to ship. Please forward us:

  * Your bank information
  * Preferred shipping method

Regards,  
**Mike**  
---  
  
> ML=10  
> multi_line ML,@(5,5,50,10),opt="r",fnt="ARIAL,1"  
>  ML'SELECTTEXT$="Dear Sir,"+$0D0A0D0A$  
>  ML'SELECTTEXT$="Your product order "  
>  ML'SELBOLD=1  
>  ML'SELECTTEXT$="123456"  
>  ML'SELBOLD=0  
>  ML'SELECTTEXT$=" is ready to ship. Please forward us:"+$0D0A$  
>  ML'SELBULLETS=1  
>  ML'SELINDENT=720 ! .5 Inch  
>  ML'SELECTTEXT$="Your bank information"+$0D0A$  
>  ML'SELECTTEXT$="Preferred shipping method."+$0D0A$  
>  ML'SELBULLETS=0  
>  ML'SELINDENT=0  
>  ML'SELECTTEXT$="Regards,"+$0D0A$  
>  ML'SELFONT$="Lucida Handwriting,1.5,B"  
>  ML'SELTEXTCOLOUR$="Blue"  
>  ML'SELECTTEXT$="Mike"  
>  escape

Once the text is created, its contents can be read and written to disk in order to create an RTF word processing document.

**_Example 2:_**

The following subroutine provides a simple word processor like input screen:

> enter TEXT$,C=-1,L=-1,W=80,H=25,HDR$="Text Editor"  
>  print 'dialogue'(C,L,W,H,HDR$,'B?'+'4D'),'SR','CS',  
>  print 'font'("*GUIFONT"),'GF',  
>  if C<0 or L<0 \  
>  then print 'option'("CENTERWDW"),  
>  button 10,@(.75,.25,4,2)="{!Font}"  
>  button 11,@(5.75,.25,4,2)="{!Binoculars}"  
>  button 12,@(10.75,.25,4,2)="{!Tab}"  
>  button 13,@(15.75,.25,4,2)="{!backtab}"  
>  !  
>  button 4,@(W-11,H-2.5,10,2)="&Done"  
>  !  
>  ML=20  
>  multi_line ML,@(1,3,W-2,H-6),opt="r"  
>  multi_line write ML,TEXT$  
>  !  
>  while 1  
>  set_focus ML  
>  obtain (0,siz=1)'ME',*,'MN'  
>  if ctl=4 or eom=esc \  
>  then break  
>  if ctl=10 \  
>  then ML'SELCHOOSEFONT=2;  
>  continue  
>  if ctl=11 \  
>  then ML'FINDTEXT=2;  
>  continue  
>  if ctl=12 \  
>  then ML'SELINDENT=ML'SELINDENT+720;  
>  continue  
>  if ctl=13 \  
>  then ML'SELINDENT=max(0,ML'SELINDENT-720);  
>  continue  
>  wend  
>  multi_line read ML,TEXT$  
>  print 'pop',  
>  exit

##  Keyboard Commands

The keyboard commands supported by the control are:

**Key** |  **Operations** |  **Comments**  
---|---|---  
**Ctrl+Tab** |  Tab |   
**Ctrl+Clear** |  Select all |   
**Ctrl+Number Pad 5** |  Select all |   
**Ctrl+A** |  Select all |   
**Ctrl+E** |  Center alignment |   
**Ctrl+F** |  Launch Find window |   
**F3** |  Find again (Find Next) |   
**Ctrl+J** |  Justify alignment |   
**Ctrl+R** |  Right alignment |   
**Ctrl+L** |  Left alignment |   
**Ctrl+C** |  Copy |   
**Ctrl+V** |  Paste |   
**Ctrl+X** |  Cut |   
**Ctrl+Z** |  Undo |   
**Ctrl+Y** |  Redo |   
**Ctrl+'+' (Ctrl+Shift+'=')** |  Superscript |   
**Ctrl+'='** |  Subscript |   
**Ctrl+1** |  Line spacing = 1 line |   
**Ctrl+2** |  Line spacing = 2 lines |   
**Ctrl+5** |  Line spacing = 1.5 lines |   
**Ctrl+'**_(apostrophe)_ |  Accent acute |  After pressing the short cut key, press the appropriate letter (e.g. a, e or u). This applies to English, French, German, Italian, and Spanish keyboards only.  
**Ctrl+`**_(grave)_ |  Accent grave |  See Ctrl+' comments.  
**Ctrl+~**_(tilde)_ |  Accent tilde |  See Ctrl+' comments.  
**Ctrl+;**_(semi-colon)_ |  Accent umlaut |  See Ctrl+' comments.  
**Ctrl+Shift+6** |  Accent caret (circumflex) |  See Ctrl+' comments.  
**Ctrl+,**_(comma)_ |  Accent cedilla |  See Ctrl+' comments.  
**Ctrl+Shift+'**_(apostrophe)_ |  Activate smart quotes |   
**Backspace** |  Delete previous character |   
**Ctrl+Backspace** |  Delete previous word |   
**Ctrl+Insert** |  Copy |   
**Shift+Insert** |  Paste |   
**Insert** |  Overwrite |   
**Ctrl+Left Arrow** |  Move cursor one word to the left |   
**Ctrl+Right Arrow** |  Move cursor one word to the right |   
**Ctrl+Up Arrow** |  Move to the line above |   
**Ctrl+Down Arrow** |  Move to the line below |   
**Ctrl+Home** |  Move to the beginning of the document |   
**Ctrl+End** |  Move to the end of the document |   
**Ctrl+Page Up** |  Move one page up |   
**Ctrl+Page Down** |  Move one page down |   
**Ctrl+Delete** |  Delete the next word or selected characters |   
**Shift+Delete** |  Cut the selected characters |   
**Alt+X** |  Converts the Unicode hexadecimal value preceding the insertion point to the corresponding Unicode character |   
**Alt+Shift+X** |  Converts the Unicode character preceding the insertion point to the corresponding Unicode hexadecimal value |   
**Alt+0** _xxx_**  
(Number Pad)** |  Inserts Unicode values if _xxx_ is greater than 255 When _xxx_ is less than 256, ASCI range text is inserted based on the current keyboard. |  Must enter decimal values  
**Alt+Shift+Ctrl+F12** |  Hex to Unicode |  In case Alt+X is already taken for another use  
**Ctrl+Shift+A** |  Set all caps |   
**Ctrl+Shift+L** |  Fiddle bullet style |  Set bulleted text  
**Ctrl+Shift+Up Arrow** |  Increase font size |  Font size changes up by 1 point  
**Ctrl+Shift+Down Arrow** |  Decrease font size |  Font size changes down by 1 point (minimum 4 points)  
**Ctrl+Shift+Insert** |  Popup Font selector for selected text |   
  
## Printing

To print RTF data, the 'TEXT' mnemonic can be used with the special attribute setting of "*RTF".

**_Example:_**

> print (nn)'text'(X,Y,X1,Y1,RtfData$,"*RTF")

See [**TEXT**](../mnemonics/text.htm#block) mnemonic.

## See Also

**[Multi_Line Rich Text Properties](../control_object_properties/multiline_rtf_properties.md)**
