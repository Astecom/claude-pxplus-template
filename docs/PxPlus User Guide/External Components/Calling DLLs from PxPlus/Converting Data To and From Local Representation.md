# Calling DLLs from PxPlus  
  
**Converting Data To and From Local Representation** |  **__**  
---|---  
  
Different CPUs and operating systems have different criteria for how numbers are kept in memory. This is known as **_byte ordering_**. The order of the bytes in memory are critical when using the **[DLL( )](../../../functions/dll.md)** function. Because memory is being directly accessed, you must ensure the data you are putting in memory will be interpreted correctly by the DLL; and conversely, when data is returned from the DLL, it must be converted back into something usable.

When you pass a string or a number on the**DLL( )** function line, PxPlus will automatically convert the data into the form required. Since strings are passed as pointers, PxPlus knows to convert the pointer itself into the local byte ordering format. However, data within the string is your responsibility. PxPlus does not know if it should convert the values within the string or what those values represent; therefore, it cannot convert data within a string to the local byte order.

Since a structure is a simple pointer to a memory location and a specific number of bytes in memory starting at that location, you need to convert items within the structure to the local values.

Numbers within a string need to be converted, whether they are integers or pointers. These functions can be used to manipulate values prior to using them in the DLL call:

|  **[BIN( )](../../../functions/bin.md)** |  Converts numbers into byte values; e.g. BIN(1234567,4) becomes the 4-byte integer of 1234567.  
---|---|---  
|  **[DEC( )](../../../functions/dec.md)** |  Converts byte values into numbers. Signed values are produced by default, but for unsigned values use DEC($00$+$..$).  
|  **[MEM( )](../../../functions/mem.md)** |  Returns memory locations (pointers) for data and allows for direct access to data in memory.  
|  **[SWP( )](../../../functions/swp.md)** |  Converts numbers to/from the local OS/CPU format.  
  
If you are defining a string that is a structure and that structure needs a pointer to a piece of data, you would have to allocate space and convert the location of that data in memory.

**_Example:_**

> Struct {   
>  UINT DataLength;   
>  char *pData;   
>  } MyStruct   
>  DIM Data$(255,$00$) ! Create a string in memory of the required length   
>  and initialize it with NULLs.   
> pData = MEM(Data$) ! Get a memory pointer to the string   
> DataLength = LEN(Data$) ! Set the length of our data string   
>  DIM MyStruct$(4 + 4, $00$) ! Dimension our structure

The values must be put into the structure in order to pass the structure in a DLL function call.

**_Example:_**

> MyStruct$(1,4)=SWP(BIN(DataLength,4)) ! Convert the length to a local values and put it into the MyStruct$ structure   
> MyStruct$(5,4)=SWP(BIN(pData,4)) ! Convert the pointer to a local value and put it into the MyStruct$ structure   
>  Result = DLL("SomeDLL","SomeFunction",MyStruct$) ! Passes the memory pointer of MyStruct$

If the DLL returns an updated structure, then the values will need to be converted back into something usable, as follows:

> UpdatedLength = DEC(SWP(MyStruct$(1,4)))

In this case, Data$(1,UpdatedLength) would show the new value. Since the pointer is passed to the Data$ variable, the DLL simply updates X number of bytes at the location in memory of the Data$ string.

However, if the DLL function call modified the pointer to Data$, then the following would be required to get the new pointer value and read memory to get the new string:

> pData = DEC(SWP(MyStruct$(5,4))   
>  Data$ = MEM(pData, UpdatedLength)

This reads memory at the location given in the MyStruct$ for the data and reads for the length given.

By using the **SWP( )** function, PxPlus automatically swaps the number to or from the local byte ordering format. Whether it is for an Intel or Power PC CPU,**SWP( )** defaults to the correct format for the processor. It is possible to override the byte ordering format with an option to the**SWP( )** function.
