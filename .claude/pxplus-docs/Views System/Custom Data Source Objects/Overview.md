# Views System

**Custom Data Source Objects** |  **__**  
---|---  
  
System designers may develop their own data source driver object to be used by the Views System. Such objects must adhere to the interface standard, providing all methods. The object must clean up after itself when deleted (close files, etc.).

##  PxPlus Interface Standard for Data Source Objects

This object is used by the Views System to open and read data from a Data Source.

**Properties** |  **Description**  
---|---  
_None_|   
**Methods** |  **Description**  
**Currentkey$(**[_kno_]**)** |  Returns the value of the key of the current record, or _null_ on error. (_kno_ is optional.)  
**GetColumnCount( )** |  Returns the number of columns present in the table.  
**GetColumnInfo(**_colnum_ _| colname$_**)** |  Returns a **ColumnInfo** object that contains a description of the column. This object is static and will be reused on all subsequent calls to this function. It will be released when the object is released. You can pass either a column number or name. The name may contain a trailing $.  
**GetColumnName$(**_colnum_**)** |  Returns name of column. Name returned is type independent. Strings will not have trailing $. Error will be generated when accessing a name with an invalid column number.  
**GetIndexCount( )** |  Returns the number of indices on the table.  
**GetIndexDescription$(**_kno_ _| keynm$_**)** |  Returns a list of the column descriptions that were used to make up the index, each separated by a plus sign.  
**GetIndexInfo (**_kno_ _| keynm$_**)** |  Returns an **IndexInfo** object that contains a description of the index. This object is static and will be reused on all subsequent calls to this function. It will be released when the object is released. You can pass either an index number or name.  
**GetIndexName$(**_n_**)** |  Returns the name of the index on the table.  
**GetIolist$( )** |  Returns a compiled IOList that is suitable to extract the data from the data records that this object returns.  
**Nextkey$( )** |  Returns the value of the key of the next record to be read, or _null_ on error.  
**Open(**_x$_**)** |  Opens the specified data source and initializes its structures. Returns 1 if successful.  
**ReadExact$(**_key$, knum_**)** |  Returns the record whose key matches exactly the key specified.  
**ReadFirst$(**_key$, knum_**)** |  Positions the data source to the specified key and returns the first record. Returns a _null_ string if no records found.  
**ReadNext$( )** |  Returns the next record from the source. Returns a _null_ string if no more records found.  
  
For information on the **ColumnInfo** and **IndexInfo** objects, see **[DataBase and PVXDb Objects](../../Data%20Dictionary/Data%20Dictionary%20Objects/DataBase%20and%20PVXDb%20Objects.md)**. If your custom data source object is similar to a PxPlus file with an external key, you may have to provide additional methods:

> GetKeyColumnCount( )   
> GetKeyColumnName$(c)   
> GetKeyColumnInfo(c|c$)   
> GetKeyIolist$( )

**_Example:_**

Below is an example of a Custom Data Source Object that retrieves file information for native PxPlus files from the data dictionary definition files (_providex.ddf_ _/dde_) using the ***dict/database** object. This is useful for normalized files that have a dictionary definition that has not been embedded in the file.

> ! ddfio.pvc-Custom Data Source Object-Retrieves file info from the data  
>  ! dictionary files (providex.ddf/dde) using the*dict/database object rather  
>  ! than from the dictionary embedded in the physical file.  
>  ! This object supports normalized files only.  
>  !  
>  def class "ddfio"  
>  !  
>  like "*views/FileIO" ! Uses the file io functions from the*views/fileio object  
>  ! This includesCurrentkey$(),NextKey$(),ReadExact$(),ReadFirst$(),ReadNext$()  
>  !  
>  local LogFile$  
>  !  
>  function Open(X$)  
>  enter (X$)  
>  if FileNo>0 \  
>  then close (FileNo);  
>  FileNo=0  
>  if DictObj=0 \  
>  then DictObj=new("*dict/database",err=*next)  
>  if DictObj and DictObj'SetDataBase("") \  
>  then T=DictObj'GetTableInfo(X$);  
>  if T \  
>  then LogFile$=X$;  
>  P$=T'PhysicalFile$;  
>  P$=tbl(mid(P$,1,1)="=",P$,evs(P$,err=*next));  
>  open load (hfn,iol=*,err=FileNotFound)P$;  
>  FileNo=lfo  
>  if FileNo \  
>  then return 1 \  
>  else return 0  
>  !  
> FileNotFound: \  
>  exit 12  
>  !  
> ! Column methods  
>  !  
>  function GetColumnCount()=DictObj'GetColumnCount(LogFile$)  
>  function GetColumnName$(N)=DictObj'GetColumnName$(LogFile$,N)  
>  function GetColumnInfo(N$)=DictObj'GetColumnInfo(LogFile$,N$)  
>  function GetColumnInfo(N)=DictObj'GetColumnInfo(LogFile$,N)  
>  function GetIolist$()=cpl(DictObj'GetIolist$(LogFile$))  
>  !  
>  ! Key Column methods  
>  !  
>  function GetKeyColumnCount()=DictObj'GetKeyColumnCount(LogFile$)  
>  function GetKeyColumnName$(N)=DictObj'GetKeyColumnName$(LogFile$,N)  
>  function GetKeyColumnInfo(N$)=DictObj'GetKeyColumnInfo(LogFile$,N$)  
>  function GetKeyColumnInfo(N)=DictObj'GetKeyColumnInfo(LogFile$,N)  
>  !  
>  function GetKeyIolist$()  
>  IO$=DictObj'GetKeyIolist$(LogFile$)  
>  if IO$<>"" \  
>  then IO$=cpl(IO$)  
>  return IO$  
>  !  
>  ! Key methods  
>  !  
>  function GetIndexCount()=DictObj'GetIndexCount(LogFile$)  
>  function GetIndexName$(N)=DictObj'GetIndexName$(LogFile$,N)  
>  function GetIndexInfo(N)=DictObj'GetIndexInfo(LogFile$,N)  
>  function GetIndexInfo(N$)=DictObj'GetIndexInfo(LogFile$,N$)  
>  function GetIndexDescription$(N)=DictObj'GetIndexDescription$(LogFile$,N)  
>  function GetIndexDescription$(N$)=DictObj'GetIndexDescription$(LogFile$,N$)  
>   
>  end def

#### **Note:**  
This example does not explicitly contain all the functions listed in the above table, **[PxPlus Interface Standard for Data Source Objects](Overview.htm#Mark1)**.  
  
The functions relating directly to file I/O, such as **ReadExact$( )** , **ReadFirst$( )** , **ReadNext$( )** , **CurrentKey$( )** and **NextKey$( )** , are derived from the ***views/fileio** object via the **LIKE** "_*views/fileio_ " statement.  
  
To list this object:  
  
**LOAD** "_*views/fileio.pvc_ ";__**PASSWORD** "_password_ "
