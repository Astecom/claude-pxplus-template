# NOMADS Graphical Application

**Panel Designer** |  **__**  
---|---  
  
A **_panel_** (also known as a dialogue, window or form) is a display window that is under the control of your application when running in a graphical operating system (i.e. MS Windows). It delivers the layout for the panel controls required by the user to interact with your application.

The NOMADS Panel Designer is the primary work area for drawing, defining and maintaining the graphical user interface components of a panel.

Starting with PxPlus 2025, the NOMADS+ Toolbar is the panel designer by default, but this can be changed, if desired. Panel designer settings are saved by project. See [**Working with Projects**](../../PxPlus%20IDE/Introduction%20to%20PxPlus%20IDE.htm#projects).

Below is an example of the [**NOMADS+ Toolbar**](../../NOMADS+%20Toolbar/Introduction.md) version of the Panel Designer. The design panel on the right shows the _ProductCode_ multi-line control is selected, and the NOMADS+ Controls grid on the left shows the corresponding PRODUCTCODE row is highlighted.

## Designing a Panel

The NOMADS Panel Designer can be accessed from the **[Library Object Selection](../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** window. This window displays after creating a new library or opening an existing library.

You can also select the **[Panel Definition](../NOMADS%20Development/Panel%20Def_ide.md)** task on the IDE Main Launcher.

_(The Panel Definition task on the IDE was added in PxPlus 2023 Update 1.)_

In Library Object Selection, select the _Designer_ menu at the top, and then choose which version of the Panel Designer to use when creating and modifying panels: **[NOMADS+ Toolbar](../../NOMADS+%20Toolbar/Introduction.md)**, **[Folder Style](Folder%20Style/Using%20the%20Folder%20Style.md)** and **[Property Sheets](Properties%20Table/Overview.md)**.

To create a new panel or edit an existing panel, use one of the methods listed below. These methods vary slightly depending on the view type selected on the **[Views](../NOMADS%20Development/Library%20Object%20Selection/Menu%20Options.htm#views)** menu: _Button View, Toolbar View_ or _Menubar_ _View_. An existing panel can also be selected from the **[Object List](../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.htm#objectlist)**.

**View Type** |  **Method**  
---|---  
_Button View_ |  In the _Name_ field (below the Object List), enter the name for the new/existing panel. Then, either click the _Panel Object_ button or select _Objects_ > _Panel_ from the menu. See **Note** below.  
_Toolbar View_ |  Click the _Panel_ button on the toolbar, and then enter the name for the new/existing panel. You can also select the _Objects_ > _Panel Object_ from the menu. See **Note** below.  
_Menubar_ _View_ |  Select _Objects_ > _Panel Object_ from the menu, and then enter the name for the new/existing panel. See **Note** below.  
  
#### **Note:**  
When entering a new panel object name, valid characters are: letters (A-Z, a-z); numbers (0-9); **~**  _(tilde)_ ; **@**  _(at symbol)_ ; **.**  _(period)_ ; **$**  _(dollar sign)_ ; **_**  _(underscore)_ ; **-**  _(dash)_ ; **+**  _(plus sign)_. If an invalid character is used, a message will display.  
  
**_Work Area_**

Creating a new panel object launches a blank dialogue in the Panel Designer. This dialogue provides the standard work area for creating panel controls and designing the layout of your new panel object.

Panel Designer tools and functions can be accessed by using a variety of different methods: **[Edit Keys](Work%20Area/Edit%20Keys.md)**, **[Menu Options](Work%20Area/Menu%20Options.md)**, **[Tool Bar Options](Work%20Area/Tool%20Bar.md)** and **[Controls Toolbar](Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**.

#### **Helpful Tip:**  
If you are using a machine that is configured for two monitors, you may prefer to stretch this work area so that it spans across both monitors. This gives you space to work on your panel in one monitor while keeping the Controls Toolbar and the Panel Designer displayed for easy access in the other monitor.

**_Edit Mode vs. Test Mode_**

The Panel Designer opens in _edit mode_. This mode allows you to create/modify panel controls and set their design properties. You may switch your panel into _test mode_ by clicking _Test_ on the tool bar or by selecting _Panel > Test_ from the menu bar. This processes the panel and allows panel controls to function in an interactive state (as they would appear to the user).

To exit _test mode_ and return to _edit mode_ , press the**Esc** or the **F4** key, or click the close button on the test panel (if it exists).

**_Design Properties_**

NOMADS employs a set of design properties to control the appearance and functionality of all panel components. These settings are usually modified using the NOMADS Panel Designer. However, some properties related to size and layout are changed automatically whenever objects are moved, copied or resized using other tools in the Panel Designer. See **[Modifying Objects](Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.md)**.

Some properties are common to all panel components, while others are specific to the functionality of a particular control type. For example, font and color settings may be based on **[System Defaults](../System%20Maintenance%20Tools/System%20Options/System%20Defaults.md)** that are inherited by every panel object (although most can be overridden by individual control properties).

The properties used to establish the layout of the panel itself are maintained in the **[Panel Header](Panel%20Header/Overview.md)**.

## See Also

**[Creating Panel Controls](../Creating%20Panel%20Controls/Introduction.md)**
