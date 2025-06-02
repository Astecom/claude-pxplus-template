# Toolkit for Conversion from Thoroughbred

**FINPUT Conversion and Processing**|   
---|---  
  
The PxPlus conversion utilities include logic to emulate the FINPUT directive found in more recent versions of Thoroughbred. During the conversion, the system will scan your program lines looking for the FINPUT directive. If found, it will be replaced with a call to _"*conv.tbd/finput"_.

## FINPUT Program

The _"*conv.tbd/finput"_ program provides run-time mapping of the FINPUT directive to the standard built-in INPUT EDIT directive.

**_Calling Sequence:_**

> **CALL** "*conv.tbd/finput", _channel_ , _attributes$_ , _editoptions_ _$_ , _timeoutvalue_ , _variable$_

These parameters directly relate to the corresponding parameters used in the FINPUT directive.

## Conversion

The _"*conv.tbd/finput.cnv"_ program is invoked by the conversion process to parse and replace the FINPUT directive. It scans the original program statement and replaces the FINPUT directive with the appropriate CALL statement.

Thoroughbred is a registered trademark of Thoroughbred Software International, Inc.
