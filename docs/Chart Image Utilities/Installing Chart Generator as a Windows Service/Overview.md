# Running on the Web

**Installing Chart Generator as a Windows Service** |  **__**  
---|---  
  
The PxPlus Chart Generator can be installed as a Windows service by using one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Installation and Setup_ category. Select _Install Windows Service_ to launch the **[Install Windows Services](../../Install%20Windows%20Services.md)** window.  
  
From the _Type of Service_ drop box, select _AutoChart_ _Scheduler_.  
  
After entering the service settings in the grid, select the _Install_ button.  
From the PxPlus Command line |  Enter: **RUN "*plus/winutl/chartservice"**  
  
Installing the utility creates a Windows Service called PxPlusCharts, which will spawn a background task to run the PxPlus Chart Generator.

If installing, you will be asked to provide the configuration settings _(Starting Directory)._ It will then install into your Windows services registry. You may be required to start PxPlus as an administrator to allow the registry updates to take effect.

After installation is complete, the next step is to open the Windows _Control Panel_ and select _Administrative Tools_ where, in the _Services_ section, you can now find the PxPlusCharts service. The default setting for this service is _Manual_ ; however, this can be changed.

#### **Note:**  
Windows services, by default, do not have permission to access Windows network shares. If you want to schedule chart image generation with a network share as a destination or the chart uses a network share, then you must modify the service log on to use a Windows user account with permission to the network share.
