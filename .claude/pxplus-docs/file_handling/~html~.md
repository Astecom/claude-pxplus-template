# Special File Handling

***HTML*** |  **_Print to HTML_**  
---|---  
  
##  Format

**OPEN**  _(chan)_ "***HTML*** "**[** ;_options_**]**

**_Where:_**

_chan_ |  Channel or logical file number (e.g. open (1)"*html*").  
---|---  
_options_ |  The following options are supported either following the ***HTML*** filename or via **OPT=** on the **OPEN** : |  **BACK=**_nnnnnn_ |  Background colour using standard HTML RGB colour representation.  
---|---  
**FONT=**_fontname_ |  Default font use a fixed font such as Courier.  
**FILE=**_path_ |  Output filename.  
**SHOW** |  **_(Windows Only)_** Causes the file to be passed to default browser.  
**TEXT=**_nnnnnn_ |  Text colour using standard HTML RGB colour representation.  
**TITLE=**_name_ |  Document title. Default title is the program name.  
***HTML*** |  Keyword, not case sensitive. Special interface, enclosed in quotation marks within **[OPEN](../directives/open.md)** directive. (Include *****  _asterisks_ in syntax)  
  
##  Description

***HTML*** is a logical print file that can be used with PxPlus. It allows for printed reports using normal fixed fonts to be formatted for use with an HTML viewer such as a browser. The system will prompt for an output filename to store the resulting HTML document.

##  Example

These examples create an HTML file called _Sample.htm_ with the title "Sample". Courier New font is used with a white background and black text. The **SHOW** option causes the default browser to be invoked to display the file:

> open (1,opt="FILE=Sample.htm;SHOW;FONT=Courier New;TITLE=Sample;BACK=FFFFFF;TEXT=000000")"*HTML*"

> open (1)"*HTML*;FILE=Sample.htm;SHOW;FONT=Courier New;TITLE=Sample;BACK=FFFFFF;TEXT=000000"
