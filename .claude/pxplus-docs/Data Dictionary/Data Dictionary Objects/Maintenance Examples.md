# Data Dictionary Objects 

**Maintenance Examples** |  **__**  
---|---  
  
These sample programs illustrate the functionality of the **[DataBase and PVXDb Objects](DataBase%20and%20PVXDb%20Objects.md)**. Examples include **[Creating a New Data Dictionary](Maintenance%20Examples.htm#creating)** and **[Embedding a Definition](Maintenance%20Examples.htm#embeddingdef)**.

## Example 1

**Creating a New Data Dictionary**

This program builds a completely new PxPlus data dictionary, creates the physical file, and then writes records into it.

> ! Set My Work Directory   
>  cwdir "c:\MyData"   
>  ! Create A DataBase Object   
>  db=new("*dict\database")   
>  !   
>  ! Check Result   
>  if db=0 then \   
>  msgbox "Unable to create database object"; \   
>  exit \   
>  end_IF   
>  !   
>  ! Show all the Properties and Methods Available   
>  print 'cs'   
>  print db'*   
>  !   
>  ! Create a new PxPlus Data Dictionary at location c:\MyData   
>  r= db'CreateDataBase ("")   
>  ! Check Result   
>  if r=0 then \   
>  msgbox "Unable to create database"; \   
>  exit \   
>  end_IF   
>  !   
>  ! Set the DataBase files to use (providex.ddf providex.dde)   
>  r= db'SetDataBase ("")   
>  ! Check Result   
>  if r=0 then \   
>  msgbox "Unable to set database"; \   
>  exit \   
>  end_IF   
>   
>  ! Create a Table Object   
>  t=new("*dict/tblinfo")   
>  !   
>  ! Check Result   
>  if t=0 then \   
>  msgbox "Unable to create table object"; \   
>  exit \   
>  end_IF   
>  !   
>  ! Show all the Properties and Methods Available   
>  print 'cs'   
>  print t'*   
>  !   
>  ! Set Properties   
>  t'Name$="Order Header"   
>  t'Group$="Order Entry"   
>  t'Description$="Our Order Header File"   
>  t'PhysicalFile$="OrdH "   
>  !   
>  !Add New Table to Data Dictionary   
>  r=db'AddTable(t)   
>  ! Check Result   
>  if r=0 then \   
>  msgbox "Unable to add table"; \   
>  exit \   
>  end_IF   
>  !   
>  ! Create a Column Object   
>  c=new("*dict/colinfo")   
>  !   
>  ! Check Result   
>  if c=0 then \   
>  msgbox "Unable to create column object"; \   
>  exit \   
>  end_IF   
>  !   
>  ! Show all the Properties and Methods Available   
>  print 'cs'   
>  print c'*   
>  !   
>  ! Set Properties   
>  c'Initvalues ()   
>  c'Name$="Number"   
>  c'Description$="Order Number"   
>  c'Type$="S"   
>  c'Length=20   
>  c'InternalFormat$="D"   
>  !   
>  ! Add Column to Table   
>  r= db'AddColumn ( t'Name$,c)   
>  ! Check Result   
>  if r=0 then \   
>   
>  msgbox "Unable to add column"; \   
>  exit \   
>  end_IF   
>  !   
>  ! Set Properties   
>  c'Initvalues ()   
>  c'Name$="ClientId"   
>  c'Description$="Client ID"   
>  c'Type$="S"   
>  c'Length=6   
>  c'InternalFormat$="D"   
>  !   
>  ! Add Column to Table   
>  r= db'AddColumn ( t'Name$,c)   
>  ! Check Result   
>  if r=0 then \   
>  msgbox "Unable to add column"; \   
>  exit \   
>  end_IF   
>  !   
>  ! Set Properties   
>  c'Initvalues ()   
>  c'Name$="Amount"   
>  c'Description$="Taxable Amount"   
>  c'Type$="N"   
>  c'Length=10   
>  c'InternalFormat$="D"   
>  c'Scale=2   
>  !   
>  ! Add Column to Table   
>  r= db'AddColumn ( t'Name$,c)   
>  ! Check Result   
>  if r=0 then \   
>  msgbox "Unable to add column"; \   
>  exit \   
>  end_IF   
>  !   
>  ! Create an Index Object   
>  i=new("*dict/idxinfo")   
>  !   
>  ! Check Result   
>  if i=0 then \   
>  msgbox "Unable to create index object"; \   
>  exit \   
>  end_IF   
>  !   
>  ! Show all the Properties and Methods Available   
>  print 'cs'   
>  print i'*   
>  !   
>  ! Set Properties   
>  i'Name$="ByOrderNumber"   
>  i'IsUnique=1   
>  r= i'AddSegment ()   
>  ! Check Result   
>  if r=0 then \   
>  msgbox "Unable to create index segment"; \   
>  exit \   
>  end_IF   
>  ! Set the Key Segment by Getting the DataBase Column Name of Column   
>  number 1   
>  i'columnName$=db'GetColumnName$(t'Name$,1)   
>  i'ColumnAttr$="A"   
>  !   
>  ! Add Index to Table   
>  r= db'AddIndex (t'Name$,i)   
>  ! Check Result   
>  if r=0 then \   
>  msgbox "Unable to add index"; \   
>  exit \   
>  end_IF   
>  Drop object i   
>  !   
>  ! Create an Index Object   
>  i=new("*dict/idxinfo")   
>  !   
>  ! Check Result   
>  if i=0 then \   
>  msgbox "Unable to create index object"; \   
>  exit \   
>  end_IF   
>  !   
>  ! Show all the Properties and Methods Available   
>  print 'cs'   
>  print i'*   
>  !   
>  ! Set Properties   
>  i'Name$="ByClientThenOrderNumber"   
>  i'IsUnique=1   
>  r= i'AddSegment ()   
>  ! Check Result   
>  if r=0 then \   
>  msgbox "Unable to create index segment"; \   
>  exit \   
>  end_IF   
>  ! Set the Key Segment by Getting the DataBase Column Name of Column   
>  number 1   
>  i'columnName$=db'GetColumnName$(t'Name$,2)   
>  i'ColumnAttr$="A"   
>  !   
>  r= i'AddSegment ()   
>  ! Check Result   
>  if r=0 then \   
>  msgbox "Unable to create index segment"; \   
>  exit \   
>  end_IF   
>  ! Set the Key Segment by Getting the DataBase Column Name of Column   
>  number 1   
>  i'columnName$=db'GetColumnName$(t'Name$,1)   
>  i'ColumnAttr$="A"   
>  ! Add Index to Table   
>  r= db'AddIndex (t'Name$,i)   
>  ! Check Result   
>  if r=0 then \   
>  msgbox "Unable to add index"; \   
>  exit \   
>  end_IF   
>  Drop object i   
>  !   
>  !Lets Create the Physical File   
>  r=db'CreateTable(t'Name$)   
>  ! Check Result   
>  if r=0 then \   
>  msgbox "Unable to create Physical File"; \   
>  exit \   
>  end_IF   
>  !   
>  !Drop the DataBase Object   
>  Drop object db   
>  Drop object t   
>  Drop object c   
>  !   
>  open (1,iol=*)"ordh"   
>  number$=dim(19,"0")+"1"   
>  ClientId$="MIKE"   
>  Amount=123.12   
>  Write (1)   
>  number$=dim(19,"0")+"2"   
>  ClientId$="PLUS"   
>  Amount=43.05   
>  Write (1)   
>  number$=dim(19,"0")+"3"   
>  ClientId$="PVX"   
>  Amount=567.45   
>  Write (1)   
>  close (1)   
>  !   
>  print 'cs'   
>   
>  open (1,iol=*)"ordh"   
>  print "Iolist of ordh: "+lst(iol(1))   
>  print "List of Key Names: "+fin(1,"key_names")   
>  print "List of Records by Key 0"   
>  Read Record (1)r$   
>  Print R$   
>  Read Record (1)r$   
>  Print R$   
>  Read Record (1)r$   
>  Print R$   
>  !   
>  close (1)   
>  print "List of Records by Key 1"   
>  open (1,iol=*)"ordh"   
>  Read Record (1,kno=1)r$   
>  Print R$   
>  Read Record (1,kno=1)r$   
>  Print R$   
>  Read Record (1,kno=1)r$   
>  Print R$   
>  !   
>  ! Create A DataBase Object   
>  db=new("*dict\database")   
>  !   
>  ! Check Result   
>  if db=0 then \   
>  msgbox "Unable to create database object"; \   
>  exit \   
>  end_IF   
>  !   
>  ! Set the DataBase files to use (providex.ddf providex.dde)   
>  r= db'SetDataBase ("c:\MyData")   
>  ! Check Result   
>  if r=0 then \   
>  msgbox "Unable to set database"; \   
>  exit \   
>  end_IF   
>  !   
>  ! GetTableCount   
>  print "Number of tables found in this PxPlus Data Dictionary are   
>  ",db'gettableCount()   
>  print "Number of columns in table '",db'gettablename$(1),"' are   
>  ",db'getcolumncount(db'gettablename$(1))   
>  print "These columns are: ",db'getcolumnlist$(db'gettablename$(1),",")   
>  ! Create a column object comprised of the information found in Table   
>  Order Header column 2   
>  c=db'getcolumninfo(db'gettablename$(1),2)   
>  print "Column '",c'name$,"' length=",c'length,"   
>  description=",c'description$   
>  print ""   
>  print "Number of indexes in table '",db'gettablename$(1),"' is   
>  ",db'getindexcount(db'gettablename$(1))   
>  print "The names of these indexes are   
>  ",db'getIndexlist$(db'gettablename$(1),",")   
>  ! Create an index object comprised of the information found in Table   
>  Order Header index 2   
>  i=db'getindexinfo(db'gettablename$(1),2)   
>  print "Index '"+i'name$+"' has ",i'segcount," segments"   
>  i'segment(1)   
>  print "Segment 1 is made up of column "+i'columnname$   
>  i'segment(2)   
>  print "Segment 2 is made up of column "+i'columnname$   
>  drop object db   
>  end

## Example 2

**Embedding a Definition**

This program uses the **pvxdb** object to manipulate the embedded data dictionary definition and update providex.ddf and providex.dde with new information.

> ! Set My Work Directory   
>  cwdir "c:\MyData"   
>  ! Create A Pvxdb Object   
>  db=new("*dict\pvxdb")   
>  !   
>  ! Check Result   
>  if db=0 then \   
>  msgbox "Unable to create pvxdb object"; \   
>  exit \   
>  end_IF   
>  !   
>  ! Show all the Properties and Methods Available   
>  print 'cs'   
>  print db'*   
>  !   
>  ! Set the Physical file to use (providex.ddf providex.dde)   
>  ph= db'open ("ordh")   
>  ! Check Result   
>  if ph=0 then \   
>  msgbox "Unable to set database"; \   
>  exit \   
>  end_IF   
>  !   
>  ! Create a Column Object   
>  c=new("*dict/colinfo")   
>  !   
>  ! Check Result   
>  if c=0 then \   
>  msgbox "Unable to create column object"; \   
>  exit \   
>  end_IF   
>  !   
>  ! Show all the Properties and Methods Available   
>  print 'cs'   
>  print c'*   
>  !   
>  ! Set Properties   
>  c'Initvalues ()   
>  c'Name$="OrderDate"   
>  c'Description$="Order Date"   
>  c'Type$="S"   
>  c'Length=8   
>  c'InternalFormat$="D"   
>  !   
>  ! Add Column to Table   
>  r= db'AddColumn ( ph,c)   
>  ! Check Result   
>  if r=0 then \   
>  msgbox "Unable to add column"; \   
>  exit \   
>  end_IF   
>  !   
>  !   
>  ! Create an Index Object   
>  i=new("*dict/idxinfo")   
>  !   
>  ! Check Result   
>  if i=0 then \   
>  msgbox "Unable to create index object"; \   
>  exit \   
>  end_IF   
>  !   
>  ! Show all the Properties and Methods Available   
>  print 'cs'   
>  print i'*   
>  !   
>  ! Set Properties   
>  i'Name$="ByOrderDate"   
>  i'IsUnique=1   
>  r= i'AddSegment ()   
>  ! Check Result   
>  if r=0 then \   
>  msgbox "Unable to create index segment"; \   
>  exit \   
>  end_IF   
>  ! Set the Key Segment by Getting the DataBase Column Name of Column number 1   
>  i'columnName$=db'GetColumnName$(ph,4)   
>  i'ColumnAttr$="A"   
>  !   
>  r= i'AddSegment ()   
>  ! Check Result   
>  if r=0 then \   
>  msgbox "Unable to create index segment"; \   
>  exit \   
>  end_IF   
>  ! Set the Key Segment by Getting the DataBase Column Name of Column number 1   
>  i'columnName$=db'GetColumnName$(ph,1)   
>  i'ColumnAttr$="A"   
>  ! Add Index to Table   
>  r= db'AddIndex ( ph,i)   
>  ! Check Result   
>  if r=0 then \   
>   
>  msgbox "Unable to add index"; \   
>  exit \   
>  end_IF   
>  !   
>  !Drop the DataBase Object   
>  Drop object db   
>  Drop object c   
>  Drop object i   
>  !   
>  open (1,iol=*)"ordh"   
>  number$=dim(19,"0")+"1"   
>  read (1,key=number$)   
>  OrderDate$="20050101"   
>  Write (1)   
>  number$=dim(19,"0")+"2"   
>  read (1,key=number$)   
>  OrderDate$="20050201"   
>  Write (1)   
>  number$=dim(19,"0")+"3"   
>  read (1,key=number$)   
>  OrderDate$="20050301"   
>  Write (1)   
>  close (1)   
>  !   
>  print 'cs'   
>  open (1,iol=*)"ordh"   
>  print "Iolist of ordh: "+lst(iol(1))   
>  print "List of Key Names: "+fin(1,"key_names")   
>  print "List of Records by Key 0"   
>  Read Record (1)r$   
>  Print R$   
>  Read Record (1)r$   
>  Print R$   
>  Read Record (1)r$   
>  Print R$   
>  !   
>  close (1)   
>  print "List of Records by Key 1"   
>  open (1,iol=*)"ordh"   
>  Read Record (1,kno=1)r$   
>  Print R$   
>  Read Record (1,kno=1)r$   
>  Print R$   
>  Read Record (1,kno=1)r$   
>  Print R$   
>  !   
>  close (1)   
>  print "List of Records by Key 2"   
>  open (1,iol=*)"ordh"   
>  Read Record (1,kno=2)r$   
>  Print R$   
>  Read Record (1,kno=2)r$   
>  Print R$   
>  Read Record (1,kno=2)r$   
>  Print R$   
>  !   
>  ! Create A DataBase Object   
>  db=new("*dict\pvxdb")   
>  !   
>  ! Check Result   
>  if db=0 then \   
>  msgbox "Unable to create pvxdb object"; \   
>  exit \   
>  end_IF   
>  !   
>  ! Open Physical file   
>  ph= db'Open ("ordh")   
>  ! Check Result   
>  if ph=0 then \   
>  msgbox "Unable to set database"; \   
>  exit \   
>  end_IF   
>  !   
>  ! GetTableCount   
>  print "Number of columns in table '",db'gettablename$(ph),"' are   
>  ",db'getcolumncount(ph)   
>  print "These columns are: ",db'getcolumnlist$(ph,",")   
>  ! Create a column object comprised of the information found in Table   
>  Order Header column 2   
>  c=db'getcolumninfo(ph,2)   
>  print "Column '",c'name$,"' length=",c'length,"   
>  description=",c'description$   
>  print ""   
>  print "Number of indexes in table '",db'gettablename$(ph),"' is   
>  ",db'getindexcount(ph)   
>  print "The names of these indexes are ",db'getIndexlist$(ph,",")   
>  ! Create an index object comprised of the information found in Table Order   
>  Header index 2   
>  i=db'getindexinfo(ph,2)   
>  print "Index '"+i'name$+"' has ",i'segcount," segments"   
>  i'segment(1)   
>  print "Segment 1 is made up of column "+i'columnname$   
>  i'segment(2)   
>  print "Segment 2 is made up of column "+i'columnname$   
>  drop object db   
>  end
