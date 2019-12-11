var server = require("./node server/server");
var router = require("./node server/router");
var requestHandlers = require("./node server/requestHandlers");

var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);