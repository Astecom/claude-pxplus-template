# Data Dictionary   
  
**Using the Data Dictionary** |  **__**  
---|---  
  
The PxPlus Data Dictionary can be used for designing database applications and is employed in different ways by PxPlus facilities, such as the **[Views System](../../Views%20System/Introduction.md)**, the **[PxPlus SQL ODBC Driver](../../odbc/pxplus_odbc.md)** and **[NOMADS](../../NOMADS%20Graphical%20Application/Introduction.md)**. However, the primary purpose of the data dictionary is to document the contents of a database so that it can be easily viewed, queried and accessed by an application.

The PxPlus syntax below uses the embedded definition to perform these tasks.

##  Accessing the Data

When the definition is embedded in the physical data file, the need for an **IOLIST** statement in your database application is rendered obsolete. An IOList reference is not required for a **READ** or **WRITE** statement. 

The usual method for reading data from a data file without an embedded definition would appear as follows:

> OPEN (1)"SomeFile"   
>  READ (1)name$,address$,company$

> **_OR_**

> READ (1)IOL=MyIOL   
>  PRINT name$   
> MyIOL: IOLIST name$,address$,company$

If a data dictionary definition is embedded in the physical file, the same routine could be handled as follows:

> OPEN (1,iol=*)"SomeFile" ! OPEN using Data Dictionary   
>  READ (1)   
>  PRINT name$

The **IOL=** option defines a standard IOList to be used while the file is open. PxPlus uses this IOList for all subsequent file **READ** , **WRITE** , **EXTRACT** or **FIND** statements where you do not explicitly supply variable lists.

You can also use the **REC=** option to supply a prefix to be added to all the variables in the **IOL=** :

> Open (1,iol=*,rec="a")"SomeFile" ! OPEN using Data Dictionary   
>  Read (1)   
>  Print a.name$

## Open and Display Options

The *****_asterisk_ represents an embedded definition. Use a **^**_caret_ to open a file using an alternate IOList.

|  **_Opening a File:_** |  **OPEN** (chan,IOL=*)string$  
---|---|---  
|  |  **OPEN** (chan,IOL=^)string$  
|  **_Displaying the IOList:_** |  **PRINT LST** (**IOL**(_chan_ :*****))  
|  |  **PRINT LST(IOL** (_chan_ :**^**))  
|  **_Displaying an IOList with External Key:_** |  **PRINT LST** (**IOL**(_chan_ :_KEY_))  
  
**_Example:_**

The following program illustrates how to open a file and read its contents using an embedded definition. It uses demo files that were installed with PxPlus. You must be in the path _/lib/NOMADS/_ for this to work.

> 00020 BEGIN   
>  00030 OPEN (1,IOL=*)"cstfile" ! Open with data dictionary access   
>  00040 PRINT "Load regular IOLIST "   
>  00050 READ (1,END=0080) ! No reference to IOL required   
>  00060 GOSUB PRINT_RECORD   
>  00070 GOTO 0050   
>  00080 CLOSE (1)   
>  00160 END   
>  00170 PRINT_RECORD:   
>  00180 PRINT "_ "+KEC(1)+"_ "   
>  00190 PRINT "Standard iolist"   
>  00200 PRINT "CST_ID$=",CST_ID$   
>  00210 PRINT "CST_NAME$=",CST_NAME$   
>  00220 PRINT "CST_ADDR$=",CST_ADDR$   
>  00230 RETURN
