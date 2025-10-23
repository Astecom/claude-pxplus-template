# System Functions

**XFA( )** |  **_Extended Field Attributes_**  
---|---  
  
##  Format

**XFA(**_varlist_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_stmtref_ |  Program line number or statement label to which to transfer control.  
---|---  
_varlist_ |  List of variables in the string template.  
  
##  Returns

Extended field-attribute information in string template.

#### **Note:**  
This function is included for compatibility with other languages.

##  Description

The **XFA( )** function returns extended field attribute information stored in a string template:

|  **Format** |  **Returns**  
---|---|---  
|  XFA(_var_ _,_ " ") |  A list of variables  
|  XFA(_var_ _,_ "_fieldname_ ") |  User**-** defined portion of the field  
  
**_Do Not Do This:_**

> 0120 dim CST$:iol=0130 rem does NOT create a valid string template for XFA( )  
>  0130 iolist NAME$,ADDR$,CITY$,ZIP$ rem valid iol for the composite string above  
>  0140 rem But XFA(string above) generates Error #26: Variable type invalid  
>  0150 rem

**_Apply This Instead:_**

> 0170 rem XFA( ) is for use with other Business Basics' string template formats  
>  0180 let J$="B JONES",K$="23 SOME ST.",L$="MYCITY",M=78923  
>  0190 dim CST$:"NAME:C(20*),ADDR:C(30*),CITY:C(20*),ZIP:N(10*):type=cur"  
>  0200 let CST.NAME$=J$  
>  0210 let CST.CITY$=K$  
>  0220 let CST.ADDR$=L$  
>  0230 let CST.ZIP=M  
>  0240 rem  
>  0250 print xfa(CST$,"")  
>  0260 print xfa(CST$,"NAME")  
>  0270 print xfa(CST$,"ZIP","type")  
>   
>  ->end  
>  ->run  
>  NAME  
>  ADDR  
>  CITY  
>  ZIP  
>   
>  _  
>   
>  cur  
>   
> hta(xfa(CST$,"NAME"))  
>  01C00A0001000100000014

The Hex string of the **XFA( )** function in the previous example reports the following information about the string template field attributes:

**Bytes** |  **Information Returned**  
---|---  
1,1 |  Code 1 - 8 for field type  
2,1 |  Flag bit  
3,1 |  Field terminator  
4,2 |  Size of repeating field or $0001$ if not repeating  
6,2 |  Field number, based on line feeds  
8,2 |  Field offset if prior field is variable length  
10,2 |  Field length  
12, |  User-defined attributes
