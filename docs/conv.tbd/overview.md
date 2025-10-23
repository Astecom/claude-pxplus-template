# Conversion Utilities

**Toolkit for Conversion from Thoroughbred**|   
---|---  
  
This section outlines the steps required to convert an existing Thoroughbred application to PxPlus. The toolkit described herein is located in the _*conv.tbd_ directory and consists of a number of programs, which convert the programs and data files.

#### **Note:**  
The _*conv.tbd_ directory will be found in the _lib_ directory where PxPlus was installed along with the various other system utilities, the system will replace the _asterisks_ ( ***** ) with _underscores_ ( **_** ). For the purposes of this documentation, it is assumed that PxPlus has been installed in _/pxplus_ thus *conv.tbd will be in _/pxplus/lib/_conv.tbd_.

This section covers the following topics:

> [**Contents of *conv.tbd Directory**](contents.md)

> [**Step-by-Step Conversion Process**](stepbystep.md)

> [**Prepass Conversion Files**](prepass.md)

> [**Converting Data Files**](dataconv.md)

> [**Converting the Data Dictionary**](dictconv.md)

> [**IPLINPUT and TERMINAL File Conversion**](iplinput.md)

> [**FINPUT Emulation**](finput.md)

The following system parameters setting should be reviewed when running converted programs:

  * System parameter [**'47'**](../parameters/47.md) that emulates the error 47 suppression logic found in Thoroughbred
  * Options to have **CLOSE (0)** close all files when the system parameter [**'FF'**](../parameters/ff.md) (_FID Format_) is set to Thoroughbred emulation
  * System parameter [**'+5'**](../parameters/plus5.md) forces line numbers to be output as five digits for compatibility



A few additional PxPlus specific features can also help:

  * The [**DROP**](../directives/drop.md) directive allows either the original program name (as supplied on the **[ADDR](../directives/addr.md)** directive) or absolute pathname as given in the PUB function
  * The [**INPUT**](../directives/input.md) directive allows for the inclusion of both simple string variables in a validation list for an input



**_Example:_**

> INPUT @(5,5),X$:(YES$ =1000, NO$ =2000)

Thoroughbred is a registered trademark of Thoroughbred Software International, Inc.
