# Table Definitions  
  
**Record Selection**|   
---|---  
  
Because PxPlus has allowed users to evolve their applications, some developers have files that are not normalized. The following techniques are available for use in an INI file definition to convert a non-normalized data file logically into a normalized one.

##  Filtering the File Contents

This creates one logical table per record. The **MUSTBE** clause allows you to access specific record formats only. Any records found in the PxPlus data file that do not satisfy the MUSTBE condition are skipped. Filtering the file usually results in less rows in the logical tables than records in the physical data file.

##  Flattening the Data File

The **RECTYPE=** and ***RECTYPE** options allow you to create a logical table that contains all elements from all possible record formats. This preserves a one-to-one relationship between the rows in the logical table and the records in the physical file as all records can be represented as a row. This technique is compatible with migration to SQL.

##  Examples of Filtering and Flattening

This section describes how to represent non-normalized data file using either of the filtering or flattening techniques available in the PxPlus SQL ODBC Driver.

In this example, the non-normalized data file INVDTA has two record types.

**_Record Type 1_**

|  **Invoice_no** |  **Line_no**  
---|---  
|  **Line_count** |  **Customer_id** |  **Order_dt**  
---|---|---  
  
This is an invoice _header_ record with a key of Invoice_no and Line_no (000 pseudo line number) with data fields of Line_count, Customer_id, and Order_dt.

**_Record Type 2_**

|  **Invoice_no** |  **Line_no**  
---|---  
|  **Product_no** |  **Ord_qty** |  **Sale_price**  
---|---|---  
  
This is an invoice _detail_ record with a key of Invoice_no and Line_no with data fields of Product_no, Ord_qty, and Sale_price.

**_Filtering the Data_**

The example below filters the data in the INVDTA database by converting it into two data sources, [InvoiceHeader] and [InvoiceDetail], both logical tables based on the value in Line_no:

> [*Tables*]  
> InvoiceHeader=invdta  
> InvoiceDetailLines=invdta  
>   
>  [InvoiceHeader]  
> Invoice_no=STRING,LEN=6   
> Line_no=STRING,LEN=3,MUSTBE="000",HIDE   
> Line_count=NUMERIC,LEN=4.0   
> Customer_id=STRING,LEN=6  
> Order_dt=STRING,LEN=8  
>   
>  [InvoiceDetailLines]  
> Invoice_no=STRING,LEN=6   
> Line_no=STRING,LEN=3,MUSTBE>"000"  
> Product_no=STRING,LEN=8   
> Ord_qty=NUMERIC,LEN=5.0  
> Sale_price=NUMERIC,LEN=8.2

If more than one field defines the record type, then the data must be filtered using the MUSTBE keyword. The maximum length of a MUSTBE value is 80 characters.

**_Flattening the Data File_**

A data file is _flattened_ using the keywords *RECTYPE and RECTYPE=. When flattened, the fields for each record format exist in each row of the logical table. For example, the data field Line_no would be declared the record type identifier using the *RECTYPE clause. 

> In the example below, the header records are identified by the RECTYPE="000" and the detail records by the RECTYPE="~000". Note FIELD=1 on the Product_no entry. The driver reads through the fields and if the FIELD=1 is not there, the driver assumes that Product_no is the fourth field. 

The value on the right of RECTYPE=can be multiple values; e.g. Line_count is part of three different record formats the RECTYPE value would appear as follows: RECTYPE = "000001002".

Thus, Line_count would appear in record formats, "000", "001", and "002".

**_Example:_**

> [*Tables*]  
> InvoiceData=invdta  
>   
>  [InvoiceData]   
> Invoice_no=STRING,LEN=6,FIXED   
> Invoice_line=STRING,LEN=3,FIXED,*RECTYPE   
> Line_count=NUMERIC,LEN=4.0,RECTYPE="000"   
> Customer_id=STRING,LEN=6,RECTYPE="000"   
> Order_dt=STRING,LEN=8,RECTYPE="000"  
> Product_no=STRING,LEN=8,RECTYPE="~000",FIELD=1  
> Ord_qty=NUMERIC,LEN=5.0,RECTYPE="~000"   
> Sale_price=NUMERIC,LEN=8.2,RECTYPE="~000"

The leading **~** (_tilde_) in the RECTYPE=_"value"_ clause indicates that the record data must not match the value given. The *RECTYPE keyword only allows for a single field per table to be defined. If multiple fields define the record type, then use the MUSTBE keyword.
