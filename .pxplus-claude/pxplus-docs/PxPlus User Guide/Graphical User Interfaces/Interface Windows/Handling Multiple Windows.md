# Interface Windows

**Handling Multiple Windows** |  **__**  
---|---  
  
Several options are available for controlling how windows objects are arranged in your graphical user interface application for viewing and input access.

## Controlling Display

The **['SHOW'(_n_)](../../../mnemonics/show.md)** mnemonic can be used to minimize, maximize and restore the display of specific windows programmatically.

Code values for _n_ include:

**0** |  |  Minimize current window  
---|---|---  
**1** |  |  Restore current window to normal display state  
**2** |  |  Maximize current window  
**3** |  |  Resize current window to previous display state  
**-1** |  |  Hide current window  
  
The **['SIZE'](../../../mnemonics/size.md)** and **['MOVE'](../../../mnemonics/move.md)** mnemonics can also be used to control the size and location of the window.

## Transferring Focus

If multiple windows/dialogues are to be displayed at the same time within your graphical user interface application, there are two different methods available to you for switching focus from one window to another (without having to hide /drop one of the windows):

**_Method 1:_**

The PxPlus language handles window focus via the **['GOTO' or 'WG'](../../../mnemonics/goto.md)** mnemonic. Using the**'GOTO'** mnemonic requires the prerequisite that a unique _window ID_ be assigned to all windows upon creation.

**_Example:_**

> LET WindowNumOne=HWN(0)   
>  PRINT 'DIALOGUE'(10,2,40,10,WindowNumOne,"NumberOne   
> Window",OPT="cSX*"),'CS','SB',   
>  LET WindowNumTwo=HWN(0)   
>  PRINT 'DIALOGUE'(41,2,40,10,WindowNumTwo,"NumberTwo   
> Window",OPT="cSX*"),'CS','SB',

In this example, **HWN( )** is used to supply the highest unused window number available. A **'GOTO'** would now be able to transfer focus to either of these windows by specifying one of the window IDs assigned; i.e. WindowNumOne or WindowNumTwo.

**_Method 2:_**

The PxPlus ***WINAPI** utility can be used to switch focus between windows in your application. This method requires the prerequisite that a unique _window title_ be assigned to all windows upon creation. This is a two-step process:

***WINAPI** is used to retrieve the system ID (_handle_) associated with the title assigned to the window:

> Title$="WindowNumOne"   
>  CALL "*WINAPI;FindWindowA",Title$,HANDLE 

Once the handle has been established, you can use this value to position the selected window to the foreground (transferring focus):

> CALL "*WINAPI;SetForegroundWindow",HANDLE,RESULT

If multiple concurrent dialogue windows are displayed (using OPT="&"), then all the concurrent windows are active, and the user can move among them by clicking on the window.

## Closing/Removing

Windows can be closed in two ways:

> Using the **['POP' or 'WR'](../../../mnemonics/pop.md)** mnemonic removes the currently focused window from the top of the stack and restores the previously focused window. Sometimes, however, the window you want to remove is not the currently focused window.

> To provide better control, the **['DROP' or 'WD'](../../../mnemonics/drop.md)** mnemonic allows you to close a _specific_ window by _window_ _ID_ reference.

Consider the following:

> LET WindowNumOne=HWN(0);PRINT 'DIALOGUE'(10,2,40,10,WindowNumOne,"Special Number One Window",OPT="SX*"),'CS','SB',   
>  LET WindowNumTwo=HWN(0);PRINT 'DIALOGUE'(41,2,40,10,WindowNumTwo,"Special Number Two Window",OPT="SX*"),'CS','SB',

To close the first window using**'POP'** would require **_two steps_** : Switch focus via PRINT 'GOTO' (WindowNumOne), then PRINT 'POP'.

The**'DROP'** mnemonic handles this in **_one step_** : PRINT 'DROP'(WindowNumOne). Good programming practice would be to actually do the following:

> PRINT (0,ERR=*NEXT)'DROP'(WindowNumOne)
