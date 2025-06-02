# Special File Handling

***PLUSFAX*** |  **_Fax Print Interface_**  
---|---  
  
This functionality is a **+_PxPlus Exclusive._**

##  Format

**OPEN (**_chan_**[,**_fileopt_**])"*PLUSFAX*[;**_option_**][;**_option_**] [...]"**

**_Where:_**

_chan_ |  Channel or logical file number.  
---|---  
_fileopt_ |  File options. Supported options for opening ***PLUSFAX*** include: |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**OPT=**_options_ |  Additional PlusFax output parameters (see [**Output Parameters**](../parameters.md))  
_options_ |  Supported parameters for defining output (see [**Output Parameters**](../parameters.md)).  
***PLUSFAX*** |  Case insensitive keyword. Special device file name, enclosed in quotation marks within **[OPEN](../directives/open.md)** directive. (Include *****  _asterisks_ in syntax)  
  
##  Description

The***PLUSFAX*** interface allows for the generation and sending of faxes directly from the application program. When a ***PLUSFAX*** file is opened and written to, the output produced is automatically converted to a PDF and then emailed to a fax server for subsequent transmission.

#### **Note:**  
An account with an Internet-based service is required to use **"*PLUSFAX*"**. 

***PLUSFAX*_Output Parameters_**

The following options can be used to define the fax output:

**Option** |  **Description**  
---|---  
**FAXNO=**_nnnnnnnnnn_ |  Used to define the destination fax number. The number must contain the desired area code.  
**SUBJECT=**_string_ |  The text in _string_ will be placed in the Subject line on the cover page of the fax.  
**COVER=**_string_ |  The text in _string_ may contain the comment to appear on the cover page or "**NO** " to indicate no cover page is to be generated. If a long message is required, the _string_ may start with a **%** (_percent sign_) to indicate that the cover page message can be found in a global string variable. **_Example:_** **COVER=%NOTE** would indicate that the message is in the global variable **%NOTE$**. A global variable should be used if the message text contains a **;** (_semi-colon_).  
**FILE=**_filename_ |  Allows for specification of the output file pathname. By default, a temporary PDF file is created by the system; however; you can override the pathname of the PDF file.  
**FROMNAME=**_string_ |  Logical name to be used with the email address and override the default _userid_ and Settings file. In some instances, this will be used by the fax service supplier to identify your account.  
**DIRECTORY=**_directory_ |  Option used to override the directory where the interface maintains the settings, control and temporary PDF files. By default, this will be _plusfax_.  
**PAPERSIZE=**_formnumber_ |  Allows for specification of a form via an internal form number. See [**Forms Handling in PDF**](~pdf~.htm#Mark18).  
  
All other parameters will be passed to the PDF output driver and can be used to control the margins etc. See [**PDF Print Interface**](~pdf~.md).

_(The printer Fax utilities were added in PxPlus v6.30.)_

## Configuration

Before using "***PLUSFAX*** ", you will need to create a working directory that will be used to store the temporary PDF files, the control file (_history.dat_) and the Settings file.

**_Settings File_**

The Settings file contains information pertaining to the transmission of the faxes. This file is required by the fax interface. It will define the email account, which will be used to send the faxes, your email server settings, and User IDs.

The values that must be placed in the Settings file are:

**Option** |  **Description**  
---|---  
**FAXTO=**_string_ |  Defines the output send fax address. The value %1 within the string will be replaced by the destination fax number. The target domain (the part following the @) will be used by the for determining the format of the email header.  
**FROMEMAIL=**_string_ |  Defines the **_sending email account_** that is to be used to send the email fax (e.g. john.doe@pvxplus.com).  
**FROMNAME=**_string_ |  Logical name to be used with the email address. In some instances, this will be used by the fax service supplier to identify your account. If set to **-none** -, no name will be provided, only the **From** email address.  
**SMTPSERVER=**_string_ |  This string contains the TCP/IP address/host name for the email server used to forward the fax email. By default, the standard SMTP port of 25 is used; however, a specific port number may be appended to the address field, separated by a **;**(_semi-colon_).  
**LOGON=**_string_ |  If your email server requires you to logon to send email, you may enter the User ID and Password required in the _string_ , separated by a **;** (_semi-colon_) or a **,** (_comma_).  
**Fax Server Account Information** |  **Description**  
**CODE** _=string_ |  Account access code provided by your fax supplier. Not all suppliers have a passcode.  
**USERNAME=**_string_ |  Defines the Internet-based account used to send the fax and will be inserted into the outbound email. Not all suppliers require a user name.  
  
As the fax output will be generated using the PDF drivers built into PxPlus, all PDF output commands and options are supported; however, some may not be applicable to fax output (e.g. bookmarks).

The settings required will vary between fax suppliers. For example, Trustfax.com requires a CODE= and USERNAME=, as in the following Settings file:

> smtpserver=mail.mydomain.com  
>  fromemail=f.smith@mydomain.com  
> fromname=Fred Smith  
> faxto=<%1@trustfax.com>  
>  username=fred_smith  
>  code=1234

## User Interface

If no fax number is provided on the OPEN command, the PLUSFAX interface will prompt the user to provide it, along with a Subject line and option comment for the cover page.

To prompt the user for these fields, the system will run either a user supplied program in "***ext/plusfax** " or, if not present, a system program in "***ext/system/plusfax** ". These programs are required to define values in FAXNO$, SUBJECT$, and COVER$.

## Example

These examples are using "*PLUSFAX*" for output:

**_Example 1_** \- This example sends a listing of itself to a fax recipient (fax demo program):

> input "Fax number:",FAXNO$  
>  input "Attention:",PERSON$  
>  !  
>  %MSG$="Please forward this cover sheet and fax to:"+sep  
>  %MSG$+=sep  
>  %MSG$+=PERSON$+sep  
>  %MSG$+=sep  
>  %MSG$+="This is a sample fax generated using the PVX Plus Technologies *PLUSFAX* interface. It includes both a cover sheet and program listing"  
>  !  
>  OPTION$="FAXNO="+FAXNO$  
>  OPTION$+=";SUBJECT=Attention "+PERSON$  
>  OPTION$+=";COVER=%MSG" ! Message text in variable  
>  !  
>  open (1,opt=OPTION$)"*plusfax*;margin=1i:1i:1i:1i"  
>  print (1)'font'("Arial",1),'DF','+S',  
>  print (1)'rectangle'(-10,-10,@x(mxc(1))+10,@y(mxl(1))+10),  
>  print (1)"The following is a listing of the program that generated this fax"  
>  print (1)dim(mxc(1),"=")  
>  list (1)  
>  print (1)dim(mxc(1),"=")  
>  print (1)"You are able to use all text and graphical print commands"  
>  print (1)"this includes graphic drawing and images."  
>  print (1)'circle'(@x(30),@y(45),@x(15)),  
>  print (1)'picture'(@x(20),@y(40),@x(40),@y(50),"smlogo.jpg",6),  
>  end

**_Example 2_** \- This example shows a typical report using normal print directives:

> begin  
>  %NOTE$="Dear Sirs;"+sep+sep+"The following is a report of the stuff that you asked about formatted in a way that is similar to what you asked for however using a better solution than what you currently have."  
>  open (1,opt="cover=%note;subject=Your Report")"*plusfax*;faxno=8889757587"  
>  print (1)'font'("Arial",1),'DF','+S',  
>  while 1  
>  read data COMPANY$,CUSTNO$,NAME$,ADDR$,OWES,end=*break  
>  if LINESLEFT<1 or COMPANY$<>CURCOMP$ \  
>  then gosub NEWPAGE  
>  print (1)CUSTNO$,@(10),NAME$,@(40),ADDR$,@(70),OWES:"-$###,##0.00"  
>  LINESLEFT--  
>  wend  
>  end  
>  !  
> NEWPAGE:  
>  if PAGENO<>0 \  
>  then print (1)'FF',  
>  PAGENO++  
>  print (1)"Page:",PAGENO:"###0",@(30),"Client list for "+COMPANY$  
>  print (1)  
>  print (1)"Client",@(10),"Name",@(40),"Address",@(70),"Balance"  
>  print (1)"------",@(10),dim(20,"-"),@(40),dim(20,"-"),@(70),"------------"  
>  print (1)  
>  LINESLEFT=50  
>  CURCOMP$=COMPANY$  
>  return  
>  data "ABC","000047","Cyclops Car Dealer","6675 Cherry",3.12  
>  data "ABC","000122","Global Undergarments","823 Maple Lodge Court",99.54  
>  data "ABC","000192","The Hungry Incorporated","5582 2nd Avenue",.55  
>  data "ABC","000295","The Hungry Magazine","8576 Major Mackenzie",71.74  
>  data "ABC","000310","New Dimensions Company","8052 Center Avenue",5.93  
>  data "ABC","000332","Cyclops Computing","7723 Fantasy Island",7.61  
>  data "DEF","000355","Kitty Kay Undergarments","2124 Major Mackenzie",4.55  
>  data "DEF","000385","New Age Importers","1743 Allstate Parkway",73.84  
>  data "DEF","000461","SOTA Golf club","4377 Major Mackenzie",63.66  
>  data "DEF","000555","Mike was here","8450 Buga-Buga Drive",11.43  
>  data "DEF","000598","Yorktown Body Shop","5674 One-way Street",8.53  
>  data "DEF","000874","Elephant Importers","8656 Main",74.63  
>  data "DEF","000899","Silly Walks Computing","3920 North Tacoma",60.31  
>  data "DEF","000978","Crimson Magazine","2303 Steep Hill Drive",86.16  
>  data "DEF","001072","Flagship Trading Limited","2782 Aurora Road",90.15  
>  data "DEF","001081","Snap Dragon Grocers","3682 East West Street",49.51

In the above example, %NOTE$ was used to store the cover page note since the contents of the note contained a **;** (_semi-colon_).
