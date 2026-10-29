# License Management

**Sharing the PxPlus Activation File**|   
---|---  
  
PxPlus allows you to share the common license file, **[ACTIVATE.PVX](../../PxPlus%20System%20Programs%20and%20Files/System%20Activation%20Information/Overview.md)**, between different instances and versions of PxPlus. Sharing the license file allows you to distribute the user counts between different systems or enable PxPlus version testing of your application.

If you want to do the opposite and need one machine to run PxPlus with multiple licenses, see **[Running PxPlus with Multiple Licenses](Running%20PxPlus%20with%20Multiple%20Licenses.md)**.

## Prerequisites

To share the license file, all installations must be of the same operating system and the same PxPlus machine class. An example would be Microsoft Windows (machine class 001), X86 Linux platforms (all 32-bit or all 64-bit), etc.

Each individual installation must have access to the PxPlus activation file and the directory in which it resides. This can be direct access (both on the same computer), a shared mapped drive or the UNC name (such as "//mainserver/pxplus/PxpKeys/ACTIVATE.PVX").

## Sharing the License File

While there are many ways to share the license file, the most common approaches are explained below. The best approach will depend on your intended use and the environment in which you will be working (e.g. Production vs. Test/Development and Windows vs. Linux).

**_For Windows and Current UNIX/Linux Environments_** |  The application INI (_pxplus.ini_) file can be used by including an **ActivationKey** setting:      **[Config]  
**      **ActivationKey=C:\PVX Plus Technologies\PxpKeys** The **ActivationKey** entry in the **Config** section of the _pxplus.ini_ file must point to the common activation file. See **[INI Contents](../Customizing%20PxPlus/INI%20Contents.md)**.  
---|---  
**_For Windows and UNIX/Linux Environments - Back to and Including ProvideX v9_** |  You can include a **K:** Command line activation parameter when launching PxPlus:      **pxplus.exe k: "//MyMainServer/lib/KEYS"** See **[Command Line Activation Parameters](../Installation%20Instructions/Command%20Line%20Activation%20Parameters.md)**.  
**_For Windows and UNIX/Linux Environments - Back to and Including PxPlus v8_** |  The **[PVXKEY](../Customizing%20PxPlus/Environment%20Variables.htm#Mark20)** environment variable can be set to the directory where the ACTIVATE.PVX file is found:      **PVXKEY=//MyMainServer/lib/KEYS**  
  
## Special UNIX/Linux Sharing Option

While all the above approaches will work on UNIX/Linux systems, the simplest approach on these systems would be to use a UNIX/Linux file system link between the multiple installations.

**_Example:_**

If you had two versions of PxPlus installed, one in /usr/pxplusv11 and the other in /usr/pxplusv12, you could first register and activate the software in /usr/pxplusv11 and then issue the following Linux command to share the ACTIVATE.PVX file:

> ln /usr/pxplusv11/lib/ACTIVATE.PVX /usr/pxplusv12/lib/ACTIVATE.PVX

You can use either a hard link or symbolic link (ln -s) if the two installations are on different systems.

 

 

 
