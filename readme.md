# Sample Plugin

This sample smart-mirror plugin is intended to provide a working sample, and show how the parts fit together

# plugin files
- config.schema.json (optional)
  
    defines the configuration schema for your plugin. 
    You can look at example schema and test your own at https://smart-mirror.io/playground/
    see the form documentation here https://github.com/jsonform/jsonform/wiki
  * the sample provides a single text string to be used by the plugin
    if not supplied, the service provides a default message string
- index.html - *required* if there is content to display
    the html portion for your plugin.  this should use angular directives to generate the plugin content
    This must be added to the main index.html to determine where it will be rendered.
    * the sample plugin uses this to display the text string managed by the controller
- controller.js - *required* for mgmt of any data displayed
    All of the angular controller logic (data binding) for your plugin. 
    This must be manually included in a script tag in the main index.html. 
    It is acceptable to write Node here.
    * the controller requests info from the service, and places that in the scope data 
      that the index.html will access to display
- service.js - *optional*, typically used for gathering data 
    should your plugin need an angular service 
    This must be manually included in a script tag in the main index.html
    * the service accesses the configuration data for this plugin and returns a text string to the caller
- plugin.css - *optional* if you want to customize  the look and feel of your pl
    the Cascading StyleSheet file dedicated to this plugin
    the entries here should start with your plugin name, preceded by a dot
    .samplePlugin (using the sample plugin name)

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

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
