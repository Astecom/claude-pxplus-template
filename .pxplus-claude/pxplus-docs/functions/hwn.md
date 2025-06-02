# System Functions

**HWN( )** |  **_Highest Unused Window Number_**  
---|---  
  
##  Format

**HWN(**_chan_[,**ERR** =_stmtref_]**)**  
  
**_Where:_**

_chan_ |  Channel or logical file number of the terminal device whose highest unused window number is to be reported (usually device (0) or the console).  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Highest unused window number.

##  Description

The **HWN( )** function returns an integer, reporting the _highest_ unused window number for a given file. If all window numbers are in use, this function will return **-** 1\. If the file is not open or not a terminal, PxPlus returns Error #13: File access mode invalid.

You can use the window number returned by the function in a subsequent **['WINDOW'](../mnemonics/window.md)** mnemonic to create a new window. If no window number is passed to the '**WINDOW** ' mnemonic, it will utilize the _lowest_ unused window number.

The maximum number of windows allowed on a terminal device is 250.

#### **Note:**  
The **HWN( )** function is affected by your setting for the [**'B0'**](../parameters/b0.md) system parameter.
