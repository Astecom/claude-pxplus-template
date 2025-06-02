# Introduction to Using PxPlus

**Getting Started** |  **__**  
---|---  
  
PxPlus is a system that interprets and executes computer instructions written in the PxPlus language. Instructions may be entered one statement at a time for immediate execution or contained in a software program. However, PxPlus programs can only be executed on systems where PxPlus is running. PxPlus serves as both the development and run-time environment - it comprises all the facilities needed to design, create and run an application. This unique implementation presents several distinct advantages (in program size, cohesion, speed, maintainability, platform independence, and so on).

All PxPlus components are highly optimized to work together. The application language is closely tied to database technology, allowing for high-speed data access. The graphical development environment is optimized to work with Thin-Client technologies for universal access. When used together, the different components take advantage of a common architecture to provide maximum speed and flexibility. Not only does this reduce the risk of incompatibilities between various system components, but it also means that your product support comes from a single source instead of from different vendors.

PxPlus also adheres to the most widely accepted software standards and protocols (data, communications, security, etc.) in the industry. This allows for a high level of extensibility and promotes the full integration of PxPlus applications into non-PxPlus applications and vice versa.

Starting with PxPlus 2019, the packages needed for most business applications are included in the **_Base_** bundle.

The **_Professional_** bundle is designed for Client-Server implementation using the WindX Plug-in.

The **_Web_** bundle is designed for Web implementation.

Contact your local PxPlus reseller or visit the PxPlus website at **[www.pvxplus.com](http://www.pvxplus.com/)** for product information and licensing.

## Product Features

PxPlus can be configured for multiple uses (depending on the license and the platform), but every installation begins with the base system that includes:

**PxPlus** |  Language interpreter and application development environment  
---|---  
**[NOMADS](../../NOMADS%20Graphical%20Application/Introduction.md)** |  Toolset for developing graphical user interface based applications (Windows)  
**COM/OCX/ActiveX, DDE, DLL, ZLIB, SSL, PDF** , etc. |  Built-in support for a number of industry-standard technologies  
  
Below is a list of product features that can be used in developing business applications:

**Product** |  **Description**  
---|---  
**[ADO](../../command_tags/ADO.md)**, **[DB2](../../command_tags/db2.md)**, **[MySQL](../../command_tags/mysql.md)**, **[OCI](../../command_tags/oci.md)** |  Native external database support  
**[Application Server](../../windx/Application%20Server/Introduction.md)** |  Secure configurable hosting facility for connecting thin-client implementations via MS Windows, UNIX/Linux, and MAC OS X  
**[Charting Control](../../Charting/Introduction.md)** |  Control object for creating advanced chart illustrations  
**[Customizer](../../NOMADS%20Graphical%20Application/Customizer/Overview.md)** |  Utility for customizing panels dynamically without changing source  
**[EZWeb Server](../../EZWebServer/EZweb%20Introduction.md)** |  Easy-to-use Web server ideally suited for use with **[iNomads](../../iNOMADS/iNOMADS%20Introduction.md)**, **[PxPlus Dashboard](../../PxPlus%20Dashboard/Overview.md)**, **[PxPlus Web Services](../../PxPlus%20Web%20Services.md)**, and **[PxPlus IDE Main Launcher (Web)](../../PxPlus%20IDE/IDE%20Main%20Launcher_Web.md)**  
**[iNomads](../../iNOMADS/iNOMADS%20Introduction.md)** |  A Web-based environment that allows NOMADS screens and panels to be run over the Web from any industry standard Web browser  
**[Internet Toolkit](../../Web%20Utilities/Introduction.md)** |  Utilities for developing Email/Web-enabled applications  
**[Local and Client/Server PxPlus SQL ODBC Driver](../../odbc/pxplus_odbc.md)** |  Open Database Connectivity (ODBC) for third party access to PxPlus databases  
**Multiple Image Support** |  Extended support for a variety of image file types  
**[OLE Server](../External%20Components/PxPlus%20OLE%20Server/Overview.md)** |  Interface allowing external applications to access PxPlus objects directly  
**[Report Writer](../../Report%20Writer/Introduction.md)** |  Powerful interface for designing and generating reports (run-time module included with base system)  
**[Remote Processing Capability (RPC)](../../Remote%20Process%20Capability/Introduction.md)** |  Remote Processing Capability for distributed processing of PxPlus  
**[Signature Capture](../../Extended%20NOMADS%20Objects/eSignature%20Capture/esignature%20capture.md)** |  Extended control for drawing and capturing electronic signatures in either a NOMADS desktop environment or an iNomads environment with mobile devices such as tablets and smartphones  
**[Smart Controls](../../NOMADS%20Graphical%20Application/Smart%20Controls/Overview.md)** |  Auto-load capability for List Boxes and Grids, as well as the creation of Smart Charts that self-load based on a Query definition  
**[Views](../../Views%20System/Introduction.md)** |  End-user "viewing" of application data for simplified extraction and reporting (run-time module included with base system)  
**[Web Server](../../Web%20Server%20Reference/Introduction.md)** |  Interface for producing PxPlus-coded websites that allow browser access to PxPlus and ODBC data sources  
**[Web Services](../../Web%20Services/Overview.md)** |  Allows the exchange of information between applications using the standard Web protocol that is used for browsers  
**[Webster+](../../Webster/Webster.md)** |  Toolset designed to make both the generation of Web pages and setup of Web sites easier _(Webster+ was added in PxPlus 2021.)_  
**[WindX](../../windx.md)** |  Thin-client for displaying and interacting with graphical user interface based PxPlus applications running from a server  
**XML Support** |  Implementation for parsing and serializing XML documents  
  
## Installation and Setup

PxPlus can be obtained from your reseller or downloaded for direct installation from the PxPlus website at **[www.pvxplus.com](http://www.pvxplus.com/)** where the _Downloads_ page lists all available products. Click on the appropriate link to download and save the installation file for your particular operating system. See **[PxPlus Installation and Configuration](../../PxPlus%20Installation%20and%20Configuration/Introduction.md)**.

Because PxPlus is an interpreted language, it is important to remember that programs written in PxPlus can only be run on a system where PxPlus has been installed. See **[Language Elements](../Language%20Elements/Introduction.md)**.

#### **Note:**  
For the purposes of this Help documentation, the assumption is that PxPlus has been fully installed for use on a Windows or UNIX/Linux system.

## Starting a PxPlus Session

The process of program development begins by starting a PxPlus **_session_** , which serves as the environment where programming instructions are input, understood and executed by the system. Once the session is started, you can create a new application or load an existing application for modification. See **[PxPlus Environment](PxPlus%20Environment/Overview.md)**.

## See Also

**[System Utilities](System%20Utilities/Graphical%20Utilities.md)**
