// Datadog is cloud Monitoring as a Service, where you can
// see metrics from all of your apps, tools & services in
// one place with Datadog's cloud monitoring as a service
// solution.
//
// This example streams the events sent to the api.
//
// Please see these for more information:
//
// http://docs.datadoghq.com/api/
// https://github.com/brettlangdon/node-dogapi for more details

var dogapi = require('dogapi');

var options = {
  api_key: '<YOUR API KEY>',
  app_key: '<YOUR APP KEY>',
};

var api = new dogapi(options);

var end = parseInt(new Date().getTime() / 1000);
var start = end - 86400;

api.stream(start, end, function(error, result, status_code){
  if(error){
    console.log('Error: ', error);
    console.log('Status Code: ', status_code);
    return;
  }

  result['events'].forEach(function(event){
    console.log(event['id'] + ': ' + event['title']);
  });
});
