# Webster+ How To Tutorials

**How to Work with Styles in Webster+ (CSS)**|   
---|---  
  
Webster+ supports the use of CSS to enhance the appearance of Web pages generated from your applications. Below are some key points on how CSS can be used within Webster+.

Webster+ offers several methods for applying styling. Use these links to access additional information:

  |  **[Method 1:"CSS File URL" Option](How%20to%20Work%20with%20Styles%20in%20Webster.htm#method1):**  
---|---  
  |  **[Method 2:"Custom CSS" Option](How%20to%20Work%20with%20Styles%20in%20Webster.htm#method2):**  
  |  **[Method 3: Standard Inline Styling](How%20to%20Work%20with%20Styles%20in%20Webster.htm#method3):**  
  |  **[Method 4: Short Code Option "class=xxx"](How%20to%20Work%20with%20Styles%20in%20Webster.htm#method4)**  
  |  **[Method 5: Webster+ Defined Classes](How%20to%20Work%20with%20Styles%20in%20Webster.htm#method5)**  
  |  **[Method 6: Webster+ Short Codes](How%20to%20Work%20with%20Styles%20in%20Webster.htm#method6)**  
  |  **Method 7: Standard HTML, CSS, and JavaScript**  
  
All custom CSS currently comes from the **_style.css_** file located on the PxPlus server.

The examples below show the various ways you can use custom styles within **Webster+ Setup** > **Customizations**.

##  Method 1: "CSS File URL" Option

Much like the standard external style sheet rules, you can enter a link to the location of the external **_style.css_** file.

You must enter the full path, including **http://** (or **https://** if secure). If the path is not a valid URL, the library prefix _docroot_  **/lib** will be the default directory listed for the style sheet.

Enter the URL in the **[CSS File URL](../Webster/General%20Configuration.htm#cssfileurl)** option. To access this option, go to **Webster+ Setup** , choose **Config** from the top menu, and then select **Customizations**.

During run time, the bind logic will add the style sheet to the page using the path you provided and include it on every page.

**_Example:_**

    

##  Method 2: "Custom CSS" Option

Much like the standard embedded/internal style, you can enter CSS code directly in the **[Custom CSS](../Webster/General%20Configuration.htm#customcss)** option.

    

The CSS code you enter will be appended to the current rules in the **< style> </style>** section located in the **< head>...</head>** section.

Any rules that exist for selectors already found in the **< style> </style>** section will be overridden.

During run time, the bind logic will add the style sheet to the page using the path you provided and include it on every page.

In the example below, the background of every page will now be lightblue:

    

##  Method 3: Standard Inline Styling

Whether you are coding HTML in Webster+ or outside of PxPlus, inline CSS works the same way.

Inline CSS is a method of applying unique styles to a single HTML element directly within the HTML tag itself. It uses the **< style>** attribute inside the HTML tag to declare CSS properties and their values.

#### **Note:**  
The main disadvantage of inline styling is that it applies only to the individual HTML element on a particular HTML page. If you want to use the same styles on other pages, you must copy and paste the entire **< style>** block into each element on every page. This is inefficient, leads to a lot of repetitive code, and can be time-consuming.

A preferred method for defining styles is to use a separate style sheet file, reference a class or ID label, or code within the **< head><style> </style> </head>** section of an HTML document.

**_Syntax Example:_**

     <element style="property: value; property2: value2;">Text</element>

    

##  Method 4: Short Code Option "class=xxx"

Many Webster+ short codes support the short code option, **class=_xxx_**. See **[Short Code Options](../Webster/Short%20Code%20Options.md)**.

This value can consist of a single class name or multiple class names, separated by spaces or commas. If spaces are used, they must be enclosed in double quotes.

**_Example:_**

This example applies both the **text-center** and **bold-text** styles:

     <p class="text-center bold-text">This is centered and bold.</p>

##  Method 5: Webster+ Defined Classes

Webster+ provides several dynamic classes that automatically generate corresponding CSS rules. These classes do not need to be defined in your CSS files. They will be automatically created by the binding logic and included in the page.

For descriptions of these classes including examples, see **[Webster+ Defined Classes](../Webster/Webster%20Defined%20Classes.md)**.

##  Method 6: Webster+ Short Codes

Short codes are processed by a binding utility, which replaces the short codes in the HTML documents with the necessary HTML elements for rendering in a Web browser.

**Short Code** |  **Description**  
---|---  
**[css] [/css]** |  Inserts the contents of the short code into the **< head> </head>** or **< body> </body>** tags after any custom CSS. See **[Method 2: "Custom CSS" Option](How%20to%20Work%20with%20Styles%20in%20Webster.htm#method2)**. **_Example:_** <head>[css]body{background-color:red}[/css]</head> <body>[css]body{background-color:red}[/css]</body>  
**[cssfile** _file=xxx_**]** |  Inserts a CSS file link into the **< head> </head>** tags. **_Example:_** [cssfile file=./yourstyles/buttons.css]  
**[include** _filename_**]** |  Inserts the **< body> </body>** contents of a specified file. The _filename_ can be either a literal (e.g. "myfile.htm") or a string variable (e.g. myfile$). If _filename_ is null (""), then nothing is included, and the short code is ignored. **_Example:_** [include myfile.html]  
  
## See Also

**[Short Codes](../Webster/Short%20Codes.md)**

 

 

 
