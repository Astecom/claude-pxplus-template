# How To Tutorials

**How to Create a .NET Button (NOMADS)**|   
---|---  
  
Starting with PxPlus 2025, a **[.NET Interface](../Dot%20Net%20Interface.md)** was added to PxPlus that allows for the creation of .NET objects in your application.

#### **Important Note:**  
.NET requires that **Windows Desktop Runtime 8** be installed.

For this example, you will be creating a .NET button control in NOMADS. You will be adding various button properties (i.e. color and text) and creating an event when the button is pressed using the new interface.

**_Properties and Event of the .NET Button_**

The .NET button is associated with various properties that allow you to customize its appearance and behavior. For this tutorial, you will be shown just a few of the many possibilities that are available when using properties.

This table lists the properties and the event for the .NET button you will be creating.

**Object/Property** |  **Description**  
---|---  
BackColor |  Background color of the button.  
Enabled |  Makes the button available for use or disables it so that it cannot be used.  
ForeColor |  Color of the button text.  
Image |  Adds an image on the button.  
Text |  Adds text on the button.  
**Event** |  **Description**  
Click |  Event triggered by a button click.  
  
## How to Define the Main Object for the .NET Button

These steps show you how to create a new panel and add a .NET button control.

1. |  In **Library Object Selection** , launch the NOMADS Panel Designer by clicking the _Panel_ toolbar button or selecting _Objects_ > _Panel Object_ in the menu bar. Enter the name of the new panel. For this example, enter the panel name: **Net_Button** Click _OK_.  
---|---  
2. |  Select the _External Controls_ button on the toolbar. Draw an External Control on the panel.  
3. |  The **External Control Properties** window opens.  
4. |  In the _Object Name_ field, enter the control name or object handle. For this example, enter: **Net_BSave**  
5. |  For the _Ext. Control_ field, click the Query button. From the list that displays, select the type of External Control you want to create. For this example, select: **.NET Controls**  
6. |  Additional fields display for specifying a .NET DLL Name, Object Name and any optional Arguments. For the _DLL Name_ , you can either choose a specific path location for the **.dll** file by clicking the Browse button or enter the .NET DLL name. For this example, enter: **System.Windows.Forms**

#### **Note:**  
The _DLL Name_ does not require the **.dll** extension.  
  
7. |  In the _Object Name_ field, enter the name of the .NET object.

#### **Note:**  
.NET object names are **_case sensitive_**.

For this example, you will be creating a .NET button object. Enter: **System.Windows.Forms.Button**  
8. |  You can optionally pass in arguments when creating .NET objects. These arguments can be strings, numbers, or .NET object handles. See **[PvxHandle$](../directives/def_object.htm#Mark12)**. In the _Arguments (Optional)_ field, enter any optional arguments used by the .NET control. For this example, leave this field blank.  
9. |  Click _OK_ to exit the **External Control Properties** window and return to the NOMADS Panel Designer.  
10. |  Save and test the panel by clicking the _Save_ and _Test_ buttons on the toolbar. The button will look similar to the one below:  
  
## How to Add Text to the .NET Button

These steps show you how to add text to the .NET button control.

1. |  In the NOMADS Panel Designer, double click on the .NET button control on the panel to invoke the **External Control Properties** window. In the **External Control Properties** window, click the **Properties** tab to choose the properties, methods or events you would like to set.  
---|---  
2. |  For this example, you will be adding the text "Save" to the .NET button. Under the **Item** grid column, scroll down the list until you find the word _Text_. On this row, enter the _Value/Expression_ : **Save**  
3. |  Click _OK_. Save and Test the panel. The button will look similar to the one below:  
  
## How to Set Up the Default Program for the .NET Button

These steps show you how to set up a default program for the .NET button in the header **Panel Definition** window. From the Panel Designer, click the _Header Panel_ option on the toolbar or select _Panel_ > _Header_ from the menu bar.

To define the appearance of the control, you will need to create a default program with some logic. This logic will be additional objects or variables that are needed for the properties you will be using in the NOMADS panel.

In the header **Panel Definition** window, on the **Display** tab, enter a _Default Program_.

For this example, enter: **NOM_DOTNET_Button**

> ## How to Set Color for the .NET Button

These steps show you how to set color for the .NET button control.

1. |  In the header **Panel Definition** window, click the **Logic** tab. In the **Pre-Display** section, you will define a method in the program where you will set some logic to define the other objects needed for adding appearance.  
---|---  
2. |  Select _Perform_ from the drop box. Create a method called: **";Pre_Display_Logic"** This will perform the method where all the main objects and variables will be defined.  
3. |  Click the Program Logic button to the right of the drop box. The default PxPlus program editor will launch and will have created the method. **_Keep the program editor open as you will be adding to the program later._**  
4. |  You will now create a new object for **Color**. Insert this line and save the program: def object color,"[.NET]System.Drawing,System.Drawing.Color"  
5. |  Save the program in the editor if you haven't already done this.  
6. |  In the NOMADS Panel Designer, double click on the .NET button control on the panel to invoke the **External Control Properties** window. In the **External Control Properties** window, click the **Properties** tab. In the first grid, look for **BackColor** in the _Item_ column. For this example, you will be setting the color _PaleGoldenrod_. Select the _Exp_ check box and enter the _Value/Expression_ : color'PaleGoldenrod'Pvxhandle$  
7. |  Click _OK_. Save and Test the panel. The button will look similar to the one below:  
  
## How to Set the Color for the .NET Button Text

When setting colors, you also have the option to use RGB colors.

For this example, these steps show you how to set the color for the button text using the RGB code for the color Crimson, which is RGB: 220 20 60.

1. |  In the **External Control Properties** window, click the **Properties** tab. In the first grid, look for **ForeColor** in the _Item_ column. Select the _Exp_ check box and enter the _Value/Expression_ : **color'FromArgb(220,20,60)'Pvxhandle$**  
---|---  
2. |  Click _OK_. Save and Test the panel. The button will look similar to the one below:  
  
## How to Add an Image to the .NET Button

These steps show you how to add an Image to the .NET button control.

1. |  Load the default program, **NOM_DOTNET_Button** , which you created earlier. For this example, you will be defining another object called **Image**. The **Image** object will allow the placement of an image. Insert this line and save the program: def object img,"[.NET]System.Drawing,System.Drawing.Image"  
---|---  
2. |  Create a variable to hold the path to the image file using the **[PTH()](../functions/pth.md)** function. For this example, the variable name is image_path$. The path will be dependent on the location of the image you will be using. Insert this line and save the program: image_path$=pth("*plus\inomads\sysimage\checkmark.png")  
3. |  In the NOMADS Panel Designer, invoke the **External Control Properties** window. Click the **Properties** tab. In the first grid, look for **Image** in the _Item_ column. Select the _Exp_ check box and enter the _Value/Expression_ : **img'fromfile(image_path$)'pvxhandle$**. The **FromFile** object will look for the specified image location. The Image will default to the center of the text. In the next set of steps, you will be changing the alignment. **__**  
4. |  Click _OK_. Save and Test the panel. The button will look similar to the one below:  
  
## How to Align an Image on the .NET Button

1. |  Load the default program, **NOM_DOTNET_Button** , which you created earlier. For this example, you will be defining another object called **ContentAlignment**. The **ContentAlignment** object will allow the alignment of an image. The default is Centered. For this example, you will be applying a _Left_ alignment. Insert this line and save the program: def object img_align,"[.NET]System.Drawing,System.Drawing.ContentAlignment"  
---|---  
2. |  In the NOMADS Panel Designer, invoke the **External Control Properties** window. Click the **Properties** tab. In the first grid, look for **ImageAlign** in the _Item_ column. For this example, align the image to the left of the text. The _MiddleLeft_ property will be used with the _ImageAlign_ property. Select the _Exp_ check box and enter the _Value/Expression_ : img_align'Middleleft'pvxhandle$  
3. |  Click _OK_. Save and Test the panel. The button will look similar to the one below:  
  
## How to Set an Event

These steps show you how to set an event that shows a message box confirmation when the button is clicked.

For this example, the **Click** event will be triggered when a user clicks the button.

1. |  In the NOMADS Panel Designer, invoke the **External Control Properties** window. Click the **Properties** tab. In the second grid, look for **Click** in the _Event_ column. In the _Function_ column, select _Perform_ from the drop box In the _Logic_ cell, enter: **";Save_Clicked"**  
---|---  
2. |  Load the default program, **NOM_DOTNET_Button** , which you created earlier. Insert this method and save the program: Save_Clicked:  
msgbox "Information has been updated!","Save Confirmation"  
return  
3. |  Click _OK_. Save and Test the panel. In Test mode, click the button, and a message box will display.  
  
## Setting Other .NET Button Properties

**_How to Enable or Disable the .NET Button_**

These steps show you how to enable or disable the .NET button control.

1. |  In the **Extended Control Properties** window, click the **Properties** tab. In the first grid, look for **Enabled** in the _Item_ column. If the button is to be _Enabled_ , leave everything blank or enter 1 in the _Value/Expression_ cell.  
If the button is to be _Disabled_ , enter 0 (zero) in the _Value/Expression_ cell. For this example, enter **0** in the _Value/Expression_ cell.  
---|---  
2. |  Click _OK_. Save and Test the panel. The button is disabled.  
  
## How to Clean Up Objects

These steps show you how to clean up any objects that were defined.

1. |  From the NOMADS Panel Designer, invoke the header **Panel Definition** window for the Net_Button panel by clicking the _Header Panel_ option on the toolbar or selecting _Panel_ > _Header_ from the menu bar.  
---|---  
2. |  Click the **Logic** tab. In the **On Exit** section, perform the cleanup of any objects defined.  
3. |  Select _Perform_ from the drop box. Create a method called: **";On_Exit_Logic"** This will perform the method where all the objects will be dropped.  
4. |  If the program is not already loaded in the editor, click the Program Logic button to the right of the drop box to load the default program, **NOM_DOTNET_Button**. Insert this method and save the program:

> On_Exit_Logic:  
>  drop object color,err=*next  
>  drop object img,err=*next  
>  drop object img_align,err=*next  
>  return  
  
## PxPlus Program .NET Button (NOM_DOTNET_Button)

After completing this tutorial example, you should have a working program similar to the one below:

> Pre_Display_Logic:  
>  def object color,"[.NET]System.Drawing,System.Drawing.Color"  
>  def object img,"[.NET]System.Drawing,System.Drawing.Image"  
>  image_path$=pth("*plus\inomads\sysimage\checkmark.png")  
>  def object img_align,"[.NET]System.Drawing,System.Drawing.ContentAlignment"  
>  return   
> !   
> Save_Clicked:  
>  msgbox "Information has been updated!","Save Confirmation"  
>  return   
> !   
> On_Exit_Logic:  
>  drop object color,err=*next  
>  drop object img,err=*next  
>  drop object img_align,err=*next  
>  return

## See Also

**[.NET Interface](../Dot%20Net%20Interface.md)  
[How To Tutorials (for .NET Interface)](Dot%20NET%20Tutorials%20Intro.md)  
[DEF OBJECT Define Windows Object](../directives/def_object.md)  
[ON EVENT Event Processing](../directives/on_event.md)**
