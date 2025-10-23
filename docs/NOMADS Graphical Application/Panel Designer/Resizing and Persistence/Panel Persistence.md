# Resizing and Persistence 

**Panel Persistence** |  **__**  
---|---  
  
NOMADS panel persistence makes it possible to save panel size and location information on the termination of a panel and to restore that panel to the same size and location the next time it is created.

#### **Note:**  
This applies only to dialogues and query objects. Panel persistence is **_not_** available via **[Test Mode](../Introduction.htm#editmode)** in the Panel Designer.

**_Activating Panel Persistence_**

To enable panel persistence at run time, your application must **CALL** or **PERFORM** the PxPlus program ***winpnl** or set **%NOMADS'Panel_Info_Prog$="*winpnl"**. See **[%NOMAD_Panel_Info_Prog$](../../Appendix/NOMADS%20Variables/Overview.htm#panelinfoprog)**. This program saves and retrieves panel information via the data file **_panel.inf_** located in the ***win** directory. Doing this turns **_On_** panel persistence **_system-wide_**.

You may use a program other than ***winpnl** to store and retrieve panel information. If you choose to write your own program, load the **%NOMAD_Panel_Info_Prog$** variable with the name of the program that will read and write the panel information to a file. The program will be called and must have two entry points: **GET_PANEL_INFO** , which retrieves the stored location and size of the specified panel, and **SAVE_PANEL_INFO** , which stores the location and size of the specified panel to a disk file. Details of the **CALL** syntax and the required arguments can be found by listing ***winpnl**.

**_Suppressing Panel Persistence_**

By default, when panel persistence is turned **_On_** , it affects all dialogue panels and queries. However, there may be certain instances when the desired location of a panel (or query) is the one that was specified in the _original_ panel (or query) definition. In these instances, panel persistence can be overridden. To do this, several methods are available.

Dialogue panels can sometimes be defined with **[Relative](../Panel%20Header/Overview.htm#position)** positioning, which causes a panel to be placed in a specific location in relation to the parent panel at run time. For these panels, the preference may be to maintain relative positioning. In these cases, panel persistence can be overridden by setting the **[%NOMADS'RelPnl_Suppress_Persistence](../../Appendix/NOMADS%20Variables/Overview.htm#relpnlsuppresspersistence)** property. Available settings are:

|  **0** |  _Panel persistence is not suppressed**(Default)**_  
---|---|---  
|  **1** |  _Suppress panel persistence (location & size)_  
|  **2** |  _Suppress location persistence only (panel size persists)_  
  
For any dialogue panel defined with _Relative_ , _Absolute_ or _Centered_ positioning, persistence can be controlled at the **_panel_** level by setting the _Panel Persistence_ attribute in **[Panel Header Properties](../Panel%20Header/Overview.htm#panelpersistence)**. Available settings are:

|  _Default_ (based on **[%NOMADS'Panel_Info_Prog$](../../Appendix/NOMADS%20Variables/Overview.htm#panelinfoprog)** and **[%NOMADS'RelPnl_Suppress_Persistence](../../Appendix/NOMADS%20Variables/Overview.htm#relpnlsuppresspersistence)** settings). See **Note** below.  
---|---  
|  _Suppress persistence (location & size)_  
|  _Suppress location persistence only_  
  
#### **Note:**  
The _Panel Persistence_ setting in **Panel Header Properties** overrides the [**%NOMADS'RelPnl_Suppress_Persistence**](../../Appendix/NOMADS%20Variables/Overview.htm#relpnlsuppresspersistence) setting for panels with **_Relative_** positioning only.

**_Suppressing Query Persistence_**

Panel persistence can be suppressed for Queries (for **[Query+](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.htm#queryplus)** and **[Classic Query](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.htm#classicquery)**) on a **_system-wide_** basis by setting the **[%NOMADS'Query_Suppress_Persistence](../../Appendix/NOMADS%20Variables/Overview.htm#querysuppresspersistence)** property. The settings for this property are the same as for the **%NOMADS'RelPnl_Suppress_Persistence** property above:

|  **0** |  _Do not suppress persistence_(if set)_**(Default)**_  
---|---|---  
|  **1** |  _Suppress persistence_(location/size of query will be the original location/size)  
|  **2** |  _Suppress location persistence_(location will be the original location, but size will persist if changed)  
  
_(Support for suppressing panel and query persistence was added in PxPlus 2019.)_
