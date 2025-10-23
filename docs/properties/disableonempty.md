# Control Object Properties

**DisableOnEmpty** |  **_Auto-Disable List When Empty_**  
---|---  
  
## Description

Auto-disable list when empty

This property can be set to have the system automatically disable a list style control (list box, list view, report view or drop box) if the list contents are empty -- that is, there are no potential selections for the user to select. Once the list is populated (with at least one entry), the list box will be re-enabled.

This setting is independent of the **['Enabled](enabled.md)** property; that is, if the list box is already forcibly disabled, adding entries to the list will not cause the list to be re-enabled.

## Default

0 - The list will **_not_** be automatically disabled.

## Used By

**DROP_BOX****LIST_BOX****LIST_VIEW****REPORT_VIEW**
