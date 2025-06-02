# Web Utilities  
  
***WEB/UTIL** |  **_HTML Coding Utility_**  
---|---  
  
## Description

The Web Server's ***web/util** program may be called to simplify your coding when you build your HTML pages in PxPlus applications.

The ***web/util** program contains miscellaneous routines to put various HTML codes into the **[%print_fn](../PxPlus%20Web%20Server%20Variables/Overview.htm#print_fn)** data channel for you. This is a called program with various entry points and various ENTER argument lists.

The table below contains a list of formats for the various entry points with arguments and descriptions of the codes that are added to **%print_fn**.

**To Add to $print_fn** |  ***web/utilCALL EntryPoints**  
---|---  
1\. Begin HTML |  CALL "*web/util;BEGIN_HTML",_title_ _$_ Adds HTML code starting with the <html><header> tag and going through to the </header><body> tags. Adds _title$_ value as a page title.  
2\. Closing Sequence |  CALL "*web/util;END_HTML" Adds the closing sequences </body></html>. Auto-closes any of the following: Links set by BEGIN_LINK  
Paragraphs set by NEW_PARA  
Forms set by BEGIN_FORM  
3\. Begin Link |  CALL "*web/util;BEGIN_LINK", _url_ _$_ Puts in a link and anchor tag for the given _url_ _$_.  
4\. End Link |  CALL "*web/util;END_LINK" Adds closing the anchor tag.  
5\. Begin Font |  CALL "*web/util;BEGIN_FONT", _name$, pt_size_[,_bold_] Adds the begin_new_font tag for your given font name and point size. Bold is a Boolean value: **0** if omitted; **1** if included.  
6\. End Font |  CALL "*web/util;END_FONT" Adds the closing tags to end the font tag created by BEGIN_FONT.  
7\. Begin Form |  CALL "*web/util;BEGIN_FORM", _form_name_ _$, url$_ Closes a previous paragraph and form (as necessary) before creating a new form. Creates a new form tag with the given form name, links by POST to the given _url_ _$_.  
8\. End Form |  CALL "*web/util;END_FORM" Adds the closing tags for paragraph and form (as necessary).  
9\. Input Field |  CALL "*web/util;INPUT_FIELD", _field_name_ _$, size_ Creates an input field ("TEXT" type) with _field_name_ _$_ and width.  
10\. Input Required |  CALL "*web/util;INPUT_REQD_FIELD", _field_name_ _$, size_ Same as INPUT_FIELD but puts in validation code for field_name$!=null.  
11\. Input Area |  CALL "*web/util;INPUT_AREA", _field_name_ _$, cols, lines_ Creates an input field ("TEXTAREA" multiline type) with the given number of columns and rows.  
12\. Submit Button |  CALL "*web/util;SUBMIT_BUTTON", _text$_ Creates a submit_action button for a form. The _text$_ is the button's description.  
13\. Reset Button |  CALL "*web/util;RESET_BUTTON", _text$_ Create a reset_action button for a form. The _text$_ is the button's description.  
14\. New Paragraph |  CALL "*web/util;NEW_PARA" Creates a new paragraph tag (and closes a pre-existing one as necessary).  
15\. Program List |  CALL "*web/util;LIST" The utility lists itself to the %print_fn channel.  
  
## Format

**_Basic Call:_**

> CALL "*web/util;_entrypoint_ ", _required_arguments_

**_Where:_**

|  _entrypoint_ |  Entry point (line label) where execution in the *web/util subprogram starts for the given routine.  
---|---|---  
|  _required_arguments_ |  String or numeric variable name. For each entry point of the utility, there are different argument lists. Refer to above table.
