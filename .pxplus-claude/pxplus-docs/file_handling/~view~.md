# Special File Handling 

***VIEW*** |  **_View-based File_**  
---|---  
  
##  Format

**OPEN (**_chan_**[,**_fileopt_**]) "*VIEW*;**_viewname_**[;**_options_**] [...]"**

**_Where:_**

_chan_ |  Channel or logical file number.  
---|---  
_fileopt_ |  File options. Supported options for opening ***VIEW*** include: |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**OPT=**_options_ |  Additional parameters (see _options_ below)  
_viewname_ |  Defines the name of the View whose definition will determine the logical file contents.  
_options_ |  File options. Supported parameters separated by a **;** (_semi-colon_). These include: |  **KNO=**_key number_ |  Key number to use for file access. Default is the key specified in the View definition.  
---|---  
**IOL=**_iolist_ |  IOList to use when reading the file. Options are **IOL=*** to access the embedded IOList or an IOList definition.  
**MINVAL=**_minimum value_ |  Minimum value for the key to begin reading. The specified value must be related to the key being used.  
**MAXVAL=**_maximum value_ |  Maximum value of the key to be read. This includes all keys starting with the value specified, e.g. MAXVAL=A would include all keys starting with A. The specified value must be related to the key being used.  
**SEQPFX=Y** |  Causes a 10-digit sequence number to be prefixed to the key value. This ensures unique key values and correct record sequence. When used, an alternate key, **KNO=1** , is available for IO processing to access the original key value of a record. See **[Duplicate Keys](~view~.htm#Mark6)**. Recommended for views that have a one-to-many relationship or keys that allow duplicates. Also recommended for views with keys that have descending segments.  
  
_(The MINVAL, MAXVAL and SEQPFX file options were added in PxPlus 2022.)_  
  
***VIEW*** |  Case insensitive keyword. Special device file name, enclosed in quotation marks within **[OPEN](../directives/open.md)** directive. (Include *****  _asterisks_ in syntax)  
  
##  Description

The ***VIEW*** interface allows a View to be used to define the contents of a logical file for use by an application program. It allows the program to access the contents of a View as if it were a standard read-only file.

**_Opening the View_**

To open the contents of a View, specify the file name ***VIEW*** followed by the name of the View you wish to access, separated by **;** (_semi-colons_):

> open (1)"*VIEW*;CustomerView"

When opened, the system will process the View definition and return its contents in a memory file using the specified channel number. The entire data set is loaded into the memory file when opened.

By default, the memory file will have an external key based on the key defined for the View. This can be changed by specifying the **KNO=** parameter in the OPEN statement. In addition, by default, there is no IOList; however, you can specify the **IOL=*** parameter to use the View's internal IOList or specify an IOList definition such as IOL=IOList Acct$,CustName$,Balance:

> open (1)"*VIEW*;AcctInfoView;KNO=1;IOL=*"

> open (1,opt="IOL=IOLIST This$,That$,Another",err=*next)"*VIEW*;myView"

The contents of the returned memory file is a static data set for the specified View; that is, the file is a snapshot of the View results at the time the file was opened. No changes or updates to the original data sources are reflected in the file as it is processed. Closing the channel will free the memory file and free its contents.

**_Duplicate Keys_**

If there is a possibility of duplicate keys in the resulting data set, data can be lost when the records with duplicate keys are overwritten. This can occur in Views that have a one-to-many relationship or use keys that allow duplicates. In this case, it is recommended that you use the **SEQPFX=Y** option, which prefixes the key with a 10-digit sequence number to guarantee unique keys and no data loss. When used, an alternate key, **KNO=1** , is available for IO processing to access the original key value of a record.

> open (1,opt=" IOL=*;KNO=2;SEQPFX=Y")"*VIEW*;vInvoice;"

**_Descending Keys_**

If the key by which a ***VIEW*** is read has a descending segment, special key handling is required. The **SEQPFX=Y** option may be used to maintain proper record order. In this case, key functions on the primary key (i.e. **[KEY( )](../functions/key.md)**, **[KEC( )](../functions/kec.md)**, **[KEF( )](../functions/kef.md)**, **[KEL( )](../functions/kel.md)**, etc.) will include the 10-digit sequence number. Using **KNO=1** in these functions will return the original key but, in the case of duplicate keys, may not point to the right record.

Alternately, if the **SEQPFX=Y** option is not used, the key value returned by a key function will contain an altered value in the location of the descending segment to maintain the descending sequence. To revert the key to an unaltered value, it can be manipulated using the **%_KeyMask$** variable, which is set when ***VIEW*** is opened:

> open (hfn,opt="IOL=*;KNO=2;MINVAL="+startDate$+";MAXVAL="+endDate$)"*VIEW*;vInvoice"  
>  Channel=lfo,keymask$=%_KeyMask$  
>  :  
>  read (channel)  
>  k$=kec(channel);  
> TrueKeyValue$=xor(k$,keyMask$(1,len(k$)))

_(The *VIEW* logical file name was added in PxPlus v10.00.)  
(Support for descending keys was added in PxPlus 2019 Update 2.)_
