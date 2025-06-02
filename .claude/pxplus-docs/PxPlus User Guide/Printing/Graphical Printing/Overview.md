# Printing

**Graphical Printing** |  **__**  
---|---  
  
The PxPlus environment includes several **PRINT** destinations for handling true graphical (bitmap/vector) data. The standard interface to the Windows print manager, ***WINPRT*** , is designed for printing a hard copy from graphical output. Other options include ***PDF*** , ***VIEWER*** and ***BITMAP***.

Graphical mode is not just for images - the graphical capabilities of the PxPlus environment allow applications to deliver many more printing options than from a strictly character-based environment. Because graphical printing is _page-oriented_ rather than line-oriented, the line positioning (column/row) is dynamic. PxPlus applications that are set up to print or display graphical output can access any part of the page at any time - top-to-bottom ordering is not required.

PxPlus also allows you to mix and match fonts and attributes, apply _graphical mnemonics_ , as well as maintain older **[Character-Based Printing](../Character-Based%20Printing/Overview.md)** formats, all on the same page.

##  Graphical Mnemonics

All graphical printing from a PxPlus application requires the use of specific API calls to the Windows print manager - only certain _predefined_ graphical mnemonics are mapped to Windows API calls for this purpose; e.g. **['ARC'](../../../mnemonics/arc.md)**, **['CIRCLE'](../../../mnemonics/circle.md)**, **['FONT'](../../../mnemonics/font.md)**, **['FRAME'](../../../mnemonics/frame.md)**, **['LINE'](../../../mnemonics/line.md)**, **['PICTURE'](../../../mnemonics/picture.md)**, **['PIE'](../../../mnemonics/pie.md)**, **['POLYGON'](../../../mnemonics/polygon.md)**, **['RECTANGLE'](../../../mnemonics/rectangle.md)** and **['TEXT'](../../../mnemonics/text.md)**.

See **[Mnemonic Categories](../../../mnemonics/mnemonic_categories.md)** for a complete list of mnemonics. In this list, the graphical mnemonics are identified by the **_GUI Display_** and **_GUI Printer_** categories.

Positioning within a graphical mnemonic requires the use of X and Y coordinates. These are often derived using the **[@X( ) / @Y( )](../../../functions/~x.md)** functions, which convert column and row values into graphical units. When a graphical mnemonic is applied against a channel, the channel number should be passed as an argument to the **@X( ) / @Y( )** functions. The following routine illustrates how to use some of the mnemonics available for printing graphics in PxPlus:

> ! Printing Graphics   
>  PRINT 'CS',   
> ch=UNT ! OPEN (ch)"*viewer*"   
>  PRINT (ch)'FONT'("Times New Roman",3,"BI"),'BLUE',   
>  PRINT (ch)'TEXT'(@X(0,ch),@Y(0,ch),@X(70,ch),@Y(5,ch),"Printing Graphics","C"),   
>  PRINT (ch)'PEN'(1,2,4),'ARC'(@X(7,ch),@Y(5,ch),@X(1,ch),1,0,180),   
>  PRINT (ch)'PEN'(1,3,1),'FILL'(1,4),'RECTANGLE'(@X(2,ch),@Y(9,ch),@X(12,ch),@Y(13,ch)),   
> PRINT (ch)'PEN'(1,1,7),'LINE'(@X(2.5,ch),@Y(9.5,ch),@X(11.5,ch),@Y(9.5,ch),@X(11.5,ch),@Y(12.5,ch),@X(2.5,ch),@Y(12.5,ch),@X(2.5,ch),@Y(9.5,ch)),   
> PRINT (ch)'PEN'(1,2,4),'FILL'(7,1),'CIRCLE'(@X(54,ch),@Y(10,ch),@X(6,ch),1.8), L=@X(24,ch),R=@X(33,ch),S=@X(4,ch),X=@Y(6,ch),Y=@Y(14,ch)   
>  PRINT (ch)'PEN'(1,3,2),'FILL'(1,12),'POLYGON'(L-S*2,X,R+S*4,Y,L,Y,R-S,X,L,X),   
> PRINT (ch)'PICTURE'(@X(0,ch),@Y(15,ch),@X(30,ch),@Y(25,ch),"*win/nomads2",2),

#### **Note:**  
Only _predefined_ mnemonics are mapped to Windows API calls from PxPlus. User-defined mnemonics (via the **[MNEMONIC](../../../directives/mnemonic.md)** directive) are not accepted.

## Printing with Colours

You can use all foreground and background colours with colour printers. Use the **['PEN'](../../../mnemonics/pen.md)** and **['FILL'](../../../mnemonics/fill.md)** mnemonics to control the colour settings for graphics mnemonics.

The following routine prints each of the available 16 colours:

> 0010 ! Colour Printing   
>  0020 FONT$="MS Sans Serif",COLS_REQD=80   
>  0030 CHAN=UNT; OPEN (CHAN)"*WINPRT*"   
>  0040 PRINT (CHAN)'FONT'(FONT$,-12),'DF', ! Set base to 10 CPI   
>  0050 CUR_COL=MXC(CHAN)+1; IF CUR_COL=0 THEN CUR_COL=80   
>  0060 INCHES_WIDE=CUR_COL/10   
>  0070 PRINT (CHAN)'FONT'(FONT$,CUR_COL/COLS_REQD),'DF',   
>  0080 PRINT (CHAN)'CPI'(COLS_REQD/INCHES_WIDE),'LPI'(6),   
>  0090 FOR Z=0 TO 15   
>  0100 INTENSITY$=TBL(Z>7,"","Light ")   
>  0110 COLOUR$=TBL(MOD(Z,8),"Black","Red","Green","Yellow","Blue","Magenta","Cyan","White")   
>  0120 COLOUR_MNEM$=ESC+"F"+CHR(ASC("0")+Z)   
>  0130 PRINT (CHAN)@(0),COLOUR_MNEM$,INTENSITY$,COLOUR$   
>  0140 NEXT
