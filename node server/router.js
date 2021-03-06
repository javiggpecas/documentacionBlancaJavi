function route(handle, pathname, response, postData) {
    console.log("A punto de rutear una peticion para " + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response, postData);
    } else {
        console.log("No se encontro manipulador para " + pathname);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("404 No Encontrado");
        response.end();
    }
}

exports.route = route;