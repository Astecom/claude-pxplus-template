# Grid Control 

**Grid Auto Complete** |  **__**  
---|---  
  
When the PxPlus **Auto Complete** feature is applied to a grid control, it predicts text as the user is entering it. When the control is accessed, users are prompted with the previously entered words/phrases or entries already in a data file as soon as they start to type. This is particularly useful for applications that require repetitive data entry.

When used in a grid, this feature will only work with a read-only file, and that file must exist on the server side. The option _Process on Server_ must be selected in the **[Auto Complete Definition](../../System%20Maintenance%20Tools/System%20Options/Auto%20Complete.htm#autocomplete_def)** dialogue.

Auto Complete can be suppressed at the application level by setting the NOMADS variable, **[%NOMADS_Suppress_Auc](../../Appendix/NOMADS%20Variables/Overview.htm#suppress_auc)**:

> %NOMADS_SUPPRESS_AUC=1

Auto Complete will be based on the internal key of the key file, and the key has to be case insensitive for this functionality to work correctly. If the key is case sensitive, all lowercase keys will be ignored. See **[KEYED](../../../directives/keyed.md)** directive for information on creating keyed files in PxPlus.

To define an Auto Complete definition, see **[Auto Complete](../../System%20Maintenance%20Tools/System%20Options/Auto%20Complete.md)**.
