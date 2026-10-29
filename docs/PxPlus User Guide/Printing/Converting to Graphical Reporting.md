# Printing

**Converting to Graphical Reporting**|   
---|---  
  
PxPlus includes built-in logic to allow you to leave your print statements mostly as is and output using a proportional font.

**_Example:_**

Consider this simple example:

> 0010 BEGIN  
>  0020 OPEN (1)"*winprt*;normal"  
>  0030 PRINT (1)'FONT'("Courier New",1),'DF',  
>  0040 WHILE 1  
>  0050 READ DATA COMPANY$,CUSTNO$,NAME$,ADDR$,OWES,END=*BREAK  
>  0060 IF LINESLEFT<1 OR COMPANY$<>CURCOMP$ THEN GOSUB NEWPAGE  
>  0070 PRINT (1)CUSTNO$,@(10),NAME$,@(40),ADDR$,@(70),OWES:"-$###,##0.00"  
>  0080 LINESLEFT--  
>  0090 WEND  
>  0100 END  
>  0110 !  
>  0120 NEWPAGE:  
>  0130 IF PAGENO<>0 THEN PRINT (1)'FF',  
>  0140 PAGENO++  
>  0150 PRINT (1)"Page:",PAGENO:"###0",@(30),"Client list for "+COMPANY$  
>  0160 PRINT (1)  
>  0170 PRINT (1)"Client",@(10),"Name",@(40),"Address",@(70),"Balance"  
>  0180 PRINT (1)"\------",@(10),DIM(20,"-"),@(40),DIM(20,"-"),@(70),"\------------"  
>  0190 PRINT (1)  
>  0200 LET LINESLEFT=50  
>  0210 LET CURCOMP$=COMPANY$  
>  0220 RETURN  
>  0230 DATA "ABC","000047","Cyclops Car Dealer","6675 Cherry",3.12  
>  0240 DATA "ABC","000122","Global Undergarments","823 Maple Lodge Court",99.54  
>  0250 DATA "ABC","000192","The Hungry Incorporated","5582 2nd Avenue",.55  
>  0260 DATA "ABC","000295","The Hungry Magazine","8576 Major Mackenzie",71.74  
>  0270 DATA "ABC","000310","New Dimensions Company","8052 Center Avenue",5.93  
>  0280 DATA "ABC","000332","Cyclops Computing","7723 Fantasy Island",7.61  
>  0290 DATA "DEF","000355","Kitty Kay Undergarments","2124 Major Mackenzie",4.55  
>  0300 DATA "DEF","000385","New Age Importers","1743 Allstate Parkway",73.84  
>  0310 DATA "DEF","000461","SOTA Golf club","4377 Major Mackenzie",63.66  
>  0320 DATA "DEF","000555","Mike was here","8450 Buga-Buga Drive",11.43  
>  0330 DATA "DEF","000598","Yorktown Body Shop","5674 One-way Street",8.53  
>  0340 DATA "DEF","000874","Elephant Importers","8656 Main",74.63  
>  0350 DATA "DEF","000899","Silly Walks Computing","3920 North Tacoma",60.31  
>  0360 DATA "DEF","000978","Crimson Magazine","2303 Steep Hill Drive",86.16  
>  0370 DATA "DEF","001072","Flagship Trading Limited","2782 Aurora Road",90.15  
>  0380 DATA "DEF","001081","Snap Dragon Grocers","3682 East West Street",49.51

This example is a simple print routine using a standard fixed width font.

To enhance this report, you probably want to use proportional text. Normally, this would cause a problem because names and addresses in proportional text occupy different widths. However, with PxPlus, if you are using the normal **@(..)** positioning, the system will take care of this.

Let's change line 30 to:

> 0030 PRINT (1)'FONT'("Arial",1),'DF',

The columns remain lined up. In addition, PxPlus even detects the fact that you are printing numeric data for the Balance column, and it right justifies, aligning the data on the decimal point.

If you look at the output from the above example, you will notice that the dashed lines do not line up because a dash in Arial font is not wide enough. You can fix this by adding **PRINT**  **'+S'** , which replaces fields consisting of dashes, underscores or equal signs with solid lines of the proper width.

Line 30 now becomes:

> 0030 PRINT (1)'FONT'("Arial",1),'DF','+S',

Internally, the PxPlus logic is to reposition the output based on the CPI or average default character width whenever an **@(..)** is found. If the output is numeric, the field will be right justified (aligned to the last digit or decimal point). This will assure alignment if all numeric output contains a consistent format mask.

In addition, this logic supports the **['BB'](../../mnemonics/bb.md)** and **['EB'](../../mnemonics/eb.md)** mnemonics to control Bold print and the **['BU'](../../mnemonics/bu.md)** and **['EU'](../../mnemonics/eu.md)** mnemonics for underscores.

Now, try the following:

> 0150 PRINT (1)"Page:",PAGENO:"###0",@(30),'BU','BB',"Client list for "+COMPANY$,'EU','EB'

> 0170 PRINT (1)'BB',"Client",@(10),"Name",@(40),"Address",@(70),"Balance",'EB'

By using these built-in features, you can easily clean up many of your reports, perhaps just needing to change the page header to use a "Fancy" font.

 

 

 
