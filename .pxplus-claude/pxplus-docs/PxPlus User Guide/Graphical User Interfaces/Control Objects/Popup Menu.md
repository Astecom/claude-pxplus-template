# Control Objects

**Popup Menu** |  **__**  
---|---  
  
**POPUP_MENU** **[** @**(**_col,ln_**)** **]** , _list$_ , **[**  _strvar_ _$_ **|**  _numvar_**]**

Popup menus are designed to "pop up" over the current window when you right click on a selected control (e.g. **[Button](Button.md)**, **[Multi-Line](Multi-Line.md)**, **[List Box](List%20Box.md)**, etc.). Popups are similar to menu bars except for the fact that they can be placed anywhere on the panel and are only visible when invoked. The control objects to which these popups are attached are created using the**MNU=** option, which defines the CTL value that will be generated when the user right clicks on the control.

The definition of a popup menu is similar to that of a **Menu Bar** control. For syntax details, see **[POPUP_MENU](../../../directives/popup_menu.md)** directive.

For information on creating and assigning a popup menu via the **[NOMADS Panel Designer](../../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**, see **[Popup Menu](../../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Popup%20Menu/Overview.md)**.

**_Example:_**

> m$="[&File,&Edit,E&xit],F:[&Open,&Save],E:[C&ut,&Copy,&Paste]"  
>  BUTTON 100,@(40,10,10,2.5)="&Popup Menu",MNU=101  
>  WHILE 1   
>  OBTAIN *   
>  IF CTL=4 \   
>  THEN BREAK   
>  IF CTL=101 \   
>  THEN POPUP_MENU m$,X$;   
>  PRINT "Selected: ",X$   
>  WEND   
>  END

Once a popup menu is created and assigned to a control, it remains invisible until the user right-clicks while the mouse is over the enabled component. In the example above, a CTL value of 101 will be triggered when you right-click on the associated button. At this point, the application will issue the **POPUP_MENU** directive:

> 
