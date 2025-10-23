# 

**PxPlus Wiki** |  **_Application Documentation System_**  
---|---  
  
The PxPlus Wiki (**W** hat **I K** now **I** s) documentation system provides an easy mechanism to prepare and maintain product documentation based on the standards used by WikiPedia and MediaWiki.

A Wiki-style documentation system is designed to be used by Web browsers. It provides an easy-to-learn text-based documentation system while also providing the ability to include images, stylize the look, insert tables and, in the case of the PxPlus Wiki, include Wiki content generated directly from PxPlus applications.

For information on Wiki formatting, see **[Basic PxPlus Wiki Formatting](Wiki%20Formatting.htm#basic)**.

**_Invoking the Wiki Web Service_**

To invoke the Wiki Web service, invoke the URL:

> **http(s)://www.**_your_web_site.com_**/services/pxpwiki.pxp**

When first invoked, the system will copy the system default Wiki control file (_pxpwiki.dat_) to your Web site root directory (or elsewhere if you have a prefix set) and bring up the "Main" Wiki page.

In NOMADS, you can use Wiki Help to display Help documentation that was generated directly from a panel. See **[NOMADS Wiki Help](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**.

If using **[Webster+](../Webster/Webster.md)**, you can also enable the Wiki interface from the system **[Setup](../Webster/General%20Configuration.htm#misc)**, at which point a new **Info** hyperlink will be placed on every page to access its associated Web page.

## PxPlus Wiki Services

In addition to being able to maintain your application documentation, the PxPlus Wiki, in conjunction with the PxPlus application framework, provides a variety of developer documentation services, such as:

  * Directory information that includes file and program details
  * Display of the current data dictionary active on your application



By default, the Wiki system is installed such that anybody can see/edit any page maintained in the Wiki page control file (_pxpwiki.dat_). While this is fine for development, on production systems it is suggested that you change the Wiki configuration so that the default access for users is as a page _Reader_ ; that is, they can view the pages maintained by the Wiki system, and only specific users designated as _Editors_ can modify and add pages. The _Admin_ class of users can change system settings and edit any page.

To configure the Wiki security settings, see **[Wiki Configuration Settings](Wiki%20Configuration.md)**.

_(The PxPlus Wiki was added in PxPlus 2022.)_
