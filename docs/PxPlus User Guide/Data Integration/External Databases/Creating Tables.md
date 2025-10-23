# External Databases

**Creating Tables** |  **__**  
---|---  
  
The first requirement for conversion to an external database is a _data dictionary_ of some sort. This can be an existing PxPlus**data dictionary** or a custom solution. The database must be accurate, as relational databases will not allow strings to be stored in numeric fields.

To ease the conversion, there should be one table per physical file. If there are non-normalized (multi-record type) tables, this will still be true. Changing this relationship will require much more extensive testing.

If you are working with PxPlus databases where an identifier (i.e. Company Code) is part of the physical file name, create multiple databases, as opposed to multiple tables. For example, a system with a two-character prefix for the company might have physical tables "10customer" and "11customer". Rather than creating two tables in a single database, create two databases, "C10" and "C11", each with its own "customer" table. This simplifies integration with third-party tools, such as Crystal Reports.

All PxPlus file types are supported, including Indexed and Sort; however, for special conditions that must be met, see **[Creating the Prefix File](Creating%20the%20Prefix%20File.md)**.

When creating tables, be aware of limits, such as the length of names, the maximum size for a particular data type, and possibly the total number of columns allowed per table. Reserved words (e.g. DATE) in column or table names are not allowed. In addition, be aware of what characters are allowed in names.

Date fields require special handling when creating tables. PxPlus only supports a limited number of translations between the standard database format of YYYY-MM-DD and the multitude of date formats used in Business Basic. If the application uses a date format that is not supported by PxPlus, then date fields must be stored as a simple string in the database. The alternative would be to request that the format be added to PxPlus, and then wait for a release that includes that format.

## PxPlus Data Dictionary

If you are using an **_embedded Data Dictionary_** , then the process of creating the database tables is vastly simplified. PxPlus ships with a utility program,***DICT/GENSQL** , that generates the data definition language (DDL) statement from the data dictionary entries. This utility was written with the intended target of Microsoft SQL Server, so the syntax of the**CREATE TABLE** statement may need to be modified for other databases.

For example, Microsoft SQL Server uses the data types Varchar and Decimal, whereas Oracle uses the keywords Varchar2 and Number.

## See Also

**[SQL Create Table](../../../Data%20Dictionary/Data%20Dictionary%20Utilities/SQL%20Create%20Table.md)**
