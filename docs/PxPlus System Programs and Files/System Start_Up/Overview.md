# PxPlus System Programs and Files  
  
***START.UP** |  **_System Start_Up_**  
---|---  
  
***START_UP** is the general system start-up program and is always executed during PxPlus initialization or after a **[START](../../directives/start.md)** directive. It displays the main system start-up screen that contains the PxPlus copyright and serial number messages. The program then calls the user's "START_UP" program if it exists. The user "START_UP" program is where default system parameters would be altered or global variables would be initialized.

#### **Note:**  
Since this program and any user START_UP program are CALLed during system initialization, they should not attempt to initiate any application programs. If you attempt to have your START_UP program run your application, any error in your application may result in an exit back to PxPlus Command mode with no current program.
