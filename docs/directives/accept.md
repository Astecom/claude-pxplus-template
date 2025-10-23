# Directives

**ACCEPT** |  **_Read Single Keystroke_**  
---|---  
  
##  Format

**ACCEPT(**_chan_[,_fileopt_]**)**_char$_  
  
** _Where_** _:_

_chan_ |  Channel or logical file number.  
---|---  
_char$_ |  String variable. Receives the input character.  
_fileopt_ |  Supported file options. See **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**: |  **ERR=**_stmtref_ |  On error, transfer to program line number/statement label  
---|---  
**NUL=**_stmtref_ |  On no input, transfer to program line number/statement label  
**TIM=**_num_ |  Maximum time-out value in integer seconds  
  
##  Description

Use the **ACCEPT** directive to read a single keystroke (character) from a terminal. The **ACCEPT** directive does not echo the keystroke/character to the terminal.

If no input is in the input buffer, the **ACCEPT** directive waits for terminal input. Control transfers to the _stmtref_ if you include a **NUL=** option and the terminal input buffer has no data in it.

##  See Also

**[OBTAIN Get Hidden Terminal Input](obtain.md)**  
**[INPUT Get Input from Terminal](input.md)**

##  Example

This example reads one record at a time and displays it on the terminal. When any key is pressed, control drops to line 0130 (ending the listing of the file).

> 0100 read record (1,end=0130)R$  
> 0110 print R$  
> 0120 accept (0,nul=0100,tim=0.5)X$  
> 0130 print "<Display halted>"
