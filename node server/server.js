var httpServer = require("http");
var url = require("url");
function iniciar(route, handle) {
    function onRequest(request, response) {
        var dataPosteada = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Petición para " + pathname + " recibida.");
        request.setEncoding("utf8");
        request.addListener("data", function(trozoPosteado) {
            dataPosteada += trozoPosteado;
            console.log("Recibido trozo POST '" + trozoPosteado + "'.");
        });

        request.addListener("end", function() {
            route(handle, pathname, response, dataPosteada);
        });
    }
    httpServer.createServer(onRequest).listen(8888);
    console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;

/* function decir(palabra) {
    console.log(palabra);
}

function ejecutar(algunaFuncion, valor) {
    algunaFuncion(valor);
}

ejecutar(decir, "Servidor Iniciado."); */


/* console.log('hola mundo Node!');
for (var i=0; i<10; i++) {
    console.log('hola mundo ' + i);
}
setTimeout(function() {
    console.log('Hola NodeJS');
}, 3000);
console.log(global); */