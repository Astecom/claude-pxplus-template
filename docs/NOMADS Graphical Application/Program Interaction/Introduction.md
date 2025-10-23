# NOMADS Graphical Application  
  
**Program Interaction** |  **__**  
---|---  
  
NOMADS is designed to simplify the development and execution of a graphical user interface in PxPlus; however, there are many different ways to control how your NOMADS graphical components will work within your PxPlus application.

***winproc** and the panels defined in a NOMADS library are launched directly via the PxPlus **[PROCESS](../../directives/process.md)** directive. The **[NOMADS Panel Designer](../Panel%20Designer/Introduction.md)** provides a menu-driven approach for linking run-time logic to specific controls. All of your event-handling code can be composed and modified in the PxPlus program editors, **[*IT - Integrated Toolkit](../../toolkit1/overview.md)** and **[Ed+](../../Ed%20Program%20Editor.md)**, which are fully integrated with the NOMADS development environment. The default program editor is the *IT - Integrated Toolkit. To make **[Ed+](../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_.

_(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_

PxPlus also includes various syntax elements and utilities that can be used within an application to invoke and maintain programmatically various NOMADS components and functionality. A list of **[NOMADS Variables](../Appendix/NOMADS%20Variables/Overview.md)** is available for use in your program. NOMADS components can be managed and controlled through the use of **[PxPlus Object-Oriented Programming](Object-Oriented%20Programming/Overview.md)** (OOP). Using the **[PxPlus COM](COM%20Support/Overview.md)** interface allows you to incorporate ready-made (third party) Windows components directly into your NOMADS panels. **[NOMADS Run-Time Utilities](NOMADS%20Run-Time%20Utilities/Run-Time%20Utilities%20Intro.md)** can be conveniently accessed while processing a panel in the NOMADS environment.

This Help section explains the reciprocal, coactive handling of NOMADS applications in PxPlus.
