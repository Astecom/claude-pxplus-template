# Language Reference

**Mnemonics** |   
---|---  
  
This section, when expanded, provides a list of all PxPlus mnemonics, arranged in alphabetical order. PxPlus mnemonics deliver special control sequences to a display device or printer. See **[MNEMONIC](directives/mnemonic.md)** directive.

Mnemonics can be classified according to their use and the type of device they control. See [**Mnemonic Categories**](mnemonics/mnemonic_categories.md).

##  Using Mnemonics

Mnemonics are generally inserted within a **PRINT** or **INPUT** statement to invoke such functions as clearing the screen, positioning the cursor, changing the colour of characters, setting/resetting various attributes, or enabling/disabling I/O modes.

All mnemonics are enclosed within single quotes. Some require arguments (e.g. PRINT 'CIRCLE'(720,600,100,1)). Some are represented by more than one keyword: a long form or short form (e.g. use either the **'PUSH'** or **'WC'** to copy the current window).

The use of an invalid mnemonic or one that is not applicable to a particular device results in Error #29: Invalid mnemonic or position specification.

#### **Note:**  
Mnemonics are specific to the channel on which they are defined and are only valid while the channel remains open. When the channel is closed, the mnemonics are cleared.

##  Creating and Redefining Mnemonics

Use the [**MNEMONIC**](directives/mnemonic.md) directive to define/redefine 2-character mnemonics for any file or device.

**_Example:_**

To assign settings for the PxPlus mnemonics **'[CP](mnemonics/cp.md)'** and **'[SP](mnemonics/sp.md)'**:

> MNEMONIC(0)'CP'="Courier New,-8":120,40  
>  MNEMONIC(0)'SP'="*":80,25

When a defined mnemonic is encountered in a [**PRINT**](directives/print.md) or [**INPUT**](directives/input.md) statement, the system converts it to the character string specified. Some 2-character mnemonics are predefined. For example, **'CR'** , **'LF'** , and **'FF'** are predefined as $00$, $0A$ and $0C$ respectively.

All two-character mnemonics that are used for character display can also be used for character printing, provided that the mnemonic is defined for the printer output channel using the correct escape sequence for the device specified.

Many motion/editing operations will be emulated when they are not actually supported by the device specified. However, it is still better to define mnemonics using the correct motion/editing sequences that are available for the specific device. Emulation of some sequences may result in slower performance.

For additional information on mnemonic definitions, see the [**MNEMONIC**](directives/mnemonic.md) directive and the [**[WDX]**](command_tags/wdx.htm) command tag.

## X,Y Coordinates

When using GUI mnemonics, the values for x, y, and radius are considered logical screen coordinates not line/column coordinates. In PxPlus, these are known as graphical units (similar to pixels). Use [**@X( ) / @Y( )**](functions/~x.md) functions to convert line/column values to graphical units.

**_Example:_**

> 0110 LET RADIUS=(100)   
>  0120 LET X=@X(45)! X=graphical units for column value 45  
>  0130 LET Y=@Y(20)! Y=graphical units for line value 20   
>  0140 PRINT @(45,15),'CIRCLE'(X,Y,RADIUS,1) 

##  Mnemonic Settings, Window/Region

When you send output to the screen, PxPlus remembers all graphic mnemonics until a [**'CS' Clear Screen**](mnemonics/cs.md) is performed or the window is destroyed. This enables Windows to repaint the window properly when required.

##  Windows API Frame Styles

PxPlus has three Windows API frame styles available to it. The [**'WINDOW' or 'WA'**](mnemonics/window.md) mnemonic uses **WS_BORDER** frame style, which is not popular with everyone; however, it has advantages. It maintains a global menu and buttons and is always relative to the main window. The [**'DIALOGUE'**](mnemonics/dialogue.md) mnemonic, on the other hand, uses **WS_DLGFRAME** , which is more popular but requires absolute screen position and does not allow global menus and buttons.

To change the look of the window frame without losing '**WINDOW** ' functionality, you can use the **WS_THICKFRAME** style. To do this, add **OPT="Z"** to the '**WINDOW** ' mnemonic.

**_Example:_**

> PRINT 'WINDOW'(10,10,40,10,"Title",OPT="Z") 
