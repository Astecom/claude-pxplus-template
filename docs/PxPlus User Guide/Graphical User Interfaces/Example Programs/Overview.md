# Graphical User Interfaces

**Example Programs** |  **__**  
---|---  
  
This page provides examples to illustrate the creation and implementation of PxPlus graphical controls and display objects.

## Graphical Controls Example

The example below demonstrates the use of PxPlus **[Control Objects](../Control%20Objects/Overview.md)**. It draws a new window within the PxPlus console and then creates several interactive controls within that window. At run time, a message on the right will display the CTL value assigned to each control selected via the mouse.

> > ! Sample graphical user interface program  
>  ! Create window and populate with controls  
>  PRINT 'DIALOGUE'(10,10,80,25,"Simple Graphical Controls Example",OPT="*-mXM"),'B?','SR','CS',   
>  PRINT 'FONT'("Arial,1,I"),'DF',   
>  MENU_BAR 100,"-[&File,&Edit],F:[&Open=901,&Save=902,&Quit=4],E:[&Add=903,&Delete=904]"  
>  BUTTON 101,@(3,1,10,2)="&Button",TIP="Push the button"   
>  PRINT 'PEN'(1,1,"Dark Blue"),'FILL'(0,0),;   
>  PRINT 'RECTANGLE'(@X(2),@Y(3.5),@X(23.5),@Y(9),20),   
>  RADIO_BUTTON 102:1,@(3,4,20,1.5)="Radio Button 1",FNT="Arial,1"   
>  RADIO_BUTTON 102:2,@(3,5.5,20,1.5)="Radio Button 2",FNT="Arial,1"   
>  RADIO_BUTTON 102:3,@(3,7,20,1.5)="Radio Button 3",FNT="Arial,1"   
>  RADIO_BUTTON ON 102:1 ! Turn the default button on   
>  CHECK_BOX 103,@(3,9.5,20,1)="Check box",FNT="Arial,1"   
>  PRINT 'PEN'(1,2,0),'LINE'(@X(2),@Y(11.5),@X(23.5),@Y(11.5)),   
>  PRINT 'TEXT'(@X(3),@Y(12.5),"Double click to select:"),   
>  LIST_BOX 104,@(3,14,20,6);   
>  LIST_BOX SET_FOCUS 104,204 ! set alternate CTL for focus   
>  LIST_BOX LOAD 104,"Line 1/Line 2/Line 3/Line 4/Line 5/"   
>  LIST_BOX WRITE 104,1   
>  PRINT 'TEXT'(@X(3),@Y(19.5),@X(20),@Y(22),"Type some text and press <ENTER>:","W"),   
>  PRINT 'PEN'(1,3,"RGB: 100 200 200"),'LINE'(@X(26),0,@X(26),@Y(25)),   
>  MULTI_LINE 105,@(3,22,20,1);   
>  MULTI_LINE SET_FOCUS 105,205 ! set alternate CTL for focus   
>  ! Initialize CtlMsg$="",Event$=""   
> Lo_CTL=101,Hi_CTL=105,Current_ID=Lo_CTL;   
>  SET_FOCUS Current_ID ! init focus   
>  ! Event Loop   
>  WHILE 1   
>  SET_FOCUS READ x;   
>  IF x \   
>  THEN Current_ID=x \   
>  ELSE SET_FOCUS Current_ID ! Keep focus on the controls   
>  OBTAIN (0,SIZ=1)'ME',*,'MN';   
> TheCTL=CTL   
>  IF TheCTL=4 OR TheCTL=-1999 \   
>  THEN BREAK ! Exit the loop by pressing F4 or X in top corner of window   
> CtlMsg$="Ctl Value: "+STR(TheCTL),Event$=""   
>  SWITCH TheCTL   
>  CASE 101 ! Button   
>  Event$="The button has been pressed"   
>  BREAK   
>  CASE 102 ! Radio button   
>  RADIO_BUTTON READ 102,SUB_ID   
> CtlMsg$="Ctl Value: "+STR(TheCTL)+" Sub_ID: "+STR(SUB_ID)   
>  Event$="A radio button has been selected"   
>  BREAK   
>  CASE 103 ! Checkbox   
>  Event$="The check box has been clicked"   
>  BREAK   
>  CASE 104 ! Listbox   
>  LIST_BOX READ 104,x$,mode$   
>  IF mode$=$02$ \   
>  THEN Event$=x$+" has been selected from the list box" ! Select only by double click   
>  BREAK   
>  CASE 105 ! Multiline   
>  MULTI_LINE READ 105,x$   
>  Event$="'"+x$+"' has been typed into the multiline"   
>  BREAK   
>  CASE 204,205 ! Keep track when focus is on a listbox or multiline   
> Current_ID=TheCTL-100   
>  BREAK   
>  CASE 901,902,903,904  
>  x=TheCTL-900;  
> MenuFunc$=TBL(x,"Unknown","Open","Save","Add","Delete")   
>  Event$="'"+MenuFunc$+"' has been selected from the menu"   
>  BREAK   
>  CASE -1015 ! Tab forward   
> Current_ID++;   
>  IF Current_ID>Hi_CTL \   
>  THEN Current_ID=Lo_CTL   
>  SET_FOCUS Current_ID   
>  BREAK   
>  CASE -1016 ! Shift-Tab backward   
> Current_ID--;   
>  IF Current_ID<Lo_CTL \   
>  THEN Current_ID=Hi_CTL   
>  SET_FOCUS Current_ID   
>  BREAK   
>  DEFAULT   
>  Event$=""   
>  END SWITCH   
>  PRINT @(30,12),CtlMsg$,'CL',@(30,13),"Focus:",Current_ID,'CL',@(30,14),Event$,'CL',   
>  WEND   
>  END

## Form Input Example

The example below is a simple form input program.

> > BEGIN   
>  PRINT 'DIALOGUE'(0,0,33,15,"Input Form",'B?'+'FONT'("Arial,1")), \   
>  'SR','CS',   
>  PRINT 'CURSOR'("OFF"),   
>  PRINT 'TEXT'(@X(2),@Y(3),"First Name:"),   
>  PRINT 'TEXT'(@X(2),@Y(5),"Last Name:"),   
>  PRINT 'TEXT'(@X(2),@Y(7),"Address:"),   
>  PRINT 'TEXT'(@X(2),@Y(9),"City:"),   
>  MULTI_LINE 100,@(15,3,15,1),LEN=15,OPT="",ERR=*NEXT   
>  MULTI_LINE 200,@(15,5,15,1),LEN=15,OPT="",ERR=*NEXT   
>  MULTI_LINE 300,@(15,7,15,1),LEN=15,OPT="",ERR=*NEXT   
>  MULTI_LINE 400,@(15,9,15,1),LEN=15,OPT="",ERR=*NEXT   
>  BUTTON 500,@(15,11,6,2)="&Save"   
>  BUTTON 600,@(24,11,6,2)="&Done"   
>  SET_FOCUS 100   
> tab_list$="100200300400"   
>  !   
> WHILE 1   
>  OBTAIN (0)'ME',invar$,'MN';   
> got_ctl=CTL,got_eom$=EOM   
>  SWITCH got_ctl   
>  CASE 4,600,-1999;   
>  EXITTO DONE   
>  CASE -1015;   
> tab_list$=tab_list$(4)+tab_list$(1,3);   
>  SET_FOCUS NUM(tab_list$(1,3));   
>  BREAK   
>  CASE -1016;   
> tab_list$=MID(tab_list$,-3)+tab_list$(1,LEN(tab_list$)-3);   
>  SET_FOCUS NUM(tab_list$(1,3));   
>  BREAK   
>  CASE 500;   
>  GOSUB SAVE_ROUTINE;   
>  BREAK   
>  END SWITCH   
>  WEND   
>  !   
>  DONE:   
>  MULTI_LINE REMOVE 100   
>  MULTI_LINE REMOVE 200   
>  MULTI_LINE REMOVE 300   
>  MULTI_LINE REMOVE 400   
>  BUTTON REMOVE 500   
>  BUTTON REMOVE 600   
>  PRINT 'CS',   
> END   
>  !   
>  SAVE_ROUTINE:   
>  MULTI_LINE READ 100,first$   
>  MULTI_LINE READ 200,last$   
>  MULTI_LINE READ 300,address$   
>  MULTI_LINE READ 400,city$   
>  MSGBOX "Saving: "+SEP+"First: "+first$+SEP+"Last: "+last$+SEP+ \   
>  "Addr: "+address$+SEP+"City: "+city$   
>  RETURN
