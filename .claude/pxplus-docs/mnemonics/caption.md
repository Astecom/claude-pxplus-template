# Mnemonics

**'CAPTION'** |  **_Replace Caption for Window_**  
---|---  
  
**GUI Display**

##  Format

**'CAPTION'(**_text_**)**  
  
**_Where:_**

_text_ |  Replacement caption. String expression.  
---|---  
  
##  Description

Use **'CAPTION'(**_text_**)** to change the caption for the current window. If the current window does not have a caption and is located at position 0.0, PxPlus replaces the caption on the main window (**'WINDOW'** or **'DIALOGUE'**).

To find out the caption for the current window, you can use a **MULTI_LINE READ** directive with CTL=0 (e.g. MULTI_LINE READ 0,A$).

If you set the caption to use a TAB character ($09$) followed by _text_ , PxPlus will append that text surrounded in _quotes_ (**" "**) to the end of all subsequent captions. This allows you to add information (i.e. user name, company code/name, date, etc.) to all captions within an application.

## See Also

**[MULTI_LINE READ](../directives/multi_line.htm#Mark14)**

##  Example

multi_line read 0,a$  
print a$  
print 'caption'("My Window")  
multi_line read 0,a$  
print a$
