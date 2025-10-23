# System Parameters

**'DP'=** |  **_Decimal Point Symbol_**  
---|---  
  
##  Description

Assigns decimal point symbol/character for use in formatted numeric data. Use the ASCII value of your character. For WindX environments, this parameter must be set on both the client and the server.

#### **Note:**  
The **'DP'** setting is used if I/O is formatted in the **INPUT** , **OBTAIN** and **PRINT** directives and the **STR( )** function (and ignored for unformatted I/O).  
  
It is always ignored by the **NUM( )** function and when using **WRITE** , **READ** , **FIND** or **EXTRACT** directives in converting numeric data.

##  Default

**'DP'=46** or **'DP'=ASC(".")**  _(decimal point)_

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
