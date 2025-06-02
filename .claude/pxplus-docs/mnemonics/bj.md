# Mnemonics

**'BJ'** |  **_Join Box Intersections_**  
---|---  
  
**Character Display**

##  Description

Use **'BJ'** to tell PxPlus to begin joining box intersections. After you use this mnemonic, all 'BOX' edge lines, which intersect existing graphic line characters, will be adjusted to join the intersecting lines properly.

To end box joining, use the **'EJ'** mnemonic.

## See Also

**['EJ' End Box Joining](ej.md)**

##  Example

print 'box'(4,6,16,10,"Box 1",'BJ')  
print 'box'(19,6,10,10,"Box 2")  
print 'EJ'
