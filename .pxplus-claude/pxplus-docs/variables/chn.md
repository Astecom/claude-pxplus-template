# System Variables

**CHN** |  **_Channels Open_**  
---|---  
  
**_Numeric System Variable_**

##  Contents

Numeric string, current open channels

##  Description

The **CHN** variable contains a listing of all currently open channels. The value returned is a string of numeric two**-** byte values. The **CHN** variable indicates channel values below 65000.

##  Example

To obtain the Hex values, use the **[HTA( )](../functions/hta.md)** function.

> ?hta(chn)  
>   
>  0000001E

In this example, dec($0000$)=0 (i.e. the console) and dec($001E$)=30 (the open file's channel).
