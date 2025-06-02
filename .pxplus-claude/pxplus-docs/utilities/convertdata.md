# Utility Routines 

***TOOLS/CONVERTDATA** |  **_Convert Data File To/From Text_**  
---|---  
  
## Formats

1\. _Convert Data File to Text:_ |  **CALL "*tools/ConvertData;Binary_to_Text",**_binPath_ _$_**,**_txtPath_ _$_**,**_password$_  
---|---  
2\. _Build Data File from Text:_ |  **CALL "*tools/ConvertData;Text_to_Binary",**_txtPath_ _$_**,**_binPath_ _$_**,**_password$, flags$, retMessage$_  
  
**_Where:_**

_binPath_ _$_ |  Required |  Input |  Path to the PxPlus data file (could also be an open channel to the data file passed as a string).  
---|---|---|---  
_txtPath_ _$_ |  Required |  Input |  Path to the text version of the data file.  
_password$_ |  Optional |  Input |  Password for the data file if required (null if no password).  
_flags$_ |  Optional |  Input |  Possible values are: |  "F" |  Force using non-exclusive file access if existing binary file is in use.

#### **Warning!**  
This can result in lost data if records are extracted by another task. Identifiers for non-available records are loaded into _retMessage_ _$_.  
  
---|---  
"V" |  Verbose mode displays a message box to the user to determine behavior when exclusive access to an existing binary file is not available.  
  
Options are _Retry_ , _Continue_ (using non-exclusive file access) or _Cancel_.  
_retMessage_ _$_ |  Optional |  Output |  Contains identifiers for individual records that are not available (due to being extracted by another task) when non-exclusive file access is used.  
  
If records are not available for removal, this argument will contain a "-"+$0A$ followed by a $0A$-separated list of keys/indices of those records. If records are not available for writing, this argument will contain a "+" followed by a $0A$-separated list of those records.  
  
_(The flags$ and retMessage$ parameters were added in PxPlus 2021.)_

## Description

This utility is a CALLed program that converts native PxPlus keyed (EFF, VLR, FLR) and indexed files to/from a formatted text file. The text version of the data file contains all the information (metadata and data) required to make a duplicate of the original file.

Converting native PxPlus files to a text format can be useful when comparing different versions of the same file or when used in conjunction with a source control system such as SVN.

#### **Note:**  
The output file will be created if not already present.

_(The ConvertData utility was added in PxPlus v10.20.)_
