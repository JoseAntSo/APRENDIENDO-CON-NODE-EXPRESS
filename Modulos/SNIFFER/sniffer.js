//importamos los modulos para crear un servidor y realizar peticiones
import {createServer, get} from "http";

//configuramos el servidor esta es una forma abreviada
/*
const hostname = "localhost",
    port = 3000,
    options = {
        host: "jonmircha.com",
        port: 80,
        path: "/cursos"
    };
*/
// 1 ### configuracion de servidor de manera tradicional
const hostname = "localhost";
const port = 3000;

// 2 ##### parametros necesarios para realizar la peticion HTTP
const options = { 
    host: "jonmircha.com",
    port: 80,
    path: "/cursos"
}

//variable para almacenar el codigo HTML recibido.
let htmlCode = "";


// 3 ----- funcion donde maneja la respuesta del cliente
const httpClient = res =>{
    console.log(`El sitio ${options.host} ha respondido. Codigo ${res.statusCode}. Mensaje: ${res.statusMessage}`);
    
    //en el caso que la funcion tenga una respuesta favorable, utilizaremos el evento data que captura informacion respecto a la peticion
    res.on('data',data => {

        //almacenamos la informacion de esa respuesta
        htmlCode += data;
        //mostramos dicha informacion capturada
        console.log(data);
    })
}

// 4 **** Funcion que maneja en caso de haber un error o inconveniente en la solicitud
const httpError = err =>{
    console.error(`El sitio ${options.host} no ha respondido. Codigo: ${err.code}. Mensaje: ${err.message}`);
}

// 5 ***** Se define el servidor web, podemos guiarnos de la carpeta de http-server
const webServer = (req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.end(htmlCode);
}

//Aqui se realiza la solicitud GET  y si hay algun error utilizamos la funcion que controla el error 4 *****
get(options,httpClient).on("error",httpError);


//Creacion del servidor utilizando 5 *****, utilizamos como guia la carpeta http-server. Con respecto a metodo listen 1 #### 
createServer(webServer).listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}/`)
})