# SQL Interface Objects 

**SQL Objects - Sample Program** |  **__**  
---|---  
  
This sample program illustrates the functionality of the SQL objects (properties and methods) that were listed and described in the previous pages. It uses the **odbsql** object to display information about the database and read records from the orders table found in a Microsoft Access database.

> ! Create A Sql ODBC Data Base Object   
>  s=new("*dict\odbsql")   
>  !   
>  ! Check Result   
>  if s=0 then \   
> msgbox "Unable to create sql object"; \   
>  exit \   
> end_IF   
>  !   
>  ! Show all the Properties and Methods Available   
>  print 'cs'   
>  print s'*   
>  !   
>  ! Connect to a Microsoft Access DataBase which is called Access and I   
>  would like to be connect to table Orders   
> ph= s'Connect ("Access;Orders")   
>  ! Check Result   
>  if ph=0 then \   
> msgbox "PxPlus error: "+ str ( s'lastpvxerr) + sep + "OS Error   
>  Message: "+s'oserrormsg$ ;\   
>  exit \   
> end_IF   
>  !   
>  !Show Tables all tables in Access Data Base   
>  ! GetTableCount   
> tb$="Orders"   
>  print sep+sep   
>  print "Total number of tables : ",s'gettableCount()   
>  print "Table List : ",s'gettablelist$(",")   
>  print "Table 'Orders' has ",s'getcolumncount(tb$)," columns"   
>  print "Column list : ",s'getcolumnlist$(tb$,",")   
>  ! Create a column object comprised of the information found in Table   
>  Order Header column 2   
>  c=s'getcolumninfo(tb$,2)   
>  print "Column '",c'name$,"' length=",c'length,"   
>  description=",c'description$   
>  print ""   
>  print "Number of indexes in table '",tb$,"' is ",s'getindexcount(tb$)   
>  print "The names of these indexes are ",s'getIndexlist$(tb$,",")   
>  ! Create an index object comprised of the information found in Table Order   
>  Header index 2   
> i= s'getindexinfo (tb$,2)   
>  print "Index '"+i'name$+"' has ",i'segcount," segments"   
> i'segment(1)   
>  for t=1 to i'segno   
>  print "Segment ",t," is made up of column "+i'columnname$   
> i'segment(t)   
>  next t   
>  !   
>  print sep+sep   
>  Print "Table 'Orders' iolist: ",s'getiolist$(tb$)   
>  Print "Lets read the first record and put the data into the iolist"   
>  l$=cpl(s'getiolist$(tb$))   
>  read record (ph,err=*break)r$   
>  read data from r$ to iol=l$   
>  print "OrderID= ",orderid  
>  !   
>  ! Drop sql object   
>  drop object s
