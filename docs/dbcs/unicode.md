# UTF-8/Unicode and DBCS Support

**Unicode Translation** |   
---|---  
  
## Translating To/From Unicode

The **[TRANSLATE](../directives/translate.md)** directive has been extended to convert the extended data between DBCS and Unicode. The new format for the TRANSLATE directive is:

> TRANSLATE FROM _< inputstr>_ **[** , TBL=_nn_ __**]** TO _< strvar$>_ **[** , TBL=_nn_ **]**

This directive can be used to translate data from DBCS to Unicode, Unicode to DBCS, or two different DBCS forms (different codepages). It will take the string provided in <inputstr> and convert it into <strvar$>. Various options exist:

  * If no TBL= options are specified, the system will translate DBCS from <inputstr> to Unicode into <strvar$>. It will use the current default codepage to accomplish this translation.
  * If a TBL= option exists only on the <inputstr>, the data will converted from DBCS to Unicode based on the codepage table specified.
  * If a TBL= option only on the <strvar$>, the system will convert Unicode to DBCS using the codepage table specified.
  * If the TBL= option exists on both, the data will be translated from DBCS to DBCS changing the codepage table.



If desired, you can specify TBL=* to indicate that you want to use the current default codepage.

**_Examples:_**

|  TRANSLATE FROM USER_INPUT$ TO DB_DATA$ |  Convert USER_INPUT$ from DBCS to Unicode into DB_DATA$  
---|---|---  
|  TRANSLATE FROM DB_DATA$ TO USER_OUTPUT$,TBL=* |  Convert DB_DATA$ from Unicode to DBCS into USER_OUTPUT$ conversion based on current character set chosen by the user  
  
#### **Note:**  
Presently, the extended character support is limited to the Windows version of PxPlus or when using WindX in any supported server configuration. JavX does not support the use of the Extended Character set.  
  
The **[TRANSLATE](../directives/translate.md)** directive and TCB values are **_only_** available on a Windows system.
