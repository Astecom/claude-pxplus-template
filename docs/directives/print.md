# Directives

**PRINT** |  **_Display Information_**  
---|---  
  
##  Formats

**PRINT** [(_chan,fileopt_)]_varlist_

**_.. or .._**

**?** [(_chan_ ,_fileopt_)]_varlist_

**_Where:_**

**?** |  PxPlus accepts the **?** (_question_ _mark_) as a substitute for **PRINT**.  
---|---  
_chan_ |  Channel or logical file number of the target device (terminal or printer) or serial file for a display or print job. The user's terminal is always defined as 0 (_zero_).  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**TBL=**_stmtref_ |  Record number  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_varlist_ |  Comma**-** separated list of variables, literals, expressions, mnemonics, **IOL=** options, and/or location functions **'@(...)'**. Include **[Format Masks](../appendix/data_format_masks.md)** to define how data is to be displayed.  
  
##  Description

Use the **PRINT** directive to format and send printable data to a terminal, printer or file. This instruction processes mnemonics and positioning information.

If the print statement ends with a trailing comma, the output from a subsequent **PRINT** directive will continue on the same line; otherwise, it will start at the first column of the next line.

If you omit a format mask for a numeric in the **PRINT** statement, the **['DP'](../parameters/dp.md)** (Decimal Point Symbol) and **['TH'](../parameters/th.md)** (Thousands Separator) system parameters are ignored for European decimal settings.

PxPlus accepts the **?** (_question_ _mark_) as a substitute for **PRINT**.

#### **Note:**  
Because of the potential conflict between the function **AND( )** and the logical operator **AND** , there is a problem when the syntax processor tries to parse the statement PRINT AND($41$,$42$). As a work around, assign the result of a logical **AND** to a temporary variable or change the statement to PRINT ""+AND($41$,$42$).

##  See Also

**[Mnemonics](../mnemonics.md)**  
**[Data Format Masks](../appendix/data_format_masks.md)**

##  Example

> print 'CS',"Date:",day," Time:",tim

is the same as:

> ? 'CS',"Date:",day," Time:",tim

Both result in the same date and time display on a clear screen (Date:02/22/00 Time: 8.398397). You can assign a page or screen position for **PRINT** data:

> print @(5,5),"CUSTOMER LISTING", ! Prints to screen at col 5, line 5

You can also print data overlaying a graphic in PxPlus but only if all text output is sent using '**FONT'** and **'TEXT'** mnemonics (rather than as standard **PRINT** statements). In the following example, "Hello" will overlay the embedded bitmap:

> print 'CS'  
>  print 'picture'(220,210,600,500,"!Binoculars",2),  
>  print 'font'("MS Serif",-20);  
>  print 'green','text'(220,210,"Hello")
