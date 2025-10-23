# Directives

**RENUMBER** |  **_Change Program Line Numbers_**  
---|---  
  
##  Format

**RENUMBER [**_new_line1**[**_**,**_step_val_**[,**_range_start_**][,**_range_end_**]]]**  
  
**_Where:_**

_new_line1_ |  New starting line number (default is 0010).  
---|---  
_range_start_ |  Starting line number or label at which to begin renumbering. Optional. Use to define the start of an existing range in the program for renumbering.  
_range_end_ |  Ending line number or label with which to stop renumbering. Optional. Use to define the end of an existing range in the program for renumbering.  
_step_val_ |  Increment or step value between line numbers (default is 10). Numeric expression.  
  
##  Description

Use the **RENUMBER** directive to assign new line numbers to the current program. During the renumbering process, PxPlus adjusts all references to the lines being renumbered (e.g. **GOTO** , **ERR=** option, etc.) to reflect the new line number.

By default, the complete program is renumbered. You can choose to resequence only selected ranges of the program. All references (**GOTO** , etc.) are adjusted in either case. Use embedded **REM** statements in the program to control renumbering. If a remark line starts with a number (e.g. 4000 REM 4000), PxPlus uses the number as the absolute line number (assuming it is less than or equal to the current resequence number).

##  Example

list  
0001 for I =1 to 40  
0002 read (1,err=0018)A,B  
0003 print A,B  
0007 next I  
0010 stop  
0014 rem 100 - Error procedure  
0018 exitto 0008  
renumber  
list  
0010 for I=1 to 40  
0020 read (1,err=0110)A,B  
0030 print A,B  
0040 next I  
0050 stop  
0100 rem 100 - Error procedure  
0110 exitto 0045

In line 0110 (renumbered version), PxPlus generated line number 0045 in the EXITTO statement since no line number 0008 existed in the original version.
