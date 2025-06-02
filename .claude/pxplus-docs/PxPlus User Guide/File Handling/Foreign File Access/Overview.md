# File Handling

**Foreign File Access** |  **__**  
---|---  
  
PxPlus has the ability to read and write native OS serial files (sometimes referred to as flat files) for easy transfer of information from other applications. It also has the ability to access any data file regardless of the file format.

The special **OPEN** file option **ISZ=** allows a file to be accessed as if it was an **Indexed** file, specifying a logical indexed record size. This means that the file's contents can be read or written directly. Once the file has been opened (with **ISZ=** set), read and write statements can be issued against it. Optionally, the user can specify the record index via the **IND=** option to access specific areas of the file directly. The size specified via the **ISZ=** option is considered the record size for each record in the file. A record index specified on a file read or write directive with an **IND=** option determines where in the file (at what record index) the I/O function is to be performed.

Use of ISZ=-1 on an **OPEN** provides direct access to a file on a byte-by-byte basis. Whatever is specified on the **IND=** clause identifies the actual byte within the file. The **SIZ=** clause can be used on the **READ** or **WRITE** to define the amount of data to transfer.

**_Example:_**

> 0010 OPEN (1,ISZ=100) "CUSTDB"   
>  0020 FOR I = 0 TO 49   
>  0030 READ RECORD (1,IND=I,ERR=0060) R$   
>  0040 PRINT HTA(R$)   
>  0050 NEXT I   
>  0060 END

In the preceding example, the file CUSTDB is opened with an ISZ=100; i.e. the disk space occupied by the file is to be considered as a series of 100 byte records. The **FOR..NEXT** loop then reads the first 50 records (bytes 0 through 5000) and prints them in Hex via the **HTA( )** function. Record index zero (0) in the preceding example would consist of bytes 1 through 100. Index one (1) would be bytes 101 through 200, and so on.

One of the main reasons for accessing files via the **ISZ=** option is to read and/or update databases or other files maintained by other applications, such as word processors, spreadsheets, etc. Another reason may be to provide _direct access_ to disk contents to correct an error that may have occurred on a file.

#### **Warning!**  
Use the **ISZ=** feature carefully, as there is no attempt by PxPlus to verify the data you are writing is correct for the type of file being updated. It is possible to accidentally corrupt data if you update the file with the wrong data.

For other options for storing and retrieving external data, see **[Data Integration](../../Data%20Integration/Introduction.md)**.
