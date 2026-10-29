# Activation and Registration

**Online Registration**|   
---|---  
  
## Online Registration Process

PxPlus includes a built-in online registration process that registers your PxPlus installation with PVX Plus Technologies and converts a temporary activation into a permanent activation.

During PxPlus installation, you are prompted to enter your product key (Activation Key), provided in your **[Product Activation Email](../Getting%20Started.htm#email)** from PVX Plus. The Activation Key is a 25-character code made up of five segments of five characters each. It contains essential information, such as the License type purchased, Serial Number and User Count.

This information is stored internally in the Activation Keys control file, **[ACTIVATE.PVX](../../PxPlus%20System%20Programs%20and%20Files/System%20Activation%20Information/Overview.md)**, for your PxPlus installation. **_This file must not be modified or moved!_**

## After Installation

Once PxPlus is installed, you can proceed in **_one_** of the following ways:

**_Option 1:_**_ **Run Online Registration Immediately (Permanent Activation)**_

When you run PxPlus for the first time after installation, the system checks whether your product has been registered. If it is not registered, a message appears prompting you to complete the registration.

If your system is connected to the internet, you can register online right away. The Activation Key entered during installation is used to retrieve and apply all remaining keys for your Serial Number automatically, so no manual entry is needed. You will be prompted to restart PxPlus to complete the process.

#### **Note:**  
It is strongly recommended that you register your product immediately after installation to ensure uninterrupted use of PxPlus.

**_Option 2: Run PxPlus with a Temporary Activation_**

You can run PxPlus using a **[Temporary Activation](Overview.htm#temporary)** for up to **_30 days_** using the key(s) provided in your **[Product Activation Email](../Getting%20Started.htm#email)**:

  * Enter your **_Activation Key_**. (This key was likely entered previously during PxPlus installation.)
  * Enter your **_PxPlus Activation Key_** , if provided.
  * Enter any add-on key(s), if provided, to complete the temporary activation process.



Before this 30-day period expires, you must complete the online registration (when connected to the internet) or complete the Manual Activation process (see **_Option 3_** below). If the 30-day period expires, PxPlus will no longer start.

**_Option 3: Manual Activation_**

If your system is not connected to the internet or if you are unable to complete the online registration, you must submit a Helpdesk ticket to PVX Plus Support to request a manual activation. For the steps, see **[Manual Activation](Manual%20Activation.md)**.

An administrative fee may apply for licenses not enrolled in the **[Continuous Care Program (CCP)](Overview.htm#ccp)** and for unsupported versions.

## Running Online Registration

To run the online registration, use **_one_** of the following methods:

**Location** |  **Method**  
---|---  
From the Windows desktop |  Click the PxPlus _Register Online_ shortcut (see **[Windows Installation](../Installation%20Instructions/Windows%20Installation.htm#shortcuts)**).  
From the Windows **Start** menu |  Locate _PxPlus xxxx_ in the list of apps and select _Register Online_.  
From the **[PxPlus IDE Main Launcher](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Installation and Setup_ category and select _Register Online_.  
From PxPlus Command line |  On the _Utilities_ menu, select _Register Online_.  
From PxPlus Command line |  Enter: **REGISTER** (see **[REGISTER](../../commands/register.md)** extended command).  
From PxPlus Command line |  Enter: **RUN "*plus/reg/net"**  
From PxPlus Command line  
 _(no starting/lead program)_ |  Run PxPlus without specifying a starting/lead program. The system checks to determine if the product is registered. If it is not registered, the system will prompt you to register it online. Select _Yes_ to initiate the Online Registration process.  
  
## See Also

**[Licenses and Modes of Activation](Overview.md)  
[Registration Issues](Resolving%20Registration%20Issues.md)  
[License Management](License%20Management.md)**

 

 

 
