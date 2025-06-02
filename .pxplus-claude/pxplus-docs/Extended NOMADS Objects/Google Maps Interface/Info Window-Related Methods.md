# Google Maps Interface

**Info Window-Related Methods**|   
---|---  
  
An info window is a text bubble that can be displayed at a given location or connected to a marker.

Below is a list of the info window-related methods supported by the PxPlus Google Maps Extended Control.

**Method** |  **Description**  
---|---  
**closeInfoWindow(**_iw_id_**)** |  Closes the info window with the specified identifier.  
**getInfoWindowContent $(**_iw_id_**)** |  Returns the text content of the info window with the specified identifier.  
**getInfoWindowLatitude(**_iw_id_**)** |  Returns the latitude in degrees of the info window with the specified identifier.  
**getInfoWindowLongitude(**_iw_id_**)** |  Returns the longitude in degrees of the info window with the specified identifier.  
**getInfoWindowPosition $(**_iw_id_**)** |  Returns a comma-separated string specifying the latitude and longitude (in degrees) of the info window with the specified identifier.  
**setInfoWindowContent(**_iw_id_ _, content$_**)** |  Sets the content to be displayed in the specified info window. This can be a plain-text string or a string containing HTML.  
**setInfoWindowPosition(**_iw_id_ _, lat, lng_**)** |  Moves the info window with the specified identifier to the indicated latitude and longitude.  
**showInfoWindow(**_lat_ _, lng, content$_ **[**_,zIndex, disableAutoPan_**])** **showInfoWindow(**_markerid_ _, contents$_ **[**_,zIndex, disableAutoPan_**])** |  Displays an info window with the given content at the specified latitude and longitude, or at the marker with the specified identifier. Returns a numeric identifier to be used when referencing the info window in info window-related methods. Optional arguments include: |  _zIndex_ |  Info windows are displayed in order of their zIndex, with higher values displaying in front of info windows with lower values. By default, info windows with lower latitudes take precedence.  
---|---  
_disableAutoPan_ |  Disables the default auto-pan behaviour that makes the info window fully visible when it is initially displayed.
