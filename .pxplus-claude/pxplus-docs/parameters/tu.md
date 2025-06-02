# System Parameters

**'TU'** |  **_WindX Turbo Mode_**  
---|---  
  
##  Description

Gains efficiency of throughput by not requiring WindX to acknowledge messages for directives/functions that have no return value (e.g. a **WRITE** for a graphical control). This improves speed in NOMADS.

#### **Note:**  
WindX Turbo Mode is set on the host/server. In addition, when the **'TU'** parameter is **_On_** , you lose error detection capability at the host end - WindX reports errors locally (i.e. on the WindX client). Troubleshoot by changing the application logic or by turning **'TU' O _ff_**.

##  Default

**_Off_**

Each tokenized message sent by your server to WindX for the client is acknowledged and errors are reported to your server, guaranteeing that your application and WindX are fully synchronized (but at some cost to overall transmission speed).
