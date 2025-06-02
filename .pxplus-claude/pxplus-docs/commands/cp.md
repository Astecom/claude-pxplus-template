# Extended Commands

**CP Console Command** |  **_Copy File_**  
---|---  
  
## Format

**CP** _input-file output-file_

**_Where:_**

_input-file_ |  Pathname of the file to be copied.  
---|---  
_output-file_ |  Output pathname of the file to be created/changed.  
  
## Description

The **CP** command can be used to copy a file from one location to another. The copy is done physically (block by block) for the purposes of speed. The output file will be identical to the input file except in terms of OS properties such as creator and date/time stamps.

Any valid file names may be provided as the input/output files. All prefix and pathname translation rules (such as *****  _asterisk_ for system library) will apply.

_(The CP command was added in PxPlus v7.65.)_
