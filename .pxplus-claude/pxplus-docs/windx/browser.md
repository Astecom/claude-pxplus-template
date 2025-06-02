# WindX™ Thin-Client

**Launching WindX from a Browser** |   
---|---  
  
## Browser Launching

One important feature of the Client Server interfaces is the ability to allow WindX to be initiated directly from a browser. This feature allows you to create Web pages that can directly launch a client connection to a host system.

To accomplish this, a few entries need to be added into the Client Windows Registry. These Registry entries enable the automatic launching of a client connection in response to initiating an URL request whose prefix is **"windx://"**.

The general format of the URL request is:

> **windx://_server_ /_port#_ /_prog args_**

If the server is running the Application Server:

> **windx://APS:_server_ :_port#_ /_prog args_**

If the server is running the PxPlus Simple Client Server (see **Note** below):

> **windx://_server@_ scs/_port#_ /_prog args_**

If you want to connect to the server using SSH (see **Note** below):

> **windx://_server@_ ssh _PPPP_ /_userid_ /_password_**

#### **Note:**  
**:scs** and **:ssh** are no longer allowed in the URL when running WindX due to security changes implemented by Microsoft.  
  
As of PxPlus 2025, **:scs** and **:ssh** have been replaced with **@scs** and **@ssh**.

**_Where:_**

|  **_server_** |  IP address/name of the server running the host program  
---|---|---  
|  **_port#_** |  Port address being monitored by the above  
|  **_prog_ _args_** |  Name of the program to run and any associated arguments replacing all spaces with **+** or **%20**  
|  **_PPPP_** |  Port to use if not the standard port 22  
|  **_userid_** |  Optional User ID to sign on with  
|  **_password_** |  Optional password to use  
  
**_Example:_**

> windx://myhost/10000/*winstar **+** -arg **+** order **+** pizza/pizza.en  
>  windx://myhost/10000/*winstar**%20** -arg**%20** order**%20** pizza/pizza.en

#### **Note:**  
The URL **_must_** adhere to normal URL encoding rules and **_not_** contain spaces. Insert **+**_(plus signs)_ or **%20** in lieu of spaces between or within any parameters in the URL.

Optionally, when using the NTHost or Simple CS Server, the port# can have a suffix of "**;Show"** appended to it. This will cause the main window to be displayed as opposed to minimized when the application launches. Normally, you will use this option when you want to run a simple text style application that will run from the main window.

To provide backward compatibility where Web pages may not have a type specification, the system will first try *NTHost but is able to detect and switch to either a Simple CS or Application Server interface depending on the host service provided.

## Registry Entries

The Windows registry entries required to make this work are as follows:

**HKEY_CLASSES_ROOT\windx**  
---  
|  <default> = "URL:windx"  
EditFlags = hex: 02,00,00,00,00  
URL Protocol = ""  
**HKEY_CLASSES_ROOT\windx\shell**  
|  <default> = ""  
**HKEY_CLASSES_ROOT\windx\shell\open**  
|  <default> = <none>  
**HKEY_CLASSES_ROOT\windx\shell\open\command**  
|  <default> = "c:\\\pxplus\\\pxplus.exe -MN *url -arg %1"  
**_The pathname here will be adjusted to point to the proper EXE on the client machine._**  
**HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\URL\Prefixes**  
|  windx. = "windx://"  
**_A dot ( . ) follows 'windx' in the above registry entry._**  
  
#### **Note:**  
The normal Windows installation process will automatically add all the required registry entries needed to service the **windx://** requests.
