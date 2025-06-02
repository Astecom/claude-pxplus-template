# System Parameters

**'BI'** |  **_Browser Incognito Mode_**  
---|---  
  
## Description

The **'BI'** parameter controls whether or not the embedded Chromium browser runs in **_incognito_** mode. In incognito mode, the browser does not store or cache anything, which means that cookies, form input data and search history are not saved.

The value of the **'BI'** parameter is read the first time an embedded Chromium browser is created.

If this parameter is **_On_** , the embedded browser and any subsequent embedded browsers created for that process will be in incognito mode.

If this parameter is **_Off_** , the embedded browser and any subsequent embedded browsers created for the current process will **_not_** be in incognito mode.

_(The**'** BI' system parameter was added in PxPlus 2017 Update 0001.)_

## Default

**_On_** All Chromium browsers created will be in incognito mode.

## See Also

[***BROWSER Chromium Browser Object**](../utilities/browser.md)
