# Utility Routines

***OBJ/PARAM** |  **_Parameter Object_**  
---|---  
  
## Usage

The ***obj/param** object is used to create, load and maintain an independent object consisting of just the parameters as defined in a **_Definition File_** :

> oParam=new("***obj/param** ",_pathname$_)

**_Where:_**

_pathname_ _$_ is the path to a parameter **_Definition File_**. When this object is created, all the parameters defined within the **_Definition File_** will be created and initialized within the object.

Once the parameter object has been created, you can load the parameter values by using the **'Load ( )** method as follows:

> sts=oParam**'Load**(_pathname$_)

**_Where:_**

_pathname_ _$_ is the path to a **_Settings File_** whose values will be loaded in the parameter object. A status of 1 is returned if the load was successful; otherwise, this function will return 0.

The **'Edit ( )** method in the parameter object can be used to edit a **_Settings File_** :

> sts=oParam**'Edit**(_pathname$_)

**_Where:_**

_pathname_ _$_ is the path to a **_Settings File_** whose values will be presented to allow for editing by the parameter object. The system will use the **_Definition File_** that was passed in during object creation. A status of 1 is returned if the edit was successful; otherwise, this function will return 0.

_(The Parameter object *OBJ/PARAM was added in PxPlus 2020.)_

## Example

For this example, suppose that you want a parameter object for the file ***win/nomads_properties.txt**. (The ***win/nomads_properties.txt** file is an existing PxPlus system **_Definition File_** that was created for the **[NOMADS Environment Maintenance](../NOMADS%20Graphical%20Application/Maintain%20Nomads%20Environment.md)** utility to maintain %NOMADS object properties.)

You could create the object as follows:

> oParam=new("*obj/param","*win/nomads_properties.txt")

Suppose you now want to edit these parameters and save them to a file called "MyParam.txt". You would issue the following:

> oParam'Edit("MyParam.txt")

This would provide you with a generic parameter maintenance panel to allow you to edit all the parameters as defined in the **_Definition File_** "*win/nomads_properties.txt" and to save these in the **_Settings File_** "MyParam.txt". If this file already existed, the parameter settings found in this file would be loaded into the maintenance grid.

Once you have a **_Settings File_** , you can use the **'Load** method to set the values into the object as follows:

> oParam'Load("MyParam.txt")

## See Also

**[Property Maintenance](../NOMADS%20Graphical%20Application/Property%20Maintenance.md)**
