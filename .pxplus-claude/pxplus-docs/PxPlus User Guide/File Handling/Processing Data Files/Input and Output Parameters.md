# Processing Data Files

**Input and Output Parameters** |  **__**  
---|---  
  
Within PxPlus, all **[File Processing Directives](File%20Processing%20Directives.md)** (that do not specify **RECORD**) allow for the specification of a parameter list. This list can consist of literals, variables, expressions, and mnemonics. Depending on the type of operation being performed, some types of parameters cannot be used; e.g., you cannot**READ** a literal.

The parameters that each of the file I/O directives will allow are described below:

|  **[PRINT](../../../directives/print.md)** |  Literals, variables, expressions, and mnemonics are all output to the file/device.  
---|---|---  
|  **[INPUT](../../../directives/input.md)** |  Literals and mnemonics are output to the device. Variables are read from the file/device.  
|  **[READ](../../../directives/read.md)** |  Only variables are allowed. (Same for **[FIND](../../../directives/find.md)**, **[EXTRACT](../../../directives/extract.md)**.)  
|  **[WRITE](../../../directives/write.md)** |  Literals, variables, expressions and mnemonics can be written.  
  
All of these directives allow for the inclusion of an **{ALL}** or **[ALL]** option following a variable, which will cause the system to process all elements of an array. See **[String Arrays](../../Language%20Elements/Data%20Types,%20Literals%20and%20Variables/String%20Values.htm#stringarrays)** and **[Numeric Arrays](../../Language%20Elements/Data%20Types,%20Literals%20and%20Variables/Numeric%20Values.htm#numeric_arrays)**.

Assuming an array of CAT[3,2,1], the elements in order will be:

> CAT[0,0,0], CAT[0,0,1], CAT[0,1,0]   
>  CAT[0,1,1], CAT[0,2,0], CAT[0,2,1]   
>  CAT[1,0,0], CAT[1,0,1], CAT[1,1,0]   
>  CAT[1,1,1], CAT[1,2,0], CAT[1,2,1]   
>  CAT[2,0,0], CAT[2,0,1], CAT[2,1,0]   
>  CAT[2,1,1], CAT[2,2,0], CAT[2,2,1]   
>  CAT[3,0,0], CAT[3,0,1], CAT[3,1,0]   
>  CAT[3,1,1], CAT[3,2,0], CAT[3,2,1]

## Common I/O Parameter List (IOList)

To simplify and reduce coding, I/O directives allow the use of a common list of parameters - an **IOList**. To reference an IOList, the programmer includes the**IOL=** option either as the parameter list or within a parameter list of **[File Processing Directives](File%20Processing%20Directives.md)**.

> 0100 READ (1,KEY=K$) IOL=1000   
>  0110 WRITE (1,KEY=K$) IOL=1000

The line reference refers to a line number or label where an**IOLIST** directive is found:

> 1000 IOLIST A,D,K(1),F$,F1$

The **[IOLIST](../../../directives/iolist.md)** directive is used to define an IOList. An I/O directive may contain as many**IOL=** options as required.

## Defining IOLists on OPEN

Another method to reduce the requirements of providing IOLists on file I/O statements is to provide the IOLists with the file **[OPEN](../../../directives/open.md)** directive. If you include the option **IOL=** within the **OPEN** statement, all further **READ** or **WRITE** statements (which do not specify any form of IOList) will automatically use the one given in the **OPEN** :

> 0010 OPEN(1,IOL=1000) "CSTFLE"   
>  ........   
>  0340 READ (1,KEY=K$+"00")   
>  ........   
>  0500 WRITE (1,KEY=K$+"00")   
>  ........   
>  1000 IOLIST A,D,K(1),F$,F1$

The**READ** statement at line 0340 and the**WRITE** statement at line 0500 both will utilize the**IOLIST** at line 1000.

Another advantage of this technique is that as long as the file remains open, all subsequent **READ** or**WRITE** statements will use the**IOLIST** at 1000, even if they are executed from different programs.

## Variable IOLists

PxPlus allows you to pass IOLists as variables and use variables as IOLists. To utilize a variable as an IOList, it must first be initialized with the object code for the desired IOList. This can be accomplished via the **[CPL( )](../../../functions/cpl.md)** or **[PGM( )](../../../functions/pgm.md)** functions.

**_Example:_**

> 0100 IOL_1$=CPL("IOLIST A$,B$,D")  
>   
> **_or_   
>   
> **0100 IOL_1$=PGM(1000)   
>  1000 IOLIST A$,B$,D

However, due to the fact that a **[RENUMBER](../../../directives/renumber.md)** directive could change the line number of the IOList in the above example, you should use the following piece of logic:

> 0100 IOL_1$=PGM(TCB(4)+1)   
>  0110 IOLIST A$,B$,D

This uses a TCB(4) function to get the current line number, then adds 1. When this is passed to the **[PGM( )](../../../functions/pgm.md)** function, the contents of the next line will be returned, which should have the desired IOList. This type of coding will not be affected by a **[RENUMBER](../../../directives/renumber.md)** directive.

Once a variable has been loaded with the IOList, it may be specified following the**IOL=** option, rather than a line number or statement name:

> READ (1) IOL=IOL_1$

One of the easiest ways to handle IOLists is to assign them during initialization to **[Global Variables](../../Language%20Elements/Data%20Types,%20Literals%20and%20Variables/Variables.htm#globalvar)**:

> 0100 %CST_IOL$=PGM(TCB(4)+1)   
>  0110 IOLIST CST_NM$,CST_ADR$,CST_CITY$,..

This will allow you to easily change IOLists without having to make large scale program changes. If desired, you could even open the files and assign them global file numbers.

## Formatted IOLists

In addition to simply naming the variables to be used in a **[READ](../../../directives/read.md)** or a **[WRITE](../../../directives/write.md)** directive, an IOList can also define the exact format of a data record. A format specification may be given immediately following the variable names on an IOList directive. The format specification is used to define the exact size and form that the data has on the file record.

Format specifications should be separated from the variable name by a **:**  _colon_ and enclosed within**[ ]**_square brackets_. The following are currently supported format specifications:

**** |  **CHR**(_len_) |  Variable length string (fixed output or delimited)  
---|---|---  
**** |  **CHR**(_dlm_) |  Variable length string (delimited)  
**** |  **LEN**(_len_) |  Fixed length string  
**** |  **STR**(_dlm_) |  Quoted string  
**** |  **NUM**(_len_ , _scl_) |  Fixed length numeric  
**** |  **SGN**(_len_ , _scl_) |  Signed fixed length numeric  
**** |  **BIN**(_len_ , _scl_) |  Binary numeric  
**** |  **INT**(_len_ , _scl_) |  Unsigned integer numeric  
**** |  **BCD**(_len_ , _scl_) |  Packed decimal numeric  
  
_len_ and _scl_ are numeric values._dlm_ is a one-character delimiter. In the following example, the IOList on line 1000 would be used for a 60-character record, with the field NAME in positions 1-30 and ADDR1 in positions 31-60:

**_Example:_**

> 1000 IOLIST NAME$:[CHR(30)],ADDR1$:[CHR(30)]   
>  1010 IOLIST CUST$:[STR(",")],AMNT:[STR(",")],   
>  1010:DUEDT$:[STR("")]

No delimiter would exist between the fields. In line 1010, the IOList would be used against a comma-delimited file where the string values would be enclosed in quotes.

**_Example:_**

The following is another example of the STR(",") IOList formatting option:

> 0010 dim CSV$[1:3]   
>  0020 CSV$[1]="Fred",CSV$[2]="Wilma",CSV$[3]="Pebbles"   
>  0030 iolist CSV${all}:[str(",")]   
>  0040 print iol=0030   
>  run   
>  "Fred","Wilma","Pebbles",

#### **Note:**  
Normal unformatted output is equivalent to a format of**CHR(SEP)**.

When using the**NUM( )** ,**SGN( )** ,**BIN( )** ,**INT( )** , and**BCD( )** format specifiers, the _scl_ parameter is used to define the scaling factor to be applied to the numeric data. It represents the number of implied decimal places that are to exist in the number as it resides on the file:

**Value** |  **Format** |  **File Format**  
---|---|---  
123.45 |  NUM(8,2) |  00012345  
1 |  NUM(8,2) |  00000100  
-23 |  NUM(8,2) |  00002300  
-23 |  SGN(8,2) |  0002300-  
1.6 |  BIN(2,1) |  $0010$  
  
## Prefixing Variables in an IOList via REC=

Sometimes, when using common IOLists, it is desirable to temporarily override the variable names. The**REC=** option provides this capability. When this option is specified, the **_variable name_** that is provided (following the**REC=**) is used to prefix all the variables in the IOList.

**_Example:_**

> 0010 LET GL_FL=HFN; OPEN (GL_FL,IOL=8000) "GLTRAN"   
>  0100 INPUT "Which Credit GL account:",CR$:"AA-0000"   
>  0110 READ (GL_FL,KEY=CR$,**REC=CR$** ,DOM=0100)   
>  0120 INPUT " Debit GL account:",DB$:"AA-0000"   
>  0130 READ (GL_FL,KEY=DB$,**REC=DB$** ,DOM=0120)   
>  0140 INPUT "Amount:",AMNT:"$###,##0.00-"   
>  0150 IF AMNT=0 THEN GOTO 0140   
>  0160 CR.BAL=CR.BAL+AMNT, DB.BAL=DB.BAL+AMNT   
>  0170 WRITE (GL_FL,KEY=CR$,**REC=CR$**)  
>  0180 WRITE (GL_FL,KEY=DB$,**REC=DB$**)  
>  0190 GOTO 0100   
>  8000 IOLIST DESC$,BAL 

In the above example, the **REC=** option is used to maintain two separate records in memory. One record will have all its variables prefixed with **DB** ; the other will have **CR** prefixes.

#### **Note:**  
The**REC=** option may also appear in the **[OPEN](../../../directives/open.md)** directive.

## Embedded Data Dictionary

PxPlus allows for a data dictionary to be directly embedded into keyed files, making IOLists within a program unnecessary.

To open a file using its embedded IOList, use **OPEN (1, IOL=*)**_"File"._ From then on, all**READ** and**WRITE** statements that **_do not_** specify any IOList or variables will utilize the embedded data dictionary.

**_Example:_**

> OPEN (1, IOL=*) "CSTFILE"   
>  ...   
>  READ (1,KEY=K$) ! Would use the embedded IOLIST   
>  READ (1,KEY=K$) A$,B$! Would NOT

The IOList can be embedded using the **[Data Dictionary Maintenance](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** facility.

The**REC=** clause can be used to prefix the elements in the IOList, if desired.

**_Example:_**

> OPEN (1,IOL=*) "CTSFILE"  
>  READ (1,**REC=CST$**)

This example would read all the fields defined in CSTFILE but prefix the fields with **CST**. Optionally, the **REC=** clause can be applied in the **[OPEN](../../../directives/open.md)** directive, causing the IOList to be prefixed by default.
