# Interface Windows

**Dialogue Window** |  **__**  
---|---  
  
A dialogue window is a freestanding independent window.

> The characteristics of a _dialogue_ window are as follows:

  * Freestanding window that can be moved and optionally resized, minimized, maximized and restored.
  * Optional title bar to display application name.
  * Accessible workspace area is resized when the window is resized.
  * Optionally displays PVX icon (at the top left corner of the window) which controls session-related actions/characteristics.
  * Supports optional menu and status bars.
  * Does not support global menus and buttons.
  * Supports the creation of dependent windows in a parent-child relationship. See **[Child Window](Child%20Window.md)**.
  * Entry in the Windows task bar.



## Creating a Dialogue

A dialogue window is created by inserting the **'DIALOGUE'** mnemonic within a **PRINT** statement.

**_Example:_**

> PRINT 'DIALOGUE'(0,0,60,10,"Sample",'WHITE'+'_BLUE',OPT="-mMSXZ")

When creating a dialogue, the size and position of the window are defined via four coordinates. The first pair of numbers establishes the upper left starting position of the window (column and line coordinates). These are absolute values relative to the top left corner of the monitor screen. The third number indicates the window width (in columns), and the fourth is the window height (in lines). All are integer values.

Following the title, you may also specify an optional default attribute string for the window. This string is comprised of one or more mnemonics, such as foreground/background colours.

The many options that are available in the**OPT=** clause make this a very flexible display window. The menu and status bars are optional, as are the icons and resizing boxes in the title bar. Even the title bar is optional.

For syntax details and options, see **['DIALOGUE'](../../../mnemonics/dialogue.md)** mnemonic.

## Dialogue Examples

The following code creates the dialogue window shown above with the title "Sample":

> PRINT 'DIALOGUE'(0,0,60,10,"Sample",'WHITE'+'_BLUE',OPT="-mMSXZ"), 'SR','CS',   
>  PRINT 'MESSAGE'("This is the status bar where you can display messages"),   
>  MENU_BAR 100,"-[&File,&Edit,E&xit],F:[&Open,&Close],E:[&Cut,&Paste]"   
>  BUTTON 101,@(50,8,8,1.6)="E&xit"   
>  PRINT 'FONT'("Arial,2,IB"),'TEXT'(@X(2),@Y(2),"Welcome!"),

"Blue" is set as the default foreground colour by specifying it as an attribute of the window. The options set in the OPT= clause include minimize and maximize buttons, menu and status bars, and create a resizable window. By default, only one window is active at any time. PxPlus allows the creation of multiple active windows by specifying OPT="&". This creates a window that logically attaches to the current windows. See **[Handling Multiple Windows](Handling%20Multiple%20Windows.md)**.

When a dialogue is created, the default scroll area leaves a column free on each side of the window and a line at the top and bottom. To reset the scroll region so that it extends to the edges of the window, use the **['SR'](../../../mnemonics/sr.md)** mnemonic.

The following code centers a dialogue on the monitor screen:

> panelWidth=40,panelHeight=10   
>  x$=MSE ! use to determine max columns/rows on monitor   
> charWidth=DEC($00$+x$(10,1))   
> charHeight=DEC($00$+x$(11,1))   
> screenCols=INT(DEC(x$(27,2))/charWidth)   
> screenRows=INT(DEC(x$(29,2))/charHeight)   
>  c=INT(screenCols/2-(panelWidth/2))   
>  l=INT(screenRows/2-(panelHeight/2))   
>  PRINT 'DIALOGUE'(c,l,panelWidth,panelHeight,"Title"),'SR','CS',
