# Extended NOMADS Objects

**TinyMCE HTML Editor**|   
---|---  
  
The TinyMCE HTML Editor is a PxPlus extended control that can be defined using the NOMADS Panel Designer. TinyMCE is a platform independent Web-based JavaScript HTML WYSIWYG Editor control released as Open Source under LGPL 2.1 by Tiny Technologies Inc. It provides an editing interface that resembles how the page will be displayed in a Web browser and does not require any HTML knowledge.

#### **Note:**  
As of PxPlus 2021, TinyMCE has been upgraded from version 4.9.2 to version 5.5.1.  
  
PVX Plus simply supplies an interface to the TinyMCE Editor and is **_not_** responsible for support in regards to the control itself. Internet access is not required.

The TinyMCE Editor control includes six pre-defined layouts **[Modern](Using%20the%20TinyMCE%20HTML%20Editor.htm#modern)**, **[Narrow](Using%20the%20TinyMCE%20HTML%20Editor.htm#narrow)**, **[Simple](Using%20the%20TinyMCE%20HTML%20Editor.htm#simple)**, **[Advanced](Using%20the%20TinyMCE%20HTML%20Editor.htm#advanced)**, **[Extended](Using%20the%20TinyMCE%20HTML%20Editor.htm#extended)** and **[Full Page](Using%20the%20TinyMCE%20HTML%20Editor.htm#fullpage)** \- that offer a wide range of editing tools. You can also create your own **[Custom Layout](Creating%20a%20Toolbar%20Layout.md)**. By default, the Editor output does not include **< html>** or **< body>** elements, but the _Modern_ and _Full Page_ layouts allow you to create full HTML pages. Tool bar layout must be set in the NOMADS TinyMCE Editor control definition and may not be changed dynamically after the control is drawn.

The **[allowScripts](Using%20the%20TinyMCE%20HTML%20Editor.htm#properties)** property can be used to allow editing of HTML with JavaScript elements and properties.

_(Support to allow editing of HTML with JavaScript was added in PxPlus 2021 Update 2.)_

As an extended control, the TinyMCE Editor control is not included in the tab sequence and does not have an OnChange event. The contents of the Editor may be loaded or retrieved via the control's _value$_ property.

For information about the TinyMCE HTML Editor, visit **<https://www.tiny.cloud/>**.

For license information, visit **<https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html>**.

#### **Note:**  
While it is possible to include multiple instances of the TinyMCE Editor control on a panel, this is **_not_** recommended, as the value of the contents of the individual controls may not be completely reliable when there is more than one Editor control.

## See Also

**[Using the TinyMCE HTML Editor](Using%20the%20TinyMCE%20HTML%20Editor.md)**   
**[HTML Editor](../../HTML%20Editor.md)**

TinyMCE is a registered trademark of Tiny Technologies Inc.
