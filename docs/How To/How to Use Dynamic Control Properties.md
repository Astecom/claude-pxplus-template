# How To Tutorials

**How to Use Dynamic Control Properties**|   
---|---  
  
Using Dynamic control properties in your application is an effective way to speed up new development. More importantly, when future enhancements are needed, integrating these changes into your application will be easier and less disruptive.

Dynamic control properties can be created for Multi-Lines, Drop Boxes, List Boxes and Check Boxes. When combined with data classes, dynamic control properties are ideally suited for data elements with similar properties in an application (i.e. dates, numeric codes, descriptions or lists of values).

## How to Create Dynamic Control Properties

These steps show you how to create dynamic control properties in combination with data classes.

1. |  From the IDE Main Launcher, expand the _Data Management_ category, and select _Data Class Definitions_. The **[Data Class Definitions](../Data%20Dictionary/Data%20Classes/Overview.htm#Mark1)** window is displayed.  
---|---  
2. |  Begin creating a **_dynamic_** data class. Enter the _Class Name_ and then select the _Control Type_. Dynamic data classes can be defined for Multi-Lines, Drop Boxes, List Boxes and Check Boxes, but not for Radio Buttons.  
3. |  The _Dynamic_ check box must be selected to define this as a **_dynamic_** data class.  
4. |  Enter the desired properties. The dynamic properties for each data class are identified with an ***** (_asterisk_).  
5. |  Click the _Write_ button. When the data class is saved, it is automatically created as **_dynamic_**.  
6. |  Once the dynamic data class has been created, it can be applied to the appropriate control(s). In the NOMADS Panel Designer, open the panel(s) and access the properties for the specific control. For the _Class_ field, enter the name of the dynamic data class or use the Query button (binoculars) to select it.

#### **Note:**  
You can only select a data class that is specific to that control type; i.e. Multi-Line data classes can only be applied to Multi-Line controls.  
  
7. |  All the information from the dynamic data class just entered will be copied to the control. In addition, certain control properties are created as **_dynamic_** automatically, as indicated by the **_Dynamic_** setting and by the **%nomads'class _field_** object property, which is locked.

#### **Note:**  
The settings for individual dynamic properties can be overridden at any time for each control.  
  
8. |  At run time, the values for the dynamic control properties will be rendered based on the contents of the data class. Once the data class is entered for the control, future changes are only required at the data class level.  
  
## How to Convert Non-Dynamic Data Classes and Controls to Dynamic Properties

These steps show you how to convert **_non-dynamic_** data classes and controls to **_dynamic_** properties. This is useful if you have non-dynamic data classes (where the _Dynamic_ check box is **_not_** selected) assigned to specific controls and you want to set the dynamic properties.

1. |  Open the **Data Class Definitions** window. Bring up the non-dynamic data class either by entering the _Class Name_ or by using the Query button (binoculars) to select it.  
---|---  
2. |  Select the _Dynamic_ check box. Make any additional modifications as required.  
3. |  Click the _Write_ button to save. The data class is now defined as **_dynamic_**.  
4. |  In the NOMADS Panel Designer, open the panel(s) and access the properties for the specific control that has this data class. The _Dynamic Class_ check box is selected.  
5. |  To make the control **_dynamic_** , click the _Reapply Data Class_ button (_left/right circular pointing arrows_) beside the _Class_ field.       
6. |  A message is displayed, asking if you want to continue. Respond _Yes_ to copy the current information from the data class to the control properties and make the appropriate properties dynamic.  
  
#### **Note:**  
This process of converting controls to dynamic can also be done by using the [**Library Bulk Edit and Search**](../NOMADS%20Graphical%20Application/NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.htm#dataclasses) utility.

## See Also

**[Dynamic Control Properties](../Data%20Dictionary/Data%20Classes/Dynamic.md)**

 

 

 
