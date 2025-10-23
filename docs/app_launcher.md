# App Launcher for Android and iOS  
  
**App Launcher for Android and iOS**|   
---|---  
  
The **App Launcher for Android and iOS** can be used to bring the same PxPlus applications that you have running on desktops and the Web to Android and iOS devices. The App Launcher is an Android and iOS app that can be used to launch **[iNomads](iNOMADS/iNOMADS%20Introduction.md)** applications or other Web-based content as an Android and/or iOS app. It can be set up to automatically launch different iNomads applications or other Web-based content.

The App Launcher is a full screen view of the Web content and provides the following capabilities:

  * Supports mobile device screen orientation switching
  * Scan barcodes with the mobile device camera
  * Get mobile device location via GPS
  * Viewing of PDFs
  * Downloading/Uploading of images and files from the mobile device



For an explanation of how the app works, see [**The Generated App**](utilities/appwizard.htm#generated_app).

_(The App Launcher for Android and iOS was released with PxPlus 2019.)_

#### **Note:**  
The App Launcher app was generated using the PxPlus [***TOOLS/APP WIZARD: Generate an Android or iOS App**](utilities/appwizard.md) utility.  
_  
(The Generate an Android or iOS App program was added in PxPlus 2019.)_

**_Using the App Launcher_**

Before installing and using the App Launcher, you need to do the following:

  * **[Create an Application Group](app_launcher.htm#create_group)** and password with PVX Plus Technologies if you have not already created one.
  * Perform the **[Application Setup](app_launcher.htm#setup)** and define an application identifier that points to your iNomads applications or other Web content URL.



When run for the first time, the App Launcher will load the **[Application Selection](app_launcher.htm#selection)** screen, which is used to select the iNomads application or other Web content. It will launch automatically when the App Launcher is run.

If you require the app running your content to not use the PxPlus logo and App Launcher name, then you must **[Generate](utilities/appwizard.htm#generate_app)** and **[Publish](utilities/appwizard.htm#publish_app)** your own app. If you are planning to generate your own app, the App Launcher can be used to first test your iNomads application and/or other Web content to see how it runs as an app. Once you are satisfied, you can then generate your own app.

##  Create an Application Group

Contact PVX Plus Technologies at **[info@pvxplus.com](mailto:info@pvxplus.com?subject=Create%20Application%20Group%20Request)** to create a new Application Group and password. In the body of the e-mail, include the following:

  * Your Company name
  * PxPlus Serial Number
  * The desired Application Group name and password



##  Application Setup

An _identifier_ is a name you define for a specific URL.

Click the following link to the Web page (created by PxPlus) used to create identifiers for your Application Group: **[Create an Identifier](https://appsrvr.pvxplus.com/pgsrvr.pvp?pg=apps)**.

**Step** |  **Description**  
---|---  
1. |  Enter your Application Group and password.  
2. |  After that, select the _Display_ button to show the current apps.  
3. |  If desired, you can also enter an identifier and new target URL.  
4. |  Select the _Update_ button to update the tables. (A _Target_ of "blank" deletes the identifier).  
5. |  When you are done making changes, select the _Upload_ button to send the changes to the secure server.  
  
##  Application Selection

The **Application Selection** screen is loaded when the App Launcher is run for the first time and will load until an application is selected to automatically load.

In the **Application Selection** screen, input an Application Group and an Identifier in the fields provided.

To run an application without setting it up to automatically load, select the _Run Only_ button.

To run an application **_and_** set it up to automatically load, select the _Set & Run_ button.

It is possible to load the **Application Selection** screen after an application has been selected to automatically load. This is done by clicking and holding down the progress circle for three seconds.

To clear a previously set auto load application, select the _Reset_ button.

## See Also

**[iNomads](iNOMADS/iNOMADS%20Introduction.md)**
