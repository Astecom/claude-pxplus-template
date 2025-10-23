# Event-Handler Routines   
  
**Background Loading** |  **__**  
---|---  
  
The Background Loading event in NOMADS allows you to define a program/entry point to be invoked to load the contents of a **[List Box](../../Creating%20Panel%20Controls/List%20Box%20Controls/Overview.md)**, **[Drop Box](../../Creating%20Panel%20Controls/Drop%20Box%20Control/Overview.md)** or **[Grid](../../Creating%20Panel%20Controls/Grid%20Control/Overview.md)**. At run time, NOMADS will check for the presence of user input, and if none is received, the Background Loading event is triggered. Multiple controls on the panel can be set up to load in the background using this functionality.

This logic consists of loading one or more lines into the control, which should return reasonably quickly so that NOMADS can recheck for user input. While the loading is executing, the user can still interact with the other controls on the panel.

The application is responsible for setting a load completion flag. NOMADS continues to perform the load logic until this flag is set.

The control can also be forced into a reload by simply setting a reload flag. The application can set this flag when various fields change; e.g. if the list box or grid contained an invoice number, the flag could be set to reload whenever the customer number changed.

A reload is executed automatically when moving between tabs.

## Defining Background Loading

To assign Background Loading logic for a **List Box** , **Drop Box** or **Grid** control, click the _Background Loading_ check box on the **Attributes** tab (using the **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** version of the NOMADS designer). Then, click the associated _Logic_ button to invoke the **Background Loading Logic** dialogue. Enter the program/entry point to be performed, called, or executed to load the control.

## Terminating a Load/Forcing a Reload

The status of a Background Load is stored in the variable _controlname_.load. The four possible values are:

**0** |  __ |  _Load not yet completed_ |  |  Value is assigned after panel is drawn.  
---|---|---|---|---  
**1** |  __ |  _Load completed_ |  } |  Set by the application.  
**-1** |  __ |  _Force reload_ |  }|   
**-2** |  |  NOMADS assigns this value when moving between tabs.  
  
To end a load, simply set _controlname_.load equal to 1.

#### **Important Note:**  
NOMADS continues executing the load logic until this flag is set.

To force a reload of a list box or grid set _controlname_.load equal to -1. When the loading is complete, be sure to set _controlname_.load equal to 1.

**_Example:_**

The following example loads two list boxes using the background load option:

> PreDisplay_Logic:  
>  x=0,z=0,c=0,y=0  
>  EXIT  
>  !   
>  Load_LB2:   
>  z=z+100  
>  IF z>10000 \  
>  THEN lb2.load=1;  
>  EXIT  
>  SETTRACE PRINT "loading another 100 items starting at "+ \   
>  STR(c)+" for lb2"   
>  FOR I=c TO z  
>  LIST_BOX LOAD LB2.CTL,0,STR(I)   
>  NEXT   
>  c=z+1  
>  EXIT  
>  !  
>  Load_LB3:  
>  y=y+100  
>  IF y>80000 \  
>  THEN lb3.load=1;  
>  EXIT  
>  SETTRACE PRINT "loading another 100 items starting at "+ \  
>  STR(x)+" for lb3"  
>  FOR I=x TO y  
>  LIST_BOX LOAD LB3.CTL,0,STR(I)  
>  NEXT  
>  x=y+1  
>  EXIT
