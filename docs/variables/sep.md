# System Variables

**SEP** |  **_PxPlus Field Delimiter_**  
---|---  
  
**_String System Variable_**

##  Contents

String, separator value, default $8A$

##  Description

The **SEP** variable indicates the record field separator. The PxPlus default is $8A$.

#### **Note:**  
When you **WRITE** using an IOList, **SEP** is the field delimiter.

##  Example

msgbox "Unable to save "+P$+sep+msg(err),"Save Error"  
list_box load ITEMS.CTL,0,item_code$+sep+item_desc$
