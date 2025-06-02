# Directives   
  
**INPUT** |  **_Get Input from Terminal_**  
---|---  
  
##  Format

**INPUT**[**EDIT**] ([_chan_][,_fileopt_])_varlist_  
  
** _Where:_**

_chan_ |  Channel or logical file number of the file from which to get terminal input.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **BSY=**_stmtref_ __ |  Traps Error #0: Input timeout  
---|---  
**ERR=**_stmtref_ __ |  Error transfer  
**HLP=**_string$_ |  Help message identifier  
**IND=**_num_ __ |  Position cursor to specified column number  
**LEN=**_num_ __ |  Limit on input size  
**SIZ=**_num_ __ |  Number of characters to read (number of screen columns)  
**TBL=**_stmtref_ |  Data translation table  
**TIM=**_num_ __ |  Maximum time-out value in integer seconds  
_stmtref_ |  Program line number or statement label to which to transfer control  
|  When screen positions are tight, you can combine the **LEN=** and **SIZ=** options to have the system supply a scrolling input field.  
  
**_Example:_**  
  
To allow a user to enter 60 characters in a field where you only have room for 30 on the screen:  
  
input (0,len=60,siz=30)"Name....:",N$  
_varlist_ |  Comma**-** separated list of variables, literals, mnemonics, **IOL=** options, and/or location functions **'@(...)'**. Include **[Format Masks](../appendix/data_format_masks.md)** to filter data being received.  
  
##  Description

Use the **INPUT** directive to issue prompts and to receive input from a terminal device. You would normally use the logical file number to refer to a terminal. Input from the user is stored in a variable specified. PxPlus treats any literals or expressions included in the statement as prompts. When a numeric variable is specified, numeric data must be received. Non-numeric input in response to a numeric variable (other than commas and decimals) will cause an Error #26: Variable type invalid.

If you use the **EDIT** clause, the current values for the variables are loaded into the input buffer so that the user can edit them.

Use a format mask with the **INPUT** directive to control the input. To do this, append a **:** (_colon_) and the mask to the given variable in _varlist_. If you omit a format mask for a numeric in an **INPUT** statement, the **'DP'** (Decimal Point Symbol) and **'TH'** (Thousands Separator) system parameters are ignored for European decimal settings.

If an **INPUT EDIT** statement has both a format mask and a validation list, make sure that the validation list contains only entries that are possible. For example, if the format mask indicates that the input value must be a single character, do not use a null ("") value in the validation list. Instead, valid input for "no value" could be a blank/space in this instance:

> 0030 input edit (0,err=0030)@(10,10),VAR$:"A":("Y"=0040,"N"=0050,""=0060)

A validation list may contain literals, simple variables, or sub-stringed variables.

Use the **IND=** option to set the position of the cursor in the **INPUT** field. Use **IND(**_chan_**)** to obtain the position where the cursor was left after the **INPUT**.

_(The ability to use a sub-stringed variable was added in PxPlus v6.30.)_

##  See Also

[**ACCEPT Read Single Keystroke**](accept.md)  
[**OBTAIN Get Hidden Terminal Input**](obtain.md)  
[**'ME' Begin Edit Mode**](../mnemonics/me.md)  
[**'BI' Begin Input Transparency**](../mnemonics/bi.md)  
[**Data Format Masks**](../appendix/data_format_masks.md)

##  Example

input 'CS',@(5,5),"Enter customer number:",C  
input edit "Enter value:",INV_AMT:"$##,##0.00"

Use **IND=**_x_ as a parameter for the **INPUT** statement to set the starting point in an input field.

**_Example:_**

To start the input at the tenth character of A$:

> A$="Now is the time"  
>  input edit (0,ind=10) A$

Use **IND(0)** to find out the character position where the user terminated input. For example, if the user enters "Now is the time" and presses **Home** and **Tab** , the cursor moves to the 10th position, just after the "e" in "the". Then, if the user presses **Enter** or any other function key to terminate the input, the value returned in **IND(0)** is 10.
