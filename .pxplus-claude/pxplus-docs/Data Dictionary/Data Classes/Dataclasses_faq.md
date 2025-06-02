# Data Classes

**Frequently Asked Questions**|   
---|---  
  
This page provides answers to some commonly asked questions about Data Classes:

**[What is a _dynamic_ data class?](Dataclasses_faq.htm#Mark1)**  
---  
**[What is the difference between a dynamic data class and one that isn't dynamic?](Dataclasses_faq.htm#Mark9)**  
**[Will entering a dynamic data class for a control make all properties dynamic?](Dataclasses_faq.htm#Mark2)**  
**[After installing PxPlus 2018, will existing data classes become dynamic?](Dataclasses_faq.htm#Mark3)**  
**[Can I make existing data classes and control properties dynamic?](Dataclasses_faq.htm#Mark4)**  
**[Why are certain control properties no longer available after making another property dynamic?](Dataclasses_faq.htm#Mark5)**  
**[I saved a control with the wrong data class. How can I fix this?](Dataclasses_faq.htm#Mark6)**  
**[I set up a data class with an Expression. Why doesn't it work at run time?](Dataclasses_faq.htm#Mark7)**  
**[I deleted a data class that was still assigned to a control. How can I fix this?](Dataclasses_faq.htm#Mark8)**  
**[I need to apply a data class to multiple controls in different panels. How can I do this?](Dataclasses_faq.htm#Mark10)**  
  
##  What is a _dynamic_ data class?

A data class is defined as **_dynamic_** when selecting the _Dynamic_ check box in **[Data Class Definitions](Overview.htm#Mark1)** maintenance. This option is used to control the default setting for individual control properties when the dynamic data class is entered for a control in NOMADS.

When a dynamic data class is entered for a control, some control properties are initially set to _Dynamic_ and assigned a **%NOMADS'class'** variable that corresponds to a data class field. This setting allows the values of these properties to be based on what is defined in the data class at run time, which makes any future changes significantly easier. See **[Dynamic Control Properties](Dynamic.htm#Examples)** for examples.

## What is the difference between a dynamic data class and one that isn't dynamic?

Both data classes load information into a control's properties. One difference has to do with how individual control properties are defaulted when the data class is entered for a control. A dynamic data class sets the initial default for some control properties to _Dynamic_ with a **%NOMADS'class'** variable, while a data class that is **_not_** dynamic does not do this but leaves the property set as is.

Another difference is that at run time, only dynamic control properties are evaluated and populated with values based on what is defined in the data class. Control properties that are not dynamic are **_not_** rendered at run time.

## Will entering a dynamic data class for a control make all properties dynamic?

No. Only certain properties, depending on the control type, can be made dynamic. See **[Dynamic Control Properties](Dynamic.htm#dynamic)** for a list of dynamic control properties by control type.

When a dynamic data class is entered for a control, some control properties initially default to _Dynamic_ but can be **_manually_** changed on a property by property basis if desired.

When a data class that is **_not_** dynamic is entered for a control, individual control properties can be **_manually_** set to _Dynamic_ if applicable.

##  After installing PxPlus 2018, will existing data classes become dynamic?

No. **_Existing_** data classes will not become _Dynamic_ automatically after installing PxPlus 2018. However, you can decide which existing data classes to make dynamic by selecting the _Dynamic_ check box in **[Data Class Definitions](Overview.htm#Mark1)** maintenance. Keep in mind that you will need to reapply the data class for any existing NOMADS controls with that data class. This is done by using the _Reapply Data Class_ button (next to the _Class_ field in the control properties window).

#### **Note:**  
To apply data class changes simultaneously to controls in multiple panels in a single library or in multiple libraries within a specified directory, use the **[Library Bulk Edit and Search](../../NOMADS%20Graphical%20Application/NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)** utility.

**_New_** data classes created **_after_** installing PxPlus 2018 will default the _Dynamic_ check box to **_On_**. Deselect this check box if you do not want the data class to be dynamic.

##  Can I make existing data classes and control properties dynamic?

Yes. This involves the following steps:

1. |  To make an existing data class **_dynamic_** , select the _Dynamic_ check box in **[Data Class Definitions](Overview.htm#Mark1)** maintenance.  
---|---  
2. |  Access the properties for the specific control in the **[NOMADS Panel Designer](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Introduction.md)**.  
3. |  If the _Class_ field is blank, enter the dynamic data class and save the changes to make the appropriate control properties dynamic. If the data class was previously entered, the _Dynamic_ check box will already be selected. Click the _Reapply Data Class_ button (next to the _Class_ field) and respond _Yes_ to the displayed message. This will copy current information from the dynamic data class to the control's properties and make the appropriate control properties dynamic.

#### **Note:**  
To apply data class changes simultaneously to controls in multiple panels in a single library or in multiple libraries within a specified directory, use the **[Library Bulk Edit and Search](../../NOMADS%20Graphical%20Application/NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)** utility.  
  
4. |  Save the changes.  
  
##  Why are certain control properties no longer available after making another property dynamic?

When two or more control properties are related, making one property dynamic while related properties are not dynamic may cause unexpected results. To avoid this, all related control properties must be either **_all_** dynamic (and locked) or **_all_** not dynamic to be in agreement with the property that was changed.

**_Example:_**

If a control property (i.e. _List Values_ on the **Display** tab for a Drop Box or List Box) is changed to _Dynamic_ , then all related properties (i.e. _Default Setting_ and _Translation Table Values_ on the **Values** tab) will be _Dynamic_ (and locked) to be in agreement with the changed property (i.e. _List Values_). If the _List Values_ property is not dynamic, then all related control properties will not be dynamic and not locked.

##  I saved a control with the wrong data class. How can I fix this?

Fixing this involves the following steps:

1. |  Access the properties for the specific control in the **[NOMADS Panel Designer](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Introduction.md)**.  
---|---  
2. |  Enter the correct data class in the _Class_ field, and then respond _Yes_ to the displayed message. This will copy current information from the data class to the control's properties.  
3. |  Save the changes.  
  
## I set up a data class with an Expression. Why doesn't it work at run time?

The expression used must be evaluated at run time. To ensure that the variable is populated correctly, global variables are often used as part of the expression. These global variables **_must_** be populated before the panel is displayed; i.e. in the _Pre-Display_ logic for a panel.

## I deleted a data class that was still assigned to a control. How can I fix this?

Deleting a dynamic data class assigned to controls with dynamic properties may cause unexpected results at run time. The reason is that at run time, values for dynamic control properties are based on what is defined in the data class. Without a data class, the dynamic control properties will likely have no values.

On the other hand, if the data class was **_not_** dynamic (_Dynamic_ check box was not selected in **Data Class Definitions** maintenance), deleting it should have no adverse effects. The reason is that information from the data class is used to load the control properties and is not dynamically changed at run time.

You cannot restore the deleted data class. It has to be re-created in **[Data Class Definitions](Overview.htm#Mark1)** maintenance and then reapplied using the _Reapply Data Class_ button (next to the _Class_ field in the control properties window) to copy the current information from the data class to the control's properties.

##  I need to apply a data class to multiple controls in different panels. How can I do this?

This is easily accomplished using the **[Library Bulk Edit and Search](../../NOMADS%20Graphical%20Application/NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)** utility. This utility provides the capability to apply a data class simultaneously to controls in multiple panels in a single library or in multiple libraries within a specified directory.
