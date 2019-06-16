var pn = document.currentScript.src.split('/').slice(-2, -1)[0];

angular.module("SmartMirror")
	.factory(pn+"Service", 
  function (
          // injected functions
          // where to get the list of available function to inject
          /* $http, 
          $timeout*/   
          ) {
       var service={};
       
       // sample function to return data to controller caller
       service.getContent = function() {
           if(config[pn] !== undefined && config[pn].message !== undefined)
             return config[pn].message
           else
             return "some sample content retrieved from service"
       }
       return service;
    }
  )