# Mnemonics

**'+N' & '-N'** |  **_Control Drop/List Box Write Error_**  
---|---  
  
**Behaviour _or_ GUI Display**

##  Format

_Do Not Return Error 11:_**'+N'**  
_  
Return Error 11:_**'-N'**

##  Description

Use **'-N'** to generate an Error 11 on a **DROP_BOX WRITE " "** or **LIST_BOX WRITE " "** if no such entry exists. **'+N'** tells the system to clear any selected item when writing a null string.

These mnemonics have no effect on multi-select List Boxes.
