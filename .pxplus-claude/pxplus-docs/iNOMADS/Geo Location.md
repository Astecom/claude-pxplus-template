# iNomads

**Geo Location**|   
---|---  
  
Applications are capable of determining the end-user Geo Location (latitude/longitude). This feature is provided through the use of the sub-routine **"*plus/inomads/geolocate"**.

## Format

**CALL** "*plus/inomads/geolocate", _ctl_id_

**_Where:_**

_ctl_id_ |  CTL identifier for the input control that will receive the longitude/latitude  
---|---  
  
Once the call is issued, the system will ask the browser to determine its location. The actual request will run behind the scenes on the browser, and when the location is known or cannot be determined, the control whose value was provided will be filled in with the result (in JSON format) and an On Change event will be generated.

## Results

The Latitude and Longitude returned as JSON data:

> {"latitude": nnn.nnnnnnn, "longitude": nnn.nnnnnnn}

If an error occurs, returns JSON with "error" value of:

__ |  _"Unsupported"_ |  Device does not support Geo Location  
---|---|---  
__ |  _"Denied"_ |  User refused request  
__ |  _"Unavailable"_ |  Cannot determine location  
__ |  _"Timeout"_ |  Took too long to determine location
