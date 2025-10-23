# Advanced Graphics

**Popup Windows**|   
---|---  
  
PxPlus provides a number of Popup window options through the utility object "***plus/obj/popup** ".

Often, it is desirable to have a window pop into view to advise a user about a condition that may require their attention. Many newer Windows applications use Popup advisory messages that appear in the lower right corner of the screen to advise users of everything from a new anti-virus download to chat users coming online.

Now you can add the same functionality easily within your application using the **"*plus/obj/popup"** object library. It provides functions to position and display windows using either "**_fade in/out_** " techniques or "**_Toaster_** " popup, which scroll up from the bottom right corner of the screen.

## Object Methods

The "***plus/obj/popup** " contains six methods that make displaying your popup window easy. These methods are:

**Method** |  **Description**  
---|---  
**Toast_up( )** |  Moves window to lower right corner and scrolls it up into view.  
**Toast_down( )** |  Scrolls window down the screen until it drops from view.  
**Fade_in( )** |  Takes current window (which should be hidden) and slowly fades it into view.  
**Fade_out( )** |  Takes current windows and slowly fades it out of view. When fully transparent (invisible) the window is hidden with no transparency.  
**Set_shape( )** |  Removes window frame and sets transparency mask to the window's background colour.  
**Goto_corner( )** |  Moves the window to the lower right corner of the display.  
  
All of these methods can be invoked either as Methods (with no parameters) using the "*plus/obj/popup" object. For non-object oriented programmers, they can also be called directly (e.g. CALL "*plus/obj/popup.pvc;Fade_in").

## Demonstration Program

The following program demonstrates the various capabilities of the PxPlus popup utility:

**Part 1:** |  First, create the window that we want to Popup. We do not want the main window because it has the menu_bar and background; therefore, we will hide it and create a Dialogue window. (Technically, any dialogue window will do, including windows created using NOMADS.) 0010 ! Create the Window to Popup  
0020 PRINT 'DIALOGUE'(5,5,20,7,"test"),'SR','CS','SHOW'(-1), Notice that we created the window and left it hidden. We do not want the user to see it before it 'Pops'.  
---|---  
**Part 2:** |  Load the object library so that 'popobj' provides access the popup object. 0030 LET POPOBJ=NEW("*plus/obj/popup")  
**Part 3:** |  Now we will demonstrate the window scrolling up into view, then back out of view. 0050 ! Toaster style popup/down  
0060 POPOBJ'TOAST_UP()  
0070 POPOBJ'TOAST_DOWN()  
**Part 4:** |  This demonstrates the window fading in the out. First, we must hide the window from the user and move it to the corner of the screen using GOTO_CORNER. Once there, we can reveal it to the user. 0080 ! Fade in -- Hide first before moving into view area  
0090 PRINT 'SHOW'(-1), ! Hide before moving into view  
0100 POPOBJ'GOTO_CORNER()  
0110 POPOBJ'FADE_IN() ! Fade_in assumes window is hidden  
0120 POPOBJ'FADE_OUT() ! Fade_out leaves window hidden once again  
**Part 5:** |  This is a small demonstration using a Shaped Popup window. It first draws an oval on the screen and then shapes the window by removing anything in the default background window colour (WHITE in our case). Once the window is ready, we fade it into view then scroll it down off the screen. 0130 ! Change Window to become a red/blue oval  
0140 PRINT 'CS','FILL'(2,"RED","BLUE"),'CIRCLE'(@X(10),@Y(4),@X(8),1.25),  
0150 PRINT 'TEXT'(@X(5),@Y(2),@X(15),@Y(6),"This is text within a shaped window","WC"),  
0160 ! Set window shape to oval   
0170 POPOBJ'SET_SHAPE()  
0180 POPOBJ'GOTO_CORNER() ! Adjust position due to removal of border  
0190 POPOBJ'FADE_IN()  
0200 WAIT 1  
0210 POPOBJ'TOAST_DOWN()  
**Part 6:** |  This demonstration simply creates a button on the screen and uses it as a shaped window. Once the button is displayed, it waits for the user to click it then fades from view. 0220 ! Set window to a become a button and wait for click  
0230 PRINT 'CS','4D',  
0240 BUTTON 10,@(0,0,20,7)="Hit this button"  
0250 POPOBJ'TOAST_UP()  
0260 WHILE 1  
0270 OBTAIN (0)*  
0280 IF CTL=10 THEN BREAK  
0290 WEND   
0300 POPOBJ'FADE_OUT()  
**Complete sample program below:**

> 0010 ! Create the Window to Popup  
>  0020 PRINT 'DIALOGUE'(5,5,20,7,"test"),'SR','CS','SHOW'(-1),  
>  0030 LET POPOBJ=NEW("*plus/obj/popup")  
>  0040 PRINT "TESTING",'LF',"*plus/obj/popup"  
>  0050 ! Toaster style popup/down  
>  0060 POPOBJ'TOAST_UP()  
>  0070 POPOBJ'TOAST_DOWN()  
>  0080 ! Fade in -- Hide first before moving into view area  
>  0090 PRINT 'SHOW'(-1), ! Hide before moving into view  
>  0100 POPOBJ'GOTO_CORNER()  
>  0110 POPOBJ'FADE_IN() ! Fade_in assumes window is hidden  
>  0120 POPOBJ'FADE_OUT() ! Fade_out leaves window hidden  
> 0130 ! Change Window to become a red/blue oval  
>  0140 PRINT 'CS','FILL'(2,"RED","BLUE"),'CIRCLE'(@X(10),@Y(4),@X(8),1.25),  
>  0150 PRINT 'TEXT'(@X(5),@Y(2),@X(15),@Y(6),"This is text within a shaped window","WC"),  
>  0160 ! Set window shape to oval   
>  0170 POPOBJ'SET_SHAPE()  
>  0180 POPOBJ'GOTO_CORNER() ! Adjust position due to removal of border  
>  0190 POPOBJ'FADE_IN()  
>  0200 WAIT 1  
>  0210 POPOBJ'TOAST_DOWN()  
>  0220 ! Set window to a become a button and wait for click  
>  0230 PRINT 'CS','4D',  
>  0240 BUTTON 10,@(0,0,20,7)="Hit this button"  
>  0250 POPOBJ'TOAST_UP()  
>  0260 WHILE 1  
>  0270 OBTAIN (0)*  
>  0280 IF CTL=10 THEN BREAK  
>  0290 WEND   
>  0300 POPOBJ'FADE_OUT()  
  
#### **Note:**  
When running under WindX, it is desirable to execute this logic on the workstation thus either instantiate the object or call the program using "[LCL]"/"[WDX]".
