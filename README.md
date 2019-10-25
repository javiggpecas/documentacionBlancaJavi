# Documentacion Blanca Javi
> ### Página con documentación sobre tecnologías FRONT

![Front Logo](./src/assets/images/logo-front.png "Front Logo")

## Authors

* **Blanca Ros San Juan** - [BlancaRos](https://github.com/BlancaRos)
* **Javier García González** - [javiggpecas](https://github.com/javiggpecas)

## Empezando

Es necesario tener instalado [Node JS](https://nodejs.org/es/), luego se instala Angular CLI (`npm i @angular/cli`) y a continuacion se ejecuta `npm i` para instalar las librerias que necesita la PWA.

Ejecute `ng serve` para iniciar el servidor de desarrollo. Navege a `http://localhost:4200/`.

### Building the project
Ejecute `ng build` para obtener un compilado del proyecto. El proyecto generado se almacenará en la carpeta `/dist`. Use la flag `-prod` para realizar la compilación en modo producción.

## Internet Explorer

Estan habilitados tos los polyfills necesarios para que la PWA funcione en IE.

Para poder iniciar la aplicacion en Internet Explorer es necesario ejecutarla en ECMAScript 5 (ES5) mediante el comando:
    
    ng serve --configuration es5
