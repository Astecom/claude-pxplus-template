# Views System  
  
**Accessing View Data** |  **__**  
---|---  
  
Two run-time interfaces are provided for extracting data based on a view definition: the **[View Object](Overview.htm#viewobject)** and the **[PxPlus SQL ODBC Driver](Overview.htm#odbcdriver)**. Views can also be used as a source of data for the **[Query Subsystem](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Overview.md)**, the **[Report Writer](../../Report%20Writer/Introduction.md)** and the **[*VIEW*](../../file_handling/~view~.md)** special file handling interface.

##  View Object

From PxPlus, the ***views/view** object returns the data for a view. The following command creates a view:

> new("*views/view")

This object is used to gain access to the output of a view definition. When using this object, the view definition files _(pvxview.*)_ and potentially the data dictionary _(providex.ddf/.dde)_ files must be accessible; i.e. via the **[PREFIX](../../directives/prefix.md)** directive. Failure to have these files present will result in an Error 12 during object initialization.

This table lists the properties and methods for the **view** object.

**Properties** |  **Description**  
---|---  
**Version** |  View object version number.  
**Methods** |  **Description**  
**Close( )** |  Closes the current view. Not required as this is done on object deletion automatically and whenever a new view is opened.  
**ClearRestrict( )** |  Clear all external restrictions set for the view using the **Restrict( )** method.  
**CurrentKey$(**_kno_**)** |  Returns either the value of the current record based on _kno_ or a _null_ on error.  
**GetColumnInfo(**_colnum_ _| colname$_**)** |  Returns a **ColumnInfo** object that contains a description of the column. This object is static and will be reused on all subsequent calls to this function. It will be released when the object is released. You can pass either a column number or name. The name may contain a trailing $.  
**GetColumnCount( )** |  Returns the number of columns present in the view.  
**GetColumns$( )** |  Returns a comma-separated list of column names. Columns that are **[Calculated Items](../View%20Maintenance/Define%20Calculated%20Items.md)** are always at the end of the list.  
**GetFakeDictEntry$(**_colnum_**)** |  Returns a _providex.dde_ format record containing column information based on _colnum_. Used by the PxPlus SQL ODBC Driver and the Query Subsystem.  
**GetIndexCount( )** |  Returns the number of indices on the primary data source of the view.  
**GetIndexDescription$(**_kno_ _| keyname$_**)** |  Returns a list of the column descriptions that were used to make up the index, each separated by a plus sign.  
**GetIndexInfo(**_kno_ _| keyname$_**)** |  Returns an **IndexInfo** object that contains a description of the index. This object is static and will be reused on all subsequent calls to this function. It will be released when the object is released. You can pass either an index number or name.  
**GetIndexName$(**_kno_**)** |  Returns the name of the specified index.  
**GetIolist$( )** |  Returns an uncompiled IOList for the view. Columns that are **[Calculated Items](../View%20Maintenance/Define%20Calculated%20Items.md)** are always at the end of the list.  
**GetKeys(**_kno_**)** |  Returns either the value of the current record based on _kno_ or a _null_ on error.  
**Open(**_viewname_ _$_**)** |  Opens the specified view and initializes its structures. Returns 1 if successful.  
**ReadBlock(**_blksz_**)** |  Returns block of records up to _blksz_ bytes in size. Minimum size is 1024. Used by the PxPlus SQL ODBC Driver. The first two bytes contain the total number of records in the block. This is followed by 4 bytes containing the first record's length followed by _n_ bytes of data, then another 4 bytes containing the next record's length followed by _its_ data, and so on.  
**ReadExact$(**_keyval_ _$,kno_**)** |  Returns the record whose key matches exactly the key specified.  
**ReadFirst$(**_keyval_ _$_ [, _kno_ ]**)** |  Initiates the return of view data. Returns the first row of data starting at the key specified based on key number (_optional_). If no key number is specified, it uses the key specified in the view definition. Returns the first record or _null_ if no records found.  
**ReadNext$( )** |  Returns the next row of data from the view or a _null_ record if no more records are found.  
**Restrict(**_colno_ _, op, comp_val$,_ [_case_]**)** |  Adds external filters to a view. **_Where:_** |  _colno_ |  Number of the column to be filtered.  
---|---  
_op_ |  Numeric value representing the following operators: |  1 |  Equal to ( = )  
---|---  
2 |  Not equal to ( <> )  
3 |  Less than or equal to ( <= )  
4 |  Less than ( < )  
5 |  Greater than or equal to ( >= )  
6 |  Greater than ( > )  
_comp_val_ _$_ |  String containing the value to be compared/tested.  
_case_ |  Flag indicating case: |  0 |  Case sensitive **(_Default_)**  
---|---  
1 |  Case insensitive  
  
#### **Note:  
** The PxPlus SQL ODBC Driver may ignore the case flag.  
  
For example, x'restrict(1,1,"ABC") would set up a filtering condition to test if the value in the first field (column 1) is equal to the string ABC. If the column to be tested is numeric, the value will be converted internally to correspond to the column type. This returns 1 if the filtering parameters are valid.  
  
**_Example:_**

To access the data in a view, the common sequence would be:

> V=new("*views/view") ! Create the View object  
> V'open(viewname$) ! Open the specified View  
> V'restrict(3,2,"0") ! Optional external restriction  
>  R$=V'readfirst$("") ! Retrieve the first record in the file  
>  while R$<>""  
>  gosub Process_Record  
>  R$=V'readnext$() ! Get the next record  
>  wend  
> V'close() ! Close is optional  
>  drop object V ! Destroy the View object  
>  end

The following is a sample program to access a View object:

> 00010 ! Sample.vue - Sample program to access view data   
> 00020 ! ! - Return the first n records   
> 00030 !   
>  00100 ! !^100   
>  00110 MAIN:   
>  00120 process "Select_View","*views/views.en",view$   
>  00130 if view$<>"" \   
>  then process "ViewTest","yourlib.en",view$;   
>  goto 0120   
>  00140 end  
>  01000 !^1000   
>  01010 DISPLAY_VIEW:   
>  01020 view$=arg_1$,data$="",rec_cnt=0   
>  01030 list_box load view_data.ctl,""   
>  01040 if vu<>0 \   
>  then drop object vu;   
>  vu=0   
>  01050 vu=new("*views/view") ! Create a new View object   
>  01060 vu'open(view$) ! Open the View and initialize its structures   
>  01070 column_list$=vu'getcolumns$() ! Get comma-separated column list   
>  01080 list_box_fmt$="["+sub(column_list$,",","]L10 [")+"]L10"   
>  01090 view_data.ctl'fmt$=list_box_fmt$   
>  01100 r$=vu'readfirst$("");   
>  if r$="" \   
>  then msgbox "Nothing to display";   
>  goto DISPLAY_DONE ! Retrieve the first record (NULL=eof)   
>  01110 while r$<>""   
>  01120 data$+=r$+$01$   
>  01130 rec_cnt++;   
>  if rec_cnt<row_count \   
>  then r$=vu'readnext$() \   
>  else r$="" ! Retrieve the next record (limit row_count)   
>  01140 wend   
>  01150 list_box load view_data.ctl,data$   
>  01160 DISPLAY_DONE:   
>  01170 vu'close() ! Close is optional   
>  01180 drop object vu;   
>  vu=0 ! Destroy the object   
>  01190 return

To execute the above program, copy the **ViewTest** panel in the _*views/views.en_ panel library to your own library and change the _Default Program_ in the panel header to the above program. Change the _Library Name_ in Line 130 of _sample.vue_ to the name of your panel library.

#### **Note:**  
**Select_View** is a panel in the _*views/views.en_ library that can be processed in order to display and select existing views. It has one argument that passes the name of the selected view (or _null_ if no view is selected).

An alternate way to access views data allows you to programmatically alter a views definition before the data is retrieved:

> VCtl=new("*views/viewctl",err=*end) ! Create the ViewCtl object  
>  Vu=VCtl'Load("View: Customer") ! Load the view definition  
> VCtl'RemoveItem(Vu,"cls_desc") ! Alter the definition if desired  
>  View=new("*views/view",VCtl) ! Create View object passing ViewCtl objid  
> View'Open(Vu) ! Open the view using the objid from the load

Behind the scenes, the following is happening within the view object:

|  **_On_Create_** |  Validates the **ViewCtl** object identifier  
---|---|---  
|  **Open( )** method |  Validates the **ViewDef** object identifier  
|  **Misc.** methods |  Access view information from **ViewCtl** rather than definition files  
|  **_On_Delete_** |  Does not drop the **ViewCtl** object  
  
##  PxPlus SQL ODBC Driver

Views can be set up for ODBC access in products such as Crystal Reports or MS-Excel. **[PxPlus SQL ODBC Driver](../../odbc/pxplus_odbc.md)** (version 3.30 or later for Windows systems, version 4.20 or later for UNIX/Linux systems) recognizes views and allows them to be opened much like any other PxPlus file/table.

This means that the local driver or file server must have access to a licensed copy of PxPlus. On **_Windows_** , this requires PxPlus version 5.11 or later. On **_UNIX/Linux_** , this requires PxPlus version 7.5 or later.

#### **Note:**  
When retrieving data from a views source via the _Get External Data_ feature in MS-Access, use the _Import_ option, rather than the _Link Tables_ option. This is necessary because the type of information required by MS-Access to continually refresh the data is not available due to the dynamic nature of the views interface.

## Data Source Configuration

To access views via ODBC, it is necessary to specify paths to _pvxwin32.dll_ (e.g. _C:/pvx_) on **_Windows_** systems or _libpvx.so_ (e.g. _/pvx_) on **_UNIX/Linux_** systems, as well as the views definition files (_pvxview.*_ suite of files) in the Data Source Configuration for the PxPlus SQL ODBC Driver.

The PxPlus SQL ODBC Driver is configured using the **ODBC Data Sources** application. This can be accessed via the Windows Start menu and searching for _ODBC Data Sources_. You will see two applications: _ODBC Data Sources (32-bit)_ and _ODBC Data Sources (64-bit)_. Select the one that matches the architecture of the PxPlus SQL ODBC Driver you are trying to configure. See **[PxPlus SQL ODBC Driver Configuration Procedures](../../odbc/configuration_procedures.md)**.

The **PxPlus 32-bit ODBC Setup** dialog allows you to specify paths to the necessary files:

PxPlus SQL ODBC Driver version 3.30  
** _(Windows Only)_** |  Specify the directory path to the _pvxwin32.dll_ using the _Prefix_ field. Specify paths to the views definitions files using the _Prefix_ field unless the path is the same as that defined for the database directory.  
---|---  
PxPlus SQL ODBC Driver version 3.31 and later  
** _(Windows Only)_** |  Specify the directory path to the _pvxwin32.dll_ using the _Views DLL_ field under the _Options_ folder. Specify paths to the views definitions files using the _Prefix_ field unless the path is the same as that defined for the database directory.  
PxPlus SQL ODBC Driver version 4.20 and later |  Specify the directory path to the _pvxwin32.dll_ on **_Windows_** systems or to the _libpvx.so_ shared object on **_UNIX/Linux_** systems using the _Views DLL_ field under the _Options_ folder. Specify paths to the views definitions files using the _Prefix_ field unless the path is the same as that defined for the database directory.  
  
## Filtering the Data

To optimize driver performance, data is pre-filtered by the view object before being passed to the PxPlus SQL ODBC Driver. Filters can be set up in a view definition. See **[Define Filters](../View%20Maintenance/Define%20Filters.md)**.

Filters can also set up in a target application's database query definition. The PxPlus SQL ODBC Driver passes filter criteria from the query to the view object before issuing a request for data.
