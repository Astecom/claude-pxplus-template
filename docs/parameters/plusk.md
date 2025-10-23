# System Parameters

**'+K'** |  **_Control Advanced KEN/KEP Functionality_**  
---|---  
  
##  Description

The **'+K'** parameter is used to control the advanced **KEN** and **KEP** functionality found in PxPlus.

When this parameter is enabled **_(On)_** and a KEY= option is provided on a **KEN** or **KEP** function, the system will **_not_** require that a record with the key specified exist and will merely use the key specified for file positioning. 

When the parameter is disabled ** _(Off)_** , an error will be generated if there is no record with the key specified.

In addition, when this parameter is enabled and using the **KEN** function against an alternate key that allows duplicates, the **KEN** function will return the next higher logical key.

_(The '+K' system parameter was added in PxPlus v6.30, build 9111.)_

##  Default

**_On_**

## See Also

**[KEN( ) Return Key After Next](../functions/ken.md)**  
**[KEP( ) Return Prior Record's Key](../functions/kep.md)**

## Example

Based on a file with the following values:

**Primary Key** |  **Alternate Key #1**  
---|---  
BB |  CAT  
BUTCH |  DOG  
FIDO |  DOG  
FLUFFY |  CAT  
MAX |  DOG  
TIGGER |  CAT  
WHISKERS |  CAT  
ZIGGY |  CAT  
  
Given the above information, the secondary keys consist of 5 records with CAT followed by 3 records with DOG.

If you had the **'+K'** parameter enabled, thus using the advanced functionality, a KEN(file, KEY="CAT", KNO=1) will return "DOG", but with '+K' disabled it will return CAT.

The advanced **KEN** functionality will always return you the next valid higher key on the file rather than just the key of the next record on the file.
