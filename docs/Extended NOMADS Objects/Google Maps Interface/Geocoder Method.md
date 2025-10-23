# Google Maps Interface  
  
**Geocoder Method**|   
---|---  
  
Geocoding is the process of converting human-readable addresses (e.g. "42 Scenic Drive, Yourtown, ON") into geographic coordinates (e.g. latitude 44.123456 and longitude -79.654321), which you can use to place markers or position the map.

The process of translating a location on a map to a human-readable address is known as _reverse geocoding_. Both processes are available using the two formats of the **geocode$( )** method.

**Method** |  **Description**  
---|---  
**geocode$(**_address$_**)** |  Given a human-readable address, returns a string containing the corresponding latitude and longitude in degrees, separated by a comma. The resulting latitude and longitude are also loaded into the **[geocodeLatitude](Map%20Events_%20Methods_Properties.htm#geocodelat)** and **[geocodeLongitude](Map%20Events_%20Methods_Properties.htm#geocodelong)** properties.  
**geocode$(**_lat_ _, lng, level_**)** |  Given a latitude, longitude and level, returns the corresponding human-readable address. The level indicates how specific or general the resulting address will be, with 0 being the most specific.

#### **Note:**  
The geocoder will attempt to find the closest addressable location, within reason. If none exists, a null string is returned.
