# Web Utilities

***WEB/QPRINT** |  **_Encode/Decode Quoted-Printable Data_**  
---|---  
  
## Description

The ***web/qprint** utility will encode and decode Quoted-Printable data. You may encode both text and binary data in Quoted-Printable format; however, Quoted-Printable is not an efficient encoding format for binary data. Each character outside of a specific range of ASCII characters are translated from 1 character to 3 characters.

The maximum length of a single line when encoded is 76 characters (not including the CRLF line terminator). Encoded Characters are represented as =XX within the output where XX is the ASCII representation of the Hex code of the character.

## Format and Usage Details

The calling sequence must be made to a specific entry point.

Entry points available for converting **_strings_** :

> **CALL "*web/qprint;ENCODE_STR"** , _instring_ _$, outstring$, mimetype$  
> _  
> **CALL "*web/qprint; DECODE_STR"** , _instring_ _$, outstring$, mimetype$, endofline$_

Entry points available for converting **_entire files_** :

> **CALL "*web/qprint;ENCODE_FILE"** , _infile_ _$, outfile$, mimetype$, endofline$_  
>   
> **CALL "*web/qprint;DECODE_FILE"** , _infile_ _$, outfile$, mimetype$, endofline$_

**_Where:_**

_instring_ _$  
outstring$_ |  _instring_ _$_ and o _utstring_ _$_ may not exceed 32000 characters. If an encoded string attempts to exceed this length, then an error will be generated.  
---|---  
_mimetype_ _$_ |  _mimetype_ _$_ is the mime content-type for the type of data being passed or received from this utility. Typically, ASCII Text data is represented as beginning with "text/". This utility will use the mime type to determine the end-of-line conversion characteristics.  
_endofline_ _$_ |  _endofline_ _$_ may be given or may be null. If it is null, then the applicable end-of-line terminator will be chosen based on which OS this program is running: $0A$ for UNIX and $0D0A$ for MS Windows.  
_infile_ _$  
outfile$_ |  _infile_ _$_ and _outfile_ _$_ may be given as either specific file names or as channel numbers (_infile_ _$_ ="23"). If the _outfile_ _$_ does not exist, then it will be created. The _infile_ _$_ is always read from its beginning, while the _outfile_ _$_ is always appended to.  
  
If you wish to pass channel numbers, then the file must already be opened on that channel. This utility will only close channels that it specifically opened. By using channel numbers, you may encode or decode directly to a *memory* device.  
  
If the string has a CRLF and its MIMETYPE$ begins with "text/", then the CRLF's become CRLF's in the outgoing stream of data. However, all other content types will have the CRLF turned into =0D=0A.

The following information deals with ***memory*** files during Encode/Decode:

**_During Encode_**

If the incoming data has a binary mime type, then no end-of-line terminators are assumed. If the data is a text mime type, then end-of-line terminators are assumed and will be added to each record read if the record does not end in an end-of-line terminator. If the outgoing channel is a *memory* file, then each line of encoded data is written as an individual indexed record without any _endofline_ _$_.

**_During Decode_**

If the incoming data has a binary mime type, then no end-of-line terminators are assumed. If it is a text mime type, then end-of-line terminators are assumed and will be added to the end of each record read if the record does not end in an end-of-line terminator. If the outgoing channel is a memory file and the data is of type text, then each record will be written without an end-of-line terminator. If you wish to save such data, then an end-of-line terminator must be added to each record read to obtain the original file. If binary, then each record will be written with no end-of-line terminator; to save such binary data, read each record and append without changes or additions to a file.

**_Text Encoding either to a String or to a File_**

Due to the nature of Quoted-Printable encoding, the encoded data may end up with an extra end-of-line terminator. Data that finishes with an end-of-line terminator will encode and decode exactly the same. However, data that does not end with an end-of-line terminator will encode and decode, and the decode version will be a byte or two longer.

**_*memory* Files as either the Incoming or Outgoing Side of Encode or Decode Operation_**

The end-of-line terminator may be either $0d0a$ $0a$ or no terminator. When output to a *memory* file, the records will be written without a terminator. It is then the responsibility of the task that called this program to add the appropriate terminator for the job they wish done. If this program encounters an error during processing, then it will EXIT ERR.

## Errors Returned

Examples of typical File Open errors for either _infile_ _$_ or _outfile_ _$_ are:

> Error #0 - Busy/perms  
>  Error #12 - Cannot find

Examples of handling errors are:

> Error #46 - String, when encoded, will exceed maximum string length  
>  Error #48 - Invalid data, unknown character encountered during decode indicates corrupted data or data not in Quoted-Printable format
