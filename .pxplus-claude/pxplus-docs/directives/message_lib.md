# Directives 

**MESSAGE_LIB** |  **_Establish Message Library_**  
---|---  
  
##  Formats

1\. _Designate Message Library_ _:_ |  **MESSAGE_LIB** _filename$_[,**NBF=**_num_][,**ERR=**_stmtref_]  
---|---  
2\. _Add Library to Top of List_ _:_ |  **MESSAGE_LIB ADD** _filename$_[,**NBF=**_num_][,**ERR=**_stmtref_]  
3\. _Remove Library from List_ _:_ |  **MESSAGE_LIB DROP** _filename$_[,**ERR** =_stmtref_]  
4\. _Remove Top Library from List_ _:_ |  **MESSAGE_LIB POP** [,**ERR=**_stmtref_]  
  
**_Where_** _:_

_filename_ |  Name of the variable length Direct/Keyed file to be used as a message library. String expression.  
---|---  
_num_ |  Number of buffers to allocate.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **MESSAGE_LIB** directive to designate files as containing messages to be returned by the **MSG( )** function. A message library must be a variable length Direct/Keyed file with the message identifier as the key. The record contains the message.

There is an alternate key to the _*msglib.en_ (and any newly created **MESSAGE_LIB** files) on the first 50 characters of the message field. _(as of PxPlus v4.12)_

##  Format 1

**_Designate Message Library_**

**MESSAGE_LIB** _filename$_[,**NBF=**_num_][**,ERR=**_stmtref_]

Use this format to designate and add filename(s) to the **MESSAGE_LIB** list. In earlier versions of PxPlus, only one message library could be active at a time when using a **MESSAGE_LIB** directive. PxPlus closed any other currently active message library and designated your given file as the new one. Currently, you can now have more than one message library active at a time. With use of the **MSG( )** function, the message libraries are searched in order until a match is found.

An error is generated if the file cannot be properly opened. Use **NBF=** to specify the number of buffers to allocate. The _filename$_ expression can contain one or more **MESSAGE_LIB** filenames, each **SEP** -separated, so that you can reset the entire list in one command.

**_Example 1:_**

> keyed "MESSAGE.LIB",10,0,-256  
>  open (1)"MESSAGE.LIB"  
>  write record (1,key="NOCUST")"Sorry but Customer %1 is not valid"  
>  close (1)  
> message_lib "MESSAGE.LIB"  
>  print msg("NOCUST","0001")  
>  Sorry but Customer 0001 is not valid

**_Example 2:_**

> 0010 message_lib "*MSGLIB."+env("LANG"),err=0020;goto 0100  
>  0020 message_lib "*MSGLIB.EN"  
>  0100 rem...  
> 0110 ! ...  
>  1000 read (CST_FN,key=K$,dom=1900)  
>  1010 ! ...  
>  1900 print msg("REC_MISS",K$)

##  Format 2

**_Add Library to Top of List_**

**MESSAGE_LIB ADD** _filename$_[,**NBF=**_num_][,**ERR=**_stmtref_]

Use this format to add a _filename$_ to the top of the list of message library to search. An error is generated if the **MESSAGE_LIB** file cannot be properly opened. Use the **NBF=** option to specify the number of buffers to allocate.

##  Format 3

**_Remove Library from List_**

**MESSAGE_LIB DROP** _filename$_[,**ERR=**_stmtref_]

This format removes the specified _filename$_ from the list of message libraries to search. An Error #12: File does not exist (or already exists) is generated if the _filename$_ is not on the list.

##  Format 4

**_Remove Top Library from List_**

**MESSAGE_LIB POP**[,**ERR=**_stmtref_]

Use this format to remove the top _filename$_ from the list of message libraries to search. An Error #12: File does not exist (or already exists) is generated if _filename$_ is empty.

##  See Also

[**MSG( ) Return Message Text**](../functions/msg.md)  
[**KEYED Create Single/Multi-Keyed File**](keyed.md)  
[**DIRECT Create File with Keyed Access**](direct.md)
