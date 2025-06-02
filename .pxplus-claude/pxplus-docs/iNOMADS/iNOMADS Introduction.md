#   
  
**iNomads**|   
---|---  
  
## What is iNomads?

iNomads provides a Web-based environment that allows NOMADS screens and panels to be run over the Web from any industry standard Web browser. Unlike standard NOMADS panels, the target device does not have to be running WindX or be a Windows workstation. No download or install is required by the end user. Standard browser functionality (HTML and JavaScript) is used to render and process the panels.

While some functionality is limited because the application is running within a browser, iNomads provides a number of advantages over running your application using WindX. The most important advantage is that iNomads requires no special software to be loaded on the workstation. Virtually any browser that supports JavaScript and Style Sheets can be used. This allows end users to access and run their application from an Internet caf, at a client's location, at a hotel or conference business center, even on a cell phone. With no software download or installation requirements, NOMADS-based applications can run from virtually anywhere and via any Web compatible device.

iNomads also extends standard NOMADS functionality to provide for a better, faster online experience utilizing the latest in Ajax technologies. Controls that contain large data sets, such as Grids and List Views, are downloaded on demand automatically. In addition, since there is tight integration between the server and the browser client, application logic that interacts with the controls actually interacts with what are effectively shadow controls on the server. This further reduces transmissions between the server and the browser, making iNomads, in many cases, faster than standard NOMADS for many applications.

Since iNomads is a true browser-based solution, your application can be easily customized by using **[Templates](Templates.md)** and **[Cascading Style Sheets (CSS)](Style%20Sheet%20Usage.md)**. These allow you to not only wrap your application within Web pages but also independently control the look and feel of many of the controls.

See **[Frequently Asked Questions](Frequently%20Asked%20Questions.md)** for answers to some commonly asked questions about iNomads.

#### **Note:**  
As of PxPlus 2020, cookies are no longer being used.

## How iNomads Works

iNomads takes your NOMADS panels and converts them to Dynamic HTML (DHTML) and, along with the associated JavaScript, provides an AJAX based interface to your application. iNomads itself is not a Web server but rather uses a Web server as the go-between for your application and the end-user browser. See **[Supported Web Servers](Setup%20and%20Installation.htm#web_servers)**.

When the Web server receives a request for an **[iNomads Transaction](Transaction%20Maintenance.md)**, it will launch a background process on the host server. The process is assigned a session ID that is used to uniquely identify the process on the server. The process then runs iNomads, which will present your NOMADS panels as HTML Web pages. These Web pages are sent back to the Web server for subsequent delivery to the workstation. The background process then stays active, waiting for subsequent input from the workstation.

Once the NOMADS base transaction is complete (the program/panel exits), the background process will send a final Web page to the workstation and then terminate.

From the users' perspective, they will see the same basic panel and control layout as they would normally see when running a NOMADS panel except that the panels are running within a browser as opposed to running within an application such as WindX.

**_iNomads_ _and ADA (USA) or WCAG (Canada) Compliance_**

iNomads provides a number of features that can be used to assist in developing Web sites that adheres to ADA or WCAG compliance. These sites require special treatment to handle aspects such as tab sequencing, image descriptions, and such, which will often require special consideration when the pages are designed.

Some of the things you need to avoid are:

  * Tab sequence in other than the natural left-to-right, top-to-bottom reading sequence.
  * Images to have text descriptions that can be "read aloud" by computer software.
  * Do not use folders as they break the natural flow of the page.



In addition to the above, controls and sections on the page require additional HTML tags that provide cues for page reader software to assist in the navigation and operation of the page.

iNomads provides some additional features that can be used in the development of compatible pages with the required tags:

1. |  The iNomads Class definition now includes the ability to specify role_XXXXX and aria_level_NN classes with GET converted to role="XXXXX", aria-level="NN" tags in the HTML.  
---|---  
2. |  For individual fields, adding/editing the Message Text for the field which will be included in the resultant HTML as aria_label="<message text>". Where an image does **_not_** have a Message Text (such as images on buttons), the button text is utilized, if present; otherwise, the image name is used.  
3. |  For images, the Message Text value as defined in NOMADS will be added to the <img> tag as the textual description of the image.  
4. |  For the template layouts, you can now add an "Other" element to each section that contains the keyword "option" in _param1_ , an ARIA option keyword such as "role" or "aria-level" in _param2_ , and the option value in _param3_. These will be included in the Section definitions in the resultant output.  
  
_(Changes/enhancements to support ADA or WCAG compliance was added in PxPlus 2021.)_

## iNomads Directories

The following directories exist in the _*plus/inomads_ directory:

**Directory** |  **Contents**  
---|---  
_add-ons_ |  Additional components (i.e. charts, editor, etc.)  
_apache_ |  Apache configuration files  
_base.conf_ |  Original baseline configuration files  
_layout_maker_ |  Files/images used by the template maker  
_shades_ |  Shaded images used  
_syshtml_ |  System HTML messages (see **[System HTML Messages](Setup%20and%20Installation.htm#system_msgs)**)  
_sysimage_ |  GIFs of all internal images  
_syssounds_ |  Standard sounds for **['BEEP'](../mnemonics/beep.md)**  
_templates_ |  Template files and sub-directories  
_tmp_ |  Temporary directories for sessions  
  
## iNomads Configuration

iNomads uses three basic configuration files:

**File** |  **Description**  
---|---  
_inomads.conf_ |  Stored in the _*plus/inomads_ directory and defines system control properties. See **[System Configuration](System%20Configuration.md)**.  
_tx.conf_ |  Stored in the _*plus/inomads_ directory and defines system "transactions" that can be accessed. See **[Transaction Maintenance](Transaction%20Maintenance.md)**.  
_template.conf_ |  Stored in the _*plus/inomads/templates/default_ directory (**_where_** _default_ is the name of the template being used) and defines the template configuration settings that are used to control the display and formatting for the template. See **[Template Configuration](Template%20Configuration.md)**.  
  
## Glossary of Terms

To understand how to set up and use iNomads, you should be familiar with the following terminology:

**Term** |  **Description**  
---|---  
**AJAX** |  AJAX is the term used that loosely describes the dynamic interaction of Web pages by JavaScript, Flash, or other client-side browser languages with a host application.  
**HTML** |  HTML stands for Hyper Text Markup Language and is the method/language used to design and control Web pages. It is a text-based language that consists of a series of "Tags" that both describes and controls the presentation of the Web page.  
**JavaScript** |  JavaScript is a client-side programming language that is supported by almost all Web browsers in the market. It is used in conjunction with HTML to control and enhance the functionality of the Web page. It is **_not_** Java but rather a Java-like language. JavaScript support comes preinstalled with all major browsers thus no download or installation is required to use this language.  
**Library** |  A library is a system file in which panel descriptors are stored. See **[NOMADS Library Object Selection](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Overview.md)**.  
**Panel** |  A panel is a NOMADS screen designer layout that defines the look and processing rules of a graphical screen. See **[NOMADS Panel Designer](../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**.  
**Session ID** |  Session ID is the random code used by iNomads that uniquely identifies the background process. This code is dynamically assigned by iNomads when a new process is started.  
**Style Sheets** |  Style Sheets, often referred to as Cascading Style Sheets (CSS), is a methodology used to control the presentation aspects of a Web page. Items such as font, color, backgrounds, etc. are controlled by Style Sheets, allowing the underlying HTML to be rendered differently by simply changing the style sheet. See **[Style Sheet Usage](Style%20Sheet%20Usage.md)**.  
**Templates** |  A template is the iNomads term to describe the mechanism used to control the presentation layout of the NOMADS panels. By using different templates, the same NOMADS panel can appear differently, allowing the application to be tailored to meet your specific client's needs. See **[Templates](Templates.md)**.  
**Transaction** |  iNomads uses transactions, and in particular, a Transaction ID (_txid_), as a means to identify what process is to be performed. Each transaction in the system contains a panel name, library, working directory, template, and an option exit URL. When iNomads is run, it uses the _txid_ to determine what panel is to be displayed/processed. See **[Transaction Maintenance](Transaction%20Maintenance.md)**.  
  
## See Also

**[Frequently Asked Questions](Frequently%20Asked%20Questions.md)**
