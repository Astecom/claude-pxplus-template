# Events Logic 

**Program Editor** |  **__**  
---|---  
  
The PxPlus graphical program editors, [***IT - Integrated Toolkit**](../../../toolkit1/overview.md) and **[Ed+](../../../Ed%20Program%20Editor.md)**, are fully integrated with the **[Panel Designer](../../Panel%20Designer/Introduction.md)** for composing and modifying **[Events Logic](Overview.md)**. The default program editor is the *IT - Integrated Toolkit. To make Ed+ the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_.

_(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_

Click the Program Logic button beside the _Perform_ or _Call_ actions to edit the specified event-handling program _"program;label"._

If both _program**and** label_ exist, the cursor in the program editor window will be positioned automatically at the specified _label_ so that you can begin editing at that location in the _program_.

If the _program_ does not exist, it will be created for you as the program editor is launched.

If the specified _label_ does not exist, new **LABEL** and **RETURN** statements will be placed at the bottom of the existing _program_ for you.

## Label Types

Depending on the criteria for the panel or control logic, the following naming conventions are applied to create the specified label within the program editor:

**Label** |  **Panel or Control Logic**  
---|---  
PREDISPLAY__panel_ |  _Panels_ , Pre-Display  
POSTDISPLAY__panel_ |  _Panels_ , Post-Display  
ONEXIT__panel_ |  _Panels_ , On Exit  
INITIALIZE__control_ |  _All controls_ , Post Create _(or_ Prior Create _for Button_)  
FOCUS__control_ |  _All controls_ , On Focus  
PROCESS__control_ |  _All controls_ , On Change  
VALIDATE__control_ |  Multi-Line Validator logic  
FORMAT__control_ |  Multi-Line Formatter logic  
BACKGROUND__control_ |  List Box _and_ Grid, Background Loading  
DEMAND__control_ |  List Box, Load on Demand  
CELL_FOCUS__control_ C _n_ R _n_ |  Grid, On Focus _for cell (column/row)_  
CELL_CHANGE__control_ C _n_ R _n_ |  Grid, On Change _for cell (column/row)_  
CELL_VALIDATOR__control_ C _n_ R _n_ |  Grid, Validator logic _for cell (column/row)_  
CELL_FORMATTER__control_ C _n_ R _n_ |  Grid, Formatter logic _for cell (column/row)_  
PRELOAD__control_ |  _Smart Controls_ , Pre-Load  
POSTLOAD__control_ |  _Smart Controls_ , Post-Load  
_eventname_control_ |  External control event name  
  
**_Where:_**

_control_ |  Control name  
---|---  
_panel_ |  Panel name  
C _n_ R _n_ |  Cell column number or name and row number  
_eventname_ |  Event name (See **[Defining an External Control](../../Creating%20Panel%20Controls/COM%20Control/COM%20Control.htm#definingCOM)** for information on defining events for an external control.)
