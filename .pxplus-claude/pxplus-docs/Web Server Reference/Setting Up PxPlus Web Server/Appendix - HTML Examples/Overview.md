# Web Server Reference

**Appendix - HTML Examples**|   
---|---  
  
## Description

The PxPlus programs and Frontpage HTML web page codes in the examples provided below for illustration were created for a PxPlus DireXions technical conference. For more information on creating HTML, refer to your HTML editor's manual (e.g. Frontpage, MS Word, etc.).

## Example 1

**Orders Program 1 - home.htm**

This is a listing of the PxPlus program that redirects the user to the LOGIN page in the DireXions Order Demonstration. See **[Orders Web Page 1 - login.htm](Overview.htm#orderswebpage)**.

> 0010 ! home.html - A misdirection  
>  0020 LET MESS1$="Welcome",MESS2$="Please sign on",USERID$="",USERPASSWD$=""  
>  0030 LET HTML_FILE$="orders/login.htm"  
>  0040 RUN "*web/merge"

#### **Note:   
**A file with a name that ends in .HTML does not mean that the Web Server will have to treat it as such. In the above example, the file named HOME.HTML is, in reality, a PxPlus program which would be RUN.

## Example 2

**Orders Program 2 - webord**

This PxPlus program deals with the user LOGIN process. It jumps to the Profile page in the case of a new user. When a user signs on, a cookie is set so that order pages will identify the user.

> 0010 ! webord \- Web Based Order Status   
>  0020 ! by PVX Plus Technologies  
>  0030 !  
>  0040 LOGON:  
>  0050 LET EXIT$=STP(EXIT$,2),NEWUSER$=STP(NEWUSER$,2),SIGNON$=STP(SIGNON$,2)  
>  0060 LET USERID$=STP(USERID$,2),USERPASSWD$=STP(USERPASSWD$,2)  
>  0070 !  
> 0080 ! The following line happens when they hit the exit button  
> 0090 ! The value of exit$ is > null when they do  
> 0100 ! So, we can set an %exit_code to 301 which is a URL redirection  
> 0110 ! This causes the browser to jump to the new location given.  
> 0120 ! but because its a pxplus app, the redirection will expire  
>  0130 ! right away, so the browser will let them come back here later.  
> 0140 !  
>  0150 IF EXIT$>"" THEN LET %EXIT_CODE=301; LET %NEW_LOCATION$="../"; EXIT  
> 0160 !  
>  0170 IF SIGNON$>"" AND (USERID$="" OR USERPASSWD$="") THEN GOTO NOT_ENOUGH_INFO  
> 0180 !  
>  0190 IF NEWUSER$>"" THEN RUN "orders/profile;new_user"  
>  0200 !  
>  0210 VALIDATE_USERID:  
>  0220 LET USERFIL=HFN; OPEN (USERFIL,ERR=USERFILE_NOT_FOUND)"orders/userfil.dat"  
>  0230 READ (USERFIL,KEY=USERID$,ERR=USER_NOF)*,PASSWD$  
>  0240 IF USERPASSWD$<>PASSWD$ THEN GOTO BAD_PASSWD  
>  0250 !  
> 0260 ! user id and passwd are on file  
>  0270 ! Set cookie for 1 Day, so they don't have to enter it anymore  
>  0280 CALL "*web/cookie;set","order-userid",USERID$,"/orders/","+1D","",0  
>  0290 RUN "orders/ordstat"  
>  0300 !  
>  0310 USERFILE_NOT_FOUND:  
>  0320 LET MESS1$="Internal Error",MESS2$="User ID file not available. Please con  
>  0320:tact the webmaster"; GOTO SEND_BACK  
>  0330 !  
>  0340 NOT_ENOUGH_INFO:  
>  0350 LET MESS1$="Invalid",MESS2$="Please enter both User ID and Password"  
>  0360 GOTO SEND_BACK  
>  0370 !  
>  0380 USER_NOF:  
>  0390 LET MESS1$="Invalid",MESS2$="User ID is not correct."  
>  0400 GOTO SEND_BACK  
> 0410 !  
>  0420 BAD_PASSWD:  
>  0430 LET MESS1$="Invalid",MESS2$="Incorrect password."  
>  0440 GOTO SEND_BACK  
> 0450 !  
>  0460 SEND_BACK:  
>  0470 IF USERFIL THEN CLOSE (USERFIL)  
>  0480 LET HTML_FILE$="orders/login.htm"  
>  0490 RUN "*web/merge"

## Example 3

**Orders Program 3 - ordstat**

This is a listing of the PxPlus program that sets up a simple Order Status information page in the DireXions application, based on the User ID retrieved from the cookie. It also illustrates coding to jump from page to page.

> 0010 ! ordstat \- Order Status Page   
>  0020 !  
>  0030 LET EXIT$=STP(EXIT$,2),GETPROFILE$=STP(GETPROFILE$,2)  
>  0040 IF EXIT$>"" THEN RUN "orders/home.htm"  
>  0050 IF GETPROFILE$>"" THEN RUN "orders/profile;current_user"  
>  0060 !  
>  0070 GOSUB CHECK_COOKIE  
>  0080 IF USERID$="" THEN GOTO USER_NOT_FOUND  
>  0090 LET PROF=HFN; OPEN (PROF,IOL=*)"orders/profile.dat"  
>  0100 READ (PROF,KEY=USERID$,ERR=USER_NOT_FOUND)  
>  0110 !  
> 0120 ! got shipto info, we would look up the orders here  
>  0130 LET HTML_FILE$="orders/ordstat.htm"  
>  0140 RUN "*web/merge"  
>  0150 !  
>  0160 USER_NOT_FOUND:  
>  0170 RUN "orders/home.htm"  
> 0180 !  
>  0190 CHECK_COOKIE:  
>  0200 FOR X=1 TO %COOKIE.RCV  
>  0210 CALL "*web/cookie;get",X,VAR$,VALUE$  
>  0220 IF VAR$="order-userid" THEN LET USERID$=VALUE$  
>  0230 NEXT X  
>  0240 RETURN

## Example 4

**Orders Program 4 - profile**

This application submits the Profile page and provides an information Lookup in cases where the user is jumping to the page from somewhere else. It is also an example of how to look for a cookie from the user's browser and display the user information.

> 0010 ! profile \- Web Based Profile Entry   
>  0020 !  
> 0030 PROFILE_SUBMIT:   
>  0040 LET OK$=STP(OK$,2),CANCEL$=STP(CANCEL$,2)  
>  0050 IF CANCEL$>"" THEN GOTO USER_NOT_FOUND  
>  0060 LET PROF=HFN; OPEN (PROF,IOL=*)"orders/profile.dat"  
>  0070 LET USERFIL=HFN; OPEN (USERFIL)"orders/userfil.dat"  
>  0080 IF PASSWD1$<>PASSWD2$ THEN LET MESS1$="Passwords do NOT match.",HTML_FILE$  
>  0080:="orders/profile.htm"; CLOSE (PROF); CLOSE (USERFIL); RUN "*web/merge"  
>  0090 REMOVE (PROF,KEY=USERID$,ERR=*NEXT)  
>  0100 REMOVE (USERFIL,KEY=USERID$,ERR=*NEXT)  
>  0110 WRITE (PROF)  
>  0120 WRITE (USERFIL,KEY=USERID$)USERID$,PASSWD1$  
>  0130 CLOSE (PROF); CLOSE (USERFIL)  
>  0140 RUN "orders/home.htm"  
>  0150 !  
> 0160 NEW_USER:  
>  0170 LET USERID$="",HTML_FILE$="orders/profile.htm"; RUN "*web/merge"  
>  0180 !  
> 0190 CURRENT_USER:   
>  0200 GOSUB CHECK_COOKIE  
>  0210 IF USERID$="" THEN GOTO USER_NOT_FOUND  
>  0220 LET PROF=HFN; OPEN (PROF,IOL=*)"orders/profile.dat"  
>  0230 LET USERFIL=HFN; OPEN (USERFIL)"orders/userfil.dat"  
>  0240 READ (PROF,KEY=USERID$,ERR=USER_NOT_FOUND)  
>  0250 READ (USERFIL,KEY=USERID$)*,PASSWD$  
>  0260 LET PASSWD1$=PASSWD$,PASSWD2$=PASSWD$  
>  0270 LET HTML_FILE$="orders/profile.htm"  
>  0280 RUN "*web/merge"  
>  0290 !  
> 0300 USER_NOT_FOUND:  
>  0310 RUN "orders/home.htm"  
> 0320 !  
>  0330 CHECK_COOKIE:  
>  0340 FOR X=1 TO %COOKIE.RCV  
>  0350 CALL "*web/cookie;get",X,VAR$,VALUE$  
>  0360 IF VAR$="order-userid" THEN LET USERID$=VALUE$  
>  0370 NEXT X  
>  0380 RETURN

## Example 5

**Orders Web Page 1 - login.htm**

This is a listing of the HTML for the DireXions **login.htm** web page application.

> <html>  
>   
>  <head>  
>  <title>PxPlus - Order System - Login</title>  
>  </head>  
>   
>  <body background="../images/whttxtr1.jpg">  
>  <div align="left">  
>   
>  <table border="0" cellpadding="0" width="737" cellspacing="0">  
>  <tr>  
>  <td><img src="../images/pvxbird2.jpg" alt="pvxbird2.jpg (13155 bytes) "WIDTH="737" HEIGHT="90"></td>   
>  </tr>   
>  <tr>   
>  <td height="50" bgcolor="#000080"><p align="center"><strong><big><big><big><font color="#80FFFF" face="Tahoma">On-Line Order System</font></big></big></big><stro ng></td>   
>  </tr>   
>  <tr>   
>  <td height="25"><p align="center"><br>   
>  <font color="#FF0000" face="Arial"><big><strong><big>~~mess1$~~ - </   
>  big></strong>~~mess2$~~</big><br></font></td>   
>  </tr>   
>  <tr>   
>  <td><form method="POST" action="/orders/webord;logon">   
>  <div align="center"><center><table border="0" cellpadding="3" width="50%" cellspacing="1">   
>  <tr>   
>  <td width="50%" valign="middle" align="right" nowrap><font face   
>  ="Arial" size="5"><strong>UserID:</strong></font></td>   
>  <td width="50%" valign="middle" align="left"><input type="text" name="userid" size="20" value="~~userid$~~"></td>   
>  </tr>   
>  <tr>   
>  <td width="50%" valign="middle" align="right" nowrap><font face= "Arial" size="5"><strong>Password:</strong></font></td>   
>  <td width="50%" valign="middle" align="left"><input type="password" name="userpasswd" size="20" value="~~userpasswd$~~"></td>   
>  </tr>   
>  <tr>   
>  <td width="50%" valign="middle" align="right" nowrap>&nbsp; </td>   
>  <td width="50%" valign="middle" align="left">&nbsp; </td>   
>  </tr>   
>  <tr>   
>  <td width="100%" colspan="2" valign="middle" align="center"><st rong><font face="Arial" size="3"><input type="submit" value="   
>  Sign On " name="signon"quot;></font></ strong></td>   
>  </tr>   
>  <tr>   
>   
>  <td width="50%" valign="middle" align="right"><strong><font face="Arial" size="3"><input type="submit" value=" New User   
>  " name="newuser"quot;></font></strong></td>   
>  <td width="50%" valign="middle" align="left"><strong><font face="Arial" size="3"><input type="submit" value="   
>  Exit " name="Exit"quot;></font></strong></td>   
>  </tr>   
>  </table>   
>  </center></div>   
>  </form>   
>  </td>   
>  </tr>   
>  <tr>   
>  <td height="25"></td>   
>  </tr>   
>  <tr>   
>  <td height="50" bgcolor="#000080"><p align="center"><font color="#80F FFF" face="Tahoma"><strong><big><big><big>Please Sign-On</big></big></ big></strong></font></td>  
>  </tr>   
>  </table>   
>  </div>   
>  <p>&nbsp;</p>   
>  <p>&nbsp;</p>   
>  <p>&nbsp;</p>   
>  <p>&nbsp;</p>   
>  </body>   
>  </html>

## Example 6

**Orders Web Page 2 - profile.htm**

The **profile.htm** web page application illustrates a variety of HTML codes.

> <html>   
>   
>  <head>  
>  <title>PxPlus - Order System - Personal Profile</title>  
>  </head>  
>   
>  <body background="../images/whttxtr1.jpg">  
>  <div align="left">  
>   
>  <table border="0" cellpadding="0" width="737" cellspacing="0">  
>  <tr>  
>  <td><img src="../images/pvxbird2.jpg" alt="pvxbird2.jpg (13155 bytes)" WI DTH="737" HEIGHT="90"></td>  
>  </tr>  
>  <tr>  
>  <td height="50" bgcolor="#000080"><p align="center"><font color="#80FFFF" face="Tahoma"><strong><big><big><big>Personal Profile</big></big></big></ strong></font></td>  
>  </tr>  
>  <tr>  
>  <td height="25"><p align="right"><font face="Tahoma"><small>&nbsp;</small>  
>  <img src="../images/blueball.gif" alt="blueball.gif (262 bytes)" WIDTH="1   
>  5" HEIGHT="15">&nbsp; <small>Denotes a Mandatory Field</small></font></td>   
>  </tr>   
>  <tr>   
>  <td><!--webbot BOT="GeneratedScript" PREVIEW=" " startspan --><script Lang uage="JavaScript"><!--function FrontPage_Form1_Validator(theForm)   
>  {   
>   
>  if (theForm.UserID.value.length < 4)   
>  {   
>  alert("Please enter at least 4 characters in the \"User ID\" field.");   
> theForm.UserID.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.UserID.value.length > 10)   
>  {   
>  alert("Please enter at most 10 characters in the \"User ID\" field.");   
> theForm.UserID.focus();   
>  return (false);   
>  }   
>   
> var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz   
>  89-";   
> var checkStr = theForm.UserID.value;   
> var allValid = true;   
>  for (i = 0; i < checkStr.length; i++)   
>  {   
> ch = checkStr.charAt(i);   
>  for (j = 0; j < checkOK.length; j++)   
>  if (ch == checkOK.charAt(j))   
>  break;   
>  if (j == checkOK.length)   
>  {   
> allValid = false;   
>  break;   
>  }   
>  }   
>  if (!allValid)   
>  {   
>  alert("Please enter only letter and digit characters in the \"User ID\" field.");   
> theForm.UserID.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.passwd1.value.length < 4)   
>  {   
>  alert("Please enter at least 4 characters in the \"Password\" field.");   
>  theForm.passwd1.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.passwd1.value.length > 10)   
>  {   
>  alert("Please enter at most 10 characters in the \"Password\" field.");   
>  theForm.passwd1.focus();   
>  return (false);   
>  }   
>   
> var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz   
>  89-";   
> var checkStr = theForm.passwd1.value;   
> var allValid = true;   
>  for (i = 0; i < checkStr.length; i++)   
>  {   
> ch = checkStr.charAt(i);   
>  for (j = 0; j < checkOK.length; j++)   
>  if (ch == checkOK.charAt(j))   
>  break;   
>  if (j == checkOK.length)   
>  {   
> allValid = false;   
>  break;   
>  }   
>  }   
>  if (!allValid)   
>  {   
>  alert("Please enter only letter and digit characters in the \"Password\" field.");   
>  theForm.passwd1.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.passwd2.value.length < 4)   
>   
>   
>  {   
>  alert("Please enter at least 4 characters in the \"Confirmation Password\" field.");   
>  theForm.passwd2.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.passwd2.value.length > 10)   
>  {   
>  alert("Please enter at most 10 characters in the \"Confirmation Password\" field.");   
>  theForm.passwd2.focus();   
>  return (false);   
>  }   
>   
> var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz   
>  89-";   
> var checkStr = theForm.passwd2.value;   
> var allValid = true;   
>  for (i = 0; i < checkStr.length; i++)   
>  {   
> ch = checkStr.charAt(i);   
>  for (j = 0; j < checkOK.length; j++)   
>  if (ch == checkOK.charAt(j))   
>  break;   
>  if (j == checkOK.length)   
>  {   
> allValid = false;   
>  break;   
>  }   
>  }   
>  if (!allValid)   
>  {   
>  alert("Please enter only letter and digit characters in the \"Confirmation   
>  Password\" field."); theForm.passwd2.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.FirstName.value == "")   
>  {   
>  alert("Please enter a value for the \"First Name\" field.");   
> theForm.FirstName.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.FirstName.value.length < 1)   
>  {   
>  alert("Please enter at least 1 characters in the \"First Name\" field.");   
> theForm.FirstName.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.LastName.value == "")   
>  {   
>  alert("Please enter a value for the \"Last Name\" field.");   
> theForm.LastName.focus();   
>   
>   
>  return (false);   
>  }   
>   
>  if (theForm.LastName.value.length < 1)   
>  {   
>  alert("Please enter at least 1 characters in the \"Last Name\" field.");   
> theForm.LastName.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.CompName.value == "")   
>  {   
>  alert("Please enter a value for the \"Company Name\" field.");   
> theForm.CompName.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.CompName.value.length < 1)   
>  {   
>  alert("Please enter at least 1 characters in the \"Company Name\" field.");   
> theForm.CompName.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.Addr1.value == "")   
>  {   
>  alert("Please enter a value for the \"Address\" field.");   
>  theForm.Addr1.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.Addr1.value.length < 1)   
>  {   
>  alert("Please enter at least 1 characters in the \"Address\" field.");   
>  theForm.Addr1.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.City.value == "")   
>  {   
>  alert("Please enter a value for the \"City\" field.");   
> theForm.City.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.City.value.length < 1)   
>  {   
>  alert("Please enter at least 1 characters in the \"City\" field.");   
> theForm.City.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.Province.value.length < 1)   
>  {   
>  alert("Please enter at least 1 characters in the \"Province\" field.");   
> theForm.Province.focus();   
>  return (false);   
>  }   
>   
>   
>  if (theForm.Country.value == "")   
>  {   
>  alert("Please enter a value for the \"Country\" field.");   
> theForm.Country.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.Country.value.length < 1)   
>  {   
>  alert("Please enter at least 1 characters in the \"Country\" field.");   
> theForm.Country.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.Telephone.value == "")   
>  {   
>  alert("Please enter a value for the \"Telephone Number\" field.");   
> theForm.Telephone.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.Telephone.value.length < 7)   
>  {   
>  alert("Please enter at least 7 characters in the \"Telephone Number\"field   
>  ."); theForm.Telephone.focus();   
>  return (false);   
>  }   
>   
> var checkOK = "0123456789-+-() \t\r\n\f"; var checkStr = theForm.Telephone.value; var allValid = true;   
>  for (i = 0; i < checkStr.length; i++)   
>  {   
> ch = checkStr.charAt(i);   
>  for (j = 0; j < checkOK.length; j++)   
>  if (ch == checkOK.charAt(j))   
>  break;   
>  if (j == checkOK.length)   
>  {   
> allValid = false;   
>  break;   
>  }   
>  }   
>  if (!allValid)   
>  {   
>  alert("Please enter only digit, whitespace and \"+-()\" characters in the   
>  \"Telephone Number\" field.");   
> theForm.Telephone.focus();   
>  return (false);   
>  }   
>   
> var checkOK = "0123456789-+-() \t\r\n\f";   
> var checkStr = theForm.Fax.value;   
> var allValid = true;   
>  for (i = 0; i < checkStr.length; i++)   
>  {   
>   
>   
> ch = checkStr.charAt(i);   
>  for (j = 0; j < checkOK.length; j++)   
>  if (ch == checkOK.charAt(j))   
>  break;   
>  if (j == checkOK.length)   
>  {   
> allValid = false;   
>  break;   
>  }   
>  }   
>  if (!allValid)   
>  {   
>  alert("Please enter only digit, whitespace and \"+-()\" characters in the   
>  \"Fax Number\" field.");   
> theForm.Fax.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.Email.value == "")   
>  {   
>  alert("Please enter a value for the \"E-Mail Address\" field.");   
> theForm.Email.focus();   
>  return (false);   
>  }   
>   
>  if (theForm.Email.value.length < 3)   
>  {   
>  alert("Please enter at least 3 characters in the \"E-Mail Address\" field.");   
> theForm.Email.focus();   
>  return (false);   
>  }   
>   
> var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz   
>  89-.@-_,";   
> var checkStr = theForm.Email.value;   
> var allValid = true;   
>  for (i = 0; i < checkStr.length; i++)   
>  {   
> ch = checkStr.charAt(i);   
>  for (j = 0; j < checkOK.length; j++)   
>  if (ch == checkOK.charAt(j))   
>  break;   
>  if (j == checkOK.length)   
>  {   
> allValid = false;   
>  break;   
>  }   
>  }   
>  if (!allValid)   
>  {   
>  alert("Please enter only letter, digit and \".@-_,\" characters in the \"E- Mail Address\" field.");   
> theForm.Email.focus();   
>  return (false);   
>  }   
>  return (true);   
>   
>   
>  }   
>  //--></script><!--webbot BOT="GeneratedScript" endspan --><form method="POST" action="/orders/profile;profile_submit" onsubmit="return FrontPage_Form1_Vali dator(this)" name="FrontPage_Form1">   
>  <div align="center"><center><table border="0" cellpadding="   
>  3" width="100%" cellspacing="1">   
>  <tr>   
>  <td width="100%" valign="middle" align="center" nowrap colspan="   
>  4"><font color="#FF0000" face="Arial"><strong><big><big>~~mess1$~~   
>  </big></big> <big>\- ~~mess2$~~</big></strong></font></td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap></td>   
>  <td width="85%" valign="middle" align="left" colspan="3" nowrap>   
>  </td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap><strong><font face="Arial">User ID:</font></strong></td>   
>  <td width="85%" valign="middle" align="left" colspan="3" nowrap><!-   
>  -webbot bot="Validation" S-Display-Name="User ID" S-Data-Type= "String" B-Allow-Letters="TRUE" B-Allow-Digits="TRUE" I-Minimum- Length="4" I-Maximum-Length="10" --><input type="text" name= "UserID" size="20" tabindex="1" maxlength="10" value="~~userid$~~">   
>  <font face="Tahoma"><imgsrc="../images/blueball.gif" alt="blue ball.gif (262 bytes)" WIDTH="15" HEIGHT="15"></font></td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap><strong><font face="Arial">Password:</font></strong></td>   
>  <td width="85%" valign="middle" align="left" colspan="3" nowrap><!-   
>  -webbot bot="Validation" S-Display-Name="Password" S-Data-Type= "String" B-Allow-Letters="TRUE" B-Allow-Digits="TRUE" I-Minimum- Length="4" I-Maximum-Length="10" --><input type="password" name= "passwd1" size="20" tabindex="1" value="~~passwd1$~~" maxlength= "10"><font face="Tahoma"> <img src="../images/blueball.gif" alt= "blueball.gif (262 bytes)" WIDTH="15" HEIGHT="15"></font></td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap><strong><font face="Arial">ConfirmPassword:</font></strong></td>   
>  <td width="85%" valign="middle" align="left" colspan="3" nowrap><!-   
>  -webbot bot="Validation" S-Display-Name="Confirmation Password" S- Data-Type="String" B-Allow-Letters="TRUE" B-Allow-Digits="TRUE" I- Minimum-Length="4" I-Maximum-Length="10" --><input type="password" name="passwd2" size="20" tabindex="1" value="~~passwd2$~~" maxlength="10"><font face="Tahoma"> <img src="../images/blueball.gif" alt="blueball.gif (262 bytes)" WIDTH="15" HEIGHT="15">   
>  </font></td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap></td>   
>  <td width="85%" valign="middle" align="left" colspan="3" nowrap>   
>  </td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap><strong><font face="Arial">FirstName:</font></strong></td>   
>   
>  <td width="85%" valign="middle" align="left" colspan="3" nowrap><!-   
>  -webbot bot="Validation" S-Display-Name="First Name" B-Value- Required="TRUE" I-Minimum-Length="1" --><input type="text" name= "FirstName" size="20" tabindex="2" value="~~firstname$~~"><font face="Tahoma"> <img src="../images/blueball.gif" alt="blueball.gif (262 bytes)" WIDTH="15" HEIGHT="15"></font></td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap><strong><font face="Arial">Last Name:</font></strong></td   
>  <td width="85%" valign="middle" align="left" colspan="3" nowrap><!-   
>  -webbot bot="Validation" S-Display-Name="Last Name" B-Value- Required="TRUE" I-Minimum-Length="1" --><input type="text" name= "LastName" size="20" tabindex="3" value="~~lastname$~~"><font face="Tahoma"> <img src="../images/blueball.gif" alt="blueball.gif (262 bytes)" WIDTH="15" HEIGHT="15"></font></td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap height="20">   
>  </td>   
>  <td width="85%" valign="middle" align="left" colspan="3" height= "20" nowrap></td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap><strong><font face="Arial">CompanyName:</font></strong></td>   
>  <td width="85%" valign="middle" align="left" colspan="3" nowrap><!-   
>  -webbot bot="Validation" S-Display-Name="Company Name" B-Value- Required="TRUE" I-Minimum-Length="1" --><input type="text" name= "CompName" size="50" tabindex="4" value="~~compname$~~"><font face= "Tahoma"> <img src="../images/blueball.gif" alt="blueball.gif (262 bytes)" WIDTH="15" HEIGHT="15"></font></td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap><strong><font face="Arial">Address:</font></strong></td>   
>  <td width="85%" valign="middle" align="left" colspan="3" nowrap><!-   
>  -webbot bot="Validation" S-Display-Name="Address" B-Value-Required= "TRUE" I-Minimum-Length="1" --><input type="text" name="Addr1" size="50" tabindex="5" value="~~addr1$~~"><font face="Tahoma">   
>  <img src="../images/blueball.gif" alt="blueball.gif (262 bytes)" WIDTH="15" HEIGHT="15"></font></td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap></td>   
>  <td width="85%" valign="middle" align="left" colspan="3" nowrap>   
>  <input type="text" name="Addr2" size="50" tabindex="6" value="~~add r2$~~"></td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap></td>   
>  <td width="85%" valign="middle" align="left" colspan="3" nowrap>   
>  <input type="text" name="Addr3" size="50" tabindex="7" value= "~~addr3$~~"></td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap><strong><font face="Arial">City:</font></strong></td>   
>   
>  <td width="34%" valign="middle" align="left" nowrap><!--webbot bot= "Validation" S-Display-Name="City" B-Value-Required="TRUE" I- Minimum-Length="1" --><input type="text" name="City" size="20" tabindex="8" value="~~city$~~"><font face="Tahoma"> <img src="../ images/blueball.gif" alt="blueball.gif (262 bytes)" WIDTH="15" HEIGHT="15"></font></td>   
>  <td width="17%" valign="middle" align="right" nowrap><strong><font face="Arial">State/Prov:</font></strong></td>   
>  <td width="34%" valign="middle" align="left" nowrap><!--webbot bot="Validation" I-Minimum-Length="1" --><input type="text" name= "Province" size="10" tabindex="9" value="~~province$~~"></td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap><strong><font face="Arial">Country:</font></strong></td>   
>  <td width="34%" valign="middle" align="left" nowrap><!--webbot bot= "Validation" S-Display-Name="Country" B-Value-Required="TRUE" I- Minimum-Length="1" --><input type="text" name="Country" size="20" tabindex="10" value="~~country$~~"><font face="Tahoma"> <img src= "../images/blueball.gif" alt="blueball.gif (262 bytes)" WIDTH="15" HEIGHT="15"></font></td>   
>  <td width="17%" valign="middle" align="right" nowrap><strong><font face="Arial">Zip/Postal:</font></strong></td>   
>  <td width="34%" valign="middle" align="left" nowrap><input type= "text" name="PostalCode" size="10" tabindex="11" value="~~postal code$~~"></td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap></td>   
>  <td width="85%" valign="middle" align="left" colspan="3" nowrap>   
>  </td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap><strong><font face="Arial">Tel:</font></strong></td>   
>  <td width="85%" valign="middle" align="left" colspan="3" nowrap><!-   
>  -webbot bot="Validation" S-Display-Name="Telephone Number" S-Data- Type="String" B-Allow-Digits="TRUE" B-Allow-WhiteSpace="TRUE"   
>  S-Allow-Other-Chars="+-()" B-Value-Required="TRUE" I-Minimum- Length="7" --><input type="text" name="Telephone" size="30" tabindex="12" value="~~telephone$~~"><font face="Tahoma"> <img src= "../images/blueball.gif" alt="blueball.gif (262 bytes)" WIDTH="15" HEIGHT="15"></font></td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap><strong><font face="Arial">Fax:</font></strong></td>   
>  <td width="85%" valign="middle" align="left" colspan="3" nowrap><!-   
>  -webbot bot="Validation" S-Display-Name="Fax Number" S-Data-Type= "String" B-Allow-Digits="TRUE" B-Allow-WhiteSpace="TRUE" S-Allow- Other-Chars="+-()" --><input type="text" name="Fax" size="30" tab index="13" value="~~fax$~~"></td>   
>  </tr>   
>  <tr>   
>  <td width="15%" valign="middle" align="right" nowrap><strong><font face="Arial">E-Mail:</font></strong></td>   
>  <td width="85%" valign="middle" align="left" colspan="3" nowrap><!-   
>  -webbot bot="Validation" S-Display-Name="E-Mail Address" S-Data-   
>   
>  Type="String" B-Allow-Letters="TRUE" B-Allow-Digits="TRUE" S-Allow- Other-Chars=".@-_," B-Value-Required="TRUE" I-Minimum-Length="3"   
>  \--><input type="text" name="Email" size="40" tabindex="14" value= "~~email$~~"><font face="Tahoma"> <img src="../images/blueball.gif" alt="blueball.gif (262 bytes)" WIDTH="15" HEIGHT="15"></font></td>   
>  </tr>   
>  <tr>   
>  <td width="100%" colspan="4" valign="middle" align="center" nowrap>   
>  </td>   
>  </tr>   
>  <tr>   
>  <td width="50%" valign="middle" align="right"><strong><font face= "Arial" size="3"><input type="submit" value=" OK " name="ok"quot; tabindex="15"></font></strong></td>   
>  <td width="50%" valign="middle" align="left" colspan="3"><strong>   
>  <font face="Arial" size="3"><input type="reset" value=" Reset   
>  " name="Reset"quot; tabindex="16"></font></strong></td>   
>  </tr>   
>  </table>   
>  </center></div>   
>  </form>   
>  </td>   
>  </tr>   
>  <tr>   
>  <td height="25"></td>   
>  </tr>   
>  <tr>   
>  <td height="50" bgcolor="#000080"><p align="center"><small><font color= "#80FFFF" face="Tahoma">This information will be kept confidential.   
>  </font></small></td>  
>  </tr>  
>  </table>  
>  </div>  
>  </body>  
>  </html>

## Example 7

**Orders Web Page 3 - ordstat.htm**

This is a listing of the HTML for the **ordstat.htm** Web page.

> <html>   
>   
>  <head>  
>  <title>Order Status Page</title>  
>  </head>  
>   
>   
>  <body background="../images/whttxtr1.jpg">  
>  <div align="left">  
>   
>  <table border="0" cellpadding="0" width="737" cellspacing="0">  
>  <tr>  
>  <td><img src="../images/pvxbird2.jpg" alt="pvxbird2.jpg (13155 bytes)" WIDTH="737" HEIGHT="90"></td>   
>  </tr>   
>  <tr>   
>  <td height="50" bgcolor="#000080"><p align="center"><strong><big><big>   
>  <big><font color="#80FFFF" face="Tahoma">On-Line Order System</font>   
>  </big></big></big></strong></td>   
>  </tr>   
>  </table>   
>  </div>   
>   
>  <form method="POST" action="ordstat">   
>  <p><input type="submit" value=" Exit " name="Exit"><input type= "submit" value="Change Profile" name="getprofile"></p>   
>  </form>   
>   
>  <p><font face="Arial"><font color="#0000FF"><strong><big>Welcome:</big></   
>  strong></font>egt;</p>   
>   
>  <p><font face="Arial"><strong><big>Your Current ShipTo address is:</big></   
>  strong><br>  
>  &nbsp; &nbsp; &nbsp; ~~compname$~~<br>  
>  &nbsp; &nbsp; &nbsp; ~~addr1$~~<br>  
>  &nbsp; &nbsp; &nbsp; ~~addr2$~~<br>  
>  &nbsp; &nbsp; &nbsp; ~~addr3$~~<br>  
>  &nbsp; &nbsp; &nbsp; ~~city$~~, ~~province$~~, ~~country$~~&nbsp;   
>  ~~postalcode$~~</font><p>  
>   
>  <p><font face="Tahoma">Number of Orders on File:t;</p>   
>  <div align="left">   
>   
>  <table border="1" cellpadding="3" width="737">   
>  <tr>   
>  <td width="16%" align="center" bgcolor="#C0C0C0"><strong><font face= "Tahoma" color="#000000">Order Number</font></strong></td>   
>  <td width="16%" align="center" bgcolor="#C0C0C0"><strong><font face=   
>  "Tahoma" color="#000000">Product #</font></strong></td>   
>  <td width="17%" align="center" bgcolor="#C0C0C0"><strong><font face= "Tahoma" color="#000000">Qty</font></strong></td>   
>  <td width="17%" align="center" bgcolor="#C0C0C0"><strong><font face= "Tahoma" color="#000000">Cost</font></strong></td>   
>  <td width="17%" align="center" bgcolor="#C0C0C0"><strong><font face= "Tahoma" color="#000000">Status</font></strong></td>   
>  </tr>   
>  <tr>   
>  <td width="16%" align="center">&nbsp;</td>   
>  <td width="16%" align="center">&nbsp;</td>   
>  <td width="17%" align="center">&nbsp;</td>   
>  <td width="17%" align="center">&nbsp;</td>   
>  <td width="17%" align="center">&nbsp;</td>   
>  </tr>   
>  </table>   
>  </div>   
>  </body>   
>  </html>
