# Utility Routines

***TOOLS/READFILE** |  **_Return Binary Data into Output String_**  
---|---  
  
## Invocation

**CALL "*tools/readfile"** , _filename$_ , _outputfiledata_ _$_

**_Where:_**

_filename$_ |  Name of the file to read.  
---|---  
_outputfiledata_ _$_ |  Output string where the file data is returned.  
  
## Description

Read the entire binary contents of a file and return the data in the output string.

_(The ReadFile utility was added in PxPlus 2021.)_

## Example

In this example, the utility will read the file _addresses.xml_ and output the contents of this file into _addressxml_ _$_ :

> call "*tools/readfile","addresses.xml",addressxml$
