# System Parameters

**'SO'** |  **_Select Optimization_**  
---|---  
  
##  Description

The **'SO'** parameter is used to control whether select optimization is enabled. Select optimization is applicable **_only_** for selects on **[Keyed](../PxPlus%20User%20Guide/File%20Handling/Data%20Files/Keyed%20Files.md)** or **[EFF](../PxPlus%20User%20Guide/File%20Handling/Data%20Files/Enhanced%20File%20Format.md)** PxPlus data files.

If select optimization is applicable but is disabled, then the key used in reads done for the select will be the primary key unless a specific key was specified via **KNO=**. In addition, no key range will be used to limit the number of reads unless a key range was specified via **BEGIN** and/or **END**.

If select optimization is applicable and enabled **_but_** the key and/or key range is not clearly specified, then PxPlus will look for a **WHERE** expression that can be used to select the key and key range that will minimize the number of reads. If PxPlus does not find a **WHERE** expression or it finds a **WHERE** expression that it cannot optimize, then the primary key will be used with no key range. A **WHERE** expression can be used for optimization if it meets the following requirements:

  * One side of the comparison is a field from one of the select tables.
  * The other side of the comparison can be a number, a string or another field from any of the select tables.
  * The **WHERE** expression does **_not_** contain arithmetic or functions calls.
  * If the **WHERE** expression contains more than one comparison, only the **AND** concatenation is supported.



#### **Note:**  
Select optimization is always enabled for select joins regardless of the **'SO'** parameter.

_(The 'SO' system parameter was added in PxPlus 2018.)_

## Default

**_Off_** Select optimization for non-join selects is **_Off_**.

##  See Also

[**SELECT Select/Query From ... Where**](../directives/select.md)
