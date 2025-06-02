# Program Interaction

**Events Logic** |  **__**  
---|---  
  
Event-driven programming is a style of programming in which the program flow is determined by specific events that trigger related logic. In NOMADS, you can associate logic with events for specific controls, and that logic will be executed whenever that event occurs; e.g. specifying On Change logic for an Exit button will cause that logic to be executed whenever Exit is clicked.

The actual coding of the logic is explained under **[Event-Handler Routines](../Event-Handler%20Routines/Overview.md)**. This Help section looks at how to associate an event with its related event-handler; that is, _bind_ the event to its event handler.

NOMADS enables run-time logic to be executed automatically for the following events:

**Event** |  **Processing**  
---|---  
_Background Loading_ |  **_(Drop Boxes, List Boxes and Grids)_** Executed upon no user input. See **[Background Loading](../Event-Handler%20Routines/Background%20Loading.md)**.  
_Cells_ |  **_(Grids Only)_** Executed when an event occurs for a particular cell, column, or row. See **[Independent Cell or Row Logic](../../Creating%20Panel%20Controls/Grid%20Control/Independent%20Cell%20or%20Row%20Logic.md)**.  
_Load on Demand_ |  **_(List Boxes Only)_** Executed when a _load on demand_ signal occurs. See **[Load On Demand](../Event-Handler%20Routines/Load%20On%20Demand.md)**.  
_On Change_ |  Executed whenever focus leaves the associated control.  
_On Exit_ |  **_(Panel Objects Only)_** Executed just before the panel is terminated.  
_On Focus_ |  Executed whenever the associated control receives input focus.  
_Post Create_ |  Executed just after the control is drawn.  
_Post Display_ |  Executed just after the panel and all the controls are drawn.  
_Pre Display_ |  Executed prior to the display of the panel.  
_Prior Create_ |  Executed prior to the creation of a button.  
  
These events and actions are specific to the panel/control object with which they are associated. See **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.md)** and **[Creating Panel Controls](../../Creating%20Panel%20Controls/Introduction.md)**.

#### **Note:**  
During processing, NOMADS assumes that the selected library's default directory, prefix and message library are current while the library is being processed.

## See Also

**[Action and Parameters](Actions%20and%20Parameters.md)**  
**[Default Program](Default%20Program.md)**  
**[Program Editor](Program%20Editor.md)**
