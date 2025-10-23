# System Functions

**IOL( )** |  **_Get IOList Specification_**  
---|---  
  
##  Formats

1. |  _In Composite String:_ |  **IOL(**_composite$_ **[** ,**REC** =_name$_] **[** ,**ERR=**_stmtref_**])**  
---|---|---  
2. |  _In Open File:_ |  **IOL(**_chan_ __**[** ,**REC=**_name$_**]** **[** ,**ERR=**_stmtref_**])**  
3. |  _Return IOList for a Given File/Pathname:_ |  **IOL(FILE**  _"pathname"_ **[** :* **|:KEY** **|** :^**]** **[** ,**REC** =_name$_**]** **[** ,**ERR** =_stmtref_**])**  
4. |  _Return IOList for a Given Table:_ |  **IOL(TABLE**  _"tablename"_ **[** :* **|:KEY** **|** :^**]** **[** ,**REC** =_name$_**]** **[** ,**ERR** =_stmtref_**])**  
  
**_Where:_**

_composite$_ |  Composite string variable whose IOList is to be retrieved. String expression.  
---|---  
_chan_ |  Channel or logical file number whose default IOList is to be returned.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_name$_ |  String variable. Optional record name/prefix for all of the variables in the IOList. (**REC=VIS(**_string$_**)** can also be used.)  
**FILE** |  Name of the unopened file from which to directly access the IOList.  
**TABLE** |  Name of the table from which to access the IOList.  
  
_(The optional REC= clause was added in PxPlus 2019.)  
(The ability to specify a FILE or TABLE was added in PxPlus 2019.)_

##  Returns

Object value of an IOList or composite string variable.

##  Description

The **IOL( )** function returns the object code value of an IOList for either an open file or a composite string variable. If the specified file or string variable does not have an associated IOList, PxPlus returns Error #81: Invalid IOLIST specification.

**Syntax** |  **Returns**  
---|---  
**IOL(**_chan_ :* **)** |  Returns the IOList for the file's embedded data dictionary.  
**IOL(**_chan_ :^**)** |  Returns the alternate IOList.  
**IOL(**_chan_ :**KEY)** |  Returns the IOList for the file's external key, if any.  
  
In all of the **[Formats](iol.htm#Mark1)** above, a **REC=** clause can be added to assign a record name as a prefix to all the variables in the list (similar to a prefix for a composite string variable); that is, the variable you identify in your string variable defines a prefix for the variable names in your IOList. See **Examples** below.

#### **Note:**  
To convert the object code into a format you can display, pass it to the **[LST( )](lst.md)** function.

##  Examples

> 0100 dim CUST$:iol=0110  
>  0110 iolist NAME$,ADR1$,ADR2$,SMAN$  
>  0120 print lst(iol(CUST$))  
>   
>  ->run  
>  IOLIST NAME$,ADR1$,ADR2$,SMAN$  
>   
>  0100 open (1,iol=*)"CUSTDB" ! Open with internal IOL  
>  0110 read data from "" to iol=iol(1) ! Clears the IOList

In line 0100 of the following example, the **[LOCAL](../directives/local.md)** directive is used, and the **REC=** in the **IOL** function prefixes all the variables:

> list  
>  0010 begin *  
>  0020 IO:iolist f1$,f2$,f3$,f4$,f5$,f6$  
>  0030 open (1,opt="+INFO",iol=IO,rec=aa$)"."  
>  0040 let n=3; for n; read (1); next  
>  0050 print "PRE: ",aa.f1$  
>  0060 gosub SUB  
>  0070 print "POST: ",aa.f1$  
>  0080 stop  
>  0090 !  
>  0100 SUB: local **iol=iol(1,rec=aa$)**  
>  0110 let aa.f1$="LOCAL";return  
>   
>  ->run  
>  PRE: 00sideways.jpg  
>  POST: 00sideways.jpg

Below is another example of the **REC=** in the **IOL** function:

> open (1,iol=*)"arcust"  
>  print lst(iol(1))  
> iolist CUST_NO$,NAME$,ADDR1$,CITY$,SALESPERSON$,AMT_OWING,DATEMADE$  
>  print lst**(iol(1,rec=ERIC$))**  
>  iolist ERIC.CUST_NO$,ERIC.NAME$,ERIC.ADDR1$,ERIC.CITY$,ERIC.SALESPERSON$,ERIC.AMT_OWING,ERIC.DATEMADE$

In the next two examples, the **FILE** option is used to directly access the IOList from an unopened file (arcust):

> print lst(iol(**file** "arcust"))  
> iolist CUST_NO$,NAME$,ADDR1$,CITY$,SALESPERSON$,AMT_OWING,DATEMADE$  
>   
>  print lst(iol(**file** "arcust",rec=x$))  
> iolist x.CUST_NO$,x.NAME$,x.ADDR1$,x.CITY$,x.SALESPERSON$,x.AMT_OWING,x.DATEMADE$
