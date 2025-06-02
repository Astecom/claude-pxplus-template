# External Databases

**Creating the Database** |  **__**  
---|---  
  
The step subsequent to installing a chosen database system is to create a database, or databases, for the application. When doing so, be aware of case sensitivity and the sort (collation) sequence of the database.

## Case Insensitivity

Case insensitivity most often affects key values, but it may also affect table names and column names. While having the table names and column names case insensitive makes using the database far easier to access and manipulate for the user, having case insensitive keys throughout the system will likely have major implications on your application.

If possible, when creating the database, specify a case sensitivity and collation sequence that matches PxPlus. If you cannot do this, then consider that there may be an impact on the following areas:

  * Output sort sequences.
  * Files that have upper/lowercase keys that are identical.
  * Usage of extended ASCII characters and HEX data in applications.



With the following effects:

  * Report sequences will differ, if case is involved.
  * Program logic may have to be revisited.
  * Cannot rely on the order of the characters.
  * Special considerations need to be made when handling mixed case data.
  * It is possible that file layout and contents may need reconsideration.



## Sort Sequence

By default, Microsoft SQL Server **_does not_** use the standard ASCII sort sequence when maintaining sorted lists. The sort sequence treats upper and lowercase characters identically and places special characters at a different place within the sequence. This can cause problems, not only in the order of the data returned, but also in the program logic.

Generally, while the output of data in reports and screen displays is not a major problem, users will need to get used to the new sort sequence when reviewing output. Major problems can arise when the application makes assumptions about the sort sequence and the order of special characters, numeric characters, uppercase data, and lowercase data.

An inadvertent lowercase key in a data file can cause problems.

**_Example:_**

Assume the keys 

> CAR010, CAR020, Car025, CAR100, CAR150

If you were to write logic such as:

> P$ = "CAR"   
>  READ (1, KEY=P$,DOM=*NEXT)   
>  LOOP:   
>  K$ = KEY(1,END=Done); IF K$(1,3)<>P$ THEN GOTO Done   
>  READ (1); PRINT K$; GOTO LOOP   
>  Done:

This would not work correctly (as in PxPlus files) since, as soon as "CAR" is not the first three characters of "Car025", the loop would exit without processing CAR100 or CAR150.

In addition, consider the impact of upper and lowercase keys during an _update_. Key fields with different cases are considered the same.

**_Example:_**

> WRITE (1,KEY="Mike")   
>  WRITE (1,KEY="mike")   
>  WRITE (1,KEY="MIKE")

All of the above update the same record, as opposed to updating/creating three unique records in a PxPlus file. The impact of this is that a record key of "Jeans Unlimited" is the same as "JEANS UNLIMITED". While in many places this is acceptable, it can cause numerous problems in applications that use upper/lower case keys as a means to segregate records.

Another issue is that the database may insert accented characters in the sort sequence directly following the non-accented characters. While this may seem somewhat harmless, it has a major problem if you attempt to use $FF$ as a partial key.

**_Example:_**

> READ (1,KEY = K$+$FF$, DOM=*NEXT)

$FF$ just happens to be, which means that the above**READ** positions the file somewhere between Y and Z - not _after_ Z. The recommendation is to switch to $FE$, which does not correspond to any accented characters in most character sets.

## Binary Fields

Case insensitivity also applies to accented characters as well; therefore, any use of high order ASCII data may result in missing data, etc. One solution is to use Binary fields to resolve the issue. This would result in:

  * Sort sequence becomes normal ASCII.
  * Data becomes case sensitive.
  * Accented characters return to binary sequence.



However, the data cannot be used directly in SQL statements, as the following is required:

> SELECT CONVERT(CHAR , column_name)

Products, such as Crystal Reports, may need the data to be converted before it can be used in a report. In most cases, the key fields usually consist of data that is contained within the actual record, so that no conversion is needed. Only if the key fields are required would they need to be used with the**CONVERT** function.

When using Binary fields in the**REC=** clause, a _:B_ following the column name indicates to the ODBC system that the field is Binary. Failure to do this can result in invalid data being stored in the system.

## Spaces and Null Character

Within Microsoft SQL, trailing spaces are considered redundant. This means that records whose key values differ by trailing spaces only would be considered equivalent.

**_Example:_**

> "ABC" is treated the same as "ABC "

In most cases, this does not cause any application problems, but if the application is sensitive to it, then the key fields should be defined as Binary.

Another issue is that the null character (HEX 00) cannot be stored in standard text columns. Therefore, if null bytes are significant to your application, then the column should be declared as Binary.

A null character is used internally to indicate the end of a SQL statement; therefore, not having the field declared as Binary will result in the SQL statement being truncated.
