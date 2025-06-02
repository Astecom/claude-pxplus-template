# System Functions

**@( )** |  **_Print Location_**  
---|---  
  
##  Format

**@(**_column_ [, _line_] [ , **ERR=**_stmtref_ ]**)**

**_Where_** _:_

_column_ |  Column number. Integer value indicating a column position on a printer or terminal screen (0 to the number of columns available on the screen -1).  
---|---  
_line_ |  Optional line number. Integer value indicating a line position on a printer or terminal screen (0 to the number of lines available on the screen -1).  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

String, position code mapped to a location on an output device.

##  Description

The **@( )** location function is used to print/display text at a specific position on a printer or terminal screen. This function can be used with directives wherever text is to be sent to an output device, most commonly via **INPUT** or **PRINT** statements.

Column 0 represents the column on the far left side of the screen/printer, and line 0 represents the top line. Output is positioned at the column specified on the current line only if the column number is provided. When used with a printer (or print file) and the line number is less than the current line, a new page is started.

##  Example

The following statement prints the date in the upper left hand corner of the screen with the time starting in column 75 of the top line:

> print @(0,0),"Date: ",day,@(75),tim

This prompts for information on the left side, 5 lines from the top:

> input @(0,5),"Enter favorite sport:",@(30),SPORT$,@(0,6),"Thanks"

This prints the date right justified in the upper right hand corner of the screen:

> D$=dte(0:"%Dl %Ms %D")  
>  print 'blue',@(80-len(D$),0),D$,
