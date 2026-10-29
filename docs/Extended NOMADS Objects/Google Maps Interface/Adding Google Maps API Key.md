# Google Maps Interface

**Adding a Google Maps API Key**|   
---|---  
  
As of July 2018, if you are not a client of the Google Maps APIs Premium Plan, Google requires you to have a Google Maps API Key to do development using the Google Maps APIs. Without an API Key, the maps and their features are still functional, but the map display is darkened and displays a "For development purposes only" watermark. In addition, a message box with the text "This page can't load Google Maps correctly" is displayed.

To display the maps cleanly, you must obtain an API Key from Google and apply that key when using the PxPlus Google Maps interface.

For information about obtaining a Google Maps API Key, visit **<https://developers.google.com/maps/documentation/javascript/get-api-key>**. (Be sure to activate it for Maps and Routes.)

Once you have a key, you **_must_** apply it to the PxPlus Google Maps interface. As of PxPlus 2018 Update 1, the PxPlus Google.Maps object has an **[APIkey$](Map%20Events_%20Methods_Properties.htm#apikey)** property that you can set to do this.

This can be set by using **_one_** of the following two methods:

> **_Method 1:_**

> Set the **APIkey$** property in the NOMADS map definition in the **[External Control Properties](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/COM%20Control/COM%20Control.htm#COMcontrol)** window. The API Key for each client will be different, so an expression would most likely be used to supply the value for the **APIkey$** property. This would have to be done for each map definition.

> **_OR_**

> **_Method 2:_**

> Leave the **APIkey$** property blank in the map definition and simply load the **%GoogleAPIkey$** variable with the API Key value prior to displaying any maps (such as in the START_UP program). The PxPlus Google.Maps object will retrieve the key value from this variable and set the **APIkey$** property automatically without having to change any definitions or code

Your maps should display cleanly once the API Key is in place.

## See Also

**[Google Maps Interface Extended Control](Google%20Maps%20Interface%20Overview.md)**

 

 

 
