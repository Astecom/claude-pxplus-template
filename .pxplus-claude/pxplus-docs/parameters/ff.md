# System Parameters

**'FF'=** |  **_File Format_**  
---|---  
  
##  Description

Defines the format of information returned by the **FID( )** function. Possible formats are:

**Format** |  **Returns FID Compatible With**  
---|---  
0 |  PxPlus standard format  
1 |  Thoroughbred emulation  
2 |  Rexon emulation  
3 |  BBx emulation  
4 |  Enhanced BBx emulation  
  
Sequential files are reported as binary files for the **FID( )** function. File type will be set to $03$ rather than a $01$ in position (1,1) of the FID.  
  
##  Default

**'FF'=0** for PxPlus standard format

#### **Note:**  
When the **'FF'** parameter is set to 0 or 4 and the **'PO'** parameter is switched **_On_** , the **FID( )** and**FIB( )** functions return the original path used when the file was opened as opposed to the full system pathname.

The **FID( )** and **FIN( )** key descriptor layouts will be changed whenever there is a change to the **'FF'** parameter.

##  See Also

[**'PO' Path Original**](po.md)  
[**FIB( ) Return File Information Block**](../functions/fib.md)  
[**FID( ) Return File Information Descriptor**](../functions/fid.md)  
[**FIN( ) Return File Information**](../functions/fin.md)

  
BBx is a registered trademark of BASIS International Ltd.  
Thoroughbred is a registered trademark of Thoroughbred Software International Inc.
