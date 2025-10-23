# NOMADS Graphical Application

**Multilingual Capabilities** |  **__**  
---|---  
  
To create a multilingual application, different methods are available. One method is to retrieve all messages exclusively from message libraries that can be switched depending on language. The other method involves supplying different versions of panel and message libraries for each language. System defaults and default variables can also be set up to facilitate switching languages.

A system that retrieves messages exclusively from message libraries can easily be made multilingual. The messages in the libraries can supply text for panels, message boxes and programs. You need only to supply message library files in different languages with the appropriate language suffix. Message libraries can be translated manually by copying an existing message library and translating them using **[Message Library Maintenance](../Message%20Library%20Maintenance/Overview.md)**. For example, the system message library, _*msglib.en_ , can be copied to a new name such as _*msglib.fr_ and the messages translated to French.

PxPlus also has a **[Library Language Translator](Library%20Language%20Translator/Overview.md)** that can be used to translate message libraries. You can change the default language suffix in **[System Defaults](../System%20Maintenance%20Tools/System%20Options/System%20Defaults.md)** or **[%NOMAD_Def_Sfx$](../Appendix/NOMADS%20Variables/Overview.htm#def_sfx)** to the language suffix to implement the required language.

Sometimes, simply changing the message is not sufficient when switching languages. Due to the different lengths of messages in different languages, for example, panels must sometimes be manipulated to suit the translation. In these cases, you may want to have separate panel libraries for each language. The **Library Language Translator** utility can be used to create a duplicate library with translated text. This utility is also useful if you have not used message library references on your panel definitions.
