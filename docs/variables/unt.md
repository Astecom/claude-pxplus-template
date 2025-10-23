# System Variables

**UNT** |  **_Lowest Available Local Channel_**  
---|---  
  
**_Numeric System Variable_**

##  Contents

Integer, lowest channel/file number not open

##  Description

The **UNT** variable contains the lowest available channel/file number.

#### **Note:**  
Some older Business Basics opened the printer on channel (1). If you are dealing with such applications in legacy code, try using **HFN** instead of **UNT**.

##  See Also

**[ENABLE Re-enable Use of Prefix Table Entry](../directives/enable.md)**  
**[PREFIX Set File Search Rules](../directives/prefix.md)  
[HFN Highest Available Local Channel](hfn.md)**

##  Example

CHAN_NUM=unt  
open (CHAN_NUM)"FILENAME"  
print CHAN_NUM  
  
?  
1
