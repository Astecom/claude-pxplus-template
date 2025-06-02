# Directives

**SAVE WINDOW** |  **_Save Current Window_**  
---|---  
  
## Format

**SAVE WINDOW TO**  _filename$_ **[** ,**ERR** =_stmtref_**]**

**_Where:_**

_filename$_ |  Valid filename. String expression.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
## Description

Use the **SAVE WINDOW** directive to save only the **_current_** window, regardless if it is a child or parent window. If the child window is inside a dialogue, this directive will not save the outer dialogue.

_(The SAVE WINDOW directive was added in PxPlus 2018.)_

## See Also

**[SAVE CONTROL Save Image of Control](save_control.md)**
