# Basic Input and Output

**Output Statements** |  **__**  
---|---  
  
The **[PRINT](../../../directives/print.md)** (or **?**) directive is used to format and output printable data. If the data is intended for a printer or file, the **PRINT** statement must include a valid channel number; otherwise, the output is displayed immediately at the console. This page focuses primarily on output operations as they apply to the console.

#### **Note:**  
For information on the use of the**PRINT** directive to output data to printers or files, see **[File Handling](../../File%20Handling/Introduction.md)** and **[Printing](../../Printing/Introduction.md)**.

**PRINT** supports the ability to position output and allows insertion of special control codes through the use of **[Mnemonics](../../../mnemonics.md)**. The basic**PRINT** statement appears as follows:

> **PRINT** _list_

**_Where:_**  
_  
list_ is a comma-separated list of variables, literals, expressions, mnemonics, or screen positions. For syntax details, see **[PRINT](../../../directives/print.md)** directive.

All data sent to a display device must be in ASCII format. String variables and string literals are maintained in ASCII and are displayed as is. Numeric data is maintained in binary format and is converted to ASCII automatically. It is important that string variables only contain _printable characters._ Attempting to print control sequences to the screen may cause unpredictable results.

By default, each **PRINT** statement advances one line on the console after outputting the data. This automatic advance can be overridden by terminating the output list with an extra (_hanging_) comma, in which case data from the next **PRINT** is appended to the current line:

> 0010 LET A=4, B=5   
>  0020 PRINT "Multiplying ",A," times ",B   
>  0030 PRINT " results in ", A*B   
>  RUN   
>  Multiplying 4 times 5 results in 20

If line 20 includes a hanging comma, the result will appear on the same line:

> 0010 LET A=4, B=5   
>  0020 PRINT "Multiplying ",A," times ",B,   
>  0030 PRINT " results in ", A*B   
>  RUN   
>  Multiplying 4 times 5 results in 20

## Format Masks

A format mask is a character string that is used in an input or output statement to describe how data is to be filtered, displayed or printed. Masks are most often applied to the display/printing of numeric data (**PRINT** directive). The **[INPUT](../../../directives/input.md)** directive may apply masks to the display of prompts, as well as in the filtering of incoming data. Masking may also apply to the conversion/validation of a string; i.e. the**STR( )** function.

For the complete list of numeric and string masks, see **[Data Format Masks](../../../appendix/data_format_masks.md)**.

To assign a format mask in PxPlus syntax, place a colon before the mask following the given data value:

> val [$] _mask$_

**_Where:_**

_mask_ _$_ may be a literal string, a string variable, substring, or a string expression (concatenation):

> 0010 PRINT "The total is ",A:"$#,###,##0.00CR"

Numeric format mask characters are used to convert numeric data (from literals, variables, or numeric expressions) to ASCII. String data can also be converted through the use of format masks. However, unlike numeric format masks, string format masks are typically used to validate that the contents of a string match a predefined format.

When more characters exist in the data value than are specified in the format mask, the result will generate an Error #43: Format mask invalid; e.g., outputting 1000 with a mask of "##0" causes an error. However, the system parameters **'FI'** and**'FO'=** can be specified to handle overflows without generating errors.

## Unformatted Output

If no format mask is specified when outputting numeric values, the system formats the value based on certain criteria. See **[Data Format Masks](../../../appendix/data_format_masks.md)**.

## Output Positioning

The **[@( )](../../../functions/_at.md)** system function can be used to position output at specific column and line coordinates. This function can be used with directives wherever text is to be sent to an output device, most commonly in a**PRINT** or**INPUT** statement.

The format for the**@( )** location function appears as follows:

> **@(**_column_ [, _line_ ]**)**

**_Where:_**

_column_ |  Represents a column position (0 to the number of columns available on the screen -1)  
---|---  
_line_ |  Represents an optional line number (0 to the number of lines available on the screen -1)  
  
**_Example:_**

The following statement prints the date in the upper left-hand corner of the screen with the time starting in column 75 of the top line:

> PRINT @(0,0),"Date: ",DAY,@(75),TIM

See **[@( )](../../../functions/_at.md)** function.

##  Controlling Output

Special control sequences (see **[Mnemonics](../../Language%20Elements/Primary%20Syntax%20Elements/Mnemonics.md)**) can be inserted within an output statement (**PRINT** or **INPUT**) to invoke such functions as clearing the screen, positioning the cursor, changing the colour of characters, setting/resetting various attributes, or enabling/disabling I/O modes.

**_Example:_**

> PRINT 'CS',"File maintenance",'LF'

As the above**PRINT** statement is executed, it clears the screen (see **['CS'](../../../mnemonics/cs.md)**) displays "File maintenance" in the upper left corner of the screen, then advances one line (see **['LF'](../../../mnemonics/lf.md)**).

All mnemonics are enclosed within single quotes. Some require arguments (e.g. PRINT 'CIRCLE'(720,600,100,1)). Some are represented by more than one keyword: a long form or short form (e.g. **['PUSH' or 'WC'](../../../mnemonics/push.md)** can be used to copy the current window).

The use of an invalid mnemonic or one that is not applicable to a particular device results in Error #29: Invalid Mnemonic or position specification.

#### **Note:**  
Mnemonics are specific to the channel on which they are defined and are only valid while the channel remains open. When the channel is closed, the mnemonics are cleared.

PxPlus developers can also define/redefine their own 2-character control sequences via the **[MNEMONIC](../../../directives/mnemonic.md)** directive.

**_Example:_**

To assign settings for the PxPlus mnemonics **['CP'](../../../mnemonics/cp.md)** and **['SP'](../../../mnemonics/sp.md)**:

> MNEMONIC(0)'CP'="Courier New,-8":120,40   
>  MNEMONIC(0)'SP'="*":80,25

When a _defined_ mnemonic is encountered in a **PRINT** or **INPUT** statement, the system converts it to the character string specified.

For information on mnemonic definitions, see **[MNEMONIC](../../../directives/mnemonic.md)** directive.
