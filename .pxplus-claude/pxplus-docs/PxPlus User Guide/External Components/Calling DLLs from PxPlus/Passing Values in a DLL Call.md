# Calling DLLs from PxPlus

**Passing Values in a DLL Call** |  **__**  
---|---  
  
As with any function call, you must define and pass the correct parameters in order for the DLL to work. While some DLL functions are designed to take arguments that can handle more than one data type, they normally would expect one of the following:

  * Number without decimals (sent as integer)
  * Number with decimals (converted to integer)
  * String value (sent as pointer to the string)



In a 32-bit operating system, integers and pointers must be 4 bytes long.

## DLL( ) Parameters

The arguments/parameters you use when you call the**DLL( )** function are passed to the function in the following ways:

**Example** |  **Type** |  **32-Bit Data Format Passed**  
---|---|---  
X$ |  Strings |  Address of string  
X |  Numeric Variables |  Double word value (32-bit)  
X% |  Integer Variables |  16-bit value passed as 32-bit  
INT(X+1) |  **INT( )** Function |  Standard 32-bit  
X+Y |  Numeric Expression |  32-bit value  
  
All parameters being passed and returned should be defined in your code as outlined in the documentation provided with the API/DLL you wish to implement. Many DLLs expect a predefined format in the form of a data structure.

## Data Structures

To pass a data structure in a DLL call, format a string to the required size then pass the string. In effect, this sends a pointer to the structure. The following is the MS Window's API reference to a WindowPlacement structure:

> typedef struct _WINDOWPLACEMENT {   
>  UINT length;   
>  UINT flags;   
>  UINT showCmd;   
>  POINT ptMinPosition;   
>  POINT ptMaxPosition;   
>  RECT rcNormalPosition;   
>  } WINDOWPLACEMENT

The above structure translates into PxPlus as follows:

> DIM WindowPlacement$(4 + 4 + 4 + (4 + 4) + (4 + 4) + ((4 + 4) + (4 + 4)), $00$)   
>  ! Or DIM WindowPlacement$(4 + 4 + 4 + 8 + 8 + 16, $00$)   
>  ! Or DIM WindowPlacement$(44, $00$)

UINT values are unsigned integers of a 32-bit value (4 bytes). The POINT is a structure of two LONG values (each LONG is a 32-bit value); therefore, 8 bytes total for a POINT structure. The RECT is a structure of 4 LONG values (each LONG is a 32-bit value); therefore, 16 bytes total for a RECT structure. If the structure contained pointers, then you would leave room for a 4-byte value to hold the pointer.
