# Events Logic   
  
**Default Program** |  **__**  
---|---  
  
For Perform and Call operations, if a _Default Program_ has been specified (on the **Display** tab of the **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.htm#display)**), then the program name may be omitted from the Perform or Call logic. In a case where a program name has been specified but does not exist on the system, NOMADS will attempt to run the _Default Program_ at the label specified. It is not required that all code be in the specified program. A different _"program;label"_ can be performed/called instead.

A label is **_mandatory_** to use the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)** or the **[Ed+](../../../Ed%20Program%20Editor.md)** program editor, but not for other applications. See **[Program Editor](Program%20Editor.md)**.

If you include a program name (absolute or relative path) in any **[Events Logic](Overview.md)** (e.g. in Post Display, _"program;label"_), that will override the panel's _Default Program_.
