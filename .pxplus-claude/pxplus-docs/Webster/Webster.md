# 

**Webster+** |  **_HTML Page Generation_**  
---|---  
  
**Webster+** is a new toolset designed to make both the generation of Web pages and setup of Web sites easier. It is part of the Web bundle and provides the following functionality:

  * Ability to create dynamic HTML 5 compatible pages through the use of **[Short Codes](Short%20Codes.md)**
  * Site management tools to handle user registration, password control, and security
  * Optional two-step authorization using SMS or Email verifications
  * Menu system for selection of panels and security
  * **[Report Writer](../Report%20Writer/Introduction.md)** interface
  * Integration with the **[NOMADS Query](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Overview.md)** and **[File Maintenance Generator](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** systems
  * Generic and custom templates for page rendering
  * **[Apache](../apache.md)**, **[EZWeb](../EZWebServer/EZweb%20Introduction.md)** and **[IIS](Webster%20Setup.htm#iis_setup)** compatible
  * Provides **_both_** full page loads or Ajax-style page updates



_(Webster+ was added in PxPlus 2021.)_

**_Why Use Webster+?_**

Webster+ is designed as an alternative to using **[iNomads](../iNOMADS/iNOMADS%20Introduction.md)** to provide a Web interface to your application. Unlike iNomads, which required few, if any, changes to your application in order to run in a browser, Webster+ is designed to create browser-only applications.

Your application will need to be redesigned to use Webster+ as it uses a standard REST-style interface where every exchange between the workstation/browser and the host is standalone with no residual resources maintained on the server between exchanges.

Simply put, this means when the user selects an option from a Webster+ HTML page, the page contents will be sent to the host, which will start a completely new instance of PxPlus to respond to that request. No values or files other than those derived from the page will be present at the start or remain at the end of the request.

While it may seem daunting to recreate your application, Webster+ provides the ability to make use of much of your existing application logic. For example, NOMADS Queries and the Report Writer all work under Webster+. The File Maintenance Generator also now supports the generation of Webster+ HTML pages.

In situations where an existing application is being moved to a Web environment using Webster+, the **[Create Base Webster+ Page(s)](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Create%20Base%20Webster%20Pages.md)** utility can be used as the first step in converting existing NOMADS panels into Webster+ HTML pages.

#### **Important Note:**  
The HTML pages and programs created by the **Create Base Webster+ Pages** utility are a **_starting point only_** and will require editing to complete functioning Webster+ pages.

_(The Create Base Webster+ Page(s) utility was added in PxPlus 2025.)_

## Environment

To run Webster+, you need to have a Web server accept and process the Web requests. This can be **[Apache](../apache.md)**, the PxPlus **[EZWeb](../EZWebServer/EZweb%20Introduction.md)** server or **[IIS](Webster%20Setup.htm#iis_setup)**. These servers need to be setup to accept requests and start processing in a directory where the program **_webster.pxp_** must reside. This is generally referred to as the **_document root_** directory.

A base line _webster.pxp_ program is provided with PxPlus and is designed to be tailored by you to meet your specific needs. Generally, this program will define the location of the data files, pages and programs through the use of the PxPlus **[PREFIX](../directives/prefix.md)** directive.

While it is not mandatory, it is desirable for security reasons that this program defines data and program directories outside of the _document root_ directory. This prevents external users from having direct access to the data and programs.

## Webster+ Object (%Webster)

When running a Webster+ based application, many functions and properties are provided by the Webster+ object. This object (***obj/webster**) is automatically created by the Apache and EZWeb interfaces during the initial processing of all browser requests.

The object provides methods to update the screen, send messages, force events, along with hide, show, enable and disable controls on a Webster+ page. It also contains a link to the Webster+ bind object (***obj/webbind**) that is used to dynamically create HTML pages. See **[Webster+ HTML Merge/Bind Object](Webster%20Bind%20Object.md)**.

For a list of all Webster+ object methods and properties, see **[Methods](Webster%20Object%20Methods.md)** and **[Properties](Webster%20Object%20Properties.md)**.

## Webster+ Library

In addition to your application, Webster+ provides a number of programs, files and HTML pages for use in your application. These include programs/pages to handle security, user registration, password control, email, SMS interfaces, report handling and menus.

All of these tools reside in the ***webster** system library.

## See Also

**[Webster+ Application Design](Webster%20Application%20Design.md)**  
**[Webster+ Setup and Configuration](Webster%20Setup.md)**
