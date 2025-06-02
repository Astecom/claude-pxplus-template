# System Functions

**SWP( )** |  **_Swap Data_**  
---|---  
  
##  Format

**SWP(**_string$_[,_swp_code_][,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_stmtref_ |  Program line number or statement label to which to transfer control.  
---|---  
_string$_ |  String expression whose bytes are to be swapped.  
_swp_code_ |  Type of byte swapping to be performed. Numeric expression. See the table below.  
  
##  Returns

Conversion of data, native machine format to/from PxPlus common format.

##  Description

The **SWP( )** function is designed to simplify the conversion of data between native machine format and PxPlus common format. PxPlus processes data with the most significant information to the left (i.e. you read the data from left to right) where some computers store data with the most significant data at the right.

The **SWP( )** function gives you a convenient way of rearranging the data so it can be exchanged. If you do not supply a swap type, the function will rearrange the data according to the native operating mode of the machine. For example, on INTEL 80x86 CPUs, a **SWP( )** of "12345678" yields "87654321".

Unfortunately, not all swapping algorithms are this easy. Some computers swap every two characters, some every four characters and some every eight characters.

This table describes the various types of swapping based on a value of "12345678":

**Type** |  **Value**  
---|---  
0 |  12345678  
1 |  21436587  
2 |  34127856  
3 |  43218765  
4 |  56781234  
5 |  65872143  
6 |  78563412  
7 |  87654321  
  
#### **Note:**  
For compatibility mode, the swap type can be provided as a single byte containing the binary value of the desired type; i.e. $01$, $02$, and so on.
