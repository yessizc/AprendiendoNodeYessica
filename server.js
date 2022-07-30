/*var http = require('http'); //para crear el puerto en local hostt en este caso puerto 8888
var server = http.createServer(
    function(request, response) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("Hola Mundo");
        response.end();
    });
server.listen(8888,
    function() {
        console.log("ready");
    });*/

var http = require("http");

function iniciar() {
    function onRequest(request, response) {
        console.log("Petición Recibida.");
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("Hola Mundo");
        response.end();
    }
    http.createServer(onRequest).listen(8889);
    console.log("Servidor Iniciado.");
}
exports.iniciar = iniciar; // se le da exportar para que tosdos los archivos que lo necesiten lo usen

/*var http = require("http"); // funcion para ejecutar como un ciclo

function onRequest(request, response) {
    console.log("Peticion Recibida.");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("Hola Mundo");
    response.end();
}
http.createServer(onRequest).listen(8888);
console.log("Servidor Iniciado.");*/