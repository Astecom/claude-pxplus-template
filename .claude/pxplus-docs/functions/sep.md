# System Functions

**SEP( )** |  **_Return Field Separator_**  
---|---  
  
##  Format

**SEP(**_chan_**)**

**_Where:_**

_chan_ |  Channel or logical file number of an **OPEN** file.  
---|---  
  
##  Returns

Either the **SEP** value (single character string) for an **OPEN** file on given channel or "" (null).

##  Description

The **SEP( )** function returns either a single character string, **SEP** (the field separator value in Hex) for a given file **OPEN** on a given channel, or "" (null).

The value returned is the value you set in the **SEP=** option when creating a Keyed or Indexed file (a single character string which can be anything from $00$ to $FF$). The function returns "" (null) for a dynamic field separated file (a Keyed or Indexed file created using a **SEP=*** option). With this type of file, the system stores each field in the record with a 1-byte prefix identifying the type and length of data that immediately follows.

#### **Special * Option:**  
Using **SEP(*)** allows the programmer to access the table of potential separator characters. The first character is the system DEFAULT field separator. See [**DEF SEP**](../directives/def_cvs~dte~lcs~ucs.md) directive.

_(The ability to have a SEP table was added in PxPlus v7.00.)_

##  Example

open (14)"pvx_dir"  
?hta(sep(14))  
8A
