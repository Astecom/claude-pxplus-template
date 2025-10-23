# System Parameters

**'NF'** |  **_Period/Comma Conversion to Numeric Variable_**  
---|---  
  
## Description

The **'NF'** parameter can be enabled when reading data from a file where the decimal point is other than the normal period (**.**); e.g. when reading European data where the comma is often used as the decimal point. Enabling this parameter will cause the system to treat whatever character is defined as the decimal point (**'DP'** system parameter) as the decimal point when converting the data from the file to internal numeric values.

Setting this applies to **_all_** READ/FIND directives, regardless of the type of file from which they come.

Applies only to the **READ** , **FIND** , **EXTRACT** , **SELECT** and **READ DATA FROM** directives, as these all use common field parsing logic.

#### **Note** :  
Setting this parameter does **_not_** apply to user input or to the **[NUM](../functions/num.md)** function.

## Default

**_Off_** \-- Only the period (.) will be considered as a decimal point when processing a **READ** , **FIND** , **SELECT** or **READ DATA** directive.

## See Also

**['DP' Decimal Point Symbol](dp.md)  
[READ Read Data from File](../directives/read.md)**  
**[FIND Locate and Read Data](../directives/find.md)**  
**[EXTRACT Read and Lock Data](../directives/extract.md)**  
**[SELECT Select/Query From ... Where](../directives/select.md)**  
**[READ DATA FROM Read Data from Program](../directives/read_data.htm#Mark8)**
