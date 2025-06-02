# iNomads

**Bar Code Reading**|   
---|---  
  
Bar code reading interfaces to ZXing (Zebra Crossing) bar code reader, which is available on most current Android smartphones/tablets (requires Ice Cream Sandwich or newer) and to a limited extent, iPhone/iPads. The interface works by examining the image of the bar code using the front facing camera on the device and analysing the image to detect bar codes.

## Supported Bar Codes

For the Android device, the following codes are supported: UPC-A/E, EAN-8/13, Code 39/93/128, ITF, Codabar, QR code. Currently, iPad/iPhone only supports QR Code.

For more information, visit [**http://code.google.com/p/zxing**](http://code.google.com/p/zxing/).

## Invocation Methods

Two methods are provided to invoke the scanner software:

  * The _first_ method is a callable routine that will initiate the scanner and return the value directly to an application variable.
  * The _second_ method provides the ability to scan bar codes directly into input fields on the current panel in response to a button on the panel caption line being selected.



**_Callable Routine_**

> **call "*plus/inomads/scanner"** , _return_value_ _$_ , _codes$_

**_Where:_**

_return_value_ _$_ |  Variable that will receive the returned bar code value.  
---|---  
_codes$_ |  A comma-separated list of bar codes that you want the software to look for. Valid code types are: AZTEC, CODABAR, CODE_39, CODE_93, CODE_128, DATA_MATRIX, EAN_8, EAN_13, ITF, MAXICODE, PDF_417, QR_CODE, RSS_14, RSS_EXPANDED, UPC_A, UPC_E. (Default = "UPC_A,EAN_13")  
  
## Built-in Caption Line Scan Button

This button must be enabled in the template definition in the _Misc_ tab (see **[Template Configuration Maintenance](Template%20Configuration.md)**) where you can provide a list of browsers that, if detected, will have the scan button enabled _(Default: Android),_ along with a list of acceptable bar codes.

The button on the caption line will only be enabled on unformatted input fields and only on the browsers named. If the user selects the _Caption Line_ button, the current input field is automatically filled in with scanned data and an On Change event will be initiated with EOM="S".
