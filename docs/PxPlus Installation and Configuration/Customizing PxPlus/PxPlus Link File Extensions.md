# Customizing PxPlus

**PxPlus Link File Extensions _(.pxplus_ and _.windx)_**|   
---|---  
  
PxPlus simplifies the creation and maintenance of shortcuts so that when an upgraded version of PxPlus or WindX is installed, any pre-existing shortcuts are automatically updated with the pathname of the current version being installed.

PxPlus does this by adding Windows registry entries to the workstation during the installation process regarding the handling of link files you create with the extensions, **_.pxplus_** (PxPlus installation) and **_.windx_** (WindX installation).

_(The link file extensions .pxplus and .windx were added in PxPlus 2017.)_

When a file with the extension **_.pxplus_** or **_.windx_** is opened, the registry entries tell Windows to run the most recently installed PxPlus and execute the program _*pxplink_ with the first argument being the .**_pxplus_** or **_.windx_** file pathname. The _*pxplink_ program then extracts the first line from the link file as the program to run, with the remaining lines in the file being the list of valid arguments. You can run any program in this way and add up to 50 arguments.

The location (directory) of the **_.pxplus_** or **_.windx_** file defines the location from which the application will be run, and as such, the location of the INI file and START_UP program.

**_Example:_**

You could create a file with the **_.windx_** extension for use with Simple Client-Server:

> OPEN CREATE PURGE (hfn) "c:\temp\somedir\server1.windx"  
>  PRINT (lfo) "*plus/cs/client"  
>  PRINT (lfo) "server1;4093"  
>  END

You can also select the _Send to_ option on the Windows right click popup menu to send the **_.pxplus_** or **_.windx_** file to the desktop, which creates a shortcut to it. When the shortcut is launched, the system will start the connection (application) in the directory in which the **_.pxplus_** or **_.windx_** file is located. To simplify the creation of these **_.windx_** files, a _Make Link File_ button has been added in the **[WindX Connection Manager](../../windx/connectionmrg.md)**.

The original pathname of the **_.pxplus_** or **_.windx_** file is saved in the global variable **%pxplink_path$**.

**_Example:_**

Let us suppose you have a business application that supported multiple companies. You could create a file with a **_.pxplus_** extension that would run "MENU", and the name of the company could be taken from the global variable **%pxplink_path$** :

> company$=%pxplink_path$  
>  if mid(lcs(company$),-7)=".pxplus" then  
>  company$=sub(company$(pos(dlm=company$,-1)+1),".pxplus","")

This means that you could create a _cats.pxplus_ file to use the "Cats" company and _dogs.pxplus_ file to use the "Dogs" company.

Each time that PxPlus or WindX is updated, the installation process will simply change the registry entry pointing to the PxPlus executable, and all existing **_.pxplus_** / **_.windx_** files (that you previously created) are automatically updated with the pathname of the current version being installed.

This method also makes installing links on workstations easier, as they can be included with the application installation, or they can be emailed or copied from common locations.
