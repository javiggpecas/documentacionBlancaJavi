# Documentacion Blanca Javi
> ### Página con documentación sobre tecnologías FRONT 

![Front Logo](https://github.com/javiggpecas/documentacionBlancaJavi/blob/master/src/assets/images/logo-front.png?raw=true "Front Logo")

## Authors

* **Blanca Ros San Juan** - [BlancaRos](https://github.com/BlancaRos)
* **Javier García González** - [javiggpecas](https://github.com/javiggpecas)

## URL Web Site

La web se encuentra alojada en un servidor propio de este repositorio (GitHub) la url es la siguiente: [DocumetnacionBlancaJavi](https://javiggpecas.github.io/documentacionBlancaJavi)

## Empezando

Es necesario tener instalado [Node JS](https://nodejs.org/es/), luego se instala [Angular CLI](https://cli.angular.io/) (`npm i @angular/cli`) y a continuacion se ejecuta `npm i` para instalar las librerias que necesita la PWA.

Ejecute `ng serve` para iniciar el servidor de desarrollo y navege a `http://localhost:4200/`.

### Building the project
Ejecute `ng build` para obtener un compilado del proyecto. El proyecto generado se almacenará en la carpeta `/dist`. Use la flag `-prod` para realizar la compilación en modo producción.

### HTTP-SERVER instalar PWA
Es necesario tener instalado [http-server](https://www.npmjs.com/package/http-server) `npm i http-server -g` y haber compilado el proyecto en modo producción `ng build --prod`.

En la carpeta creada en `/dist/nombre-proyecto` se ejecuta el siguiente comando para crear un servidor en el pc capaz de ejecutar el compilado:

    http-server -p 8080

Una vez iniciado google chrome se selecciona la opccion instalar en la barra de navegación:

![Ejemplo instalar Google Chrome](https://github.com/javiggpecas/documentacionBlancaJavi/blob/master/src/assets/images/install-chrome-pwa.jpg?raw=true "Boton Instalar Chrome")

## Internet Explorer

Estan habilitados todos los polyfills necesarios para que la PWA funcione en IE.

Para poder iniciar la aplicacion en Internet Explorer es necesario ejecutarla en ECMAScript 5 (ES5) mediante el comando:
    
    ng serve --configuration es5

## Compilar y subir a Web Site 
<img src="https://github.com/javiggpecas/documentacionBlancaJavi/blob/master/src/assets/images/githubpageslogo.png?raw=true" data-canonical-src="https://github.com/javiggpecas/documentacionBlancaJavi/blob/master/src/assets/images/githubpageslogo.png?raw=true" alt="GitHub Pages" title="GitHub Pages" width="100"/>

Para poder realizar la subida y despliegue de la aplicación en la ruta [DocumentacionBlancaJavi](https://javiggpecas.github.io/documentacionBlancaJavi) es necesario modificar el archivo `manifest.webmanifest` y modificar 
`"start_url": "/",` resultando `"start_url": "/documentacionBlancaJavi/",` .

A continuacón se compila el proyecto Angular mediante el comando:

    ng build --prod --base-href="#"

Para realizar la subida a la rama que contiene el proyecto compilado (`gh-pages`) y realizar el despliegue es necesario tener instalado `angular-cli-ghpages` con el siguiete comando

    npm install -g angular-cli-ghpages

Entonces se sube el compilado a la rama con el soguiente comando:

    ngh --dir=dist/documentacion-blanca-javi

Para ver el estado del despliegue se tiene que estar en la pagina de github del proyecto en la pestaña `environment`.

## <img src="https://github.com/javiggpecas/documentacionBlancaJavi/blob/master/src/assets/images/compodoc-vectorise.png?raw=true" data-canonical-src="https://github.com/javiggpecas/documentacionBlancaJavi/blob/master/src/assets/images/compodoc-vectorise.png?raw=true" alt="Compodoc" title="Compodoc" width="150"/>

Compodoc es un generador de Documentación el cual va a leer los archivos de tu proyecto en Angular y va a generar una Documentación simple y elegante que va contener sus bloques de construcción junto con los comentarios que tengas en los mismos. [Fuente: NG ClassRoom](https://blog.ng-classroom.com/blog/ionic/compodoc-documentacion_ionic_apps/)

Para poder realizar la documentación es necesario instalar la librería. (De manera global se instalará para poder usarlo en otros proyectos a futuro)

    npm install -g @compodoc/compodoc

Una vez instalado se ejecuta para generar la documentacion con el comando:

    compodoc -p src/tsconfig.app.json -s

En la carpeta `documentation` se generará una página con toda la documentación generada por la herramienta compodoc.

Hay 6 tipos de temas en compodoc ([Temas Compodoc](https://compodoc.app/guides/themes.html)):

    - Gitbook (default)
    - Laravel (--theme laravel)
    - Readthedocs (--theme readthedocs)
    - Stripe (--theme stripe)
    - Vagrant (--theme vagrant)
    - Postmark (--theme postmark)  