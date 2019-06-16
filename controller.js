var pn = document.currentScript.src.split('/').slice(-2, -1)[0];

angular.module("SmartMirror") //,['ngAnimate']
                              // here we are injecting the actual dependencies
                              // where to get the list of available function to inject                              
	.controller(pn+"Controller",['$scope','$http','$timeout','$interval',pn+'Service', 
    function (scope, 
              // here we are using the injected dependencies
              // these are logical names, for the variables in the function call
              http, 
              timeout,
              interval,
              // inject our service address
              ourService) {
        // call some worker function   
        interval(()=>{
           some_function();
           timeout(()=>{scope.sample_scope_text=""},15*1000)
           },
           30*1000)
        
        function some_function(){
          let some_parm="1";
            some_other_function(some_parm)
        };
        function some_other_function(some_parms){
            scope.sample_scope_text= ourService.getContent();
        }
    }
   ])

    