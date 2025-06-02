# System Functions

**CMP( )** |  **_Compress Data_**  
---|---  
  
##  Format

**CMP(**_string_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_string_ |  Original data to be compressed.  
---|---  
_stmtref_ |  Program line number or label to which to transfer control.  
  
##  Returns

Compressed data string. 

##  Description

The **CMP( )** function uses standard ZLIB compression libraries to compress a data string. To expand (uncompress) the data, use the [**UCP( )**](ucp.md) function. **TCB(195)** will return 1 if ZLIB support is available.

The data returned from the **CMP( )** function includes a single header byte (value between $01$ and $FF$) to facilitate ZLIB uncompression routines. This represents a multiplier value that can be used against the length of the compressed data to estimate uncompressed data size (basically, _original_ _size_ /_compressed size_ rounded up and capped at 255). When expanding the compressed data using the **UCP( )** function, the length of the compressed data will be multiplied by this header byte to determine an estimated uncompressed buffer size.

#### **Note:**  
Since the **CMP( )** and **UCP( )** compression routines are not supported on all platforms, systems using these functions or this algorithm may not be fully portable.

Typically, the compressed data will be smaller than the original data; however, in rare instances or when dealing with short strings, the compressed data might be longer. In addition, be aware that data returned from the compression logic may contain any potential character; therefore, if writing to a data file, do not use field delimiters since they may occur within the compressed data.

**_Interfacing with Other ZLIB-Compliant Utilities_**

The header byte should be removed from the compressed data if it is to be used outside of PxPlus.

_(The CMP( ) function was added in PxPlus v7.00.)_

##  See Also

[**UCP( ) Uncompress Data**](ucp.md)

##  Example

! ^100 - CMP and UCP functions  
Original$=dim(512,"String to compress ")  
Compressed$=cmp(Original$)  
print "Length of Original: ",'BR',str(len(Original$)),'ER'  
print "Original String: ",'BR',Original$,'ER'  
print "Length of Compressed:",'BR',str(len(Compressed$)),'ER'  
print "Compressed String:",'BR',cvs(Compressed$,16:"~"),'ER'  
print  
!  
! ^100 - Due to Zlib overhead, not all strings yield smaller strings  
for StrLen=16 to 64 step 8  
Original$=dim(StrLen,"This is a short string")  
Compressed$=cmp(Original$)  
o=len(Original$),c=len(Compressed$)  
print "Orig:",o," CMP:",c," ",tbl(o>c,'red'+"Not Shorter"+'RM',"")  
next
