# Directives

**CLIP_BOARD** |  **_Use Windows Clipboard_**  
---|---  
  
##  Formats

1. |  _Read Clipboard Data:_ |  **CLIP_BOARD READ** _var_ _$_[,**ERR=**_stmtref_]  
---|---|---  
2. |  _Write Clipboard Data:_ |  **CLIP_BOARD WRITE** _text$_[,**ERR=**_stmtref_]  
  
**_Where:_**

_stmtref_ |  Program line number or statement label to which to transfer control.  
---|---  
_text$_ |  The data to place into the Windows Clipboard.  
_var_ _$_ |  String variable. Receives the contents of the Clipboard.  
  
##  Description

#### **Note:**  
The **CLIP_BOARD** directive is supported for use in **_Windows or WindX only_**.

Use the **CLIP_BOARD** directive to have PxPlus application read or write to the Windows Clipboard. Only _text_ can be passed to/from the Clipboard. You can read a maximum of 32000 bytes using PxPlus to access the Clipboard. The write limit depends on the system.

PxPlus does not interpret the data in the Clipboard. Because of this, carriage return $0D$ and line feed $0A$ characters are present in multi-line Clipboard data when it is read. You should place these characters between the lines when writing to the Clipboard.

##  Example

input "Enter customer ID:",C$  
read (1,key=C$)C.NM$,C.ADR1$,C.ADR2$  
clip_board write C$+" "+C.NM$+$0D0A$+C.ADR1$+$0D0A$+C.ADR2$  
print "Your information is in the Clipboard."
