# System Functions

**UCP( )** |  **_Uncompress_ _Data_**  
---|---  
  
##  Format

**UCP(**_string_[,**ERR=**_stmtref_]**)**

**_Where:_**

_string_ |  Original data to expand (uncompress).  
---|---  
_stmtref_ |  Program line number or label to which to transfer control.  
  
##  Returns

Expanded data string.

##  Description

The **UCP( )** function expands a string that has been compressed using the **CMP( )** function. For a usage example, see [**CMP( )**](cmp.md) function. **TCB(195)** will return 1 if ZLIB support is available.

**_Interfacing with Other ZLIB-Compliant Utilities_**

The data returned from the **CMP( )** function includes a single header byte (value between $01$ and $FF$) to facilitate ZLIB uncompression routines. The **UCP( )** requires this value to expand the data.

If data has been compressed using ZLIB utilities that are outside of PxPlus, this value will not be present; therefore, a $00$ header must be inserted in its place. This will cause the **UCP( )** function to attempt to uncompress multiple times into varying buffer sizes until the data can be uncompressed.

If the buffer size required for the uncompressed data is known, the header byte can be calculated and used. For example, if you know that the compressed data is less than a maximum of 10,000 bytes long, and the actual length is 2,000, you can prefix the data with $05$ indicating that the output buffer should be set to 5 times the compressed data size. Should a header value be given but the data still does not fit, the system will fall back into multiple uncompress attempts while increasing the output buffer until it is successful.

#### **Note:**  
Since the **CMP( )** and **UCP( )** compression routines are not supported on all platforms, systems using these functions or this algorithm may not be fully portable.

##  See Also

[**CMP( ) Compress Data**](cmp.md)
