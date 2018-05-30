const Hapi = require('hapi');
const server = new Hapi.Server({  
    host: 'localhost',
    port: 7000
  })

var sampleHandler = function(request, reply) {
    return 'Hello To Node HAPI server';
};
var sampleHandlerWithPathVariable = function(request, reply) {
    return 'Hello '+request.params.name;
};
var sampleHandlerWithQueryParameter = function(request, reply) {
    return 'Hello '+request.query.name;
};
var sampleHandlerWithPostPayload = function(request, reply){
    return 'Hello '+request.payload.name;
}
var routes = [
{
    path: '/api/share',
    method: 'GET',
    handler: sampleHandler
},
{
    path: '/api/share/{name}',
    method: 'GET',
    handler: sampleHandlerWithPathVariable
},
{
    path: '/api/share/query',
    method: 'GET',
    handler: sampleHandlerWithQueryParameter
},
{
    path: '/api/share',
    method: 'POST',
    handler: sampleHandlerWithPostPayload
}
];
server.route(routes)

server.start(function() {
    console.log("Started server at " + JSON.stringify(server.info));
});