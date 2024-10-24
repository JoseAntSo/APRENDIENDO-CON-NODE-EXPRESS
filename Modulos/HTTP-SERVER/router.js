//importamos del modulo http para crear un servidor

import { createServer } from "http";

//creamos el servidor 

const server = createServer((require,response)=>{
    console.log(require);

//controlamos el objeto require(haciendo referencia a la peticion) en la propiedad URL que el recurso que requiere acceder
//y devolvemos una respuesta, esta seria una forma de controlar que necesita

    if(require.url ==="/"){
        response.writeHead(200,{"Contente-Type": "text/html"})
        response.end("Ruta principal");
    } else if (require.url === "/hola"){
        response.writeHead(200,{"Contente-Type": "text/html"})
        response.end("Ruta HOLA");
    } else if (require.url === "/anashe"){
        response.writeHead(200,{"Contente-Type": "text/html"})
        response.end("Ruta Anassheeee");
    } else {
        response.writeHead(404,{"Contente-Type": "text/html"})
        response.end("DONDE ENTRASTE MAN?!!! CUAL FLASHAS!");
    }
})

server.listen(4000, "127.0.0.1",()=>{
    console.log("server en port 4000");
})