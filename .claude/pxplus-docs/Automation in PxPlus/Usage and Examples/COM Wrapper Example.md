# Usage and Examples  
  
**COM Wrapper Example**|   
---|---  
  
Sometimes, you may find it necessary to build a COM wrapper for a third-party application/library, particularly if you want to subscribe to an event from a third-party application/library. A COM wrapper is simply a COM interface built around the third-party application/library.

The best way to understand how to build a COM wrapper is to look at an example. For this purpose, PVX Plus Technologies has created a simple application/library and a COM wrapper, as well as a PxPlus object for handling the COM event and a PxPlus program for testing. This example demonstrates how to build a COM wrapper and subsequently use it to have PxPlus subscribe to a third-party application/library event.

The components that were created for this example can be downloaded as a ZIP archive using this link: **[SimpleCOM.zip](http://www.pvxplus.com/downloads/misc/SimpleCOM.zip)**.

The **SimpleCOM.zip** archive consists of the following:

**SimpleCOM** Visual Studio Solution |  This solution contains the two projects listed below and can be used to build both of them. |  1\. **SimpleApp** Application/Library Project |  The app consists of a simple window with a button that displays the number of times it has been clicked. The app class has a public event that is triggered when the button is clicked. It also has a public property for the count displayed on the button and a public method for resetting the count to zero.  
---|---  
2\. **SimpleCOM** COM Wrapper Project |  This is the COM class definition that creates a SimpleApp instance and provides a COM interface.  
**SimpleCOMEvents** PxPlus Class Code |  This was generated using the PVXTLB.EXE application on the SimpleCOM interface. The generated code was then modified to display to the screen that the click event was received.  
**SimpleCOMTest** PxPlus Program |  Run this program to instantiate the SimpleCOM object and subscribe to the click event.  
  
After running this code, you should see the SimpleApp displayed. You can click the button to increase the count. Each time you click the button, you should see a message displayed in PxPlus that the click event was received. You can also use PxPlus to access the Count property and call the reset method (i.e. **simplecom'reset( )** , **print simplecom'count**).  
  
For this example, comments have been inserted in the code, so you may find it very helpful to review the code to gain a better understanding of how to build a COM wrapper.

As you go through this example, keep the following points in mind:

  * When the SimpleCOM project is built, it automatically registers the COM object/wrapper for you.
  * When deploying the COM object/wrapper, you will need to register it using a command such as **"regasm /tlb /codebase SimpleCOM.dll"**.



_(This COM Wrapper example was added in PxPlus 2016.)_
