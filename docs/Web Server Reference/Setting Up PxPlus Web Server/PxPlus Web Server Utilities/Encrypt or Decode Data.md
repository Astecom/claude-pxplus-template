# Web Utilities

***WEB/BASE64** |  **_Encrypt or Decode Data_**  
---|---  
  
## Description

The ***web/base64** program contains routines to encrypt data in Base64 format and to decode it or convert it back.

The Base64 algorithm encodes 3 bytes (value 0-255 each) into 4 bytes (value 0-63 each) using plain ASCII characters A-Z, a-z ,0-9, +/ to allow you to transmit binary files using text-only protocols across the Internet. Base64 is most commonly used for Mime encoding of email attachments and for authorization codes in Web pages.

The *web/base64 utility is a CALLed program with various entry points and various ENTER argument lists.

The table below lists formats for the various entry points with arguments and descriptions.

**Format** |  **Directive and Description**  
---|---  
1\. Encode String |  CALL "*web/base64;ENCODE_STR", _instring_ _$, outstring$_ For encoding strings  
2\. Decode String |  CALL "*web/base64;DECODE_STR", _instring_ _$, outstring$_ For decoding strings  
3\. Encode File |  This format has three variations for encoding files:  
  
CALL "*web/base64;ENCODE_FILE", _infile_ _$, outfile$_  
CALL "*web/base64;ENCODE_FILE", _infile_ _$, outfile$, blocksize_  
CALL "*web/base64;ENCODE_FILE", _infile_ _$, outfile$, blocksize, EOL$_ Block size and EOL (End of Line terminator) are optional. If you include EOL, you must also include block size.  
4\. Decode File |  CALL "*web/base64;DECODE_FILE", _infile_ _$, outfile$_ For decoding files  
  
## Format

**_Basic Call:_**

> CALL "*web/base64;_entrypoint_ ", _required_arguments_

**_Where:_**

_entrypoint_ |  Entry point (line label) where execution in the *web/base64 sub-program starts for the given routine.  
---|---  
_required_arguments_ |  String or numeric variable name. For each entry point of the Base64 utility, there are different argument lists. See the table below.  
  
The following **_Notes_** apply when you are encoding or decoding files:

**Note 1** |  **_For Encode or Decode: File Names or Channel Numbers_** Your _infile_ _$_ and _outfile_ _$_ values in Formats 3 and 4 can be either file names or logical file (channel) numbers. You must use strings to pass channel numbers (i.e. "24" would perform the operation on channel 24). If you use channel numbers instead of file names, you can have a file on disk encoded to a *memory* file for later program handling. If you assign a channel number in either _infile_ _$_ or _outfile_ _$_ , then that channel will remain open. The only channels automatically closed are the ones that the ***web/base64** program opens.  
---|---  
**Note 2** |  **_For Encode or Decode: Append to Existing File, If Any_** The base64 program READs an incoming file from its beginning (FIFO). With an output file (using either file name or channel number), the Web Server creates the file if it does not exist and appends to the file if it does exist. That is, it tacks the output onto the end of an ongoing encryption/decryption.  
**Note 3** |  **_For Encode Only: Block Size_** You can include an optional block size parameter in your arguments when you encode files (Format 3). This will not have any effect on a disk file but does let you specify how big encoded record blocks will be when data output is written to a *memory* file. Each record your program WRITEs to the file has a separate index. The primary use for a block size limit is in e-mail where lines must be less than or equal to 98 bytes each. If you assign block size when you encode files, then the Web Server automatically segments records for you. If you omit block size, the default is 4096 bytes per block.  
**Note 4** |  **_For Encode Only: EOL (End of Line Terminator)_** You can assign an end of line terminator by including the _eol_ _$_ parameter when you encode files. Your _eol_ _$_ terminator should be either $0a$ or $0d0a$. The _eol_ _$_ is only used for encoding the file. If you include an _eol_ _$_ , it will be appended to each block. If you omit block size, then no _eol_ _$_ will be appended.  
  
##  Base64 Error Messages

When the Web Server encounters errors in encoding or decoding Base64, it returns the usual file I/O and handling error messages including:

|  **Error #0** |  **Record/file busy**  
---|---|---  
|  **Error #12** |  **File does not exist (or already exists)**  
|  **Error #46** |  **Length of string invalid**  
When encoded, string will exceed maximum string length allowed.  
|  **Error #48** |  **Invalid input -- Try again  
** Unknown character encountered during decode. Indicates corrupted data or data not in Base64 format.
