# iNomads

**Frequently Asked Questions**|   
---|---  
  
This page provides answers to some commonly asked questions about iNomads, its configuration and setup:

**[How does iNomads interface to the Internet or Intranet?](Frequently%20Asked%20Questions.htm#Mark1)**

**[Does the iNomads application run on the same machine as the Web Server?](Frequently%20Asked%20Questions.htm#Mark2)**

**[What types of application can iNomads run and are there any limitations?](Frequently%20Asked%20Questions.htm#Mark3)**

**[How can I run my application using iNomads?](Frequently%20Asked%20Questions.htm#Mark4)**

**[How is printing handled?](Frequently%20Asked%20Questions.htm#Mark5)**

**[What browsers are supported?](Frequently%20Asked%20Questions.htm#Mark6)**

**[Is my existing PxPlus installation licensed to run iNomads?](Frequently%20Asked%20Questions.htm#Mark7)**

**[Why doesn't my menu appear in iNomads?](Frequently%20Asked%20Questions.htm#Mark8)**

**[How can I improve Image load times when using iNomads?](Frequently%20Asked%20Questions.htm#Mark9)**

## How does iNomads interface to the Internet or Intranet?

iNomads uses one of three supported Web Servers: **[Apache](Apache%20Overview.md)**, **[PxPlus EZWeb Server](EZWeb%20Server%20Setup.md)** or **[IIS](IIS%20ASP_NET%20Setup.md)**. The Web Server is responsible for receiving and dispatching the requests from the Web to iNomads.

##  Does the iNomads application run on the same machine as the Web Server?

It can if security is not a problem and you are primarily servicing in-house users. Normally, the Web Server is setup on a system that is exposed to the Web and can be accessed by a second 'Application' server. This separation of the servers provides for additional security. See **[Running iNomads Application on a Separate Server](Running%20iNOMADS%20Application%20on%20Separate%20Server.md)** for more information.

##  What types of application can iNomads run and are there any limitations?

iNomads is designed to run any NOMADS-based application. Standard NOMADS functionality is provided by iNomads. The ability to create controls manually within the code and direct screen IO was added with the release of PxPlus Version 11.00.

#### **Note:**  
Most non-Nomads applications will be able to run using iNomads providing that they do not use the Text plane for displaying data, and they only use controls and fonted text.

##  How can I run my application using iNomads?

Internally, iNomads controls access to programs and NOMADS panels by using Transactions. To run your application, you will first have to set up a transaction that will identify the program or NOMADS panel and library that are used to start the application. Transaction file maintenance is in the _admin_ transaction. See **[iNomads Setup and Installation](iNomads%20Setup.md)** for more information.

## How is printing handled?

There are two options. The most common is to use/print to ***viewer*** , which will create a PDF file and present that to the end-user in a new browser window/tab.

Alternatively, the application can directly output using whatever printing mechanisms are available on the server. On Windows, if you open ***winprt*** , the user will be presented with a list of configured printers defined for Windows from which to choose.

#### **Note:**  
The server should not provide access to a print driver that requires additional user input such as a PDF driver that will prompt for a target file name.

## What browsers are supported?

Most current versions of industry standard browsers are supported such as Chrome, IE 11, Edge, Safari and Firefox. iNomads makes use of modern browser technology including HTML5, JavaScript and AJAX. Therefore, older versions of some browsers will have limited functionality.

##  Is my existing PxPlus installation licensed to run iNomads?

iNomads can be run in Demo mode with a standard PxPlus Web bundle and used for testing and development. A message will display at start-up and every hour while running iNomads as a reminder that it is not a production iNomads license. Another option for running iNomads in a production environment is by utilizing the iNomads WayFarer license, which is a separate iNomads-only license.

## Why doesn't my menu appear in iNomads?

The iNomads menu bar has transitioned from the standard menu bar line that used to appear below the title bar to a "Hamburger" menu icon (three short horizontal lines stacked vertically), which appears on the left side of the title bar. Clicking this Hamburger menu icon will bring up the panel menu. This form of menu selection is more common when using Web-based applications as it saves screen space for smaller devices.

The use of the Hamburger menu icon is enabled by default but can be disabled on the **Layout** tab of your iNomads template configuration by unchecking the following check box option: _Use 3 Line (hamburger ICON) option for menu bar initiation_. See [**Template Configuration**](Template%20Configuration.htm#layout) for more information.

## How can I improve Image load times when using iNomads?

When using iNomads and displaying an image, the system normally will place a copy of the image in the session's temporary working directory from which it will be loaded by the generated HTML. In cases where you have many primarily static images (such as a product image library), copying the image to the temporary directory may add unnecessary overhead.

You can set up iNomads to avoid this processing load by supplying a lookup file for image path names. This file is defined on the [**Pathnames**](System%20Configuration.htm#pathnames) tab in the iNomads **System Configuration**. On the application server, you can specify the path name to a file that will be used to map the image paths you use in the program to actual URLs, which will be used in the generated HTML.

Simply create a file whose primary key is the image path name that is used by the program, and in the first field, put what you want inserted in the **src=_xxxxx_** clause in the generated pages. 

The file is only needed on the server running the application, as this replacement is done by the iNomads object. Using this lookup file will allow you to place your images in a location directly accessible by URL, eliminate the need to copy the images to the temporary directory, and improve overall system performance, as the workstation browsers will be able to cache the images locally.

Image files whose path names are not the lookup file will use the existing standard process.

#### **Note about Windows:**  
If your application takes advantage of the fact that the Windows file system is case insensitive, the primary key used for the file will also need to be defined as case insensitive.  
  
To do this, instead of using an external key for the lookup file, make the primary key as the second field on the file, case insensitive (option "U" or "L") and load the file accordingly.  
  
Back slashes, if used, are converted automatically to forward slashes both for the key field (the path name) and in the URL.

 

 

 
