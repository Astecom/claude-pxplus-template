# Utility Routines

***MAP** |  **_Display Google Map_**  
---|---  
  
## Invocation

**CALL "*map"** , _street$, city$, state$, country$_

**_Where:_**

_street$_ |  Required |  Input |  Street address  
---|---|---|---  
_city$_ |  Optional |  Input |  City  
_state$_ |  Optional |  Input |  State/Province  
_country$_ |  Optional |  Input |  Country  
  
## Description

This routine will use the Google Maps interface to display a popup window on the screen with the address specified.

While generally you pass four arguments to this routine, technically you can pass up to five parameters to define the address as long as the logical order is from the smallest to the largest aspect of the address. Omitted portions, such as Country or State/Province, will be estimated by Google Maps; therefore, if you provide a state of "California", you do not need the country as the system will assume "USA".

**_Typical Calling Sequence:_**

> **CALL "*map"** , "_25 Centurian Blvd_.", "_Markham_ ", "_Ontario_ ", "_Canada_ "

#### **Note:**  
As with all other Google Maps interfaces, the system global variable **%GoogleAPIKey$** will need to be set to your API key as supplied by Google.

_(The Map utility was added in PxPlus 2022.)_
