# Panel Designer

**Drawing and Modifying Panel Objects** |  **__**  
---|---  
  
The various graphical components on a panel may be drawn or modified by using the creation tools selected from the **[Controls Toolbar](Controls%20Toolbox.md)** or the _Controls_ menu. Most of the graphical objects built in NOMADS are typical to MS Windows, like those that can be created in Visual Basic or C++. These components can also be built directly in PxPlus using directives such as **[BUTTON](../../../directives/button.md)** or **[LIST_BOX](../../../directives/list_box.md)**, and mnemonics such as **['DIALOGUE'](../../../mnemonics/dialogue.md)** or **['WINDOW'](../../../mnemonics/window.md)**. The code for creating graphical controls is interpreted by PxPlus and then passed to Windows to generate the graphical user interface for the application running in PxPlus.

When you develop these components in NOMADS, much of the programming is handled for you. Instead of typing lines of code in PxPlus to define the size, placement and attributes, you simply draw the objects using your mouse and then select the desired attributes using the associated dialogues and menus.

The information needed to create an object is stored in a library that is used by the NOMADS engine ***winproc** to build the controls and process events at run time.

## See Also

**[Creating New Objects](Creating%20New%20Objects.md)**  
**[Selecting Existing Objects](Selecting%20Existing%20Objects.md)**  
**[Modifying Objects](Modifying%20Objects.md)**  
**[Tab Order](Tab%20Order.md)**  
**[Library Browse](Library%20Browse.md)**
