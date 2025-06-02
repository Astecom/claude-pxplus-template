# External Databases

**Creating a Link File**|   
---|---  
  
An external database link file is a PxPlus link file that allows you to open the link file and makes an external database connection as defined in the link file. Creating an external database link file is an effective way to simplify the use of external database connections in PxPlus programs. With it, you can move a PxPlus data file to an external database, define a link file to that external database table, and then name the link file using the name of the original PxPlus data file. This allows you to start using an external database without changing your programs that use the data.

An external database link file is a [Pvxdev] **[Link File](../../Printing/Print%20Drivers%20and%20Link%20Files/Overview.htm#Mark2)** that points to a device driver, ***dev/extdb**. This device driver program allows the definition of a connection to an external database.

Link files can be created using the **[Database Import Utility](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Database%20Import.md)** and/or the **[Bulk Database Export Utility](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Bulk%20Database%20Export.md)**. See also **[Using External Databases to Create a Data Dictionary](../../../Data%20Dictionary/Introduction.htm#external_db)**.

**_Link File Format_**

The first line is the typical line for a [Pvxdev] link file, pointing to the device driver, ***dev/extdb,** and the subsequent lines define the connection:

|  _Line 1:_ |  Link File Definition (256 characters)  
---|---|---  
|  _Line 2:_ |  Database Type  
|  _Line 3:_ |  Database Name  
|  _Line 4:_ |  Table Name  
|  _Line 5 (and higher):_ |  Options  
  
**_Example:_**

[Pvxdev]. extdb   
ADO  
ServerName  
TableName  
DB=databaseName  
NONULLS=YES  
Connect='Provider=SQLOLEDB;'  
EXTROPT=(UPDLOCK)  
DATEFMT=YYYYMMDD  
KEY=fieldOne,*NAME:KeyOne  
KEY=fieldTwo,fieldThree,*NAME:KeyTwo  
REC=fieldOne:12,fieldTwo:40,fieldThree:6.2,fieldFour:6.0  
---  
  
Any line in the link file (after the first line) that starts with an **=** (_equals sign_) will be evaluated. This is useful as you can safely define the User Name and Password for the database connection without saving them to a plain text file. You can specify them in the link file as an expression that evaluates a global variable where it is defined. In this way, your program can define the User Name and Password in a global variable, and your program can be passworded so that it is encrypted.

This can be done by first adding the following two lines below the "ServerName" line in the link file example above:

> ="USER="+%adoUser$  
>  ="PSWD="+%adoPswd$

Then, in one of your programs, you can define %adoUser$ and %adoPswd$. Make sure that the program is passworded so that it is encrypted.

The IOL= and OPT= on the OPEN of the link file will be passed on to the external database OPEN. Any OPT= on the OPEN of the link file overrides the OPT= defined in the link file.

**_Example:_**

> Suppose that you have a link file called "InvoicesFromDB2" that defined a DB2 connection to the Invoices table and was also defined with a date format: DATEFMT=YY/MM/DD.

> If you only do an OPEN (1)"InvoicesFromDB2", the options defined in the link file will be used (i.e. the date format will be YY/MM/DD).

> If you want to open the same table from the DB2 database but need a different date format, you could override the default date format by using OPT= on the OPEN of the link file:

> OPEN (1,OPT="DATEFMT=YYYY-MM-DD")"InvoicesFromDB2"

> This would open the Invoices table in DB2 but use YYYY-MM-DD as the date format instead of the default YY/MM/DD format defined in the link file.

When dealing with passwords, an alternative to the method described above is to leave the User Name and Password out of the link file and specify it in the OPT= of the OPEN of the link file. The OPT= specified on the OPEN of the link file will be used for the OPEN of the external database connection.

## Using a Link File

Suppose that you created a link file called "ADOProduct" that defined an ADO connection to the Product table. To use it, simply do an OPEN of the link file:

> OPEN (chan,IOL=*)"ADOProduct"

This will cause the link file to be processed, which will then make a connection to the external database as defined in the link file. It would be as if "ADOProduct" was a PxPlus data file to your program even though it is an external database table.

## See Also

**[Creating the Prefix File](Creating%20the%20Prefix%20File.md)**
