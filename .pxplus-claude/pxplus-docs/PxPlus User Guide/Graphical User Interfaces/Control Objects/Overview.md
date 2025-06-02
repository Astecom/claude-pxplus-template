# Graphical User Intefaces

**Control Objects** |  **__**  
---|---  
  
Control objects are the graphical components within a panel that allow users to interact with the application. This section describes the different types of controls that can be added to a panel using a directive and how various attributes, settings and logic may be applied to controls:

**** |  **[Button](Button.md)** |  **[List Box](List%20Box.md)** |  **[Scrollbar](Scrollbars.md)**  
---|---|---|---  
**** |  **[Chart](Chart.md)** |  **[Menu Bar](Menu%20Bar.md)** |  **[Variable Drop Box](Variable%20Drop%20Box.md)**  
**** |  **[Check Box and Tri-State](Check%20Box.md)** |  **[Multi-Line](Multi-Line.md)** |  **[Variable List Box](Variable%20List%20Box.md)**  
**** |  **[Drop Box](Drop%20Box.md)** |  **[Popup Menu](Popup%20Menu.md)** |   
**** |  **[Grid](Grid.md)** |  **[Radio Button](Radio%20Buttons.md)**|   
  
To create these controls using the **[NOMADS Panel Designer](../../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**, see **[Creating Panel Controls](../../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Introduction.md)**.

When control objects are manipulated, they can generate **[CTL Values](../Introduction.htm#ctlvalues)** (control signal codes) into the input buffer to signal events that have occurred, such as receiving focus or changing values. **EOM** values (End-Of-Message strings) are also updated to indicate how an event occurred; i.e. via mouse-click or by pressing Enter.

The CTL value of each object is determined when the control object is defined. A program generally monitors the input queue for these values and triggers logic associated with the various events. The **[Example Programs](../Example%20Programs/Overview.md)** show how to build an event-driven application.

When monitoring the input queue for CTL values, you can also monitor for negative CTL values that indicate certain keystrokes, mouse-clicks and other events, such as resizing the panel. See **[Negative CTL Definitions](../../../appendix/negative_ctl_definitions.md)**.

#### **Note:**  
When focus is on certain control objects, such as a List Box or Grid, many keystrokes (Up Arrow, Down Arrow, Page Up, Page Down, etc.) are utilized directly by the control object itself and are not available to the input queue.
