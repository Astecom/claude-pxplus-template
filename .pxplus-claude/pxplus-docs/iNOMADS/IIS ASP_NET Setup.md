# Setting Up Web Servers  
  
**IIS ASP.NET Setup**|   
---|---  
  
To set up and use IIS with **[iNomads](iNOMADS%20Introduction.md)**, all that is needed is to create a website that points to the _*plus/inomads_ directory with support for IIS and ASP.NET (2.0) enabled.

iNomads comes with a file called _default.aspx_ that will handle the launching and forwarding of all iNomads requests. Make sure _default.aspx_ is set as either the primary or one of the default pages for the site directory.

The _default.aspx_ module will by default launch all iNomads processes within the constraints of the IIS service.

If you want to use a different user ID or authorization level, use the **[Launch Port](Object%20Properties%20and%20Methods.htm#launchport)** option in the iNomads configuration file. When using IIS with iNomads, the pathnames must also be defined. See **[Configuring PxPlus Pathnames](Setup%20and%20Installation.htm#pathnames)**.
