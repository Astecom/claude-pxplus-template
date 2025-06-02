# NOMADS Graphical Application  
  
**Customizer** |  **__**  
---|---  
  
The Customizer can be used to add/remove expanded panel information (on the fly) without having to modify the original panel definitions or their supporting programs. This utility provides a quick and easy method for tailoring the contents of an existing panel to specific end-users without having to build and maintain unique code sets and screen libraries.

With the Customizer enabled, you can incorporate custom information dynamically:

  * In a standardized _Custom Information_ grid at the bottom of your panel _(Default)_ or on a _concurrent window_ at the top right corner of the parent panel.
  * From various sources (e.g. application data files, user-defined files, formulas).
  * To specific users or a wider audience.
  * With full multilingual capabilities using text messages from the _*msglib.xx_ message library.
  * Using security classifications to maintain access control.



To disable the Customizer, set the **[%NOMADS'Disable_Customizer](../Appendix/NOMADS%20Variables/Overview.htm#disable_customizer)** property to 1.

_(The %NOMADS'Disable_Customizer property was added in PxPlus 2025.)_

#### **Note:**  
The Customizer is supported in the NOMADS **_and_** iNomads environments.  
  
_(The integration of Customizer into iNomads was added in PxPlus 2018.)_

##  Displaying Custom Information

When a panel is set up for custom information using the Customizer, the custom information is displayed automatically in the Customizer grid whenever the panel is displayed. By default, the grid is located at the bottom of the customized panel in a NOMADS environment; however, it can also be displayed in a **_concurrent window_** that is drawn at the top right corner of the parent panel. In an iNomads environment, the concurrent window is used exclusively. When custom information is defined at run time, the information is displayed immediately upon returning from the **[Customize](Working%20with%20Custom%20Information.htm#customize)** window unless the Customizer grid is at the bottom of a fixed size panel, in which case it is displayed the next time the panel is invoked.

In a NOMADS environment, the type of display is governed by the value of the **[%NOMADS'Custom_Wdw](../Appendix/NOMADS%20Variables/Overview.htm#customwdw)** property. When not set (i.e. set to zero), the default display with the Customizer grid at the bottom of the panel is used system wide. When set to 1, the concurrent window display is used system wide with the **_exception_** being that if the limit of four concurrent windows has been reached, the default display is used.

In an iNomads environment, there is no custom display when the limit of four concurrent windows is reached. The size of the custom concurrent window varies, dependent on the number of information items and the widths of the item descriptions and values. You can relocate and resize the **Custom Information** window; however, panel persistence is **_not_** supported, as the original size and location are used when initially invoked.

|    
** _Default NOMADS Display_**  
---|---  
|    
**_Concurrent Window Display_**  
_(Added in PxPlus 2018)_  
  
#### **Note:**  
A special CTL value of **9995** is generated internally by NOMADS to invoke the custom concurrent window. This value can be changed by setting the **[%NOMAD'Custom_GenWdw](../Appendix/NOMADS%20Variables/Overview.htm#customgenwdw)** property to the different value.

**_Personal and Public Definitions_**

A _Personal_ definition is one that is set up for a specific user. A _Public_ definition must be set up by someone with an ADMIN or CUSTOMIZER classification and is intended for general use. See **[Security Considerations](Security%20Considerations.md)**.

Any panel can have multiple custom definitions; however, if a panel has both personal and public definitions associated with it, personal definitions take precedence.

**_Themes_**

The Customizer grid supports **[Themes](../System%20Maintenance%20Tools/System%20Options/Themes.md)** so that you can easily maintain its consistent look and feel within your application.

_(Themes support and concurrent window display were added to the Customizer grid in PxPlus 2018.)_

## Security Restrictions

The type of information that a user can access may be subject to security restrictions as well. Public definitions may contain references to files, elements and formulas that can only be displayed by users with the proper authorization. These restrictions are based on NOMADS **[Security Classifications](../System%20Maintenance%20Tools/Security%20Manager/Defining%20Classifications.md)**.

## See Also

**[Defining Custom Information](Defining%20Custom%20Information.md)**  
**[Working with Custom Information](Working%20with%20Custom%20Information.md)**
