# Directives 

**OBTAIN** |  **_Get Hidden Terminal Input_**  
---|---  
  
##  Format

**OBTAIN** (_chan_[,_fileopt_])_varlist_

**_Where_** _:_

_chan_ |  Channel or logical file number of the file from which to get terminal input.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **BSY=**_stmtref_ |  Traps Error #0: (Input timeout).  
---|---  
**ERR=**_stmtref_ |  Error transfer.  
**HLP=**_string$_ |  Help message identifier.  
**IND=**_num_ |  Position cursor to specified column number.  
**LEN=**_num_ |  Limit on input size.  
**SIZ=**_num_ |  Number of characters to read (number of screen columns).  
**TBL=**_stmtref_ |  Data translation table.  
**TIM=**_num_ |  Maximum time-out value in integer seconds.  
|  _stmtref_ |  Program line number or statement label to which to transfer control.  
| |   
  
When screen positions are tight, you can combine the **LEN=** and **SIZ=** options to have PxPlus supply a scrolling input field.  
  
**_Example:_**  
  
To allow a user to enter 60 characters in a field where you only have room for 30 on the screen:

input (0,len=60,siz=30)"Name....:",N$  
  
_varlist_ |  Comma**-** separated list of variables, literals, mnemonics, **IOL=** options, and/or location functions **'@(...)'**. Include **[Format Masks](../appendix/data_format_masks.md)** to filter data being received.  
  
##  Description

Use the **OBTAIN** directive to issue prompts to terminal devices and to process responses (the user's input). The file reference should be to a terminal, but you can use an indexed file. If you include literals or expressions in this directive, PxPlus treats them as prompts for the user.

You can include format masks, as in A$=STR(.01:"0.00"). If you omit the format mask for a numeric in the **OBTAIN** statement, the **'DP'** (Decimal Point Symbol) and **'TH'** (Thousands Separator) system parameters are ignored for European decimal settings.

#### **Note:**  
**OBTAIN** performs in the same way as the **INPUT** directive except that the user's input is not echoed on the screen. This can be useful for such applications as passwords.

##  See Also

[**ACCEPT Read Single Keystroke**](accept.md)  
[**INPUT Get Input from Terminal**](input.md)  
[**'ME' Begin Edit Mode**](../mnemonics/me.md)  
[**'BI' Begin Input Transparency**](../mnemonics/bi.md)  
[**Data Format Masks**](../appendix/data_format_masks.md)

##  Example

obtain 'CS',@(5,5),"Enter your password:",C$  
  
->run  
Enter your password:|

The password, "TEST" in this example, is not echoed, but C$ will return the value.

> ->?C$  
>  TEST
