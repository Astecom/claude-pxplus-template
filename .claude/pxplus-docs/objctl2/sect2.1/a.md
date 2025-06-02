# Pseudo Objects

**Using File Handles** |  **__**  
---|---  
  
These handles can be used to retrieve all **FIN(**_n, keyword_**)** values as properties for the file. For example, to retrieve the pathname of a file, you could access the property 'Pathname$ from a file object.

Setting a property on a Pseudo file object is functionally equivalent to issuing a **'OPTION'(**_"name","value"_**)** against the file **_where_**  _"name"_ is the property name specified. For example, to set a file to be buffered, you could set its 'Buffered property to 1.

## Typical Pseudo File Properties

Typical pseudo file properties are:

**Pseudo-Property** |  **Description**  
---|---  
'CurKno |  Returns the current key number being referenced.  
'Extract |  Returns 1 if a record currently extracted; otherwise 0.  
'FileLength |  Size of the file in bytes.  
'Key_size |  Returns the external key size of the file.  
'LCL_Ctime$ |  File creation time (local time).  
'MaxRec |  Maximum records allowed in the file.  
'Pathname$ |  Returns the pathname of the file.  
'Record_size |  Maximum record size.  
'Records_used |  Number of records in use in the file.  
'UTC_Ctime$ |  File creation time as a Universal time.  
  
**_Example:_**

> Sysobj=new("*SYSTEM")  
> FileHdl=SysObj'File(5) ! This will yield a pseudo handle to the file open on channel 5  
>    
>  if FileHdl'EXTRACT \  
>  then write (5) \  
>  else write (5,key=_Key$)

#### **Note:**  
Pseudo file handles can actually be passed as file channel number in any file related function or directive, allowing Pseudo file handles to replace channel numbers in most instances.
