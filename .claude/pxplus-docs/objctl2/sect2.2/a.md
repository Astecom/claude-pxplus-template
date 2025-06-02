# Pseudo Objects

**Using Window Handles** |  **__**  
---|---  
  
Specific window properties can be accessed through the user of Pseudo Window object handles. The following properties are supported:

**Graphic Mode Only**  
---  
**Pseudo-Property** |  **Description** |  **Access**  
'Caption$ |  Caption for the window |  R/W  
'Height |  Window height in pixels |  R/W  
'Hwnd  |  Window handle |  R  
'Left |  Window left most position in pixels |  R/W  
'LookAndFeel |  Window style (2D-Windows 3.1, 3D-Win95, 4D-XP) |  R/W  
'MessageBar$ |  MessageBar segment 0 for the window (v10.10) |  R/W  
'Parent |  Parent Window number |  R  
'Top |  Window topmost pixel location |  R/W  
'Visible |  0 if window is hidden else 1 |  R/W  
'Width |  Window size in pixels |  R/W  
  
**Text and Graphic Mode**  
---  
**Pseudo-Property** |  **Description** |  **Access**  
'BackColour  |  Background colour |  R/W  
'Columns |  Columns wide |  R  
'CtlName  |  "Window" |  R  
'CurrentColumn  |  Current column number |  R/W  
'CurrentLine  |  Current line number |  R/W  
'DefaultBackColour  |  Default background colour |  R/W  
'DefaultTextColour  |  Default text colour |  R/W  
'LeftColumn  |  Current leftmost column for 'Scrolled' window |  R  
'Lines |  Number of lines high |  R  
'TextColour  |  Current text colour |  R/W  
'TopLine  |  Current top offset lines for 'Scrolled' window |  R  
  
**_Example:_**

> Sysobj=new("*SYSTEM")  
> WdwHdl=SysObj'Window(0) ! This will yield a pseudo handle to the current window  
>    
>  for I=1 to WdwHdl'lines  
>  print @(0,I),"Line:",I  
> 
