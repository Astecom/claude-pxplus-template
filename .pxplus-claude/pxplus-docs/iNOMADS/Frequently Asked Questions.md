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

##  How does iNomads interface to the Internet or Intranet?

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

## Is my existing PxPlus installation licensed to run iNomads?

iNomads can be run in Demo mode with a standard PxPlus Web bundle and used for testing and development. A message will display at start-up and every hour while running iNomads as a reminder that it is not a production iNomads license. Another option for running iNomads in a production environment is by utilizing the iNomads WayFarer license, which is a separate iNomads-only license.
