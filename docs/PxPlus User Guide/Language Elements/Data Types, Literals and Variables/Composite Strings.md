# Data Types, Literals and Variables

**Composite Strings** |  **__**  
---|---  
  
PxPlus provides the ability to define strings as a collection of data elements. These strings are called ** _composite strings_**. A composite string is basically a record defined by an **IOLIST** statement consisting of variables and associated formats used to create the string.

Assigning data to a composite string causes the elements defined in the IOList to be loaded with their associated values. Referencing a composite string returns all the variables in their respective formats as defined by the IOList; thus, it can be considered a logical record or structure.

#### **Note:**  
Composite strings cannot be used as object properties.

## Defining a Composite String

The **[DIM](../../../directives/dim.md)** directive is used to define a composite string. Provide the name of the string variable, a colon, and then the associated IOList.

**_Example:_**

To define a composite string consisting of 4 variables:

> 0100 DIM X$:IOL=1000   
>  1000 IOLIST A$,B$,X,Y   
>   
> **_or_**

> 0100 X_IOL$=PGM(1000); DIM X$:X_IOL$   
>  1000 IOLIST A$,B$,X,Y   
>   
> **_or_**

> 0100 DIM X$:CPL("IOLIST A$,B$,X,Y")

Unlike normal IOLists, the variables referenced in a composite string will be **_prefixed_** with the name of the composite string. Therefore, the variables in the above example referenced by X$ are not A$, B$, X, and Y but rather X.A$, X.B $, X.X, and X.Y. This is comparable to the**REC=** option found in input/output directives. See **[Processing Data Files](../../File%20Handling/Processing%20Data%20Files/Overview.md)**.

## Referencing a Composite String

When a program references a composite string, it will receive a string comprised of the variables defined in the IOList.

**_Example 1:_**

Given the following composite definition and values:

> 0100 DIM X$:IOL=1000   
>  1000 IOLIST A$,B$,X,Y   
>  X.A$="CAT", X.B$="DOG", X.X=1,X.Y=2

Referencing X$ will yield:

> CAT _-**SEP** -_ DOG _-**SEP** -_ 1 _-**SEP** -_ 2 _-**SEP** -_

Since the IOList specified general formatting of the data, each field was placed in ASCII in the output with a standard field separator (_-**SEP** -_) between them.

**_Example 2:_**

Given the following:

> 0100 DIM CST$:IOL=1000   
>  1000 IOLIST NAME$:[CHR(20)],ADR1$:[CHR(20)]

> CST.NAME$="PVX Plus Canada" CST.ADR1$="45B West Wilmot"

Referencing CST$ will yield:

> "PVX Plus Canada 45B West Wilmot "

Since the IOList specified formatting, the output consists of the name (NAME$) padded to 20 characters, followed by a 20-character address (ADR1$).

## Assigning Data to a Composite String

When a program updates a composite string, the variables that make up the composite will be updated automatically.

**_Example 1:_**

Given the following composite definition and values:

> 0100 DIM X$:IOL=1000   
>  1000 IOLIST A$,B$,X,Y   
>   
>  X$="PVX PLUS"+SEP+"PXPLUS"+SEP+"123"

**_Will result in:_**

> X.A$="PVX PLUS"   
>  X.B$="PXPLUS"   
>  X.X = 123   
>  X.Y = 0

Since the data assigned to the composite string X$ only contains 3 fields, the fourth field (X.Y) will be set to zero.

**_Example 2:_**

Given the following:

> 0100 DIM CST$:IOL=1000   
>  1000 IOLIST NAME$:[CHR(20)],ADR1$:[CHR(20)]   
>   
>  CST.NAME$="PVX Plus Canada" CST.ADR1$="45B West Wilmot"   
>  LET CST$(1,20)=""

The above LET will result in the field CST.NAME$ being set to a null string.
