# System Parameters

**'TH'=** |  **_Thousands Separator_**  
---|---  
  
##  Description

Assigns the thousands separator/character for use in formatted numeric data IO. Use the ASCII value of the character.

For WindX environments, this parameter must be set on **_both_** the client and the server.

#### **Note:**  
**'TH'** is used if I/O is formatted in the **INPUT** , **OBTAIN** and **PRINT** directives and the **STR( )** function (and ignored for unformatted I/O).  
  
It is always ignored by the **NUM( )** function and when using the **WRITE** , **READ** , **FIND** or **EXTRACT** directives in converting numeric data.

##  Default

**'TH'=44** or **'TH'=ASC(",")** for the comma

## See Also

**[INPUT Get Input from Terminal](../directives/input.md)**  
**[OBTAIN Get Hidden Terminal Input](../directives/obtain.md)**  
**[PRINT Display Information](../directives/print.md)  
[STR( ) Convert Numeric to String](../functions/str.md)  
[NUM( ) Convert String to Value](../functions/num.md)  
[WRITE Add/Update Data in File](../directives/write.md)**  
**[READ Read Data from File](../directives/read.md)**  
**[FIND Locate and Read Data](../directives/find.md)**  
**[EXTRACT Read and Lock Data](../directives/extract.md)**
