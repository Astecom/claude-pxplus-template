# Table Definitions

**External Keys** |  **_s_**  
---|---  
  
External keys are an issue when working with the PxPlus SQL ODBC Driver because the data may be duplicated on the file. This layout can be illustrated as follows:

**Data** :

|  **CST_ID**  
---  
|  |  **CST_ID** |  **CST_NAME** |  **CST_ADDR**  
---|---|---  
  
> When an external key is used in a PxPlus file, the key data can be stored as part of the record data as well. The PxPlus SQL ODBC Driver prefixes the data record with the external key, which can result in key data being duplicated on the record:

|  **CST_ID**  
---  
|  **CST_ID** |  **CST_NAME** |  **CST_ADDR**  
---|---|---  
  
The solution is to _hide_ the data from the ODBC end user.

**_Example:_**

> [*Tables*]  
>  Customer=\pxp\nomads\cstfile  
>   
>  [Customer]  
>  CST_ID=STRING,LEN=6,FIXED  
>  CST_ID_DUP=STRING,LEN=6,HIDE,SAMEAS=CST_ID  
>  CST_NAME=STRING,LEN=30  
>  CST_ADDR=STRING,LEN=30

The keyword HIDE is available when using an INI file to define the data. HIDE is also supported when using the PxPlus Data Dictionary to define file layouts.

To hide data from the Data Dictionary dialog, click on the field you wish to hide, then using the Element Description dialog, click on the horizontal **ODBC** tab, and then select _Hide Column_.

##  Keyed Files with External Keys - Direct Files

For the purposes of defining fields for a _Direct_ _file_ , the external key is inserted in front of the record as it is read from the file and passed to the ODBC system.

**_Example:_**

If the PxPlus file is created with ORD_NUMBER as the 6-byte external key, and ORD_CUSTOMER and ORD_AMOUNT as data, then the INI record descriptor would be:

> [Order]  
>  ORD_NUMBER=STRING,LEN=6,FIXED  
>  ORD_CUSTOMER=STRING,LEN=10  
>  ORD_AMOUNT=NUMERIC,LEN=10.2

If the key is duplicated in the data, you should expose the field that is the key and hide the duplicate that is within the data portion. The SQL optimizer will recognize the key field and be able sort the file much faster by using the key chain.
