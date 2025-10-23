# External Databases

**Creating the Prefix File** |  **__**  
---|---  
  
The **[OPEN](../../../directives/open.md)** directive is used to establish a logical connection between PxPlus and the database. The pathname and option string defines the database, the name of table to be accessed, and a variety of data formatting and processing options.

Use the **[PREFIX FILE](../../../directives/prefix.md)** directive to specify the special Keyed file that contains information to be used for dynamic translations of files when they are opened in your applications.

Prefix files can be created using the **[Database Import Utility](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Database%20Import.md)** and/or the **[Bulk Database Export Utility](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Bulk%20Database%20Export.md)**. See also **[Using External Databases to Create a Data Dictionary](../../../Data%20Dictionary/Introduction.htm#external_db)**.

The prefix file key is the old file name; i.e. CSTFILE. If the company code is part of the physical file name, then two separate records are required - one for each unique file name. For example, if all the files are prefixed by the company code (i.e. 10 and 11), then a 10CSTFILE and 11CSTFILE must exist within the file.

If the same file is opened in different ways (sometimes with an absolute path, sometimes with a relative path), then each case must be added to the prefix file.

**_Example:_**

> OPEN(1)"SimpleName"  
>  OPEN(2)"./SimpleName"  
>  OPEN(3)"/usr/data/SimpleName"  
>  OPEN(4)"SIMPLENAME"

Each of the above OPENs represents the same file but require a unique name in the prefix file.

Normally, the pathname contains a variety of file access and formatting options as well. These options are used to define information regarding how to access the table to PxPlus. Typically, this includes the definition of the key fields, record formatting characteristics, and the details regarding variant record processing for non-normalized files.

Additional options can provide information to the database connection; e.g. user ID and password, database qualifier name (database name within server), or record locking characteristics.

Because the size of the string needed to pass this information to PxPlus can become quite long, and due to the fact that PxPlus limits file pathnames to a maximum of 511 characters, options can be specified in the**OPT=**_string_ clause for the**OPEN**. Options provided in the**OPT=** string are not treated any differently than those options passed in the pathname.

The prefix file data records consist of the actual pathname to use in the first field and the option list in the second field.

**_Example:_**

In MAS200 (pre-Version 4.x), the ARF Terms Code file is described as follows:

**File:** |  ARFABC.SOA |   
---|---|---  
**Fields:** |  TermsCode |  2char |  (concatenated with)  
|  Description |  30char |  (concatenated with)  
|  DaysBeforeDue |  3char |  (concatenated with)  
|  DueDateADayOfMonth |  1char |  (concatenated with)  
|  DaysBeforeDiscDue |  3char |  (concatenated with)  
|  DiscDateADayOfTheMonth |  1char |  (concatenated with)  
|  MinDaysAllowedInvDue |  3char |  (concatenated with)  
|  MinDaysAllowedDiscDue |  3char |  (concatenated with)  
|  DiscountCalcMethod |  1char |   
|  DiscountPercentage |  numeric |  19.7  
**Key:** |  TermsCode |  |   
  
To record the definition to the prefix file:

> KEYED "PFXFILE",12   
>  OPEN (1) "PFXFILE"   
>  WRITE(1,KEY="ARFABC.SOA")"[odb]MAS90MFK;ARF_TermsCodeMasterfile;DB=MAS_AB   
>  C;","KEY=TermsCode;REC=TermsCode:2+Description:30+DaysBeforeDue:3+DueDateADayOfMonth:1+DaysBeforeDiscDue:3+DiscDateADayOfTheMonth:1+   
>  MinDaysAllowedInvDue:3+MinDaysAllowedDiscDue:3+DiscountCalcMethod:1,DiscountPercentage:19.7"   
>  CLOSE (1)

Generally, we suggest that the first field contains the DSN/Table declaration, and the second field contains the record layout.

Once this record is created, the application can enable the**PREFIX FILE** and access the database table by opening the file ARFABC.SOA.

> PREFIX FILE "PFXFILE"   
>  OPEN (1) "ARFABC.SOA"   
>  PRINT PTH(1) [odb]MAS90MFK;ARF_TermsCodeMasterfile;DB=MAS_ABC;

The file will need to be created with a record size large enough to accommodate the largest file definition string that the application requires. A prefix file with a record size of 4000 bytes is not uncommon.

## See Also

**[Creating a Link File](Creating%20Link%20File.md)**
