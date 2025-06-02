# Subordinate Objects  
  
**DS_Link** |  **__**  
---|---  
  
The **DS_Link** subordinate object is used to define relationships between data sources. One object is defined for each relationship. **DS_Link** corresponds to a record in the _pvxview.lnk_ file.

For information on the _pvxview.lnk_ file structure, see **[Views System File Structures](../Views%20System%20File%20Structures/Overview.htm#lnk)**. Properties are read only and are set using corresponding **Set _xxx_( )** methods.

## DS_Link Properties

The following table lists the properties of the **DS_Link** subordinate object:

**Property** |  **Description**  
---|---  
**Description$** |  Link name - description used to identify link.  
**InternalID$** |  Internal identifier for link.  
**KeyDef$** |  Key expression to read the linked data source.  
**Key$** |  Related key number/name.  
**NoDataOption$** |  Options if no corresponding linked records found: |  1 |  Return null data for subordinates **_(Default)_**  
---|---  
2 |  Display an *****  _asterisk_ in string field  
3 |  Skip the record  
**ParentSource** |  Object identifier for parent **DataSource** object.  
**Prefix$** |  Record prefix for the link file.  
**Source** |  Object identifier for the linked data source.  
**SourceID$** |  Internal identifier of the linked data source.  
**Type$** |  Type of relationship: |  1 |  One-to-one **_(Default)_**  
---|---  
***** |  One-to-many (Key expression used as range)  
  
## DS_Link Methods

The following table lists the methods of the **DS_Link** subordinate object:

**Method** |  **Description**  
---|---  
**SetDescription(**_Desc_ _$_**)** |  **_(Internal Use Only)_** Set link description used to identify the link. Use **ViewCtl** equivalent.  
**SetInternalID(**_InternalID_ _$_**)** |  **_(Internal Use Only)_** Set the internal identifier for the link.  
**SetKeyDef(**_KeyDef_ _$_**)** |  Set key expression to read the linked data source.  
**SetKey(**_kno_ _$_**)** |  Set related key number/name.  
**SetNoDataOption(**_Option$_**)** |  Set options if no corresponding linked records found: |  1 |  Return _null_ data for subordinate fields  
---|---  
2 |  Display an *****  _asterisk_ in string fields  
3 |  Skip the record  
**SetPrefix(**_Prefix$_**)** |  Set record prefix for the link file.  
**SetSource(**_ObjID_**)** |  **_(Internal Use Only)_** Set object identifier for the linked data source.  
**SetSourceID(**_SourceID_ _$_**)** |  **_(Internal Use Only)_** Set internal identifier of the linked data source.  
**SetType(**_Type$_**)** |  Set type of relationship: |  1 |  One-to-one  
---|---  
2 or ***** |  One-to-many (Key expression used as range)  
  
## Example

The following sample program _DefView_ clears the view definition files, then reads through the PxPlus Data Dictionary files _(providex.ddf/.dde)_ , using them to create a data source and view definition for every file. Groups are also created based on the Dictionary groups. Note that file relationships are not defined in this program.

> ! DefView  
>  ! Reset the files  
>  erase "pvxview.vue",err=*next  
>  erase "pvxview.src",err=*next  
>  erase "pvxview.lnk",err=*next  
>  erase "pvxview.itm",err=*next  
>  erase "pvxview.grp",err=*next  
>  erase "pvxview.gpd",err=*next  
>  !  
>  open (hfn,iol=*)"providex.ddf";  
>  ddf_fn=lfo  
>  !  
>  ! Clean the view references out of the ddf file  
>  select * from ddf_fn begin "" end $FE$  
>  if mid(PhysicalPath$,1,3)="="+quo+"@" \  
>  then remove (ddf_fn,key=kec(ddf_fn))  
>  next record  
>  !  
>  ! Create the Views Definition object  
>  Vctl=new("*views/viewctl",err=*end)  
>  !  
>  ! Cycle through the providex.ddf file, creating a datasource for each file  
>  select * from ddf_fn begin "" end $FE$  
>  if kec(ddf_fn)="000000" or mid(PhysicalPath$,1,3)="="+quo+"@" \  
>  then continue ! skip global dictionary and views  
>  print Name$  
>  ds=Vctl'AddDataSource("L",Name$);  
>  if ds=0 \  
>  then msgbox "VError="+str(Vctl'VError),"Add DataBase";  
>  exitto All_Done  
>  Vctl'AddItem(ds,"*")  
>  !  
>  ! Create a view for each data source  
>  vu=Vctl'AddView(ds);  
>  if vu=0 \  
>  then msgbox "Verror="+str(Vctl'VError),"Add View";  
>  goto All_Done  
>  !  
>  Count=ds'GetItemCount()  
>  if Count>0 \  
>  then for i=1 to Count;  
>  vu'AddItem(str(ds'GetItem(i)));  
>  next i  
>  !  
>  ! Create the group (if necessary) and assign the datasource and view to it  
>  if Group$<>"" \  
>  then grp=Vctl'LoadDataGroup(Group$);  
>  if grp=0 \  
>  then grp=Vctl'AddDataGroup(Group$) \  
>  end_if ;  
>  Vctl'AssignToDataGroup(ds,grp);  
>  Vctl'AssignToDataGroup(vu,grp)  
>  !  
>  ! Write the datasource, view and group definitions to disk  
>  Vctl'Save()  
>  !  
>  ! Get ready for the next file  
>  Vctl'Clear()  
>  next record  
>  !  
> All_Done:  
>  drop object Vctl  
>  close (ddf_fn)  
>  end
