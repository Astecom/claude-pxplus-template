# SQL Interface Objects   
  
**Legacy SQL Objects** |  **__**  
---|---  
  
The following _legacy_ objects are still available for use:

|  **odbsql** |  Legacy open database connectivity object. Use **db_odb** for improved functionality.  
---|---|---  
|  **ocisql** |  Legacy object to access a Oracle database file. Use **db_oci** for improved functionality.  
|  **db2sql** |  Legacy object to access a DB2 database file. Use **db_db2** for improved functionality.  
  
The methods and properties from the legacy objects remain compatible with the new objects. Methods are organized according to functionality: **[Connectivity](Legacy%20SQL%20Objects.htm#connectivity)**, **[Table Operations](Legacy%20SQL%20Objects.htm#table)**, **[Column Operations](Legacy%20SQL%20Objects.htm#column)** and **[Index Operations](Legacy%20SQL%20Objects.htm#index)**.

For descriptions of subordinates to the primary SQL database objects, see **[Subordinate SQL Objects](Subordinate%20SQL%20Objects.md)**.

**Properties** |  **Description**  
---|---  
**ConnectOption$** |  **_(Read Only)_** Current connect options. **_Example:_** print sql'ConnectOption$  
USER=guest;PSWD=******  
**LastMethodErrMsg$** |  **_(Read Only)_** Contains reason why last executed method failed.  
**LastOsErrorMsg$** |  **_(Read Only)_** Contains PxPlus MSG(-1) of the last error.  
**LastPvxErr** |  **_(Read Only)_** Contains last encountered PxPlus error.  
**LastSqlStatment$** |  **_(Read Only)_** Contains last SQL statement that caused the method to fail.  
  
##  Connectivity

The methods are:

**Methods - Connectivity** |  **Description**  
---|---  
**ClearConnectOption**( ) |  Clear all connect options.  
**Connect**(_sid_ _$_ | _dsn_ _$_) |  If **odbcsql** , then name of the ODBC database DSN  
  
If **ocisql** , then Oracle system ID of file to open. If not supplied, then the value of the environment variable ORACLE_SID is used.   
  
If **db2sql** , then you supply the name of a DB2 database.

#### **Note:   
**During the connect method, all options set in **ConnectOption** will be passed to the **Connect** statement.  
  
If a table name is set during the connect, then all update, rename, delete, add and modify methods will not be allowed.  
  
**ReturnConnectOption**(_opt$_)  
**ReturnConnectOption**(_opt$_ , _sep_ _$_) |  Return list of all the value(s) set by this connect option. The default separator is a Hex$8A$; however, you can specify the _sep_ _$_ to be used.  
**SetConnectOption**(_opt$_ , _val_ _$_) |  Set, modify and remove the **OPEN** options for connecting to an Oracle server, PxPlus SQL ODBC Driver, or DB2 server **_Example:_** sql'SetConnectOption("USER","guest")  
\- Sets option sql'SetConnectOption("USER","user1")  
\- Modifies option sql'SetConnectOption("USER","")  
\- Removes this option only

#### **Note:_  
_** Options that may have more than one value must be set individually.

sql'SetConnectOption("KEY","Name")  
\- Sets option sql'SetConnectOption("KEY","Company")  
\- Adds another KEY option  
**SetConnectString**(_val_ _$_) |  Set all the connect options with one statement. **_Example:_** sql'SetConnectString("USER=scott;PSWD=foobar;KEY=Name;KEY=ID")  
  
##  Table Operations

The methods are:

**Methods - Table Operations** |  **Description**  
---|---  
**AddTable**(_obj_) |  Add new table based on the information supplied by the table object. If the database connection rules require at least one column, then a dummy column will be created (i.e. Default Column + Table Objects Name). This dummy column will be type **_char_**.  
**AddTable**(_obj_ , _colobjs_ _$_)  
**AddTable**(_obj_ , _colobjs_ _$_ , _idxobjs_ _$_) |  Add new table based on the information supplied by the table object. Add each column based on the comma-separated list of column objects passed in. Add each index based on the comma-separated list of index objects passed in. **_Example:_**  
  
colobjs$=(100002,100003,100004)  
idxobjs$=(100005)  
**Sql'AddTable**(_obj_ _, colobjs$, idxobjs$_)  
**DropTable**(_table$_) |  Delete table and all its related information.  
**GetIOList$**(_table$_) |  Return tables IOList.  
**GetTableCount**( ) |  Return number of tables presently found.  
**GetTableInfo**(_table$_) |  Return table information object containing information about the table. This object is static and will be reused on all subsequent calls to this method. It will be released when the database object is released.  
**GetTableList$**(_sep_ _$_) |  Return list of all the tables presently found in the currently set connection. The default separator is a Hex $8A$; however, you can specify the _sep_ _$_ to be used.  
**RenameTable**(_oldname_ _$_ , _newname_ _$_) |  Rename the table.  
  
##  Column Operations

The methods are:

**Methods - Column Operations** |  **Description**  
---|---  
**AddColumn**(_table$_ , _obj_) |  Add new column based on the description supplied by the column object.

#### **Note:   
**No control is given over the column number that will be assigned to the column or its placement in the table.  
  
**DropColumn**(_table$_ , _colnum_ __ | _colname_ _$_) |  Delete data column and its information from the table.  
**GetColumnCount**(_table$_) |  Return total number of data columns present in the specified table.  
**GetColumnInfo**(_table$_ , _colnum_ __ | _colname_ _$_) |  Return column object containing information about the data column. This object is static and will be reused on all subsequent calls to this function. It will be released when the database object is released. You can pass either a data column number or name. The name may contain a trailing **$**.  
**GetColumnList$**(_table$_ , _sep_ _$_) |  Return a list of all data column names for the specified table. The default separator is a Hex$8A$; however, you can specify the _sep_ _$_ to be used.  
**GetColumnName$**(_table$_ , _colnum_) |  Return queried data column's name, which is type independent. Strings will not have a trailing **$**.  
**GetColumnNo**(_table$_ , _colname_ _$_) |  Return queried data column's number.  
**GetColumnVariable$**(_table$_ , _colnum_ __ | _colname_ _$_) |  Return queried data column's variable name. String variables will return the variable with a trailing **$**.  
**RenameColumn**(_table$_ , _oldname_ _$_ , _newname_ _$_) |  Rename the column.  
**UpdateColumn**(_table$_ , _obj_) |  Update column information based on the changes occurred by the column object.  
  
##  Index Operations

The methods are:

#### **Note:**  
If a key was set in the Connect option, then only this information will be returned.

**Methods - Index Operations** |  **Description**  
---|---  
**AddIndex**(_table$_ , _obj_) |  Add new index to the table based on the information in the index object. The new index will be assigned the next highest index number.  
**DropIndex**(_table$_ , _indexnum_ __ | _indexname_ _$_) |  Delete index and its information from the table.  
**GetIndexCount**(_table$_) |  Return total number of indexes present on the specified table.  
**GetIndexDescription$**(_table$_ , _indexnum_ __ | _indexname_ _$_) |  Return list of column descriptions that were used to make up the index, each separated by a **+** (_plus sign_). If no description exists, then the column name will be used.  
**GetIndexInfo**(_table$_ , _indexnum_ __ | _indexname_ _$_) |  Return index object containing information about the index. This object is static and will be reused on all subsequent calls to this function. It will be released when the object is released. You can pass either an index number or name.  
**GetIndexList$**(_table$_ , _sep_ _$_) |  Return a list of indexes for the specified tables. If the index does not have a name, then a **#** followed by the index number will be in the list. The default separator is a Hex$8A$; however, you can specify the _sep_ _$_ to be used.  
**GetIndexName$**(_table$_ , _indexnum_) |  Return name of the specified index. If the index does not have a name, then a **#** followed by the index number will be returned.  
**RenameIndex**(_table$_ , _oldname_ _$_ , _newname_ _$_) |  Rename index.  
**UpdateIndex**(_table$_ , _obj_) |  Update index information based on the changes occurred by the index object.
