# System Functions

**MNM( )** |  **_Return Mnemonic Value_**  
---|---  
  
##  Format

**MNM(**_mnemonic$_[,_chan_][,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_chan_ |  Channel or logical file number of the given file. If omitted, the default is file 0.  
---|---  
_mnemonic$_ |  Name of defined mnemonic to look up or the string value of the mnemonic. String expression.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

String, command sequence for mnemonic.

##  Description

The **MNM( )** function returns the defined command sequence for the specified mnemonic on the file given. The command sequence is typically the exact transmission string to handle the mnemonic for the file.

The mnemonic must have been predefined using the **MNEMONIC** directive. The **MNM( )** function returns a null string if the mnemonic has not been defined.

##  See Also

**[MNEMONIC Define File Command Sequence](../directives/mnemonic.md)**  
**[Mnemonics](../mnemonics.md)**

##  Example

See if the terminal supports condensed print. If so, create window:

> if mnm('CP')="" \  
>  then print 'window'(0,0,80,25),'CS', \  
>  else print 'window'(0,0,132,30),'CP','CS',
