# Advanced Graphics

**Transparency and Shaped Windows**|   
---|---  
  
PxPlus provides a number of features that allow you to enhance the appearance of your application and allow you to create widget-like applications with a minimum of effort.

## Frame/Border Control

Every window in the system can have a variety of borders around it. Dialogues and windows with a title usually have a caption line and thick border, windows with an 'empty' title has thin borders, and windows with no title have no border.

The [**'OPTION'( )**](../mnemonics/option.htm#frame) mnemonic in PxPlus has a "FRAME" option that allows you to change the style of border on the fly for any window.

The valid options are:

|  **"NONE"** |  The window has no border/frame.  
---|---|---  
|  **"CAPTION"** |  The window has a border and caption line.  
|  **"THICK"** |  The window has a thick border.  
|  **"THIN"** |  The window has a thin border (usually a single pixel wide black line).  
  
## Window Transparency

There are two types of transparency supported within PxPlus:

**Full Window Transparency** |  Provides the ability for a window within the system to have see-through characteristics. That is, the user will be able to see the windows behind the current window.  
  
This feature is controlled by the PxPlus **'OPTION' mnemonic "[TRANSPARENCY](../mnemonics/option.htm#transparency)"** option. This option allows the application to change the transparency of a window from "0" (non-transparent normal window) to "100" (fully transparent invisible window).  
---|---  
**Transparent Masking** |  Provides the ability to set a colour that is used to define a transparency mask. Wherever that colour occurs in the window will be transparent and allow access to the window/screen below.  
  
The **'OPTION' mnemonic** with the **"[MASKCOLOUR](../mnemonics/option.htm#mask)"** option is used to define the colour to be used. If the colour is set as DEFAULT, the normal window background colour is used.  
  
## Creating a Shaped Window

These PxPlus features provide an easy way to create windows of different shapes. Let us create a "Happy Face" window for our application.

**Step 1:** |  Create the window to receive the "Happy Face". First, we need to create a window that we want to use. We do not want the main window because of all the menu_bar and background; therefore, we will hide it and create a Dialogue window. 

> 0010 ! Create the Window  
>  0020 PRINT 'SHOW'(-1),'4D',  
>  0030 PRINT 'DIALOGUE'(5,5,20,10,"Smiley",'_GREEN',OPT="c"),'SHOW'(-1),  
>  0040 PRINT 'SR','CS',

Notice that we created the window with a "GREEN" background, you'll see why later. We are also hiding the newly created Dialogue window to avoid the user seeing the logic as it draws.  
---|---  
**Step 2:** |  Draw the "Happy Face".

> 0050 ! Draw a Happy face  
>  0060 PRINT 'PEN'(1,2,0),'FILL'(1,3),'CIRCLE'(@X(10),@Y(5),@Y(4.5)),  
>  0070 PRINT 'FILL'(1,0),  
>  0080 PRINT 'CIRCLE'(@X(6),@Y(3),@X(1)),'CIRCLE'(@X(14),@Y(3),@X(1)),  
>  0090 PRINT 'ARC'(@X(10),@Y(5),@Y(3),0,210,330),  
>  0100 ! Give him a button nose  
>  0110 BUTTON 4,@(7,4,6,1.5)="&Done"  
  
**Step 3:** |  Remove the window frame.

> 0120 ! Remove the frame  
>  0130 PRINT 'OPTION'("FRAME","NONE"),

> **Step 4:** |  Remove the background colour.  
  
> 0140 ! Remove the background colour  
>  0150 PRINT 'OPTION'("MASKCOLOR","DEFAULT"),

> This is why we created the window with a background colour. Choose a colour that will not occur within the actually window that you want preserved.  
**Step 5:** |  Show the completed window and wait for the button to be pressed.

> 0160 ! Now show the window  
>  0170 PRINT 'SHOW'(3),  
>  0180 ! Wait for button  
>  0190 WHILE 1  
>  0200 OBTAIN (0)'C0',*  
>  0210 IF CTL=4 THEN BREAK  
>  0220 WEND  
  
**Complete program below:**  
|  |  0010 ! Create the Window  
0020 PRINT 'SHOW'(-1),'4D',  
0030 PRINT 'DIALOGUE'(5,5,20,10,"Smiley",'_GREEN',OPT="c"),'SHOW'(-1),  
0040 PRINT 'SR','CS',  
0050 ! Draw a Happy face  
0060 PRINT 'PEN'(1,2,0),'FILL'(1,3),'CIRCLE'(@X(10),@Y(5),@Y(4.5)),  
0070 PRINT 'FILL'(1,0),  
0080 PRINT 'CIRCLE'(@X(6),@Y(3),@X(1)),'CIRCLE'(@X(14),@Y(3),@X(1)),  
0090 PRINT 'ARC'(@X(10),@Y(5),@Y(3),0,210,330),  
0100 ! Give him a button nose  
0110 BUTTON 4,@(7,4,6,1.5)="&Done"  
0120 ! Remove the frame  
0130 PRINT 'OPTION'("FRAME","NONE"),  
0140 ! Remove the background colour  
0150 PRINT 'OPTION'("MASKCOLOR","DEFAULT"),  
0160 ! Now show the window  
0170 PRINT 'SHOW'(3),  
0180 ! Wait for button  
0190 WHILE 1  
0200 OBTAIN (0)'C0',*  
0210 IF CTL=4 THEN BREAK  
0220 WEND  
---
