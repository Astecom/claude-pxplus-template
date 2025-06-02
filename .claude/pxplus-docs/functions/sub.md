# System Functions

**SUB( )** |  **_Substitute Text_**  
---|---  
  
##  Format

**SUB(**_string$_**,**_search$_**,**_replace_ _$_[,_instance_])[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_instance_ |  Optional. Integer. Which occurrence to find: |  0 |  All occurrences (assumed, if not given).  
---|---  
> 0 |  Specific occurrence, searching left to right within _string$_ ; i.e. 1 = first occurrence, 2 = second occurrence, etc.  
< 0 |  Specific occurrence from end of _string$_ , searching from left to right; i.e. -1 = first occurrence from end of _string$_ , -2 = second occurrence from end of _string$_ , etc.  
_search$_ |  Value for which to search. String expression. Cannot be null. |   
_replace$_ |  Text to replace the original _search_ text, if found. String expression. You must include a _replace_ value; however, the value can be null; e.g. sub(A$,B$,"",0,err=100). |   
_stmtref_ |  Program line number or statement label to which to transfer control. |   
_string$_ |  String expression containing the string in which to search-and-replace and perform the substitution. |   
  
##  Returns

Converted string.

##  Description

The **SUB( )** function performs a substitution within a string. The _search_ value cannot be null. (That generates an Error #46: Length of string invalid.) If no substitutions occur, no error is generated.

##  Example

print 'CS';  
list  
A$="Hello there",B$="e",Z$=sub(A$,B$,"",0)  
print Z$+" "+A$  
end  
  
->run  
Hllo thr Hello there
