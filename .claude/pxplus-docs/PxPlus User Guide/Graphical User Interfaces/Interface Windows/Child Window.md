# Interface Windows

**Child Window** |  **__**  
---|---  
  
A _child window_ is a window that is launched and contained inside of a parent window. By definition, a child window is one that is dependent on a parent window and is minimized or closed when the parent minimizes or closes. These windows usually share the main application menu bar and can only be moved or resized within the parent window. If you attempt to move a child window beyond the primary window frame, any part that is outside of the frame is no longer visible. A child can be any window launched by another window (including one that is itself a child window).

> The characteristics of a _child_ window are as follows:

  * Totally contained within the parent window.
  * Minimized/restored when the parent window is minimized/restored.
  * Closed when the parent window is closed.
  * When minimized, they are identified as icons within the parent window.
  * Supports global menu and buttons created on the parent window.
  * Does not have an entry in the Windows task bar.



## Creating a Child Window

A child window is created by inserting the **['WINDOW' or 'WA'](../../../mnemonics/window.md)** mnemonic within a**PRINT** statement:

> PRINT 'WINDOW'(0,2,60,10,"Sample",'WHITE'+'_BLUE',OPT="-mMSX")

When creating a child window, the size and position of the window is defined via four coordinates. The first pair of numbers establishes the upper left starting position of the window (column and line coordinates). These values are relative to the top left corner of the parent window. In the case of the console window, line 0 begins at the top of the tool bar area, so the line coordinate must compensate for this. The third number indicates the window width (in columns), and the fourth is the window height (in lines). All are integer values.

Following the title, you may also specify an optional default attribute string for the window. This string is comprised of one or more mnemonics, such as foreground/background colours.

There are a variety of options for the**OPT=** clause, although fewer than for the **['DIALOGUE'](../../../mnemonics/dialogue.md)** mnemonic. The status bar is optional, as are the icons and resizing boxes in the title bar. You must include a title when using the**'WINDOW'** mnemonic if you want a title bar and borders. When creating a child window to a PxPlus Console Window parent, the OPT="c" option is not necessary. This option must, however, be used to create a child launched from a **[Dialogue Window](Dialogue%20Window.md)** or another child window.

For syntax details and options, see **['WINDOW' or 'WA'](../../../mnemonics/window.md)** mnemonic.

## Child Window Examples

The following code creates the child window shown above with the title "Sample":

> PRINT 'WINDOW'(20,16,60,10,"Sample",'WHITE'+'_BLUE',OPT="-mMSXZ"), \ 'SR','CS',   
>  PRINT 'MESSAGE'("This is the status bar where you can display messages"),   
>  MENU_BAR 100,"-[&File,&Edit,E&xit],F:[&Open,&Close],E:[&Cut,&Paste]"   
>  BUTTON 101,@(50,8,8,1.6)="E&xit"   
>  PRINT 'FONT'("Arial,2,IB"),'TEXT'(@X(2),@Y(2),"Welcome!"),

"Blue" is set as the default foreground colour by specifying it as an attribute of the window. The options set in the OPT= clause include minimize and maximize buttons, the PxPlus system icon, menu and status bars, and create a resizable window.

When a child window is created, the default scroll area leaves a column free on each side of the window and a line at the top and bottom. To reset the scroll region so that it extends to the edges of the window, use the **['SR'](../../../mnemonics/sr.md)** mnemonic.

The following example centres a child window in the workspace area of the parent window:

> childWidth=40,childHeight=10   
> parentCols=MXC(0),parentRows=MXL(0)   
>  c=INT(parentCols/2-childWidth/2)   
>  l=INT(parentRows/2-childHeight/2)   
>  PRINT 'WINDOW'(c,l,childWidth,childHeight,"Title"),'SR','CS',

> The parent-child relationship may also be extended to a window created outside of the window that launched it. This is accomplished by creating the child window using the **['DIALOGUE'](../../../mnemonics/dialogue.md)** mnemonic and specifying the OPT="c" option. While this type of window is not confined to the borders of its parent, it is nonetheless a child that is dependent on its parent, so the same rules apply.
