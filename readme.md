# Sample Plugin

This sample smart-mirror plugin is intended to provide a working sample, and show how the parts fit together.

**note** smart-mirror Version 0.27 and up auto loads plugins, and the plugin location configuration (bottom of the confiuration web page) will determine where the plugin content (if any) is displayed

# plugin files
- config.schema.json (optional **maybe**)

    defines the configuration schema for your plugin. All plugins that have configuration requirements, **MUST** provide this file. which is used to generate the configuration web page
    to collect, save and provide editing of plugin configuration information.

    You can look at example schema and test your own at https://smart-mirror.io/playground/
    see the form documentation here https://github.com/jsonform/jsonform/wiki
  * the sample provides a single text string to be used by the plugin.
    If not supplied, the service provides a default message string<br>
      **config.schema.json.tr is the version that supports translation in smart-mirror v 0.28 and above,**
      **note** the schema NAME in this file will be used during translation to match items in the locale/language files.


- index.html - *required* if there is content to display
    the html portion for your plugin.  this should use angular directives to generate the plugin content    
    * the sample plugin uses this to display the text string managed by the controller<br>


- controller.js - *required* for mgmt of any data displayed
    All of the angular controller logic (data binding) for your plugin.
    It is acceptable to write Node here.
    * The controller requests info from the service, and places that in the scope data
      that the index.html will access to display<br>


- service.js - *optional*, typically used for gathering data
    should your plugin need an angular service    
    * the service accesses the configuration data for this plugin and returns a text string to the caller<br>


- plugin.css - *optional* if you want to customize  the look and feel of your plugin.
    The Cascading StyleSheet file dedicated to this plugin.    

- locales/*.json<br>
      this folder contains the files used for translation of the UI and for the config UI
      each locale ??.json file has the same three parts
    1. the schema name matching the config.schema.json (if any)
    2. a section under the schema, 'config',
            which contains the keys and strings of the translated items for the config screen.
            it is recommended to key the top level title of the  schema not translated to keep a consistent placment in the config output across all the languages.. the schemas are sorted alphabetically, except for explicit ordering in the form section

    3. an optional key to identify items belonging to this plugin. this is an arbitrary string. that would be used in the display of any content on the smart-mirror display (usually field labels) these could be included under the schema, item 1, separately from the config section.
    the **light** plugin has a lot of text used to display
    4. the commands, section which contains a group of objects with three defined tags
        1. voice
                voice is the words the user says to invoke this command

                the syntax of the voice string is, for example from the spotify plugin<br>

                "(tell) **spotify** (to) **play** (\*query)",<br>      

                (tell), (to) and (*query) are optional.

                the required words are  **spotify play** <br>

                **(*query)** returns any other words to the function handler callback assigned for this command
        2. text
                the sample voice required for this command
        3. description
                the text description of what this command will do

        2 and 3  are the items added to the 'What Can I say' list for user information.

        the **fitbit** plugin locales have no commands, and the **timer** plugin locales have no config section

#       Installation

      1. file Installation
        * cd to smart-mirror/plugins
        * then git clone https://github.com/sdetweil/samplePlugin
          this will create a folder named samplePlugin
      2. configuration         
        * after starting smart-mirror, open the configuration app
          and you will see the Sample Plugin heading.
        * expand the heading to expose the single entry field

        **Message string**
        enter some text to be displayed

      3. output placement
        by default, smart-mirror adds new plugins to the middle_center area.

        * expand the **Plugin location Settings section**
        * click the + sign to create a new entry
        * use samplePlugin for the plugin name (match the folder name created by git clone)
        * select a location from the Location dropdown
        * click the Active checkbox on
        * then press submit to save and active these changes


### Tech

smart-mirror uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [node.js] - evented I/O for the backend
* [jsonform] - awesome web-based text editor

----

License
----

MIT

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [jsonform]: <https://github.com/jsonform/jsonform/wiki>
   [node.js]: <http://nodejs.org>
   [AngularJS]: <http://angularjs.org>
