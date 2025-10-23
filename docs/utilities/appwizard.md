# Utility Routines

***TOOLS/APPWIZARD** |  **_Generate an Android or iOS App_**  
---|---  
  
## Description

This utility is used to **[Generate an Android or iOS App](appwizard.htm#generate_app)** for your **[iNomads](../iNOMADS/iNOMADS%20Introduction.md)** application or other Web-based content. The **[Generated App](appwizard.htm#generated_app)** will have the name and logo specified, and it will be a full screen view of the Web content.

The app provides the following capabilities:

  * Supports mobile device screen orientation switching
  * Scan barcodes with the mobile device camera
  * Get mobile device location via GPS
  * Viewing of PDFs
  * Downloading/Uploading of images and files from the mobile device



#### **Important Note:**  
PVX Plus Technologies does **_not_** publish the generated app to an app store. This utility provides the file(s) of the generated app so that the developer can publish the app. This allows the developer to control the marketing materials and the monetization of the app.  
  
Both Google and Apple require you to have a developer account, which is not free, in order to upload/publish on their app stores.  
  
To **_sign up_** for a Google Play developer account, use this link: **[Google Play Developer Account](https://play.google.com/apps/publish/signup)**.  
  
To **_sign up_** for the Apple Developer program, use this link: **[Apple Developer Program](https://developer.apple.com/programs/enroll/)**.

After generating an app, the next steps are to **[Upload to an App Store](appwizard.htm#upload_appstore)**, **[Test the App](appwizard.htm#test_app)**, and then **[Publish the App](appwizard.htm#publish_app)**.

_(The Generate an Android or iOS App program was added in PxPlus 2019.)_

##  Generate an Android or iOS App

To access the **Generate an Android or iOS App** graphical interface, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Web Deployment_ category and select _Generate an Android or iOS App_.  
From a Graphical Device |  Run the ***tools/appwizard** program.  
  
The **Generate an Android or iOS App** window is displayed.

> If you are not on a graphical device or if automation is desired, it is possible to generate an app programmatically:

> **CALL "*tools/appwizard;send_request"** , _dest_email_ _$, app_type$, app_id$, app_name$, version$, icon_path$, icon_bkg_clr$, target_url$, result$_

The fields/arguments are:

**Field/Argument** |  **Description**  
---|---  
_App Type (app_type$)_ |  Mobile OS on which the generated app will run. Valid values are _Android_ or _iOS_ (case insensitive).  
_Destination E-mail (dest_email$)_ |  E-mail address that is to receive notification stating that the app has been generated, along with a link to download the encrypted ZIP file containing the app file(s) and the password to decrypt the ZIP file.  
_App ID (app_id$)_ |  Unique ID of the app. **_Must_** be a unique ID on the app store you want to publish the app on (case sensitive). The app ID is usually done in a reverse DNS style; i.e. _com.mycompany.myapp_. For **_Android_** , the ID must begin with a letter and contain at least one period. It may only contain letters, numbers, periods and underscores. For **_iOS_** , the ID has a minimum length of 1 and a maximum length of 155. It may only contain letters, numbers, periods and hyphens.  
_App Name (app_name$)_ |  Display name of the app. Maximum length of 50 characters (**_Android_**) or 30 characters (**_iOS_**).  
_Icon (icon_path$)_ |  Path to an image to use as the app icon. All standard image formats, as well as Transparency, are supported.  
_Icon Transparency Color (icon_bkg_clr$)_ |  iOS app icons do not allow transparency. If the _App Type_ is **_iOS_** and the icon image used Transparency, this utility will convert the image to use this color in place of the transparency. The _icon_bkg_clr_ _$_ argument accepts Hex color values; e.g. #DC143C would be Crimson (shade of Red).  
_Target URL (target_url$)_ |  URL that the app will display in the full screen Web view. This will usually be an iNomads URL; however, it can also be a URL to some other Web content.

#### **Important Note:**  
You must specify **http://** or **https://** in your URL. Using a non-secure **http://** URL may result in an untrusted SSL certificate warning on Android.  
  
A secure **https://** URL is **_strongly_** recommended.  
  
_Version (version$)_ |  Version number that the generated app should display to the user. Increase the version number if generating a new version of a previously generated app; i.e. the App ID is the same. Use the following format: _num.num.num_. (**_Default_** value is 1.0.0.)  
_result$_ |  Returns the result of the app generation. If successful, _result$_ will be "SUCCESS". If unsuccessful, it will contain an error message.  
  
Select the _Create_ button to generate the app.

App generation is not instantaneous and can take up to 15 minutes. After generating an app, the utility sends an e-mail to the destination e-mail address provided stating that the app was generated. The email provides a download link to an encrypted ZIP file containing the app file(s), along with the password to decrypt the ZIP file and extract the app file(s).

##  The Generated App

The generated app will be a full screen view of the iNomads app or third party Web app.

Forward and Back history navigation is disabled since this app is designed for iNomads apps, and navigation should be done within the iNomads panels. If the mobile OS Back button is selected, a prompt will display, asking if you want to exit the app. You can either cancel this and remain in your app, or respond _Yes_ to exit your app.

Barcode scanning is slightly different in iOS compared to Android:

|  In **_iOS_** , barcode scanning integrates directly into the camera of the mobile device. The interface is simply the display of the camera, and if you focus on a barcode, it will be scanned. Supported barcode types are Aztec, Code 39/93/128, Data Matrix, EAN-8/13, ITF, PDF 417, QR Code, UPC-A/E.  
  
  
---|---  
|  In **_Android_** , barcode scanning is handled by integrating with the Barcode Scanner app; therefore, the app must be installed for barcode scanning to work. This makes it easier to use the interface and expanded barcode type support provided by Barcode Scanner apps. Supported barcode types are Aztec, Codabar, Code 39/93/128, Data Matrix, EAN-8/13, ITF, MaxiCode, PDF 417, RSS-14/Expanded, QR Code, and UPC-A/E.  
  
See **[Bar Code Reading](../iNOMADS/Bar%20Code%20Reading.md)**.

The generated app requires permissions to access the camera, location and storage for your mobile device. The mobile OS may request that you enable these permissions the first time that the app tries to use the camera, get the current location, or upload/download files.

##  Upload to an App Store

**_Android_**

The Android app is uploaded to the Google Play Store using the Play Console.

**Step** |  **Description**  
---|---  
1. |  A Google Play Developer account is required. Sign up for a **[Google Play Developer Account](https://play.google.com/apps/publish/signup)** if you have not already done so.  
2. |  From the machine where the generated app files have been extracted, visit the **[Play Console](https://developer.android.com/distribute/console/)** Web site. Sign in using a Google Play Developer account.  
3. |  From the Play Console, create an application. For details, visit the **[Google Support: Play Console Help - Create an App](https://support.google.com/googleplay/android-developer/answer/113469?hl=en)** Web site.  
4. |  From the newly created application, create a release and then upload the generated app AAB or APK file. For details, visit the **[Google Support: Play Console Help - Create a Release](https://support.google.com/googleplay/android-developer/answer/7159011)** Web site.  
  
**_iOS_**

The iOS app is uploaded to the App Store using App Store Connect.

**Step** |  **Description**  
---|---  
1. |  Enrollment in the Apple Developer Program is required. Sign up for the **[Apple Developer Program](https://developer.apple.com/programs/enroll/)** if you have not already done so.  
2. |  Go to the **[Apple Developer: iOS Provisioning Portal](https://developer.apple.com/account/)**. Sign in with an Apple ID that is enrolled in the Apple Developer Program.  
3. |  From the **iOS Provisioning Portal** , create an app/bundle ID that matches the one used to generate the app.  
4. |  Go to **[App Store Connect](https://appstoreconnect.apple.com/)**. Sign in with the same Apple ID used for the previous steps.  
5. |  From the **App Store Connect** home page, you can **[Add a New App](https://help.apple.com/app-store-connect/#/dev2cd126805)**. When adding the new app, make sure that you select the app/bundle ID you just created to match the one used to generate the app.

#### **Note:**  
From a macOS machine, use Launchpad to open the Application Loader program.  
  
If the Application Loader program is not available, go to the App Store and install Xcode, which will install the Application Loader program.  
  
6. |  From the Application Loader program, select the generated app IPA file to upload. For details, visit the **[Upload Your App Binary Files with Application Loader](https://help.apple.com/itc/apploader/#/apdATD1E12-D1E1A1303-D1E12A1126)** Web site.  
  
#### **Note:**  
When the app is uploaded, Apple puts the app through some automated tests. A delay of up to of 30 minutes may be expected before the uploaded app is available in App Store Connect.

##  Test the App

Before publishing the generated app to an app store, testing is recommended to help ensure that the generated app meets expectations.

Before an app is generated, you can test your iNomads application and/or other Web content running as an app by using the **[App Launcher for Android and iOS](../app_launcher.md)**.

**_Android_**

To test the generated Android app, the following two methods are available:

**_Method 1:_** |  The easiest way is to install the generated APK file, found in the ZIP, directly onto an Android device. This method requires that installing apps from unknown sources be enabled on the Android device.  
  
For details, visit the **[How to Enable Unknown Sources](https://android.gadgethacks.com/how-to/android-basics-enable-unknown-sources-sideload-apps-0161947/)** Web site.  
---|---  
**_Method 2:_** |  This method involves releasing the app for internal testing via the Play Console. Make sure that the generated app has been uploaded to the Play Console. See **[Upload to an App Store - Android](appwizard.htm#upload_android)** above.  
  
From the Play Console, create a new release for internal testing. For details, visit the **[How to Set Up a Test Release](https://support.google.com/googleplay/android-developer/answer/3131213?hl=en)** Web site.  
  
**_iOS_**

The only way to test the generated iOS app is to use _TestFlight_. Make sure that the generated app has been uploaded to App Store Connect. See **[Upload to an App Store - iOS](appwizard.htm#upload_ios)** above.

From App Store Connect, create a test group, assign testers to the group, and then pick the uploaded app for testing. For details, visit the **[How to Set Up TestFlight](https://help.apple.com/app-store-connect/#/devdc42b26b8)** Web site.

#### **Note:**  
When the app is added to a testing group, Apple puts the app through a review process. A delay of one to three days may be expected before the app is sent to testers.

When testing the generated app:

  * Confirm that the icon looks sharp and all of its features are easily visible, including any text.
  * Make sure that the app display name is correct and is readable.
  * Check that the app goes to the correct URL and that it loads and functions correctly.
  * Try the app on several different mobile devices with different screen sizes; i.e. small smart phone, big smart phone, and tablet.



If any issues are found, you can re-generate the app using the same app ID but changing what is required; i.e. picking a higher resolution icon image or shortening the app display name.

##  Publish the App

Before you publish the generated app, you will need to fill out information about the app so that the app store can create a listing for the generated app. The following information usually needs to be completed:

  * Name
  * Short description
  * Long description
  * Category
  * Content rating
  * License agreement
  * Privacy policy
  * Screenshots and marketing images/videos
  * Pricing
  * Countries to make available



**_Android_**

For an overview, visit the **[Publishing an App to the Google Play Store](https://support.google.com/googleplay/android-developer/answer/6334282)** Web site.

To publish the app, create a production release via Play Console. Make sure that the generated app has been uploaded to the Play Console. See **[Upload to an App Store - Android](appwizard.htm#upload_android)** above.

From the Play Console, create a new release for production. For details, visit the **[How to Create a Production Release](https://support.google.com/googleplay/android-developer/answer/7159011#rollout)** Web site.

**_iOS_**

For an overview, visit the **[Publishing an App to the App Store](https://help.apple.com/app-store-connect/#/dev34e9bbb5a)** Web site.

To publish the app, submit the app for review via App Store Connect. Make sure that the generated app has been uploaded to App Store Connect. See **[Upload to an App Store - iOS](appwizard.htm#upload_ios)** above.

From App Store Connect, select the uploaded app and submit it for review. For details, visit the **[How to Submit an App for Review](https://help.apple.com/app-store-connect/#/dev301cb2b3e)** Web site.

#### **Note:**  
The Apple app review process usually takes between one to three days.

## See Also

**[iNomads](../iNOMADS/iNOMADS%20Introduction.md)  
[iNomads Classes](../iNOMADS/iNomads%20Classes.md)  
[Bar Code Reading](../iNOMADS/Bar%20Code%20Reading.md)**
