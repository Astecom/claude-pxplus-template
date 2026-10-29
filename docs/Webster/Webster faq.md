# Webster+ Web Development Toolkit

**Frequently Asked Questions**|   
---|---  
  
This page provides answers to some commonly asked questions about the Webster+ Web development toolkit, including setup, configuration, development best practices, and troubleshooting.

#### **Note:**  
Webster+ supports custom CSS across its entire configuration.

**General**

**[What is Webster+?](Webster%20faq.htm#Mark1)**

**[How does Webster+ handle Cascading Style Sheets (CSS)?](Webster%20faq.htm#Mark2)**

**[What templating options are available in Webster+?](Webster%20faq.htm#Mark3)**

**[Is a demo application available for experimenting with Webster+?](Webster%20faq.htm#Mark4)**

 

**Setup and Configuration**

**[How do I install Webster+?](Webster%20faq.htm#Mark5)**

**[Does Webster+ include any CSS-related configuration options?](Webster%20faq.htm#Mark6)**

**[Which Web servers are compatible with Webster+?](Webster%20faq.htm#Mark7)**

**[What is the _Force JS/CSS Reload_ option in Webster+ configuration?](Webster%20faq.htm#Mark8)**

 

**CSS Hierarchy**

**[What is the CSS hierarchy (or order of specificity) in Webster+?](Webster%20faq.htm#Mark9)**

**[What is the recommended approach for applying CSS in Webster+ applications?](Webster%20faq.htm#Mark10)**

 

**Inline CSS**

**[Can I apply inline CSS within Webster+?](Webster%20faq.htm#Mark11)**

**[Where would I use inline CSS?](Webster%20faq.htm#Mark12)**

**[Does inline CSS override my other external CSS style sheet?](Webster%20faq.htm#Mark13)**

**[If I have multiple elements that are the same, such as <h2 style= >, and I use inline style, will this affect my other <h2> elements?](Webster%20faq.htm#Mark14)**

 

**Internal/Embedded CSS**

**[Can I use internal CSS (<style> tags) with Webster+?](Webster%20faq.htm#Mark15)**

 

**Development**

**[How do I troubleshoot a Web page?](Webster%20faq.htm#Mark16)**

 

**Security**

**[Does Webster+ support Two-Factor Authentication?](Webster%20faq.htm#Mark17)**

**[What utilities does Webster+ provide for security management?](Webster%20faq.htm#Mark18)**

**[Are there tools for managing user access in Webster+?](Webster%20faq.htm#Mark19)**

**[Can I generate dynamic HTML pages with Webster+?](Webster%20faq.htm#Mark20)**

** **

##  What is Webster+?

Webster+ is a toolset designed for creating browser-only applications and facilitating Web page generation and Web site setup. It uses a REST-style interface and includes various setup/configuration tools, a menu system, and a security framework.

##  How does Webster+ handle Cascading Style Sheets (CSS)?

Webster+ follows standard CSS specificity rules. Inline styles have the highest specificity, followed by internal/embedded styles, and then external styles. When rules have the same specificity, the one declared last takes precedence.

##  What templating options are available in Webster+?

Webster+ supports both generic and custom templates for page rendering, giving developers control over the layout and structure of their Web applications.

##  Is a demo application available for experimenting with Webster+?

Yes. Click the following link to access a Webster+ demo application: [ **Test Drive Webster+**](https://testdrive.pvxplus.com/).

##  How do I install Webster+?

See **[Webster+ Setup and Configuration](Webster%20Setup.md)** for details on installing and setting up Webster+.

##  Does Webster+ include any CSS-related configuration options?

Yes. The Webster+ Setup provides configuration options to include custom CSS code or a URL to an external CSS file that applies to all pages. See **[Customizations](General%20Configuration.htm#customizations)**.

##  Which Web servers are compatible with Webster+?

Webster+ is compatible with **[Apache](../apache.md)**, **[EZWeb Server](../EZWebServer/EZweb%20Introduction.md)** and **[IIS](Webster%20Setup.htm#iis_setup)**.

##  What is the _Force JS/CSS Reload_ option in Webster+ configuration?

This option is used mainly for development testing to disable browser caching of CSS and JavaScript files. It ensures that your latest changes are reflected immediately without requiring a hard refresh or clearing of the browser cache.

##  What is the CSS hierarchy (or order of specificity) in Webster+?

The order of CSS rules that affect your page are:

**_External CSS Files_** |  This is placed in the **< head>...</head>** section using the **< link>** tag. Any matching tags in this file are overridden from the **default.css**.  
---|---  
**_Internal/Embedded CSS_** |  This is the **< head>...</head>** section within the **< style> </style>** tags.  
**_Inline CSS_** |  This is the highest specificity and is applied directly to an HTML element using the **style** attribute. **_Example:_**    <p style="color: blue;"></p>  
  
#### **Note:**  
If two rules have the same element, the rule that appears later in the stylesheet or linked files will be applied.

See **[How to Work with Styles in Webster+](../How%20To/How%20to%20Work%20with%20Styles%20in%20Webster.md)**.

##  What is the recommended approach for applying CSS in Webster+ applications?

External CSS is highly recommended for Webster+ applications, just as it is for general Web development. It promotes maintainability, enhances reusability, and supports separation of concerns. It also makes debugging easier.

**_Syntax Example:_**

Add the **< link rel="stylesheet" href="path/to/your/styles.css">** tag within the **< head> </head>** section of your HTML.

##  Can I apply inline CSS within Webster+?

Yes. Inline CSS (using the **style** attribute directly on elements) is possible within Webster+. However, it is generally discouraged due to poor maintainability and specificity issues.

**_Syntax Example:_**

<p style="color: blue;"></p>

##  Where would I use inline CSS?

You would use it inside the opening HTML tag of the element it styles.

**_Syntax Example:_**

<p style="color: blue;"></p>

This will change all **< p> </p>** elements content, the color blue.

##  Does inline CSS override my other external CSS style sheet?

Yes. It has the highest priority among all CSS styling methods: inline, internal/embedded, and external.

##  If I have multiple elements that are the same, such as <h2 style= >, and I use inline style, will this affect my other <h2> elements?

No. The style applies only to that specific element and does not affect any others.

##  Can I use internal CSS (<style> tags) with Webster+?

Yes. You can embed **< style> </style>** tags within the **< head>...</head>** section of your Webster+ HTML templates. This is an option for page/element specific styles or smaller applications, but external CSS is a preferred method for site-wide consistency.

##  How do I troubleshoot a Web page?

This can be done by using a couple of different methods.

You can press the **F12** function key while on the Web page to open the **DevTools** window.

Alternatively, you can open Webster+ **Setup** , go to the system **Config** page, select **Misc.** and set the _Enable MSGBOX directive_ option. This allows you to add message boxes to your code.

##  Does Webster+ support Two-Factor Authentication?

Yes. Webster+ offers optional two-step authentication (TFA) that can use SMS or email verifications for enhanced security.

##  What utilities does Webster+ provide for security management?

Webster+ includes a security system that manages user registration, password control, and SMS/email interfaces for security-related tasks. See **[System Security](General%20Configuration.htm#security)**.

##  Are there tools for managing user access in Webster+?

Yes. Webster+ includes various site management tools to handle user registrations, access control, and security settings effectively.

See **[General Configuration](General%20Configuration.md)**, **[User Maintenance](User%20Maintenance.md)** and **[Security Maintenance](Security%20Maintenance.md)**.

##  Can I generate dynamic HTML pages with Webster+?

Yes. It allows the creation of dynamic HTML 5 compatible pages using **[Short Codes](Short%20Codes.md)**, enhancing the versatility of Web applications.

 

 

 
