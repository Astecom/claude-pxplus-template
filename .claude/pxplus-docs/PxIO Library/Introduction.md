# 

**PxIO Library** |  **__**  
---|---  
  
The PxIO Library is a collection of interconnected functions written in the C programming language for the purposes of interfacing with PxPlus files, specifically the Indexed, Keyed (VLR/FLR), Program, Serial and Binary formats.

This section describes the available Library functions and assumes a familiarity with C programming language syntax. The concepts that are essential for understanding how to interface with the Library are explained below.

## File Handles

The vast majority of PxIO Library functions require a file handle, defined as PxIOFileHandle. File handles are created by the **[PxIOOpen](Library%20Functions/File%20Open%20and%20Close%20Functions/PxIOOpen.md)** function and are _thread specific_.

## Services

Services are a central concept of the PxIO Library, critical for both file access and security. While the vast majority of functions rely on a file handle, each file handle is associated with a service and can only be created in reference to a service handle.

Services are _thread specific_ and can only be used by the thread that created it. Similarly, since file handles are service dependent, they, too, are _thread specific_. A thread can have more than one service at a time associated with it. For instance, a thread can have both a local service and a remote service connected to PxServer.

##  Keys

Keys are attributes of Keyed file records that determine the order in which records are sorted and retrieved. In most instances, keys are dependent on the contents of the records with which they are associated, although files with external keys can have keys whose contents are completely independent of the contents of the records with which they are associated. Such a situation is not considered good database design practice and is not encouraged; however, it is allowed for the purposes of backwards compatibility with legacy systems.

Keyed files can have more than one key sequence. For instance, a customer file could have two key sequences: one that sorts customers by customer number, and one that sorts by customer name. Key sequences are specified by setting the _keyNumber_ parameter in functions where it is applicable.

## RecordInfo Structures

The RecordInfo structure is used to pass record information to the Library and receive record information back. The layout is as follows:

> typedef struct RecordInfo   
>  {   
>  int length; /* Record length */   
>  char *data; /* Record data pointer */   
>  } RecordInfo;

The data field is a pointer to the information contained in the record, and the length field is the size of the record.

In READ functions, these fields are populated by the called function, and the caller must then inspect and/or copy the data of interest before the next Library function call. _There is no guarantee that the data will still be present after the following Library function call._ The returned address itself may not even be valid after a subsequent Library call, so the data **_must_** be copied or used as soon as possible. The data at the returned memory location may not be changed and should be considered read-only.

In WRITE functions, it is the responsibility of the calling procedure to set the _RecordInfo_ fields to the location of the record to write and its corresponding size before passing the structure to the Library function.

The data buffer must contain a properly formatted record with the length of the record specified. The value supplied in _bufSize_ should contain the actual size of the record rather than the size of the data buffer. **[PxIOIndexWrite](Library%20Functions/File%20Write%20Functions/PxIOIndexWrite.md)** will pad the data record with nulls as required for files with fixed length records. The calling application is responsible for constructing a valid PxPlus data record using field separators as required.

## KeyInfo Structures

KeyInfo structures are used to communicate key information to and from the Library. The layout is as follows:

> typedef struct KeyInfo   
>  {  
>  int length; /* Key length */   
>  char *data; /* Key data pointer */   
>  } KeyInfo; 

While the layout is the same as that of the _RecordInfo_ structure, its usage is slightly different. When passing key information to the Library, the calling routine sets the data and length fields, as is done with _RecordInfo_. However, when requesting information, storage must be set aside, and its location and size entered into the _KeyInfo_ structure before the call is made. If the size entered is too small to accommodate the requested information, an error value is returned, and the needed space is placed in the length field.

## Index Positions

In Index and Serial files, index positions directly correspond to a record's position in the file. In Program and Binary files, index positions directly correspond to the absolute file position.

In a Keyed file, not all assumed index positions are valid at any given time. For instance, if a Keyed file contains a thousand entries, there is no guarantee that index positions 0 to 999 will correspond to legitimate index positions. They are entirely determined by the current state of the file and the sequence in which the records were written. However, a record's index position can be determined by calling **[PxIOGetNextPosition](Library%20Functions/File%20Position%20Functions/PxIOGetNextPosition.md)**. Because of the potential number of records in non-keyed files, uint64_t variables are used to pass these values into and out of the Library.

## Record Numbers

For all file formats except Keyed files, the record number is the same as the index number plus one. For Keyed files, record numbers are a different concept than index positions. In this case, a record number is associated with a record's position within a key sequence and is, therefore, dependent on the key sequence number in use at the time.

In the customer file example mentioned earlier (see **[Keys](Introduction.htm#keys)** above), a customer entry will probably have a different record number when referencing the customer number key sequence than when referencing the customer name key sequence. The current record's record number can be obtained with the **[PxIOGetRecordNumber](Library%20Functions/File%20Position%20Functions/PxIOGetRecordNumber.md)** function.

## Character Strings

All character strings are assumed to be null terminated unless stated otherwise.

## Error Handling

PxIO Library functions communicate success or failure via the function's return value. If the function is successful, the predefined PXIO_SUCCESS_STATUS is returned. A negative return value indicates the function's failure, and diagnostic information on the failure can be retrieved with the **[PxIOGetError](Library%20Functions/Error%20Functions/PxIOGetError.md)** function.

The only exceptions for the above rule are the **[PxIOGetError](Library%20Functions/Error%20Functions/PxIOGetError.md)** and **[PxIOOpen](Library%20Functions/File%20Open%20and%20Close%20Functions/PxIOOpen.md)** functions.
