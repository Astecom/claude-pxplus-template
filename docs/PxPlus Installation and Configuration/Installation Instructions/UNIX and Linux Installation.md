# PxPlus Installation and Setup

**Download and Installation (UNIX/Linux)** |  **_ _**  
---|---  
  
## Before Downloading

Review the checklist below to help ensure an efficient download and installation:

  * Have your PVX Plus **[Product Activation Email](../Getting%20Started.htm#email)** readily available, as it contains your product Serial Number and Activation Key(s).
  * Verify that your system is connected to the internet for [**Online Registration**](../Licensing%20and%20Activation%20Keys/Online%20Registration.md). If it is not, be prepared to perform the [**Manual Activation**](../Licensing%20and%20Activation%20Keys/Manual%20Activation.md) process.
  * On the operating system where you will install PxPlus, check which distribution and which version it is. This can be done using a command such as **_cat /etc/os-release_** or **_hostnamectl_**. Knowing the distribution and version allows you to select the correct download.
  * To help ensure an efficient download and installation, follow the steps below for **[Downloading](UNIX%20and%20Linux%20Installation.htm#download)** and **[Installing](UNIX%20and%20Linux%20Installation.htm#install)** PxPlus.



If you need assistance, submit a Helpdesk ticket to PVX Plus Support at **[https://helpdesk.pvxplus.com](https://helpdesk3.pvxplus.com/)**. Select the **_Open a New Ticket_** button or top menu bar option.

Enter your support request and include the following:

  * A valid email address
  * Your full name
  * Serial Number of the PxPlus license related to the issue **_(Do not include the license Activation Keys)_**
  * PxPlus versions and types of equipment
  * Description of the problem and symptoms (only one problem description per ticket)



#### **Important Note:**  
To help resolve your issue as quickly as possible, all requested information must be provided. Missing details will result in delays.

##  Downloading PxPlus

Follow these steps for downloading PxPlus (UNIX/Linux):

1. |  Open the **[Downloads](https://home.pvxplus.com/downloads.md)** page on the PVX Plus website.  
---|---  
2. |  Scroll to the **Download Center** section, where you will find a list of recent versions (including the latest release) and additional components.  
3. |  Click the version required for your UNIX/Linux operating system.  
4. |  A new page is displayed. Select the appropriate operating system download file.  
5. |  Download the "**tar** " file. Two types of "**tar** " files are available: a "**.taz** " file and a "**.tar.Z** " file.  
6. |  Once the file has been downloaded, you are ready to install PxPlus.  
  
##  Installing PxPlus

Follow these steps for installing PxPlus (UNIX/Linux):

1. |  Create your target directory. It is recommended that you use **_/pxplus_** for the directory name.  
---|---  
|    |  **mkdir /pxplus**  
2. |  Change to the target directory.  
|    |  **cd /pxplus**  
3. |  Expand and restore the "**tar** " files. (Replace **download.tar** in the example below with the name of the file you downloaded (with the trailing **.Z ,** if present.)  
|  For **.taz** file: |  **tar -xvzf download.taz  
\----------------------------------------------**  
|  For **.tar.Z** file: |  **uncompress download.tar  
tar -xvf download.tar**  
4. |  To activate the product with the Activation Key(s) you received, invoke the program **pxpreg** found in the target directory.  
|  To be Prompted: |  **./  pxpreg   
  
**Enter the above command to run the registration/activation program **pxpreg**. You will be prompted to enter a **Registered user name** (usually the company/installation name) **_and_** the Activation Key.  
|  With Key: |  **./  pxpreg -k xxxxx-xxxxx-xxxxx-xxxxx-xxxxx**  
  
You can include the key on the Command line. In this case, the system will prompt for the **Registered user name** only. If a totally non-interactive activation is desired, you can include **-n** "User name" on the Command line.  
|  Change Serials: |  **./  pxpreg -i**  
  
If you have already activated using a demo key or a different Serial Number, you can include a '**-i** ' on the Command line to reinitialize the key file. This can be combined with the '**-k** ' option.  
|  Demonstration Key: |  **./  pxpreg -d**  
  
The above command is used to activate PxPlus in demo mode, which provides a 30-day trial period during which almost all features of your PxPlus product are enabled.  
5. |  Your new PxPlus installation includes **_temporary_** activation, which gives you **_30 days_** to register your product with PVX Plus and enable **_permanent_** activation. When PxPlus is run for the first time after installation, the system checks whether the software is registered and prompts you to register if it is not. If _Yes_ is selected, the system will connect to the internet to complete the registration.

#### **Note:**  
It is strongly recommended that you register your software immediately after installation to ensure uninterrupted use of PxPlus.  
  
If your system is not connected to the internet or if you are unable to complete **[Online Registration](../Licensing%20and%20Activation%20Keys/Online%20Registration.md)**, you must submit a Helpdesk ticket to PVX Plus Support to request a manual activation (permanent keys). For steps, see **[Manual Activation](../Licensing%20and%20Activation%20Keys/Manual%20Activation.md)**. An administrative fee may apply for licenses not enrolled in the **[Continuous Care Program (CCP)](Overview.htm#ccp)** and for unsupported versions.

## See Also

**[Activation and Registration](../Licensing%20and%20Activation%20Keys/Activation%20and%20Registration.md)**

 

 

 
