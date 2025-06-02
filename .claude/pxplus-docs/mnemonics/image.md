# Mnemonics

**'IMAGE'** |  **_Define a Graphics Group_**  
---|---  
  
**GUI Display/Printer**

##  Formats

1. |  _Define Graphics Group:_ |  **'IMAGE' ("**_group$_**")**  
---|---|---  
2. |  _Delete Graphics Group:_ |  **'IMAGE'(DELETE** _group$_**)**  
3. |  _Hide/Show Group:_ |  **'IMAGE'(**{**ENABLE** |**DISABLE**} _group$_**)**  
  
**_Where:_**

_group$_ |  Graphics group name. String expression. If you omit this when defining a group, the default is **""** (_null_).  
---|---  
  
##  Description

PxPlus normally queues all mnemonics since the last **'CS'** (to supply information in case Windows needs to redraw the screen). In consequence, if you are constantly creating graphics, you can exhaust system resources. **'IMAGE'** helps to circumvent this potential problem.

When **'IMAGE'** is used to define and control the display of graphics groups, all graphical mnemonics following the **'IMAGE'** mnemonic will be grouped. You can then disable the group to remove it from view and enable the group to make it visible.

**'IMAGE'** groups are always drawn on the screen in the order in which they are first declared, starting with the default **'IMAGE'** group of **""**. This means that new **'IMAGE'** groups will be drawn on top of the default group and potentially overlap any previously defined '**IMAGE'** groups.

The **DELETE** option can be used to destroy the group and return resources to the system.

#### **Note:   
**When drawing graphical objects, each object will be laid one on top of the next. Use the **'IMAGE'** mnemonic to erase previous graphics instead. This reduces the consumption of Windows resources and helps prevent flicker during a repaint operation.

##  Example

! Display 'IMAGE' groups  
print 'CS'  
FACE$='pen'(1,4,3)+'arc'(800,200,105,1,1,360)  
NOSE$='pen'(1,4,0)+'line'(800,205,800,235)  
LEFT_EYE$='pen'(1,2,4)+'fill'(1,0)+'circle'(765,170,20)  
RIGHT_EYE$='pen'(1,1,0)+'fill'(1,0)+'circle'(835,170,18,1)  
WINK$='pen'(1,4,0)+'arc'(765,170,20,1,165,15)+'fill'(1,0)+'circle'(775,170,10)  
SMILE$='pen'(1,3,0)+'arc'(800,230,45,1,190,350)  
print 'image'("HAPPY"),FACE$,NOSE$,SMILE$  
print 'image'("WIDE_EYED"),LEFT_EYE$+RIGHT_EYE$;  
wait .5  
print 'image'(disable "WIDE_EYED")  
print 'image'("WINK"),WINK$,RIGHT_EYE$;  
wait 1;  
print 'image'(delete "WINK")  
print 'image'(enable "WIDE_EYED");  
wait 1  
print 'image'(delete "HAPPY"),'image'(delete "WIDE_EYED")  
print @(0,12);  
list  
print WINK$,RIGHT_EYE$,NOSE$,SMILE$;  
end
