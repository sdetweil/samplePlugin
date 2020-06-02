var __pn = document.currentScript.src.split('/').slice(-2, -1)[0];

angular.module("SmartMirror") //,['ngAnimate']
                              // here we are injecting the actual dependencies
                              // where to get the list of available function to inject
	.controller(__pn+"Controller",['$scope','$http','$timeout','$interval',__pn+'Service','SpeechService',
    function (scope,
              // here we are using the injected dependencies
              // these are logical names, for the variables in the function call
              http,
              timeout,
              interval,
              // inject our service module address
              ourService,
              SpeechService) {
        // call some worker function
        // every 30 seconds
        interval(()=>{
           // call some function
           some_function();
           // set a one time timer  every 15 seconds to clear the scope value
           // just an example how to turn on and turn off results
           timeout(()=>{scope.sample_scope_text=""},15*1000)
           },
           30*1000)

        // call some other function
        function some_function(){
          let some_parm="1";
            some_other_function(some_parm)
        };
        // call out service to get data and set the scope for the html
        function some_other_function(some_parms){
            scope.sample_scope_text= ourService.getContent();
        }

        function command_handler(voice){
          console.log(" command handler called extra words="+voice)
          scope.sample_scope_text=voice
        }
        // commandId is the text string of the element in the locale/commands section
        // previously translated
        SpeechService.addCommand ("sample command entry", command_handler);
        // can be used if u dynamically translate
        // pass the translated elements, voice, text, and text
        // the text and description will be added to the what can I say list
        if(false) {
         SpeechService.addRawCommand (voice, command_handler, Description, Text)
        }

    }
   ])

