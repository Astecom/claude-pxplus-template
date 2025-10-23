# Multilingual Capabilities

**Cascading Language Suffixes** |  **__**  
---|---  
  
**_Prior to PxPlus v10_** , the standard usage of the **[PROCESS](../../../directives/process.md)** directive was to include a panel name and library name with a language suffix, and if the library was omitted, then the current library was used.

**_As of PxPlus v10_** , the previous usage is still supported, but enhanced language suffix handling now allows you to:

  * Specify alternate library suffixes to try in case the library or panel is not found.
  * Specify a generic library (i.e. without a language suffix), in which case the default and alternate suffixes are tried in turn.



Some examples are provided below.

## Example 1

To process a panel in "scrnlib", as in:

> PROCESS "MYPANEL","scrnlib"

If the default suffix is set to "en" and alternate suffixes to "fr,es,", then the system will attempt to find the panel in the following libraries until successful: _scrnlib_ _, scrnlib.en, scrnlib.fr, scrnlib.es_.

## Example 2

To process a panel in "scrnlib.xx", as in:

> PROCESS "MYPANEL","scrnlib.xx"

If the default suffix is set to "en" and alternate suffixes to "fr,es,", then the system will attempt to find the panel in the following libraries until successful: _scrnlib.xx_ _, scrnlib.en, scrnlib.fr, scrnlib.es_.

## Example 3

If no library is specified, as in:

> PROCESS "MYPANEL",""

then the last accessed library is used. If the last accessed library is _scrnlib.xx_ and the default and alternate suffixes are as above, then the system will attempt to find the panel in libraries in the same way as the first example.

The default and alternate suffixes are defined in the **[NOMADS System Defaults](../../System%20Maintenance%20Tools/System%20Options/System%20Defaults.md)**. Language suffixes are two characters long, and in the case of alternate suffixes, multiple language suffixes are defined in a comma-separated list (e.g. en, fr, es,). The default suffix may also be set in the **[%NOMAD_Def_Sfx$](../../Appendix/NOMADS%20Variables/Overview.htm#def_sfx)** variable, and alternate suffixes may be set using the **[%NOMAD_Alt_Sfx$](../../Appendix/NOMADS%20Variables/Overview.htm#alt_sfx)** variable. Setting the global variable overrides NOMADS System Defaults settings. Language suffixes are case-sensitive; therefore, the "scrnlib.EN" library would not be found by specifying a suffix as "en" on a UNIX/Linux system.

Generic library names (i.e. with no suffix) can be specified in the **[NOMADS Designer](../../Panel%20Designer/Introduction.md)** when specifying/associating **[Panels](../../Panel%20Designer/Panel%20Header/Overview.md)**, **[Queries](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.md)**, **[Popup Menus](../../Creating%20Panel%20Controls/Popup%20Menu/Overview.md)**, **[Menu Links](../../Creating%20Panel%20Controls/Menu%20Bar/Menu%20Link.md)**, **[Embedded Panels](../../Creating%20Panel%20Controls/Embedded%20Panels/Overview.md)**, **[Events Logic](../../Program%20Interaction/Events%20Logic/Actions%20and%20Parameters.md)**, etc. _(as of PxPlus v11.00)_

When a library path is specified, it is processed as follows:

  * Paths are simplified based on the current directory and prefixes.
  * System library references are simplified (i.e. _/pxplus/lib/_rpt/rpt.en_ is simplified to _*rpt/rpt.en_).
  * Library suffixes that match that of the current library are replaced with *****  _(asterisk)_.
  * **\**  _(backslashes)_ are replaced with **/**  _(forward slashes)_.


