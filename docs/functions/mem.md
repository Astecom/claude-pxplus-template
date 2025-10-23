# System Functions

**MEM( )** |  **_Return Memory Value_**  
---|---  
  
##  Formats

1\. _Get Address of String:_ |  **MEM(**_var_ _$_[,**ERR=**_stmtref_]**)**  
---|---  
2\. _Read Memory, 2 Bytes:_ |  **MEM(**_address_[,**ERR=**_stmtref_]**)**  
3\. _Read Memory, 'n' Bytes:_ |  **MEM(**_addr_ ess,_bytes_[,**ERR=**_stmtref_]**)**  
4\. _Change Memory:_ |  **MEM(**_address_ ,_val_ _$_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_var_ _$_ |  Name of string variable whose address you wish to obtain.  
---|---  
_address_ |  Number of bytes to return _(numeric expression)._  
_val_ _$_ |  Value you wish to write _(string expression)._  
_stmtref_ |  Program line number or statement label to which to transfer control should an error occur.  
  
##  Returns

Memory location and/or value.

#### **Note:**  
This function is mainly for use with external functions; i.e. using the [**DLL( ) and DLX( )**](dll.md) functions.

##  Description

The **MEM( )** function provides direct access to memory locations through the use of pointers. The return value is dependent on the format used:

**_Format 1_** |  Returns a numeric value with the address of your string variable.  
---|---  
**_Format 2_** |  Returns a numeric value that has the contents of a word (16 bits) of memory. The value returned is a binary value (integer in two's complement format).  
**_Format 3_** |  Returns a string consisting of the data at the address specified for the specified number of bytes. If the number of bytes specified is 0 (zero), the function returns all data starting at the specified address up to the first NULL byte. This is handy when used to retrieve null terminated strings, which are a common format used with system calls.  
**_Format 4_** |  Copies your character string value to the address given. The function returns the value of the string _val_ _$._  
  
Where possible (primarily Windows), the system performs address validation and returns an Error #41: Invalid integer encountered (range error or non-integer) for an invalid memory location. If address validation is not possible, use of an invalid address may cause the application to abort.
