# Running Your Application  
  
**Overriding Controls**|   
---|---  
  
Often, when migrating a desktop application to run on the Web, there are controls that you may not want to provide to the end user. Typical examples would be interfaces to desktop applications such as Microsoft Word or Excel.

iNomads provides a mechanism that allows you to override specific controls in order to hide or disable them. In addition, you can change other attributes of the control such as altering the control class. This is done by specifying an _Override_ file in the system configuration.

The Override file is a simple text file that contains the names of the controls you want to modify and what you change.

**_Example:_**

To disable the control BT_OFFICE in all forms, you would include the line:

> BT_OFFICE=Disable

To hide this control, the line would be:

> BT_OFFICE=Hide

If desired, you can also include a PxPlus command to be executed prior to the control being created. This would allow you change any number of elements such as the size, position or control class. The command will be executed just after iNomads reads the NOMADS panel definition into memory, providing you access to all the control attributes.

**_Example:_**

The following example would change the class of the control to BUDGETS:

> BT_BUDGETS=_OBJ_CLASS$="BUDGETS"

To change the size (height, which is in _OBJ_H) of a control, you could code something like:

> LB_HISTORY=_OBJ_H=_OBJ_H*1.3

#### **Note:**  
Lines starting with a # will be considered comment lines in the Override file.

## Selecting Controls by Panel

By default, the system will apply the overrides to all controls with the name specified. If desired, you can restrict the override to controls in a specific panel. This is done by appending the panel name and option panel library name to the control name. These should each be separated by a / _(slash)._

**_Example:_**

To only override the control BT_OFFICE in a panel whose name is 'MainPanel' and in a library whose pathname is 'AppLib', you would specify:

> BT_OFFICE/MainPanel/AppLib=HIDE

#### **Note** :  
Both the panel and library name are case insensitive. In addition, the library name should **_not_** include the library file suffix (normally .EN).

## Sample Override File

The following file is included with iNomads in the file _*plus/inomads/overrides.conf'_ :

> # Sample Override file.  
>  #  
>  # This is a sample override file which can be used to control fields (by name) that  
>  # will be hidden, disabled or otherwise modified.   
>  #  
>  # To edit a field place its field name followed by an equal sign and option in this file.  
>  #  
>  # If the option is HIDE the field will be hidden, if DISABLE then the field will be disabled, any  
>  # other option will be taken as a PxPlus command to execute. It can change the values in _OBJ_...  
>  # from the Nomads library  
>  #   
>  # By default all occurrences of a NOMADS field of this name will be effected. If desired the  
>  # you can append a slash and a specific panel name and optionally an additional slash and the  
>  # specific library name.   
>  #  
>  # (Note: The library name uses only the simple file name with no suffix for example scrnlib.en would be scrnlib)  
>  #  
>  # Samples:  
>  #  
>  # BT_MAIL=Disable  
>  # ... Disables all controls with the name BT_MAIL  
>  #  
>  # BT_OFFICE/MainPanel/AppLib=HIDE   
>  # ... Hides the control BT_OFFICE on the panel MainPanel in any library applib.*  
>  #  
>  # Field, panel and library names are case insensitive.  
>  #
